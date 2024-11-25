var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function o(e){return null==e}e.d(t,{k:()=>i});class r{constructor(e,t,o){this._storageTypeName=t,this._storageKey=`${fin.me.identity.uuid.toLowerCase().replaceAll(" ","")}-${e}`,o&&(this._logger=o("PlatformLocalStorage"))}async get(e){if(!o(e))return this.getCompleteStore()[e];this._logger?.error(`No id was specified for getting a ${this._storageTypeName} entry`)}async set(e,t){if(o(e))this._logger?.error(`You need to provide a id for the ${this._storageTypeName} entry you wish to save`);else{const o=this.getCompleteStore();o[e]=t,this.setCompleteStore(o)}}async getAll(e){const t=this.getCompleteStore();return 0===Object.keys(t).length?(this._logger?.info(`Storage has no ${this._storageTypeName} entries`),{}):t}async remove(e){if(o(e))this._logger?.error(`An id to clear the saved ${this._storageTypeName} was not provided`);else{const t=this.getCompleteStore();o(t[e])?this._logger?.error(`You tried to delete a non-existent ${this._storageTypeName} with id ${e}`):(delete t[e],this.setCompleteStore(t))}}getCompleteStore(){const e=localStorage.getItem(this._storageKey);return o(e)?(this._logger?.info(`Storage has no ${this._storageTypeName} entries. Creating store`),this.setCompleteStore({}),{}):JSON.parse(e)}setCompleteStore(e){localStorage.setItem(this._storageKey,JSON.stringify(e))}}const i={endpoint:new class{constructor(){this._storage={}}async initialize(e,t,o){this._loggerCreator=t,this._logger=t("LocalStorageEndpoint"),this._logger.info("Was passed the following options",e.data)}async action(e,t){if(o(t))return this._logger?.warn(`A request is required for this action: ${e.id}. Returning false`),!1;if("module"!==e.type)return this._logger?.warn(`We only expect endpoints of type module. Unable to perform action: ${e.id}`),!1;if(o(e.options))return this._logger?.warn(`The endpoint definition options are required for this action: ${e.id}`),!1;const{dataType:r,method:i}=e.options,s=this.getStorage(r);if("REMOVE"===i){const e=t.id;return await s.remove(e),!0}return"SET"===i&&(o(t.metaData)?(this._logger?.warn(`The metaData needs to be specified for this action: ${e.id}`),!1):o(t.payload)?(this._logger?.warn(`The payload needs to be specified for this action: ${e.id}`),!1):(await s.set(t.id,{metaData:t.metaData,payload:t.payload}),!0))}async requestResponse(e,t){if("module"!==e.type)return void this._logger?.warn(`We only expect endpoints of type module. Unable to action request/response for: ${e.id}`);if(o(e.options))return this._logger?.warn(`The endpoint definition options are required for this action: ${e.id}`),!1;const{dataType:r,method:i}=e.options,s=this.getStorage(r);if("GET"===i){const e=t?.id;return o(e)?s.getAll():s.get(e)}}getStorage(e){let t=this._storage[e];return o(t)&&(t=new r(e,e,this._loggerCreator),this._storage[e]=t),t}}};var s=t.k;export{s as entryPoints};
//# sourceMappingURL=local-storage.bundle.js.map