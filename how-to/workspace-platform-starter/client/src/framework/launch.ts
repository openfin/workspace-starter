import type OpenFin from "@openfin/core";
import {
	WindowType,
	getCurrentSync,
	type BrowserSnapshot,
	type BrowserWorkspacePlatformWindowOptions,
	type Page
} from "@openfin/workspace-platform";
import { launchConnectedApp } from "./connections";
import * as endpointProvider from "./endpoint";
import { createLogger } from "./logger-provider";
import { MANIFEST_TYPES } from "./manifest-types";
import {
	bringViewToFront,
	bringWindowToFront,
	doesViewExist,
	doesWindowExist,
	findViewNames
} from "./platform/browser";
import type {
	NativeLaunchOptions,
	PlatformApp,
	PlatformAppIdentifier,
	UpdatableLaunchPreference,
	ViewLaunchOptions,
	WindowLaunchOptions
} from "./shapes/app-shapes";
import * as snapProvider from "./snap";
import { isEmpty, isStringValue, isValidUrl, objectClone, randomUUID } from "./utils";

const logger = createLogger("Launch");

/**
 * Launch an application in the way specified by its manifest type.
 * @param platformApp The application to launch.
 * @param launchPreference launchPreferences if updatable for your the application.
 * @returns Identifiers specific to the type of application launched.
 */
export async function launch(
	platformApp: PlatformApp,
	launchPreference?: UpdatableLaunchPreference
): Promise<PlatformAppIdentifier[] | undefined> {
	try {
		logger.info("Application launch requested", platformApp);

		if (isEmpty(platformApp)) {
			logger.warn("An empty app definition was passed to launch");
			return [];
		}
		const app = objectClone(platformApp);

		const platformAppIdentities: PlatformAppIdentifier[] = [];
		switch (app.manifestType) {
			case MANIFEST_TYPES.External.id:
			case MANIFEST_TYPES.InlineExternal.id: {
				const platformIdentity = await launchExternal(app);
				if (platformIdentity) {
					platformAppIdentities.push(platformIdentity);
				}
				break;
			}
			case MANIFEST_TYPES.Appasset.id:
			case MANIFEST_TYPES.InlineAppAsset.id: {
				const platformIdentity = await launchAppAsset(app);
				if (platformIdentity) {
					platformAppIdentities.push(platformIdentity);
				}
				break;
			}
			case MANIFEST_TYPES.InlineView.id:
			case MANIFEST_TYPES.View.id: {
				const platformIdentity = await launchView(app, launchPreference);
				if (platformIdentity) {
					platformAppIdentities.push(platformIdentity);
				}
				break;
			}
			case MANIFEST_TYPES.Window.id:
			case MANIFEST_TYPES.InlineWindow.id: {
				const platformIdentity = await launchWindow(app, launchPreference);
				if (platformIdentity) {
					platformAppIdentities.push(platformIdentity);
				}
				break;
			}
			case MANIFEST_TYPES.Snapshot.id:
			case MANIFEST_TYPES.InlineSnapshot.id: {
				const identities = await launchSnapshot(app);
				if (identities) {
					platformAppIdentities.push(...identities);
				}
				break;
			}
			case MANIFEST_TYPES.Manifest.id: {
				const manifestApp = await fin.Application.startFromManifest(app.manifest);
				const manifestUUID = manifestApp?.identity?.uuid;
				if (!isEmpty(manifestUUID)) {
					platformAppIdentities.push({
						uuid: manifestUUID,
						name: manifestUUID,
						appId: app.appId
					});
				}
				break;
			}
			case MANIFEST_TYPES.DesktopBrowser.id: {
				await fin.System.openUrlWithBrowser(app.manifest);
				break;
			}
			case MANIFEST_TYPES.Endpoint.id: {
				if (endpointProvider.hasEndpoint(app.manifest)) {
					const identity = await endpointProvider.requestResponse<{ payload: PlatformApp }, OpenFin.Identity>(
						app.manifest,
						{ payload: app }
					);
					if (isEmpty(identity)) {
						logger.warn(
							`App with id: ${app.appId} encountered when launched using endpoint: ${app.manifest}.`
						);
					} else {
						platformAppIdentities.push({ ...identity, appId: app.appId });
					}
				} else {
					logger.warn(
						`App with id: ${app.appId} could not be launched as it is of manifestType: ${app.manifestType} and the endpoint: ${app.manifest} is not available.`
					);
				}
				break;
			}
			case MANIFEST_TYPES.Connection.id: {
				logger.info(
					"An app defined by a connection (connected app) has been selected. Passing selection to connection"
				);
				const identity = await launchConnectedApp(app);
				if (!isEmpty(identity)) {
					platformAppIdentities.push({ ...identity, appId: app.appId });
				}
				break;
			}
			default: {
				logger.error("We do not support the manifest type so this app cannot be launched.", app);
			}
		}

		logger.info("Finished application launch request");
		return platformAppIdentities;
	} catch (err) {
		logger.error("Failed during application launch request", err);
	}
}

