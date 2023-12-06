/******/ var __webpack_modules__ = ({

/***/ "./client/src/framework/utils.ts":
/*!***************************************!*\
  !*** ./client/src/framework/utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatError: () => (/* binding */ formatError),
/* harmony export */   isBoolean: () => (/* binding */ isBoolean),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isNumber: () => (/* binding */ isNumber),
/* harmony export */   isNumberValue: () => (/* binding */ isNumberValue),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isStringValue: () => (/* binding */ isStringValue),
/* harmony export */   objectClone: () => (/* binding */ objectClone),
/* harmony export */   randomUUID: () => (/* binding */ randomUUID),
/* harmony export */   sanitizeString: () => (/* binding */ sanitizeString)
/* harmony export */ });
/**
 * Test if a value is a undefined or null.
 * @param value The value to test.
 * @returns True if the value is null or undefined.
 */
function isEmpty(value) {
    // eslint-disable-next-line no-restricted-syntax
    return value === undefined || value === null;
}
/**
 * Test if a value is an object.
 * @param value The value to test.
 * @returns True if the value is an object.
 */
function isObject(value) {
    // eslint-disable-next-line no-restricted-syntax
    return value !== undefined && value !== null && typeof value === "object" && !Array.isArray(value);
}
/**
 * Test if a value is a string.
 * @param value The value to test.
 * @returns True if the value is a string.
 */
function isString(value) {
    // eslint-disable-next-line no-restricted-syntax
    return value !== undefined && value !== null && typeof value === "string";
}
/**
 * Test if a value is a string that is not empty.
 * @param value The value to test.
 * @returns True if the value is a string that is not empty.
 */
function isStringValue(value) {
    return isString(value) && value.trim().length > 0;
}
/**
 * Test if a value is a number.
 * @param value The value to test.
 * @returns True if the value is a number.
 */
function isNumber(value) {
    // eslint-disable-next-line no-restricted-syntax
    return value !== undefined && value !== null && typeof value === "number";
}
/**
 * Test if a value is a number with a real value i.e. not NaN or Infinite.
 * @param value The value to test.
 * @returns True if the value is a number.
 */
function isNumberValue(value) {
    return isNumber(value) && !Number.isNaN(value) && Number.isFinite(value);
}
/**
 * Test if a value is a boolean.
 * @param value The value to test.
 * @returns True if the value is a boolean.
 */
function isBoolean(value) {
    // eslint-disable-next-line no-restricted-syntax
    return value !== undefined && value !== null && typeof value === "boolean";
}
/**
 * Test if a value is an integer.
 * @param value The value to test.
 * @returns True if the value is an integer.
 */
function isInteger(value) {
    return isNumber(value) && Number.isInteger(value);
}
/**
 * Deep clone an object.
 * @param obj The object to clone.
 * @returns The clone of the object.
 */
function objectClone(obj) {
    // eslint-disable-next-line no-restricted-syntax
    return obj === undefined ? undefined : JSON.parse(JSON.stringify(obj));
}
/**
 * Polyfills randomUUID if running in a non-secure context.
 * @returns The random UUID.
 */
function randomUUID() {
    if ("randomUUID" in globalThis.crypto) {
        // eslint-disable-next-line no-restricted-syntax
        return globalThis.crypto.randomUUID();
    }
    // Polyfill the window.crypto.randomUUID if we are running in a non secure context that doesn't have it
    // we are still using window.crypto.getRandomValues which is always available
    // https://stackoverflow.com/a/2117523/2800218
    /**
     * Get random hex value.
     * @param c The number to base the random value on.
     * @returns The random value.
     */
    function getRandomHex(c) {
        // eslint-disable-next-line no-bitwise
        const rnd = globalThis.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4));
        return (
        // eslint-disable-next-line no-bitwise
        (Number(c) ^ rnd).toString(16));
    }
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, getRandomHex);
}
/**
 * Format an error to a readable string.
 * @param err The error to format.
 * @returns The formatted error.
 */
function formatError(err) {
    if (isEmpty(err)) {
        return "";
    }
    else if (err instanceof Error) {
        return err.message;
    }
    else if (typeof err === "string") {
        return err;
    }
    else if (isObject(err) && "message" in err && isString(err.message)) {
        return err.message;
    }
    return JSON.stringify(err);
}
/**
 * A basic string sanitize function that removes angle brackets <> from a string.
 * @param content the content to sanitize
 * @returns a string without angle brackets <>
 */
function sanitizeString(content) {
    if (isStringValue(content)) {
        return content
            .replace(/<[^>]*>?/gm, "")
            .replace(/&gt;/g, ">")
            .replace(/&lt;/g, "<")
            .replace(/&amp;/g, "&")
            .replace(/&nbsp;/g, " ")
            .replace(/\n\s*\n/g, "\n");
    }
    return "";
}


/***/ }),

/***/ "./client/src/modules/lifecycle/example-notification-service/lifecycle.ts":
/*!********************************************************************************!*\
  !*** ./client/src/modules/lifecycle/example-notification-service/lifecycle.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExampleNotificationServiceProvider: () => (/* binding */ ExampleNotificationServiceProvider)
/* harmony export */ });
/* harmony import */ var workspace_platform_starter_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workspace-platform-starter/utils */ "./client/src/framework/utils.ts");

/**
 * Implementation for the example notification service lifecycle provider.
 */
