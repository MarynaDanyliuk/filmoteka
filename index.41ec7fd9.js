var e,t,n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=e={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var e=a(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++h<t;)c&&c[h].run();h=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function g(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0};
/**
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
 */
const m=!1,y=!1,_="${JSCORE_VERSION}",v=function(e,t){if(!e)throw w(t)},w=function(e){return new Error("Firebase Database ("+_+") INTERNAL ASSERT FAILED: "+e)},b=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(b(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new I;const c=r<<2|s>>4;if(i.push(c),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
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
 */class I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const T=function(e){const t=b(e);return E.encodeByteArray(t,!0)},C=function(e){return T(e).replace(/\./g,"")},S=function(e){try{return E.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
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
 */
function k(e){return A(void 0,e)}function A(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=A(e[n],t[n]));return e}
/**
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
 */
const R=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,N=()=>{try{return R()||(()=>{if(void 0===e||void 0===e.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&S(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},O=e=>{var t,n;return null===(n=null===(t=N())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},D=e=>{const t=O(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},P=()=>{var e;return null===(e=N())||void 0===e?void 0:e.config},L=e=>{var t;return null===(t=N())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class x{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function M(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[C(JSON.stringify({alg:"none",type:"JWT"})),C(JSON.stringify(s)),""].join(".")}
/**
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
 */function U(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function F(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function B(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function V(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function j(){const e=U();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function q(){return!0===m||!0===y}function $(){try{return"object"==typeof indexedDB}catch(e){return!1}}function z(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function H(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
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
 */class W extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,K.prototype.create)}}class K{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(G,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new W(i,o,n)}}const G=/\{\$([^}]+)}/g;
/**
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
 */function Q(e){return JSON.parse(e)}function Y(e){return JSON.stringify(e)}
/**
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
 */const J=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Q(S(s[0])||""),n=Q(S(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}},X=function(e){const t=J(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},Z=function(e){const t=J(e).claims;return"object"==typeof t&&!0===t.admin};
/**
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
 */
function ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function te(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ne(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ie(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function re(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(se(n)&&se(s)){if(!re(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function se(e){return null!==e&&"object"==typeof e}
/**
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
 */
/**
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
 */
function oe(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ae(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function ce(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */class le{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],l=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+l+r+n[e]&4294967295;l=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function ue(e,t){const n=new he(e,t);return n.subscribe.bind(n)}class he{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=de),void 0===i.error&&(i.error=de),void 0===i.complete&&(i.complete=de);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function de(){}
/**
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
 */function fe(e,t){return`${e} failed: ${t} argument `}
/**
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
 */
const pe=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,v(i<e.length,"Surrogate pair missing trail surrogate.");r=65536+(t<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ge=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function me(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
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
 */
/**
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
 */
function ye(e){return e&&e._delegate?e._delegate:e}class _e{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */
/**
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
 */
class ve{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new x;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class we{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ve(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
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
 */const be=[];var Ee,Ie;(Ie=Ee||(Ee={}))[Ie.DEBUG=0]="DEBUG",Ie[Ie.VERBOSE=1]="VERBOSE",Ie[Ie.INFO=2]="INFO",Ie[Ie.WARN=3]="WARN",Ie[Ie.ERROR=4]="ERROR",Ie[Ie.SILENT=5]="SILENT";const Te={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Ce=Ee.INFO,Se={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},ke=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Se[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Ae{constructor(e){this.name=e,this._logLevel=Ce,this._logHandler=ke,this._userLogHandler=null,be.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Te[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}let Re,Ne;const Oe=new WeakMap,De=new WeakMap,Pe=new WeakMap,Le=new WeakMap,xe=new WeakMap;let Me={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return De.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Pe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Be(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ue(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ve(this),t),Be(Oe.get(this))}:function(...t){return Be(e.apply(Ve(this),t))}:function(t,...n){const i=e.call(Ve(this),t,...n);return Pe.set(i,t.sort?t.sort():[t]),Be(i)}}function Fe(e){return"function"==typeof e?Ue(e):(e instanceof IDBTransaction&&function(e){if(De.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));De.set(e,t)}(e),t=e,(Re||(Re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Me):e);var t}function Be(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Be(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Oe.set(t,e)})).catch((()=>{})),xe.set(t,e),t}(e);if(Le.has(e))return Le.get(e);const t=Fe(e);return t!==e&&(Le.set(e,t),xe.set(t,e)),t}const Ve=e=>xe.get(e);function je(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Be(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Be(o.result),e.oldVersion,e.newVersion,Be(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const qe=["get","getKey","getAll","getAllKeys","count"],$e=["put","add","delete","clear"],ze=new Map;function He(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ze.get(t))return ze.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=$e.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!qe.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return ze.set(t,s),s}Me=(e=>({...e,get:(t,n,i)=>He(t,n)||e.get(t,n,i),has:(t,n)=>!!He(t,n)||e.has(t,n)}))(Me);
/**
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
 */
class We{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Ke=new Ae("@firebase/app"),Ge={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Qe=new Map,Ye=new Map;function Je(e,t){try{e.container.addComponent(t)}catch(n){Ke.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Xe(e){const t=e.name;if(Ye.has(t))return Ke.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const t of Qe.values())Je(t,e);return!0}function Ze(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
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
 */
const et=new K("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class tt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new _e("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw et.create("app-deleted",{appName:this._name})}}
/**
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
 */function nt(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw et.create("bad-app-name",{appName:String(r)});if(n||(n=P()),!n)throw et.create("no-options");const s=Qe.get(r);if(s){if(re(n,s.options)&&re(i,s.config))return s;throw et.create("duplicate-app",{appName:r})}const o=new we(r);for(const e of Ye.values())o.addComponent(e);const a=new tt(n,i,o);return Qe.set(r,a),a}function it(e="[DEFAULT]"){const t=Qe.get(e);if(!t&&"[DEFAULT]"===e&&P())return nt();if(!t)throw et.create("no-app",{appName:e});return t}function rt(e,t,n){var i;let r=null!==(i=Ge[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ke.warn(e.join(" "))}Xe(new _e(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let st=null;function ot(){return st||(st=je("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw et.create("idb-open",{originalErrorMessage:e.message})}))),st}async function at(e,t){try{const n=(await ot()).transaction("firebase-heartbeat-store","readwrite"),i=n.objectStore("firebase-heartbeat-store");await i.put(t,ct(e)),await n.done}catch(e){if(e instanceof W)Ke.warn(e.message);else{const t=et.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}function ct(e){return`${e.name}!${e.options.appId}`}
/**
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
 */class lt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ht(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e;const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=ut();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=ut(),{heartbeatsToSend:n,unsentEntries:i}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),dt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),dt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),r=C(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ut(){return(new Date).toISOString().substring(0,10)}class ht{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!$()&&z().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await ot();return await t.transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ct(e))}catch(e){if(e instanceof W)Ke.warn(e.message);else{const t=et.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ke.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return at(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return at(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function dt(e){return C(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */var ft;ft="",Xe(new _e("platform-logger",(e=>new We(e)),"PRIVATE")),Xe(new _e("heartbeat",(e=>new lt(e)),"PRIVATE")),rt("@firebase/app","0.9.23",ft),rt("@firebase/app","0.9.23","esm2017"),rt("fire-js","");
/**
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
 */
rt("firebase","10.6.0","app");let pt,gt;const mt=new WeakMap,yt=new WeakMap,_t=new WeakMap,vt=new WeakMap,wt=new WeakMap;let bt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return yt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||_t.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Et(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(gt||(gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ct(this),t),Tt(mt.get(this))}:function(...t){return Tt(e.apply(Ct(this),t))}:function(t,...n){const i=e.call(Ct(this),t,...n);return _t.set(i,t.sort?t.sort():[t]),Tt(i)}}function It(e){return"function"==typeof e?Et(e):(e instanceof IDBTransaction&&function(e){if(yt.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));yt.set(e,t)}(e),t=e,(pt||(pt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,bt):e);var t}function Tt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(Tt(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&mt.set(t,e)})).catch((()=>{})),wt.set(t,e),t}(e);if(vt.has(e))return vt.get(e);const t=It(e);return t!==e&&(vt.set(e,t),wt.set(t,e)),t}const Ct=e=>wt.get(e);function St(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Tt(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(Tt(o.result),e.oldVersion,e.newVersion,Tt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const kt=["get","getKey","getAll","getAllKeys","count"],At=["put","add","delete","clear"],Rt=new Map;function Nt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Rt.get(t))return Rt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=At.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!kt.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Rt.set(t,s),s}!function(e){bt=e(bt)}((e=>({...e,get:(t,n,i)=>Nt(t,n)||e.get(t,n,i),has:(t,n)=>!!Nt(t,n)||e.has(t,n)})));const Ot=new K("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Dt(e){return e instanceof W&&e.code.includes("request-failed")}
/**
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
 */function Pt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Lt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function xt(e,t){const n=(await t.json()).error;return Ot.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Mt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ut(e,{refreshToken:t}){const n=Mt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
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
 */(t)),n}async function Ft(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
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
 */function Bt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
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
 */
/**
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
 */
const Vt=/^[cdef][\w-]{21}$/;function jt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
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
 */(e);return Vt.test(t)?t:""}catch(e){return""}}function qt(e){return`${e.appName}!${e.appId}`}
/**
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
 */const $t=new Map;function zt(e,t){const n=qt(e);Ht(n,t),function(e,t){const n=Kt();n&&n.postMessage({key:e,fid:t});Gt()}(n,t)}function Ht(e,t){const n=$t.get(e);if(n)for(const e of n)e(t)}let Wt=null;function Kt(){return!Wt&&"BroadcastChannel"in self&&(Wt=new BroadcastChannel("[Firebase] FID Change"),Wt.onmessage=e=>{Ht(e.data.key,e.data.fid)}),Wt}function Gt(){0===$t.size&&Wt&&(Wt.close(),Wt=null)}
/**
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
 */let Qt=null;function Yt(){return Qt||(Qt=St("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-installations-store")}})),Qt}async function Jt(e,t){const n=qt(e),i=(await Yt()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(t,n),await i.done,s&&s.fid===t.fid||zt(e,t.fid),t}async function Xt(e){const t=qt(e),n=(await Yt()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.done}async function Zt(e,t){const n=qt(e),i=(await Yt()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),o=t(s);return void 0===o?await r.delete(n):await r.put(o,n),await i.done,!o||s&&s.fid===o.fid||zt(e,o.fid),o}
/**
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
 */async function en(e){let t;const n=await Zt(e.appConfig,(n=>{const i=function(e){return rn(e||{fid:jt(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Ot.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Pt(e),r=Mt(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.6.4"},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ft((()=>fetch(i,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Lt(e.authToken)}}throw await xt("Create Installation",c)}(e,t);return Jt(e.appConfig,n)}catch(n){throw Dt(n)&&409===n.customData.serverCode?await Xt(e.appConfig):await Jt(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:tn(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function tn(e){let t=await nn(e.appConfig);for(;1===t.registrationStatus;)await Bt(100),t=await nn(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await en(e);return n||t}return t}function nn(e){return Zt(e,(e=>{if(!e)throw Ot.create("installation-not-found");return rn(e)}))}function rn(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
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
 */}async function sn({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${Pt(e)}/${t}/authTokens:generate`}
/**
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
 */(e,n),r=Ut(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const o={installation:{sdkVersion:"w:0.6.4",appId:e.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await Ft((()=>fetch(i,a)));if(c.ok){return Lt(await c.json())}throw await xt("Generate Auth Token",c)}async function on(e,t=!1){let n;const i=await Zt(e.appConfig,(i=>{if(!cn(i))throw Ot.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await an(e.appConfig);for(;1===n.authToken.requestStatus;)await Bt(100),n=await an(e.appConfig);const i=n.authToken;return 0===i.requestStatus?on(e,t):i}(e,t),i;{if(!navigator.onLine)throw Ot.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await sn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Jt(e.appConfig,i),n}catch(n){if(!Dt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Jt(e.appConfig,n)}else await Xt(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function an(e){return Zt(e,(e=>{if(!cn(e))throw Ot.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
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
 */}))}function cn(e){return void 0!==e&&2===e.registrationStatus}
/**
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
 */
async function ln(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await en(e);t&&await t}
/**
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
 */(n);return(await on(n,t)).token}function un(e){return Ot.create("missing-app-config-values",{valueName:e})}
/**
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
 */const hn=e=>{const t=Ze(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await en(t);return i?i.catch(console.error):on(t).catch(console.error),n.fid}(t),getToken:e=>ln(t,e)}};Xe(new _e("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
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
 */
function(e){if(!e||!e.options)throw un("App Configuration");if(!e.name)throw un("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw un(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Ze(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Xe(new _e("installations-internal",hn,"PRIVATE")),rt("@firebase/installations","0.6.4"),rt("@firebase/installations","0.6.4","esm2017");
/**
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
 */
const dn=new Ae("@firebase/analytics"),fn=new K("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
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
 */
function pn(e){if(!e.startsWith("https://www.googletagmanager.com/gtag/js")){const t=fn.create("invalid-gtag-resource",{gtagURL:e});return dn.warn(t.message),""}return e}function gn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function mn(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:pn}),i=document.createElement("script"),r=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`;i.src=n?null==n?void 0:n.createScriptURL(r):r,i.async=!0,document.head.appendChild(i)}function yn(e,t,n,i){return async function(r,...s){try{if("event"===r){const[i,r]=s;await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await gn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){dn.error(e)}}(e,t,n,i,r)}else if("config"===r){const[r,o]=s;await async function(e,t,n,i,r,s){const o=i[r];try{if(o)await t[o];else{const e=(await gn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){dn.error(e)}e("config",r,s)}(e,t,n,i,r,o)}else if("consent"===r){const[t]=s;e("consent","update",t)}else if("get"===r){const[t,n,i]=s;e("get",t,n,i)}else if("set"===r){const[t]=s;e("set",t)}else e(r,...s)}catch(e){dn.error(e)}}}const _n=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function vn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wn(e,t=_n,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw fn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw fn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new En;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),bn({appId:i,apiKey:r,measurementId:s},o,a,t)}async function bn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=_n){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(fn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(a)return dn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:o,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:vn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,r);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw fn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return r.deleteThrottleMetadata(o),t}catch(t){const c=t;if(!function(e){if(!(e instanceof W&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(r.deleteThrottleMetadata(o),a)return dn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw t}const l=503===Number(null===(s=null==c?void 0:c.customData)||void 0===s?void 0:s.httpStatus)?me(n,r.intervalMillis,30):me(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,u),dn.debug(`Calling attemptFetch again in ${l} millis`),bn(e,u,i,r)}}class En{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
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
 */let In,Tn;function Cn(e){Tn=e}function Sn(e){In=e}
/**
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
 */async function kn(e,t,n,i,r,s,o){var a;const c=wn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&dn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>dn.error(e))),t.push(c);const l=async function(){if(!$())return dn.warn(fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await z()}catch(e){return dn.warn(fn.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([c,l]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes("https://www.googletagmanager.com/gtag/js")&&n.src.includes(e))return n;return null}
/**
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
 */)(s)||mn(s,u.measurementId),Tn&&(r("consent","default",Tn),Cn(void 0)),r("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),In&&(r("set",In),Sn(void 0)),u.measurementId}
/**
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
 */class An{constructor(e){this.app=e}_delete(){return delete Rn[this.app.options.appId],Promise.resolve()}}let Rn={},Nn=[];const On={};let Dn,Pn,Ln="dataLayer",xn="gtag",Mn=!1;function Un(e,t,n){!function(){const e=[];if(B()&&e.push("This is a browser extension environment."),H()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=fn.create("invalid-analytics-context",{errorInfo:t});dn.warn(n.message)}}();const i=e.options.appId;if(!i)throw fn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw fn.create("no-api-key");dn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Rn[i])throw fn.create("already-exists",{id:i});if(!Mn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Ln);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=yn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(Rn,Nn,On,Ln,xn);Pn=e,Dn=t,Mn=!0}Rn[i]=kn(e,Nn,On,t,Dn,Ln,n);return new An(e)}function Fn(e,t,n,i){e=ye(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Pn,Rn[e.app.options.appId],t,n,i).catch((e=>dn.error(e)))}Xe(new _e("analytics",((e,{options:t})=>Un(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Xe(new _e("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>Fn(t,e,n,i)}}catch(e){throw fn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),rt("@firebase/analytics","0.10.0"),rt("@firebase/analytics","0.10.0","esm2017");
/**
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
 */let Bn="";function Vn(e){Bn=e}
/**
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
 */class jn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Y(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Q(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
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
 */class qn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
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
 */const $n=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new jn(t)}}catch(e){}return new qn},zn=$n("localStorage"),Hn=$n("sessionStorage"),Wn=new Ae("@firebase/database"),Kn=function(){let e=1;return function(){return e++}}(),Gn=function(e){const t=pe(e),n=new le;n.update(t);const i=n.digest();return E.encodeByteArray(i)},Qn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Qn.apply(null,i):t+="object"==typeof i?Y(i):i,t+=" "}return t};let Yn=null,Jn=!0;const Xn=function(e,t){v(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Wn.logLevel=Ee.VERBOSE,Yn=Wn.log.bind(Wn),t&&Hn.set("logging_enabled",!0)):"function"==typeof e?Yn=e:(Yn=null,Hn.remove("logging_enabled"))},Zn=function(...e){if(!0===Jn&&(Jn=!1,null===Yn&&!0===Hn.get("logging_enabled")&&Xn(!0)),Yn){const t=Qn.apply(null,e);Yn(t)}},ei=function(e){return function(...t){Zn(e,...t)}},ti=function(...e){const t="FIREBASE INTERNAL ERROR: "+Qn(...e);Wn.error(t)},ni=function(...e){const t=`FIREBASE FATAL ERROR: ${Qn(...e)}`;throw Wn.error(t),new Error(t)},ii=function(...e){const t="FIREBASE WARNING: "+Qn(...e);Wn.warn(t)},ri=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},si=function(e,t){if(e===t)return 0;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return-1;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return 1;{const n=fi(e),i=fi(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},oi=function(e,t){return e===t?0:e<t?-1:1},ai=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Y(t))},ci=function(e){if("object"!=typeof e||null===e)return Y(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Y(t[i]),n+=":",n+=ci(e[t[i]]);return n+="}",n},li=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function ui(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const hi=function(e){v(!ri(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const c=a.join("");let l="";for(o=0;o<64;o+=8){let e=parseInt(c.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const di=new RegExp("^-?(0*)\\d{1,10}$"),fi=function(e){if(di.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},pi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw ii("Exception was thrown by user callback.",t),e}),Math.floor(0))}},gi=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
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
 */
class mi{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){ii(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
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
 */class yi{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Zn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ii(e)}}class _i{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_i.OWNER="owner";
/**
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
 */
const vi=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
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
 */
class wi{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=zn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&zn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bi(e,t,n){let i;if(v("string"==typeof t,"typeof type must == string"),v("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return ui(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
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
 */class Ei{constructor(){this.counters_={}}incrementCounter(e,t=1){ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return k(this.counters_)}}
/**
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
 */const Ii={},Ti={};function Ci(e){const t=e.toString();return Ii[t]||(Ii[t]=new Ei),Ii[t]}
/**
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
 */
class Si{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&pi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
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
 */class ki{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ei(e),this.stats_=Ci(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),bi(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Si(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(q()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ai(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&vi.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ki.forceAllow_=!0}static forceDisallow(){ki.forceDisallow_=!0}static isAvailable(){return!q()&&(!!ki.forceAllow_||!(ki.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=T(t),i=li(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(q())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Y(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ai{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,q())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Kn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ai.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){Zn("frame writing exception"),e.stack&&Zn(e.stack),Zn(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Zn("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){q()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Zn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
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
 */let Ri=null;"undefined"!=typeof MozWebSocket?Ri=MozWebSocket:"undefined"!=typeof WebSocket&&(Ri=WebSocket);class Ni{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ei(this.connId),this.stats_=Ci(t),this.connURL=Ni.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={v:"5"};return!q()&&"undefined"!=typeof location&&location.hostname&&vi.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),r&&(s.p=r),bi(e,"websocket",s)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,zn.set("previous_websocket_failure",!0);try{let t;if(q()){const n=this.nodeAdmin?"AdminNode":"Node";t={headers:{"User-Agent":`Firebase/5/${Bn}/${e.platform}/${n}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(t.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(t.headers["X-Firebase-AppCheck"]=this.appCheckToken);const i={},r=0===this.connURL.indexOf("wss://")?i.HTTPS_PROXY||i.https_proxy:i.HTTP_PROXY||i.http_proxy;r&&(t.proxy={origin:r})}this.mySock=new Ri(this.connURL,[],t)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Ni.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Ri&&!Ni.forceDisallow_}static previouslyFailed(){return zn.isInMemoryStorage||!0===zn.get("previous_websocket_failure")}markConnectionHealthy(){zn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Q(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Y(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=li(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ni.responsesRequiredToBeHealthy=2,Ni.healthyTimeout=3e4;
/**
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
 */
class Oi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ki,Ni]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Ni&&Ni.isAvailable();let n=t&&!Ni.previouslyFailed();if(e.webSocketOnly&&(t||ii("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Ni];else{const e=this.transports_=[];for(const t of Oi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Oi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Oi.globalTransportInitialized_=!1;class Di{constructor(e,t,n,i,r,s,o,a,c,l){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=l,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ei("c:"+this.id+":"),this.transportManager_=new Oi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gi((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ai("t",e),n=ai("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ai("t",e),n=ai("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ai("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ti("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ti("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&ii("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),gi((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gi((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(zn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
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
 */class Pi{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
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
 */class Li{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){v(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
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
 */class xi extends Li{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||F()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new xi}getInitialEvent(e){return v("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
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
 */class Mi{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ui(){return new Mi("")}function Fi(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Bi(e){return e.pieces_.length-e.pieceNum_}function Vi(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Mi(e.pieces_,t)}function ji(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function qi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function $i(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Mi(t,0)}function zi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof Mi)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Mi(n,0)}function Hi(e){return e.pieceNum_>=e.pieces_.length}function Wi(e,t){const n=Fi(e),i=Fi(t);if(null===n)return t;if(n===i)return Wi(Vi(e),Vi(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ki(e,t){if(Bi(e)!==Bi(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Gi(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Bi(e)>Bi(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Qi{constructor(e,t){this.errorPrefix_=t,this.parts_=qi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=ge(this.parts_[e]);Yi(this)}}function Yi(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ji(e))}function Ji(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
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
 */class Xi extends Li{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Xi}getInitialEvent(e){return v("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
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
 */class Zi extends Pi{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Zi.nextPersistentConnectionId_++,this.log_=ei("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!q())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xi.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&xi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(Y(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new x,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Zi.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&ee(e,"w")){const n=te(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();ii(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||Z(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=X(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Y(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ti("Unrecognized action received from server: "+Y(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zi.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){v(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);s?Zn("getToken() completed but was canceled"):(Zn("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new Di(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{ii(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&ii(e),a())}}}interrupt(e){Zn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Zn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ne(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>ci(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Mi(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Zn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Zn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";q()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Bn.replace(/\./g,"-")]=1,F()?e["framework.cordova"]=1:V()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xi.getInstance().currentlyOnline();return ne(this.interruptReasons_)&&e}}Zi.nextPersistentConnectionId_=0,Zi.nextConnectionId_=0;
/**
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
 */
class er{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new er(e,t)}}
/**
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
 */class tr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new er("[MIN_NAME]",e),i=new er("[MIN_NAME]",t);return 0!==this.compare(n,i)}minPost(){return er.MIN}}
/**
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
 */let nr;class ir extends tr{static get __EMPTY_NODE(){return nr}static set __EMPTY_NODE(e){nr=e}compare(e,t){return si(e.name,t.name)}isDefinedOn(e){throw w("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return er.MIN}maxPost(){return new er("[MAX_NAME]",nr)}makePost(e,t){return v("string"==typeof e,"KeyIndex indexValue must always be a string."),new er(e,nr)}toString(){return".key"}}const rr=new ir;
/**
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
 */class sr{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class or{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:or.RED,this.left=null!=i?i:ar.EMPTY_NODE,this.right=null!=r?r:ar.EMPTY_NODE}copy(e,t,n,i,r){return new or(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ar.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ar.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,or.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,or.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}or.RED=!0,or.BLACK=!1;class ar{constructor(e,t=ar.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ar(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,or.BLACK,null,null))}remove(e){return new ar(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,or.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sr(this.root_,null,this.comparator_,!0,e)}}
/**
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
 */
function cr(e,t){return si(e.name,t.name)}function lr(e,t){return si(e,t)}
/**
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
 */let ur;ar.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new or(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const hr=function(e){return"number"==typeof e?"number:"+hi(e):"string:"+e},dr=function(e){if(e.isLeafNode()){const t=e.val();v("string"==typeof t||"number"==typeof t||"object"==typeof t&&ee(t,".sv"),"Priority must be a string or number.")}else v(e===ur||e.isEmpty(),"priority of unexpected type.");v(e===ur||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
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
 */
let fr,pr,gr;class mr{constructor(e,t=mr.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),dr(this.priorityNode_)}static set __childrenNodeConstructor(e){fr=e}static get __childrenNodeConstructor(){return fr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new mr(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:mr.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Hi(e)?this:".priority"===Fi(e)?this.priorityNode_:mr.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:mr.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Fi(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(v(".priority"!==n||1===Bi(e),".priority must be the last token in a path"),this.updateImmediateChild(n,mr.__childrenNodeConstructor.EMPTY_NODE.updateChild(Vi(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?hi(this.value_):this.value_,this.lazyHash_=Gn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===mr.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof mr.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=mr.VALUE_TYPE_ORDER.indexOf(t),r=mr.VALUE_TYPE_ORDER.indexOf(n);return v(i>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}mr.VALUE_TYPE_ORDER=["object","boolean","number","string"];const yr=new class extends tr{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?si(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return er.MIN}maxPost(){return new er("[MAX_NAME]",new mr("[PRIORITY-POST]",gr))}makePost(e,t){const n=pr(e);return new er(t,new mr("[PRIORITY-POST]",n))}toString(){return".priority"}},_r=Math.log(2);
/**
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
 */class vr{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/_r,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wr=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new or(a,o.node,or.BLACK,null,null);{const c=parseInt(s/2,10)+t,l=r(t,c),u=r(c+1,i);return o=e[c],a=n?n(o):o,new or(a,o.node,or.BLACK,l,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const l=r(s+1,a),u=e[s],h=n?n(u):u;c(new or(h,u.node,i,null,l))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,or.BLACK):(a(i,or.BLACK),a(i,or.RED))}return s}(new vr(e.length));return new ar(i||t,s)};
/**
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
 */let br;const Er={};class Ir{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return v(Er&&yr,"ChildrenNode.ts has not been loaded"),br=br||new Ir({".priority":Er},{".priority":yr}),br}get(e){const t=te(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ar?t:null}hasIndex(e){return ee(this.indexSet_,e.toString())}addIndex(e,t){v(e!==rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(er.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?wr(n,e.getCompare()):Er;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const l=Object.assign({},this.indexes_);return l[a]=s,new Ir(l,c)}addToIndexes(e,t){const n=ie(this.indexes_,((n,i)=>{const r=te(this.indexSet_,i);if(v(r,"Missing index implementation for "+i),n===Er){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(er.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),wr(n,r.getCompare())}return Er}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new er(e.name,i))),r.insert(e,e.node)}}));return new Ir(n,this.indexSet_)}removeFromIndexes(e,t){const n=ie(this.indexes_,(n=>{if(n===Er)return n;{const i=t.get(e.name);return i?n.remove(new er(e.name,i)):n}}));return new Ir(n,this.indexSet_)}}
/**
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
 */let Tr;class Cr{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&dr(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Tr||(Tr=new Cr(new ar(lr),null,Ir.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Tr}updatePriority(e){return this.children_.isEmpty()?this:new Cr(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Tr:t}}getChild(e){const t=Fi(e);return null===t?this:this.getImmediateChild(t).getChild(Vi(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new er(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Tr:this.priorityNode_;return new Cr(i,s,r)}}updateChild(e,t){const n=Fi(e);if(null===n)return t;{v(".priority"!==Fi(e)||1===Bi(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Vi(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(yr,((s,o)=>{t[s]=o.val(e),n++,r&&Cr.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+hr(this.getPriority().val())+":"),this.forEachChild(yr,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Gn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new er(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new er(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new er(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,er.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,er.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Sr?-1:0}withIndex(e){if(e===rr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Cr(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(yr),n=t.getIterator(yr);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===rr?null:this.indexMap_.get(e.toString())}}Cr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Sr=new class extends Cr{constructor(){super(new ar(lr),Cr.EMPTY_NODE,Ir.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Cr.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(er,{MIN:{value:new er("[MIN_NAME]",Cr.EMPTY_NODE)},MAX:{value:new er("[MAX_NAME]",Sr)}}),ir.__EMPTY_NODE=Cr.EMPTY_NODE,mr.__childrenNodeConstructor=Cr,ur=Sr,function(e){gr=e}(Sr);function kr(e,t=null){if(null===e)return Cr.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),v(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new mr(e,kr(t))}if(e instanceof Array){let n=Cr.EMPTY_NODE;return ui(e,((t,i)=>{if(ee(e,t)&&"."!==t.substring(0,1)){const e=kr(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(kr(t))}{const n=[];let i=!1;if(ui(e,((e,t)=>{if("."!==e.substring(0,1)){const r=kr(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new er(e,r)))}})),0===n.length)return Cr.EMPTY_NODE;const r=wr(n,cr,(e=>e.name),lr);if(i){const e=wr(n,yr.getCompare());return new Cr(r,kr(t),new Ir({".priority":e},{".priority":yr}))}return new Cr(r,kr(t),Ir.Default)}}!function(e){pr=e}(kr);
/**
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
 */
class Ar extends tr{constructor(e){super(),this.indexPath_=e,v(!Hi(e)&&".priority"!==Fi(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?si(e.name,t.name):r}makePost(e,t){const n=kr(e),i=Cr.EMPTY_NODE.updateChild(this.indexPath_,n);return new er(t,i)}maxPost(){const e=Cr.EMPTY_NODE.updateChild(this.indexPath_,Sr);return new er("[MAX_NAME]",e)}toString(){return qi(this.indexPath_,0).join("/")}}
/**
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
 */const Rr=new class extends tr{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?si(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return er.MIN}maxPost(){return er.MAX}makePost(e,t){const n=kr(e);return new er(t,n)}toString(){return".value"}};
/**
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
 */function Nr(e){return{type:"value",snapshotNode:e}}function Or(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Dr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Pr(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
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
 */
class Lr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=yr}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===yr}copy(){const e=new Lr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xr(e){const t={};if(e.isDefault())return t;let n;if(e.index_===yr?n="$priority":e.index_===Rr?n="$value":e.index_===rr?n="$key":(v(e.index_ instanceof Ar,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Y(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=Y(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+Y(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=Y(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+Y(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Mr(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==yr&&(t.i=e.index_.toString()),t}
/**
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
 */class Ur extends Pi{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=ei("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Ur.getListenId_(e,n),o={};this.listens_[s]=o;const a=xr(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),te(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ur.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xr(e._queryParams),n=e._path.toString(),i=new x;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+oe(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Q(o.responseText)}catch(e){ii("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&ii("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
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
 */class Fr{constructor(){this.rootNode_=Cr.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
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
 */function Br(){return{value:null,children:new Map}}function Vr(e,t,n){if(Hi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Fi(t);e.children.has(i)||e.children.set(i,Br());Vr(e.children.get(i),t=Vi(t),n)}}function jr(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
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
 */(e,((e,i)=>{jr(i,new Mi(t.toString()+"/"+e),n)}))}class qr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ui(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
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
 */class $r{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qr(e);const n=1e4+2e4*Math.random();gi(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ui(e,((e,i)=>{i>0&&ee(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),gi(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
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
 */var zr,Hr;function Wr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
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
 */(Hr=zr||(zr={}))[Hr.OVERWRITE=0]="OVERWRITE",Hr[Hr.MERGE=1]="MERGE",Hr[Hr.ACK_USER_WRITE=2]="ACK_USER_WRITE",Hr[Hr.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Kr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=zr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Hi(this.path)){if(null!=this.affectedTree.value)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Mi(e));return new Kr(Ui(),t,this.revert)}}return v(Fi(this.path)===e,"operationForChild called for unrelated child."),new Kr(Vi(this.path),this.affectedTree,this.revert)}}
/**
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
 */
/**
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
 */
class Gr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=zr.OVERWRITE}operationForChild(e){return Hi(this.path)?new Gr(this.source,Ui(),this.snap.getImmediateChild(e)):new Gr(this.source,Vi(this.path),this.snap)}}
/**
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
 */class Qr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=zr.MERGE}operationForChild(e){if(Hi(this.path)){const t=this.children.subtree(new Mi(e));return t.isEmpty()?null:t.value?new Gr(this.source,Ui(),t.value):new Qr(this.source,Ui(),t)}return v(Fi(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qr(this.source,Vi(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
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
 */class Yr{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Hi(e))return this.isFullyInitialized()&&!this.filtered_;const t=Fi(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
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
 */function Jr(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw w("Should only compare child_ events.");const i=new er(t.childName,t.snapshotNode),r=new er(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
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
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Xr(e,t){return{eventCache:e,serverCache:t}}function Zr(e,t,n,i){return Xr(new Yr(t,n,i),e.serverCache)}function es(e,t,n,i){return Xr(e.eventCache,new Yr(t,n,i))}function ts(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ns(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
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
 */let is;class rs{constructor(e,t=(()=>(is||(is=new ar(oi)),is))()){this.value=e,this.children=t}static fromObject(e){let t=new rs(null);return ui(e,((e,n)=>{t=t.set(new Mi(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ui(),value:this.value};if(Hi(e))return null;{const n=Fi(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Vi(e),t);if(null!=r){return{path:zi(new Mi(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Hi(e))return this;{const t=Fi(e),n=this.children.get(t);return null!==n?n.subtree(Vi(e)):new rs(null)}}set(e,t){if(Hi(e))return new rs(t,this.children);{const n=Fi(e),i=(this.children.get(n)||new rs(null)).set(Vi(e),t),r=this.children.insert(n,i);return new rs(this.value,r)}}remove(e){if(Hi(e))return this.children.isEmpty()?new rs(null):new rs(null,this.children);{const t=Fi(e),n=this.children.get(t);if(n){const i=n.remove(Vi(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new rs(null):new rs(this.value,r)}return this}}get(e){if(Hi(e))return this.value;{const t=Fi(e),n=this.children.get(t);return n?n.get(Vi(e)):null}}setTree(e,t){if(Hi(e))return t;{const n=Fi(e),i=(this.children.get(n)||new rs(null)).setTree(Vi(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new rs(this.value,r)}}fold(e){return this.fold_(Ui(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(zi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ui(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Hi(e))return null;{const i=Fi(e),r=this.children.get(i);return r?r.findOnPath_(Vi(e),zi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ui(),t)}foreachOnPath_(e,t,n){if(Hi(e))return this;{this.value&&n(t,this.value);const i=Fi(e),r=this.children.get(i);return r?r.foreachOnPath_(Vi(e),zi(t,i),n):new rs(null)}}foreach(e){this.foreach_(Ui(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(zi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
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
 */class ss{constructor(e){this.writeTree_=e}static empty(){return new ss(new rs(null))}}function os(e,t,n){if(Hi(t))return new ss(new rs(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=Wi(r,t);return s=s.updateChild(o,n),new ss(e.writeTree_.set(r,s))}{const i=new rs(n),r=e.writeTree_.setTree(t,i);return new ss(r)}}}function as(e,t,n){let i=e;return ui(n,((e,n)=>{i=os(i,zi(t,e),n)})),i}function cs(e,t){if(Hi(t))return ss.empty();{const n=e.writeTree_.setTree(t,new rs(null));return new ss(n)}}function ls(e,t){return null!=us(e,t)}function us(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Wi(n.path,t)):null}function hs(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(yr,((e,n)=>{t.push(new er(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new er(e,n.value))})),t}function ds(e,t){if(Hi(t))return e;{const n=us(e,t);return new ss(null!=n?new rs(n):e.writeTree_.subtree(t))}}function fs(e){return e.writeTree_.isEmpty()}function ps(e,t){return gs(Ui(),e.writeTree_,t)}function gs(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(v(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=gs(zi(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(zi(e,".priority"),i)),n}}
/**
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
 */function ms(e,t){return Rs(t,e)}function ys(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));v(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&_s(t,i.path)?r=!1:Gi(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=ws(e.allWrites,vs,Ui()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=cs(e.visibleWrites,i.path);else{ui(i.children,(t=>{e.visibleWrites=cs(e.visibleWrites,zi(i.path,t))}))}return!0}return!1}function _s(e,t){if(e.snap)return Gi(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Gi(zi(e.path,n),t))return!0;return!1}function vs(e){return e.visible}function ws(e,t,n){let i=ss.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Gi(n,e)?(t=Wi(n,e),i=os(i,t,s.snap)):Gi(e,n)&&(t=Wi(e,n),i=os(i,Ui(),s.snap.getChild(t)));else{if(!s.children)throw w("WriteRecord should have .snap or .children");if(Gi(n,e))t=Wi(n,e),i=as(i,t,s.children);else if(Gi(e,n))if(t=Wi(e,n),Hi(t))i=as(i,Ui(),s.children);else{const e=te(s.children,Fi(t));if(e){const n=e.getChild(Vi(t));i=os(i,Ui(),n)}}}}}return i}function bs(e,t,n,i,r){if(i||r){const s=ds(e.visibleWrites,t);if(!r&&fs(s))return n;if(r||null!=n||ls(s,Ui())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Gi(e.path,t)||Gi(t,e.path))};return ps(ws(e.allWrites,s,t),n||Cr.EMPTY_NODE)}return null}{const i=us(e.visibleWrites,t);if(null!=i)return i;{const i=ds(e.visibleWrites,t);if(fs(i))return n;if(null!=n||ls(i,Ui())){return ps(i,n||Cr.EMPTY_NODE)}return null}}}function Es(e,t,n,i){return bs(e.writeTree,e.treePath,t,n,i)}function Is(e,t){return function(e,t,n){let i=Cr.EMPTY_NODE;const r=us(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(yr,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=ds(e.visibleWrites,t);return n.forEachChild(yr,((e,t)=>{const n=ps(ds(r,new Mi(e)),t);i=i.updateImmediateChild(e,n)})),hs(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return hs(ds(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Ts(e,t,n,i){return function(e,t,n,i,r){v(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=zi(t,n);if(ls(e.visibleWrites,s))return null;{const t=ds(e.visibleWrites,s);return fs(t)?r.getChild(n):ps(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Cs(e,t){return function(e,t){return us(e.visibleWrites,t)}(e.writeTree,zi(e.treePath,t))}function Ss(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=ds(e.visibleWrites,t),l=us(c,Ui());if(null!=l)a=l;else{if(null==n)return[];a=ps(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function ks(e,t,n){return function(e,t,n,i){const r=zi(t,n),s=us(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return ps(ds(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function As(e,t){return Rs(zi(e.treePath,t),e.writeTree)}function Rs(e,t){return{treePath:e,writeTree:t}}
/**
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
 */class Ns{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;v("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),v(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Pr(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Dr(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Or(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw w("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Pr(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
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
 */const Os=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Ds{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ks(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ns(this.viewCache_),r=Ss(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
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
 */function Ps(e,t,n,i,r){const s=new Ns;let o,a;if(n.type===zr.OVERWRITE){const c=n;c.source.fromUser?o=Ms(e,t,c.path,c.snap,i,r,s):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Hi(c.path),o=xs(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===zr.MERGE){const c=n;c.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const l=zi(n,i);Us(t,Fi(l))&&(a=Ms(e,a,l,c,r,s,o))})),i.foreach(((i,c)=>{const l=zi(n,i);Us(t,Fi(l))||(a=Ms(e,a,l,c,r,s,o))})),a}(e,t,c.path,c.children,i,r,s):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=Bs(e,t,c.path,c.children,i,r,a,s))}else if(n.type===zr.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=Cs(i,n))return t;{const a=new Ds(i,t,r),c=t.eventCache.getNode();let l;if(Hi(n)||".priority"===Fi(n)){let n;if(t.serverCache.isFullyInitialized())n=Es(i,ns(t));else{const e=t.serverCache.getNode();v(e instanceof Cr,"serverChildren would be complete if leaf node"),n=Is(i,e)}l=e.filter.updateFullNode(c,n,s)}else{const r=Fi(n);let u=ks(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=c.getImmediateChild(r)),l=null!=u?e.filter.updateChild(c,r,u,Vi(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,Cr.EMPTY_NODE,Vi(n),a,s):c,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Es(i,ns(t)),o.isLeafNode()&&(l=e.filter.updateFullNode(l,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Cs(i,Ui()),Zr(t,l,o,e.filter.filtersNodes())}}
/**
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
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=Cs(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Hi(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return xs(e,t,n,c.getNode().getChild(n),r,s,a,o);if(Hi(n)){let i=new rs(null);return c.getNode().forEachChild(rr,((e,t)=>{i=i.set(new Mi(e),t)})),Bs(e,t,n,i,r,s,a,o)}return t}{let l=new rs(null);return i.foreach(((e,t)=>{const i=zi(n,e);c.isCompleteForPath(i)&&(l=l.set(e,c.getNode().getChild(i)))})),Bs(e,t,n,l,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==zr.LISTEN_COMPLETE)throw w("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=es(t,s.getNode(),s.isFullyInitialized()||Hi(n),s.isFiltered());return Ls(e,o,n,i,Os,r)}(e,t,n.path,i,s)}const c=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=ts(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Nr(ts(t)))}}(t,o,c),{viewCache:o,changes:c}}function Ls(e,t,n,i,r,s){const o=t.eventCache;if(null!=Cs(i,n))return t;{let a,c;if(Hi(n))if(v(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ns(t),r=Is(i,n instanceof Cr?n:Cr.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Es(i,ns(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const l=Fi(n);if(".priority"===l){v(1===Bi(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=Ts(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=Vi(n);let h;if(o.isCompleteForChild(l)){c=t.serverCache.getNode();const e=Ts(i,n,o.getNode(),c);h=null!=e?o.getNode().getImmediateChild(l).updateChild(u,e):o.getNode().getImmediateChild(l)}else h=ks(i,l,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),l,h,u,r,s):o.getNode()}}return Zr(t,a,o.isFullyInitialized()||Hi(n),e.filter.filtersNodes())}}function xs(e,t,n,i,r,s,o,a){const c=t.serverCache;let l;const u=o?e.filter:e.filter.getIndexedFilter();if(Hi(n))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);l=u.updateFullNode(c.getNode(),e,null)}else{const e=Fi(n);if(!c.isCompleteForPath(n)&&Bi(n)>1)return t;const r=Vi(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);l=".priority"===e?u.updatePriority(c.getNode(),s):u.updateChild(c.getNode(),e,s,r,Os,null)}const h=es(t,l,c.isFullyInitialized()||Hi(n),u.filtersNodes());return Ls(e,h,n,r,new Ds(r,h,s),a)}function Ms(e,t,n,i,r,s,o){const a=t.eventCache;let c,l;const u=new Ds(r,t,s);if(Hi(n))l=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Zr(t,l,!0,e.filter.filtersNodes());else{const r=Fi(n);if(".priority"===r)l=e.filter.updatePriority(t.eventCache.getNode(),i),c=Zr(t,l,a.isFullyInitialized(),a.isFiltered());else{const s=Vi(n),l=a.getNode().getImmediateChild(r);let h;if(Hi(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===ji(s)&&e.getChild($i(s)).isEmpty()?e:e.updateChild(s,i):Cr.EMPTY_NODE}if(l.equals(h))c=t;else{c=Zr(t,e.filter.updateChild(a.getNode(),r,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function Us(e,t){return e.eventCache.isCompleteForChild(t)}function Fs(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Bs(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,l=t;c=Hi(n)?i:new rs(null).setTree(n,i);const u=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const c=Fs(0,t.serverCache.getNode().getImmediateChild(n),i);l=xs(e,l,new Mi(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!u.hasChild(n)&&!c){const c=Fs(0,t.serverCache.getNode().getImmediateChild(n),i);l=xs(e,l,new Mi(n),c,r,s,o,a)}})),l}function Vs(e,t){const n=ns(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Hi(t)&&!n.getImmediateChild(Fi(t)).isEmpty())?n.getChild(t):null}function js(e,t,n,i){t.type===zr.MERGE&&null!==t.source.queryId&&(v(ns(e.viewCache_),"We should always have a full cache before handling merges"),v(ts(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Ps(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,v(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),v(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),v(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,qs(e,s.changes,s.viewCache.eventCache.getNode(),null)}function qs(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;
/**
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
 */"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Jr(e,r,"child_removed",t,i,n),Jr(e,r,"child_added",t,i,n),Jr(e,r,"child_moved",s,i,n),Jr(e,r,"child_changed",t,i,n),Jr(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
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
 */let $s,zs;function Hs(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return v(null!=s,"SyncTree gave us an op for an invalid query."),js(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(js(s,t,n,i));return r}}function Ws(e,t){let n=null;for(const i of e.views.values())n=n||Vs(i,t);return n}class Ks{constructor(e){this.listenProvider_=e,this.syncPointTree_=new rs(null),this.pendingWriteTree_={visibleWrites:ss.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gs(e,t,n,i,r){return function(e,t,n,i,r){v(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=os(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?Zs(e,new Gr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Qs(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ys(e.pendingWriteTree_,t)){let t=new rs(null);return null!=i.snap?t=t.set(Ui(),!0):ui(i.children,(e=>{t=t.set(new Mi(e),!0)})),Zs(e,new Kr(i.path,t,n))}return[]}function Ys(e,t,n){return Zs(e,new Gr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Js(e,t,n,i){const r=no(e,i);if(null!=r){const i=io(r),s=i.path,o=i.queryId,a=Wi(s,t);return ro(e,s,new Gr(Wr(o),a,n))}return[]}function Xs(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Ws(n,Wi(e,t));if(i)return i}));return bs(i,t,r,n,!0)}function Zs(e,t){return eo(t,e.syncPointTree_,null,ms(e.pendingWriteTree_,Ui()))}function eo(e,t,n,i){if(Hi(e.path))return to(e,t,n,i);{const r=t.get(Ui());null==n&&null!=r&&(n=Ws(r,Ui()));let s=[];const o=Fi(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=As(i,o);s=s.concat(eo(a,c,e,t))}return r&&(s=s.concat(Hs(r,e,i,n))),s}}function to(e,t,n,i){const r=t.get(Ui());null==n&&null!=r&&(n=Ws(r,Ui()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=As(i,t),c=e.operationForChild(t);c&&(s=s.concat(to(c,r,o,a)))})),r&&(s=s.concat(Hs(r,e,i,n))),s}function no(e,t){return e.tagToQueryMap.get(t)}function io(e){const t=e.indexOf("$");return v(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Mi(e.substr(0,t))}}function ro(e,t,n){const i=e.syncPointTree_.get(t);v(i,"Missing sync point for query tag that we're tracking");return Hs(i,n,ms(e.pendingWriteTree_,t),null)}
/**
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
 */
class so{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new so(t)}node(){return this.node_}}class oo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=zi(this.path_,e);return new oo(this.syncTree_,t)}node(){return Xs(this.syncTree_,this.path_)}}const ao=function(e,t,n){return e&&"object"==typeof e?(v(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?co(e[".sv"],t,n):"object"==typeof e[".sv"]?lo(e[".sv"],t):void v(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},co=function(e,t,n){if("timestamp"===e)return n.timestamp;v(!1,"Unexpected server value: "+e)},lo=function(e,t,n){e.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&v(!1,"Unexpected increment value: "+i);const r=t.node();if(v(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},uo=function(e,t,n,i){return fo(t,new oo(n,e),i)},ho=function(e,t,n){return fo(e,new so(t),n)};function fo(e,t,n){const i=e.getPriority().val(),r=ao(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ao(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new mr(s,kr(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new mr(r))),i.forEachChild(yr,((e,i)=>{const r=fo(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
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
 */class po{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function go(e,t){let n=t instanceof Mi?t:new Mi(t),i=e,r=Fi(n);for(;null!==r;){const e=te(i.node.children,r)||{children:{},childCount:0};i=new po(r,i,e),n=Vi(n),r=Fi(n)}return i}function mo(e){return e.node.value}function yo(e,t){e.node.value=t,Eo(e)}function _o(e){return e.node.childCount>0}function vo(e,t){ui(e.node.children,((n,i)=>{t(new po(n,e,i))}))}function wo(e,t,n,i){n&&!i&&t(e),vo(e,(e=>{wo(e,t,!0,i)})),n&&i&&t(e)}function bo(e){return new Mi(null===e.parent?e.name:bo(e.parent)+"/"+e.name)}function Eo(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===mo(e)&&!_o(e)}(n),r=ee(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Eo(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Eo(e))}
/**
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
 */(e.parent,e.name,e)}const Io=/[\[\].#$\/\u0000-\u001F\u007F]/,To=/[\[\].#$\u0000-\u001F\u007F]/,Co=function(e){return"string"==typeof e&&0!==e.length&&!Io.test(e)},So=function(e){return"string"==typeof e&&0!==e.length&&!To.test(e)},ko=function(e,t,n){const i=n instanceof Mi?new Qi(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Ji(i));if("function"==typeof t)throw new Error(e+"contains a function "+Ji(i)+" with contents = "+t.toString());if(ri(t))throw new Error(e+"contains "+t.toString()+" "+Ji(i));if("string"==typeof t&&t.length>10485760/3&&ge(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Ji(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(ui(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Co(t)))throw new Error(e+" contains an invalid key ("+t+") "+Ji(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ge(a),Yi(o),ko(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=ge(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Ji(i)+" in addition to actual children.")}},Ao=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Co(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),So(e)}(n))throw new Error(fe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
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
 */
class Ro{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function No(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ki(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Oo(e,t,n){No(e,n),Do(e,(e=>Gi(e,t)||Gi(t,e)))}function Do(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Po(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Po(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Yn&&Zn("event: "+n.toString()),pi(i)}}}
/**
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
 */class Lo{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ro,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Br(),this.transactionQueueTree_=new po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function xo(e,t,n){if(e.stats_=Ci(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ur(e.repoInfo_,((t,n,i,r)=>{Fo(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Bo(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Y(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Zi(e.repoInfo_,t,((t,n,i,r)=>{Fo(e,t,n,i,r)}),(t=>{Bo(e,t)}),(t=>{!function(e,t){ui(t,((t,n)=>{Vo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ti[n]||(Ti[n]=t()),Ti[n]}(e.repoInfo_,(()=>new $r(e.stats_,e.server_))),e.infoData_=new Fr,e.infoSyncTree_=new Ks({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ys(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Vo(e,"connected",!1),e.serverSyncTree_=new Ks({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Oo(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Mo(e){const t=e.infoData_.getNode(new Mi(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Uo(e){return(t=(t={timestamp:Mo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Fo(e,t,n,i,r){e.dataUpdateCount++;const s=new Mi(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=ie(n,(e=>kr(e)));o=function(e,t,n,i){const r=no(e,i);if(r){const i=io(r),s=i.path,o=i.queryId,a=Wi(s,t),c=rs.fromObject(n);return ro(e,s,new Qr(Wr(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=kr(n);o=Js(e.serverSyncTree_,s,t,r)}else if(i){const t=ie(n,(e=>kr(e)));o=function(e,t,n){const i=rs.fromObject(n);return Zs(e,new Qr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=kr(n);o=Ys(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Wo(e,s)),Oo(e.eventQueue_,a,o)}function Bo(e,t){Vo(e,"connected",t),!1===t&&function(e){$o(e,"onDisconnectEvents");const t=Uo(e),n=Br();jr(e.onDisconnect_,Ui(),((i,r)=>{const s=uo(i,r,e.serverSyncTree_,t);Vr(n,i,s)}));let i=[];jr(n,Ui(),((t,n)=>{i=i.concat(Ys(e.serverSyncTree_,t,n));const r=Jo(e,t);Wo(e,r)})),e.onDisconnect_=Br(),Oo(e.eventQueue_,Ui(),i)}(e)}function Vo(e,t,n){const i=new Mi("/.info/"+t),r=kr(n);e.infoData_.updateSnapshot(i,r);const s=Ys(e.infoSyncTree_,i,r);Oo(e.eventQueue_,i,s)}function jo(e){return e.nextWriteId_++}function qo(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}function $o(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Zn(n,...t)}function zo(e,t,n){return Xs(e.serverSyncTree_,t,n)||Cr.EMPTY_NODE}function Ho(e,t=e.transactionQueueTree_){if(t||Yo(e,t),mo(t)){const n=Go(e,t);v(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=zo(e,t,i);let s=r;const o=r.hash();for(let e=0;e<n.length;e++){const i=n[e];v(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const r=Wi(t,i.path);s=s.updateChild(r,i.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{$o(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Qs(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Yo(e,go(e.transactionQueueTree_,t)),Ho(e,e.transactionQueueTree_),Oo(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)pi(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{ii("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Wo(e,t)}}),o)}(e,bo(t),n)}else _o(t)&&vo(t,(t=>{Ho(e,t)}))}function Wo(e,t){const n=Ko(e,t),i=bo(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const c=t[a],l=Wi(n,c.path);let u,h=!1;if(v(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===c.status)h=!0,u=c.abortReason,r=r.concat(Qs(e.serverSyncTree_,c.currentWriteId,!0));else if(0===c.status)if(c.retryCount>=25)h=!0,u="maxretry",r=r.concat(Qs(e.serverSyncTree_,c.currentWriteId,!0));else{const n=zo(e,c.path,s);c.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){ko("transaction failed: Data returned ",i,c.path);let t=kr(i);"object"==typeof i&&null!=i&&ee(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=c.currentWriteId,a=Uo(e),l=ho(t,n,a);c.currentOutputSnapshotRaw=t,c.currentOutputSnapshotResolved=l,c.currentWriteId=jo(e),s.splice(s.indexOf(o),1),r=r.concat(Gs(e.serverSyncTree_,c.path,l,c.currentWriteId,c.applyLocally)),r=r.concat(Qs(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(Qs(e.serverSyncTree_,c.currentWriteId,!0))}Oo(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Yo(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)pi(i[e]);Ho(e,e.transactionQueueTree_)}(e,Go(e,n),i),i}function Ko(e,t){let n,i=e.transactionQueueTree_;for(n=Fi(t);null!==n&&void 0===mo(i);)i=go(i,n),n=Fi(t=Vi(t));return i}function Go(e,t){const n=[];return Qo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Qo(e,t,n){const i=mo(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);vo(t,(t=>{Qo(e,t,n)}))}function Yo(e,t){const n=mo(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,yo(t,n.length>0?n:void 0)}vo(t,(t=>{Yo(e,t)}))}function Jo(e,t){const n=bo(Ko(e,t)),i=go(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Xo(e,t)})),Xo(e,i),wo(i,(t=>{Xo(e,t)})),n}function Xo(e,t){const n=mo(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(v(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(v(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Qs(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?yo(t,void 0):n.length=s+1,Oo(e.eventQueue_,bo(t),r);for(let e=0;e<i.length;e++)pi(i[e])}}
/**
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
 */const Zo=function(e,t){const n=ea(e),i=n.namespace;"firebase.com"===n.domain&&ni(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ni("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&ii("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new wi(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new Mi(n.pathString)}},ea=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let l=e.indexOf("//");l>=0&&(a=e.substring(0,l-1),e=e.substring(l+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ii(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));l=t.indexOf(":"),l>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(l+1),10)):l=t.length;const f=t.slice(0,l);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};!function(){let e=0;const t=[]}();
/**
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
 */
class ta{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Hi(this._path)?null:ji(this._path)}get ref(){return new na(this._repo,this._path)}get _queryIdentifier(){const e=Mr(this._queryParams),t=ci(e);return"{}"===t?"default":t}get _queryObject(){return Mr(this._queryParams)}isEqual(e){if(!((e=ye(e))instanceof ta))return!1;const t=this._repo===e._repo,n=Ki(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class na extends ta{constructor(e,t){super(e,t,new Lr,!1)}get parent(){const e=$i(this._path);return null===e?null:new na(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}!function(e){v(!$s,"__referenceConstructor has already been defined"),$s=e}(na),function(e){v(!zs,"__referenceConstructor has already been defined"),zs=e}(na);
/**
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
 */
const ia={};let ra=!1;function sa(t,n,i,r,s){let o=r||t.options.databaseURL;void 0===o&&(t.options.projectId||ni("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Zn("Using default host for project ",t.options.projectId),o=`${t.options.projectId}-default-rtdb.firebaseio.com`);let a,c,l=Zo(o,s),u=l.repoInfo;void 0!==e&&e.env&&(c=e.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(a=!0,o=`http://${c}?ns=${u.namespace}`,l=Zo(o,s),u=l.repoInfo):a=!l.repoInfo.secure;const h=s&&a?new _i(_i.OWNER):new yi(t.name,t.options,n);Ao("Invalid Firebase Database URL",l),Hi(l.path)||ni("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=ia[t.name];r||(r={},ia[t.name]=r);let s=r[e.toURLString()];s&&ni("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Lo(e,ra,n,i),r[e.toURLString()]=s,s}(u,t,h,new mi(t.name,i));return new oa(d,t)}class oa{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(xo(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new na(this._repo,Ui())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ia[t];n&&n[e.key]===e||ni(`Database ${t}(${e.repoInfo_}) has already been deleted.`),qo(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ni("Cannot call "+e+" on a deleted database.")}}Zi.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Zi.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
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
 */
function(e){Vn("10.6.0"),Xe(new _e("database",((e,{instanceIdentifier:t})=>sa(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),rt("@firebase/database","1.0.1",e),rt("@firebase/database","1.0.1","esm2017")}
/**
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
 */();var aa,ca="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},la={},ua=ua||{},ha=ca||self;function da(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function fa(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var pa="closure_uid_"+(1e9*Math.random()>>>0),ga=0;function ma(e,t,n){return e.call.apply(e.bind,arguments)}function ya(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _a(e,t,n){return(_a=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:ya).apply(null,arguments)}function va(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function wa(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function ba(){this.s=this.s,this.o=this.o}ba.prototype.s=!1,ba.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,pa)&&e[pa]||(e[pa]=++ga))},ba.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ea=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ia(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function Ta(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(da(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let r=0;r<i;r++)e[t+r]=n[r]}else e.push(n)}}function Ca(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ca.prototype.h=function(){this.defaultPrevented=!0};var Sa=function(){if(!ha.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{ha.addEventListener("test",(()=>{}),t),ha.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function ka(e){return/^[\s\xa0]*$/.test(e)}function Aa(){var e=ha.navigator;return e&&(e=e.userAgent)?e:""}function Ra(e){return-1!=Aa().indexOf(e)}function Na(e){return Na[" "](e),e}Na[" "]=function(){};var Oa,Da,Pa,La=Ra("Opera"),xa=Ra("Trident")||Ra("MSIE"),Ma=Ra("Edge"),Ua=Ma||xa,Fa=Ra("Gecko")&&!(-1!=Aa().toLowerCase().indexOf("webkit")&&!Ra("Edge"))&&!(Ra("Trident")||Ra("MSIE"))&&!Ra("Edge"),Ba=-1!=Aa().toLowerCase().indexOf("webkit")&&!Ra("Edge");function Va(){var e=ha.document;return e?e.documentMode:void 0}e:{var ja="",qa=(Da=Aa(),Fa?/rv:([^\);]+)(\)|;)/.exec(Da):Ma?/Edge\/([\d\.]+)/.exec(Da):xa?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Da):Ba?/WebKit\/(\S+)/.exec(Da):La?/(?:Version)[ \/]?(\S+)/.exec(Da):void 0);if(qa&&(ja=qa?qa[1]:""),xa){var $a=Va();if(null!=$a&&$a>parseFloat(ja)){Oa=String($a);break e}}Oa=ja}if(ha.document&&xa){var za=Va();Pa=za||(parseInt(Oa,10)||void 0)}else Pa=void 0;var Ha=Pa;function Wa(e,t){if(Ca.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Fa){e:{try{Na(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ka[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wa.$.h.call(this)}}wa(Wa,Ca);var Ka={2:"touch",3:"pen",4:"mouse"};Wa.prototype.h=function(){Wa.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ga="closure_listenable_"+(1e6*Math.random()|0),Qa=0;function Ya(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=r,this.key=++Qa,this.fa=this.ia=!1}function Ja(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Xa(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Za(e){const t={};for(const n in e)t[n]=e[n];return t}const ec="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tc(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<ec.length;t++)n=ec[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function nc(e){this.src=e,this.g={},this.h=0}function ic(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=Ea(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ja(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function rc(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==i)return r}return-1}nc.prototype.add=function(e,t,n,i,r){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=rc(e,t,i,r);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Ya(t,this.src,s,!!i,r)).ia=n,e.push(t)),t};var sc="closure_lm_"+(1e6*Math.random()|0),oc={};function ac(e,t,n,i,r){if(i&&i.once)return lc(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)ac(e,t[s],n,i,r);return null}return n=mc(n),e&&e[Ga]?e.O(t,n,fa(i)?!!i.capture:!!i,r):cc(e,t,n,!1,i,r)}function cc(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=fa(r)?!!r.capture:!!r,a=pc(e);if(a||(e[sc]=a=new nc(e)),(n=a.add(t,n,i,o,s)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=fc;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)Sa||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(dc(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function lc(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)lc(e,t[s],n,i,r);return null}return n=mc(n),e&&e[Ga]?e.P(t,n,fa(i)?!!i.capture:!!i,r):cc(e,t,n,!0,i,r)}function uc(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)uc(e,t[s],n,i,r);else i=fa(i)?!!i.capture:!!i,n=mc(n),e&&e[Ga]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=rc(s=e.g[t],n,i,r))&&(Ja(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=pc(e))&&(t=e.g[t.toString()],e=-1,t&&(e=rc(t,n,i,r)),(n=-1<e?t[e]:null)&&hc(n))}function hc(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Ga])ic(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(dc(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=pc(t))?(ic(n,e),0==n.h&&(n.src=null,t[sc]=null)):Ja(e)}}}function dc(e){return e in oc?oc[e]:oc[e]="on"+e}function fc(e,t){if(e.fa)e=!0;else{t=new Wa(t,this);var n=e.listener,i=e.la||e.src;e.ia&&hc(e),e=n.call(i,t)}return e}function pc(e){return(e=e[sc])instanceof nc?e:null}var gc="__closure_events_fn_"+(1e9*Math.random()>>>0);function mc(e){return"function"==typeof e?e:(e[gc]||(e[gc]=function(t){return e.handleEvent(t)}),e[gc])}function yc(){ba.call(this),this.i=new nc(this),this.S=this,this.J=null}function _c(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new Ca(t,e);else if(t instanceof Ca)t.target=t.target||e;else{var r=t;tc(t=new Ca(i,e),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=vc(o,i,!0,t)&&r}if(r=vc(o=t.g=e,i,!0,t)&&r,r=vc(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)r=vc(o=t.g=n[s],i,!1,t)&&r}function vc(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ic(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}wa(yc,ba),yc.prototype[Ga]=!0,yc.prototype.removeEventListener=function(e,t,n,i){uc(this,e,t,n,i)},yc.prototype.N=function(){if(yc.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Ja(n[i]);delete t.g[e],t.h--}}this.J=null},yc.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},yc.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var wc=ha.JSON.stringify;function bc(){var e=Ac;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ec=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Ic),(e=>e.reset()));class Ic{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Tc(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Cc(e){ha.setTimeout((()=>{throw e}),0)}let Sc,kc=!1,Ac=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ec.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},Rc=()=>{const e=ha.Promise.resolve(void 0);Sc=()=>{e.then(Nc)}};var Nc=()=>{for(var e;e=bc();){try{e.h.call(e.g)}catch(e){Cc(e)}var t=Ec;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}kc=!1};function Oc(e,t){yc.call(this),this.h=e||1,this.g=t||ha,this.j=_a(this.qb,this),this.l=Date.now()}function Dc(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function Pc(e,t,n){if("function"==typeof e)n&&(e=_a(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_a(e.handleEvent,e)}return 2147483647<Number(t)?-1:ha.setTimeout(e,t||0)}function Lc(e){e.g=Pc((()=>{e.g=null,e.i&&(e.i=!1,Lc(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}wa(Oc,yc),(aa=Oc.prototype).ga=!1,aa.T=null,aa.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_c(this,"tick"),this.ga&&(Dc(this),this.start()))}},aa.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},aa.N=function(){Oc.$.N.call(this),Dc(this),delete this.g};class xc extends ba{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Lc(this)}N(){super.N(),this.g&&(ha.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mc(e){ba.call(this),this.h=e,this.g={}}wa(Mc,ba);var Uc=[];function Fc(e,t,n,i){Array.isArray(n)||(n&&(Uc[0]=n.toString()),n=Uc);for(var r=0;r<n.length;r++){var s=ac(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Bc(e){Xa(e.g,(function(e,t){this.g.hasOwnProperty(t)&&hc(e)}),e),e.g={}}function Vc(){this.g=!0}function jc(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return wc(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}Mc.prototype.N=function(){Mc.$.N.call(this),Bc(this)},Mc.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Vc.prototype.Ea=function(){this.g=!1},Vc.prototype.info=function(){};var qc={},$c=null;function zc(){return $c=$c||new yc}function Hc(e){Ca.call(this,qc.Ta,e)}function Wc(e){const t=zc();_c(t,new Hc(t))}function Kc(e,t){Ca.call(this,qc.STAT_EVENT,e),this.stat=t}function Gc(e){const t=zc();_c(t,new Kc(t,e))}function Qc(e,t){Ca.call(this,qc.Ua,e),this.size=t}function Yc(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return ha.setTimeout((function(){e()}),t)}qc.Ta="serverreachability",wa(Hc,Ca),qc.STAT_EVENT="statevent",wa(Kc,Ca),qc.Ua="timingevent",wa(Qc,Ca);var Jc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Zc(){}function el(e){return e.h||(e.h=e.i())}function tl(){}Zc.prototype.h=null;var nl,il={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function rl(){Ca.call(this,"d")}function sl(){Ca.call(this,"c")}function ol(){}function al(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new Mc(this),this.P=ll,e=Ua?125:void 0,this.V=new Oc(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new cl}function cl(){this.i=null,this.g="",this.h=!1}wa(rl,Ca),wa(sl,Ca),wa(ol,Zc),ol.prototype.g=function(){return new XMLHttpRequest},ol.prototype.i=function(){return{}},nl=new ol;var ll=45e3,ul={},hl={};function dl(e,t,n){e.L=1,e.v=Ol(Sl(t)),e.s=n,e.S=!0,fl(e,null)}function fl(e,t){e.G=Date.now(),yl(e),e.A=Sl(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),zl(n.i,"t",i),e.C=0,n=e.l.J,e.h=new cl,e.g=qu(e.l,n?t:null,!e.s),0<e.O&&(e.M=new xc(_a(e.Pa,e,e.g),e.O)),Fc(e.U,e.g,"readystatechange",e.nb),t=e.I?Za(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Wc(),function(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function pl(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function gl(e,t,n){let i,r=!0;for(;!e.J&&e.C<n.length;){if(i=ml(e,n),i==hl){4==t&&(e.o=4,Gc(14),r=!1),jc(e.j,e.m,null,"[Incomplete Response]");break}if(i==ul){e.o=4,Gc(15),jc(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}jc(e.j,e.m,i,null),El(e,i)}pl(e)&&i!=hl&&i!=ul&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Gc(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lu(t),t.M=!0,Gc(11))):(jc(e.j,e.m,n,"[Invalid Chunked Response]"),bl(e),wl(e))}function ml(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?hl:(n=Number(t.substring(n,i)),isNaN(n)?ul:(i+=1)+n>t.length?hl:(t=t.slice(i,i+n),e.C=i+n,t))}function yl(e){e.Y=Date.now()+e.P,_l(e,e.P)}function _l(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Yc(_a(e.lb,e),t)}function vl(e){e.B&&(ha.clearTimeout(e.B),e.B=null)}function wl(e){0==e.l.H||e.J||Uu(e.l,e)}function bl(e){vl(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Dc(e.V),Bc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function El(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Yl(n.i,e)))if(!e.K&&Yl(n.i,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;Mu(n),Su(n)}Pu(n),Gc(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Yc(_a(n.ib,n),6e3));if(1>=Ql(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else Bu(n,11)}else if((e.K||n.g==e)&&Mu(n),!ka(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.i;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Jl(s,s.h),s.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,Nl(i.I,i.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=ju(i,i.J?i.pa:null,i.Y),o.K){Xl(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(vl(a),yl(a)),i.g=o}else Du(i);0<n.j.length&&Au(n)}else"stop"!=l[0]&&"close"!=l[0]||Bu(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Bu(n,7):Cu(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}Wc()}catch(e){}}function Il(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(da(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(da(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(da(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}(aa=al.prototype).setTimeout=function(e){this.P=e},aa.nb=function(e){e=e.target;const t=this.M;t&&3==vu(e)?t.l():this.Pa(e)},aa.Pa=function(e){try{if(e==this.g)e:{const u=vu(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||Ua||this.g&&(this.h.h||this.g.ja()||wu(this.g)))){this.J||4!=u||7==t||Wc(),vl(this);var n=this.g.da();this.ca=n;t:if(pl(this)){var i=wu(this.g);e="";var r=i.length,s=4==vu(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bl(this),wl(this);var o="";break t}this.h.i=new ha.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ka(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Gc(12),bl(this),wl(this);break e}jc(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,n)}this.S?(gl(this,u,o),Ua&&this.i&&3==u&&(Fc(this.U,this.V,"tick",this.mb),this.V.start())):(jc(this.j,this.m,o,null),El(this,o)),4==u&&bl(this),this.i&&!this.J&&(4==u?Uu(this.l,this):(this.i=!1,yl(this)))}else(function(e){const t={};e=(e.g&&2<=vu(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<e.length;i++){if(ka(e[i]))continue;var n=Tc(e[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[r]||[];t[r]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Gc(12)):(this.o=0,Gc(13)),bl(this),wl(this)}}}catch(e){}},aa.mb=function(){if(this.g){var e=vu(this.g),t=this.g.ja();this.C<t.length&&(vl(this),gl(this,e,t),this.i&&4!=e&&yl(this))}},aa.cancel=function(){this.J=!0,bl(this)},aa.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(Wc(),Gc(17)),bl(this),this.o=2,wl(this)):_l(this,this.Y-e)};var Tl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cl(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Cl){this.h=e.h,kl(this,e.j),this.s=e.s,this.g=e.g,Al(this,e.m),this.l=e.l;var t=e.i,n=new Vl;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Rl(this,n),this.o=e.o}else e&&(t=String(e).match(Tl))?(this.h=!1,kl(this,t[1]||"",!0),this.s=Dl(t[2]||""),this.g=Dl(t[3]||"",!0),Al(this,t[4]),this.l=Dl(t[5]||"",!0),Rl(this,t[6]||"",!0),this.o=Dl(t[7]||"")):(this.h=!1,this.i=new Vl(null,this.h))}function Sl(e){return new Cl(e)}function kl(e,t,n){e.j=n?Dl(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Al(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Rl(e,t,n){t instanceof Vl?(e.i=t,function(e,t){t&&!e.j&&(jl(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(ql(this,t),zl(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=Pl(t,Fl)),e.i=new Vl(t,e.h))}function Nl(e,t,n){e.i.set(t,n)}function Ol(e){return Nl(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Dl(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Pl(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Ll),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ll(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Cl.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Pl(t,xl,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Pl(t,xl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Pl(n,"/"==n.charAt(0)?Ul:Ml,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Pl(n,Bl)),e.join("")};var xl=/[#\/\?@]/g,Ml=/[#\?:]/g,Ul=/[#\?]/g,Fl=/[#\?@]/g,Bl=/#/g;function Vl(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function jl(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function ql(e,t){jl(e),t=Hl(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function $l(e,t){return jl(e),t=Hl(e,t),e.g.has(t)}function zl(e,t,n){ql(e,t),0<n.length&&(e.i=null,e.g.set(Hl(e,t),Ia(n)),e.h+=n.length)}function Hl(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(aa=Vl.prototype).add=function(e,t){jl(this),this.i=null,e=Hl(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},aa.forEach=function(e,t){jl(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},aa.ta=function(){jl(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},aa.Z=function(e){jl(this);let t=[];if("string"==typeof e)$l(this,e)&&(t=t.concat(this.g.get(Hl(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},aa.set=function(e,t){return jl(this),this.i=null,$l(this,e=Hl(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},aa.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},aa.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};function Wl(e){this.l=e||Kl,ha.PerformanceNavigationTiming?e=0<(e=ha.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(ha.g&&ha.g.Ka&&ha.g.Ka()&&ha.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Kl=10;function Gl(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ql(e){return e.h?1:e.g?e.g.size:0}function Yl(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Jl(e,t){e.g?e.g.add(t):e.h=t}function Xl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Zl(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ia(e.i)}Wl.prototype.cancel=function(){if(this.i=Zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};function eu(){this.g=new class{stringify(e){return ha.JSON.stringify(e,void 0)}parse(e){return ha.JSON.parse(e,void 0)}}}function tu(e,t,n){const i=n||"";try{Il(e,(function(e,n){let r=e;fa(e)&&(r=wc(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function nu(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(e){}}function iu(e){this.l=e.ec||null,this.j=e.ob||!1}function ru(e,t){yc.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=su,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}wa(iu,Zc),iu.prototype.g=function(){return new ru(this.l,this.j)},iu.prototype.i=function(e){return function(){return e}}({}),wa(ru,yc);var su=0;function ou(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function au(e){e.readyState=4,e.l=null,e.j=null,e.A=null,cu(e)}function cu(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(aa=ru.prototype).open=function(e,t){if(this.readyState!=su)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,cu(this)},aa.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||ha).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},aa.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,au(this)),this.readyState=su},aa.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,cu(this)),this.g&&(this.readyState=3,cu(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==ha.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ou(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},aa.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?au(this):cu(this),3==this.readyState&&ou(this)}},aa.Za=function(e){this.g&&(this.response=this.responseText=e,au(this))},aa.Ya=function(e){this.g&&(this.response=e,au(this))},aa.ka=function(){this.g&&au(this)},aa.setRequestHeader=function(e,t){this.v.append(e,t)},aa.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},aa.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(ru.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var lu=ha.JSON.parse;function uu(e){yc.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=hu,this.L=this.M=!1}wa(uu,yc);var hu="",du=/^https?$/i,fu=["POST","PUT"];function pu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,gu(e),yu(e)}function gu(e){e.F||(e.F=!0,_c(e,"complete"),_c(e,"error"))}function mu(e){if(e.h&&void 0!==ua&&(!e.C[1]||4!=vu(e)||2!=e.da()))if(e.v&&4==vu(e))Pc(e.La,0,e);else if(_c(e,"readystatechange"),4==vu(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===o){var r=String(e.I).match(Tl)[1]||null;!r&&ha.self&&ha.self.location&&(r=ha.self.location.protocol.slice(0,-1)),i=!du.test(r?r.toLowerCase():"")}n=i}if(n)_c(e,"complete"),_c(e,"success");else{e.m=6;try{var s=2<vu(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.da()+"]",gu(e)}}finally{yu(e)}}}function yu(e,t){if(e.g){_u(e);const n=e.g,i=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||_c(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function _u(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(ha.clearTimeout(e.A),e.A=null)}function vu(e){return e.g?e.g.readyState:0}function wu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case hu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function bu(e){let t="";return Xa(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Eu(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=bu(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Nl(e,t,n))}function Iu(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Tu(e){this.Ga=0,this.j=[],this.l=new Vc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Iu("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Iu("baseRetryDelayMs",5e3,e),this.hb=Iu("retryDelaySeedMs",1e4,e),this.eb=Iu("forwardChannelMaxRetries",2,e),this.xa=Iu("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Wl(e&&e.concurrentRequestLimit),this.Ja=new eu,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Cu(e){if(ku(e),3==e.H){var t=e.W++,n=Sl(e.I);if(Nl(n,"SID",e.K),Nl(n,"RID",t),Nl(n,"TYPE","terminate"),Nu(e,n),(t=new al(e,e.l,t)).L=2,t.v=Ol(Sl(n)),n=!1,ha.navigator&&ha.navigator.sendBeacon)try{n=ha.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&ha.Image&&((new Image).src=t.v,n=!0),n||(t.g=qu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),yl(t)}Vu(e)}function Su(e){e.g&&(Lu(e),e.g.cancel(),e.g=null)}function ku(e){Su(e),e.u&&(ha.clearTimeout(e.u),e.u=null),Mu(e),e.i.cancel(),e.m&&("number"==typeof e.m&&ha.clearTimeout(e.m),e.m=null)}function Au(e){if(!Gl(e.i)&&!e.m){e.m=!0;var t=e.Na;Sc||Rc(),kc||(Sc(),kc=!0),Ac.add(t,e),e.C=0}}function Ru(e,t){var n;n=t?t.m:e.W++;const i=Sl(e.I);Nl(i,"SID",e.K),Nl(i,"RID",n),Nl(i,"AID",e.V),Nu(e,i),e.o&&e.s&&Eu(i,e.o,e.s),n=new al(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Ou(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Jl(e.i,n),dl(n,i,t)}function Nu(e,t){e.na&&Xa(e.na,(function(e,n){Nl(t,n,e)})),e.h&&Il({},(function(e,n){Nl(t,n,e)}))}function Ou(e,t,n){n=Math.min(e.j.length,n);var i=e.h?_a(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=t,0>n)t=Math.max(0,r[o].g-100),s=!1;else try{tu(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,i}function Du(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Sc||Rc(),kc||(Sc(),kc=!0),Ac.add(t,e),e.A=0}}function Pu(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Yc(_a(e.Ma,e),Fu(e,e.A)),e.A++,!0)}function Lu(e){null!=e.B&&(ha.clearTimeout(e.B),e.B=null)}function xu(e){e.g=new al(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Sl(e.wa);Nl(t,"RID","rpc"),Nl(t,"SID",e.K),Nl(t,"AID",e.V),Nl(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Nl(t,"TO",e.qa),Nl(t,"TYPE","xmlhttp"),Nu(e,t),e.o&&e.s&&Eu(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ol(Sl(t)),n.s=null,n.S=!0,fl(n,e)}function Mu(e){null!=e.v&&(ha.clearTimeout(e.v),e.v=null)}function Uu(e,t){var n=null;if(e.g==t){Mu(e),Lu(e),e.g=null;var i=2}else{if(!Yl(e.i,t))return;n=t.F,Xl(e.i,t),i=1}if(0!=e.H)if(t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;_c(i=zc(),new Qc(i,n)),Au(e)}else Du(e);else if(3==(r=t.o)||0==r&&0<t.ca||!(1==i&&function(e,t){return!(Ql(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Yc(_a(e.Na,e,t),Fu(e,e.C)),e.C++,0)))}(e,t)||2==i&&Pu(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:Bu(e,5);break;case 4:Bu(e,10);break;case 3:Bu(e,6);break;default:Bu(e,2)}}function Fu(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Bu(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var i=_a(e.pb,e);n||(n=new Cl("//www.google.com/images/cleardot.gif"),ha.location&&"http"==ha.location.protocol||kl(n,"https"),Ol(n)),function(e,t){const n=new Vc;if(ha.Image){const i=new Image;i.onload=va(nu,n,i,"TestLoadImage: loaded",!0,t),i.onerror=va(nu,n,i,"TestLoadImage: error",!1,t),i.onabort=va(nu,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=va(nu,n,i,"TestLoadImage: timeout",!1,t),ha.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Gc(2);e.H=0,e.h&&e.h.za(t),Vu(e),ku(e)}function Vu(e){if(e.H=0,e.ma=[],e.h){const t=Zl(e.i);0==t.length&&0==e.j.length||(Ta(e.ma,t),Ta(e.ma,e.j),e.i.i.length=0,Ia(e.j),e.j.length=0),e.h.ya()}}function ju(e,t,n){var i=n instanceof Cl?Sl(n):new Cl(n);if(""!=i.g)t&&(i.g=t+"."+i.g),Al(i,i.m);else{var r=ha.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new Cl(null);i&&kl(s,i),t&&(s.g=t),r&&Al(s,r),n&&(s.l=n),i=s}return n=e.F,t=e.Da,n&&t&&Nl(i,n,t),Nl(i,"VER",e.ra),Nu(e,i),i}function qu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new uu(new iu({ob:!0})):new uu(e.va)).Oa(e.J),t}function $u(){}function zu(){if(xa&&!(10<=Number(Ha)))throw Error("Environmental error: no available transport.")}function Hu(e,t){yc.call(this),this.g=new Tu(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ka(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ka(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Gu(this)}function Wu(e){rl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ku(){sl.call(this),this.status=1}function Gu(e){this.g=e}function Qu(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Yu(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)i[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var s=e.g[3],o=t+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=(n=(r=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^t&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(s^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(s^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(t^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+s&4294967295}function Ju(e,t){this.h=t;for(var n=[],i=!0,r=e.length-1;0<=r;r--){var s=0|e[r];i&&s==t||(n[r]=s,i=!1)}this.g=n}(aa=uu.prototype).Oa=function(e){this.M=e},aa.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?el(this.u):el(nl),this.g.onreadystatechange=_a(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void pu(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=ha.FormData&&e instanceof ha.FormData,!(0<=Ea(fu,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_u(this),0<this.B&&((this.L=function(e){return xa&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_a(this.ua,this)):this.A=Pc(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){pu(this,e)}},aa.ua=function(){void 0!==ua&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_c(this,"timeout"),this.abort(8))},aa.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,_c(this,"complete"),_c(this,"abort"),yu(this))},aa.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yu(this,!0)),uu.$.N.call(this)},aa.La=function(){this.s||(this.G||this.v||this.l?mu(this):this.kb())},aa.kb=function(){mu(this)},aa.isActive=function(){return!!this.g},aa.da=function(){try{return 2<vu(this)?this.g.status:-1}catch(e){return-1}},aa.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},aa.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),lu(t)}},aa.Ia=function(){return this.m},aa.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(aa=Tu.prototype).ra=8,aa.H=1,aa.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new al(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Za(s),tc(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Ou(this,r,t),Nl(n=Sl(this.I),"RID",e),Nl(n,"CVER",22),this.F&&Nl(n,"X-HTTP-Session-Id",this.F),Nu(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bu(s)))+"&"+t:this.o&&Eu(n,this.o,s)),Jl(this.i,r),this.bb&&Nl(n,"TYPE","init"),this.P?(Nl(n,"$req",t),Nl(n,"SID","null"),r.aa=!0,dl(r,n,null)):dl(r,n,t),this.H=2}}else 3==this.H&&(e?Ru(this,e):0==this.j.length||Gl(this.i)||Ru(this))},aa.Ma=function(){if(this.u=null,xu(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Yc(_a(this.jb,this),e)}},aa.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Gc(10),Su(this),xu(this))},aa.ib=function(){null!=this.v&&(this.v=null,Su(this),Pu(this),Gc(19))},aa.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Gc(2)):(this.l.info("Failed to ping google.com"),Gc(1))},aa.isActive=function(){return!!this.h&&this.h.isActive(this)},(aa=$u.prototype).Ba=function(){},aa.Aa=function(){},aa.za=function(){},aa.ya=function(){},aa.isActive=function(){return!0},aa.Va=function(){},zu.prototype.g=function(e,t){return new Hu(e,t)},wa(Hu,yc),Hu.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Gc(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=ju(e,null,e.Y),Au(e)},Hu.prototype.close=function(){Cu(this.g)},Hu.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=wc(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&Au(t)},Hu.prototype.N=function(){this.g.h=null,delete this.j,Cu(this.g),delete this.g,Hu.$.N.call(this)},wa(Wu,rl),wa(Ku,sl),wa(Gu,$u),Gu.prototype.Ba=function(){_c(this.g,"a")},Gu.prototype.Aa=function(e){_c(this.g,new Wu(e))},Gu.prototype.za=function(e){_c(this.g,new Ku)},Gu.prototype.ya=function(){_c(this.g,"b")},wa(Qu,(function(){this.blockSize=-1})),Qu.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Qu.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,r=this.h,s=0;s<t;){if(0==r)for(;s<=n;)Yu(this,e,s),s+=this.blockSize;if("string"==typeof e){for(;s<t;)if(i[r++]=e.charCodeAt(s++),r==this.blockSize){Yu(this,i),r=0;break}}else for(;s<t;)if(i[r++]=e[s++],r==this.blockSize){Yu(this,i),r=0;break}}this.h=r,this.i+=t},Qu.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var Xu={};function Zu(e){return-128<=e&&128>e?function(e,t){var n=Xu;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Ju([0|e],0>e?-1:0)})):new Ju([0|e],0>e?-1:0)}function eh(e){if(isNaN(e)||!isFinite(e))return nh;if(0>e)return ah(eh(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=th;return new Ju(t,0)}var th=4294967296,nh=Zu(0),ih=Zu(1),rh=Zu(16777216);function sh(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function oh(e){return-1==e.h}function ah(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Ju(n,~e.h).add(ih)}function ch(e,t){return e.add(ah(t))}function lh(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function uh(e,t){this.g=e,this.h=t}function hh(e,t){if(sh(t))throw Error("division by zero");if(sh(e))return new uh(nh,nh);if(oh(e))return t=hh(ah(e),t),new uh(ah(t.g),ah(t.h));if(oh(t))return t=hh(e,ah(t)),new uh(ah(t.g),t.h);if(30<e.g.length){if(oh(e)||oh(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ih,i=t;0>=i.X(e);)n=dh(n),i=dh(i);var r=fh(n,1),s=fh(i,1);for(i=fh(i,2),n=fh(n,2);!sh(i);){var o=s.add(i);0>=o.X(e)&&(r=r.add(n),s=o),i=fh(i,1),n=fh(n,1)}return t=ch(e,r.R(t)),new uh(r,t)}for(r=nh;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=eh(n)).R(t);oh(o)||0<o.X(e);)o=(s=eh(n-=i)).R(t);sh(s)&&(s=ih),r=r.add(s),e=ch(e,o)}return new uh(r,e)}function dh(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Ju(n,e.h)}function fh(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,r=[],s=0;s<i;s++)r[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new Ju(r,e.h)}(aa=Ju.prototype).ea=function(){if(oh(this))return-ah(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:th+i)*t,t*=th}return e},aa.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(sh(this))return"0";if(oh(this))return"-"+ah(this).toString(e);for(var t=eh(Math.pow(e,6)),n=this,i="";;){var r=hh(n,t).g,s=((0<(n=ch(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(sh(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},aa.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},aa.X=function(e){return oh(e=ch(this,e))?-1:sh(e)?0:1},aa.abs=function(){return oh(this)?ah(this):this},aa.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,r=0;r<=t;r++){var s=i+(65535&this.D(r))+(65535&e.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new Ju(n,-2147483648&n[n.length-1]?-1:0)},aa.R=function(e){if(sh(this)||sh(e))return nh;if(oh(this))return oh(e)?ah(this).R(ah(e)):ah(ah(this).R(e));if(oh(e))return ah(this.R(ah(e)));if(0>this.X(rh)&&0>e.X(rh))return eh(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<e.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=e.D(r)>>>16,c=65535&e.D(r);n[2*i+2*r]+=o*c,lh(n,2*i+2*r),n[2*i+2*r+1]+=s*c,lh(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,lh(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,lh(n,2*i+2*r+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Ju(n,0)},aa.gb=function(e){return hh(this,e).h},aa.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Ju(n,this.h&e.h)},aa.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Ju(n,this.h|e.h)},aa.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Ju(n,this.h^e.h)},zu.prototype.createWebChannel=zu.prototype.g,Hu.prototype.send=Hu.prototype.u,Hu.prototype.open=Hu.prototype.m,Hu.prototype.close=Hu.prototype.close,Jc.NO_ERROR=0,Jc.TIMEOUT=8,Jc.HTTP_ERROR=6,Xc.COMPLETE="complete",tl.EventType=il,il.OPEN="a",il.CLOSE="b",il.ERROR="c",il.MESSAGE="d",yc.prototype.listen=yc.prototype.O,uu.prototype.listenOnce=uu.prototype.P,uu.prototype.getLastError=uu.prototype.Sa,uu.prototype.getLastErrorCode=uu.prototype.Ia,uu.prototype.getStatus=uu.prototype.da,uu.prototype.getResponseJson=uu.prototype.Wa,uu.prototype.getResponseText=uu.prototype.ja,uu.prototype.send=uu.prototype.ha,uu.prototype.setWithCredentials=uu.prototype.Oa,Qu.prototype.digest=Qu.prototype.l,Qu.prototype.reset=Qu.prototype.reset,Qu.prototype.update=Qu.prototype.j,Ju.prototype.add=Ju.prototype.add,Ju.prototype.multiply=Ju.prototype.R,Ju.prototype.modulo=Ju.prototype.gb,Ju.prototype.compare=Ju.prototype.X,Ju.prototype.toNumber=Ju.prototype.ea,Ju.prototype.toString=Ju.prototype.toString,Ju.prototype.getBits=Ju.prototype.D,Ju.fromNumber=eh,Ju.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return ah(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=eh(Math.pow(n,8)),r=nh,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),n);8>o?(o=eh(Math.pow(n,o)),r=r.R(o).add(eh(a))):r=(r=r.R(i)).add(eh(a))}return r};var ph=la.createWebChannelTransport=function(){return new zu},gh=la.getStatEventTarget=function(){return zc()},mh=la.ErrorCode=Jc,yh=la.EventType=Xc,_h=la.Event=qc,vh=la.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wh=la.FetchXmlHttpFactory=iu,bh=la.WebChannel=tl,Eh=la.XhrIo=uu,Ih=la.Md5=Qu,Th=la.Integer=Ju;
/**
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
 */
class Ch{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ch.UNAUTHENTICATED=new Ch(null),Ch.GOOGLE_CREDENTIALS=new Ch("google-credentials-uid"),Ch.FIRST_PARTY=new Ch("first-party-uid"),Ch.MOCK_USER=new Ch("mock-user");
/**
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
 */
let Sh="10.5.2";
/**
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
 */const kh=new Ae("@firebase/firestore");function Ah(){return kh.logLevel}function Rh(e,...t){if(kh.logLevel<=Ee.DEBUG){const n=t.map(Dh);kh.debug(`Firestore (${Sh}): ${e}`,...n)}}function Nh(e,...t){if(kh.logLevel<=Ee.ERROR){const n=t.map(Dh);kh.error(`Firestore (${Sh}): ${e}`,...n)}}function Oh(e,...t){if(kh.logLevel<=Ee.WARN){const n=t.map(Dh);kh.warn(`Firestore (${Sh}): ${e}`,...n)}}function Dh(e){if("string"==typeof e)return e;try{
/**
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
 */return t=e,JSON.stringify(t)}catch(t){return e}var t}
/**
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
 */function Ph(e="Unexpected state"){const t=`FIRESTORE (${Sh}) INTERNAL ASSERTION FAILED: `+e;throw Nh(t),new Error(t)}function Lh(e,t){e||Ph()}function xh(e,t){return e}
/**
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
 */const Mh={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Uh extends W{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Fh{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
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
 */class Bh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ch.UNAUTHENTICATED)))}shutdown(){}}class jh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qh{constructor(e){this.t=e,this.currentUser=Ch.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new Fh;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Fh,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Rh("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Rh("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Fh)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Rh("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Lh("string"==typeof t.accessToken),new Bh(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Lh(null===e||"string"==typeof e),new Ch(e)}}class $h{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ch.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class zh{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new $h(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Ch.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Hh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const n=e=>{null!=e.error&&Rh("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Rh("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Rh("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?i(e):Rh("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Lh("string"==typeof e.token),this.R=e.token,new Hh(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
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
 */
function Kh(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
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
 */class Gh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Kh(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function Qh(e,t){return e<t?-1:e>t?1:0}function Yh(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
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
 */
class Jh{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Uh(Mh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Uh(Mh.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Uh(Mh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Uh(Mh.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Jh.fromMillis(Date.now())}static fromDate(e){return Jh.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Jh(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Qh(this.nanoseconds,e.nanoseconds):Qh(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class Xh{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Xh(e)}static min(){return new Xh(new Jh(0,0))}static max(){return new Xh(new Jh(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */class Zh{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ph(),void 0===n?n=e.length-t:n>e.length-t&&Ph(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Zh.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zh?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ed extends Zh{construct(e,t,n){return new ed(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Uh(Mh.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ed(t)}static emptyPath(){return new ed([])}}const td=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nd extends Zh{construct(e,t,n){return new nd(e,t,n)}static isValidIdentifier(e){return td.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nd.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new nd(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Uh(Mh.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Uh(Mh.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Uh(Mh.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new Uh(Mh.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nd(t)}static emptyPath(){return new nd([])}}
/**
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
 */class id{constructor(e){this.path=e}static fromPath(e){return new id(ed.fromString(e))}static fromName(e){return new id(ed.fromString(e).popFirst(5))}static empty(){return new id(ed.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ed.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ed.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new id(new ed(e.slice()))}}
/**
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
 */class rd{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}rd.UNKNOWN_ID=-1;function sd(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=Xh.fromTimestamp(1e9===i?new Jh(n+1,0):new Jh(n,i));return new ad(r,id.empty(),t)}function od(e){return new ad(e.readTime,e.key,-1)}class ad{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ad(Xh.min(),id.empty(),-1)}static max(){return new ad(Xh.max(),id.empty(),-1)}}function cd(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=id.comparator(e.documentKey,t.documentKey),0!==n?n:Qh(e.largestBatchId,t.largestBatchId))}
/**
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
 */const ld="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ud{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
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
 */async function hd(e){if(e.code!==Mh.FAILED_PRECONDITION||e.message!==ld)throw e;Rh("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class dd{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ph(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new dd(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof dd?t:dd.resolve(t)}catch(e){return dd.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):dd.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):dd.reject(t)}static resolve(e){return new dd(((t,n)=>{t(e)}))}static reject(e){return new dd(((t,n)=>{n(e)}))}static waitFor(e){return new dd(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=dd.resolve(!1);for(const n of e)t=t.next((e=>e?dd.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new dd(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new dd(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
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
 */function fd(e){return"IndexedDbTransactionError"===e.name}
/**
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
 */
class pd{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}function gd(e){return null==e}function md(e){return 0===e&&1/e==-1/0}function yd(e){return"number"==typeof e&&Number.isInteger(e)&&!md(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
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
 */pd._e=-1;const _d=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vd=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wd=vd;
/**
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
 */
/**
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
 */
function bd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ed(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Id(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
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
 */class Td{constructor(e,t){this.comparator=e,this.root=t||Sd.EMPTY}insert(e,t){return new Td(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Sd.BLACK,null,null))}remove(e){return new Td(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Sd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cd(this.root,e,this.comparator,!0)}}class Cd{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Sd{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Sd.RED,this.left=null!=i?i:Sd.EMPTY,this.right=null!=r?r:Sd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new Sd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Sd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return Sd.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Sd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Sd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ph();if(this.right.isRed())throw Ph();const e=this.left.check();if(e!==this.right.check())throw Ph();return e+(this.isRed()?0:1)}}Sd.EMPTY=null,Sd.RED=!0,Sd.BLACK=!1,Sd.EMPTY=new class{constructor(){this.size=0}get key(){throw Ph()}get value(){throw Ph()}get color(){throw Ph()}get left(){throw Ph()}get right(){throw Ph()}copy(e,t,n,i,r){return this}insert(e,t,n){return new Sd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class kd{constructor(e){this.comparator=e,this.data=new Td(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ad(this.data.getIterator())}getIteratorFrom(e){return new Ad(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof kd))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new kd(this.comparator);return t.data=e,t}}class Ad{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
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
 */
class Rd{constructor(e){this.fields=e,e.sort(nd.comparator)}static empty(){return new Rd([])}unionWith(e){let t=new kd(nd.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Rd(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yh(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
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
 */class Nd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
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
 */
/**
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
 */
class Od{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Nd("Invalid base64 string: "+e):e}}(e);return new Od(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Od(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Qh(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Od.EMPTY_BYTE_STRING=new Od("");const Dd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pd(e){if(Lh(!!e),"string"==typeof e){let t=0;const n=Dd.exec(e);if(Lh(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Ld(e.seconds),nanos:Ld(e.nanos)}}function Ld(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xd(e){return"string"==typeof e?Od.fromBase64String(e):Od.fromUint8Array(e)}
/**
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
 */function Md(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ud(e){const t=e.mapValue.fields.__previous_value__;return Md(t)?Ud(t):t}function Fd(e){const t=Pd(e.mapValue.fields.__local_write_time__.timestampValue);return new Jh(t.seconds,t.nanos)}
/**
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
 */class Bd{constructor(e,t,n,i,r,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class Vd{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Vd("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Vd&&e.projectId===this.projectId&&e.database===this.database}}
/**
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
 */const jd={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qd(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Md(e)?4:nf(e)?9007199254740991:10:Ph()}function $d(e,t){if(e===t)return!0;const n=qd(e);if(n!==qd(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fd(e).isEqual(Fd(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Pd(e.timestampValue),i=Pd(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,xd(e.bytesValue).isEqual(xd(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ld(e.geoPointValue.latitude)===Ld(t.geoPointValue.latitude)&&Ld(e.geoPointValue.longitude)===Ld(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ld(e.integerValue)===Ld(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ld(e.doubleValue),i=Ld(t.doubleValue);return n===i?md(n)===md(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Yh(e.arrayValue.values||[],t.arrayValue.values||[],$d);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(bd(n)!==bd(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!$d(n[e],i[e])))return!1;return!0}(e,t);default:return Ph()}var i}function zd(e,t){return void 0!==(e.values||[]).find((e=>$d(e,t)))}function Hd(e,t){if(e===t)return 0;const n=qd(e),i=qd(t);if(n!==i)return Qh(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Qh(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ld(e.integerValue||e.doubleValue),i=Ld(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Wd(e.timestampValue,t.timestampValue);case 4:return Wd(Fd(e),Fd(t));case 5:return Qh(e.stringValue,t.stringValue);case 6:return function(e,t){const n=xd(e),i=xd(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Qh(n[e],i[e]);if(0!==t)return t}return Qh(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Qh(Ld(e.latitude),Ld(t.latitude));return 0!==n?n:Qh(Ld(e.longitude),Ld(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Hd(n[e],i[e]);if(t)return t}return Qh(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===jd.mapValue&&t===jd.mapValue)return 0;if(e===jd.mapValue)return 1;if(t===jd.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=Qh(i[e],s[e]);if(0!==t)return t;const o=Hd(n[i[e]],r[s[e]]);if(0!==o)return o}return Qh(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Ph()}}function Wd(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Qh(e,t);const n=Pd(e),i=Pd(t),r=Qh(n.seconds,i.seconds);return 0!==r?r:Qh(n.nanos,i.nanos)}function Kd(e){return Gd(e)}function Gd(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Pd(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xd(e.bytesValue).toBase64():"referenceValue"in e?function(e){return id.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Gd(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${Gd(e.fields[r])}`;return n+"}"}(e.mapValue):Ph()}function Qd(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Yd(e){return!!e&&"integerValue"in e}function Jd(e){return!!e&&"arrayValue"in e}function Xd(e){return!!e&&"nullValue"in e}function Zd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ef(e){return!!e&&"mapValue"in e}function tf(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ed(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=tf(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=tf(e.arrayValue.values[n]);return t}return Object.assign({},e)}function nf(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class rf{constructor(e){this.value=e}static empty(){return new rf({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tf(t)}setAll(e){let t=nd.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=tf(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $d(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];ef(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Ed(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new rf(tf(this.value))}}function sf(e){const t=[];return Ed(e.fields,((e,n)=>{const i=new nd([e]);if(ef(n)){const e=sf(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Rd(t)
/**
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
 */}class of{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new of(e,0,Xh.min(),Xh.min(),Xh.min(),rf.empty(),0)}static newFoundDocument(e,t,n,i){return new of(e,1,t,Xh.min(),n,i,0)}static newNoDocument(e,t){return new of(e,2,t,Xh.min(),Xh.min(),rf.empty(),0)}static newUnknownDocument(e,t){return new of(e,3,t,Xh.min(),Xh.min(),rf.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Xh.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rf.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rf.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xh.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof of&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new of(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class af{constructor(e,t){this.position=e,this.inclusive=t}}function cf(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?id.comparator(id.fromName(o.referenceValue),n.key):Hd(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function lf(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!$d(e.position[n],t.position[n]))return!1;return!0}
/**
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
 */class uf{constructor(e,t="asc"){this.field=e,this.dir=t}}function hf(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
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
 */class df{}class ff extends df{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new bf(e,t,n):"array-contains"===t?new Cf(e,n):"in"===t?new Sf(e,n):"not-in"===t?new kf(e,n):"array-contains-any"===t?new Af(e,n):new ff(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Ef(e,n):new If(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Hd(t,this.value)):null!==t&&qd(this.value)===qd(t)&&this.matchesComparison(Hd(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ph()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pf extends df{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new pf(e,t)}matches(e){return gf(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function gf(e){return"and"===e.op}function mf(e){return yf(e)&&gf(e)}function yf(e){for(const t of e.filters)if(t instanceof pf)return!1;return!0}function _f(e){if(e instanceof ff)return e.field.canonicalString()+e.op.toString()+Kd(e.value);if(mf(e))return e.filters.map((e=>_f(e))).join(",");{const t=e.filters.map((e=>_f(e))).join(",");return`${e.op}(${t})`}}function vf(e,t){return e instanceof ff?(n=e,(i=t)instanceof ff&&n.op===i.op&&n.field.isEqual(i.field)&&$d(n.value,i.value)):e instanceof pf?function(e,t){return t instanceof pf&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&vf(n,t.filters[i])),!0)}(e,t):void Ph();var n,i}function wf(e){return e instanceof ff?`${(t=e).field.canonicalString()} ${t.op} ${Kd(t.value)}`:e instanceof pf?function(e){return e.op.toString()+" {"+e.getFilters().map(wf).join(" ,")+"}"}(e):"Filter";var t}class bf extends ff{constructor(e,t,n){super(e,t,n),this.key=id.fromName(n.referenceValue)}matches(e){const t=id.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ef extends ff{constructor(e,t){super(e,"in",t),this.keys=Tf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class If extends ff{constructor(e,t){super(e,"not-in",t),this.keys=Tf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Tf(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>id.fromName(e.referenceValue)))}class Cf extends ff{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jd(t)&&zd(t.arrayValue,this.value)}}class Sf extends ff{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&zd(this.value.arrayValue,t)}}class kf extends ff{constructor(e,t){super(e,"not-in",t)}matches(e){if(zd(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!zd(this.value.arrayValue,t)}}class Af extends ff{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jd(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>zd(this.value.arrayValue,e)))}}
/**
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
 */class Rf{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ce=null}}function Nf(e,t=null,n=[],i=[],r=null,s=null,o=null){return new Rf(e,t,n,i,r,s,o)}function Of(e){const t=xh(e);if(null===t.ce){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>_f(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),gd(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Kd(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Kd(e))).join(",")),t.ce=e}return t.ce}function Df(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!hf(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!vf(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!lf(e.startAt,t.startAt)&&lf(e.endAt,t.endAt)}function Pf(e){return id.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
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
 */
class Lf{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function xf(e,t,n,i,r,s,o,a){return new Lf(e,t,n,i,r,s,o,a)}function Mf(e){return new Lf(e)}function Uf(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ff(e){return null!==e.collectionGroup}function Bf(e){const t=xh(e);if(null===t.le){t.le=[];const e=new Set;for(const n of t.explicitOrderBy)t.le.push(n),e.add(n.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new kd(nd.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.le.push(new uf(i,n))})),e.has(nd.keyField().canonicalString())||t.le.push(new uf(nd.keyField(),n))}return t.le}function Vf(e){const t=xh(e);return t.he||(t.he=jf(t,Bf(e))),t.he}function jf(e,t){if("F"===e.limitType)return Nf(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new uf(e.field,t)}));const n=e.endAt?new af(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new af(e.startAt.position,e.startAt.inclusive):null;return Nf(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function qf(e,t){const n=e.filters.concat([t]);return new Lf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function $f(e,t,n){return new Lf(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function zf(e,t){return Df(Vf(e),Vf(t))&&e.limitType===t.limitType}function Hf(e){return`${Of(Vf(e))}|lt:${e.limitType}`}function Wf(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>wf(e))).join(", ")}]`),gd(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Kd(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Kd(e))).join(",")),`Target(${t})`}(Vf(e))}; limitType=${e.limitType})`}function Kf(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):id.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Bf(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(i=t,!((n=e).startAt&&!function(e,t,n){const i=cf(e,t,n);return e.inclusive?i<=0:i<0}(n.startAt,Bf(n),i)||n.endAt&&!function(e,t,n){const i=cf(e,t,n);return e.inclusive?i>=0:i>0}(n.endAt,Bf(n),i)));var n,i}function Gf(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Qf(e){return(t,n)=>{let i=!1;for(const r of Bf(e)){const e=Yf(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function Yf(e,t,n){const i=e.field.isKeyField()?id.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Hd(i,r):Ph()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Ph()}}
/**
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
 */class Jf{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ed(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return Id(this.inner)}size(){return this.innerSize}}
/**
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
 */const Xf=new Td(id.comparator);function Zf(){return Xf}const ep=new Td(id.comparator);function tp(...e){let t=ep;for(const n of e)t=t.insert(n.key,n);return t}function np(e){let t=ep;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ip(){return sp()}function rp(){return sp()}function sp(){return new Jf((e=>e.toString()),((e,t)=>e.isEqual(t)))}const op=new Td(id.comparator),ap=new kd(id.comparator);function cp(...e){let t=ap;for(const n of e)t=t.add(n);return t}const lp=new kd(Qh);function up(){return lp}
/**
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
 */function hp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:md(t)?"-0":t}}function dp(e){return{integerValue:""+e}}function fp(e,t){return yd(t)?dp(t):hp(e,t)}
/**
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
 */class pp{constructor(){this._=void 0}}function gp(e,t,n){return e instanceof _p?vp(e,t):e instanceof wp?bp(e,t):n}function mp(e,t){return e instanceof Ep?Yd(n=t)||(i=n)&&"doubleValue"in i?t:{integerValue:0}:null;var n,i}class yp extends pp{}class _p extends pp{constructor(e){super(),this.elements=e}}function vp(e,t){const n=Tp(t);for(const t of e.elements)n.some((e=>$d(e,t)))||n.push(t);return{arrayValue:{values:n}}}class wp extends pp{constructor(e){super(),this.elements=e}}function bp(e,t){let n=Tp(t);for(const t of e.elements)n=n.filter((e=>!$d(e,t)));return{arrayValue:{values:n}}}class Ep extends pp{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Ip(e){return Ld(e.integerValue||e.doubleValue)}function Tp(e){return Jd(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
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
 */class Cp{constructor(e,t){this.version=e,this.transformResults=t}}class Sp{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Sp}static exists(e){return new Sp(void 0,e)}static updateTime(e){return new Sp(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kp(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ap{}function Rp(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Bp(e.key,Sp.none()):new Lp(e.key,e.data,Sp.none());{const n=e.data,i=rf.empty();let r=new kd(nd.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new xp(e.key,i,new Rd(r.toArray()),Sp.none())}}function Np(e,t,n){var i;e instanceof Lp?function(e,t,n){const i=e.value.clone(),r=Up(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof xp?function(e,t,n){if(!kp(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Up(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Mp(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):(i=n,t.convertToNoDocument(i.version).setHasCommittedMutations())}function Op(e,t,n,i){return e instanceof Lp?function(e,t,n,i){if(!kp(e.precondition,t))return n;const r=e.value.clone(),s=Fp(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof xp?function(e,t,n,i){if(!kp(e.precondition,t))return n;const r=Fp(e.fieldTransforms,i,t),s=t.data;return s.setAll(Mp(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):(r=t,s=n,kp(e.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):s);var r,s}function Dp(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=mp(i.transform,e||null);null!=r&&(null===n&&(n=rf.empty()),n.set(i.field,r))}return n||null}function Pp(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,i=t.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Yh(n,i,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,i=t.transform,n instanceof _p&&i instanceof _p||n instanceof wp&&i instanceof wp?Yh(n.elements,i.elements,$d):n instanceof Ep&&i instanceof Ep?$d(n.Ie,i.Ie):n instanceof yp&&i instanceof yp);var n,i}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,i}class Lp extends Ap{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class xp extends Ap{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Mp(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Up(e,t,n){const i=new Map;Lh(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,gp(o,a,n[r]))}return i}function Fp(e,t,n){const i=new Map;for(const a of e){const e=a.transform,c=n.data.field(a.field);i.set(a.field,(s=c,o=t,(r=e)instanceof yp?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Md(t)&&(t=Ud(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(o,s):r instanceof _p?vp(r,s):r instanceof wp?bp(r,s):function(e,t){const n=mp(e,t),i=Ip(n)+Ip(e.Ie);return Yd(n)&&Yd(e.Ie)?dp(i):hp(e.serializer,i)}(r,s)))}var r,s,o;return i}class Bp extends Ap{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vp extends Ap{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */class jp{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&Np(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Op(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Op(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=rp();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=Rp(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Xh.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),cp())}isEqual(e){return this.batchId===e.batchId&&Yh(this.mutations,e.mutations,((e,t)=>Pp(e,t)))&&Yh(this.baseMutations,e.baseMutations,((e,t)=>Pp(e,t)))}}class qp{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Lh(e.mutations.length===n.length);let i=op;const r=e.mutations;for(let e=0;e<r.length;e++)i=i.insert(r[e].key,n[e].version);return new qp(e,t,n,i)}}
/**
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
 */class $p{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
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
 */
/**
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
 */
class zp{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
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
 */var Hp,Wp;function Kp(e){switch(e){default:return Ph();case Mh.CANCELLED:case Mh.UNKNOWN:case Mh.DEADLINE_EXCEEDED:case Mh.RESOURCE_EXHAUSTED:case Mh.INTERNAL:case Mh.UNAVAILABLE:case Mh.UNAUTHENTICATED:return!1;case Mh.INVALID_ARGUMENT:case Mh.NOT_FOUND:case Mh.ALREADY_EXISTS:case Mh.PERMISSION_DENIED:case Mh.FAILED_PRECONDITION:case Mh.ABORTED:case Mh.OUT_OF_RANGE:case Mh.UNIMPLEMENTED:case Mh.DATA_LOSS:return!0}}function Gp(e){if(void 0===e)return Nh("GRPC error has no .code"),Mh.UNKNOWN;switch(e){case Hp.OK:return Mh.OK;case Hp.CANCELLED:return Mh.CANCELLED;case Hp.UNKNOWN:return Mh.UNKNOWN;case Hp.DEADLINE_EXCEEDED:return Mh.DEADLINE_EXCEEDED;case Hp.RESOURCE_EXHAUSTED:return Mh.RESOURCE_EXHAUSTED;case Hp.INTERNAL:return Mh.INTERNAL;case Hp.UNAVAILABLE:return Mh.UNAVAILABLE;case Hp.UNAUTHENTICATED:return Mh.UNAUTHENTICATED;case Hp.INVALID_ARGUMENT:return Mh.INVALID_ARGUMENT;case Hp.NOT_FOUND:return Mh.NOT_FOUND;case Hp.ALREADY_EXISTS:return Mh.ALREADY_EXISTS;case Hp.PERMISSION_DENIED:return Mh.PERMISSION_DENIED;case Hp.FAILED_PRECONDITION:return Mh.FAILED_PRECONDITION;case Hp.ABORTED:return Mh.ABORTED;case Hp.OUT_OF_RANGE:return Mh.OUT_OF_RANGE;case Hp.UNIMPLEMENTED:return Mh.UNIMPLEMENTED;case Hp.DATA_LOSS:return Mh.DATA_LOSS;default:return Ph()}}(Wp=Hp||(Hp={}))[Wp.OK=0]="OK",Wp[Wp.CANCELLED=1]="CANCELLED",Wp[Wp.UNKNOWN=2]="UNKNOWN",Wp[Wp.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wp[Wp.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wp[Wp.NOT_FOUND=5]="NOT_FOUND",Wp[Wp.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wp[Wp.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wp[Wp.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wp[Wp.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wp[Wp.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wp[Wp.ABORTED=10]="ABORTED",Wp[Wp.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wp[Wp.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wp[Wp.INTERNAL=13]="INTERNAL",Wp[Wp.UNAVAILABLE=14]="UNAVAILABLE",Wp[Wp.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
let Qp=null;
/**
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
 */function Yp(){return new TextEncoder}
/**
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
 */const Jp=new Th([4294967295,4294967295],0);function Xp(e){const t=Yp().encode(e),n=new Ih;return n.update(t),new Uint8Array(n.digest())}function Zp(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Th([n,i],0),new Th([r,s],0)]}class eg{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tg(`Invalid padding: ${t}`);if(n<0)throw new tg(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new tg(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new tg(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=Th.fromNumber(this.Te)}de(e,t,n){let i=e.add(t.multiply(Th.fromNumber(n)));return 1===i.compare(Jp)&&(i=new Th([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;const t=Xp(e),[n,i]=Zp(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,i,e);if(!this.Ae(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),s=new eg(r,i,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Te)return;const t=Xp(e),[n,i]=Zp(t);for(let e=0;e<this.hashCount;e++){const t=this.de(n,i,e);this.Re(t)}}Re(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class tg extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
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
 */class ng{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,ig.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ng(Xh.min(),i,new Td(Qh),Zf(),cp())}}class ig{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ig(n,t,cp(),cp(),cp())}}
/**
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
 */class rg{constructor(e,t,n,i){this.Ve=e,this.removedTargetIds=t,this.key=n,this.me=i}}class sg{constructor(e,t){this.targetId=e,this.fe=t}}class og{constructor(e,t,n=Od.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class ag{constructor(){this.ge=0,this.pe=ug(),this.ye=Od.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=cp(),t=cp(),n=cp();return this.pe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Ph()}})),new ig(this.ye,this.we,e,t,n)}Fe(){this.Se=!1,this.pe=ug()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class cg{constructor(e){this.Le=e,this.ke=new Map,this.qe=Zf(),this.Qe=lg(),this.Ke=new Td(Qh)}$e(e){for(const t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(const t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,(t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.Ce(e.resumeToken);break;case 1:n.Ne(),n.be||n.Fe(),n.Ce(e.resumeToken);break;case 2:n.Ne(),n.be||this.removeTarget(t);break;case 3:this.je(t)&&(n.Be(),n.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.Ce(e.resumeToken));break;default:Ph()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach(((e,n)=>{this.je(n)&&t(n)}))}Je(e){const t=e.targetId,n=e.fe.count,i=this.Ye(t);if(i){const r=i.target;if(Pf(r))if(0===n){const e=new id(r.path);this.We(t,e,of.newNoDocument(e,Xh.min()))}else Lh(1===n);else{const i=this.Ze(t);if(i!==n){const n=this.Xe(e),r=n?this.et(n,e,i):1;if(0!==r){this.He(t);const e=2===r?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}null==Qp||Qp.tt(function(e,t,n,i,r){var s,o,a,c,l,u;const h={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(h.bloomFilter={applied:0===r,hashCount:null!==(s=null==d?void 0:d.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(c=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==c?c:0,padding:null!==(u=null===(l=null==d?void 0:d.bits)||void 0===l?void 0:l.padding)&&void 0!==u?u:0,mightContain:e=>{var t;return null!==(t=null==i?void 0:i.mightContain(e))&&void 0!==t&&t}}),h}(i,e.fe,this.Le.nt(),n,r))}}}}Xe(e){const t=e.fe.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:r=0}=t;let s,o;try{s=xd(n).toUint8Array()}catch(e){if(e instanceof Nd)return Oh("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{o=new eg(s,i,r)}catch(e){return Oh(e instanceof tg?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===o.Te?null:o}et(e,t,n){return t.fe.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach((n=>{const r=this.Le.nt(),s=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.We(t,n,null),i++)})),i}it(e){const t=new Map;this.ke.forEach(((n,i)=>{const r=this.Ye(i);if(r){if(n.current&&Pf(r.target)){const t=new id(r.target.path);null!==this.qe.get(t)||this.st(i,t)||this.We(i,t,of.newNoDocument(t,e))}n.De&&(t.set(i,n.ve()),n.Fe())}}));let n=cp();this.Qe.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.qe.forEach(((t,n)=>n.setReadTime(e)));const i=new ng(e,t,this.Ke,this.qe,n);return this.qe=Zf(),this.Qe=lg(),this.Ke=new Td(Qh),i}Ue(e,t){if(!this.je(e))return;const n=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,n),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const i=this.ze(e);this.st(e,t)?i.Me(t,1):i.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),n&&(this.qe=this.qe.insert(t,n))}removeTarget(e){this.ke.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new ag,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new kd(Qh),this.Qe=this.Qe.insert(e,t)),t}je(e){const t=null!==this.Ye(e);return t||Rh("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new ag),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.We(e,t,null)}))}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function lg(){return new Td(id.comparator)}function ug(){return new Td(id.comparator)}const hg={asc:"ASCENDING",desc:"DESCENDING"},dg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fg={and:"AND",or:"OR"};class pg{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function gg(e,t){return e.useProto3Json||gd(t)?t:{value:t}}function mg(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function yg(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _g(e,t){return mg(e,t.toTimestamp())}function vg(e){return Lh(!!e),Xh.fromTimestamp(function(e){const t=Pd(e);return new Jh(t.seconds,t.nanos)}(e))}function wg(e,t){return(n=e,new ed(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function bg(e){const t=ed.fromString(e);return Lh(Vg(t)),t}function Eg(e,t){return wg(e.databaseId,t.path)}function Ig(e,t){const n=bg(t);if(n.get(1)!==e.databaseId.projectId)throw new Uh(Mh.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Uh(Mh.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new id(kg(n))}function Tg(e,t){return wg(e.databaseId,t)}function Cg(e){const t=bg(e);return 4===t.length?ed.emptyPath():kg(t)}function Sg(e){return new ed(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function kg(e){return Lh(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Ag(e,t,n){return{name:Eg(e,t),fields:n.value.mapValue.fields}}function Rg(e,t){let n;if(t instanceof Lp)n={update:Ag(e,t.key,t.value)};else if(t instanceof Bp)n={delete:Eg(e,t.key)};else if(t instanceof xp)n={update:Ag(e,t.key,t.data),updateMask:Bg(t.fieldMask)};else{if(!(t instanceof Vp))return Ph();n={verify:Eg(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof yp)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof _p)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wp)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ep)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw Ph()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:_g(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Ph())),n;var i,r}function Ng(e,t){return{documents:[Tg(e,t.path)]}}function Og(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Tg(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Tg(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return Fg(pf.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Mg((t=e).field),direction:Lg(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=gg(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n;var a}function Dg(e){let t=Cg(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Lh(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Pg(e);return t instanceof pf&&mf(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new uf(Ug((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,gd(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new af(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new af(n,t)}(n.endAt)),xf(t,r,o,s,a,"F",c,l)}function Pg(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ug(e.unaryFilter.field);return ff.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ug(e.unaryFilter.field);return ff.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ug(e.unaryFilter.field);return ff.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ug(e.unaryFilter.field);return ff.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ph()}}(e):void 0!==e.fieldFilter?(n=e,ff.create(Ug(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ph()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==e.compositeFilter?(t=e,pf.create(t.compositeFilter.filters.map((e=>Pg(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Ph()}}(t.compositeFilter.op))):Ph();var t,n}function Lg(e){return hg[e]}function xg(e){return dg[e]}function Mg(e){return{fieldPath:e.canonicalString()}}function Ug(e){return nd.fromServerFormat(e.fieldPath)}function Fg(e){return e instanceof ff?function(e){if("=="===e.op){if(Zd(e.value))return{unaryFilter:{field:Mg(e.field),op:"IS_NAN"}};if(Xd(e.value))return{unaryFilter:{field:Mg(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Zd(e.value))return{unaryFilter:{field:Mg(e.field),op:"IS_NOT_NAN"}};if(Xd(e.value))return{unaryFilter:{field:Mg(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mg(e.field),op:xg(e.op),value:e.value}}}(e):e instanceof pf?function(e){const t=e.getFilters().map((e=>Fg(e)));return 1===t.length?t[0]:{compositeFilter:{op:(n=e.op,fg[n]),filters:t}};var n}(e):Ph()}function Bg(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Vg(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
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
 */class jg{constructor(e,t,n,i,r=Xh.min(),s=Xh.min(),o=Od.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new jg(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jg(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jg(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
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
 */class qg{constructor(e){this.ut=e}}function $g(e){const t=Dg({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?$f(t,t.limit,"L"):t}
/**
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
 */class zg{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(Ld(e.integerValue));else if("doubleValue"in e){const n=Ld(e.doubleValue);isNaN(n)?this.Tt(t,13):(this.Tt(t,15),md(n)?t.Et(0):t.Et(n))}else if("timestampValue"in e){const n=e.timestampValue;this.Tt(t,20),"string"==typeof n?t.dt(n):(t.dt(`${n.seconds||""}`),t.Et(n.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(xd(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Tt(t,45),t.Et(n.latitude||0),t.Et(n.longitude||0)}else"mapValue"in e?nf(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):Ph()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){const n=e.fields||{};this.Tt(t,55);for(const e of Object.keys(n))this.At(e,t),this.Pt(n[e],t)}yt(e,t){const n=e.values||[];this.Tt(t,50);for(const e of n)this.Pt(e,t)}ft(e,t){this.Tt(t,37),id.fromName(e).path.forEach((e=>{this.Tt(t,60),this.wt(e,t)}))}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}zg.St=new zg;
/**
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
 */
class Hg{constructor(){this.on=new Wg}addToCollectionParentIndex(e,t){return this.on.add(t),dd.resolve()}getCollectionParents(e,t){return dd.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return dd.resolve()}deleteFieldIndex(e,t){return dd.resolve()}deleteAllFieldIndexes(e){return dd.resolve()}createTargetIndexes(e,t){return dd.resolve()}getDocumentsMatchingTarget(e,t){return dd.resolve(null)}getIndexType(e,t){return dd.resolve(0)}getFieldIndexes(e,t){return dd.resolve([])}getNextCollectionGroupToUpdate(e){return dd.resolve(null)}getMinOffset(e,t){return dd.resolve(ad.min())}getMinOffsetFromCollectionGroup(e,t){return dd.resolve(ad.min())}updateCollectionGroup(e,t,n){return dd.resolve()}updateIndexEntries(e,t){return dd.resolve()}}class Wg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new kd(ed.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new kd(ed.comparator)).toArray()}}
/**
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
 */new Uint8Array(0);class Kg{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Kg(e,Kg.DEFAULT_COLLECTION_PERCENTILE,Kg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
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
 */
/**
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
 */Kg.DEFAULT_COLLECTION_PERCENTILE=10,Kg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kg.DEFAULT=new Kg(41943040,Kg.DEFAULT_COLLECTION_PERCENTILE,Kg.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kg.DISABLED=new Kg(-1,0,0);
/**
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
 */
class Gg{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Gg(0)}static Nn(){return new Gg(-1)}}
/**
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
 */
/**
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
 */
class Qg{constructor(){this.changes=new Jf((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,of.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?dd.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
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
 */
/**
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
 */
/**
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
 */
class Yg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
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
 */class Jg{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Op(n.mutation,e,Rd.empty(),Jh.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,cp()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=cp()){const i=ip();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=tp();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ip();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,cp())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=Zf();const s=sp(),o=sp();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof xp)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Op(o.mutation,t,o.mutation.getFieldMask(),Jh.now())):s.set(t.key,Rd.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Yg(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=sp();let i=new Td(((e,t)=>e-t)),r=cp();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Rd.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||cp()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=rp();c.forEach((e=>{if(!r.has(e)){const i=Rp(t.get(e),n.get(e));null!==i&&l.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,l))}return dd.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,i){return r=t,id.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):Ff(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i);var r}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):dd.resolve(ip());let o=-1,a=r;return s.next((t=>dd.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?dd.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,cp()))).next((e=>({batchId:o,changes:np(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new id(t)).next((e=>{let t=tp();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const r=t.collectionGroup;let s=tp();return this.indexManager.getCollectionParents(e,r).next((o=>dd.forEach(o,(o=>{const a=(c=t,l=o.child(r),new Lf(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,l;return this.getDocumentsMatchingCollectionQuery(e,a,n,i).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,r,i)))).next((e=>{r.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,of.newInvalidDocument(i)))}));let n=tp();return e.forEach(((e,i)=>{const s=r.get(e);void 0!==s&&Op(s.mutation,i,Rd.empty(),Jh.now()),Kf(t,i)&&(n=n.insert(e,i))})),n}))}}
/**
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
 */class Xg{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return dd.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:(n=t).id,version:n.version,createTime:vg(n.createTime)}),dd.resolve();var n}getNamedQuery(e,t){return dd.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:(n=t).name,query:$g(n.bundledQuery),readTime:vg(n.readTime)}),dd.resolve();var n}}
/**
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
 */class Zg{constructor(){this.overlays=new Td(id.comparator),this.lr=new Map}getOverlay(e,t){return dd.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ip();return dd.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.lt(e,t,i)})),dd.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.lr.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.lr.delete(n)),dd.resolve()}getOverlaysForCollection(e,t,n){const i=ip(),r=t.length+1,s=new id(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return dd.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new Td(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=ip(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ip(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return dd.resolve(o)}lt(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.lr.get(i.largestBatchId).delete(n.key);this.lr.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $p(t,n));let r=this.lr.get(t);void 0===r&&(r=cp(),this.lr.set(t,r)),this.lr.set(t,r.add(n.key))}}
/**
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
 */class em{constructor(){this.hr=new kd(tm.Pr),this.Ir=new kd(tm.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){const n=new tm(e,t);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.dr(new tm(e,t))}Ar(e,t){e.forEach((e=>this.removeReference(e,t)))}Rr(e){const t=new id(new ed([])),n=new tm(t,e),i=new tm(t,e+1),r=[];return this.Ir.forEachInRange([n,i],(e=>{this.dr(e),r.push(e.key)})),r}Vr(){this.hr.forEach((e=>this.dr(e)))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const t=new id(new ed([])),n=new tm(t,e),i=new tm(t,e+1);let r=cp();return this.Ir.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new tm(e,0),n=this.hr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class tm{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return id.comparator(e.key,t.key)||Qh(e.gr,t.gr)}static Tr(e,t){return Qh(e.gr,t.gr)||id.comparator(e.key,t.key)}}
/**
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
 */class nm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new kd(tm.Pr)}checkEmpty(e){return dd.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new jp(r,t,n,i);this.mutationQueue.push(s);for(const t of i)this.yr=this.yr.add(new tm(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return dd.resolve(s)}lookupMutationBatch(e,t){return dd.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.Sr(n),r=i<0?0:i;return dd.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return dd.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return dd.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new tm(t,0),i=new tm(t,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([n,i],(e=>{const t=this.wr(e.gr);r.push(t)})),dd.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new kd(Qh);return t.forEach((e=>{const t=new tm(e,0),i=new tm(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,i],(e=>{n=n.add(e.gr)}))})),dd.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;id.isDocumentKey(r)||(r=r.child(""));const s=new tm(new id(r),0);let o=new kd(Qh);return this.yr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.gr)),!0)}),s),dd.resolve(this.br(o))}br(e){const t=[];return e.forEach((e=>{const n=this.wr(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Lh(0===this.Dr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return dd.forEach(t.mutations,(i=>{const r=new tm(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.yr=n}))}Fn(e){}containsKey(e,t){const n=new tm(t,0),i=this.yr.firstAfterOrEqual(n);return dd.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,dd.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){const t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
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
 */class im{constructor(e){this.Cr=e,this.docs=new Td(id.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Cr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return dd.resolve(n?n.document.mutableCopy():of.newInvalidDocument(t))}getEntries(e,t){let n=Zf();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():of.newInvalidDocument(e))})),dd.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=Zf();const s=t.path,o=new id(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||cd(od(o),n)<=0||(i.has(o.key)||Kf(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return dd.resolve(r)}getAllFromCollectionGroup(e,t,n,i){Ph()}vr(e,t){return dd.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new rm(this)}getSize(e){return dd.resolve(this.size)}}class rm extends Qg{constructor(e){super(),this._r=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this._r.addEntry(e,i)):this._r.removeEntry(n)})),dd.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}
/**
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
 */class sm{constructor(e){this.persistence=e,this.Fr=new Jf((e=>Of(e)),Df),this.lastRemoteSnapshotVersion=Xh.min(),this.highestTargetId=0,this.Mr=0,this.Or=new em,this.targetCount=0,this.Nr=Gg.On()}forEachTarget(e,t){return this.Fr.forEach(((e,n)=>t(n))),dd.resolve()}getLastRemoteSnapshotVersion(e){return dd.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return dd.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),dd.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Mr&&(this.Mr=t),dd.resolve()}kn(e){this.Fr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Nr=new Gg(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,dd.resolve()}updateTargetData(e,t){return this.kn(t),dd.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,dd.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Fr.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),dd.waitFor(r).next((()=>i))}getTargetCount(e){return dd.resolve(this.targetCount)}getTargetData(e,t){const n=this.Fr.get(t)||null;return dd.resolve(n)}addMatchingKeys(e,t,n){return this.Or.Er(t,n),dd.resolve()}removeMatchingKeys(e,t,n){this.Or.Ar(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),dd.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),dd.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Or.mr(t);return dd.resolve(n)}containsKey(e,t){return dd.resolve(this.Or.containsKey(t))}}
/**
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
 */class om{constructor(e,t){this.Br={},this.overlays={},this.Lr=new pd(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new sm(this),this.indexManager=new Hg,this.remoteDocumentCache=new im((e=>this.referenceDelegate.Qr(e))),this.serializer=new qg(t),this.Kr=new Xg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Br[e.toKey()];return n||(n=new nm(t,this.referenceDelegate),this.Br[e.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,n){Rh("MemoryPersistence","Starting transaction:",e);const i=new am(this.Lr.next());return this.referenceDelegate.$r(),n(i).next((e=>this.referenceDelegate.Ur(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Wr(e,t){return dd.or(Object.values(this.Br).map((n=>()=>n.containsKey(e,t))))}}class am extends ud{constructor(e){super(),this.currentSequenceNumber=e}}class cm{constructor(e){this.persistence=e,this.Gr=new em,this.zr=null}static jr(e){return new cm(e)}get Hr(){if(this.zr)return this.zr;throw Ph()}addReference(e,t,n){return this.Gr.addReference(n,t),this.Hr.delete(n.toString()),dd.resolve()}removeReference(e,t,n){return this.Gr.removeReference(n,t),this.Hr.add(n.toString()),dd.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),dd.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach((e=>this.Hr.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Hr.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}$r(){this.zr=new Set}Ur(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return dd.forEach(this.Hr,(n=>{const i=id.fromPath(n);return this.Jr(e,i).next((e=>{e||t.removeEntry(i,Xh.min())}))})).next((()=>(this.zr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Jr(e,t).next((e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())}))}Qr(e){return 0}Jr(e,t){return dd.or([()=>dd.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}
/**
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
 */
class lm{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.ki=n,this.qi=i}static Qi(e,t){let n=cp(),i=cp();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new lm(e,t.fromCache,n,i)}}
/**
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
 */class um{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
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
 */class hm{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,n,i){const r={result:null};return this.zi(e,t).next((e=>{r.result=e})).next((()=>{if(!r.result)return this.ji(e,t,i,n).next((e=>{r.result=e}))})).next((()=>{if(r.result)return;const n=new um;return this.Hi(e,t,n).next((i=>{if(r.result=i,this.$i)return this.Ji(e,t,n,i.size)}))})).next((()=>r.result))}Ji(e,t,n,i){return n.documentReadCount<this.Ui?(Ah()<=Ee.DEBUG&&Rh("QueryEngine","SDK will not create cache indexes for query:",Wf(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),dd.resolve()):(Ah()<=Ee.DEBUG&&Rh("QueryEngine","Query:",Wf(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Wi*i?(Ah()<=Ee.DEBUG&&Rh("QueryEngine","The SDK decides to create cache indexes for query:",Wf(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vf(t))):dd.resolve())}zi(e,t){if(Uf(t))return dd.resolve(null);let n=Vf(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=$f(t,null,"F"),n=Vf(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=cp(...i);return this.Gi.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Yi(t,i);return this.Zi(t,s,r,n.readTime)?this.zi(e,$f(t,null,"F")):this.Xi(e,s,t,n)}))))})))))}ji(e,t,n,i){return Uf(t)||i.isEqual(Xh.min())?dd.resolve(null):this.Gi.getDocuments(e,n).next((r=>{const s=this.Yi(t,r);return this.Zi(t,s,n,i)?dd.resolve(null):(Ah()<=Ee.DEBUG&&Rh("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wf(t)),this.Xi(e,s,t,sd(i,-1)).next((e=>e)))}))}Yi(e,t){let n=new kd(Qf(e));return t.forEach(((t,i)=>{Kf(e,i)&&(n=n.add(i))})),n}Zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,t,n){return Ah()<=Ee.DEBUG&&Rh("QueryEngine","Using full collection scan to execute query:",Wf(t)),this.Gi.getDocumentsMatchingQuery(e,t,ad.min(),n)}Xi(e,t,n,i){return this.Gi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
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
 */class dm{constructor(e,t,n,i){this.persistence=e,this.es=t,this.serializer=i,this.ts=new Td(Qh),this.ns=new Jf((e=>Of(e)),Df),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(n)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jg(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ts)))}}function fm(e,t,n,i){return new dm(e,t,n,i)}async function pm(e,t){const n=xh(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.os(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=cp();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({_s:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function gm(e){const t=xh(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.qr.getLastRemoteSnapshotVersion(e)))}function mm(e,t,n){let i=cp(),r=cp();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Zf();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(Xh.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):Rh("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{us:i,cs:r}}))}function ym(e,t){const n=xh(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function _m(e,t){const n=xh(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.qr.getTargetData(e,t).next((r=>r?(i=r,dd.resolve(i)):n.qr.allocateTargetId(e).next((r=>(i=new jg(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.qr.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.ts.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(e.targetId,e),n.ns.set(t,e.targetId)),e}))}async function vm(e,t,n){const i=xh(e),r=i.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!fd(e))throw e;Rh("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.ts=i.ts.remove(t),i.ns.delete(r.target)}function wm(e,t,n){const i=xh(e);let r=Xh.min(),s=cp();return i.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const i=xh(e),r=i.ns.get(n);return void 0!==r?dd.resolve(i.ts.get(r)):i.qr.getTargetData(t,n)}(i,e,Vf(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.qr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.es.getDocumentsMatchingQuery(e,t,n?r:Xh.min(),n?s:cp()))).next((e=>(bm(i,Gf(t),e),{documents:e,ls:s})))))}function bm(e,t,n){let i=e.rs.get(t)||Xh.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.rs.set(t,i)}class Em{constructor(){this.activeTargetIds=up()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Im{constructor(){this.eo=new Em,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,n){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Em,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
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
 */class Tm{ro(e){}shutdown(){}}
/**
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
 */class Cm{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Rh("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){Rh("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
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
 */let Sm=null;function km(){return null===Sm?Sm=268435456+Math.round(2147483648*Math.random()):Sm++,"0x"+Sm.toString(16)
/**
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
 */}const Am={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Rm{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}
/**
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
 */class Nm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${n}/databases/${i}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get yo(){return!1}wo(e,t,n,i,r){const s=km(),o=this.So(e,t);Rh("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,i,r),this.Do(e,o,a,n).then((t=>(Rh("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Oh("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Co(e,t,n,i,r,s){return this.wo(e,t,n,i,r)}bo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Sh,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}So(e,t){const n=Am[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,n,i){const r=km();return new Promise(((s,o)=>{const a=new Eh;a.setWithCredentials(!0),a.listenOnce(yh.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case mh.NO_ERROR:const t=a.getResponseJson();Rh("WebChannelConnection",`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case mh.TIMEOUT:Rh("WebChannelConnection",`RPC '${e}' ${r} timed out`),o(new Uh(Mh.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const n=a.getStatus();if(Rh("WebChannelConnection",`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Mh).indexOf(t)>=0?t:Mh.UNKNOWN}(t.status);o(new Uh(e,t.message))}else o(new Uh(Mh.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Uh(Mh.UNAVAILABLE,"Connection failed."));break;default:Ph()}}finally{Rh("WebChannelConnection",`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);Rh("WebChannelConnection",`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",c,n,15)}))}vo(e,t,n){const i=km(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ph(),o=gh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new wh({})),this.bo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Rh("WebChannelConnection",`Creating RPC '${e}' stream ${i}: ${l}`,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const f=new Rm({co:t=>{d?Rh("WebChannelConnection",`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(Rh("WebChannelConnection",`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),Rh("WebChannelConnection",`RPC '${e}' stream ${i} sending:`,t),u.send(t))},lo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,bh.EventType.OPEN,(()=>{d||Rh("WebChannelConnection",`RPC '${e}' stream ${i} transport opened.`)})),p(u,bh.EventType.CLOSE,(()=>{d||(d=!0,Rh("WebChannelConnection",`RPC '${e}' stream ${i} transport closed`),f.Ro())})),p(u,bh.EventType.ERROR,(t=>{d||(d=!0,Oh("WebChannelConnection",`RPC '${e}' stream ${i} transport errored:`,t),f.Ro(new Uh(Mh.UNAVAILABLE,"The operation could not be completed")))})),p(u,bh.EventType.MESSAGE,(t=>{var n;if(!d){const r=t.data[0];Lh(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Rh("WebChannelConnection",`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=Hp[e];if(void 0!==t)return Gp(t)}(t),r=o.message;void 0===n&&(n=Mh.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),d=!0,f.Ro(new Uh(n,r)),u.close()}else Rh("WebChannelConnection",`RPC '${e}' stream ${i} received:`,r),f.Vo(r)}})),p(o,_h.STAT_EVENT,(t=>{t.stat===vh.PROXY?Rh("WebChannelConnection",`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===vh.NOPROXY&&Rh("WebChannelConnection",`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{f.Ao()}),0),f}}
/**
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
 */
/**
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
 */function Om(){return"undefined"!=typeof document?document:null}
/**
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
 */function Dm(e){return new pg(e,!0)}
/**
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
 */class Pm{constructor(e,t,n=1e3,i=1.5,r=6e4){this.si=e,this.timerId=t,this.Fo=n,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const t=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),i=Math.max(0,t-n);i>0&&Rh("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.Bo=Date.now(),e()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
/**
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
 */class Lm{constructor(e,t,n,i,r,s,o,a){this.si=e,this.Ko=n,this.$o=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Pm(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===Mh.RESOURCE_EXHAUSTED?(Nh(t.toString()),Nh("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===Mh.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Uo===t&&this.s_(e,n)}),(t=>{e((()=>{const e=new Uh(Mh.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)}))}))}s_(e,t){const n=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((e=>{n((()=>this.o_(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(e){return Rh("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget((()=>this.Uo===e?t():(Rh("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xm extends Lm{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const r="NO_CHANGE"===(i=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Ph(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(Lh(void 0===t||"string"==typeof t),Od.fromBase64String(t||"")):(Lh(void 0===t||t instanceof Uint8Array),Od.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Mh.UNKNOWN:Gp(e.code);return new Uh(t,e.message||"")}(a);n=new og(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Ig(e,i.document.name),s=vg(i.document.updateTime),o=i.document.createTime?vg(i.document.createTime):Xh.min(),a=new rf({mapValue:{fields:i.document.fields}}),c=of.newFoundDocument(r,s,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new rg(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Ig(e,i.document),s=i.readTime?vg(i.readTime):Xh.min(),o=of.newNoDocument(r,s),a=i.removedTargetIds||[];n=new rg([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Ig(e,i.document),s=i.removedTargetIds||[];n=new rg([],s,r,null)}else{if(!("filter"in t))return Ph();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:r}=e,s=new zp(i,r),o=e.targetId;n=new sg(o,s)}}var i;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Xh.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Xh.min():t.readTime?vg(t.readTime):Xh.min()}(e);return this.listener.a_(t,n)}u_(e){const t={};t.database=Sg(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=Pf(i)?{documents:Ng(e,i)}:{query:Og(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=yg(e,t.resumeToken);const i=gg(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(Xh.min())>0){n.readTime=mg(e,t.snapshotVersion.toTimestamp());const i=gg(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ph()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.e_(t)}c_(e){const t={};t.database=Sg(this.serializer),t.removeTarget=e,this.e_(t)}}class Mm extends Lm{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,t){return this.connection.vo("Write",e,t)}onMessage(e){if(Lh(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const i=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(Lh(void 0!==n),t.map((e=>function(e,t){let n=e.updateTime?vg(e.updateTime):vg(t);return n.isEqual(Xh.min())&&(n=vg(t)),new Cp(n,e.transformResults||[])}(e,n)))):[]),r=vg(e.commitTime);return this.listener.I_(r,i)}var t,n;return Lh(!e.writeResults||0===e.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Sg(this.serializer),this.e_(e)}P_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Rg(this.serializer,e)))};this.e_(t)}}
/**
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
 */class Um extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new Uh(Mh.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.wo(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Mh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Uh(Mh.UNKNOWN,e.toString())}))}Co(e,t,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Co(e,t,n,r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Mh.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Uh(Mh.UNKNOWN,e.toString())}))}terminate(){this.d_=!0}}class Fm{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Nh(t),this.f_=!1):Rh("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
/**
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
 */class Bm{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro((e=>{n.enqueueAndForget((async()=>{Gm(this)&&(Rh("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=xh(e);t.C_.add(4),await jm(t),t.M_.set("Unknown"),t.C_.delete(4),await Vm(t)}(this))}))})),this.M_=new Fm(n,i)}}async function Vm(e){if(Gm(e))for(const t of e.v_)await t(!0)}async function jm(e){for(const t of e.v_)await t(!1)}function qm(e,t){const n=xh(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Km(n)?Wm(n):dy(n).Ho()&&zm(n,t))}function $m(e,t){const n=xh(e),i=dy(n);n.D_.delete(t),i.Ho()&&Hm(n,t),0===n.D_.size&&(i.Ho()?i.Zo():Gm(n)&&n.M_.set("Unknown"))}function zm(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Xh.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}dy(e).u_(t)}function Hm(e,t){e.x_.Oe(t),dy(e).c_(t)}function Wm(e){e.x_=new cg({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),dy(e).start(),e.M_.g_()}function Km(e){return Gm(e)&&!dy(e).jo()&&e.D_.size>0}function Gm(e){return 0===xh(e).C_.size}function Qm(e){e.x_=void 0}async function Ym(e){e.D_.forEach(((t,n)=>{zm(e,t)}))}async function Jm(e,t){Qm(e),Km(e)?(e.M_.w_(t),Wm(e)):e.M_.set("Unknown")}async function Xm(e,t,n){if(e.M_.set("Online"),t instanceof og&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.D_.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.D_.delete(i),e.x_.removeTarget(i))}(e,t)}catch(n){Rh("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Zm(e,n)}else if(t instanceof rg?e.x_.$e(t):t instanceof sg?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(Xh.min()))try{const t=await gm(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.x_.it(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.D_.get(i);r&&e.D_.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.D_.get(t);if(!i)return;e.D_.set(t,i.withResumeToken(Od.EMPTY_BYTE_STRING,i.snapshotVersion)),Hm(e,t);const r=new jg(i.target,t,n,i.sequenceNumber);zm(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Rh("RemoteStore","Failed to raise snapshot:",t),await Zm(e,t)}}async function Zm(e,t,n){if(!fd(t))throw t;e.C_.add(1),await jm(e),e.M_.set("Offline"),n||(n=()=>gm(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Rh("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Vm(e)}))}function ey(e,t){return t().catch((n=>Zm(e,n,t)))}async function ty(e){const t=xh(e),n=fy(t);let i=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;ny(t);)try{const e=await ym(t.localStore,i);if(null===e){0===t.b_.length&&n.Zo();break}i=e.batchId,iy(t,e)}catch(e){await Zm(t,e)}ry(t)&&sy(t)}function ny(e){return Gm(e)&&e.b_.length<10}function iy(e,t){e.b_.push(t);const n=fy(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function ry(e){return Gm(e)&&!fy(e).jo()&&e.b_.length>0}function sy(e){fy(e).start()}async function oy(e){fy(e).E_()}async function ay(e){const t=fy(e);for(const n of e.b_)t.P_(n.mutations)}async function cy(e,t,n){const i=e.b_.shift(),r=qp.from(i,t,n);await ey(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await ty(e)}async function ly(e,t){t&&fy(e).h_&&await async function(e,t){if(Kp(n=t.code)&&n!==Mh.ABORTED){const n=e.b_.shift();fy(e).Yo(),await ey(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ty(e)}var n}(e,t),ry(e)&&sy(e)}async function uy(e,t){const n=xh(e);n.asyncQueue.verifyOperationInProgress(),Rh("RemoteStore","RemoteStore received new credentials");const i=Gm(n);n.C_.add(3),await jm(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Vm(n)}async function hy(e,t){const n=xh(e);t?(n.C_.delete(2),await Vm(n)):t||(n.C_.add(2),await jm(n),n.M_.set("Unknown"))}function dy(e){return e.O_||(e.O_=function(e,t,n){const i=xh(e);return i.A_(),new xm(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{ho:Ym.bind(null,e),Io:Jm.bind(null,e),a_:Xm.bind(null,e)}),e.v_.push((async t=>{t?(e.O_.Yo(),Km(e)?Wm(e):e.M_.set("Unknown")):(await e.O_.stop(),Qm(e))}))),e.O_}function fy(e){return e.N_||(e.N_=function(e,t,n){const i=xh(e);return i.A_(),new Mm(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{ho:oy.bind(null,e),Io:ly.bind(null,e),T_:ay.bind(null,e),I_:cy.bind(null,e)}),e.v_.push((async t=>{t?(e.N_.Yo(),await ty(e)):(await e.N_.stop(),e.b_.length>0&&(Rh("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))}))),e.N_
/**
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
 */}class py{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Fh,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new py(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Uh(Mh.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gy(e,t){if(Nh("AsyncQueue",`${t}: ${e}`),fd(e))return new Uh(Mh.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
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
 */class my{constructor(e){this.comparator=e?(t,n)=>e(t,n)||id.comparator(t.key,n.key):(e,t)=>id.comparator(e.key,t.key),this.keyedMap=tp(),this.sortedSet=new Td(this.comparator)}static emptySet(e){return new my(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof my))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new my;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
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
 */class yy{constructor(){this.B_=new Td(id.comparator)}track(e){const t=e.doc.key,n=this.B_.get(t);n?0!==e.type&&3===n.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==n.type?this.B_=this.B_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.B_=this.B_.remove(t):1===e.type&&2===n.type?this.B_=this.B_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):Ph():this.B_=this.B_.insert(t,e)}L_(){const e=[];return this.B_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class _y{constructor(e,t,n,i,r,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new _y(e,t,my.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
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
 */class vy{constructor(){this.k_=void 0,this.listeners=[]}}class wy{constructor(){this.queries=new Jf((e=>Hf(e)),zf),this.onlineState="Unknown",this.q_=new Set}}async function by(e,t){const n=xh(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new vy),r)try{s.k_=await n.onListen(i)}catch(e){const n=gy(e,`Initialization of query '${Wf(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&Cy(n)}async function Ey(e,t){const n=xh(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Iy(e,t){const n=xh(e);let i=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.K_(e)&&(i=!0);r.k_=e}}i&&Cy(n)}function Ty(e,t,n){const i=xh(e),r=i.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);i.queries.delete(t)}function Cy(e){e.q_.forEach((e=>{e.next()}))}class Sy{constructor(e,t,n){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=n||{}}K_(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new _y(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.J_||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;const t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=_y.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}
/**
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
 */
/**
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
 */
class ky{constructor(e){this.key=e}}class Ay{constructor(e){this.key=e}}class Ry{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=cp(),this.mutatedKeys=cp(),this._a=Qf(e),this.aa=new my(this._a)}get ua(){return this.ia}ca(e,t){const n=t?t.la:new yy,i=t?t.aa:this.aa;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const l=i.get(e),u=Kf(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.ha(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this._a(u,a)>0||c&&this._a(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(s=s.add(u),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{aa:s,la:n,Zi:o,mutatedKeys:r}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ph()}};return n(e)-n(t)}(e.type,t.type)||this._a(e.doc,t.doc))),this.Pa(n);const s=t?this.Ia():[],o=0===this.oa.size&&this.current?1:0,a=o!==this.sa;return this.sa=o,0!==r.length||a?{snapshot:new _y(this.query,e.aa,i,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ta:s}:{Ta:s}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new yy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach((e=>this.ia=this.ia.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.ia=this.ia.delete(e))),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=cp(),this.aa.forEach((e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))}));const t=[];return e.forEach((e=>{this.oa.has(e)||t.push(new Ay(e))})),this.oa.forEach((n=>{e.has(n)||t.push(new ky(n))})),t}da(e){this.ia=e.ls,this.oa=cp();const t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return _y.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class Ny{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Oy{constructor(e){this.key=e,this.Ra=!1}}class Dy{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new Jf((e=>Hf(e)),zf),this.fa=new Map,this.ga=new Set,this.pa=new Td(id.comparator),this.ya=new Map,this.wa=new em,this.Sa={},this.ba=new Map,this.Da=Gg.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function Py(e,t){const n=Jy(e);let i,r;const s=n.ma.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.Aa();else{const e=await _m(n.localStore,Vf(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await Ly(n,t,i,"current"===s,e.resumeToken),n.isPrimaryClient&&qm(n.remoteStore,e)}return r}async function Ly(e,t,n,i,r){e.va=(t,n,i)=>async function(e,t,n,i){let r=t.view.ca(n);r.Zi&&(r=await wm(e.localStore,t.query,!1).then((({documents:e})=>t.view.ca(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return Hy(e,t.targetId,o.Ta),o.snapshot}(e,t,n,i);const s=await wm(e.localStore,t,!0),o=new Ry(t,s.ls),a=o.ca(s.documents),c=ig.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),l=o.applyChanges(a,e.isPrimaryClient,c);Hy(e,n,l.Ta);const u=new Ny(t,n,o);return e.ma.set(t,u),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),l.snapshot}async function xy(e,t){const n=xh(e),i=n.ma.get(t),r=n.fa.get(i.targetId);if(r.length>1)return n.fa.set(i.targetId,r.filter((e=>!zf(e,t)))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await vm(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),$m(n.remoteStore,i.targetId),$y(n,i.targetId)})).catch(hd)):($y(n,i.targetId),await vm(n.localStore,i.targetId,!0))}async function My(e,t){const n=xh(e);try{const e=await function(e,t){const n=xh(e),i=t.snapshotVersion;let r=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ss.newChangeBuffer({trackRemovals:!0});r=n.ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.qr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.qr.addMatchingKeys(e,s.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);var u,h,d;null!==t.targetMismatches.get(a)?l=l.withResumeToken(Od.EMPTY_BYTE_STRING,Xh.min()).withLastLimboFreeSnapshotVersion(Xh.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),h=l,d=s,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.qr.updateTargetData(e,l))}));let a=Zf(),c=cp();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(mm(e,s,t.documentUpdates).next((e=>{a=e.us,c=e.cs}))),!i.isEqual(Xh.min())){const t=n.qr.getLastRemoteSnapshotVersion(e).next((t=>n.qr.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return dd.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.ts=r,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.ya.get(t);i&&(Lh(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.Ra=!0:e.modifiedDocuments.size>0?Lh(i.Ra):e.removedDocuments.size>0&&(Lh(i.Ra),i.Ra=!1))})),await Gy(n,e,t)}catch(e){await hd(e)}}function Uy(e,t,n){const i=xh(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.ma.forEach(((n,i)=>{const r=i.view.Q_(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=xh(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Q_(t)&&(i=!0)})),i&&Cy(n)}(i.eventManager,t),e.length&&i.Va.a_(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Fy(e,t,n){const i=xh(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.ya.get(t),s=r&&r.key;if(s){let e=new Td(id.comparator);e=e.insert(s,of.newNoDocument(s,Xh.min()));const n=cp().add(s),r=new ng(Xh.min(),new Map,new Td(Qh),e,n);await My(i,r),i.pa=i.pa.remove(s),i.ya.delete(t),Ky(i)}else await vm(i.localStore,t,!1).then((()=>$y(i,t,n))).catch(hd)}async function By(e,t){const n=xh(e),i=t.batch.batchId;try{const e=await function(e,t){const n=xh(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=dd.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Lh(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=cp();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);qy(n,i,null),jy(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Gy(n,e)}catch(e){await hd(e)}}async function Vy(e,t,n){const i=xh(e);try{const e=await function(e,t){const n=xh(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Lh(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);qy(i,t,n),jy(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Gy(i,e)}catch(e){await hd(e)}}function jy(e,t){(e.ba.get(t)||[]).forEach((e=>{e.resolve()})),e.ba.delete(t)}function qy(e,t,n){const i=xh(e);let r=i.Sa[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.Sa[i.currentUser.toKey()]=r}}function $y(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.fa.get(t))e.ma.delete(i),n&&e.Va.Fa(i,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach((t=>{e.wa.containsKey(t)||zy(e,t)}))}function zy(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);null!==n&&($m(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),Ky(e))}function Hy(e,t,n){for(const i of n)i instanceof ky?(e.wa.addReference(i.key,t),Wy(e,i)):i instanceof Ay?(Rh("SyncEngine","Document no longer in limbo: "+i.key),e.wa.removeReference(i.key,t),e.wa.containsKey(i.key)||zy(e,i.key)):Ph()}function Wy(e,t){const n=t.key,i=n.path.canonicalString();e.pa.get(n)||e.ga.has(i)||(Rh("SyncEngine","New document in limbo: "+n),e.ga.add(i),Ky(e))}function Ky(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new id(ed.fromString(t)),i=e.Da.next();e.ya.set(i,new Oy(n)),e.pa=e.pa.insert(n,i),qm(e.remoteStore,new jg(Vf(Mf(n.path)),i,"TargetPurposeLimboResolution",pd._e))}}async function Gy(e,t,n){const i=xh(e),r=[],s=[],o=[];i.ma.isEmpty()||(i.ma.forEach(((e,a)=>{o.push(i.va(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=lm.Qi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.Va.a_(r),await async function(e,t){const n=xh(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>dd.forEach(t,(t=>dd.forEach(t.ki,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>dd.forEach(t.qi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!fd(e))throw e;Rh("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.ts.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.ts=n.ts.insert(t,r)}}}(i.localStore,s))}async function Qy(e,t){const n=xh(e);if(!n.currentUser.isEqual(t)){Rh("SyncEngine","User change. New user:",t.toKey());const e=await pm(n.localStore,t);n.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",(i=n).ba.forEach((e=>{e.forEach((e=>{e.reject(new Uh(Mh.CANCELLED,r))}))})),i.ba.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Gy(n,e._s)}var i,r}function Yy(e,t){const n=xh(e),i=n.ya.get(t);if(i&&i.Ra)return cp().add(i.key);{let e=cp();const i=n.fa.get(t);if(!i)return e;for(const t of i){const i=n.ma.get(t);e=e.unionWith(i.view.ua)}return e}}function Jy(e){const t=xh(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=My.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Fy.bind(null,t),t.Va.a_=Iy.bind(null,t.eventManager),t.Va.Fa=Ty.bind(null,t.eventManager),t}function Xy(e){const t=xh(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=By.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vy.bind(null,t),t}class Zy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Dm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return fm(this.persistence,new hm,e.initialUser,this.serializer)}createPersistence(e){return new om(cm.jr,this.serializer)}createSharedClientState(e){return new Im}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Uy(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qy.bind(null,this.syncEngine),await hy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wy}createDatastore(e){const t=Dm(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new Nm(i));var i;return function(e,t,n,i){return new Um(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Uy(this.syncEngine,e,0),s=Cm.D()?new Cm:new Tm,new Bm(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new Dy(e,t,n,i,r,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=xh(e);Rh("RemoteStore","RemoteStore shutting down."),t.C_.add(5),await jm(t),t.F_.shutdown(),t.M_.set("Unknown")}(this.remoteStore)}}
/**
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
 */
/**
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
 */
/**
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
 */
class t_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Nh("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
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
 */
/**
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
 */
class n_{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ch.UNAUTHENTICATED,this.clientId=Gh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Rh("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Rh("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Uh(Mh.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fh;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=gy(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function i_(e,t){e.asyncQueue.verifyOperationInProgress(),Rh("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await pm(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function r_(e,t){e.asyncQueue.verifyOperationInProgress();const n=await o_(e);Rh("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>uy(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>uy(t.remoteStore,n))),e._onlineComponents=t}function s_(e){return"FirebaseError"===e.name?e.code===Mh.FAILED_PRECONDITION||e.code===Mh.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function o_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Rh("FirestoreClient","Using user provided OfflineComponentProvider");try{await i_(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!s_(n))throw n;Oh("Error using user provided cache. Falling back to memory cache: "+n),await i_(e,new Zy)}}else Rh("FirestoreClient","Using default OfflineComponentProvider"),await i_(e,new Zy);return e._offlineComponents}async function a_(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Rh("FirestoreClient","Using user provided OnlineComponentProvider"),await r_(e,e._uninitializedComponentsProvider._online)):(Rh("FirestoreClient","Using default OnlineComponentProvider"),await r_(e,new e_))),e._onlineComponents}function c_(e){return a_(e).then((e=>e.syncEngine))}async function l_(e){const t=await a_(e),n=t.eventManager;return n.onListen=Py.bind(null,t.syncEngine),n.onUnlisten=xy.bind(null,t.syncEngine),n}function u_(e,t,n={}){const i=new Fh;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new t_({next:n=>{t.enqueueAndForget((()=>Ey(e,o))),n.fromCache&&"server"===i.source?r.reject(new Uh(Mh.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Sy(n,s,{includeMetadataChanges:!0,J_:!0});return by(e,o)}(await l_(e),e.asyncQueue,t,n,i))),i.promise}
/**
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
 */
function h_(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
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
 */}const d_=new Map;
/**
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
 */function f_(e,t,n){if(!n)throw new Uh(Mh.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function p_(e){if(!id.isDocumentKey(e))throw new Uh(Mh.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function g_(e){if(id.isDocumentKey(e))throw new Uh(Mh.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function m_(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ph()}function y_(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Uh(Mh.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=m_(e);throw new Uh(Mh.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
class __{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Uh(Mh.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Uh(Mh.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new Uh(Mh.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=h_(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Uh(Mh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Uh(Mh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Uh(Mh.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class v_{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new __({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Uh(Mh.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Uh(Mh.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new __(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Vh;switch(e.type){case"firstParty":return new zh(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Uh(Mh.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=d_.get(e);t&&(Rh("ComponentProvider","Removing Datastore"),d_.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
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
 */
class w_{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new w_(this.firestore,e,this._query)}}class b_{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new E_(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new b_(this.firestore,e,this._key)}}class E_ extends w_{constructor(e,t,n){super(e,t,Mf(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new b_(this.firestore,null,new id(e))}withConverter(e){return new E_(this.firestore,e,this._path)}}function I_(e,t,...n){if(e=ye(e),f_("collection","path",t),e instanceof v_){const i=ed.fromString(t,...n);return g_(i),new E_(e,null,i)}{if(!(e instanceof b_||e instanceof E_))throw new Uh(Mh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ed.fromString(t,...n));return g_(i),new E_(e.firestore,null,i)}}function T_(e,t,...n){if(e=ye(e),1===arguments.length&&(t=Gh.newId()),f_("doc","path",t),e instanceof v_){const i=ed.fromString(t,...n);return p_(i),new b_(e,null,new id(i))}{if(!(e instanceof b_||e instanceof E_))throw new Uh(Mh.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ed.fromString(t,...n));return p_(i),new b_(e.firestore,e instanceof E_?e.converter:null,new id(i))}}
/**
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
 */
class C_{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Pm(this,"async_queue_retry"),this.iu=()=>{const e=Om();e&&Rh("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const e=Om();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const t=Om();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise((()=>{}));const t=new Fh;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Ya.push(e),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!fd(e))throw e;Rh("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(e){const t=this.Ja.then((()=>(this.tu=!0,e().catch((e=>{this.eu=e,this.tu=!1;throw Nh("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.tu=!1,e))))));return this.Ja=t,t}enqueueAfterDelay(e,t,n){this.su(),this.ru.indexOf(e)>-1&&(t=0);const i=py.createAndSchedule(this,e,t,n,(e=>this.au(e)));return this.Xa.push(i),i}su(){this.eu&&Ph()}verifyOperationInProgress(){}async uu(){let e;do{e=this.Ja,await e}while(e!==this.Ja)}cu(e){for(const t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then((()=>{this.Xa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Xa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()}))}hu(e){this.ru.push(e)}au(e){const t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class S_ extends v_{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new C_,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||A_(this),this._firestoreClient.terminate()}}function k_(e){return e._firestoreClient||A_(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function A_(e){var t,n,i;const r=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new Bd(o,a,c,(l=r).host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,h_(l.experimentalLongPollingOptions),l.useFetchStreams));var o,a,c,l;e._firestoreClient=new n_(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
/**
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
 */
class R_{constructor(e){this._byteString=e}static fromBase64String(e){try{return new R_(Od.fromBase64String(e))}catch(e){throw new Uh(Mh.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new R_(Od.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
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
 */class N_{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Uh(Mh.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nd(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
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
 */
class O_{constructor(e){this._methodName=e}}
/**
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
 */class D_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Uh(Mh.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Uh(Mh.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Qh(this._lat,e._lat)||Qh(this._long,e._long)}}
/**
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
 */const P_=/^__.*__$/;class L_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new xp(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lp(e,this.data,t,this.fieldTransforms)}}function x_(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ph()}}class M_{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new M_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Tu({path:n,du:!1});return i.Au(e),i}Ru(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Tu({path:n,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return G_(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(x_(this.Iu)&&P_.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class U_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Dm(e)}pu(e,t,n,i=!1){return new M_({Iu:e,methodName:t,gu:n,path:nd.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function F_(e){const t=e._freezeSettings(),n=Dm(e._databaseId);return new U_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function B_(e,t,n,i,r,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,r);z_("Data must be an object, but it was:",o,i);const a=q_(i,o);let c,l;if(s.merge)c=new Rd(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=H_(t,i,n);if(!o.contains(r))throw new Uh(Mh.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Q_(e,r)||e.push(r)}c=new Rd(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new L_(new rf(a),c,l)}function V_(e,t,n,i=!1){return j_(n,e.pu(i?4:3,t))}function j_(e,t){if($_(e=ye(e)))return z_("Unsupported field value:",t,e),q_(e,t);if(e instanceof O_)return function(e,t){if(!x_(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&4!==t.Iu)throw t.mu("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=j_(r,t.Vu(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=ye(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return fp(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Jh.fromDate(e);return{timestampValue:mg(t.serializer,n)}}if(e instanceof Jh){const n=new Jh(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:mg(t.serializer,n)}}if(e instanceof D_)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof R_)return{bytesValue:yg(t.serializer,e._byteString)};if(e instanceof b_){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.mu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:wg(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${m_(e)}`)}(e,t)}function q_(e,t){const n={};return Id(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ed(e,((e,i)=>{const r=j_(i,t.Eu(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function $_(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Jh||e instanceof D_||e instanceof R_||e instanceof b_||e instanceof O_)}function z_(e,t,n){if(!$_(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=m_(n);throw"an object"===i?t.mu(e+" a custom object"):t.mu(e+" "+i)}var i}function H_(e,t,n){if((t=ye(t))instanceof N_)return t._internalPath;if("string"==typeof t)return K_(e,t);throw G_("Field path arguments must be of type string or ",e,!1,void 0,n)}const W_=new RegExp("[~\\*/\\[\\]]");function K_(e,t,n){if(t.search(W_)>=0)throw G_(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new N_(...t.split("."))._internalPath}catch(i){throw G_(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function G_(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Uh(Mh.INVALID_ARGUMENT,a+e+c)}function Q_(e,t){return e.some((e=>e.isEqual(t)))}
/**
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
 */class Y_{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new b_(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new J_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(X_("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class J_ extends Y_{data(){return super.data()}}function X_(e,t){return"string"==typeof t?K_(e,t):t instanceof N_?t._internalPath:t._delegate._internalPath}
/**
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
 */function Z_(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Uh(Mh.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ev{}class tv extends ev{}function nv(e,t,...n){let i=[];t instanceof ev&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof sv)).length,n=e.filter((e=>e instanceof iv)).length;if(t>1||t>0&&n>0)throw new Uh(Mh.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const t of i)e=t._apply(e);return e}class iv extends tv{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new iv(e,t,n)}_apply(e){const t=this._parse(e);return cv(e._query,t),new w_(e.firestore,e.converter,qf(e._query,t))}_parse(e){const t=F_(e.firestore);return function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Uh(Mh.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){av(o,s);const t=[];for(const n of o)t.push(ov(i,e,n));a={arrayValue:{values:t}}}else a=ov(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||av(o,s),a=V_(n,t,o,"in"===s||"not-in"===s);return ff.create(r,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function rv(e,t,n){const i=t,r=X_("where",e);return iv._create(r,i,n)}class sv extends ev{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sv(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:pf.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const e of i)cv(n,e),n=qf(n,e)}(e._query,t),new w_(e.firestore,e.converter,qf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ov(e,t,n){if("string"==typeof(n=ye(n))){if(""===n)throw new Uh(Mh.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ff(t)&&-1!==n.indexOf("/"))throw new Uh(Mh.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(ed.fromString(n));if(!id.isDocumentKey(i))throw new Uh(Mh.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Qd(e,new id(i))}if(n instanceof b_)return Qd(e,n._key);throw new Uh(Mh.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${m_(n)}.`)}function av(e,t){if(!Array.isArray(e)||0===e.length)throw new Uh(Mh.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function cv(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Uh(Mh.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Uh(Mh.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class lv{convertValue(e,t="none"){switch(qd(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ld(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xd(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ph()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ed(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new D_(Ld(e.latitude),Ld(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ud(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fd(e));default:return null}}convertTimestamp(e){const t=Pd(e);return new Jh(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ed.fromString(e);Lh(Vg(n));const i=new Vd(n.get(1),n.get(3)),r=new id(n.popFirst(5));return i.isEqual(t)||Nh(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
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
 */function uv(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
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
 */
class hv{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dv extends Y_{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new fv(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(X_("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class fv extends dv{data(e={}){return super.data(e)}}class pv{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new hv(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new fv(this._firestore,this._userDataWriter,n.key,n,new hv(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Uh(Mh.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new fv(e._firestore,e._userDataWriter,n.doc.key,n.doc,new hv(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new fv(e._firestore,e._userDataWriter,t.doc.key,t.doc,new hv(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:gv(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gv(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ph()}}class mv extends lv{constructor(e){super(),this.firestore=e}convertBytes(e){return new R_(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new b_(this.firestore,null,t)}}function yv(e){e=y_(e,w_);const t=y_(e.firestore,S_),n=k_(t),i=new mv(t);return Z_(e._query),u_(n,e._query).then((n=>new pv(t,i,e,n)))}function _v(e,t){const n=y_(e.firestore,S_),i=T_(e),r=uv(e.converter,t);return vv(n,[B_(F_(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,Sp.exists(!1))]).then((()=>i))}function vv(e,t){return function(e,t){const n=new Fh;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Xy(e);try{const e=await function(e,t){const n=xh(e),i=Jh.now(),r=t.reduce(((e,t)=>e.add(t.key)),cp());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Zf(),c=cp();return n.ss.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=Dp(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new xp(e.key,t,sf(t.value.mapValue),Sp.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:np(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Sa[e.currentUser.toKey()];i||(i=new Td(Qh)),i=i.insert(t,n),e.Sa[e.currentUser.toKey()]=i}(i,e.batchId,n),await Gy(i,e.changes),await ty(i.remoteStore)}catch(e){const t=gy(e,"Failed to persist write");n.reject(t)}}(await c_(e),t,n))),n.promise}(k_(e),t)}new WeakMap;
/**
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
 */!function(e,t=!0){Sh="10.6.0",Xe(new _e("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new S_(new qh(e.getProvider("auth-internal")),new Wh(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Uh(Mh.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vd(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),rt("@firebase/firestore","4.3.2",e),rt("@firebase/firestore","4.3.2","esm2017")}();function wv(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ev=bv,Iv=new K("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Tv=new Ae("@firebase/auth");function Cv(e,...t){Tv.logLevel<=Ee.ERROR&&Tv.error(`Auth (10.6.0): ${e}`,...t)}
/**
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
 */function Sv(e,...t){throw Rv(e,...t)}function kv(e,...t){return Rv(e,...t)}function Av(e,t,n){const i=Object.assign(Object.assign({},Ev()),{[t]:n});return new K("auth","Firebase",i).create(t,{appName:e.name})}function Rv(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Iv.create(e,...t)}function Nv(e,t,...n){if(!e)throw Rv(t,...n)}function Ov(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Cv(t),new Error(t)}function Dv(e,t){e||Ov(t)}
/**
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
 */function Pv(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Lv(){return"http:"===xv()||"https:"===xv()}function xv(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
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
 */
/**
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
 */
class Mv{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dv(t>e,"Short delay should be less than long delay!"),this.isMobile=F()||V()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Lv()||B()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
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
 */function Uv(e,t){Dv(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
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
 */class Fv{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Ov("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Ov("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Ov("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
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
 */const Bv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Vv=new Mv(3e4,6e4);
/**
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
 */function jv(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function qv(e,t,n,i,r={}){return $v(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=oe(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Fv.fetch()(Hv(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function $v(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bv),t);try{const t=new Kv(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Gv(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Gv(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Gv(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Gv(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Av(e,a,o);Sv(e,a)}}catch(t){if(t instanceof W)throw t;Sv(e,"network-request-failed",{message:String(t)})}}async function zv(e,t,n,i,r={}){const s=await qv(e,t,n,i,r);return"mfaPendingCredential"in s&&Sv(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Hv(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Uv(e.config,r):`${e.config.apiScheme}://${r}`}function Wv(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Kv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(kv(this.auth,"network-request-failed"))),Vv.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gv(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=kv(e,t,i);return r.customData._tokenResponse=n,r}
/**
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
 */function Qv(e){return void 0!==e&&void 0!==e.enterprise}class Yv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Wv(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
/**
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
 */async function Jv(e,t){return qv(e,"GET","/v2/recaptchaConfig",jv(e,t))}
/**
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
 */
/**
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
 */
function Xv(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
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
 */function Zv(e){return 1e3*Number(e)}function ew(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Cv("JWT malformed, contained fewer than 3 sections"),null;try{const e=S(n);return e?JSON.parse(e):(Cv("Failed to decode base64 JWT payload"),null)}catch(e){return Cv("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
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
 */
async function tw(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof W&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
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
 */class iw{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xv(this.lastLoginAt),this.creationTime=Xv(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function rw(e){var t;const n=e.auth,i=await e.getIdToken(),r=await tw(e,async function(e,t){return qv(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Nv(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=wv(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new iw(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
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
 */
class sw{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Nv(e.idToken,"internal-error"),Nv(void 0!==e.idToken,"internal-error"),Nv(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ew(e);return Nv(t,"internal-error"),Nv(void 0!==t.exp,"internal-error"),Nv(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Nv(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
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
 */
async function(e,t){const n=await $v(e,{},(async()=>{const n=oe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Hv(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Fv.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new sw;return n&&(Nv("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Nv("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Nv("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sw,this.toJSON())}_performRefresh(){return Ov("not implemented")}}
/**
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
 */function ow(e,t){Nv("string"==typeof e||void 0===e,"internal-error",{appName:t})}class aw{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=wv(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new iw(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await tw(this,this.stsTokenManager.getToken(this.auth,e));return Nv(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=ye(e),i=await n.getIdToken(t),r=ew(i);Nv(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Xv(Zv(r.auth_time)),issuedAtTime:Xv(Zv(r.iat)),expirationTime:Xv(Zv(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=ye(e);await rw(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Nv(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new aw(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Nv(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rw(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tw(this,async function(e,t){return qv(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:_,emailVerified:v,isAnonymous:w,providerData:b,stsTokenManager:E}=t;Nv(_&&E,e,"internal-error");const I=sw.fromJSON(this.name,E);Nv("string"==typeof _,e,"internal-error"),ow(u,e.name),ow(h,e.name),Nv("boolean"==typeof v,e,"internal-error"),Nv("boolean"==typeof w,e,"internal-error"),ow(d,e.name),ow(f,e.name),ow(p,e.name),ow(g,e.name),ow(m,e.name),ow(y,e.name);const T=new aw({uid:_,auth:e,email:h,emailVerified:v,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new sw;i.updateFromServerResponse(t);const r=new aw({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await rw(r),r}}
/**
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
 */const cw=new Map;function lw(e){Dv(e instanceof Function,"Expected a class definition");let t=cw.get(e);return t?(Dv(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,cw.set(e,t),t)}
/**
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
 */class uw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uw.type="NONE";const hw=uw;
/**
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
 */function dw(e,t,n){return`firebase:${e}:${t}:${n}`}class fw{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=dw(this.userKey,i.apiKey,r),this.fullPersistenceKey=dw("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?aw._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fw(lw(hw),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||lw(hw);const s=dw(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=aw._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new fw(r,e,n)):new fw(r,e,n)}}
/**
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
 */function pw(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_w(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gw(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ww(t))return"Blackberry";if(bw(t))return"Webos";if(mw(t))return"Safari";if((t.includes("chrome/")||yw(t))&&!t.includes("edge/"))return"Chrome";if(vw(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function gw(e=U()){return/firefox\//i.test(e)}function mw(e=U()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yw(e=U()){return/crios\//i.test(e)}function _w(e=U()){return/iemobile/i.test(e)}function vw(e=U()){return/android/i.test(e)}function ww(e=U()){return/blackberry/i.test(e)}function bw(e=U()){return/webos/i.test(e)}function Ew(e=U()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Iw(){return j()&&10===document.documentMode}function Tw(e=U()){return Ew(e)||vw(e)||bw(e)||ww(e)||/windows phone/i.test(e)||_w(e)}
/**
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
 */
function Cw(e,t=[]){let n;switch(e){case"Browser":n=pw(U());break;case"Worker":n=`${pw(U())}-${e}`;break;default:n=e}return`${n}/JsCore/10.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
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
 */class Sw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
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
 */class kw{constructor(e){var t,n,i,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
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
 */class Aw{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nw(this),this.idTokenSubscription=new Nw(this),this.beforeStateQueue=new Sw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lw(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await fw.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Nv(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rw(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ye(e):null;return t&&Nv(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Nv(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(lw(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return qv(e,"GET","/v2/passwordPolicy",jv(e,t))}
/**
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
 */(this),t=new kw(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new K("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return qv(e,"POST","/v2/accounts:revokeToken",jv(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lw(e)||this._popupRedirectResolver;Nv(t,this,"argument-error"),this.redirectPersistenceManager=await fw.create(this,[lw(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(Nv(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"==typeof t){const r=e.addObserver(t,n,i);return()=>{s=!0,r()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Nv(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Tv.logLevel<=Ee.WARN&&Tv.warn(`Auth (10.6.0): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Rw(e){return ye(e)}class Nw{constructor(e){this.auth=e,this.observer=null,this.addObserver=ue((e=>this.observer=e))}get next(){return Nv(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
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
 */function Ow(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=kv("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Dw(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Pw{constructor(e){this.type="recaptcha-enterprise",this.auth=Rw(e)}async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;Qv(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Jv(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Yv(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Qv(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Ow("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Lw(e,t,n,i=!1){const r=new Pw(e);let s;try{s=await r.verify(n)}catch(e){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function xw(e,t,n,i){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Lw(e,t,n,"getOobCode"===n);return i(e,r)}return i(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Lw(e,t,n,"getOobCode"===n);return i(e,r)}return Promise.reject(r)}))}function Mw(e,t,n){const i=Rw(e);Nv(i._canInitEmulator,i,"emulator-config-failed"),Nv(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Uw(t),{host:o,port:a}=function(e){const t=Uw(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Fw(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Fw(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
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
 */()}function Uw(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fw(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Bw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ov("not implemented")}_getIdTokenResponse(e){return Ov("not implemented")}_linkToIdToken(e,t){return Ov("not implemented")}_getReauthenticationResolver(e){return Ov("not implemented")}}
/**
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
 */async function Vw(e,t){return qv(e,"POST","/v1/accounts:signUp",t)}
/**
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
 */
async function jw(e,t){return zv(e,"POST","/v1/accounts:signInWithPassword",jv(e,t))}
/**
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
 */
class qw extends Bw{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new qw(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new qw(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xw(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",jw);case"emailLink":
/**
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
 */
return async function(e,t){return zv(e,"POST","/v1/accounts:signInWithEmailLink",jv(e,t))}(e,{email:this._email,oobCode:this._password});default:Sv(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return xw(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vw);case"emailLink":return async function(e,t){return zv(e,"POST","/v1/accounts:signInWithEmailLink",jv(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Sv(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
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
 */async function $w(e,t){return zv(e,"POST","/v1/accounts:signInWithIdp",jv(e,t))}
/**
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
 */class zw extends Bw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new zw(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sv("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=wv(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new zw(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return $w(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$w(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$w(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=oe(t)}return e}}
/**
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
 */const Hw={USER_NOT_FOUND:"user-not-found"};
/**
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
 */
class Ww extends Bw{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ww({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ww({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return zv(e,"POST","/v1/accounts:signInWithPhoneNumber",jv(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await zv(e,"POST","/v1/accounts:signInWithPhoneNumber",jv(e,t));if(n.temporaryProof)throw Gv(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return zv(e,"POST","/v1/accounts:signInWithPhoneNumber",jv(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Hw)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Ww({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
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
 */class Kw{constructor(e){var t,n,i,r,s,o;const a=ae(ce(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Nv(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=ae(ce(e)).link,n=t?ae(ce(t)).deep_link_id:null,i=ae(ce(e)).deep_link_id;return(i?ae(ce(i)).link:null)||i||n||t||e}(e);try{return new Kw(t)}catch(e){return null}}}
/**
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
 */
class Gw{constructor(){this.providerId=Gw.PROVIDER_ID}static credential(e,t){return qw._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Kw.parseLink(t);return Nv(n,"argument-error"),qw._fromEmailAndCode(e,n.code,n.tenantId)}}Gw.PROVIDER_ID="password",Gw.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Gw.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
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
 */
class Qw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Yw extends Qw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
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
 */
class Jw extends Yw{constructor(){super("facebook.com")}static credential(e){return zw._fromParams({providerId:Jw.PROVIDER_ID,signInMethod:Jw.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jw.credentialFromTaggedObject(e)}static credentialFromError(e){return Jw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jw.credential(e.oauthAccessToken)}catch(e){return null}}}Jw.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jw.PROVIDER_ID="facebook.com";
/**
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
 */
class Xw extends Yw{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return zw._fromParams({providerId:Xw.PROVIDER_ID,signInMethod:Xw.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xw.credentialFromTaggedObject(e)}static credentialFromError(e){return Xw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xw.credential(t,n)}catch(e){return null}}}Xw.GOOGLE_SIGN_IN_METHOD="google.com",Xw.PROVIDER_ID="google.com";
/**
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
 */
class Zw extends Yw{constructor(){super("github.com")}static credential(e){return zw._fromParams({providerId:Zw.PROVIDER_ID,signInMethod:Zw.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zw.credentialFromTaggedObject(e)}static credentialFromError(e){return Zw.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Zw.credential(e.oauthAccessToken)}catch(e){return null}}}Zw.GITHUB_SIGN_IN_METHOD="github.com",Zw.PROVIDER_ID="github.com";
/**
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
 */
class eb extends Yw{constructor(){super("twitter.com")}static credential(e,t){return zw._fromParams({providerId:eb.PROVIDER_ID,signInMethod:eb.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return eb.credentialFromTaggedObject(e)}static credentialFromError(e){return eb.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return eb.credential(t,n)}catch(e){return null}}}
/**
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
 */
async function tb(e,t){return zv(e,"POST","/v1/accounts:signUp",jv(e,t))}
/**
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
 */eb.TWITTER_SIGN_IN_METHOD="twitter.com",eb.PROVIDER_ID="twitter.com";class nb{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await aw._fromIdTokenResponse(e,n,i),s=ib(n);return new nb({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=ib(n);return new nb({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function ib(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
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
 */
/**
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
 */
class rb extends W{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,rb.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new rb(e,t,n,i)}}function sb(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw rb._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
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
 */async function ob(e,t,n=!1){const i=await tw(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return nb._forOperation(e,"link",i)}
/**
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
 */
async function ab(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await tw(e,sb(i,r,t,e),n);Nv(s.idToken,i,"internal-error");const o=ew(s.idToken);Nv(o,i,"internal-error");const{sub:a}=o;return Nv(e.uid===a,i,"user-mismatch"),nb._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Sv(i,"user-mismatch"),e}}
/**
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
 */async function cb(e,t,n=!1){const i="signIn",r=await sb(e,i,t),s=await nb._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function lb(e,t){return cb(Rw(e),t)}
/**
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
 */
async function ub(e){const t=Rw(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function hb(e,t,n){const i=Rw(e),r=xw(i,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",tb),s=await r.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ub(e),t})),o=await nb._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(o.user),o}function db(e,t,n){return lb(ye(e),Gw.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ub(e),t}))}
/**
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
 */new WeakMap;
/**
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
 */
class fb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
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
 */class pb extends fb{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=U();return mw(e)||Ew(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Tw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Iw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pb.type="LOCAL";const gb=pb;
/**
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
 */class mb extends fb{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mb.type="SESSION";const yb=mb;
/**
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
 */
/**
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
 */
class _b{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new _b(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
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
 */
function vb(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */_b.receivers=[];class wb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=vb("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
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
 */function bb(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
function Eb(){return void 0!==bb().WorkerGlobalScope&&"function"==typeof bb().importScripts}class Ib{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Tb(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Cb(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ib(e).toPromise()}(),t(await Cb()))}))}))}async function Sb(e,t,n){const i=Tb(e,!0).put({fbase_key:t,value:n});return new Ib(i).toPromise()}function kb(e,t){const n=Tb(e,!0).delete(t);return new Ib(n).toPromise()}class Ab{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Cb()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Eb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_b._getInstance(Eb()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new wb(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cb();return await Sb(e,"__sak","1"),await kb(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Sb(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Tb(e,!1).get(t),i=await new Ib(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>kb(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Tb(e,!1).getAll();return new Ib(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ab.type="LOCAL";const Rb=Ab;
/**
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
 */
/**
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
 */
Dw("rcb"),new Mv(3e4,6e4);async function Nb(e,t,n){var i;const r=await n.verify();try{let s;if(Nv("string"==typeof r,e,"argument-error"),Nv("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Nv("enroll"===t.type,e,"internal-error");const n=await
/**
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
 */
function(e,t){return qv(e,"POST","/v2/accounts/mfaEnrollment:start",jv(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Nv("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Nv(n,e,"missing-multi-factor-info");const o=await function(e,t){return qv(e,"POST","/v2/accounts/mfaSignIn:start",jv(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return qv(e,"POST","/v1/accounts:sendVerificationCode",jv(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
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
 */
class Ob{constructor(e){this.providerId=Ob.PROVIDER_ID,this.auth=Rw(e)}verifyPhoneNumber(e,t){return Nb(this.auth,e,ye(t))}static credential(e,t){return Ww._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ob.credentialFromTaggedObject(t)}static credentialFromError(e){return Ob.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ww._fromTokenResponse(t,n):null}}
/**
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
 */
function Db(e,t){return t?lw(t):(Nv(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */Ob.PROVIDER_ID="phone",Ob.PHONE_SIGN_IN_METHOD="phone";class Pb extends Bw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $w(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $w(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $w(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lb(e){return cb(e.auth,new Pb(e),e.bypassAuthState)}function xb(e){const{auth:t,user:n}=e;return Nv(n,t,"internal-error"),ab(n,new Pb(e),e.bypassAuthState)}async function Mb(e){const{auth:t,user:n}=e;return Nv(n,t,"internal-error"),ob(n,new Pb(e),e.bypassAuthState)}
/**
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
 */class Ub{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lb;case"linkViaPopup":case"linkViaRedirect":return Mb;case"reauthViaPopup":case"reauthViaRedirect":return xb;default:Sv(this.auth,"internal-error")}}resolve(e){Dv(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dv(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
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
 */const Fb=new Mv(2e3,1e4);class Bb extends Ub{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Bb.currentPopupAction&&Bb.currentPopupAction.cancel(),Bb.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Nv(e,this.auth,"internal-error"),e}async onExecution(){Dv(1===this.filter.length,"Popup operations only handle one event");const e=vb();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(kv(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(kv(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bb.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(kv(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Fb.get())};e()}}Bb.currentPopupAction=null;
/**
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
 */
const Vb=new Map;class jb extends Ub{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Vb.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=zb(t),i=$b(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Vb.set(this.auth._key(),e)}return this.bypassAuthState||Vb.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function qb(e,t){Vb.set(e._key(),t)}function $b(e){return lw(e._redirectPersistence)}function zb(e){return dw("pendingRedirect",e.config.apiKey,e.name)}
/**
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
 */async function Hb(e,t,n=!1){const i=Rw(e),r=Db(i,t),s=new jb(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gb(e);default:return!1}}
/**
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Gb(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(kv(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kb(e))}saveEventToCache(e){this.cachedEventUids.add(Kb(e)),this.lastProcessedEventTime=Date.now()}}function Kb(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Gb({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
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
 */
const Qb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Yb=/^https?/;async function Jb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return qv(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Xb(e))return}catch(e){}Sv(e,"unauthorized-domain")}function Xb(e){const t=Pv(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Yb.test(n))return!1;if(Qb.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Zb=new Mv(3e4,6e4);function eE(){const e=bb().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let tE=null;function nE(e){return tE=tE||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){eE(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{eE(),n(kv(e,"network-request-failed"))},timeout:Zb.get()})}if(null===(r=null===(i=bb().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=bb().gapi)||void 0===s?void 0:s.load)){const t=Dw("iframefcb");return bb()[t]=()=>{gapi.load?o():n(kv(e,"network-request-failed"))},Ow(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw tE=null,e}))}(e),tE}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const iE=new Mv(5e3,15e3),rE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oE(e){const t=e.config;Nv(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Uv(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"10.6.0"},r=sE.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${oe(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */
const aE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class cE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function lE(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},aE),{width:i.toString(),height:r.toString(),top:s,left:o}),l=U().toLowerCase();n&&(a=yw(l)?"_blank":n),gw(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=U()){var t;return Ew(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
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
 */(t||"",a),new cE(null);const h=window.open(t||"",a,u);Nv(h,e,"popup-blocked");try{h.focus()}catch(e){}return new cE(h)}const uE=encodeURIComponent("fac");async function hE(e,t,n,i,r,s){Nv(e.config.authDomain,e,"auth-domain-config-required"),Nv(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"10.6.0",eventId:r};if(t instanceof Qw){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",ne(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Yw){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${uE}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?Uv(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
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
 */(e)}?${oe(a).slice(1)}${l}`}const dE=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yb,this._completeRedirectFn=Hb,this._overrideRedirectResult=qb}async _openPopup(e,t,n,i){var r;Dv(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return lE(e,await hE(e,t,n,Pv(),i),vb())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){bb().location.href=e}(await hE(e,t,n,Pv(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Dv(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await nE(e),n=bb().gapi;return Nv(n,e,"internal-error"),t.open({where:document.body,url:oE(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rE,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=kv(e,"network-request-failed"),s=bb().setTimeout((()=>{i(r)}),iE.get());function o(){bb().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new Wb(e);return t.register("authEvent",(t=>{Nv(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Sv(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tw()||mw()||Ew()}};
/**
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
 */
class fE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Nv(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
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
 */
/**
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
 */
const pE=L("authIdTokenMaxAge")||300;let gE=null;var mE;mE="Browser",Xe(new _e("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Nv(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:mE,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(mE)},c=new Aw(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(lw);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Xe(new _e("auth-internal",(e=>{const t=Rw(e.getProvider("auth").getImmediate());return new fE(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),rt("@firebase/auth","1.4.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(mE)),rt("@firebase/auth","1.4.0","esm2017");
/**
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
 */
class yE extends W{constructor(e,t,n=0){super(EE(e),`Firebase Storage: ${t} (${EE(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,yE.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return EE(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var _E,vE,wE,bE;function EE(e){return"storage/"+e}function IE(){return new yE(_E.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function TE(){return new yE(_E.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function CE(){return new yE(_E.CANCELED,"User canceled the upload/download.")}function SE(e){return new yE(_E.INVALID_ARGUMENT,e)}function kE(){return new yE(_E.APP_DELETED,"The Firebase app was deleted.")}(vE=_E||(_E={})).UNKNOWN="unknown",vE.OBJECT_NOT_FOUND="object-not-found",vE.BUCKET_NOT_FOUND="bucket-not-found",vE.PROJECT_NOT_FOUND="project-not-found",vE.QUOTA_EXCEEDED="quota-exceeded",vE.UNAUTHENTICATED="unauthenticated",vE.UNAUTHORIZED="unauthorized",vE.UNAUTHORIZED_APP="unauthorized-app",vE.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",vE.INVALID_CHECKSUM="invalid-checksum",vE.CANCELED="canceled",vE.INVALID_EVENT_NAME="invalid-event-name",vE.INVALID_URL="invalid-url",vE.INVALID_DEFAULT_BUCKET="invalid-default-bucket",vE.NO_DEFAULT_BUCKET="no-default-bucket",vE.CANNOT_SLICE_BLOB="cannot-slice-blob",vE.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",vE.NO_DOWNLOAD_URL="no-download-url",vE.INVALID_ARGUMENT="invalid-argument",vE.INVALID_ARGUMENT_COUNT="invalid-argument-count",vE.APP_DELETED="app-deleted",vE.INVALID_ROOT_OPERATION="invalid-root-operation",vE.INVALID_FORMAT="invalid-format",vE.INTERNAL_ERROR="internal-error",vE.UNSUPPORTED_ENVIRONMENT="unsupported-environment";
/**
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
 */
class AE{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=AE.makeFromUrl(e,t)}catch(t){return new AE(e,"")}if(""===n.path)return n;throw i=e,new yE(_E.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";const r=new RegExp("^gs://"+i+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:r,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let t=0;t<a.length;t++){const i=a[t],r=i.regex.exec(e);if(r){const e=r[i.indices.bucket];let t=r[i.indices.path];t||(t=""),n=new AE(e,t),i.postModify(n);break}}if(null==n)throw function(e){return new yE(_E.INVALID_URL,"Invalid URL '"+e+"'.")}(e);return n}}class RE{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function NE(e,t,n,i){if(i<t)throw SE(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw SE(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function OE(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){n=n+(t(i)+"="+t(e[i]))+"&"}return n=n.slice(0,-1),n}
/**
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
 */
/**
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
 */
function DE(e,t){const n=e>=500&&e<600,i=-1!==[408,429].indexOf(e),r=-1!==t.indexOf(e);return n||i||r}
/**
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
 */(bE=wE||(wE={}))[bE.NO_ERROR=0]="NO_ERROR",bE[bE.NETWORK_ERROR=1]="NETWORK_ERROR",bE[bE.ABORT=2]="ABORT";class PE{constructor(e,t,n,i,r,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());void 0!==e?n(e):n()}catch(e){i(e)}else if(null!==r){const e=IE();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){i(this.appDelete_?kE():CE())}else{i(TE())}};this.canceled_?e(0,new LE(!1,null,!0)):this.backoffId_=function(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);if(c()||o)return d(),void u.call(null,e,...t);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let p=!1;function g(e){p||(p=!0,d(),l||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,g(!0)}),n),g}(((e,t)=>{if(t)return void e(!1,new LE(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===wE.NO_ERROR,r=n.getStatus();if(!t||DE(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===wE.ABORT;return void e(!1,new LE(!1,null,t))}const s=-1!==this.successCodes_.indexOf(r);e(!0,new LE(s,n))}))}),e,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class LE{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function xE(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */
/**
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
 */
class ME{constructor(e,t){this._service=e,this._location=t instanceof AE?t:AE.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ME(e,t)}get root(){const e=new AE(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return xE(this._location.path)}get storage(){return this._service}get parent(){const e=
/**
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
 */
function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new AE(this._location.bucket,e);return new ME(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw t=e,new yE(_E.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').");var t}}function UE(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:AE.makeFromBucketSpec(n,e)}class FE{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?AE.makeFromBucketSpec(i,this._host):UE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=AE.makeFromBucketSpec(this._url,e):this._bucket=UE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){NE("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){NE("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ME(this,e)}_makeRequest(e,t,n,i,r=!0){if(this._deleted)return new RE(kE());{const s=function(e,t,n,i,r,s,o=!0){const a=OE(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,i),new PE(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}
/**
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
 */(e,this._appId,n,i,t,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}function BE(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new FE(n,i,r,t,"10.6.0")}Xe(new _e("storage",BE,"PUBLIC").setMultipleInstances(!0)),rt("@firebase/storage","0.11.2",""),rt("@firebase/storage","0.11.2","esm2017");const VE=nt({apiKey:"AIzaSyCfjG-RLGh4VqAL5XSxS9EG4IVK4R8XF-E",authDomain:"filmoteka-23.firebaseapp.com",projectId:"filmoteka-23",storageBucket:"filmoteka-23.appspot.com",messagingSenderId:"1050534310211",appId:"1:1050534310211:web:687145a2426964cba8fff6",measurementId:"G-0W38ZQRK92"}),jE=function(e=it()){const t=Ze(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
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
 */
function(e,t){const n=Ze(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(re(n.getOptions(),null!=t?t:{}))return e;Sv(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:dE,persistence:[Rb,gb,yb]}),i=L("authTokenSyncURL");if(i){const e=(r=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>pE)return;const i=null==t?void 0:t.token;gE!==i&&(gE=i,await fetch(r,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){ye(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){ye(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var r;const s=O("auth");return s&&Mw(n,`http://${s}`),n}(VE),qE=function(e,t){const n="string"==typeof e?e:t||"(default)",i=Ze("object"==typeof e?e:it(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=D("firestore");e&&function(e,t,n,i={}){var r;const s=(e=y_(e,v_))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&Oh("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Ch.MOCK_USER;else{t=M(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new Uh(Mh.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ch(s)}e._authCredentials=new jh(new Bh(t,n))}}(i,...e)}return i}(VE);(function(e=it(),t){const n=Ze(e=ye(e),"storage").getImmediate({identifier:t}),i=D("storage");i&&function(e,t,n,i={}){!function(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=i;r&&(e._overrideAuthToken="string"==typeof r?r:M(r,e.app.options.projectId))}(e,t,n,i)}
/**
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
 */(n,...i)})(VE),function(e=it()){const t=Ze(e=ye(e),"analytics");t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ze(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(re(t,n.getOptions()))return e;throw fn.create("already-initialized")}n.initialize({options:t})}(e)}(VE);console.log("Hello, Firestore!");const $E={form:document.querySelector(".form"),input:document.getElementById("search-input"),button:document.querySelector(".search-button"),gallery:document.querySelector(".gallery"),buttonLoadMore:document.querySelector(".load-more"),modal:document.querySelector(".modal"),modalContent:document.querySelector(".modal_data"),movieImage:document.querySelector(".movie_image"),movieDescr:document.querySelector(".movie_descr"),buttonClose:document.querySelectorAll(".modal_close"),modalBackdrop:document.querySelectorAll(".modal_body"),body:document.querySelector("body"),content:document.getElementById("content"),headerNavLinks:document.querySelectorAll(".nav_item"),headerNavButtons:document.querySelector(".nav_list_button"),buttonWatched:document.getElementById("watched"),buttonQueue:document.getElementById("queue"),butttonsLibrary:document.querySelector(".modal_nav"),buttonHeaderNav:document.querySelector(".nav_list_button"),logo:document.querySelector(".logo"),homeBtn:document.getElementById("home_btn"),libraryBtn:document.getElementById("library_btn"),signOut:document.getElementById("auth_btn"),modalLogin:document.getElementById("login"),modalRegister:document.getElementById("register"),formsAuth:document.querySelectorAll(".form_auth"),registerLink:document.getElementById("register_link"),loginLink:document.getElementById("login_link"),loginButton:document.getElementById("login_btn"),registerButton:document.getElementById("register_btn"),txtEmail:document.getElementById("txtEmail"),txtPassword:document.getElementById("txtPassword"),regEmail:document.getElementById("regEmail"),regPassword:document.getElementById("regPassword"),regPassword_:document.getElementById("regPassword_")};function zE(e,t){try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.log(e.message)}}function HE(e){try{const t=localStorage.getItem(e);if(t)return JSON.parse(t)}catch(e){console.log(e.message)}}function WE(e){const t=HE("genres")||[];if(t){return t.filter((t=>e.includes(t.id))).map((e=>e.name))}}function KE(e){const t=e.map((({poster_path:e,original_title:t,id:n,genre_ids:i,genres:r,release_date:s,vote_average:o})=>function({poster_path:e,original_title:t,id:n,genre_ids:i,genres:r,release_date:s,vote_average:o}){const a=new Date(s).getFullYear(),c=e?`<li class="gallery_card">\n         <a\n           class="gallery_link"\n          href="https://image.tmdb.org/t/p/w500${e}"\n         >\n           <img\n           id="${n}"\n             class="movie_img"\n             src="https://image.tmdb.org/t/p/w500${e}"\n             alt="${t}"\n           \n             loading="lazy"\n           />\n             <p class="movie_title card">${t}</p>\n         <div class="movie_describtion">\n          <ul class="movie_genresList">${XE(r,i)}</ul>\n           <p>${a}</p>\n           <p class="movie_average">${o.toFixed(1)}</p>\n         </div>\n         </a>      \n  </li>`:`<li class="gallery_card">\n         <a\n           class="gallery__link"\n          href="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"\n         >\n           <img\n           id="${n}"\n            class="movie_img"\n             src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"\n             alt="${t}"\n             loading="lazy"\n           />\n          <p class="movie_title card">${t}</p>\n         <div class="movie_describtion">\n           <ul>${XE(r,i)}</ul>\n           <p>${a}</p>\n           <p class="movie_average">${o.toFixed(1)}</p>\n         </div>\n         </a>\n      </li>`;$E.gallery.insertAdjacentHTML("beforeend",c)}({poster_path:e,original_title:t,id:n,genre_ids:i,genres:r,release_date:s,vote_average:o}))).join("");$E.gallery.insertAdjacentHTML("beforeend",t)}function GE({poster_path:e,original_title:t}){const n=e?`<img\n          src="https://image.tmdb.org/t/p/w500${e}"\n          alt=${t}\n          class="image"\n          \n        />`:'<img\n          src="https://raw.githubusercontent.com/MarynaDanyliuk/goit-react-hw-05-movies/main/src/img/default_image_large.jpg"\n          alt="default image"\n          class="image"\n          style="width: 375px; height: 478px"\n        />';$E.movieImage.insertAdjacentHTML("beforeend",n)}function QE({original_title:e,vote_average:t,vote_count:n,popularity:i,genres:r,overview:s}){const o=r.map((({name:e})=>e)).join(", "),a=`\n        <div class="movie_descr">\n          <h1 class="movie_title">${e}</h1>\n          <table class="movie_inform">\n            <tr class="movie_info_item">\n              <td class="list_category">Vote/Votes</td>\n              <td class="list_data"><span class="average">${t.toFixed(1)}</span> / <span class="count">${n}</span></td>\n            </tr>\n            <tr class="movie_info_item">\n              <td class="list_category">Popularity</td>\n              <td class="list_data">${i.toFixed(1)}</td>\n            </tr>\n            <tr class="movie_info_item">\n              <td class="list_category">Original Title</td>\n              <td class="list_data" style="text-transform: uppercase">${e}</td>\n            </tr>\n            <tr class="movie_info_item">\n              <td class="list_category">Genre</td>\n              <td class="list_data genres">${o}</td>\n            </tr>\n          </table>\n          <p class="movie_title about">About</p>\n          <p class="movie_about">\n          ${s}\n          </p>\n        </div>\n\n  `;$E.movieDescr.insertAdjacentHTML("beforeend",a)}function YE(){$E.gallery.innerHTML=""}function JE(e){if(e)return $E.input.value="",$E.homeBtn.classList.add("nav_item--current"),$E.libraryBtn.classList.remove("nav_item--current"),$E.headerNavButtons.classList.add("not-visible"),void $E.form.classList.remove("not-visible");e||($E.homeBtn.classList.add("nav_item--current"),$E.libraryBtn.classList.remove("nav_item--current"),$E.headerNavButtons.classList.add("not-visible"),$E.form.classList.remove("not-visible"),$E.signOut.classList.add("not-visible"))}const XE=(e,t)=>{if(e){const t=e.splice(0,2).map((({name:e})=>e)).join(", ");return e.length>=3?`<li class="movie_gnr">${t}, Other</li>`:`<li class="movie_gnr">${t}</li>`}if(t){const e=WE(t).splice(0,2).join(", ");return t.length>=3?`<li class="movie_gnr">${e}, Other</li>`:`<li class="movie_gnr">${e}</li>`}};function ZE(e){"watched"===e?($E.buttonWatched.classList.add("active_btn"),$E.buttonQueue.classList.remove("active_btn")):"queue"===e&&($E.buttonQueue.classList.add("active_btn"),$E.buttonWatched.classList.remove("active_btn"));const t=HE(e);if(t)return KE(t)}function eI(e,t){return function(){return e.apply(t,arguments)}}const{toString:tI}=Object.prototype,{getPrototypeOf:nI}=Object,iI=(rI=Object.create(null),e=>{const t=tI.call(e);return rI[t]||(rI[t]=t.slice(8,-1).toLowerCase())});var rI;const sI=e=>(e=e.toLowerCase(),t=>iI(t)===e),oI=e=>t=>typeof t===e,{isArray:aI}=Array,cI=oI("undefined");const lI=sI("ArrayBuffer");const uI=oI("string"),hI=oI("function"),dI=oI("number"),fI=e=>null!==e&&"object"==typeof e,pI=e=>{if("object"!==iI(e))return!1;const t=nI(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},gI=sI("Date"),mI=sI("File"),yI=sI("Blob"),_I=sI("FileList"),vI=sI("URLSearchParams");function wI(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let i,r;if("object"!=typeof e&&(e=[e]),aI(e))for(i=0,r=e.length;i<r;i++)t.call(null,e[i],i,e);else{const r=n?Object.getOwnPropertyNames(e):Object.keys(e),s=r.length;let o;for(i=0;i<s;i++)o=r[i],t.call(null,e[o],o,e)}}function bI(e,t){t=t.toLowerCase();const n=Object.keys(e);let i,r=n.length;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const EI="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:i,II=e=>!cI(e)&&e!==EI;const TI=(CI="undefined"!=typeof Uint8Array&&nI(Uint8Array),e=>CI&&e instanceof CI);var CI;const SI=sI("HTMLFormElement"),kI=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),AI=sI("RegExp"),RI=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};wI(n,((n,r)=>{let s;!1!==(s=t(n,r,e))&&(i[r]=s||n)})),Object.defineProperties(e,i)},NI={DIGIT:"0123456789",ALPHA:"abcdefghijklmnopqrstuvwxyz",ALPHA_DIGIT:"abcdefghijklmnopqrstuvwxyz"+"abcdefghijklmnopqrstuvwxyz".toUpperCase()+"0123456789"};const OI=sI("AsyncFunction");var DI={isArray:aI,isArrayBuffer:lI,isBuffer:function(e){return null!==e&&!cI(e)&&null!==e.constructor&&!cI(e.constructor)&&hI(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||hI(e.append)&&("formdata"===(t=iI(e))||"object"===t&&hI(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&lI(e.buffer),t},isString:uI,isNumber:dI,isBoolean:e=>!0===e||!1===e,isObject:fI,isPlainObject:pI,isUndefined:cI,isDate:gI,isFile:mI,isBlob:yI,isRegExp:AI,isFunction:hI,isStream:e=>fI(e)&&hI(e.pipe),isURLSearchParams:vI,isTypedArray:TI,isFileList:_I,forEach:wI,merge:function e(){const{caseless:t}=II(this)&&this||{},n={},i=(i,r)=>{const s=t&&bI(n,r)||r;pI(n[s])&&pI(i)?n[s]=e(n[s],i):pI(i)?n[s]=e({},i):aI(i)?n[s]=i.slice():n[s]=i};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&wI(arguments[e],i);return n},extend:(e,t,n,{allOwnKeys:i}={})=>(wI(t,((t,i)=>{n&&hI(t)?e[i]=eI(t,n):e[i]=t}),{allOwnKeys:i}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,i)=>{let r,s,o;const a={};if(t=t||{},null==e)return t;do{for(r=Object.getOwnPropertyNames(e),s=r.length;s-- >0;)o=r[s],i&&!i(o,e,t)||a[o]||(t[o]=e[o],a[o]=!0);e=!1!==n&&nI(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:iI,kindOfTest:sI,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return-1!==i&&i===n},toArray:e=>{if(!e)return null;if(aI(e))return e;let t=e.length;if(!dI(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=n.next())&&!i.done;){const n=i.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const i=[];for(;null!==(n=e.exec(t));)i.push(n);return i},isHTMLForm:SI,hasOwnProperty:kI,hasOwnProp:kI,reduceDescriptors:RI,freezeMethods:e=>{RI(e,((t,n)=>{if(hI(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const i=e[n];hI(i)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},i=e=>{e.forEach((e=>{n[e]=!0}))};return aI(e)?i(e):i(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:bI,global:EI,isContextDefined:II,ALPHABET:NI,generateString:(e=16,t=NI.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n},isSpecCompliantForm:function(e){return!!(e&&hI(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,i)=>{if(fI(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[i]=e;const r=aI(e)?[]:{};return wI(e,((e,t)=>{const s=n(e,i+1);!cI(s)&&(r[t]=s)})),t[i]=void 0,r}}return e};return n(e,0)},isAsyncFn:OI,isThenable:e=>e&&(fI(e)||hI(e))&&hI(e.then)&&hI(e.catch)};function PI(e,t,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}DI.inherits(PI,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:DI.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const LI=PI.prototype,xI={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{xI[e]={value:e}})),Object.defineProperties(PI,xI),Object.defineProperty(LI,"isAxiosError",{value:!0}),PI.from=(e,t,n,i,r,s)=>{const o=Object.create(LI);return DI.toFlatObject(e,o,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),PI.call(o,e.message,t,n,i,r),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};var MI,UI,FI,BI=PI;UI=function(e){var t,n,i=GI(e),r=i[0],s=i[1],o=new zI(function(e,t,n){return 3*(t+n)/4-n}(0,r,s)),a=0,c=s>0?r-4:r;for(n=0;n<c;n+=4)t=$I[e.charCodeAt(n)]<<18|$I[e.charCodeAt(n+1)]<<12|$I[e.charCodeAt(n+2)]<<6|$I[e.charCodeAt(n+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;2===s&&(t=$I[e.charCodeAt(n)]<<2|$I[e.charCodeAt(n+1)]>>4,o[a++]=255&t);1===s&&(t=$I[e.charCodeAt(n)]<<10|$I[e.charCodeAt(n+1)]<<4|$I[e.charCodeAt(n+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t);return o},FI=function(e){for(var t,n=e.length,i=n%3,r=[],s=16383,o=0,a=n-i;o<a;o+=s)r.push(QI(e,o,o+s>a?a:o+s));1===i?(t=e[n-1],r.push(qI[t>>2]+qI[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(qI[t>>10]+qI[t>>4&63]+qI[t<<2&63]+"="));return r.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var VI,jI,qI=[],$I=[],zI="undefined"!=typeof Uint8Array?Uint8Array:Array,HI="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",WI=0,KI=HI.length;WI<KI;++WI)qI[WI]=HI[WI],$I[HI.charCodeAt(WI)]=WI;function GI(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function QI(e,t,n){for(var i,r,s=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(qI[(r=i)>>18&63]+qI[r>>12&63]+qI[r>>6&63]+qI[63&r]);return s.join("")}$I["-".charCodeAt(0)]=62,$I["_".charCodeAt(0)]=63,VI=function(e,t,n,i,r){var s,o,a=8*r-i-1,c=(1<<a)-1,l=c>>1,u=-7,h=n?r-1:0,d=n?-1:1,f=e[t+h];for(h+=d,s=f&(1<<-u)-1,f>>=-u,u+=a;u>0;s=256*s+e[t+h],h+=d,u-=8);for(o=s&(1<<-u)-1,s>>=-u,u+=i;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===s)s=1-l;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,i),s-=l}return(f?-1:1)*o*Math.pow(2,s-i)},jI=function(e,t,n,i,r,s){var o,a,c,l=8*s-r-1,u=(1<<l)-1,h=u>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=i?0:s-1,p=i?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-o))<1&&(o--,c*=2),(t+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=u?(a=0,o=u):o+h>=1?(a=(t*c-1)*Math.pow(2,r),o+=h):(a=t*Math.pow(2,h-1)*Math.pow(2,r),o=0));r>=8;e[n+f]=255&a,f+=p,a/=256,r-=8);for(o=o<<r|a,l+=r;l>0;e[n+f]=255&o,f+=p,o/=256,l-=8);e[n+f-p]|=128*g};const YI="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;MI=XI;function JI(e){if(e>2147483647)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,XI.prototype),t}function XI(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return tT(e)}return ZI(e,t,n)}function ZI(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!XI.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|sT(e,t);let i=JI(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(FT(e,Uint8Array)){const t=new Uint8Array(e);return iT(t.buffer,t.byteOffset,t.byteLength)}return nT(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(FT(e,ArrayBuffer)||e&&FT(e.buffer,ArrayBuffer))return iT(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(FT(e,SharedArrayBuffer)||e&&FT(e.buffer,SharedArrayBuffer)))return iT(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return XI.from(i,t,n);const r=function(e){if(XI.isBuffer(e)){const t=0|rT(e.length),n=JI(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||BT(e.length)?JI(0):nT(e);if("Buffer"===e.type&&Array.isArray(e.data))return nT(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return XI.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function eT(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function tT(e){return eT(e),JI(e<0?0:0|rT(e))}function nT(e){const t=e.length<0?0:0|rT(e.length),n=JI(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function iT(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,XI.prototype),i}function rT(e){if(e>=2147483647)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+2147483647..toString(16)+" bytes");return 0|e}function sT(e,t){if(XI.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||FT(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return xT(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return MT(e).length;default:if(r)return i?-1:xT(e).length;t=(""+t).toLowerCase(),r=!0}}function oT(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return vT(this,t,n);case"utf8":case"utf-8":return mT(this,t,n);case"ascii":return yT(this,t,n);case"latin1":case"binary":return _T(this,t,n);case"base64":return gT(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wT(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function aT(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function cT(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),BT(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=XI.from(t,i)),XI.isBuffer(t))return 0===t.length?-1:lT(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):lT(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function lT(e,t,n,i,r){let s,o=1,a=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,a/=2,c/=2,n/=2}function l(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(s=n;s<a;s++)if(l(e,s)===l(t,-1===i?0:s-i)){if(-1===i&&(i=s),s-i+1===c)return i*o}else-1!==i&&(s-=s-i),i=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let i=0;i<c;i++)if(l(e,s+i)!==l(t,i)){n=!1;break}if(n)return s}return-1}function uT(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const s=t.length;let o;for(i>s/2&&(i=s/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(BT(i))return o;e[n+o]=i}return o}function hT(e,t,n,i){return UT(xT(t,e.length-n),e,n,i)}function dT(e,t,n,i){return UT(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function fT(e,t,n,i){return UT(MT(t),e,n,i)}function pT(e,t,n,i){return UT(function(e,t){let n,i,r;const s=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,s.push(r),s.push(i);return s}(t,e.length-n),e,n,i)}function gT(e,t,n){return 0===t&&n===e.length?FI(e):FI(e.slice(t,n))}function mT(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let s=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,a,c;switch(o){case 1:t<128&&(s=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(s=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=e[r+1],i=e[r+2],a=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&a)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|1023&s),i.push(s),r+=o}return function(e){const t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=4096));return n}(i)}XI.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),XI.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(XI.prototype,"parent",{enumerable:!0,get:function(){if(XI.isBuffer(this))return this.buffer}}),Object.defineProperty(XI.prototype,"offset",{enumerable:!0,get:function(){if(XI.isBuffer(this))return this.byteOffset}}),XI.poolSize=8192,XI.from=function(e,t,n){return ZI(e,t,n)},Object.setPrototypeOf(XI.prototype,Uint8Array.prototype),Object.setPrototypeOf(XI,Uint8Array),XI.alloc=function(e,t,n){return function(e,t,n){return eT(e),e<=0?JI(e):void 0!==t?"string"==typeof n?JI(e).fill(t,n):JI(e).fill(t):JI(e)}(e,t,n)},XI.allocUnsafe=function(e){return tT(e)},XI.allocUnsafeSlow=function(e){return tT(e)},XI.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==XI.prototype},XI.compare=function(e,t){if(FT(e,Uint8Array)&&(e=XI.from(e,e.offset,e.byteLength)),FT(t,Uint8Array)&&(t=XI.from(t,t.offset,t.byteLength)),!XI.isBuffer(e)||!XI.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,s=Math.min(n,i);r<s;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},XI.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},XI.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return XI.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=XI.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(FT(t,Uint8Array))r+t.length>i.length?(XI.isBuffer(t)||(t=XI.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!XI.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},XI.byteLength=sT,XI.prototype._isBuffer=!0,XI.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)aT(this,t,t+1);return this},XI.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)aT(this,t,t+3),aT(this,t+1,t+2);return this},XI.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)aT(this,t,t+7),aT(this,t+1,t+6),aT(this,t+2,t+5),aT(this,t+3,t+4);return this},XI.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?mT(this,0,e):oT.apply(this,arguments)},XI.prototype.toLocaleString=XI.prototype.toString,XI.prototype.equals=function(e){if(!XI.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===XI.compare(this,e)},XI.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},YI&&(XI.prototype[YI]=XI.prototype.inspect),XI.prototype.compare=function(e,t,n,i,r){if(FT(e,Uint8Array)&&(e=XI.from(e,e.offset,e.byteLength)),!XI.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let s=(r>>>=0)-(i>>>=0),o=(n>>>=0)-(t>>>=0);const a=Math.min(s,o),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<a;++e)if(c[e]!==l[e]){s=c[e],o=l[e];break}return s<o?-1:o<s?1:0},XI.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},XI.prototype.indexOf=function(e,t,n){return cT(this,e,t,n,!0)},XI.prototype.lastIndexOf=function(e,t,n){return cT(this,e,t,n,!1)},XI.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let s=!1;for(;;)switch(i){case"hex":return uT(this,e,t,n);case"utf8":case"utf-8":return hT(this,e,t,n);case"ascii":case"latin1":case"binary":return dT(this,e,t,n);case"base64":return fT(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pT(this,e,t,n);default:if(s)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),s=!0}},XI.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function yT(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function _T(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function vT(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=VT[e[i]];return r}function wT(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function bT(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function ET(e,t,n,i,r,s){if(!XI.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function IT(e,t,n,i,r){OT(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function TT(e,t,n,i,r){OT(t,i,r,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function CT(e,t,n,i,r,s){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function ST(e,t,n,i,r){return t=+t,n>>>=0,r||CT(e,0,n,4),jI(e,t,n,i,23,4),n+4}function kT(e,t,n,i,r){return t=+t,n>>>=0,r||CT(e,0,n,8),jI(e,t,n,i,52,8),n+8}XI.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,XI.prototype),i},XI.prototype.readUintLE=XI.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||bT(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return i},XI.prototype.readUintBE=XI.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||bT(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},XI.prototype.readUint8=XI.prototype.readUInt8=function(e,t){return e>>>=0,t||bT(e,1,this.length),this[e]},XI.prototype.readUint16LE=XI.prototype.readUInt16LE=function(e,t){return e>>>=0,t||bT(e,2,this.length),this[e]|this[e+1]<<8},XI.prototype.readUint16BE=XI.prototype.readUInt16BE=function(e,t){return e>>>=0,t||bT(e,2,this.length),this[e]<<8|this[e+1]},XI.prototype.readUint32LE=XI.prototype.readUInt32LE=function(e,t){return e>>>=0,t||bT(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},XI.prototype.readUint32BE=XI.prototype.readUInt32BE=function(e,t){return e>>>=0,t||bT(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},XI.prototype.readBigUInt64LE=jT((function(e){DT(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||PT(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),XI.prototype.readBigUInt64BE=jT((function(e){DT(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||PT(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),XI.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||bT(e,t,this.length);let i=this[e],r=1,s=0;for(;++s<t&&(r*=256);)i+=this[e+s]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},XI.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||bT(e,t,this.length);let i=t,r=1,s=this[e+--i];for(;i>0&&(r*=256);)s+=this[e+--i]*r;return r*=128,s>=r&&(s-=Math.pow(2,8*t)),s},XI.prototype.readInt8=function(e,t){return e>>>=0,t||bT(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},XI.prototype.readInt16LE=function(e,t){e>>>=0,t||bT(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},XI.prototype.readInt16BE=function(e,t){e>>>=0,t||bT(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},XI.prototype.readInt32LE=function(e,t){return e>>>=0,t||bT(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},XI.prototype.readInt32BE=function(e,t){return e>>>=0,t||bT(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},XI.prototype.readBigInt64LE=jT((function(e){DT(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||PT(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),XI.prototype.readBigInt64BE=jT((function(e){DT(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||PT(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),XI.prototype.readFloatLE=function(e,t){return e>>>=0,t||bT(e,4,this.length),VI(this,e,!0,23,4)},XI.prototype.readFloatBE=function(e,t){return e>>>=0,t||bT(e,4,this.length),VI(this,e,!1,23,4)},XI.prototype.readDoubleLE=function(e,t){return e>>>=0,t||bT(e,8,this.length),VI(this,e,!0,52,8)},XI.prototype.readDoubleBE=function(e,t){return e>>>=0,t||bT(e,8,this.length),VI(this,e,!1,52,8)},XI.prototype.writeUintLE=XI.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){ET(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,s=0;for(this[t]=255&e;++s<n&&(r*=256);)this[t+s]=e/r&255;return t+n},XI.prototype.writeUintBE=XI.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){ET(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,s=1;for(this[t+r]=255&e;--r>=0&&(s*=256);)this[t+r]=e/s&255;return t+n},XI.prototype.writeUint8=XI.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,1,255,0),this[t]=255&e,t+1},XI.prototype.writeUint16LE=XI.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},XI.prototype.writeUint16BE=XI.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},XI.prototype.writeUint32LE=XI.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},XI.prototype.writeUint32BE=XI.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},XI.prototype.writeBigUInt64LE=jT((function(e,t=0){return IT(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),XI.prototype.writeBigUInt64BE=jT((function(e,t=0){return TT(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),XI.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);ET(this,e,t,n,i-1,-i)}let r=0,s=1,o=0;for(this[t]=255&e;++r<n&&(s*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},XI.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);ET(this,e,t,n,i-1,-i)}let r=n-1,s=1,o=0;for(this[t+r]=255&e;--r>=0&&(s*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/s>>0)-o&255;return t+n},XI.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},XI.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},XI.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},XI.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},XI.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||ET(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},XI.prototype.writeBigInt64LE=jT((function(e,t=0){return IT(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),XI.prototype.writeBigInt64BE=jT((function(e,t=0){return TT(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),XI.prototype.writeFloatLE=function(e,t,n){return ST(this,e,t,!0,n)},XI.prototype.writeFloatBE=function(e,t,n){return ST(this,e,t,!1,n)},XI.prototype.writeDoubleLE=function(e,t,n){return kT(this,e,t,!0,n)},XI.prototype.writeDoubleBE=function(e,t,n){return kT(this,e,t,!1,n)},XI.prototype.copy=function(e,t,n,i){if(!XI.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},XI.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!XI.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const s=XI.isBuffer(e)?e:XI.from(e,i),o=s.length;if(0===o)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=s[r%o]}return this};const AT={};function RT(e,t,n){AT[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function NT(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function OT(e,t,n,i,r,s){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(s+1)}${i}`:`>= -(2${i} ** ${8*(s+1)-1}${i}) and < 2 ** ${8*(s+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new AT.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){DT(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||PT(t,e.length-(n+1))}(i,r,s)}function DT(e,t){if("number"!=typeof e)throw new AT.ERR_INVALID_ARG_TYPE(t,"number",e)}function PT(e,t,n){if(Math.floor(e)!==e)throw DT(e,n),new AT.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new AT.ERR_BUFFER_OUT_OF_BOUNDS;throw new AT.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}RT("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),RT("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),RT("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=NT(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=NT(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const LT=/[^+/0-9A-Za-z-_]/g;function xT(e,t){let n;t=t||1/0;const i=e.length;let r=null;const s=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&s.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function MT(e){return UI(function(e){if((e=(e=e.split("=")[0]).trim().replace(LT,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function UT(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function FT(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function BT(e){return e!=e}const VT=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function jT(e){return"undefined"==typeof BigInt?qT:e}function qT(){throw new Error("BigInt not supported")}var $T=MI;function zT(e){return DI.isPlainObject(e)||DI.isArray(e)}function HT(e){return DI.endsWith(e,"[]")?e.slice(0,-2):e}function WT(e,t,n){return e?e.concat(t).map((function(e,t){return e=HT(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const KT=DI.toFlatObject(DI,{},null,(function(e){return/^is[A-Z]/.test(e)}));var GT=function(e,t,n){if(!DI.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const i=(n=DI.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!DI.isUndefined(t[e])}))).metaTokens,r=n.visitor||l,s=n.dots,o=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&DI.isSpecCompliantForm(t);if(!DI.isFunction(r))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(DI.isDate(e))return e.toISOString();if(!a&&DI.isBlob(e))throw new BI("Blob is not supported. Use a Buffer instead.");return DI.isArrayBuffer(e)||DI.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):$T.from(e):e}function l(e,n,r){let a=e;if(e&&!r&&"object"==typeof e)if(DI.endsWith(n,"{}"))n=i?n:n.slice(0,-2),e=JSON.stringify(e);else if(DI.isArray(e)&&function(e){return DI.isArray(e)&&!e.some(zT)}(e)||(DI.isFileList(e)||DI.endsWith(n,"[]"))&&(a=DI.toArray(e)))return n=HT(n),a.forEach((function(e,i){!DI.isUndefined(e)&&null!==e&&t.append(!0===o?WT([n],i,s):null===o?n:n+"[]",c(e))})),!1;return!!zT(e)||(t.append(WT(r,n,s),c(e)),!1)}const u=[],h=Object.assign(KT,{defaultVisitor:l,convertValue:c,isVisitable:zT});if(!DI.isObject(e))throw new TypeError("data must be an object");return function e(n,i){if(!DI.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+i.join("."));u.push(n),DI.forEach(n,(function(n,s){!0===(!(DI.isUndefined(n)||null===n)&&r.call(t,n,DI.isString(s)?s.trim():s,i,h))&&e(n,i?i.concat(s):[s])})),u.pop()}}(e),t};function QT(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function YT(e,t){this._pairs=[],e&&GT(e,this,t)}const JT=YT.prototype;JT.append=function(e,t){this._pairs.push([e,t])},JT.toString=function(e){const t=e?function(t){return e.call(this,t,QT)}:QT;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var XT=YT;function ZT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function eC(e,t,n){if(!t)return e;const i=n&&n.encode||ZT,r=n&&n.serialize;let s;if(s=r?r(t,n):DI.isURLSearchParams(t)?t.toString():new XT(t,n).toString(i),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}var tC=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){DI.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},nC={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var iC={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:XT,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function rC(e,t){return GT(e,new iC.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,i){return iC.isNode&&DI.isBuffer(e)?(this.append(t,e.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}var sC=function(e){function t(e,n,i,r){let s=e[r++];const o=Number.isFinite(+s),a=r>=e.length;if(s=!s&&DI.isArray(i)?i.length:s,a)return DI.hasOwnProp(i,s)?i[s]=[i[s],n]:i[s]=n,!o;i[s]&&DI.isObject(i[s])||(i[s]=[]);return t(e,n,i[s],r)&&DI.isArray(i[s])&&(i[s]=function(e){const t={},n=Object.keys(e);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],t[s]=e[s];return t}(i[s])),!o}if(DI.isFormData(e)&&DI.isFunction(e.entries)){const n={};return DI.forEachEntry(e,((e,i)=>{t(function(e){return DI.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),i,n,0)})),n}return null};const oC={transitional:nC,adapter:iC.isNode?"http":"xhr",transformRequest:[function(e,t){const n=t.getContentType()||"",i=n.indexOf("application/json")>-1,r=DI.isObject(e);r&&DI.isHTMLForm(e)&&(e=new FormData(e));if(DI.isFormData(e))return i&&i?JSON.stringify(sC(e)):e;if(DI.isArrayBuffer(e)||DI.isBuffer(e)||DI.isStream(e)||DI.isFile(e)||DI.isBlob(e))return e;if(DI.isArrayBufferView(e))return e.buffer;if(DI.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(r){if(n.indexOf("application/x-www-form-urlencoded")>-1)return rC(e,this.formSerializer).toString();if((s=DI.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return GT(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return r||i?(t.setContentType("application/json",!1),function(e,t,n){if(DI.isString(e))try{return(t||JSON.parse)(e),DI.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||oC.transitional,n=t&&t.forcedJSONParsing,i="json"===this.responseType;if(e&&DI.isString(e)&&(n&&!this.responseType||i)){const n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw BI.from(e,BI.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:iC.classes.FormData,Blob:iC.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};DI.forEach(["delete","get","head","post","put","patch"],(e=>{oC.headers[e]={}}));var aC=oC;const cC=DI.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var lC=e=>{const t={};let n,i,r;return e&&e.split("\n").forEach((function(e){r=e.indexOf(":"),n=e.substring(0,r).trim().toLowerCase(),i=e.substring(r+1).trim(),!n||t[n]&&cC[n]||("set-cookie"===n?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)})),t};const uC=Symbol("internals");function hC(e){return e&&String(e).trim().toLowerCase()}function dC(e){return!1===e||null==e?e:DI.isArray(e)?e.map(dC):String(e)}function fC(e,t,n,i,r){return DI.isFunction(i)?i.call(this,t,n):(r&&(t=n),DI.isString(t)?DI.isString(i)?-1!==t.indexOf(i):DI.isRegExp(i)?i.test(t):void 0:void 0)}class pC{constructor(e){e&&this.set(e)}set(e,t,n){const i=this;function r(e,t,n){const r=hC(t);if(!r)throw new Error("header name must be a non-empty string");const s=DI.findKey(i,r);(!s||void 0===i[s]||!0===n||void 0===n&&!1!==i[s])&&(i[s||t]=dC(e))}const s=(e,t)=>DI.forEach(e,((e,n)=>r(e,n,t)));return DI.isPlainObject(e)||e instanceof this.constructor?s(e,t):DI.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s(lC(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=hC(e)){const n=DI.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}(e);if(DI.isFunction(t))return t.call(this,e,n);if(DI.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=hC(e)){const n=DI.findKey(this,e);return!(!n||void 0===this[n]||t&&!fC(0,this[n],n,t))}return!1}delete(e,t){const n=this;let i=!1;function r(e){if(e=hC(e)){const r=DI.findKey(n,e);!r||t&&!fC(0,n[r],r,t)||(delete n[r],i=!0)}}return DI.isArray(e)?e.forEach(r):r(e),i}clear(e){const t=Object.keys(this);let n=t.length,i=!1;for(;n--;){const r=t[n];e&&!fC(0,this[r],r,e,!0)||(delete this[r],i=!0)}return i}normalize(e){const t=this,n={};return DI.forEach(this,((i,r)=>{const s=DI.findKey(n,r);if(s)return t[s]=dC(i),void delete t[r];const o=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(r):String(r).trim();o!==r&&delete t[r],t[o]=dC(i),n[o]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return DI.forEach(this,((n,i)=>{null!=n&&!1!==n&&(t[i]=e&&DI.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[uC]=this[uC]={accessors:{}}).accessors,n=this.prototype;function i(e){const i=hC(e);t[i]||(!function(e,t){const n=DI.toCamelCase(" "+t);["get","set","has"].forEach((i=>{Object.defineProperty(e,i+n,{value:function(e,n,r){return this[i].call(this,t,e,n,r)},configurable:!0})}))}(n,e),t[i]=!0)}return DI.isArray(e)?e.forEach(i):i(e),this}}pC.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),DI.reduceDescriptors(pC.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),DI.freezeMethods(pC);var gC=pC;function mC(e,t){const n=this||aC,i=t||n,r=gC.from(i.headers);let s=i.data;return DI.forEach(e,(function(e){s=e.call(n,s,r.normalize(),t?t.status:void 0)})),r.normalize(),s}function yC(e){return!(!e||!e.__CANCEL__)}function _C(e,t,n){BI.call(this,null==e?"canceled":e,BI.ERR_CANCELED,t,n),this.name="CanceledError"}DI.inherits(_C,BI,{__CANCEL__:!0});var vC=_C;function wC(e,t,n){const i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new BI("Request failed with status code "+n.status,[BI.ERR_BAD_REQUEST,BI.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var bC=iC.isStandardBrowserEnv?{write:function(e,t,n,i,r,s){const o=[];o.push(e+"="+encodeURIComponent(t)),DI.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),DI.isString(i)&&o.push("path="+i),DI.isString(r)&&o.push("domain="+r),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function EC(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function IC(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?EC(e,t):t}var TC=iC.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function i(n){let i=n;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(e){const t=DI.isString(e)?i(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function CC(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var SC=function(e,t){e=e||10;const n=new Array(e),i=new Array(e);let r,s=0,o=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=i[o];r||(r=c),n[s]=a,i[s]=c;let u=o,h=0;for(;u!==s;)h+=n[u++],u%=e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-r<t)return;const d=l&&c-l;return d?Math.round(1e3*h/d):void 0}};function kC(e,t){let n=0;const i=SC(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,c=i(a);n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&s<=o?(o-s)/c:void 0,event:r};l[t?"download":"upload"]=!0,e(l)}}var AC="undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let i=e.data;const r=gC.from(e.headers).normalize(),s=e.responseType;let o;function a(){e.cancelToken&&e.cancelToken.unsubscribe(o),e.signal&&e.signal.removeEventListener("abort",o)}DI.isFormData(i)&&(iC.isStandardBrowserEnv||iC.isStandardBrowserWebWorkerEnv?r.setContentType(!1):r.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";r.set("Authorization","Basic "+btoa(t+":"+n))}const l=IC(e.baseURL,e.url);function u(){if(!c)return;const i=gC.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());wC((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:i,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),eC(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(u)},c.onabort=function(){c&&(n(new BI("Request aborted",BI.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new BI("Network Error",BI.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const i=e.transitional||nC;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new BI(t,i.clarifyTimeoutError?BI.ETIMEDOUT:BI.ECONNABORTED,e,c)),c=null},iC.isStandardBrowserEnv){const t=(e.withCredentials||TC(l))&&e.xsrfCookieName&&bC.read(e.xsrfCookieName);t&&r.set(e.xsrfHeaderName,t)}void 0===i&&r.setContentType(null),"setRequestHeader"in c&&DI.forEach(r.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),DI.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&"json"!==s&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",kC(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",kC(e.onUploadProgress)),(e.cancelToken||e.signal)&&(o=t=>{c&&(n(!t||t.type?new vC(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(o),e.signal&&(e.signal.aborted?o():e.signal.addEventListener("abort",o)));const h=CC(l);h&&-1===iC.protocols.indexOf(h)?n(new BI("Unsupported protocol "+h+":",BI.ERR_BAD_REQUEST,e)):c.send(i||null)}))};const RC={http:null,xhr:AC};DI.forEach(RC,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var NC={getAdapter:e=>{e=DI.isArray(e)?e:[e];const{length:t}=e;let n,i;for(let r=0;r<t&&(n=e[r],!(i=DI.isString(n)?RC[n.toLowerCase()]:n));r++);if(!i){if(!1===i)throw new BI(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(DI.hasOwnProp(RC,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!DI.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:RC};function OC(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new vC(null,e)}function DC(e){OC(e),e.headers=gC.from(e.headers),e.data=mC.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return NC.getAdapter(e.adapter||aC.adapter)(e).then((function(t){return OC(e),t.data=mC.call(e,e.transformResponse,t),t.headers=gC.from(t.headers),t}),(function(t){return yC(t)||(OC(e),t&&t.response&&(t.response.data=mC.call(e,e.transformResponse,t.response),t.response.headers=gC.from(t.response.headers))),Promise.reject(t)}))}const PC=e=>e instanceof gC?e.toJSON():e;function LC(e,t){t=t||{};const n={};function i(e,t,n){return DI.isPlainObject(e)&&DI.isPlainObject(t)?DI.merge.call({caseless:n},e,t):DI.isPlainObject(t)?DI.merge({},t):DI.isArray(t)?t.slice():t}function r(e,t,n){return DI.isUndefined(t)?DI.isUndefined(e)?void 0:i(void 0,e,n):i(e,t,n)}function s(e,t){if(!DI.isUndefined(t))return i(void 0,t)}function o(e,t){return DI.isUndefined(t)?DI.isUndefined(e)?void 0:i(void 0,e):i(void 0,t)}function a(n,r,s){return s in t?i(n,r):s in e?i(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(PC(e),PC(t),!0)};return DI.forEach(Object.keys(Object.assign({},e,t)),(function(i){const s=c[i]||r,o=s(e[i],t[i],i);DI.isUndefined(o)&&s!==a||(n[i]=o)})),n}const xC={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{xC[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const MC={};xC.transitional=function(e,t,n){function i(e,t){return"[Axios v1.5.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,r,s)=>{if(!1===e)throw new BI(i(r," has been removed"+(t?" in "+t:"")),BI.ERR_DEPRECATED);return t&&!MC[r]&&(MC[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}};var UC={assertOptions:function(e,t,n){if("object"!=typeof e)throw new BI("options must be an object",BI.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let r=i.length;for(;r-- >0;){const s=i[r],o=t[s];if(o){const t=e[s],n=void 0===t||o(t,s,e);if(!0!==n)throw new BI("option "+s+" must be "+n,BI.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new BI("Unknown option "+s,BI.ERR_BAD_OPTION)}},validators:xC};const FC=UC.validators;class BC{constructor(e){this.defaults=e,this.interceptors={request:new tC,response:new tC}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=LC(this.defaults,t);const{transitional:n,paramsSerializer:i,headers:r}=t;void 0!==n&&UC.assertOptions(n,{silentJSONParsing:FC.transitional(FC.boolean),forcedJSONParsing:FC.transitional(FC.boolean),clarifyTimeoutError:FC.transitional(FC.boolean)},!1),null!=i&&(DI.isFunction(i)?t.paramsSerializer={serialize:i}:UC.assertOptions(i,{encode:FC.function,serialize:FC.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=r&&DI.merge(r.common,r[t.method]);r&&DI.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete r[e]})),t.headers=gC.concat(s,r);const o=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,h=0;if(!a){const e=[DC.bind(this),void 0];for(e.unshift.apply(e,o),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);h<u;)l=l.then(e[h++],e[h++]);return l}u=o.length;let d=t;for(h=0;h<u;){const e=o[h++],t=o[h++];try{d=e(d)}catch(e){t.call(this,e);break}}try{l=DC.call(this,d)}catch(e){return Promise.reject(e)}for(h=0,u=c.length;h<u;)l=l.then(c[h++],c[h++]);return l}getUri(e){return eC(IC((e=LC(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}DI.forEach(["delete","get","head","options"],(function(e){BC.prototype[e]=function(t,n){return this.request(LC(n||{},{method:e,url:t,data:(n||{}).data}))}})),DI.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(LC(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}BC.prototype[e]=t(),BC.prototype[e+"Form"]=t(!0)}));var VC=BC;class jC{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const i=new Promise((e=>{n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e,i,r){n.reason||(n.reason=new vC(e,i,r),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new jC((function(t){e=t})),cancel:e}}}var qC=jC;const $C={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries($C).forEach((([e,t])=>{$C[t]=e}));var zC=$C;const HC=function e(t){const n=new VC(t),i=eI(VC.prototype.request,n);return DI.extend(i,VC.prototype,n,{allOwnKeys:!0}),DI.extend(i,n,null,{allOwnKeys:!0}),i.create=function(n){return e(LC(t,n))},i}(aC);HC.Axios=VC,HC.CanceledError=vC,HC.CancelToken=qC,HC.isCancel=yC,HC.VERSION="1.5.0",HC.toFormData=GT,HC.AxiosError=BI,HC.Cancel=HC.CanceledError,HC.all=function(e){return Promise.all(e)},HC.spread=function(e){return function(t){return e.apply(null,t)}},HC.isAxiosError=function(e){return DI.isObject(e)&&!0===e.isAxiosError},HC.mergeConfig=LC,HC.AxiosHeaders=gC,HC.formToJSON=e=>sC(DI.isHTMLForm(e)?new FormData(e):e),HC.getAdapter=NC.getAdapter,HC.HttpStatusCode=zC,HC.default=HC;var WC=HC;const{Axios:KC,AxiosError:GC,CanceledError:QC,isCancel:YC,CancelToken:JC,VERSION:XC,all:ZC,Cancel:eS,isAxiosError:tS,spread:nS,toFormData:iS,AxiosHeaders:rS,HttpStatusCode:sS,formToJSON:oS,getAdapter:aS,mergeConfig:cS}=WC,lS=WC.create({baseURL:"https://api.themoviedb.org/3/"});class uS{constructor(){this.page=1,this.word="",this._movieId=null}async fetchMovies(){return(await lS.get(`/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1&page=${this.page}`)).data.results}async fetchMovieDetailsById(e){return(await lS.get(`movie/${e}?api_key=6de1479941bef67a0c224787b78603f1`)).data}async fetchMoviesByQuery(e,t){return(await lS.get(`/search/movie?api_key=6de1479941bef67a0c224787b78603f1&query=${e}&page=${t}`)).data.results}async fetchMoviesByPage(e){return(await lS.get(`/trending/movie/day?api_key=6de1479941bef67a0c224787b78603f1&page=${e}`)).data.results}async fetchGenresListByIds(){return(await lS.get("/genre/movie/list?api_key=6de1479941bef67a0c224787b78603f1&language=en")).data.genres}incrementPage(){this.page+=1}resetPage(){this.page=1}resetQuery(){this.word=""}get query(){return this.word}set query(e){return this.word=e}get movieId(){return this._movieId}set movieId(e){return this._movieId=e}}const hS=new uS;async function dS(){try{await hS.fetchMovies().then((e=>{KE(e)}))}catch(e){console.log(e.message)}}async function fS(e,t){try{await hS.fetchMoviesByQuery(e,t).then((e=>{KE(e)}))}catch(e){console.log(e.message)}}async function pS(e){try{await hS.fetchMovieDetailsById(e).then((e=>{GE(e),QE(e)}))}catch(e){console.log(e.message)}}async function gS(e){try{await hS.fetchMoviesByPage(e).then((e=>{KE(e)}))}catch(e){console.log(e.message)}}async function mS(){try{zE("genres",await hS.fetchGenresListByIds())}catch(e){console.log(e.message)}}function yS(){$E.buttonLoadMore.classList.remove("not-visible")}async function _S(e){YE(),JE(e),await mS(),await dS(),yS()}async function vS(){YE(),ZE("watched"),$E.homeBtn.classList.remove("nav_item--current"),$E.libraryBtn.classList.add("nav_item--current"),$E.headerNavButtons.classList.remove("not-visible"),$E.form.classList.add("not-visible"),yS()}function wS(){YE(),$E.content.insertAdjacentHTML("beforeend",'\n   <img class="page-not-found"\n   src=""\n   alt=""\n />\n   '),$E.buttonLoadMore.classList.add("not-visible")}const bS=I_(qE,"users"),ES=async e=>{const t=nv(bS,rv("userId","==",e.uid));try{const n=await yv(t);if(n.forEach((e=>{console.log(e.id," => ",e.data())})),n.size>0)console.log("Пользователь с таким email уже существует");else{const t=await _v(I_(qE,"users"),{userId:e.uid,email:e.email});console.log("Document written with ID: ",t.id)}}catch(e){throw console.error("Error adding document: ",e),e}};$E.loginButton.addEventListener("click",(async function(e){try{const e=$E.txtEmail.value,t=$E.txtPassword.value,n=await db(jE,e,t);console.log(n.user),$E.signOut.classList.remove("not-visible"),TS()}catch(e){console.log(e.message)}})),$E.registerButton.addEventListener("click",(async function(){try{const e=$E.regEmail.value,t=$E.regPassword.value,n=await hb(jE,e,t);console.log(n.user),$E.signOut.classList.remove("not-visible"),TS()}catch(e){console.log(e.message)}})),$E.signOut.addEventListener("click",(async function(e){try{e.preventDefault(),window.location.assign("#/"),await(t=jE,ye(t).signOut()),$E.signOut.classList.add("not-visible"),console.log("user is successfully logout")}catch(e){console.log(e.message)}var t}));const IS=$E.formsAuth||[];jE.currentUser;function TS(){for(let e=0;e<IS.length;e++){const t=IS[e];for(let e=0;e<t.elements.length;e++)"text"===t.elements[e].type&&(t.elements[e].value="")}}function CS(){const e=window.location.hash.substring(1),t=jE.currentUser;console.log(e),"/"===e||""===e?_S(t):"/library"===e?vS():wS()}(async e=>{var t,n,i;t=e=>{null!==e?(console.log("user logged in"),$E.signOut.classList.remove("not-visible"),e.email,e.accessToken,e.emailVerified,e.uid,ES(e)):(_S(e),console.log("no user"))},ye(jE).onAuthStateChanged(t,n,i)})(),window.addEventListener("hashchange",CS),$E.logo.addEventListener("click",_S),CS();const SS=new uS;let kS="",AS=1;$E.form.addEventListener("submit",(async function(e){if(e.preventDefault(),YE(),SS.resetPage(),SS.query=e.currentTarget.elements.searchQuery.value.trim(),""===SS.query)return;AS=SS.page,kS=SS.query,await fS(kS,AS),console.log("BEFORE scroll",SS)})),$E.buttonLoadMore.addEventListener("click",(async function(e){e.preventDefault(),console.log("BEFORE FETCH",SS),SS.incrementPage(),AS=SS.page,""===kS&&await gS(AS);kS=SS.query,await fS(kS,AS),console.log("AFTER FETCH",SS)}));const RS=new uS;let NS=[],OS=[],DS=null,PS="",LS="";$E.gallery.addEventListener("click",(async function(e){e.preventDefault();const t=jE.currentUser;if("IMG"!==e.target.nodeName)return;t?t&&(DS=e.target.getAttribute("id"),RS.movieId=DS,console.log(RS.movieId),await pS(DS),$E.modal.classList.add("open"),$E.body.classList.add("lock")):$E.modalLogin.classList.add("open")})),$E.butttonsLibrary.addEventListener("click",(async function(e){if(e.preventDefault(),PS=e.target.getAttribute("id"),console.log("key:",PS),"BUTTON"!==e.target.nodeName)return;$E.buttonQueue.classList.add("active_btn"),$E.buttonWatched.classList.remove("active_btn"),NS=HE(PS)||[],OS=HE(PS)||[],US(e),await RS.fetchMovieDetailsById(RS.movieId).then((e=>{"watched"===PS?(NS.push(e),zE(PS,NS)):"queue"===PS&&(OS.push(e),zE(PS,OS))})).catch((e=>console.log(e.message))).finally((()=>{alert("фільм додано в бібліотеку")}))})),$E.buttonHeaderNav.addEventListener("click",(function(e){YE(),PS=e.target.getAttribute("id"),NS=HE(PS)||[],OS=HE(PS)||[],"watched"===PS&&ZE(PS);"queue"===PS&&ZE(PS)})),$E.libraryBtn.addEventListener("click",FS),$E.registerLink.addEventListener("click",FS),$E.loginLink.addEventListener("click",FS);const xS=$E.buttonClose;if(xS)for(let e=0;e<xS.length;e++)xS[e].addEventListener("click",US);const MS=$E.modalBackdrop;if(MS)for(let e=0;e<MS.length;e++)MS[e].addEventListener("click",US);function US(e){$E.modal.classList.remove("open"),"A"===e.target.nodeName&&e.target.closest(".modal").classList.remove("open"),$E.body.classList.remove("lock"),$E.movieImage.innerHTML="",$E.movieDescr.innerHTML="",e.preventDefault()}function FS(e){e.preventDefault(),LS=e.target.getAttribute("id");const t=jE.currentUser;if("library_btn"===LS&&t)return window.location.assign("#/library"),void $E.modalRegister.classList.remove("open");"library_btn"!==LS||t?($E.modalRegister.classList.toggle("open"),$E.modalLogin.classList.toggle("open")):$E.modalLogin.classList.add("open")}
//# sourceMappingURL=index.41ec7fd9.js.map