/**
 * Bring the applications views to the front.
 * @param platformApp The application to bring to the front.
 * @param platformAppIdentifiers Additional app identifiers to bring to the front.
 */
export async function bringToFront(
	platformApp: PlatformApp,
	platformAppIdentifiers: PlatformAppIdentifier[]
): Promise<void> {
	switch (platformApp.manifestType) {
		case MANIFEST_TYPES.External.id:
		case MANIFEST_TYPES.InlineExternal.id:
		case MANIFEST_TYPES.Manifest.id:
		case MANIFEST_TYPES.DesktopBrowser.id:
		case MANIFEST_TYPES.Endpoint.id:
		case MANIFEST_TYPES.Connection.id: {
			logger.info(`Bringing apps of type: ${platformApp.manifestType} to front is not supported.`);
			break;
		}
		case MANIFEST_TYPES.InlineView.id:
		case MANIFEST_TYPES.View.id: {
			if (Array.isArray(platformAppIdentifiers) && platformAppIdentifiers.length === 1) {
				await bringViewToFront({ identity: platformAppIdentifiers[0] });
			} else {
				logger.warn(
					`A request to bring a view app to front was received but we didn't receive exactly one identity for app: ${platformApp.appId}.`
				);
			}
			break;
		}
		case MANIFEST_TYPES.Window.id:
		case MANIFEST_TYPES.InlineWindow.id: {
			if (Array.isArray(platformAppIdentifiers) && platformAppIdentifiers.length === 1) {
				await bringWindowToFront({ identity: platformAppIdentifiers[0] });
			} else {
				logger.warn(
					`A request to bring a window app to front was received but we didn't receive exactly one identity for app: ${platformApp.appId}.`
				);
			}
			break;
		}
		case MANIFEST_TYPES.UnregisteredApp.id: {
			if (Array.isArray(platformAppIdentifiers) && platformAppIdentifiers.length === 1) {
				// isView - this should be the majority of cases for an unregistered app
				let isView = true;
				try {
					const view = fin.View.wrapSync(platformAppIdentifiers[0]);
					const viewInfo = await view.getInfo();
					logger.info("View Info", viewInfo);
				} catch {
					isView = false;
				}
				if (isView) {
					await bringViewToFront({ identity: platformAppIdentifiers[0] });
				} else {
					await bringWindowToFront({ identity: platformAppIdentifiers[0] });
				}
			} else {
				logger.warn(
					`A request to bring a window app to front was received but we didn't receive exactly one identity for app: ${platformApp.appId}.`
				);
			}
			break;
		}
		case MANIFEST_TYPES.Snapshot.id: {
			if (Array.isArray(platformAppIdentifiers) && platformAppIdentifiers.length > 0) {
				for (const identity of platformAppIdentifiers) {
					await bringViewToFront({ identity });
				}
			} else {
				logger.warn(
					`A request to bring a snapshot app to front was received but we didn't receive at least one view for app: ${platformApp.appId}.`
				);
			}
			break;
		}
		default: {
			logger.error(
				"We do not support the manifest type so this app cannot be brought to front.",
				platformApp
			);
		}
	}
}

/**
 * Get the platform app identifiers of all the views in a window.
 * @param name The identity name of the window.
 * @param uuid The identity uuid of the window.
 * @param appId The application to map the view identities with.
 * @returns List of platform app identifiers.
 */
async function getViewIdentities(
	name: string,
	uuid: string,
	appId: string
): Promise<PlatformAppIdentifier[]> {
	const identity = { uuid, name };
	const win = fin.Window.wrapSync(identity);
	const views = await win.getCurrentViews();
	const viewIdentities = views.map((view) => ({ ...view.identity, appId }));
	await win.setAsForeground();
	return viewIdentities;
}

/**
 * Get a manifest as either a string or a specific object type.
 * @param platformApp The application to get the manifest from.
 * @returns The manifest object.
 */
function getInlineManifest<T>(platformApp: PlatformApp): T {
	if (typeof platformApp.manifest === "string" && platformApp.manifest.startsWith("{")) {
		return JSON.parse(platformApp.manifest) as T;
	}

	return platformApp.manifest as T;
}

