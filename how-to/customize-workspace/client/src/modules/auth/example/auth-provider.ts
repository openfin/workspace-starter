let logInfo = console.log;
let logWarning = console.warn;
let logError = console.error;

let authenticated: boolean;
let authOptions: ExampleOptions;
let sessionExpiryCheckId;
const subscribeIdMap: { [key: string]: string } = {};
const loggedInSubscribers: Map<string, () => Promise<void>> = new Map();
const beforeLoggedOutSubscribers: Map<string, () => Promise<void>> = new Map();
const loggedOutSubscribers: Map<string, () => Promise<void>> = new Map();
const sessionExpiredSubscribers: Map<string, () => Promise<void>> = new Map();
interface ExampleOptions {
	autoLogin: boolean;
	authenticatedUrl: string;
	loginUrl: string;
	logoutUrl: string;
	loginHeight: number;
	loginWidth: number;
	checkLoginStatusInSeconds: number;
	checkSessionValidityInSeconds: number;
}

const EXAMPLE_AUTH_AUTHENTICATED_KEY = "EXAMPLE_AUTH_IS_AUTHENTICATED";

async function openLoginWindow(url: string): Promise<OpenFin.Window> {
	return fin.Window.create({
		name: "example-auth-log-in",
		alwaysOnTop: true,
		maximizable: false,
		minimizable: false,
		autoShow: false,
		defaultCentered: true,
		defaultHeight: authOptions.loginHeight ?? 250,
		defaultWidth: authOptions.loginWidth ?? 400,
		includeInSnapshots: false,
		resizable: false,
		showTaskbarIcon: false,
		saveWindowState: false,
		url
	});
}

async function openLogoutWindow(url: string): Promise<OpenFin.Window> {
	return fin.Window.create({
		name: "example-auth-log-out",
		maximizable: false,
		minimizable: false,
		autoShow: false,
		defaultCentered: true,
		defaultHeight: authOptions.loginHeight ?? 250,
		defaultWidth: authOptions.loginWidth ?? 400,
		includeInSnapshots: false,
		resizable: false,
		showTaskbarIcon: false,
		saveWindowState: false,
		url
	});
}

async function checkAuth(url: string): Promise<boolean> {
	const windowToCheck = await fin.Window.create({
		name: "example-auth-check-window",
		alwaysOnTop: true,
		maximizable: false,
		minimizable: false,
		autoShow: false,
		defaultHeight: authOptions.loginHeight ?? 250,
		defaultWidth: authOptions.loginWidth ?? 400,
		includeInSnapshots: false,
		resizable: false,
		showTaskbarIcon: false,
		saveWindowState: false,
		url
	});
	let isAuthenticated = false;
	try {
		const info = await windowToCheck.getInfo();
		if (info.url === authOptions.authenticatedUrl) {
			isAuthenticated = true;
		}
	} catch (error) {
		logError(`Error encountered while checking session.`, error);
	} finally {
		if (windowToCheck !== undefined) {
			await windowToCheck.close(true);
		}
	}
	return isAuthenticated;
}

async function getAuthenticationFromUser(): Promise<boolean> {
	return new Promise<boolean>((resolve, reject) => {
		openLoginWindow(authOptions.loginUrl)
			.then(async (win) => {
				try {
					if (win !== undefined) {
						const info = await win.getInfo();
						if (info.url === authOptions.authenticatedUrl) {
							await win.close(true);
							return resolve(true);
						}
						await win.show(true);
					}
				} catch (error) {
					logError(
						`Example Auth: Error while checking if login window automatically redirected. Error ${error.message}`
					);
					if (win !== undefined) {
						await win.show(true);
					}
				}

				let statusCheck: number;

				await win.addListener("closed", async () => {
					if (win) {
						window.clearInterval(statusCheck);
						statusCheck = undefined;
						logInfo("Example Auth: Auth Window cancelled by user.");
						win = undefined;
						return resolve(false);
					}
				});
				statusCheck = window.setInterval(async () => {
					if (win !== undefined) {
						const winInfo = await win.getInfo();
						if (winInfo.url === authOptions.authenticatedUrl) {
							window.clearInterval(statusCheck);
							await win.removeAllListeners();
							await win.close(true);
							return resolve(true);
						}
					} else {
						return resolve(false);
					}
				}, authOptions.checkLoginStatusInSeconds ?? 1 * 1000);
				return true;
			})
			.catch((error) => {
				console.error(`Example Auth: Error while trying to authenticate the user`, error);
			});
	});
}

function checkForSessionExpiry(force = false) {
	if (
		authOptions?.checkSessionValidityInSeconds !== undefined &&
		authOptions?.checkSessionValidityInSeconds > -1 &&
		sessionExpiryCheckId === undefined
	) {
		sessionExpiryCheckId = setTimeout(async () => {
			sessionExpiryCheckId = undefined;
			const stillAuthenticated = await checkAuth(authOptions.loginUrl);
			if (stillAuthenticated) {
				logInfo("Example Auth: Session Still Active.");
				checkForSessionExpiry();
			} else {
				logInfo(
					`Example Auth: Session not valid. Killing session and notifying registered callback that authentication is required. This check is configured in the data for this example auth module. Set checkSessionValidityInSeconds to -1 in the authProvider module definition if you wish to disable this check.`
				);
				authenticated = false;
				localStorage.removeItem(EXAMPLE_AUTH_AUTHENTICATED_KEY);
				await notifySubscribers("session-expired", sessionExpiredSubscribers);
			}
		}, authOptions.checkSessionValidityInSeconds * 1000);
	}
}

