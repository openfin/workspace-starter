/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@openfin/awm/openfin.awm.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@openfin/awm/openfin.awm.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AWMServer: () => (/* binding */ r)
/* harmony export */ });
var e={343:e=>{var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,a),i(n)}function a(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}v(e,t,a,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&v(e,"error",t,n)}(e,r,{once:!0})}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var o=10;function s(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function l(e,t,n,i){var r,a,o,l;if(s(n),void 0===(a=e._events)?(a=e._events=Object.create(null),e._eventsCount=0):(void 0!==a.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),a=e._events),o=a[t]),void 0===o)o=a[t]=n,++e._eventsCount;else if("function"==typeof o?o=a[t]=i?[n,o]:[o,n]:i?o.unshift(n):o.push(n),(r=c(e))>0&&o.length>r&&!o.warned){o.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=o.length,l=h,console&&console.warn&&console.warn(l)}return e}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=h.bind(i);return r.listener=n,i.wrapFn=r,r}function p(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):f(r,r.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function f(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function v(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(a){i.once&&e.removeEventListener(t,r),n(a)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return c(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,a=this._events;if(void 0!==a)r=r&&void 0===a.error;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw s.context=o,s}var c=a[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var l=c.length,h=f(c,l);for(n=0;n<l;++n)i(h[n],this,t)}return!0},a.prototype.addListener=function(e,t){return l(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return l(this,e,t,!0)},a.prototype.once=function(e,t){return s(t),this.on(e,u(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,u(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,i,r,a,o;if(s(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,r=a;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,o||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,a=Object.keys(n);for(i=0;i<a.length;++i)"removeListener"!==(r=a[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},a.prototype.listeners=function(e){return p(this,e,!0)},a.prototype.rawListeners=function(e){return p(this,e,!1)},a.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},a.prototype.listenerCount=d,a.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};(()=>{n.d(i,{n:()=>t});var e=n(343);class t{constructor(t){if(this.server_id=t,this.emitter=new e.EventEmitter,!fin)throw new Error("OpenFin is not available")}async start(e){const t=await fin.System.queryPermissionForCurrentContext("System.launchExternalProcess");if(!t.granted)throw new Error("The 'System.launchExternalProcess' permission is required to launch the AWM server");if(e?.executablePath&&!t.rawValue?.executables?.enabled)throw new Error("The 'System.launchExternalProcess.assets' permission is required to launch the AWM server from an executable path");if(!e?.executablePath&&!t.rawValue?.assets?.enabled)throw new Error("The 'System.launchExternalProcess.assets' permission is required to launch the AWM server from a URL");if(!e?.executablePath)try{await fin.System.getAppAssetInfo({alias:"openfin-awm"})}catch(e){throw new Error("The 'openfin-awm' asset must be defined in the manifest")}const n=await this.build_command_line(e);let i={alias:"openfin-awm",arguments:n,lifetime:"window"};e?.executablePath&&(i={path:e.executablePath,arguments:n,lifetime:"window"});try{this.awm_identity=await fin.System.launchExternalProcess(i)}catch(e){throw new Error("Failed to launch the AWM server")}return this.connect()}async connect(){this.client=await fin.InterApplicationBus.Channel.connect(`awm-server-core-${this.server_id}`),this.client.register("awm_handshake",(async(e,t)=>{await fin.System.registerUsage({type:"adapter-feature",data:{apiVersion:e.version,componentName:"awm-server"}})})),await fin.System.registerUsage({type:"adapter-feature",data:{apiVersion:"0.1.0",componentName:"awm-client"}}),this.client.register("awm_updates",((e,t)=>this.handleAWMEvents(e,t)))}async stop(){if(!this.client)throw new Error("AWM server is not running");await(this.client?.dispatch("awm_api_invoke",{action:"shutdown"}))}async getLayout(){if(!this.client)throw new Error("AWM server is not running");const e=await(this.client?.dispatch("awm_api_invoke",{action:"serialiseLayout"}));return e?.payload.layout}async setLayout(e){if(!this.client)throw new Error("AWM server is not running");await(this.client?.dispatch("awm_api_invoke",{action:"deserialiseLayout",payload:{layout:e}}))}async prepareToApplySnapshot(){if(!this.client)throw new Error("AWM server is not running");await(this.client?.dispatch("awm_api_invoke",{action:"resetAll"}))}async decorateSnapshot(e){return{...e,awm:await this.getLayout()}}async applySnapshot(e){e.awm&&await this.setLayout(e.awm)}async launch(e){if(!this.client)throw new Error("Not connected to an AWM server");const t={action:"startProcess",payload:{...e,args:e.args||[]}};if(e.strategy){const{type:n,...i}=e.strategy;t.payload.strategy={type:n,parameters:{...i}}}const n=await(this.client?.dispatch("awm_api_invoke",t));if(n?.payload?.success)return{process_id:n.payload.process_id};throw new Error(`Failed to launch process: ${n?.payload?.error}`)}async registerWindow(e,t){await(this.client?.dispatch("awm_api_invoke",{action:"hookAndRegisterWindow",payload:{clientId:e,windowHandle:t}}))}async enableAutoWindowRegistration(){const e=e=>this.handleNewWindow(e);return await fin.Platform.getCurrentSync().addListener("window-created",e),async()=>{await fin.System.removeListener("window-created",e)}}async attachWindows(e,t,n,i){await(this.client?.dispatch("awm_api_invoke",{action:"attach",payload:{targetClientId:e,toAttachClientId:t,targetSide:n,offset:i}}))}async detachFromGroup(e){await(this.client?.dispatch("awm_api_invoke",{action:"detachFromGroup",payload:{clientId:e}}))}async getAttached(e){return(await(this.client?.dispatch("awm_api_invoke",{action:"getAttachedInstances",payload:{clientId:e}}))).payload.attached}async hasAttachments(e){return(await(this.client?.dispatch("awm_api_invoke",{action:"hasAttachments",payload:{clientId:e}}))).payload.hasAttachments}addEventListener(e,t){this.emitter.on(e,t)}removeEventListener(e,t){this.emitter.off(e,t)}once(e,t){this.emitter.once(e,t)}async handleNewWindow(e){const t=await fin.Window.wrap({uuid:e.uuid,name:e.name}),n=await t.getNativeId();let i=t.identity.name;const r=(await t.getOptions()).customData||{};r.awmClientId?i=r.awmClientId:await t.updateOptions({customData:{...r,awmClientId:i}}),await this.registerWindow(i,n)}emit_event(e,...t){this.emitter.emit(e,...t)}handleAWMEvents(e,t){switch(this.emit_event("all-events",{type:e.action,payload:e.payload}),e.action){case"clientRegistered":this.emit_event("client-registered",{clientId:e.payload.clientId,windowHandle:`#${e.payload.windowHandle.toString(16).toUpperCase()}`,owningProcessId:e.payload.owningProcessId});break;case"clientUnRegistered":this.emit_event("client-unregistered",{...e.payload});break;case"moveSizeCompleted":this.emit_event("move-size-completed",{...e.payload});break;case"clientsAttached":this.emit_event("clients-attached",{...e.payload});break;case"clientDetached":this.emit_event("client-detached",{...e.payload});break;case"groupsChanged":this.emit_event("groups-changed",{...e.payload});break;case"clientActivated":this.emit_event("client-activated",{...e.payload});break;case"clientDeactivated":this.emit_event("client-deactivated",{...e.payload})}}async build_command_line(e){let t=`--id ${this.server_id} `;e?.showDebug&&(t+=" --show-debug ");const n=await fin.System.getRuntimeInfo();return t+=`--runtime-port ${n.port} `,t+=`--runtime-version ${n.version} `,t.trim()}}})();var r=i.n;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openfin_awm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/awm */ "./node_modules/@openfin/awm/openfin.awm.mjs");

const TEST_APP_WINDOW_ID = "awm-example-native-test-app-id";
// The DOM elements
let chkShowDebugWindow;
let btnStart;
let btnStop;
let btnNativeTestApp;
let selAttachPosition;
let btnAttachToWindow;
let btnDetachFromWindow;
let btnGetLayout;
let btnGetAttached;
let btnClearLog;
let serverStatus;
let logging;
let serverState = "stopped";
let isWindowOpen = false;
let isWindowAttached = false;
let server;
// Wait for the DOM to finish loading
window.addEventListener("DOMContentLoaded", async () => {
    // Platform has loaded so initialize the DOM
    await initializeDOM();
});
/**
 * Initialize the DOM elements.
 */
async function initializeDOM() {
    chkShowDebugWindow = document.querySelector("#chkShowDebugWindow");
    btnStart = document.querySelector("#btnStart");
    btnStop = document.querySelector("#btnStop");
    serverStatus = document.querySelector("#serverStatus");
    btnNativeTestApp = document.querySelector("#btnNativeTestApp");
    selAttachPosition = document.querySelector("#selAttachPosition");
    btnAttachToWindow = document.querySelector("#btnAttachToWindow");
    btnDetachFromWindow = document.querySelector("#btnDetachFromWindow");
    btnGetLayout = document.querySelector("#btnGetLayout");
    btnGetAttached = document.querySelector("#btnGetAttached");
    logging = document.querySelector("#logging");
    btnClearLog = document.querySelector("#btnClearLog");
    if (chkShowDebugWindow &&
        btnStart &&
        btnStop &&
        serverStatus &&
        btnNativeTestApp &&
        btnAttachToWindow &&
        btnDetachFromWindow &&
        btnGetLayout &&
        btnGetAttached &&
        btnClearLog) {
        btnStart.addEventListener("click", async () => {
            try {
                serverState = "starting";
                updateServerStatus();
                logInformation(`Starting AWM Server with Id ${fin.me.identity.uuid}`);
                server = new _openfin_awm__WEBPACK_IMPORTED_MODULE_0__.AWMServer(fin.me.identity.uuid);
                await server.start({ showDebug: chkShowDebugWindow?.checked });
                server.addEventListener("client-registered", (event) => {
                    logInformation(`Client Registered: ${JSON.stringify(event)}`);
                });
                server.addEventListener("client-unregistered", (event) => {
                    logInformation(`Client Unregistered: ${JSON.stringify(event)}`);
                    if (event.clientId === TEST_APP_WINDOW_ID) {
                        isWindowOpen = false;
                        isWindowAttached = false;
                        updateWindowStatus();
                    }
                });
                server.addEventListener("clients-attached", (event) => {
                    logInformation(`Clients Attached: ${JSON.stringify(event)}`);
                    if (event.attachedClientId === TEST_APP_WINDOW_ID) {
                        isWindowAttached = true;
                        updateWindowStatus();
                    }
                });
                server.addEventListener("client-detached", (event) => {
                    logInformation(`Client Detached: ${JSON.stringify(event)}`);
                    if (event.clientId === TEST_APP_WINDOW_ID) {
                        isWindowAttached = false;
                        updateWindowStatus();
                    }
                });
                server.addEventListener("client-activated", (event) => {
                    logInformation(`Client Activated: ${JSON.stringify(event)}`);
                });
                server.addEventListener("client-deactivated", (event) => {
                    logInformation(`Client Deactivated: ${JSON.stringify(event)}`);
                });
                server.addEventListener("move-size-completed", (event) => {
                    logInformation(`Move Size Completed: ${JSON.stringify(event)}`);
                });
                server.addEventListener("groups-changed", (event) => {
                    logInformation(`Groups Changed: ${JSON.stringify(event)}`);
                });
                logInformation("Started AWM Server");
                const win = fin.Window.getCurrentSync();
                const nativeId = await win.getNativeId();
                await server.registerWindow(fin.me.identity.uuid, nativeId);
                logInformation(`Registering Platform Window with Id ${fin.me.identity.uuid} and handle ${nativeId}`);
                serverState = "started";
            }
            catch (err) {
                logError(formatError(err));
            }
            finally {
                updateServerStatus();
            }
        });
        btnStop.addEventListener("click", async () => {
            try {
                serverState = "stopping";
                updateServerStatus();
                logInformation("Stopping AWM Server");
                if (server) {
                    await server.detachFromGroup(TEST_APP_WINDOW_ID);
                    await server.stop();
                }
                logInformation("Stopped AWM Server");
            }
            catch (err) {
                logError(formatError(err));
            }
            finally {
                server = undefined;
                serverState = "stopped";
                isWindowOpen = false;
                isWindowAttached = false;
                updateServerStatus();
            }
        });
        btnNativeTestApp.addEventListener("click", async () => {
            const runtimeInfo = await fin.System.getRuntimeInfo();
            const appAssetInfo = await fin.System.getAppAssetInfo({ alias: "native-test-app" });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const localAppUrl = runtimeInfo.args["local-startup-url"].replace("config.json", "");
            await launchApp("Native Test App", TEST_APP_WINDOW_ID, `${localAppUrl}assets\\${appAssetInfo.alias}\\${appAssetInfo.version}\\${appAssetInfo.target}`, [], {
                type: "waitForWindowOfName",
                timeoutMs: 15000,
                matchRegex: "^Native Test App$"
            });
            isWindowOpen = true;
            isWindowAttached = false;
            updateWindowStatus();
        });
        btnAttachToWindow.addEventListener("click", async () => {
            if (server && selAttachPosition) {
                const value = selAttachPosition.value;
                await server.attachWindows(fin.me.identity.uuid, TEST_APP_WINDOW_ID, value, 0);
                isWindowAttached = true;
                updateWindowStatus();
            }
        });
        btnDetachFromWindow.addEventListener("click", async () => {
            if (server) {
                await server.detachFromGroup(TEST_APP_WINDOW_ID);
                isWindowAttached = false;
                updateWindowStatus();
            }
        });
        btnClearLog.addEventListener("click", () => {
            logClear();
        });
        btnGetLayout.addEventListener("click", async () => {
            if (server) {
                const layout = await server.getLayout();
                logInformation("Layout");
                logInformation(JSON.stringify(layout, undefined, "  "));
            }
        });
        btnGetAttached.addEventListener("click", async () => {
            if (server) {
                const attached = await server.getAttached(fin.me.identity.uuid);
                logInformation("Attached");
                logInformation(JSON.stringify(attached, undefined, "  "));
            }
        });
    }
    updateServerStatus();
}
/**
 * Format an error to a readable string.
 * @param err The error to format.
 * @returns The formatted error.
 */
function formatError(err) {
    if (err instanceof Error) {
        return err.message;
    }
    else if (typeof err === "string") {
        return err;
    }
    return JSON.stringify(err);
}
/**
 * Update the DOM elements with the state of the connection.
 */
function updateServerStatus() {
    if (chkShowDebugWindow &&
        btnStart &&
        btnStop &&
        serverStatus &&
        btnNativeTestApp &&
        btnAttachToWindow &&
        btnDetachFromWindow &&
        selAttachPosition &&
        btnGetLayout &&
        btnGetAttached) {
        if (serverState === "starting" || serverState === "stopping") {
            chkShowDebugWindow.disabled = true;
            btnStart.disabled = true;
            btnStop.disabled = true;
            btnGetLayout.disabled = true;
            btnGetAttached.disabled = true;
            serverStatus.textContent = `AWM Server is ${serverState}`;
        }
        else if (serverState === "started") {
            chkShowDebugWindow.disabled = true;
            btnStart.disabled = true;
            btnStop.disabled = false;
            btnGetLayout.disabled = false;
            btnGetAttached.disabled = false;
            serverStatus.textContent = "AWM Server is started";
        }
        else {
            chkShowDebugWindow.disabled = false;
            btnStart.disabled = false;
            btnStop.disabled = true;
            btnGetLayout.disabled = true;
            btnGetAttached.disabled = true;
            serverStatus.textContent = "AWM Server is stopped";
        }
    }
    updateWindowStatus();
}
/**
 * Update the UI based on the window state.
 */
function updateWindowStatus() {
    if (btnNativeTestApp && selAttachPosition && btnAttachToWindow && btnDetachFromWindow) {
        if (serverState === "starting" || serverState === "stopping") {
            btnNativeTestApp.disabled = true;
            selAttachPosition.disabled = true;
            btnAttachToWindow.disabled = true;
            btnDetachFromWindow.disabled = true;
        }
        else if (serverState === "started" && isWindowOpen) {
            btnNativeTestApp.disabled = true;
            selAttachPosition.disabled = isWindowAttached;
            btnAttachToWindow.disabled = isWindowAttached;
            btnDetachFromWindow.disabled = !isWindowAttached;
        }
        else {
            btnNativeTestApp.disabled = serverState === "stopped";
            selAttachPosition.disabled = true;
            btnAttachToWindow.disabled = true;
            btnDetachFromWindow.disabled = true;
        }
    }
}
/**
 * Send information to the log display.
 * @param information The information to send.
 */
function logInformation(information) {
    if (logging) {
        logging.textContent = `${logging.textContent}${information}\n\n`;
        logging.scrollTop = logging.scrollHeight;
    }
}
/**
 * Send error to the log display.
 * @param err The error to send.
 */
function logError(err) {
    if (logging) {
        logging.textContent = `${logging.textContent}ERROR: ${err}\n\n`;
        logging.scrollTop = logging.scrollHeight;
    }
}
/**
 * Clear the log display.
 */
function logClear() {
    if (logging) {
        logging.textContent = "";
        logging.scrollTop = 0;
    }
}
/**
 * Launch an application using AWM.
 * @param appName The name of the app that is being launched.
 * @param clientId An Id to associate with the launched app.
 * @param path The path to the app to launch.
 * @param args Additional command line arguments for the launch.
 * @param strategy The strategy to launch the window with.
 */
async function launchApp(appName, clientId, path, args, strategy) {
    try {
        if (server) {
            logInformation(`Launching ${appName}`);
            const launchResult = await server.launch({
                path,
                clientId,
                args,
                strategy
            });
            if (launchResult?.process_id) {
                logInformation(`${appName} launched with process id ${launchResult.process_id}`);
            }
        }
    }
    catch (err) {
        logError(formatError(err));
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDWixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsT0FBTyxDQUFDLFdBQVcsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNoRSxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7S0FDekM7QUFDRixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxTQUFTLFFBQVE7SUFDaEIsSUFBSSxPQUFPLEVBQUU7UUFDWixPQUFPLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN6QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUN0QjtBQUNGLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsS0FBSyxVQUFVLFNBQVMsQ0FDdkIsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLElBQVksRUFDWixJQUFjLEVBQ2QsUUFBNEI7SUFFNUIsSUFBSTtRQUNILElBQUksTUFBTSxFQUFFO1lBQ1gsY0FBYyxDQUFDLGFBQWEsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN2QyxNQUFNLFlBQVksR0FBRyxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3hDLElBQUk7Z0JBQ0osUUFBUTtnQkFDUixJQUFJO2dCQUNKLFFBQVE7YUFDUixDQUFDLENBQUM7WUFFSCxJQUFJLFlBQVksRUFBRSxVQUFVLEVBQUU7Z0JBQzdCLGNBQWMsQ0FBQyxHQUFHLE9BQU8sNkJBQTZCLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQ2pGO1NBQ0Q7S0FDRDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ2IsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1pbnRlZ3JhdGUtd2l0aC1hZHZhbmNlZC13aW5kb3ctbWFuYWdlbWVudC1iYXNpYy8uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi9hd20vb3BlbmZpbi5hd20ubWpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1pbnRlZ3JhdGUtd2l0aC1hZHZhbmNlZC13aW5kb3ctbWFuYWdlbWVudC1iYXNpYy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0taW50ZWdyYXRlLXdpdGgtYWR2YW5jZWQtd2luZG93LW1hbmFnZW1lbnQtYmFzaWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1pbnRlZ3JhdGUtd2l0aC1hZHZhbmNlZC13aW5kb3ctbWFuYWdlbWVudC1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1pbnRlZ3JhdGUtd2l0aC1hZHZhbmNlZC13aW5kb3ctbWFuYWdlbWVudC1iYXNpYy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1pbnRlZ3JhdGUtd2l0aC1hZHZhbmNlZC13aW5kb3ctbWFuYWdlbWVudC1iYXNpYy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGU9ezM0MzplPT57dmFyIHQsbj1cIm9iamVjdFwiPT10eXBlb2YgUmVmbGVjdD9SZWZsZWN0Om51bGwsaT1uJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBuLmFwcGx5P24uYXBwbHk6ZnVuY3Rpb24oZSx0LG4pe3JldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChlLHQsbil9O3Q9biYmXCJmdW5jdGlvblwiPT10eXBlb2Ygbi5vd25LZXlzP24ub3duS2V5czpPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzP2Z1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKS5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKSl9OmZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlKX07dmFyIHI9TnVtYmVyLmlzTmFOfHxmdW5jdGlvbihlKXtyZXR1cm4gZSE9ZX07ZnVuY3Rpb24gYSgpe2EuaW5pdC5jYWxsKHRoaXMpfWUuZXhwb3J0cz1hLGUuZXhwb3J0cy5vbmNlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihuLGkpe2Z1bmN0aW9uIHIobil7ZS5yZW1vdmVMaXN0ZW5lcih0LGEpLGkobil9ZnVuY3Rpb24gYSgpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUucmVtb3ZlTGlzdGVuZXImJmUucmVtb3ZlTGlzdGVuZXIoXCJlcnJvclwiLHIpLG4oW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKX12KGUsdCxhLHtvbmNlOiEwfSksXCJlcnJvclwiIT09dCYmZnVuY3Rpb24oZSx0LG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIGUub24mJnYoZSxcImVycm9yXCIsdCxuKX0oZSxyLHtvbmNlOiEwfSl9KSl9LGEuRXZlbnRFbWl0dGVyPWEsYS5wcm90b3R5cGUuX2V2ZW50cz12b2lkIDAsYS5wcm90b3R5cGUuX2V2ZW50c0NvdW50PTAsYS5wcm90b3R5cGUuX21heExpc3RlbmVycz12b2lkIDA7dmFyIG89MTA7ZnVuY3Rpb24gcyhlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcrdHlwZW9mIGUpfWZ1bmN0aW9uIGMoZSl7cmV0dXJuIHZvaWQgMD09PWUuX21heExpc3RlbmVycz9hLmRlZmF1bHRNYXhMaXN0ZW5lcnM6ZS5fbWF4TGlzdGVuZXJzfWZ1bmN0aW9uIGwoZSx0LG4saSl7dmFyIHIsYSxvLGw7aWYocyhuKSx2b2lkIDA9PT0oYT1lLl9ldmVudHMpPyhhPWUuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLGUuX2V2ZW50c0NvdW50PTApOih2b2lkIDAhPT1hLm5ld0xpc3RlbmVyJiYoZS5lbWl0KFwibmV3TGlzdGVuZXJcIix0LG4ubGlzdGVuZXI/bi5saXN0ZW5lcjpuKSxhPWUuX2V2ZW50cyksbz1hW3RdKSx2b2lkIDA9PT1vKW89YVt0XT1uLCsrZS5fZXZlbnRzQ291bnQ7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvP289YVt0XT1pP1tuLG9dOltvLG5dOmk/by51bnNoaWZ0KG4pOm8ucHVzaChuKSwocj1jKGUpKT4wJiZvLmxlbmd0aD5yJiYhby53YXJuZWQpe28ud2FybmVkPSEwO3ZhciBoPW5ldyBFcnJvcihcIlBvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gXCIrby5sZW5ndGgrXCIgXCIrU3RyaW5nKHQpK1wiIGxpc3RlbmVycyBhZGRlZC4gVXNlIGVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKCkgdG8gaW5jcmVhc2UgbGltaXRcIik7aC5uYW1lPVwiTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nXCIsaC5lbWl0dGVyPWUsaC50eXBlPXQsaC5jb3VudD1vLmxlbmd0aCxsPWgsY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4obCl9cmV0dXJuIGV9ZnVuY3Rpb24gaCgpe2lmKCF0aGlzLmZpcmVkKXJldHVybiB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsdGhpcy53cmFwRm4pLHRoaXMuZmlyZWQ9ITAsMD09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTp0aGlzLmxpc3RlbmVyLmFwcGx5KHRoaXMudGFyZ2V0LGFyZ3VtZW50cyl9ZnVuY3Rpb24gdShlLHQsbil7dmFyIGk9e2ZpcmVkOiExLHdyYXBGbjp2b2lkIDAsdGFyZ2V0OmUsdHlwZTp0LGxpc3RlbmVyOm59LHI9aC5iaW5kKGkpO3JldHVybiByLmxpc3RlbmVyPW4saS53cmFwRm49cixyfWZ1bmN0aW9uIHAoZSx0LG4pe3ZhciBpPWUuX2V2ZW50cztpZih2b2lkIDA9PT1pKXJldHVybltdO3ZhciByPWlbdF07cmV0dXJuIHZvaWQgMD09PXI/W106XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9uP1tyLmxpc3RlbmVyfHxyXTpbcl06bj9mdW5jdGlvbihlKXtmb3IodmFyIHQ9bmV3IEFycmF5KGUubGVuZ3RoKSxuPTA7bjx0Lmxlbmd0aDsrK24pdFtuXT1lW25dLmxpc3RlbmVyfHxlW25dO3JldHVybiB0fShyKTpmKHIsci5sZW5ndGgpfWZ1bmN0aW9uIGQoZSl7dmFyIHQ9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PXQpe3ZhciBuPXRbZV07aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbilyZXR1cm4gMTtpZih2b2lkIDAhPT1uKXJldHVybiBuLmxlbmd0aH1yZXR1cm4gMH1mdW5jdGlvbiBmKGUsdCl7Zm9yKHZhciBuPW5ldyBBcnJheSh0KSxpPTA7aTx0OysraSluW2ldPWVbaV07cmV0dXJuIG59ZnVuY3Rpb24gdihlLHQsbixpKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLm9uKWkub25jZT9lLm9uY2UodCxuKTplLm9uKHQsbik7ZWxzZXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLmFkZEV2ZW50TGlzdGVuZXIpdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwiZW1pdHRlclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBFdmVudEVtaXR0ZXIuIFJlY2VpdmVkIHR5cGUgJyt0eXBlb2YgZSk7ZS5hZGRFdmVudExpc3RlbmVyKHQsKGZ1bmN0aW9uIHIoYSl7aS5vbmNlJiZlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxyKSxuKGEpfSkpfX1PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIix7ZW51bWVyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gb30sc2V0OmZ1bmN0aW9uKGUpe2lmKFwibnVtYmVyXCIhPXR5cGVvZiBlfHxlPDB8fHIoZSkpdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnK2UrXCIuXCIpO289ZX19KSxhLmluaXQ9ZnVuY3Rpb24oKXt2b2lkIDAhPT10aGlzLl9ldmVudHMmJnRoaXMuX2V2ZW50cyE9PU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzfHwodGhpcy5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdGhpcy5fZXZlbnRzQ291bnQ9MCksdGhpcy5fbWF4TGlzdGVuZXJzPXRoaXMuX21heExpc3RlbmVyc3x8dm9pZCAwfSxhLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7aWYoXCJudW1iZXJcIiE9dHlwZW9mIGV8fGU8MHx8cihlKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcrZStcIi5cIik7cmV0dXJuIHRoaXMuX21heExpc3RlbmVycz1lLHRoaXN9LGEucHJvdG90eXBlLmdldE1heExpc3RlbmVycz1mdW5jdGlvbigpe3JldHVybiBjKHRoaXMpfSxhLnByb3RvdHlwZS5lbWl0PWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXSxuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl0LnB1c2goYXJndW1lbnRzW25dKTt2YXIgcj1cImVycm9yXCI9PT1lLGE9dGhpcy5fZXZlbnRzO2lmKHZvaWQgMCE9PWEpcj1yJiZ2b2lkIDA9PT1hLmVycm9yO2Vsc2UgaWYoIXIpcmV0dXJuITE7aWYocil7dmFyIG87aWYodC5sZW5ndGg+MCYmKG89dFswXSksbyBpbnN0YW5jZW9mIEVycm9yKXRocm93IG87dmFyIHM9bmV3IEVycm9yKFwiVW5oYW5kbGVkIGVycm9yLlwiKyhvP1wiIChcIitvLm1lc3NhZ2UrXCIpXCI6XCJcIikpO3Rocm93IHMuY29udGV4dD1vLHN9dmFyIGM9YVtlXTtpZih2b2lkIDA9PT1jKXJldHVybiExO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGMpaShjLHRoaXMsdCk7ZWxzZXt2YXIgbD1jLmxlbmd0aCxoPWYoYyxsKTtmb3Iobj0wO248bDsrK24paShoW25dLHRoaXMsdCl9cmV0dXJuITB9LGEucHJvdG90eXBlLmFkZExpc3RlbmVyPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGwodGhpcyxlLHQsITEpfSxhLnByb3RvdHlwZS5vbj1hLnByb3RvdHlwZS5hZGRMaXN0ZW5lcixhLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gbCh0aGlzLGUsdCwhMCl9LGEucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gcyh0KSx0aGlzLm9uKGUsdSh0aGlzLGUsdCkpLHRoaXN9LGEucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gcyh0KSx0aGlzLnByZXBlbmRMaXN0ZW5lcihlLHUodGhpcyxlLHQpKSx0aGlzfSxhLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3ZhciBuLGkscixhLG87aWYocyh0KSx2b2lkIDA9PT0oaT10aGlzLl9ldmVudHMpKXJldHVybiB0aGlzO2lmKHZvaWQgMD09PShuPWlbZV0pKXJldHVybiB0aGlzO2lmKG49PT10fHxuLmxpc3RlbmVyPT09dCkwPT0tLXRoaXMuX2V2ZW50c0NvdW50P3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOihkZWxldGUgaVtlXSxpLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLGUsbi5saXN0ZW5lcnx8dCkpO2Vsc2UgaWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygbil7Zm9yKHI9LTEsYT1uLmxlbmd0aC0xO2E+PTA7YS0tKWlmKG5bYV09PT10fHxuW2FdLmxpc3RlbmVyPT09dCl7bz1uW2FdLmxpc3RlbmVyLHI9YTticmVha31pZihyPDApcmV0dXJuIHRoaXM7MD09PXI/bi5zaGlmdCgpOmZ1bmN0aW9uKGUsdCl7Zm9yKDt0KzE8ZS5sZW5ndGg7dCsrKWVbdF09ZVt0KzFdO2UucG9wKCl9KG4sciksMT09PW4ubGVuZ3RoJiYoaVtlXT1uWzBdKSx2b2lkIDAhPT1pLnJlbW92ZUxpc3RlbmVyJiZ0aGlzLmVtaXQoXCJyZW1vdmVMaXN0ZW5lclwiLGUsb3x8dCl9cmV0dXJuIHRoaXN9LGEucHJvdG90eXBlLm9mZj1hLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcixhLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7dmFyIHQsbixpO2lmKHZvaWQgMD09PShuPXRoaXMuX2V2ZW50cykpcmV0dXJuIHRoaXM7aWYodm9pZCAwPT09bi5yZW1vdmVMaXN0ZW5lcilyZXR1cm4gMD09PWFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTApOnZvaWQgMCE9PW5bZV0mJigwPT0tLXRoaXMuX2V2ZW50c0NvdW50P3RoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpOmRlbGV0ZSBuW2VdKSx0aGlzO2lmKDA9PT1hcmd1bWVudHMubGVuZ3RoKXt2YXIgcixhPU9iamVjdC5rZXlzKG4pO2ZvcihpPTA7aTxhLmxlbmd0aDsrK2kpXCJyZW1vdmVMaXN0ZW5lclwiIT09KHI9YVtpXSkmJnRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKHIpO3JldHVybiB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhcInJlbW92ZUxpc3RlbmVyXCIpLHRoaXMuX2V2ZW50cz1PYmplY3QuY3JlYXRlKG51bGwpLHRoaXMuX2V2ZW50c0NvdW50PTAsdGhpc31pZihcImZ1bmN0aW9uXCI9PXR5cGVvZih0PW5bZV0pKXRoaXMucmVtb3ZlTGlzdGVuZXIoZSx0KTtlbHNlIGlmKHZvaWQgMCE9PXQpZm9yKGk9dC5sZW5ndGgtMTtpPj0wO2ktLSl0aGlzLnJlbW92ZUxpc3RlbmVyKGUsdFtpXSk7cmV0dXJuIHRoaXN9LGEucHJvdG90eXBlLmxpc3RlbmVycz1mdW5jdGlvbihlKXtyZXR1cm4gcCh0aGlzLGUsITApfSxhLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnM9ZnVuY3Rpb24oZSl7cmV0dXJuIHAodGhpcyxlLCExKX0sYS5saXN0ZW5lckNvdW50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZS5saXN0ZW5lckNvdW50P2UubGlzdGVuZXJDb3VudCh0KTpkLmNhbGwoZSx0KX0sYS5wcm90b3R5cGUubGlzdGVuZXJDb3VudD1kLGEucHJvdG90eXBlLmV2ZW50TmFtZXM9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZXZlbnRzQ291bnQ+MD90KHRoaXMuX2V2ZW50cyk6W119fX0sdD17fTtmdW5jdGlvbiBuKGkpe3ZhciByPXRbaV07aWYodm9pZCAwIT09cilyZXR1cm4gci5leHBvcnRzO3ZhciBhPXRbaV09e2V4cG9ydHM6e319O3JldHVybiBlW2ldKGEsYS5leHBvcnRzLG4pLGEuZXhwb3J0c31uLmQ9KGUsdCk9Pntmb3IodmFyIGkgaW4gdCluLm8odCxpKSYmIW4ubyhlLGkpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxpLHtlbnVtZXJhYmxlOiEwLGdldDp0W2ldfSl9LG4ubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCk7dmFyIGk9e307KCgpPT57bi5kKGkse246KCk9PnR9KTt2YXIgZT1uKDM0Myk7Y2xhc3MgdHtjb25zdHJ1Y3Rvcih0KXtpZih0aGlzLnNlcnZlcl9pZD10LHRoaXMuZW1pdHRlcj1uZXcgZS5FdmVudEVtaXR0ZXIsIWZpbil0aHJvdyBuZXcgRXJyb3IoXCJPcGVuRmluIGlzIG5vdCBhdmFpbGFibGVcIil9YXN5bmMgc3RhcnQoZSl7Y29uc3QgdD1hd2FpdCBmaW4uU3lzdGVtLnF1ZXJ5UGVybWlzc2lvbkZvckN1cnJlbnRDb250ZXh0KFwiU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2Vzc1wiKTtpZighdC5ncmFudGVkKXRocm93IG5ldyBFcnJvcihcIlRoZSAnU3lzdGVtLmxhdW5jaEV4dGVybmFsUHJvY2VzcycgcGVybWlzc2lvbiBpcyByZXF1aXJlZCB0byBsYXVuY2ggdGhlIEFXTSBzZXJ2ZXJcIik7aWYoZT8uZXhlY3V0YWJsZVBhdGgmJiF0LnJhd1ZhbHVlPy5leGVjdXRhYmxlcz8uZW5hYmxlZCl0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ1N5c3RlbS5sYXVuY2hFeHRlcm5hbFByb2Nlc3MuYXNzZXRzJyBwZXJtaXNzaW9uIGlzIHJlcXVpcmVkIHRvIGxhdW5jaCB0aGUgQVdNIHNlcnZlciBmcm9tIGFuIGV4ZWN1dGFibGUgcGF0aFwiKTtpZighZT8uZXhlY3V0YWJsZVBhdGgmJiF0LnJhd1ZhbHVlPy5hc3NldHM/LmVuYWJsZWQpdGhyb3cgbmV3IEVycm9yKFwiVGhlICdTeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzLmFzc2V0cycgcGVybWlzc2lvbiBpcyByZXF1aXJlZCB0byBsYXVuY2ggdGhlIEFXTSBzZXJ2ZXIgZnJvbSBhIFVSTFwiKTtpZighZT8uZXhlY3V0YWJsZVBhdGgpdHJ5e2F3YWl0IGZpbi5TeXN0ZW0uZ2V0QXBwQXNzZXRJbmZvKHthbGlhczpcIm9wZW5maW4tYXdtXCJ9KX1jYXRjaChlKXt0aHJvdyBuZXcgRXJyb3IoXCJUaGUgJ29wZW5maW4tYXdtJyBhc3NldCBtdXN0IGJlIGRlZmluZWQgaW4gdGhlIG1hbmlmZXN0XCIpfWNvbnN0IG49YXdhaXQgdGhpcy5idWlsZF9jb21tYW5kX2xpbmUoZSk7bGV0IGk9e2FsaWFzOlwib3BlbmZpbi1hd21cIixhcmd1bWVudHM6bixsaWZldGltZTpcIndpbmRvd1wifTtlPy5leGVjdXRhYmxlUGF0aCYmKGk9e3BhdGg6ZS5leGVjdXRhYmxlUGF0aCxhcmd1bWVudHM6bixsaWZldGltZTpcIndpbmRvd1wifSk7dHJ5e3RoaXMuYXdtX2lkZW50aXR5PWF3YWl0IGZpbi5TeXN0ZW0ubGF1bmNoRXh0ZXJuYWxQcm9jZXNzKGkpfWNhdGNoKGUpe3Rocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBsYXVuY2ggdGhlIEFXTSBzZXJ2ZXJcIil9cmV0dXJuIHRoaXMuY29ubmVjdCgpfWFzeW5jIGNvbm5lY3QoKXt0aGlzLmNsaWVudD1hd2FpdCBmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNvbm5lY3QoYGF3bS1zZXJ2ZXItY29yZS0ke3RoaXMuc2VydmVyX2lkfWApLHRoaXMuY2xpZW50LnJlZ2lzdGVyKFwiYXdtX2hhbmRzaGFrZVwiLChhc3luYyhlLHQpPT57YXdhaXQgZmluLlN5c3RlbS5yZWdpc3RlclVzYWdlKHt0eXBlOlwiYWRhcHRlci1mZWF0dXJlXCIsZGF0YTp7YXBpVmVyc2lvbjplLnZlcnNpb24sY29tcG9uZW50TmFtZTpcImF3bS1zZXJ2ZXJcIn19KX0pKSxhd2FpdCBmaW4uU3lzdGVtLnJlZ2lzdGVyVXNhZ2Uoe3R5cGU6XCJhZGFwdGVyLWZlYXR1cmVcIixkYXRhOnthcGlWZXJzaW9uOlwiMC4xLjBcIixjb21wb25lbnROYW1lOlwiYXdtLWNsaWVudFwifX0pLHRoaXMuY2xpZW50LnJlZ2lzdGVyKFwiYXdtX3VwZGF0ZXNcIiwoKGUsdCk9PnRoaXMuaGFuZGxlQVdNRXZlbnRzKGUsdCkpKX1hc3luYyBzdG9wKCl7aWYoIXRoaXMuY2xpZW50KXRocm93IG5ldyBFcnJvcihcIkFXTSBzZXJ2ZXIgaXMgbm90IHJ1bm5pbmdcIik7YXdhaXQodGhpcy5jbGllbnQ/LmRpc3BhdGNoKFwiYXdtX2FwaV9pbnZva2VcIix7YWN0aW9uOlwic2h1dGRvd25cIn0pKX1hc3luYyBnZXRMYXlvdXQoKXtpZighdGhpcy5jbGllbnQpdGhyb3cgbmV3IEVycm9yKFwiQVdNIHNlcnZlciBpcyBub3QgcnVubmluZ1wiKTtjb25zdCBlPWF3YWl0KHRoaXMuY2xpZW50Py5kaXNwYXRjaChcImF3bV9hcGlfaW52b2tlXCIse2FjdGlvbjpcInNlcmlhbGlzZUxheW91dFwifSkpO3JldHVybiBlPy5wYXlsb2FkLmxheW91dH1hc3luYyBzZXRMYXlvdXQoZSl7aWYoIXRoaXMuY2xpZW50KXRocm93IG5ldyBFcnJvcihcIkFXTSBzZXJ2ZXIgaXMgbm90IHJ1bm5pbmdcIik7YXdhaXQodGhpcy5jbGllbnQ/LmRpc3BhdGNoKFwiYXdtX2FwaV9pbnZva2VcIix7YWN0aW9uOlwiZGVzZXJpYWxpc2VMYXlvdXRcIixwYXlsb2FkOntsYXlvdXQ6ZX19KSl9YXN5bmMgcHJlcGFyZVRvQXBwbHlTbmFwc2hvdCgpe2lmKCF0aGlzLmNsaWVudCl0aHJvdyBuZXcgRXJyb3IoXCJBV00gc2VydmVyIGlzIG5vdCBydW5uaW5nXCIpO2F3YWl0KHRoaXMuY2xpZW50Py5kaXNwYXRjaChcImF3bV9hcGlfaW52b2tlXCIse2FjdGlvbjpcInJlc2V0QWxsXCJ9KSl9YXN5bmMgZGVjb3JhdGVTbmFwc2hvdChlKXtyZXR1cm57Li4uZSxhd206YXdhaXQgdGhpcy5nZXRMYXlvdXQoKX19YXN5bmMgYXBwbHlTbmFwc2hvdChlKXtlLmF3bSYmYXdhaXQgdGhpcy5zZXRMYXlvdXQoZS5hd20pfWFzeW5jIGxhdW5jaChlKXtpZighdGhpcy5jbGllbnQpdGhyb3cgbmV3IEVycm9yKFwiTm90IGNvbm5lY3RlZCB0byBhbiBBV00gc2VydmVyXCIpO2NvbnN0IHQ9e2FjdGlvbjpcInN0YXJ0UHJvY2Vzc1wiLHBheWxvYWQ6ey4uLmUsYXJnczplLmFyZ3N8fFtdfX07aWYoZS5zdHJhdGVneSl7Y29uc3R7dHlwZTpuLC4uLml9PWUuc3RyYXRlZ3k7dC5wYXlsb2FkLnN0cmF0ZWd5PXt0eXBlOm4scGFyYW1ldGVyczp7Li4uaX19fWNvbnN0IG49YXdhaXQodGhpcy5jbGllbnQ/LmRpc3BhdGNoKFwiYXdtX2FwaV9pbnZva2VcIix0KSk7aWYobj8ucGF5bG9hZD8uc3VjY2VzcylyZXR1cm57cHJvY2Vzc19pZDpuLnBheWxvYWQucHJvY2Vzc19pZH07dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbGF1bmNoIHByb2Nlc3M6ICR7bj8ucGF5bG9hZD8uZXJyb3J9YCl9YXN5bmMgcmVnaXN0ZXJXaW5kb3coZSx0KXthd2FpdCh0aGlzLmNsaWVudD8uZGlzcGF0Y2goXCJhd21fYXBpX2ludm9rZVwiLHthY3Rpb246XCJob29rQW5kUmVnaXN0ZXJXaW5kb3dcIixwYXlsb2FkOntjbGllbnRJZDplLHdpbmRvd0hhbmRsZTp0fX0pKX1hc3luYyBlbmFibGVBdXRvV2luZG93UmVnaXN0cmF0aW9uKCl7Y29uc3QgZT1lPT50aGlzLmhhbmRsZU5ld1dpbmRvdyhlKTtyZXR1cm4gYXdhaXQgZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCkuYWRkTGlzdGVuZXIoXCJ3aW5kb3ctY3JlYXRlZFwiLGUpLGFzeW5jKCk9Pnthd2FpdCBmaW4uU3lzdGVtLnJlbW92ZUxpc3RlbmVyKFwid2luZG93LWNyZWF0ZWRcIixlKX19YXN5bmMgYXR0YWNoV2luZG93cyhlLHQsbixpKXthd2FpdCh0aGlzLmNsaWVudD8uZGlzcGF0Y2goXCJhd21fYXBpX2ludm9rZVwiLHthY3Rpb246XCJhdHRhY2hcIixwYXlsb2FkOnt0YXJnZXRDbGllbnRJZDplLHRvQXR0YWNoQ2xpZW50SWQ6dCx0YXJnZXRTaWRlOm4sb2Zmc2V0Oml9fSkpfWFzeW5jIGRldGFjaEZyb21Hcm91cChlKXthd2FpdCh0aGlzLmNsaWVudD8uZGlzcGF0Y2goXCJhd21fYXBpX2ludm9rZVwiLHthY3Rpb246XCJkZXRhY2hGcm9tR3JvdXBcIixwYXlsb2FkOntjbGllbnRJZDplfX0pKX1hc3luYyBnZXRBdHRhY2hlZChlKXtyZXR1cm4oYXdhaXQodGhpcy5jbGllbnQ/LmRpc3BhdGNoKFwiYXdtX2FwaV9pbnZva2VcIix7YWN0aW9uOlwiZ2V0QXR0YWNoZWRJbnN0YW5jZXNcIixwYXlsb2FkOntjbGllbnRJZDplfX0pKSkucGF5bG9hZC5hdHRhY2hlZH1hc3luYyBoYXNBdHRhY2htZW50cyhlKXtyZXR1cm4oYXdhaXQodGhpcy5jbGllbnQ/LmRpc3BhdGNoKFwiYXdtX2FwaV9pbnZva2VcIix7YWN0aW9uOlwiaGFzQXR0YWNobWVudHNcIixwYXlsb2FkOntjbGllbnRJZDplfX0pKSkucGF5bG9hZC5oYXNBdHRhY2htZW50c31hZGRFdmVudExpc3RlbmVyKGUsdCl7dGhpcy5lbWl0dGVyLm9uKGUsdCl9cmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQpe3RoaXMuZW1pdHRlci5vZmYoZSx0KX1vbmNlKGUsdCl7dGhpcy5lbWl0dGVyLm9uY2UoZSx0KX1hc3luYyBoYW5kbGVOZXdXaW5kb3coZSl7Y29uc3QgdD1hd2FpdCBmaW4uV2luZG93LndyYXAoe3V1aWQ6ZS51dWlkLG5hbWU6ZS5uYW1lfSksbj1hd2FpdCB0LmdldE5hdGl2ZUlkKCk7bGV0IGk9dC5pZGVudGl0eS5uYW1lO2NvbnN0IHI9KGF3YWl0IHQuZ2V0T3B0aW9ucygpKS5jdXN0b21EYXRhfHx7fTtyLmF3bUNsaWVudElkP2k9ci5hd21DbGllbnRJZDphd2FpdCB0LnVwZGF0ZU9wdGlvbnMoe2N1c3RvbURhdGE6ey4uLnIsYXdtQ2xpZW50SWQ6aX19KSxhd2FpdCB0aGlzLnJlZ2lzdGVyV2luZG93KGksbil9ZW1pdF9ldmVudChlLC4uLnQpe3RoaXMuZW1pdHRlci5lbWl0KGUsLi4udCl9aGFuZGxlQVdNRXZlbnRzKGUsdCl7c3dpdGNoKHRoaXMuZW1pdF9ldmVudChcImFsbC1ldmVudHNcIix7dHlwZTplLmFjdGlvbixwYXlsb2FkOmUucGF5bG9hZH0pLGUuYWN0aW9uKXtjYXNlXCJjbGllbnRSZWdpc3RlcmVkXCI6dGhpcy5lbWl0X2V2ZW50KFwiY2xpZW50LXJlZ2lzdGVyZWRcIix7Y2xpZW50SWQ6ZS5wYXlsb2FkLmNsaWVudElkLHdpbmRvd0hhbmRsZTpgIyR7ZS5wYXlsb2FkLndpbmRvd0hhbmRsZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gLG93bmluZ1Byb2Nlc3NJZDplLnBheWxvYWQub3duaW5nUHJvY2Vzc0lkfSk7YnJlYWs7Y2FzZVwiY2xpZW50VW5SZWdpc3RlcmVkXCI6dGhpcy5lbWl0X2V2ZW50KFwiY2xpZW50LXVucmVnaXN0ZXJlZFwiLHsuLi5lLnBheWxvYWR9KTticmVhaztjYXNlXCJtb3ZlU2l6ZUNvbXBsZXRlZFwiOnRoaXMuZW1pdF9ldmVudChcIm1vdmUtc2l6ZS1jb21wbGV0ZWRcIix7Li4uZS5wYXlsb2FkfSk7YnJlYWs7Y2FzZVwiY2xpZW50c0F0dGFjaGVkXCI6dGhpcy5lbWl0X2V2ZW50KFwiY2xpZW50cy1hdHRhY2hlZFwiLHsuLi5lLnBheWxvYWR9KTticmVhaztjYXNlXCJjbGllbnREZXRhY2hlZFwiOnRoaXMuZW1pdF9ldmVudChcImNsaWVudC1kZXRhY2hlZFwiLHsuLi5lLnBheWxvYWR9KTticmVhaztjYXNlXCJncm91cHNDaGFuZ2VkXCI6dGhpcy5lbWl0X2V2ZW50KFwiZ3JvdXBzLWNoYW5nZWRcIix7Li4uZS5wYXlsb2FkfSk7YnJlYWs7Y2FzZVwiY2xpZW50QWN0aXZhdGVkXCI6dGhpcy5lbWl0X2V2ZW50KFwiY2xpZW50LWFjdGl2YXRlZFwiLHsuLi5lLnBheWxvYWR9KTticmVhaztjYXNlXCJjbGllbnREZWFjdGl2YXRlZFwiOnRoaXMuZW1pdF9ldmVudChcImNsaWVudC1kZWFjdGl2YXRlZFwiLHsuLi5lLnBheWxvYWR9KX19YXN5bmMgYnVpbGRfY29tbWFuZF9saW5lKGUpe2xldCB0PWAtLWlkICR7dGhpcy5zZXJ2ZXJfaWR9IGA7ZT8uc2hvd0RlYnVnJiYodCs9XCIgLS1zaG93LWRlYnVnIFwiKTtjb25zdCBuPWF3YWl0IGZpbi5TeXN0ZW0uZ2V0UnVudGltZUluZm8oKTtyZXR1cm4gdCs9YC0tcnVudGltZS1wb3J0ICR7bi5wb3J0fSBgLHQrPWAtLXJ1bnRpbWUtdmVyc2lvbiAke24udmVyc2lvbn0gYCx0LnRyaW0oKX19fSkoKTt2YXIgcj1pLm47ZXhwb3J0e3IgYXMgQVdNU2VydmVyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIEFXTSBmcm9tIFwiQG9wZW5maW4vYXdtXCI7XG5cbmNvbnN0IFRFU1RfQVBQX1dJTkRPV19JRCA9IFwiYXdtLWV4YW1wbGUtbmF0aXZlLXRlc3QtYXBwLWlkXCI7XG5cbi8vIFRoZSBET00gZWxlbWVudHNcbmxldCBjaGtTaG93RGVidWdXaW5kb3c6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsO1xubGV0IGJ0blN0YXJ0OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XG5sZXQgYnRuU3RvcDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xubGV0IGJ0bk5hdGl2ZVRlc3RBcHA6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcbmxldCBzZWxBdHRhY2hQb3NpdGlvbjogSFRNTFNlbGVjdEVsZW1lbnQgfCBudWxsO1xubGV0IGJ0bkF0dGFjaFRvV2luZG93OiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XG5sZXQgYnRuRGV0YWNoRnJvbVdpbmRvdzogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xubGV0IGJ0bkdldExheW91dDogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsO1xubGV0IGJ0bkdldEF0dGFjaGVkOiBIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw7XG5sZXQgYnRuQ2xlYXJMb2c6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcbmxldCBzZXJ2ZXJTdGF0dXM6IEhUTUxQYXJhZ3JhcGhFbGVtZW50IHwgbnVsbDtcbmxldCBsb2dnaW5nOiBIVE1MUHJlRWxlbWVudCB8IG51bGw7XG5cbmxldCBzZXJ2ZXJTdGF0ZTogXCJzdGFydGluZ1wiIHwgXCJzdGFydGVkXCIgfCBcInN0b3BwaW5nXCIgfCBcInN0b3BwZWRcIiA9IFwic3RvcHBlZFwiO1xubGV0IGlzV2luZG93T3BlbiA9IGZhbHNlO1xubGV0IGlzV2luZG93QXR0YWNoZWQgPSBmYWxzZTtcbmxldCBzZXJ2ZXI6IEFXTS5BV01TZXJ2ZXIgfCB1bmRlZmluZWQ7XG5cbi8vIFdhaXQgZm9yIHRoZSBET00gdG8gZmluaXNoIGxvYWRpbmdcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdC8vIFBsYXRmb3JtIGhhcyBsb2FkZWQgc28gaW5pdGlhbGl6ZSB0aGUgRE9NXG5cdGF3YWl0IGluaXRpYWxpemVET00oKTtcbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemUgdGhlIERPTSBlbGVtZW50cy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZURPTSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y2hrU2hvd0RlYnVnV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MSW5wdXRFbGVtZW50PihcIiNjaGtTaG93RGVidWdXaW5kb3dcIik7XG5cdGJ0blN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuU3RhcnRcIik7XG5cdGJ0blN0b3AgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5TdG9wXCIpO1xuXHRzZXJ2ZXJTdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxQYXJhZ3JhcGhFbGVtZW50PihcIiNzZXJ2ZXJTdGF0dXNcIik7XG5cdGJ0bk5hdGl2ZVRlc3RBcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5OYXRpdmVUZXN0QXBwXCIpO1xuXHRzZWxBdHRhY2hQb3NpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTFNlbGVjdEVsZW1lbnQ+KFwiI3NlbEF0dGFjaFBvc2l0aW9uXCIpO1xuXHRidG5BdHRhY2hUb1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bkF0dGFjaFRvV2luZG93XCIpO1xuXHRidG5EZXRhY2hGcm9tV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuRGV0YWNoRnJvbVdpbmRvd1wiKTtcblx0YnRuR2V0TGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oXCIjYnRuR2V0TGF5b3V0XCIpO1xuXHRidG5HZXRBdHRhY2hlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiI2J0bkdldEF0dGFjaGVkXCIpO1xuXHRsb2dnaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MUHJlRWxlbWVudD4oXCIjbG9nZ2luZ1wiKTtcblx0YnRuQ2xlYXJMb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PihcIiNidG5DbGVhckxvZ1wiKTtcblxuXHRpZiAoXG5cdFx0Y2hrU2hvd0RlYnVnV2luZG93ICYmXG5cdFx0YnRuU3RhcnQgJiZcblx0XHRidG5TdG9wICYmXG5cdFx0c2VydmVyU3RhdHVzICYmXG5cdFx0YnRuTmF0aXZlVGVzdEFwcCAmJlxuXHRcdGJ0bkF0dGFjaFRvV2luZG93ICYmXG5cdFx0YnRuRGV0YWNoRnJvbVdpbmRvdyAmJlxuXHRcdGJ0bkdldExheW91dCAmJlxuXHRcdGJ0bkdldEF0dGFjaGVkICYmXG5cdFx0YnRuQ2xlYXJMb2dcblx0KSB7XG5cdFx0YnRuU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHNlcnZlclN0YXRlID0gXCJzdGFydGluZ1wiO1xuXHRcdFx0XHR1cGRhdGVTZXJ2ZXJTdGF0dXMoKTtcblxuXHRcdFx0XHRsb2dJbmZvcm1hdGlvbihgU3RhcnRpbmcgQVdNIFNlcnZlciB3aXRoIElkICR7ZmluLm1lLmlkZW50aXR5LnV1aWR9YCk7XG5cdFx0XHRcdHNlcnZlciA9IG5ldyBBV00uQVdNU2VydmVyKGZpbi5tZS5pZGVudGl0eS51dWlkKTtcblx0XHRcdFx0YXdhaXQgc2VydmVyLnN0YXJ0KHsgc2hvd0RlYnVnOiBjaGtTaG93RGVidWdXaW5kb3c/LmNoZWNrZWQgfSk7XG5cblx0XHRcdFx0c2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGllbnQtcmVnaXN0ZXJlZFwiLCAoZXZlbnQ6IEFXTS5DbGllbnRSZWdpc3RlcmVkRXZlbnQpID0+IHtcblx0XHRcdFx0XHRsb2dJbmZvcm1hdGlvbihgQ2xpZW50IFJlZ2lzdGVyZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGllbnQtdW5yZWdpc3RlcmVkXCIsIChldmVudDogQVdNLkNsaWVudFVuUmVnaXN0ZXJlZEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0bG9nSW5mb3JtYXRpb24oYENsaWVudCBVbnJlZ2lzdGVyZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWApO1xuXHRcdFx0XHRcdGlmIChldmVudC5jbGllbnRJZCA9PT0gVEVTVF9BUFBfV0lORE9XX0lEKSB7XG5cdFx0XHRcdFx0XHRpc1dpbmRvd09wZW4gPSBmYWxzZTtcblx0XHRcdFx0XHRcdGlzV2luZG93QXR0YWNoZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHVwZGF0ZVdpbmRvd1N0YXR1cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNlcnZlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpZW50cy1hdHRhY2hlZFwiLCAoZXZlbnQ6IEFXTS5DbGllbnRzQXR0YWNoZWRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGxvZ0luZm9ybWF0aW9uKGBDbGllbnRzIEF0dGFjaGVkOiAke0pTT04uc3RyaW5naWZ5KGV2ZW50KX1gKTtcblx0XHRcdFx0XHRpZiAoZXZlbnQuYXR0YWNoZWRDbGllbnRJZCA9PT0gVEVTVF9BUFBfV0lORE9XX0lEKSB7XG5cdFx0XHRcdFx0XHRpc1dpbmRvd0F0dGFjaGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHVwZGF0ZVdpbmRvd1N0YXR1cygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdHNlcnZlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpZW50LWRldGFjaGVkXCIsIChldmVudDogQVdNLkNsaWVudERldGFjaGVkRXZlbnQpID0+IHtcblx0XHRcdFx0XHRsb2dJbmZvcm1hdGlvbihgQ2xpZW50IERldGFjaGVkOiAke0pTT04uc3RyaW5naWZ5KGV2ZW50KX1gKTtcblx0XHRcdFx0XHRpZiAoZXZlbnQuY2xpZW50SWQgPT09IFRFU1RfQVBQX1dJTkRPV19JRCkge1xuXHRcdFx0XHRcdFx0aXNXaW5kb3dBdHRhY2hlZCA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0dXBkYXRlV2luZG93U3RhdHVzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGllbnQtYWN0aXZhdGVkXCIsIChldmVudDogQVdNLkNsaWVudEFjdGl2YXRlZEV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0bG9nSW5mb3JtYXRpb24oYENsaWVudCBBY3RpdmF0ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGllbnQtZGVhY3RpdmF0ZWRcIiwgKGV2ZW50OiBBV00uQ2xpZW50RGVhY3RpdmF0ZWRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGxvZ0luZm9ybWF0aW9uKGBDbGllbnQgRGVhY3RpdmF0ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoZXZlbnQpfWApO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VydmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3ZlLXNpemUtY29tcGxldGVkXCIsIChldmVudDogQVdNLk1vdmVTaXplQ29tcGxldGVkRXZlbnQpID0+IHtcblx0XHRcdFx0XHRsb2dJbmZvcm1hdGlvbihgTW92ZSBTaXplIENvbXBsZXRlZDogJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzZXJ2ZXIuYWRkRXZlbnRMaXN0ZW5lcihcImdyb3Vwcy1jaGFuZ2VkXCIsIChldmVudDogQVdNLkdyb3Vwc0NoYW5nZWRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdGxvZ0luZm9ybWF0aW9uKGBHcm91cHMgQ2hhbmdlZDogJHtKU09OLnN0cmluZ2lmeShldmVudCl9YCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGxvZ0luZm9ybWF0aW9uKFwiU3RhcnRlZCBBV00gU2VydmVyXCIpO1xuXG5cdFx0XHRcdGNvbnN0IHdpbiA9IGZpbi5XaW5kb3cuZ2V0Q3VycmVudFN5bmMoKTtcblx0XHRcdFx0Y29uc3QgbmF0aXZlSWQgPSBhd2FpdCB3aW4uZ2V0TmF0aXZlSWQoKTtcblxuXHRcdFx0XHRhd2FpdCBzZXJ2ZXIucmVnaXN0ZXJXaW5kb3coZmluLm1lLmlkZW50aXR5LnV1aWQsIG5hdGl2ZUlkKTtcblx0XHRcdFx0bG9nSW5mb3JtYXRpb24oYFJlZ2lzdGVyaW5nIFBsYXRmb3JtIFdpbmRvdyB3aXRoIElkICR7ZmluLm1lLmlkZW50aXR5LnV1aWR9IGFuZCBoYW5kbGUgJHtuYXRpdmVJZH1gKTtcblxuXHRcdFx0XHRzZXJ2ZXJTdGF0ZSA9IFwic3RhcnRlZFwiO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGxvZ0Vycm9yKGZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0dXBkYXRlU2VydmVyU3RhdHVzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRidG5TdG9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzZXJ2ZXJTdGF0ZSA9IFwic3RvcHBpbmdcIjtcblx0XHRcdFx0dXBkYXRlU2VydmVyU3RhdHVzKCk7XG5cblx0XHRcdFx0bG9nSW5mb3JtYXRpb24oXCJTdG9wcGluZyBBV00gU2VydmVyXCIpO1xuXHRcdFx0XHRpZiAoc2VydmVyKSB7XG5cdFx0XHRcdFx0YXdhaXQgc2VydmVyLmRldGFjaEZyb21Hcm91cChURVNUX0FQUF9XSU5ET1dfSUQpO1xuXHRcdFx0XHRcdGF3YWl0IHNlcnZlci5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bG9nSW5mb3JtYXRpb24oXCJTdG9wcGVkIEFXTSBTZXJ2ZXJcIik7XG5cdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0bG9nRXJyb3IoZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRzZXJ2ZXIgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdHNlcnZlclN0YXRlID0gXCJzdG9wcGVkXCI7XG5cdFx0XHRcdGlzV2luZG93T3BlbiA9IGZhbHNlO1xuXHRcdFx0XHRpc1dpbmRvd0F0dGFjaGVkID0gZmFsc2U7XG5cdFx0XHRcdHVwZGF0ZVNlcnZlclN0YXR1cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YnRuTmF0aXZlVGVzdEFwcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgcnVudGltZUluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldFJ1bnRpbWVJbmZvKCk7XG5cdFx0XHRjb25zdCBhcHBBc3NldEluZm8gPSBhd2FpdCBmaW4uU3lzdGVtLmdldEFwcEFzc2V0SW5mbyh7IGFsaWFzOiBcIm5hdGl2ZS10ZXN0LWFwcFwiIH0pO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcblx0XHRcdGNvbnN0IGxvY2FsQXBwVXJsID0gKHJ1bnRpbWVJbmZvLmFyZ3MgYXMgYW55KVtcImxvY2FsLXN0YXJ0dXAtdXJsXCJdLnJlcGxhY2UoXCJjb25maWcuanNvblwiLCBcIlwiKTtcblx0XHRcdGF3YWl0IGxhdW5jaEFwcChcblx0XHRcdFx0XCJOYXRpdmUgVGVzdCBBcHBcIixcblx0XHRcdFx0VEVTVF9BUFBfV0lORE9XX0lELFxuXHRcdFx0XHRgJHtsb2NhbEFwcFVybH1hc3NldHNcXFxcJHthcHBBc3NldEluZm8uYWxpYXN9XFxcXCR7YXBwQXNzZXRJbmZvLnZlcnNpb259XFxcXCR7YXBwQXNzZXRJbmZvLnRhcmdldH1gLFxuXHRcdFx0XHRbXSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHR5cGU6IFwid2FpdEZvcldpbmRvd09mTmFtZVwiLFxuXHRcdFx0XHRcdHRpbWVvdXRNczogMTUwMDAsXG5cdFx0XHRcdFx0bWF0Y2hSZWdleDogXCJeTmF0aXZlIFRlc3QgQXBwJFwiXG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0XHRpc1dpbmRvd09wZW4gPSB0cnVlO1xuXHRcdFx0aXNXaW5kb3dBdHRhY2hlZCA9IGZhbHNlO1xuXHRcdFx0dXBkYXRlV2luZG93U3RhdHVzKCk7XG5cdFx0fSk7XG5cblx0XHRidG5BdHRhY2hUb1dpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0aWYgKHNlcnZlciAmJiBzZWxBdHRhY2hQb3NpdGlvbikge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IHNlbEF0dGFjaFBvc2l0aW9uLnZhbHVlO1xuXHRcdFx0XHRhd2FpdCBzZXJ2ZXIuYXR0YWNoV2luZG93cyhmaW4ubWUuaWRlbnRpdHkudXVpZCwgVEVTVF9BUFBfV0lORE9XX0lELCB2YWx1ZSBhcyBBV00uQXR0YWNoU2lkZSwgMCk7XG5cdFx0XHRcdGlzV2luZG93QXR0YWNoZWQgPSB0cnVlO1xuXHRcdFx0XHR1cGRhdGVXaW5kb3dTdGF0dXMoKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGJ0bkRldGFjaEZyb21XaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChzZXJ2ZXIpIHtcblx0XHRcdFx0YXdhaXQgc2VydmVyLmRldGFjaEZyb21Hcm91cChURVNUX0FQUF9XSU5ET1dfSUQpO1xuXHRcdFx0XHRpc1dpbmRvd0F0dGFjaGVkID0gZmFsc2U7XG5cdFx0XHRcdHVwZGF0ZVdpbmRvd1N0YXR1cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YnRuQ2xlYXJMb2cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdGxvZ0NsZWFyKCk7XG5cdFx0fSk7XG5cblx0XHRidG5HZXRMYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChzZXJ2ZXIpIHtcblx0XHRcdFx0Y29uc3QgbGF5b3V0ID0gYXdhaXQgc2VydmVyLmdldExheW91dCgpO1xuXHRcdFx0XHRsb2dJbmZvcm1hdGlvbihcIkxheW91dFwiKTtcblx0XHRcdFx0bG9nSW5mb3JtYXRpb24oSlNPTi5zdHJpbmdpZnkobGF5b3V0LCB1bmRlZmluZWQsIFwiICBcIikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YnRuR2V0QXR0YWNoZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdGlmIChzZXJ2ZXIpIHtcblx0XHRcdFx0Y29uc3QgYXR0YWNoZWQgPSBhd2FpdCBzZXJ2ZXIuZ2V0QXR0YWNoZWQoZmluLm1lLmlkZW50aXR5LnV1aWQpO1xuXHRcdFx0XHRsb2dJbmZvcm1hdGlvbihcIkF0dGFjaGVkXCIpO1xuXHRcdFx0XHRsb2dJbmZvcm1hdGlvbihKU09OLnN0cmluZ2lmeShhdHRhY2hlZCwgdW5kZWZpbmVkLCBcIiAgXCIpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHVwZGF0ZVNlcnZlclN0YXR1cygpO1xufVxuXG4vKipcbiAqIEZvcm1hdCBhbiBlcnJvciB0byBhIHJlYWRhYmxlIHN0cmluZy5cbiAqIEBwYXJhbSBlcnIgVGhlIGVycm9yIHRvIGZvcm1hdC5cbiAqIEByZXR1cm5zIFRoZSBmb3JtYXR0ZWQgZXJyb3IuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdEVycm9yKGVycjogdW5rbm93bik6IHN0cmluZyB7XG5cdGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdHJldHVybiBlcnIubWVzc2FnZTtcblx0fSBlbHNlIGlmICh0eXBlb2YgZXJyID09PSBcInN0cmluZ1wiKSB7XG5cdFx0cmV0dXJuIGVycjtcblx0fVxuXHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXJyKTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgdGhlIERPTSBlbGVtZW50cyB3aXRoIHRoZSBzdGF0ZSBvZiB0aGUgY29ubmVjdGlvbi5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlU2VydmVyU3RhdHVzKCk6IHZvaWQge1xuXHRpZiAoXG5cdFx0Y2hrU2hvd0RlYnVnV2luZG93ICYmXG5cdFx0YnRuU3RhcnQgJiZcblx0XHRidG5TdG9wICYmXG5cdFx0c2VydmVyU3RhdHVzICYmXG5cdFx0YnRuTmF0aXZlVGVzdEFwcCAmJlxuXHRcdGJ0bkF0dGFjaFRvV2luZG93ICYmXG5cdFx0YnRuRGV0YWNoRnJvbVdpbmRvdyAmJlxuXHRcdHNlbEF0dGFjaFBvc2l0aW9uICYmXG5cdFx0YnRuR2V0TGF5b3V0ICYmXG5cdFx0YnRuR2V0QXR0YWNoZWRcblx0KSB7XG5cdFx0aWYgKHNlcnZlclN0YXRlID09PSBcInN0YXJ0aW5nXCIgfHwgc2VydmVyU3RhdGUgPT09IFwic3RvcHBpbmdcIikge1xuXHRcdFx0Y2hrU2hvd0RlYnVnV2luZG93LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGJ0blN0YXJ0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGJ0blN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0YnRuR2V0TGF5b3V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGJ0bkdldEF0dGFjaGVkLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdHNlcnZlclN0YXR1cy50ZXh0Q29udGVudCA9IGBBV00gU2VydmVyIGlzICR7c2VydmVyU3RhdGV9YDtcblx0XHR9IGVsc2UgaWYgKHNlcnZlclN0YXRlID09PSBcInN0YXJ0ZWRcIikge1xuXHRcdFx0Y2hrU2hvd0RlYnVnV2luZG93LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGJ0blN0YXJ0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGJ0blN0b3AuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdGJ0bkdldExheW91dC5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0YnRuR2V0QXR0YWNoZWQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdHNlcnZlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQVdNIFNlcnZlciBpcyBzdGFydGVkXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoa1Nob3dEZWJ1Z1dpbmRvdy5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0YnRuU3RhcnQuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdGJ0blN0b3AuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0YnRuR2V0TGF5b3V0LmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdGJ0bkdldEF0dGFjaGVkLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdHNlcnZlclN0YXR1cy50ZXh0Q29udGVudCA9IFwiQVdNIFNlcnZlciBpcyBzdG9wcGVkXCI7XG5cdFx0fVxuXHR9XG5cdHVwZGF0ZVdpbmRvd1N0YXR1cygpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgVUkgYmFzZWQgb24gdGhlIHdpbmRvdyBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gdXBkYXRlV2luZG93U3RhdHVzKCk6IHZvaWQge1xuXHRpZiAoYnRuTmF0aXZlVGVzdEFwcCAmJiBzZWxBdHRhY2hQb3NpdGlvbiAmJiBidG5BdHRhY2hUb1dpbmRvdyAmJiBidG5EZXRhY2hGcm9tV2luZG93KSB7XG5cdFx0aWYgKHNlcnZlclN0YXRlID09PSBcInN0YXJ0aW5nXCIgfHwgc2VydmVyU3RhdGUgPT09IFwic3RvcHBpbmdcIikge1xuXHRcdFx0YnRuTmF0aXZlVGVzdEFwcC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRzZWxBdHRhY2hQb3NpdGlvbi5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRidG5BdHRhY2hUb1dpbmRvdy5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRidG5EZXRhY2hGcm9tV2luZG93LmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHNlcnZlclN0YXRlID09PSBcInN0YXJ0ZWRcIiAmJiBpc1dpbmRvd09wZW4pIHtcblx0XHRcdGJ0bk5hdGl2ZVRlc3RBcHAuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0c2VsQXR0YWNoUG9zaXRpb24uZGlzYWJsZWQgPSBpc1dpbmRvd0F0dGFjaGVkO1xuXHRcdFx0YnRuQXR0YWNoVG9XaW5kb3cuZGlzYWJsZWQgPSBpc1dpbmRvd0F0dGFjaGVkO1xuXHRcdFx0YnRuRGV0YWNoRnJvbVdpbmRvdy5kaXNhYmxlZCA9ICFpc1dpbmRvd0F0dGFjaGVkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRidG5OYXRpdmVUZXN0QXBwLmRpc2FibGVkID0gc2VydmVyU3RhdGUgPT09IFwic3RvcHBlZFwiO1xuXHRcdFx0c2VsQXR0YWNoUG9zaXRpb24uZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0YnRuQXR0YWNoVG9XaW5kb3cuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0YnRuRGV0YWNoRnJvbVdpbmRvdy5kaXNhYmxlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogU2VuZCBpbmZvcm1hdGlvbiB0byB0aGUgbG9nIGRpc3BsYXkuXG4gKiBAcGFyYW0gaW5mb3JtYXRpb24gVGhlIGluZm9ybWF0aW9uIHRvIHNlbmQuXG4gKi9cbmZ1bmN0aW9uIGxvZ0luZm9ybWF0aW9uKGluZm9ybWF0aW9uOiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmcpIHtcblx0XHRsb2dnaW5nLnRleHRDb250ZW50ID0gYCR7bG9nZ2luZy50ZXh0Q29udGVudH0ke2luZm9ybWF0aW9ufVxcblxcbmA7XG5cdFx0bG9nZ2luZy5zY3JvbGxUb3AgPSBsb2dnaW5nLnNjcm9sbEhlaWdodDtcblx0fVxufVxuXG4vKipcbiAqIFNlbmQgZXJyb3IgdG8gdGhlIGxvZyBkaXNwbGF5LlxuICogQHBhcmFtIGVyciBUaGUgZXJyb3IgdG8gc2VuZC5cbiAqL1xuZnVuY3Rpb24gbG9nRXJyb3IoZXJyOiBzdHJpbmcpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmcpIHtcblx0XHRsb2dnaW5nLnRleHRDb250ZW50ID0gYCR7bG9nZ2luZy50ZXh0Q29udGVudH1FUlJPUjogJHtlcnJ9XFxuXFxuYDtcblx0XHRsb2dnaW5nLnNjcm9sbFRvcCA9IGxvZ2dpbmcuc2Nyb2xsSGVpZ2h0O1xuXHR9XG59XG5cbi8qKlxuICogQ2xlYXIgdGhlIGxvZyBkaXNwbGF5LlxuICovXG5mdW5jdGlvbiBsb2dDbGVhcigpOiB2b2lkIHtcblx0aWYgKGxvZ2dpbmcpIHtcblx0XHRsb2dnaW5nLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRsb2dnaW5nLnNjcm9sbFRvcCA9IDA7XG5cdH1cbn1cblxuLyoqXG4gKiBMYXVuY2ggYW4gYXBwbGljYXRpb24gdXNpbmcgQVdNLlxuICogQHBhcmFtIGFwcE5hbWUgVGhlIG5hbWUgb2YgdGhlIGFwcCB0aGF0IGlzIGJlaW5nIGxhdW5jaGVkLlxuICogQHBhcmFtIGNsaWVudElkIEFuIElkIHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBsYXVuY2hlZCBhcHAuXG4gKiBAcGFyYW0gcGF0aCBUaGUgcGF0aCB0byB0aGUgYXBwIHRvIGxhdW5jaC5cbiAqIEBwYXJhbSBhcmdzIEFkZGl0aW9uYWwgY29tbWFuZCBsaW5lIGFyZ3VtZW50cyBmb3IgdGhlIGxhdW5jaC5cbiAqIEBwYXJhbSBzdHJhdGVneSBUaGUgc3RyYXRlZ3kgdG8gbGF1bmNoIHRoZSB3aW5kb3cgd2l0aC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbGF1bmNoQXBwKFxuXHRhcHBOYW1lOiBzdHJpbmcsXG5cdGNsaWVudElkOiBzdHJpbmcsXG5cdHBhdGg6IHN0cmluZyxcblx0YXJnczogc3RyaW5nW10sXG5cdHN0cmF0ZWd5OiBBV00uTGF1bmNoU3RyYXRlZ3lcbik6IFByb21pc2U8dm9pZD4ge1xuXHR0cnkge1xuXHRcdGlmIChzZXJ2ZXIpIHtcblx0XHRcdGxvZ0luZm9ybWF0aW9uKGBMYXVuY2hpbmcgJHthcHBOYW1lfWApO1xuXHRcdFx0Y29uc3QgbGF1bmNoUmVzdWx0ID0gYXdhaXQgc2VydmVyLmxhdW5jaCh7XG5cdFx0XHRcdHBhdGgsXG5cdFx0XHRcdGNsaWVudElkLFxuXHRcdFx0XHRhcmdzLFxuXHRcdFx0XHRzdHJhdGVneVxuXHRcdFx0fSk7XG5cblx0XHRcdGlmIChsYXVuY2hSZXN1bHQ/LnByb2Nlc3NfaWQpIHtcblx0XHRcdFx0bG9nSW5mb3JtYXRpb24oYCR7YXBwTmFtZX0gbGF1bmNoZWQgd2l0aCBwcm9jZXNzIGlkICR7bGF1bmNoUmVzdWx0LnByb2Nlc3NfaWR9YCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRsb2dFcnJvcihmb3JtYXRFcnJvcihlcnIpKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9