/**
 * Get a manifest from a url.
 * @param platformApp The application to get the manifest from.
 * @returns The manifest object.
 */
async function getManifest<T>(platformApp: PlatformApp): Promise<T | undefined> {
	const platformEndpointId = getManifestEndpointId();
	const appEndpointId = getManifestEndpointId(platformApp.appId);
	let targetEndpointId: string | undefined;

	if (endpointProvider.hasEndpoint(appEndpointId)) {
		targetEndpointId = appEndpointId;
	} else if (endpointProvider.hasEndpoint(platformEndpointId)) {
		targetEndpointId = platformEndpointId;
	}
	try {
		if (isEmpty(targetEndpointId)) {
			const manifestResponse = await fetch(platformApp.manifest);
			const manifest = (await manifestResponse.json()) as T;
			return manifest;
		}
		const endpointManifest = await endpointProvider.requestResponse<{ url: string; appId: string }, T>(
			targetEndpointId,
			{ url: platformApp.manifest, appId: platformApp.appId }
		);

		return endpointManifest;
	} catch (error) {
		logger.error(
			`There was an error while trying to fetch the manifest: ${platformApp.manifest} for appId: ${platformApp.appId}`,
			error
		);
	}
}

/**
 * Generates an endpoint id for fetching manifests.
 * @param appId if an appId is specified then the endpointId is specific for fetching this app's manifest
 * @returns the Id that should be used for an endpoint lookup
 */
function getManifestEndpointId(appId?: string): string {
	const platformManifestEndpoint = "manifest-get";
	if (isEmpty(appId)) {
		return platformManifestEndpoint;
	}
	return `${platformManifestEndpoint}-${appId}`;
}

/**
 * Launch a window for the platform app.
 * @param windowApp The app to launch the window for.
 * @param launchPreference Optional custom launch preferences
 * @returns The identity of the window launched.
 */
