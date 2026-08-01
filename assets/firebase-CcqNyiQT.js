const Pc=()=>{};var Ds={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Cc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],c=n[e++],h=n[e++],f=((s&7)<<18|(o&63)<<12|(c&63)<<6|h&63)-65536;t[r++]=String.fromCharCode(55296+(f>>10)),t[r++]=String.fromCharCode(56320+(f&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|c&63)}}return t.join("")},Do={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],c=s+1<n.length,h=c?n[s+1]:0,f=s+2<n.length,p=f?n[s+2]:0,I=o>>2,w=(o&3)<<4|h>>4;let C=(h&15)<<2|p>>6,V=p&63;f||(V=64,c||(C=64)),r.push(e[I],e[w],e[C],e[V])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Vo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Cc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],h=s<n.length?e[n.charAt(s)]:0;++s;const p=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||h==null||p==null||w==null)throw new bc;const C=o<<2|h>>4;if(r.push(C),p!==64){const V=h<<4&240|p>>2;if(r.push(V),w!==64){const N=p<<6&192|w;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vc=function(n){const t=Vo(n);return Do.encodeByteArray(t,!0)},Un=function(n){return Vc(n).replace(/\./g,"")},Dc=function(n){try{return Do.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=()=>Nc().__FIREBASE_DEFAULTS__,kc=()=>{if(typeof process>"u"||typeof Ds>"u")return;const n=Ds.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Dc(n[1]);return t&&JSON.parse(t)},ri=()=>{try{return Pc()||Oc()||kc()||Mc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},xc=n=>{var t,e;return(e=(t=ri())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Lc=n=>{const t=xc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},No=()=>{var n;return(n=ri())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Un(JSON.stringify(e)),Un(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jc(){var t;const n=(t=ri())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $c(){return!jc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qc(){try{return typeof indexedDB=="object"}catch{return!1}}function zc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Hc,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],c=o?Gc(o,r):"Error",h=`${this.serviceName}: ${c} (${s}).`;return new Ae(s,h,r)}}function Gc(n,t){return n.replace(Kc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Kc=/\{\$([^}]+)}/g;function Bn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],c=t[s];if(Ns(o)&&Ns(c)){if(!Bn(o,c))return!1}else if(o!==c)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ns(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wc(n){return(await fetch(n,{credentials:"include"})).ok}class Ye{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Fc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Jc(t))try{this.getOrInitializeService({instanceIdentifier:te})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=te){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=te){return this.instances.has(t)}getOptions(t=te){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(o);r===h&&c.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=te){return this.component?this.component.multipleInstances?t:te:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xc(n){return n===te?void 0:n}function Jc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Qc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Zc={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},tl=U.INFO,el={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},nl=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=el[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Mo{constructor(t){this.name=t,this._logLevel=tl,this._logHandler=nl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Zc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const rl=(n,t)=>t.some(e=>n instanceof e);let Os,ks;function il(){return Os||(Os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sl(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xo=new WeakMap,Br=new WeakMap,Lo=new WeakMap,Nr=new WeakMap,ii=new WeakMap;function ol(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(jt(n.result)),s()},c=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&xo.set(e,n)}).catch(()=>{}),ii.set(t,n),t}function al(n){if(Br.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),s()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});Br.set(n,t)}let jr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Br.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Lo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return jt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function cl(n){jr=n(jr)}function ll(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Or(this),t,...e);return Lo.set(r,t.sort?t.sort():[t]),jt(r)}:sl().includes(n)?function(...t){return n.apply(Or(this),t),jt(xo.get(this))}:function(...t){return jt(n.apply(Or(this),t))}}function ul(n){return typeof n=="function"?ll(n):(n instanceof IDBTransaction&&al(n),rl(n,il())?new Proxy(n,jr):n)}function jt(n){if(n instanceof IDBRequest)return ol(n);if(Nr.has(n))return Nr.get(n);const t=ul(n);return t!==n&&(Nr.set(n,t),ii.set(t,n)),t}const Or=n=>ii.get(n);function hl(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const c=indexedDB.open(n,t),h=jt(c);return r&&c.addEventListener("upgradeneeded",f=>{r(jt(c.result),f.oldVersion,f.newVersion,jt(c.transaction),f)}),e&&c.addEventListener("blocked",f=>e(f.oldVersion,f.newVersion,f)),h.then(f=>{o&&f.addEventListener("close",()=>o()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const fl=["get","getKey","getAll","getAllKeys","count"],dl=["put","add","delete","clear"],kr=new Map;function Ms(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=dl.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fl.includes(e)))return;const o=async function(c,...h){const f=this.transaction(c,s?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[e](...h),s&&f.done]))[0]};return kr.set(t,o),o}cl(n=>({...n,get:(t,e,r)=>Ms(t,e)||n.get(t,e,r),has:(t,e)=>!!Ms(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(ml(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function ml(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $r="@firebase/app",xs="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Mo("@firebase/app"),gl="@firebase/app-compat",_l="@firebase/analytics-compat",yl="@firebase/analytics",El="@firebase/app-check-compat",Tl="@firebase/app-check",vl="@firebase/auth",Il="@firebase/auth-compat",Al="@firebase/database",wl="@firebase/data-connect",Rl="@firebase/database-compat",Sl="@firebase/functions",Pl="@firebase/functions-compat",Cl="@firebase/installations",bl="@firebase/installations-compat",Vl="@firebase/messaging",Dl="@firebase/messaging-compat",Nl="@firebase/performance",Ol="@firebase/performance-compat",kl="@firebase/remote-config",Ml="@firebase/remote-config-compat",xl="@firebase/storage",Ll="@firebase/storage-compat",Fl="@firebase/firestore",Ul="@firebase/ai",Bl="@firebase/firestore-compat",jl="firebase",$l="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]",ql={[$r]:"fire-core",[gl]:"fire-core-compat",[yl]:"fire-analytics",[_l]:"fire-analytics-compat",[Tl]:"fire-app-check",[El]:"fire-app-check-compat",[vl]:"fire-auth",[Il]:"fire-auth-compat",[Al]:"fire-rtdb",[wl]:"fire-data-connect",[Rl]:"fire-rtdb-compat",[Sl]:"fire-fn",[Pl]:"fire-fn-compat",[Cl]:"fire-iid",[bl]:"fire-iid-compat",[Vl]:"fire-fcm",[Dl]:"fire-fcm-compat",[Nl]:"fire-perf",[Ol]:"fire-perf-compat",[kl]:"fire-rc",[Ml]:"fire-rc-compat",[xl]:"fire-gcs",[Ll]:"fire-gcs-compat",[Fl]:"fire-fst",[Bl]:"fire-fst-compat",[Ul]:"fire-vertex","fire-js":"fire-js",[jl]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Map,zl=new Map,zr=new Map;function Ls(n,t){try{n.container.addComponent(t)}catch(e){kt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function $n(n){const t=n.name;if(zr.has(t))return kt.debug(`There were multiple attempts to register component ${t}.`),!1;zr.set(t,n);for(const e of jn.values())Ls(e,n);for(const e of zl.values())Ls(e,n);return!0}function Hl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Gl(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new Oo("app","Firebase",Kl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=$l;function Xl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:qr,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw $t.create("bad-app-name",{appName:String(s)});if(e||(e=No()),!e)throw $t.create("no-options");const o=jn.get(s);if(o){if(Bn(e,o.options)&&Bn(r,o.config))return o;throw $t.create("duplicate-app",{appName:s})}const c=new Yc(s);for(const f of zr.values())c.addComponent(f);const h=new Wl(e,r,c);return jn.set(s,h),h}function Jl(n=qr){const t=jn.get(n);if(!t&&n===qr&&No())return Xl();if(!t)throw $t.create("no-app",{appName:n});return t}function He(n,t,e){let r=ql[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const c=[`Unable to register library "${r}" with version "${t}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),kt.warn(c.join(" "));return}$n(new Ye(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="firebase-heartbeat-database",Zl=1,Ze="firebase-heartbeat-store";let Mr=null;function Fo(){return Mr||(Mr=hl(Yl,Zl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ze)}catch(e){console.warn(e)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),Mr}async function tu(n){try{const e=(await Fo()).transaction(Ze),r=await e.objectStore(Ze).get(Uo(n));return await e.done,r}catch(t){if(t instanceof Ae)kt.warn(t.message);else{const e=$t.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});kt.warn(e.message)}}}async function Fs(n,t){try{const r=(await Fo()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,Uo(n)),await r.done}catch(e){if(e instanceof Ae)kt.warn(e.message);else{const r=$t.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});kt.warn(r.message)}}}function Uo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=1024,nu=30;class ru{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new su(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Us();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>nu){const c=ou(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){kt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Us(),{heartbeatsToSend:r,unsentEntries:s}=iu(this._heartbeatsCache.heartbeats),o=Un(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return kt.warn(e),""}}}function Us(){return new Date().toISOString().substring(0,10)}function iu(n,t=eu){const e=[];let r=n.slice();for(const s of n){const o=e.find(c=>c.agent===s.agent);if(o){if(o.dates.push(s.date),Bs(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Bs(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class su{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qc()?zc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await tu(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Bs(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}function ou(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n){$n(new Ye("platform-logger",t=>new pl(t),"PRIVATE")),$n(new Ye("heartbeat",t=>new ru(t),"PRIVATE")),He($r,xs,n),He($r,xs,"esm2020"),He("fire-js","")}au("");var js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var si;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(y,d){function g(){}g.prototype=d.prototype,y.F=d.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(E,_,v){for(var m=Array(arguments.length-2),gt=2;gt<arguments.length;gt++)m[gt-2]=arguments[gt];return d.prototype[_].apply(E,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,d,g){g||(g=0);const E=Array(16);if(typeof d=="string")for(var _=0;_<16;++_)E[_]=d.charCodeAt(g++)|d.charCodeAt(g++)<<8|d.charCodeAt(g++)<<16|d.charCodeAt(g++)<<24;else for(_=0;_<16;++_)E[_]=d[g++]|d[g++]<<8|d[g++]<<16|d[g++]<<24;d=y.g[0],g=y.g[1],_=y.g[2];let v=y.g[3],m;m=d+(v^g&(_^v))+E[0]+3614090360&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[1]+3905402710&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[2]+606105819&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[3]+3250441966&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[4]+4118548399&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[5]+1200080426&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[6]+2821735955&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[7]+4249261313&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[8]+1770035416&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[9]+2336552879&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[10]+4294925233&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[11]+2304563134&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(v^g&(_^v))+E[12]+1804603682&4294967295,d=g+(m<<7&4294967295|m>>>25),m=v+(_^d&(g^_))+E[13]+4254626195&4294967295,v=d+(m<<12&4294967295|m>>>20),m=_+(g^v&(d^g))+E[14]+2792965006&4294967295,_=v+(m<<17&4294967295|m>>>15),m=g+(d^_&(v^d))+E[15]+1236535329&4294967295,g=_+(m<<22&4294967295|m>>>10),m=d+(_^v&(g^_))+E[1]+4129170786&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[6]+3225465664&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[11]+643717713&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[0]+3921069994&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[5]+3593408605&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[10]+38016083&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[15]+3634488961&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[4]+3889429448&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[9]+568446438&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[14]+3275163606&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[3]+4107603335&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[8]+1163531501&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(_^v&(g^_))+E[13]+2850285829&4294967295,d=g+(m<<5&4294967295|m>>>27),m=v+(g^_&(d^g))+E[2]+4243563512&4294967295,v=d+(m<<9&4294967295|m>>>23),m=_+(d^g&(v^d))+E[7]+1735328473&4294967295,_=v+(m<<14&4294967295|m>>>18),m=g+(v^d&(_^v))+E[12]+2368359562&4294967295,g=_+(m<<20&4294967295|m>>>12),m=d+(g^_^v)+E[5]+4294588738&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[8]+2272392833&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[11]+1839030562&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[14]+4259657740&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[1]+2763975236&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[4]+1272893353&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[7]+4139469664&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[10]+3200236656&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[13]+681279174&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[0]+3936430074&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[3]+3572445317&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[6]+76029189&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(g^_^v)+E[9]+3654602809&4294967295,d=g+(m<<4&4294967295|m>>>28),m=v+(d^g^_)+E[12]+3873151461&4294967295,v=d+(m<<11&4294967295|m>>>21),m=_+(v^d^g)+E[15]+530742520&4294967295,_=v+(m<<16&4294967295|m>>>16),m=g+(_^v^d)+E[2]+3299628645&4294967295,g=_+(m<<23&4294967295|m>>>9),m=d+(_^(g|~v))+E[0]+4096336452&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[7]+1126891415&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[14]+2878612391&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[5]+4237533241&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[12]+1700485571&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[3]+2399980690&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[10]+4293915773&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[1]+2240044497&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[8]+1873313359&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[15]+4264355552&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[6]+2734768916&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[13]+1309151649&4294967295,g=_+(m<<21&4294967295|m>>>11),m=d+(_^(g|~v))+E[4]+4149444226&4294967295,d=g+(m<<6&4294967295|m>>>26),m=v+(g^(d|~_))+E[11]+3174756917&4294967295,v=d+(m<<10&4294967295|m>>>22),m=_+(d^(v|~g))+E[2]+718787259&4294967295,_=v+(m<<15&4294967295|m>>>17),m=g+(v^(_|~d))+E[9]+3951481745&4294967295,y.g[0]=y.g[0]+d&4294967295,y.g[1]=y.g[1]+(_+(m<<21&4294967295|m>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}r.prototype.v=function(y,d){d===void 0&&(d=y.length);const g=d-this.blockSize,E=this.C;let _=this.h,v=0;for(;v<d;){if(_==0)for(;v<=g;)s(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<d;)if(E[_++]=y.charCodeAt(v++),_==this.blockSize){s(this,E),_=0;break}}else for(;v<d;)if(E[_++]=y[v++],_==this.blockSize){s(this,E),_=0;break}}this.h=_,this.o+=d},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var d=1;d<y.length-8;++d)y[d]=0;d=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=d&255,d/=256;for(this.v(y),y=Array(16),d=0,g=0;g<4;++g)for(let E=0;E<32;E+=8)y[d++]=this.g[g]>>>E&255;return y};function o(y,d){var g=h;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=d(y)}function c(y,d){this.h=d;const g=[];let E=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;E&&v==d||(g[_]=v,E=!1)}this.g=g}var h={};function f(y){return-128<=y&&y<128?o(y,function(d){return new c([d|0],d<0?-1:0)}):new c([y|0],y<0?-1:0)}function p(y){if(isNaN(y)||!isFinite(y))return w;if(y<0)return x(p(-y));const d=[];let g=1;for(let E=0;y>=g;E++)d[E]=y/g|0,g*=4294967296;return new c(d,0)}function I(y,d){if(y.length==0)throw Error("number format error: empty string");if(d=d||10,d<2||36<d)throw Error("radix out of range: "+d);if(y.charAt(0)=="-")return x(I(y.substring(1),d));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=p(Math.pow(d,8));let E=w;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const m=parseInt(y.substring(v,v+_),d);_<8?(_=p(Math.pow(d,_)),E=E.j(_).add(p(m))):(E=E.j(g),E=E.add(p(m)))}return E}var w=f(0),C=f(1),V=f(16777216);n=c.prototype,n.m=function(){if(L(this))return-x(this).m();let y=0,d=1;for(let g=0;g<this.g.length;g++){const E=this.i(g);y+=(E>=0?E:4294967296+E)*d,d*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(N(this))return"0";if(L(this))return"-"+x(this).toString(y);const d=p(Math.pow(y,6));var g=this;let E="";for(;;){const _=Rt(g,d).g;g=X(g,_.j(d));let v=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=_,N(g))return v+E;for(;v.length<6;)v="0"+v;E=v+E}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function N(y){if(y.h!=0)return!1;for(let d=0;d<y.g.length;d++)if(y.g[d]!=0)return!1;return!0}function L(y){return y.h==-1}n.l=function(y){return y=X(this,y),L(y)?-1:N(y)?0:1};function x(y){const d=y.g.length,g=[];for(let E=0;E<d;E++)g[E]=~y.g[E];return new c(g,~y.h).add(C)}n.abs=function(){return L(this)?x(this):this},n.add=function(y){const d=Math.max(this.g.length,y.g.length),g=[];let E=0;for(let _=0;_<=d;_++){let v=E+(this.i(_)&65535)+(y.i(_)&65535),m=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);E=m>>>16,v&=65535,m&=65535,g[_]=m<<16|v}return new c(g,g[g.length-1]&-2147483648?-1:0)};function X(y,d){return y.add(x(d))}n.j=function(y){if(N(this)||N(y))return w;if(L(this))return L(y)?x(this).j(x(y)):x(x(this).j(y));if(L(y))return x(this.j(x(y)));if(this.l(V)<0&&y.l(V)<0)return p(this.m()*y.m());const d=this.g.length+y.g.length,g=[];for(var E=0;E<2*d;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(let _=0;_<y.g.length;_++){const v=this.i(E)>>>16,m=this.i(E)&65535,gt=y.i(_)>>>16,Wt=y.i(_)&65535;g[2*E+2*_]+=m*Wt,Q(g,2*E+2*_),g[2*E+2*_+1]+=v*Wt,Q(g,2*E+2*_+1),g[2*E+2*_+1]+=m*gt,Q(g,2*E+2*_+1),g[2*E+2*_+2]+=v*gt,Q(g,2*E+2*_+2)}for(y=0;y<d;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=d;y<2*d;y++)g[y]=0;return new c(g,0)};function Q(y,d){for(;(y[d]&65535)!=y[d];)y[d+1]+=y[d]>>>16,y[d]&=65535,d++}function at(y,d){this.g=y,this.h=d}function Rt(y,d){if(N(d))throw Error("division by zero");if(N(y))return new at(w,w);if(L(y))return d=Rt(x(y),d),new at(x(d.g),x(d.h));if(L(d))return d=Rt(y,x(d)),new at(x(d.g),d.h);if(y.g.length>30){if(L(y)||L(d))throw Error("slowDivide_ only works with positive integers.");for(var g=C,E=d;E.l(y)<=0;)g=mt(g),E=mt(E);var _=Et(g,1),v=Et(E,1);for(E=Et(E,2),g=Et(g,2);!N(E);){var m=v.add(E);m.l(y)<=0&&(_=_.add(g),v=m),E=Et(E,1),g=Et(g,1)}return d=X(y,_.j(d)),new at(_,d)}for(_=w;y.l(d)>=0;){for(g=Math.max(1,Math.floor(y.m()/d.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),v=p(g),m=v.j(d);L(m)||m.l(y)>0;)g-=E,v=p(g),m=v.j(d);N(v)&&(v=C),_=_.add(v),y=X(y,m)}return new at(_,y)}n.B=function(y){return Rt(this,y).h},n.and=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)&y.i(E);return new c(g,this.h&y.h)},n.or=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)|y.i(E);return new c(g,this.h|y.h)},n.xor=function(y){const d=Math.max(this.g.length,y.g.length),g=[];for(let E=0;E<d;E++)g[E]=this.i(E)^y.i(E);return new c(g,this.h^y.h)};function mt(y){const d=y.g.length+1,g=[];for(let E=0;E<d;E++)g[E]=y.i(E)<<1|y.i(E-1)>>>31;return new c(g,y.h)}function Et(y,d){const g=d>>5;d%=32;const E=y.g.length-g,_=[];for(let v=0;v<E;v++)_[v]=d>0?y.i(v+g)>>>d|y.i(v+g+1)<<32-d:y.i(v+g);return new c(_,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=p,c.fromString=I,si=c}).apply(typeof js<"u"?js:typeof self<"u"?self:typeof window<"u"?window:{});var Cn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bo,ze,jo,kn,Hr,$o,qo,zo;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cn=="object"&&Cn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var u=0;u<i.length-1;u++){var T=i[u];if(!(T in l))break t;l=l[T]}i=i[i.length-1],u=l[i],a=a(u),a!=u&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(a){var l=[],u;for(u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.push([u,a[u]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function h(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function f(i,a,l){return i.call.apply(i.bind,arguments)}function p(i,a,l){return p=f,p.apply(null,arguments)}function I(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var u=l.slice();return u.push.apply(u,arguments),i.apply(this,u)}}function w(i,a){function l(){}l.prototype=a.prototype,i.Z=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(u,T,A){for(var P=Array(arguments.length-2),k=2;k<arguments.length;k++)P[k-2]=arguments[k];return a.prototype[T].apply(u,P)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function V(i){const a=i.length;if(a>0){const l=Array(a);for(let u=0;u<a;u++)l[u]=i[u];return l}return[]}function N(i,a){for(let u=1;u<arguments.length;u++){const T=arguments[u];var l=typeof T;if(l=l!="object"?l:T?Array.isArray(T)?"array":l:"null",l=="array"||l=="object"&&typeof T.length=="number"){l=i.length||0;const A=T.length||0;i.length=l+A;for(let P=0;P<A;P++)i[l+P]=T[P]}else i.push(T)}}class L{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return this.h>0?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function x(i){c.setTimeout(()=>{throw i},0)}function X(){var i=y;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Q{constructor(){this.h=this.g=null}add(a,l){const u=at.get();u.set(a,l),this.h?this.h.next=u:this.g=u,this.h=u}}var at=new L(()=>new Rt,i=>i.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let mt,Et=!1,y=new Q,d=()=>{const i=Promise.resolve(void 0);mt=()=>{i.then(g)}};function g(){for(var i;i=X();){try{i.h.call(i.g)}catch(l){x(l)}var a=at;a.j(i),a.h<100&&(a.h++,i.next=a.g,a.g=i)}Et=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var v=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function m(i){return/^[\s\xa0]*$/.test(i)}function gt(i,a){_.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,a)}w(gt,_),gt.prototype.init=function(i,a){const l=this.type=i.type,u=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget,a||(l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement)),this.relatedTarget=a,u?(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&gt.Z.h.call(this)},gt.prototype.h=function(){gt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wt="closure_listenable_"+(Math.random()*1e6|0),Qa=0;function Xa(i,a,l,u,T){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!u,this.ha=T,this.key=++Qa,this.da=this.fa=!1}function dn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function pn(i,a,l){for(const u in i)a.call(l,i[u],u,i)}function Ja(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function Vi(i){const a={};for(const l in i)a[l]=i[l];return a}const Di="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ni(i,a){let l,u;for(let T=1;T<arguments.length;T++){u=arguments[T];for(l in u)i[l]=u[l];for(let A=0;A<Di.length;A++)l=Di[A],Object.prototype.hasOwnProperty.call(u,l)&&(i[l]=u[l])}}function mn(i){this.src=i,this.g={},this.h=0}mn.prototype.add=function(i,a,l,u,T){const A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);const P=lr(i,a,u,T);return P>-1?(a=i[P],l||(a.fa=!1)):(a=new Xa(a,this.src,A,!!u,T),a.fa=l,i.push(a)),a};function cr(i,a){const l=a.type;if(l in i.g){var u=i.g[l],T=Array.prototype.indexOf.call(u,a,void 0),A;(A=T>=0)&&Array.prototype.splice.call(u,T,1),A&&(dn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function lr(i,a,l,u){for(let T=0;T<i.length;++T){const A=i[T];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==u)return T}return-1}var ur="closure_lm_"+(Math.random()*1e6|0),hr={};function Oi(i,a,l,u,T){if(Array.isArray(a)){for(let A=0;A<a.length;A++)Oi(i,a[A],l,u,T);return null}return l=xi(l),i&&i[Wt]?i.J(a,l,h(u)?!!u.capture:!!u,T):Ya(i,a,l,!1,u,T)}function Ya(i,a,l,u,T,A){if(!a)throw Error("Invalid event type");const P=h(T)?!!T.capture:!!T;let k=dr(i);if(k||(i[ur]=k=new mn(i)),l=k.add(a,l,u,P,A),l.proxy)return l;if(u=Za(),l.proxy=u,u.src=i,u.listener=l,i.addEventListener)v||(T=P),T===void 0&&(T=!1),i.addEventListener(a.toString(),u,T);else if(i.attachEvent)i.attachEvent(Mi(a.toString()),u);else if(i.addListener&&i.removeListener)i.addListener(u);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Za(){function i(l){return a.call(i.src,i.listener,l)}const a=tc;return i}function ki(i,a,l,u,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)ki(i,a[A],l,u,T);else u=h(u)?!!u.capture:!!u,l=xi(l),i&&i[Wt]?(i=i.i,A=String(a).toString(),A in i.g&&(a=i.g[A],l=lr(a,l,u,T),l>-1&&(dn(a[l]),Array.prototype.splice.call(a,l,1),a.length==0&&(delete i.g[A],i.h--)))):i&&(i=dr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=lr(a,l,u,T)),(l=i>-1?a[i]:null)&&fr(l))}function fr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Wt])cr(a.i,i);else{var l=i.type,u=i.proxy;a.removeEventListener?a.removeEventListener(l,u,i.capture):a.detachEvent?a.detachEvent(Mi(l),u):a.addListener&&a.removeListener&&a.removeListener(u),(l=dr(a))?(cr(l,i),l.h==0&&(l.src=null,a[ur]=null)):dn(i)}}}function Mi(i){return i in hr?hr[i]:hr[i]="on"+i}function tc(i,a){if(i.da)i=!0;else{a=new gt(a,this);const l=i.listener,u=i.ha||i.src;i.fa&&fr(i),i=l.call(u,a)}return i}function dr(i){return i=i[ur],i instanceof mn?i:null}var pr="__closure_events_fn_"+(Math.random()*1e9>>>0);function xi(i){return typeof i=="function"?i:(i[pr]||(i[pr]=function(a){return i.handleEvent(a)}),i[pr])}function ct(){E.call(this),this.i=new mn(this),this.M=this,this.G=null}w(ct,E),ct.prototype[Wt]=!0,ct.prototype.removeEventListener=function(i,a,l,u){ki(this,i,a,l,u)};function dt(i,a){var l,u=i.G;if(u)for(l=[];u;u=u.G)l.push(u);if(i=i.M,u=a.type||a,typeof a=="string")a=new _(a,i);else if(a instanceof _)a.target=a.target||i;else{var T=a;a=new _(u,i),Ni(a,T)}T=!0;let A,P;if(l)for(P=l.length-1;P>=0;P--)A=a.g=l[P],T=gn(A,u,!0,a)&&T;if(A=a.g=i,T=gn(A,u,!0,a)&&T,T=gn(A,u,!1,a)&&T,l)for(P=0;P<l.length;P++)A=a.g=l[P],T=gn(A,u,!1,a)&&T}ct.prototype.N=function(){if(ct.Z.N.call(this),this.i){var i=this.i;for(const a in i.g){const l=i.g[a];for(let u=0;u<l.length;u++)dn(l[u]);delete i.g[a],i.h--}}this.G=null},ct.prototype.J=function(i,a,l,u){return this.i.add(String(i),a,!1,l,u)},ct.prototype.K=function(i,a,l,u){return this.i.add(String(i),a,!0,l,u)};function gn(i,a,l,u){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();let T=!0;for(let A=0;A<a.length;++A){const P=a[A];if(P&&!P.da&&P.capture==l){const k=P.listener,Z=P.ha||P.src;P.fa&&cr(i.i,P),T=k.call(Z,u)!==!1&&T}}return T&&!u.defaultPrevented}function ec(i,a){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=p(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(a)>2147483647?-1:c.setTimeout(i,a||0)}function Li(i){i.g=ec(()=>{i.g=null,i.i&&(i.i=!1,Li(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class nc extends E{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Li(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(i){E.call(this),this.h=i,this.g={}}w(Se,E);var Fi=[];function Ui(i){pn(i.g,function(a,l){this.g.hasOwnProperty(l)&&fr(a)},i),i.g={}}Se.prototype.N=function(){Se.Z.N.call(this),Ui(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mr=c.JSON.stringify,rc=c.JSON.parse,ic=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Bi(){}function ji(){}var Pe={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function gr(){_.call(this,"d")}w(gr,_);function _r(){_.call(this,"c")}w(_r,_);var Qt={},$i=null;function _n(){return $i=$i||new ct}Qt.Ia="serverreachability";function qi(i){_.call(this,Qt.Ia,i)}w(qi,_);function Ce(i){const a=_n();dt(a,new qi(a))}Qt.STAT_EVENT="statevent";function zi(i,a){_.call(this,Qt.STAT_EVENT,i),this.stat=a}w(zi,_);function pt(i){const a=_n();dt(a,new zi(a,i))}Qt.Ja="timingevent";function Hi(i,a){_.call(this,Qt.Ja,i),this.size=a}w(Hi,_);function be(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Ve(){this.g=!0}Ve.prototype.ua=function(){this.g=!1};function sc(i,a,l,u,T,A){i.info(function(){if(i.g)if(A){var P="",k=A.split("&");for(let j=0;j<k.length;j++){var Z=k[j].split("=");if(Z.length>1){const tt=Z[0];Z=Z[1];const Pt=tt.split("_");P=Pt.length>=2&&Pt[1]=="type"?P+(tt+"="+Z+"&"):P+(tt+"=redacted&")}}}else P=null;else P=A;return"XMLHTTP REQ ("+u+") [attempt "+T+"]: "+a+`
`+l+`
`+P})}function oc(i,a,l,u,T,A,P){i.info(function(){return"XMLHTTP RESP ("+u+") [ attempt "+T+"]: "+a+`
`+l+`
`+A+" "+P})}function ue(i,a,l,u){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+cc(i,l)+(u?" "+u:"")})}function ac(i,a){i.info(function(){return"TIMEOUT: "+a})}Ve.prototype.info=function(){};function cc(i,a){if(!i.g)return a;if(!a)return null;try{const A=JSON.parse(a);if(A){for(i=0;i<A.length;i++)if(Array.isArray(A[i])){var l=A[i];if(!(l.length<2)){var u=l[1];if(Array.isArray(u)&&!(u.length<1)){var T=u[0];if(T!="noop"&&T!="stop"&&T!="close")for(let P=1;P<u.length;P++)u[P]=""}}}}return mr(A)}catch{return a}}var yn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ki;function yr(){}w(yr,Bi),yr.prototype.g=function(){return new XMLHttpRequest},Ki=new yr;function De(i){return encodeURIComponent(String(i))}function lc(i){var a=1;i=i.split(":");const l=[];for(;a>0&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function Mt(i,a,l,u){this.j=i,this.i=a,this.l=l,this.S=u||1,this.V=new Se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Wi}function Wi(){this.i=null,this.g="",this.h=!1}var Qi={},Er={};function Tr(i,a,l){i.M=1,i.A=Tn(St(a)),i.u=l,i.R=!0,Xi(i,null)}function Xi(i,a){i.F=Date.now(),En(i),i.B=St(i.A);var l=i.B,u=i.S;Array.isArray(u)||(u=[String(u)]),ls(l.i,"t",u),i.C=0,l=i.j.L,i.h=new Wi,i.g=Ps(i.j,l?a:null,!i.u),i.P>0&&(i.O=new nc(p(i.Y,i,i.g),i.P)),a=i.V,l=i.g,u=i.ba;var T="readystatechange";Array.isArray(T)||(T&&(Fi[0]=T.toString()),T=Fi);for(let A=0;A<T.length;A++){const P=Oi(l,T[A],u||a.handleEvent,!1,a.h||a);if(!P)break;a.g[P.key]=P}a=i.J?Vi(i.J):{},i.u?(i.v||(i.v="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,a)):(i.v="GET",i.g.ea(i.B,i.v,null,a)),Ce(),sc(i.i,i.v,i.B,i.l,i.S,i.u)}Mt.prototype.ba=function(i){i=i.target;const a=this.O;a&&Ft(i)==3?a.j():this.Y(i)},Mt.prototype.Y=function(i){try{if(i==this.g)t:{const k=Ft(this.g),Z=this.g.ya(),j=this.g.ca();if(!(k<3)&&(k!=3||this.g&&(this.h.h||this.g.la()||gs(this.g)))){this.K||k!=4||Z==7||(Z==8||j<=0?Ce(3):Ce(2)),vr(this);var a=this.g.ca();this.X=a;var l=uc(this);if(this.o=a==200,oc(this.i,this.v,this.B,this.l,this.S,k,a),this.o){if(this.U&&!this.L){e:{if(this.g){var u,T=this.g;if((u=T.g?T.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var A=u;break e}}A=null}if(i=A)ue(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ir(this,i);else{this.o=!1,this.m=3,pt(12),Xt(this),Ne(this);break t}}if(this.R){i=!0;let tt;for(;!this.K&&this.C<l.length;)if(tt=hc(this,l),tt==Er){k==4&&(this.m=4,pt(14),i=!1),ue(this.i,this.l,null,"[Incomplete Response]");break}else if(tt==Qi){this.m=4,pt(15),ue(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else ue(this.i,this.l,tt,null),Ir(this,tt);if(Ji(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),k!=4||l.length!=0||this.h.h||(this.m=1,pt(16),i=!1),this.o=this.o&&i,!i)ue(this.i,this.l,l,"[Invalid Chunked Response]"),Xt(this),Ne(this);else if(l.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Vr(P),P.P=!0,pt(11))}}else ue(this.i,this.l,l,null),Ir(this,l);k==4&&Xt(this),this.o&&!this.K&&(k==4?As(this.j,this):(this.o=!1,En(this)))}else Rc(this.g),a==400&&l.indexOf("Unknown SID")>0?(this.m=3,pt(12)):(this.m=0,pt(13)),Xt(this),Ne(this)}}}catch{}finally{}};function uc(i){if(!Ji(i))return i.g.la();const a=gs(i.g);if(a==="")return"";let l="";const u=a.length,T=Ft(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Xt(i),Ne(i),"";i.h.i=new c.TextDecoder}for(let A=0;A<u;A++)i.h.h=!0,l+=i.h.i.decode(a[A],{stream:!(T&&A==u-1)});return a.length=0,i.h.g+=l,i.C=0,i.h.g}function Ji(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function hc(i,a){var l=i.C,u=a.indexOf(`
`,l);return u==-1?Er:(l=Number(a.substring(l,u)),isNaN(l)?Qi:(u+=1,u+l>a.length?Er:(a=a.slice(u,u+l),i.C=u+l,a)))}Mt.prototype.cancel=function(){this.K=!0,Xt(this)};function En(i){i.T=Date.now()+i.H,Yi(i,i.H)}function Yi(i,a){if(i.D!=null)throw Error("WatchDog timer not null");i.D=be(p(i.aa,i),a)}function vr(i){i.D&&(c.clearTimeout(i.D),i.D=null)}Mt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(ac(this.i,this.B),this.M!=2&&(Ce(),pt(17)),Xt(this),this.m=2,Ne(this)):Yi(this,this.T-i)};function Ne(i){i.j.I==0||i.K||As(i.j,i)}function Xt(i){vr(i);var a=i.O;a&&typeof a.dispose=="function"&&a.dispose(),i.O=null,Ui(i.V),i.g&&(a=i.g,i.g=null,a.abort(),a.dispose())}function Ir(i,a){try{var l=i.j;if(l.I!=0&&(l.g==i||Ar(l.h,i))){if(!i.L&&Ar(l.h,i)&&l.I==3){try{var u=l.Ba.g.parse(a)}catch{u=null}if(Array.isArray(u)&&u.length==3){var T=u;if(T[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)Rn(l),An(l);else break t;br(l),pt(18)}}else l.xa=T[1],0<l.xa-l.K&&T[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=be(p(l.Va,l),6e3));es(l.h)<=1&&l.ta&&(l.ta=void 0)}else Yt(l,11)}else if((i.L||l.g==i)&&Rn(l),!m(a))for(T=l.Ba.g.parse(a),a=0;a<T.length;a++){let j=T[a];const tt=j[0];if(!(tt<=l.K))if(l.K=tt,j=j[1],l.I==2)if(j[0]=="c"){l.M=j[1],l.ba=j[2];const Pt=j[3];Pt!=null&&(l.ka=Pt,l.j.info("VER="+l.ka));const Zt=j[4];Zt!=null&&(l.za=Zt,l.j.info("SVER="+l.za));const Ut=j[5];Ut!=null&&typeof Ut=="number"&&Ut>0&&(u=1.5*Ut,l.O=u,l.j.info("backChannelRequestTimeoutMs_="+u)),u=l;const Bt=i.g;if(Bt){const Pn=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pn){var A=u.h;A.g||Pn.indexOf("spdy")==-1&&Pn.indexOf("quic")==-1&&Pn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(wr(A,A.h),A.h=null))}if(u.G){const Dr=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dr&&(u.wa=Dr,q(u.J,u.G,Dr))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),u=l;var P=i;if(u.na=Ss(u,u.L?u.ba:null,u.W),P.L){ns(u.h,P);var k=P,Z=u.O;Z&&(k.H=Z),k.D&&(vr(k),En(k)),u.g=P}else vs(u);l.i.length>0&&wn(l)}else j[0]!="stop"&&j[0]!="close"||Yt(l,7);else l.I==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Yt(l,7):Cr(l):j[0]!="noop"&&l.l&&l.l.qa(j),l.A=0)}}Ce(4)}catch{}}var fc=class{constructor(i,a){this.g=i,this.map=a}};function Zi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ts(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function es(i){return i.h?1:i.g?i.g.size:0}function Ar(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function wr(i,a){i.g?i.g.add(a):i.h=a}function ns(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Zi.prototype.cancel=function(){if(this.i=rs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function rs(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.G);return a}return V(i.i)}var is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dc(i,a){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const u=i[l].indexOf("=");let T,A=null;u>=0?(T=i[l].substring(0,u),A=i[l].substring(u+1)):T=i[l],a(T,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function xt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let a;i instanceof xt?(this.l=i.l,Oe(this,i.j),this.o=i.o,this.g=i.g,ke(this,i.u),this.h=i.h,Rr(this,us(i.i)),this.m=i.m):i&&(a=String(i).match(is))?(this.l=!1,Oe(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),ke(this,a[4]),this.h=Me(a[5]||"",!0),Rr(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.l=!1,this.i=new Le(null,this.l))}xt.prototype.toString=function(){const i=[];var a=this.j;a&&i.push(xe(a,ss,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(xe(a,ss,!0),"@"),i.push(De(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(xe(l,l.charAt(0)=="/"?gc:mc,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",xe(l,yc)),i.join("")},xt.prototype.resolve=function(i){const a=St(this);let l=!!i.j;l?Oe(a,i.j):l=!!i.o,l?a.o=i.o:l=!!i.g,l?a.g=i.g:l=i.u!=null;var u=i.h;if(l)ke(a,i.u);else if(l=!!i.h){if(u.charAt(0)!="/")if(this.g&&!this.h)u="/"+u;else{var T=a.h.lastIndexOf("/");T!=-1&&(u=a.h.slice(0,T+1)+u)}if(T=u,T==".."||T==".")u="";else if(T.indexOf("./")!=-1||T.indexOf("/.")!=-1){u=T.lastIndexOf("/",0)==0,T=T.split("/");const A=[];for(let P=0;P<T.length;){const k=T[P++];k=="."?u&&P==T.length&&A.push(""):k==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),u&&P==T.length&&A.push("")):(A.push(k),u=!0)}u=A.join("/")}else u=T}return l?a.h=u:l=i.i.toString()!=="",l?Rr(a,us(i.i)):l=!!i.m,l&&(a.m=i.m),a};function St(i){return new xt(i)}function Oe(i,a,l){i.j=l?Me(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function ke(i,a){if(a){if(a=Number(a),isNaN(a)||a<0)throw Error("Bad port number "+a);i.u=a}else i.u=null}function Rr(i,a,l){a instanceof Le?(i.i=a,Ec(i.i,i.l)):(l||(a=xe(a,_c)),i.i=new Le(a,i.l))}function q(i,a,l){i.i.set(a,l)}function Tn(i){return q(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Me(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function xe(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,pc),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function pc(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ss=/[#\/\?@]/g,mc=/[#\?:]/g,gc=/[#\?]/g,_c=/[#\?@]/g,yc=/#/g;function Le(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Jt(i){i.g||(i.g=new Map,i.h=0,i.i&&dc(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Le.prototype,n.add=function(i,a){Jt(this),this.i=null,i=he(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function os(i,a){Jt(i),a=he(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function as(i,a){return Jt(i),a=he(i,a),i.g.has(a)}n.forEach=function(i,a){Jt(this),this.g.forEach(function(l,u){l.forEach(function(T){i.call(a,T,u,this)},this)},this)};function cs(i,a){Jt(i);let l=[];if(typeof a=="string")as(i,a)&&(l=l.concat(i.g.get(he(i,a))));else for(i=Array.from(i.g.values()),a=0;a<i.length;a++)l=l.concat(i[a]);return l}n.set=function(i,a){return Jt(this),this.i=null,i=he(this,i),as(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=cs(this,i),i.length>0?String(i[0]):a):a};function ls(i,a,l){os(i,a),l.length>0&&(i.i=null,i.g.set(he(i,a),V(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(let u=0;u<a.length;u++){var l=a[u];const T=De(l);l=cs(this,l);for(let A=0;A<l.length;A++){let P=T;l[A]!==""&&(P+="="+De(l[A])),i.push(P)}}return this.i=i.join("&")};function us(i){const a=new Le;return a.i=i.i,i.g&&(a.g=new Map(i.g),a.h=i.h),a}function he(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Ec(i,a){a&&!i.j&&(Jt(i),i.i=null,i.g.forEach(function(l,u){const T=u.toLowerCase();u!=T&&(os(this,u),ls(this,T,l))},i)),i.j=a}function Tc(i,a){const l=new Ve;if(c.Image){const u=new Image;u.onload=I(Lt,l,"TestLoadImage: loaded",!0,a,u),u.onerror=I(Lt,l,"TestLoadImage: error",!1,a,u),u.onabort=I(Lt,l,"TestLoadImage: abort",!1,a,u),u.ontimeout=I(Lt,l,"TestLoadImage: timeout",!1,a,u),c.setTimeout(function(){u.ontimeout&&u.ontimeout()},1e4),u.src=i}else a(!1)}function vc(i,a){const l=new Ve,u=new AbortController,T=setTimeout(()=>{u.abort(),Lt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:u.signal}).then(A=>{clearTimeout(T),A.ok?Lt(l,"TestPingServer: ok",!0,a):Lt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Lt(l,"TestPingServer: error",!1,a)})}function Lt(i,a,l,u,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),u(l)}catch{}}function Ic(){this.g=new ic}function Sr(i){this.i=i.Sb||null,this.h=i.ab||!1}w(Sr,Bi),Sr.prototype.g=function(){return new vn(this.i,this.h)};function vn(i,a){ct.call(this),this.H=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(vn,ct),n=vn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=a,this.readyState=1,Ue(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const a={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(a.body=i),(this.H||c).fetch(new Request(this.D,a)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fe(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ue(this)),this.g&&(this.readyState=3,Ue(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hs(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function hs(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.B.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?Fe(this):Ue(this),this.readyState==3&&hs(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,Fe(this))},n.Na=function(i){this.g&&(this.response=i,Fe(this))},n.ga=function(){this.g&&Fe(this)};function Fe(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Ue(i)}n.setRequestHeader=function(i,a){this.A.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function Ue(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(vn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function fs(i){let a="";return pn(i,function(l,u){a+=u,a+=":",a+=l,a+=`\r
`}),a}function Pr(i,a,l){t:{for(u in l){var u=!1;break t}u=!0}u||(l=fs(l),typeof i=="string"?l!=null&&De(l):q(i,a,l))}function K(i){ct.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(K,ct);var Ac=/^https?$/i,wc=["POST","PUT"];n=K.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,a,l,u){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ki.g(),this.g.onreadystatechange=C(p(this.Ca,this));try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){ds(this,A);return}if(i=l||"",l=new Map(this.headers),u)if(Object.getPrototypeOf(u)===Object.prototype)for(var T in u)l.set(T,u[T]);else if(typeof u.keys=="function"&&typeof u.get=="function")for(const A of u.keys())l.set(A,u.get(A));else throw Error("Unknown input type for opt_headers: "+String(u));u=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(Array.prototype.indexOf.call(wc,a,void 0)>=0)||u||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,P]of l)this.g.setRequestHeader(A,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(A){ds(this,A)}};function ds(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.o=5,ps(i),In(i)}function ps(i){i.A||(i.A=!0,dt(i,"complete"),dt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,dt(this,"complete"),dt(this,"abort"),In(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),K.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ms(this):this.Xa())},n.Xa=function(){ms(this)};function ms(i){if(i.h&&typeof o<"u"){if(i.v&&Ft(i)==4)setTimeout(i.Ca.bind(i),0);else if(dt(i,"readystatechange"),Ft(i)==4){i.h=!1;try{const A=i.ca();t:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var u;if(u=A===0){let P=String(i.D).match(is)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),u=!Ac.test(P?P.toLowerCase():"")}l=u}if(l)dt(i,"complete"),dt(i,"success");else{i.o=6;try{var T=Ft(i)>2?i.g.statusText:""}catch{T=""}i.l=T+" ["+i.ca()+"]",ps(i)}}finally{In(i)}}}}function In(i,a){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,a||dt(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ft(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Ft(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),rc(a)}};function gs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Rc(i){const a={};i=(i.g&&Ft(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let u=0;u<i.length;u++){if(m(i[u]))continue;var l=lc(i[u]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[T]||[];a[T]=A,A.push(l)}Ja(a,function(u){return u.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Be(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function _s(i){this.za=0,this.i=[],this.j=new Ve,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Be("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Be("baseRetryDelayMs",5e3,i),this.Za=Be("retryDelaySeedMs",1e4,i),this.Ta=Be("forwardChannelMaxRetries",2,i),this.va=Be("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Zi(i&&i.concurrentRequestLimit),this.Ba=new Ic,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_s.prototype,n.ka=8,n.I=1,n.connect=function(i,a,l,u){pt(0),this.W=i,this.H=a||{},l&&u!==void 0&&(this.H.OSID=l,this.H.OAID=u),this.F=this.X,this.J=Ss(this,null,this.W),wn(this)};function Cr(i){if(ys(i),i.I==3){var a=i.V++,l=St(i.J);if(q(l,"SID",i.M),q(l,"RID",a),q(l,"TYPE","terminate"),je(i,l),a=new Mt(i,i.j,a),a.M=2,a.A=Tn(St(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.A.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.A,l=!0),l||(a.g=Ps(a.j,null),a.g.ea(a.A)),a.F=Date.now(),En(a)}Rs(i)}function An(i){i.g&&(Vr(i),i.g.cancel(),i.g=null)}function ys(i){An(i),i.v&&(c.clearTimeout(i.v),i.v=null),Rn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&c.clearTimeout(i.m),i.m=null)}function wn(i){if(!ts(i.h)&&!i.m){i.m=!0;var a=i.Ea;mt||d(),Et||(mt(),Et=!0),y.add(a,i),i.D=0}}function Sc(i,a){return es(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=a.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=be(p(i.Ea,i,a),ws(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const T=new Mt(this,this.j,i);let A=this.o;if(this.U&&(A?(A=Vi(A),Ni(A,this.U)):A=this.U),this.u!==null||this.R||(T.J=A,A=null),this.S)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var u=this.i[l];if("__data__"in u.map&&(u=u.map.__data__,typeof u=="string")){u=u.length;break e}u=void 0}if(u===void 0)break;if(a+=u,a>4096){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=Ts(this,T,a),l=St(this.J),q(l,"RID",i),q(l,"CVER",22),this.G&&q(l,"X-HTTP-Session-Id",this.G),je(this,l),A&&(this.R?a="headers="+De(fs(A))+"&"+a:this.u&&Pr(l,this.u,A)),wr(this.h,T),this.Ra&&q(l,"TYPE","init"),this.S?(q(l,"$req",a),q(l,"SID","null"),T.U=!0,Tr(T,l,null)):Tr(T,l,a),this.I=2}}else this.I==3&&(i?Es(this,i):this.i.length==0||ts(this.h)||Es(this))};function Es(i,a){var l;a?l=a.l:l=i.V++;const u=St(i.J);q(u,"SID",i.M),q(u,"RID",l),q(u,"AID",i.K),je(i,u),i.u&&i.o&&Pr(u,i.u,i.o),l=new Mt(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),a&&(i.i=a.G.concat(i.i)),a=Ts(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),wr(i.h,l),Tr(l,u,a)}function je(i,a){i.H&&pn(i.H,function(l,u){q(a,u,l)}),i.l&&pn({},function(l,u){q(a,u,l)})}function Ts(i,a,l){l=Math.min(i.i.length,l);const u=i.l?p(i.l.Ka,i.l,i):null;t:{var T=i.i;let k=-1;for(;;){const Z=["count="+l];k==-1?l>0?(k=T[0].g,Z.push("ofs="+k)):k=0:Z.push("ofs="+k);let j=!0;for(let tt=0;tt<l;tt++){var A=T[tt].g;const Pt=T[tt].map;if(A-=k,A<0)k=Math.max(0,T[tt].g-100),j=!1;else try{A="req"+A+"_"||"";try{var P=Pt instanceof Map?Pt:Object.entries(Pt);for(const[Zt,Ut]of P){let Bt=Ut;h(Ut)&&(Bt=mr(Ut)),Z.push(A+Zt+"="+encodeURIComponent(Bt))}}catch(Zt){throw Z.push(A+"type="+encodeURIComponent("_badmap")),Zt}}catch{u&&u(Pt)}}if(j){P=Z.join("&");break t}}P=void 0}return i=i.i.splice(0,l),a.G=i,P}function vs(i){if(!i.g&&!i.v){i.Y=1;var a=i.Da;mt||d(),Et||(mt(),Et=!0),y.add(a,i),i.A=0}}function br(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=be(p(i.Da,i),ws(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Is(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=be(p(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,pt(10),An(this),Is(this))};function Vr(i){i.B!=null&&(c.clearTimeout(i.B),i.B=null)}function Is(i){i.g=new Mt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var a=St(i.na);q(a,"RID","rpc"),q(a,"SID",i.M),q(a,"AID",i.K),q(a,"CI",i.F?"0":"1"),!i.F&&i.ia&&q(a,"TO",i.ia),q(a,"TYPE","xmlhttp"),je(i,a),i.u&&i.o&&Pr(a,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=Tn(St(a)),l.u=null,l.R=!0,Xi(l,i)}n.Va=function(){this.C!=null&&(this.C=null,An(this),br(this),pt(19))};function Rn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function As(i,a){var l=null;if(i.g==a){Rn(i),Vr(i),i.g=null;var u=2}else if(Ar(i.h,a))l=a.G,ns(i.h,a),u=1;else return;if(i.I!=0){if(a.o)if(u==1){l=a.u?a.u.length:0,a=Date.now()-a.F;var T=i.D;u=_n(),dt(u,new Hi(u,l)),wn(i)}else vs(i);else if(T=a.m,T==3||T==0&&a.X>0||!(u==1&&Sc(i,a)||u==2&&br(i)))switch(l&&l.length>0&&(a=i.h,a.i=a.i.concat(l)),T){case 1:Yt(i,5);break;case 4:Yt(i,10);break;case 3:Yt(i,6);break;default:Yt(i,2)}}}function ws(i,a){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*a}function Yt(i,a){if(i.j.info("Error code "+a),a==2){var l=p(i.bb,i),u=i.Ua;const T=!u;u=new xt(u||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oe(u,"https"),Tn(u),T?Tc(u.toString(),l):vc(u.toString(),l)}else pt(2);i.I=0,i.l&&i.l.pa(a),Rs(i),ys(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function Rs(i){if(i.I=0,i.ja=[],i.l){const a=rs(i.h);(a.length!=0||i.i.length!=0)&&(N(i.ja,a),N(i.ja,i.i),i.h.i.length=0,V(i.i),i.i.length=0),i.l.oa()}}function Ss(i,a,l){var u=l instanceof xt?St(l):new xt(l);if(u.g!="")a&&(u.g=a+"."+u.g),ke(u,u.u);else{var T=c.location;u=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;const A=new xt(null);u&&Oe(A,u),a&&(A.g=a),T&&ke(A,T),l&&(A.h=l),u=A}return l=i.G,a=i.wa,l&&a&&q(u,l,a),q(u,"VER",i.ka),je(i,u),u}function Ps(i,a,l){if(a&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Aa&&!i.ma?new K(new Sr({ab:l})):new K(i.ma),a.Fa(i.L),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cs(){}n=Cs.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Sn(){}Sn.prototype.g=function(i,a){return new Tt(i,a)};function Tt(i,a){ct.call(this),this.g=new _s(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.sa&&(i?i["X-WebChannel-Client-Profile"]=a.sa:i={"X-WebChannel-Client-Profile":a.sa}),this.g.U=i,(i=a&&a.Qb)&&!m(i)&&(this.g.u=i),this.A=a&&a.supportsCrossDomainXhr||!1,this.v=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!m(a)&&(this.g.G=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new fe(this)}w(Tt,ct),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Cr(this.g)},Tt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=mr(i),i=l);a.i.push(new fc(a.Ya++,i)),a.I==3&&wn(a)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Cr(this.g),delete this.g,Tt.Z.N.call(this)};function bs(i){gr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}w(bs,gr);function Vs(){_r.call(this),this.status=1}w(Vs,_r);function fe(i){this.g=i}w(fe,Cs),fe.prototype.ra=function(){dt(this.g,"a")},fe.prototype.qa=function(i){dt(this.g,new bs(i))},fe.prototype.pa=function(i){dt(this.g,new Vs)},fe.prototype.oa=function(){dt(this.g,"b")},Sn.prototype.createWebChannel=Sn.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,zo=function(){return new Sn},qo=function(){return _n()},$o=Qt,Hr={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},yn.NO_ERROR=0,yn.TIMEOUT=8,yn.HTTP_ERROR=6,kn=yn,Gi.COMPLETE="complete",jo=Gi,ji.EventType=Pe,Pe.OPEN="a",Pe.CLOSE="b",Pe.ERROR="c",Pe.MESSAGE="d",ct.prototype.listen=ct.prototype.J,ze=ji,K.prototype.listenOnce=K.prototype.K,K.prototype.getLastError=K.prototype.Ha,K.prototype.getLastErrorCode=K.prototype.ya,K.prototype.getStatus=K.prototype.ca,K.prototype.getResponseJson=K.prototype.La,K.prototype.getResponseText=K.prototype.la,K.prototype.send=K.prototype.ea,K.prototype.setWithCredentials=K.prototype.Fa,Bo=K}).apply(typeof Cn<"u"?Cn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we="12.11.0";function cu(n){we=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Mo("@firebase/firestore");function de(){return ie.logLevel}function b(n,...t){if(ie.logLevel<=U.DEBUG){const e=t.map(oi);ie.debug(`Firestore (${we}): ${n}`,...e)}}function se(n,...t){if(ie.logLevel<=U.ERROR){const e=t.map(oi);ie.error(`Firestore (${we}): ${n}`,...e)}}function tn(n,...t){if(ie.logLevel<=U.WARN){const e=t.map(oi);ie.warn(`Firestore (${we}): ${n}`,...e)}}function oi(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Ho(n,r,e)}function Ho(n,t,e){let r=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw se(r),new Error(r)}function W(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Ho(t,s,r)}function $(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class lu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ut.UNAUTHENTICATED))}shutdown(){}}class uu{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class hu{constructor(t){this.t=t,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0,42304);let r=this.i;const s=f=>this.i!==r?(r=this.i,e(f)):Promise.resolve();let o=new ne;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new ne,t.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const f=o;t.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new ne)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new Go(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string",2055,{h:t}),new ut(t)}}class fu{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class du{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new fu(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $s{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pu{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){W(this.o===void 0,3512);const r=o=>{o.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.m;return this.m=o.token,b("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new $s(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(W(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new $s(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mu(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Gr(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return xr(s)===xr(o)?B(s,o):xr(s)?1:-1}return B(n.length,t.length)}const gu=55296,_u=57343;function xr(n){const t=n.charCodeAt(0);return t>=gu&&t<=_u}function ye(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="__name__";class Ct{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ct.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=Ct.isNumericId(t),s=Ct.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):Gr(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return si.fromString(t.substring(4,t.length-2))}}class G extends Ct{construct(t,e,r){return new G(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new G(e)}static emptyPath(){return new G([])}}const yu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ct{construct(t,e,r){return new st(t,e,r)}static isValidIdentifier(t){return yu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qs}static keyField(){return new st([qs])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;s<t.length;){const h=t[s];if(h==="\\"){if(s+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=f,s+=2}else h==="`"?(c=!c,s++):h!=="."||c?(r+=h,s++):(o(),s++)}if(o(),c)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(G.fromString(t))}static fromName(t){return new O(G.fromString(t).popFirst(5))}static empty(){return new O(G.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&G.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return G.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new G(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Eu(n,t,e,r){if(t===!0&&r===!0)throw new D(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function zs(n){if(!O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hs(n){if(O.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Wo(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ci(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function Qo(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=ci(n);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(n,t){const e={typeString:n};return t&&(e.value=t),e}function an(n,t){if(!Wo(n))throw new D(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const c=n[r];if(s&&typeof c!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&c!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new D(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=-62135596800,Ks=1e6;class H{static now(){return H.fromMillis(Date.now())}static fromDate(t){return H.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ks);return new H(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Gs)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ks}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:H._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(an(t,H._jsonSchema))return new H(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Gs;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}H._jsonSchemaVersion="firestore/timestamp/1.0",H._jsonSchema={type:Y("string",H._jsonSchemaVersion),seconds:Y("number"),nanoseconds:Y("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(t){return new z(t)}static min(){return new z(new H(0,0))}static max(){return new z(new H(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=-1;function Tu(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new H(e+1,0):new H(e,r));return new zt(s,O.empty(),t)}function vu(n){return new zt(n.readTime,n.key,en)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(z.min(),O.empty(),en)}static max(){return new zt(z.max(),O.empty(),en)}}function Iu(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wu{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Au)throw n;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let s=0,o=0,c=!1;t.forEach(h=>{++s,h.next(()=>{++o,c&&o===s&&e()},f=>r(f))}),c=!0,o===s&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(s=>s?R.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,s)=>{const o=t.length,c=new Array(o);let h=0;for(let f=0;f<o;f++){const p=f;e(t[p]).next(I=>{c[p]=I,++h,h===o&&r(c)},I=>s(I))}})}static doWhile(t,e){return new R((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Ru(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function cn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}ui.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=-1;function fi(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function Su(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="";function Pu(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ws(t)),t=Cu(n.get(e),t);return Ws(t)}function Cu(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Xo:e+="";break;default:e+=o}}return e}function Ws(n){return n+Xo+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Jo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){this.comparator=t,this.root=e||rt.EMPTY}insert(t,e){return new yt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(t){return new yt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,rt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new bn(this.root,t,this.comparator,!0)}}class bn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class rt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=o??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new rt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new rt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new yt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xs(this.data.getIterator())}getIteratorFrom(t){return new Xs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Xs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new wt([])}unionWith(t){let e=new ot(st.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ye(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new bu("Invalid base64 string: "+o):o}}(t);return new Vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let c=0;c<s.length;++c)o+=String.fromCharCode(s[c]);return o}(t);return new Vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const Vu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oe(n){if(W(!!n,39018),typeof n=="string"){let t=0;const e=Vu.exec(n);if(W(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:it(n.seconds),nanos:it(n.nanos)}}function it(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ee(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="server_timestamp",Zo="__type__",ta="__previous_value__",ea="__local_write_time__";function di(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Zo])==null?void 0:r.stringValue)===Yo}function pi(n){const t=n.mapValue.fields[ta];return di(t)?pi(t):t}function zn(n){const t=oe(n.mapValue.fields[ea].timestampValue);return new H(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(t,e,r,s,o,c,h,f,p,I,w){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=p,this.isUsingEmulator=I,this.apiKey=w}}const Hn="(default)";class Gn{constructor(t,e){this.projectId=t,this.database=e||Hn}static empty(){return new Gn("","")}get isDefaultDatabase(){return this.database===Hn}isEqual(t){return t instanceof Gn&&t.projectId===this.projectId&&t.database===this.database}}function Nu(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gn(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="__type__",ra="__max__",Vn={mapValue:{fields:{__type__:{stringValue:ra}}}},ia="__vector__",Kr="value";function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?di(n)?4:ku(n)?9007199254740991:Ou(n)?10:11:M(28295,{value:n})}function Dt(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return zn(n).isEqual(zn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const c=oe(s.timestampValue),h=oe(o.timestampValue);return c.seconds===h.seconds&&c.nanos===h.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Ee(s.bytesValue).isEqual(Ee(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return it(s.geoPointValue.latitude)===it(o.geoPointValue.latitude)&&it(s.geoPointValue.longitude)===it(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return it(s.integerValue)===it(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const c=it(s.doubleValue),h=it(o.doubleValue);return c===h?qn(c)===qn(h):isNaN(c)&&isNaN(h)}return!1}(n,t);case 9:return ye(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(s,o){const c=s.mapValue.fields||{},h=o.mapValue.fields||{};if(Qs(c)!==Qs(h))return!1;for(const f in c)if(c.hasOwnProperty(f)&&(h[f]===void 0||!Dt(c[f],h[f])))return!1;return!0}(n,t);default:return M(52216,{left:n})}}function nn(n,t){return(n.values||[]).find(e=>Dt(e,t))!==void 0}function Te(n,t){if(n===t)return 0;const e=ae(n),r=ae(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return function(o,c){const h=it(o.integerValue||o.doubleValue),f=it(c.integerValue||c.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(n,t);case 3:return Js(n.timestampValue,t.timestampValue);case 4:return Js(zn(n),zn(t));case 5:return Gr(n.stringValue,t.stringValue);case 6:return function(o,c){const h=Ee(o),f=Ee(c);return h.compareTo(f)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const h=o.split("/"),f=c.split("/");for(let p=0;p<h.length&&p<f.length;p++){const I=B(h[p],f[p]);if(I!==0)return I}return B(h.length,f.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const h=B(it(o.latitude),it(c.latitude));return h!==0?h:B(it(o.longitude),it(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ys(n.arrayValue,t.arrayValue);case 10:return function(o,c){var C,V,N,L;const h=o.fields||{},f=c.fields||{},p=(C=h[Kr])==null?void 0:C.arrayValue,I=(V=f[Kr])==null?void 0:V.arrayValue,w=B(((N=p==null?void 0:p.values)==null?void 0:N.length)||0,((L=I==null?void 0:I.values)==null?void 0:L.length)||0);return w!==0?w:Ys(p,I)}(n.mapValue,t.mapValue);case 11:return function(o,c){if(o===Vn.mapValue&&c===Vn.mapValue)return 0;if(o===Vn.mapValue)return 1;if(c===Vn.mapValue)return-1;const h=o.fields||{},f=Object.keys(h),p=c.fields||{},I=Object.keys(p);f.sort(),I.sort();for(let w=0;w<f.length&&w<I.length;++w){const C=Gr(f[w],I[w]);if(C!==0)return C;const V=Te(h[f[w]],p[I[w]]);if(V!==0)return V}return B(f.length,I.length)}(n.mapValue,t.mapValue);default:throw M(23264,{he:e})}}function Js(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=oe(n),r=oe(t),s=B(e.seconds,r.seconds);return s!==0?s:B(e.nanos,r.nanos)}function Ys(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Te(e[s],r[s]);if(o)return o}return B(e.length,r.length)}function ve(n){return Wr(n)}function Wr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=oe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Ee(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Wr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const c of r)o?o=!1:s+=",",s+=`${c}:${Wr(e.fields[c])}`;return s+"}"}(n.mapValue):M(61005,{value:n})}function Mn(n){switch(ae(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=pi(n);return t?16+Mn(t):16;case 5:return 2*n.stringValue.length;case 6:return Ee(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+Mn(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Re(r.fields,(o,c)=>{s+=o.length+Mn(c)}),s}(n.mapValue);default:throw M(13486,{value:n})}}function Qr(n){return!!n&&"integerValue"in n}function mi(n){return!!n&&"arrayValue"in n}function xn(n){return!!n&&"mapValue"in n}function Ou(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[na])==null?void 0:r.stringValue)===ia}function Ge(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Re(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ge(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ge(n.arrayValue.values[e]);return t}return{...n}}function ku(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ge(e)}setAll(t){let e=st.emptyPath(),r={},s=[];t.forEach((c,h)=>{if(!e.isImmediateParentOf(h)){const f=this.getFieldsMap(e);this.applyChanges(f,r,s),r={},s=[],e=h.popLast()}c?r[h.lastSegment()]=Ge(c):s.push(h.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];xn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Re(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(Ge(this.value))}}function sa(n){const t=[];return Re(n.fields,(e,r)=>{const s=new st([e]);if(xn(r)){const o=sa(r.mapValue).fields;if(o.length===0)t.push(s);else for(const c of o)t.push(s.child(c))}else t.push(s)}),new wt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r,s,o,c,h){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=c,this.documentState=h}static newInvalidDocument(t){return new vt(t,0,z.min(),z.min(),z.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new vt(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new vt(t,2,e,z.min(),z.min(),It.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,z.min(),z.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.position=t,this.inclusive=e}}function Zs(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],c=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(c.referenceValue),e.key):r=Te(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function to(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Mu(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{}class nt extends oa{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Lu(t,e,r):e==="array-contains"?new Bu(t,r):e==="in"?new ju(t,r):e==="not-in"?new $u(t,r):e==="array-contains-any"?new qu(t,r):new nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Fu(t,r):new Uu(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Te(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Te(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends oa{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ht(t,e)}matches(t){return aa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function aa(n){return n.op==="and"}function ca(n){return xu(n)&&aa(n)}function xu(n){for(const t of n.filters)if(t instanceof Ht)return!1;return!0}function Xr(n){if(n instanceof nt)return n.field.canonicalString()+n.op.toString()+ve(n.value);if(ca(n))return n.filters.map(t=>Xr(t)).join(",");{const t=n.filters.map(e=>Xr(e)).join(",");return`${n.op}(${t})`}}function la(n,t){return n instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Dt(r.value,s.value)}(n,t):n instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,c,h)=>o&&la(c,s.filters[h]),!0):!1}(n,t):void M(19439)}function ua(n){return n instanceof nt?function(e){return`${e.field.canonicalString()} ${e.op} ${ve(e.value)}`}(n):n instanceof Ht?function(e){return e.op.toString()+" {"+e.getFilters().map(ua).join(" ,")+"}"}(n):"Filter"}class Lu extends nt{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Fu extends nt{constructor(t,e){super(t,"in",e),this.keys=ha("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Uu extends nt{constructor(t,e){super(t,"not-in",e),this.keys=ha("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ha(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class Bu extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return mi(e)&&nn(e.arrayValue,this.value)}}class ju extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&nn(this.value.arrayValue,e)}}class $u extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!nn(this.value.arrayValue,e)}}class qu extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!mi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>nn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,e=null,r=[],s=[],o=null,c=null,h=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=c,this.endAt=h,this.Te=null}}function eo(n,t=null,e=[],r=[],s=null,o=null,c=null){return new zu(n,t,e,r,s,o,c)}function gi(n){const t=$(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),fi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ve(r)).join(",")),t.Te=e}return t.Te}function _i(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Mu(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!la(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!to(n.startAt,t.startAt)&&to(n.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e=null,r=[],s=[],o=null,c="F",h=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=c,this.startAt=h,this.endAt=f,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Hu(n,t,e,r,s,o,c,h){return new tr(n,t,e,r,s,o,c,h)}function Gu(n){return new tr(n)}function no(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ku(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Wu(n){return n.collectionGroup!==null}function Ke(n){const t=$(n);if(t.Ee===null){t.Ee=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ee.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let h=new ot(st.comparator);return c.filters.forEach(f=>{f.getFlattenedFilters().forEach(p=>{p.isInequality()&&(h=h.add(p.field))})}),h})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ee.push(new Wn(o,r))}),e.has(st.keyField().canonicalString())||t.Ee.push(new Wn(st.keyField(),r))}return t.Ee}function re(n){const t=$(n);return t.Ie||(t.Ie=Qu(t,Ke(n))),t.Ie}function Qu(n,t){if(n.limitType==="F")return eo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Wn(s.field,o)});const e=n.endAt?new Kn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Kn(n.startAt.position,n.startAt.inclusive):null;return eo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Jr(n,t,e){return new tr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function fa(n,t){return _i(re(n),re(t))&&n.limitType===t.limitType}function da(n){return`${gi(re(n))}|lt:${n.limitType}`}function $e(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ua(s)).join(", ")}]`),fi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>ve(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>ve(s)).join(",")),`Target(${r})`}(re(n))}; limitType=${n.limitType})`}function yi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Ke(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(c,h,f){const p=Zs(c,h,f);return c.inclusive?p<=0:p<0}(r.startAt,Ke(r),s)||r.endAt&&!function(c,h,f){const p=Zs(c,h,f);return c.inclusive?p>=0:p>0}(r.endAt,Ke(r),s))}(n,t)}function Xu(n){return(t,e)=>{let r=!1;for(const s of Ke(n)){const o=Ju(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ju(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,c,h){const f=c.data.field(o),p=h.data.field(o);return f!==null&&p!==null?Te(f,p):M(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Re(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Jo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new yt(O.comparator);function Qn(){return Yu}const pa=new yt(O.comparator);function Dn(...n){let t=pa;for(const e of n)t=t.insert(e.key,e);return t}function ma(n){let t=pa;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ee(){return We()}function ga(){return We()}function We(){return new ce(n=>n.toString(),(n,t)=>n.isEqual(t))}const Zu=new yt(O.comparator),th=new ot(O.comparator);function ht(...n){let t=th;for(const e of n)t=t.add(e);return t}const eh=new ot(B);function nh(){return eh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(t)?"-0":t}}function _a(n){return{integerValue:""+n}}function rh(n,t){return Su(t)?_a(t):Ei(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this._=void 0}}function ih(n,t,e){return n instanceof rn?function(s,o){const c={fields:{[Zo]:{stringValue:Yo},[ea]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&di(o)&&(o=pi(o)),o&&(c.fields[ta]=o),{mapValue:c}}(e,t):n instanceof sn?Ea(n,t):n instanceof on?Ta(n,t):function(s,o){const c=ya(s,o),h=ro(c)+ro(s.Ae);return Qr(c)&&Qr(s.Ae)?_a(h):Ei(s.serializer,h)}(n,t)}function sh(n,t,e){return n instanceof sn?Ea(n,t):n instanceof on?Ta(n,t):e}function ya(n,t){return n instanceof Xn?function(r){return Qr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class rn extends er{}class sn extends er{constructor(t){super(),this.elements=t}}function Ea(n,t){const e=va(t);for(const r of n.elements)e.some(s=>Dt(s,r))||e.push(r);return{arrayValue:{values:e}}}class on extends er{constructor(t){super(),this.elements=t}}function Ta(n,t){let e=va(t);for(const r of n.elements)e=e.filter(s=>!Dt(s,r));return{arrayValue:{values:e}}}class Xn extends er{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ro(n){return it(n.integerValue||n.doubleValue)}function va(n){return mi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t,e){this.field=t,this.transform=e}}function ah(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof sn&&s instanceof sn||r instanceof on&&s instanceof on?ye(r.elements,s.elements,Dt):r instanceof Xn&&s instanceof Xn?Dt(r.Ae,s.Ae):r instanceof rn&&s instanceof rn}(n.transform,t.transform)}class ch{constructor(t,e){this.version=t,this.transformResults=e}}class Nt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Nt}static exists(t){return new Nt(void 0,t)}static updateTime(t){return new Nt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ln(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class nr{}function Ia(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new wa(n.key,Nt.none()):new ln(n.key,n.data,Nt.none());{const e=n.data,r=It.empty();let s=new ot(st.comparator);for(let o of t.fields)if(!s.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),s=s.add(o)}return new le(n.key,r,new wt(s.toArray()),Nt.none())}}function lh(n,t,e){n instanceof ln?function(s,o,c){const h=s.value.clone(),f=so(s.fieldTransforms,o,c.transformResults);h.setAll(f),o.convertToFoundDocument(c.version,h).setHasCommittedMutations()}(n,t,e):n instanceof le?function(s,o,c){if(!Ln(s.precondition,o))return void o.convertToUnknownDocument(c.version);const h=so(s.fieldTransforms,o,c.transformResults),f=o.data;f.setAll(Aa(s)),f.setAll(h),o.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(n,t,e):function(s,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function Qe(n,t,e,r){return n instanceof ln?function(o,c,h,f){if(!Ln(o.precondition,c))return h;const p=o.value.clone(),I=oo(o.fieldTransforms,f,c);return p.setAll(I),c.convertToFoundDocument(c.version,p).setHasLocalMutations(),null}(n,t,e,r):n instanceof le?function(o,c,h,f){if(!Ln(o.precondition,c))return h;const p=oo(o.fieldTransforms,f,c),I=c.data;return I.setAll(Aa(o)),I.setAll(p),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),h===null?null:h.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,c,h){return Ln(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):h}(n,t,e)}function uh(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=ya(r.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function io(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ye(r,s,(o,c)=>ah(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ln extends nr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class le extends nr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Aa(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function so(n,t,e){const r=new Map;W(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],c=o.transform,h=t.data.field(o.field);r.set(o.field,sh(c,h,e[s]))}return r}function oo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,c=e.data.field(s.field);r.set(s.field,ih(o,c,t))}return r}class wa extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hh extends nr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&lh(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Qe(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=ga();return this.mutations.forEach(s=>{const o=t.get(s.key),c=o.overlayedDocument;let h=this.applyToLocalView(c,o.mutatedFields);h=e.has(s.key)?null:h;const f=Ia(c,h);f!==null&&r.set(s.key,f),c.isValidDocument()||c.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ht())}isEqual(t){return this.batchId===t.batchId&&ye(this.mutations,t.mutations,(e,r)=>io(e,r))&&ye(this.baseMutations,t.baseMutations,(e,r)=>io(e,r))}}class Ti{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Zu}();const o=t.mutations;for(let c=0;c<o.length;c++)s=s.insert(o[c].key,r[c].version);return new Ti(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J,F;function ph(n){switch(n){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function mh(n){if(n===void 0)return se("GRPC error has no .code"),S.UNKNOWN;switch(n){case J.OK:return S.OK;case J.CANCELLED:return S.CANCELLED;case J.UNKNOWN:return S.UNKNOWN;case J.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case J.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case J.INTERNAL:return S.INTERNAL;case J.UNAVAILABLE:return S.UNAVAILABLE;case J.UNAUTHENTICATED:return S.UNAUTHENTICATED;case J.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case J.NOT_FOUND:return S.NOT_FOUND;case J.ALREADY_EXISTS:return S.ALREADY_EXISTS;case J.PERMISSION_DENIED:return S.PERMISSION_DENIED;case J.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case J.ABORTED:return S.ABORTED;case J.OUT_OF_RANGE:return S.OUT_OF_RANGE;case J.UNIMPLEMENTED:return S.UNIMPLEMENTED;case J.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}(F=J||(J={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new si([4294967295,4294967295],0);class gh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Yr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function _h(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function yh(n,t){return Yr(n,t.toTimestamp())}function me(n){return W(!!n,49232),z.fromTimestamp(function(e){const r=oe(e);return new H(r.seconds,r.nanos)}(n))}function Ra(n,t){return Zr(n,t).canonicalString()}function Zr(n,t){const e=function(s){return new G(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Eh(n){const t=G.fromString(n);return W(Ph(t),10190,{key:t.toString()}),t}function ti(n,t){return Ra(n.databaseId,t.path)}function Th(n){const t=Eh(n);return t.length===4?G.emptyPath():Ih(t)}function vh(n){return new G(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ih(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ao(n,t,e){return{name:ti(n,t),fields:e.value.mapValue.fields}}function Ah(n,t){let e;if(t instanceof ln)e={update:ao(n,t.key,t.value)};else if(t instanceof wa)e={delete:ti(n,t.key)};else if(t instanceof le)e={update:ao(n,t.key,t.data),updateMask:Sh(t.fieldMask)};else{if(!(t instanceof hh))return M(16599,{dt:t.type});e={verify:ti(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,c){const h=c.transform;if(h instanceof rn)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof sn)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof on)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Xn)return{fieldPath:c.field.canonicalString(),increment:h.Ae};throw M(20930,{transform:c.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:yh(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)}(n,t.precondition)),e}function wh(n,t){return n&&n.length>0?(W(t!==void 0,14353),n.map(e=>function(s,o){let c=s.updateTime?me(s.updateTime):me(o);return c.isEqual(z.min())&&(c=me(o)),new ch(c,s.transformResults||[])}(e,t))):[]}function Rh(n){let t=Th(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1,65062);const I=e.from[0];I.allDescendants?s=I.collectionId:t=t.child(I.collectionId)}let o=[];e.where&&(o=function(w){const C=Sa(w);return C instanceof Ht&&ca(C)?C.getFilters():[C]}(e.where));let c=[];e.orderBy&&(c=function(w){return w.map(C=>function(N){return new Wn(pe(N.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(C))}(e.orderBy));let h=null;e.limit&&(h=function(w){let C;return C=typeof w=="object"?w.value:w,fi(C)?null:C}(e.limit));let f=null;e.startAt&&(f=function(w){const C=!!w.before,V=w.values||[];return new Kn(V,C)}(e.startAt));let p=null;return e.endAt&&(p=function(w){const C=!w.before,V=w.values||[];return new Kn(V,C)}(e.endAt)),Hu(t,s,c,o,h,"F",f,p)}function Sa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=pe(e.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=pe(e.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=pe(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=pe(e.unaryFilter.field);return nt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}}(n):n.fieldFilter!==void 0?function(e){return nt.create(pe(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ht.create(e.compositeFilter.filters.map(r=>Sa(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}}(e.compositeFilter.op))}(n):M(30097,{filter:n})}function pe(n){return st.fromServerFormat(n.fieldPath)}function Sh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ph(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Pa(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.yt=t}}function bh(n){const t=Rh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Jr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.bn=new Dh}addToCollectionParentIndex(t,e){return this.bn.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.bn.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Dh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ot(G.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ot(G.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ca=41943040;class _t{static withCacheSize(t){return new _t(t,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Ca,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Ie(0)}static ar(){return new Ie(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="LruGarbageCollector",Nh=1048576;function uo([n,t],[e,r]){const s=B(n,e);return s===0?B(t,r):s}class Oh{constructor(t){this.Pr=t,this.buffer=new ot(uo),this.Tr=0}Er(){return++this.Tr}Ir(t){const e=[t,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();uo(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class kh{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){b(lo,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){cn(e)?b(lo,"Ignoring IndexedDB error during garbage collection: ",e):await li(e)}await this.Ar(3e5)})}}class Mh{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return R.resolve(ui.ce);const r=new Oh(e);return this.Vr.forEachTarget(t,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),R.resolve(co)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),co):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,c,h,f,p;const I=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(w=>(w>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,c=Date.now(),this.nthSequenceNumber(t,s))).next(w=>(r=w,h=Date.now(),this.removeTargets(t,r,e))).next(w=>(o=w,f=Date.now(),this.removeOrphanedDocuments(t,r))).next(w=>(p=Date.now(),de()<=U.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${s} in `+(h-c)+`ms
	Removed ${o} targets in `+(f-h)+`ms
	Removed ${w} documents in `+(p-f)+`ms
Total Duration: ${p-I}ms`),R.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w})))}}function xh(n,t){return new Mh(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(){this.changes=new ce(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Qe(r.mutation,s,wt.empty(),H.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,ht()).next(()=>r))}getLocalViewOfDocuments(t,e,r=ht()){const s=ee();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let c=Dn();return o.forEach((h,f)=>{c=c.insert(h,f.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=ee();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,ht()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((c,h)=>{e.set(c,h)})})}computeViews(t,e,r,s){let o=Qn();const c=We(),h=function(){return We()}();return e.forEach((f,p)=>{const I=r.get(p.key);s.has(p.key)&&(I===void 0||I.mutation instanceof le)?o=o.insert(p.key,p):I!==void 0?(c.set(p.key,I.mutation.getFieldMask()),Qe(I.mutation,p,I.mutation.getFieldMask(),H.now())):c.set(p.key,wt.empty())}),this.recalculateAndSaveOverlays(t,o).next(f=>(f.forEach((p,I)=>c.set(p,I)),e.forEach((p,I)=>h.set(p,new Fh(I,c.get(p)??null))),h))}recalculateAndSaveOverlays(t,e){const r=We();let s=new yt((c,h)=>c-h),o=ht();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const h of c)h.keys().forEach(f=>{const p=e.get(f);if(p===null)return;let I=r.get(f)||wt.empty();I=h.applyToLocalView(p,I),r.set(f,I);const w=(s.get(h.batchId)||ht()).add(f);s=s.insert(h.batchId,w)})}).next(()=>{const c=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,I=f.value,w=ga();I.forEach(C=>{if(!o.has(C)){const V=Ia(e.get(C),r.get(C));V!==null&&w.set(C,V),o=o.add(C)}}),c.push(this.documentOverlayCache.saveOverlays(t,p,w))}return R.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return Ku(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Wu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const c=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):R.resolve(ee());let h=en,f=o;return c.next(p=>R.forEach(p,(I,w)=>(h<w.largestBatchId&&(h=w.largestBatchId),o.get(I)?R.resolve():this.remoteDocumentCache.getEntry(t,I).next(C=>{f=f.insert(I,C)}))).next(()=>this.populateOverlays(t,p,o)).next(()=>this.computeViews(t,f,p,ht())).next(I=>({batchId:h,changes:ma(I)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let s=Dn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let c=Dn();return this.indexManager.getCollectionParents(t,o).next(h=>R.forEach(h,f=>{const p=function(w,C){return new tr(C,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,p,r,s).next(I=>{I.forEach((w,C)=>{c=c.insert(w,C)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(c=>{o.forEach((f,p)=>{const I=p.getKey();c.get(I)===null&&(c=c.insert(I,vt.newInvalidDocument(I)))});let h=Dn();return c.forEach((f,p)=>{const I=o.get(f);I!==void 0&&Qe(I.mutation,p,wt.empty(),H.now()),yi(e,p)&&(h=h.insert(f,p))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return R.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:me(s.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:bh(s.bundledQuery),readTime:me(s.readTime)}}(e)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(){this.overlays=new yt(O.comparator),this.Lr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ee();return R.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.St(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const s=ee(),o=e.length+1,c=new O(e.child("")),h=this.overlays.getIteratorFrom(c);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!e.isPrefixOf(p.path))break;p.path.length===o&&f.largestBatchId>r&&s.set(f.getKey(),f)}return R.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new yt((p,I)=>p-I);const c=this.overlays.getIterator();for(;c.hasNext();){const p=c.getNext().value;if(p.getKey().getCollectionGroup()===e&&p.largestBatchId>r){let I=o.get(p.largestBatchId);I===null&&(I=ee(),o=o.insert(p.largestBatchId,I)),I.set(p.getKey(),p)}}const h=ee(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,I)=>h.set(p,I)),!(h.size()>=s)););return R.resolve(h)}St(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const c=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new dh(e,r));let o=this.Lr.get(e);o===void 0&&(o=ht(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.kr=new ot(et.qr),this.Kr=new ot(et.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new et(t,e);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new et(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new O(new G([])),r=new et(e,t),s=new et(e,t+1),o=[];return this.Kr.forEachInRange([r,s],c=>{this.Wr(c),o.push(c.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.Kr=this.Kr.delete(t)}jr(t){const e=new O(new G([])),r=new et(e,t),s=new et(e,t+1);let o=ht();return this.Kr.forEachInRange([r,s],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new et(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class et{constructor(t,e){this.key=t,this.Jr=e}static qr(t,e){return O.comparator(t.key,e.key)||B(t.Jr,e.Jr)}static Ur(t,e){return B(t.Jr,e.Jr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Hr=new ot(et.qr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new fh(o,e,r,s);this.mutationQueue.push(c);for(const h of s)this.Hr=this.Hr.add(new et(h.key,o)),this.indexManager.addToCollectionParentIndex(t,h.key.path.popLast());return R.resolve(c)}lookupMutationBatch(t,e){return R.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?hi:this.Yn-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new et(e,0),s=new et(e,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,s],c=>{const h=this.Zr(c.Jr);o.push(h)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach(s=>{const o=new et(s,0),c=new et(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,c],h=>{r=r.add(h.Jr)})}),R.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const c=new et(new O(o),0);let h=new ot(B);return this.Hr.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(h=h.add(f.Jr)),!0)},c),R.resolve(this.Yr(h))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){W(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return R.forEach(e.mutations,s=>{const o=new et(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Hr=r})}nr(t){}containsKey(t,e){const r=new et(e,0),s=this.Hr.firstAfterOrEqual(r);return R.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t){this.ti=t,this.docs=function(){return new yt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,c=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=Qn();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Qn();const c=e.path,h=new O(c.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:I}}=f.getNext();if(!c.isPrefixOf(p.path))break;p.path.length>c.length+1||Iu(vu(I),r)<=0||(s.has(I.key)||yi(e,I))&&(o=o.insert(I.key,I.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}ni(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Hh(this)}getSize(t){return R.resolve(this.size)}}class Hh extends Lh{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t){this.persistence=t,this.ri=new ce(e=>gi(e),_i),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.ii=0,this.si=new vi,this.targetCount=0,this.oi=Ie._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),R.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Ie(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.lr(e),R.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach((c,h)=>{h.sequenceNumber<=e&&r.get(h.targetId)===null&&(this.ri.delete(c),o.push(this.removeMatchingKeysForTargetId(t,h.targetId)),s++)}),R.waitFor(o).next(()=>s)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(c=>{o.push(s.markPotentiallyOrphaned(t,c))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e){this._i={},this.overlays={},this.ai=new ui(0),this.ui=!1,this.ui=!0,this.ci=new $h,this.referenceDelegate=t(this),this.li=new Gh(this),this.indexManager=new Vh,this.remoteDocumentCache=function(s){return new zh(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Ch(e),this.Pi=new Bh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new jh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new qh(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){b("MemoryPersistence","Starting transaction:",t);const s=new Kh(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(o=>this.referenceDelegate.Ei(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ii(t,e){return R.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Kh extends wu{constructor(t){super(),this.currentSequenceNumber=t}}class Ii{constructor(t){this.persistence=t,this.Ri=new vi,this.Ai=null}static Vi(t){return new Ii(t)}get di(){if(this.Ai)return this.Ai;throw M(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),R.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ei(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.di,r=>{const s=O.fromPath(r);return this.mi(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return R.or([()=>R.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ii(t,e)])}}class Jn{constructor(t,e){this.persistence=t,this.fi=new ce(r=>Pu(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=xh(this,e)}static Vi(t,e){return new Jn(t,e)}Ti(){}Ei(t){return R.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return R.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(o=>o?R.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,c=>this.wr(t,c,e).next(h=>{h||(r++,o.removeEntry(c,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),R.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),R.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Mn(t.data.value)),e}wr(t,e,r){return R.or([()=>this.persistence.Ii(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return R.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Es=s}static Is(t,e){let r=ht(),s=ht();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ai(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return $c()?8:Ru(Bc())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.ps(t,e,s,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new Wh;return this.ys(t,e,c).next(h=>{if(o.result=h,this.As)return this.ws(t,e,c,h.size)})}).next(()=>o.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(de()<=U.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",$e(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),R.resolve()):(de()<=U.DEBUG&&b("QueryEngine","Query:",$e(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(de()<=U.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",$e(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,re(e))):R.resolve())}gs(t,e){if(no(e))return R.resolve(null);let r=re(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Jr(e,null,"F"),r=re(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=ht(...o);return this.fs.getDocuments(t,c).next(h=>this.indexManager.getMinOffset(t,r).next(f=>{const p=this.Ss(e,h);return this.bs(e,p,c,f.readTime)?this.gs(t,Jr(e,null,"F")):this.Ds(t,p,e,f)}))})))}ps(t,e,r,s){return no(e)||s.isEqual(z.min())?R.resolve(null):this.fs.getDocuments(t,r).next(o=>{const c=this.Ss(e,o);return this.bs(e,c,r,s)?R.resolve(null):(de()<=U.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),$e(e)),this.Ds(t,c,e,Tu(s,en)).next(h=>h))})}Ss(t,e){let r=new ot(Xu(t));return e.forEach((s,o)=>{yi(t,o)&&(r=r.add(o))}),r}bs(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return de()<=U.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",$e(e)),this.fs.getDocumentsMatchingQuery(t,e,zt.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="LocalStore";class Jh{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new yt(B),this.Fs=new ce(o=>gi(o),_i),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Uh(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Yh(n,t,e,r){return new Jh(n,t,e,r)}async function Va(n,t){const e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],h=[];let f=ht();for(const p of s){c.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}for(const p of o){h.push(p.batchId);for(const I of p.mutations)f=f.add(I.key)}return e.localDocuments.getDocuments(r,f).next(p=>({Ns:p,removedBatchIds:c,addedBatchIds:h}))})})}function Zh(n,t){const e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(h,f,p,I){const w=p.batch,C=w.keys();let V=R.resolve();return C.forEach(N=>{V=V.next(()=>I.getEntry(f,N)).next(L=>{const x=p.docVersions.get(N);W(x!==null,48541),L.version.compareTo(x)<0&&(w.applyToRemoteDocument(L,p),L.isValidDocument()&&(L.setReadTime(p.commitVersion),I.addEntry(L)))})}),V.next(()=>h.mutationQueue.removeMutationBatch(f,w))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=ht();for(let p=0;p<h.mutationResults.length;++p)h.mutationResults[p].transformResults.length>0&&(f=f.add(h.batch.mutations[p].key));return f}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function tf(n){const t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function ef(n,t){const e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=hi),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class ho{constructor(){this.activeTargetIds=nh()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class nf{constructor(){this.vo=new ho,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new ho,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo="ConnectivityMonitor";class po{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){b(fo,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){b(fo,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn=null;function ei(){return Nn===null?Nn=function(){return 268435456+Math.round(2147483648*Math.random())}():Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="RestConnection",sf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class of{get qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Hn?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const c=ei(),h=this.Qo(t,e.toUriEncodedString());b(Lr,`Sending RPC '${t}' ${c}:`,h,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(f,s,o);const{host:p}=new URL(h),I=ko(p);return this.zo(t,h,f,r,I).then(w=>(b(Lr,`Received RPC '${t}' ${c}: `,w),w),w=>{throw tn(Lr,`RPC '${t}' ${c} failed with error: `,w,"url: ",h,"request:",r),w})}jo(t,e,r,s,o,c){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Qo(t,e){const r=sf[t];let s=`${this.Ko}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t){this.Jo=t.Jo,this.Ho=t.Ho}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Ho()}send(t){this.Jo(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection",qe=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class ge extends of{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!ge.c_){const t=qo();qe(t,$o.STAT_EVENT,e=>{e.stat===Hr.PROXY?b(lt,"STAT_EVENT: detected buffering proxy"):e.stat===Hr.NOPROXY&&b(lt,"STAT_EVENT: detected no buffering proxy")}),ge.c_=!0}}zo(t,e,r,s,o){const c=ei();return new Promise((h,f)=>{const p=new Bo;p.setWithCredentials(!0),p.listenOnce(jo.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case kn.NO_ERROR:const w=p.getResponseJson();b(lt,`XHR for RPC '${t}' ${c} received:`,JSON.stringify(w)),h(w);break;case kn.TIMEOUT:b(lt,`RPC '${t}' ${c} timed out`),f(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case kn.HTTP_ERROR:const C=p.getStatus();if(b(lt,`RPC '${t}' ${c} failed with status:`,C,"response text:",p.getResponseText()),C>0){let V=p.getResponseJson();Array.isArray(V)&&(V=V[0]);const N=V==null?void 0:V.error;if(N&&N.status&&N.message){const L=function(X){const Q=X.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(Q)>=0?Q:S.UNKNOWN}(N.status);f(new D(L,N.message))}else f(new D(S.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new D(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{l_:t,streamId:c,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{b(lt,`RPC '${t}' ${c} completed.`)}});const I=JSON.stringify(s);b(lt,`RPC '${t}' ${c} sending request:`,s),p.send(e,"POST",I,r,15)})}T_(t,e,r){const s=ei(),o=[this.Ko,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=this.createWebChannelTransport(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Go(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");b(lt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const I=c.createWebChannel(p,h);this.E_(I);let w=!1,C=!1;const V=new af({Jo:N=>{C?b(lt,`Not sending because RPC '${t}' stream ${s} is closed:`,N):(w||(b(lt,`Opening RPC '${t}' stream ${s} transport.`),I.open(),w=!0),b(lt,`RPC '${t}' stream ${s} sending:`,N),I.send(N))},Ho:()=>I.close()});return qe(I,ze.EventType.OPEN,()=>{C||(b(lt,`RPC '${t}' stream ${s} transport opened.`),V.i_())}),qe(I,ze.EventType.CLOSE,()=>{C||(C=!0,b(lt,`RPC '${t}' stream ${s} transport closed`),V.o_(),this.I_(I))}),qe(I,ze.EventType.ERROR,N=>{C||(C=!0,tn(lt,`RPC '${t}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),V.o_(new D(S.UNAVAILABLE,"The operation could not be completed")))}),qe(I,ze.EventType.MESSAGE,N=>{var L;if(!C){const x=N.data[0];W(!!x,16349);const X=x,Q=(X==null?void 0:X.error)||((L=X[0])==null?void 0:L.error);if(Q){b(lt,`RPC '${t}' stream ${s} received error:`,Q);const at=Q.status;let Rt=function(y){const d=J[y];if(d!==void 0)return mh(d)}(at),mt=Q.message;at==="NOT_FOUND"&&mt.includes("database")&&mt.includes("does not exist")&&mt.includes(this.databaseId.database)&&tn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Rt===void 0&&(Rt=S.INTERNAL,mt="Unknown error status: "+at+" with message "+Q.message),C=!0,V.o_(new D(Rt,mt)),I.close()}else b(lt,`RPC '${t}' stream ${s} received:`,x),V.__(x)}}),ge.u_(),setTimeout(()=>{V.s_()},0),V}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}E_(t){this.a_.push(t)}I_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zo()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cf(n){return new ge(n)}function Fr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rr(n){return new gh(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge.c_=!1;class Da{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="PersistentStream";class lf{constructor(t,e,r,s,o,c,h,f){this.Ci=t,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Da(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.K_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.K_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(se(e.toString()),se("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return b(mo,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(b(mo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uf extends lf{constructor(t,e,r,s,o,c){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,c),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return W(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){W(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=wh(t.writeResults,t.commitTime),r=me(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=vh(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Ah(this.serializer,r))};this.q_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{}class ff extends hf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Wo(t,Zr(e,r),s,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(S.UNKNOWN,o.toString())})}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,h])=>this.connection.jo(t,Zr(e,r),s,c,h,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new D(S.UNKNOWN,c.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function df(n,t,e,r){return new ff(n,t,e,r)}class pf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(se(e),this.aa=!1):b("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class mf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(c=>{r.enqueueAndForget(async()=>{fn(this)&&(b(un,"Restarting streams for network reachability change."),await async function(f){const p=$(f);p.Ia.add(4),await hn(p),p.Va.set("Unknown"),p.Ia.delete(4),await ir(p)}(this))})}),this.Va=new pf(r,s)}}async function ir(n){if(fn(n))for(const t of n.Ra)await t(!0)}async function hn(n){for(const t of n.Ra)await t(!1)}function fn(n){return $(n).Ia.size===0}async function Na(n,t,e){if(!cn(t))throw t;n.Ia.add(1),await hn(n),n.Va.set("Offline"),e||(e=()=>tf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{b(un,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await ir(n)})}function Oa(n,t){return t().catch(e=>Na(n,e,t))}async function sr(n){const t=$(n),e=Gt(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:hi;for(;gf(t);)try{const s=await ef(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,_f(t,s)}catch(s){await Na(t,s)}ka(t)&&Ma(t)}function gf(n){return fn(n)&&n.Ta.length<10}function _f(n,t){n.Ta.push(t);const e=Gt(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function ka(n){return fn(n)&&!Gt(n).x_()&&n.Ta.length>0}function Ma(n){Gt(n).start()}async function yf(n){Gt(n).ra()}async function Ef(n){const t=Gt(n);for(const e of n.Ta)t.ea(e.mutations)}async function Tf(n,t,e){const r=n.Ta.shift(),s=Ti.from(r,t,e);await Oa(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await sr(n)}async function vf(n,t){t&&Gt(n).Y_&&await async function(r,s){if(function(c){return ph(c)&&c!==S.ABORTED}(s.code)){const o=r.Ta.shift();Gt(r).B_(),await Oa(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await sr(r)}}(n,t),ka(n)&&Ma(n)}async function go(n,t){const e=$(n);e.asyncQueue.verifyOperationInProgress(),b(un,"RemoteStore received new credentials");const r=fn(e);e.Ia.add(3),await hn(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await ir(e)}async function If(n,t){const e=$(n);t?(e.Ia.delete(2),await ir(e)):t||(e.Ia.add(2),await hn(e),e.Va.set("Unknown"))}function Gt(n){return n.fa||(n.fa=function(e,r,s){const o=$(e);return o.sa(),new uf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:yf.bind(null,n),t_:vf.bind(null,n),ta:Ef.bind(null,n),na:Tf.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await sr(n)):(await n.fa.stop(),n.Ta.length>0&&(b(un,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new ne,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const c=Date.now()+r,h=new wi(t,e,c,s,o);return h.start(r),h}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(n,t){if(se("AsyncQueue",`${t}: ${n}`),cn(n))return new D(S.UNAVAILABLE,`${t}: ${n}`);throw n}class Af{constructor(){this.queries=_o(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=$(e),o=s.queries;s.queries=_o(),o.forEach((c,h)=>{for(const f of h.Sa)f.onError(r)})})(this,new D(S.ABORTED,"Firestore shutting down"))}}function _o(){return new ce(n=>da(n),fa)}function wf(n){n.Ca.forEach(t=>{t.next()})}var yo,Eo;(Eo=yo||(yo={})).Ma="default",Eo.Cache="cache";const Rf="SyncEngine";class Sf{constructor(t,e,r,s,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new ce(h=>da(h),fa),this.Eu=new Map,this.Iu=new Set,this.Ru=new yt(O.comparator),this.Au=new Map,this.Vu=new vi,this.du={},this.mu=new Map,this.fu=Ie.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Pf(n,t,e){const r=Df(n);try{const s=await function(c,h){const f=$(c),p=H.now(),I=h.reduce((V,N)=>V.add(N.key),ht());let w,C;return f.persistence.runTransaction("Locally write mutations","readwrite",V=>{let N=Qn(),L=ht();return f.xs.getEntries(V,I).next(x=>{N=x,N.forEach((X,Q)=>{Q.isValidDocument()||(L=L.add(X))})}).next(()=>f.localDocuments.getOverlayedDocuments(V,N)).next(x=>{w=x;const X=[];for(const Q of h){const at=uh(Q,w.get(Q.key).overlayedDocument);at!=null&&X.push(new le(Q.key,at,sa(at.value.mapValue),Nt.exists(!0)))}return f.mutationQueue.addMutationBatch(V,p,X,h)}).next(x=>{C=x;const X=x.applyToLocalDocumentSet(w,L);return f.documentOverlayCache.saveOverlays(V,x.batchId,X)})}).then(()=>({batchId:C.batchId,changes:ma(w)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(c,h,f){let p=c.du[c.currentUser.toKey()];p||(p=new yt(B)),p=p.insert(h,f),c.du[c.currentUser.toKey()]=p}(r,s.batchId,e),await or(r,s.changes),await sr(r.remoteStore)}catch(s){const o=xa(s,"Failed to persist write");e.reject(o)}}function To(n,t,e){const r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,c)=>{const h=c.view.va(t);h.snapshot&&s.push(h.snapshot)}),function(c,h){const f=$(c);f.onlineState=h;let p=!1;f.queries.forEach((I,w)=>{for(const C of w.Sa)C.va(h)&&(p=!0)}),p&&wf(f)}(r.eventManager,t),s.length&&r.Pu.H_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cf(n,t){const e=$(n),r=t.batch.batchId;try{const s=await Zh(e.localStore,t);Fa(e,r,null),La(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await or(e,s)}catch(s){await li(s)}}async function bf(n,t,e){const r=$(n);try{const s=await function(c,h){const f=$(c);return f.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let I;return f.mutationQueue.lookupMutationBatch(p,h).next(w=>(W(w!==null,37113),I=w.keys(),f.mutationQueue.removeMutationBatch(p,w))).next(()=>f.mutationQueue.performConsistencyCheck(p)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(p,I,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,I)).next(()=>f.localDocuments.getDocuments(p,I))})}(r.localStore,t);Fa(r,t,e),La(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await or(r,s)}catch(s){await li(s)}}function La(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Fa(n,t,e){const r=$(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}async function or(n,t,e){const r=$(n),s=[],o=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach((h,f)=>{c.push(r.pu(f,t,e).then(p=>{var I;if((p||e)&&r.isPrimaryClient){const w=p?!p.fromCache:(I=e==null?void 0:e.targetChanges.get(f.targetId))==null?void 0:I.current;r.sharedClientState.updateQueryState(f.targetId,w?"current":"not-current")}if(p){s.push(p);const w=Ai.Is(f.targetId,p);o.push(w)}}))}),await Promise.all(c),r.Pu.H_(s),await async function(f,p){const I=$(f);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(p,C=>R.forEach(C.Ts,V=>I.persistence.referenceDelegate.addReference(w,C.targetId,V)).next(()=>R.forEach(C.Es,V=>I.persistence.referenceDelegate.removeReference(w,C.targetId,V)))))}catch(w){if(!cn(w))throw w;b(Xh,"Failed to update sequence numbers: "+w)}for(const w of p){const C=w.targetId;if(!w.fromCache){const V=I.vs.get(C),N=V.snapshotVersion,L=V.withLastLimboFreeSnapshotVersion(N);I.vs=I.vs.insert(C,L)}}}(r.localStore,o))}async function Vf(n,t){const e=$(n);if(!e.currentUser.isEqual(t)){b(Rf,"User change. New user:",t.toKey());const r=await Va(e.localStore,t);e.currentUser=t,function(o,c){o.mu.forEach(h=>{h.forEach(f=>{f.reject(new D(S.CANCELLED,c))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await or(e,r.Ns)}}function Df(n){const t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bf.bind(null,t),t}class Yn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=rr(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Yh(this.persistence,new Qh,t.initialUser,this.serializer)}Cu(t){return new ba(Ii.Vi,this.serializer)}Du(t){return new nf}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yn.provider={build:()=>new Yn};class Nf extends Yn{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){W(this.persistence.referenceDelegate instanceof Jn,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new kh(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new ba(r=>Jn.Vi(r,e),this.serializer)}}class ni{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>To(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vf.bind(null,this.syncEngine),await If(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Af}()}createDatastore(t){const e=rr(t.databaseInfo.databaseId),r=cf(t.databaseInfo);return df(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,c,h){return new mf(r,s,o,c,h)}(this.localStore,this.datastore,t.asyncQueue,e=>To(this.syncEngine,e,0),function(){return po.v()?new po:new rf}())}createSyncEngine(t,e){return function(s,o,c,h,f,p,I){const w=new Sf(s,o,c,h,f,p);return I&&(w.gu=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=$(s);b(un,"RemoteStore shutting down."),o.Ia.add(5),await hn(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}ni.provider={build:()=>new ni};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="FirestoreClient";class Of{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=ai.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async c=>{b(Kt,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(r,c=>(b(Kt,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ne;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=xa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ur(n,t){n.asyncQueue.verifyOperationInProgress(),b(Kt,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Va(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function vo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kf(n);b(Kt,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>go(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>go(t.remoteStore,s)),n._onlineComponents=t}async function kf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){b(Kt,"Using user provided OfflineComponentProvider");try{await Ur(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;tn("Error using user provided cache. Falling back to memory cache: "+e),await Ur(n,new Yn)}}else b(Kt,"Using default OfflineComponentProvider"),await Ur(n,new Nf(void 0));return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(b(Kt,"Using user provided OnlineComponentProvider"),await vo(n,n._uninitializedComponentsProvider._online)):(b(Kt,"Using default OnlineComponentProvider"),await vo(n,new ni))),n._onlineComponents}function xf(n){return Mf(n).then(t=>t.syncEngine)}function Lf(n,t){const e=new ne;return n.asyncQueue.enqueueAndForget(async()=>Pf(await xf(n),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="ComponentProvider",Io=new Map;function Uf(n,t,e,r,s){return new Du(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Ua(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="firestore.googleapis.com",Ao=!0;class wo{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ba,this.ssl=Ao}else this.host=t.host,this.ssl=t.ssl??Ao;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ca;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Nh)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Eu("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ua(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ar{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lu;switch(r.type){case"firstParty":return new du(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Io.get(e);r&&(b(Ff,"Removing Datastore"),Io.delete(e),r.terminate())}(this),Promise.resolve()}}function Bf(n,t,e,r={}){var p;n=Qo(n,ar);const s=ko(t),o=n._getSettings(),c={...o,emulatorOptions:n._getEmulatorOptions()},h=`${t}:${e}`;s&&Wc(`https://${h}`),o.host!==Ba&&o.host!==h&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f={...o,host:h,ssl:s,emulatorOptions:r};if(!Bn(f,c)&&(n._setSettings(f),r.mockUserToken)){let I,w;if(typeof r.mockUserToken=="string")I=r.mockUserToken,w=ut.MOCK_USER;else{I=Uc(r.mockUserToken,(p=n._app)==null?void 0:p.options.projectId);const C=r.mockUserToken.sub||r.mockUserToken.user_id;if(!C)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new ut(C)}n._authCredentials=new uu(new Go(I,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ri(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}toJSON(){return{type:ft._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(an(e,ft._jsonSchema))return new ft(t,r||null,new O(G.fromString(e.referencePath)))}}ft._jsonSchemaVersion="firestore/documentReference/1.0",ft._jsonSchema={type:Y("string",ft._jsonSchemaVersion),referencePath:Y("string")};class qt extends Ri{constructor(t,e,r){super(t,e,Gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new O(t))}withConverter(t){return new qt(this.firestore,t,this._path)}}function rd(n,t,...e){if(n=Je(n),Ko("collection","path",t),n instanceof ar){const r=G.fromString(t,...e);return Hs(r),new qt(n,null,r)}{if(!(n instanceof ft||n instanceof qt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(t,...e));return Hs(r),new qt(n.firestore,null,r)}}function jf(n,t,...e){if(n=Je(n),arguments.length===1&&(t=ai.newId()),Ko("doc","path",t),n instanceof ar){const r=G.fromString(t,...e);return zs(r),new ft(n,null,new O(r))}{if(!(n instanceof ft||n instanceof qt))throw new D(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(G.fromString(t,...e));return zs(r),new ft(n.firestore,n instanceof qt?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="AsyncQueue";class So{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Da(this,"async_queue_retry"),this._c=()=>{const r=Fr();r&&b(Ro,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Fr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Fr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new ne;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!cn(t))throw t;b(Ro,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,se("INTERNAL UNHANDLED ERROR: ",Po(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=wi.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&M(47125,{Pc:Po(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ic(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Po(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ja extends ar{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new So,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new So(t),this._firestoreClient=void 0,await t}}}function id(n,t){const e=typeof n=="object"?n:Jl(),r=typeof n=="string"?n:Hn,s=Hl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Lc("firestore");o&&Bf(s,...o)}return s}function $f(n){if(n._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qf(n),n._firestoreClient}function qf(n){var r,s,o,c;const t=n._freezeSettings(),e=Uf(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((c=t.localCache)!=null&&c._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Of(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this._byteString=t}static fromBase64String(t){try{return new At(Vt.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new At(Vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(an(t,At._jsonSchema))return At.fromBase64String(t.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Y("string",At._jsonSchemaVersion),bytes:Y("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ot._jsonSchemaVersion}}static fromJSON(t){if(an(t,Ot._jsonSchema))return new Ot(t.latitude,t.longitude)}}Ot._jsonSchemaVersion="firestore/geoPoint/1.0",Ot._jsonSchema={type:Y("string",Ot._jsonSchemaVersion),latitude:Y("number"),longitude:Y("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(an(t,bt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new bt(t.vectorValues);throw new D(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:Y("string",bt._jsonSchemaVersion),vectorValues:Y("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf=/^__.*__$/;class Hf{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new le(t,this.data,this.fieldMask,e,this.fieldTransforms):new ln(t,this.data,e,this.fieldTransforms)}}function qa(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{dataSource:n})}}class Pi{constructor(t,e,r,s,o,c){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=c||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(t){return new Pi({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.mc(t),r}fc(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.i({path:e,arrayElement:!1});return r.Ac(),r}gc(t){return this.i({path:void 0,arrayElement:!0})}yc(t){return Zn(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.mc(this.path.get(t))}mc(t){if(t.length===0)throw this.yc("Document fields must not be empty");if(qa(this.dataSource)&&zf.test(t))throw this.yc('Document fields cannot begin and end with "__"')}}class Gf{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||rr(t)}A(t,e,r,s=!1){return new Pi({dataSource:t,methodName:e,targetDoc:r,path:st.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Kf(n){const t=n._freezeSettings(),e=rr(n._databaseId);return new Gf(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Wf(n,t,e,r,s,o={}){const c=n.A(o.merge||o.mergeFields?2:0,t,e,s);Ka("Data must be an object, but it was:",c,r);const h=Ha(r,c);let f,p;if(o.merge)f=new wt(c.fieldMask),p=c.fieldTransforms;else if(o.mergeFields){const I=[];for(const w of o.mergeFields){const C=bi(t,w,e);if(!c.contains(C))throw new D(S.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);Jf(I,C)||I.push(C)}f=new wt(I),p=c.fieldTransforms.filter(w=>f.covers(w.field))}else f=null,p=c.fieldTransforms;return new Hf(new It(h),f,p)}class Ci extends Si{_toFieldTransform(t){return new oh(t.path,new rn)}isEqual(t){return t instanceof Ci}}function za(n,t){if(Ga(n=Je(n)))return Ka("Unsupported field value:",t,n),Ha(n,t);if(n instanceof Si)return function(r,s){if(!qa(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.yc("Nested arrays are not supported");return function(r,s){const o=[];let c=0;for(const h of r){let f=za(h,s.gc(c));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),c++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rh(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=H.fromDate(r);return{timestampValue:Yr(s.serializer,o)}}if(r instanceof H){const o=new H(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yr(s.serializer,o)}}if(r instanceof Ot)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:_h(s.serializer,r._byteString)};if(r instanceof ft){const o=s.databaseId,c=r.firestore._databaseId;if(!c.isEqual(o))throw s.yc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof bt)return function(c,h){const f=c instanceof bt?c.toArray():c;return{mapValue:{fields:{[na]:{stringValue:ia},[Kr]:{arrayValue:{values:f.map(I=>{if(typeof I!="number")throw h.yc("VectorValues must only contain numeric values.");return Ei(h.serializer,I)})}}}}}}(r,s);if(Pa(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${ci(r)}`)}(n,t)}function Ha(n,t){const e={};return Jo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Re(n,(r,s)=>{const o=za(s,t.dc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ga(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof H||n instanceof Ot||n instanceof At||n instanceof ft||n instanceof Si||n instanceof bt||Pa(n))}function Ka(n,t,e){if(!Ga(e)||!Wo(e)){const r=ci(e);throw r==="an object"?t.yc(n+" a custom object"):t.yc(n+" "+r)}}function bi(n,t,e){if((t=Je(t))instanceof $a)return t._internalPath;if(typeof t=="string")return Xf(n,t);throw Zn("Field path arguments must be of type string or ",n,!1,void 0,e)}const Qf=new RegExp("[~\\*/\\[\\]]");function Xf(n,t,e){if(t.search(Qf)>=0)throw Zn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new $a(...t.split("."))._internalPath}catch{throw Zn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Zn(n,t,e,r,s){const o=r&&!r.isEmpty(),c=s!==void 0;let h=`Function ${t}() called with invalid data`;e&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(o||c)&&(f+=" (found",o&&(f+=` in field ${r}`),c&&(f+=` in document ${s}`),f+=")"),new D(S.INVALID_ARGUMENT,h+n+f)}function Jf(n,t){return n.some(e=>e.isEqual(t))}function sd(){return new Ci("serverTimestamp")}const Co="@firebase/firestore",bo="4.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Yf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(bi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Yf extends Wa{data(){return super.data()}}function Zf(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class On{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class _e extends Wa{constructor(t,e,r,s,o,c){super(t,e,r,s,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Fn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(bi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=_e._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}_e._jsonSchemaVersion="firestore/documentSnapshot/1.0",_e._jsonSchema={type:Y("string",_e._jsonSchemaVersion),bundleSource:Y("string","DocumentSnapshot"),bundleName:Y("string"),bundle:Y("string")};class Fn extends _e{data(t={}){return super.data(t)}}class Xe{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new On(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Fn(this._firestore,this._userDataWriter,r.key,r,new On(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(h=>{const f=new Fn(s._firestore,s._userDataWriter,h.doc.key,h.doc,new On(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);return h.doc,{type:"added",doc:f,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(h=>o||h.type!==3).map(h=>{const f=new Fn(s._firestore,s._userDataWriter,h.doc.key,h.doc,new On(s._snapshot.mutatedKeys.has(h.doc.key),s._snapshot.fromCache),s.query.converter);let p=-1,I=-1;return h.type!==0&&(p=c.indexOf(h.doc.key),c=c.delete(h.doc.key)),h.type!==1&&(c=c.add(h.doc),I=c.indexOf(h.doc.key)),{type:td(h.type),doc:f,oldIndex:p,newIndex:I}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new D(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ai.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function td(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe._jsonSchemaVersion="firestore/querySnapshot/1.0",Xe._jsonSchema={type:Y("string",Xe._jsonSchemaVersion),bundleSource:Y("string","QuerySnapshot"),bundleName:Y("string"),bundle:Y("string")};function od(n,t){const e=Qo(n.firestore,ja),r=jf(n),s=Zf(n.converter,t),o=Kf(n.firestore);return ed(e,[Wf(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Nt.exists(!1))]).then(()=>r)}function ed(n,t){const e=$f(n);return Lf(e,t)}(function(t,e=!0){cu(Ql),$n(new Ye("firestore",(r,{instanceIdentifier:s,options:o})=>{const c=r.getProvider("app").getImmediate(),h=new ja(new hu(r.getProvider("auth-internal")),new pu(c,r.getProvider("app-check-internal")),Nu(c,s),c);return o={useFetchStreams:e,...o},h._setSettings(o),h},"PUBLIC").setMultipleInstances(!0)),He(Co,bo,t),He(Co,bo,"esm2020")})();export{od as a,rd as c,id as g,Xl as i,He as r,sd as s};
