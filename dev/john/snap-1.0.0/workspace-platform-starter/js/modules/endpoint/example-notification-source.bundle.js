var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function i(e){return null==e}function n(e){return function(e){return null!=e&&"string"==typeof e}(e)&&e.trim().length>0}function s(){return"randomUUID"in globalThis.crypto?globalThis.crypto.randomUUID():"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(function(e){const t=globalThis.crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(e)/4;return(Number(e)^t).toString(16)}))}e.d(t,{k:()=>a});class o{async initialize(e,t,i,n){if(this._definition=e,this._logger=t(`LifeCycleDrivenNotificationSource(${this._definition?.id}):`),this._helpers=i,this._raiseNotificationRequest=n,this._lifeCycleSubscriptions={},this._logger.info("Initializing"),i?.subscribeLifecycleEvent){const e=i.subscribeLifecycleEvent("after-bootstrap",(async()=>{await this.startNotificationLifecycleSource()}));this._lifeCycleSubscriptions[e]="after-bootstrap"}}async closedown(){this._logger?.info("Closedown"),await this.stopNotificationLifecycleSource()}async startNotificationLifecycleSource(){if(this._helpers?.subscribeLifecycleEvent&&this._raiseNotificationRequest){this._lifeCycleSubscriptions||(this._lifeCycleSubscriptions={});const e=this._raiseNotificationRequest;if(!1!==this._definition?.data?.notifyOn?.appsChanged){const t=this._helpers?.subscribeLifecycleEvent("apps-changed",(async()=>{const t={id:s(),title:"Apps Changed Notification",body:`The list of apps on this platform has changed.This was generated by the example notification service (moduleId: ${this._definition?.id}).`};await e(t)}));this._lifeCycleSubscriptions[t]="apps-changed"}if(!1!==this._definition?.data?.notifyOn?.favoriteChanged){const t=this._helpers?.subscribeLifecycleEvent("favorite-changed",(async()=>{const t={id:s(),title:"Favorite Changed Notification",body:`You have changed a favorite on this platform.This was generated by the example notification service (moduleId: ${this._definition?.id}).`,toast:"transient",category:"default",template:"markdown"};await e(t)}));this._lifeCycleSubscriptions[t]="favorite-changed"}if(!1!==this._definition?.data?.notifyOn?.pageChanged){const t=this._helpers?.subscribeLifecycleEvent("page-changed",(async()=>{const t={id:s(),title:"Page Changed Notification",body:`You have changed the page on this platform.This was generated by the example notification service (moduleId: ${this._definition?.id}).`,toast:"transient",category:"default",template:"markdown"};await e(t)}));this._lifeCycleSubscriptions[t]="page-changed"}if(!1!==this._definition?.data?.notifyOn?.themeChanged){const t=this._helpers?.subscribeLifecycleEvent("theme-changed",(async()=>{const t={id:s(),title:"Theme Changed",body:`You have changed the theme for this platform. This was generated by the example notification service (moduleId: ${this._definition?.id}).`,form:[{type:"boolean",key:"intendedThemeChange",label:"Did you intend to change the theme?",widget:{type:"Toggle"}}],buttons:[{onClick:{task:"broadcast",customData:{id:"green",task:"broadcast",context:{type:"custom.context",name:"Form Submitted"},broadcastOptions:{isUserChannel:!0}}},cta:!0,submit:!0,title:"Broadcast Form on Green",type:"button"}]};await e(t)}));this._lifeCycleSubscriptions[t]="theme-changed"}if(!1!==this._definition?.data?.notifyOn?.workspaceChanged){const t=this._helpers?.subscribeLifecycleEvent("workspace-changed",(async()=>{const t={title:"Workspace Changed",body:`You have changed your workspace. This was generated by the example notification service (moduleId: ${this._definition?.id}).`,toast:"transient",category:"default",template:"markdown",buttons:[]};await e(t)}));this._lifeCycleSubscriptions[t]="workspace-changed"}}}async stopNotificationLifecycleSource(){if(this._logger?.info("Stopping notification service (Not Really...this is an example.)"),this._helpers?.unsubscribeLifecycleEvent&&this._lifeCycleSubscriptions)for(const[e,t]of Object.entries(this._lifeCycleSubscriptions))this._helpers.unsubscribeLifecycleEvent(e,t)}}const a={endpoint:new class{async initialize(e,t,i){if(this._definition=e,this._logger=t("ExampleNotificationSourceProvider"),this._helpers=i,this._logger.info("Initializing"),this._queuedNotifications=[],this._notificationLifecycleEventSource=new o,await this._notificationLifecycleEventSource.initialize(e,t,i,(async e=>{this._queuedNotifications?.push({eventId:"create",payload:e})})),n(this._definition?.data?.websocket?.url)&&(this._definition.data.websocket?.url.startsWith("ws://")||this._definition.data.websocket?.url.startsWith("wss://"))&&i?.subscribeLifecycleEvent){const e=this._definition.data.websocket.url;let t;const n=i.subscribeLifecycleEvent("after-bootstrap",(async()=>{try{t=new WebSocket(e),t.addEventListener("open",(()=>{this._logger?.info("Websocket connection opened.")})),t.addEventListener("message",(e=>{this._logger?.info("Websocket message received:",e.data),this._queuedNotifications?.push(JSON.parse(e.data))}))}catch(t){this._logger?.error(`Error creating websocket connection to url ${e}.`,t)}}));this._cleanupWS=async()=>{t&&(this._logger?.info("Closing websocket connection."),t.close()),this._helpers?.unsubscribeLifecycleEvent&&this._helpers.unsubscribeLifecycleEvent(n,"after-bootstrap")}}if(n(this._definition?.data?.longpoll?.url)&&(this._definition.data.longpoll.url.startsWith("http://")||this._definition.data.longpoll.url.startsWith("https://"))&&i?.subscribeLifecycleEvent){const e=this._definition.data.longpoll.url;let t;const n=i.subscribeLifecycleEvent("after-bootstrap",(async()=>{try{const i=await fetch(e),n=await i.json();Array.isArray(n)&&n.length>0&&(this._logger?.info(`Longpoll data received: ${n.length} messages`),this._queuedNotifications?.push(...n));const s=this._definition?.data?.longpoll?.intervalInSeconds??5;t=setInterval((async()=>{const t=await fetch(e),i=await t.json();Array.isArray(i)&&i.length>0&&(this._logger?.info(`Longpoll data received: ${i.length} messages`),this._queuedNotifications?.push(...i))}),1e3*s)}catch(t){this._logger?.error(`Error fetching long polling data for url ${e}. Polling will not continue.`,t)}}));this._cleanupLP=async()=>{t&&(this._logger?.info("Stopping Long Polling."),clearInterval(t)),this._helpers?.unsubscribeLifecycleEvent&&this._helpers.unsubscribeLifecycleEvent(n,"after-bootstrap")}}}async closedown(){this._logger?.info("Closedown"),i(this._readableStream)||await this._readableStream.cancel(),i(this._notificationLifecycleEventSource)||await this._notificationLifecycleEventSource.closedown(),i(this._cleanupWS)||await this._cleanupWS(),i(this._cleanupLP)||await this._cleanupLP()}async action(e,t){if(!i(t)){this._logger?.info(`Received notification: ${JSON.stringify(t)}`);let e=!1;if(this._definition?.data?.post?.url&&(this._definition.data.post.url.startsWith("http://")||this._definition.data.post.url.startsWith("https://"))){const i={message:t};e=(await fetch(this._definition.data.post.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok}else this._queuedNotifications?.push(t);return e}return this._logger?.warn("Action called with an empty notification."),!1}async requestStream(e,t){return i(this._readableStream)&&(this._logger?.info("Creating new stream"),this._readableStream=this.createReadableStream()),this._logger?.info("Returning requested stream"),this._readableStream}createReadableStream(){let e;const t=this._definition?.data?.intervalInSeconds??1,i=1e3*(t<1?1:t),n=()=>{const e=[...this._queuedNotifications??[]];return this._queuedNotifications=[],e};return new ReadableStream({start(t){e=setInterval((()=>{const e=n();for(const i of e)t.enqueue(i)}),i)},cancel(){clearInterval(e)}})}}};var c=t.k;export{c as entryPoints};
//# sourceMappingURL=example-notification-source.bundle.js.map