async function notifySubscribers(eventType: string, subscribers: Map<string, () => Promise<void>>) {
	const subscriberIds = Array.from(subscribers.keys());
	subscriberIds.reverse();

	for (let i = 0; i < subscriberIds.length; i++) {
		const subscriberId = subscriberIds[i];
		logInfo(
			`Example Auth: Notifying subscriber with subscription Id: ${subscriberId} of event type: ${eventType}`
		);
		await subscribers.get(subscriberId)();
	}
}

async function handleLogout(resolve: (success: boolean) => void): Promise<void> {
	if (authenticated === undefined || !authenticated) {
		logError("Example Auth: You have requested to log out but are not logged in.");
		resolve(false);
		return;
	}
	logInfo("Example Auth: Log out requested.");
	await notifySubscribers("before-logged-out", beforeLoggedOutSubscribers);
	authenticated = false;
	localStorage.removeItem(EXAMPLE_AUTH_AUTHENTICATED_KEY);
	if (
		authOptions.logoutUrl !== undefined &&
		authOptions.logoutUrl !== null &&
		authOptions.loginUrl.trim().length > 0
	) {
		try {
			const win = await openLogoutWindow(authOptions.logoutUrl);
			setTimeout(async () => {
				await win.close();
				await notifySubscribers("logged-out", loggedOutSubscribers);
				resolve(true);
			}, 2000);
		} catch (error) {
			logError(`Example Auth: Error while launching logout window. ${error}`);
			return resolve(false);
		}
	} else {
		await notifySubscribers("logged-out", loggedOutSubscribers);
		resolve(true);
	}
}

export async function init(options: unknown) {
	if (authOptions === undefined) {
		logInfo(`Example Auth: Setting options: ${JSON.stringify(options, null, 4)}`);
		authOptions = options as ExampleOptions;
		authenticated = Boolean(localStorage.getItem(EXAMPLE_AUTH_AUTHENTICATED_KEY));
		if (authenticated) {
			checkForSessionExpiry();
		}
	} else {
		logWarning("Example Auth: Options have already been set as init has already been called.");
	}
}

export function subscribe(
	to: "logged-in" | "before-logged-out" | "logged-out" | "session-expired",
	callback: () => Promise<void>
): string {
	const key = crypto.randomUUID();
	let matchFound = false;
	switch (to) {
		case "logged-in": {
			matchFound = true;
			loggedInSubscribers.set(key, callback);
			break;
		}
		case "before-logged-out": {
			matchFound = true;
			beforeLoggedOutSubscribers.set(key, callback);
			break;
		}
		case "logged-out": {
			matchFound = true;
			loggedOutSubscribers.set(key, callback);
			break;
		}
		case "session-expired": {
			matchFound = true;
			sessionExpiredSubscribers.set(key, callback);
			break;
		}
	}

	if (matchFound) {
		subscribeIdMap[key] = to;
		logInfo(`Example Auth: Subscription to ${to} events registered. Subscription Id: ${key}`);
		return key;
	}
	return null;
}

export function unsubscribe(from: string): boolean {
	let matchFound = false;
	const eventType = subscribeIdMap[from];
	if (eventType === undefined) {
		logWarning(`Example Auth: You have tried to unsubscribe with a key ${from} that is invalid`);
		return false;
	}

	switch (eventType) {
		case "logged-in": {
			matchFound = true;
			loggedInSubscribers.delete(from);
			break;
		}
		case "before-logged-out": {
			matchFound = true;
			beforeLoggedOutSubscribers.delete(from);
			break;
		}
		case "logged-out": {
			matchFound = true;
			loggedOutSubscribers.delete(from);
			break;
		}
		case "session-expired": {
			matchFound = true;
			sessionExpiredSubscribers.delete(from);
			break;
		}
	}

	delete subscribeIdMap[from];
	if (matchFound) {
		logInfo(
			`Example Auth: Subscription to ${eventType} events with subscription Id: ${from} has been cleared`
		);
		return true;
	}

	logWarning(
		`Example Auth: Subscription to ${eventType} events with subscription Id: ${from} could not be cleared as we do not have a register of that event type.`
	);
	return false;
}

export async function login(): Promise<boolean> {
	logInfo("Example Auth: login requested");
	if (authenticated) {
		logInfo("Example Auth: User already authenticated");
		return authenticated;
	}
	if (authOptions.autoLogin) {
		logInfo("Example Auth: autoLogin enabled in auth provide module settings. Fake logged in.");
		authenticated = true;
	} else {
		authenticated = await getAuthenticationFromUser();
	}

	if (authenticated) {
		localStorage.setItem(EXAMPLE_AUTH_AUTHENTICATED_KEY, authenticated.toString());
		checkForSessionExpiry();
		await notifySubscribers("logged-in", loggedInSubscribers);
	}

	return authenticated;
}

export async function logout(): Promise<boolean> {
	return new Promise<boolean>((resolve, reject) => {
		handleLogout(resolve)
			.then(() => {
				logInfo("Example Auth: Log out called.");
				return true;
			})
			.catch((error) => {
				logError(`Example Auth: Error while trying to log out ${error}`);
			});
	});
}

export async function isAuthenticationRequired(): Promise<boolean> {
	if (authenticated === undefined) {
		authenticated = false;
	}
	return !authenticated;
}

export async function getUserInfo<T>(): Promise<T> {
	if (authenticated === undefined || !authenticated) {
		logWarning("Example Auth: Unable to retrieve user info unless the user is authenticated.");
	} else {
		logInfo("Example Auth: This example does not return any user info. Returning null.");
	}
	return null;
}

export function setLogger(
	info: (message: string) => void,
	warn: (message: string) => void,
	error: (message: string) => void
): void {
	if (info !== undefined) {
		logInfo = info;
	}
	if (warn !== undefined) {
		logWarning = warn;
	}
	if (error !== undefined) {
		logError = error;
	}
}