async function launchWindow(
	windowApp: PlatformApp,
	launchPreference?: UpdatableLaunchPreference
): Promise<PlatformAppIdentifier | undefined> {
	if (isEmpty(windowApp)) {
		logger.warn("No app was passed to launchWindow");
		return;
	}

	if (
		windowApp.manifestType !== MANIFEST_TYPES.Window.id &&
		windowApp.manifestType !== MANIFEST_TYPES.InlineWindow.id
	) {
		logger.warn(
			`The app passed was not of manifestType ${MANIFEST_TYPES.Window.id} or ${MANIFEST_TYPES.InlineWindow.id}.`
		);
		return;
	}
	let manifest: OpenFin.WindowOptions | undefined;

	if (windowApp.manifestType === MANIFEST_TYPES.Window.id) {
		manifest = await getManifest<OpenFin.WindowOptions>(windowApp);
	} else {
		// conversion because of manifestType. In most use cases manifest is always a path to an executable or to a manifest file. For classic windows we are demonstrating how it could be used
		// for passing the manifest inline
		manifest = getInlineManifest(windowApp);
	}

	if (isEmpty(manifest)) {
		logger.error(
			`There was a problem encountered while trying to fetch the manifest for app: ${windowApp.appId}. Returning without launching.`
		);
		return;
	}

	let name = manifest.name;
	let wasNameSpecified = !isEmpty(name);

	if (!wasNameSpecified && windowApp?.instanceMode === "single") {
		logger.info(
			`A unique name was not provided in the manifest of this window but the custom config indicates that this app is supposed to have a single instance so we are using the appId: ${windowApp.appId} as the unique name.`
		);
		name = windowApp.appId;
		// assign the new name to the manifest in case the view doesn't exist yet (as it is dynamically allocated and not part of the app's manifest)
		manifest.name = name;
		wasNameSpecified = true;
	} else if (!wasNameSpecified) {
		name = `${windowApp.appId}/${randomUUID()}`;
		manifest.name = name;
	}

	let identity = { uuid: fin.me.identity.uuid, name };

	let windowExists = false;

	if (wasNameSpecified) {
		windowExists = await doesWindowExist(identity, true);
	}

	if (!windowExists) {
		try {
			const appLaunchPreference = objectClone(windowApp.launchPreference);
			const appLaunchPreferenceOptions = objectClone(
				windowApp.launchPreference?.options
			) as WindowLaunchOptions;

			// validate passed launch preferences
			if (
				appLaunchPreference?.options?.type === "window" &&
				Array.isArray(appLaunchPreferenceOptions?.updatable) &&
				appLaunchPreferenceOptions.updatable.length > 0
			) {
				console.log(appLaunchPreference.options.updatable);
				for (const option of appLaunchPreferenceOptions.updatable) {
					if (option.name === "BOUNDS") {
						appLaunchPreference.bounds = launchPreference?.bounds;
					}
					if (option.name === "CENTERED") {
						appLaunchPreference.defaultCentered = launchPreference?.defaultCentered;
					}
					if (
						option.name === "CUSTOM_DATA" &&
						launchPreference?.options?.type === "window" &&
						!isEmpty(launchPreference.options?.window?.customData)
					) {
						if (isEmpty(appLaunchPreferenceOptions.window)) {
							appLaunchPreferenceOptions.window = {};
						}
						appLaunchPreferenceOptions.window.customData = {
							...appLaunchPreferenceOptions.window?.customData,
							...launchPreference.options?.window?.customData
						};
					}
					if (
						option.name === "INTEROP" &&
						launchPreference?.options?.type === "window" &&
						!isEmpty(launchPreference.options?.window?.interop)
					) {
						if (isEmpty(appLaunchPreferenceOptions.window)) {
							appLaunchPreferenceOptions.window = {};
						}
						appLaunchPreferenceOptions.window.interop = launchPreference?.options.window?.interop;
					}
					if (
						option.name === "URL" &&
						launchPreference?.options?.type === "window" &&
						!isEmpty(launchPreference.options?.window) &&
						isStringValue(launchPreference.options?.window?.url)
					) {
						if (isEmpty(appLaunchPreferenceOptions.window)) {
							appLaunchPreferenceOptions.window = {};
						}
						if (isValidUrl(manifest.url, launchPreference.options.window.url, option.constraint)) {
							appLaunchPreferenceOptions.window.url = launchPreference.options.window.url;
						}
					}
				}
			}

			const platform = getCurrentSync();
			manifest.defaultHeight = appLaunchPreference?.bounds?.height ?? manifest.defaultHeight;
			manifest.height = appLaunchPreference?.bounds?.height ?? manifest.height;
			manifest.defaultWidth = appLaunchPreference?.bounds?.width ?? manifest.defaultWidth;
			manifest.width = appLaunchPreference?.bounds?.width ?? manifest.width;
			manifest.defaultCentered = appLaunchPreference?.defaultCentered ?? manifest.defaultCentered;

			if (
				!isEmpty(appLaunchPreferenceOptions.window) &&
				isStringValue(appLaunchPreferenceOptions.window.url)
			) {
				logger.debug(
					`Updating app with id: ${windowApp.appId}. The url of the window app is defined via launch preferences: ${manifest.url} is being replaced with ${appLaunchPreferenceOptions.window?.url}`
				);
				manifest.url = appLaunchPreferenceOptions.window?.url;
			}

			if (!isEmpty(appLaunchPreferenceOptions.window?.customData)) {
				logger.debug(
					`Updating app with id: ${windowApp.appId}. The custom data is being updated with launch preferences:`,
					appLaunchPreferenceOptions.window?.customData
				);
				manifest.customData = appLaunchPreferenceOptions.window?.customData;
			}

			if (
				!isEmpty(appLaunchPreferenceOptions.window) &&
				!isEmpty(appLaunchPreferenceOptions.window?.interop)
			) {
				logger.debug(
					`Updating app with id: ${windowApp.appId}. The interop definition is being updated with launch preferences:`,
					appLaunchPreferenceOptions.window?.interop
				);
				manifest.interop = appLaunchPreferenceOptions.window.interop;
			}

			const createdWindow = await platform.createWindow(manifest);
			identity = createdWindow.identity;
			await bringWindowToFront({ window: createdWindow });
		} catch (err) {
			logger.error("Error launching window", err);
			return;
		}
	}
	return { ...identity, appId: windowApp.appId };
}

/**
 * Launch a view for the platform app.
 * @param viewApp The app to launch the view for.
 * @param launchPreference The preferences (if supported) that you would like to apply
 * @returns The identity of the view launched.
 */