class ExampleNotificationServiceProvider {
    /**
     * Initialize the module.
     * @param definition The definition of the module from configuration include custom options.
     * @param loggerCreator For logging entries.
     * @param helpers Helper methods for the module to interact with the application core.
     * @returns Nothing.
     */
    async initialize(definition, loggerCreator, helpers) {
        this._definition = definition;
        this._logger = loggerCreator(`ExampleNotificationService(${this._definition?.id}):`);
        this._helpers = helpers;
        this._lifeCycleSubscriptions = {};
        this._logger.info("Initializing");
    }
    /**
     * Close down any resources being used by the module.
     * @returns Nothing.
     */
    async closedown() {
        this._logger?.info("Closedown");
        // disconnect from websocket/server sent event source for example
        await this.stopNotificationService();
    }
    /**
     * Get the lifecycle events.
     * @returns The map of lifecycle events.
     */
    async get() {
        const lifecycleMap = {};
        lifecycleMap["after-bootstrap"] = async (platform, customData) => {
            await this.startNotificationService();
        };
        return lifecycleMap;
    }
    /**
     * Starts the notification service.
     */
    async startNotificationService() {
        const serverUrl = this._definition?.data?.exampleServerUrl;
        this._logger?.info(`Starting notification service and connecting to ${serverUrl ?? "https://examplenotificationserver"} (Not Really...this is an example.)`);
        if (this._helpers?.subscribeLifecycleEvent) {
            // we have been passed the ability to subscribe to lifecycle events.
            if (!this._lifeCycleSubscriptions) {
                this._lifeCycleSubscriptions = {};
            }
            if (!this._notificationSubscriptions) {
                this._notificationSubscriptions = {};
            }
            if (this._helpers?.getNotificationClient) {
                this._notificationClient = await this._helpers.getNotificationClient();
            }
            if (this._notificationClient) {
                await this.setupNotificationEventListeners();
                if (this._definition?.data?.notifyOn?.appsChanged !== false) {
                    const appsChangedSubscription = this._helpers?.subscribeLifecycleEvent("apps-changed", async () => {
                        const notification = {
                            title: "Apps Changed Notification",
                            body: `The list of apps on this platform has changed.This was generated by the example notification service (moduleId: ${this._definition?.id}).`,
                            toast: "transient",
                            category: "default",
                            template: "markdown"
                        };
                        await this._notificationClient?.create(notification);
                    });
                    this._lifeCycleSubscriptions[appsChangedSubscription] = "apps-changed";
                }
                if (this._definition?.data?.notifyOn?.favoriteChanged !== false) {
                    const favoriteChangedSubscription = this._helpers?.subscribeLifecycleEvent("favorite-changed", async () => {
                        const notification = {
                            title: "Favorite Changed Notification",
                            body: `You have changed a favorite on this platform.This was generated by the example notification service (moduleId: ${this._definition?.id}).`,
                            toast: "transient",
                            category: "default",
                            template: "markdown"
                        };
                        await this._notificationClient?.create(notification);
                    });
                    this._lifeCycleSubscriptions[favoriteChangedSubscription] = "favorite-changed";
                }
                if (this._definition?.data?.notifyOn?.pageChanged !== false) {
                    const pageChangedSubscription = this._helpers?.subscribeLifecycleEvent("page-changed", async () => {
                        const notification = {
                            title: "Page Changed Notification",
                            body: `You have changed the page on this platform.This was generated by the example notification service (moduleId: ${this._definition?.id}).`,
                            toast: "transient",
                            category: "default",
                            template: "markdown"
                        };
                        await this._notificationClient?.create(notification);
                    });
                    this._lifeCycleSubscriptions[pageChangedSubscription] = "page-changed";
                }
                if (this._definition?.data?.notifyOn?.themeChanged !== false) {
                    const themeChangedSubscription = this._helpers?.subscribeLifecycleEvent("theme-changed", async () => {
                        const notification = {
                            title: "Theme Changed",
                            body: `You have changed the theme for this platform. This was generated by the example notification service (moduleId: ${this._definition?.id}).`,
                            toast: "transient",
                            category: "default",
                            template: "markdown",
                            form: [
                                {
                                    type: "boolean",
                                    key: "intended theme change",
                                    label: "Did you intend to change the theme?",
                                    widget: {
                                        type: "Toggle"
                                    }
                                }
                            ],
                            buttons: [
                                {
                                    title: "Acknowledged",
                                    type: "button",
                                    cta: true,
                                    submit: true
                                }
                            ]
                        };
                        await this._notificationClient?.create(notification);
                    });
                    this._lifeCycleSubscriptions[themeChangedSubscription] = "theme-changed";
                }
                if (this._definition?.data?.notifyOn?.workspaceChanged !== false) {
                    const workspaceChangedSubscription = this._helpers?.subscribeLifecycleEvent("workspace-changed", async () => {
                        const notification = {
                            title: "Workspace Changed",
                            body: `You have changed your workspace. This was generated by the example notification service (moduleId: ${this._definition?.id}).`,
                            toast: "transient",
                            category: "default",
                            template: "markdown",
                            buttons: [
                                {
                                    title: "Acknowledged",
                                    type: "button",
                                    cta: true,
                                    onClick: {
                                        task: "acknowledge-task",
                                        customData: {
                                            message: "This is the response data"
                                        }
                                    }
                                },
                                {
                                    title: "Cancel",
                                    type: "button"
                                }
                            ]
                        };
                        await this._notificationClient?.create(notification);
                    });
                    this._lifeCycleSubscriptions[workspaceChangedSubscription] = "workspace-changed";
                }
            }
        }
    }
    /**
     * Stops the notification service.
     */
    async stopNotificationService() {
        this._logger?.info("Stopping notification service (Not Really...this is an example.)");
        if (this._helpers?.unsubscribeLifecycleEvent && this._lifeCycleSubscriptions) {
            for (const [key, value] of Object.entries(this._lifeCycleSubscriptions)) {
                this._helpers.unsubscribeLifecycleEvent(key, value);
            }
        }
        await this.removeNotificationEventListeners();
    }
    /**
     * Setup listeners using the notification client fetched via a helper.
     */
    async setupNotificationEventListeners() {
        if (!(0,workspace_platform_starter_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this._notificationClient) && !(0,workspace_platform_starter_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this._notificationSubscriptions)) {
            const actionEventHandler = (event) => {
                this._logger?.info("Event for notification action received.", event);
            };
            await this._notificationClient.addEventListener("notification-action", actionEventHandler);
            this._notificationSubscriptions["notification-action"] = actionEventHandler;
            const closedEventHandler = (event) => {
                this._logger?.info("Event for notification closed received.", event);
            };
            await this._notificationClient.addEventListener("notification-closed", closedEventHandler);
            this._notificationSubscriptions["notification-closed"] = closedEventHandler;
            const createdEventHandler = (event) => {
                this._logger?.info("Event for notification created received.", event);
            };
            await this._notificationClient.addEventListener("notification-created", createdEventHandler);
            this._notificationSubscriptions["notification-created"] = createdEventHandler;
            const formSubmittedEventHandler = (event) => {
                this._logger?.info("Event for notification form submitted received.", event);
            };
            await this._notificationClient.addEventListener("notification-form-submitted", formSubmittedEventHandler);
            this._notificationSubscriptions["notification-form-submitted"] = formSubmittedEventHandler;
            const reminderCreatedEventHandler = (event) => {
                this._logger?.info("Event for notification reminder created received.", event);
            };
            await this._notificationClient.addEventListener("notification-reminder-created", reminderCreatedEventHandler);
            this._notificationSubscriptions["notification-reminder-created"] = reminderCreatedEventHandler;
            const reminderRemovedEventHandler = (event) => {
                this._logger?.info("Event for notification reminder removed received.", event);
            };
            await this._notificationClient.addEventListener("notification-reminder-removed", reminderRemovedEventHandler);
            this._notificationSubscriptions["notification-reminder-removed"] = reminderRemovedEventHandler;
            const toastDismissedEventHandler = (event) => {
                this._logger?.info("Event for notification toast dismissed received.", event);
            };
            await this._notificationClient.addEventListener("notification-toast-dismissed", toastDismissedEventHandler);
            this._notificationSubscriptions["notification-toast-dismissed"] = toastDismissedEventHandler;
            const notificationsCountChangedEventHandler = (event) => {
                this._logger?.info("Event for notification count changed received.", event);
            };
            await this._notificationClient.addEventListener("notifications-count-changed", notificationsCountChangedEventHandler);
            this._notificationSubscriptions["notifications-count-changed"] = notificationsCountChangedEventHandler;
        }
    }
    /**
     * Clean up notification subscriptions.
     */
    async removeNotificationEventListeners() {
        if (!(0,workspace_platform_starter_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this._notificationClient) && !(0,workspace_platform_starter_utils__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(this._notificationSubscriptions)) {
            for (const [key, value] of Object.entries(this._notificationSubscriptions)) {
                await this._notificationClient.removeEventListener(key, value);
            }
        }
    }
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************************************!*\
  !*** ./client/src/modules/lifecycle/example-notification-service/index.ts ***!
  \****************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   entryPoints: () => (/* binding */ entryPoints)
/* harmony export */ });
/* harmony import */ var _lifecycle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lifecycle */ "./client/src/modules/lifecycle/example-notification-service/lifecycle.ts");

