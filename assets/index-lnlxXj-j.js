(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function y0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var kf={exports:{}},wo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function cS(){if(Ug)return wo;Ug=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return wo.Fragment=e,wo.jsx=i,wo.jsxs=i,wo}var Lg;function uS(){return Lg||(Lg=1,kf.exports=cS()),kf.exports}var ce=uS(),Xf={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng;function fS(){if(Ng)return se;Ng=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function E(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function S(N,j,Mt){this.props=N,this.context=j,this.refs=y,this.updater=Mt||w}S.prototype.isReactComponent={},S.prototype.setState=function(N,j){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,j,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=S.prototype;function C(N,j,Mt){this.props=N,this.context=j,this.refs=y,this.updater=Mt||w}var F=C.prototype=new P;F.constructor=C,R(F,S.prototype),F.isPureReactComponent=!0;var Y=Array.isArray;function H(){}var O={H:null,A:null,T:null,S:null},et=Object.prototype.hasOwnProperty;function L(N,j,Mt){var k=Mt.ref;return{$$typeof:o,type:N,key:j,ref:k!==void 0?k:null,props:Mt}}function A(N,j){return L(N.type,j,N.props)}function Z(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function lt(N){var j={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return j[Mt]})}var I=/\/+/g;function ut(N,j){return typeof N=="object"&&N!==null&&N.key!=null?lt(""+N.key):j.toString(36)}function ct(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(H,H):(N.status="pending",N.then(function(j){N.status==="pending"&&(N.status="fulfilled",N.value=j)},function(j){N.status==="pending"&&(N.status="rejected",N.reason=j)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,j,Mt,k,at){var Tt=typeof N;(Tt==="undefined"||Tt==="boolean")&&(N=null);var bt=!1;if(N===null)bt=!0;else switch(Tt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(N.$$typeof){case o:case e:bt=!0;break;case v:return bt=N._init,z(bt(N._payload),j,Mt,k,at)}}if(bt)return at=at(N),bt=k===""?"."+ut(N,0):k,Y(at)?(Mt="",bt!=null&&(Mt=bt.replace(I,"$&/")+"/"),z(at,j,Mt,"",function(te){return te})):at!=null&&(Z(at)&&(at=A(at,Mt+(at.key==null||N&&N.key===at.key?"":(""+at.key).replace(I,"$&/")+"/")+bt)),j.push(at)),1;bt=0;var Gt=k===""?".":k+":";if(Y(N))for(var Bt=0;Bt<N.length;Bt++)k=N[Bt],Tt=Gt+ut(k,Bt),bt+=z(k,j,Mt,Tt,at);else if(Bt=E(N),typeof Bt=="function")for(N=Bt.call(N),Bt=0;!(k=N.next()).done;)k=k.value,Tt=Gt+ut(k,Bt++),bt+=z(k,j,Mt,Tt,at);else if(Tt==="object"){if(typeof N.then=="function")return z(ct(N),j,Mt,k,at);throw j=String(N),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return bt}function X(N,j,Mt){if(N==null)return N;var k=[],at=0;return z(N,k,"","",function(Tt){return j.call(Mt,Tt,at++)}),k}function G(N){if(N._status===-1){var j=N._result;j=j(),j.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=j)}if(N._status===1)return N._result.default;throw N._result}var vt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_t={map:X,forEach:function(N,j,Mt){X(N,function(){j.apply(this,arguments)},Mt)},count:function(N){var j=0;return X(N,function(){j++}),j},toArray:function(N){return X(N,function(j){return j})||[]},only:function(N){if(!Z(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return se.Activity=_,se.Children=_t,se.Component=S,se.Fragment=i,se.Profiler=l,se.PureComponent=C,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(N,j,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var k=R({},N.props),at=N.key;if(j!=null)for(Tt in j.key!==void 0&&(at=""+j.key),j)!et.call(j,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&j.ref===void 0||(k[Tt]=j[Tt]);var Tt=arguments.length-2;if(Tt===1)k.children=Mt;else if(1<Tt){for(var bt=Array(Tt),Gt=0;Gt<Tt;Gt++)bt[Gt]=arguments[Gt+2];k.children=bt}return L(N.type,at,k)},se.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},se.createElement=function(N,j,Mt){var k,at={},Tt=null;if(j!=null)for(k in j.key!==void 0&&(Tt=""+j.key),j)et.call(j,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(at[k]=j[k]);var bt=arguments.length-2;if(bt===1)at.children=Mt;else if(1<bt){for(var Gt=Array(bt),Bt=0;Bt<bt;Bt++)Gt[Bt]=arguments[Bt+2];at.children=Gt}if(N&&N.defaultProps)for(k in bt=N.defaultProps,bt)at[k]===void 0&&(at[k]=bt[k]);return L(N,Tt,at)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:h,render:N}},se.isValidElement=Z,se.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:G}},se.memo=function(N,j){return{$$typeof:p,type:N,compare:j===void 0?null:j}},se.startTransition=function(N){var j=O.T,Mt={};O.T=Mt;try{var k=N(),at=O.S;at!==null&&at(Mt,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(H,vt)}catch(Tt){vt(Tt)}finally{j!==null&&Mt.types!==null&&(j.types=Mt.types),O.T=j}},se.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},se.use=function(N){return O.H.use(N)},se.useActionState=function(N,j,Mt){return O.H.useActionState(N,j,Mt)},se.useCallback=function(N,j){return O.H.useCallback(N,j)},se.useContext=function(N){return O.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,j){return O.H.useDeferredValue(N,j)},se.useEffect=function(N,j){return O.H.useEffect(N,j)},se.useEffectEvent=function(N){return O.H.useEffectEvent(N)},se.useId=function(){return O.H.useId()},se.useImperativeHandle=function(N,j,Mt){return O.H.useImperativeHandle(N,j,Mt)},se.useInsertionEffect=function(N,j){return O.H.useInsertionEffect(N,j)},se.useLayoutEffect=function(N,j){return O.H.useLayoutEffect(N,j)},se.useMemo=function(N,j){return O.H.useMemo(N,j)},se.useOptimistic=function(N,j){return O.H.useOptimistic(N,j)},se.useReducer=function(N,j,Mt){return O.H.useReducer(N,j,Mt)},se.useRef=function(N){return O.H.useRef(N)},se.useState=function(N){return O.H.useState(N)},se.useSyncExternalStore=function(N,j,Mt){return O.H.useSyncExternalStore(N,j,Mt)},se.useTransition=function(){return O.H.useTransition()},se.version="19.2.8",se}var Og;function Vh(){return Og||(Og=1,Xf.exports=fS()),Xf.exports}var Jt=Vh();const hS=y0(Jt);var qf={exports:{}},Do={},Wf={exports:{}},Yf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function dS(){return Pg||(Pg=1,(function(o){function e(z,X){var G=z.length;z.push(X);t:for(;0<G;){var vt=G-1>>>1,_t=z[vt];if(0<l(_t,X))z[vt]=X,z[G]=_t,G=vt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],G=z.pop();if(G!==X){z[0]=G;t:for(var vt=0,_t=z.length,N=_t>>>1;vt<N;){var j=2*(vt+1)-1,Mt=z[j],k=j+1,at=z[k];if(0>l(Mt,G))k<_t&&0>l(at,Mt)?(z[vt]=at,z[k]=G,vt=k):(z[vt]=Mt,z[j]=G,vt=j);else if(k<_t&&0>l(at,G))z[vt]=at,z[k]=G,vt=k;else break t}}return X}function l(z,X){var G=z.sortIndex-X.sortIndex;return G!==0?G:z.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,_=null,x=3,E=!1,w=!1,R=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function F(z){for(var X=i(p);X!==null;){if(X.callback===null)r(p);else if(X.startTime<=z)r(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=i(p)}}function Y(z){if(R=!1,F(z),!w)if(i(m)!==null)w=!0,H||(H=!0,lt());else{var X=i(p);X!==null&&ct(Y,X.startTime-z)}}var H=!1,O=-1,et=5,L=-1;function A(){return y?!0:!(o.unstable_now()-L<et)}function Z(){if(y=!1,H){var z=o.unstable_now();L=z;var X=!0;try{t:{w=!1,R&&(R=!1,P(O),O=-1),E=!0;var G=x;try{e:{for(F(z),_=i(m);_!==null&&!(_.expirationTime>z&&A());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,x=_.priorityLevel;var _t=vt(_.expirationTime<=z);if(z=o.unstable_now(),typeof _t=="function"){_.callback=_t,F(z),X=!0;break e}_===i(m)&&r(m),F(z)}else r(m);_=i(m)}if(_!==null)X=!0;else{var N=i(p);N!==null&&ct(Y,N.startTime-z),X=!1}}break t}finally{_=null,x=G,E=!1}X=void 0}}finally{X?lt():H=!1}}}var lt;if(typeof C=="function")lt=function(){C(Z)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,ut=I.port2;I.port1.onmessage=Z,lt=function(){ut.postMessage(null)}}else lt=function(){S(Z,0)};function ct(z,X){O=S(function(){z(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(z){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var G=x;x=X;try{return z()}finally{x=G}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=x;x=z;try{return X()}finally{x=G}},o.unstable_scheduleCallback=function(z,X,G){var vt=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?vt+G:vt):G=vt,z){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=G+_t,z={id:v++,callback:X,priorityLevel:z,startTime:G,expirationTime:_t,sortIndex:-1},G>vt?(z.sortIndex=G,e(p,z),i(m)===null&&z===i(p)&&(R?(P(O),O=-1):R=!0,ct(Y,G-vt))):(z.sortIndex=_t,e(m,z),w||E||(w=!0,H||(H=!0,lt()))),z},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(z){var X=x;return function(){var G=x;x=X;try{return z.apply(this,arguments)}finally{x=G}}}})(Yf)),Yf}var zg;function pS(){return zg||(zg=1,Wf.exports=dS()),Wf.exports}var jf={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function mS(){if(Ig)return En;Ig=1;var o=Vh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,En.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},En.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},En.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},En.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},En.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:E}):v==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},En.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},En.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,_=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},En.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},En.requestFormReset=function(m){r.d.r(m)},En.unstable_batchedUpdates=function(m,p){return m(p)},En.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},En.useFormStatus=function(){return d.H.useHostTransitionStatus()},En.version="19.2.8",En}var Bg;function gS(){if(Bg)return jf.exports;Bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),jf.exports=mS(),jf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function _S(){if(Fg)return Do;Fg=1;var o=pS(),e=Vh(),i=gS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,b=c.child;b;){if(b===a){g=!0,a=c,s=f;break}if(b===s){g=!0,s=c,a=f;break}b=b.sibling}if(!g){for(b=f.child;b;){if(b===a){g=!0,a=f,s=c;break}if(b===s){g=!0,s=f,a=c;break}b=b.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),C=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var I=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===I?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case Y:return"Suspense";case H:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case C:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case et:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var ct=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},vt=[],_t=-1;function N(t){return{current:t}}function j(t){0>_t||(t.current=vt[_t],vt[_t]=null,_t--)}function Mt(t,n){_t++,vt[_t]=t.current,t.current=n}var k=N(null),at=N(null),Tt=N(null),bt=N(null);function Gt(t,n){switch(Mt(Tt,n),Mt(at,t),Mt(k,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tg(n),t=eg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(k),Mt(k,t)}function Bt(){j(k),j(at),j(Tt)}function te(t){t.memoizedState!==null&&Mt(bt,t);var n=k.current,a=eg(n,t.type);n!==a&&(Mt(at,t),Mt(k,a))}function nt(t){at.current===t&&(j(k),j(at)),bt.current===t&&(j(bt),bo._currentValue=G)}var ee,jt;function Rt(t){if(ee===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ee=n&&n[1]||"",jt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ee+t+jt}var Et=!1;function Pt(t,n){if(!t||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var yt=function(){throw Error()};if(Object.defineProperty(yt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(yt,[])}catch(ht){var it=ht}Reflect.construct(t,[],yt)}else{try{yt.call()}catch(ht){it=ht}t.call(yt.prototype)}}else{try{throw Error()}catch(ht){it=ht}(yt=t())&&typeof yt.catch=="function"&&yt.catch(function(){})}}catch(ht){if(ht&&it&&typeof ht.stack=="string")return[ht.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],b=f[1];if(g&&b){var B=g.split(`
`),tt=b.split(`
`);for(c=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(s===B.length||c===tt.length)for(s=B.length-1,c=tt.length-1;1<=s&&0<=c&&B[s]!==tt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(B[s]!==tt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||B[s]!==tt[c]){var gt=`
`+B[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Rt(a):""}function D(t,n){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return Pt(t.type,!1);case 11:return Pt(t.type.render,!1);case 1:return Pt(t.type,!0);case 31:return Rt("Activity");default:return""}}function T(t){try{var n="",a=null;do n+=D(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var W=Object.prototype.hasOwnProperty,J=o.unstable_scheduleCallback,ot=o.unstable_cancelCallback,pt=o.unstable_shouldYield,Ut=o.unstable_requestPaint,mt=o.unstable_now,Ot=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,At=o.unstable_UserBlockingPriority,Dt=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,It=o.unstable_IdlePriority,Ft=o.log,_e=o.unstable_setDisableYieldValue,de=null,ne=null;function ue(t){if(typeof Ft=="function"&&_e(t),ne&&typeof ne.setStrictMode=="function")try{ne.setStrictMode(de,t)}catch{}}var ie=Math.clz32?Math.clz32:st,qt=Math.log,M=Math.LN2;function st(t){return t>>>=0,t===0?32:31-(qt(t)/M|0)|0}var xt=256,Ct=262144,zt=4194304;function oe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fe(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=oe(s):(g&=b,g!==0?c=oe(g):a||(a=b&~t,a!==0&&(c=oe(a))))):(b=s&~f,b!==0?c=oe(b):g!==0?c=oe(g):a||(a=s&~t,a!==0&&(c=oe(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function tn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Xe(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Cn(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,tt=t.hiddenUpdates;for(a=g&~a;0<a;){var gt=31-ie(a),yt=1<<gt;b[gt]=0,B[gt]=-1;var it=tt[gt];if(it!==null)for(tt[gt]=null,gt=0;gt<it.length;gt++){var ht=it[gt];ht!==null&&(ht.lane&=-536870913)}a&=~yt}s!==0&&wn(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function wn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-ie(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function hi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-ie(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Pi(t,n){var a=n&-n;return a=(a&42)!==0?1:di(a),(a&(t.suspendedLanes|n))!==0?0:a}function di(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function br(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ya(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Tg(t.type))}function Bs(t,n){var a=X.p;try{return X.p=t,n()}finally{X.p=a}}var pi=Math.random().toString(36).slice(2),on="__reactFiber$"+pi,Mn="__reactProps$"+pi,la="__reactContainer$"+pi,U="__reactEvents$"+pi,K="__reactListeners$"+pi,ft="__reactHandles$"+pi,dt="__reactResources$"+pi,rt="__reactMarker$"+pi;function Lt(t){delete t[on],delete t[Mn],delete t[U],delete t[K],delete t[ft]}function Vt(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[la]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=lg(t);t!==null;){if(a=t[on])return a;t=lg(t)}return n}t=a,a=t.parentNode}return null}function Wt(t){if(t=t[on]||t[la]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function $t(t){var n=t[dt];return n||(n=t[dt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function kt(t){t[rt]=!0}var re=new Set,qe={};function Ke(t,n){He(t,n),He(t+"Capture",n)}function He(t,n){for(qe[t]=n,t=0;t<n.length;t++)re.add(n[t])}var mi=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fe={},le={};function Fs(t){return W.call(le,t)?!0:W.call(Fe,t)?!1:mi.test(t)?le[t]=!0:(Fe[t]=!0,!1)}function De(t,n,a){if(Fs(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Jn(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function $n(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function fn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ar(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function hn(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ti(t){if(!t._valueTracker){var n=Ar(t)?"checked":"value";t._valueTracker=hn(t,n,""+t[n])}}function Rr(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ar(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Hs=/[\n"\\]/g;function Nn(t){return t.replace(Hs,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cr(t,n,a,s,c,f,g,b){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+fn(n)):t.value!==""+fn(n)&&(t.value=""+fn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Ic(t,g,fn(n)):a!=null?Ic(t,g,fn(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+fn(b):t.removeAttribute("name")}function jh(t,n,a,s,c,f,g,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ti(t);return}a=a!=null?""+fn(a):"",n=n!=null?""+fn(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),ti(t)}function Ic(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function wr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+fn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Zh(t,n,a){if(n!=null&&(n=""+fn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+fn(a):""}function Kh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ct(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=fn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),ti(t)}function Dr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var av=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||av.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Jh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Qh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Qh(t,f,n[f])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(t){return sv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Fc=null;function Hc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ur=null,Lr=null;function $h(t){var n=Wt(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Nn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Mn]||null;if(!c)throw Error(r(90));Cr(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Rr(s)}break t;case"textarea":Zh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&wr(t,!!a.multiple,n,!1)}}}var Gc=!1;function td(t,n,a){if(Gc)return t(n,a);Gc=!0;try{var s=t(n);return s}finally{if(Gc=!1,(Ur!==null||Lr!==null)&&(wl(),Ur&&(n=Ur,t=Lr,Lr=Ur=null,$h(n),t)))for(n=0;n<t.length;n++)$h(t[n])}}function Gs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Mn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(Ii)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Vc=!1}var ca=null,kc=null,ko=null;function ed(){if(ko)return ko;var t,n=kc,a=n.length,s,c="value"in ca?ca.value:ca.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return ko=c.slice(t,1<s?1-s:void 0)}function Xo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function nd(){return!1}function On(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:nd,this.isPropagationStopped=nd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wo=On(ja),ks=_({},ja,{view:0,detail:0}),ov=On(ks),Xc,qc,Xs,Yo=_({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Xc=t.screenX-Xs.screenX,qc=t.screenY-Xs.screenY):qc=Xc=0,Xs=t),Xc)},movementY:function(t){return"movementY"in t?t.movementY:qc}}),id=On(Yo),lv=_({},Yo,{dataTransfer:0}),cv=On(lv),uv=_({},ks,{relatedTarget:0}),Wc=On(uv),fv=_({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),hv=On(fv),dv=_({},ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pv=On(dv),mv=_({},ja,{data:0}),ad=On(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vv[t])?!!n[t]:!1}function Yc(){return xv}var Sv=_({},ks,{key:function(t){if(t.key){var n=gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(t){return t.type==="keypress"?Xo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yv=On(Sv),Mv=_({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rd=On(Mv),Ev=_({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Tv=On(Ev),bv=_({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Av=On(bv),Rv=_({},Yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cv=On(Rv),wv=_({},ja,{newState:0,oldState:0}),Dv=On(wv),Uv=[9,13,27,32],jc=Ii&&"CompositionEvent"in window,qs=null;Ii&&"documentMode"in document&&(qs=document.documentMode);var Lv=Ii&&"TextEvent"in window&&!qs,sd=Ii&&(!jc||qs&&8<qs&&11>=qs),od=" ",ld=!1;function cd(t,n){switch(t){case"keyup":return Uv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nr=!1;function Nv(t,n){switch(t){case"compositionend":return ud(n);case"keypress":return n.which!==32?null:(ld=!0,od);case"textInput":return t=n.data,t===od&&ld?null:t;default:return null}}function Ov(t,n){if(Nr)return t==="compositionend"||!jc&&cd(t,n)?(t=ed(),ko=kc=ca=null,Nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sd&&n.locale!=="ko"?null:n.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Pv[t.type]:n==="textarea"}function hd(t,n,a,s){Ur?Lr?Lr.push(s):Lr=[s]:Ur=s,n=zl(n,"onChange"),0<n.length&&(a=new Wo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ws=null,Ys=null;function zv(t){jm(t,0)}function jo(t){var n=Kt(t);if(Rr(n))return t}function dd(t,n){if(t==="change")return n}var pd=!1;if(Ii){var Zc;if(Ii){var Kc="oninput"in document;if(!Kc){var md=document.createElement("div");md.setAttribute("oninput","return;"),Kc=typeof md.oninput=="function"}Zc=Kc}else Zc=!1;pd=Zc&&(!document.documentMode||9<document.documentMode)}function gd(){Ws&&(Ws.detachEvent("onpropertychange",_d),Ys=Ws=null)}function _d(t){if(t.propertyName==="value"&&jo(Ys)){var n=[];hd(n,Ys,t,Hc(t)),td(zv,n)}}function Iv(t,n,a){t==="focusin"?(gd(),Ws=n,Ys=a,Ws.attachEvent("onpropertychange",_d)):t==="focusout"&&gd()}function Bv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Ys)}function Fv(t,n){if(t==="click")return jo(n)}function Hv(t,n){if(t==="input"||t==="change")return jo(n)}function Gv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var kn=typeof Object.is=="function"?Object.is:Gv;function js(t,n){if(kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!W.call(n,c)||!kn(t[c],n[c]))return!1}return!0}function vd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xd(t,n){var a=vd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vd(a)}}function Sd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function yd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function Qc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vv=Ii&&"documentMode"in document&&11>=document.documentMode,Or=null,Jc=null,Zs=null,$c=!1;function Md(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||Or==null||Or!==gn(s)||(s=Or,"selectionStart"in s&&Qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Zs&&js(Zs,s)||(Zs=s,s=zl(Jc,"onSelect"),0<s.length&&(n=new Wo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Or)))}function Za(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Pr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},tu={},Ed={};Ii&&(Ed=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Ka(t){if(tu[t])return tu[t];if(!Pr[t])return t;var n=Pr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ed)return tu[t]=n[a];return t}var Td=Ka("animationend"),bd=Ka("animationiteration"),Ad=Ka("animationstart"),kv=Ka("transitionrun"),Xv=Ka("transitionstart"),qv=Ka("transitioncancel"),Rd=Ka("transitionend"),Cd=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function gi(t,n){Cd.set(t,n),Ke(n,[t])}var Zo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],zr=0,nu=0;function Ko(){for(var t=zr,n=nu=zr=0;n<t;){var a=ei[n];ei[n++]=null;var s=ei[n];ei[n++]=null;var c=ei[n];ei[n++]=null;var f=ei[n];if(ei[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&wd(a,c,f)}}function Qo(t,n,a,s){ei[zr++]=t,ei[zr++]=n,ei[zr++]=a,ei[zr++]=s,nu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function iu(t,n,a,s){return Qo(t,n,a,s),Jo(t)}function Qa(t,n){return Qo(t,null,null,n),Jo(t)}function wd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-ie(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jo(t){if(50<vo)throw vo=0,df=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Ir={};function Wv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,s){return new Wv(t,n,a,s)}function au(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Bi(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Dd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $o(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")au(t)&&(g=1);else if(typeof t=="string")g=Qx(t,a,k.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case L:return t=Xn(31,a,n,c),t.elementType=L,t.lanes=f,t;case R:return Ja(a.children,c,f,n);case y:g=8,c|=24;break;case S:return t=Xn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case Y:return t=Xn(13,a,n,c),t.elementType=Y,t.lanes=f,t;case H:return t=Xn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:g=10;break t;case P:g=9;break t;case F:g=11;break t;case O:g=14;break t;case et:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Xn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ja(t,n,a,s){return t=Xn(7,t,s,n),t.lanes=a,t}function ru(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Ud(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function su(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Ld=new WeakMap;function ni(t,n){if(typeof t=="object"&&t!==null){var a=Ld.get(t);return a!==void 0?a:(n={value:t,source:n,stack:T(n)},Ld.set(t,n),n)}return{value:t,source:n,stack:T(n)}}var Br=[],Fr=0,tl=null,Ks=0,ii=[],ai=0,ua=null,bi=1,Ai="";function Fi(t,n){Br[Fr++]=Ks,Br[Fr++]=tl,tl=t,Ks=n}function Nd(t,n,a){ii[ai++]=bi,ii[ai++]=Ai,ii[ai++]=ua,ua=t;var s=bi;t=Ai;var c=32-ie(s)-1;s&=~(1<<c),a+=1;var f=32-ie(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,bi=1<<32-ie(n)+c|a<<c|s,Ai=f+t}else bi=1<<f|a<<c|s,Ai=t}function ou(t){t.return!==null&&(Fi(t,1),Nd(t,1,0))}function lu(t){for(;t===tl;)tl=Br[--Fr],Br[Fr]=null,Ks=Br[--Fr],Br[Fr]=null;for(;t===ua;)ua=ii[--ai],ii[ai]=null,Ai=ii[--ai],ii[ai]=null,bi=ii[--ai],ii[ai]=null}function Od(t,n){ii[ai++]=bi,ii[ai++]=Ai,ii[ai++]=ua,bi=n.id,Ai=n.overflow,ua=t}var _n=null,Ge=null,Ee=!1,fa=null,ri=!1,cu=Error(r(519));function ha(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(ni(n,t)),cu}function Pd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[Mn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)xe(So[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),jh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),Kh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Jm(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||ha(t,!0)}function zd(t){for(_n=t.return;_n;)switch(_n.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:_n=_n.return}}function Hr(t){if(t!==_n)return!1;if(!Ee)return zd(t),Ee=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Cf(t.type,t.memoizedProps)),a=!a),a&&Ge&&ha(t),zd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ge=og(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ge=og(t)}else n===27?(n=Ge,Aa(t.type)?(t=Nf,Nf=null,Ge=t):Ge=n):Ge=_n?oi(t.stateNode.nextSibling):null;return!0}function $a(){Ge=_n=null,Ee=!1}function uu(){var t=fa;return t!==null&&(Bn===null?Bn=t:Bn.push.apply(Bn,t),fa=null),t}function Qs(t){fa===null?fa=[t]:fa.push(t)}var fu=N(null),tr=null,Hi=null;function da(t,n,a){Mt(fu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=fu.current,j(fu)}function hu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function du(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),hu(f.return,a,t),s||(g=null);break t}f=b.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),hu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Gr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var b=c.type;kn(c.pendingProps.value,g.value)||(t!==null?t.push(b):t=[b])}}else if(c===bt.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(bo):t=[bo])}c=c.return}t!==null&&du(n,t,a,s),n.flags|=262144}function el(t){for(t=t.firstContext;t!==null;){if(!kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function er(t){tr=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function vn(t){return Id(tr,t)}function nl(t,n){return tr===null&&er(t),Id(t,n)}function Id(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var Yv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},jv=o.unstable_scheduleCallback,Zv=o.unstable_NormalPriority,en={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pu(){return{controller:new Yv,data:new Map,refCount:0}}function Js(t){t.refCount--,t.refCount===0&&jv(Zv,function(){t.controller.abort()})}var $s=null,mu=0,Vr=0,kr=null;function Kv(t,n){if($s===null){var a=$s=[];mu=0,Vr=xf(),kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return mu++,n.then(Bd,Bd),n}function Bd(){if(--mu===0&&$s!==null){kr!==null&&(kr.status="fulfilled");var t=$s;$s=null,Vr=0,kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Fd=z.S;z.S=function(t,n){Mm=mt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Kv(t,n),Fd!==null&&Fd(t,n)};var nr=N(null);function gu(){var t=nr.current;return t!==null?t:Ie.pooledCache}function il(t,n){n===null?Mt(nr,nr.current):Mt(nr,n.pool)}function Hd(){var t=gu();return t===null?null:{parent:en._currentValue,pool:t}}var Xr=Error(r(460)),_u=Error(r(474)),al=Error(r(542)),rl={then:function(){}};function Gd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xd(t),t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ie,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Xd(t),t}throw ar=n,Xr}}function ir(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ar=a,Xr):a}}var ar=null;function kd(){if(ar===null)throw Error(r(459));var t=ar;return ar=null,t}function Xd(t){if(t===Xr||t===al)throw Error(r(483))}var qr=null,to=0;function sl(t){var n=to;return to+=1,qr===null&&(qr=[]),Vd(qr,t,n)}function eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ol(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qd(t){function n(q,V){if(t){var $=q.deletions;$===null?(q.deletions=[V],q.flags|=16):$.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=Bi(q,V),q.index=0,q.sibling=null,q}function f(q,V,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<V?(q.flags|=67108866,V):$):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function g(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,V,$,St){return V===null||V.tag!==6?(V=ru($,q.mode,St),V.return=q,V):(V=c(V,$),V.return=q,V)}function B(q,V,$,St){var Yt=$.type;return Yt===R?gt(q,V,$.props.children,St,$.key):V!==null&&(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===et&&ir(Yt)===V.type)?(V=c(V,$.props),eo(V,$),V.return=q,V):(V=$o($.type,$.key,$.props,null,q.mode,St),eo(V,$),V.return=q,V)}function tt(q,V,$,St){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=su($,q.mode,St),V.return=q,V):(V=c(V,$.children||[]),V.return=q,V)}function gt(q,V,$,St,Yt){return V===null||V.tag!==7?(V=Ja($,q.mode,St,Yt),V.return=q,V):(V=c(V,$),V.return=q,V)}function yt(q,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=ru(""+V,q.mode,$),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return $=$o(V.type,V.key,V.props,null,q.mode,$),eo($,V),$.return=q,$;case w:return V=su(V,q.mode,$),V.return=q,V;case et:return V=ir(V),yt(q,V,$)}if(ct(V)||lt(V))return V=Ja(V,q.mode,$,null),V.return=q,V;if(typeof V.then=="function")return yt(q,sl(V),$);if(V.$$typeof===C)return yt(q,nl(q,V),$);ol(q,V)}return null}function it(q,V,$,St){var Yt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Yt!==null?null:b(q,V,""+$,St);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===Yt?B(q,V,$,St):null;case w:return $.key===Yt?tt(q,V,$,St):null;case et:return $=ir($),it(q,V,$,St)}if(ct($)||lt($))return Yt!==null?null:gt(q,V,$,St,null);if(typeof $.then=="function")return it(q,V,sl($),St);if($.$$typeof===C)return it(q,V,nl(q,$),St);ol(q,$)}return null}function ht(q,V,$,St,Yt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return q=q.get($)||null,b(V,q,""+St,Yt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case E:return q=q.get(St.key===null?$:St.key)||null,B(V,q,St,Yt);case w:return q=q.get(St.key===null?$:St.key)||null,tt(V,q,St,Yt);case et:return St=ir(St),ht(q,V,$,St,Yt)}if(ct(St)||lt(St))return q=q.get($)||null,gt(V,q,St,Yt,null);if(typeof St.then=="function")return ht(q,V,$,sl(St),Yt);if(St.$$typeof===C)return ht(q,V,$,nl(V,St),Yt);ol(V,St)}return null}function Ht(q,V,$,St){for(var Yt=null,be=null,Xt=V,pe=V=0,Me=null;Xt!==null&&pe<$.length;pe++){Xt.index>pe?(Me=Xt,Xt=null):Me=Xt.sibling;var Ae=it(q,Xt,$[pe],St);if(Ae===null){Xt===null&&(Xt=Me);break}t&&Xt&&Ae.alternate===null&&n(q,Xt),V=f(Ae,V,pe),be===null?Yt=Ae:be.sibling=Ae,be=Ae,Xt=Me}if(pe===$.length)return a(q,Xt),Ee&&Fi(q,pe),Yt;if(Xt===null){for(;pe<$.length;pe++)Xt=yt(q,$[pe],St),Xt!==null&&(V=f(Xt,V,pe),be===null?Yt=Xt:be.sibling=Xt,be=Xt);return Ee&&Fi(q,pe),Yt}for(Xt=s(Xt);pe<$.length;pe++)Me=ht(Xt,q,pe,$[pe],St),Me!==null&&(t&&Me.alternate!==null&&Xt.delete(Me.key===null?pe:Me.key),V=f(Me,V,pe),be===null?Yt=Me:be.sibling=Me,be=Me);return t&&Xt.forEach(function(Ua){return n(q,Ua)}),Ee&&Fi(q,pe),Yt}function Qt(q,V,$,St){if($==null)throw Error(r(151));for(var Yt=null,be=null,Xt=V,pe=V=0,Me=null,Ae=$.next();Xt!==null&&!Ae.done;pe++,Ae=$.next()){Xt.index>pe?(Me=Xt,Xt=null):Me=Xt.sibling;var Ua=it(q,Xt,Ae.value,St);if(Ua===null){Xt===null&&(Xt=Me);break}t&&Xt&&Ua.alternate===null&&n(q,Xt),V=f(Ua,V,pe),be===null?Yt=Ua:be.sibling=Ua,be=Ua,Xt=Me}if(Ae.done)return a(q,Xt),Ee&&Fi(q,pe),Yt;if(Xt===null){for(;!Ae.done;pe++,Ae=$.next())Ae=yt(q,Ae.value,St),Ae!==null&&(V=f(Ae,V,pe),be===null?Yt=Ae:be.sibling=Ae,be=Ae);return Ee&&Fi(q,pe),Yt}for(Xt=s(Xt);!Ae.done;pe++,Ae=$.next())Ae=ht(Xt,q,pe,Ae.value,St),Ae!==null&&(t&&Ae.alternate!==null&&Xt.delete(Ae.key===null?pe:Ae.key),V=f(Ae,V,pe),be===null?Yt=Ae:be.sibling=Ae,be=Ae);return t&&Xt.forEach(function(lS){return n(q,lS)}),Ee&&Fi(q,pe),Yt}function Pe(q,V,$,St){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:t:{for(var Yt=$.key;V!==null;){if(V.key===Yt){if(Yt=$.type,Yt===R){if(V.tag===7){a(q,V.sibling),St=c(V,$.props.children),St.return=q,q=St;break t}}else if(V.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===et&&ir(Yt)===V.type){a(q,V.sibling),St=c(V,$.props),eo(St,$),St.return=q,q=St;break t}a(q,V);break}else n(q,V);V=V.sibling}$.type===R?(St=Ja($.props.children,q.mode,St,$.key),St.return=q,q=St):(St=$o($.type,$.key,$.props,null,q.mode,St),eo(St,$),St.return=q,q=St)}return g(q);case w:t:{for(Yt=$.key;V!==null;){if(V.key===Yt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(q,V.sibling),St=c(V,$.children||[]),St.return=q,q=St;break t}else{a(q,V);break}else n(q,V);V=V.sibling}St=su($,q.mode,St),St.return=q,q=St}return g(q);case et:return $=ir($),Pe(q,V,$,St)}if(ct($))return Ht(q,V,$,St);if(lt($)){if(Yt=lt($),typeof Yt!="function")throw Error(r(150));return $=Yt.call($),Qt(q,V,$,St)}if(typeof $.then=="function")return Pe(q,V,sl($),St);if($.$$typeof===C)return Pe(q,V,nl(q,$),St);ol(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(q,V.sibling),St=c(V,$),St.return=q,q=St):(a(q,V),St=ru($,q.mode,St),St.return=q,q=St),g(q)):a(q,V)}return function(q,V,$,St){try{to=0;var Yt=Pe(q,V,$,St);return qr=null,Yt}catch(Xt){if(Xt===Xr||Xt===al)throw Xt;var be=Xn(29,Xt,null,q.mode);return be.lanes=St,be.return=q,be}finally{}}}var rr=qd(!0),Wd=qd(!1),pa=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ma(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ga(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Jo(t),wd(t,null,a),n}return Qo(t,s,n,a),Jo(t)}function no(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,hi(t,a)}}function Su(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var yu=!1;function io(){if(yu){var t=kr;if(t!==null)throw t}}function ao(t,n,a,s){yu=!1;var c=t.updateQueue;pa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,tt=B.next;B.next=null,g===null?f=tt:g.next=tt,g=B;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,b=gt.lastBaseUpdate,b!==g&&(b===null?gt.firstBaseUpdate=tt:b.next=tt,gt.lastBaseUpdate=B))}if(f!==null){var yt=c.baseState;g=0,gt=tt=B=null,b=f;do{var it=b.lane&-536870913,ht=it!==b.lane;if(ht?(ye&it)===it:(s&it)===it){it!==0&&it===Vr&&(yu=!0),gt!==null&&(gt=gt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Ht=t,Qt=b;it=n;var Pe=a;switch(Qt.tag){case 1:if(Ht=Qt.payload,typeof Ht=="function"){yt=Ht.call(Pe,yt,it);break t}yt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=Qt.payload,it=typeof Ht=="function"?Ht.call(Pe,yt,it):Ht,it==null)break t;yt=_({},yt,it);break t;case 2:pa=!0}}it=b.callback,it!==null&&(t.flags|=64,ht&&(t.flags|=8192),ht=c.callbacks,ht===null?c.callbacks=[it]:ht.push(it))}else ht={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},gt===null?(tt=gt=ht,B=yt):gt=gt.next=ht,g|=it;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;ht=b,b=ht.next,ht.next=null,c.lastBaseUpdate=ht,c.shared.pending=null}}while(!0);gt===null&&(B=yt),c.baseState=B,c.firstBaseUpdate=tt,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),ya|=g,t.lanes=g,t.memoizedState=yt}}function Yd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function jd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Yd(a[t],n)}var Wr=N(null),ll=N(0);function Zd(t,n){t=Ki,Mt(ll,t),Mt(Wr,n),Ki=t|n.baseLanes}function Mu(){Mt(ll,Ki),Mt(Wr,Wr.current)}function Eu(){Ki=ll.current,j(Wr),j(ll)}var qn=N(null),si=null;function _a(t){var n=t.alternate;Mt(Qe,Qe.current&1),Mt(qn,t),si===null&&(n===null||Wr.current!==null||n.memoizedState!==null)&&(si=t)}function Tu(t){Mt(Qe,Qe.current),Mt(qn,t),si===null&&(si=t)}function Kd(t){t.tag===22?(Mt(Qe,Qe.current),Mt(qn,t),si===null&&(si=t)):va()}function va(){Mt(Qe,Qe.current),Mt(qn,qn.current)}function Wn(t){j(qn),si===t&&(si=null),j(Qe)}var Qe=N(0);function cl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Uf(a)||Lf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,he=null,Ne=null,nn=null,ul=!1,Yr=!1,sr=!1,fl=0,ro=0,jr=null,Jv=0;function Ye(){throw Error(r(321))}function bu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!kn(t[a],n[a]))return!1;return!0}function Au(t,n,a,s,c,f){return Vi=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Np:Gu,sr=!1,f=a(s,c),sr=!1,Yr&&(f=Jd(n,a,s,c)),Qd(t),f}function Qd(t){z.H=lo;var n=Ne!==null&&Ne.next!==null;if(Vi=0,nn=Ne=he=null,ul=!1,ro=0,jr=null,n)throw Error(r(300));t===null||an||(t=t.dependencies,t!==null&&el(t)&&(an=!0))}function Jd(t,n,a,s){he=t;var c=0;do{if(Yr&&(jr=null),ro=0,Yr=!1,25<=c)throw Error(r(301));if(c+=1,nn=Ne=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=Op,f=n(a,s)}while(Yr);return f}function $v(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?so(n):n,t=t.useState()[0],(Ne!==null?Ne.memoizedState:null)!==t&&(he.flags|=1024),n}function Ru(){var t=fl!==0;return fl=0,t}function Cu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function wu(t){if(ul){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ul=!1}Vi=0,nn=Ne=he=null,Yr=!1,ro=fl=0,jr=null}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?he.memoizedState=nn=t:nn=nn.next=t,nn}function Je(){if(Ne===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ne.next;var n=nn===null?he.memoizedState:nn.next;if(n!==null)nn=n,Ne=t;else{if(t===null)throw he.alternate===null?Error(r(467)):Error(r(310));Ne=t,t={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},nn===null?he.memoizedState=nn=t:nn=nn.next=t}return nn}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(t){var n=ro;return ro+=1,jr===null&&(jr=[]),t=Vd(jr,t,n),n=he,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Np:Gu),t}function dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return so(t);if(t.$$typeof===C)return vn(t)}throw Error(r(438,String(t)))}function Du(t){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=A;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function pl(t){var n=Je();return Uu(n,Ne,t)}function Uu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=g=null,B=null,tt=n,gt=!1;do{var yt=tt.lane&-536870913;if(yt!==tt.lane?(ye&yt)===yt:(Vi&yt)===yt){var it=tt.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),yt===Vr&&(gt=!0);else if((Vi&it)===it){tt=tt.next,it===Vr&&(gt=!0);continue}else yt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=yt,g=f):B=B.next=yt,he.lanes|=it,ya|=it;yt=tt.action,sr&&a(f,yt),f=tt.hasEagerState?tt.eagerState:a(f,yt)}else it={lane:yt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=it,g=f):B=B.next=it,he.lanes|=yt,ya|=yt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?g=f:B.next=b,!kn(f,t.memoizedState)&&(an=!0,gt&&(a=kr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Lu(t){var n=Je(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);kn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function $d(t,n,a){var s=he,c=Je(),f=Ee;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!kn((Ne||c).memoizedState,a);if(g&&(c.memoizedState=a,an=!0),c=c.queue,Pu(np.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||nn!==null&&nn.memoizedState.tag&1){if(s.flags|=2048,Zr(9,{destroy:void 0},ep.bind(null,s,c,a,n),null),Ie===null)throw Error(r(349));f||(Vi&127)!==0||tp(s,n,a)}return a}function tp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=hl(),he.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function ep(t,n,a,s){n.value=a,n.getSnapshot=s,ip(n)&&ap(t)}function np(t,n,a){return a(function(){ip(n)&&ap(t)})}function ip(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!kn(t,a)}catch{return!0}}function ap(t){var n=Qa(t,2);n!==null&&Fn(n,t,2)}function Nu(t){var n=Dn();if(typeof t=="function"){var a=t;if(t=a(),sr){ue(!0);try{a()}finally{ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function rp(t,n,a,s){return t.baseState=a,Uu(t,Ne,typeof s=="function"?s:ki)}function tx(t,n,a,s,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,sp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,g={};z.T=g;try{var b=a(c,s),B=z.S;B!==null&&B(g,b),op(t,n,b)}catch(tt){Ou(t,n,tt)}finally{f!==null&&g.types!==null&&(f.types=g.types),z.T=f}}else try{f=a(c,s),op(t,n,f)}catch(tt){Ou(t,n,tt)}}function op(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){lp(t,n,s)},function(s){return Ou(t,n,s)}):lp(t,n,a)}function lp(t,n,a){n.status="fulfilled",n.value=a,cp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,sp(t,a)))}function Ou(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,cp(n),n=n.next;while(n!==s)}t.action=null}function cp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function up(t,n){return n}function fp(t,n){if(Ee){var a=Ie.formState;if(a!==null){t:{var s=he;if(Ee){if(Ge){e:{for(var c=Ge,f=ri;c.nodeType!==8;){if(!f){c=null;break e}if(c=oi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ge=oi(c.nextSibling),s=c.data==="F!";break t}}ha(s)}s=!1}s&&(n=a[0])}}return a=Dn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:up,lastRenderedState:n},a.queue=s,a=Dp.bind(null,he,s),s.dispatch=a,s=Nu(!1),f=Hu.bind(null,he,!1,s.queue),s=Dn(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=tx.bind(null,he,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function hp(t){var n=Je();return dp(n,Ne,t)}function dp(t,n,a){if(n=Uu(t,n,up)[0],t=pl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=so(n)}catch(g){throw g===Xr?al:g}else s=n;n=Je();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(he.flags|=2048,Zr(9,{destroy:void 0},ex.bind(null,c,a),null)),[s,f,t]}function ex(t,n){t.action=n}function pp(t){var n=Je(),a=Ne;if(a!==null)return dp(n,a,t);Je(),n=n.memoizedState,a=Je();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Zr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=hl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function mp(){return Je().memoizedState}function ml(t,n,a,s){var c=Dn();he.flags|=t,c.memoizedState=Zr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(t,n,a,s){var c=Je();s=s===void 0?null:s;var f=c.memoizedState.inst;Ne!==null&&s!==null&&bu(s,Ne.memoizedState.deps)?c.memoizedState=Zr(n,f,a,s):(he.flags|=t,c.memoizedState=Zr(1|n,f,a,s))}function gp(t,n){ml(8390656,8,t,n)}function Pu(t,n){gl(2048,8,t,n)}function nx(t){he.flags|=4;var n=he.updateQueue;if(n===null)n=hl(),he.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function _p(t){var n=Je().memoizedState;return nx({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function vp(t,n){return gl(4,2,t,n)}function xp(t,n){return gl(4,4,t,n)}function Sp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function yp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,Sp.bind(null,n,t),a)}function zu(){}function Mp(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&bu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Ep(t,n){var a=Je();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&bu(n,s[1]))return s[0];if(s=t(),sr){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[s,n],s}function Iu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(ye&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Tm(),he.lanes|=t,ya|=t,a)}function Tp(t,n,a,s){return kn(a,n)?a:Wr.current!==null?(t=Iu(t,a,s),kn(t,n)||(an=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(ye&261930)===0?(an=!0,t.memoizedState=a):(t=Tm(),he.lanes|=t,ya|=t,n)}function bp(t,n,a,s,c){var f=X.p;X.p=f!==0&&8>f?f:8;var g=z.T,b={};z.T=b,Hu(t,!1,n,a);try{var B=c(),tt=z.S;if(tt!==null&&tt(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var gt=Qv(B,s);oo(t,n,gt,Zn(t))}else oo(t,n,s,Zn(t))}catch(yt){oo(t,n,{then:function(){},status:"rejected",reason:yt},Zn())}finally{X.p=f,g!==null&&b.types!==null&&(g.types=b.types),z.T=g}}function ix(){}function Bu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Ap(t).queue;bp(t,c,n,G,a===null?ix:function(){return Rp(t),a(s)})}function Ap(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Rp(t){var n=Ap(t);n.next===null&&(n=t.alternate.memoizedState),oo(t,n.next.queue,{},Zn())}function Fu(){return vn(bo)}function Cp(){return Je().memoizedState}function wp(){return Je().memoizedState}function ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();t=ma(a);var s=ga(n,t,a);s!==null&&(Fn(s,n,a),no(s,n,a)),n={cache:pu()},t.payload=n;return}n=n.return}}function rx(t,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?Up(n,a):(a=iu(t,n,a,s),a!==null&&(Fn(a,t,s),Lp(a,n,s)))}function Dp(t,n,a){var s=Zn();oo(t,n,a,s)}function oo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))Up(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,b=f(g,a);if(c.hasEagerState=!0,c.eagerState=b,kn(b,g))return Qo(t,n,c,0),Ie===null&&Ko(),!1}catch{}finally{}if(a=iu(t,n,c,s),a!==null)return Fn(a,t,s),Lp(a,n,s),!0}return!1}function Hu(t,n,a,s){if(s={lane:2,revertLane:xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=iu(t,a,s,2),n!==null&&Fn(n,t,2)}function _l(t){var n=t.alternate;return t===he||n!==null&&n===he}function Up(t,n){Yr=ul=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,hi(t,a)}}var lo={readContext:vn,use:dl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye};lo.useEffectEvent=Ye;var Np={readContext:vn,use:dl,useCallback:function(t,n){return Dn().memoizedState=[t,n===void 0?null:n],t},useContext:vn,useEffect:gp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ml(4194308,4,Sp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ml(4194308,4,t,n)},useInsertionEffect:function(t,n){ml(4,2,t,n)},useMemo:function(t,n){var a=Dn();n=n===void 0?null:n;var s=t();if(sr){ue(!0);try{t()}finally{ue(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Dn();if(a!==void 0){var c=a(n);if(sr){ue(!0);try{a(n)}finally{ue(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=rx.bind(null,he,t),[s.memoizedState,t]},useRef:function(t){var n=Dn();return t={current:t},n.memoizedState=t},useState:function(t){t=Nu(t);var n=t.queue,a=Dp.bind(null,he,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(t,n){var a=Dn();return Iu(a,t,n)},useTransition:function(){var t=Nu(!1);return t=bp.bind(null,he,t.queue,!0,!1),Dn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=he,c=Dn();if(Ee){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(ye&127)!==0||tp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,gp(np.bind(null,s,f,t),[t]),s.flags|=2048,Zr(9,{destroy:void 0},ep.bind(null,s,f,a,n),null),a},useId:function(){var t=Dn(),n=Ie.identifierPrefix;if(Ee){var a=Ai,s=bi;a=(s&~(1<<32-ie(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Fu,useFormState:fp,useActionState:fp,useOptimistic:function(t){var n=Dn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Hu.bind(null,he,!0,a),a.dispatch=n,[t,n]},useMemoCache:Du,useCacheRefresh:function(){return Dn().memoizedState=ax.bind(null,he)},useEffectEvent:function(t){var n=Dn(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gu={readContext:vn,use:dl,useCallback:Mp,useContext:vn,useEffect:Pu,useImperativeHandle:yp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Ep,useReducer:pl,useRef:mp,useState:function(){return pl(ki)},useDebugValue:zu,useDeferredValue:function(t,n){var a=Je();return Tp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=pl(ki)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:$d,useId:Cp,useHostTransitionStatus:Fu,useFormState:hp,useActionState:hp,useOptimistic:function(t,n){var a=Je();return rp(a,Ne,t,n)},useMemoCache:Du,useCacheRefresh:wp};Gu.useEffectEvent=_p;var Op={readContext:vn,use:dl,useCallback:Mp,useContext:vn,useEffect:Pu,useImperativeHandle:yp,useInsertionEffect:vp,useLayoutEffect:xp,useMemo:Ep,useReducer:Lu,useRef:mp,useState:function(){return Lu(ki)},useDebugValue:zu,useDeferredValue:function(t,n){var a=Je();return Ne===null?Iu(a,t,n):Tp(a,Ne.memoizedState,t,n)},useTransition:function(){var t=Lu(ki)[0],n=Je().memoizedState;return[typeof t=="boolean"?t:so(t),n]},useSyncExternalStore:$d,useId:Cp,useHostTransitionStatus:Fu,useFormState:pp,useActionState:pp,useOptimistic:function(t,n){var a=Je();return Ne!==null?rp(a,Ne,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Du,useCacheRefresh:wp};Op.useEffectEvent=_p;function Vu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ku={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,s),n!==null&&(Fn(n,t,s),no(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Zn(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ga(t,c,s),n!==null&&(Fn(n,t,s),no(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Zn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=ga(t,s,a),n!==null&&(Fn(n,t,a),no(n,t,a))}};function Pp(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!js(a,s)||!js(c,f):!0}function zp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&ku.enqueueReplaceState(n,n.state,null)}function or(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Ip(t){Zo(t)}function Bp(t){console.error(t)}function Fp(t){Zo(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Hp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Xu(t,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function Gp(t){return t=ma(t),t.tag=3,t}function Vp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Hp(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){Hp(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function sx(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return si===null?Dl():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),gf(t,s,c)),!1;case 22:return a.flags|=65536,s===rl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),gf(t,s,c)),!1}throw Error(r(435,a.tag))}return gf(t,s,c),Dl(),!1}if(Ee)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==cu&&(t=Error(r(422),{cause:s}),Qs(ni(t,a)))):(s!==cu&&(n=Error(r(423),{cause:s}),Qs(ni(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ni(s,a),c=Xu(t.stateNode,s,c),Su(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=ni(f,a),_o===null?_o=[f]:_o.push(f),je!==4&&(je=2),n===null)return!0;s=ni(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Xu(a.stateNode,s,t),Su(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Gp(c),Vp(c,t,a,s),Su(a,c),!1}a=a.return}while(a!==null);return!1}var qu=Error(r(461)),an=!1;function xn(t,n,a,s){n.child=t===null?Wd(n,null,a,s):rr(n,t.child,a,s)}function kp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var b in s)b!=="ref"&&(g[b]=s[b])}else g=s;return er(n),s=Au(t,n,a,g,f,c),b=Ru(),t!==null&&!an?(Cu(t,n,c),Xi(t,n,c)):(Ee&&b&&ou(n),n.flags|=1,xn(t,n,s,c),n.child)}function Xp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,qp(t,n,f,s,c)):(t=$o(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!$u(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:js,a(g,s)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function qp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(js(f,s)&&t.ref===n.ref)if(an=!1,n.pendingProps=s=f,$u(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Wu(t,n,a,s,c)}function Wp(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return Yp(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&il(n,f!==null?f.cachePool:null),f!==null?Zd(n,f):Mu(),Kd(n);else return s=n.lanes=536870912,Yp(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(il(n,f.cachePool),Zd(n,f),va(),n.memoizedState=null):(t!==null&&il(n,null),Mu(),va());return xn(t,n,c,a),n.child}function co(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yp(t,n,a,s,c){var f=gu();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&il(n,null),Mu(),Kd(n),t!==null&&Gr(t,n,s,!0),n.childLanes=c,null}function xl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function jp(t,n,a){return rr(n,t.child,null,a),t=xl(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function ox(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ee){if(s.mode==="hidden")return t=xl(n,s),n.lanes=536870912,co(null,t);if(Tu(n),(t=Ge)?(t=sg(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=Ud(t),a.return=n,n.child=a,_n=n,Ge=null)):t=null,t===null)throw ha(n);return n.lanes=536870912,null}return xl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(Tu(n),c)if(n.flags&256)n.flags&=-257,n=jp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(an||Gr(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(s=Ie,s!==null&&(g=Pi(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,Qa(t,g),Fn(s,t,g),qu;Dl(),n=jp(t,n,a)}else t=f.treeContext,Ge=oi(g.nextSibling),_n=n,Ee=!0,fa=null,ri=!1,t!==null&&Od(n,t),n=xl(n,s),n.flags|=4096;return n}return t=Bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Wu(t,n,a,s,c){return er(n),a=Au(t,n,a,s,void 0,c),s=Ru(),t!==null&&!an?(Cu(t,n,c),Xi(t,n,c)):(Ee&&s&&ou(n),n.flags|=1,xn(t,n,a,c),n.child)}function Zp(t,n,a,s,c,f){return er(n),n.updateQueue=null,a=Jd(n,s,a,c),Qd(t),s=Ru(),t!==null&&!an?(Cu(t,n,f),Xi(t,n,f)):(Ee&&s&&ou(n),n.flags|=1,xn(t,n,a,f),n.child)}function Kp(t,n,a,s,c){if(er(n),n.stateNode===null){var f=Ir,g=a.contextType;typeof g=="object"&&g!==null&&(f=vn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},vu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?vn(g):Ir,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Vu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&ku.enqueueReplaceState(f,f.state,null),ao(n,s,f,c),io(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=or(a,b);f.props=B;var tt=f.context,gt=a.contextType;g=Ir,typeof gt=="object"&&gt!==null&&(g=vn(gt));var yt=a.getDerivedStateFromProps;gt=typeof yt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==g)&&zp(n,f,s,g),pa=!1;var it=n.memoizedState;f.state=it,ao(n,s,f,c),io(),tt=n.memoizedState,b||it!==tt||pa?(typeof yt=="function"&&(Vu(n,a,yt,s),tt=n.memoizedState),(B=pa||Pp(n,a,B,s,it,tt,g))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=g,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,xu(t,n),g=n.memoizedProps,gt=or(a,g),f.props=gt,yt=n.pendingProps,it=f.context,tt=a.contextType,B=Ir,typeof tt=="object"&&tt!==null&&(B=vn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==yt||it!==B)&&zp(n,f,s,B),pa=!1,it=n.memoizedState,f.state=it,ao(n,s,f,c),io();var ht=n.memoizedState;g!==yt||it!==ht||pa||t!==null&&t.dependencies!==null&&el(t.dependencies)?(typeof b=="function"&&(Vu(n,a,b,s),ht=n.memoizedState),(gt=pa||Pp(n,a,gt,s,it,ht,B)||t!==null&&t.dependencies!==null&&el(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ht,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ht,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ht),f.props=s,f.state=ht,f.context=B,s=gt):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&it===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Sl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=rr(n,t.child,null,c),n.child=rr(n,null,a,c)):xn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function Qp(t,n,a,s){return $a(),n.flags|=256,xn(t,n,a,s),n.child}var Yu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(t){return{baseLanes:t,cachePool:Hd()}}function Zu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=jn),t}function Jp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Qe.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ee){if(c?_a(n):va(),(t=Ge)?(t=sg(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ua!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=Ud(t),a.return=n,n.child=a,_n=n,Ge=null)):t=null,t===null)throw ha(n);return Lf(t)?n.lanes=32:n.lanes=536870912,null}var b=s.children;return s=s.fallback,c?(va(),c=n.mode,b=yl({mode:"hidden",children:b},c),s=Ja(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,s=n.child,s.memoizedState=ju(a),s.childLanes=Zu(t,g,a),n.memoizedState=Yu,co(null,s)):(_a(n),Ku(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(_a(n),n.flags&=-257,n=Qu(t,n,a)):n.memoizedState!==null?(va(),n.child=t.child,n.flags|=128,n=null):(va(),b=s.fallback,c=n.mode,s=yl({mode:"visible",children:s.children},c),b=Ja(b,c,a,null),b.flags|=2,s.return=n,b.return=n,s.sibling=b,n.child=s,rr(n,t.child,null,a),s=n.child,s.memoizedState=ju(a),s.childLanes=Zu(t,g,a),n.memoizedState=Yu,n=co(null,s));else if(_a(n),Lf(b)){if(g=b.nextSibling&&b.nextSibling.dataset,g)var tt=g.dgst;g=tt,s=Error(r(419)),s.stack="",s.digest=g,Qs({value:s,source:null,stack:null}),n=Qu(t,n,a)}else if(an||Gr(t,n,a,!1),g=(a&t.childLanes)!==0,an||g){if(g=Ie,g!==null&&(s=Pi(g,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,Qa(t,s),Fn(g,t,s),qu;Uf(b)||Dl(),n=Qu(t,n,a)}else Uf(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ge=oi(b.nextSibling),_n=n,Ee=!0,fa=null,ri=!1,t!==null&&Od(n,t),n=Ku(n,s.children),n.flags|=4096);return n}return c?(va(),b=s.fallback,c=n.mode,B=t.child,tt=B.sibling,s=Bi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,tt!==null?b=Bi(tt,b):(b=Ja(b,c,a,null),b.flags|=2),b.return=n,s.return=n,s.sibling=b,n.child=s,co(null,s),s=n.child,b=t.child.memoizedState,b===null?b=ju(a):(c=b.cachePool,c!==null?(B=en._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Hd(),b={baseLanes:b.baseLanes|a,cachePool:c}),s.memoizedState=b,s.childLanes=Zu(t,g,a),n.memoizedState=Yu,co(t.child,s)):(_a(n),a=t.child,t=a.sibling,a=Bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Ku(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function Qu(t,n,a){return rr(n,t.child,null,a),t=Ku(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function $p(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),hu(t.return,n,a)}function Ju(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function tm(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=Qe.current,b=(g&2)!==0;if(b?(g=g&1|2,n.flags|=128):g&=1,Mt(Qe,g),xn(t,n,s,a),s=Ee?Ks:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,a,n);else if(t.tag===19)$p(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&cl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Ju(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&cl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Ju(n,!0,a,null,f,s);break;case"together":Ju(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Gr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function $u(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&el(t)))}function lx(t,n,a){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),da(n,en,t.memoizedState.cache),$a();break;case 27:case 5:te(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Tu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(_a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jp(t,n,a):(_a(n),t=Xi(t,n,a),t!==null?t.sibling:null);_a(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Gr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return tm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Mt(Qe,Qe.current),s)break;return null;case 22:return n.lanes=0,Wp(t,n,a,n.pendingProps);case 24:da(n,en,t.memoizedState.cache)}return Xi(t,n,a)}function em(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!$u(t,a)&&(n.flags&128)===0)return an=!1,lx(t,n,a);an=(t.flags&131072)!==0}else an=!1,Ee&&(n.flags&1048576)!==0&&Nd(n,Ks,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=ir(n.elementType),n.type=t,typeof t=="function")au(t)?(s=or(t,s),n.tag=1,n=Kp(null,n,t,s,a)):(n.tag=0,n=Wu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=kp(null,n,t,s,a);break t}else if(c===O){n.tag=14,n=Xp(null,n,t,s,a);break t}}throw n=ut(t)||t,Error(r(306,n,""))}}return n;case 0:return Wu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=or(s,n.pendingProps),Kp(t,n,s,c,a);case 3:t:{if(Gt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,xu(t,n),ao(n,s,null,a);var g=n.memoizedState;if(s=g.cache,da(n,en,s),s!==f.cache&&du(n,[en],a,!0),io(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qp(t,n,s,a);break t}else if(s!==c){c=ni(Error(r(424)),n),Qs(c),n=Qp(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ge=oi(t.firstChild),_n=n,Ee=!0,fa=null,ri=!0,a=Wd(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($a(),s===c){n=Xi(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return Sl(t,n),t===null?(a=hg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,t=n.pendingProps,s=Il(Tt.current).createElement(a),s[on]=n,s[Mn]=t,Sn(s,a,t),kt(s),n.stateNode=s):n.memoizedState=hg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return te(n),t===null&&Ee&&(s=n.stateNode=cg(n.type,n.pendingProps,Tt.current),_n=n,ri=!0,c=Ge,Aa(n.type)?(Nf=c,Ge=oi(s.firstChild)):Ge=c),xn(t,n,n.pendingProps.children,a),Sl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ee&&((c=s=Ge)&&(s=Bx(s,n.type,n.pendingProps,ri),s!==null?(n.stateNode=s,_n=n,Ge=oi(s.firstChild),ri=!1,c=!0):c=!1),c||ha(n)),te(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Cf(c,f)?s=null:g!==null&&Cf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Au(t,n,$v,null,null,a),bo._currentValue=c),Sl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Ee&&((t=a=Ge)&&(a=Fx(a,n.pendingProps,ri),a!==null?(n.stateNode=a,_n=n,Ge=null,t=!0):t=!1),t||ha(n)),null;case 13:return Jp(t,n,a);case 4:return Gt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=rr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return kp(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,er(n),c=vn(c),s=s(c),n.flags|=1,xn(t,n,s,a),n.child;case 14:return Xp(t,n,n.type,n.pendingProps,a);case 15:return qp(t,n,n.type,n.pendingProps,a);case 19:return tm(t,n,a);case 31:return ox(t,n,a);case 22:return Wp(t,n,a,n.pendingProps);case 24:return er(n),s=vn(en),t===null?(c=gu(),c===null&&(c=Ie,f=pu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},vu(n),da(n,en,c)):((t.lanes&a)!==0&&(xu(t,n),ao(n,null,null,a),io()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,en,s)):(s=f.cache,da(n,en,s),s!==c.cache&&du(n,[en],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(t){t.flags|=4}function tf(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Cm())t.flags|=8192;else throw ar=rl,_u}else t.flags&=-16777217}function nm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_g(n))if(Cm())t.flags|=8192;else throw ar=rl,_u}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,$r|=n)}function uo(t,n){if(!Ee)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ve(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function cx(t,n,a){var s=n.pendingProps;switch(lu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(en),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Hr(n)?qi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,uu())),Ve(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(qi(n),f!==null?(Ve(n),nm(n,f)):(Ve(n),tf(n,c,null,s,a))):f?f!==t.memoizedState?(qi(n),Ve(n),nm(n,f)):(Ve(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&qi(n),Ve(n),tf(n,c,t,s,a)),null;case 27:if(nt(n),a=Tt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}t=k.current,Hr(n)?Pd(n):(t=cg(c,s,a),n.stateNode=t,qi(n))}return Ve(n),null;case 5:if(nt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ve(n),null}if(f=k.current,Hr(n))Pd(n);else{var g=Il(Tt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[on]=n,f[Mn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Sn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&qi(n)}}return Ve(n),tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Tt.current,Hr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=_n,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Jm(t.nodeValue,a)),t||ha(n,!0)}else t=Il(t).createTextNode(s),t[on]=n,n.stateNode=t}return Ve(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Hr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),t=!1}else a=uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ve(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Hr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else c=uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ve(n),null);case 4:return Bt(),t===null&&Ef(n.stateNode.containerInfo),Ve(n),null;case 10:return Gi(n.type),Ve(n),null;case 19:if(j(Qe),s=n.memoizedState,s===null)return Ve(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)uo(s,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=cl(t),f!==null){for(n.flags|=128,uo(s,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Dd(a,t),a=a.sibling;return Mt(Qe,Qe.current&1|2),Ee&&Fi(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&mt()>Rl&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304)}else{if(!c)if(t=cl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Ee)return Ve(n),null}else 2*mt()-s.renderingStartTime>Rl&&a!==536870912&&(n.flags|=128,c=!0,uo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=mt(),t.sibling=null,a=Qe.current,Mt(Qe,c?a&1|2:a&1),Ee&&Fi(n,s.treeForkCount),t):(Ve(n),null);case 22:case 23:return Wn(n),Eu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&j(nr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(en),Ve(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ux(t,n){switch(lu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(en),Bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return nt(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(r(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$a()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(Qe),null;case 4:return Bt(),null;case 10:return Gi(n.type),null;case 22:case 23:return Wn(n),Eu(),t!==null&&j(nr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(en),null;case 25:return null;default:return null}}function im(t,n){switch(lu(n),n.tag){case 3:Gi(en),Bt();break;case 26:case 27:case 5:nt(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:j(Qe);break;case 10:Gi(n.type);break;case 22:case 23:Wn(n),Eu(),t!==null&&j(nr);break;case 24:Gi(en)}}function fo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(b){Le(n,n.return,b)}}function xa(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,b=g.destroy;if(b!==void 0){g.destroy=void 0,c=n;var B=a,tt=b;try{tt()}catch(gt){Le(c,B,gt)}}}s=s.next}while(s!==f)}}catch(gt){Le(n,n.return,gt)}}function am(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{jd(n,a)}catch(s){Le(t,t.return,s)}}}function rm(t,n,a){a.props=or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Le(t,n,s)}}function ho(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Le(t,n,c)}}function Ri(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Le(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Le(t,n,c)}else a.current=null}function sm(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Le(t,t.return,c)}}function ef(t,n,a){try{var s=t.stateNode;Lx(s,t.type,a,n),s[Mn]=n}catch(c){Le(t,t.return,c)}}function om(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function nf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||om(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function af(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(af(t,n,a),t=t.sibling;t!==null;)af(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function lm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Sn(n,s,a),n[on]=t,n[Mn]=a}catch(f){Le(t,t.return,f)}}var Wi=!1,rn=!1,rf=!1,cm=typeof WeakSet=="function"?WeakSet:Set,dn=null;function fx(t,n){if(t=t.containerInfo,Af=Xl,t=yd(t),Qc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,b=-1,B=-1,tt=0,gt=0,yt=t,it=null;e:for(;;){for(var ht;yt!==a||c!==0&&yt.nodeType!==3||(b=g+c),yt!==f||s!==0&&yt.nodeType!==3||(B=g+s),yt.nodeType===3&&(g+=yt.nodeValue.length),(ht=yt.firstChild)!==null;)it=yt,yt=ht;for(;;){if(yt===t)break e;if(it===a&&++tt===c&&(b=g),it===f&&++gt===s&&(B=g),(ht=yt.nextSibling)!==null)break;yt=it,it=yt.parentNode}yt=ht}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rf={focusedElem:t,selectionRange:a},Xl=!1,dn=n;dn!==null;)if(n=dn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,dn=t;else for(;dn!==null;){switch(n=dn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ht=or(a.type,c);t=s.getSnapshotBeforeUpdate(Ht,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Qt){Le(a,a.return,Qt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Df(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Df(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,dn=t;break}dn=n.return}}function um(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&fo(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Le(a,a.return,g)}else{var c=or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Le(a,a.return,g)}}s&64&&am(a),s&512&&ho(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jd(t,n)}catch(g){Le(a,a.return,g)}}break;case 27:n===null&&s&4&&lm(a);case 26:case 5:ji(t,a),n===null&&s&4&&sm(a),s&512&&ho(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&dm(t,a);break;case 13:ji(t,a),s&4&&pm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Sx.bind(null,a),Hx(t,a))));break;case 22:if(s=a.memoizedState!==null||Wi,!s){n=n!==null&&n.memoizedState!==null||rn,c=Wi;var f=rn;Wi=s,(rn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),Wi=c,rn=f}break;case 30:break;default:ji(t,a)}}function fm(t){var n=t.alternate;n!==null&&(t.alternate=null,fm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Lt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var We=null,Pn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)hm(t,n,a),a=a.sibling}function hm(t,n,a){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(de,a)}catch{}switch(a.tag){case 26:rn||Ri(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ri(a,n);var s=We,c=Pn;Aa(a.type)&&(We=a.stateNode,Pn=!1),Yi(t,n,a),Mo(a.stateNode),We=s,Pn=c;break;case 5:rn||Ri(a,n);case 6:if(s=We,c=Pn,We=null,Yi(t,n,a),We=s,Pn=c,We!==null)if(Pn)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(a.stateNode)}catch(f){Le(a,n,f)}else try{We.removeChild(a.stateNode)}catch(f){Le(a,n,f)}break;case 18:We!==null&&(Pn?(t=We,ag(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),os(t)):ag(We,a.stateNode));break;case 4:s=We,c=Pn,We=a.stateNode.containerInfo,Pn=!0,Yi(t,n,a),We=s,Pn=c;break;case 0:case 11:case 14:case 15:xa(2,a,n),rn||xa(4,a,n),Yi(t,n,a);break;case 1:rn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&rm(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:rn=(s=rn)||a.memoizedState!==null,Yi(t,n,a),rn=s;break;default:Yi(t,n,a)}}function dm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{os(t)}catch(a){Le(n,n.return,a)}}}function pm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{os(t)}catch(a){Le(n,n.return,a)}}function hx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new cm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new cm),n;default:throw Error(r(435,t.tag))}}function Tl(t,n){var a=hx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=yx.bind(null,t,s);s.then(c,c)}})}function zn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,b=g;t:for(;b!==null;){switch(b.tag){case 27:if(Aa(b.type)){We=b.stateNode,Pn=!1;break t}break;case 5:We=b.stateNode,Pn=!1;break t;case 3:case 4:We=b.stateNode.containerInfo,Pn=!0;break t}b=b.return}if(We===null)throw Error(r(160));hm(f,g,c),We=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mm(n,t),n=n.sibling}var _i=null;function mm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:zn(n,t),In(t),s&4&&(xa(3,t,t.return),fo(3,t),xa(5,t,t.return));break;case 1:zn(n,t),In(t),s&512&&(rn||a===null||Ri(a,a.return)),s&64&&Wi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=_i;if(zn(n,t),In(t),s&512&&(rn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[rt]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Sn(f,s,a),f[on]=t,kt(f),s=f;break t;case"link":var g=mg("link","href",c).get(s+(a.href||""));if(g){for(var b=0;b<g.length;b++)if(f=g[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(b,1);break e}}f=c.createElement(s),Sn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=mg("meta","content",c).get(s+(a.content||""))){for(b=0;b<g.length;b++)if(f=g[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(b,1);break e}}f=c.createElement(s),Sn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,kt(f),s=f}t.stateNode=s}else gg(c,t.type,t.stateNode);else t.stateNode=pg(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?gg(c,t.type,t.stateNode):pg(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:zn(n,t),In(t),s&512&&(rn||a===null||Ri(a,a.return)),a!==null&&s&4&&ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,t),In(t),s&512&&(rn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{Dr(c,"")}catch(Ht){Le(t,t.return,Ht)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,ef(t,c,a!==null?a.memoizedProps:c)),s&1024&&(rf=!0);break;case 6:if(zn(n,t),In(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ht){Le(t,t.return,Ht)}}break;case 3:if(Hl=null,c=_i,_i=Bl(n.containerInfo),zn(n,t),_i=c,In(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{os(n.containerInfo)}catch(Ht){Le(t,t.return,Ht)}rf&&(rf=!1,gm(t));break;case 4:s=_i,_i=Bl(t.stateNode.containerInfo),zn(n,t),In(t),_i=s;break;case 12:zn(n,t),In(t);break;case 31:zn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 13:zn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Al=mt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=Wi,gt=rn;if(Wi=tt||c,rn=gt||B,zn(n,t),rn=gt,Wi=tt,In(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Wi||rn||lr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{b=B.stateNode;var yt=B.memoizedProps.style,it=yt!=null&&yt.hasOwnProperty("display")?yt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Ht){Le(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ht){Le(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var ht=B.stateNode;c?rg(ht,!0):rg(B.stateNode,!1)}catch(Ht){Le(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(t,a))));break;case 19:zn(n,t),In(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 30:break;case 21:break;default:zn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(om(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=nf(t);El(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Dr(g,""),a.flags&=-33);var b=nf(t);El(t,b,g);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=nf(t);af(t,tt,B);break;default:throw Error(r(161))}}catch(gt){Le(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function gm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;gm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)um(t,n.alternate,n),n=n.sibling}function lr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:xa(4,n,n.return),lr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&rm(n,n.return,a),lr(n);break;case 27:Mo(n.stateNode);case 26:case 5:Ri(n,n.return),lr(n);break;case 22:n.memoizedState===null&&lr(n);break;case 30:lr(n);break;default:lr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),fo(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Le(s,s.return,tt)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Yd(B[c],b)}catch(tt){Le(s,s.return,tt)}}a&&g&64&&am(f),ho(f,f.return);break;case 27:lm(f);case 26:case 5:Zi(c,f,a),a&&s===null&&g&4&&sm(f),ho(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&g&4&&dm(c,f);break;case 13:Zi(c,f,a),a&&g&4&&pm(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),ho(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function sf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Js(a))}function of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t))}function vi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_m(t,n,a,s),n=n.sibling}function _m(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:vi(t,n,a,s),c&2048&&fo(9,n);break;case 1:vi(t,n,a,s);break;case 3:vi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Js(t)));break;case 12:if(c&2048){vi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,b=f.onPostCommit;typeof b=="function"&&b(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Le(n,n.return,B)}}else vi(t,n,a,s);break;case 31:vi(t,n,a,s);break;case 13:vi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?vi(t,n,a,s):po(t,n):f._visibility&2?vi(t,n,a,s):(f._visibility|=2,Kr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&sf(g,n);break;case 24:vi(t,n,a,s),c&2048&&of(n.alternate,n);break;default:vi(t,n,a,s)}}function Kr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,b=a,B=s,tt=g.flags;switch(g.tag){case 0:case 11:case 15:Kr(f,g,b,B,c),fo(8,g);break;case 23:break;case 22:var gt=g.stateNode;g.memoizedState!==null?gt._visibility&2?Kr(f,g,b,B,c):po(f,g):(gt._visibility|=2,Kr(f,g,b,B,c)),c&&tt&2048&&sf(g.alternate,g);break;case 24:Kr(f,g,b,B,c),c&&tt&2048&&of(g.alternate,g);break;default:Kr(f,g,b,B,c)}n=n.sibling}}function po(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:po(a,s),c&2048&&sf(s.alternate,s);break;case 24:po(a,s),c&2048&&of(s.alternate,s);break;default:po(a,s)}n=n.sibling}}var mo=8192;function Qr(t,n,a){if(t.subtreeFlags&mo)for(t=t.child;t!==null;)vm(t,n,a),t=t.sibling}function vm(t,n,a){switch(t.tag){case 26:Qr(t,n,a),t.flags&mo&&t.memoizedState!==null&&Jx(a,_i,t.memoizedState,t.memoizedProps);break;case 5:Qr(t,n,a);break;case 3:case 4:var s=_i;_i=Bl(t.stateNode.containerInfo),Qr(t,n,a),_i=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=mo,mo=16777216,Qr(t,n,a),mo=s):Qr(t,n,a));break;default:Qr(t,n,a)}}function xm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,ym(s,t)}xm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Sm(t),t=t.sibling}function Sm(t){switch(t.tag){case 0:case 11:case 15:go(t),t.flags&2048&&xa(9,t,t.return);break;case 3:go(t);break;case 12:go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,bl(t)):go(t);break;default:go(t)}}function bl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];dn=s,ym(s,t)}xm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:xa(8,n,n.return),bl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,bl(n));break;default:bl(n)}t=t.sibling}}function ym(t,n){for(;dn!==null;){var a=dn;switch(a.tag){case 0:case 11:case 15:xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,dn=s;else t:for(a=t;dn!==null;){s=dn;var c=s.sibling,f=s.return;if(fm(s),s===a){dn=null;break t}if(c!==null){c.return=f,dn=c;break t}dn=f}}}var dx={getCacheForType:function(t){var n=vn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return vn(en).controller.signal}},px=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ie=null,ve=null,ye=0,Ue=0,Yn=null,Sa=!1,Jr=!1,lf=!1,Ki=0,je=0,ya=0,cr=0,cf=0,jn=0,$r=0,_o=null,Bn=null,uf=!1,Al=0,Mm=0,Rl=1/0,Cl=null,Ma=null,ln=0,Ea=null,ts=null,Qi=0,ff=0,hf=null,Em=null,vo=0,df=null;function Zn(){return(Ce&2)!==0&&ye!==0?ye&-ye:z.T!==null?xf():Ya()}function Tm(){if(jn===0)if((ye&536870912)===0||Ee){var t=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),jn=t}else jn=536870912;return t=qn.current,t!==null&&(t.flags|=32),jn}function Fn(t,n,a){(t===Ie&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)&&(es(t,0),Ta(t,ye,jn,!1)),Be(t,a),((Ce&2)===0||t!==Ie)&&(t===Ie&&((Ce&2)===0&&(cr|=a),je===4&&Ta(t,ye,jn,!1)),Ci(t))}function bm(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),c=s?_x(t,n):mf(t,n,!0),f=s;do{if(c===0){Jr&&!s&&Ta(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!mx(a)){c=mf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var b=t;c=_o;var B=b.current.memoizedState.isDehydrated;if(B&&(es(b,g).flags|=256),g=mf(b,g,!1),g!==2){if(lf&&!B){b.errorRecoveryDisabledLanes|=f,cr|=f,c=4;break t}f=Bn,Bn=c,f!==null&&(Bn===null?Bn=f:Bn.push.apply(Bn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){es(t,0),Ta(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ta(s,n,jn,!Sa);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Al+300-mt(),10<c)){if(Ta(s,n,jn,!Sa),fe(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=ng(Am.bind(null,s,a,Bn,Cl,uf,n,jn,cr,$r,Sa,f,"Throttled",-0,0),c);break t}Am(s,a,Bn,Cl,uf,n,jn,cr,$r,Sa,f,null,-0,0)}}break}while(!0);Ci(t)}function Am(t,n,a,s,c,f,g,b,B,tt,gt,yt,it,ht){if(t.timeoutHandle=-1,yt=n.subtreeFlags,yt&8192||(yt&16785408)===16785408){yt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},vm(n,f,yt);var Ht=(f&62914560)===f?Al-mt():(f&4194048)===f?Mm-mt():0;if(Ht=$x(yt,Ht),Ht!==null){Qi=f,t.cancelPendingCommit=Ht(Om.bind(null,t,n,f,a,s,c,g,b,B,gt,yt,null,it,ht)),Ta(t,f,g,!tt);return}}Om(t,n,f,a,s,c,g,b,B)}function mx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!kn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ta(t,n,a,s){n&=~cf,n&=~cr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-ie(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&wn(t,a,n)}function wl(){return(Ce&6)===0?(xo(0),!1):!0}function pf(){if(ve!==null){if(Ue===0)var t=ve.return;else t=ve,Hi=tr=null,wu(t),qr=null,to=0,t=ve;for(;t!==null;)im(t.alternate,t),t=t.return;ve=null}}function es(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Px(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,pf(),Ie=t,ve=a=Bi(t.current,null),ye=n,Ue=0,Yn=null,Sa=!1,Jr=we(t,n),lf=!1,$r=jn=cf=cr=ya=je=0,Bn=_o=null,uf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-ie(s),f=1<<c;n|=t[c],s&=~f}return Ki=n,Ko(),a}function Rm(t,n){he=null,z.H=lo,n===Xr||n===al?(n=kd(),Ue=3):n===_u?(n=kd(),Ue=4):Ue=n===qu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,ve===null&&(je=1,vl(t,ni(n,t.current)))}function Cm(){var t=qn.current;return t===null?!0:(ye&4194048)===ye?si===null:(ye&62914560)===ye||(ye&536870912)!==0?t===si:!1}function wm(){var t=z.H;return z.H=lo,t===null?lo:t}function Dm(){var t=z.A;return z.A=dx,t}function Dl(){je=4,Sa||(ye&4194048)!==ye&&qn.current!==null||(Jr=!0),(ya&134217727)===0&&(cr&134217727)===0||Ie===null||Ta(Ie,ye,jn,!1)}function mf(t,n,a){var s=Ce;Ce|=2;var c=wm(),f=Dm();(Ie!==t||ye!==n)&&(Cl=null,es(t,n)),n=!1;var g=je;t:do try{if(Ue!==0&&ve!==null){var b=ve,B=Yn;switch(Ue){case 8:pf(),g=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var tt=Ue;if(Ue=0,Yn=null,ns(t,b,B,tt),a&&Jr){g=0;break t}break;default:tt=Ue,Ue=0,Yn=null,ns(t,b,B,tt)}}gx(),g=je;break}catch(gt){Rm(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Hi=tr=null,Ce=s,z.H=c,z.A=f,ve===null&&(Ie=null,ye=0,Ko()),g}function gx(){for(;ve!==null;)Um(ve)}function _x(t,n){var a=Ce;Ce|=2;var s=wm(),c=Dm();Ie!==t||ye!==n?(Cl=null,Rl=mt()+500,es(t,n)):Jr=we(t,n);t:do try{if(Ue!==0&&ve!==null){n=ve;var f=Yn;e:switch(Ue){case 1:Ue=0,Yn=null,ns(t,n,f,1);break;case 2:case 9:if(Gd(f)){Ue=0,Yn=null,Lm(n);break}n=function(){Ue!==2&&Ue!==9||Ie!==t||(Ue=7),Ci(t)},f.then(n,n);break t;case 3:Ue=7;break t;case 4:Ue=5;break t;case 7:Gd(f)?(Ue=0,Yn=null,Lm(n)):(Ue=0,Yn=null,ns(t,n,f,7));break;case 5:var g=null;switch(ve.tag){case 26:g=ve.memoizedState;case 5:case 27:var b=ve;if(g?_g(g):b.stateNode.complete){Ue=0,Yn=null;var B=b.sibling;if(B!==null)ve=B;else{var tt=b.return;tt!==null?(ve=tt,Ul(tt)):ve=null}break e}}Ue=0,Yn=null,ns(t,n,f,5);break;case 6:Ue=0,Yn=null,ns(t,n,f,6);break;case 8:pf(),je=6;break t;default:throw Error(r(462))}}vx();break}catch(gt){Rm(t,gt)}while(!0);return Hi=tr=null,z.H=s,z.A=c,Ce=a,ve!==null?0:(Ie=null,ye=0,Ko(),je)}function vx(){for(;ve!==null&&!pt();)Um(ve)}function Um(t){var n=em(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Ul(t):ve=n}function Lm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Zp(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Zp(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:wu(n);default:im(a,n),n=ve=Dd(n,Ki),n=em(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Ul(t):ve=n}function ns(t,n,a,s){Hi=tr=null,wu(n),qr=null,to=0;var c=n.return;try{if(sx(t,c,n,a,ye)){je=1,vl(t,ni(a,t.current)),ve=null;return}}catch(f){if(c!==null)throw ve=c,f;je=1,vl(t,ni(a,t.current)),ve=null;return}n.flags&32768?(Ee||s===1?t=!0:Jr||(ye&536870912)!==0?t=!1:(Sa=t=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Nm(n,t)):Ul(n)}function Ul(t){var n=t;do{if((n.flags&32768)!==0){Nm(n,Sa);return}t=n.return;var a=cx(n.alternate,n,Ki);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=t}while(n!==null);je===0&&(je=5)}function Nm(t,n){do{var a=ux(t.alternate,t);if(a!==null){a.flags&=32767,ve=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ve=t;return}ve=t=a}while(t!==null);je=6,ve=null}function Om(t,n,a,s,c,f,g,b,B){t.cancelPendingCommit=null;do Ll();while(ln!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=nu,Cn(t,a,f,g,b,B),t===Ie&&(ve=Ie=null,ye=0),ts=n,Ea=t,Qi=a,ff=f,hf=c,Em=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Mx(Dt,function(){return Fm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=X.p,X.p=2,g=Ce,Ce|=4;try{fx(t,n,a)}finally{Ce=g,X.p=c,z.T=s}}ln=1,Pm(),zm(),Im()}}function Pm(){if(ln===1){ln=0;var t=Ea,n=ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=X.p;X.p=2;var c=Ce;Ce|=4;try{mm(n,t);var f=Rf,g=yd(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(g!==b&&b&&b.ownerDocument&&Sd(b.ownerDocument.documentElement,b)){if(B!==null&&Qc(b)){var tt=B.start,gt=B.end;if(gt===void 0&&(gt=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(gt,b.value.length);else{var yt=b.ownerDocument||document,it=yt&&yt.defaultView||window;if(it.getSelection){var ht=it.getSelection(),Ht=b.textContent.length,Qt=Math.min(B.start,Ht),Pe=B.end===void 0?Qt:Math.min(B.end,Ht);!ht.extend&&Qt>Pe&&(g=Pe,Pe=Qt,Qt=g);var q=xd(b,Qt),V=xd(b,Pe);if(q&&V&&(ht.rangeCount!==1||ht.anchorNode!==q.node||ht.anchorOffset!==q.offset||ht.focusNode!==V.node||ht.focusOffset!==V.offset)){var $=yt.createRange();$.setStart(q.node,q.offset),ht.removeAllRanges(),Qt>Pe?(ht.addRange($),ht.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ht.addRange($))}}}}for(yt=[],ht=b;ht=ht.parentNode;)ht.nodeType===1&&yt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<yt.length;b++){var St=yt[b];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Xl=!!Af,Rf=Af=null}finally{Ce=c,X.p=s,z.T=a}}t.current=n,ln=2}}function zm(){if(ln===2){ln=0;var t=Ea,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=X.p;X.p=2;var c=Ce;Ce|=4;try{um(t,n.alternate,n)}finally{Ce=c,X.p=s,z.T=a}}ln=3}}function Im(){if(ln===4||ln===3){ln=0,Ut();var t=Ea,n=ts,a=Qi,s=Em;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?ln=5:(ln=0,ts=Ea=null,Bm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ma=null),br(a),n=n.stateNode,ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(de,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=X.p,X.p=2,z.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var b=s[g];f(b.value,{componentStack:b.stack})}}finally{z.T=n,X.p=c}}(Qi&3)!==0&&Ll(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===df?vo++:(vo=0,df=t):vo=0,xo(0)}}function Bm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Js(n)))}function Ll(){return Pm(),zm(),Im(),Fm()}function Fm(){if(ln!==5)return!1;var t=Ea,n=ff;ff=0;var a=br(Qi),s=z.T,c=X.p;try{X.p=32>a?32:a,z.T=null,a=hf,hf=null;var f=Ea,g=Qi;if(ln=0,ts=Ea=null,Qi=0,(Ce&6)!==0)throw Error(r(331));var b=Ce;if(Ce|=4,Sm(f.current),_m(f,f.current,g,a),Ce=b,xo(0,!1),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(de,f)}catch{}return!0}finally{X.p=c,z.T=s,Bm(t,n)}}function Hm(t,n,a){n=ni(a,n),n=Xu(t.stateNode,n,2),t=ga(t,n,2),t!==null&&(Be(t,2),Ci(t))}function Le(t,n,a){if(t.tag===3)Hm(t,t,a);else for(;n!==null;){if(n.tag===3){Hm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){t=ni(a,t),a=Gp(2),s=ga(n,a,2),s!==null&&(Vp(a,s,n,t),Be(s,2),Ci(s));break}}n=n.return}}function gf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new px;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(lf=!0,c.add(a),t=xx.bind(null,t,n,a),n.then(t,t))}function xx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ie===t&&(ye&a)===a&&(je===4||je===3&&(ye&62914560)===ye&&300>mt()-Al?(Ce&2)===0&&es(t,0):cf|=a,$r===ye&&($r=0)),Ci(t)}function Gm(t,n){n===0&&(n=Re()),t=Qa(t,n),t!==null&&(Be(t,n),Ci(t))}function Sx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Gm(t,a)}function yx(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Gm(t,a)}function Mx(t,n){return J(t,n)}var Nl=null,is=null,_f=!1,Ol=!1,vf=!1,ba=0;function Ci(t){t!==is&&t.next===null&&(is===null?Nl=is=t:is=is.next=t),Ol=!0,_f||(_f=!0,Tx())}function xo(t,n){if(!vf&&Ol){vf=!0;do for(var a=!1,s=Nl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-ie(42|t)+1)-1,f&=c&~(g&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,qm(s,f))}else f=ye,f=fe(s,s===Ie?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||we(s,f)||(a=!0,qm(s,f));s=s.next}while(a);vf=!1}}function Ex(){Vm()}function Vm(){Ol=_f=!1;var t=0;ba!==0&&Ox()&&(t=ba);for(var n=mt(),a=null,s=Nl;s!==null;){var c=s.next,f=km(s,n);f===0?(s.next=null,a===null?Nl=c:a.next=c,c===null&&(is=a)):(a=s,(t!==0||(f&3)!==0)&&(Ol=!0)),s=c}ln!==0&&ln!==5||xo(t),ba!==0&&(ba=0)}function km(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-ie(f),b=1<<g,B=c[g];B===-1?((b&a)===0||(b&s)!==0)&&(c[g]=tn(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ie,a=ye,a=fe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ue===2||Ue===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ot(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ot(s),br(a)){case 2:case 8:a=At;break;case 32:a=Dt;break;case 268435456:a=It;break;default:a=Dt}return s=Xm.bind(null,t),a=J(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ot(s),t.callbackPriority=2,t.callbackNode=null,2}function Xm(t,n){if(ln!==0&&ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ll()&&t.callbackNode!==a)return null;var s=ye;return s=fe(t,t===Ie?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(bm(t,s,n),km(t,mt()),t.callbackNode!=null&&t.callbackNode===a?Xm.bind(null,t):null)}function qm(t,n){if(Ll())return null;bm(t,n,!0)}function Tx(){zx(function(){(Ce&6)!==0?J(wt,Ex):Vm()})}function xf(){if(ba===0){var t=Vr;t===0&&(t=xt,xt<<=1,(xt&261888)===0&&(xt=256)),ba=t}return ba}function Wm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vo(""+t)}function Ym(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function bx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Wm((c[Mn]||null).action),g=s.submitter;g&&(n=(n=g[Mn]||null)?Wm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var b=new Wo("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ba!==0){var B=g?Ym(c,g):new FormData(c);Bu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=g?Ym(c,g):new FormData(c),Bu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Sf=0;Sf<eu.length;Sf++){var yf=eu[Sf],Ax=yf.toLowerCase(),Rx=yf[0].toUpperCase()+yf.slice(1);gi(Ax,"on"+Rx)}gi(Td,"onAnimationEnd"),gi(bd,"onAnimationIteration"),gi(Ad,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(kv,"onTransitionRun"),gi(Xv,"onTransitionStart"),gi(qv,"onTransitionCancel"),gi(Rd,"onTransitionEnd"),He("onMouseEnter",["mouseout","mouseover"]),He("onMouseLeave",["mouseout","mouseover"]),He("onPointerEnter",["pointerout","pointerover"]),He("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function jm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var b=s[g],B=b.instance,tt=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(gt){Zo(gt)}c.currentTarget=null,f=B}else for(g=0;g<s.length;g++){if(b=s[g],B=b.instance,tt=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(gt){Zo(gt)}c.currentTarget=null,f=B}}}}function xe(t,n){var a=n[U];a===void 0&&(a=n[U]=new Set);var s=t+"__bubble";a.has(s)||(Zm(n,t,2,!1),a.add(s))}function Mf(t,n,a){var s=0;n&&(s|=4),Zm(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ef(t){if(!t[Pl]){t[Pl]=!0,re.forEach(function(a){a!=="selectionchange"&&(Cx.has(a)||Mf(a,!1,t),Mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,Mf("selectionchange",!1,n))}}function Zm(t,n,a,s){switch(Tg(n)){case 2:var c=nS;break;case 8:c=iS;break;default:c=Bf}a=c.bind(null,n,a,t),c=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Tf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var b=s.stateNode.containerInfo;if(b===c)break;if(g===4)for(g=s.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;b!==null;){if(g=Vt(b),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){s=f=g;continue t}b=b.parentNode}}s=s.return}td(function(){var tt=f,gt=Hc(a),yt=[];t:{var it=Cd.get(t);if(it!==void 0){var ht=Wo,Ht=t;switch(t){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":ht=yv;break;case"focusin":Ht="focus",ht=Wc;break;case"focusout":Ht="blur",ht=Wc;break;case"beforeblur":case"afterblur":ht=Wc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Tv;break;case Td:case bd:case Ad:ht=hv;break;case Rd:ht=Av;break;case"scroll":case"scrollend":ht=ov;break;case"wheel":ht=Cv;break;case"copy":case"cut":case"paste":ht=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=rd;break;case"toggle":case"beforetoggle":ht=Dv}var Qt=(n&4)!==0,Pe=!Qt&&(t==="scroll"||t==="scrollend"),q=Qt?it!==null?it+"Capture":null:it;Qt=[];for(var V=tt,$;V!==null;){var St=V;if($=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||$===null||q===null||(St=Gs(V,q),St!=null&&Qt.push(yo(V,St,$))),Pe)break;V=V.return}0<Qt.length&&(it=new ht(it,Ht,null,a,gt),yt.push({event:it,listeners:Qt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",ht=t==="mouseout"||t==="pointerout",it&&a!==Fc&&(Ht=a.relatedTarget||a.fromElement)&&(Vt(Ht)||Ht[la]))break t;if((ht||it)&&(it=gt.window===gt?gt:(it=gt.ownerDocument)?it.defaultView||it.parentWindow:window,ht?(Ht=a.relatedTarget||a.toElement,ht=tt,Ht=Ht?Vt(Ht):null,Ht!==null&&(Pe=u(Ht),Qt=Ht.tag,Ht!==Pe||Qt!==5&&Qt!==27&&Qt!==6)&&(Ht=null)):(ht=null,Ht=tt),ht!==Ht)){if(Qt=id,St="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Qt=rd,St="onPointerLeave",q="onPointerEnter",V="pointer"),Pe=ht==null?it:Kt(ht),$=Ht==null?it:Kt(Ht),it=new Qt(St,V+"leave",ht,a,gt),it.target=Pe,it.relatedTarget=$,St=null,Vt(gt)===tt&&(Qt=new Qt(q,V+"enter",Ht,a,gt),Qt.target=$,Qt.relatedTarget=Pe,St=Qt),Pe=St,ht&&Ht)e:{for(Qt=wx,q=ht,V=Ht,$=0,St=q;St;St=Qt(St))$++;St=0;for(var Yt=V;Yt;Yt=Qt(Yt))St++;for(;0<$-St;)q=Qt(q),$--;for(;0<St-$;)V=Qt(V),St--;for(;$--;){if(q===V||V!==null&&q===V.alternate){Qt=q;break e}q=Qt(q),V=Qt(V)}Qt=null}else Qt=null;ht!==null&&Km(yt,it,ht,Qt,!1),Ht!==null&&Pe!==null&&Km(yt,Pe,Ht,Qt,!0)}}t:{if(it=tt?Kt(tt):window,ht=it.nodeName&&it.nodeName.toLowerCase(),ht==="select"||ht==="input"&&it.type==="file")var be=dd;else if(fd(it))if(pd)be=Hv;else{be=Bv;var Xt=Iv}else ht=it.nodeName,!ht||ht.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&Bc(tt.elementType)&&(be=dd):be=Fv;if(be&&(be=be(t,tt))){hd(yt,be,a,gt);break t}Xt&&Xt(t,it,tt),t==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&Ic(it,"number",it.value)}switch(Xt=tt?Kt(tt):window,t){case"focusin":(fd(Xt)||Xt.contentEditable==="true")&&(Or=Xt,Jc=tt,Zs=null);break;case"focusout":Zs=Jc=Or=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Md(yt,a,gt);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":Md(yt,a,gt)}var pe;if(jc)t:{switch(t){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Nr?cd(t,a)&&(Me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(sd&&a.locale!=="ko"&&(Nr||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Nr&&(pe=ed()):(ca=gt,kc="value"in ca?ca.value:ca.textContent,Nr=!0)),Xt=zl(tt,Me),0<Xt.length&&(Me=new ad(Me,t,null,a,gt),yt.push({event:Me,listeners:Xt}),pe?Me.data=pe:(pe=ud(a),pe!==null&&(Me.data=pe)))),(pe=Lv?Nv(t,a):Ov(t,a))&&(Me=zl(tt,"onBeforeInput"),0<Me.length&&(Xt=new ad("onBeforeInput","beforeinput",null,a,gt),yt.push({event:Xt,listeners:Me}),Xt.data=pe)),bx(yt,t,tt,a,gt)}jm(yt,n)})}function yo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function zl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Gs(t,a),c!=null&&s.unshift(yo(t,c,f)),c=Gs(t,n),c!=null&&s.push(yo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function wx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Km(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var b=a,B=b.alternate,tt=b.stateNode;if(b=b.tag,B!==null&&B===s)break;b!==5&&b!==26&&b!==27||tt===null||(B=tt,c?(tt=Gs(a,f),tt!=null&&g.unshift(yo(a,tt,B))):c||(tt=Gs(a,f),tt!=null&&g.push(yo(a,tt,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Dx=/\r\n?/g,Ux=/\u0000|\uFFFD/g;function Qm(t){return(typeof t=="string"?t:""+t).replace(Dx,`
`).replace(Ux,"")}function Jm(t,n){return n=Qm(n),Qm(t)===n}function Oe(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Dr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Dr(t,""+s);break;case"className":Jn(t,"class",s);break;case"tabIndex":Jn(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(t,a,s);break;case"style":Jh(t,s,f);break;case"data":if(n!=="object"){Jn(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Oe(t,n,"name",c.name,c,null),Oe(t,n,"formEncType",c.formEncType,c,null),Oe(t,n,"formMethod",c.formMethod,c,null),Oe(t,n,"formTarget",c.formTarget,c,null)):(Oe(t,n,"encType",c.encType,c,null),Oe(t,n,"method",c.method,c,null),Oe(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=zi);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Vo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":xe("beforetoggle",t),xe("toggle",t),De(t,"popover",s);break;case"xlinkActuate":$n(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":$n(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":$n(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":$n(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":$n(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":$n(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":$n(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":$n(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":$n(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":De(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=rv.get(a)||a,De(t,a,s))}}function bf(t,n,a,s,c,f){switch(a){case"style":Jh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Dr(t,s):(typeof s=="number"||typeof s=="bigint")&&Dr(t,""+s);break;case"onScroll":s!=null&&xe("scroll",t);break;case"onScrollEnd":s!=null&&xe("scrollend",t);break;case"onClick":s!=null&&(t.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):De(t,a,s)}}}function Sn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,f,g,a,null)}}c&&Oe(t,n,"srcSet",a.srcSet,a,null),s&&Oe(t,n,"src",a.src,a,null);return;case"input":xe("invalid",t);var b=f=g=c=null,B=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":g=gt;break;case"checked":B=gt;break;case"defaultChecked":tt=gt;break;case"value":f=gt;break;case"defaultValue":b=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Oe(t,n,s,gt,a,null)}}jh(t,f,b,B,tt,g,c,!1);return;case"select":xe("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":g=b;break;case"multiple":s=b;default:Oe(t,n,c,b,a,null)}n=f,a=g,t.multiple=!!s,n!=null?wr(t,!!s,n,!1):a!=null&&wr(t,!!s,a,!0);return;case"textarea":xe("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(b=a[g],b!=null))switch(g){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Oe(t,n,g,b,a,null)}Kh(t,s,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Oe(t,n,B,s,a,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(s=0;s<So.length;s++)xe(So[s],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Oe(t,n,tt,s,a,null)}return;default:if(Bc(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&bf(t,n,gt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Oe(t,n,b,s,a,null))}function Lx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,b=null,B=null,tt=null,gt=null;for(ht in a){var yt=a[ht];if(a.hasOwnProperty(ht)&&yt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":B=yt;default:s.hasOwnProperty(ht)||Oe(t,n,ht,null,s,yt)}}for(var it in s){var ht=s[it];if(yt=a[it],s.hasOwnProperty(it)&&(ht!=null||yt!=null))switch(it){case"type":f=ht;break;case"name":c=ht;break;case"checked":tt=ht;break;case"defaultChecked":gt=ht;break;case"value":g=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:ht!==yt&&Oe(t,n,it,ht,s,yt)}}Cr(t,g,b,B,tt,gt,f,c);return;case"select":ht=g=b=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ht=B;default:s.hasOwnProperty(f)||Oe(t,n,f,null,s,B)}for(c in s)if(f=s[c],B=a[c],s.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":g=f;default:f!==B&&Oe(t,n,c,f,s,B)}n=b,a=g,s=ht,it!=null?wr(t,!!a,it,!1):!!s!=!!a&&(n!=null?wr(t,!!a,n,!0):wr(t,!!a,a?[]:"",!1));return;case"textarea":ht=it=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Oe(t,n,b,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":it=c;break;case"defaultValue":ht=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Oe(t,n,g,c,s,f)}Zh(t,it,ht);return;case"option":for(var Ht in a)if(it=a[Ht],a.hasOwnProperty(Ht)&&it!=null&&!s.hasOwnProperty(Ht))switch(Ht){case"selected":t.selected=!1;break;default:Oe(t,n,Ht,null,s,it)}for(B in s)if(it=s[B],ht=a[B],s.hasOwnProperty(B)&&it!==ht&&(it!=null||ht!=null))switch(B){case"selected":t.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Oe(t,n,B,it,s,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qt in a)it=a[Qt],a.hasOwnProperty(Qt)&&it!=null&&!s.hasOwnProperty(Qt)&&Oe(t,n,Qt,null,s,it);for(tt in s)if(it=s[tt],ht=a[tt],s.hasOwnProperty(tt)&&it!==ht&&(it!=null||ht!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:Oe(t,n,tt,it,s,ht)}return;default:if(Bc(n)){for(var Pe in a)it=a[Pe],a.hasOwnProperty(Pe)&&it!==void 0&&!s.hasOwnProperty(Pe)&&bf(t,n,Pe,void 0,s,it);for(gt in s)it=s[gt],ht=a[gt],!s.hasOwnProperty(gt)||it===ht||it===void 0&&ht===void 0||bf(t,n,gt,it,s,ht);return}}for(var q in a)it=a[q],a.hasOwnProperty(q)&&it!=null&&!s.hasOwnProperty(q)&&Oe(t,n,q,null,s,it);for(yt in s)it=s[yt],ht=a[yt],!s.hasOwnProperty(yt)||it===ht||it==null&&ht==null||Oe(t,n,yt,it,s,ht)}function $m(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,b=c.duration;if(f&&b&&$m(g)){for(g=0,b=c.responseEnd,s+=1;s<a.length;s++){var B=a[s],tt=B.startTime;if(tt>b)break;var gt=B.transferSize,yt=B.initiatorType;gt&&$m(yt)&&(B=B.responseEnd,g+=gt*(B<b?1:(b-tt)/(B-tt)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Af=null,Rf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function tg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Cf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wf=null;function Ox(){var t=window.event;return t&&t.type==="popstate"?t===wf?!1:(wf=t,!0):(wf=null,!1)}var ng=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(Ix)}:ng;function Ix(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function ag(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),os(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Mo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Mo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,b=f.nodeName;f[rt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&Mo(t.ownerDocument.body);a=c}while(a);os(n)}function rg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Df(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),Lt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Bx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Fx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=oi(t.nextSibling),t===null))return null;return t}function sg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function Uf(t){return t.data==="$?"||t.data==="$~"}function Lf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Hx(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Nf=null;function og(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function lg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function cg(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Mo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Lt(t)}var li=new Map,ug=new Set;function Bl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=X.d;X.d={f:Gx,r:Vx,D:kx,C:Xx,L:qx,m:Wx,X:jx,S:Yx,M:Zx};function Gx(){var t=Ji.f(),n=wl();return t||n}function Vx(t){var n=Wt(t);n!==null&&n.tag===5&&n.type==="form"?Rp(n):Ji.r(t)}var as=typeof document>"u"?null:document;function fg(t,n,a){var s=as;if(s&&typeof n=="string"&&n){var c=Nn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ug.has(c)||(ug.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Sn(n,"link",t),kt(n),s.head.appendChild(n)))}}function kx(t){Ji.D(t),fg("dns-prefetch",t,null)}function Xx(t,n){Ji.C(t,n),fg("preconnect",t,n)}function qx(t,n,a){Ji.L(t,n,a);var s=as;if(s&&t&&n){var c='link[rel="preload"][as="'+Nn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Nn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Nn(a.imageSizes)+'"]')):c+='[href="'+Nn(t)+'"]';var f=c;switch(n){case"style":f=rs(t);break;case"script":f=ss(t)}li.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),li.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(Eo(f))||n==="script"&&s.querySelector(To(f))||(n=s.createElement("link"),Sn(n,"link",t),kt(n),s.head.appendChild(n)))}}function Wx(t,n){Ji.m(t,n);var a=as;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Nn(s)+'"][href="'+Nn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ss(t)}if(!li.has(f)&&(t=_({rel:"modulepreload",href:t},n),li.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}s=a.createElement("link"),Sn(s,"link",t),kt(s),a.head.appendChild(s)}}}function Yx(t,n,a){Ji.S(t,n,a);var s=as;if(s&&t){var c=$t(s).hoistableStyles,f=rs(t);n=n||"default";var g=c.get(f);if(!g){var b={loading:0,preload:null};if(g=s.querySelector(Eo(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=li.get(f))&&Of(t,a);var B=g=s.createElement("link");kt(B),Sn(B,"link",t),B._p=new Promise(function(tt,gt){B.onload=tt,B.onerror=gt}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Fl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:b},c.set(f,g)}}}function jx(t,n){Ji.X(t,n);var a=as;if(a&&t){var s=$t(a).hoistableScripts,c=ss(t),f=s.get(c);f||(f=a.querySelector(To(c)),f||(t=_({src:t,async:!0},n),(n=li.get(c))&&Pf(t,n),f=a.createElement("script"),kt(f),Sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Zx(t,n){Ji.M(t,n);var a=as;if(a&&t){var s=$t(a).hoistableScripts,c=ss(t),f=s.get(c);f||(f=a.querySelector(To(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=li.get(c))&&Pf(t,n),f=a.createElement("script"),kt(f),Sn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function hg(t,n,a,s){var c=(c=Tt.current)?Bl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=$t(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=rs(a.href);var f=$t(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(Eo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(t,a),f||Kx(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=$t(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function rs(t){return'href="'+Nn(t)+'"'}function Eo(t){return'link[rel="stylesheet"]['+t+"]"}function dg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Kx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Sn(n,"link",a),kt(n),t.head.appendChild(n))}function ss(t){return'[src="'+Nn(t)+'"]'}function To(t){return"script[async]"+t}function pg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Nn(a.href)+'"]');if(s)return n.instance=s,kt(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),kt(s),Sn(s,"style",c),Fl(s,a.precedence,t),n.instance=s;case"stylesheet":c=rs(a.href);var f=t.querySelector(Eo(c));if(f)return n.state.loading|=4,n.instance=f,kt(f),f;s=dg(a),(c=li.get(c))&&Of(s,c),f=(t.ownerDocument||t).createElement("link"),kt(f);var g=f;return g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),Sn(f,"link",s),n.state.loading|=4,Fl(f,a.precedence,t),n.instance=f;case"script":return f=ss(a.src),(c=t.querySelector(To(f)))?(n.instance=c,kt(c),c):(s=a,(c=li.get(f))&&(s=_({},a),Pf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),kt(c),Sn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Fl(s,a.precedence,t));return n.instance}function Fl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var b=s[g];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Of(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Pf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Hl=null;function mg(t,n,a){if(Hl===null){var s=new Map,c=Hl=new Map;c.set(a,s)}else c=Hl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[rt]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var b=s.get(g);b?b.push(f):s.set(g,[f])}}return s}function gg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Qx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _g(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jx(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=rs(s.href),f=n.querySelector(Eo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Gl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,kt(f);return}f=n.ownerDocument||n,s=dg(s),(c=li.get(c))&&Of(s,c),f=f.createElement("link"),kt(f);var g=f;g._p=new Promise(function(b,B){g.onload=b,g.onerror=B}),Sn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Gl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function $x(t,n){return t.stylesheets&&t.count===0&&kl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&zf===0&&(zf=62500*Nx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&kl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>zf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Gl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)kl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vl=null;function kl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vl=new Map,n.forEach(tS,t),Vl=null,Gl.call(t))}function tS(t,n){if(!(n.state.loading&4)){var a=Vl.get(t);if(a)var s=a.get(null);else{a=new Map,Vl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Gl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var bo={$$typeof:C,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function eS(t,n,a,s,c,f,g,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function vg(t,n,a,s,c,f,g,b,B,tt,gt,yt){return t=new eS(t,n,a,g,B,tt,gt,yt,b),n=1,f===!0&&(n|=24),f=Xn(3,null,null,n),t.current=f,f.stateNode=t,n=pu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},vu(f),t}function xg(t){return t?(t=Ir,t):Ir}function Sg(t,n,a,s,c,f){c=xg(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ga(t,s,n),a!==null&&(Fn(a,t,n),no(a,t,n))}function yg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function If(t,n){yg(t,n),(t=t.alternate)&&yg(t,n)}function Mg(t){if(t.tag===13||t.tag===31){var n=Qa(t,67108864);n!==null&&Fn(n,t,67108864),If(t,67108864)}}function Eg(t){if(t.tag===13||t.tag===31){var n=Zn();n=di(n);var a=Qa(t,n);a!==null&&Fn(a,t,n),If(t,n)}}var Xl=!0;function nS(t,n,a,s){var c=z.T;z.T=null;var f=X.p;try{X.p=2,Bf(t,n,a,s)}finally{X.p=f,z.T=c}}function iS(t,n,a,s){var c=z.T;z.T=null;var f=X.p;try{X.p=8,Bf(t,n,a,s)}finally{X.p=f,z.T=c}}function Bf(t,n,a,s){if(Xl){var c=Ff(s);if(c===null)Tf(t,n,s,ql,a),bg(t,s);else if(rS(c,t,n,a,s))s.stopPropagation();else if(bg(t,s),n&4&&-1<aS.indexOf(t)){for(;c!==null;){var f=Wt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=oe(f.pendingLanes);if(g!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;g;){var B=1<<31-ie(g);b.entanglements[1]|=B,g&=~B}Ci(f),(Ce&6)===0&&(Rl=mt()+500,xo(0))}}break;case 31:case 13:b=Qa(f,2),b!==null&&Fn(b,f,2),wl(),If(f,2)}if(f=Ff(s),f===null&&Tf(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Tf(t,n,s,null,a)}}function Ff(t){return t=Hc(t),Hf(t)}var ql=null;function Hf(t){if(ql=null,t=Vt(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Tg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case wt:return 2;case At:return 8;case Dt:case Zt:return 32;case It:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ra=null,Ca=null,wa=null,Ao=new Map,Ro=new Map,Da=[],aS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bg(t,n){switch(t){case"focusin":case"focusout":Ra=null;break;case"dragenter":case"dragleave":Ca=null;break;case"mouseover":case"mouseout":wa=null;break;case"pointerover":case"pointerout":Ao.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(n.pointerId)}}function Co(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Wt(n),n!==null&&Mg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function rS(t,n,a,s,c){switch(n){case"focusin":return Ra=Co(Ra,t,n,a,s,c),!0;case"dragenter":return Ca=Co(Ca,t,n,a,s,c),!0;case"mouseover":return wa=Co(wa,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Ao.set(f,Co(Ao.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Ro.set(f,Co(Ro.get(f)||null,t,n,a,s,c)),!0}return!1}function Ag(t){var n=Vt(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Bs(t.priority,function(){Eg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Bs(t.priority,function(){Eg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ff(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Fc=s,a.target.dispatchEvent(s),Fc=null}else return n=Wt(a),n!==null&&Mg(n),t.blockedOn=a,!1;n.shift()}return!0}function Rg(t,n,a){Wl(t)&&a.delete(n)}function sS(){Gf=!1,Ra!==null&&Wl(Ra)&&(Ra=null),Ca!==null&&Wl(Ca)&&(Ca=null),wa!==null&&Wl(wa)&&(wa=null),Ao.forEach(Rg),Ro.forEach(Rg)}function Yl(t,n){t.blockedOn===n&&(t.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sS)))}var jl=null;function Cg(t){jl!==t&&(jl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){jl===t&&(jl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Hf(s||a)===null)continue;break}var f=Wt(a);f!==null&&(t.splice(n,3),n-=3,Bu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function os(t){function n(B){return Yl(B,t)}Ra!==null&&Yl(Ra,t),Ca!==null&&Yl(Ca,t),wa!==null&&Yl(wa,t),Ao.forEach(n),Ro.forEach(n);for(var a=0;a<Da.length;a++){var s=Da[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Da.length&&(a=Da[0],a.blockedOn===null);)Ag(a),a.blockedOn===null&&Da.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[Mn]||null;if(typeof f=="function")g||Cg(a);else if(g){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[Mn]||null)b=g.formAction;else if(Hf(c)!==null)continue}else b=g.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),Cg(a)}}}function wg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Vf(t){this._internalRoot=t}Zl.prototype.render=Vf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Sg(a,s,t,n,null,null)},Zl.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Sg(t.current,2,null,t,null,null),wl(),n[la]=null}};function Zl(t){this._internalRoot=t}Zl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ya();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Da.length&&n!==0&&n<Da[a].priority;a++);Da.splice(a,0,t),a===0&&Ag(t)}};var Dg=e.version;if(Dg!=="19.2.8")throw Error(r(527,Dg,"19.2.8"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var oS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{de=Kl.inject(oS),ne=Kl}catch{}}return Do.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Ip,f=Bp,g=Fp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=vg(t,1,!1,null,null,a,s,null,c,f,g,wg),t[la]=n.current,Ef(t),new Vf(n)},Do.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Ip,g=Bp,b=Fp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=vg(t,1,!0,n,a??null,s,c,B,f,g,b,wg),n.context=xg(null),a=n.current,s=Zn(),s=di(s),c=ma(s),c.callback=null,ga(a,c,s),a=s,n.current.lanes=a,Be(n,a),Ci(n),t[la]=n.current,Ef(t),new Zl(n)},Do.version="19.2.8",Do}var Hg;function vS(){if(Hg)return qf.exports;Hg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),qf.exports=_S(),qf.exports}var xS=vS();const SS=y0(xS);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="163",ls={ROTATE:0,DOLLY:1,PAN:2},cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yS=0,Gg=1,MS=2,M0=1,ES=2,aa=3,Xa=0,Gn=1,ra=2,Ga=0,ws=1,Vg=2,kg=3,Xg=4,TS=5,_r=100,bS=101,AS=102,RS=103,CS=104,wS=200,DS=201,US=202,LS=203,Oh=204,Ph=205,NS=206,OS=207,PS=208,zS=209,IS=210,BS=211,FS=212,HS=213,GS=214,VS=0,kS=1,XS=2,bc=3,qS=4,WS=5,YS=6,jS=7,E0=0,ZS=1,KS=2,Va=0,QS=1,JS=2,$S=3,ty=4,ey=5,ny=6,iy=7,T0=300,Ls=301,Ns=302,zh=303,Ih=304,Lc=306,Bh=1e3,xr=1001,Fh=1002,fi=1003,ay=1004,Ql=1005,Mi=1006,Zf=1007,Sr=1008,ka=1009,ry=1010,sy=1011,b0=1012,A0=1013,Os=1014,Ha=1015,Ac=1016,R0=1017,C0=1018,Fo=1020,oy=35902,ly=1021,cy=1022,Ui=1023,uy=1024,fy=1025,Ds=1026,Bo=1027,hy=1028,w0=1029,dy=1030,D0=1031,U0=1033,Kf=33776,Qf=33777,Jf=33778,$f=33779,qg=35840,Wg=35841,Yg=35842,jg=35843,L0=36196,Zg=37492,Kg=37496,Qg=37808,Jg=37809,$g=37810,t_=37811,e_=37812,n_=37813,i_=37814,a_=37815,r_=37816,s_=37817,o_=37818,l_=37819,c_=37820,u_=37821,th=36492,f_=36494,h_=36495,py=36283,d_=36284,p_=36285,m_=36286,my=3200,gy=3201,N0=0,_y=1,Fa="",wi="srgb",Wa="srgb-linear",Xh="display-p3",Nc="display-p3-linear",Rc="linear",ke="srgb",Cc="rec709",wc="p3",us=7680,g_=519,vy=512,xy=513,Sy=514,O0=515,yy=516,My=517,Ey=518,Ty=519,__=35044,v_="300 es",sa=2e3,Dc=2001;class Tr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Io=Math.PI/180,Hh=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Ln(o,e,i){return Math.max(e,Math.min(i,o))}function by(o,e){return(o%e+e)%e}function eh(o,e,i){return(1-i)*o+i*e}function Uo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ay={DEG2RAD:Io};class ae{constructor(e=0,i=0){ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(e,i,r,l,u,d,h,m,p){ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],_=r[7],x=r[2],E=r[5],w=r[8],R=l[0],y=l[3],S=l[6],P=l[1],C=l[4],F=l[7],Y=l[2],H=l[5],O=l[8];return u[0]=d*R+h*P+m*Y,u[3]=d*y+h*C+m*H,u[6]=d*S+h*F+m*O,u[1]=p*R+v*P+_*Y,u[4]=p*y+v*C+_*H,u[7]=p*S+v*F+_*O,u[2]=x*R+E*P+w*Y,u[5]=x*y+E*C+w*H,u[8]=x*S+E*F+w*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=v*d-h*p,x=h*m-v*u,E=p*u-d*m,w=i*_+r*x+l*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=_*R,e[1]=(l*p-v*r)*R,e[2]=(h*r-l*d)*R,e[3]=x*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=E*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(nh.makeScale(e,i)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,i){return this.premultiply(nh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nh=new ge;function P0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Uc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ry(){const o=Uc("canvas");return o.style.display="block",o}const x_={};function Cy(o){o in x_||(x_[o]=!0,console.warn(o))}const S_=new ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),y_=new ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Jl={[Wa]:{transfer:Rc,primaries:Cc,toReference:o=>o,fromReference:o=>o},[wi]:{transfer:ke,primaries:Cc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Nc]:{transfer:Rc,primaries:wc,toReference:o=>o.applyMatrix3(y_),fromReference:o=>o.applyMatrix3(S_)},[Xh]:{transfer:ke,primaries:wc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(y_),fromReference:o=>o.applyMatrix3(S_).convertLinearToSRGB()}},wy=new Set([Wa,Nc]),ze={enabled:!0,_workingColorSpace:Wa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!wy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Jl[e].toReference,l=Jl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Jl[o].primaries},getTransfer:function(o){return o===Fa?Rc:Jl[o].transfer}};function Us(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ih(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let fs;class Dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Uc("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Uc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Us(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Us(i[r]/255)*255):i[r]=Us(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uy=0;class z0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(ah(l[d].image)):u.push(ah(l[d]))}else u=ah(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function ah(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Dy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ly=0;class Vn extends Tr{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=xr,l=xr,u=Mi,d=Sr,h=Ui,m=ka,p=Vn.DEFAULT_ANISOTROPY,v=Fa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ly++}),this.uuid=Ho(),this.name="",this.source=new z0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bh:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Fh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bh:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Fh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=T0;Vn.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,i=0,r=0,l=1){mn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],_=m[8],x=m[1],E=m[5],w=m[9],R=m[2],y=m[6],S=m[10];if(Math.abs(v-x)<.01&&Math.abs(_-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+R)<.1&&Math.abs(w+y)<.1&&Math.abs(p+E+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,F=(E+1)/2,Y=(S+1)/2,H=(v+x)/4,O=(_+R)/4,et=(w+y)/4;return C>F&&C>Y?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=H/r,u=O/r):F>Y?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=H/l,u=et/l):Y<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(Y),r=O/u,l=et/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-w)*(y-w)+(_-R)*(_-R)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(y-w)/P,this.y=(_-R)/P,this.z=(x-v)/P,this.w=Math.acos((p+E+S-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ny extends Tr{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new mn(0,0,e,i),this.scissorTest=!1,this.viewport=new mn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const u=new Vn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new z0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yr extends Ny{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class I0 extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oy extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=fi,this.minFilter=fi,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],_=r[l+3];const x=u[d+0],E=u[d+1],w=u[d+2],R=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_;return}if(h===1){e[i+0]=x,e[i+1]=E,e[i+2]=w,e[i+3]=R;return}if(_!==R||m!==x||p!==E||v!==w){let y=1-h;const S=m*x+p*E+v*w+_*R,P=S>=0?1:-1,C=1-S*S;if(C>Number.EPSILON){const Y=Math.sqrt(C),H=Math.atan2(Y,S*P);y=Math.sin(y*H)/Y,h=Math.sin(h*H)/Y}const F=h*P;if(m=m*y+x*F,p=p*y+E*F,v=v*y+w*F,_=_*y+R*F,y===1-h){const Y=1/Math.sqrt(m*m+p*p+v*v+_*_);m*=Y,p*=Y,v*=Y,_*=Y}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],_=u[d],x=u[d+1],E=u[d+2],w=u[d+3];return e[i]=h*w+v*_+m*E-p*x,e[i+1]=m*w+v*x+p*_-h*E,e[i+2]=p*w+v*E+h*x-m*_,e[i+3]=v*w-h*_-m*x-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),_=h(u/2),x=m(r/2),E=m(l/2),w=m(u/2);switch(d){case"XYZ":this._x=x*v*_+p*E*w,this._y=p*E*_-x*v*w,this._z=p*v*w+x*E*_,this._w=p*v*_-x*E*w;break;case"YXZ":this._x=x*v*_+p*E*w,this._y=p*E*_-x*v*w,this._z=p*v*w-x*E*_,this._w=p*v*_+x*E*w;break;case"ZXY":this._x=x*v*_-p*E*w,this._y=p*E*_+x*v*w,this._z=p*v*w+x*E*_,this._w=p*v*_-x*E*w;break;case"ZYX":this._x=x*v*_-p*E*w,this._y=p*E*_+x*v*w,this._z=p*v*w-x*E*_,this._w=p*v*_+x*E*w;break;case"YZX":this._x=x*v*_+p*E*w,this._y=p*E*_+x*v*w,this._z=p*v*w-x*E*_,this._w=p*v*_-x*E*w;break;case"XZY":this._x=x*v*_-p*E*w,this._y=p*E*_-x*v*w,this._z=p*v*w+x*E*_,this._w=p*v*_+x*E*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],_=i[10],x=r+h+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(v-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(r>h&&r>_){const E=2*Math.sqrt(1+r-h-_);this._w=(v-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>_){const E=2*Math.sqrt(1+h-r-_);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+_-r-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),v=Math.atan2(p,h),_=Math.sin((1-i)*v)/p,x=Math.sin(i*v)/p;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,i=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(M_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(M_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*v,this.y=r+m*v+h*p-u*_,this.z=l+m*_+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ln(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new Q,M_=new Mr;class Go{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,xi):xi.fromBufferAttribute(u,d),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),tc.subVectors(this.max,Lo),hs.subVectors(e.a,Lo),ds.subVectors(e.b,Lo),ps.subVectors(e.c,Lo),La.subVectors(ds,hs),Na.subVectors(ps,ds),ur.subVectors(hs,ps);let i=[0,-La.z,La.y,0,-Na.z,Na.y,0,-ur.z,ur.y,La.z,0,-La.x,Na.z,0,-Na.x,ur.z,0,-ur.x,-La.y,La.x,0,-Na.y,Na.x,0,-ur.y,ur.x,0];return!sh(i,hs,ds,ps,tc)||(i=[1,0,0,0,1,0,0,0,1],!sh(i,hs,ds,ps,tc))?!1:(ec.crossVectors(La,Na),i=[ec.x,ec.y,ec.z],sh(i,hs,ds,ps,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xi=new Q,$l=new Go,hs=new Q,ds=new Q,ps=new Q,La=new Q,Na=new Q,ur=new Q,Lo=new Q,tc=new Q,ec=new Q,fr=new Q;function sh(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){fr.fromArray(o,u);const h=l.x*Math.abs(fr.x)+l.y*Math.abs(fr.y)+l.z*Math.abs(fr.z),m=e.dot(fr),p=i.dot(fr),v=r.dot(fr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const Py=new Go,No=new Q,oh=new Q;class Oc{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Py.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(No,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(oh)),this.expandByPoint(No.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ta=new Q,lh=new Q,nc=new Q,Oa=new Q,ch=new Q,ic=new Q,uh=new Q;class qh{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){lh.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Oa.copy(this.origin).sub(lh);const u=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=Oa.dot(this.direction),m=-Oa.dot(nc),p=Oa.lengthSq(),v=Math.abs(1-d*d);let _,x,E,w;if(v>0)if(_=d*m-h,x=d*h-m,w=u*v,_>=0)if(x>=-w)if(x<=w){const R=1/v;_*=R,x*=R,E=_*(_+d*x+2*h)+x*(d*_+x+2*m)+p}else x=u,_=Math.max(0,-(d*x+h)),E=-_*_+x*(x+2*m)+p;else x=-u,_=Math.max(0,-(d*x+h)),E=-_*_+x*(x+2*m)+p;else x<=-w?(_=Math.max(0,-(-d*u+h)),x=_>0?-u:Math.min(Math.max(-u,-m),u),E=-_*_+x*(x+2*m)+p):x<=w?(_=0,x=Math.min(Math.max(-u,-m),u),E=x*(x+2*m)+p):(_=Math.max(0,-(d*u+h)),x=_>0?u:Math.min(Math.max(-u,-m),u),E=-_*_+x*(x+2*m)+p);else x=d>0?-u:u,_=Math.max(0,-(d*x+h)),E=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(lh).addScaledVector(nc,x),E}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),v>=0?(u=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,u){ch.subVectors(i,e),ic.subVectors(r,e),uh.crossVectors(ch,ic);let d=this.direction.dot(uh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Oa.subVectors(this.origin,e);const m=h*this.direction.dot(ic.crossVectors(Oa,ic));if(m<0)return null;const p=h*this.direction.dot(ch.cross(Oa));if(p<0||m+p>d)return null;const v=-h*Oa.dot(uh);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ze{constructor(e,i,r,l,u,d,h,m,p,v,_,x,E,w,R,y){Ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,_,x,E,w,R,y)}set(e,i,r,l,u,d,h,m,p,v,_,x,E,w,R,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=r,S[12]=l,S[1]=u,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=v,S[10]=_,S[14]=x,S[3]=E,S[7]=w,S[11]=R,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ze().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ms.setFromMatrixColumn(e,0).length(),u=1/ms.setFromMatrixColumn(e,1).length(),d=1/ms.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=d*v,E=d*_,w=h*v,R=h*_;i[0]=m*v,i[4]=-m*_,i[8]=p,i[1]=E+w*p,i[5]=x-R*p,i[9]=-h*m,i[2]=R-x*p,i[6]=w+E*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*v,E=m*_,w=p*v,R=p*_;i[0]=x+R*h,i[4]=w*h-E,i[8]=d*p,i[1]=d*_,i[5]=d*v,i[9]=-h,i[2]=E*h-w,i[6]=R+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*v,E=m*_,w=p*v,R=p*_;i[0]=x-R*h,i[4]=-d*_,i[8]=w+E*h,i[1]=E+w*h,i[5]=d*v,i[9]=R-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*v,E=d*_,w=h*v,R=h*_;i[0]=m*v,i[4]=w*p-E,i[8]=x*p+R,i[1]=m*_,i[5]=R*p+x,i[9]=E*p-w,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,E=d*p,w=h*m,R=h*p;i[0]=m*v,i[4]=R-x*_,i[8]=w*_+E,i[1]=_,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=E*_+w,i[10]=x-R*_}else if(e.order==="XZY"){const x=d*m,E=d*p,w=h*m,R=h*p;i[0]=m*v,i[4]=-_,i[8]=p*v,i[1]=x*_+R,i[5]=d*v,i[9]=E*_-w,i[2]=w*_-E,i[6]=h*v,i[10]=R*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zy,e,Iy)}lookAt(e,i,r){const l=this.elements;return Kn.subVectors(e,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Pa.crossVectors(r,Kn),Pa.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Pa.crossVectors(r,Kn)),Pa.normalize(),ac.crossVectors(Kn,Pa),l[0]=Pa.x,l[4]=ac.x,l[8]=Kn.x,l[1]=Pa.y,l[5]=ac.y,l[9]=Kn.y,l[2]=Pa.z,l[6]=ac.z,l[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],_=r[5],x=r[9],E=r[13],w=r[2],R=r[6],y=r[10],S=r[14],P=r[3],C=r[7],F=r[11],Y=r[15],H=l[0],O=l[4],et=l[8],L=l[12],A=l[1],Z=l[5],lt=l[9],I=l[13],ut=l[2],ct=l[6],z=l[10],X=l[14],G=l[3],vt=l[7],_t=l[11],N=l[15];return u[0]=d*H+h*A+m*ut+p*G,u[4]=d*O+h*Z+m*ct+p*vt,u[8]=d*et+h*lt+m*z+p*_t,u[12]=d*L+h*I+m*X+p*N,u[1]=v*H+_*A+x*ut+E*G,u[5]=v*O+_*Z+x*ct+E*vt,u[9]=v*et+_*lt+x*z+E*_t,u[13]=v*L+_*I+x*X+E*N,u[2]=w*H+R*A+y*ut+S*G,u[6]=w*O+R*Z+y*ct+S*vt,u[10]=w*et+R*lt+y*z+S*_t,u[14]=w*L+R*I+y*X+S*N,u[3]=P*H+C*A+F*ut+Y*G,u[7]=P*O+C*Z+F*ct+Y*vt,u[11]=P*et+C*lt+F*z+Y*_t,u[15]=P*L+C*I+F*X+Y*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],_=e[6],x=e[10],E=e[14],w=e[3],R=e[7],y=e[11],S=e[15];return w*(+u*m*_-l*p*_-u*h*x+r*p*x+l*h*E-r*m*E)+R*(+i*m*E-i*p*x+u*d*x-l*d*E+l*p*v-u*m*v)+y*(+i*p*_-i*h*E-u*d*_+r*d*E+u*h*v-r*p*v)+S*(-l*h*v-i*m*_+i*h*x+l*d*_-r*d*x+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],_=e[9],x=e[10],E=e[11],w=e[12],R=e[13],y=e[14],S=e[15],P=_*y*p-R*x*p+R*m*E-h*y*E-_*m*S+h*x*S,C=w*x*p-v*y*p-w*m*E+d*y*E+v*m*S-d*x*S,F=v*R*p-w*_*p+w*h*E-d*R*E-v*h*S+d*_*S,Y=w*_*m-v*R*m-w*h*x+d*R*x+v*h*y-d*_*y,H=i*P+r*C+l*F+u*Y;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/H;return e[0]=P*O,e[1]=(R*x*u-_*y*u-R*l*E+r*y*E+_*l*S-r*x*S)*O,e[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*S+r*m*S)*O,e[3]=(_*m*u-h*x*u-_*l*p+r*x*p+h*l*E-r*m*E)*O,e[4]=C*O,e[5]=(v*y*u-w*x*u+w*l*E-i*y*E-v*l*S+i*x*S)*O,e[6]=(w*m*u-d*y*u-w*l*p+i*y*p+d*l*S-i*m*S)*O,e[7]=(d*x*u-v*m*u+v*l*p-i*x*p-d*l*E+i*m*E)*O,e[8]=F*O,e[9]=(w*_*u-v*R*u-w*r*E+i*R*E+v*r*S-i*_*S)*O,e[10]=(d*R*u-w*h*u+w*r*p-i*R*p-d*r*S+i*h*S)*O,e[11]=(v*h*u-d*_*u-v*r*p+i*_*p+d*r*E-i*h*E)*O,e[12]=Y*O,e[13]=(v*R*l-w*_*l+w*r*x-i*R*x-v*r*y+i*_*y)*O,e[14]=(w*h*l-d*R*l-w*r*m+i*R*m+d*r*y-i*h*y)*O,e[15]=(d*_*l-v*h*l+v*r*m-i*_*m-d*r*x+i*h*x)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,_=h+h,x=u*p,E=u*v,w=u*_,R=d*v,y=d*_,S=h*_,P=m*p,C=m*v,F=m*_,Y=r.x,H=r.y,O=r.z;return l[0]=(1-(R+S))*Y,l[1]=(E+F)*Y,l[2]=(w-C)*Y,l[3]=0,l[4]=(E-F)*H,l[5]=(1-(x+S))*H,l[6]=(y+P)*H,l[7]=0,l[8]=(w+C)*O,l[9]=(y-P)*O,l[10]=(1-(x+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=ms.set(l[0],l[1],l[2]).length();const d=ms.set(l[4],l[5],l[6]).length(),h=ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/u,v=1/d,_=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=v,Si.elements[5]*=v,Si.elements[6]*=v,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=sa){const m=this.elements,p=2*u/(i-e),v=2*u/(r-l),_=(i+e)/(i-e),x=(r+l)/(r-l);let E,w;if(h===sa)E=-(d+u)/(d-u),w=-2*d*u/(d-u);else if(h===Dc)E=-d/(d-u),w=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=sa){const m=this.elements,p=1/(i-e),v=1/(r-l),_=1/(d-u),x=(i+e)*p,E=(r+l)*v;let w,R;if(h===sa)w=(d+u)*_,R=-2*_;else if(h===Dc)w=u*_,R=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*v,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=R,m[14]=-w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ms=new Q,Si=new Ze,zy=new Q(0,0,0),Iy=new Q(1,1,1),Pa=new Q,ac=new Q,Kn=new Q,E_=new Ze,T_=new Mr;class Oi{constructor(e=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],_=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Ln(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ln(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return E_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return T_.setFromEuler(this),this.setFromQuaternion(T_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class B0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let By=0;const b_=new Q,gs=new Mr,ea=new Ze,rc=new Q,Oo=new Q,Fy=new Q,Hy=new Mr,A_=new Q(1,0,0),R_=new Q(0,1,0),C_=new Q(0,0,1),w_={type:"added"},Gy={type:"removed"},_s={type:"childadded",child:null},fh={type:"childremoved",child:null};class yn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Q,i=new Oi,r=new Mr,l=new Q(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ge}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new B0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,i){return gs.setFromAxisAngle(e,i),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(A_,e)}rotateY(e){return this.rotateOnAxis(R_,e)}rotateZ(e){return this.rotateOnAxis(C_,e)}translateOnAxis(e,i){return b_.copy(e).applyQuaternion(this.quaternion),this.position.add(b_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(A_,e)}translateY(e){return this.translateOnAxis(R_,e)}translateZ(e){return this.translateOnAxis(C_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Oo,rc,this.up):ea.lookAt(rc,Oo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),gs.setFromRotationMatrix(ea),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(w_),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Gy),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(w_),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Fy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,Hy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),_=d(e.shapes),x=d(e.skeletons),E=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}yn.DEFAULT_UP=new Q(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new Q,na=new Q,hh=new Q,ia=new Q,vs=new Q,xs=new Q,D_=new Q,dh=new Q,ph=new Q,mh=new Q;class Ei{constructor(e=new Q,i=new Q,r=new Q){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){yi.subVectors(l,i),na.subVectors(r,i),hh.subVectors(e,i);const d=yi.dot(yi),h=yi.dot(na),m=yi.dot(hh),p=na.dot(na),v=na.dot(hh),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const x=1/_,E=(p*m-h*v)*x,w=(d*v-h*m)*x;return u.set(1-E-w,w,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),na.subVectors(e,i),yi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),yi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ei.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return Ei.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;vs.subVectors(l,r),xs.subVectors(u,r),dh.subVectors(e,r);const m=vs.dot(dh),p=xs.dot(dh);if(m<=0&&p<=0)return i.copy(r);ph.subVectors(e,l);const v=vs.dot(ph),_=xs.dot(ph);if(v>=0&&_<=v)return i.copy(l);const x=m*_-v*p;if(x<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(vs,d);mh.subVectors(e,u);const E=vs.dot(mh),w=xs.dot(mh);if(w>=0&&E<=w)return i.copy(u);const R=E*p-m*w;if(R<=0&&p>=0&&w<=0)return h=p/(p-w),i.copy(r).addScaledVector(xs,h);const y=v*w-E*_;if(y<=0&&_-v>=0&&E-w>=0)return D_.subVectors(u,l),h=(_-v)/(_-v+(E-w)),i.copy(l).addScaledVector(D_,h);const S=1/(y+R+x);return d=R*S,h=x*S,i.copy(r).addScaledVector(vs,d).addScaledVector(xs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},sc={h:0,s:0,l:0};function gh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Te{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=wi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ze.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=ze.workingColorSpace){return this.r=e,this.g=i,this.b=r,ze.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=ze.workingColorSpace){if(e=by(e,1),i=Ln(i,0,1),r=Ln(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=gh(d,u,e+1/3),this.g=gh(d,u,e),this.b=gh(d,u,e-1/3)}return ze.toWorkingColorSpace(this,l),this}setStyle(e,i=wi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=wi){const r=F0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=ih(e.r),this.g=ih(e.g),this.b=ih(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wi){return ze.fromWorkingColorSpace(bn.copy(this),e),Math.round(Ln(bn.r*255,0,255))*65536+Math.round(Ln(bn.g*255,0,255))*256+Math.round(Ln(bn.b*255,0,255))}getHexString(e=wi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=ze.workingColorSpace){ze.fromWorkingColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,u=bn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=v<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=ze.workingColorSpace){return ze.fromWorkingColorSpace(bn.copy(this),i),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=wi){ze.fromWorkingColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,l=bn.b;return e!==wi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(za),e.getHSL(sc);const r=eh(za.h,sc.h,i),l=eh(za.s,sc.s,i),u=eh(za.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Te;Te.NAMES=F0;let Vy=0;class zs extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=ws,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Ph,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=bc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=g_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(r.blending=this.blending),this.side!==Xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ph&&(r.blendDst=this.blendDst),this.blendEquation!==_r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==g_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(r.stencilFail=this.stencilFail),this.stencilZFail!==us&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class H0 extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=E0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new Q,oc=new ae;class Li{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=__,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ha,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Cy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Uo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==__&&(e.usage=this.usage),e}}class G0 extends Li{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class V0 extends Li{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ni extends Li{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ky=0;const ci=new Ze,_h=new yn,Ss=new Q,Qn=new Go,Po=new Go,pn=new Q;class oa extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?V0:G0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ge().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,i,r){return ci.makeTranslation(e,i,r),this.applyMatrix4(ci),this}scale(e,i,r){return ci.makeScale(e,i,r),this.applyMatrix4(ci),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ni(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Po.setFromBufferAttribute(h),this.morphTargetsRelative?(pn.addVectors(Qn.min,Po.min),Qn.expandByPoint(pn),pn.addVectors(Qn.max,Po.max),Qn.expandByPoint(pn)):(Qn.expandByPoint(Po.min),Qn.expandByPoint(Po.max))}Qn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)pn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(pn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)pn.fromBufferAttribute(h,p),m&&(Ss.fromBufferAttribute(e,p),pn.add(Ss)),l=Math.max(l,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let et=0;et<r.count;et++)h[et]=new Q,m[et]=new Q;const p=new Q,v=new Q,_=new Q,x=new ae,E=new ae,w=new ae,R=new Q,y=new Q;function S(et,L,A){p.fromBufferAttribute(r,et),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,A),x.fromBufferAttribute(u,et),E.fromBufferAttribute(u,L),w.fromBufferAttribute(u,A),v.sub(p),_.sub(p),E.sub(x),w.sub(x);const Z=1/(E.x*w.y-w.x*E.y);isFinite(Z)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(_,-E.y).multiplyScalar(Z),y.copy(_).multiplyScalar(E.x).addScaledVector(v,-w.x).multiplyScalar(Z),h[et].add(R),h[L].add(R),h[A].add(R),m[et].add(y),m[L].add(y),m[A].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let et=0,L=P.length;et<L;++et){const A=P[et],Z=A.start,lt=A.count;for(let I=Z,ut=Z+lt;I<ut;I+=3)S(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const C=new Q,F=new Q,Y=new Q,H=new Q;function O(et){Y.fromBufferAttribute(l,et),H.copy(Y);const L=h[et];C.copy(L),C.sub(Y.multiplyScalar(Y.dot(L))).normalize(),F.crossVectors(H,L);const Z=F.dot(m[et])<0?-1:1;d.setXYZW(et,C.x,C.y,C.z,Z)}for(let et=0,L=P.length;et<L;++et){const A=P[et],Z=A.start,lt=A.count;for(let I=Z,ut=Z+lt;I<ut;I+=3)O(e.getX(I+0)),O(e.getX(I+1)),O(e.getX(I+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new Q,u=new Q,d=new Q,h=new Q,m=new Q,p=new Q,v=new Q,_=new Q;if(e)for(let x=0,E=e.count;x<E;x+=3){const w=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,w),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),v.subVectors(d,u),_.subVectors(l,u),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)pn.fromBufferAttribute(e,i),pn.normalize(),e.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,_=h.normalized,x=new p.constructor(m.length*v);let E=0,w=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?E=m[R]*h.data.stride+h.offset:E=m[R]*v;for(let S=0;S<v;S++)x[w++]=p[E++]}return new Li(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oa,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,_=p.length;v<_;v++){const x=p[v],E=e(x,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let _=0,x=p.length;_<x;_++){const E=p[_];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],_=u[p];for(let x=0,E=_.length;x<E;x++)v.push(_[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const U_=new Ze,hr=new qh,lc=new Oc,L_=new Q,ys=new Q,Ms=new Q,Es=new Q,vh=new Q,cc=new Q,uc=new ae,fc=new ae,hc=new ae,N_=new Q,O_=new Q,P_=new Q,dc=new Q,pc=new Q;class Ti extends yn{constructor(e=new oa,i=new H0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){cc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],_=u[m];v!==0&&(vh.fromBufferAttribute(_,e),d?cc.addScaledVector(vh,v):cc.addScaledVector(vh.sub(i),v))}i.add(cc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),hr.copy(e.ray).recast(e.near),!(lc.containsPoint(hr.origin)===!1&&(hr.intersectSphere(lc,L_)===null||hr.origin.distanceToSquared(L_)>(e.far-e.near)**2))&&(U_.copy(u).invert(),hr.copy(e.ray).applyMatrix4(U_),!(r.boundingBox!==null&&hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,hr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,x=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,R=x.length;w<R;w++){const y=x[w],S=d[y.materialIndex],P=Math.max(y.start,E.start),C=Math.min(h.count,Math.min(y.start+y.count,E.start+E.count));for(let F=P,Y=C;F<Y;F+=3){const H=h.getX(F),O=h.getX(F+1),et=h.getX(F+2);l=mc(this,S,e,r,p,v,_,H,O,et),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),R=Math.min(h.count,E.start+E.count);for(let y=w,S=R;y<S;y+=3){const P=h.getX(y),C=h.getX(y+1),F=h.getX(y+2);l=mc(this,d,e,r,p,v,_,P,C,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,R=x.length;w<R;w++){const y=x[w],S=d[y.materialIndex],P=Math.max(y.start,E.start),C=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let F=P,Y=C;F<Y;F+=3){const H=F,O=F+1,et=F+2;l=mc(this,S,e,r,p,v,_,H,O,et),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const w=Math.max(0,E.start),R=Math.min(m.count,E.start+E.count);for(let y=w,S=R;y<S;y+=3){const P=y,C=y+1,F=y+2;l=mc(this,d,e,r,p,v,_,P,C,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Xy(o,e,i,r,l,u,d,h){let m;if(e.side===Gn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Xa,h),m===null)return null;pc.copy(h),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,ys),o.getVertexPosition(m,Ms),o.getVertexPosition(p,Es);const v=Xy(o,e,i,r,ys,Ms,Es,dc);if(v){l&&(uc.fromBufferAttribute(l,h),fc.fromBufferAttribute(l,m),hc.fromBufferAttribute(l,p),v.uv=Ei.getInterpolation(dc,ys,Ms,Es,uc,fc,hc,new ae)),u&&(uc.fromBufferAttribute(u,h),fc.fromBufferAttribute(u,m),hc.fromBufferAttribute(u,p),v.uv1=Ei.getInterpolation(dc,ys,Ms,Es,uc,fc,hc,new ae)),d&&(N_.fromBufferAttribute(d,h),O_.fromBufferAttribute(d,m),P_.fromBufferAttribute(d,p),v.normal=Ei.getInterpolation(dc,ys,Ms,Es,N_,O_,P_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new Q,materialIndex:0};Ei.getNormal(ys,Ms,Es,_.normal),v.face=_}return v}class Er extends oa{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],_=[];let x=0,E=0;w("z","y","x",-1,-1,r,i,e,d,u,0),w("z","y","x",1,-1,r,i,-e,d,u,1),w("x","z","y",1,1,e,r,i,l,d,2),w("x","z","y",1,-1,e,r,-i,l,d,3),w("x","y","z",1,-1,e,i,r,l,u,4),w("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ni(p,3)),this.setAttribute("normal",new Ni(v,3)),this.setAttribute("uv",new Ni(_,2));function w(R,y,S,P,C,F,Y,H,O,et,L){const A=F/O,Z=Y/et,lt=F/2,I=Y/2,ut=H/2,ct=O+1,z=et+1;let X=0,G=0;const vt=new Q;for(let _t=0;_t<z;_t++){const N=_t*Z-I;for(let j=0;j<ct;j++){const Mt=j*A-lt;vt[R]=Mt*P,vt[y]=N*C,vt[S]=ut,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[y]=0,vt[S]=H>0?1:-1,v.push(vt.x,vt.y,vt.z),_.push(j/O),_.push(1-_t/et),X+=1}}for(let _t=0;_t<et;_t++)for(let N=0;N<O;N++){const j=x+N+ct*_t,Mt=x+N+ct*(_t+1),k=x+(N+1)+ct*(_t+1),at=x+(N+1)+ct*_t;m.push(j,Mt,at),m.push(Mt,k,at),G+=6}h.addGroup(E,G,L),E+=G,x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Un(o){const e={};for(let i=0;i<o.length;i++){const r=Ps(o[i]);for(const l in r)e[l]=r[l]}return e}function qy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function k0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ze.workingColorSpace}const Wy={clone:Ps,merge:Un};var Yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yy,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class X0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=sa}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ia=new Q,z_=new ae,I_=new ae;class ui extends X0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hh*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,i){return this.getViewBounds(e,z_,I_),i.subVectors(I_,z_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Io*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ts=-90,bs=1;class Zy extends yn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(Ts,bs,e,i);l.layers=this.layers,this.add(l);const u=new ui(Ts,bs,e,i);u.layers=this.layers,this.add(u);const d=new ui(Ts,bs,e,i);d.layers=this.layers,this.add(d);const h=new ui(Ts,bs,e,i);h.layers=this.layers,this.add(h);const m=new ui(Ts,bs,e,i);m.layers=this.layers,this.add(m);const p=new ui(Ts,bs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Dc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(_,x,E),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class q0 extends Vn{constructor(e,i,r,l,u,d,h,m,p,v){e=e!==void 0?e:[],i=i!==void 0?i:Ls,super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ky extends yr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new q0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Mi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Er(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:Ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Ga});u.uniforms.tEquirect.value=i;const d=new Ti(l,u),h=i.minFilter;return i.minFilter===Sr&&(i.minFilter=Mi),new Zy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const xh=new Q,Qy=new Q,Jy=new ge;class Ba{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=xh.subVectors(r,i).cross(Qy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(xh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Jy.getNormalMatrix(e),l=this.coplanarPoint(xh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Oc,gc=new Q;class Wh{constructor(e=new Ba,i=new Ba,r=new Ba,l=new Ba,u=new Ba,d=new Ba){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=sa){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],v=l[5],_=l[6],x=l[7],E=l[8],w=l[9],R=l[10],y=l[11],S=l[12],P=l[13],C=l[14],F=l[15];if(r[0].setComponents(m-u,x-p,y-E,F-S).normalize(),r[1].setComponents(m+u,x+p,y+E,F+S).normalize(),r[2].setComponents(m+d,x+v,y+w,F+P).normalize(),r[3].setComponents(m-d,x-v,y-w,F-P).normalize(),r[4].setComponents(m-h,x-_,y-R,F-C).normalize(),i===sa)r[5].setComponents(m+h,x+_,y+R,F+C).normalize();else if(i===Dc)r[5].setComponents(h,_,R,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function W0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function $y(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,v),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const v=m.array,_=m._updateRange,x=m.updateRanges;if(o.bindBuffer(p,h),_.count===-1&&x.length===0&&o.bufferSubData(p,0,v),x.length!==0){for(let E=0,w=x.length;E<w;E++){const R=x[E];o.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}_.count!==-1&&(o.bufferSubData(p,_.offset*v.BYTES_PER_ELEMENT,v,_.offset,_.count),_.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}class Pc extends oa{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,_=e/h,x=i/m,E=[],w=[],R=[],y=[];for(let S=0;S<v;S++){const P=S*x-d;for(let C=0;C<p;C++){const F=C*_-u;w.push(F,-P,0),R.push(0,0,1),y.push(C/h),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let P=0;P<h;P++){const C=P+p*S,F=P+p*(S+1),Y=P+1+p*(S+1),H=P+1+p*S;E.push(C,F,H),E.push(F,Y,H)}this.setIndex(E),this.setAttribute("position",new Ni(w,3)),this.setAttribute("normal",new Ni(R,3)),this.setAttribute("uv",new Ni(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$M=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ME=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,EE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ST=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ET=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:tM,alphahash_pars_fragment:eM,alphamap_fragment:nM,alphamap_pars_fragment:iM,alphatest_fragment:aM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:oM,batching_pars_vertex:lM,batching_vertex:cM,begin_vertex:uM,beginnormal_vertex:fM,bsdfs:hM,iridescence_fragment:dM,bumpmap_pars_fragment:pM,clipping_planes_fragment:mM,clipping_planes_pars_fragment:gM,clipping_planes_pars_vertex:_M,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:SM,color_pars_vertex:yM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:bM,displacementmap_pars_vertex:AM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:wM,colorspace_fragment:DM,colorspace_pars_fragment:UM,envmap_fragment:LM,envmap_common_pars_fragment:NM,envmap_pars_fragment:OM,envmap_pars_vertex:PM,envmap_physical_pars_fragment:YM,envmap_vertex:zM,fog_vertex:IM,fog_pars_vertex:BM,fog_fragment:FM,fog_pars_fragment:HM,gradientmap_pars_fragment:GM,lightmap_fragment:VM,lightmap_pars_fragment:kM,lights_lambert_fragment:XM,lights_lambert_pars_fragment:qM,lights_pars_begin:WM,lights_toon_fragment:jM,lights_toon_pars_fragment:ZM,lights_phong_fragment:KM,lights_phong_pars_fragment:QM,lights_physical_fragment:JM,lights_physical_pars_fragment:$M,lights_fragment_begin:tE,lights_fragment_maps:eE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:rE,logdepthbuf_vertex:sE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:hE,morphinstance_vertex:dE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:vE,normal_fragment_maps:xE,normal_pars_fragment:SE,normal_pars_vertex:yE,normal_vertex:ME,normalmap_pars_fragment:EE,clearcoat_normal_fragment_begin:TE,clearcoat_normal_fragment_maps:bE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:RE,opaque_fragment:CE,packing:wE,premultiplied_alpha_fragment:DE,project_vertex:UE,dithering_fragment:LE,dithering_pars_fragment:NE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:IE,shadowmap_vertex:BE,shadowmask_pars_fragment:FE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:kE,specularmap_fragment:XE,specularmap_pars_fragment:qE,tonemapping_fragment:WE,tonemapping_pars_fragment:YE,transmission_fragment:jE,transmission_pars_fragment:ZE,uv_pars_fragment:KE,uv_pars_vertex:QE,uv_vertex:JE,worldpos_vertex:$E,background_vert:tT,background_frag:eT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:rT,depth_vert:sT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:hT,linedashed_frag:dT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:vT,meshmatcap_frag:xT,meshnormal_vert:ST,meshnormal_frag:yT,meshphong_vert:MT,meshphong_frag:ET,meshphysical_vert:TT,meshphysical_frag:bT,meshtoon_vert:AT,meshtoon_frag:RT,points_vert:CT,points_frag:wT,shadow_vert:DT,shadow_frag:UT,sprite_vert:LT,sprite_frag:NT},Nt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Di={basic:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Un([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Un([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Un([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Te(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Un([Nt.points,Nt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Un([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Un([Nt.common,Nt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Un([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Un([Nt.sprite,Nt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Un([Nt.common,Nt.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Un([Nt.lights,Nt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Di.physical={uniforms:Un([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const _c={r:0,b:0,g:0},pr=new Oi,OT=new Ze;function PT(o,e,i,r,l,u,d){const h=new Te(0);let m=u===!0?0:1,p,v,_=null,x=0,E=null;function w(y,S){let P=!1,C=S.isScene===!0?S.background:null;C&&C.isTexture&&(C=(S.backgroundBlurriness>0?i:e).get(C)),C===null?R(h,m):C&&C.isColor&&(R(C,1),P=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Lc)?(v===void 0&&(v=new Ti(new Er(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Ps(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Y,H,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),pr.copy(S.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),v.material.uniforms.envMap.value=C,v.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(OT.makeRotationFromEuler(pr)),v.material.toneMapped=ze.getTransfer(C.colorSpace)!==ke,(_!==C||x!==C.version||E!==o.toneMapping)&&(v.material.needsUpdate=!0,_=C,x=C.version,E=o.toneMapping),v.layers.enableAll(),y.unshift(v,v.geometry,v.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Ti(new Pc(2,2),new qa({name:"BackgroundMaterial",uniforms:Ps(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,p.material.toneMapped=ze.getTransfer(C.colorSpace)!==ke,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||x!==C.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,_=C,x=C.version,E=o.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function R(y,S){y.getRGB(_c,k0(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,S,d)}return{getClearColor:function(){return h},setClearColor:function(y,S=1){h.set(y),m=S,R(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(y){m=y,R(h,m)},render:w}}function zT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,d=!1;function h(A,Z,lt,I,ut){let ct=!1;const z=_(I,lt,Z);u!==z&&(u=z,p(u.object)),ct=E(A,I,lt,ut),ct&&w(A,I,lt,ut),ut!==null&&e.update(ut,o.ELEMENT_ARRAY_BUFFER),(ct||d)&&(d=!1,F(A,Z,lt,I),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ut).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function v(A){return o.deleteVertexArray(A)}function _(A,Z,lt){const I=lt.wireframe===!0;let ut=r[A.id];ut===void 0&&(ut={},r[A.id]=ut);let ct=ut[Z.id];ct===void 0&&(ct={},ut[Z.id]=ct);let z=ct[I];return z===void 0&&(z=x(m()),ct[I]=z),z}function x(A){const Z=[],lt=[],I=[];for(let ut=0;ut<i;ut++)Z[ut]=0,lt[ut]=0,I[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:lt,attributeDivisors:I,object:A,attributes:{},index:null}}function E(A,Z,lt,I){const ut=u.attributes,ct=Z.attributes;let z=0;const X=lt.getAttributes();for(const G in X)if(X[G].location>=0){const _t=ut[G];let N=ct[G];if(N===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),_t===void 0||_t.attribute!==N||N&&_t.data!==N.data)return!0;z++}return u.attributesNum!==z||u.index!==I}function w(A,Z,lt,I){const ut={},ct=Z.attributes;let z=0;const X=lt.getAttributes();for(const G in X)if(X[G].location>=0){let _t=ct[G];_t===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor));const N={};N.attribute=_t,_t&&_t.data&&(N.data=_t.data),ut[G]=N,z++}u.attributes=ut,u.attributesNum=z,u.index=I}function R(){const A=u.newAttributes;for(let Z=0,lt=A.length;Z<lt;Z++)A[Z]=0}function y(A){S(A,0)}function S(A,Z){const lt=u.newAttributes,I=u.enabledAttributes,ut=u.attributeDivisors;lt[A]=1,I[A]===0&&(o.enableVertexAttribArray(A),I[A]=1),ut[A]!==Z&&(o.vertexAttribDivisor(A,Z),ut[A]=Z)}function P(){const A=u.newAttributes,Z=u.enabledAttributes;for(let lt=0,I=Z.length;lt<I;lt++)Z[lt]!==A[lt]&&(o.disableVertexAttribArray(lt),Z[lt]=0)}function C(A,Z,lt,I,ut,ct,z){z===!0?o.vertexAttribIPointer(A,Z,lt,ut,ct):o.vertexAttribPointer(A,Z,lt,I,ut,ct)}function F(A,Z,lt,I){R();const ut=I.attributes,ct=lt.getAttributes(),z=Z.defaultAttributeValues;for(const X in ct){const G=ct[X];if(G.location>=0){let vt=ut[X];if(vt===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(vt=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(vt=A.instanceColor)),vt!==void 0){const _t=vt.normalized,N=vt.itemSize,j=e.get(vt);if(j===void 0)continue;const Mt=j.buffer,k=j.type,at=j.bytesPerElement,Tt=k===o.INT||k===o.UNSIGNED_INT||vt.gpuType===A0;if(vt.isInterleavedBufferAttribute){const bt=vt.data,Gt=bt.stride,Bt=vt.offset;if(bt.isInstancedInterleavedBuffer){for(let te=0;te<G.locationSize;te++)S(G.location+te,bt.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let te=0;te<G.locationSize;te++)y(G.location+te);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let te=0;te<G.locationSize;te++)C(G.location+te,N/G.locationSize,k,_t,Gt*at,(Bt+N/G.locationSize*te)*at,Tt)}else{if(vt.isInstancedBufferAttribute){for(let bt=0;bt<G.locationSize;bt++)S(G.location+bt,vt.meshPerAttribute);A.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let bt=0;bt<G.locationSize;bt++)y(G.location+bt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let bt=0;bt<G.locationSize;bt++)C(G.location+bt,N/G.locationSize,k,_t,N*at,N/G.locationSize*bt*at,Tt)}}else if(z!==void 0){const _t=z[X];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(G.location,_t);break;case 3:o.vertexAttrib3fv(G.location,_t);break;case 4:o.vertexAttrib4fv(G.location,_t);break;default:o.vertexAttrib1fv(G.location,_t)}}}}P()}function Y(){et();for(const A in r){const Z=r[A];for(const lt in Z){const I=Z[lt];for(const ut in I)v(I[ut].object),delete I[ut];delete Z[lt]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const Z=r[A.id];for(const lt in Z){const I=Z[lt];for(const ut in I)v(I[ut].object),delete I[ut];delete Z[lt]}delete r[A.id]}function O(A){for(const Z in r){const lt=r[Z];if(lt[A.id]===void 0)continue;const I=lt[A.id];for(const ut in I)v(I[ut].object),delete I[ut];delete lt[A.id]}}function et(){L(),d=!0,u!==l&&(u=l,p(u.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:et,resetDefaultState:L,dispose:Y,releaseStatesOfGeometry:H,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:y,disableUnusedAttributes:P}}function IT(o,e,i){let r;function l(m){r=m}function u(m,p){o.drawArrays(r,m,p),i.update(p,r,1)}function d(m,p,v){v!==0&&(o.drawArraysInstanced(r,m,p,v),i.update(p,r,v))}function h(m,p,v){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<v;x++)this.render(m[x],p[x]);else{_.multiDrawArraysWEBGL(r,m,0,p,0,v);let x=0;for(let E=0;E<v;E++)x+=p[E];i.update(x,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function BT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const h=u(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=i.logarithmicDepthBuffer===!0,p=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),S=v>0,P=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:m,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:x,maxAttributes:E,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:y,vertexTextures:S,maxSamples:P}}function FT(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Ba,h=new ge,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||r!==0||l;return l=x,r=_.length,E},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=v(_,x,0)},this.setState=function(_,x,E){const w=_.clippingPlanes,R=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!l||w===null||w.length===0||u&&!y)u?v(null):p();else{const P=u?0:r,C=P*4;let F=S.clippingState||null;m.value=F,F=v(w,x,C,E);for(let Y=0;Y!==C;++Y)F[Y]=i[Y];S.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,E,w){const R=_!==null?_.length:0;let y=null;if(R!==0){if(y=m.value,w!==!0||y===null){const S=E+R*4,P=x.matrixWorldInverse;h.getNormalMatrix(P),(y===null||y.length<S)&&(y=new Float32Array(S));for(let C=0,F=E;C!==R;++C,F+=4)d.copy(_[C]).applyMatrix4(P,h),d.normal.toArray(y,F),y[F+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function HT(o){let e=new WeakMap;function i(d,h){return h===zh?d.mapping=Ls:h===Ih&&(d.mapping=Ns),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===zh||h===Ih)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ky(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class Y0 extends X0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Rs=4,B_=[.125,.215,.35,.446,.526,.582],vr=20,Sh=new Y0,F_=new Te;let yh=null,Mh=0,Eh=0,Th=!1;const gr=(1+Math.sqrt(5))/2,As=1/gr,H_=[new Q(1,1,1),new Q(-1,1,1),new Q(1,1,-1),new Q(-1,1,-1),new Q(0,gr,As),new Q(0,gr,-As),new Q(As,0,gr),new Q(-As,0,gr),new Q(gr,As,0),new Q(-gr,As,0)];class G_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=Th,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ls||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:Ac,format:Ui,colorSpace:Wa,depthBuffer:!1},l=V_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=GT(u)),this._blurMaterial=VT(u,e,i)}return l}_compileMaterial(e){const i=new Ti(this._lodPlanes[0],e);this._renderer.compile(i,Sh)}_sceneToCubeUV(e,i,r,l){const h=new ui(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(F_),v.toneMapping=Va,v.autoClear=!1;const E=new H0({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),w=new Ti(new Er,E);let R=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,R=!0):(E.color.copy(F_),R=!0);for(let S=0;S<6;S++){const P=S%3;P===0?(h.up.set(0,m[S],0),h.lookAt(p[S],0,0)):P===1?(h.up.set(0,0,m[S]),h.lookAt(0,p[S],0)):(h.up.set(0,m[S],0),h.lookAt(0,0,p[S]));const C=this._cubeSize;vc(l,P*C,S>2?C:0,C,C),v.setRenderTarget(l),R&&v.render(w,h),v.render(e,h)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=_,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ls||e.mapping===Ns;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=X_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Ti(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;vc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Sh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=H_[(l-1)%H_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Ti(this._lodPlanes[l],p),x=p.uniforms,E=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*vr-1),R=u/w,y=isFinite(u)?1+Math.floor(v*R):vr;y>vr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${vr}`);const S=[];let P=0;for(let O=0;O<vr;++O){const et=O/R,L=Math.exp(-et*et/2);S.push(L),O===0?P+=L:O<y&&(P+=2*L)}for(let O=0;O<S.length;O++)S[O]=S[O]/P;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:C}=this;x.dTheta.value=w,x.mipInt.value=C-r;const F=this._sizeLods[l],Y=3*F*(l>C-Rs?l-C+Rs:0),H=4*(this._cubeSize-F);vc(i,Y,H,3*F,2*F),m.setRenderTarget(i),m.render(_,Sh)}}function GT(o){const e=[],i=[],r=[];let l=o;const u=o-Rs+1+B_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-Rs?m=B_[d-o+Rs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),v=-p,_=1+p,x=[v,v,_,v,_,_,v,v,_,_,v,_],E=6,w=6,R=3,y=2,S=1,P=new Float32Array(R*w*E),C=new Float32Array(y*w*E),F=new Float32Array(S*w*E);for(let H=0;H<E;H++){const O=H%3*2/3-1,et=H>2?0:-1,L=[O,et,0,O+2/3,et,0,O+2/3,et+1,0,O,et,0,O+2/3,et+1,0,O,et+1,0];P.set(L,R*w*H),C.set(x,y*w*H);const A=[H,H,H,H,H,H];F.set(A,S*w*H)}const Y=new oa;Y.setAttribute("position",new Li(P,R)),Y.setAttribute("uv",new Li(C,y)),Y.setAttribute("faceIndex",new Li(F,S)),e.push(Y),l>Rs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function V_(o,e,i){const r=new yr(o,e,i);return r.texture.mapping=Lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function VT(o,e,i){const r=new Float32Array(vr),l=new Q(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function k_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function X_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function Yh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===zh||m===Ih,v=m===Ls||m===Ns;if(p||v){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new G_(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const E=h.image;return p&&E&&E.height>0||v&&E&&l(E)?(i===null&&(i=new G_(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function XT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function qT(o,e,i,r){const l={},u=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const R=x.morphAttributes[w];for(let y=0,S=R.length;y<S;y++)e.remove(R[y])}x.removeEventListener("dispose",d),delete l[x.id];const E=u.get(x);E&&(e.remove(E),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const w in x)e.update(x[w],o.ARRAY_BUFFER);const E=_.morphAttributes;for(const w in E){const R=E[w];for(let y=0,S=R.length;y<S;y++)e.update(R[y],o.ARRAY_BUFFER)}}function p(_){const x=[],E=_.index,w=_.attributes.position;let R=0;if(E!==null){const P=E.array;R=E.version;for(let C=0,F=P.length;C<F;C+=3){const Y=P[C+0],H=P[C+1],O=P[C+2];x.push(Y,H,H,O,O,Y)}}else if(w!==void 0){const P=w.array;R=w.version;for(let C=0,F=P.length/3-1;C<F;C+=3){const Y=C+0,H=C+1,O=C+2;x.push(Y,H,H,O,O,Y)}}else return;const y=new(P0(x)?V0:G0)(x,1);y.version=R;const S=u.get(_);S&&e.remove(S),u.set(_,y)}function v(_){const x=u.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:v}}function WT(o,e,i){let r;function l(_){r=_}let u,d;function h(_){u=_.type,d=_.bytesPerElement}function m(_,x){o.drawElements(r,x,u,_*d),i.update(x,r,1)}function p(_,x,E){E!==0&&(o.drawElementsInstanced(r,x,u,_*d,E),i.update(x,r,E))}function v(_,x,E){if(E===0)return;const w=e.get("WEBGL_multi_draw");if(w===null)for(let R=0;R<E;R++)this.render(_[R]/d,x[R]);else{w.multiDrawElementsWEBGL(r,x,0,u,_,0,E);let R=0;for(let y=0;y<E;y++)R+=x[y];i.update(R,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function YT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function jT(o,e,i){const r=new WeakMap,l=new mn;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let A=function(){et.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var E=A;x!==void 0&&x.texture.dispose();const w=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,S=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let F=0;w===!0&&(F=1),R===!0&&(F=2),y===!0&&(F=3);let Y=h.attributes.position.count*F,H=1;Y>e.maxTextureSize&&(H=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const O=new Float32Array(Y*H*4*_),et=new I0(O,Y,H,_);et.type=Ha,et.needsUpdate=!0;const L=F*4;for(let Z=0;Z<_;Z++){const lt=S[Z],I=P[Z],ut=C[Z],ct=Y*H*4*Z;for(let z=0;z<lt.count;z++){const X=z*L;w===!0&&(l.fromBufferAttribute(lt,z),O[ct+X+0]=l.x,O[ct+X+1]=l.y,O[ct+X+2]=l.z,O[ct+X+3]=0),R===!0&&(l.fromBufferAttribute(I,z),O[ct+X+4]=l.x,O[ct+X+5]=l.y,O[ct+X+6]=l.z,O[ct+X+7]=0),y===!0&&(l.fromBufferAttribute(ut,z),O[ct+X+8]=l.x,O[ct+X+9]=l.y,O[ct+X+10]=l.z,O[ct+X+11]=ut.itemSize===4?l.w:1)}}x={count:_,texture:et,size:new ae(Y,H)},r.set(h,x),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let w=0;for(let y=0;y<p.length;y++)w+=p[y];const R=h.morphTargetsRelative?1:1-w;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ZT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class j0 extends Vn{constructor(e,i,r,l,u,d,h,m,p,v){if(v=v!==void 0?v:Ds,v!==Ds&&v!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ds&&(r=Os),r===void 0&&v===Bo&&(r=Fo),super(null,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:fi,this.minFilter=m!==void 0?m:fi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Z0=new Vn,K0=new j0(1,1);K0.compareFunction=O0;const Q0=new I0,J0=new Oy,$0=new q0,q_=[],W_=[],Y_=new Float32Array(16),j_=new Float32Array(9),Z_=new Float32Array(4);function Is(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=q_[l];if(u===void 0&&(u=new Float32Array(l),q_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function cn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function un(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function zc(o,e){let i=W_[e];i===void 0&&(i=new Int32Array(e),W_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function KT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2fv(this.addr,e),un(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(cn(i,e))return;o.uniform3fv(this.addr,e),un(i,e)}}function $T(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4fv(this.addr,e),un(i,e)}}function tb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;Z_.set(r),o.uniformMatrix2fv(this.addr,!1,Z_),un(i,r)}}function eb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;j_.set(r),o.uniformMatrix3fv(this.addr,!1,j_),un(i,r)}}function nb(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(cn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),un(i,e)}else{if(cn(i,r))return;Y_.set(r),o.uniformMatrix4fv(this.addr,!1,Y_),un(i,r)}}function ib(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function ab(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2iv(this.addr,e),un(i,e)}}function rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3iv(this.addr,e),un(i,e)}}function sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4iv(this.addr,e),un(i,e)}}function ob(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function lb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(cn(i,e))return;o.uniform2uiv(this.addr,e),un(i,e)}}function cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(cn(i,e))return;o.uniform3uiv(this.addr,e),un(i,e)}}function ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(cn(i,e))return;o.uniform4uiv(this.addr,e),un(i,e)}}function fb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?K0:Z0;i.setTexture2D(e||u,l)}function hb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||J0,l)}function db(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||$0,l)}function pb(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Q0,l)}function mb(o){switch(o){case 5126:return KT;case 35664:return QT;case 35665:return JT;case 35666:return $T;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return ab;case 35668:case 35672:return rb;case 35669:case 35673:return sb;case 5125:return ob;case 36294:return lb;case 36295:return cb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return fb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return db;case 36289:case 36303:case 36311:case 36292:return pb}}function gb(o,e){o.uniform1fv(this.addr,e)}function _b(o,e){const i=Is(e,this.size,2);o.uniform2fv(this.addr,i)}function vb(o,e){const i=Is(e,this.size,3);o.uniform3fv(this.addr,i)}function xb(o,e){const i=Is(e,this.size,4);o.uniform4fv(this.addr,i)}function Sb(o,e){const i=Is(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yb(o,e){const i=Is(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Mb(o,e){const i=Is(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Eb(o,e){o.uniform1iv(this.addr,e)}function Tb(o,e){o.uniform2iv(this.addr,e)}function bb(o,e){o.uniform3iv(this.addr,e)}function Ab(o,e){o.uniform4iv(this.addr,e)}function Rb(o,e){o.uniform1uiv(this.addr,e)}function Cb(o,e){o.uniform2uiv(this.addr,e)}function wb(o,e){o.uniform3uiv(this.addr,e)}function Db(o,e){o.uniform4uiv(this.addr,e)}function Ub(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Z0,u[d])}function Lb(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||J0,u[d])}function Nb(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||$0,u[d])}function Ob(o,e,i){const r=this.cache,l=e.length,u=zc(i,l);cn(r,u)||(o.uniform1iv(this.addr,u),un(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Q0,u[d])}function Pb(o){switch(o){case 5126:return gb;case 35664:return _b;case 35665:return vb;case 35666:return xb;case 35674:return Sb;case 35675:return yb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return bb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Cb;case 36295:return wb;case 36296:return Db;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Nb;case 36289:case 36303:case 36311:case 36292:return Ob}}class zb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mb(i.type)}}class Ib{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Pb(i.type)}}class Bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const bh=/(\w+)(\])?(\[|\.)?/g;function K_(o,e){o.seq.push(e),o.map[e.id]=e}function Fb(o,e,i){const r=o.name,l=r.length;for(bh.lastIndex=0;;){const u=bh.exec(r),d=bh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){K_(i,p===void 0?new zb(h,o,e):new Ib(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new Bb(h),K_(i,_)),i=_}}}class Tc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);Fb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Q_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const Hb=37297;let Gb=0;function Vb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function kb(o){const e=ze.getPrimaries(ze.workingColorSpace),i=ze.getPrimaries(o);let r;switch(e===i?r="":e===wc&&i===Cc?r="LinearDisplayP3ToLinearSRGB":e===Cc&&i===wc&&(r="LinearSRGBToLinearDisplayP3"),o){case Wa:case Nc:return[r,"LinearTransferOETF"];case wi:case Xh:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function J_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Vb(o.getShaderSource(e),d)}else return l}function Xb(o,e){const i=kb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function qb(o,e){let i;switch(e){case QS:i="Linear";break;case JS:i="Reinhard";break;case $S:i="OptimizedCineon";break;case ty:i="ACESFilmic";break;case ny:i="AgX";break;case iy:i="Neutral";break;case ey:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Wb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Yb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function jb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function zo(o){return o!==""}function $_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gh(o){return o.replace(Zb,Qb)}const Kb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Qb(o,e){let i=me[e];if(i===void 0){const r=Kb.get(e);if(r!==void 0)i=me[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Gh(i)}const Jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(o){return o.replace(Jb,$b)}function $b(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function n0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===M0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ES?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===aa&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ls:case Ns:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function iA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case E0:e="ENVMAP_BLENDING_MULTIPLY";break;case ZS:e="ENVMAP_BLENDING_MIX";break;case KS:e="ENVMAP_BLENDING_ADD";break}return e}function aA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function rA(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=tA(i),p=eA(i),v=nA(i),_=iA(i),x=aA(i),E=Wb(i),w=Yb(u),R=l.createProgram();let y,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(zo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w].filter(zo).join(`
`),S.length>0&&(S+=`
`)):(y=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),S=[n0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,w,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?me.tonemapping_pars_fragment:"",i.toneMapping!==Va?qb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,Xb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(zo).join(`
`)),d=Gh(d),d=$_(d,i),d=t0(d,i),h=Gh(h),h=$_(h,i),h=t0(h,i),d=e0(d),h=e0(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===v_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===v_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=P+y+d,F=P+S+h,Y=Q_(l,l.VERTEX_SHADER,C),H=Q_(l,l.FRAGMENT_SHADER,F);l.attachShader(R,Y),l.attachShader(R,H),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(Z){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(R).trim(),I=l.getShaderInfoLog(Y).trim(),ut=l.getShaderInfoLog(H).trim();let ct=!0,z=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,Y,H);else{const X=J_(l,Y,"vertex"),G=J_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+lt+`
`+X+`
`+G)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(I===""||ut==="")&&(z=!1);z&&(Z.diagnostics={runnable:ct,programLog:lt,vertexShader:{log:I,prefix:y},fragmentShader:{log:ut,prefix:S}})}l.deleteShader(Y),l.deleteShader(H),et=new Tc(l,R),L=jb(l,R)}let et;this.getUniforms=function(){return et===void 0&&O(this),et};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(R,Hb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=Y,this.fragmentShader=H,this}let sA=0;class oA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new lA(e),i.set(e,r)),r}}class lA{constructor(e){this.id=sA++,this.code=e,this.usedTimes=0}}function cA(o,e,i,r,l,u,d){const h=new B0,m=new oA,p=new Set,v=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(L){return p.add(L),L===0?"uv":`uv${L}`}function y(L,A,Z,lt,I){const ut=lt.fog,ct=I.geometry,z=L.isMeshStandardMaterial?lt.environment:null,X=(L.isMeshStandardMaterial?i:e).get(L.envMap||z),G=X&&X.mapping===Lc?X.image.height:null,vt=w[L.type];L.precision!==null&&(E=l.getMaxPrecision(L.precision),E!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",E,"instead."));const _t=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,N=_t!==void 0?_t.length:0;let j=0;ct.morphAttributes.position!==void 0&&(j=1),ct.morphAttributes.normal!==void 0&&(j=2),ct.morphAttributes.color!==void 0&&(j=3);let Mt,k,at,Tt;if(vt){const tn=Di[vt];Mt=tn.vertexShader,k=tn.fragmentShader}else Mt=L.vertexShader,k=L.fragmentShader,m.update(L),at=m.getVertexShaderID(L),Tt=m.getFragmentShaderID(L);const bt=o.getRenderTarget(),Gt=I.isInstancedMesh===!0,Bt=I.isBatchedMesh===!0,te=!!L.map,nt=!!L.matcap,ee=!!X,jt=!!L.aoMap,Rt=!!L.lightMap,Et=!!L.bumpMap,Pt=!!L.normalMap,D=!!L.displacementMap,T=!!L.emissiveMap,W=!!L.metalnessMap,J=!!L.roughnessMap,ot=L.anisotropy>0,pt=L.clearcoat>0,Ut=L.iridescence>0,mt=L.sheen>0,Ot=L.transmission>0,wt=ot&&!!L.anisotropyMap,At=pt&&!!L.clearcoatMap,Dt=pt&&!!L.clearcoatNormalMap,Zt=pt&&!!L.clearcoatRoughnessMap,It=Ut&&!!L.iridescenceMap,Ft=Ut&&!!L.iridescenceThicknessMap,_e=mt&&!!L.sheenColorMap,de=mt&&!!L.sheenRoughnessMap,ne=!!L.specularMap,ue=!!L.specularColorMap,ie=!!L.specularIntensityMap,qt=Ot&&!!L.transmissionMap,M=Ot&&!!L.thicknessMap,st=!!L.gradientMap,xt=!!L.alphaMap,Ct=L.alphaTest>0,zt=!!L.alphaHash,oe=!!L.extensions;let fe=Va;L.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(fe=o.toneMapping);const we={shaderID:vt,shaderType:L.type,shaderName:L.name,vertexShader:Mt,fragmentShader:k,defines:L.defines,customVertexShaderID:at,customFragmentShaderID:Tt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:E,batching:Bt,instancing:Gt,instancingColor:Gt&&I.instanceColor!==null,instancingMorph:Gt&&I.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Wa,alphaToCoverage:!!L.alphaToCoverage,map:te,matcap:nt,envMap:ee,envMapMode:ee&&X.mapping,envMapCubeUVHeight:G,aoMap:jt,lightMap:Rt,bumpMap:Et,normalMap:Pt,displacementMap:x&&D,emissiveMap:T,normalMapObjectSpace:Pt&&L.normalMapType===_y,normalMapTangentSpace:Pt&&L.normalMapType===N0,metalnessMap:W,roughnessMap:J,anisotropy:ot,anisotropyMap:wt,clearcoat:pt,clearcoatMap:At,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Zt,iridescence:Ut,iridescenceMap:It,iridescenceThicknessMap:Ft,sheen:mt,sheenColorMap:_e,sheenRoughnessMap:de,specularMap:ne,specularColorMap:ue,specularIntensityMap:ie,transmission:Ot,transmissionMap:qt,thicknessMap:M,gradientMap:st,opaque:L.transparent===!1&&L.blending===ws&&L.alphaToCoverage===!1,alphaMap:xt,alphaTest:Ct,alphaHash:zt,combine:L.combine,mapUv:te&&R(L.map.channel),aoMapUv:jt&&R(L.aoMap.channel),lightMapUv:Rt&&R(L.lightMap.channel),bumpMapUv:Et&&R(L.bumpMap.channel),normalMapUv:Pt&&R(L.normalMap.channel),displacementMapUv:D&&R(L.displacementMap.channel),emissiveMapUv:T&&R(L.emissiveMap.channel),metalnessMapUv:W&&R(L.metalnessMap.channel),roughnessMapUv:J&&R(L.roughnessMap.channel),anisotropyMapUv:wt&&R(L.anisotropyMap.channel),clearcoatMapUv:At&&R(L.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&R(L.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&R(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&R(L.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&R(L.sheenColorMap.channel),sheenRoughnessMapUv:de&&R(L.sheenRoughnessMap.channel),specularMapUv:ne&&R(L.specularMap.channel),specularColorMapUv:ue&&R(L.specularColorMap.channel),specularIntensityMapUv:ie&&R(L.specularIntensityMap.channel),transmissionMapUv:qt&&R(L.transmissionMap.channel),thicknessMapUv:M&&R(L.thicknessMap.channel),alphaMapUv:xt&&R(L.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Pt||ot),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!ct.attributes.uv&&(te||xt),fog:!!ut,useFog:L.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:I.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:j,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:L.dithering,shadowMapEnabled:o.shadowMap.enabled&&Z.length>0,shadowMapType:o.shadowMap.type,toneMapping:fe,useLegacyLights:o._useLegacyLights,decodeVideoTexture:te&&L.map.isVideoTexture===!0&&ze.getTransfer(L.map.colorSpace)===ke,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===ra,flipSided:L.side===Gn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:oe&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:oe&&L.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return we.vertexUv1s=p.has(1),we.vertexUv2s=p.has(2),we.vertexUv3s=p.has(3),p.clear(),we}function S(L){const A=[];if(L.shaderID?A.push(L.shaderID):(A.push(L.customVertexShaderID),A.push(L.customFragmentShaderID)),L.defines!==void 0)for(const Z in L.defines)A.push(Z),A.push(L.defines[Z]);return L.isRawShaderMaterial===!1&&(P(A,L),C(A,L),A.push(o.outputColorSpace)),A.push(L.customProgramCacheKey),A.join()}function P(L,A){L.push(A.precision),L.push(A.outputColorSpace),L.push(A.envMapMode),L.push(A.envMapCubeUVHeight),L.push(A.mapUv),L.push(A.alphaMapUv),L.push(A.lightMapUv),L.push(A.aoMapUv),L.push(A.bumpMapUv),L.push(A.normalMapUv),L.push(A.displacementMapUv),L.push(A.emissiveMapUv),L.push(A.metalnessMapUv),L.push(A.roughnessMapUv),L.push(A.anisotropyMapUv),L.push(A.clearcoatMapUv),L.push(A.clearcoatNormalMapUv),L.push(A.clearcoatRoughnessMapUv),L.push(A.iridescenceMapUv),L.push(A.iridescenceThicknessMapUv),L.push(A.sheenColorMapUv),L.push(A.sheenRoughnessMapUv),L.push(A.specularMapUv),L.push(A.specularColorMapUv),L.push(A.specularIntensityMapUv),L.push(A.transmissionMapUv),L.push(A.thicknessMapUv),L.push(A.combine),L.push(A.fogExp2),L.push(A.sizeAttenuation),L.push(A.morphTargetsCount),L.push(A.morphAttributeCount),L.push(A.numDirLights),L.push(A.numPointLights),L.push(A.numSpotLights),L.push(A.numSpotLightMaps),L.push(A.numHemiLights),L.push(A.numRectAreaLights),L.push(A.numDirLightShadows),L.push(A.numPointLightShadows),L.push(A.numSpotLightShadows),L.push(A.numSpotLightShadowsWithMaps),L.push(A.numLightProbes),L.push(A.shadowMapType),L.push(A.toneMapping),L.push(A.numClippingPlanes),L.push(A.numClipIntersection),L.push(A.depthPacking)}function C(L,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),L.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.skinning&&h.enable(4),A.morphTargets&&h.enable(5),A.morphNormals&&h.enable(6),A.morphColors&&h.enable(7),A.premultipliedAlpha&&h.enable(8),A.shadowMapEnabled&&h.enable(9),A.useLegacyLights&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.alphaToCoverage&&h.enable(20),L.push(h.mask)}function F(L){const A=w[L.type];let Z;if(A){const lt=Di[A];Z=Wy.clone(lt.uniforms)}else Z=L.uniforms;return Z}function Y(L,A){let Z;for(let lt=0,I=v.length;lt<I;lt++){const ut=v[lt];if(ut.cacheKey===A){Z=ut,++Z.usedTimes;break}}return Z===void 0&&(Z=new rA(o,A,L,u),v.push(Z)),Z}function H(L){if(--L.usedTimes===0){const A=v.indexOf(L);v[A]=v[v.length-1],v.pop(),L.destroy()}}function O(L){m.remove(L)}function et(){m.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:F,acquireProgram:Y,releaseProgram:H,releaseShaderCache:O,programs:v,dispose:et}}function uA(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function fA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function i0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function a0(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,x,E,w,R,y){let S=o[e];return S===void 0?(S={id:_.id,object:_,geometry:x,material:E,groupOrder:w,renderOrder:_.renderOrder,z:R,group:y},o[e]=S):(S.id=_.id,S.object=_,S.geometry=x,S.material=E,S.groupOrder=w,S.renderOrder=_.renderOrder,S.z=R,S.group=y),e++,S}function h(_,x,E,w,R,y){const S=d(_,x,E,w,R,y);E.transmission>0?r.push(S):E.transparent===!0?l.push(S):i.push(S)}function m(_,x,E,w,R,y){const S=d(_,x,E,w,R,y);E.transmission>0?r.unshift(S):E.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,x){i.length>1&&i.sort(_||fA),r.length>1&&r.sort(x||i0),l.length>1&&l.sort(x||i0)}function v(){for(let _=e,x=o.length;_<x;_++){const E=o[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function hA(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new a0,o.set(r,[d])):l>=u.length?(d=new a0,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function dA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new Te};break;case"SpotLight":i={position:new Q,direction:new Q,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=i,i}}}function pA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let mA=0;function gA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function _A(o){const e=new dA,i=pA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Q);const l=new Q,u=new Ze,d=new Ze;function h(p,v){let _=0,x=0,E=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let w=0,R=0,y=0,S=0,P=0,C=0,F=0,Y=0,H=0,O=0,et=0;p.sort(gA);const L=v===!0?Math.PI:1;for(let Z=0,lt=p.length;Z<lt;Z++){const I=p[Z],ut=I.color,ct=I.intensity,z=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)_+=ut.r*ct*L,x+=ut.g*ct*L,E+=ut.b*ct*L;else if(I.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(I.sh.coefficients[G],ct);et++}else if(I.isDirectionalLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*L),I.castShadow){const vt=I.shadow,_t=i.get(I);_t.shadowBias=vt.bias,_t.shadowNormalBias=vt.normalBias,_t.shadowRadius=vt.radius,_t.shadowMapSize=vt.mapSize,r.directionalShadow[w]=_t,r.directionalShadowMap[w]=X,r.directionalShadowMatrix[w]=I.shadow.matrix,C++}r.directional[w]=G,w++}else if(I.isSpotLight){const G=e.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(ut).multiplyScalar(ct*L),G.distance=z,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,r.spot[y]=G;const vt=I.shadow;if(I.map&&(r.spotLightMap[H]=I.map,H++,vt.updateMatrices(I),I.castShadow&&O++),r.spotLightMatrix[y]=vt.matrix,I.castShadow){const _t=i.get(I);_t.shadowBias=vt.bias,_t.shadowNormalBias=vt.normalBias,_t.shadowRadius=vt.radius,_t.shadowMapSize=vt.mapSize,r.spotShadow[y]=_t,r.spotShadowMap[y]=X,Y++}y++}else if(I.isRectAreaLight){const G=e.get(I);G.color.copy(ut).multiplyScalar(ct),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=G,S++}else if(I.isPointLight){const G=e.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity*L),G.distance=I.distance,G.decay=I.decay,I.castShadow){const vt=I.shadow,_t=i.get(I);_t.shadowBias=vt.bias,_t.shadowNormalBias=vt.normalBias,_t.shadowRadius=vt.radius,_t.shadowMapSize=vt.mapSize,_t.shadowCameraNear=vt.camera.near,_t.shadowCameraFar=vt.camera.far,r.pointShadow[R]=_t,r.pointShadowMap[R]=X,r.pointShadowMatrix[R]=I.shadow.matrix,F++}r.point[R]=G,R++}else if(I.isHemisphereLight){const G=e.get(I);G.skyColor.copy(I.color).multiplyScalar(ct*L),G.groundColor.copy(I.groundColor).multiplyScalar(ct*L),r.hemi[P]=G,P++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=E;const A=r.hash;(A.directionalLength!==w||A.pointLength!==R||A.spotLength!==y||A.rectAreaLength!==S||A.hemiLength!==P||A.numDirectionalShadows!==C||A.numPointShadows!==F||A.numSpotShadows!==Y||A.numSpotMaps!==H||A.numLightProbes!==et)&&(r.directional.length=w,r.spot.length=y,r.rectArea.length=S,r.point.length=R,r.hemi.length=P,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=Y,r.spotShadowMap.length=Y,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=Y+H-O,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=et,A.directionalLength=w,A.pointLength=R,A.spotLength=y,A.rectAreaLength=S,A.hemiLength=P,A.numDirectionalShadows=C,A.numPointShadows=F,A.numSpotShadows=Y,A.numSpotMaps=H,A.numLightProbes=et,r.version=mA++)}function m(p,v){let _=0,x=0,E=0,w=0,R=0;const y=v.matrixWorldInverse;for(let S=0,P=p.length;S<P;S++){const C=p[S];if(C.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),_++}else if(C.isSpotLight){const F=r.spot[E];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),E++}else if(C.isRectAreaLight){const F=r.rectArea[w];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(y),d.identity(),u.copy(C.matrixWorld),u.premultiply(y),d.extractRotation(u),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),w++}else if(C.isPointLight){const F=r.point[x];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(y),x++}else if(C.isHemisphereLight){const F=r.hemi[R];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function r0(o){const e=new _A(o),i=[],r=[];function l(){i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(v){e.setup(i,v)}function m(v){e.setupView(i,v)}return{init:l,state:{lightsArray:i,shadowsArray:r,lights:e,transmissionRenderTarget:null},setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function vA(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new r0(o),e.set(l,[h])):u>=d.length?(h=new r0(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class xA extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=my,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SA extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EA(o,e,i){let r=new Wh;const l=new ae,u=new ae,d=new mn,h=new xA({depthPacking:gy}),m=new SA,p={},v=i.maxTextureSize,_={[Xa]:Gn,[Gn]:Xa,[ra]:ra},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:yA,fragmentShader:MA}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const w=new oa;w.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ti(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M0;let S=this.type;this.render=function(H,O,et){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const L=o.getRenderTarget(),A=o.getActiveCubeFace(),Z=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(Ga),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const I=S!==aa&&this.type===aa,ut=S===aa&&this.type!==aa;for(let ct=0,z=H.length;ct<z;ct++){const X=H[ct],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const vt=G.getFrameExtents();if(l.multiply(vt),u.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/vt.x),l.x=u.x*vt.x,G.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/vt.y),l.y=u.y*vt.y,G.mapSize.y=u.y)),G.map===null||I===!0||ut===!0){const N=this.type!==aa?{minFilter:fi,magFilter:fi}:{};G.map!==null&&G.map.dispose(),G.map=new yr(l.x,l.y,N),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const _t=G.getViewportCount();for(let N=0;N<_t;N++){const j=G.getViewport(N);d.set(u.x*j.x,u.y*j.y,u.x*j.z,u.y*j.w),lt.viewport(d),G.updateMatrices(X,N),r=G.getFrustum(),F(O,et,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===aa&&P(G,et),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(L,A,Z)};function P(H,O){const et=e.update(R);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new yr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(O,null,et,x,R,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(O,null,et,E,R,null)}function C(H,O,et,L){let A=null;const Z=et.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(Z!==void 0)A=Z;else if(A=et.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const lt=A.uuid,I=O.uuid;let ut=p[lt];ut===void 0&&(ut={},p[lt]=ut);let ct=ut[I];ct===void 0&&(ct=A.clone(),ut[I]=ct,O.addEventListener("dispose",Y)),A=ct}if(A.visible=O.visible,A.wireframe=O.wireframe,L===aa?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:_[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,et.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const lt=o.properties.get(A);lt.light=et}return A}function F(H,O,et,L,A){if(H.visible===!1)return;if(H.layers.test(O.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===aa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,H.matrixWorld);const I=e.update(H),ut=H.material;if(Array.isArray(ut)){const ct=I.groups;for(let z=0,X=ct.length;z<X;z++){const G=ct[z],vt=ut[G.materialIndex];if(vt&&vt.visible){const _t=C(H,vt,L,A);H.onBeforeShadow(o,H,O,et,I,_t,G),o.renderBufferDirect(et,null,I,_t,H,G),H.onAfterShadow(o,H,O,et,I,_t,G)}}}else if(ut.visible){const ct=C(H,ut,L,A);H.onBeforeShadow(o,H,O,et,I,ct,null),o.renderBufferDirect(et,null,I,ct,H,null),H.onAfterShadow(o,H,O,et,I,ct,null)}}const lt=H.children;for(let I=0,ut=lt.length;I<ut;I++)F(lt[I],O,et,L,A)}function Y(H){H.target.removeEventListener("dispose",Y);for(const et in p){const L=p[et],A=H.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function TA(o){function e(){let M=!1;const st=new mn;let xt=null;const Ct=new mn(0,0,0,0);return{setMask:function(zt){xt!==zt&&!M&&(o.colorMask(zt,zt,zt,zt),xt=zt)},setLocked:function(zt){M=zt},setClear:function(zt,oe,fe,we,tn){tn===!0&&(zt*=we,oe*=we,fe*=we),st.set(zt,oe,fe,we),Ct.equals(st)===!1&&(o.clearColor(zt,oe,fe,we),Ct.copy(st))},reset:function(){M=!1,xt=null,Ct.set(-1,0,0,0)}}}function i(){let M=!1,st=null,xt=null,Ct=null;return{setTest:function(zt){zt?Tt(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(zt){st!==zt&&!M&&(o.depthMask(zt),st=zt)},setFunc:function(zt){if(xt!==zt){switch(zt){case VS:o.depthFunc(o.NEVER);break;case kS:o.depthFunc(o.ALWAYS);break;case XS:o.depthFunc(o.LESS);break;case bc:o.depthFunc(o.LEQUAL);break;case qS:o.depthFunc(o.EQUAL);break;case WS:o.depthFunc(o.GEQUAL);break;case YS:o.depthFunc(o.GREATER);break;case jS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=zt}},setLocked:function(zt){M=zt},setClear:function(zt){Ct!==zt&&(o.clearDepth(zt),Ct=zt)},reset:function(){M=!1,st=null,xt=null,Ct=null}}}function r(){let M=!1,st=null,xt=null,Ct=null,zt=null,oe=null,fe=null,we=null,tn=null;return{setTest:function(Re){M||(Re?Tt(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Re){st!==Re&&!M&&(o.stencilMask(Re),st=Re)},setFunc:function(Re,Xe,Be){(xt!==Re||Ct!==Xe||zt!==Be)&&(o.stencilFunc(Re,Xe,Be),xt=Re,Ct=Xe,zt=Be)},setOp:function(Re,Xe,Be){(oe!==Re||fe!==Xe||we!==Be)&&(o.stencilOp(Re,Xe,Be),oe=Re,fe=Xe,we=Be)},setLocked:function(Re){M=Re},setClear:function(Re){tn!==Re&&(o.clearStencil(Re),tn=Re)},reset:function(){M=!1,st=null,xt=null,Ct=null,zt=null,oe=null,fe=null,we=null,tn=null}}}const l=new e,u=new i,d=new r,h=new WeakMap,m=new WeakMap;let p={},v={},_=new WeakMap,x=[],E=null,w=!1,R=null,y=null,S=null,P=null,C=null,F=null,Y=null,H=new Te(0,0,0),O=0,et=!1,L=null,A=null,Z=null,lt=null,I=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ct=!1,z=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),ct=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ct=z>=2);let G=null,vt={};const _t=o.getParameter(o.SCISSOR_BOX),N=o.getParameter(o.VIEWPORT),j=new mn().fromArray(_t),Mt=new mn().fromArray(N);function k(M,st,xt,Ct){const zt=new Uint8Array(4),oe=o.createTexture();o.bindTexture(M,oe),o.texParameteri(M,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(M,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let fe=0;fe<xt;fe++)M===o.TEXTURE_3D||M===o.TEXTURE_2D_ARRAY?o.texImage3D(st,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(st+fe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return oe}const at={};at[o.TEXTURE_2D]=k(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=k(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=k(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=k(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),u.setFunc(bc),Et(!1),Pt(Gg),Tt(o.CULL_FACE),jt(Ga);function Tt(M){p[M]!==!0&&(o.enable(M),p[M]=!0)}function bt(M){p[M]!==!1&&(o.disable(M),p[M]=!1)}function Gt(M,st){return v[M]!==st?(o.bindFramebuffer(M,st),v[M]=st,M===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=st),M===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(M,st){let xt=x,Ct=!1;if(M){xt=_.get(st),xt===void 0&&(xt=[],_.set(st,xt));const zt=M.textures;if(xt.length!==zt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let oe=0,fe=zt.length;oe<fe;oe++)xt[oe]=o.COLOR_ATTACHMENT0+oe;xt.length=zt.length,Ct=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(xt)}function te(M){return E!==M?(o.useProgram(M),E=M,!0):!1}const nt={[_r]:o.FUNC_ADD,[bS]:o.FUNC_SUBTRACT,[AS]:o.FUNC_REVERSE_SUBTRACT};nt[RS]=o.MIN,nt[CS]=o.MAX;const ee={[wS]:o.ZERO,[DS]:o.ONE,[US]:o.SRC_COLOR,[Oh]:o.SRC_ALPHA,[IS]:o.SRC_ALPHA_SATURATE,[PS]:o.DST_COLOR,[NS]:o.DST_ALPHA,[LS]:o.ONE_MINUS_SRC_COLOR,[Ph]:o.ONE_MINUS_SRC_ALPHA,[zS]:o.ONE_MINUS_DST_COLOR,[OS]:o.ONE_MINUS_DST_ALPHA,[BS]:o.CONSTANT_COLOR,[FS]:o.ONE_MINUS_CONSTANT_COLOR,[HS]:o.CONSTANT_ALPHA,[GS]:o.ONE_MINUS_CONSTANT_ALPHA};function jt(M,st,xt,Ct,zt,oe,fe,we,tn,Re){if(M===Ga){w===!0&&(bt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),M!==TS){if(M!==R||Re!==et){if((y!==_r||C!==_r)&&(o.blendEquation(o.FUNC_ADD),y=_r,C=_r),Re)switch(M){case ws:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFunc(o.ONE,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Xg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case ws:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case kg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Xg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}S=null,P=null,F=null,Y=null,H.set(0,0,0),O=0,R=M,et=Re}return}zt=zt||st,oe=oe||xt,fe=fe||Ct,(st!==y||zt!==C)&&(o.blendEquationSeparate(nt[st],nt[zt]),y=st,C=zt),(xt!==S||Ct!==P||oe!==F||fe!==Y)&&(o.blendFuncSeparate(ee[xt],ee[Ct],ee[oe],ee[fe]),S=xt,P=Ct,F=oe,Y=fe),(we.equals(H)===!1||tn!==O)&&(o.blendColor(we.r,we.g,we.b,tn),H.copy(we),O=tn),R=M,et=!1}function Rt(M,st){M.side===ra?bt(o.CULL_FACE):Tt(o.CULL_FACE);let xt=M.side===Gn;st&&(xt=!xt),Et(xt),M.blending===ws&&M.transparent===!1?jt(Ga):jt(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),u.setFunc(M.depthFunc),u.setTest(M.depthTest),u.setMask(M.depthWrite),l.setMask(M.colorWrite);const Ct=M.stencilWrite;d.setTest(Ct),Ct&&(d.setMask(M.stencilWriteMask),d.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),d.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),T(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(M){L!==M&&(M?o.frontFace(o.CW):o.frontFace(o.CCW),L=M)}function Pt(M){M!==yS?(Tt(o.CULL_FACE),M!==A&&(M===Gg?o.cullFace(o.BACK):M===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),A=M}function D(M){M!==Z&&(ct&&o.lineWidth(M),Z=M)}function T(M,st,xt){M?(Tt(o.POLYGON_OFFSET_FILL),(lt!==st||I!==xt)&&(o.polygonOffset(st,xt),lt=st,I=xt)):bt(o.POLYGON_OFFSET_FILL)}function W(M){M?Tt(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function J(M){M===void 0&&(M=o.TEXTURE0+ut-1),G!==M&&(o.activeTexture(M),G=M)}function ot(M,st,xt){xt===void 0&&(G===null?xt=o.TEXTURE0+ut-1:xt=G);let Ct=vt[xt];Ct===void 0&&(Ct={type:void 0,texture:void 0},vt[xt]=Ct),(Ct.type!==M||Ct.texture!==st)&&(G!==xt&&(o.activeTexture(xt),G=xt),o.bindTexture(M,st||at[M]),Ct.type=M,Ct.texture=st)}function pt(){const M=vt[G];M!==void 0&&M.type!==void 0&&(o.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function Ut(){try{o.compressedTexImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ot(){try{o.texSubImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function wt(){try{o.texSubImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function At(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Dt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Zt(){try{o.texStorage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function It(){try{o.texStorage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ft(){try{o.texImage2D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function _e(){try{o.texImage3D.apply(o,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(M){j.equals(M)===!1&&(o.scissor(M.x,M.y,M.z,M.w),j.copy(M))}function ne(M){Mt.equals(M)===!1&&(o.viewport(M.x,M.y,M.z,M.w),Mt.copy(M))}function ue(M,st){let xt=m.get(st);xt===void 0&&(xt=new WeakMap,m.set(st,xt));let Ct=xt.get(M);Ct===void 0&&(Ct=o.getUniformBlockIndex(st,M.name),xt.set(M,Ct))}function ie(M,st){const Ct=m.get(st).get(M);h.get(st)!==Ct&&(o.uniformBlockBinding(st,Ct,M.__bindingPointIndex),h.set(st,Ct))}function qt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},G=null,vt={},v={},_=new WeakMap,x=[],E=null,w=!1,R=null,y=null,S=null,P=null,C=null,F=null,Y=null,H=new Te(0,0,0),O=0,et=!1,L=null,A=null,Z=null,lt=null,I=null,j.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:Tt,disable:bt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:te,setBlending:jt,setMaterial:Rt,setFlipSided:Et,setCullFace:Pt,setLineWidth:D,setPolygonOffset:T,setScissorTest:W,activeTexture:J,bindTexture:ot,unbindTexture:pt,compressedTexImage2D:Ut,compressedTexImage3D:mt,texImage2D:Ft,texImage3D:_e,updateUBOMapping:ue,uniformBlockBinding:ie,texStorage2D:Zt,texStorage3D:It,texSubImage2D:Ot,texSubImage3D:wt,compressedTexSubImage2D:At,compressedTexSubImage3D:Dt,scissor:de,viewport:ne,reset:qt}}function bA(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ae,v=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,T){return E?new OffscreenCanvas(D,T):Uc("canvas")}function R(D,T,W){let J=1;const ot=Pt(D);if((ot.width>W||ot.height>W)&&(J=W/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pt=Math.floor(J*ot.width),Ut=Math.floor(J*ot.height);_===void 0&&(_=w(pt,Ut));const mt=T?w(pt,Ut):_;return mt.width=pt,mt.height=Ut,mt.getContext("2d").drawImage(D,0,0,pt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+pt+"x"+Ut+")."),mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),D;return D}function y(D){return D.generateMipmaps&&D.minFilter!==fi&&D.minFilter!==Mi}function S(D){o.generateMipmap(D)}function P(D,T,W,J,ot=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pt=T;if(T===o.RED&&(W===o.FLOAT&&(pt=o.R32F),W===o.HALF_FLOAT&&(pt=o.R16F),W===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(pt=o.R8UI),W===o.UNSIGNED_SHORT&&(pt=o.R16UI),W===o.UNSIGNED_INT&&(pt=o.R32UI),W===o.BYTE&&(pt=o.R8I),W===o.SHORT&&(pt=o.R16I),W===o.INT&&(pt=o.R32I)),T===o.RG&&(W===o.FLOAT&&(pt=o.RG32F),W===o.HALF_FLOAT&&(pt=o.RG16F),W===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(pt=o.RG8UI),W===o.UNSIGNED_SHORT&&(pt=o.RG16UI),W===o.UNSIGNED_INT&&(pt=o.RG32UI),W===o.BYTE&&(pt=o.RG8I),W===o.SHORT&&(pt=o.RG16I),W===o.INT&&(pt=o.RG32I)),T===o.RGB&&W===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),T===o.RGBA){const Ut=ot?Rc:ze.getTransfer(J);W===o.FLOAT&&(pt=o.RGBA32F),W===o.HALF_FLOAT&&(pt=o.RGBA16F),W===o.UNSIGNED_BYTE&&(pt=Ut===ke?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function C(D,T){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==fi&&D.minFilter!==Mi?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),H(T),T.isVideoTexture&&v.delete(T)}function Y(D){const T=D.target;T.removeEventListener("dispose",Y),et(T)}function H(D){const T=r.get(D);if(T.__webglInit===void 0)return;const W=D.source,J=x.get(W);if(J){const ot=J[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&O(D),Object.keys(J).length===0&&x.delete(W)}r.remove(D)}function O(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const W=D.source,J=x.get(W);delete J[T.__cacheKey],d.memory.textures--}function et(D){const T=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let ot=0;ot<T.__webglFramebuffer[J].length;ot++)o.deleteFramebuffer(T.__webglFramebuffer[J][ot]);else o.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)o.deleteFramebuffer(T.__webglFramebuffer[J]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=D.textures;for(let J=0,ot=W.length;J<ot;J++){const pt=r.get(W[J]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),d.memory.textures--),r.remove(W[J])}r.remove(D)}let L=0;function A(){L=0}function Z(){const D=L;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),L+=1,D}function lt(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function I(D,T){const W=r.get(D);if(D.isVideoTexture&&Rt(D),D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,D,T);return}}i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+T)}function ut(D,T){const W=r.get(D);if(D.version>0&&W.__version!==D.version){j(W,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+T)}function ct(D,T){const W=r.get(D);if(D.version>0&&W.__version!==D.version){j(W,D,T);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+T)}function z(D,T){const W=r.get(D);if(D.version>0&&W.__version!==D.version){Mt(W,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+T)}const X={[Bh]:o.REPEAT,[xr]:o.CLAMP_TO_EDGE,[Fh]:o.MIRRORED_REPEAT},G={[fi]:o.NEAREST,[ay]:o.NEAREST_MIPMAP_NEAREST,[Ql]:o.NEAREST_MIPMAP_LINEAR,[Mi]:o.LINEAR,[Zf]:o.LINEAR_MIPMAP_NEAREST,[Sr]:o.LINEAR_MIPMAP_LINEAR},vt={[vy]:o.NEVER,[Ty]:o.ALWAYS,[xy]:o.LESS,[O0]:o.LEQUAL,[Sy]:o.EQUAL,[Ey]:o.GEQUAL,[yy]:o.GREATER,[My]:o.NOTEQUAL};function _t(D,T){if(T.type===Ha&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Mi||T.magFilter===Zf||T.magFilter===Ql||T.magFilter===Sr||T.minFilter===Mi||T.minFilter===Zf||T.minFilter===Ql||T.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,X[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,X[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,X[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,G[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,vt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===fi||T.minFilter!==Ql&&T.minFilter!==Sr||T.type===Ha&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function N(D,T){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const J=T.source;let ot=x.get(J);ot===void 0&&(ot={},x.set(J,ot));const pt=lt(T);if(pt!==D.__cacheKey){ot[pt]===void 0&&(ot[pt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),ot[pt].usedTimes++;const Ut=ot[D.__cacheKey];Ut!==void 0&&(ot[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&O(T)),D.__cacheKey=pt,D.__webglTexture=ot[pt].texture}return W}function j(D,T,W){let J=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=o.TEXTURE_3D);const ot=N(D,T),pt=T.source;i.bindTexture(J,D.__webglTexture,o.TEXTURE0+W);const Ut=r.get(pt);if(pt.version!==Ut.__version||ot===!0){i.activeTexture(o.TEXTURE0+W);const mt=ze.getPrimaries(ze.workingColorSpace),Ot=T.colorSpace===Fa?null:ze.getPrimaries(T.colorSpace),wt=T.colorSpace===Fa||mt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let At=R(T.image,!1,l.maxTextureSize);At=Et(T,At);const Dt=u.convert(T.format,T.colorSpace),Zt=u.convert(T.type);let It=P(T.internalFormat,Dt,Zt,T.colorSpace,T.isVideoTexture);_t(J,T);let Ft;const _e=T.mipmaps,de=T.isVideoTexture!==!0&&It!==L0,ne=Ut.__version===void 0||ot===!0,ue=pt.dataReady,ie=C(T,At);if(T.isDepthTexture)It=o.DEPTH_COMPONENT16,T.type===Ha?It=o.DEPTH_COMPONENT32F:T.type===Os?It=o.DEPTH_COMPONENT24:T.type===Fo&&(It=o.DEPTH24_STENCIL8),ne&&(de?i.texStorage2D(o.TEXTURE_2D,1,It,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,It,At.width,At.height,0,Dt,Zt,null));else if(T.isDataTexture)if(_e.length>0){de&&ne&&i.texStorage2D(o.TEXTURE_2D,ie,It,_e[0].width,_e[0].height);for(let qt=0,M=_e.length;qt<M;qt++)Ft=_e[qt],de?ue&&i.texSubImage2D(o.TEXTURE_2D,qt,0,0,Ft.width,Ft.height,Dt,Zt,Ft.data):i.texImage2D(o.TEXTURE_2D,qt,It,Ft.width,Ft.height,0,Dt,Zt,Ft.data);T.generateMipmaps=!1}else de?(ne&&i.texStorage2D(o.TEXTURE_2D,ie,It,At.width,At.height),ue&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At.width,At.height,Dt,Zt,At.data)):i.texImage2D(o.TEXTURE_2D,0,It,At.width,At.height,0,Dt,Zt,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){de&&ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ie,It,_e[0].width,_e[0].height,At.depth);for(let qt=0,M=_e.length;qt<M;qt++)Ft=_e[qt],T.format!==Ui?Dt!==null?de?ue&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,qt,0,0,0,Ft.width,Ft.height,At.depth,Dt,Ft.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,qt,It,Ft.width,Ft.height,At.depth,0,Ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?ue&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,qt,0,0,0,Ft.width,Ft.height,At.depth,Dt,Zt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,qt,It,Ft.width,Ft.height,At.depth,0,Dt,Zt,Ft.data)}else{de&&ne&&i.texStorage2D(o.TEXTURE_2D,ie,It,_e[0].width,_e[0].height);for(let qt=0,M=_e.length;qt<M;qt++)Ft=_e[qt],T.format!==Ui?Dt!==null?de?ue&&i.compressedTexSubImage2D(o.TEXTURE_2D,qt,0,0,Ft.width,Ft.height,Dt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,qt,It,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?ue&&i.texSubImage2D(o.TEXTURE_2D,qt,0,0,Ft.width,Ft.height,Dt,Zt,Ft.data):i.texImage2D(o.TEXTURE_2D,qt,It,Ft.width,Ft.height,0,Dt,Zt,Ft.data)}else if(T.isDataArrayTexture)de?(ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ie,It,At.width,At.height,At.depth),ue&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Dt,Zt,At.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,It,At.width,At.height,At.depth,0,Dt,Zt,At.data);else if(T.isData3DTexture)de?(ne&&i.texStorage3D(o.TEXTURE_3D,ie,It,At.width,At.height,At.depth),ue&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Dt,Zt,At.data)):i.texImage3D(o.TEXTURE_3D,0,It,At.width,At.height,At.depth,0,Dt,Zt,At.data);else if(T.isFramebufferTexture){if(ne)if(de)i.texStorage2D(o.TEXTURE_2D,ie,It,At.width,At.height);else{let qt=At.width,M=At.height;for(let st=0;st<ie;st++)i.texImage2D(o.TEXTURE_2D,st,It,qt,M,0,Dt,Zt,null),qt>>=1,M>>=1}}else if(_e.length>0){if(de&&ne){const qt=Pt(_e[0]);i.texStorage2D(o.TEXTURE_2D,ie,It,qt.width,qt.height)}for(let qt=0,M=_e.length;qt<M;qt++)Ft=_e[qt],de?ue&&i.texSubImage2D(o.TEXTURE_2D,qt,0,0,Dt,Zt,Ft):i.texImage2D(o.TEXTURE_2D,qt,It,Dt,Zt,Ft);T.generateMipmaps=!1}else if(de){if(ne){const qt=Pt(At);i.texStorage2D(o.TEXTURE_2D,ie,It,qt.width,qt.height)}ue&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,Zt,At)}else i.texImage2D(o.TEXTURE_2D,0,It,Dt,Zt,At);y(T)&&S(J),Ut.__version=pt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Mt(D,T,W){if(T.image.length!==6)return;const J=N(D,T),ot=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const pt=r.get(ot);if(ot.version!==pt.__version||J===!0){i.activeTexture(o.TEXTURE0+W);const Ut=ze.getPrimaries(ze.workingColorSpace),mt=T.colorSpace===Fa?null:ze.getPrimaries(T.colorSpace),Ot=T.colorSpace===Fa||Ut===mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const wt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Dt=[];for(let M=0;M<6;M++)!wt&&!At?Dt[M]=R(T.image[M],!0,l.maxCubemapSize):Dt[M]=At?T.image[M].image:T.image[M],Dt[M]=Et(T,Dt[M]);const Zt=Dt[0],It=u.convert(T.format,T.colorSpace),Ft=u.convert(T.type),_e=P(T.internalFormat,It,Ft,T.colorSpace),de=T.isVideoTexture!==!0,ne=pt.__version===void 0||J===!0,ue=ot.dataReady;let ie=C(T,Zt);_t(o.TEXTURE_CUBE_MAP,T);let qt;if(wt){de&&ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ie,_e,Zt.width,Zt.height);for(let M=0;M<6;M++){qt=Dt[M].mipmaps;for(let st=0;st<qt.length;st++){const xt=qt[st];T.format!==Ui?It!==null?de?ue&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st,0,0,xt.width,xt.height,It,xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st,_e,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st,0,0,xt.width,xt.height,It,Ft,xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st,_e,xt.width,xt.height,0,It,Ft,xt.data)}}}else{if(qt=T.mipmaps,de&&ne){qt.length>0&&ie++;const M=Pt(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ie,_e,M.width,M.height)}for(let M=0;M<6;M++)if(At){de?ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,Dt[M].width,Dt[M].height,It,Ft,Dt[M].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,_e,Dt[M].width,Dt[M].height,0,It,Ft,Dt[M].data);for(let st=0;st<qt.length;st++){const Ct=qt[st].image[M].image;de?ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st+1,0,0,Ct.width,Ct.height,It,Ft,Ct.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st+1,_e,Ct.width,Ct.height,0,It,Ft,Ct.data)}}else{de?ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,0,0,It,Ft,Dt[M]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,0,_e,It,Ft,Dt[M]);for(let st=0;st<qt.length;st++){const xt=qt[st];de?ue&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st+1,0,0,It,Ft,xt.image[M]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+M,st+1,_e,It,Ft,xt.image[M])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),pt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function k(D,T,W,J,ot,pt){const Ut=u.convert(W.format,W.colorSpace),mt=u.convert(W.type),Ot=P(W.internalFormat,Ut,mt,W.colorSpace);if(!r.get(T).__hasExternalTextures){const At=Math.max(1,T.width>>pt),Dt=Math.max(1,T.height>>pt);ot===o.TEXTURE_3D||ot===o.TEXTURE_2D_ARRAY?i.texImage3D(ot,pt,Ot,At,Dt,T.depth,0,Ut,mt,null):i.texImage2D(ot,pt,Ot,At,Dt,0,Ut,mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),jt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,J,ot,r.get(W).__webglTexture,0,ee(T)):(ot===o.TEXTURE_2D||ot>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,J,ot,r.get(W).__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function at(D,T,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let J=o.DEPTH_COMPONENT24;if(W||jt(T)){const ot=T.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Ha?J=o.DEPTH_COMPONENT32F:ot.type===Os&&(J=o.DEPTH_COMPONENT24));const pt=ee(T);jt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,J,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,J,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,J,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const J=ee(T);W&&jt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,J,o.DEPTH24_STENCIL8,T.width,T.height):jt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,J,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const J=T.textures;for(let ot=0;ot<J.length;ot++){const pt=J[ot],Ut=u.convert(pt.format,pt.colorSpace),mt=u.convert(pt.type),Ot=P(pt.internalFormat,Ut,mt,pt.colorSpace),wt=ee(T);W&&jt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,Ot,T.width,T.height):jt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,Ot,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ot,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const J=r.get(T.depthTexture).__webglTexture,ot=ee(T);if(T.depthTexture.format===Ds)jt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,J,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,J,0);else if(T.depthTexture.format===Bo)jt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,J,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function bt(D){const T=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Tt(T.__webglFramebuffer,D)}else if(W){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=o.createRenderbuffer(),at(T.__webglDepthbuffer[J],D,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),at(T.__webglDepthbuffer,D,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(D,T,W){const J=r.get(D);T!==void 0&&k(J.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&bt(D)}function Bt(D){const T=D.texture,W=r.get(D),J=r.get(T);D.addEventListener("dispose",Y);const ot=D.textures,pt=D.isWebGLCubeRenderTarget===!0,Ut=ot.length>1;if(Ut||(J.__webglTexture===void 0&&(J.__webglTexture=o.createTexture()),J.__version=T.version,d.memory.textures++),pt){W.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[mt]=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)W.__webglFramebuffer[mt][Ot]=o.createFramebuffer()}else W.__webglFramebuffer[mt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)W.__webglFramebuffer[mt]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let mt=0,Ot=ot.length;mt<Ot;mt++){const wt=r.get(ot[mt]);wt.__webglTexture===void 0&&(wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&jt(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let mt=0;mt<ot.length;mt++){const Ot=ot[mt];W.__webglColorRenderbuffer[mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[mt]);const wt=u.convert(Ot.format,Ot.colorSpace),At=u.convert(Ot.type),Dt=P(Ot.internalFormat,wt,At,Ot.colorSpace,D.isXRRenderTarget===!0),Zt=ee(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Dt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+mt,o.RENDERBUFFER,W.__webglColorRenderbuffer[mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),at(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture),_t(o.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ot=0;Ot<T.mipmaps.length;Ot++)k(W.__webglFramebuffer[mt][Ot],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Ot);else k(W.__webglFramebuffer[mt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);y(T)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let mt=0,Ot=ot.length;mt<Ot;mt++){const wt=ot[mt],At=r.get(wt);i.bindTexture(o.TEXTURE_2D,At.__webglTexture),_t(o.TEXTURE_2D,wt),k(W.__webglFramebuffer,D,wt,o.COLOR_ATTACHMENT0+mt,o.TEXTURE_2D,0),y(wt)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let mt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(mt,J.__webglTexture),_t(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ot=0;Ot<T.mipmaps.length;Ot++)k(W.__webglFramebuffer[Ot],D,T,o.COLOR_ATTACHMENT0,mt,Ot);else k(W.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,mt,0);y(T)&&S(mt),i.unbindTexture()}D.depthBuffer&&bt(D)}function te(D){const T=D.textures;for(let W=0,J=T.length;W<J;W++){const ot=T[W];if(y(ot)){const pt=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ut=r.get(ot).__webglTexture;i.bindTexture(pt,Ut),S(pt),i.unbindTexture()}}}function nt(D){if(D.samples>0&&jt(D)===!1){const T=D.textures,W=D.width,J=D.height;let ot=o.COLOR_BUFFER_BIT;const pt=[],Ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=r.get(D),Ot=T.length>1;if(Ot)for(let wt=0;wt<T.length;wt++)i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let wt=0;wt<T.length;wt++){pt.push(o.COLOR_ATTACHMENT0+wt),D.depthBuffer&&pt.push(Ut);const At=mt.__ignoreDepthValues!==void 0?mt.__ignoreDepthValues:!1;if(At===!1&&(D.depthBuffer&&(ot|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&mt.__isTransmissionRenderTarget!==!0&&(ot|=o.STENCIL_BUFFER_BIT)),Ot&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]),At===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ut]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ut])),Ot){const Dt=r.get(T[wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Dt,0)}o.blitFramebuffer(0,0,W,J,0,0,W,J,ot,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,pt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let wt=0;wt<T.length;wt++){i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,mt.__webglColorRenderbuffer[wt]);const At=r.get(T[wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}}function ee(D){return Math.min(l.maxSamples,D.samples)}function jt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Rt(D){const T=d.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Et(D,T){const W=D.colorSpace,J=D.format,ot=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Wa&&W!==Fa&&(ze.getTransfer(W)===ke?(J!==Ui||ot!==ka)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Pt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=A,this.setTexture2D=I,this.setTexture2DArray=ut,this.setTexture3D=ct,this.setTextureCube=z,this.rebindTextures=Gt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=k,this.useMultisampledRTT=jt}function AA(o,e){function i(r,l=Fa){let u;const d=ze.getTransfer(l);if(r===ka)return o.UNSIGNED_BYTE;if(r===R0)return o.UNSIGNED_SHORT_4_4_4_4;if(r===C0)return o.UNSIGNED_SHORT_5_5_5_1;if(r===oy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ry)return o.BYTE;if(r===sy)return o.SHORT;if(r===b0)return o.UNSIGNED_SHORT;if(r===A0)return o.INT;if(r===Os)return o.UNSIGNED_INT;if(r===Ha)return o.FLOAT;if(r===Ac)return o.HALF_FLOAT;if(r===ly)return o.ALPHA;if(r===cy)return o.RGB;if(r===Ui)return o.RGBA;if(r===uy)return o.LUMINANCE;if(r===fy)return o.LUMINANCE_ALPHA;if(r===Ds)return o.DEPTH_COMPONENT;if(r===Bo)return o.DEPTH_STENCIL;if(r===hy)return o.RED;if(r===w0)return o.RED_INTEGER;if(r===dy)return o.RG;if(r===D0)return o.RG_INTEGER;if(r===U0)return o.RGBA_INTEGER;if(r===Kf||r===Qf||r===Jf||r===$f)if(d===ke)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Kf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Qf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$f)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Kf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Qf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$f)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===qg||r===Wg||r===Yg||r===jg)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===qg)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wg)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yg)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jg)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===L0)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zg||r===Kg)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Zg)return d===ke?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Kg)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qg||r===Jg||r===$g||r===t_||r===e_||r===n_||r===i_||r===a_||r===r_||r===s_||r===o_||r===l_||r===c_||r===u_)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Qg)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jg)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$g)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===t_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===e_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===n_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===i_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===a_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===r_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===s_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===o_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===l_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===c_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===u_)return d===ke?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===th||r===f_||r===h_)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===th)return d===ke?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===f_)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===h_)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===py||r===d_||r===p_||r===m_)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===th)return u.COMPRESSED_RED_RGTC1_EXT;if(r===d_)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===p_)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===m_)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class RA extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cs extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const CA={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),S=this._getHandJoint(p,R);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=v.position.distanceTo(_.position),E=.02,w=.005;p.inputState.pinching&&x>E+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=E-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(CA)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Cs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const wA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Vn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new qa({vertexShader:wA,fragmentShader:DA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Ti(new Pc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class LA extends Tr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,_=null,x=null,E=null,w=null;const R=new UA,y=i.getContextAttributes();let S=null,P=null;const C=[],F=[],Y=new ae;let H=null;const O=new ui;O.layers.enable(1),O.viewport=new mn;const et=new ui;et.layers.enable(2),et.viewport=new mn;const L=[O,et],A=new RA;A.layers.enable(1),A.layers.enable(2);let Z=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let at=C[k];return at===void 0&&(at=new Ah,C[k]=at),at.getTargetRaySpace()},this.getControllerGrip=function(k){let at=C[k];return at===void 0&&(at=new Ah,C[k]=at),at.getGripSpace()},this.getHand=function(k){let at=C[k];return at===void 0&&(at=new Ah,C[k]=at),at.getHandSpace()};function I(k){const at=F.indexOf(k.inputSource);if(at===-1)return;const Tt=C[at];Tt!==void 0&&(Tt.update(k.inputSource,k.frame,p||d),Tt.dispatchEvent({type:k.type,data:k.inputSource}))}function ut(){l.removeEventListener("select",I),l.removeEventListener("selectstart",I),l.removeEventListener("selectend",I),l.removeEventListener("squeeze",I),l.removeEventListener("squeezestart",I),l.removeEventListener("squeezeend",I),l.removeEventListener("end",ut),l.removeEventListener("inputsourceschange",ct);for(let k=0;k<C.length;k++){const at=F[k];at!==null&&(F[k]=null,C[k].disconnect(at))}Z=null,lt=null,R.reset(),e.setRenderTarget(S),E=null,x=null,_=null,l=null,P=null,Mt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(Y.width,Y.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){u=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){h=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",I),l.addEventListener("selectstart",I),l.addEventListener("selectend",I),l.addEventListener("squeeze",I),l.addEventListener("squeezestart",I),l.addEventListener("squeezeend",I),l.addEventListener("end",ut),l.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(Y),l.renderState.layers===void 0){const at={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,at),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),P=new yr(E.framebufferWidth,E.framebufferHeight,{format:Ui,type:ka,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let at=null,Tt=null,bt=null;y.depth&&(bt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,at=y.stencil?Bo:Ds,Tt=y.stencil?Fo:Os);const Gt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:u};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(Gt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new yr(x.textureWidth,x.textureHeight,{format:Ui,type:ka,depthTexture:new j0(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const Bt=e.properties.get(P);Bt.__ignoreDepthValues=x.ignoreDepthValues}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Mt.setContext(l),Mt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ct(k){for(let at=0;at<k.removed.length;at++){const Tt=k.removed[at],bt=F.indexOf(Tt);bt>=0&&(F[bt]=null,C[bt].disconnect(Tt))}for(let at=0;at<k.added.length;at++){const Tt=k.added[at];let bt=F.indexOf(Tt);if(bt===-1){for(let Bt=0;Bt<C.length;Bt++)if(Bt>=F.length){F.push(Tt),bt=Bt;break}else if(F[Bt]===null){F[Bt]=Tt,bt=Bt;break}if(bt===-1)break}const Gt=C[bt];Gt&&Gt.connect(Tt)}}const z=new Q,X=new Q;function G(k,at,Tt){z.setFromMatrixPosition(at.matrixWorld),X.setFromMatrixPosition(Tt.matrixWorld);const bt=z.distanceTo(X),Gt=at.projectionMatrix.elements,Bt=Tt.projectionMatrix.elements,te=Gt[14]/(Gt[10]-1),nt=Gt[14]/(Gt[10]+1),ee=(Gt[9]+1)/Gt[5],jt=(Gt[9]-1)/Gt[5],Rt=(Gt[8]-1)/Gt[0],Et=(Bt[8]+1)/Bt[0],Pt=te*Rt,D=te*Et,T=bt/(-Rt+Et),W=T*-Rt;at.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(W),k.translateZ(T),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const J=te+T,ot=nt+T,pt=Pt-W,Ut=D+(bt-W),mt=ee*nt/ot*J,Ot=jt*nt/ot*J;k.projectionMatrix.makePerspective(pt,Ut,mt,Ot,J,ot),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function vt(k,at){at===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(at.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;R.texture!==null&&(k.near=R.depthNear,k.far=R.depthFar),A.near=et.near=O.near=k.near,A.far=et.far=O.far=k.far,(Z!==A.near||lt!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),Z=A.near,lt=A.far,O.near=Z,O.far=lt,et.near=Z,et.far=lt,O.updateProjectionMatrix(),et.updateProjectionMatrix(),k.updateProjectionMatrix());const at=k.parent,Tt=A.cameras;vt(A,at);for(let bt=0;bt<Tt.length;bt++)vt(Tt[bt],at);Tt.length===2?G(A,O,et):A.projectionMatrix.copy(O.projectionMatrix),_t(k,A,at)};function _t(k,at,Tt){Tt===null?k.matrix.copy(at.matrixWorld):(k.matrix.copy(Tt.matrixWorld),k.matrix.invert(),k.matrix.multiply(at.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(at.projectionMatrix),k.projectionMatrixInverse.copy(at.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Hh*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(k){m=k,x!==null&&(x.fixedFoveation=k),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=k)},this.hasDepthSensing=function(){return R.texture!==null};let N=null;function j(k,at){if(v=at.getViewerPose(p||d),w=at,v!==null){const Tt=v.views;E!==null&&(e.setRenderTargetFramebuffer(P,E.framebuffer),e.setRenderTarget(P));let bt=!1;Tt.length!==A.cameras.length&&(A.cameras.length=0,bt=!0);for(let Bt=0;Bt<Tt.length;Bt++){const te=Tt[Bt];let nt=null;if(E!==null)nt=E.getViewport(te);else{const jt=_.getViewSubImage(x,te);nt=jt.viewport,Bt===0&&(e.setRenderTargetTextures(P,jt.colorTexture,x.ignoreDepthValues?void 0:jt.depthStencilTexture),e.setRenderTarget(P))}let ee=L[Bt];ee===void 0&&(ee=new ui,ee.layers.enable(Bt),ee.viewport=new mn,L[Bt]=ee),ee.matrix.fromArray(te.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(te.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(nt.x,nt.y,nt.width,nt.height),Bt===0&&(A.matrix.copy(ee.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),bt===!0&&A.cameras.push(ee)}const Gt=l.enabledFeatures;if(Gt&&Gt.includes("depth-sensing")){const Bt=_.getDepthInformation(Tt[0]);Bt&&Bt.isValid&&Bt.texture&&R.init(e,Bt,l.renderState)}}for(let Tt=0;Tt<C.length;Tt++){const bt=F[Tt],Gt=C[Tt];bt!==null&&Gt!==void 0&&Gt.update(bt,at,p||d)}R.render(e,A),N&&N(k,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),w=null}const Mt=new W0;Mt.setAnimationLoop(j),this.setAnimationLoop=function(k){N=k},this.dispose=function(){}}}const mr=new Oi,NA=new Ze;function OA(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,k0(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,P,C,F){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(y,S):S.isMeshToonMaterial?(u(y,S),_(y,S)):S.isMeshPhongMaterial?(u(y,S),v(y,S)):S.isMeshStandardMaterial?(u(y,S),x(y,S),S.isMeshPhysicalMaterial&&E(y,S,F)):S.isMeshMatcapMaterial?(u(y,S),w(y,S)):S.isMeshDepthMaterial?u(y,S):S.isMeshDistanceMaterial?(u(y,S),R(y,S)):S.isMeshNormalMaterial?u(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&h(y,S)):S.isPointsMaterial?m(y,S,P,C):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Gn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Gn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const P=e.get(S),C=P.envMap,F=P.envMapRotation;if(C&&(y.envMap.value=C,mr.copy(F),mr.x*=-1,mr.y*=-1,mr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),y.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(mr)),y.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap){y.lightMap.value=S.lightMap;const Y=o._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=S.lightMapIntensity*Y,i(S.lightMap,y.lightMapTransform)}S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function h(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,P,C){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*P,y.scale.value=C*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function E(y,S,P){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Gn&&y.clearcoatNormalScale.value.negate())),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function R(y,S){const P=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function PA(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,C){const F=C.program;r.uniformBlockBinding(P,F)}function p(P,C){let F=l[P.id];F===void 0&&(w(P),F=v(P),l[P.id]=F,P.addEventListener("dispose",y));const Y=C.program;r.updateUBOMapping(P,Y);const H=e.render.frame;u[P.id]!==H&&(x(P),u[P.id]=H)}function v(P){const C=_();P.__bindingPointIndex=C;const F=o.createBuffer(),Y=P.__size,H=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,Y,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,F),F}function _(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const C=l[P.id],F=P.uniforms,Y=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let H=0,O=F.length;H<O;H++){const et=Array.isArray(F[H])?F[H]:[F[H]];for(let L=0,A=et.length;L<A;L++){const Z=et[L];if(E(Z,H,L,Y)===!0){const lt=Z.__offset,I=Array.isArray(Z.value)?Z.value:[Z.value];let ut=0;for(let ct=0;ct<I.length;ct++){const z=I[ct],X=R(z);typeof z=="number"||typeof z=="boolean"?(Z.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,lt+ut,Z.__data)):z.isMatrix3?(Z.__data[0]=z.elements[0],Z.__data[1]=z.elements[1],Z.__data[2]=z.elements[2],Z.__data[3]=0,Z.__data[4]=z.elements[3],Z.__data[5]=z.elements[4],Z.__data[6]=z.elements[5],Z.__data[7]=0,Z.__data[8]=z.elements[6],Z.__data[9]=z.elements[7],Z.__data[10]=z.elements[8],Z.__data[11]=0):(z.toArray(Z.__data,ut),ut+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,Z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(P,C,F,Y){const H=P.value,O=C+"_"+F;if(Y[O]===void 0)return typeof H=="number"||typeof H=="boolean"?Y[O]=H:Y[O]=H.clone(),!0;{const et=Y[O];if(typeof H=="number"||typeof H=="boolean"){if(et!==H)return Y[O]=H,!0}else if(et.equals(H)===!1)return et.copy(H),!0}return!1}function w(P){const C=P.uniforms;let F=0;const Y=16;for(let O=0,et=C.length;O<et;O++){const L=Array.isArray(C[O])?C[O]:[C[O]];for(let A=0,Z=L.length;A<Z;A++){const lt=L[A],I=Array.isArray(lt.value)?lt.value:[lt.value];for(let ut=0,ct=I.length;ut<ct;ut++){const z=I[ut],X=R(z),G=F%Y;G!==0&&Y-G<X.boundary&&(F+=Y-G),lt.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=F,F+=X.storage}}}const H=F%Y;return H>0&&(F+=Y-H),P.__size=F,P.__cache={},this}function R(P){const C={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(C.boundary=4,C.storage=4):P.isVector2?(C.boundary=8,C.storage=8):P.isVector3||P.isColor?(C.boundary=16,C.storage=12):P.isVector4?(C.boundary=16,C.storage=16):P.isMatrix3?(C.boundary=48,C.storage=48):P.isMatrix4?(C.boundary=64,C.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),C}function y(P){const C=P.target;C.removeEventListener("dispose",y);const F=d.indexOf(C.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function S(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:S}}class zA{constructor(e={}){const{canvas:i=Ry(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const E=new Uint32Array(4),w=new Int32Array(4);let R=null,y=null;const S=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wi,this._useLegacyLights=!1,this.toneMapping=Va,this.toneMappingExposure=1;const C=this;let F=!1,Y=0,H=0,O=null,et=-1,L=null;const A=new mn,Z=new mn;let lt=null;const I=new Te(0);let ut=0,ct=i.width,z=i.height,X=1,G=null,vt=null;const _t=new mn(0,0,ct,z),N=new mn(0,0,ct,z);let j=!1;const Mt=new Wh;let k=!1,at=!1;const Tt=new Ze,bt=new ae,Gt=new Q,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return O===null?X:1}let nt=r;function ee(U,K){const ft=i.getContext(U,K);return ft!==null?ft:null}try{const U={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kh}`),i.addEventListener("webglcontextlost",st,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),nt===null){const K="webgl2";if(nt=ee(K,U),nt===null)throw ee(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let jt,Rt,Et,Pt,D,T,W,J,ot,pt,Ut,mt,Ot,wt,At,Dt,Zt,It,Ft,_e,de,ne,ue,ie;function qt(){jt=new XT(nt),jt.init(),Rt=new BT(nt,jt,e),ne=new AA(nt,jt),Et=new TA(nt),Pt=new YT(nt),D=new uA,T=new bA(nt,jt,Et,D,Rt,ne,Pt),W=new HT(C),J=new kT(C),ot=new $y(nt),ue=new zT(nt,ot),pt=new qT(nt,ot,Pt,ue),Ut=new ZT(nt,pt,ot,Pt),Ft=new jT(nt,Rt,T),Dt=new FT(D),mt=new cA(C,W,J,jt,Rt,ue,Dt),Ot=new OA(C,D),wt=new hA,At=new vA(jt),It=new PT(C,W,J,Et,Ut,x,m),Zt=new EA(C,Ut,Rt),ie=new PA(nt,Pt,Rt,Et),_e=new IT(nt,jt,Pt),de=new WT(nt,jt,Pt),Pt.programs=mt.programs,C.capabilities=Rt,C.extensions=jt,C.properties=D,C.renderLists=wt,C.shadowMap=Zt,C.state=Et,C.info=Pt}qt();const M=new LA(C,nt);this.xr=M,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){const U=jt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=jt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(U){U!==void 0&&(X=U,this.setSize(ct,z,!1))},this.getSize=function(U){return U.set(ct,z)},this.setSize=function(U,K,ft=!0){if(M.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ct=U,z=K,i.width=Math.floor(U*X),i.height=Math.floor(K*X),ft===!0&&(i.style.width=U+"px",i.style.height=K+"px"),this.setViewport(0,0,U,K)},this.getDrawingBufferSize=function(U){return U.set(ct*X,z*X).floor()},this.setDrawingBufferSize=function(U,K,ft){ct=U,z=K,X=ft,i.width=Math.floor(U*ft),i.height=Math.floor(K*ft),this.setViewport(0,0,U,K)},this.getCurrentViewport=function(U){return U.copy(A)},this.getViewport=function(U){return U.copy(_t)},this.setViewport=function(U,K,ft,dt){U.isVector4?_t.set(U.x,U.y,U.z,U.w):_t.set(U,K,ft,dt),Et.viewport(A.copy(_t).multiplyScalar(X).round())},this.getScissor=function(U){return U.copy(N)},this.setScissor=function(U,K,ft,dt){U.isVector4?N.set(U.x,U.y,U.z,U.w):N.set(U,K,ft,dt),Et.scissor(Z.copy(N).multiplyScalar(X).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(U){Et.setScissorTest(j=U)},this.setOpaqueSort=function(U){G=U},this.setTransparentSort=function(U){vt=U},this.getClearColor=function(U){return U.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(U=!0,K=!0,ft=!0){let dt=0;if(U){let rt=!1;if(O!==null){const Lt=O.texture.format;rt=Lt===U0||Lt===D0||Lt===w0}if(rt){const Lt=O.texture.type,Vt=Lt===ka||Lt===Os||Lt===b0||Lt===Fo||Lt===R0||Lt===C0,Wt=It.getClearColor(),Kt=It.getClearAlpha(),$t=Wt.r,kt=Wt.g,re=Wt.b;Vt?(E[0]=$t,E[1]=kt,E[2]=re,E[3]=Kt,nt.clearBufferuiv(nt.COLOR,0,E)):(w[0]=$t,w[1]=kt,w[2]=re,w[3]=Kt,nt.clearBufferiv(nt.COLOR,0,w))}else dt|=nt.COLOR_BUFFER_BIT}K&&(dt|=nt.DEPTH_BUFFER_BIT),ft&&(dt|=nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",st,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),wt.dispose(),At.dispose(),D.dispose(),W.dispose(),J.dispose(),Ut.dispose(),ue.dispose(),ie.dispose(),mt.dispose(),M.dispose(),M.removeEventListener("sessionstart",Xe),M.removeEventListener("sessionend",Be),Cn.stop()};function st(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const U=Pt.autoReset,K=Zt.enabled,ft=Zt.autoUpdate,dt=Zt.needsUpdate,rt=Zt.type;qt(),Pt.autoReset=U,Zt.enabled=K,Zt.autoUpdate=ft,Zt.needsUpdate=dt,Zt.type=rt}function Ct(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function zt(U){const K=U.target;K.removeEventListener("dispose",zt),oe(K)}function oe(U){fe(U),D.remove(U)}function fe(U){const K=D.get(U).programs;K!==void 0&&(K.forEach(function(ft){mt.releaseProgram(ft)}),U.isShaderMaterial&&mt.releaseShaderCache(U))}this.renderBufferDirect=function(U,K,ft,dt,rt,Lt){K===null&&(K=Bt);const Vt=rt.isMesh&&rt.matrixWorld.determinant()<0,Wt=on(U,K,ft,dt,rt);Et.setMaterial(dt,Vt);let Kt=ft.index,$t=1;if(dt.wireframe===!0){if(Kt=pt.getWireframeAttribute(ft),Kt===void 0)return;$t=2}const kt=ft.drawRange,re=ft.attributes.position;let qe=kt.start*$t,Ke=(kt.start+kt.count)*$t;Lt!==null&&(qe=Math.max(qe,Lt.start*$t),Ke=Math.min(Ke,(Lt.start+Lt.count)*$t)),Kt!==null?(qe=Math.max(qe,0),Ke=Math.min(Ke,Kt.count)):re!=null&&(qe=Math.max(qe,0),Ke=Math.min(Ke,re.count));const He=Ke-qe;if(He<0||He===1/0)return;ue.setup(rt,dt,Wt,ft,Kt);let mi,Fe=_e;if(Kt!==null&&(mi=ot.get(Kt),Fe=de,Fe.setIndex(mi)),rt.isMesh)dt.wireframe===!0?(Et.setLineWidth(dt.wireframeLinewidth*te()),Fe.setMode(nt.LINES)):Fe.setMode(nt.TRIANGLES);else if(rt.isLine){let le=dt.linewidth;le===void 0&&(le=1),Et.setLineWidth(le*te()),rt.isLineSegments?Fe.setMode(nt.LINES):rt.isLineLoop?Fe.setMode(nt.LINE_LOOP):Fe.setMode(nt.LINE_STRIP)}else rt.isPoints?Fe.setMode(nt.POINTS):rt.isSprite&&Fe.setMode(nt.TRIANGLES);if(rt.isBatchedMesh)Fe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else if(rt.isInstancedMesh)Fe.renderInstances(qe,He,rt.count);else if(ft.isInstancedBufferGeometry){const le=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Fs=Math.min(ft.instanceCount,le);Fe.renderInstances(qe,He,Fs)}else Fe.render(qe,He)};function we(U,K,ft){U.transparent===!0&&U.side===ra&&U.forceSinglePass===!1?(U.side=Gn,U.needsUpdate=!0,Ya(U,K,ft),U.side=Xa,U.needsUpdate=!0,Ya(U,K,ft),U.side=ra):Ya(U,K,ft)}this.compile=function(U,K,ft=null){ft===null&&(ft=U),y=At.get(ft),y.init(),P.push(y),ft.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(y.pushLight(rt),rt.castShadow&&y.pushShadow(rt))}),U!==ft&&U.traverseVisible(function(rt){rt.isLight&&rt.layers.test(K.layers)&&(y.pushLight(rt),rt.castShadow&&y.pushShadow(rt))}),y.setupLights(C._useLegacyLights);const dt=new Set;return U.traverse(function(rt){const Lt=rt.material;if(Lt)if(Array.isArray(Lt))for(let Vt=0;Vt<Lt.length;Vt++){const Wt=Lt[Vt];we(Wt,ft,rt),dt.add(Wt)}else we(Lt,ft,rt),dt.add(Lt)}),P.pop(),y=null,dt},this.compileAsync=function(U,K,ft=null){const dt=this.compile(U,K,ft);return new Promise(rt=>{function Lt(){if(dt.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&dt.delete(Vt)}),dt.size===0){rt(U);return}setTimeout(Lt,10)}jt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let tn=null;function Re(U){tn&&tn(U)}function Xe(){Cn.stop()}function Be(){Cn.start()}const Cn=new W0;Cn.setAnimationLoop(Re),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(U){tn=U,M.setAnimationLoop(U),U===null?Cn.stop():Cn.start()},M.addEventListener("sessionstart",Xe),M.addEventListener("sessionend",Be),this.render=function(U,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),M.enabled===!0&&M.isPresenting===!0&&(M.cameraAutoUpdate===!0&&M.updateCamera(K),K=M.getCamera()),U.isScene===!0&&U.onBeforeRender(C,U,K,O),y=At.get(U,P.length),y.init(),P.push(y),Tt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Mt.setFromProjectionMatrix(Tt),at=this.localClippingEnabled,k=Dt.init(this.clippingPlanes,at),R=wt.get(U,S.length),R.init(),S.push(R),wn(U,K,0,C.sortObjects),R.finish(),C.sortObjects===!0&&R.sort(G,vt),this.info.render.frame++,k===!0&&Dt.beginShadows();const ft=y.state.shadowsArray;if(Zt.render(ft,U,K),k===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(M.enabled===!1||M.isPresenting===!1||M.hasDepthSensing()===!1)&&It.render(R,U),y.setupLights(C._useLegacyLights),K.isArrayCamera){const dt=K.cameras;for(let rt=0,Lt=dt.length;rt<Lt;rt++){const Vt=dt[rt];hi(R,U,Vt,Vt.viewport)}}else hi(R,U,K);O!==null&&(T.updateMultisampleRenderTarget(O),T.updateRenderTargetMipmap(O)),U.isScene===!0&&U.onAfterRender(C,U,K),ue.resetDefaultState(),et=-1,L=null,P.pop(),P.length>0?y=P[P.length-1]:y=null,S.pop(),S.length>0?R=S[S.length-1]:R=null};function wn(U,K,ft,dt){if(U.visible===!1)return;if(U.layers.test(K.layers)){if(U.isGroup)ft=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(K);else if(U.isLight)y.pushLight(U),U.castShadow&&y.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Mt.intersectsSprite(U)){dt&&Gt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Tt);const Vt=Ut.update(U),Wt=U.material;Wt.visible&&R.push(U,Vt,Wt,ft,Gt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Mt.intersectsObject(U))){const Vt=Ut.update(U),Wt=U.material;if(dt&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Gt.copy(U.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Gt.copy(Vt.boundingSphere.center)),Gt.applyMatrix4(U.matrixWorld).applyMatrix4(Tt)),Array.isArray(Wt)){const Kt=Vt.groups;for(let $t=0,kt=Kt.length;$t<kt;$t++){const re=Kt[$t],qe=Wt[re.materialIndex];qe&&qe.visible&&R.push(U,Vt,qe,ft,Gt.z,re)}}else Wt.visible&&R.push(U,Vt,Wt,ft,Gt.z,null)}}const Lt=U.children;for(let Vt=0,Wt=Lt.length;Vt<Wt;Vt++)wn(Lt[Vt],K,ft,dt)}function hi(U,K,ft,dt){const rt=U.opaque,Lt=U.transmissive,Vt=U.transparent;y.setupLightsView(ft),k===!0&&Dt.setGlobalState(C.clippingPlanes,ft),Lt.length>0&&Pi(rt,Lt,K,ft),dt&&Et.viewport(A.copy(dt)),rt.length>0&&di(rt,K,ft),Lt.length>0&&di(Lt,K,ft),Vt.length>0&&di(Vt,K,ft),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Pi(U,K,ft,dt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget===null){y.state.transmissionRenderTarget=new yr(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?Ac:ka,minFilter:Sr,samples:4,stencilBuffer:u});const $t=D.get(y.state.transmissionRenderTarget);$t.__isTransmissionRenderTarget=!0}const Lt=y.state.transmissionRenderTarget;C.getDrawingBufferSize(bt),Lt.setSize(bt.x,bt.y);const Vt=C.getRenderTarget();C.setRenderTarget(Lt),C.getClearColor(I),ut=C.getClearAlpha(),ut<1&&C.setClearColor(16777215,.5),C.clear();const Wt=C.toneMapping;C.toneMapping=Va,di(U,ft,dt),T.updateMultisampleRenderTarget(Lt),T.updateRenderTargetMipmap(Lt);let Kt=!1;for(let $t=0,kt=K.length;$t<kt;$t++){const re=K[$t],qe=re.object,Ke=re.geometry,He=re.material,mi=re.group;if(He.side===ra&&qe.layers.test(dt.layers)){const Fe=He.side;He.side=Gn,He.needsUpdate=!0,br(qe,ft,dt,Ke,He,mi),He.side=Fe,He.needsUpdate=!0,Kt=!0}}Kt===!0&&(T.updateMultisampleRenderTarget(Lt),T.updateRenderTargetMipmap(Lt)),C.setRenderTarget(Vt),C.setClearColor(I,ut),C.toneMapping=Wt}function di(U,K,ft){const dt=K.isScene===!0?K.overrideMaterial:null;for(let rt=0,Lt=U.length;rt<Lt;rt++){const Vt=U[rt],Wt=Vt.object,Kt=Vt.geometry,$t=dt===null?Vt.material:dt,kt=Vt.group;Wt.layers.test(ft.layers)&&br(Wt,K,ft,Kt,$t,kt)}}function br(U,K,ft,dt,rt,Lt){U.onBeforeRender(C,K,ft,dt,rt,Lt),U.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),rt.onBeforeRender(C,K,ft,dt,U,Lt),rt.transparent===!0&&rt.side===ra&&rt.forceSinglePass===!1?(rt.side=Gn,rt.needsUpdate=!0,C.renderBufferDirect(ft,K,dt,rt,U,Lt),rt.side=Xa,rt.needsUpdate=!0,C.renderBufferDirect(ft,K,dt,rt,U,Lt),rt.side=ra):C.renderBufferDirect(ft,K,dt,rt,U,Lt),U.onAfterRender(C,K,ft,dt,rt,Lt)}function Ya(U,K,ft){K.isScene!==!0&&(K=Bt);const dt=D.get(U),rt=y.state.lights,Lt=y.state.shadowsArray,Vt=rt.state.version,Wt=mt.getParameters(U,rt.state,Lt,K,ft),Kt=mt.getProgramCacheKey(Wt);let $t=dt.programs;dt.environment=U.isMeshStandardMaterial?K.environment:null,dt.fog=K.fog,dt.envMap=(U.isMeshStandardMaterial?J:W).get(U.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&U.envMap===null?K.environmentRotation:U.envMapRotation,$t===void 0&&(U.addEventListener("dispose",zt),$t=new Map,dt.programs=$t);let kt=$t.get(Kt);if(kt!==void 0){if(dt.currentProgram===kt&&dt.lightsStateVersion===Vt)return pi(U,Wt),kt}else Wt.uniforms=mt.getUniforms(U),U.onBuild(ft,Wt,C),U.onBeforeCompile(Wt,C),kt=mt.acquireProgram(Wt,Kt),$t.set(Kt,kt),dt.uniforms=Wt.uniforms;const re=dt.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(re.clippingPlanes=Dt.uniform),pi(U,Wt),dt.needsLights=la(U),dt.lightsStateVersion=Vt,dt.needsLights&&(re.ambientLightColor.value=rt.state.ambient,re.lightProbe.value=rt.state.probe,re.directionalLights.value=rt.state.directional,re.directionalLightShadows.value=rt.state.directionalShadow,re.spotLights.value=rt.state.spot,re.spotLightShadows.value=rt.state.spotShadow,re.rectAreaLights.value=rt.state.rectArea,re.ltc_1.value=rt.state.rectAreaLTC1,re.ltc_2.value=rt.state.rectAreaLTC2,re.pointLights.value=rt.state.point,re.pointLightShadows.value=rt.state.pointShadow,re.hemisphereLights.value=rt.state.hemi,re.directionalShadowMap.value=rt.state.directionalShadowMap,re.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,re.spotShadowMap.value=rt.state.spotShadowMap,re.spotLightMatrix.value=rt.state.spotLightMatrix,re.spotLightMap.value=rt.state.spotLightMap,re.pointShadowMap.value=rt.state.pointShadowMap,re.pointShadowMatrix.value=rt.state.pointShadowMatrix),dt.currentProgram=kt,dt.uniformsList=null,kt}function Bs(U){if(U.uniformsList===null){const K=U.currentProgram.getUniforms();U.uniformsList=Tc.seqWithValue(K.seq,U.uniforms)}return U.uniformsList}function pi(U,K){const ft=D.get(U);ft.outputColorSpace=K.outputColorSpace,ft.batching=K.batching,ft.instancing=K.instancing,ft.instancingColor=K.instancingColor,ft.instancingMorph=K.instancingMorph,ft.skinning=K.skinning,ft.morphTargets=K.morphTargets,ft.morphNormals=K.morphNormals,ft.morphColors=K.morphColors,ft.morphTargetsCount=K.morphTargetsCount,ft.numClippingPlanes=K.numClippingPlanes,ft.numIntersection=K.numClipIntersection,ft.vertexAlphas=K.vertexAlphas,ft.vertexTangents=K.vertexTangents,ft.toneMapping=K.toneMapping}function on(U,K,ft,dt,rt){K.isScene!==!0&&(K=Bt),T.resetTextureUnits();const Lt=K.fog,Vt=dt.isMeshStandardMaterial?K.environment:null,Wt=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Wa,Kt=(dt.isMeshStandardMaterial?J:W).get(dt.envMap||Vt),$t=dt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,kt=!!ft.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),re=!!ft.morphAttributes.position,qe=!!ft.morphAttributes.normal,Ke=!!ft.morphAttributes.color;let He=Va;dt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(He=C.toneMapping);const mi=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,Fe=mi!==void 0?mi.length:0,le=D.get(dt),Fs=y.state.lights;if(k===!0&&(at===!0||U!==L)){const gn=U===L&&dt.id===et;Dt.setState(dt,U,gn)}let De=!1;dt.version===le.__version?(le.needsLights&&le.lightsStateVersion!==Fs.state.version||le.outputColorSpace!==Wt||rt.isBatchedMesh&&le.batching===!1||!rt.isBatchedMesh&&le.batching===!0||rt.isInstancedMesh&&le.instancing===!1||!rt.isInstancedMesh&&le.instancing===!0||rt.isSkinnedMesh&&le.skinning===!1||!rt.isSkinnedMesh&&le.skinning===!0||rt.isInstancedMesh&&le.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&le.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&le.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&le.instancingMorph===!1&&rt.morphTexture!==null||le.envMap!==Kt||dt.fog===!0&&le.fog!==Lt||le.numClippingPlanes!==void 0&&(le.numClippingPlanes!==Dt.numPlanes||le.numIntersection!==Dt.numIntersection)||le.vertexAlphas!==$t||le.vertexTangents!==kt||le.morphTargets!==re||le.morphNormals!==qe||le.morphColors!==Ke||le.toneMapping!==He||le.morphTargetsCount!==Fe)&&(De=!0):(De=!0,le.__version=dt.version);let Jn=le.currentProgram;De===!0&&(Jn=Ya(dt,K,rt));let $n=!1,fn=!1,Ar=!1;const hn=Jn.getUniforms(),ti=le.uniforms;if(Et.useProgram(Jn.program)&&($n=!0,fn=!0,Ar=!0),dt.id!==et&&(et=dt.id,fn=!0),$n||L!==U){hn.setValue(nt,"projectionMatrix",U.projectionMatrix),hn.setValue(nt,"viewMatrix",U.matrixWorldInverse);const gn=hn.map.cameraPosition;gn!==void 0&&gn.setValue(nt,Gt.setFromMatrixPosition(U.matrixWorld)),Rt.logarithmicDepthBuffer&&hn.setValue(nt,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&hn.setValue(nt,"isOrthographic",U.isOrthographicCamera===!0),L!==U&&(L=U,fn=!0,Ar=!0)}if(rt.isSkinnedMesh){hn.setOptional(nt,rt,"bindMatrix"),hn.setOptional(nt,rt,"bindMatrixInverse");const gn=rt.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),hn.setValue(nt,"boneTexture",gn.boneTexture,T))}rt.isBatchedMesh&&(hn.setOptional(nt,rt,"batchingTexture"),hn.setValue(nt,"batchingTexture",rt._matricesTexture,T));const Rr=ft.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Ft.update(rt,ft,Jn),(fn||le.receiveShadow!==rt.receiveShadow)&&(le.receiveShadow=rt.receiveShadow,hn.setValue(nt,"receiveShadow",rt.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(ti.envMap.value=Kt,ti.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&K.environment!==null&&(ti.envMapIntensity.value=K.environmentIntensity),fn&&(hn.setValue(nt,"toneMappingExposure",C.toneMappingExposure),le.needsLights&&Mn(ti,Ar),Lt&&dt.fog===!0&&Ot.refreshFogUniforms(ti,Lt),Ot.refreshMaterialUniforms(ti,dt,X,z,y.state.transmissionRenderTarget),Tc.upload(nt,Bs(le),ti,T)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(Tc.upload(nt,Bs(le),ti,T),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&hn.setValue(nt,"center",rt.center),hn.setValue(nt,"modelViewMatrix",rt.modelViewMatrix),hn.setValue(nt,"normalMatrix",rt.normalMatrix),hn.setValue(nt,"modelMatrix",rt.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const gn=dt.uniformsGroups;for(let Hs=0,Nn=gn.length;Hs<Nn;Hs++){const Cr=gn[Hs];ie.update(Cr,Jn),ie.bind(Cr,Jn)}}return Jn}function Mn(U,K){U.ambientLightColor.needsUpdate=K,U.lightProbe.needsUpdate=K,U.directionalLights.needsUpdate=K,U.directionalLightShadows.needsUpdate=K,U.pointLights.needsUpdate=K,U.pointLightShadows.needsUpdate=K,U.spotLights.needsUpdate=K,U.spotLightShadows.needsUpdate=K,U.rectAreaLights.needsUpdate=K,U.hemisphereLights.needsUpdate=K}function la(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(U,K,ft){D.get(U.texture).__webglTexture=K,D.get(U.depthTexture).__webglTexture=ft;const dt=D.get(U);dt.__hasExternalTextures=!0,dt.__autoAllocateDepthBuffer=ft===void 0,dt.__autoAllocateDepthBuffer||jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(U,K){const ft=D.get(U);ft.__webglFramebuffer=K,ft.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(U,K=0,ft=0){O=U,Y=K,H=ft;let dt=!0,rt=null,Lt=!1,Vt=!1;if(U){const Kt=D.get(U);Kt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(nt.FRAMEBUFFER,null),dt=!1):Kt.__webglFramebuffer===void 0?T.setupRenderTarget(U):Kt.__hasExternalTextures&&T.rebindTextures(U,D.get(U.texture).__webglTexture,D.get(U.depthTexture).__webglTexture);const $t=U.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Vt=!0);const kt=D.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(kt[K])?rt=kt[K][ft]:rt=kt[K],Lt=!0):U.samples>0&&T.useMultisampledRTT(U)===!1?rt=D.get(U).__webglMultisampledFramebuffer:Array.isArray(kt)?rt=kt[ft]:rt=kt,A.copy(U.viewport),Z.copy(U.scissor),lt=U.scissorTest}else A.copy(_t).multiplyScalar(X).floor(),Z.copy(N).multiplyScalar(X).floor(),lt=j;if(Et.bindFramebuffer(nt.FRAMEBUFFER,rt)&&dt&&Et.drawBuffers(U,rt),Et.viewport(A),Et.scissor(Z),Et.setScissorTest(lt),Lt){const Kt=D.get(U.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+K,Kt.__webglTexture,ft)}else if(Vt){const Kt=D.get(U.texture),$t=K||0;nt.framebufferTextureLayer(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,Kt.__webglTexture,ft||0,$t)}et=-1},this.readRenderTargetPixels=function(U,K,ft,dt,rt,Lt,Vt){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=D.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Vt!==void 0&&(Wt=Wt[Vt]),Wt){Et.bindFramebuffer(nt.FRAMEBUFFER,Wt);try{const Kt=U.texture,$t=Kt.format,kt=Kt.type;if($t!==Ui&&ne.convert($t)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const re=kt===Ac&&(jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float"));if(kt!==ka&&ne.convert(kt)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&kt!==Ha&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=U.width-dt&&ft>=0&&ft<=U.height-rt&&nt.readPixels(K,ft,dt,rt,ne.convert($t),ne.convert(kt),Lt)}finally{const Kt=O!==null?D.get(O).__webglFramebuffer:null;Et.bindFramebuffer(nt.FRAMEBUFFER,Kt)}}},this.copyFramebufferToTexture=function(U,K,ft=0){const dt=Math.pow(2,-ft),rt=Math.floor(K.image.width*dt),Lt=Math.floor(K.image.height*dt);T.setTexture2D(K,0),nt.copyTexSubImage2D(nt.TEXTURE_2D,ft,0,0,U.x,U.y,rt,Lt),Et.unbindTexture()},this.copyTextureToTexture=function(U,K,ft,dt=0){const rt=K.image.width,Lt=K.image.height,Vt=ne.convert(ft.format),Wt=ne.convert(ft.type);T.setTexture2D(ft,0),nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,ft.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ft.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,ft.unpackAlignment),K.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,dt,U.x,U.y,rt,Lt,Vt,Wt,K.image.data):K.isCompressedTexture?nt.compressedTexSubImage2D(nt.TEXTURE_2D,dt,U.x,U.y,K.mipmaps[0].width,K.mipmaps[0].height,Vt,K.mipmaps[0].data):nt.texSubImage2D(nt.TEXTURE_2D,dt,U.x,U.y,Vt,Wt,K.image),dt===0&&ft.generateMipmaps&&nt.generateMipmap(nt.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(U,K,ft,dt,rt=0){const Lt=Math.round(U.max.x-U.min.x),Vt=Math.round(U.max.y-U.min.y),Wt=U.max.z-U.min.z+1,Kt=ne.convert(dt.format),$t=ne.convert(dt.type);let kt;if(dt.isData3DTexture)T.setTexture3D(dt,0),kt=nt.TEXTURE_3D;else if(dt.isDataArrayTexture||dt.isCompressedArrayTexture)T.setTexture2DArray(dt,0),kt=nt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,dt.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,dt.unpackAlignment);const re=nt.getParameter(nt.UNPACK_ROW_LENGTH),qe=nt.getParameter(nt.UNPACK_IMAGE_HEIGHT),Ke=nt.getParameter(nt.UNPACK_SKIP_PIXELS),He=nt.getParameter(nt.UNPACK_SKIP_ROWS),mi=nt.getParameter(nt.UNPACK_SKIP_IMAGES),Fe=ft.isCompressedTexture?ft.mipmaps[rt]:ft.image;nt.pixelStorei(nt.UNPACK_ROW_LENGTH,Fe.width),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Fe.height),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,U.min.x),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,U.min.y),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,U.min.z),ft.isDataTexture||ft.isData3DTexture?nt.texSubImage3D(kt,rt,K.x,K.y,K.z,Lt,Vt,Wt,Kt,$t,Fe.data):dt.isCompressedArrayTexture?nt.compressedTexSubImage3D(kt,rt,K.x,K.y,K.z,Lt,Vt,Wt,Kt,Fe.data):nt.texSubImage3D(kt,rt,K.x,K.y,K.z,Lt,Vt,Wt,Kt,$t,Fe),nt.pixelStorei(nt.UNPACK_ROW_LENGTH,re),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,qe),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,Ke),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,He),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,mi),rt===0&&dt.generateMipmaps&&nt.generateMipmap(kt),Et.unbindTexture()},this.initTexture=function(U){U.isCubeTexture?T.setTextureCube(U,0):U.isData3DTexture?T.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?T.setTexture2DArray(U,0):T.setTexture2D(U,0),Et.unbindTexture()},this.resetState=function(){Y=0,H=0,O=null,Et.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Xh?"display-p3":"srgb",i.unpackColorSpace=ze.workingColorSpace===Nc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class IA extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class tv extends zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const s0=new Q,o0=new Q,l0=new Ze,Rh=new qh,xc=new Oc;class BA extends yn{constructor(e=new oa,i=new tv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)s0.fromBufferAttribute(i,l-1),o0.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=s0.distanceTo(o0);e.setAttribute("lineDistance",new Ni(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xc.copy(r.boundingSphere),xc.applyMatrix4(l),xc.radius+=u,e.ray.intersectsSphere(xc)===!1)return;l0.copy(l).invert(),Rh.copy(e.ray).applyMatrix4(l0);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=new Q,v=new Q,_=new Q,x=new Q,E=this.isLineSegments?2:1,w=r.index,y=r.attributes.position;if(w!==null){const S=Math.max(0,d.start),P=Math.min(w.count,d.start+d.count);for(let C=S,F=P-1;C<F;C+=E){const Y=w.getX(C),H=w.getX(C+1);if(p.fromBufferAttribute(y,Y),v.fromBufferAttribute(y,H),Rh.distanceSqToSegment(p,v,x,_)>m)continue;x.applyMatrix4(this.matrixWorld);const et=e.ray.origin.distanceTo(x);et<e.near||et>e.far||i.push({distance:et,point:_.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const S=Math.max(0,d.start),P=Math.min(y.count,d.start+d.count);for(let C=S,F=P-1;C<F;C+=E){if(p.fromBufferAttribute(y,C),v.fromBufferAttribute(y,C+1),Rh.distanceSqToSegment(p,v,x,_)>m)continue;x.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(x);H<e.near||H>e.far||i.push({distance:H,point:_.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}const c0=new Q,u0=new Q;class FA extends BA{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)c0.fromBufferAttribute(i,l),u0.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+c0.distanceTo(u0);e.setAttribute("lineDistance",new Ni(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Sc=new Q,yc=new Q,Ch=new Q,Mc=new Ei;class HA extends oa{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),u=Math.cos(Io*i),d=e.getIndex(),h=e.getAttribute("position"),m=d?d.count:h.count,p=[0,0,0],v=["a","b","c"],_=new Array(3),x={},E=[];for(let w=0;w<m;w+=3){d?(p[0]=d.getX(w),p[1]=d.getX(w+1),p[2]=d.getX(w+2)):(p[0]=w,p[1]=w+1,p[2]=w+2);const{a:R,b:y,c:S}=Mc;if(R.fromBufferAttribute(h,p[0]),y.fromBufferAttribute(h,p[1]),S.fromBufferAttribute(h,p[2]),Mc.getNormal(Ch),_[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let P=0;P<3;P++){const C=(P+1)%3,F=_[P],Y=_[C],H=Mc[v[P]],O=Mc[v[C]],et=`${F}_${Y}`,L=`${Y}_${F}`;L in x&&x[L]?(Ch.dot(x[L].normal)<=u&&(E.push(H.x,H.y,H.z),E.push(O.x,O.y,O.z)),x[L]=null):et in x||(x[et]={index0:p[P],index1:p[C],normal:Ch.clone()})}}for(const w in x)if(x[w]){const{index0:R,index1:y}=x[w];Sc.fromBufferAttribute(h,R),yc.fromBufferAttribute(h,y),E.push(Sc.x,Sc.y,Sc.z),E.push(yc.x,yc.y,yc.z)}this.setAttribute("position",new Ni(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class f0 extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N0,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ev extends yn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const wh=new Ze,h0=new Q,d0=new Q;class GA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;h0.setFromMatrixPosition(e.matrixWorld),i.position.copy(h0),d0.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(d0),i.updateMatrixWorld(),wh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class VA extends GA{constructor(){super(new Y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kA extends ev{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new VA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class XA extends ev{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=p0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=p0();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function p0(){return(typeof performance>"u"?Date:performance).now()}class m0{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Ln(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);const g0={type:"change"},Dh={type:"start"},_0={type:"end"},Ec=new qh,v0=new Ba,WA=Math.cos(70*Ay.DEG2RAD);class YA extends Tr{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:cs.ROTATE,TWO:cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Dt),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(g0),r.update(),u=l.NONE},this.update=(function(){const M=new Q,st=new Mr().setFromUnitVectors(e.up,new Q(0,1,0)),xt=st.clone().invert(),Ct=new Q,zt=new Mr,oe=new Q,fe=2*Math.PI;return function(tn=null){const Re=r.object.position;M.copy(Re).sub(r.target),M.applyQuaternion(st),h.setFromVector3(M),r.autoRotate&&u===l.NONE&&lt(A(tn)),r.enableDamping?(h.theta+=m.theta*r.dampingFactor,h.phi+=m.phi*r.dampingFactor):(h.theta+=m.theta,h.phi+=m.phi);let Xe=r.minAzimuthAngle,Be=r.maxAzimuthAngle;isFinite(Xe)&&isFinite(Be)&&(Xe<-Math.PI?Xe+=fe:Xe>Math.PI&&(Xe-=fe),Be<-Math.PI?Be+=fe:Be>Math.PI&&(Be-=fe),Xe<=Be?h.theta=Math.max(Xe,Math.min(Be,h.theta)):h.theta=h.theta>(Xe+Be)/2?Math.max(Xe,h.theta):Math.min(Be,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(v,r.dampingFactor):r.target.add(v),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let Cn=!1;if(r.zoomToCursor&&H||r.object.isOrthographicCamera)h.radius=_t(h.radius);else{const wn=h.radius;h.radius=_t(h.radius*p),Cn=wn!=h.radius}if(M.setFromSpherical(h),M.applyQuaternion(xt),Re.copy(r.target).add(M),r.object.lookAt(r.target),r.enableDamping===!0?(m.theta*=1-r.dampingFactor,m.phi*=1-r.dampingFactor,v.multiplyScalar(1-r.dampingFactor)):(m.set(0,0,0),v.set(0,0,0)),r.zoomToCursor&&H){let wn=null;if(r.object.isPerspectiveCamera){const hi=M.length();wn=_t(hi*p);const Pi=hi-wn;r.object.position.addScaledVector(F,Pi),r.object.updateMatrixWorld(),Cn=!!Pi}else if(r.object.isOrthographicCamera){const hi=new Q(Y.x,Y.y,0);hi.unproject(r.object);const Pi=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),Cn=Pi!==r.object.zoom;const di=new Q(Y.x,Y.y,0);di.unproject(r.object),r.object.position.sub(di).add(hi),r.object.updateMatrixWorld(),wn=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;wn!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(wn).add(r.object.position):(Ec.origin.copy(r.object.position),Ec.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Ec.direction))<WA?e.lookAt(r.target):(v0.setFromNormalAndCoplanarPoint(r.object.up,r.target),Ec.intersectPlane(v0,r.target))))}else if(r.object.isOrthographicCamera){const wn=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),wn!==r.object.zoom&&(r.object.updateProjectionMatrix(),Cn=!0)}return p=1,H=!1,Cn||Ct.distanceToSquared(r.object.position)>d||8*(1-zt.dot(r.object.quaternion))>d||oe.distanceToSquared(r.target)>d?(r.dispatchEvent(g0),Ct.copy(r.object.position),zt.copy(r.object.quaternion),oe.copy(r.target),!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Ft),r.domElement.removeEventListener("pointerdown",W),r.domElement.removeEventListener("pointercancel",ot),r.domElement.removeEventListener("wheel",mt),r.domElement.removeEventListener("pointermove",J),r.domElement.removeEventListener("pointerup",ot),r.domElement.getRootNode().removeEventListener("keydown",wt,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Dt),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new m0,m=new m0;let p=1;const v=new Q,_=new ae,x=new ae,E=new ae,w=new ae,R=new ae,y=new ae,S=new ae,P=new ae,C=new ae,F=new Q,Y=new ae;let H=!1;const O=[],et={};let L=!1;function A(M){return M!==null?2*Math.PI/60*r.autoRotateSpeed*M:2*Math.PI/60/60*r.autoRotateSpeed}function Z(M){const st=Math.abs(M*.01);return Math.pow(.95,r.zoomSpeed*st)}function lt(M){m.theta-=M}function I(M){m.phi-=M}const ut=(function(){const M=new Q;return function(xt,Ct){M.setFromMatrixColumn(Ct,0),M.multiplyScalar(-xt),v.add(M)}})(),ct=(function(){const M=new Q;return function(xt,Ct){r.screenSpacePanning===!0?M.setFromMatrixColumn(Ct,1):(M.setFromMatrixColumn(Ct,0),M.crossVectors(r.object.up,M)),M.multiplyScalar(xt),v.add(M)}})(),z=(function(){const M=new Q;return function(xt,Ct){const zt=r.domElement;if(r.object.isPerspectiveCamera){const oe=r.object.position;M.copy(oe).sub(r.target);let fe=M.length();fe*=Math.tan(r.object.fov/2*Math.PI/180),ut(2*xt*fe/zt.clientHeight,r.object.matrix),ct(2*Ct*fe/zt.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(ut(xt*(r.object.right-r.object.left)/r.object.zoom/zt.clientWidth,r.object.matrix),ct(Ct*(r.object.top-r.object.bottom)/r.object.zoom/zt.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function X(M){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function G(M){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function vt(M,st){if(!r.zoomToCursor)return;H=!0;const xt=r.domElement.getBoundingClientRect(),Ct=M-xt.left,zt=st-xt.top,oe=xt.width,fe=xt.height;Y.x=Ct/oe*2-1,Y.y=-(zt/fe)*2+1,F.set(Y.x,Y.y,1).unproject(r.object).sub(r.object.position).normalize()}function _t(M){return Math.max(r.minDistance,Math.min(r.maxDistance,M))}function N(M){_.set(M.clientX,M.clientY)}function j(M){vt(M.clientX,M.clientX),S.set(M.clientX,M.clientY)}function Mt(M){w.set(M.clientX,M.clientY)}function k(M){x.set(M.clientX,M.clientY),E.subVectors(x,_).multiplyScalar(r.rotateSpeed);const st=r.domElement;lt(2*Math.PI*E.x/st.clientHeight),I(2*Math.PI*E.y/st.clientHeight),_.copy(x),r.update()}function at(M){P.set(M.clientX,M.clientY),C.subVectors(P,S),C.y>0?X(Z(C.y)):C.y<0&&G(Z(C.y)),S.copy(P),r.update()}function Tt(M){R.set(M.clientX,M.clientY),y.subVectors(R,w).multiplyScalar(r.panSpeed),z(y.x,y.y),w.copy(R),r.update()}function bt(M){vt(M.clientX,M.clientY),M.deltaY<0?G(Z(M.deltaY)):M.deltaY>0&&X(Z(M.deltaY)),r.update()}function Gt(M){let st=!1;switch(M.code){case r.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?I(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(0,r.keyPanSpeed),st=!0;break;case r.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?I(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(0,-r.keyPanSpeed),st=!0;break;case r.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?lt(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(r.keyPanSpeed,0),st=!0;break;case r.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?lt(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):z(-r.keyPanSpeed,0),st=!0;break}st&&(M.preventDefault(),r.update())}function Bt(M){if(O.length===1)_.set(M.pageX,M.pageY);else{const st=ie(M),xt=.5*(M.pageX+st.x),Ct=.5*(M.pageY+st.y);_.set(xt,Ct)}}function te(M){if(O.length===1)w.set(M.pageX,M.pageY);else{const st=ie(M),xt=.5*(M.pageX+st.x),Ct=.5*(M.pageY+st.y);w.set(xt,Ct)}}function nt(M){const st=ie(M),xt=M.pageX-st.x,Ct=M.pageY-st.y,zt=Math.sqrt(xt*xt+Ct*Ct);S.set(0,zt)}function ee(M){r.enableZoom&&nt(M),r.enablePan&&te(M)}function jt(M){r.enableZoom&&nt(M),r.enableRotate&&Bt(M)}function Rt(M){if(O.length==1)x.set(M.pageX,M.pageY);else{const xt=ie(M),Ct=.5*(M.pageX+xt.x),zt=.5*(M.pageY+xt.y);x.set(Ct,zt)}E.subVectors(x,_).multiplyScalar(r.rotateSpeed);const st=r.domElement;lt(2*Math.PI*E.x/st.clientHeight),I(2*Math.PI*E.y/st.clientHeight),_.copy(x)}function Et(M){if(O.length===1)R.set(M.pageX,M.pageY);else{const st=ie(M),xt=.5*(M.pageX+st.x),Ct=.5*(M.pageY+st.y);R.set(xt,Ct)}y.subVectors(R,w).multiplyScalar(r.panSpeed),z(y.x,y.y),w.copy(R)}function Pt(M){const st=ie(M),xt=M.pageX-st.x,Ct=M.pageY-st.y,zt=Math.sqrt(xt*xt+Ct*Ct);P.set(0,zt),C.set(0,Math.pow(P.y/S.y,r.zoomSpeed)),X(C.y),S.copy(P);const oe=(M.pageX+st.x)*.5,fe=(M.pageY+st.y)*.5;vt(oe,fe)}function D(M){r.enableZoom&&Pt(M),r.enablePan&&Et(M)}function T(M){r.enableZoom&&Pt(M),r.enableRotate&&Rt(M)}function W(M){r.enabled!==!1&&(O.length===0&&(r.domElement.setPointerCapture(M.pointerId),r.domElement.addEventListener("pointermove",J),r.domElement.addEventListener("pointerup",ot)),!ne(M)&&(_e(M),M.pointerType==="touch"?Zt(M):pt(M)))}function J(M){r.enabled!==!1&&(M.pointerType==="touch"?It(M):Ut(M))}function ot(M){switch(de(M),O.length){case 0:r.domElement.releasePointerCapture(M.pointerId),r.domElement.removeEventListener("pointermove",J),r.domElement.removeEventListener("pointerup",ot),r.dispatchEvent(_0),u=l.NONE;break;case 1:const st=O[0],xt=et[st];Zt({pointerId:st,pageX:xt.x,pageY:xt.y});break}}function pt(M){let st;switch(M.button){case 0:st=r.mouseButtons.LEFT;break;case 1:st=r.mouseButtons.MIDDLE;break;case 2:st=r.mouseButtons.RIGHT;break;default:st=-1}switch(st){case ls.DOLLY:if(r.enableZoom===!1)return;j(M),u=l.DOLLY;break;case ls.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(r.enablePan===!1)return;Mt(M),u=l.PAN}else{if(r.enableRotate===!1)return;N(M),u=l.ROTATE}break;case ls.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(r.enableRotate===!1)return;N(M),u=l.ROTATE}else{if(r.enablePan===!1)return;Mt(M),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Dh)}function Ut(M){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;k(M);break;case l.DOLLY:if(r.enableZoom===!1)return;at(M);break;case l.PAN:if(r.enablePan===!1)return;Tt(M);break}}function mt(M){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(M.preventDefault(),r.dispatchEvent(Dh),bt(Ot(M)),r.dispatchEvent(_0))}function Ot(M){const st=M.deltaMode,xt={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(st){case 1:xt.deltaY*=16;break;case 2:xt.deltaY*=100;break}return M.ctrlKey&&!L&&(xt.deltaY*=10),xt}function wt(M){M.key==="Control"&&(L=!0,r.domElement.getRootNode().addEventListener("keyup",At,{passive:!0,capture:!0}))}function At(M){M.key==="Control"&&(L=!1,r.domElement.getRootNode().removeEventListener("keyup",At,{passive:!0,capture:!0}))}function Dt(M){r.enabled===!1||r.enablePan===!1||Gt(M)}function Zt(M){switch(ue(M),O.length){case 1:switch(r.touches.ONE){case cs.ROTATE:if(r.enableRotate===!1)return;Bt(M),u=l.TOUCH_ROTATE;break;case cs.PAN:if(r.enablePan===!1)return;te(M),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case cs.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ee(M),u=l.TOUCH_DOLLY_PAN;break;case cs.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;jt(M),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Dh)}function It(M){switch(ue(M),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;Rt(M),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;Et(M),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;D(M),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;T(M),r.update();break;default:u=l.NONE}}function Ft(M){r.enabled!==!1&&M.preventDefault()}function _e(M){O.push(M.pointerId)}function de(M){delete et[M.pointerId];for(let st=0;st<O.length;st++)if(O[st]==M.pointerId){O.splice(st,1);return}}function ne(M){for(let st=0;st<O.length;st++)if(O[st]==M.pointerId)return!0;return!1}function ue(M){let st=et[M.pointerId];st===void 0&&(st=new ae,et[M.pointerId]=st),st.set(M.pageX,M.pageY)}function ie(M){const st=M.pointerId===O[0]?O[1]:O[0];return et[st]}r.domElement.addEventListener("contextmenu",Ft),r.domElement.addEventListener("pointerdown",W),r.domElement.addEventListener("pointercancel",ot),r.domElement.addEventListener("wheel",mt,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",wt,{passive:!0,capture:!0}),this.update()}}var Se=(o=>(o[o.Playing=0]="Playing",o[o.Paused=1]="Paused",o[o.GameOver=2]="GameOver",o[o.Initial=3]="Initial",o))(Se||{});const An=10,Rn=20,$e=1,nv=[0,16711680,65280,255,16776960,16711935,65535,16753920],jA={id:"I",matrix:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],colorIndex:1},ZA={id:"L",matrix:[[0,2,0],[0,2,0],[0,2,2]],colorIndex:2},KA={id:"J",matrix:[[0,3,0],[0,3,0],[3,3,0]],colorIndex:3},QA={id:"O",matrix:[[4,4],[4,4]],colorIndex:4},JA={id:"S",matrix:[[0,5,5],[5,5,0],[0,0,0]],colorIndex:5},$A={id:"Z",matrix:[[6,6,0],[0,6,6],[0,0,0]],colorIndex:6},t1={id:"T",matrix:[[0,7,0],[7,7,7],[0,0,0]],colorIndex:7},x0=[jA,ZA,KA,QA,JA,$A,t1],Uh=1e3,S0=50,e1=10,n1=o=>{const e=[o];let i=o;for(let r=0;r<3;r++){const l=i.length,u=Array(l).fill(null).map(()=>Array(l).fill(0));for(let d=0;d<l;d++)for(let h=0;h<l;h++)u[h][l-1-d]=i[d][h];e.push(u),i=u}return e},Lh=300,Nh=()=>Array(Rn).fill(null).map(()=>Array(An).fill(0)),i1=({gameState:o,setGameState:e,score:i,setScore:r,linesCleared:l,setLinesCleared:u,level:d,setLevel:h,nextPiecePreview:m,setNextPiecePreview:p,onGameOver:v,isAiActive:_})=>{const x=Jt.useRef(null),E=Jt.useRef(null),w=Jt.useRef(null),R=Jt.useRef(null),y=Jt.useRef(null),S=Jt.useRef(new qA),P=Jt.useRef(new Cs),C=Jt.useRef(new Cs),F=Jt.useRef(null),Y=Jt.useRef([]),H=Jt.useRef(null),[O,et]=Jt.useState(Nh()),[L,A]=Jt.useState(null),Z=Jt.useRef(Uh),lt=Jt.useRef(0),I=Jt.useRef(null),ut=Jt.useRef(Nh()),ct=Jt.useRef(!1),z=Jt.useRef(null),X=Jt.useRef(null),G=Jt.useRef(null),vt=75,_t=Jt.useRef(null),N=Jt.useRef([]),j=Jt.useRef(!1),Mt=Jt.useRef(null);Jt.useEffect(()=>{I.current=L},[L]),Jt.useEffect(()=>{ut.current=O},[O]);const k=Jt.useCallback(()=>{const Rt=Math.floor(Math.random()*x0.length),Et=x0[Rt],Pt=n1(Et.matrix.map(D=>D.map(T=>T>0?Et.colorIndex:0)));return{shape:Et,matrices:Pt,rotation:0,position:{row:0,col:Math.floor(An/2)-Math.floor(Pt[0][0].length/2)}}},[]),at=Jt.useCallback((Rt,Et,Pt)=>{const D=Rt.matrices[Rt.rotation];for(let T=0;T<D.length;T++)for(let W=0;W<D[T].length;W++)if(D[T][W]!==0){const J=Et.row+T,ot=Et.col+W;if(J>=Rn||ot<0||ot>=An||J>=0&&Pt[J]&&Pt[J][ot]!==0)return!0}return!1},[]);Jt.useEffect(()=>{const Rt=_t.current;if(_t.current=o,o===Se.Playing){if(Rt===Se.Initial||Rt===Se.GameOver||Rt===null){et(Nh());const Et=k();A(Et),p&&p(k()),Z.current=Math.max(100,Uh-(d-1)*S0),j.current=!1,N.current=[]}lt.current=performance.now(),ct.current=!1,X.current=null,z.current&&clearTimeout(z.current),G.current&&clearTimeout(G.current)}else(o===Se.GameOver||o===Se.Initial||o===Se.Paused)&&(o!==Se.Paused&&A(null),ct.current=!1,X.current=null,z.current&&clearTimeout(z.current),G.current&&clearTimeout(G.current),Mt.current&&(clearTimeout(Mt.current),Mt.current=null),j.current=!1,N.current=[])},[o,d,k,p]);const Tt=Jt.useCallback(Rt=>{if(!Rt){ct.current=!1;return}if(j.current)return;const Et=ut.current.map(J=>[...J]);Rt.matrices[Rt.rotation].forEach((J,ot)=>{J.forEach((pt,Ut)=>{if(pt!==0){const mt=Rt.position.row+ot,Ot=Rt.position.col+Ut;mt>=0&&mt<Rn&&Ot>=0&&Ot<An&&(Et[mt][Ot]=pt)}})});let D=!1;const T=Rt.matrices[Rt.rotation];for(let J=0;J<T.length;J++){for(let ot=0;ot<T[J].length;ot++)if(T[J][ot]!==0&&Rt.position.row+J<0){D=!0;break}if(D)break}if(D){v(),A(null),ct.current=!1,X.current=null,G.current&&clearTimeout(G.current),Mt.current&&clearTimeout(Mt.current),j.current=!1,N.current=[];return}let W=[];for(let J=Rn-1;J>=0;J--)Et[J].every(ot=>ot!==0)&&W.push(J);if(et(Et),W.length>0)N.current=W,j.current=!0,A(null),Mt.current&&clearTimeout(Mt.current),Mt.current=window.setTimeout(()=>{const J=ut.current.map(mt=>[...mt]);let ot=0;const pt=[...N.current].sort((mt,Ot)=>Ot-mt);for(const mt of pt)J.splice(mt,1),J.unshift(Array(An).fill(0)),ot++;if(et(J),ot>0){const mt=l+ot;u(mt),r(wt=>wt+ot*100*ot*d);const Ot=Math.floor(mt/e1)+1;Ot>d&&(h(Ot),Z.current=Math.max(100,Uh-(Ot-1)*S0))}let Ut=null;m?(Ut=m,p&&p(k())):(Ut=k(),p&&p(k())),Ut&&at(Ut,Ut.position,J)?v():A(Ut),N.current=[],j.current=!1,ct.current=!1,X.current=null,G.current&&clearTimeout(G.current),lt.current=performance.now()},Lh);else{let J=null;m?(J=m,p&&p(k())):(J=k(),p&&p(k())),J&&at(J,J.position,Et)?(v(),A(null)):A(J),ct.current=!1,X.current=null,G.current&&clearTimeout(G.current)}},[m,k,u,r,h,d,l,v,p,at,ut]),bt=Jt.useCallback((Rt,Et)=>{if(!I.current||o!==Se.Playing||j.current)return!1;const Pt={row:I.current.position.row+Rt,col:I.current.position.col+Et};return at(I.current,Pt,ut.current)?!1:(A(D=>D?{...D,position:Pt}:null),!0)},[at,o,A]),Gt=Jt.useCallback(()=>{!I.current||o!==Se.Playing||j.current||bt(1,0)||Tt(I.current)},[bt,Tt,o]),Bt=Jt.useCallback(()=>{if(!I.current||o!==Se.Playing||j.current)return;const Rt=(I.current.rotation+1)%I.current.matrices.length,Et={...I.current,rotation:Rt};if(!at(Et,I.current.position,ut.current))A(Et);else{const Pt=[-1,1,-2,2];for(const D of Pt){const T={row:I.current.position.row,col:I.current.position.col+D};if(!at(Et,T,ut.current)){A({...Et,position:T});return}}if(I.current.shape.id==="I"&&I.current.position.row<=1){const D={...I.current.position,row:I.current.position.row-1};if(!at(Et,D,ut.current)){A({...Et,position:D});return}const T={...I.current.position,row:I.current.position.row-2};if(!at(Et,T,ut.current)){A({...Et,position:T});return}}else if(I.current.position.row<=1){const D={...I.current.position,row:I.current.position.row-1};if(!at(Et,D,ut.current)){A({...Et,position:D});return}}}},[at,o,A]),te=Jt.useCallback(()=>{if(!I.current||o!==Se.Playing||j.current)return;let Rt={...I.current},Et={...Rt.position};for(;!at(Rt,{row:Et.row+1,col:Et.col},ut.current);)Et.row++;const Pt={...I.current,position:Et};Tt(Pt)},[o,at,Tt]);Jt.useEffect(()=>{const Rt=Et=>{if(!j.current){if(_&&o===Se.Playing){Et.preventDefault();return}if(o!==Se.Playing||!I.current){Et.key===" "&&o===Se.Playing&&!I.current&&!j.current&&Et.preventDefault();return}switch(Et.key===" "&&Et.preventDefault(),Et.key){case"ArrowLeft":bt(0,-1);break;case"ArrowRight":bt(0,1);break;case"ArrowDown":lt.current=performance.now(),Gt();break;case"ArrowUp":case"x":case"X":Bt();break;case" ":te();break}}};return window.addEventListener("keydown",Rt),()=>window.removeEventListener("keydown",Rt)},[o,bt,Gt,Bt,te,_]);const nt=(Rt,Et,Pt)=>{let D=0,T=0;const W=Rt.map(wt=>[...wt]),J=Et.matrices[Et.rotation];let ot=!1;if(J.forEach((wt,At)=>{wt.forEach((Dt,Zt)=>{if(Dt!==0){const It=Pt+At,Ft=Et.position.col+Zt;It>=0&&It<Rn&&Ft>=0&&Ft<An?W[It][Ft]=Dt:It<0&&(ot=!0)}})}),ot)return-1/0;for(let wt=Rn-1;wt>=0;)W[wt].every(At=>At!==0)?(T++,W.splice(wt,1),W.unshift(Array(An).fill(0))):wt--;D+=T*5e3;let pt=0;const Ut=Array(An).fill(0);for(let wt=0;wt<An;wt++){for(let At=0;At<Rn;At++)if(W[At][wt]!==0){Ut[wt]=Rn-At;break}pt+=Ut[wt]}D-=pt*10;let mt=0;for(let wt=0;wt<An;wt++){let At=!1;for(let Dt=0;Dt<Rn;Dt++)W[Dt][wt]!==0?At=!0:At&&W[Dt][wt]===0&&mt++}D-=mt*75;let Ot=0;for(let wt=0;wt<An-1;wt++)Ot+=Math.abs(Ut[wt]-Ut[wt+1]);return D-=Ot*3,D},ee=Jt.useCallback((Rt,Et)=>{let Pt=null;for(let D=0;D<Rt.matrices.length;D++){const T=Rt.matrices[D];let W=T[0].length,J=-1,ot=!0;for(let pt=0;pt<T.length;++pt)for(let Ut=0;Ut<T[pt].length;++Ut)T[pt][Ut]!==0&&(ot=!1,W=Math.min(W,Ut),J=Math.max(J,Ut));if(!ot)for(let pt=-W;pt<=An-1-J;pt++){const Ut={...Rt,rotation:D,position:{row:0,col:pt}};let mt=0;if(at(Ut,{row:0,col:pt},Et)){let Dt=!1;for(let Zt=-1;Zt>=-3;Zt--)if(!at(Ut,{row:Zt,col:pt},Et)){mt=Zt,Dt=!0;break}if(!Dt&&at(Ut,{row:0,col:pt},Et))continue}let Ot=mt;for(;!at(Ut,{row:Ot+1,col:pt},Et);)Ot++;const wt=Ot,At=nt(Et,{...Ut,position:{row:wt,col:pt}},wt);(Pt===null||At>Pt.score)&&(Pt={targetRotation:D,targetCol:pt,score:At,finalRow:wt})}}return Pt},[at]),jt=Jt.useCallback(()=>{if(G.current&&clearTimeout(G.current),!_||o!==Se.Playing||!I.current||!X.current||j.current){ct.current=!1,X.current=null;return}const Rt=I.current,Et=X.current;let Pt=!1;if(Rt.rotation!==Et.targetRotation){const D={...Rt,rotation:Et.targetRotation};if(!at(D,Rt.position,ut.current))A(D),Pt=!0;else{const T=[-1,1,-2,2];let W=!1;for(const J of T){const ot={...Rt.position,col:Rt.position.col+J};if(!at(D,ot,ut.current)){A({...D,position:ot}),Pt=!0,W=!0;break}}if(!W&&(Rt.shape.id==="I"||Rt.shape.id==="L"||Rt.shape.id==="J")&&Rt.position.row<=1){const J=[-1,-2];for(const ot of J){const pt={...Rt.position,row:Rt.position.row+ot};if(!at(D,pt,ut.current)){A({...D,position:pt}),Pt=!0,W=!0;break}}}if(!W){Tt(I.current);return}}}else if(Rt.position.col!==Et.targetCol){const D=Et.targetCol>Rt.position.col?1:-1;if(bt(0,D))Pt=!0;else{Tt(I.current);return}}else if(Rt.position.row<Et.finalRow)if(bt(1,0))Pt=!0;else{Tt(I.current);return}else{Tt(I.current);return}Pt&&ct.current?G.current=window.setTimeout(jt,vt):!Pt&&ct.current&&Tt(I.current)},[_,o,at,bt,Tt,A,ut,vt]);return Jt.useEffect(()=>{if(j.current){z.current&&clearTimeout(z.current),G.current&&clearTimeout(G.current),ct.current=!1,X.current=null;return}if(_&&o===Se.Playing&&I.current&&!ct.current){ct.current=!0,z.current&&clearTimeout(z.current);const Rt=Z.current>0?Math.min(Z.current/2,200):100;z.current=window.setTimeout(()=>{const Et=I.current,Pt=ut.current;if(!Et||!Pt||!_||o!==Se.Playing||j.current){ct.current=!1;return}const D=ee(Et,Pt);D?(X.current=D,jt()):I.current?bt(1,0)?ct.current=!1:Tt(I.current):ct.current=!1},Rt)}return()=>{z.current&&clearTimeout(z.current)}},[_,o,L,ee,jt,Tt,bt]),Jt.useEffect(()=>{_||(z.current&&clearTimeout(z.current),G.current&&clearTimeout(G.current),ct.current=!1,X.current=null)},[_]),Jt.useEffect(()=>{if(!x.current)return;E.current=new IA,E.current.background=new Te(2963272),w.current=new ui(75,x.current.clientWidth/x.current.clientHeight,.1,1e3),w.current.position.set(An*$e/2-$e/2,Rn*$e/4,Rn*$e*.75),R.current=new zA({antialias:!0}),R.current.setSize(x.current.clientWidth,x.current.clientHeight),R.current.setPixelRatio(window.devicePixelRatio),x.current.appendChild(R.current.domElement),y.current=new YA(w.current,R.current.domElement),y.current.target.set(An*$e/2-$e/2,Rn*$e/2-$e/2,0),y.current.enablePan=!0,y.current.enableZoom=!0;const Rt=new XA(16777215,.6);E.current.add(Rt);const Et=new kA(16777215,.8);Et.position.set(5,10,7.5),E.current.add(Et),E.current.add(P.current),E.current.add(C.current);const Pt=new Er(An*$e,Rn*$e,$e),D=new HA(Pt),T=new tv({color:11184810}),W=new FA(D,T);W.position.set((An/2-.5)*$e,(Rn/2-.5)*$e,-$e/2),E.current.add(W),F.current||(F.current=new Er($e*.95,$e*.95,$e*.95)),Y.current.length===0&&nv.forEach(ot=>{Y.current.push(new f0({color:ot}))}),H.current||(H.current=new f0({color:16777215,emissive:15658734,emissiveIntensity:1,transparent:!0,opacity:1}));const J=()=>{w.current&&R.current&&x.current&&(w.current.aspect=x.current.clientWidth/x.current.clientHeight,w.current.updateProjectionMatrix(),R.current.setSize(x.current.clientWidth,x.current.clientHeight))};return window.addEventListener("resize",J),S.current.start(),()=>{window.removeEventListener("resize",J),R.current&&R.current.dispose(),x.current&&R.current&&x.current.contains(R.current.domElement)&&x.current.removeChild(R.current.domElement),y.current&&y.current.dispose(),F.current&&(F.current.dispose(),F.current=null),Y.current.forEach(ot=>ot.dispose()),Y.current=[],H.current&&(H.current.dispose(),H.current=null),Pt.dispose(),T.dispose(),S.current.stop(),z.current&&clearTimeout(z.current),G.current&&clearTimeout(G.current),Mt.current&&clearTimeout(Mt.current)}},[]),Jt.useEffect(()=>{if(!E.current||!w.current||!R.current||!F.current||Y.current.length===0)return;let Rt;const Et=Pt=>{for(Rt=requestAnimationFrame(Et),o===Se.Playing&&I.current&&!_&&!j.current&&Pt-lt.current>Z.current&&(Gt(),lt.current=Pt);P.current.children.length>0;)P.current.remove(P.current.children[0]);for(;C.current.children.length>0;)C.current.remove(C.current.children[0]);if(ut.current.forEach((D,T)=>{D.forEach((W,J)=>{if(W!==0&&W<Y.current.length){let ot=Y.current[W];if(j.current&&N.current.includes(T)&&H.current){ot=H.current;const Ut=performance.now()%(Lh/1.5)/(Lh/1.5),mt=Math.sin(Ut*Math.PI)*.4+.6;H.current.emissiveIntensity=mt,H.current.opacity=mt}const pt=new Ti(F.current,ot);pt.position.set(J*$e,(Rn-1-T)*$e,0),P.current.add(pt)}})}),I.current){const D=I.current;D.matrices[D.rotation].forEach((W,J)=>{W.forEach((ot,pt)=>{if(ot!==0&&ot<Y.current.length){const Ut=Y.current[ot],mt=new Ti(F.current,Ut);mt.position.set((D.position.col+pt)*$e,(Rn-1-(D.position.row+J))*$e,0),C.current.add(mt)}})})}y.current&&y.current.update(),R.current.render(E.current,w.current)};return Rt=requestAnimationFrame(Et),()=>cancelAnimationFrame(Rt)},[o,Gt,_]),ce.jsx("div",{ref:x,className:"w-full h-full"})},a1=()=>{const[o,e]=Jt.useState(Se.Initial),[i,r]=Jt.useState(0),[l,u]=Jt.useState(0),[d,h]=Jt.useState(1),[m,p]=Jt.useState(null),[v,_]=Jt.useState(!1),x=()=>{r(0),u(0),h(1),p(null),e(Se.Playing)},E=()=>{o===Se.Playing&&e(Se.Paused)},w=()=>{o===Se.Paused&&e(Se.Playing)},R=Jt.useCallback(()=>{e(Se.GameOver)},[]),y=({piece:S})=>{if(!S)return ce.jsx("div",{className:"w-24 h-24 border border-gray-600 bg-gray-800 flex items-center justify-center text-xs rounded",children:"미리보기 없음"});const P=S.matrices[S.rotation];let C=P.length,F=-1,Y=P[0].length,H=-1,O=!1;if(P.forEach((Z,lt)=>{Z.forEach((I,ut)=>{I!==0&&(O=!0,C=Math.min(C,lt),F=Math.max(F,lt),Y=Math.min(Y,ut),H=Math.max(H,ut))})}),!O)return ce.jsx("div",{className:"w-24 h-24 border border-gray-600 bg-gray-800 flex items-center justify-center text-xs rounded",children:"미리보기 없음"});const et=F-C+1,L=H-Y+1,A=4;return ce.jsx("div",{className:"grid grid-cols-4 gap-0.5 p-1 border border-gray-600 bg-gray-700 rounded",style:{width:"6rem",height:"6rem"},children:Array(A*A).fill(0).map((Z,lt)=>{const I=Math.floor(lt/A),ut=Math.floor(lt%A),ct=Math.floor((A-et)/2),z=Math.floor((A-L)/2),X=I-ct,G=ut-z;let vt=0;X>=0&&X<et&&G>=0&&G<L&&P[X+C]&&P[X+C][G+Y]!==0&&(vt=P[X+C][G+Y]);const _t=vt?nv[vt]:"transparent",j={backgroundColor:typeof _t=="number"?`#${_t.toString(16).padStart(6,"0")}`:_t};return ce.jsx("div",{className:"w-full h-full",style:j},lt)})})};return ce.jsxs("div",{className:"flex flex-col w-screen h-screen bg-gray-900 text-white p-2 md:p-4 gap-2 items-center justify-start overflow-hidden",children:[ce.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-center w-full shrink-0 my-1 md:my-2",children:"테트리스 AI 마스터 3D"}),ce.jsxs("div",{className:"flex flex-col items-center shrink-0 my-1 md:my-2",children:[ce.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-1 md:mb-2 text-center",children:"다음 조각:"}),ce.jsx(y,{piece:m})]}),ce.jsxs("div",{className:"flex flex-col md:flex-row w-full flex-grow items-stretch gap-4 min-h-0",children:[ce.jsxs("div",{className:"flex-grow relative w-full md:w-3/4 min-h-0 order-1",children:[o===Se.GameOver&&ce.jsxs("div",{className:"absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-10",children:[ce.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-red-500",children:"게임 종료"}),ce.jsxs("p",{className:"text-lg md:text-xl mt-2",children:["점수: ",i]}),ce.jsx("button",{onClick:x,className:"mt-6 md:mt-8 px-5 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg md:text-xl font-semibold transition-colors",children:"다시 시작"})]}),o===Se.Initial&&ce.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-10",children:ce.jsx("button",{onClick:x,className:"px-6 py-3 md:px-8 md:py-4 bg-green-600 hover:bg-green-700 rounded-lg text-xl md:text-2xl font-semibold transition-colors",children:"게임 시작"})}),ce.jsx(i1,{gameState:o,setGameState:e,score:i,setScore:r,linesCleared:l,setLinesCleared:u,level:d,setLevel:h,nextPiecePreview:m,setNextPiecePreview:p,onGameOver:R,isAiActive:v})]}),ce.jsxs("div",{className:"w-full md:w-1/4 p-3 md:p-4 bg-gray-800 rounded-lg shadow-xl flex flex-col gap-3 items-stretch overflow-y-auto order-2 min-h-0",children:[ce.jsxs("div",{className:"flex flex-row gap-2 justify-start items-center mb-1 md:mb-2 w-full",children:[o===Se.Playing&&ce.jsx("button",{onClick:E,className:"px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold transition-colors",children:"일시정지"}),o===Se.Paused&&ce.jsx("button",{onClick:w,className:"px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-green-500 hover:bg-green-600 rounded text-white font-semibold transition-colors",children:"계속하기"}),(o===Se.Playing||o===Se.Paused||o===Se.GameOver)&&ce.jsx("button",{onClick:x,className:"px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition-colors",children:"게임 재시작"})]}),ce.jsxs("div",{className:"flex items-center justify-start gap-3 mt-2 md:mt-1",children:[" ",ce.jsx("label",{htmlFor:"ai-toggle",className:"text-sm md:text-base text-gray-300",children:"AI 위임:"}),ce.jsx("button",{id:"ai-toggle",onClick:()=>_(S=>!S),disabled:o!==Se.Playing&&o!==Se.Paused,className:`w-20 px-3 py-1 rounded text-white font-semibold text-sm transition-colors text-center ${v?"bg-blue-500 hover:bg-blue-600":"bg-gray-600 hover:bg-gray-500"} ${o!==Se.Playing&&o!==Se.Paused?"opacity-50 cursor-not-allowed":""}`,"aria-pressed":v,children:v?"ON":"OFF"})]}),ce.jsxs("div",{className:"w-full text-sm md:text-lg mt-2 md:mt-1",children:[ce.jsxs("p",{children:[ce.jsx("span",{className:"font-semibold",children:"점수:"})," ",i]}),ce.jsxs("p",{children:[ce.jsx("span",{className:"font-semibold",children:"줄 수:"})," ",l]}),ce.jsxs("p",{children:[ce.jsx("span",{className:"font-semibold",children:"레벨:"})," ",d]})]}),ce.jsxs("div",{className:"text-xs md:text-sm text-gray-400 w-full mt-2 md:mt-3",children:[ce.jsx("h3",{className:"font-semibold text-gray-300 md:text-gray-200",children:"조작법:"}),ce.jsx("p",{children:"화살표: 이동"}),ce.jsx("p",{children:"위 화살표 / X: 회전"}),ce.jsx("p",{children:"스페이스바: 빠른 내림"}),ce.jsx("p",{children:"마우스: 카메라 회전"}),v&&ce.jsx("p",{className:"text-yellow-400 mt-1",children:"AI 위임 활성됨 (수동 조작 비활성화)"})]})]})]})]})},iv=document.getElementById("root");if(!iv)throw new Error("Could not find root element to mount to");const r1=SS.createRoot(iv);r1.render(ce.jsx(hS.StrictMode,{children:ce.jsx(a1,{})}));