async function launchView(
	viewApp: PlatformApp,
	launchPreference?: UpdatableLaunchPreference
): Promise<PlatformAppIdentifier | undefined> {
	if (isEmpty(viewApp)) {
		logger.warn("No app was passed to launchView");
		return;
	}

	if (
		viewApp.manifestType !== MANIFEST_TYPES.View.id &&
		viewApp.manifestType !== MANIFEST_TYPES.InlineView.id
	) {
		logger.warn(
			`The app passed was not of manifestType ${MANIFEST_TYPES.View.id} or ${MANIFEST_TYPES.InlineView.id}.`
		);
		return;
	}
	let manifest: OpenFin.ViewOptions | undefined;

	if (viewApp.manifestType === MANIFEST_TYPES.View.id) {
		manifest = await getManifest<OpenFin.ViewOptions>(viewApp);
	} else {
		// conversion because of manifestType. In most use cases manifest is always a path to an executable or to a manifest file. For views we are demonstrating how it could be used
		// for passing the manifest inline
		manifest = getInlineManifest(viewApp);
	}

	if (isEmpty(manifest)) {
		logger.error(
			`There was a problem encountered while trying to fetch the manifest for app: ${viewApp.appId}. Returning without launching.`
		);
		return;
	}

	let name = manifest.name;

	let wasNameSpecified = !isEmpty(name);

	if (!wasNameSpecified && viewApp?.instanceMode === "single") {
		logger.info(
			`A unique name was not provided in the manifest of this view but the custom config indicates that this app is supposed to have a single instance so we are using the appId: ${viewApp.appId} as the unique name.`
		);
		name = viewApp.appId;
		// assign the new name to the manifest in case the view doesn't exist yet (as it is dynamically allocated and not part of the app's manifest)
		manifest.name = name;
		wasNameSpecified = true;
	} else if (!wasNameSpecified) {
		name = `${viewApp.appId}/${randomUUID()}`;
		manifest.name = name;
	}

	let identity = { uuid: fin.me.identity.uuid, name };

	let viewExists = false;

	if (wasNameSpecified) {
		viewExists = await doesViewExist(identity, true);
	}

	if (!viewExists) {
		try {
			const platform = getCurrentSync();
			const appLaunchPreference = objectClone(viewApp.launchPreference);
			const appLaunchPreferenceOptions = objectClone(viewApp.launchPreference?.options) as ViewLaunchOptions;
			if (
				appLaunchPreference?.options?.type === "view" &&
				Array.isArray(appLaunchPreferenceOptions?.updatable) &&
				appLaunchPreferenceOptions.updatable.length > 0
			) {
				console.log(appLaunchPreference.options.updatable);
				for (const option of appLaunchPreferenceOptions.updatable) {
					if (option.name === "BOUNDS") {
						appLaunchPreference.bounds = launchPreference?.bounds;
					}
					if (option.name === "CENTERED") {
						appLaunchPreference.defaultCentered = launchPreference?.defaultCentered;
					}
					if (
						option.name === "HOST_OPTIONS" &&
						launchPreference?.options?.type === "view" &&
						!isEmpty(launchPreference.options.host)
					) {
						if (isEmpty(appLaunchPreferenceOptions.host)) {
							appLaunchPreferenceOptions.host = {};
						}
						if (
							isStringValue(appLaunchPreferenceOptions.host?.url) &&
							isStringValue(launchPreference.options.host?.url) &&
							!isValidUrl(
								appLaunchPreferenceOptions.host.url,
								launchPreference.options.host.url,
								option.constraint
							)
						) {
							// a url already exists and the suggested one does not match so reset it
							launchPreference.options.host.url = undefined;
						}
						appLaunchPreferenceOptions.host = {
							...appLaunchPreferenceOptions.host,
							...launchPreference.options?.host
						};
					}
					if (
						option.name === "CUSTOM_DATA" &&
						launchPreference?.options?.type === "view" &&
						!isEmpty(launchPreference.options?.view?.customData)
					) {
						if (isEmpty(appLaunchPreferenceOptions.view)) {
							appLaunchPreferenceOptions.view = {};
						}
						appLaunchPreferenceOptions.view.customData = {
							...appLaunchPreferenceOptions.view?.customData,
							...launchPreference.options?.view?.customData
						};
					}
					if (
						option.name === "INTEROP" &&
						launchPreference?.options?.type === "view" &&
						!isEmpty(launchPreference.options?.view?.interop)
					) {
						if (isEmpty(appLaunchPreferenceOptions.view)) {
							appLaunchPreferenceOptions.view = {};
						}
						appLaunchPreferenceOptions.view.interop = launchPreference?.options.view?.interop;
					}
					if (
						option.name === "URL" &&
						launchPreference?.options?.type === "view" &&
						!isEmpty(launchPreference.options.view) &&
						isStringValue(launchPreference.options?.view?.url)
					) {
						if (isEmpty(appLaunchPreferenceOptions.view)) {
							appLaunchPreferenceOptions.view = {};
						}
						if (isValidUrl(manifest.url, launchPreference.options.view.url, option.constraint)) {
							appLaunchPreferenceOptions.view.url = launchPreference.options.view.url;
						}
					}
				}
			}

			if (appLaunchPreference?.options?.type === "view" && !isEmpty(appLaunchPreference.options.view)) {
				if (isStringValue(appLaunchPreference.options.view.url)) {
					logger.debug(
						`Updating app with id: ${viewApp.appId} url with launch preferences: ${manifest.url} with ${appLaunchPreference.options.view.url}`
					);
					manifest.url = appLaunchPreference.options.view.url;
				}
				if (!isEmpty(appLaunchPreference?.options?.view?.customData)) {
					logger.debug(
						`Updating app with id: ${viewApp.appId} customData with merged launch preferences.`,
						appLaunchPreference.options.view.customData
					);
					manifest.customData = appLaunchPreference.options.view.customData;
				}
				if (!isEmpty(appLaunchPreference?.options?.view?.interop)) {
					logger.debug(
						`Updating app with id: ${viewApp.appId} interop config with launch preferences.`,
						appLaunchPreference.options.view.interop
					);
					manifest.interop = appLaunchPreference.options.view.interop;
				}
			}
			const bounds = appLaunchPreference?.bounds;
			const launchOptions = appLaunchPreference?.options;
			if (!isEmpty(bounds) || (!isEmpty(launchOptions) && launchOptions.type === "view")) {
				const viewOptions = appLaunchPreference?.options as ViewLaunchOptions;

				let workspacePlatform:
					| Partial<BrowserWorkspacePlatformWindowOptions>
					| { windowType: WindowType.Platform }
					| undefined = {};

				const layout = {
					content: [
						{
							type: "stack",
							content: [
								{
									type: "component",
									componentName: "view",
									componentState: manifest
								}
							]
						}
					],
					settings: {
						hasHeaders: viewOptions?.host?.hasHeaders
					}
				};

				workspacePlatform = {
					windowType: !isEmpty(viewOptions?.host?.url) ? WindowType.Platform : undefined,
					disableMultiplePages: viewOptions?.host?.disableMultiplePages,
					title: viewOptions?.host?.title,
					favicon: viewOptions?.host?.icon
				};
				if (!isEmpty(viewOptions?.host?.pageTitle) || !isEmpty(viewOptions?.host?.pageIcon)) {
					const page: Page = {
						pageId: `page-${randomUUID()}`,
						iconUrl: viewOptions?.host?.pageIcon,
						title: await platform.Browser.getUniquePageTitle(viewOptions?.host?.pageTitle),
						layout
					};
					workspacePlatform.pages = [page];
				}
				if (viewOptions?.host?.disableToolbarOptions === true) {
					workspacePlatform.toolbarOptions = { buttons: [] };
				}

				if (Object.keys(workspacePlatform).length === 0) {
					workspacePlatform = undefined;
				}

				const preferenceWindow = await platform.createWindow({
					workspacePlatform,
					url: viewOptions?.host?.url,
					height: bounds?.height,
					defaultHeight: bounds?.height,
					defaultWidth: bounds?.width,
					width: bounds?.width,
					defaultCentered: appLaunchPreference?.defaultCentered,
					layout
				});

				const createdViews = await preferenceWindow.getCurrentViews();
				if (createdViews.length === 1) {
					if (createdViews[0].identity.name === identity.name) {
						identity = createdViews[0].identity;
					} else {
						logger.warn(
							`The specified view id: ${identity.name} was not found in the returned view so we will be returning undefined as we cannot confirm the view was created.`
						);
						return;
					}
				} else {
					logger.warn(
						`We expected to create a single view with identity ${identity.name} but a preference was specified and the created window had more than the requested view ${createdViews.length}`
					);
					const matchedView = createdViews.find((view) => view.identity.name === identity.name);
					if (isEmpty(matchedView)) {
						logger.warn(
							`The specified view id: ${identity.name} was not found in the list of returned views so we will be returning undefined as we cannot confirm the view was created.`
						);
						return;
					}
					identity = matchedView.identity;
				}
			} else {
				const createdView = await platform.createView(manifest);
				identity = createdView.identity;
			}
		} catch (err) {
			logger.error("Error launching view", err);
			return;
		}
	}
	return { ...identity, appId: viewApp.appId };
}

