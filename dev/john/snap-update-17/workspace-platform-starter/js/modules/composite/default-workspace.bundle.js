var e,t={d:(e,a)=>{for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},a={};function s(e){return null==e}function o(e){return function(e){return null!=e&&"string"==typeof e}(e)&&e.trim().length>0}t.d(a,{k:()=>n}),function(e){e.CustomButton="CustomButton",e.StoreCustomButton="StoreCustomButton",e.CustomDropdownItem="CustomDropdownItem",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(e||(e={}));class i{async initialize(e,t,a){this._logger=a,this._helpers=t,this._settings=e,await this.setupEndpointClient(),await this.setVersionInfo()}async setDefaultWorkspace(e){const t=this._settings?.payloadId??"default-workspace",a=this._settings?.endpointIds?.setDefaultWorkspace??"set-default-workspace";return s(this._endpointClient)||s(this._versionInfo)||!this._endpointClient.hasEndpoint(a)?(this._logger?.warn("Unable to set the default workspace as the access to the endpoint client, version info or the endpoint is not available."),!1):await this._endpointClient.action(a,{id:t,platform:fin.me.identity.uuid,metaData:{version:{workspacePlatformClient:this._versionInfo.workspacePlatformClient,platformClient:this._versionInfo.platformClient}},payload:e})}async getDefaultWorkspace(){const e=this._settings?.payloadId??"default-workspace",t=this._settings?.endpointIds?.getDefaultWorkspace??"get-default-workspace",a={useLastActiveWorkspace:!1,workspaceId:""};if(!s(this._endpointClient)&&this._endpointClient.hasEndpoint(t)){const s=await this._endpointClient.requestResponse(t,{platform:fin.me.identity.uuid,id:e});return s?.payload??a}return this._logger?.warn("Unable to get the default workspace as the access to the endpoint client or the endpoint is not available."),a}async setupEndpointClient(){return!s(this._helpers?.getEndpointClient)&&(this._endpointClient=await(this._helpers?.getEndpointClient()),!0)}async setVersionInfo(){return!s(this._helpers?.getVersionInfo)&&(this._versionInfo=await(this._helpers?.getVersionInfo()),!0)}}const n={menus:new class{async initialize(e,t,a){this._logger=t("SetDefaultWorkspaceProvider"),this._settings=e.data,this._logger.info("Initializing"),this._defaultWorkspaceStorage=new i,await this._defaultWorkspaceStorage.initialize(e?.data,a,this._logger)}async closedown(){this._logger?.info("Closedown")}async get(e,t,a){if("global"===e&&!s(a?.windowIdentity)&&!s(this._defaultWorkspaceStorage)){const e=await this._defaultWorkspaceStorage.getDefaultWorkspace(),a=e.useLastActiveWorkspace,s=e.workspaceId,i=await t.Storage.getWorkspaces(),n=await t.getCurrentWorkspace();i.sort(((e,t)=>e.title.localeCompare(t.title)));const r={include:!0,label:this._settings?.defaultWorkspace?.menuLabel??"Default Workspace",icon:this._settings?.defaultWorkspace?.menuIcon,enabled:i.length>0,submenu:[],position:{type:"Downloads",operation:"before",customId:"DefaultWorkspace",...this._settings?.defaultWorkspace?.menuPosition}},c=this._settings?.reset?.include??!0;r.submenu?.push({label:this._settings?.reset?.menuLabel??"None",icon:this._settings?.reset?.menuIcon,visible:c,enabled:a||o(s),checked:!a&&!o(s),type:"checkbox",data:{type:"Custom",action:{id:"set-default-workspace",customData:{workspaceId:"",useLastActiveWorkspace:!1}}}});const l=this._settings?.lastActive?.include??!0;if(r.submenu?.push({label:this._settings?.lastActive?.menuLabel??"Last Active Workspace",icon:this._settings?.lastActive?.menuIcon,visible:l,checked:a,enabled:!a,type:"checkbox",data:{type:"Custom",action:{id:"set-default-workspace",customData:{workspaceId:n?.workspaceId??"",useLastActiveWorkspace:!0}}}}),i.length>0){const e=this._settings?.lastActive?.lastActiveWorkspaceLabel??" [Active Workspace]";for(const t of i)r.submenu?.push({label:a&&t.workspaceId===s?`${t.title} ${e}`:t.title,enabled:t.workspaceId!==s||a,checked:!a&&t.workspaceId===s,type:"checkbox",data:{type:"Custom",action:{id:"set-default-workspace",customData:{workspaceId:t.workspaceId,useLastActiveWorkspace:!1}}}})}const p=[];return p.push(r),p}}},lifecycle:new class{async initialize(e,t,a){this._logger=t("ApplyDefaultWorkspaceProvider"),this._helpers=a,this._defaultWorkspaceStorage=new i,await this._defaultWorkspaceStorage.initialize(e?.data,a,this._logger),this._logger.info("Initializing")}async closedown(){this._logger?.info("Closedown")}async get(){const e={};return e["after-bootstrap"]=async(e,t)=>{try{const e=await(this._defaultWorkspaceStorage?.getDefaultWorkspace()),t=e?.workspaceId;if(o(t)&&!s(this._helpers?.launchWorkspace)){this._logger?.info(`Retrieved workspace id: ${e?.workspaceId} and we have the ability to launch a workspace. Applying the workspace.`);const a=await(this._helpers?.launchWorkspace(t,this._logger));this._logger?.info(`Workspace Id ${t} applied: ${a}`)}}catch(e){this._logger?.error("There was an error trying to apply to get or apply the default workspace.",e)}},e["workspace-changed"]=async(e,t)=>{if(!s(t)){const e=t;if(("update"===e.action||"create"===e.action)&&!s(this._defaultWorkspaceStorage))try{if((await this._defaultWorkspaceStorage.getDefaultWorkspace()).useLastActiveWorkspace){const t=await this._defaultWorkspaceStorage.setDefaultWorkspace({workspaceId:e.id,useLastActiveWorkspace:!0});this._logger?.info(`Default workspace updated to workspace: ${e.id} through last active workspace: ${t}`)}}catch(t){this._logger?.error(`Unable to update default workspace to workspace id: ${e.id} because an error occurred.`,t)}}},e}},actions:new class{async initialize(e,t,a){this._logger=t("DefaultWorkspaceAction"),this._defaultWorkspaceStorage=new i,await this._defaultWorkspaceStorage.initialize(e?.data,a,this._logger)}async get(t){const a={};return a["set-default-workspace"]=async t=>{if(t.callerType===e.GlobalContextMenu)try{if(s(t.customData)||s(this._defaultWorkspaceStorage))this._logger?.warn("An action for setting the default workspace was not passed a payload and cannot be processed.");else{const e=await this._defaultWorkspaceStorage.setDefaultWorkspace(t.customData);this._logger?.info(`The default workspace state has been updated: ${e}`,t.customData)}}catch{this._logger?.info("Cannot set the default workspace with the information provided.")}},a}}};var r=a.k;export{r as entryPoints};
//# sourceMappingURL=default-workspace.bundle.js.map