/**
 * Define the entry points for the module.
 */
const entryPoints = {
    lifecycle: new _lifecycle__WEBPACK_IMPORTED_MODULE_0__.ExampleNotificationServiceProvider()
};

})();

var __webpack_exports__entryPoints = __webpack_exports__.entryPoints;
export { __webpack_exports__entryPoints as entryPoints };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS1ub3RpZmljYXRpb24tc2VydmljZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztHQUlHO0FBQ0ksU0FBUyxPQUFPLENBQUMsS0FBYztJQUNyQyxnREFBZ0Q7SUFDaEQsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDOUMsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSSxTQUFTLFFBQVEsQ0FBQyxLQUFjO0lBQ3RDLGdEQUFnRDtJQUNoRCxPQUFPLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3BHLENBQUM7QUFFRDs7OztHQUlHO0FBQ0ksU0FBUyxRQUFRLENBQUMsS0FBYztJQUN0QyxnREFBZ0Q7SUFDaEQsT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO0FBQzNFLENBQUM7QUFFRDs7OztHQUlHO0FBQ0ksU0FBUyxhQUFhLENBQUMsS0FBYztJQUMzQyxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLFNBQVMsUUFBUSxDQUFDLEtBQWM7SUFDdEMsZ0RBQWdEO0lBQ2hELE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQztBQUMzRSxDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLFNBQVMsYUFBYSxDQUFDLEtBQWM7SUFDM0MsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FB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QyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxDQUFDO2dCQUM1RSxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FDakQsR0FBa0MsRUFDbEMsS0FBYyxDQUNkLENBQUM7WUFDSCxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7Q0FDRDs7Ozs7OztTQzVXRDtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTGlFO0FBRWpFOztHQUVHO0FBQ0ksTUFBTSxXQUFXLEdBQXFEO0lBQzVFLFNBQVMsRUFBRSxJQUFJLDBFQUFrQyxFQUFFO0NBQ25ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0td29ya3NwYWNlLXBsYXRmb3JtLXN0YXJ0ZXIvLi9jbGllbnQvc3JjL2ZyYW1ld29yay91dGlscy50cyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0td29ya3NwYWNlLXBsYXRmb3JtLXN0YXJ0ZXIvLi9jbGllbnQvc3JjL21vZHVsZXMvbGlmZWN5Y2xlL2V4YW1wbGUtbm90aWZpY2F0aW9uLXNlcnZpY2UvbGlmZWN5Y2xlLnRzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS13b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0td29ya3NwYWNlLXBsYXRmb3JtLXN0YXJ0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS13b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS13b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS13b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci8uL2NsaWVudC9zcmMvbW9kdWxlcy9saWZlY3ljbGUvZXhhbXBsZS1ub3RpZmljYXRpb24tc2VydmljZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3QgaWYgYSB2YWx1ZSBpcyBhIHVuZGVmaW5lZCBvciBudWxsLlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgbnVsbCB8IHVuZGVmaW5lZCB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRyZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbDtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIGEgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICogQHBhcmFtIHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMgVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBvYmplY3Qge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIGEgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgc3RyaW5nIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIjtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIGEgdmFsdWUgaXMgYSBzdHJpbmcgdGhhdCBpcyBub3QgZW1wdHkuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIHN0cmluZyB0aGF0IGlzIG5vdCBlbXB0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU3RyaW5nVmFsdWUodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBzdHJpbmcge1xuXHRyZXR1cm4gaXNTdHJpbmcodmFsdWUpICYmIHZhbHVlLnRyaW0oKS5sZW5ndGggPiAwO1xufVxuXG4vKipcbiAqIFRlc3QgaWYgYSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgbnVtYmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBudW1iZXIge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiO1xufVxuXG4vKipcbiAqIFRlc3QgaWYgYSB2YWx1ZSBpcyBhIG51bWJlciB3aXRoIGEgcmVhbCB2YWx1ZSBpLmUuIG5vdCBOYU4gb3IgSW5maW5pdGUuXG4gKiBAcGFyYW0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyBUcnVlIGlmIHRoZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyVmFsdWUodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBudW1iZXIge1xuXHRyZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmICFOdW1iZXIuaXNOYU4odmFsdWUpICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSk7XG59XG5cbi8qKlxuICogVGVzdCBpZiBhIHZhbHVlIGlzIGEgYm9vbGVhbi5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGEgYm9vbGVhbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZTogdW5rbm93bik6IHZhbHVlIGlzIGJvb2xlYW4ge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcblx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIjtcbn1cblxuLyoqXG4gKiBUZXN0IGlmIGEgdmFsdWUgaXMgYW4gaW50ZWdlci5cbiAqIEBwYXJhbSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIHZhbHVlIGlzIGFuIGludGVnZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWU6IHVua25vd24pOiB2YWx1ZSBpcyBudW1iZXIge1xuXHRyZXR1cm4gaXNOdW1iZXIodmFsdWUpICYmIE51bWJlci5pc0ludGVnZXIodmFsdWUpO1xufVxuXG4vKipcbiAqIERlZXAgY2xvbmUgYW4gb2JqZWN0LlxuICogQHBhcmFtIG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMgVGhlIGNsb25lIG9mIHRoZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvYmplY3RDbG9uZTxUPihvYmo6IFQpOiBUIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdHJldHVybiBvYmogPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbi8qKlxuICogUG9seWZpbGxzIHJhbmRvbVVVSUQgaWYgcnVubmluZyBpbiBhIG5vbi1zZWN1cmUgY29udGV4dC5cbiAqIEByZXR1cm5zIFRoZSByYW5kb20gVVVJRC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVVVSUQoKTogc3RyaW5nIHtcblx0aWYgKFwicmFuZG9tVVVJRFwiIGluIGdsb2JhbFRoaXMuY3J5cHRvKSB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG5cdFx0cmV0dXJuIGdsb2JhbFRoaXMuY3J5cHRvLnJhbmRvbVVVSUQoKTtcblx0fVxuXHQvLyBQb2x5ZmlsbCB0aGUgd2luZG93LmNyeXB0by5yYW5kb21VVUlEIGlmIHdlIGFyZSBydW5uaW5nIGluIGEgbm9uIHNlY3VyZSBjb250ZXh0IHRoYXQgZG9lc24ndCBoYXZlIGl0XG5cdC8vIHdlIGFyZSBzdGlsbCB1c2luZyB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyB3aGljaCBpcyBhbHdheXMgYXZhaWxhYmxlXG5cdC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMTE3NTIzLzI4MDAyMThcblx0LyoqXG5cdCAqIEdldCByYW5kb20gaGV4IHZhbHVlLlxuXHQgKiBAcGFyYW0gYyBUaGUgbnVtYmVyIHRvIGJhc2UgdGhlIHJhbmRvbSB2YWx1ZSBvbi5cblx0ICogQHJldHVybnMgVGhlIHJhbmRvbSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFJhbmRvbUhleChjOiBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG5cdFx0Y29uc3Qgcm5kID0gZ2xvYmFsVGhpcy5jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmICgxNSA+PiAoTnVtYmVyKGMpIC8gNCkpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuXHRcdFx0KE51bWJlcihjKSBeIHJuZCkudG9TdHJpbmcoMTYpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gXCIxMDAwMDAwMC0xMDAwLTQwMDAtODAwMC0xMDAwMDAwMDAwMDBcIi5yZXBsYWNlKC9bMDE4XS9nLCBnZXRSYW5kb21IZXgpO1xufVxuXG4vKipcbiAqIEZvcm1hdCBhbiBlcnJvciB0byBhIHJlYWRhYmxlIHN0cmluZy5cbiAqIEBwYXJhbSBlcnIgVGhlIGVycm9yIHRvIGZvcm1hdC5cbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcihlcnI6IHVua25vd24pOiBzdHJpbmcge1xuXHRpZiAoaXNFbXB0eShlcnIpKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH0gZWxzZSBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRyZXR1cm4gZXJyLm1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGVyciA9PT0gXCJzdHJpbmdcIikge1xuXHRcdHJldHVybiBlcnI7XG5cdH0gZWxzZSBpZiAoaXNPYmplY3QoZXJyKSAmJiBcIm1lc3NhZ2VcIiBpbiBlcnIgJiYgaXNTdHJpbmcoZXJyLm1lc3NhZ2UpKSB7XG5cdFx0cmV0dXJuIGVyci5tZXNzYWdlO1xuXHR9XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShlcnIpO1xufVxuXG4vKipcbiAqIEEgYmFzaWMgc3RyaW5nIHNhbml0aXplIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyBhbmdsZSBicmFja2V0cyA8PiBmcm9tIGEgc3RyaW5nLlxuICogQHBhcmFtIGNvbnRlbnQgdGhlIGNvbnRlbnQgdG8gc2FuaXRpemVcbiAqIEByZXR1cm5zIGEgc3RyaW5nIHdpdGhvdXQgYW5nbGUgYnJhY2tldHMgPD5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplU3RyaW5nKGNvbnRlbnQ6IHVua25vd24pOiBzdHJpbmcge1xuXHRpZiAoaXNTdHJpbmdWYWx1ZShjb250ZW50KSkge1xuXHRcdHJldHVybiBjb250ZW50XG5cdFx0XHQucmVwbGFjZSgvPFtePl0qPj8vZ20sIFwiXCIpXG5cdFx0XHQucmVwbGFjZSgvJmd0Oy9nLCBcIj5cIilcblx0XHRcdC5yZXBsYWNlKC8mbHQ7L2csIFwiPFwiKVxuXHRcdFx0LnJlcGxhY2UoLyZhbXA7L2csIFwiJlwiKVxuXHRcdFx0LnJlcGxhY2UoLyZuYnNwOy9nLCBcIiBcIilcblx0XHRcdC5yZXBsYWNlKC9cXG5cXHMqXFxuL2csIFwiXFxuXCIpO1xuXHR9XG5cdHJldHVybiBcIlwiO1xufVxuIiwiaW1wb3J0IHR5cGUgeyBXb3Jrc3BhY2VQbGF0Zm9ybU1vZHVsZSB9IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2UtcGxhdGZvcm1cIjtcbmltcG9ydCB0eXBlIHtcblx0Tm90aWZpY2F0aW9uQWN0aW9uRXZlbnQsXG5cdE5vdGlmaWNhdGlvbkNsb3NlZEV2ZW50LFxuXHROb3RpZmljYXRpb25DcmVhdGVkRXZlbnQsXG5cdE5vdGlmaWNhdGlvbkZvcm1TdWJtaXR0ZWRFdmVudCxcblx0Tm90aWZpY2F0aW9uUmVtaW5kZXJDcmVhdGVkRXZlbnQsXG5cdE5vdGlmaWNhdGlvblJlbWluZGVyUmVtb3ZlZEV2ZW50LFxuXHROb3RpZmljYXRpb25Ub2FzdERpc21pc3NlZEV2ZW50LFxuXHROb3RpZmljYXRpb25zQ291bnRDaGFuZ2VkLFxuXHROb3RpZmljYXRpb25PcHRpb25zXG59IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2Uvbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHR5cGUge1xuXHRMaWZlY3ljbGUsXG5cdExpZmVjeWNsZUV2ZW50TWFwLFxuXHRMaWZlY3ljbGVFdmVudHNcbn0gZnJvbSBcIndvcmtzcGFjZS1wbGF0Zm9ybS1zdGFydGVyL3NoYXBlcy9saWZlY3ljbGUtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IExvZ2dlciwgTG9nZ2VyQ3JlYXRvciB9IGZyb20gXCJ3b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci9zaGFwZXMvbG9nZ2VyLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBNb2R1bGVEZWZpbml0aW9uLCBNb2R1bGVIZWxwZXJzIH0gZnJvbSBcIndvcmtzcGFjZS1wbGF0Zm9ybS1zdGFydGVyL3NoYXBlcy9tb2R1bGUtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7XG5cdE5vdGlmaWNhdGlvbkNsaWVudCxcblx0Tm90aWZpY2F0aW9uc0V2ZW50TWFwXG59IGZyb20gXCJ3b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci9zaGFwZXMvbm90aWZpY2F0aW9uLXNoYXBlc1wiO1xuaW1wb3J0IHsgaXNFbXB0eSB9IGZyb20gXCJ3b3Jrc3BhY2UtcGxhdGZvcm0tc3RhcnRlci91dGlsc1wiO1xuaW1wb3J0IHR5cGUgeyBFeGFtcGxlTm90aWZpY2F0aW9uU2VydmljZVByb3ZpZGVyT3B0aW9ucyB9IGZyb20gXCIuL3NoYXBlc1wiO1xuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIGZvciB0aGUgZXhhbXBsZSBub3RpZmljYXRpb24gc2VydmljZSBsaWZlY3ljbGUgcHJvdmlkZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlTm90aWZpY2F0aW9uU2VydmljZVByb3ZpZGVyXG5cdGltcGxlbWVudHMgTGlmZWN5Y2xlPEV4YW1wbGVOb3RpZmljYXRpb25TZXJ2aWNlUHJvdmlkZXJPcHRpb25zPlxue1xuXHQvKipcblx0ICogVGhlIG1vZHVsZSBkZWZpbml0aW9uIGluY2x1ZGluZyBzZXR0aW5ncy5cblx0ICogQGludGVybmFsXG5cdCAqL1xuXHRwcml2YXRlIF9kZWZpbml0aW9uOiBNb2R1bGVEZWZpbml0aW9uPEV4YW1wbGVOb3RpZmljYXRpb25TZXJ2aWNlUHJvdmlkZXJPcHRpb25zPiB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogVGhlIGxvZ2dlciBmb3IgZGlzcGxheWluZyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBtb2R1bGUuXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0cHJpdmF0ZSBfbG9nZ2VyPzogTG9nZ2VyO1xuXG5cdC8qKlxuXHQgKiBIZWxwZXIgbWV0aG9kcyBmb3IgdGhlIG1vZHVsZS5cblx0ICogQGludGVybmFsXG5cdCAqL1xuXHRwcml2YXRlIF9oZWxwZXJzOiBNb2R1bGVIZWxwZXJzIHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBbiBvYmplY3QgY29udGFpbmluZyBjdXJyZW50IHN1YnNjcmlwdGlvbnMuXG5cdCAqIEBpbnRlcm5hbFxuXHQgKi9cblx0cHJpdmF0ZSBfbGlmZUN5Y2xlU3Vic2NyaXB0aW9uczogeyBba2V5OiBzdHJpbmddOiBMaWZlY3ljbGVFdmVudHMgfSB8IHVuZGVmaW5lZDtcblxuXHQvKipcblx0ICogQW4gb2JqZWN0IGNvbnRhaW5pbmcgY3VycmVudCBzdWJzY3JpcHRpb25zLlxuXHQgKiBAaW50ZXJuYWxcblx0ICovXG5cdHByaXZhdGUgX25vdGlmaWNhdGlvblN1YnNjcmlwdGlvbnM6XG5cdFx0fCB7IFtrZXkgaW4ga2V5b2YgTm90aWZpY2F0aW9uc0V2ZW50TWFwXT86IChldmVudDogTm90aWZpY2F0aW9uc0V2ZW50TWFwW2tleV0pID0+IHZvaWQgfVxuXHRcdHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBBIG5vdGlmaWNhdGlvbiBjbGllbnQgaWYgYXZhaWxhYmxlLlxuXHQgKiBAaW50ZXJuYWxcblx0ICovXG5cdHByaXZhdGUgX25vdGlmaWNhdGlvbkNsaWVudDogTm90aWZpY2F0aW9uQ2xpZW50IHwgdW5kZWZpbmVkO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHRoZSBtb2R1bGUuXG5cdCAqIEBwYXJhbSBkZWZpbml0aW9uIFRoZSBkZWZpbml0aW9uIG9mIHRoZSBtb2R1bGUgZnJvbSBjb25maWd1cmF0aW9uIGluY2x1ZGUgY3VzdG9tIG9wdGlvbnMuXG5cdCAqIEBwYXJhbSBsb2dnZXJDcmVhdG9yIEZvciBsb2dnaW5nIGVudHJpZXMuXG5cdCAqIEBwYXJhbSBoZWxwZXJzIEhlbHBlciBtZXRob2RzIGZvciB0aGUgbW9kdWxlIHRvIGludGVyYWN0IHdpdGggdGhlIGFwcGxpY2F0aW9uIGNvcmUuXG5cdCAqIEByZXR1cm5zIE5vdGhpbmcuXG5cdCAqL1xuXHRwdWJsaWMgYXN5bmMgaW5pdGlhbGl6ZShcblx0XHRkZWZpbml0aW9uOiBNb2R1bGVEZWZpbml0aW9uPEV4YW1wbGVOb3RpZmljYXRpb25TZXJ2aWNlUHJvdmlkZXJPcHRpb25zPixcblx0XHRsb2dnZXJDcmVhdG9yOiBMb2dnZXJDcmVhdG9yLFxuXHRcdGhlbHBlcnM6IE1vZHVsZUhlbHBlcnNcblx0KTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhpcy5fZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG5cdFx0dGhpcy5fbG9nZ2VyID0gbG9nZ2VyQ3JlYXRvcihgRXhhbXBsZU5vdGlmaWNhdGlvblNlcnZpY2UoJHt0aGlzLl9kZWZpbml0aW9uPy5pZH0pOmApO1xuXHRcdHRoaXMuX2hlbHBlcnMgPSBoZWxwZXJzO1xuXHRcdHRoaXMuX2xpZmVDeWNsZVN1YnNjcmlwdGlvbnMgPSB7fTtcblx0XHR0aGlzLl9sb2dnZXIuaW5mbyhcIkluaXRpYWxpemluZ1wiKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDbG9zZSBkb3duIGFueSByZXNvdXJjZXMgYmVpbmcgdXNlZCBieSB0aGUgbW9kdWxlLlxuXHQgKiBAcmV0dXJucyBOb3RoaW5nLlxuXHQgKi9cblx0cHVibGljIGFzeW5jIGNsb3NlZG93bigpOiBQcm9taXNlPHZvaWQ+IHtcblx0XHR0aGlzLl9sb2dnZXI/LmluZm8oXCJDbG9zZWRvd25cIik7XG5cdFx0Ly8gZGlzY29ubmVjdCBmcm9tIHdlYnNvY2tldC9zZXJ2ZXIgc2VudCBldmVudCBzb3VyY2UgZm9yIGV4YW1wbGVcblx0XHRhd2FpdCB0aGlzLnN0b3BOb3RpZmljYXRpb25TZXJ2aWNlKCk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBsaWZlY3ljbGUgZXZlbnRzLlxuXHQgKiBAcmV0dXJucyBUaGUgbWFwIG9mIGxpZmVjeWNsZSBldmVudHMuXG5cdCAqL1xuXHRwdWJsaWMgYXN5bmMgZ2V0KCk6IFByb21pc2U8TGlmZWN5Y2xlRXZlbnRNYXA+IHtcblx0XHRjb25zdCBsaWZlY3ljbGVNYXA6IExpZmVjeWNsZUV2ZW50TWFwID0ge307XG5cblx0XHRsaWZlY3ljbGVNYXBbXCJhZnRlci1ib290c3RyYXBcIl0gPSBhc3luYyAoXG5cdFx0XHRwbGF0Zm9ybTogV29ya3NwYWNlUGxhdGZvcm1Nb2R1bGUsXG5cdFx0XHRjdXN0b21EYXRhPzogdW5rbm93blxuXHRcdCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdFx0YXdhaXQgdGhpcy5zdGFydE5vdGlmaWNhdGlvblNlcnZpY2UoKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIGxpZmVjeWNsZU1hcDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgdGhlIG5vdGlmaWNhdGlvbiBzZXJ2aWNlLlxuXHQgKi9cblx0cHJpdmF0ZSBhc3luYyBzdGFydE5vdGlmaWNhdGlvblNlcnZpY2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0Y29uc3Qgc2VydmVyVXJsID0gdGhpcy5fZGVmaW5pdGlvbj8uZGF0YT8uZXhhbXBsZVNlcnZlclVybDtcblx0XHR0aGlzLl9sb2dnZXI/LmluZm8oXG5cdFx0XHRgU3RhcnRpbmcgbm90aWZpY2F0aW9uIHNlcnZpY2UgYW5kIGNvbm5lY3RpbmcgdG8gJHtcblx0XHRcdFx0c2VydmVyVXJsID8/IFwiaHR0cHM6Ly9leGFtcGxlbm90aWZpY2F0aW9uc2VydmVyXCJcblx0XHRcdH0gKE5vdCBSZWFsbHkuLi50aGlzIGlzIGFuIGV4YW1wbGUuKWBcblx0XHQpO1xuXG5cdFx0aWYgKHRoaXMuX2hlbHBlcnM/LnN1YnNjcmliZUxpZmVjeWNsZUV2ZW50KSB7XG5cdFx0XHQvLyB3ZSBoYXZlIGJlZW4gcGFzc2VkIHRoZSBhYmlsaXR5IHRvIHN1YnNjcmliZSB0byBsaWZlY3ljbGUgZXZlbnRzLlxuXHRcdFx0aWYgKCF0aGlzLl9saWZlQ3ljbGVTdWJzY3JpcHRpb25zKSB7XG5cdFx0XHRcdHRoaXMuX2xpZmVDeWNsZVN1YnNjcmlwdGlvbnMgPSB7fTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy5fbm90aWZpY2F0aW9uU3Vic2NyaXB0aW9ucykge1xuXHRcdFx0XHR0aGlzLl9ub3RpZmljYXRpb25TdWJzY3JpcHRpb25zID0ge307XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLl9oZWxwZXJzPy5nZXROb3RpZmljYXRpb25DbGllbnQpIHtcblx0XHRcdFx0dGhpcy5fbm90aWZpY2F0aW9uQ2xpZW50ID0gYXdhaXQgdGhpcy5faGVscGVycy5nZXROb3RpZmljYXRpb25DbGllbnQoKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudCkge1xuXHRcdFx0XHRhd2FpdCB0aGlzLnNldHVwTm90aWZpY2F0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdFx0XHRpZiAodGhpcy5fZGVmaW5pdGlvbj8uZGF0YT8ubm90aWZ5T24/LmFwcHNDaGFuZ2VkICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGNvbnN0IGFwcHNDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5faGVscGVycz8uc3Vic2NyaWJlTGlmZWN5Y2xlRXZlbnQoXCJhcHBzLWNoYW5nZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJBcHBzIENoYW5nZWQgTm90aWZpY2F0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IGBUaGUgbGlzdCBvZiBhcHBzIG9uIHRoaXMgcGxhdGZvcm0gaGFzIGNoYW5nZWQuVGhpcyB3YXMgZ2VuZXJhdGVkIGJ5IHRoZSBleGFtcGxlIG5vdGlmaWNhdGlvbiBzZXJ2aWNlIChtb2R1bGVJZDogJHt0aGlzLl9kZWZpbml0aW9uPy5pZH0pLmAsXG5cdFx0XHRcdFx0XHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdFx0XHRcdFx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCJcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLl9ub3RpZmljYXRpb25DbGllbnQ/LmNyZWF0ZShub3RpZmljYXRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuX2xpZmVDeWNsZVN1YnNjcmlwdGlvbnNbYXBwc0NoYW5nZWRTdWJzY3JpcHRpb25dID0gXCJhcHBzLWNoYW5nZWRcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9kZWZpbml0aW9uPy5kYXRhPy5ub3RpZnlPbj8uZmF2b3JpdGVDaGFuZ2VkICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGNvbnN0IGZhdm9yaXRlQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX2hlbHBlcnM/LnN1YnNjcmliZUxpZmVjeWNsZUV2ZW50KFxuXHRcdFx0XHRcdFx0XCJmYXZvcml0ZS1jaGFuZ2VkXCIsXG5cdFx0XHRcdFx0XHRhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJGYXZvcml0ZSBDaGFuZ2VkIE5vdGlmaWNhdGlvblwiLFxuXHRcdFx0XHRcdFx0XHRcdGJvZHk6IGBZb3UgaGF2ZSBjaGFuZ2VkIGEgZmF2b3JpdGUgb24gdGhpcyBwbGF0Zm9ybS5UaGlzIHdhcyBnZW5lcmF0ZWQgYnkgdGhlIGV4YW1wbGUgbm90aWZpY2F0aW9uIHNlcnZpY2UgKG1vZHVsZUlkOiAke3RoaXMuX2RlZmluaXRpb24/LmlkfSkuYCxcblx0XHRcdFx0XHRcdFx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIlxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLl9ub3RpZmljYXRpb25DbGllbnQ/LmNyZWF0ZShub3RpZmljYXRpb24pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0dGhpcy5fbGlmZUN5Y2xlU3Vic2NyaXB0aW9uc1tmYXZvcml0ZUNoYW5nZWRTdWJzY3JpcHRpb25dID0gXCJmYXZvcml0ZS1jaGFuZ2VkXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fZGVmaW5pdGlvbj8uZGF0YT8ubm90aWZ5T24/LnBhZ2VDaGFuZ2VkICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGNvbnN0IHBhZ2VDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5faGVscGVycz8uc3Vic2NyaWJlTGlmZWN5Y2xlRXZlbnQoXCJwYWdlLWNoYW5nZWRcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3Qgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25PcHRpb25zID0ge1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCJQYWdlIENoYW5nZWQgTm90aWZpY2F0aW9uXCIsXG5cdFx0XHRcdFx0XHRcdGJvZHk6IGBZb3UgaGF2ZSBjaGFuZ2VkIHRoZSBwYWdlIG9uIHRoaXMgcGxhdGZvcm0uVGhpcyB3YXMgZ2VuZXJhdGVkIGJ5IHRoZSBleGFtcGxlIG5vdGlmaWNhdGlvbiBzZXJ2aWNlIChtb2R1bGVJZDogJHt0aGlzLl9kZWZpbml0aW9uPy5pZH0pLmAsXG5cdFx0XHRcdFx0XHRcdHRvYXN0OiBcInRyYW5zaWVudFwiLFxuXHRcdFx0XHRcdFx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFx0XHRcdHRlbXBsYXRlOiBcIm1hcmtkb3duXCJcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRhd2FpdCB0aGlzLl9ub3RpZmljYXRpb25DbGllbnQ/LmNyZWF0ZShub3RpZmljYXRpb24pO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuX2xpZmVDeWNsZVN1YnNjcmlwdGlvbnNbcGFnZUNoYW5nZWRTdWJzY3JpcHRpb25dID0gXCJwYWdlLWNoYW5nZWRcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9kZWZpbml0aW9uPy5kYXRhPy5ub3RpZnlPbj8udGhlbWVDaGFuZ2VkICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdGNvbnN0IHRoZW1lQ2hhbmdlZFN1YnNjcmlwdGlvbiA9IHRoaXMuX2hlbHBlcnM/LnN1YnNjcmliZUxpZmVjeWNsZUV2ZW50KFxuXHRcdFx0XHRcdFx0XCJ0aGVtZS1jaGFuZ2VkXCIsXG5cdFx0XHRcdFx0XHRhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJUaGVtZSBDaGFuZ2VkXCIsXG5cdFx0XHRcdFx0XHRcdFx0Ym9keTogYFlvdSBoYXZlIGNoYW5nZWQgdGhlIHRoZW1lIGZvciB0aGlzIHBsYXRmb3JtLiBUaGlzIHdhcyBnZW5lcmF0ZWQgYnkgdGhlIGV4YW1wbGUgbm90aWZpY2F0aW9uIHNlcnZpY2UgKG1vZHVsZUlkOiAke3RoaXMuX2RlZmluaXRpb24/LmlkfSkuYCxcblx0XHRcdFx0XHRcdFx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRcdFx0XHRcdFx0XHRmb3JtOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYm9vbGVhblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk6IFwiaW50ZW5kZWQgdGhlbWUgY2hhbmdlXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBcIkRpZCB5b3UgaW50ZW5kIHRvIGNoYW5nZSB0aGUgdGhlbWU/XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpZGdldDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiVG9nZ2xlXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdFx0YnV0dG9uczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJBY2tub3dsZWRnZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y3RhOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJtaXQ6IHRydWVcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudD8uY3JlYXRlKG5vdGlmaWNhdGlvbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLl9saWZlQ3ljbGVTdWJzY3JpcHRpb25zW3RoZW1lQ2hhbmdlZFN1YnNjcmlwdGlvbl0gPSBcInRoZW1lLWNoYW5nZWRcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0aGlzLl9kZWZpbml0aW9uPy5kYXRhPy5ub3RpZnlPbj8ud29ya3NwYWNlQ2hhbmdlZCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHRjb25zdCB3b3Jrc3BhY2VDaGFuZ2VkU3Vic2NyaXB0aW9uID0gdGhpcy5faGVscGVycz8uc3Vic2NyaWJlTGlmZWN5Y2xlRXZlbnQoXG5cdFx0XHRcdFx0XHRcIndvcmtzcGFjZS1jaGFuZ2VkXCIsXG5cdFx0XHRcdFx0XHRhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uT3B0aW9ucyA9IHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogXCJXb3Jrc3BhY2UgQ2hhbmdlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdGJvZHk6IGBZb3UgaGF2ZSBjaGFuZ2VkIHlvdXIgd29ya3NwYWNlLiBUaGlzIHdhcyBnZW5lcmF0ZWQgYnkgdGhlIGV4YW1wbGUgbm90aWZpY2F0aW9uIHNlcnZpY2UgKG1vZHVsZUlkOiAke3RoaXMuX2RlZmluaXRpb24/LmlkfSkuYCxcblx0XHRcdFx0XHRcdFx0XHR0b2FzdDogXCJ0cmFuc2llbnRcIixcblx0XHRcdFx0XHRcdFx0XHRjYXRlZ29yeTogXCJkZWZhdWx0XCIsXG5cdFx0XHRcdFx0XHRcdFx0dGVtcGxhdGU6IFwibWFya2Rvd25cIixcblx0XHRcdFx0XHRcdFx0XHRidXR0b25zOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBcIkFja25vd2xlZGdlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImJ1dHRvblwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjdGE6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0YXNrOiBcImFja25vd2xlZGdlLXRhc2tcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdXN0b21EYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiBcIlRoaXMgaXMgdGhlIHJlc3BvbnNlIGRhdGFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6IFwiQ2FuY2VsXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudD8uY3JlYXRlKG5vdGlmaWNhdGlvbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR0aGlzLl9saWZlQ3ljbGVTdWJzY3JpcHRpb25zW3dvcmtzcGFjZUNoYW5nZWRTdWJzY3JpcHRpb25dID0gXCJ3b3Jrc3BhY2UtY2hhbmdlZFwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3BzIHRoZSBub3RpZmljYXRpb24gc2VydmljZS5cblx0ICovXG5cdHByaXZhdGUgYXN5bmMgc3RvcE5vdGlmaWNhdGlvblNlcnZpY2UoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0dGhpcy5fbG9nZ2VyPy5pbmZvKFwiU3RvcHBpbmcgbm90aWZpY2F0aW9uIHNlcnZpY2UgKE5vdCBSZWFsbHkuLi50aGlzIGlzIGFuIGV4YW1wbGUuKVwiKTtcblx0XHRpZiAodGhpcy5faGVscGVycz8udW5zdWJzY3JpYmVMaWZlY3ljbGVFdmVudCAmJiB0aGlzLl9saWZlQ3ljbGVTdWJzY3JpcHRpb25zKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9saWZlQ3ljbGVTdWJzY3JpcHRpb25zKSkge1xuXHRcdFx0XHR0aGlzLl9oZWxwZXJzLnVuc3Vic2NyaWJlTGlmZWN5Y2xlRXZlbnQoa2V5LCB2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGF3YWl0IHRoaXMucmVtb3ZlTm90aWZpY2F0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXR1cCBsaXN0ZW5lcnMgdXNpbmcgdGhlIG5vdGlmaWNhdGlvbiBjbGllbnQgZmV0Y2hlZCB2aWEgYSBoZWxwZXIuXG5cdCAqL1xuXHRwcml2YXRlIGFzeW5jIHNldHVwTm90aWZpY2F0aW9uRXZlbnRMaXN0ZW5lcnMoKTogUHJvbWlzZTx2b2lkPiB7XG5cdFx0aWYgKCFpc0VtcHR5KHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudCkgJiYgIWlzRW1wdHkodGhpcy5fbm90aWZpY2F0aW9uU3Vic2NyaXB0aW9ucykpIHtcblx0XHRcdGNvbnN0IGFjdGlvbkV2ZW50SGFuZGxlciA9IChldmVudDogTm90aWZpY2F0aW9uQWN0aW9uRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy5fbG9nZ2VyPy5pbmZvKFwiRXZlbnQgZm9yIG5vdGlmaWNhdGlvbiBhY3Rpb24gcmVjZWl2ZWQuXCIsIGV2ZW50KTtcblx0XHRcdH07XG5cblx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudC5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWFjdGlvblwiLCBhY3Rpb25FdmVudEhhbmRsZXIpO1xuXHRcdFx0dGhpcy5fbm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uc1tcIm5vdGlmaWNhdGlvbi1hY3Rpb25cIl0gPSBhY3Rpb25FdmVudEhhbmRsZXI7XG5cblx0XHRcdGNvbnN0IGNsb3NlZEV2ZW50SGFuZGxlciA9IChldmVudDogTm90aWZpY2F0aW9uQ2xvc2VkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy5fbG9nZ2VyPy5pbmZvKFwiRXZlbnQgZm9yIG5vdGlmaWNhdGlvbiBjbG9zZWQgcmVjZWl2ZWQuXCIsIGV2ZW50KTtcblx0XHRcdH07XG5cblx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudC5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWNsb3NlZFwiLCBjbG9zZWRFdmVudEhhbmRsZXIpO1xuXHRcdFx0dGhpcy5fbm90aWZpY2F0aW9uU3Vic2NyaXB0aW9uc1tcIm5vdGlmaWNhdGlvbi1jbG9zZWRcIl0gPSBjbG9zZWRFdmVudEhhbmRsZXI7XG5cblx0XHRcdGNvbnN0IGNyZWF0ZWRFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IE5vdGlmaWNhdGlvbkNyZWF0ZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLl9sb2dnZXI/LmluZm8oXCJFdmVudCBmb3Igbm90aWZpY2F0aW9uIGNyZWF0ZWQgcmVjZWl2ZWQuXCIsIGV2ZW50KTtcblx0XHRcdH07XG5cblx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudC5hZGRFdmVudExpc3RlbmVyKFwibm90aWZpY2F0aW9uLWNyZWF0ZWRcIiwgY3JlYXRlZEV2ZW50SGFuZGxlcik7XG5cdFx0XHR0aGlzLl9ub3RpZmljYXRpb25TdWJzY3JpcHRpb25zW1wibm90aWZpY2F0aW9uLWNyZWF0ZWRcIl0gPSBjcmVhdGVkRXZlbnRIYW5kbGVyO1xuXG5cdFx0XHRjb25zdCBmb3JtU3VibWl0dGVkRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBOb3RpZmljYXRpb25Gb3JtU3VibWl0dGVkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy5fbG9nZ2VyPy5pbmZvKFwiRXZlbnQgZm9yIG5vdGlmaWNhdGlvbiBmb3JtIHN1Ym1pdHRlZCByZWNlaXZlZC5cIiwgZXZlbnQpO1xuXHRcdFx0fTtcblxuXHRcdFx0YXdhaXQgdGhpcy5fbm90aWZpY2F0aW9uQ2xpZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCIsXG5cdFx0XHRcdGZvcm1TdWJtaXR0ZWRFdmVudEhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLl9ub3RpZmljYXRpb25TdWJzY3JpcHRpb25zW1wibm90aWZpY2F0aW9uLWZvcm0tc3VibWl0dGVkXCJdID0gZm9ybVN1Ym1pdHRlZEV2ZW50SGFuZGxlcjtcblxuXHRcdFx0Y29uc3QgcmVtaW5kZXJDcmVhdGVkRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBOb3RpZmljYXRpb25SZW1pbmRlckNyZWF0ZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLl9sb2dnZXI/LmluZm8oXCJFdmVudCBmb3Igbm90aWZpY2F0aW9uIHJlbWluZGVyIGNyZWF0ZWQgcmVjZWl2ZWQuXCIsIGV2ZW50KTtcblx0XHRcdH07XG5cblx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1jcmVhdGVkXCIsXG5cdFx0XHRcdHJlbWluZGVyQ3JlYXRlZEV2ZW50SGFuZGxlclxuXHRcdFx0KTtcblx0XHRcdHRoaXMuX25vdGlmaWNhdGlvblN1YnNjcmlwdGlvbnNbXCJub3RpZmljYXRpb24tcmVtaW5kZXItY3JlYXRlZFwiXSA9IHJlbWluZGVyQ3JlYXRlZEV2ZW50SGFuZGxlcjtcblxuXHRcdFx0Y29uc3QgcmVtaW5kZXJSZW1vdmVkRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBOb3RpZmljYXRpb25SZW1pbmRlclJlbW92ZWRFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR0aGlzLl9sb2dnZXI/LmluZm8oXCJFdmVudCBmb3Igbm90aWZpY2F0aW9uIHJlbWluZGVyIHJlbW92ZWQgcmVjZWl2ZWQuXCIsIGV2ZW50KTtcblx0XHRcdH07XG5cblx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm5vdGlmaWNhdGlvbi1yZW1pbmRlci1yZW1vdmVkXCIsXG5cdFx0XHRcdHJlbWluZGVyUmVtb3ZlZEV2ZW50SGFuZGxlclxuXHRcdFx0KTtcblx0XHRcdHRoaXMuX25vdGlmaWNhdGlvblN1YnNjcmlwdGlvbnNbXCJub3RpZmljYXRpb24tcmVtaW5kZXItcmVtb3ZlZFwiXSA9IHJlbWluZGVyUmVtb3ZlZEV2ZW50SGFuZGxlcjtcblxuXHRcdFx0Y29uc3QgdG9hc3REaXNtaXNzZWRFdmVudEhhbmRsZXIgPSAoZXZlbnQ6IE5vdGlmaWNhdGlvblRvYXN0RGlzbWlzc2VkRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0dGhpcy5fbG9nZ2VyPy5pbmZvKFwiRXZlbnQgZm9yIG5vdGlmaWNhdGlvbiB0b2FzdCBkaXNtaXNzZWQgcmVjZWl2ZWQuXCIsIGV2ZW50KTtcblx0XHRcdH07XG5cblx0XHRcdGF3YWl0IHRoaXMuX25vdGlmaWNhdGlvbkNsaWVudC5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcIm5vdGlmaWNhdGlvbi10b2FzdC1kaXNtaXNzZWRcIixcblx0XHRcdFx0dG9hc3REaXNtaXNzZWRFdmVudEhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLl9ub3RpZmljYXRpb25TdWJzY3JpcHRpb25zW1wibm90aWZpY2F0aW9uLXRvYXN0LWRpc21pc3NlZFwiXSA9IHRvYXN0RGlzbWlzc2VkRXZlbnRIYW5kbGVyO1xuXG5cdFx0XHRjb25zdCBub3RpZmljYXRpb25zQ291bnRDaGFuZ2VkRXZlbnRIYW5kbGVyID0gKGV2ZW50OiBOb3RpZmljYXRpb25zQ291bnRDaGFuZ2VkKTogdm9pZCA9PiB7XG5cdFx0XHRcdHRoaXMuX2xvZ2dlcj8uaW5mbyhcIkV2ZW50IGZvciBub3RpZmljYXRpb24gY291bnQgY2hhbmdlZCByZWNlaXZlZC5cIiwgZXZlbnQpO1xuXHRcdFx0fTtcblxuXHRcdFx0YXdhaXQgdGhpcy5fbm90aWZpY2F0aW9uQ2xpZW50LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHRcdFwibm90aWZpY2F0aW9ucy1jb3VudC1jaGFuZ2VkXCIsXG5cdFx0XHRcdG5vdGlmaWNhdGlvbnNDb3VudENoYW5nZWRFdmVudEhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHR0aGlzLl9ub3RpZmljYXRpb25TdWJzY3JpcHRpb25zW1wibm90aWZpY2F0aW9ucy1jb3VudC1jaGFuZ2VkXCJdID0gbm90aWZpY2F0aW9uc0NvdW50Q2hhbmdlZEV2ZW50SGFuZGxlcjtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogQ2xlYW4gdXAgbm90aWZpY2F0aW9uIHN1YnNjcmlwdGlvbnMuXG5cdCAqL1xuXHRwcml2YXRlIGFzeW5jIHJlbW92ZU5vdGlmaWNhdGlvbkV2ZW50TGlzdGVuZXJzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRcdGlmICghaXNFbXB0eSh0aGlzLl9ub3RpZmljYXRpb25DbGllbnQpICYmICFpc0VtcHR5KHRoaXMuX25vdGlmaWNhdGlvblN1YnNjcmlwdGlvbnMpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLl9ub3RpZmljYXRpb25TdWJzY3JpcHRpb25zKSkge1xuXHRcdFx0XHRhd2FpdCB0aGlzLl9ub3RpZmljYXRpb25DbGllbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdFx0XHRrZXkgYXMga2V5b2YgTm90aWZpY2F0aW9uc0V2ZW50TWFwLFxuXHRcdFx0XHRcdHZhbHVlIGFzIG5ldmVyXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIHsgTW9kdWxlSW1wbGVtZW50YXRpb24sIE1vZHVsZVR5cGVzIH0gZnJvbSBcIndvcmtzcGFjZS1wbGF0Zm9ybS1zdGFydGVyL3NoYXBlcy9tb2R1bGUtc2hhcGVzXCI7XG5pbXBvcnQgeyBFeGFtcGxlTm90aWZpY2F0aW9uU2VydmljZVByb3ZpZGVyIH0gZnJvbSBcIi4vbGlmZWN5Y2xlXCI7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBlbnRyeSBwb2ludHMgZm9yIHRoZSBtb2R1bGUuXG4gKi9cbmV4cG9ydCBjb25zdCBlbnRyeVBvaW50czogeyBbdHlwZSBpbiBNb2R1bGVUeXBlc10/OiBNb2R1bGVJbXBsZW1lbnRhdGlvbiB9ID0ge1xuXHRsaWZlY3ljbGU6IG5ldyBFeGFtcGxlTm90aWZpY2F0aW9uU2VydmljZVByb3ZpZGVyKClcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=