/**
 * Launch a snapshot for the platform app.
 * @param snapshotApp The app to launch snapshot view for.
 * @returns The identities of the snapshot parts launched.
 */
async function launchSnapshot(snapshotApp: PlatformApp): Promise<PlatformAppIdentifier[] | undefined> {
	if (isEmpty(snapshotApp)) {
		logger.warn("No app was passed to launchSnapshot");
		return;
	}

	if (
		snapshotApp.manifestType !== MANIFEST_TYPES.Snapshot.id &&
		snapshotApp.manifestType !== MANIFEST_TYPES.InlineSnapshot.id
	) {
		logger.warn(
			`The app passed was not of manifestType ${MANIFEST_TYPES.Snapshot.id} or ${MANIFEST_TYPES.InlineSnapshot.id}`
		);
		return;
	}

	let manifest: BrowserSnapshot | undefined;

	if (snapshotApp.manifestType === MANIFEST_TYPES.Snapshot.id) {
		logger.info(`Fetching snapshot for app ${snapshotApp.appId} from url: ${snapshotApp.manifest}`);
		manifest = await getManifest<BrowserSnapshot>(snapshotApp);
	} else {
		logger.info(`Using snapshot defined in manifest setting of app ${snapshotApp.appId}`);
		manifest = getInlineManifest(snapshotApp);
	}

	if (isEmpty(manifest)) {
		logger.error(
			`There was a problem encountered while trying to fetch the manifest for app: ${snapshotApp.appId}. Returning without launching.`
		);
		return;
	}

	const windows = manifest.windows;
	const windowsToCreate = [];

	if (Array.isArray(windows)) {
		const windowsToGather: string[] = [];
		const viewIds: PlatformAppIdentifier[] = [];

		for (const currentWindow of windows) {
			let getViewIdsForLayout = findViewNames(currentWindow.layout);
			if (Array.isArray(currentWindow.workspacePlatform?.pages)) {
				for (const page of currentWindow.workspacePlatform.pages) {
					getViewIdsForLayout = getViewIdsForLayout.concat(findViewNames(page.layout));
				}
			}
			getViewIdsForLayout = [...new Set(getViewIdsForLayout)];

			if (getViewIdsForLayout.length === 0) {
				const uuid = randomUUID();
				const name = `${snapshotApp.appId}/${uuid}`;
				currentWindow.name = name;
				windowsToCreate.push(currentWindow);
				windowsToGather.push(name);
			} else {
				// we have views. Grab the first one to validate existence.
				const viewId = getViewIdsForLayout[0];

				for (const entry of getViewIdsForLayout) {
					viewIds.push({ name: entry, uuid: fin.me.identity.uuid, appId: snapshotApp.appId });
				}

				// these views should be readonly and cannot be pulled out of the page or closed
				if (!(await doesViewExist({ name: viewId, uuid: fin.me.identity.uuid }))) {
					windowsToCreate.push(currentWindow);
				}
			}
		}

		manifest.windows = windowsToCreate;

		if (windowsToCreate.length > 0) {
			const platform = getCurrentSync();
			try {
				await platform.applySnapshot(manifest);
			} catch (err) {
				logger.error("Error trying to apply snapshot to platform", err, manifest);
			}
		}

		for (const targetWindow of windowsToGather) {
			const windowViewIds = await getViewIdentities(targetWindow, fin.me.identity.uuid, snapshotApp.appId);
			viewIds.push(...windowViewIds);
		}

		return viewIds;
	}
}

