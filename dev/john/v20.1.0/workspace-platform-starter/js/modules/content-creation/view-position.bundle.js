var t={d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};t.d(e,{k:()=>i});const i={contentCreation:new class{async initialize(t,e,i){this._logger=e("ViewPositionContentCreationProvider"),this._settings=t.data,this._helpers=i}async getRules(){return this._settings?.rules??[]}async handleViewCreated(t,e,i,n){if(this._logger?.info("View Created",e,i,n),i>=0&&!n){const t=e.parsedFeatures["view-position"]??this._settings?.defaultViewPosition;if(function(t){return null!=t&&"string"==typeof t}(r=t)&&r.trim().length>0&&!function(t){return null==t}(e.viewIdentity)){if("right"===t||"left"===t||"top"===t||"bottom"===t){const i=fin.View.wrapSync(e.viewIdentity),n=await i.getCurrentStack();return await n.createAdjacentStack([e.childOptions],{position:t}),!0}if("stack-left"===t||"stack-right"===t){const i=fin.View.wrapSync(e.viewIdentity),n=await i.getCurrentStack(),r=(await n.getViews()).findIndex((t=>t.name===e.viewIdentity?.name));return await n.addView(e.childOptions,{index:"stack-left"===t?r:r+1}),!0}}}var r;return!1}async handleWindowCreated(t,e,i){this._logger?.info("Window Created",e,i)}async handleBrowserCreated(t,e,i){this._logger?.info("Browser Created",e,i)}async handleBlocked(t,e,i){this._logger?.info("Content Blocked",e,i)}}};var n=e.k;export{n as entryPoints};
//# sourceMappingURL=view-position.bundle.js.map