/**
 * Launch an app asset for the platform app.
 * @param appAssetApp The app to launch app asset view for.
 * @param instanceId Provide an instance id for the app being launched.
 * @returns The identities of the snapshot parts launched.
 */
export async function launchAppAsset(
	appAssetApp: PlatformApp,
	instanceId?: string
): Promise<PlatformAppIdentifier | undefined> {
	const options: OpenFin.ExternalProcessRequestType = {};
	logger.info(`Request to launch app asset app of type ${appAssetApp.manifestType}`);
	if (appAssetApp.manifestType === MANIFEST_TYPES.Appasset.id) {
		options.alias = appAssetApp.manifest;
	} else if (appAssetApp.manifestType === MANIFEST_TYPES.InlineAppAsset.id) {
		const appAssetInfo: OpenFin.AppAssetInfo = getInlineManifest(appAssetApp);
		try {
			await fin.System.downloadAsset(appAssetInfo, (progress) => {
				const downloadedPercent = Math.floor((progress.downloadedBytes / progress.totalBytes) * 100);
				logger.info(`Downloaded ${downloadedPercent}% of app asset with appId of ${appAssetApp.appId}`);
			});
		} catch (error) {
			logger.error(`Error trying to download app asset with app id: ${appAssetApp.appId}`, error);
			return;
		}
		options.alias = appAssetInfo.alias;
		options.arguments = appAssetInfo.args;
	} else {
		logger.warn(
			"An app asset app was passed to launch app asset but it didn't match the supported manifest types."
		);
		return;
	}
	if (appAssetApp.instanceMode === "single") {
		// use the appId as the UUID and OpenFin will only be able to launch a single instance
		options.uuid = appAssetApp.appId;
	}
	try {
		logger.info(`Launching app asset with appId: ${appAssetApp.appId} with the following options:`, options);
		const identity = await launchExternalProcess(appAssetApp, options, instanceId);
		logger.info(
			`External app with appId: ${appAssetApp.appId} launched with the following identity`,
			identity
		);
		return identity;
	} catch (error) {
		logger.error(`Error trying to launch app asset with appId: ${appAssetApp.appId}}`, error);
	}
}

/**
 * Launch an external for the platform app.
 * @param externalApp The app to launch external view for.
 * @param instanceId Provide an instance id for the app being launched.
 * @returns The identities of the app parts launched.
 */
export async function launchExternal(
	externalApp: PlatformApp,
	instanceId?: string
): Promise<PlatformAppIdentifier | undefined> {
	let options: OpenFin.ExternalProcessRequestType = {};
	logger.info(`Request to external app of type ${externalApp.manifestType}`);
	if (externalApp.manifestType === MANIFEST_TYPES.External.id) {
		options.path = externalApp.manifest;
	} else if (externalApp.manifestType === MANIFEST_TYPES.InlineExternal.id) {
		options = getInlineManifest(externalApp);
	} else {
		logger.warn("An external app was passed to launch but it didn't match the supported manifest types.");
		return;
	}
	if (externalApp.instanceMode === "single") {
		// use the appId as the UUID and OpenFin will only be able to launch a single instance
		options.uuid = externalApp.appId;
	}

	try {
		logger.info(
			`Launching external app asset with appId: ${externalApp.appId} with the following options:`,
			options
		);
		const identity = await launchExternalProcess(externalApp, options, instanceId);
		logger.info(
			`External app with appId: ${externalApp.appId} launched with the following identity`,
			identity
		);
		return identity;
	} catch (err) {
		logger.error(`Error trying to launch external with appId: ${externalApp.appId}`, err);
	}
}

/**
 * Launch an external process either in regular or snap mode.
 * @param app The app being launched.
 * @param options The launch options.
 * @param instanceId Provide an instance id for the app being launched.
 * @returns The identity of the process.
 */
async function launchExternalProcess(
	app: PlatformApp,
	options: OpenFin.ExternalProcessRequestType,
	instanceId?: string
): Promise<PlatformAppIdentifier> {
	const nativeOptions = app.launchPreference?.options as NativeLaunchOptions;

	const hasPath = isStringValue(options.path);

	let identity: PlatformAppIdentifier | undefined;
	if (
		snapProvider.isEnabled() &&
		nativeOptions?.type === "native" &&
		!isEmpty(nativeOptions?.snap?.strategy)
	) {
		let path = options.path;
		if (!hasPath && isStringValue(options.alias)) {
			const appAsset = await fin.System.getAppAssetInfo({
				alias: options.alias
			});

			path = await snapProvider.getAppAssetExecutablePath({
				alias: appAsset.alias,
				version: appAsset.version,
				target: appAsset.target ?? ""
			});
		}

		if (isStringValue(path)) {
			if (!isStringValue(instanceId)) {
				instanceId = app.instanceMode === "single" ? app.appId : randomUUID();
			}

			let args = nativeOptions.snap?.args;
			if (!isStringValue(args) && isStringValue(options.arguments)) {
				args = [options.arguments];
			}

			const launchIdentity = await snapProvider.launchApp(
				path,
				args,
				nativeOptions.snap?.strategy,
				app.appId,
				instanceId
			);

			if (launchIdentity) {
				identity = { uuid: fin.me.identity.uuid, name: launchIdentity, appId: app.appId };
			} else {
				logger.warn(
					`The app with id ${app.appId} could not be launched with snap support, falling back to launch without snap`
				);
			}
		} else {
			logger.warn(
				`The app with id ${app.appId} specifies a snap launch strategy, but it has neither a path property or app asset alias/version/target combination, falling back to launch without snap`
			);
		}
	}

	if (isEmpty(identity)) {
		const launchIdentity = await fin.System.launchExternalProcess(options);
		identity = { ...launchIdentity, appId: app.appId };
	}

	return identity;
}
