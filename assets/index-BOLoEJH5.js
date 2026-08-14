(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function i0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Of={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function kx(){if(dg)return le;dg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function v(U,Z,mt){this.props=U,this.context=Z,this.refs=w,this.updater=mt||E}v.prototype.isReactComponent={},v.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=v.prototype;function O(U,Z,mt){this.props=U,this.context=Z,this.refs=w,this.updater=mt||E}var C=O.prototype=new x;C.constructor=O,R(C,v.prototype),C.isPureReactComponent=!0;var F=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function P(U,Z,mt,yt,X,ht){return mt=ht.ref,{$$typeof:o,type:U,key:Z,ref:mt!==void 0?mt:null,props:ht}}function it(U,Z){return P(U.type,Z,void 0,void 0,void 0,U.props)}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function A(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(mt){return Z[mt]})}var K=/\/+/g;function ut(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?A(""+U.key):Z.toString(36)}function B(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(B,B):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function st(U,Z,mt,yt,X){var ht=typeof U;(ht==="undefined"||ht==="boolean")&&(U=null);var vt=!1;if(U===null)vt=!0;else switch(ht){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(U.$$typeof){case o:case e:vt=!0;break;case g:return vt=U._init,st(vt(U._payload),Z,mt,yt,X)}}if(vt)return X=X(U),vt=yt===""?"."+ut(U,0):yt,F(X)?(mt="",vt!=null&&(mt=vt.replace(K,"$&/")+"/"),st(X,Z,mt,"",function(qt){return qt})):X!=null&&(N(X)&&(X=it(X,mt+(X.key==null||U&&U.key===X.key?"":(""+X.key).replace(K,"$&/")+"/")+vt)),Z.push(X)),1;vt=0;var At=yt===""?".":yt+":";if(F(U))for(var Pt=0;Pt<U.length;Pt++)yt=U[Pt],ht=At+ut(yt,Pt),vt+=st(yt,Z,mt,ht,X);else if(Pt=_(U),typeof Pt=="function")for(U=Pt.call(U),Pt=0;!(yt=U.next()).done;)yt=yt.value,ht=At+ut(yt,Pt++),vt+=st(yt,Z,mt,ht,X);else if(ht==="object"){if(typeof U.then=="function")return st(ft(U),Z,mt,yt,X);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return vt}function I(U,Z,mt){if(U==null)return U;var yt=[],X=0;return st(U,yt,"","",function(ht){return Z.call(mt,ht,X++)}),yt}function W(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(mt){(U._status===0||U._status===-1)&&(U._status=1,U._result=mt)},function(mt){(U._status===0||U._status===-1)&&(U._status=2,U._result=mt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var G=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function _t(){}return le.Children={map:I,forEach:function(U,Z,mt){I(U,function(){Z.apply(this,arguments)},mt)},count:function(U){var Z=0;return I(U,function(){Z++}),Z},toArray:function(U){return I(U,function(Z){return Z})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},le.Component=v,le.Fragment=i,le.Profiler=l,le.PureComponent=O,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.__COMPILER_RUNTIME={__proto__:null,c:function(U){return k.H.useMemoCache(U)}},le.cache=function(U){return function(){return U.apply(null,arguments)}},le.cloneElement=function(U,Z,mt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var yt=R({},U.props),X=U.key,ht=void 0;if(Z!=null)for(vt in Z.ref!==void 0&&(ht=void 0),Z.key!==void 0&&(X=""+Z.key),Z)!H.call(Z,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&Z.ref===void 0||(yt[vt]=Z[vt]);var vt=arguments.length-2;if(vt===1)yt.children=mt;else if(1<vt){for(var At=Array(vt),Pt=0;Pt<vt;Pt++)At[Pt]=arguments[Pt+2];yt.children=At}return P(U.type,X,void 0,void 0,ht,yt)},le.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},le.createElement=function(U,Z,mt){var yt,X={},ht=null;if(Z!=null)for(yt in Z.key!==void 0&&(ht=""+Z.key),Z)H.call(Z,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(X[yt]=Z[yt]);var vt=arguments.length-2;if(vt===1)X.children=mt;else if(1<vt){for(var At=Array(vt),Pt=0;Pt<vt;Pt++)At[Pt]=arguments[Pt+2];X.children=At}if(U&&U.defaultProps)for(yt in vt=U.defaultProps,vt)X[yt]===void 0&&(X[yt]=vt[yt]);return P(U,ht,void 0,void 0,null,X)},le.createRef=function(){return{current:null}},le.forwardRef=function(U){return{$$typeof:h,render:U}},le.isValidElement=N,le.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:W}},le.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},le.startTransition=function(U){var Z=k.T,mt={};k.T=mt;try{var yt=U(),X=k.S;X!==null&&X(mt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(_t,G)}catch(ht){G(ht)}finally{k.T=Z}},le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(U){return k.H.use(U)},le.useActionState=function(U,Z,mt){return k.H.useActionState(U,Z,mt)},le.useCallback=function(U,Z){return k.H.useCallback(U,Z)},le.useContext=function(U){return k.H.useContext(U)},le.useDebugValue=function(){},le.useDeferredValue=function(U,Z){return k.H.useDeferredValue(U,Z)},le.useEffect=function(U,Z,mt){var yt=k.H;if(typeof mt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(U,Z)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(U,Z,mt){return k.H.useImperativeHandle(U,Z,mt)},le.useInsertionEffect=function(U,Z){return k.H.useInsertionEffect(U,Z)},le.useLayoutEffect=function(U,Z){return k.H.useLayoutEffect(U,Z)},le.useMemo=function(U,Z){return k.H.useMemo(U,Z)},le.useOptimistic=function(U,Z){return k.H.useOptimistic(U,Z)},le.useReducer=function(U,Z,mt){return k.H.useReducer(U,Z,mt)},le.useRef=function(U){return k.H.useRef(U)},le.useState=function(U){return k.H.useState(U)},le.useSyncExternalStore=function(U,Z,mt){return k.H.useSyncExternalStore(U,Z,mt)},le.useTransition=function(){return k.H.useTransition()},le.version="19.1.0",le}var pg;function Nh(){return pg||(pg=1,Of.exports=kx()),Of.exports}var Kt=Nh();const Xx=i0(Kt);var Pf={exports:{}},bo={},zf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Wx(){return mg||(mg=1,function(o){function e(I,W){var G=I.length;I.push(W);t:for(;0<G;){var _t=G-1>>>1,U=I[_t];if(0<l(U,W))I[_t]=W,I[G]=U,G=_t;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var W=I[0],G=I.pop();if(G!==W){I[0]=G;t:for(var _t=0,U=I.length,Z=U>>>1;_t<Z;){var mt=2*(_t+1)-1,yt=I[mt],X=mt+1,ht=I[X];if(0>l(yt,G))X<U&&0>l(ht,yt)?(I[_t]=ht,I[X]=G,_t=X):(I[_t]=yt,I[mt]=G,_t=mt);else if(X<U&&0>l(ht,G))I[_t]=ht,I[X]=G,_t=X;else break t}}return W}function l(I,W){var G=I.sortIndex-W.sortIndex;return G!==0?G:I.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,S=null,_=3,E=!1,R=!1,w=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function F(I){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=I)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function k(I){if(w=!1,F(I),!R)if(i(m)!==null)R=!0,H||(H=!0,ut());else{var W=i(p);W!==null&&st(k,W.startTime-I)}}var H=!1,P=-1,it=5,N=-1;function A(){return v?!0:!(o.unstable_now()-N<it)}function K(){if(v=!1,H){var I=o.unstable_now();N=I;var W=!0;try{t:{R=!1,w&&(w=!1,O(P),P=-1),E=!0;var G=_;try{e:{for(F(I),S=i(m);S!==null&&!(S.expirationTime>I&&A());){var _t=S.callback;if(typeof _t=="function"){S.callback=null,_=S.priorityLevel;var U=_t(S.expirationTime<=I);if(I=o.unstable_now(),typeof U=="function"){S.callback=U,F(I),W=!0;break e}S===i(m)&&r(m),F(I)}else r(m);S=i(m)}if(S!==null)W=!0;else{var Z=i(p);Z!==null&&st(k,Z.startTime-I),W=!1}}break t}finally{S=null,_=G,E=!1}W=void 0}}finally{W?ut():H=!1}}}var ut;if(typeof C=="function")ut=function(){C(K)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,ft=B.port2;B.port1.onmessage=K,ut=function(){ft.postMessage(null)}}else ut=function(){x(K,0)};function st(I,W){P=x(function(){I(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):it=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(I){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var G=_;_=W;try{return I()}finally{_=G}},o.unstable_requestPaint=function(){v=!0},o.unstable_runWithPriority=function(I,W){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var G=_;_=I;try{return W()}finally{_=G}},o.unstable_scheduleCallback=function(I,W,G){var _t=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?_t+G:_t):G=_t,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=G+U,I={id:g++,callback:W,priorityLevel:I,startTime:G,expirationTime:U,sortIndex:-1},G>_t?(I.sortIndex=G,e(p,I),i(m)===null&&I===i(p)&&(w?(O(P),P=-1):w=!0,st(k,G-_t))):(I.sortIndex=U,e(m,I),R||E||(R=!0,H||(H=!0,ut()))),I},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(I){var W=_;return function(){var G=_;_=W;try{return I.apply(this,arguments)}finally{_=G}}}}(Bf)),Bf}var gg;function qx(){return gg||(gg=1,zf.exports=Wx()),zf.exports}var If={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Yx(){if(_g)return Mn;_g=1;var o=Nh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},Mn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Mn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Mn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Mn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=h(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Mn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Mn.requestFormReset=function(m){r.d.r(m)},Mn.unstable_batchedUpdates=function(m,p){return m(p)},Mn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Mn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Mn.version="19.1.0",Mn}var vg;function jx(){if(vg)return If.exports;vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=Yx(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xg;function Zx(){if(xg)return bo;xg=1;var o=qx(),e=Nh(),i=jx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var M=!1,b=c.child;b;){if(b===a){M=!0,a=c,s=f;break}if(b===s){M=!0,s=c,a=f;break}b=b.sibling}if(!M){for(b=f.child;b;){if(b===a){M=!0,a=f,s=c;break}if(b===s){M=!0,s=f,a=c;break}b=b.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),C=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),it=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var B=Symbol.for("react.client.reference");function ft(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===B?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case v:return"Profiler";case w:return"StrictMode";case k:return"Suspense";case H:return"SuspenseList";case N:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case C:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ft(t.type)||"Memo";case it:n=t._payload,t=t._init;try{return ft(t(n))}catch{}}return null}var st=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},_t=[],U=-1;function Z(t){return{current:t}}function mt(t){0>U||(t.current=_t[U],_t[U]=null,U--)}function yt(t,n){U++,_t[U]=t.current,t.current=n}var X=Z(null),ht=Z(null),vt=Z(null),At=Z(null);function Pt(t,n){switch(yt(vt,n),yt(ht,t),yt(X,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Gm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Gm(n),t=Vm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}mt(X),yt(X,t)}function qt(){mt(X),mt(ht),mt(vt)}function re(t){t.memoizedState!==null&&yt(At,t);var n=X.current,a=Vm(n,t.type);n!==a&&(yt(ht,t),yt(X,a))}function et(t){ht.current===t&&(mt(X),mt(ht)),At.current===t&&(mt(At),So._currentValue=G)}var te=Object.prototype.hasOwnProperty,Wt=o.unstable_scheduleCallback,Dt=o.unstable_cancelCallback,Et=o.unstable_shouldYield,Bt=o.unstable_requestPaint,D=o.unstable_now,T=o.unstable_getCurrentPriorityLevel,Y=o.unstable_ImmediatePriority,$=o.unstable_UserBlockingPriority,lt=o.unstable_NormalPriority,pt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Mt=o.log,Ot=o.unstable_setDisableYieldValue,Rt=null,bt=null;function Ct(t){if(typeof Mt=="function"&&Ot(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Rt,t)}catch{}}var It=Math.clz32?Math.clz32:pe,Ft=Math.log,Ht=Math.LN2;function pe(t){return t>>>=0,t===0?32:31-(Ft(t)/Ht|0)|0}var ce=256,xe=4194304;function oe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var b=s&134217727;return b!==0?(s=b&~f,s!==0?c=oe(s):(M&=b,M!==0?c=oe(M):a||(a=b&~t,a!==0&&(c=oe(a))))):(b=s&~f,b!==0?c=oe(b):M!==0?c=oe(M):a||(a=s&~t,a!==0&&(c=oe(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function kt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function y(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(){var t=ce;return ce<<=1,(ce&4194048)===0&&(ce=256),t}function xt(){var t=xe;return xe<<=1,(xe&62914560)===0&&(xe=4194304),t}function wt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function zt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ge(t,n,a,s,c,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,z=t.expirationTimes,tt=t.hiddenUpdates;for(a=M&~a;0<a;){var gt=31-It(a),Tt=1<<gt;b[gt]=0,z[gt]=-1;var at=tt[gt];if(at!==null)for(tt[gt]=null,gt=0;gt<at.length;gt++){var rt=at[gt];rt!==null&&(rt.lane&=-536870913)}a&=~Tt}s!==0&&ue(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function ue(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-It(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function Oe(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-It(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function We(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ee(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ge(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:og(t.type))}function qe(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var Ye=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ye,Ve="__reactProps$"+Ye,In="__reactContainer$"+Ye,ri="__reactEvents$"+Ye,Io="__reactListeners$"+Ye,_r="__reactHandles$"+Ye,Rs="__reactResources$"+Ye,Qi="__reactMarker$"+Ye;function Cs(t){delete t[Re],delete t[Ve],delete t[ri],delete t[Io],delete t[_r]}function Ji(t){var n=t[Re];if(n)return n;for(var a=t.parentNode;a;){if(n=a[In]||a[Re]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=qm(t);t!==null;){if(a=t[Re])return a;t=qm(t)}return n}t=a,a=t.parentNode}return null}function $i(t){if(t=t[Re]||t[In]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function L(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function j(t){var n=t[Rs];return n||(n=t[Rs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(t){t[Qi]=!0}var dt=new Set,ct={};function Lt(t,n){Vt(t,n),Vt(t+"Capture",n)}function Vt(t,n){for(ct[t]=n,t=0;t<n.length;t++)dt.add(n[t])}var jt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},ne={};function ie(t){return te.call(ne,t)?!0:te.call(Qt,t)?!1:jt.test(t)?ne[t]=!0:(Qt[t]=!0,!1)}function $t(t,n,a){if(ie(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function ke(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var je,jn;function Ae(t){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",jn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+t+jn}var ae=!1;function Fa(t,n){if(!t||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(rt){var at=rt}Reflect.construct(t,[],Tt)}else{try{Tt.call()}catch(rt){at=rt}t.call(Tt.prototype)}}else{try{throw Error()}catch(rt){at=rt}(Tt=t())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),M=f[0],b=f[1];if(M&&b){var z=M.split(`
`),tt=b.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===tt.length)for(s=z.length-1,c=tt.length-1;1<=s&&0<=c&&z[s]!==tt[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==tt[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==tt[c]){var gt=`
`+z[s].replace(" at new "," at ");return t.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",t.displayName)),gt}while(1<=s&&0<=c);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ae(a):""}function Be(t){switch(t.tag){case 26:case 27:case 5:return Ae(t.type);case 16:return Ae("Lazy");case 13:return Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return Fa(t.type,!1);case 11:return Fa(t.type.render,!1);case 1:return Fa(t.type,!0);case 31:return Ae("Activity");default:return""}}function gi(t){try{var n="";do n+=Be(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function An(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ta(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ws(t){var n=ta(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){s=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Je(t){t._valueTracker||(t._valueTracker=ws(t))}function si(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=ta(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dn=/[\n"\\]/g;function xn(t){return t.replace(Dn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ds(t,n,a,s,c,f,M,b){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+An(n)):t.value!==""+An(n)&&(t.value=""+An(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?Uc(t,M,An(n)):a!=null?Uc(t,M,An(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+An(b):t.removeAttribute("name")}function Us(t,n,a,s,c,f,M,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+An(a):"",n=n!=null?""+An(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=b?t.checked:!!s,t.defaultChecked=!!s,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Uc(t,n,a){n==="number"&&ea(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+An(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Fh(t,n,a){if(n!=null&&(n=""+An(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+An(a):""}function Hh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(st(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=An(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function xr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var H0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||H0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Vh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Gh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Gh(t,f,n[f])}function Lc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),V0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fo(t){return V0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Nc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sr=null,Mr=null;function kh(t){var n=$i(t);if(n&&(t=n.stateNode)){var a=t[Ve]||null;t:switch(t=n.stateNode,n.type){case"input":if(Ds(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Ve]||null;if(!c)throw Error(r(90));Ds(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&si(s)}break t;case"textarea":Fh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vr(t,!!a.multiple,n,!1)}}}var Pc=!1;function Xh(t,n,a){if(Pc)return t(n,a);Pc=!0;try{var s=t(n);return s}finally{if(Pc=!1,(Sr!==null||Mr!==null)&&(Tl(),Sr&&(n=Sr,t=Mr,Mr=Sr=null,kh(n),t)))for(n=0;n<t.length;n++)kh(t[n])}}function Ls(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Ve]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(Ci)try{var Ns={};Object.defineProperty(Ns,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Ns,Ns),window.removeEventListener("test",Ns,Ns)}catch{zc=!1}var na=null,Bc=null,Ho=null;function Wh(){if(Ho)return Ho;var t,n=Bc,a=n.length,s,c="value"in na?na.value:na.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var M=a-t;for(s=1;s<=M&&n[a-s]===c[f-s];s++);return Ho=c.slice(t,1<s?1-s:void 0)}function Go(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function qh(){return!1}function Un(t){function n(a,s,c,f,M){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Vo:qh,this.isPropagationStopped=qh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ko=Un(Ha),Os=g({},Ha,{view:0,detail:0}),k0=Un(Os),Ic,Fc,Ps,Xo=g({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ps&&(Ps&&t.type==="mousemove"?(Ic=t.screenX-Ps.screenX,Fc=t.screenY-Ps.screenY):Fc=Ic=0,Ps=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),Yh=Un(Xo),X0=g({},Xo,{dataTransfer:0}),W0=Un(X0),q0=g({},Os,{relatedTarget:0}),Hc=Un(q0),Y0=g({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),j0=Un(Y0),Z0=g({},Ha,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),K0=Un(Z0),Q0=g({},Ha,{data:0}),jh=Un(Q0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tv[t])?!!n[t]:!1}function Gc(){return ev}var nv=g({},Os,{key:function(t){if(t.key){var n=J0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),iv=Un(nv),av=g({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=Un(av),rv=g({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),sv=Un(rv),ov=g({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=Un(ov),cv=g({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uv=Un(cv),fv=g({},Ha,{newState:0,oldState:0}),hv=Un(fv),dv=[9,13,27,32],Vc=Ci&&"CompositionEvent"in window,zs=null;Ci&&"documentMode"in document&&(zs=document.documentMode);var pv=Ci&&"TextEvent"in window&&!zs,Kh=Ci&&(!Vc||zs&&8<zs&&11>=zs),Qh=" ",Jh=!1;function $h(t,n){switch(t){case"keyup":return dv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function td(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yr=!1;function mv(t,n){switch(t){case"compositionend":return td(n);case"keypress":return n.which!==32?null:(Jh=!0,Qh);case"textInput":return t=n.data,t===Qh&&Jh?null:t;default:return null}}function gv(t,n){if(yr)return t==="compositionend"||!Vc&&$h(t,n)?(t=Wh(),Ho=Bc=na=null,yr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kh&&n.locale!=="ko"?null:n.data;default:return null}}var _v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_v[t.type]:n==="textarea"}function nd(t,n,a,s){Sr?Mr?Mr.push(s):Mr=[s]:Sr=s,n=Dl(n,"onChange"),0<n.length&&(a=new ko("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Bs=null,Is=null;function vv(t){zm(t,0)}function Wo(t){var n=L(t);if(si(n))return t}function id(t,n){if(t==="change")return n}var ad=!1;if(Ci){var kc;if(Ci){var Xc="oninput"in document;if(!Xc){var rd=document.createElement("div");rd.setAttribute("oninput","return;"),Xc=typeof rd.oninput=="function"}kc=Xc}else kc=!1;ad=kc&&(!document.documentMode||9<document.documentMode)}function sd(){Bs&&(Bs.detachEvent("onpropertychange",od),Is=Bs=null)}function od(t){if(t.propertyName==="value"&&Wo(Is)){var n=[];nd(n,Is,t,Oc(t)),Xh(vv,n)}}function xv(t,n,a){t==="focusin"?(sd(),Bs=n,Is=a,Bs.attachEvent("onpropertychange",od)):t==="focusout"&&sd()}function Sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wo(Is)}function Mv(t,n){if(t==="click")return Wo(n)}function yv(t,n){if(t==="input"||t==="change")return Wo(n)}function Ev(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Fn=typeof Object.is=="function"?Object.is:Ev;function Fs(t,n){if(Fn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!te.call(n,c)||!Fn(t[c],n[c]))return!1}return!0}function ld(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cd(t,n){var a=ld(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ld(a)}}function ud(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ud(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ea(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ea(t.document)}return n}function Wc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Tv=Ci&&"documentMode"in document&&11>=document.documentMode,Er=null,qc=null,Hs=null,Yc=!1;function hd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yc||Er==null||Er!==ea(s)||(s=Er,"selectionStart"in s&&Wc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Hs&&Fs(Hs,s)||(Hs=s,s=Dl(qc,"onSelect"),0<s.length&&(n=new ko("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Ga(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},jc={},dd={};Ci&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Va(t){if(jc[t])return jc[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in dd)return jc[t]=n[a];return t}var pd=Va("animationend"),md=Va("animationiteration"),gd=Va("animationstart"),bv=Va("transitionrun"),Av=Va("transitionstart"),Rv=Va("transitioncancel"),_d=Va("transitionend"),vd=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function oi(t,n){vd.set(t,n),Lt(n,[t])}var xd=new WeakMap;function Zn(t,n){if(typeof t=="object"&&t!==null){var a=xd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:gi(n)},xd.set(t,n),n)}return{value:t,source:n,stack:gi(n)}}var Kn=[],br=0,Kc=0;function qo(){for(var t=br,n=Kc=br=0;n<t;){var a=Kn[n];Kn[n++]=null;var s=Kn[n];Kn[n++]=null;var c=Kn[n];Kn[n++]=null;var f=Kn[n];if(Kn[n++]=null,s!==null&&c!==null){var M=s.pending;M===null?c.next=c:(c.next=M.next,M.next=c),s.pending=c}f!==0&&Sd(a,c,f)}}function Yo(t,n,a,s){Kn[br++]=t,Kn[br++]=n,Kn[br++]=a,Kn[br++]=s,Kc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Qc(t,n,a,s){return Yo(t,n,a,s),jo(t)}function Ar(t,n){return Yo(t,null,null,n),jo(t)}function Sd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-It(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function jo(t){if(50<fo)throw fo=0,af=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function Cv(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,n,a,s){return new Cv(t,n,a,s)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wi(t,n){var a=t.alternate;return a===null?(a=Hn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Md(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Zo(t,n,a,s,c,f){var M=0;if(s=t,typeof t=="function")Jc(t)&&(M=1);else if(typeof t=="string")M=Dx(t,a,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case N:return t=Hn(31,a,n,c),t.elementType=N,t.lanes=f,t;case R:return ka(a.children,c,f,n);case w:M=8,c|=24;break;case v:return t=Hn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case k:return t=Hn(13,a,n,c),t.elementType=k,t.lanes=f,t;case H:return t=Hn(19,a,n,c),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case C:M=10;break t;case O:M=9;break t;case F:M=11;break t;case P:M=14;break t;case it:M=16,s=null;break t}M=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Hn(M,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function ka(t,n,a,s){return t=Hn(7,t,s,n),t.lanes=a,t}function $c(t,n,a){return t=Hn(6,t,null,n),t.lanes=a,t}function tu(t,n,a){return n=Hn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Cr=[],wr=0,Ko=null,Qo=0,Qn=[],Jn=0,Xa=null,Di=1,Ui="";function Wa(t,n){Cr[wr++]=Qo,Cr[wr++]=Ko,Ko=t,Qo=n}function yd(t,n,a){Qn[Jn++]=Di,Qn[Jn++]=Ui,Qn[Jn++]=Xa,Xa=t;var s=Di;t=Ui;var c=32-It(s)-1;s&=~(1<<c),a+=1;var f=32-It(n)+c;if(30<f){var M=c-c%5;f=(s&(1<<M)-1).toString(32),s>>=M,c-=M,Di=1<<32-It(n)+c|a<<c|s,Ui=f+t}else Di=1<<f|a<<c|s,Ui=t}function eu(t){t.return!==null&&(Wa(t,1),yd(t,1,0))}function nu(t){for(;t===Ko;)Ko=Cr[--wr],Cr[wr]=null,Qo=Cr[--wr],Cr[wr]=null;for(;t===Xa;)Xa=Qn[--Jn],Qn[Jn]=null,Ui=Qn[--Jn],Qn[Jn]=null,Di=Qn[--Jn],Qn[Jn]=null}var Rn=null,Ze=null,be=!1,qa=null,_i=!1,iu=Error(r(519));function Ya(t){var n=Error(r(418,""));throw ks(Zn(n,t)),iu}function Ed(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Re]=t,n[Ve]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)ve(po[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Us(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Je(n);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Hh(n,s.value,s.defaultValue,s.children),Je(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Hm(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Ya(t)}function Td(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 13:_i=!1;return;case 27:case 3:_i=!0;return;default:Rn=Rn.return}}function Gs(t){if(t!==Rn)return!1;if(!be)return Td(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&Ze&&Ya(t),Td(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Ze=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Ze=null}}else n===27?(n=Ze,va(t.type)?(t=Tf,Tf=null,Ze=t):Ze=n):Ze=Rn?ci(t.stateNode.nextSibling):null;return!0}function Vs(){Ze=Rn=null,be=!1}function bd(){var t=qa;return t!==null&&(On===null?On=t:On.push.apply(On,t),qa=null),t}function ks(t){qa===null?qa=[t]:qa.push(t)}var au=Z(null),ja=null,Li=null;function ia(t,n,a){yt(au,n._currentValue),n._currentValue=a}function Ni(t){t._currentValue=au.current,mt(au)}function ru(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function su(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var M=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var z=0;z<n.length;z++)if(b.context===n[z]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),ru(f.return,a,t),s||(M=null);break t}f=b.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),ru(M,a,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Xs(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var b=c.type;Fn(c.pendingProps.value,M.value)||(t!==null?t.push(b):t=[b])}}else if(c===At.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&su(n,t,a,s),n.flags|=262144}function Jo(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Za(t){ja=t,Li=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return Ad(ja,t)}function $o(t,n){return ja===null&&Za(t),Ad(t,n)}function Ad(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Li===null){if(t===null)throw Error(r(308));Li=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Li=Li.next=n;return a}var wv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Dv=o.unstable_scheduleCallback,Uv=o.unstable_NormalPriority,sn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ou(){return{controller:new wv,data:new Map,refCount:0}}function Ws(t){t.refCount--,t.refCount===0&&Dv(Uv,function(){t.controller.abort()})}var qs=null,lu=0,Dr=0,Ur=null;function Lv(t,n){if(qs===null){var a=qs=[];lu=0,Dr=ff(),Ur={status:"pending",value:void 0,then:function(s){a.push(s)}}}return lu++,n.then(Rd,Rd),n}function Rd(){if(--lu===0&&qs!==null){Ur!==null&&(Ur.status="fulfilled");var t=qs;qs=null,Dr=0,Ur=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Nv(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Cd=I.S;I.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Lv(t,n),Cd!==null&&Cd(t,n)};var Ka=Z(null);function cu(){var t=Ka.current;return t!==null?t:Ie.pooledCache}function tl(t,n){n===null?yt(Ka,Ka.current):yt(Ka,n.pool)}function wd(){var t=cu();return t===null?null:{parent:sn._currentValue,pool:t}}var Ys=Error(r(460)),Dd=Error(r(474)),el=Error(r(542)),uu={then:function(){}};function Ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nl(){}function Ld(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(nl,nl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Od(t),t;default:if(typeof n.status=="string")n.then(nl,nl);else{if(t=Ie,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Od(t),t}throw js=n,Ys}}var js=null;function Nd(){if(js===null)throw Error(r(459));var t=js;return js=null,t}function Od(t){if(t===Ys||t===el)throw Error(r(483))}var aa=!1;function fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function sa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=jo(t),Sd(t,null,a),n}return Yo(t,s,n,a),jo(t)}function Zs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Oe(t,a)}}function du(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pu=!1;function Ks(){if(pu){var t=Ur;if(t!==null)throw t}}function Qs(t,n,a,s){pu=!1;var c=t.updateQueue;aa=!1;var f=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,tt=z.next;z.next=null,M===null?f=tt:M.next=tt,M=z;var gt=t.alternate;gt!==null&&(gt=gt.updateQueue,b=gt.lastBaseUpdate,b!==M&&(b===null?gt.firstBaseUpdate=tt:b.next=tt,gt.lastBaseUpdate=z))}if(f!==null){var Tt=c.baseState;M=0,gt=tt=z=null,b=f;do{var at=b.lane&-536870913,rt=at!==b.lane;if(rt?(Me&at)===at:(s&at)===at){at!==0&&at===Dr&&(pu=!0),gt!==null&&(gt=gt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Jt=t,Yt=b;at=n;var Le=a;switch(Yt.tag){case 1:if(Jt=Yt.payload,typeof Jt=="function"){Tt=Jt.call(Le,Tt,at);break t}Tt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=Yt.payload,at=typeof Jt=="function"?Jt.call(Le,Tt,at):Jt,at==null)break t;Tt=g({},Tt,at);break t;case 2:aa=!0}}at=b.callback,at!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},gt===null?(tt=gt=rt,z=Tt):gt=gt.next=rt,M|=at;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;rt=b,b=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);gt===null&&(z=Tt),c.baseState=z,c.firstBaseUpdate=tt,c.lastBaseUpdate=gt,f===null&&(c.shared.lanes=0),pa|=M,t.lanes=M,t.memoizedState=Tt}}function Pd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function zd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pd(a[t],n)}var Lr=Z(null),il=Z(0);function Bd(t,n){t=Hi,yt(il,t),yt(Lr,n),Hi=t|n.baseLanes}function mu(){yt(il,Hi),yt(Lr,Lr.current)}function gu(){Hi=il.current,mt(Lr),mt(il)}var oa=0,de=null,De=null,en=null,al=!1,Nr=!1,Qa=!1,rl=0,Js=0,Or=null,Ov=0;function $e(){throw Error(r(321))}function _u(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Fn(t[a],n[a]))return!1;return!0}function vu(t,n,a,s,c,f){return oa=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?Sp:Mp,Qa=!1,f=a(s,c),Qa=!1,Nr&&(f=Fd(n,a,s,c)),Id(t),f}function Id(t){I.H=fl;var n=De!==null&&De.next!==null;if(oa=0,en=De=de=null,al=!1,Js=0,Or=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&Jo(t)&&(un=!0))}function Fd(t,n,a,s){de=t;var c=0;do{if(Nr&&(Or=null),Js=0,Nr=!1,25<=c)throw Error(r(301));if(c+=1,en=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Gv,f=n(a,s)}while(Nr);return f}function Pv(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?$s(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(de.flags|=1024),n}function xu(){var t=rl!==0;return rl=0,t}function Su(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mu(t){if(al){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}al=!1}oa=0,en=De=de=null,Nr=!1,Js=rl=0,Or=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?de.memoizedState=en=t:en=en.next=t,en}function nn(){if(De===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=en===null?de.memoizedState:en.next;if(n!==null)en=n,De=t;else{if(t===null)throw de.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},en===null?de.memoizedState=en=t:en=en.next=t}return en}function yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(t){var n=Js;return Js+=1,Or===null&&(Or=[]),t=Ld(Or,t,n),n=de,(en===null?n.memoizedState:en.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Sp:Mp),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return $s(t);if(t.$$typeof===C)return Sn(t)}throw Error(r(438,String(t)))}function Eu(t){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=yu(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=A;return n.index++,a}function Oi(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=nn();return Tu(n,De,t)}function Tu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var M=c.next;c.next=f.next,f.next=M}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=M=null,z=null,tt=n,gt=!1;do{var Tt=tt.lane&-536870913;if(Tt!==tt.lane?(Me&Tt)===Tt:(oa&Tt)===Tt){var at=tt.revertLane;if(at===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),Tt===Dr&&(gt=!0);else if((oa&at)===at){tt=tt.next,at===Dr&&(gt=!0);continue}else Tt={lane:0,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(b=z=Tt,M=f):z=z.next=Tt,de.lanes|=at,pa|=at;Tt=tt.action,Qa&&a(f,Tt),f=tt.hasEagerState?tt.eagerState:a(f,Tt)}else at={lane:Tt,revertLane:tt.revertLane,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},z===null?(b=z=at,M=f):z=z.next=at,de.lanes|=Tt,pa|=Tt;tt=tt.next}while(tt!==null&&tt!==n);if(z===null?M=f:z.next=b,!Fn(f,t.memoizedState)&&(un=!0,gt&&(a=Ur,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function bu(t){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do f=t(f,M.action),M=M.next;while(M!==c);Fn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Hd(t,n,a){var s=de,c=nn(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Fn((De||c).memoizedState,a);M&&(c.memoizedState=a,un=!0),c=c.queue;var b=kd.bind(null,s,c,t);if(to(2048,8,b,[t]),c.getSnapshot!==n||M||en!==null&&en.memoizedState.tag&1){if(s.flags|=2048,Pr(9,ll(),Vd.bind(null,s,c,a,n),null),Ie===null)throw Error(r(349));f||(oa&124)!==0||Gd(s,n,a)}return a}function Gd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=yu(),de.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Vd(t,n,a,s){n.value=a,n.getSnapshot=s,Xd(n)&&Wd(t)}function kd(t,n,a){return a(function(){Xd(n)&&Wd(t)})}function Xd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Fn(t,a)}catch{return!0}}function Wd(t){var n=Ar(t,2);n!==null&&Wn(n,t,2)}function Au(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),Qa){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:t},n}function qd(t,n,a,s){return t.baseState=a,Tu(t,De,typeof s=="function"?s:Oi)}function zv(t,n,a,s,c){if(ul(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};I.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Yd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Yd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=I.T,M={};I.T=M;try{var b=a(c,s),z=I.S;z!==null&&z(M,b),jd(t,n,b)}catch(tt){Ru(t,n,tt)}finally{I.T=f}}else try{f=a(c,s),jd(t,n,f)}catch(tt){Ru(t,n,tt)}}function jd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Zd(t,n,s)},function(s){return Ru(t,n,s)}):Zd(t,n,a)}function Zd(t,n,a){n.status="fulfilled",n.value=a,Kd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Yd(t,a)))}function Ru(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Kd(n),n=n.next;while(n!==s)}t.action=null}function Kd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Qd(t,n){return n}function Jd(t,n){if(be){var a=Ie.formState;if(a!==null){t:{var s=de;if(be){if(Ze){e:{for(var c=Ze,f=_i;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ze=ci(c.nextSibling),s=c.data==="F!";break t}}Ya(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qd,lastRenderedState:n},a.queue=s,a=_p.bind(null,de,s),s.dispatch=a,s=Au(!1),f=Lu.bind(null,de,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=zv.bind(null,de,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function $d(t){var n=nn();return tp(n,De,t)}function tp(t,n,a){if(n=Tu(t,n,Qd)[0],t=ol(Oi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(M){throw M===Ys?el:M}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Pr(9,ll(),Bv.bind(null,c,a),null)),[s,f,t]}function Bv(t,n){t.action=n}function ep(t){var n=nn(),a=De;if(a!==null)return tp(n,a,t);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Pr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=yu(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function ll(){return{destroy:void 0,resource:void 0}}function np(){return nn().memoizedState}function cl(t,n,a,s){var c=Ln();s=s===void 0?null:s,de.flags|=t,c.memoizedState=Pr(1|n,ll(),a,s)}function to(t,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;De!==null&&s!==null&&_u(s,De.memoizedState.deps)?c.memoizedState=Pr(n,f,a,s):(de.flags|=t,c.memoizedState=Pr(1|n,f,a,s))}function ip(t,n){cl(8390656,8,t,n)}function ap(t,n){to(2048,8,t,n)}function rp(t,n){return to(4,2,t,n)}function sp(t,n){return to(4,4,t,n)}function op(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function lp(t,n,a){a=a!=null?a.concat([t]):null,to(4,4,op.bind(null,n,t),a)}function Cu(){}function cp(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&_u(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function up(t,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&_u(n,s[1]))return s[0];if(s=t(),Qa){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[s,n],s}function wu(t,n,a){return a===void 0||(oa&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=dm(),de.lanes|=t,pa|=t,a)}function fp(t,n,a,s){return Fn(a,n)?a:Lr.current!==null?(t=wu(t,a,s),Fn(t,n)||(un=!0),t):(oa&42)===0?(un=!0,t.memoizedState=a):(t=dm(),de.lanes|=t,pa|=t,n)}function hp(t,n,a,s,c){var f=W.p;W.p=f!==0&&8>f?f:8;var M=I.T,b={};I.T=b,Lu(t,!1,n,a);try{var z=c(),tt=I.S;if(tt!==null&&tt(b,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var gt=Nv(z,s);eo(t,n,gt,Xn(t))}else eo(t,n,s,Xn(t))}catch(Tt){eo(t,n,{then:function(){},status:"rejected",reason:Tt},Xn())}finally{W.p=f,I.T=M}}function Iv(){}function Du(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=dp(t).queue;hp(t,c,n,G,a===null?Iv:function(){return pp(t),a(s)})}function dp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function pp(t){var n=dp(t).next.queue;eo(t,n,{},Xn())}function Uu(){return Sn(So)}function mp(){return nn().memoizedState}function gp(){return nn().memoizedState}function Fv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Xn();t=ra(a);var s=sa(n,t,a);s!==null&&(Wn(s,n,a),Zs(s,n,a)),n={cache:ou()},t.payload=n;return}n=n.return}}function Hv(t,n,a){var s=Xn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?vp(n,a):(a=Qc(t,n,a,s),a!==null&&(Wn(a,t,s),xp(a,n,s)))}function _p(t,n,a){var s=Xn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))vp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,b=f(M,a);if(c.hasEagerState=!0,c.eagerState=b,Fn(b,M))return Yo(t,n,c,0),Ie===null&&qo(),!1}catch{}finally{}if(a=Qc(t,n,c,s),a!==null)return Wn(a,t,s),xp(a,n,s),!0}return!1}function Lu(t,n,a,s){if(s={lane:2,revertLane:ff(),action:s,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(r(479))}else n=Qc(t,a,s,2),n!==null&&Wn(n,t,2)}function ul(t){var n=t.alternate;return t===de||n!==null&&n===de}function vp(t,n){Nr=al=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function xp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Oe(t,a)}}var fl={readContext:Sn,use:sl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e},Sp={readContext:Sn,use:sl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:ip,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,cl(4194308,4,op.bind(null,n,t),a)},useLayoutEffect:function(t,n){return cl(4194308,4,t,n)},useInsertionEffect:function(t,n){cl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(Qa){Ct(!0);try{t()}finally{Ct(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(Qa){Ct(!0);try{a(n)}finally{Ct(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=Hv.bind(null,de,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Au(t);var n=t.queue,a=_p.bind(null,de,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cu,useDeferredValue:function(t,n){var a=Ln();return wu(a,t,n)},useTransition:function(){var t=Au(!1);return t=hp.bind(null,de,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=de,c=Ln();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ie===null)throw Error(r(349));(Me&124)!==0||Gd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,ip(kd.bind(null,s,f,t),[t]),s.flags|=2048,Pr(9,ll(),Vd.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=Ie.identifierPrefix;if(be){var a=Ui,s=Di;a=(s&~(1<<32-It(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=rl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Ov++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Uu,useFormState:Jd,useActionState:Jd,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Lu.bind(null,de,!0,a),a.dispatch=n,[t,n]},useMemoCache:Eu,useCacheRefresh:function(){return Ln().memoizedState=Fv.bind(null,de)}},Mp={readContext:Sn,use:sl,useCallback:cp,useContext:Sn,useEffect:ap,useImperativeHandle:lp,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:up,useReducer:ol,useRef:np,useState:function(){return ol(Oi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=nn();return fp(a,De.memoizedState,t,n)},useTransition:function(){var t=ol(Oi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Hd,useId:mp,useHostTransitionStatus:Uu,useFormState:$d,useActionState:$d,useOptimistic:function(t,n){var a=nn();return qd(a,De,t,n)},useMemoCache:Eu,useCacheRefresh:gp},Gv={readContext:Sn,use:sl,useCallback:cp,useContext:Sn,useEffect:ap,useImperativeHandle:lp,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:up,useReducer:bu,useRef:np,useState:function(){return bu(Oi)},useDebugValue:Cu,useDeferredValue:function(t,n){var a=nn();return De===null?wu(a,t,n):fp(a,De.memoizedState,t,n)},useTransition:function(){var t=bu(Oi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:$s(t),n]},useSyncExternalStore:Hd,useId:mp,useHostTransitionStatus:Uu,useFormState:ep,useActionState:ep,useOptimistic:function(t,n){var a=nn();return De!==null?qd(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Eu,useCacheRefresh:gp},zr=null,no=0;function hl(t){var n=no;return no+=1,zr===null&&(zr=[]),Ld(zr,t,n)}function io(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function dl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function yp(t){var n=t._init;return n(t._payload)}function Ep(t){function n(q,V){if(t){var Q=q.deletions;Q===null?(q.deletions=[V],q.flags|=16):Q.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function s(q){for(var V=new Map;q!==null;)q.key!==null?V.set(q.key,q):V.set(q.index,q),q=q.sibling;return V}function c(q,V){return q=wi(q,V),q.index=0,q.sibling=null,q}function f(q,V,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<V?(q.flags|=67108866,V):Q):(q.flags|=67108866,V)):(q.flags|=1048576,V)}function M(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,V,Q,St){return V===null||V.tag!==6?(V=$c(Q,q.mode,St),V.return=q,V):(V=c(V,Q),V.return=q,V)}function z(q,V,Q,St){var Gt=Q.type;return Gt===R?gt(q,V,Q.props.children,St,Q.key):V!==null&&(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===it&&yp(Gt)===V.type)?(V=c(V,Q.props),io(V,Q),V.return=q,V):(V=Zo(Q.type,Q.key,Q.props,null,q.mode,St),io(V,Q),V.return=q,V)}function tt(q,V,Q,St){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=tu(Q,q.mode,St),V.return=q,V):(V=c(V,Q.children||[]),V.return=q,V)}function gt(q,V,Q,St,Gt){return V===null||V.tag!==7?(V=ka(Q,q.mode,St,Gt),V.return=q,V):(V=c(V,Q),V.return=q,V)}function Tt(q,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=$c(""+V,q.mode,Q),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case _:return Q=Zo(V.type,V.key,V.props,null,q.mode,Q),io(Q,V),Q.return=q,Q;case E:return V=tu(V,q.mode,Q),V.return=q,V;case it:var St=V._init;return V=St(V._payload),Tt(q,V,Q)}if(st(V)||ut(V))return V=ka(V,q.mode,Q,null),V.return=q,V;if(typeof V.then=="function")return Tt(q,hl(V),Q);if(V.$$typeof===C)return Tt(q,$o(q,V),Q);dl(q,V)}return null}function at(q,V,Q,St){var Gt=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Gt!==null?null:b(q,V,""+Q,St);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Gt?z(q,V,Q,St):null;case E:return Q.key===Gt?tt(q,V,Q,St):null;case it:return Gt=Q._init,Q=Gt(Q._payload),at(q,V,Q,St)}if(st(Q)||ut(Q))return Gt!==null?null:gt(q,V,Q,St,null);if(typeof Q.then=="function")return at(q,V,hl(Q),St);if(Q.$$typeof===C)return at(q,V,$o(q,Q),St);dl(q,Q)}return null}function rt(q,V,Q,St,Gt){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return q=q.get(Q)||null,b(V,q,""+St,Gt);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case _:return q=q.get(St.key===null?Q:St.key)||null,z(V,q,St,Gt);case E:return q=q.get(St.key===null?Q:St.key)||null,tt(V,q,St,Gt);case it:var me=St._init;return St=me(St._payload),rt(q,V,Q,St,Gt)}if(st(St)||ut(St))return q=q.get(Q)||null,gt(V,q,St,Gt,null);if(typeof St.then=="function")return rt(q,V,Q,hl(St),Gt);if(St.$$typeof===C)return rt(q,V,Q,$o(V,St),Gt);dl(V,St)}return null}function Jt(q,V,Q,St){for(var Gt=null,me=null,Xt=V,Zt=V=0,hn=null;Xt!==null&&Zt<Q.length;Zt++){Xt.index>Zt?(hn=Xt,Xt=null):hn=Xt.sibling;var Te=at(q,Xt,Q[Zt],St);if(Te===null){Xt===null&&(Xt=hn);break}t&&Xt&&Te.alternate===null&&n(q,Xt),V=f(Te,V,Zt),me===null?Gt=Te:me.sibling=Te,me=Te,Xt=hn}if(Zt===Q.length)return a(q,Xt),be&&Wa(q,Zt),Gt;if(Xt===null){for(;Zt<Q.length;Zt++)Xt=Tt(q,Q[Zt],St),Xt!==null&&(V=f(Xt,V,Zt),me===null?Gt=Xt:me.sibling=Xt,me=Xt);return be&&Wa(q,Zt),Gt}for(Xt=s(Xt);Zt<Q.length;Zt++)hn=rt(Xt,q,Zt,Q[Zt],St),hn!==null&&(t&&hn.alternate!==null&&Xt.delete(hn.key===null?Zt:hn.key),V=f(hn,V,Zt),me===null?Gt=hn:me.sibling=hn,me=hn);return t&&Xt.forEach(function(Ea){return n(q,Ea)}),be&&Wa(q,Zt),Gt}function Yt(q,V,Q,St){if(Q==null)throw Error(r(151));for(var Gt=null,me=null,Xt=V,Zt=V=0,hn=null,Te=Q.next();Xt!==null&&!Te.done;Zt++,Te=Q.next()){Xt.index>Zt?(hn=Xt,Xt=null):hn=Xt.sibling;var Ea=at(q,Xt,Te.value,St);if(Ea===null){Xt===null&&(Xt=hn);break}t&&Xt&&Ea.alternate===null&&n(q,Xt),V=f(Ea,V,Zt),me===null?Gt=Ea:me.sibling=Ea,me=Ea,Xt=hn}if(Te.done)return a(q,Xt),be&&Wa(q,Zt),Gt;if(Xt===null){for(;!Te.done;Zt++,Te=Q.next())Te=Tt(q,Te.value,St),Te!==null&&(V=f(Te,V,Zt),me===null?Gt=Te:me.sibling=Te,me=Te);return be&&Wa(q,Zt),Gt}for(Xt=s(Xt);!Te.done;Zt++,Te=Q.next())Te=rt(Xt,q,Zt,Te.value,St),Te!==null&&(t&&Te.alternate!==null&&Xt.delete(Te.key===null?Zt:Te.key),V=f(Te,V,Zt),me===null?Gt=Te:me.sibling=Te,me=Te);return t&&Xt.forEach(function(Vx){return n(q,Vx)}),be&&Wa(q,Zt),Gt}function Le(q,V,Q,St){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:t:{for(var Gt=Q.key;V!==null;){if(V.key===Gt){if(Gt=Q.type,Gt===R){if(V.tag===7){a(q,V.sibling),St=c(V,Q.props.children),St.return=q,q=St;break t}}else if(V.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===it&&yp(Gt)===V.type){a(q,V.sibling),St=c(V,Q.props),io(St,Q),St.return=q,q=St;break t}a(q,V);break}else n(q,V);V=V.sibling}Q.type===R?(St=ka(Q.props.children,q.mode,St,Q.key),St.return=q,q=St):(St=Zo(Q.type,Q.key,Q.props,null,q.mode,St),io(St,Q),St.return=q,q=St)}return M(q);case E:t:{for(Gt=Q.key;V!==null;){if(V.key===Gt)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(q,V.sibling),St=c(V,Q.children||[]),St.return=q,q=St;break t}else{a(q,V);break}else n(q,V);V=V.sibling}St=tu(Q,q.mode,St),St.return=q,q=St}return M(q);case it:return Gt=Q._init,Q=Gt(Q._payload),Le(q,V,Q,St)}if(st(Q))return Jt(q,V,Q,St);if(ut(Q)){if(Gt=ut(Q),typeof Gt!="function")throw Error(r(150));return Q=Gt.call(Q),Yt(q,V,Q,St)}if(typeof Q.then=="function")return Le(q,V,hl(Q),St);if(Q.$$typeof===C)return Le(q,V,$o(q,Q),St);dl(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(q,V.sibling),St=c(V,Q),St.return=q,q=St):(a(q,V),St=$c(Q,q.mode,St),St.return=q,q=St),M(q)):a(q,V)}return function(q,V,Q,St){try{no=0;var Gt=Le(q,V,Q,St);return zr=null,Gt}catch(Xt){if(Xt===Ys||Xt===el)throw Xt;var me=Hn(29,Xt,null,q.mode);return me.lanes=St,me.return=q,me}finally{}}}var Br=Ep(!0),Tp=Ep(!1),$n=Z(null),vi=null;function la(t){var n=t.alternate;yt(on,on.current&1),yt($n,t),vi===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(vi=t)}function bp(t){if(t.tag===22){if(yt(on,on.current),yt($n,t),vi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(vi=t)}}else ca()}function ca(){yt(on,on.current),yt($n,$n.current)}function Pi(t){mt($n),vi===t&&(vi=null),mt(on)}var on=Z(0);function pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Ef(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Nu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ou={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Xn(),c=ra(s);c.payload=n,a!=null&&(c.callback=a),n=sa(t,c,s),n!==null&&(Wn(n,t,s),Zs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Xn(),c=ra(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=sa(t,c,s),n!==null&&(Wn(n,t,s),Zs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Xn(),s=ra(a);s.tag=2,n!=null&&(s.callback=n),n=sa(t,s,a),n!==null&&(Wn(n,t,a),Zs(n,t,a))}};function Ap(t,n,a,s,c,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,M):n.prototype&&n.prototype.isPureReactComponent?!Fs(a,s)||!Fs(c,f):!0}function Rp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Ou.enqueueReplaceState(n,n.state,null)}function Ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cp(t){ml(t)}function wp(t){console.error(t)}function Dp(t){ml(t)}function gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Up(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Pu(t,n,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){gl(t,n)},a}function Lp(t){return t=ra(t),t.tag=3,t}function Np(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Up(n,a,s)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Up(n,a,s),typeof c!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})})}function Vv(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Xs(n,a,c,!0),a=$n.current,a!==null){switch(a.tag){case 13:return vi===null?sf():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===uu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),lf(t,s,c)),!1;case 22:return a.flags|=65536,s===uu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),lf(t,s,c)),!1}throw Error(r(435,a.tag))}return lf(t,s,c),sf(),!1}if(be)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==iu&&(t=Error(r(422),{cause:s}),ks(Zn(t,a)))):(s!==iu&&(n=Error(r(423),{cause:s}),ks(Zn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Zn(s,a),c=Pu(t.stateNode,s,c),du(t,c),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=Zn(f,a),uo===null?uo=[f]:uo.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=Zn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Pu(a.stateNode,s,t),du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ma===null||!ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Lp(c),Np(c,t,a,s),du(a,c),!1}a=a.return}while(a!==null);return!1}var Op=Error(r(461)),un=!1;function mn(t,n,a,s){n.child=t===null?Tp(n,null,a,s):Br(n,t.child,a,s)}function Pp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var M={};for(var b in s)b!=="ref"&&(M[b]=s[b])}else M=s;return Za(n),s=vu(t,n,a,M,f,c),b=xu(),t!==null&&!un?(Su(t,n,c),zi(t,n,c)):(be&&b&&eu(n),n.flags|=1,mn(t,n,s,c),n.child)}function zp(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Jc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bp(t,n,f,s,c)):(t=Zo(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ku(t,c)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fs,a(M,s)&&t.ref===n.ref)return zi(t,n,c)}return n.flags|=1,t=wi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Bp(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Fs(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,ku(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,zi(t,n,c)}return zu(t,n,a,s,c)}function Ip(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Fp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&tl(n,f!==null?f.cachePool:null),f!==null?Bd(n,f):mu(),bp(n);else return n.lanes=n.childLanes=536870912,Fp(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(tl(n,f.cachePool),Bd(n,f),ca(),n.memoizedState=null):(t!==null&&tl(n,null),mu(),ca());return mn(t,n,c,a),n.child}function Fp(t,n,a,s){var c=cu();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&tl(n,null),mu(),bp(n),t!==null&&Xs(t,n,s,!0),null}function _l(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function zu(t,n,a,s,c){return Za(n),a=vu(t,n,a,s,void 0,c),s=xu(),t!==null&&!un?(Su(t,n,c),zi(t,n,c)):(be&&s&&eu(n),n.flags|=1,mn(t,n,a,c),n.child)}function Hp(t,n,a,s,c,f){return Za(n),n.updateQueue=null,a=Fd(n,s,a,c),Id(t),s=xu(),t!==null&&!un?(Su(t,n,f),zi(t,n,f)):(be&&s&&eu(n),n.flags|=1,mn(t,n,a,f),n.child)}function Gp(t,n,a,s,c){if(Za(n),n.stateNode===null){var f=Rr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Sn(M)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ou,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},fu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Sn(M):Rr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Nu(n,a,M,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Ou.enqueueReplaceState(f,f.state,null),Qs(n,s,f,c),Ks(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,z=Ja(a,b);f.props=z;var tt=f.context,gt=a.contextType;M=Rr,typeof gt=="object"&&gt!==null&&(M=Sn(gt));var Tt=a.getDerivedStateFromProps;gt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,gt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==M)&&Rp(n,f,s,M),aa=!1;var at=n.memoizedState;f.state=at,Qs(n,s,f,c),Ks(),tt=n.memoizedState,b||at!==tt||aa?(typeof Tt=="function"&&(Nu(n,a,Tt,s),tt=n.memoizedState),(z=aa||Ap(n,a,z,s,at,tt,M))?(gt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=M,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,hu(t,n),M=n.memoizedProps,gt=Ja(a,M),f.props=gt,Tt=n.pendingProps,at=f.context,tt=a.contextType,z=Rr,typeof tt=="object"&&tt!==null&&(z=Sn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==Tt||at!==z)&&Rp(n,f,s,z),aa=!1,at=n.memoizedState,f.state=at,Qs(n,s,f,c),Ks();var rt=n.memoizedState;M!==Tt||at!==rt||aa||t!==null&&t.dependencies!==null&&Jo(t.dependencies)?(typeof b=="function"&&(Nu(n,a,b,s),rt=n.memoizedState),(gt=aa||Ap(n,a,gt,s,at,rt,z)||t!==null&&t.dependencies!==null&&Jo(t.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=z,s=gt):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&at===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&at===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,_l(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Br(n,t.child,null,c),n.child=Br(n,null,a,c)):mn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=zi(t,n,c),t}function Vp(t,n,a,s){return Vs(),n.flags|=256,mn(t,n,a,s),n.child}var Bu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Iu(t){return{baseLanes:t,cachePool:wd()}}function Fu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function kp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?la(n):ca(),be){var b=Ze,z;if(z=b){t:{for(z=b,b=_i;z.nodeType!==8;){if(!b){b=null;break t}if(z=ci(z.nextSibling),z===null){b=null;break t}}b=z}b!==null?(n.memoizedState={dehydrated:b,treeContext:Xa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},z=Hn(18,null,null,0),z.stateNode=b,z.return=n,n.child=z,Rn=n,Ze=null,z=!0):z=!1}z||Ya(n)}if(b=n.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return Ef(b)?n.lanes=32:n.lanes=536870912,null;Pi(n)}return b=s.children,s=s.fallback,c?(ca(),c=n.mode,b=vl({mode:"hidden",children:b},c),s=ka(s,c,a,null),b.return=n,s.return=n,b.sibling=s,n.child=b,c=n.child,c.memoizedState=Iu(a),c.childLanes=Fu(t,M,a),n.memoizedState=Bu,s):(la(n),Hu(n,b))}if(z=t.memoizedState,z!==null&&(b=z.dehydrated,b!==null)){if(f)n.flags&256?(la(n),n.flags&=-257,n=Gu(t,n,a)):n.memoizedState!==null?(ca(),n.child=t.child,n.flags|=128,n=null):(ca(),c=s.fallback,b=n.mode,s=vl({mode:"visible",children:s.children},b),c=ka(c,b,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Br(n,t.child,null,a),s=n.child,s.memoizedState=Iu(a),s.childLanes=Fu(t,M,a),n.memoizedState=Bu,n=c);else if(la(n),Ef(b)){if(M=b.nextSibling&&b.nextSibling.dataset,M)var tt=M.dgst;M=tt,s=Error(r(419)),s.stack="",s.digest=M,ks({value:s,source:null,stack:null}),n=Gu(t,n,a)}else if(un||Xs(t,n,a,!1),M=(a&t.childLanes)!==0,un||M){if(M=Ie,M!==null&&(s=a&-a,s=(s&42)!==0?1:We(s),s=(s&(M.suspendedLanes|a))!==0?0:s,s!==0&&s!==z.retryLane))throw z.retryLane=s,Ar(t,s),Wn(M,t,s),Op;b.data==="$?"||sf(),n=Gu(t,n,a)}else b.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,Ze=ci(b.nextSibling),Rn=n,be=!0,qa=null,_i=!1,t!==null&&(Qn[Jn++]=Di,Qn[Jn++]=Ui,Qn[Jn++]=Xa,Di=t.id,Ui=t.overflow,Xa=n),n=Hu(n,s.children),n.flags|=4096);return n}return c?(ca(),c=s.fallback,b=n.mode,z=t.child,tt=z.sibling,s=wi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,tt!==null?c=wi(tt,c):(c=ka(c,b,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,b=t.child.memoizedState,b===null?b=Iu(a):(z=b.cachePool,z!==null?(tt=sn._currentValue,z=z.parent!==tt?{parent:tt,pool:tt}:z):z=wd(),b={baseLanes:b.baseLanes|a,cachePool:z}),c.memoizedState=b,c.childLanes=Fu(t,M,a),n.memoizedState=Bu,s):(la(n),a=t.child,t=a.sibling,a=wi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function Hu(t,n){return n=vl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function vl(t,n){return t=Hn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Gu(t,n,a){return Br(n,t.child,null,a),t=Hu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Xp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ru(t.return,n,a)}function Vu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Wp(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(mn(t,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xp(t,a,n);else if(t.tag===19)Xp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(yt(on,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&pl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Vu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&pl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Vu(n,!0,a,null,f);break;case"together":Vu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function zi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Xs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=wi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=wi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ku(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Jo(t)))}function kv(t,n,a){switch(n.tag){case 3:Pt(n,n.stateNode.containerInfo),ia(n,sn,t.memoizedState.cache),Vs();break;case 27:case 5:re(n);break;case 4:Pt(n,n.stateNode.containerInfo);break;case 10:ia(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(la(n),n.flags|=128,null):(a&n.child.childLanes)!==0?kp(t,n,a):(la(n),t=zi(t,n,a),t!==null?t.sibling:null);la(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Xs(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Wp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,Ip(t,n,a);case 24:ia(n,sn,t.memoizedState.cache)}return zi(t,n,a)}function qp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!ku(t,a)&&(n.flags&128)===0)return un=!1,kv(t,n,a);un=(t.flags&131072)!==0}else un=!1,be&&(n.flags&1048576)!==0&&yd(n,Qo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Jc(s)?(t=Ja(s,t),n.tag=1,n=Gp(null,n,s,t,a)):(n.tag=0,n=zu(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===F){n.tag=11,n=Pp(null,n,s,t,a);break t}else if(c===P){n.tag=14,n=zp(null,n,s,t,a);break t}}throw n=ft(s)||s,Error(r(306,n,""))}}return n;case 0:return zu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Ja(s,n.pendingProps),Gp(t,n,s,c,a);case 3:t:{if(Pt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,hu(t,n),Qs(n,s,null,a);var M=n.memoizedState;if(s=M.cache,ia(n,sn,s),s!==f.cache&&su(n,[sn],a,!0),Ks(),s=M.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vp(t,n,s,a);break t}else if(s!==c){c=Zn(Error(r(424)),n),ks(c),n=Vp(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=ci(t.firstChild),Rn=n,be=!0,qa=null,_i=!0,a=Tp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vs(),s===c){n=zi(t,n,a);break t}mn(t,n,s,a)}n=n.child}return n;case 26:return _l(t,n),t===null?(a=Km(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Ll(vt.current).createElement(a),s[Re]=n,s[Ve]=t,_n(s,a,t),nt(s),n.stateNode=s):n.memoizedState=Km(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return re(n),t===null&&be&&(s=n.stateNode=Ym(n.type,n.pendingProps,vt.current),Rn=n,_i=!0,c=Ze,va(n.type)?(Tf=c,Ze=ci(s.firstChild)):Ze=c),mn(t,n,n.pendingProps.children,a),_l(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=Ze)&&(s=_x(s,n.type,n.pendingProps,_i),s!==null?(n.stateNode=s,Rn=n,Ze=ci(s.firstChild),_i=!1,c=!0):c=!1),c||Ya(n)),re(n),c=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,s=f.children,Sf(c,f)?s=null:M!==null&&Sf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=vu(t,n,Pv,null,null,a),So._currentValue=c),_l(t,n),mn(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=Ze)&&(a=vx(a,n.pendingProps,_i),a!==null?(n.stateNode=a,Rn=n,Ze=null,t=!0):t=!1),t||Ya(n)),null;case 13:return kp(t,n,a);case 4:return Pt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Br(n,null,s,a):mn(t,n,s,a),n.child;case 11:return Pp(t,n,n.type,n.pendingProps,a);case 7:return mn(t,n,n.pendingProps,a),n.child;case 8:return mn(t,n,n.pendingProps.children,a),n.child;case 12:return mn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ia(n,n.type,s.value),mn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,Za(n),c=Sn(c),s=s(c),n.flags|=1,mn(t,n,s,a),n.child;case 14:return zp(t,n,n.type,n.pendingProps,a);case 15:return Bp(t,n,n.type,n.pendingProps,a);case 19:return Wp(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=vl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=wi(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Ip(t,n,a);case 24:return Za(n),s=Sn(sn),t===null?(c=cu(),c===null&&(c=Ie,f=ou(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},fu(n),ia(n,sn,c)):((t.lanes&a)!==0&&(hu(t,n),Qs(n,null,null,a),Ks()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ia(n,sn,s)):(s=f.cache,ia(n,sn,s),s!==c.cache&&su(n,[sn],a,!0))),mn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Bi(t){t.flags|=4}function Yp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!eg(n)){if(n=$n.current,n!==null&&((Me&4194048)===Me?vi!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==vi))throw js=uu,Dd;t.flags|=8192}}function xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?xt():536870912,t.lanes|=n,Gr|=n)}function ao(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Xe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Xv(t,n,a){var s=n.pendingProps;switch(nu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(n),null;case 1:return Xe(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ni(sn),qt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Gs(n)?Bi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,bd())),Xe(n),null;case 26:return a=n.memoizedState,t===null?(Bi(n),a!==null?(Xe(n),Yp(n,a)):(Xe(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Bi(n),Xe(n),Yp(n,a)):(Xe(n),n.flags&=-16777217):(t.memoizedProps!==s&&Bi(n),Xe(n),n.flags&=-16777217),null;case 27:et(n),a=vt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Bi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}t=X.current,Gs(n)?Ed(n):(t=Ym(c,s,a),n.stateNode=t,Bi(n))}return Xe(n),null;case 5:if(et(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Bi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Xe(n),null}if(t=X.current,Gs(n))Ed(n);else{switch(c=Ll(vt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[Re]=n,t[Ve]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(_n(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Bi(n)}}return Xe(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Bi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=vt.current,Gs(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=Rn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[Re]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Hm(t.nodeValue,a)),t||Ya(n)}else t=Ll(t).createTextNode(s),t[Re]=n,n.stateNode=t}return Xe(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Gs(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Re]=n}else Vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Xe(n),c=!1}else c=bd(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),xl(n,n.updateQueue),Xe(n),null;case 4:return qt(),t===null&&mf(n.stateNode.containerInfo),Xe(n),null;case 10:return Ni(n.type),Xe(n),null;case 19:if(mt(on),c=n.memoizedState,c===null)return Xe(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ao(c,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=pl(t),f!==null){for(n.flags|=128,ao(c,!1),t=f.updateQueue,n.updateQueue=t,xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Md(a,t),a=a.sibling;return yt(on,on.current&1|2),n.child}t=t.sibling}c.tail!==null&&D()>yl&&(n.flags|=128,s=!0,ao(c,!1),n.lanes=4194304)}else{if(!s)if(t=pl(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,xl(n,t),ao(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Xe(n),null}else 2*D()-c.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,s=!0,ao(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=D(),n.sibling=null,t=on.current,yt(on,s?t&1|2:t&1),n):(Xe(n),null);case 22:case 23:return Pi(n),gu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Xe(n),n.subtreeFlags&6&&(n.flags|=8192)):Xe(n),a=n.updateQueue,a!==null&&xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&mt(Ka),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ni(sn),Xe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Wv(t,n){switch(nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ni(sn),qt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 13:if(Pi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return mt(on),null;case 4:return qt(),null;case 10:return Ni(n.type),null;case 22:case 23:return Pi(n),gu(),t!==null&&mt(Ka),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ni(sn),null;case 25:return null;default:return null}}function jp(t,n){switch(nu(n),n.tag){case 3:Ni(sn),qt();break;case 26:case 27:case 5:et(n);break;case 4:qt();break;case 13:Pi(n);break;case 19:mt(on);break;case 10:Ni(n.type);break;case 22:case 23:Pi(n),gu(),t!==null&&mt(Ka);break;case 24:Ni(sn)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,M=a.inst;s=f(),M.destroy=s}a=a.next}while(a!==c)}}catch(b){Pe(n,n.return,b)}}function ua(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var M=s.inst,b=M.destroy;if(b!==void 0){M.destroy=void 0,c=n;var z=a,tt=b;try{tt()}catch(gt){Pe(c,z,gt)}}}s=s.next}while(s!==f)}}catch(gt){Pe(n,n.return,gt)}}function Zp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{zd(n,a)}catch(s){Pe(t,t.return,s)}}}function Kp(t,n,a){a.props=Ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function xi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function Qp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function Xu(t,n,a){try{var s=t.stateNode;hx(s,t.type,a,n),s[Ve]=n}catch(c){Pe(t,t.return,c)}}function Jp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&va(t.type)||t.tag===4}function Wu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&va(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(qu(t,n,a),t=t.sibling;t!==null;)qu(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function $p(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);_n(n,s,a),n[Re]=t,n[Ve]=a}catch(f){Pe(t,t.return,f)}}var Ii=!1,tn=!1,Yu=!1,tm=typeof WeakSet=="function"?WeakSet:Set,fn=null;function qv(t,n){if(t=t.containerInfo,vf=Il,t=fd(t),Wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,b=-1,z=-1,tt=0,gt=0,Tt=t,at=null;e:for(;;){for(var rt;Tt!==a||c!==0&&Tt.nodeType!==3||(b=M+c),Tt!==f||s!==0&&Tt.nodeType!==3||(z=M+s),Tt.nodeType===3&&(M+=Tt.nodeValue.length),(rt=Tt.firstChild)!==null;)at=Tt,Tt=rt;for(;;){if(Tt===t)break e;if(at===a&&++tt===c&&(b=M),at===f&&++gt===s&&(z=M),(rt=Tt.nextSibling)!==null)break;Tt=at,at=Tt.parentNode}Tt=rt}a=b===-1||z===-1?null:{start:b,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(xf={focusedElem:t,selectionRange:a},Il=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Jt=Ja(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Jt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Pe(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)yf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function em(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),s&4&&ro(5,a);break;case 1:if(fa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Pe(a,a.return,M)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Pe(a,a.return,M)}}s&64&&Zp(a),s&512&&so(a,a.return);break;case 3:if(fa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zd(t,n)}catch(M){Pe(a,a.return,M)}}break;case 27:n===null&&s&4&&$p(a);case 26:case 5:fa(t,a),n===null&&s&4&&Qp(a),s&512&&so(a,a.return);break;case 12:fa(t,a);break;case 13:fa(t,a),s&4&&am(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ex.bind(null,a),xx(t,a))));break;case 22:if(s=a.memoizedState!==null||Ii,!s){n=n!==null&&n.memoizedState!==null||tn,c=Ii;var f=tn;Ii=s,(tn=n)&&!f?ha(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),Ii=c,tn=f}break;case 30:break;default:fa(t,a)}}function nm(t){var n=t.alternate;n!==null&&(t.alternate=null,nm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Cs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var He=null,Nn=!1;function Fi(t,n,a){for(a=a.child;a!==null;)im(t,n,a),a=a.sibling}function im(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:tn||xi(a,n),Fi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||xi(a,n);var s=He,c=Nn;va(a.type)&&(He=a.stateNode,Nn=!1),Fi(t,n,a),go(a.stateNode),He=s,Nn=c;break;case 5:tn||xi(a,n);case 6:if(s=He,c=Nn,He=null,Fi(t,n,a),He=s,Nn=c,He!==null)if(Nn)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{He.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:He!==null&&(Nn?(t=He,Wm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),To(t)):Wm(He,a.stateNode));break;case 4:s=He,c=Nn,He=a.stateNode.containerInfo,Nn=!0,Fi(t,n,a),He=s,Nn=c;break;case 0:case 11:case 14:case 15:tn||ua(2,a,n),tn||ua(4,a,n),Fi(t,n,a);break;case 1:tn||(xi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Kp(a,n,s)),Fi(t,n,a);break;case 21:Fi(t,n,a);break;case 22:tn=(s=tn)||a.memoizedState!==null,Fi(t,n,a),tn=s;break;default:Fi(t,n,a)}}function am(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{To(t)}catch(a){Pe(n,n.return,a)}}function Yv(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new tm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new tm),n;default:throw Error(r(435,t.tag))}}function ju(t,n){var a=Yv(t);n.forEach(function(s){var c=nx.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,M=n,b=M;t:for(;b!==null;){switch(b.tag){case 27:if(va(b.type)){He=b.stateNode,Nn=!1;break t}break;case 5:He=b.stateNode,Nn=!1;break t;case 3:case 4:He=b.stateNode.containerInfo,Nn=!0;break t}b=b.return}if(He===null)throw Error(r(160));im(f,M,c),He=null,Nn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)rm(n,t),n=n.sibling}var li=null;function rm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),s&4&&(ua(3,t,t.return),ro(3,t),ua(5,t,t.return));break;case 1:Gn(n,t),Vn(t),s&512&&(tn||a===null||xi(a,a.return)),s&64&&Ii&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Gn(n,t),Vn(t),s&512&&(tn||a===null||xi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qi]||f[Re]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),_n(f,s,a),f[Re]=t,nt(f),s=f;break t;case"link":var M=$m("link","href",c).get(s+(a.href||""));if(M){for(var b=0;b<M.length;b++)if(f=M[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;case"meta":if(M=$m("meta","content",c).get(s+(a.content||""))){for(b=0;b<M.length;b++)if(f=M[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(b,1);break e}}f=c.createElement(s),_n(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[Re]=t,nt(f),s=f}t.stateNode=s}else tg(c,t.type,t.stateNode);else t.stateNode=Jm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?tg(c,t.type,t.stateNode):Jm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Xu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),s&512&&(tn||a===null||xi(a,a.return)),a!==null&&s&4&&Xu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),s&512&&(tn||a===null||xi(a,a.return)),t.flags&32){c=t.stateNode;try{xr(c,"")}catch(rt){Pe(t,t.return,rt)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Xu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Yu=!0);break;case 6:if(Gn(n,t),Vn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(rt){Pe(t,t.return,rt)}}break;case 3:if(Pl=null,c=li,li=Nl(n.containerInfo),Gn(n,t),li=c,Vn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{To(n.containerInfo)}catch(rt){Pe(t,t.return,rt)}Yu&&(Yu=!1,sm(t));break;case 4:s=li,li=Nl(t.stateNode.containerInfo),Gn(n,t),Vn(t),li=s;break;case 12:Gn(n,t),Vn(t);break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tf=D()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ju(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,tt=Ii,gt=tn;if(Ii=tt||c,tn=gt||z,Gn(n,t),tn=gt,Ii=tt,Vn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||Ii||tn||$a(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{b=z.stateNode;var Tt=z.memoizedProps.style,at=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){Pe(z,z.return,rt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(rt){Pe(z,z.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,ju(t,a))));break;case 19:Gn(n,t),Vn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,ju(t,s)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Jp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Wu(t);Sl(t,f,c);break;case 5:var M=a.stateNode;a.flags&32&&(xr(M,""),a.flags&=-33);var b=Wu(t);Sl(t,b,M);break;case 3:case 4:var z=a.stateNode.containerInfo,tt=Wu(t);qu(t,tt,z);break;default:throw Error(r(161))}}catch(gt){Pe(t,t.return,gt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function sm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;sm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)em(t,n.alternate,n),n=n.sibling}function $a(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ua(4,n,n.return),$a(n);break;case 1:xi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Kp(n,n.return,a),$a(n);break;case 27:go(n.stateNode);case 26:case 5:xi(n,n.return),$a(n);break;case 22:n.memoizedState===null&&$a(n);break;case 30:$a(n);break;default:$a(n)}t=t.sibling}}function ha(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:ha(c,f,a),ro(4,f);break;case 1:if(ha(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Pe(s,s.return,tt)}if(s=f,c=s.updateQueue,c!==null){var b=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)Pd(z[c],b)}catch(tt){Pe(s,s.return,tt)}}a&&M&64&&Zp(f),so(f,f.return);break;case 27:$p(f);case 26:case 5:ha(c,f,a),a&&s===null&&M&4&&Qp(f),so(f,f.return);break;case 12:ha(c,f,a);break;case 13:ha(c,f,a),a&&M&4&&am(c,f);break;case 22:f.memoizedState===null&&ha(c,f,a),so(f,f.return);break;case 30:break;default:ha(c,f,a)}n=n.sibling}}function Zu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ws(a))}function Ku(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t))}function Si(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)om(t,n,a,s),n=n.sibling}function om(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Si(t,n,a,s),c&2048&&ro(9,n);break;case 1:Si(t,n,a,s);break;case 3:Si(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ws(t)));break;case 12:if(c&2048){Si(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,b=f.onPostCommit;typeof b=="function"&&b(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Pe(n,n.return,z)}}else Si(t,n,a,s);break;case 13:Si(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?Si(t,n,a,s):oo(t,n):f._visibility&2?Si(t,n,a,s):(f._visibility|=2,Ir(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Zu(M,n);break;case 24:Si(t,n,a,s),c&2048&&Ku(n.alternate,n);break;default:Si(t,n,a,s)}}function Ir(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,b=a,z=s,tt=M.flags;switch(M.tag){case 0:case 11:case 15:Ir(f,M,b,z,c),ro(8,M);break;case 23:break;case 22:var gt=M.stateNode;M.memoizedState!==null?gt._visibility&2?Ir(f,M,b,z,c):oo(f,M):(gt._visibility|=2,Ir(f,M,b,z,c)),c&&tt&2048&&Zu(M.alternate,M);break;case 24:Ir(f,M,b,z,c),c&&tt&2048&&Ku(M.alternate,M);break;default:Ir(f,M,b,z,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&Zu(s.alternate,s);break;case 24:oo(a,s),c&2048&&Ku(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Fr(t){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)lm(t),t=t.sibling}function lm(t){switch(t.tag){case 26:Fr(t),t.flags&lo&&t.memoizedState!==null&&Lx(li,t.memoizedState,t.memoizedProps);break;case 5:Fr(t);break;case 3:case 4:var n=li;li=Nl(t.stateNode.containerInfo),Fr(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=lo,lo=16777216,Fr(t),lo=n):Fr(t));break;default:Fr(t)}}function cm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,fm(s,t)}cm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)um(t),t=t.sibling}function um(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&ua(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):co(t);break;default:co(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,fm(s,t)}cm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ua(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function fm(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ua(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ws(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var c=s.sibling,f=s.return;if(nm(s),s===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var jv={getCacheForType:function(t){var n=Sn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},Zv=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ie=null,_e=null,Me=0,we=0,kn=null,da=!1,Hr=!1,Qu=!1,Hi=0,Ke=0,pa=0,tr=0,Ju=0,ti=0,Gr=0,uo=null,On=null,$u=!1,tf=0,yl=1/0,El=null,ma=null,gn=0,ga=null,Vr=null,kr=0,ef=0,nf=null,hm=null,fo=0,af=null;function Xn(){if((Ce&2)!==0&&Me!==0)return Me&-Me;if(I.T!==null){var t=Dr;return t!==0?t:ff()}return Ge()}function dm(){ti===0&&(ti=(Me&536870912)===0||be?ot():536870912);var t=$n.current;return t!==null&&(t.flags|=32),ti}function Wn(t,n,a){(t===Ie&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(Xr(t,0),_a(t,Me,ti,!1)),zt(t,a),((Ce&2)===0||t!==Ie)&&(t===Ie&&((Ce&2)===0&&(tr|=a),Ke===4&&_a(t,Me,ti,!1)),Mi(t))}function pm(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||kt(t,n),c=s?Jv(t,n):of(t,n,!0),f=s;do{if(c===0){Hr&&!s&&_a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Kv(a)){c=of(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var b=t;c=uo;var z=b.current.memoizedState.isDehydrated;if(z&&(Xr(b,M).flags|=256),M=of(b,M,!1),M!==2){if(Qu&&!z){b.errorRecoveryDisabledLanes|=f,tr|=f,c=4;break t}f=On,On=c,f!==null&&(On===null?On=f:On.push.apply(On,f))}c=M}if(f=!1,c!==2)continue}}if(c===1){Xr(t,0),_a(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:_a(s,n,ti,!da);break t;case 2:On=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=tf+300-D(),10<c)){if(_a(s,n,ti,!da),Se(s,0,!0)!==0)break t;s.timeoutHandle=km(mm.bind(null,s,a,On,El,$u,n,ti,tr,Gr,da,f,2,-0,0),c);break t}mm(s,a,On,El,$u,n,ti,tr,Gr,da,f,0,-0,0)}}break}while(!0);Mi(t)}function mm(t,n,a,s,c,f,M,b,z,tt,gt,Tt,at,rt){if(t.timeoutHandle=-1,Tt=n.subtreeFlags,(Tt&8192||(Tt&16785408)===16785408)&&(xo={stylesheets:null,count:0,unsuspend:Ux},lm(n),Tt=Nx(),Tt!==null)){t.cancelPendingCommit=Tt(ym.bind(null,t,n,f,a,s,c,M,b,z,gt,1,at,rt)),_a(t,f,M,!tt);return}ym(t,n,f,a,s,c,M,b,z)}function Kv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Fn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _a(t,n,a,s){n&=~Ju,n&=~tr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-It(c),M=1<<f;s[f]=-1,c&=~M}a!==0&&ue(t,a,n)}function Tl(){return(Ce&6)===0?(ho(0),!1):!0}function rf(){if(_e!==null){if(we===0)var t=_e.return;else t=_e,Li=ja=null,Mu(t),zr=null,no=0,t=_e;for(;t!==null;)jp(t.alternate,t),t=t.return;_e=null}}function Xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,px(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),rf(),Ie=t,_e=a=wi(t.current,null),Me=n,we=0,kn=null,da=!1,Hr=kt(t,n),Qu=!1,Gr=ti=Ju=tr=pa=Ke=0,On=uo=null,$u=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-It(s),f=1<<c;n|=t[c],s&=~f}return Hi=n,qo(),a}function gm(t,n){de=null,I.H=fl,n===Ys||n===el?(n=Nd(),we=3):n===Dd?(n=Nd(),we=4):we=n===Op?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,kn=n,_e===null&&(Ke=1,gl(t,Zn(n,t.current)))}function _m(){var t=I.H;return I.H=fl,t===null?fl:t}function vm(){var t=I.A;return I.A=jv,t}function sf(){Ke=4,da||(Me&4194048)!==Me&&$n.current!==null||(Hr=!0),(pa&134217727)===0&&(tr&134217727)===0||Ie===null||_a(Ie,Me,ti,!1)}function of(t,n,a){var s=Ce;Ce|=2;var c=_m(),f=vm();(Ie!==t||Me!==n)&&(El=null,Xr(t,n)),n=!1;var M=Ke;t:do try{if(we!==0&&_e!==null){var b=_e,z=kn;switch(we){case 8:rf(),M=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var tt=we;if(we=0,kn=null,Wr(t,b,z,tt),a&&Hr){M=0;break t}break;default:tt=we,we=0,kn=null,Wr(t,b,z,tt)}}Qv(),M=Ke;break}catch(gt){gm(t,gt)}while(!0);return n&&t.shellSuspendCounter++,Li=ja=null,Ce=s,I.H=c,I.A=f,_e===null&&(Ie=null,Me=0,qo()),M}function Qv(){for(;_e!==null;)xm(_e)}function Jv(t,n){var a=Ce;Ce|=2;var s=_m(),c=vm();Ie!==t||Me!==n?(El=null,yl=D()+500,Xr(t,n)):Hr=kt(t,n);t:do try{if(we!==0&&_e!==null){n=_e;var f=kn;e:switch(we){case 1:we=0,kn=null,Wr(t,n,f,1);break;case 2:case 9:if(Ud(f)){we=0,kn=null,Sm(n);break}n=function(){we!==2&&we!==9||Ie!==t||(we=7),Mi(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:Ud(f)?(we=0,kn=null,Sm(n)):(we=0,kn=null,Wr(t,n,f,7));break;case 5:var M=null;switch(_e.tag){case 26:M=_e.memoizedState;case 5:case 27:var b=_e;if(!M||eg(M)){we=0,kn=null;var z=b.sibling;if(z!==null)_e=z;else{var tt=b.return;tt!==null?(_e=tt,bl(tt)):_e=null}break e}}we=0,kn=null,Wr(t,n,f,5);break;case 6:we=0,kn=null,Wr(t,n,f,6);break;case 8:rf(),Ke=6;break t;default:throw Error(r(462))}}$v();break}catch(gt){gm(t,gt)}while(!0);return Li=ja=null,I.H=s,I.A=c,Ce=a,_e!==null?0:(Ie=null,Me=0,qo(),Ke)}function $v(){for(;_e!==null&&!Et();)xm(_e)}function xm(t){var n=qp(t.alternate,t,Hi);t.memoizedProps=t.pendingProps,n===null?bl(t):_e=n}function Sm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Hp(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=Hp(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Mu(n);default:jp(a,n),n=_e=Md(n,Hi),n=qp(a,n,Hi)}t.memoizedProps=t.pendingProps,n===null?bl(t):_e=n}function Wr(t,n,a,s){Li=ja=null,Mu(n),zr=null,no=0;var c=n.return;try{if(Vv(t,c,n,a,Me)){Ke=1,gl(t,Zn(a,t.current)),_e=null;return}}catch(f){if(c!==null)throw _e=c,f;Ke=1,gl(t,Zn(a,t.current)),_e=null;return}n.flags&32768?(be||s===1?t=!0:Hr||(Me&536870912)!==0?t=!1:(da=t=!0,(s===2||s===9||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Mm(n,t)):bl(n)}function bl(t){var n=t;do{if((n.flags&32768)!==0){Mm(n,da);return}t=n.return;var a=Xv(n.alternate,n,Hi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);Ke===0&&(Ke=5)}function Mm(t,n){do{var a=Wv(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);Ke=6,_e=null}function ym(t,n,a,s,c,f,M,b,z){t.cancelPendingCommit=null;do Al();while(gn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Kc,ge(t,a,f,M,b,z),t===Ie&&(_e=Ie=null,Me=0),Vr=n,ga=t,kr=a,ef=f,nf=c,hm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ix(lt,function(){return Rm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=I.T,I.T=null,c=W.p,W.p=2,M=Ce,Ce|=4;try{qv(t,n,a)}finally{Ce=M,W.p=c,I.T=s}}gn=1,Em(),Tm(),bm()}}function Em(){if(gn===1){gn=0;var t=ga,n=Vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var s=W.p;W.p=2;var c=Ce;Ce|=4;try{rm(n,t);var f=xf,M=fd(t.containerInfo),b=f.focusedElem,z=f.selectionRange;if(M!==b&&b&&b.ownerDocument&&ud(b.ownerDocument.documentElement,b)){if(z!==null&&Wc(b)){var tt=z.start,gt=z.end;if(gt===void 0&&(gt=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(gt,b.value.length);else{var Tt=b.ownerDocument||document,at=Tt&&Tt.defaultView||window;if(at.getSelection){var rt=at.getSelection(),Jt=b.textContent.length,Yt=Math.min(z.start,Jt),Le=z.end===void 0?Yt:Math.min(z.end,Jt);!rt.extend&&Yt>Le&&(M=Le,Le=Yt,Yt=M);var q=cd(b,Yt),V=cd(b,Le);if(q&&V&&(rt.rangeCount!==1||rt.anchorNode!==q.node||rt.anchorOffset!==q.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var Q=Tt.createRange();Q.setStart(q.node,q.offset),rt.removeAllRanges(),Yt>Le?(rt.addRange(Q),rt.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),rt.addRange(Q))}}}}for(Tt=[],rt=b;rt=rt.parentNode;)rt.nodeType===1&&Tt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<Tt.length;b++){var St=Tt[b];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}Il=!!vf,xf=vf=null}finally{Ce=c,W.p=s,I.T=a}}t.current=n,gn=2}}function Tm(){if(gn===2){gn=0;var t=ga,n=Vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var s=W.p;W.p=2;var c=Ce;Ce|=4;try{em(t,n.alternate,n)}finally{Ce=c,W.p=s,I.T=a}}gn=3}}function bm(){if(gn===4||gn===3){gn=0,Bt();var t=ga,n=Vr,a=kr,s=hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,Vr=ga=null,Am(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ma=null),Ee(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=I.T,c=W.p,W.p=2,I.T=null;try{for(var f=t.onRecoverableError,M=0;M<s.length;M++){var b=s[M];f(b.value,{componentStack:b.stack})}}finally{I.T=n,W.p=c}}(kr&3)!==0&&Al(),Mi(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===af?fo++:(fo=0,af=t):fo=0,ho(0)}}function Am(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ws(n)))}function Al(t){return Em(),Tm(),bm(),Rm()}function Rm(){if(gn!==5)return!1;var t=ga,n=ef;ef=0;var a=Ee(kr),s=I.T,c=W.p;try{W.p=32>a?32:a,I.T=null,a=nf,nf=null;var f=ga,M=kr;if(gn=0,Vr=ga=null,kr=0,(Ce&6)!==0)throw Error(r(331));var b=Ce;if(Ce|=4,um(f.current),om(f,f.current,M,a),Ce=b,ho(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{W.p=c,I.T=s,Am(t,n)}}function Cm(t,n,a){n=Zn(a,n),n=Pu(t.stateNode,n,2),t=sa(t,n,2),t!==null&&(zt(t,2),Mi(t))}function Pe(t,n,a){if(t.tag===3)Cm(t,t,a);else for(;n!==null;){if(n.tag===3){Cm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))){t=Zn(a,t),a=Lp(2),s=sa(n,a,2),s!==null&&(Np(a,s,n,t),zt(s,2),Mi(s));break}}n=n.return}}function lf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Zv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Qu=!0,c.add(a),t=tx.bind(null,t,n,a),n.then(t,t))}function tx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ie===t&&(Me&a)===a&&(Ke===4||Ke===3&&(Me&62914560)===Me&&300>D()-tf?(Ce&2)===0&&Xr(t,0):Ju|=a,Gr===Me&&(Gr=0)),Mi(t)}function wm(t,n){n===0&&(n=xt()),t=Ar(t,n),t!==null&&(zt(t,n),Mi(t))}function ex(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),wm(t,a)}function nx(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),wm(t,a)}function ix(t,n){return Wt(t,n)}var Rl=null,qr=null,cf=!1,Cl=!1,uf=!1,er=0;function Mi(t){t!==qr&&t.next===null&&(qr===null?Rl=qr=t:qr=qr.next=t),Cl=!0,cf||(cf=!0,rx())}function ho(t,n){if(!uf&&Cl){uf=!0;do for(var a=!1,s=Rl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var M=s.suspendedLanes,b=s.pingedLanes;f=(1<<31-It(42|t)+1)-1,f&=c&~(M&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Nm(s,f))}else f=Me,f=Se(s,s===Ie?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||kt(s,f)||(a=!0,Nm(s,f));s=s.next}while(a);uf=!1}}function ax(){Dm()}function Dm(){Cl=cf=!1;var t=0;er!==0&&(dx()&&(t=er),er=0);for(var n=D(),a=null,s=Rl;s!==null;){var c=s.next,f=Um(s,n);f===0?(s.next=null,a===null?Rl=c:a.next=c,c===null&&(qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Cl=!0)),s=c}ho(t)}function Um(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-It(f),b=1<<M,z=c[M];z===-1?((b&a)===0||(b&s)!==0)&&(c[M]=y(b,n)):z<=n&&(t.expiredLanes|=b),f&=~b}if(n=Ie,a=Me,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Dt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||kt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Dt(s),Ee(a)){case 2:case 8:a=$;break;case 32:a=lt;break;case 268435456:a=Ut;break;default:a=lt}return s=Lm.bind(null,t),a=Wt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Dt(s),t.callbackPriority=2,t.callbackNode=null,2}function Lm(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=Me;return s=Se(t,t===Ie?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(pm(t,s,n),Um(t,D()),t.callbackNode!=null&&t.callbackNode===a?Lm.bind(null,t):null)}function Nm(t,n){if(Al())return null;pm(t,n,!0)}function rx(){mx(function(){(Ce&6)!==0?Wt(Y,ax):Dm()})}function ff(){return er===0&&(er=ot()),er}function Om(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Fo(""+t)}function Pm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function sx(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Om((c[Ve]||null).action),M=s.submitter;M&&(n=(n=M[Ve]||null)?Om(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var b=new ko("action","action",null,s,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(er!==0){var z=M?Pm(c,M):new FormData(c);Du(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(b.preventDefault(),z=M?Pm(c,M):new FormData(c),Du(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var hf=0;hf<Zc.length;hf++){var df=Zc[hf],ox=df.toLowerCase(),lx=df[0].toUpperCase()+df.slice(1);oi(ox,"on"+lx)}oi(pd,"onAnimationEnd"),oi(md,"onAnimationIteration"),oi(gd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(bv,"onTransitionRun"),oi(Av,"onTransitionStart"),oi(Rv,"onTransitionCancel"),oi(_d,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function zm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var M=s.length-1;0<=M;M--){var b=s[M],z=b.instance,tt=b.currentTarget;if(b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(gt){ml(gt)}c.currentTarget=null,f=z}else for(M=0;M<s.length;M++){if(b=s[M],z=b.instance,tt=b.currentTarget,b=b.listener,z!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=tt;try{f(c)}catch(gt){ml(gt)}c.currentTarget=null,f=z}}}}function ve(t,n){var a=n[ri];a===void 0&&(a=n[ri]=new Set);var s=t+"__bubble";a.has(s)||(Bm(n,t,2,!1),a.add(s))}function pf(t,n,a){var s=0;n&&(s|=4),Bm(a,t,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function mf(t){if(!t[wl]){t[wl]=!0,dt.forEach(function(a){a!=="selectionchange"&&(cx.has(a)||pf(a,!1,t),pf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[wl]||(n[wl]=!0,pf("selectionchange",!1,n))}}function Bm(t,n,a,s){switch(og(n)){case 2:var c=zx;break;case 8:c=Bx;break;default:c=wf}a=c.bind(null,n,a,t),c=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function gf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var M=s.tag;if(M===3||M===4){var b=s.stateNode.containerInfo;if(b===c)break;if(M===4)for(M=s.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;b!==null;){if(M=Ji(b),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){s=f=M;continue t}b=b.parentNode}}s=s.return}Xh(function(){var tt=f,gt=Oc(a),Tt=[];t:{var at=vd.get(t);if(at!==void 0){var rt=ko,Jt=t;switch(t){case"keypress":if(Go(a)===0)break t;case"keydown":case"keyup":rt=iv;break;case"focusin":Jt="focus",rt=Hc;break;case"focusout":Jt="blur",rt=Hc;break;case"beforeblur":case"afterblur":rt=Hc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=sv;break;case pd:case md:case gd:rt=j0;break;case _d:rt=lv;break;case"scroll":case"scrollend":rt=k0;break;case"wheel":rt=uv;break;case"copy":case"cut":case"paste":rt=K0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Zh;break;case"toggle":case"beforetoggle":rt=hv}var Yt=(n&4)!==0,Le=!Yt&&(t==="scroll"||t==="scrollend"),q=Yt?at!==null?at+"Capture":null:at;Yt=[];for(var V=tt,Q;V!==null;){var St=V;if(Q=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||Q===null||q===null||(St=Ls(V,q),St!=null&&Yt.push(mo(V,St,Q))),Le)break;V=V.return}0<Yt.length&&(at=new rt(at,Jt,null,a,gt),Tt.push({event:at,listeners:Yt}))}}if((n&7)===0){t:{if(at=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",at&&a!==Nc&&(Jt=a.relatedTarget||a.fromElement)&&(Ji(Jt)||Jt[In]))break t;if((rt||at)&&(at=gt.window===gt?gt:(at=gt.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(Jt=a.relatedTarget||a.toElement,rt=tt,Jt=Jt?Ji(Jt):null,Jt!==null&&(Le=u(Jt),Yt=Jt.tag,Jt!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&(Jt=null)):(rt=null,Jt=tt),rt!==Jt)){if(Yt=Yh,St="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Zh,St="onPointerLeave",q="onPointerEnter",V="pointer"),Le=rt==null?at:L(rt),Q=Jt==null?at:L(Jt),at=new Yt(St,V+"leave",rt,a,gt),at.target=Le,at.relatedTarget=Q,St=null,Ji(gt)===tt&&(Yt=new Yt(q,V+"enter",Jt,a,gt),Yt.target=Q,Yt.relatedTarget=Le,St=Yt),Le=St,rt&&Jt)e:{for(Yt=rt,q=Jt,V=0,Q=Yt;Q;Q=Yr(Q))V++;for(Q=0,St=q;St;St=Yr(St))Q++;for(;0<V-Q;)Yt=Yr(Yt),V--;for(;0<Q-V;)q=Yr(q),Q--;for(;V--;){if(Yt===q||q!==null&&Yt===q.alternate)break e;Yt=Yr(Yt),q=Yr(q)}Yt=null}else Yt=null;rt!==null&&Im(Tt,at,rt,Yt,!1),Jt!==null&&Le!==null&&Im(Tt,Le,Jt,Yt,!0)}}t:{if(at=tt?L(tt):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var Gt=id;else if(ed(at))if(ad)Gt=yv;else{Gt=Sv;var me=xv}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&Lc(tt.elementType)&&(Gt=id):Gt=Mv;if(Gt&&(Gt=Gt(t,tt))){nd(Tt,Gt,a,gt);break t}me&&me(t,at,tt),t==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&Uc(at,"number",at.value)}switch(me=tt?L(tt):window,t){case"focusin":(ed(me)||me.contentEditable==="true")&&(Er=me,qc=tt,Hs=null);break;case"focusout":Hs=qc=Er=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,hd(Tt,a,gt);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":hd(Tt,a,gt)}var Xt;if(Vc)t:{switch(t){case"compositionstart":var Zt="onCompositionStart";break t;case"compositionend":Zt="onCompositionEnd";break t;case"compositionupdate":Zt="onCompositionUpdate";break t}Zt=void 0}else yr?$h(t,a)&&(Zt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Zt="onCompositionStart");Zt&&(Kh&&a.locale!=="ko"&&(yr||Zt!=="onCompositionStart"?Zt==="onCompositionEnd"&&yr&&(Xt=Wh()):(na=gt,Bc="value"in na?na.value:na.textContent,yr=!0)),me=Dl(tt,Zt),0<me.length&&(Zt=new jh(Zt,t,null,a,gt),Tt.push({event:Zt,listeners:me}),Xt?Zt.data=Xt:(Xt=td(a),Xt!==null&&(Zt.data=Xt)))),(Xt=pv?mv(t,a):gv(t,a))&&(Zt=Dl(tt,"onBeforeInput"),0<Zt.length&&(me=new jh("onBeforeInput","beforeinput",null,a,gt),Tt.push({event:me,listeners:Zt}),me.data=Xt)),sx(Tt,t,tt,a,gt)}zm(Tt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Dl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ls(t,a),c!=null&&s.unshift(mo(t,c,f)),c=Ls(t,n),c!=null&&s.push(mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Im(t,n,a,s,c){for(var f=n._reactName,M=[];a!==null&&a!==s;){var b=a,z=b.alternate,tt=b.stateNode;if(b=b.tag,z!==null&&z===s)break;b!==5&&b!==26&&b!==27||tt===null||(z=tt,c?(tt=Ls(a,f),tt!=null&&M.unshift(mo(a,tt,z))):c||(tt=Ls(a,f),tt!=null&&M.push(mo(a,tt,z)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var ux=/\r\n?/g,fx=/\u0000|\uFFFD/g;function Fm(t){return(typeof t=="string"?t:""+t).replace(ux,`
`).replace(fx,"")}function Hm(t,n){return n=Fm(n),Fm(t)===n}function Ul(){}function Ue(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||xr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&xr(t,""+s);break;case"className":ze(t,"class",s);break;case"tabIndex":ze(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":ze(t,a,s);break;case"style":Vh(t,s,f);break;case"data":if(n!=="object"){ze(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",c.name,c,null),Ue(t,n,"formEncType",c.formEncType,c,null),Ue(t,n,"formMethod",c.formMethod,c,null),Ue(t,n,"formTarget",c.formTarget,c,null)):(Ue(t,n,"encType",c.encType,c,null),Ue(t,n,"method",c.method,c,null),Ue(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Fo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Fo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ve("beforetoggle",t),ve("toggle",t),$t(t,"popover",s);break;case"xlinkActuate":ke(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ke(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ke(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ke(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ke(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ke(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ke(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ke(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ke(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":$t(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=G0.get(a)||a,$t(t,a,s))}}function _f(t,n,a,s,c,f){switch(a){case"style":Vh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?xr(t,s):(typeof s=="number"||typeof s=="bigint")&&xr(t,""+s);break;case"onScroll":s!=null&&ve("scroll",t);break;case"onScrollEnd":s!=null&&ve("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Ve]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):$t(t,a,s)}}}function _n(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,M,a,null)}}c&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var b=f=M=c=null,z=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var gt=a[s];if(gt!=null)switch(s){case"name":c=gt;break;case"type":M=gt;break;case"checked":z=gt;break;case"defaultChecked":tt=gt;break;case"value":f=gt;break;case"defaultValue":b=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(r(137,n));break;default:Ue(t,n,s,gt,a,null)}}Us(t,f,b,z,tt,M,c,!1),Je(t);return;case"select":ve("invalid",t),s=M=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":M=b;break;case"multiple":s=b;default:Ue(t,n,c,b,a,null)}n=f,a=M,t.multiple=!!s,n!=null?vr(t,!!s,n,!1):a!=null&&vr(t,!!s,a,!0);return;case"textarea":ve("invalid",t),f=c=s=null;for(M in a)if(a.hasOwnProperty(M)&&(b=a[M],b!=null))switch(M){case"value":s=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(r(91));break;default:Ue(t,n,M,b,a,null)}Hh(t,s,c,f),Je(t);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(t,n,z,s,a,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)ve(po[s],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,tt,s,a,null)}return;default:if(Lc(n)){for(gt in a)a.hasOwnProperty(gt)&&(s=a[gt],s!==void 0&&_f(t,n,gt,s,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(s=a[b],s!=null&&Ue(t,n,b,s,a,null))}function hx(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,M=null,b=null,z=null,tt=null,gt=null;for(rt in a){var Tt=a[rt];if(a.hasOwnProperty(rt)&&Tt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":z=Tt;default:s.hasOwnProperty(rt)||Ue(t,n,rt,null,s,Tt)}}for(var at in s){var rt=s[at];if(Tt=a[at],s.hasOwnProperty(at)&&(rt!=null||Tt!=null))switch(at){case"type":f=rt;break;case"name":c=rt;break;case"checked":tt=rt;break;case"defaultChecked":gt=rt;break;case"value":M=rt;break;case"defaultValue":b=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==Tt&&Ue(t,n,at,rt,s,Tt)}}Ds(t,M,b,z,tt,gt,f,c);return;case"select":rt=M=b=at=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":rt=z;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":at=f;break;case"defaultValue":b=f;break;case"multiple":M=f;default:f!==z&&Ue(t,n,c,f,s,z)}n=b,a=M,s=rt,at!=null?vr(t,!!a,at,!1):!!s!=!!a&&(n!=null?vr(t,!!a,n,!0):vr(t,!!a,a?[]:"",!1));return;case"textarea":rt=at=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!s.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ue(t,n,b,null,s,c)}for(M in s)if(c=s[M],f=a[M],s.hasOwnProperty(M)&&(c!=null||f!=null))switch(M){case"value":at=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ue(t,n,M,c,s,f)}Fh(t,at,rt);return;case"option":for(var Jt in a)if(at=a[Jt],a.hasOwnProperty(Jt)&&at!=null&&!s.hasOwnProperty(Jt))switch(Jt){case"selected":t.selected=!1;break;default:Ue(t,n,Jt,null,s,at)}for(z in s)if(at=s[z],rt=a[z],s.hasOwnProperty(z)&&at!==rt&&(at!=null||rt!=null))switch(z){case"selected":t.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ue(t,n,z,at,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)at=a[Yt],a.hasOwnProperty(Yt)&&at!=null&&!s.hasOwnProperty(Yt)&&Ue(t,n,Yt,null,s,at);for(tt in s)if(at=s[tt],rt=a[tt],s.hasOwnProperty(tt)&&at!==rt&&(at!=null||rt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ue(t,n,tt,at,s,rt)}return;default:if(Lc(n)){for(var Le in a)at=a[Le],a.hasOwnProperty(Le)&&at!==void 0&&!s.hasOwnProperty(Le)&&_f(t,n,Le,void 0,s,at);for(gt in s)at=s[gt],rt=a[gt],!s.hasOwnProperty(gt)||at===rt||at===void 0&&rt===void 0||_f(t,n,gt,at,s,rt);return}}for(var q in a)at=a[q],a.hasOwnProperty(q)&&at!=null&&!s.hasOwnProperty(q)&&Ue(t,n,q,null,s,at);for(Tt in s)at=s[Tt],rt=a[Tt],!s.hasOwnProperty(Tt)||at===rt||at==null&&rt==null||Ue(t,n,Tt,at,s,rt)}var vf=null,xf=null;function Ll(t){return t.nodeType===9?t:t.ownerDocument}function Gm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function dx(){var t=window.event;return t&&t.type==="popstate"?t===Mf?!1:(Mf=t,!0):(Mf=null,!1)}var km=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,Xm=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Xm<"u"?function(t){return Xm.resolve(null).then(t).catch(gx)}:km;function gx(t){setTimeout(function(){throw t})}function va(t){return t==="head"}function Wm(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var M=t.ownerDocument;if(a&1&&go(M.documentElement),a&2&&go(M.body),a&4)for(a=M.head,go(a),M=a.firstChild;M;){var b=M.nextSibling,z=M.nodeName;M[Qi]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=b}}if(c===0){t.removeChild(f),To(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);To(n)}function yf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yf(a),Cs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _x(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function vx(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function xx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var Tf=null;function qm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function Ym(t,n,a){switch(n=Ll(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Cs(t)}var ei=new Map,jm=new Set;function Nl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Gi=W.d;W.d={f:Sx,r:Mx,D:yx,C:Ex,L:Tx,m:bx,X:Rx,S:Ax,M:Cx};function Sx(){var t=Gi.f(),n=Tl();return t||n}function Mx(t){var n=$i(t);n!==null&&n.tag===5&&n.type==="form"?pp(n):Gi.r(t)}var jr=typeof document>"u"?null:document;function Zm(t,n,a){var s=jr;if(s&&typeof n=="string"&&n){var c=xn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),jm.has(c)||(jm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),_n(n,"link",t),nt(n),s.head.appendChild(n)))}}function yx(t){Gi.D(t),Zm("dns-prefetch",t,null)}function Ex(t,n){Gi.C(t,n),Zm("preconnect",t,n)}function Tx(t,n,a){Gi.L(t,n,a);var s=jr;if(s&&t&&n){var c='link[rel="preload"][as="'+xn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+xn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+xn(a.imageSizes)+'"]')):c+='[href="'+xn(t)+'"]';var f=c;switch(n){case"style":f=Zr(t);break;case"script":f=Kr(t)}ei.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ei.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),_n(n,"link",t),nt(n),s.head.appendChild(n)))}}function bx(t,n){Gi.m(t,n);var a=jr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+xn(s)+'"][href="'+xn(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!ei.has(f)&&(t=g({rel:"modulepreload",href:t},n),ei.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),_n(s,"link",t),nt(s),a.head.appendChild(s)}}}function Ax(t,n,a){Gi.S(t,n,a);var s=jr;if(s&&t){var c=j(s).hoistableStyles,f=Zr(t);n=n||"default";var M=c.get(f);if(!M){var b={loading:0,preload:null};if(M=s.querySelector(_o(f)))b.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ei.get(f))&&bf(t,a);var z=M=s.createElement("link");nt(z),_n(z,"link",t),z._p=new Promise(function(tt,gt){z.onload=tt,z.onerror=gt}),z.addEventListener("load",function(){b.loading|=1}),z.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Ol(M,n,s)}M={type:"stylesheet",instance:M,count:1,state:b},c.set(f,M)}}}function Rx(t,n){Gi.X(t,n);var a=jr;if(a&&t){var s=j(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0},n),(n=ei.get(c))&&Af(t,n),f=a.createElement("script"),nt(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Cx(t,n){Gi.M(t,n);var a=jr;if(a&&t){var s=j(a).hoistableScripts,c=Kr(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ei.get(c))&&Af(t,n),f=a.createElement("script"),nt(f),_n(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Km(t,n,a,s){var c=(c=vt.current)?Nl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zr(a.href),a=j(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zr(a.href);var f=j(c).hoistableStyles,M=f.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=c.querySelector(_o(t)))&&!f._p&&(M.instance=f,M.state.loading=5),ei.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ei.set(t,a),f||wx(c,t,a,M.state))),n&&s===null)throw Error(r(528,""));return M}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=j(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Zr(t){return'href="'+xn(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Qm(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function wx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),_n(n,"link",a),nt(n),t.head.appendChild(n))}function Kr(t){return'[src="'+xn(t)+'"]'}function vo(t){return"script[async]"+t}function Jm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xn(a.href)+'"]');if(s)return n.instance=s,nt(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),nt(s),_n(s,"style",c),Ol(s,a.precedence,t),n.instance=s;case"stylesheet":c=Zr(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;s=Qm(a),(c=ei.get(c))&&bf(s,c),f=(t.ownerDocument||t).createElement("link"),nt(f);var M=f;return M._p=new Promise(function(b,z){M.onload=b,M.onerror=z}),_n(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,nt(c),c):(s=a,(c=ei.get(f))&&(s=g({},a),Af(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),nt(c),_n(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,t));return n.instance}function Ol(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,M=0;M<s.length;M++){var b=s[M];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function $m(t,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Qi]||f[Re]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var b=s.get(M);b?b.push(f):s.set(M,[f])}}return s}function tg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Dx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function eg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var xo=null;function Ux(){}function Lx(t,n,a){if(xo===null)throw Error(r(475));var s=xo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Zr(a.href),f=t.querySelector(_o(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=zl.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,nt(f);return}f=t.ownerDocument||t,a=Qm(a),(c=ei.get(c))&&bf(a,c),f=f.createElement("link"),nt(f);var M=f;M._p=new Promise(function(b,z){M.onload=b,M.onerror=z}),_n(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=zl.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function Nx(){if(xo===null)throw Error(r(475));var t=xo;return t.stylesheets&&t.count===0&&Rf(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&Rf(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Rf(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Bl=null;function Rf(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Bl=new Map,n.forEach(Ox,t),Bl=null,zl.call(t))}function Ox(t,n){if(!(n.state.loading&4)){var a=Bl.get(t);if(a)var s=a.get(null);else{a=new Map,Bl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var M=c[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),s=M)}s&&a.set(null,s)}c=n.instance,M=c.getAttribute("data-precedence"),f=a.get(M)||s,f===s&&a.set(null,c),a.set(M,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:C,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function Px(t,n,a,s,c,f,M,b){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function ng(t,n,a,s,c,f,M,b,z,tt,gt,Tt){return t=new Px(t,n,a,M,b,z,tt,Tt),n=1,f===!0&&(n|=24),f=Hn(3,null,null,n),t.current=f,f.stateNode=t,n=ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},fu(f),t}function ig(t){return t?(t=Rr,t):Rr}function ag(t,n,a,s,c,f){c=ig(c),s.context===null?s.context=c:s.pendingContext=c,s=ra(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=sa(t,s,n),a!==null&&(Wn(a,t,n),Zs(a,t,n))}function rg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cf(t,n){rg(t,n),(t=t.alternate)&&rg(t,n)}function sg(t){if(t.tag===13){var n=Ar(t,67108864);n!==null&&Wn(n,t,67108864),Cf(t,67108864)}}var Il=!0;function zx(t,n,a,s){var c=I.T;I.T=null;var f=W.p;try{W.p=2,wf(t,n,a,s)}finally{W.p=f,I.T=c}}function Bx(t,n,a,s){var c=I.T;I.T=null;var f=W.p;try{W.p=8,wf(t,n,a,s)}finally{W.p=f,I.T=c}}function wf(t,n,a,s){if(Il){var c=Df(s);if(c===null)gf(t,n,s,Fl,a),lg(t,s);else if(Fx(c,t,n,a,s))s.stopPropagation();else if(lg(t,s),n&4&&-1<Ix.indexOf(t)){for(;c!==null;){var f=$i(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=oe(f.pendingLanes);if(M!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;M;){var z=1<<31-It(M);b.entanglements[1]|=z,M&=~z}Mi(f),(Ce&6)===0&&(yl=D()+500,ho(0))}}break;case 13:b=Ar(f,2),b!==null&&Wn(b,f,2),Tl(),Cf(f,2)}if(f=Df(s),f===null&&gf(t,n,s,Fl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else gf(t,n,s,null,a)}}function Df(t){return t=Oc(t),Uf(t)}var Fl=null;function Uf(t){if(Fl=null,t=Ji(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fl=t,null}function og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(T()){case Y:return 2;case $:return 8;case lt:case pt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Lf=!1,xa=null,Sa=null,Ma=null,Mo=new Map,yo=new Map,ya=[],Ix="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lg(t,n){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":Sa=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Eo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=$i(n),n!==null&&sg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Fx(t,n,a,s,c){switch(n){case"focusin":return xa=Eo(xa,t,n,a,s,c),!0;case"dragenter":return Sa=Eo(Sa,t,n,a,s,c),!0;case"mouseover":return Ma=Eo(Ma,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return Mo.set(f,Eo(Mo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Eo(yo.get(f)||null,t,n,a,s,c)),!0}return!1}function cg(t){var n=Ji(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,qe(t.priority,function(){if(a.tag===13){var s=Xn();s=We(s);var c=Ar(a,s);c!==null&&Wn(c,a,s),Cf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Df(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Nc=s,a.target.dispatchEvent(s),Nc=null}else return n=$i(a),n!==null&&sg(n),t.blockedOn=a,!1;n.shift()}return!0}function ug(t,n,a){Hl(t)&&a.delete(n)}function Hx(){Lf=!1,xa!==null&&Hl(xa)&&(xa=null),Sa!==null&&Hl(Sa)&&(Sa=null),Ma!==null&&Hl(Ma)&&(Ma=null),Mo.forEach(ug),yo.forEach(ug)}function Gl(t,n){t.blockedOn===n&&(t.blockedOn=null,Lf||(Lf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Hx)))}var Vl=null;function fg(t){Vl!==t&&(Vl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===t&&(Vl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Uf(s||a)===null)continue;break}var f=$i(a);f!==null&&(t.splice(n,3),n-=3,Du(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function To(t){function n(z){return Gl(z,t)}xa!==null&&Gl(xa,t),Sa!==null&&Gl(Sa,t),Ma!==null&&Gl(Ma,t),Mo.forEach(n),yo.forEach(n);for(var a=0;a<ya.length;a++){var s=ya[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)cg(a),a.blockedOn===null&&ya.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],M=c[Ve]||null;if(typeof f=="function")M||fg(a);else if(M){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,M=f[Ve]||null)b=M.formAction;else if(Uf(c)!==null)continue}else b=M.action;typeof b=="function"?a[s+1]=b:(a.splice(s,3),s-=3),fg(a)}}}function Nf(t){this._internalRoot=t}kl.prototype.render=Nf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Xn();ag(a,s,t,n,null,null)},kl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ag(t.current,2,null,t,null,null),Tl(),n[In]=null}};function kl(t){this._internalRoot=t}kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ge();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ya.length&&n!==0&&n<ya[a].priority;a++);ya.splice(a,0,t),a===0&&cg(t)}};var hg=e.version;if(hg!=="19.1.0")throw Error(r(527,hg,"19.1.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Gx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Rt=Xl.inject(Gx),bt=Xl}catch{}}return bo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Cp,f=wp,M=Dp,b=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(b=n.unstable_transitionCallbacks)),n=ng(t,1,!1,null,null,a,s,c,f,M,b,null),t[In]=n.current,mf(t),new Nf(n)},bo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Cp,M=wp,b=Dp,z=null,tt=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(tt=a.formState)),n=ng(t,1,!0,n,a??null,s,c,f,M,b,z,tt),n.context=ig(null),a=n.current,s=Xn(),s=We(s),c=ra(s),c.callback=null,sa(a,c,s),a=s,n.current.lanes=a,zt(n,a),Mi(n),t[In]=n.current,mf(t),new kl(n)},bo.version="19.1.0",bo}var Sg;function Kx(){if(Sg)return Pf.exports;Sg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pf.exports=Zx(),Pf.exports}var Qx=Kx();const Jx=i0(Qx);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="163",Qr={ROTATE:0,DOLLY:1,PAN:2},Jr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$x=0,Mg=1,tS=2,a0=1,eS=2,Yi=3,za=0,zn=1,ji=2,Na=0,vs=1,yg=2,Eg=3,Tg=4,nS=5,cr=100,iS=101,aS=102,rS=103,sS=104,oS=200,lS=201,cS=202,uS=203,bh=204,Ah=205,fS=206,hS=207,dS=208,pS=209,mS=210,gS=211,_S=212,vS=213,xS=214,SS=0,MS=1,yS=2,xc=3,ES=4,TS=5,bS=6,AS=7,r0=0,RS=1,CS=2,Oa=0,wS=1,DS=2,US=3,LS=4,NS=5,OS=6,PS=7,s0=300,Ms=301,ys=302,Rh=303,Ch=304,Ac=306,wh=1e3,fr=1001,Dh=1002,ai=1003,zS=1004,Wl=1005,di=1006,Ff=1007,hr=1008,Pa=1009,BS=1010,IS=1011,o0=1012,l0=1013,Es=1014,La=1015,Sc=1016,c0=1017,u0=1018,Po=1020,FS=35902,HS=1021,GS=1022,Ti=1023,VS=1024,kS=1025,xs=1026,Oo=1027,XS=1028,f0=1029,WS=1030,h0=1031,d0=1033,Hf=33776,Gf=33777,Vf=33778,kf=33779,bg=35840,Ag=35841,Rg=35842,Cg=35843,p0=36196,wg=37492,Dg=37496,Ug=37808,Lg=37809,Ng=37810,Og=37811,Pg=37812,zg=37813,Bg=37814,Ig=37815,Fg=37816,Hg=37817,Gg=37818,Vg=37819,kg=37820,Xg=37821,Xf=36492,Wg=36494,qg=36495,qS=36283,Yg=36284,jg=36285,Zg=36286,YS=3200,jS=3201,m0=0,ZS=1,Ua="",yi="srgb",Ia="srgb-linear",Ph="display-p3",Rc="display-p3-linear",Mc="linear",Fe="srgb",yc="rec709",Ec="p3",$r=7680,Kg=519,KS=512,QS=513,JS=514,g0=515,$S=516,tM=517,eM=518,nM=519,Qg=35044,Jg="300 es",Zi=2e3,Tc=2001;class gr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],No=Math.PI/180,Uh=180/Math.PI;function zo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[o&255]+yn[o>>8&255]+yn[o>>16&255]+yn[o>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[i&63|128]+yn[i>>8&255]+"-"+yn[i>>16&255]+yn[i>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function wn(o,e,i){return Math.max(e,Math.min(i,o))}function iM(o,e){return(o%e+e)%e}function Wf(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Pn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const aM={DEG2RAD:No};class ee{constructor(e=0,i=0){ee.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(e,i,r,l,u,d,h,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],S=r[7],_=r[2],E=r[5],R=r[8],w=l[0],v=l[3],x=l[6],O=l[1],C=l[4],F=l[7],k=l[2],H=l[5],P=l[8];return u[0]=d*w+h*O+m*k,u[3]=d*v+h*C+m*H,u[6]=d*x+h*F+m*P,u[1]=p*w+g*O+S*k,u[4]=p*v+g*C+S*H,u[7]=p*x+g*F+S*P,u[2]=_*w+E*O+R*k,u[5]=_*v+E*C+R*H,u[8]=_*x+E*F+R*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],S=g*d-h*p,_=h*m-g*u,E=p*u-d*m,R=i*S+r*_+l*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=S*w,e[1]=(l*p-g*r)*w,e[2]=(h*r-l*d)*w,e[3]=_*w,e[4]=(g*i-l*m)*w,e[5]=(l*u-h*i)*w,e[6]=E*w,e[7]=(r*m-p*i)*w,e[8]=(d*i-r*u)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(qf.makeScale(e,i)),this}rotate(e){return this.premultiply(qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qf=new he;function _0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function rM(){const o=bc("canvas");return o.style.display="block",o}const $g={};function sM(o){o in $g||($g[o]=!0,console.warn(o))}const t_=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),e_=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ql={[Ia]:{transfer:Mc,primaries:yc,toReference:o=>o,fromReference:o=>o},[yi]:{transfer:Fe,primaries:yc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Rc]:{transfer:Mc,primaries:Ec,toReference:o=>o.applyMatrix3(e_),fromReference:o=>o.applyMatrix3(t_)},[Ph]:{transfer:Fe,primaries:Ec,toReference:o=>o.convertSRGBToLinear().applyMatrix3(e_),fromReference:o=>o.applyMatrix3(t_).convertLinearToSRGB()}},oM=new Set([Ia,Rc]),Ne={enabled:!0,_workingColorSpace:Ia,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!oM.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=ql[e].toReference,l=ql[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return ql[o].primaries},getTransfer:function(o){return o===Ua?Mc:ql[o].transfer}};function Ss(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ts;class lM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ts===void 0&&(ts=bc("canvas")),ts.width=e.width,ts.height=e.height;const r=ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ts}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=bc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=Ss(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ss(i[r]/255)*255):i[r]=Ss(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cM=0;class v0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=zo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(jf(l[d].image)):u.push(jf(l[d]))}else u=jf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function jf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?lM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uM=0;class Bn extends gr{constructor(e=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=fr,l=fr,u=di,d=hr,h=Ti,m=Pa,p=Bn.DEFAULT_ANISOTROPY,g=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=zo(),this.name="",this.source=new v0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wh:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wh:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=s0;Bn.DEFAULT_ANISOTROPY=1;class pn{constructor(e=0,i=0,r=0,l=1){pn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],S=m[8],_=m[1],E=m[5],R=m[9],w=m[2],v=m[6],x=m[10];if(Math.abs(g-_)<.01&&Math.abs(S-w)<.01&&Math.abs(R-v)<.01){if(Math.abs(g+_)<.1&&Math.abs(S+w)<.1&&Math.abs(R+v)<.1&&Math.abs(p+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,F=(E+1)/2,k=(x+1)/2,H=(g+_)/4,P=(S+w)/4,it=(R+v)/4;return C>F&&C>k?C<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(C),l=H/r,u=P/r):F>k?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=H/l,u=it/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=P/u,l=it/u),this.set(r,l,u,i),this}let O=Math.sqrt((v-R)*(v-R)+(S-w)*(S-w)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(v-R)/O,this.y=(S-w)/O,this.z=(_-g)/O,this.w=Math.acos((p+E+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends gr{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new pn(0,0,e,i),this.scissorTest=!1,this.viewport=new pn(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},r);const u=new Bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new v0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends fM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class x0 extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hM extends Bn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],S=r[l+3];const _=u[d+0],E=u[d+1],R=u[d+2],w=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S;return}if(h===1){e[i+0]=_,e[i+1]=E,e[i+2]=R,e[i+3]=w;return}if(S!==w||m!==_||p!==E||g!==R){let v=1-h;const x=m*_+p*E+g*R+S*w,O=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const k=Math.sqrt(C),H=Math.atan2(k,x*O);v=Math.sin(v*H)/k,h=Math.sin(h*H)/k}const F=h*O;if(m=m*v+_*F,p=p*v+E*F,g=g*v+R*F,S=S*v+w*F,v===1-h){const k=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=k,p*=k,g*=k,S*=k}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],S=u[d],_=u[d+1],E=u[d+2],R=u[d+3];return e[i]=h*R+g*S+m*E-p*_,e[i+1]=m*R+g*_+p*S-h*E,e[i+2]=p*R+g*E+h*_-m*S,e[i+3]=g*R-h*S-m*_-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),S=h(u/2),_=m(r/2),E=m(l/2),R=m(u/2);switch(d){case"XYZ":this._x=_*g*S+p*E*R,this._y=p*E*S-_*g*R,this._z=p*g*R+_*E*S,this._w=p*g*S-_*E*R;break;case"YXZ":this._x=_*g*S+p*E*R,this._y=p*E*S-_*g*R,this._z=p*g*R-_*E*S,this._w=p*g*S+_*E*R;break;case"ZXY":this._x=_*g*S-p*E*R,this._y=p*E*S+_*g*R,this._z=p*g*R+_*E*S,this._w=p*g*S-_*E*R;break;case"ZYX":this._x=_*g*S-p*E*R,this._y=p*E*S+_*g*R,this._z=p*g*R-_*E*S,this._w=p*g*S+_*E*R;break;case"YZX":this._x=_*g*S+p*E*R,this._y=p*E*S+_*g*R,this._z=p*g*R-_*E*S,this._w=p*g*S-_*E*R;break;case"XZY":this._x=_*g*S-p*E*R,this._y=p*E*S-_*g*R,this._z=p*g*R+_*E*S,this._w=p*g*S+_*E*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],S=i[10],_=r+h+S;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(g-m)*E,this._y=(u-p)*E,this._z=(d-l)*E}else if(r>h&&r>S){const E=2*Math.sqrt(1+r-h-S);this._w=(g-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(u+p)/E}else if(h>S){const E=2*Math.sqrt(1+h-r-S);this._w=(u-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+S-r-h);this._w=(d-l)/E,this._x=(u+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),S=Math.sin((1-i)*g)/p,_=Math.sin(i*g)/p;return this._w=d*S+this._w*_,this._x=r*S+this._x*_,this._y=l*S+this._y*_,this._z=u*S+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,i=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(n_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(n_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),S=2*(u*r-d*i);return this.x=i+m*p+d*S-h*g,this.y=r+m*g+h*p-u*S,this.z=l+m*S+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Zf.copy(this).projectOnVector(e),this.sub(Zf)}reflect(e){return this.sub(Zf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new J,n_=new pr;class Bo{constructor(e=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ui):ui.fromBufferAttribute(u,d),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yl.copy(r.boundingBox)),Yl.applyMatrix4(e.matrixWorld),this.union(Yl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),jl.subVectors(this.max,Ro),es.subVectors(e.a,Ro),ns.subVectors(e.b,Ro),is.subVectors(e.c,Ro),Ta.subVectors(ns,es),ba.subVectors(is,ns),nr.subVectors(es,is);let i=[0,-Ta.z,Ta.y,0,-ba.z,ba.y,0,-nr.z,nr.y,Ta.z,0,-Ta.x,ba.z,0,-ba.x,nr.z,0,-nr.x,-Ta.y,Ta.x,0,-ba.y,ba.x,0,-nr.y,nr.x,0];return!Kf(i,es,ns,is,jl)||(i=[1,0,0,0,1,0,0,0,1],!Kf(i,es,ns,is,jl))?!1:(Zl.crossVectors(Ta,ba),i=[Zl.x,Zl.y,Zl.z],Kf(i,es,ns,is,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vi=[new J,new J,new J,new J,new J,new J,new J,new J],ui=new J,Yl=new Bo,es=new J,ns=new J,is=new J,Ta=new J,ba=new J,nr=new J,Ro=new J,jl=new J,Zl=new J,ir=new J;function Kf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){ir.fromArray(o,u);const h=l.x*Math.abs(ir.x)+l.y*Math.abs(ir.y)+l.z*Math.abs(ir.z),m=e.dot(ir),p=i.dot(ir),g=r.dot(ir);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const dM=new Bo,Co=new J,Qf=new J;class Cc{constructor(e=new J,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):dM.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(Qf)),this.expandByPoint(Co.copy(e.center).sub(Qf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new J,Jf=new J,Kl=new J,Aa=new J,$f=new J,Ql=new J,th=new J;class zh{constructor(e=new J,i=new J(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ki.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,i),ki.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Jf.copy(e).add(i).multiplyScalar(.5),Kl.copy(i).sub(e).normalize(),Aa.copy(this.origin).sub(Jf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(Kl),h=Aa.dot(this.direction),m=-Aa.dot(Kl),p=Aa.lengthSq(),g=Math.abs(1-d*d);let S,_,E,R;if(g>0)if(S=d*m-h,_=d*h-m,R=u*g,S>=0)if(_>=-R)if(_<=R){const w=1/g;S*=w,_*=w,E=S*(S+d*_+2*h)+_*(d*S+_+2*m)+p}else _=u,S=Math.max(0,-(d*_+h)),E=-S*S+_*(_+2*m)+p;else _=-u,S=Math.max(0,-(d*_+h)),E=-S*S+_*(_+2*m)+p;else _<=-R?(S=Math.max(0,-(-d*u+h)),_=S>0?-u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+p):_<=R?(S=0,_=Math.min(Math.max(-u,-m),u),E=_*(_+2*m)+p):(S=Math.max(0,-(d*u+h)),_=S>0?u:Math.min(Math.max(-u,-m),u),E=-S*S+_*(_+2*m)+p);else _=d>0?-u:u,S=Math.max(0,-(d*_+h)),E=-S*S+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Jf).addScaledVector(Kl,_),E}intersectSphere(e,i){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),l=ki.dot(ki)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),g>=0?(u=(e.min.y-_.y)*g,d=(e.max.y-_.y)*g):(u=(e.max.y-_.y)*g,d=(e.min.y-_.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(h=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,i,r,l,u){$f.subVectors(i,e),Ql.subVectors(r,e),th.crossVectors($f,Ql);let d=this.direction.dot(th),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Aa.subVectors(this.origin,e);const m=h*this.direction.dot(Ql.crossVectors(Aa,Ql));if(m<0)return null;const p=h*this.direction.dot($f.cross(Aa));if(p<0||m+p>d)return null;const g=-h*Aa.dot(th);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,i,r,l,u,d,h,m,p,g,S,_,E,R,w,v){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,S,_,E,R,w,v)}set(e,i,r,l,u,d,h,m,p,g,S,_,E,R,w,v){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=u,x[5]=d,x[9]=h,x[13]=m,x[2]=p,x[6]=g,x[10]=S,x[14]=_,x[3]=E,x[7]=R,x[11]=w,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/as.setFromMatrixColumn(e,0).length(),u=1/as.setFromMatrixColumn(e,1).length(),d=1/as.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const _=d*g,E=d*S,R=h*g,w=h*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=E+R*p,i[5]=_-w*p,i[9]=-h*m,i[2]=w-_*p,i[6]=R+E*p,i[10]=d*m}else if(e.order==="YXZ"){const _=m*g,E=m*S,R=p*g,w=p*S;i[0]=_+w*h,i[4]=R*h-E,i[8]=d*p,i[1]=d*S,i[5]=d*g,i[9]=-h,i[2]=E*h-R,i[6]=w+_*h,i[10]=d*m}else if(e.order==="ZXY"){const _=m*g,E=m*S,R=p*g,w=p*S;i[0]=_-w*h,i[4]=-d*S,i[8]=R+E*h,i[1]=E+R*h,i[5]=d*g,i[9]=w-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const _=d*g,E=d*S,R=h*g,w=h*S;i[0]=m*g,i[4]=R*p-E,i[8]=_*p+w,i[1]=m*S,i[5]=w*p+_,i[9]=E*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const _=d*m,E=d*p,R=h*m,w=h*p;i[0]=m*g,i[4]=w-_*S,i[8]=R*S+E,i[1]=S,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=E*S+R,i[10]=_-w*S}else if(e.order==="XZY"){const _=d*m,E=d*p,R=h*m,w=h*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=_*S+w,i[5]=d*g,i[9]=E*S-R,i[2]=R*S-E,i[6]=h*g,i[10]=w*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pM,e,mM)}lookAt(e,i,r){const l=this.elements;return qn.subVectors(e,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ra.crossVectors(r,qn),Ra.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ra.crossVectors(r,qn)),Ra.normalize(),Jl.crossVectors(qn,Ra),l[0]=Ra.x,l[4]=Jl.x,l[8]=qn.x,l[1]=Ra.y,l[5]=Jl.y,l[9]=qn.y,l[2]=Ra.z,l[6]=Jl.z,l[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],S=r[5],_=r[9],E=r[13],R=r[2],w=r[6],v=r[10],x=r[14],O=r[3],C=r[7],F=r[11],k=r[15],H=l[0],P=l[4],it=l[8],N=l[12],A=l[1],K=l[5],ut=l[9],B=l[13],ft=l[2],st=l[6],I=l[10],W=l[14],G=l[3],_t=l[7],U=l[11],Z=l[15];return u[0]=d*H+h*A+m*ft+p*G,u[4]=d*P+h*K+m*st+p*_t,u[8]=d*it+h*ut+m*I+p*U,u[12]=d*N+h*B+m*W+p*Z,u[1]=g*H+S*A+_*ft+E*G,u[5]=g*P+S*K+_*st+E*_t,u[9]=g*it+S*ut+_*I+E*U,u[13]=g*N+S*B+_*W+E*Z,u[2]=R*H+w*A+v*ft+x*G,u[6]=R*P+w*K+v*st+x*_t,u[10]=R*it+w*ut+v*I+x*U,u[14]=R*N+w*B+v*W+x*Z,u[3]=O*H+C*A+F*ft+k*G,u[7]=O*P+C*K+F*st+k*_t,u[11]=O*it+C*ut+F*I+k*U,u[15]=O*N+C*B+F*W+k*Z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],S=e[6],_=e[10],E=e[14],R=e[3],w=e[7],v=e[11],x=e[15];return R*(+u*m*S-l*p*S-u*h*_+r*p*_+l*h*E-r*m*E)+w*(+i*m*E-i*p*_+u*d*_-l*d*E+l*p*g-u*m*g)+v*(+i*p*S-i*h*E-u*d*S+r*d*E+u*h*g-r*p*g)+x*(-l*h*g-i*m*S+i*h*_+l*d*S-r*d*_+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],S=e[9],_=e[10],E=e[11],R=e[12],w=e[13],v=e[14],x=e[15],O=S*v*p-w*_*p+w*m*E-h*v*E-S*m*x+h*_*x,C=R*_*p-g*v*p-R*m*E+d*v*E+g*m*x-d*_*x,F=g*w*p-R*S*p+R*h*E-d*w*E-g*h*x+d*S*x,k=R*S*m-g*w*m-R*h*_+d*w*_+g*h*v-d*S*v,H=i*O+r*C+l*F+u*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return e[0]=O*P,e[1]=(w*_*u-S*v*u-w*l*E+r*v*E+S*l*x-r*_*x)*P,e[2]=(h*v*u-w*m*u+w*l*p-r*v*p-h*l*x+r*m*x)*P,e[3]=(S*m*u-h*_*u-S*l*p+r*_*p+h*l*E-r*m*E)*P,e[4]=C*P,e[5]=(g*v*u-R*_*u+R*l*E-i*v*E-g*l*x+i*_*x)*P,e[6]=(R*m*u-d*v*u-R*l*p+i*v*p+d*l*x-i*m*x)*P,e[7]=(d*_*u-g*m*u+g*l*p-i*_*p-d*l*E+i*m*E)*P,e[8]=F*P,e[9]=(R*S*u-g*w*u-R*r*E+i*w*E+g*r*x-i*S*x)*P,e[10]=(d*w*u-R*h*u+R*r*p-i*w*p-d*r*x+i*h*x)*P,e[11]=(g*h*u-d*S*u-g*r*p+i*S*p+d*r*E-i*h*E)*P,e[12]=k*P,e[13]=(g*w*l-R*S*l+R*r*_-i*w*_-g*r*v+i*S*v)*P,e[14]=(R*h*l-d*w*l-R*r*m+i*w*m+d*r*v-i*h*v)*P,e[15]=(d*S*l-g*h*l+g*r*m-i*S*m-d*r*_+i*h*_)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,S=h+h,_=u*p,E=u*g,R=u*S,w=d*g,v=d*S,x=h*S,O=m*p,C=m*g,F=m*S,k=r.x,H=r.y,P=r.z;return l[0]=(1-(w+x))*k,l[1]=(E+F)*k,l[2]=(R-C)*k,l[3]=0,l[4]=(E-F)*H,l[5]=(1-(_+x))*H,l[6]=(v+O)*H,l[7]=0,l[8]=(R+C)*P,l[9]=(v-O)*P,l[10]=(1-(_+w))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=as.set(l[0],l[1],l[2]).length();const d=as.set(l[4],l[5],l[6]).length(),h=as.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/u,g=1/d,S=1/h;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=S,fi.elements[9]*=S,fi.elements[10]*=S,i.setFromRotationMatrix(fi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Zi){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),_=(r+l)/(r-l);let E,R;if(h===Zi)E=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Tc)E=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=_,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Zi){const m=this.elements,p=1/(i-e),g=1/(r-l),S=1/(d-u),_=(i+e)*p,E=(r+l)*g;let R,w;if(h===Zi)R=(d+u)*S,w=-2*S;else if(h===Tc)R=u*S,w=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-_,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=w,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const as=new J,fi=new Qe,pM=new J(0,0,0),mM=new J(1,1,1),Ra=new J,Jl=new J,qn=new J,i_=new Qe,a_=new pr;class Ri{constructor(e=0,i=0,r=0,l=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],S=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(wn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(wn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-wn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(wn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(h,E));break;case"XZY":this._z=Math.asin(-wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return i_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return a_.setFromEuler(this),this.setFromQuaternion(a_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class S0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gM=0;const r_=new J,rs=new pr,Xi=new Qe,$l=new J,wo=new J,_M=new J,vM=new pr,s_=new J(1,0,0),o_=new J(0,1,0),l_=new J(0,0,1),c_={type:"added"},xM={type:"removed"},ss={type:"childadded",child:null},eh={type:"childremoved",child:null};class vn extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new J,i=new Ri,r=new pr,l=new J(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new he}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new S0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,i){return rs.setFromAxisAngle(e,i),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(s_,e)}rotateY(e){return this.rotateOnAxis(o_,e)}rotateZ(e){return this.rotateOnAxis(l_,e)}translateOnAxis(e,i){return r_.copy(e).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(s_,e)}translateY(e){return this.translateOnAxis(o_,e)}translateZ(e){return this.translateOnAxis(l_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?$l.copy(e):$l.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(wo,$l,this.up):Xi.lookAt($l,wo,this.up),this.quaternion.setFromRotationMatrix(Xi),l&&(Xi.extractRotation(l.matrixWorld),rs.setFromRotationMatrix(Xi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(c_),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(xM),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(c_),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,vM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),S=d(e.shapes),_=d(e.skeletons),E=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),E.length>0&&(r.animations=E),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}vn.DEFAULT_UP=new J(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new J,Wi=new J,nh=new J,qi=new J,os=new J,ls=new J,u_=new J,ih=new J,ah=new J,rh=new J;class pi{constructor(e=new J,i=new J,r=new J){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Wi.subVectors(r,i),nh.subVectors(e,i);const d=hi.dot(hi),h=hi.dot(Wi),m=hi.dot(nh),p=Wi.dot(Wi),g=Wi.dot(nh),S=d*p-h*h;if(S===0)return u.set(0,0,0),null;const _=1/S,E=(p*m-h*g)*_,R=(d*g-h*m)*_;return u.set(1-E-R,R,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,qi.x),m.addScaledVector(d,qi.y),m.addScaledVector(h,qi.z),m)}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Wi.subVectors(e,i),hi.cross(Wi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),hi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return pi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return pi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;os.subVectors(l,r),ls.subVectors(u,r),ih.subVectors(e,r);const m=os.dot(ih),p=ls.dot(ih);if(m<=0&&p<=0)return i.copy(r);ah.subVectors(e,l);const g=os.dot(ah),S=ls.dot(ah);if(g>=0&&S<=g)return i.copy(l);const _=m*S-g*p;if(_<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(os,d);rh.subVectors(e,u);const E=os.dot(rh),R=ls.dot(rh);if(R>=0&&E<=R)return i.copy(u);const w=E*p-m*R;if(w<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(ls,h);const v=g*R-E*S;if(v<=0&&S-g>=0&&E-R>=0)return u_.subVectors(u,l),h=(S-g)/(S-g+(E-R)),i.copy(l).addScaledVector(u_,h);const x=1/(v+w+_);return d=w*x,h=_*x,i.copy(r).addScaledVector(os,d).addScaledVector(ls,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const M0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ca={h:0,s:0,l:0},tc={h:0,s:0,l:0};function sh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ye{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=iM(e,1),i=wn(i,0,1),r=wn(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=sh(d,u,e+1/3),this.g=sh(d,u,e),this.b=sh(d,u,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=yi){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const r=M0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=Yf(e.r),this.g=Yf(e.g),this.b=Yf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Ne.fromWorkingColorSpace(En.copy(this),e),Math.round(wn(En.r*255,0,255))*65536+Math.round(wn(En.g*255,0,255))*256+Math.round(wn(En.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(En.copy(this),i);const r=En.r,l=En.g,u=En.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=g<=.5?S/(d+h):S/(2-d-h),d){case r:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-r)/S+2;break;case u:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(En.copy(this),i),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=yi){Ne.fromWorkingColorSpace(En.copy(this),e);const i=En.r,r=En.g,l=En.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ca),this.setHSL(Ca.h+e,Ca.s+i,Ca.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ca),e.getHSL(tc);const r=Wf(Ca.h,tc.h,i),l=Wf(Ca.s,tc.s,i),u=Wf(Ca.l,tc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new ye;ye.NAMES=M0;let SM=0;class bs extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=zo(),this.name="",this.type="Material",this.blending=vs,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bh,this.blendDst=Ah,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==za&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ah&&(r.blendDst=this.blendDst),this.blendEquation!==cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class y0 extends bs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=r0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const an=new J,ec=new ee;class bi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Qg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=La,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sM("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)ec.fromBufferAttribute(this,i),ec.applyMatrix3(e),this.setXY(i,ec.x,ec.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix3(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyMatrix4(e),this.setXYZ(i,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.applyNormalMatrix(e),this.setXYZ(i,an.x,an.y,an.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)an.fromBufferAttribute(this,i),an.transformDirection(e),this.setXYZ(i,an.x,an.y,an.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Pn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Pn(i,this.array),r=Pn(r,this.array),l=Pn(l,this.array),u=Pn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qg&&(e.usage=this.usage),e}}class E0 extends bi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class T0 extends bi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ai extends bi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let MM=0;const ni=new Qe,oh=new vn,cs=new J,Yn=new Bo,Do=new Bo,dn=new J;class Ki extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=zo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_0(e)?T0:E0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,i,r){return ni.makeTranslation(e,i,r),this.applyMatrix4(ni),this}scale(e,i,r){return ni.makeScale(e,i,r),this.applyMatrix4(ni),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ai(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Yn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors(Yn.min,Do.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,Do.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(Do.min),Yn.expandByPoint(Do.max))}Yn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)dn.fromBufferAttribute(h,p),m&&(cs.fromBufferAttribute(e,p),dn.add(cs)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let it=0;it<r.count;it++)h[it]=new J,m[it]=new J;const p=new J,g=new J,S=new J,_=new ee,E=new ee,R=new ee,w=new J,v=new J;function x(it,N,A){p.fromBufferAttribute(r,it),g.fromBufferAttribute(r,N),S.fromBufferAttribute(r,A),_.fromBufferAttribute(u,it),E.fromBufferAttribute(u,N),R.fromBufferAttribute(u,A),g.sub(p),S.sub(p),E.sub(_),R.sub(_);const K=1/(E.x*R.y-R.x*E.y);isFinite(K)&&(w.copy(g).multiplyScalar(R.y).addScaledVector(S,-E.y).multiplyScalar(K),v.copy(S).multiplyScalar(E.x).addScaledVector(g,-R.x).multiplyScalar(K),h[it].add(w),h[N].add(w),h[A].add(w),m[it].add(v),m[N].add(v),m[A].add(v))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let it=0,N=O.length;it<N;++it){const A=O[it],K=A.start,ut=A.count;for(let B=K,ft=K+ut;B<ft;B+=3)x(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const C=new J,F=new J,k=new J,H=new J;function P(it){k.fromBufferAttribute(l,it),H.copy(k);const N=h[it];C.copy(N),C.sub(k.multiplyScalar(k.dot(N))).normalize(),F.crossVectors(H,N);const K=F.dot(m[it])<0?-1:1;d.setXYZW(it,C.x,C.y,C.z,K)}for(let it=0,N=O.length;it<N;++it){const A=O[it],K=A.start,ut=A.count;for(let B=K,ft=K+ut;B<ft;B+=3)P(e.getX(B+0)),P(e.getX(B+1)),P(e.getX(B+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,E=r.count;_<E;_++)r.setXYZ(_,0,0,0);const l=new J,u=new J,d=new J,h=new J,m=new J,p=new J,g=new J,S=new J;if(e)for(let _=0,E=e.count;_<E;_+=3){const R=e.getX(_+0),w=e.getX(_+1),v=e.getX(_+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,v),g.subVectors(d,u),S.subVectors(l,u),g.cross(S),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,v),h.add(g),m.add(g),p.add(g),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(v,p.x,p.y,p.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),u.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),g.subVectors(d,u),S.subVectors(l,u),g.cross(S),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,S=h.normalized,_=new p.constructor(m.length*g);let E=0,R=0;for(let w=0,v=m.length;w<v;w++){h.isInterleavedBufferAttribute?E=m[w]*h.data.stride+h.offset:E=m[w]*g;for(let x=0;x<g;x++)_[R++]=p[E++]}return new bi(_,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ki,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,S=p.length;g<S;g++){const _=p[g],E=e(_,r);m.push(E)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,_=p.length;S<_;S++){const E=p[S];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],S=u[p];for(let _=0,E=S.length;_<E;_++)g.push(S[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new Qe,ar=new zh,nc=new Cc,h_=new J,us=new J,fs=new J,hs=new J,lh=new J,ic=new J,ac=new ee,rc=new ee,sc=new ee,d_=new J,p_=new J,m_=new J,oc=new J,lc=new J;class mi extends vn{constructor(e=new Ki,i=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){ic.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],S=u[m];g!==0&&(lh.fromBufferAttribute(S,e),d?ic.addScaledVector(lh,g):ic.addScaledVector(lh.sub(i),g))}i.add(ic)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(u),ar.copy(e.ray).recast(e.near),!(nc.containsPoint(ar.origin)===!1&&(ar.intersectSphere(nc,h_)===null||ar.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(u).invert(),ar.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&ar.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ar)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,_=u.groups,E=u.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,w=_.length;R<w;R++){const v=_[R],x=d[v.materialIndex],O=Math.max(v.start,E.start),C=Math.min(h.count,Math.min(v.start+v.count,E.start+E.count));for(let F=O,k=C;F<k;F+=3){const H=h.getX(F),P=h.getX(F+1),it=h.getX(F+2);l=cc(this,x,e,r,p,g,S,H,P,it),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(h.count,E.start+E.count);for(let v=R,x=w;v<x;v+=3){const O=h.getX(v),C=h.getX(v+1),F=h.getX(v+2);l=cc(this,d,e,r,p,g,S,O,C,F),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,w=_.length;R<w;R++){const v=_[R],x=d[v.materialIndex],O=Math.max(v.start,E.start),C=Math.min(m.count,Math.min(v.start+v.count,E.start+E.count));for(let F=O,k=C;F<k;F+=3){const H=F,P=F+1,it=F+2;l=cc(this,x,e,r,p,g,S,H,P,it),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const R=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let v=R,x=w;v<x;v+=3){const O=v,C=v+1,F=v+2;l=cc(this,d,e,r,p,g,S,O,C,F),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function yM(o,e,i,r,l,u,d,h){let m;if(e.side===zn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===za,h),m===null)return null;lc.copy(h),lc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lc);return p<i.near||p>i.far?null:{distance:p,point:lc.clone(),object:o}}function cc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,us),o.getVertexPosition(m,fs),o.getVertexPosition(p,hs);const g=yM(o,e,i,r,us,fs,hs,oc);if(g){l&&(ac.fromBufferAttribute(l,h),rc.fromBufferAttribute(l,m),sc.fromBufferAttribute(l,p),g.uv=pi.getInterpolation(oc,us,fs,hs,ac,rc,sc,new ee)),u&&(ac.fromBufferAttribute(u,h),rc.fromBufferAttribute(u,m),sc.fromBufferAttribute(u,p),g.uv1=pi.getInterpolation(oc,us,fs,hs,ac,rc,sc,new ee)),d&&(d_.fromBufferAttribute(d,h),p_.fromBufferAttribute(d,m),m_.fromBufferAttribute(d,p),g.normal=pi.getInterpolation(oc,us,fs,hs,d_,p_,m_,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new J,materialIndex:0};pi.getNormal(us,fs,hs,S.normal),g.face=S}return g}class mr extends Ki{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],S=[];let _=0,E=0;R("z","y","x",-1,-1,r,i,e,d,u,0),R("z","y","x",1,-1,r,i,-e,d,u,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,u,4),R("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ai(p,3)),this.setAttribute("normal",new Ai(g,3)),this.setAttribute("uv",new Ai(S,2));function R(w,v,x,O,C,F,k,H,P,it,N){const A=F/P,K=k/it,ut=F/2,B=k/2,ft=H/2,st=P+1,I=it+1;let W=0,G=0;const _t=new J;for(let U=0;U<I;U++){const Z=U*K-B;for(let mt=0;mt<st;mt++){const yt=mt*A-ut;_t[w]=yt*O,_t[v]=Z*C,_t[x]=ft,p.push(_t.x,_t.y,_t.z),_t[w]=0,_t[v]=0,_t[x]=H>0?1:-1,g.push(_t.x,_t.y,_t.z),S.push(mt/P),S.push(1-U/it),W+=1}}for(let U=0;U<it;U++)for(let Z=0;Z<P;Z++){const mt=_+Z+st*U,yt=_+Z+st*(U+1),X=_+(Z+1)+st*(U+1),ht=_+(Z+1)+st*U;m.push(mt,yt,ht),m.push(yt,X,ht),G+=6}h.addGroup(E,G,N),E+=G,_+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Cn(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function EM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function b0(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const TM={clone:Ts,merge:Cn};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ba extends bs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=EM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class A0 extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Zi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wa=new J,g_=new ee,__=new ee;class ii extends A0{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Uh*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wa.x,wa.y).multiplyScalar(-e/wa.z),wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wa.x,wa.y).multiplyScalar(-e/wa.z)}getViewSize(e,i){return this.getViewBounds(e,g_,__),i.subVectors(__,g_)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(No*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ds=-90,ps=1;class RM extends vn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(ds,ps,e,i);l.layers=this.layers,this.add(l);const u=new ii(ds,ps,e,i);u.layers=this.layers,this.add(u);const d=new ii(ds,ps,e,i);d.layers=this.layers,this.add(d);const h=new ii(ds,ps,e,i);h.layers=this.layers,this.add(h);const m=new ii(ds,ps,e,i);m.layers=this.layers,this.add(m);const p=new ii(ds,ps,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(S,_,E),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class R0 extends Bn{constructor(e,i,r,l,u,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:Ms,super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CM extends dr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new R0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:di}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new mr(5,5,5),u=new Ba({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Na});u.uniforms.tEquirect.value=i;const d=new mi(l,u),h=i.minFilter;return i.minFilter===hr&&(i.minFilter=di),new RM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const ch=new J,wM=new J,DM=new he;class Da{constructor(e=new J(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ch.subVectors(r,i).cross(wM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(ch).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Cc,uc=new J;class Bh{constructor(e=new Da,i=new Da,r=new Da,l=new Da,u=new Da,d=new Da){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Zi){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],S=l[6],_=l[7],E=l[8],R=l[9],w=l[10],v=l[11],x=l[12],O=l[13],C=l[14],F=l[15];if(r[0].setComponents(m-u,_-p,v-E,F-x).normalize(),r[1].setComponents(m+u,_+p,v+E,F+x).normalize(),r[2].setComponents(m+d,_+g,v+R,F+O).normalize(),r[3].setComponents(m-d,_-g,v-R,F-O).normalize(),r[4].setComponents(m-h,_-S,v-w,F-C).normalize(),i===Zi)r[5].setComponents(m+h,_+S,v+w,F+C).normalize();else if(i===Tc)r[5].setComponents(h,S,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uc.x=l.normal.x>0?e.max.x:e.min.x,uc.y=l.normal.y>0?e.max.y:e.min.y,uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C0(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function UM(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,S=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,g),h.onUploadCallback();let E;if(p instanceof Float32Array)E=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=o.SHORT;else if(p instanceof Uint32Array)E=o.UNSIGNED_INT;else if(p instanceof Int32Array)E=o.INT;else if(p instanceof Int8Array)E=o.BYTE;else if(p instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,m,p){const g=m.array,S=m._updateRange,_=m.updateRanges;if(o.bindBuffer(p,h),S.count===-1&&_.length===0&&o.bufferSubData(p,0,g),_.length!==0){for(let E=0,R=_.length;E<R;E++){const w=_[E];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(p,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count),S.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}class wc extends Ki{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,S=e/h,_=i/m,E=[],R=[],w=[],v=[];for(let x=0;x<g;x++){const O=x*_-d;for(let C=0;C<p;C++){const F=C*S-u;R.push(F,-O,0),w.push(0,0,1),v.push(C/h),v.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<h;O++){const C=O+p*x,F=O+p*(x+1),k=O+1+p*(x+1),H=O+1+p*x;E.push(C,F,H),E.push(F,k,H)}this.setIndex(E),this.setAttribute("position",new Ai(R,3)),this.setAttribute("normal",new Ai(w,3)),this.setAttribute("uv",new Ai(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var LM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
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
#endif`,OM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
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
#endif`,GM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WM=`#ifdef USE_IRIDESCENCE
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
#endif`,qM=`#ifdef USE_BUMPMAP
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
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ey=`#define PI 3.141592653589793
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
} // validated`,ny=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iy=`vec3 transformedNormal = objectNormal;
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
#endif`,ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",cy=`
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
}`,uy=`#ifdef USE_ENVMAP
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
#endif`,fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
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
#endif`,my=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,Sy=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ty=`uniform bool receiveShadow;
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
#endif`,by=`#ifdef USE_ENVMAP
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
#endif`,Ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dy=`PhysicalMaterial material;
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
#endif`,Uy=`struct PhysicalMaterial {
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
}`,Ly=`
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
#endif`,Ny=`#if defined( RE_IndirectDiffuse )
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
#endif`,Oy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Py=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,By=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vy=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yy=`#ifdef USE_MORPHNORMALS
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
#endif`,jy=`#ifdef USE_MORPHTARGETS
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
#endif`,Zy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ky=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eE=`#ifdef USE_NORMALMAP
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
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_E=`float getShadowMask() {
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
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`#include <common>
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
}`,FE=`#if DEPTH_PACKING == 3200
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
}`,HE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 diffuse;
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
}`,jE=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
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
}`,KE=`#define MATCAP
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
}`,QE=`#define MATCAP
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
}`,JE=`#define NORMAL
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
}`,$E=`#define NORMAL
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
}`,tT=`#define PHONG
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
}`,eT=`#define PHONG
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
}`,nT=`#define STANDARD
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
}`,iT=`#define STANDARD
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
}`,aT=`#define TOON
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
}`,rT=`#define TOON
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
}`,sT=`uniform float size;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 color;
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
}`,uT=`uniform float rotation;
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
}`,fT=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:LM,alphahash_pars_fragment:NM,alphamap_fragment:OM,alphamap_pars_fragment:PM,alphatest_fragment:zM,alphatest_pars_fragment:BM,aomap_fragment:IM,aomap_pars_fragment:FM,batching_pars_vertex:HM,batching_vertex:GM,begin_vertex:VM,beginnormal_vertex:kM,bsdfs:XM,iridescence_fragment:WM,bumpmap_pars_fragment:qM,clipping_planes_fragment:YM,clipping_planes_pars_fragment:jM,clipping_planes_pars_vertex:ZM,clipping_planes_vertex:KM,color_fragment:QM,color_pars_fragment:JM,color_pars_vertex:$M,color_vertex:ty,common:ey,cube_uv_reflection_fragment:ny,defaultnormal_vertex:iy,displacementmap_pars_vertex:ay,displacementmap_vertex:ry,emissivemap_fragment:sy,emissivemap_pars_fragment:oy,colorspace_fragment:ly,colorspace_pars_fragment:cy,envmap_fragment:uy,envmap_common_pars_fragment:fy,envmap_pars_fragment:hy,envmap_pars_vertex:dy,envmap_physical_pars_fragment:by,envmap_vertex:py,fog_vertex:my,fog_pars_vertex:gy,fog_fragment:_y,fog_pars_fragment:vy,gradientmap_pars_fragment:xy,lightmap_fragment:Sy,lightmap_pars_fragment:My,lights_lambert_fragment:yy,lights_lambert_pars_fragment:Ey,lights_pars_begin:Ty,lights_toon_fragment:Ay,lights_toon_pars_fragment:Ry,lights_phong_fragment:Cy,lights_phong_pars_fragment:wy,lights_physical_fragment:Dy,lights_physical_pars_fragment:Uy,lights_fragment_begin:Ly,lights_fragment_maps:Ny,lights_fragment_end:Oy,logdepthbuf_fragment:Py,logdepthbuf_pars_fragment:zy,logdepthbuf_pars_vertex:By,logdepthbuf_vertex:Iy,map_fragment:Fy,map_pars_fragment:Hy,map_particle_fragment:Gy,map_particle_pars_fragment:Vy,metalnessmap_fragment:ky,metalnessmap_pars_fragment:Xy,morphinstance_vertex:Wy,morphcolor_vertex:qy,morphnormal_vertex:Yy,morphtarget_pars_vertex:jy,morphtarget_vertex:Zy,normal_fragment_begin:Ky,normal_fragment_maps:Qy,normal_pars_fragment:Jy,normal_pars_vertex:$y,normal_vertex:tE,normalmap_pars_fragment:eE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:aE,iridescence_pars_fragment:rE,opaque_fragment:sE,packing:oE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:_E,skinbase_vertex:vE,skinning_pars_vertex:xE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:yE,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:bE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:wE,uv_vertex:DE,worldpos_vertex:UE,background_vert:LE,background_frag:NE,backgroundCube_vert:OE,backgroundCube_frag:PE,cube_vert:zE,cube_frag:BE,depth_vert:IE,depth_frag:FE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:kE,linedashed_vert:XE,linedashed_frag:WE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:jE,meshlambert_frag:ZE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:$E,meshphong_vert:tT,meshphong_frag:eT,meshphysical_vert:nT,meshphysical_frag:iT,meshtoon_vert:aT,meshtoon_frag:rT,points_vert:sT,points_frag:oT,shadow_vert:lT,shadow_frag:cT,sprite_vert:uT,sprite_frag:fT},Nt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Cn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Cn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Cn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Cn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ye(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Cn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Cn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Cn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Cn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Cn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Cn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distanceRGBA:{uniforms:Cn([Nt.common,Nt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distanceRGBA_vert,fragmentShader:fe.distanceRGBA_frag},shadow:{uniforms:Cn([Nt.lights,Nt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const fc={r:0,b:0,g:0},sr=new Ri,hT=new Qe;function dT(o,e,i,r,l,u,d){const h=new ye(0);let m=u===!0?0:1,p,g,S=null,_=0,E=null;function R(v,x){let O=!1,C=x.isScene===!0?x.background:null;C&&C.isTexture&&(C=(x.backgroundBlurriness>0?i:e).get(C)),C===null?w(h,m):C&&C.isColor&&(w(C,1),O=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,d):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ac)?(g===void 0&&(g=new mi(new mr(1,1,1),new Ba({name:"BackgroundCubeMaterial",uniforms:Ts(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,H,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),sr.copy(x.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(sr)),g.material.toneMapped=Ne.getTransfer(C.colorSpace)!==Fe,(S!==C||_!==C.version||E!==o.toneMapping)&&(g.material.needsUpdate=!0,S=C,_=C.version,E=o.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new mi(new wc(2,2),new Ba({name:"BackgroundMaterial",uniforms:Ts(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(C.colorSpace)!==Fe,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(S!==C||_!==C.version||E!==o.toneMapping)&&(p.material.needsUpdate=!0,S=C,_=C.version,E=o.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null))}function w(v,x){v.getRGB(fc,b0(o)),r.buffers.color.setClear(fc.r,fc.g,fc.b,x,d)}return{getClearColor:function(){return h},setClearColor:function(v,x=1){h.set(v),m=x,w(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(v){m=v,w(h,m)},render:R}}function pT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let u=l,d=!1;function h(A,K,ut,B,ft){let st=!1;const I=S(B,ut,K);u!==I&&(u=I,p(u.object)),st=E(A,B,ut,ft),st&&R(A,B,ut,ft),ft!==null&&e.update(ft,o.ELEMENT_ARRAY_BUFFER),(st||d)&&(d=!1,F(A,K,ut,B),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ft).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function S(A,K,ut){const B=ut.wireframe===!0;let ft=r[A.id];ft===void 0&&(ft={},r[A.id]=ft);let st=ft[K.id];st===void 0&&(st={},ft[K.id]=st);let I=st[B];return I===void 0&&(I=_(m()),st[B]=I),I}function _(A){const K=[],ut=[],B=[];for(let ft=0;ft<i;ft++)K[ft]=0,ut[ft]=0,B[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ut,attributeDivisors:B,object:A,attributes:{},index:null}}function E(A,K,ut,B){const ft=u.attributes,st=K.attributes;let I=0;const W=ut.getAttributes();for(const G in W)if(W[G].location>=0){const U=ft[G];let Z=st[G];if(Z===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;I++}return u.attributesNum!==I||u.index!==B}function R(A,K,ut,B){const ft={},st=K.attributes;let I=0;const W=ut.getAttributes();for(const G in W)if(W[G].location>=0){let U=st[G];U===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(U=A.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),ft[G]=Z,I++}u.attributes=ft,u.attributesNum=I,u.index=B}function w(){const A=u.newAttributes;for(let K=0,ut=A.length;K<ut;K++)A[K]=0}function v(A){x(A,0)}function x(A,K){const ut=u.newAttributes,B=u.enabledAttributes,ft=u.attributeDivisors;ut[A]=1,B[A]===0&&(o.enableVertexAttribArray(A),B[A]=1),ft[A]!==K&&(o.vertexAttribDivisor(A,K),ft[A]=K)}function O(){const A=u.newAttributes,K=u.enabledAttributes;for(let ut=0,B=K.length;ut<B;ut++)K[ut]!==A[ut]&&(o.disableVertexAttribArray(ut),K[ut]=0)}function C(A,K,ut,B,ft,st,I){I===!0?o.vertexAttribIPointer(A,K,ut,ft,st):o.vertexAttribPointer(A,K,ut,B,ft,st)}function F(A,K,ut,B){w();const ft=B.attributes,st=ut.getAttributes(),I=K.defaultAttributeValues;for(const W in st){const G=st[W];if(G.location>=0){let _t=ft[W];if(_t===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(_t=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(_t=A.instanceColor)),_t!==void 0){const U=_t.normalized,Z=_t.itemSize,mt=e.get(_t);if(mt===void 0)continue;const yt=mt.buffer,X=mt.type,ht=mt.bytesPerElement,vt=X===o.INT||X===o.UNSIGNED_INT||_t.gpuType===l0;if(_t.isInterleavedBufferAttribute){const At=_t.data,Pt=At.stride,qt=_t.offset;if(At.isInstancedInterleavedBuffer){for(let re=0;re<G.locationSize;re++)x(G.location+re,At.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let re=0;re<G.locationSize;re++)v(G.location+re);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let re=0;re<G.locationSize;re++)C(G.location+re,Z/G.locationSize,X,U,Pt*ht,(qt+Z/G.locationSize*re)*ht,vt)}else{if(_t.isInstancedBufferAttribute){for(let At=0;At<G.locationSize;At++)x(G.location+At,_t.meshPerAttribute);A.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let At=0;At<G.locationSize;At++)v(G.location+At);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let At=0;At<G.locationSize;At++)C(G.location+At,Z/G.locationSize,X,U,Z*ht,Z/G.locationSize*At*ht,vt)}}else if(I!==void 0){const U=I[W];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(G.location,U);break;case 3:o.vertexAttrib3fv(G.location,U);break;case 4:o.vertexAttrib4fv(G.location,U);break;default:o.vertexAttrib1fv(G.location,U)}}}}O()}function k(){it();for(const A in r){const K=r[A];for(const ut in K){const B=K[ut];for(const ft in B)g(B[ft].object),delete B[ft];delete K[ut]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const K=r[A.id];for(const ut in K){const B=K[ut];for(const ft in B)g(B[ft].object),delete B[ft];delete K[ut]}delete r[A.id]}function P(A){for(const K in r){const ut=r[K];if(ut[A.id]===void 0)continue;const B=ut[A.id];for(const ft in B)g(B[ft].object),delete B[ft];delete ut[A.id]}}function it(){N(),d=!0,u!==l&&(u=l,p(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:it,resetDefaultState:N,dispose:k,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:v,disableUnusedAttributes:O}}function mT(o,e,i){let r;function l(m){r=m}function u(m,p){o.drawArrays(r,m,p),i.update(p,r,1)}function d(m,p,g){g!==0&&(o.drawArraysInstanced(r,m,p,g),i.update(p,r,g))}function h(m,p,g){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<g;_++)this.render(m[_],p[_]);else{S.multiDrawArraysWEBGL(r,m,0,p,0,g);let _=0;for(let E=0;E<g;E++)_+=p[E];i.update(_,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function gT(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const h=u(d);h!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",h,"instead."),d=h);const m=i.logarithmicDepthBuffer===!0,p=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=o.getParameter(o.MAX_TEXTURE_SIZE),_=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),E=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),x=g>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:u,precision:d,logarithmicDepthBuffer:m,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:_,maxAttributes:E,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:x,maxSamples:O}}function _T(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Da,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const E=S.length!==0||_||r!==0||l;return l=_,r=S.length,E},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,_){i=g(S,_,0)},this.setState=function(S,_,E){const R=S.clippingPlanes,w=S.clipIntersection,v=S.clipShadows,x=o.get(S);if(!l||R===null||R.length===0||u&&!v)u?g(null):p();else{const O=u?0:r,C=O*4;let F=x.clippingState||null;m.value=F,F=g(R,_,C,E);for(let k=0;k!==C;++k)F[k]=i[k];x.clippingState=F,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,_,E,R){const w=S!==null?S.length:0;let v=null;if(w!==0){if(v=m.value,R!==!0||v===null){const x=E+w*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(v===null||v.length<x)&&(v=new Float32Array(x));for(let C=0,F=E;C!==w;++C,F+=4)d.copy(S[C]).applyMatrix4(O,h),d.normal.toArray(v,F),v[F+3]=d.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function vT(o){let e=new WeakMap;function i(d,h){return h===Rh?d.mapping=Ms:h===Ch&&(d.mapping=ys),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Rh||h===Ch)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new CM(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class w0 extends A0{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const gs=4,v_=[.125,.215,.35,.446,.526,.582],ur=20,uh=new w0,x_=new ye;let fh=null,hh=0,dh=0,ph=!1;const lr=(1+Math.sqrt(5))/2,ms=1/lr,S_=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,lr,ms),new J(0,lr,-ms),new J(ms,0,lr),new J(-ms,0,lr),new J(lr,ms,0),new J(-lr,ms,0)];class M_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Sc,format:Ti,colorSpace:Ia,depthBuffer:!1},l=y_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xT(u)),this._blurMaterial=ST(u,e,i)}return l}_compileMaterial(e){const i=new mi(this._lodPlanes[0],e);this._renderer.compile(i,uh)}_sceneToCubeUV(e,i,r,l){const h=new ii(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,_=g.toneMapping;g.getClearColor(x_),g.toneMapping=Oa,g.autoClear=!1;const E=new y0({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),R=new mi(new mr,E);let w=!1;const v=e.background;v?v.isColor&&(E.color.copy(v),e.background=null,w=!0):(E.color.copy(x_),w=!0);for(let x=0;x<6;x++){const O=x%3;O===0?(h.up.set(0,m[x],0),h.lookAt(p[x],0,0)):O===1?(h.up.set(0,0,m[x]),h.lookAt(0,p[x],0)):(h.up.set(0,m[x],0),h.lookAt(0,0,p[x]));const C=this._cubeSize;hc(l,O*C,x>2?C:0,C,C),g.setRenderTarget(l),w&&g.render(R,h),g.render(e,h)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=_,g.autoClear=S,e.background=v}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new mi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;hc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,uh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=S_[(l-1)%S_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new mi(this._lodPlanes[l],p),_=p.uniforms,E=this._sizeLods[r]-1,R=isFinite(u)?Math.PI/(2*E):2*Math.PI/(2*ur-1),w=u/R,v=isFinite(u)?1+Math.floor(g*w):ur;v>ur&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${ur}`);const x=[];let O=0;for(let P=0;P<ur;++P){const it=P/w,N=Math.exp(-it*it/2);x.push(N),P===0?O+=N:P<v&&(O+=2*N)}for(let P=0;P<x.length;P++)x[P]=x[P]/O;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=x,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:C}=this;_.dTheta.value=R,_.mipInt.value=C-r;const F=this._sizeLods[l],k=3*F*(l>C-gs?l-C+gs:0),H=4*(this._cubeSize-F);hc(i,k,H,3*F,2*F),m.setRenderTarget(i),m.render(S,uh)}}function xT(o){const e=[],i=[],r=[];let l=o;const u=o-gs+1+v_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-gs?m=v_[d-o+gs-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,S=1+p,_=[g,g,S,g,S,S,g,g,S,S,g,S],E=6,R=6,w=3,v=2,x=1,O=new Float32Array(w*R*E),C=new Float32Array(v*R*E),F=new Float32Array(x*R*E);for(let H=0;H<E;H++){const P=H%3*2/3-1,it=H>2?0:-1,N=[P,it,0,P+2/3,it,0,P+2/3,it+1,0,P,it,0,P+2/3,it+1,0,P,it+1,0];O.set(N,w*R*H),C.set(_,v*R*H);const A=[H,H,H,H,H,H];F.set(A,x*R*H)}const k=new Ki;k.setAttribute("position",new bi(O,w)),k.setAttribute("uv",new bi(C,v)),k.setAttribute("faceIndex",new bi(F,x)),e.push(k),l>gs&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function y_(o,e,i){const r=new dr(o,e,i);return r.texture.mapping=Ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function ST(o,e,i){const r=new Float32Array(ur),l=new J(0,1,0);return new Ba({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function E_(){return new Ba({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:Na,depthTest:!1,depthWrite:!1})}function T_(){return new Ba({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Na,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function MT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Rh||m===Ch,g=m===Ms||m===ys;if(p||g){let S=e.get(h);const _=S!==void 0?S.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new M_(o)),S=p?i.fromEquirectangular(h,S):i.fromCubemap(h,S),S.texture.pmremVersion=h.pmremVersion,e.set(h,S),S.texture;if(S!==void 0)return S.texture;{const E=h.image;return p&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new M_(o)),S=p?i.fromEquirectangular(h):i.fromCubemap(h),S.texture.pmremVersion=h.pmremVersion,e.set(h,S),h.addEventListener("dispose",u),S.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function yT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function ET(o,e,i,r){const l={},u=new WeakMap;function d(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const R in _.attributes)e.remove(_.attributes[R]);for(const R in _.morphAttributes){const w=_.morphAttributes[R];for(let v=0,x=w.length;v<x;v++)e.remove(w[v])}_.removeEventListener("dispose",d),delete l[_.id];const E=u.get(_);E&&(e.remove(E),u.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(S,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const R in _)e.update(_[R],o.ARRAY_BUFFER);const E=S.morphAttributes;for(const R in E){const w=E[R];for(let v=0,x=w.length;v<x;v++)e.update(w[v],o.ARRAY_BUFFER)}}function p(S){const _=[],E=S.index,R=S.attributes.position;let w=0;if(E!==null){const O=E.array;w=E.version;for(let C=0,F=O.length;C<F;C+=3){const k=O[C+0],H=O[C+1],P=O[C+2];_.push(k,H,H,P,P,k)}}else if(R!==void 0){const O=R.array;w=R.version;for(let C=0,F=O.length/3-1;C<F;C+=3){const k=C+0,H=C+1,P=C+2;_.push(k,H,H,P,P,k)}}else return;const v=new(_0(_)?T0:E0)(_,1);v.version=w;const x=u.get(S);x&&e.remove(x),u.set(S,v)}function g(S){const _=u.get(S);if(_){const E=S.index;E!==null&&_.version<E.version&&p(S)}else p(S);return u.get(S)}return{get:h,update:m,getWireframeAttribute:g}}function TT(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,_){o.drawElements(r,_,u,S*d),i.update(_,r,1)}function p(S,_,E){E!==0&&(o.drawElementsInstanced(r,_,u,S*d,E),i.update(_,r,E))}function g(S,_,E){if(E===0)return;const R=e.get("WEBGL_multi_draw");if(R===null)for(let w=0;w<E;w++)this.render(S[w]/d,_[w]);else{R.multiDrawElementsWEBGL(r,_,0,u,S,0,E);let w=0;for(let v=0;v<E;v++)w+=_[v];i.update(w,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g}function bT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function AT(o,e,i){const r=new WeakMap,l=new pn;function u(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==S){let A=function(){it.dispose(),r.delete(h),h.removeEventListener("dispose",A)};var E=A;_!==void 0&&_.texture.dispose();const R=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let F=0;R===!0&&(F=1),w===!0&&(F=2),v===!0&&(F=3);let k=h.attributes.position.count*F,H=1;k>e.maxTextureSize&&(H=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const P=new Float32Array(k*H*4*S),it=new x0(P,k,H,S);it.type=La,it.needsUpdate=!0;const N=F*4;for(let K=0;K<S;K++){const ut=x[K],B=O[K],ft=C[K],st=k*H*4*K;for(let I=0;I<ut.count;I++){const W=I*N;R===!0&&(l.fromBufferAttribute(ut,I),P[st+W+0]=l.x,P[st+W+1]=l.y,P[st+W+2]=l.z,P[st+W+3]=0),w===!0&&(l.fromBufferAttribute(B,I),P[st+W+4]=l.x,P[st+W+5]=l.y,P[st+W+6]=l.z,P[st+W+7]=0),v===!0&&(l.fromBufferAttribute(ft,I),P[st+W+8]=l.x,P[st+W+9]=l.y,P[st+W+10]=l.z,P[st+W+11]=ft.itemSize===4?l.w:1)}}_={count:S,texture:it,size:new ee(k,H)},r.set(h,_),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let v=0;v<p.length;v++)R+=p[v];const w=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:u}}function RT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,S=e.get(m,g);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return S}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class D0 extends Bn{constructor(e,i,r,l,u,d,h,m,p,g){if(g=g!==void 0?g:xs,g!==xs&&g!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===xs&&(r=Es),r===void 0&&g===Oo&&(r=Po),super(null,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:ai,this.minFilter=m!==void 0?m:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const U0=new Bn,L0=new D0(1,1);L0.compareFunction=g0;const N0=new x0,O0=new hM,P0=new R0,b_=[],A_=[],R_=new Float32Array(16),C_=new Float32Array(9),w_=new Float32Array(4);function As(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=b_[l];if(u===void 0&&(u=new Float32Array(l),b_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Dc(o,e){let i=A_[e];i===void 0&&(i=new Int32Array(e),A_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function CT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function LT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;w_.set(r),o.uniformMatrix2fv(this.addr,!1,w_),cn(i,r)}}function NT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;C_.set(r),o.uniformMatrix3fv(this.addr,!1,C_),cn(i,r)}}function OT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;R_.set(r),o.uniformMatrix4fv(this.addr,!1,R_),cn(i,r)}}function PT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function BT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function FT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function VT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function kT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?L0:U0;i.setTexture2D(e||u,l)}function XT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||O0,l)}function WT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||P0,l)}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||N0,l)}function YT(o){switch(o){case 5126:return CT;case 35664:return wT;case 35665:return DT;case 35666:return UT;case 35674:return LT;case 35675:return NT;case 35676:return OT;case 5124:case 35670:return PT;case 35667:case 35671:return zT;case 35668:case 35672:return BT;case 35669:case 35673:return IT;case 5125:return FT;case 36294:return HT;case 36295:return GT;case 36296:return VT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return XT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return qT}}function jT(o,e){o.uniform1fv(this.addr,e)}function ZT(o,e){const i=As(e,this.size,2);o.uniform2fv(this.addr,i)}function KT(o,e){const i=As(e,this.size,3);o.uniform3fv(this.addr,i)}function QT(o,e){const i=As(e,this.size,4);o.uniform4fv(this.addr,i)}function JT(o,e){const i=As(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function $T(o,e){const i=As(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function tb(o,e){const i=As(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function eb(o,e){o.uniform1iv(this.addr,e)}function nb(o,e){o.uniform2iv(this.addr,e)}function ib(o,e){o.uniform3iv(this.addr,e)}function ab(o,e){o.uniform4iv(this.addr,e)}function rb(o,e){o.uniform1uiv(this.addr,e)}function sb(o,e){o.uniform2uiv(this.addr,e)}function ob(o,e){o.uniform3uiv(this.addr,e)}function lb(o,e){o.uniform4uiv(this.addr,e)}function cb(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||U0,u[d])}function ub(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||O0,u[d])}function fb(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||P0,u[d])}function hb(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||N0,u[d])}function db(o){switch(o){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tb;case 5124:case 35670:return eb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return ab;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return ub;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return hb}}class pb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=YT(i.type)}}class mb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=db(i.type)}}class gb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function D_(o,e){o.seq.push(e),o.map[e.id]=e}function _b(o,e,i){const r=o.name,l=r.length;for(mh.lastIndex=0;;){const u=mh.exec(r),d=mh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){D_(i,p===void 0?new pb(h,o,e):new mb(h,o,e));break}else{let S=i.map[h];S===void 0&&(S=new gb(h),D_(i,S)),i=S}}}class vc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);_b(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function U_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const vb=37297;let xb=0;function Sb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function Mb(o){const e=Ne.getPrimaries(Ne.workingColorSpace),i=Ne.getPrimaries(o);let r;switch(e===i?r="":e===Ec&&i===yc?r="LinearDisplayP3ToLinearSRGB":e===yc&&i===Ec&&(r="LinearSRGBToLinearDisplayP3"),o){case Ia:case Rc:return[r,"LinearTransferOETF"];case yi:case Ph:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function L_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+Sb(o.getShaderSource(e),d)}else return l}function yb(o,e){const i=Mb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function Eb(o,e){let i;switch(e){case wS:i="Linear";break;case DS:i="Reinhard";break;case US:i="OptimizedCineon";break;case LS:i="ACESFilmic";break;case OS:i="AgX";break;case PS:i="Neutral";break;case NS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function Tb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function bb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Ab(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Lo(o){return o!==""}function N_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function O_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lh(o){return o.replace(Rb,wb)}const Cb=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function wb(o,e){let i=fe[e];if(i===void 0){const r=Cb.get(e);if(r!==void 0)i=fe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lh(i)}const Db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function P_(o){return o.replace(Db,Ub)}function Ub(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function z_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function Lb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===a0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case ys:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ob(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function Pb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case r0:e="ENVMAP_BLENDING_MULTIPLY";break;case RS:e="ENVMAP_BLENDING_MIX";break;case CS:e="ENVMAP_BLENDING_ADD";break}return e}function zb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Bb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Lb(i),p=Nb(i),g=Ob(i),S=Pb(i),_=zb(i),E=Tb(i),R=bb(u),w=l.createProgram();let v,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Lo).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Lo).join(`
`),x.length>0&&(x+=`
`)):(v=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),x=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?fe.tonemapping_pars_fragment:"",i.toneMapping!==Oa?Eb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,yb("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=Lh(d),d=N_(d,i),d=O_(d,i),h=Lh(h),h=N_(h,i),h=O_(h,i),d=P_(d),h=P_(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,v=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",i.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=O+v+d,F=O+x+h,k=U_(l,l.VERTEX_SHADER,C),H=U_(l,l.FRAGMENT_SHADER,F);l.attachShader(w,k),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(K){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(w).trim(),B=l.getShaderInfoLog(k).trim(),ft=l.getShaderInfoLog(H).trim();let st=!0,I=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(st=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,k,H);else{const W=L_(l,k,"vertex"),G=L_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+ut+`
`+W+`
`+G)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(B===""||ft==="")&&(I=!1);I&&(K.diagnostics={runnable:st,programLog:ut,vertexShader:{log:B,prefix:v},fragmentShader:{log:ft,prefix:x}})}l.deleteShader(k),l.deleteShader(H),it=new vc(l,w),N=Ab(l,w)}let it;this.getUniforms=function(){return it===void 0&&P(this),it};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,vb)),A},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=xb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=k,this.fragmentShader=H,this}let Ib=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Hb(e),i.set(e,r)),r}}class Hb{constructor(e){this.id=Ib++,this.code=e,this.usedTimes=0}}function Gb(o,e,i,r,l,u,d){const h=new S0,m=new Fb,p=new Set,g=[],S=l.logarithmicDepthBuffer,_=l.vertexTextures;let E=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(N){return p.add(N),N===0?"uv":`uv${N}`}function v(N,A,K,ut,B){const ft=ut.fog,st=B.geometry,I=N.isMeshStandardMaterial?ut.environment:null,W=(N.isMeshStandardMaterial?i:e).get(N.envMap||I),G=W&&W.mapping===Ac?W.image.height:null,_t=R[N.type];N.precision!==null&&(E=l.getMaxPrecision(N.precision),E!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",E,"instead."));const U=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Z=U!==void 0?U.length:0;let mt=0;st.morphAttributes.position!==void 0&&(mt=1),st.morphAttributes.normal!==void 0&&(mt=2),st.morphAttributes.color!==void 0&&(mt=3);let yt,X,ht,vt;if(_t){const We=Ei[_t];yt=We.vertexShader,X=We.fragmentShader}else yt=N.vertexShader,X=N.fragmentShader,m.update(N),ht=m.getVertexShaderID(N),vt=m.getFragmentShaderID(N);const At=o.getRenderTarget(),Pt=B.isInstancedMesh===!0,qt=B.isBatchedMesh===!0,re=!!N.map,et=!!N.matcap,te=!!W,Wt=!!N.aoMap,Dt=!!N.lightMap,Et=!!N.bumpMap,Bt=!!N.normalMap,D=!!N.displacementMap,T=!!N.emissiveMap,Y=!!N.metalnessMap,$=!!N.roughnessMap,lt=N.anisotropy>0,pt=N.clearcoat>0,Ut=N.iridescence>0,Mt=N.sheen>0,Ot=N.transmission>0,Rt=lt&&!!N.anisotropyMap,bt=pt&&!!N.clearcoatMap,Ct=pt&&!!N.clearcoatNormalMap,It=pt&&!!N.clearcoatRoughnessMap,Ft=Ut&&!!N.iridescenceMap,Ht=Ut&&!!N.iridescenceThicknessMap,pe=Mt&&!!N.sheenColorMap,ce=Mt&&!!N.sheenRoughnessMap,xe=!!N.specularMap,oe=!!N.specularColorMap,Se=!!N.specularIntensityMap,kt=Ot&&!!N.transmissionMap,y=Ot&&!!N.thicknessMap,ot=!!N.gradientMap,xt=!!N.alphaMap,wt=N.alphaTest>0,zt=!!N.alphaHash,ge=!!N.extensions;let ue=Oa;N.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Oe={shaderID:_t,shaderType:N.type,shaderName:N.name,vertexShader:yt,fragmentShader:X,defines:N.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:E,batching:qt,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:At===null?o.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:Ia,alphaToCoverage:!!N.alphaToCoverage,map:re,matcap:et,envMap:te,envMapMode:te&&W.mapping,envMapCubeUVHeight:G,aoMap:Wt,lightMap:Dt,bumpMap:Et,normalMap:Bt,displacementMap:_&&D,emissiveMap:T,normalMapObjectSpace:Bt&&N.normalMapType===ZS,normalMapTangentSpace:Bt&&N.normalMapType===m0,metalnessMap:Y,roughnessMap:$,anisotropy:lt,anisotropyMap:Rt,clearcoat:pt,clearcoatMap:bt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:It,iridescence:Ut,iridescenceMap:Ft,iridescenceThicknessMap:Ht,sheen:Mt,sheenColorMap:pe,sheenRoughnessMap:ce,specularMap:xe,specularColorMap:oe,specularIntensityMap:Se,transmission:Ot,transmissionMap:kt,thicknessMap:y,gradientMap:ot,opaque:N.transparent===!1&&N.blending===vs&&N.alphaToCoverage===!1,alphaMap:xt,alphaTest:wt,alphaHash:zt,combine:N.combine,mapUv:re&&w(N.map.channel),aoMapUv:Wt&&w(N.aoMap.channel),lightMapUv:Dt&&w(N.lightMap.channel),bumpMapUv:Et&&w(N.bumpMap.channel),normalMapUv:Bt&&w(N.normalMap.channel),displacementMapUv:D&&w(N.displacementMap.channel),emissiveMapUv:T&&w(N.emissiveMap.channel),metalnessMapUv:Y&&w(N.metalnessMap.channel),roughnessMapUv:$&&w(N.roughnessMap.channel),anisotropyMapUv:Rt&&w(N.anisotropyMap.channel),clearcoatMapUv:bt&&w(N.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&w(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&w(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&w(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&w(N.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&w(N.sheenColorMap.channel),sheenRoughnessMapUv:ce&&w(N.sheenRoughnessMap.channel),specularMapUv:xe&&w(N.specularMap.channel),specularColorMapUv:oe&&w(N.specularColorMap.channel),specularIntensityMapUv:Se&&w(N.specularIntensityMap.channel),transmissionMapUv:kt&&w(N.transmissionMap.channel),thicknessMapUv:y&&w(N.thicknessMap.channel),alphaMapUv:xt&&w(N.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Bt||lt),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!st.attributes.uv&&(re||xt),fog:!!ft,useFog:N.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:B.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:mt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&K.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,useLegacyLights:o._useLegacyLights,decodeVideoTexture:re&&N.map.isVideoTexture===!0&&Ne.getTransfer(N.map.colorSpace)===Fe,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ji,flipSided:N.side===zn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ge&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ge&&N.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function x(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const K in N.defines)A.push(K),A.push(N.defines[K]);return N.isRawShaderMaterial===!1&&(O(A,N),C(A,N),A.push(o.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function O(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function C(N,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),N.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.skinning&&h.enable(4),A.morphTargets&&h.enable(5),A.morphNormals&&h.enable(6),A.morphColors&&h.enable(7),A.premultipliedAlpha&&h.enable(8),A.shadowMapEnabled&&h.enable(9),A.useLegacyLights&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.alphaToCoverage&&h.enable(20),N.push(h.mask)}function F(N){const A=R[N.type];let K;if(A){const ut=Ei[A];K=TM.clone(ut.uniforms)}else K=N.uniforms;return K}function k(N,A){let K;for(let ut=0,B=g.length;ut<B;ut++){const ft=g[ut];if(ft.cacheKey===A){K=ft,++K.usedTimes;break}}return K===void 0&&(K=new Bb(o,A,N,u),g.push(K)),K}function H(N){if(--N.usedTimes===0){const A=g.indexOf(N);g[A]=g[g.length-1],g.pop(),N.destroy()}}function P(N){m.remove(N)}function it(){m.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:F,acquireProgram:k,releaseProgram:H,releaseShaderCache:P,programs:g,dispose:it}}function Vb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function kb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function B_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function I_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(S,_,E,R,w,v){let x=o[e];return x===void 0?(x={id:S.id,object:S,geometry:_,material:E,groupOrder:R,renderOrder:S.renderOrder,z:w,group:v},o[e]=x):(x.id=S.id,x.object=S,x.geometry=_,x.material=E,x.groupOrder=R,x.renderOrder=S.renderOrder,x.z=w,x.group=v),e++,x}function h(S,_,E,R,w,v){const x=d(S,_,E,R,w,v);E.transmission>0?r.push(x):E.transparent===!0?l.push(x):i.push(x)}function m(S,_,E,R,w,v){const x=d(S,_,E,R,w,v);E.transmission>0?r.unshift(x):E.transparent===!0?l.unshift(x):i.unshift(x)}function p(S,_){i.length>1&&i.sort(S||kb),r.length>1&&r.sort(_||B_),l.length>1&&l.sort(_||B_)}function g(){for(let S=e,_=o.length;S<_;S++){const E=o[S];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function Xb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new I_,o.set(r,[d])):l>=u.length?(d=new I_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Wb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new J,color:new ye};break;case"SpotLight":i={position:new J,direction:new J,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=i,i}}}function qb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Yb=0;function jb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Zb(o){const e=new Wb,i=qb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new J);const l=new J,u=new Qe,d=new Qe;function h(p,g){let S=0,_=0,E=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let R=0,w=0,v=0,x=0,O=0,C=0,F=0,k=0,H=0,P=0,it=0;p.sort(jb);const N=g===!0?Math.PI:1;for(let K=0,ut=p.length;K<ut;K++){const B=p[K],ft=B.color,st=B.intensity,I=B.distance,W=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)S+=ft.r*st*N,_+=ft.g*st*N,E+=ft.b*st*N;else if(B.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(B.sh.coefficients[G],st);it++}else if(B.isDirectionalLight){const G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*N),B.castShadow){const _t=B.shadow,U=i.get(B);U.shadowBias=_t.bias,U.shadowNormalBias=_t.normalBias,U.shadowRadius=_t.radius,U.shadowMapSize=_t.mapSize,r.directionalShadow[R]=U,r.directionalShadowMap[R]=W,r.directionalShadowMatrix[R]=B.shadow.matrix,C++}r.directional[R]=G,R++}else if(B.isSpotLight){const G=e.get(B);G.position.setFromMatrixPosition(B.matrixWorld),G.color.copy(ft).multiplyScalar(st*N),G.distance=I,G.coneCos=Math.cos(B.angle),G.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),G.decay=B.decay,r.spot[v]=G;const _t=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,_t.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[v]=_t.matrix,B.castShadow){const U=i.get(B);U.shadowBias=_t.bias,U.shadowNormalBias=_t.normalBias,U.shadowRadius=_t.radius,U.shadowMapSize=_t.mapSize,r.spotShadow[v]=U,r.spotShadowMap[v]=W,k++}v++}else if(B.isRectAreaLight){const G=e.get(B);G.color.copy(ft).multiplyScalar(st),G.halfWidth.set(B.width*.5,0,0),G.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=G,x++}else if(B.isPointLight){const G=e.get(B);if(G.color.copy(B.color).multiplyScalar(B.intensity*N),G.distance=B.distance,G.decay=B.decay,B.castShadow){const _t=B.shadow,U=i.get(B);U.shadowBias=_t.bias,U.shadowNormalBias=_t.normalBias,U.shadowRadius=_t.radius,U.shadowMapSize=_t.mapSize,U.shadowCameraNear=_t.camera.near,U.shadowCameraFar=_t.camera.far,r.pointShadow[w]=U,r.pointShadowMap[w]=W,r.pointShadowMatrix[w]=B.shadow.matrix,F++}r.point[w]=G,w++}else if(B.isHemisphereLight){const G=e.get(B);G.skyColor.copy(B.color).multiplyScalar(st*N),G.groundColor.copy(B.groundColor).multiplyScalar(st*N),r.hemi[O]=G,O++}}x>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=E;const A=r.hash;(A.directionalLength!==R||A.pointLength!==w||A.spotLength!==v||A.rectAreaLength!==x||A.hemiLength!==O||A.numDirectionalShadows!==C||A.numPointShadows!==F||A.numSpotShadows!==k||A.numSpotMaps!==H||A.numLightProbes!==it)&&(r.directional.length=R,r.spot.length=v,r.rectArea.length=x,r.point.length=w,r.hemi.length=O,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=k+H-P,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=it,A.directionalLength=R,A.pointLength=w,A.spotLength=v,A.rectAreaLength=x,A.hemiLength=O,A.numDirectionalShadows=C,A.numPointShadows=F,A.numSpotShadows=k,A.numSpotMaps=H,A.numLightProbes=it,r.version=Yb++)}function m(p,g){let S=0,_=0,E=0,R=0,w=0;const v=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const C=p[x];if(C.isDirectionalLight){const F=r.directional[S];F.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(v),S++}else if(C.isSpotLight){const F=r.spot[E];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(v),F.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(v),E++}else if(C.isRectAreaLight){const F=r.rectArea[R];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(v),d.identity(),u.copy(C.matrixWorld),u.premultiply(v),d.extractRotation(u),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),R++}else if(C.isPointLight){const F=r.point[_];F.position.setFromMatrixPosition(C.matrixWorld),F.position.applyMatrix4(v),_++}else if(C.isHemisphereLight){const F=r.hemi[w];F.direction.setFromMatrixPosition(C.matrixWorld),F.direction.transformDirection(v),w++}}}return{setup:h,setupView:m,state:r}}function F_(o){const e=new Zb(o),i=[],r=[];function l(){i.length=0,r.length=0}function u(g){i.push(g)}function d(g){r.push(g)}function h(g){e.setup(i,g)}function m(g){e.setupView(i,g)}return{init:l,state:{lightsArray:i,shadowsArray:r,lights:e,transmissionRenderTarget:null},setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function Kb(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new F_(o),e.set(l,[h])):u>=d.length?(h=new F_(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class Qb extends bs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jb extends bs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $b=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tA=`uniform sampler2D shadow_pass;
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
}`;function eA(o,e,i){let r=new Bh;const l=new ee,u=new ee,d=new pn,h=new Qb({depthPacking:jS}),m=new Jb,p={},g=i.maxTextureSize,S={[za]:zn,[zn]:za,[ji]:ji},_=new Ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:$b,fragmentShader:tA}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const R=new Ki;R.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new mi(R,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=a0;let x=this.type;this.render=function(H,P,it){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||H.length===0)return;const N=o.getRenderTarget(),A=o.getActiveCubeFace(),K=o.getActiveMipmapLevel(),ut=o.state;ut.setBlending(Na),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const B=x!==Yi&&this.type===Yi,ft=x===Yi&&this.type!==Yi;for(let st=0,I=H.length;st<I;st++){const W=H[st],G=W.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const _t=G.getFrameExtents();if(l.multiply(_t),u.copy(G.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/_t.x),l.x=u.x*_t.x,G.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/_t.y),l.y=u.y*_t.y,G.mapSize.y=u.y)),G.map===null||B===!0||ft===!0){const Z=this.type!==Yi?{minFilter:ai,magFilter:ai}:{};G.map!==null&&G.map.dispose(),G.map=new dr(l.x,l.y,Z),G.map.texture.name=W.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const U=G.getViewportCount();for(let Z=0;Z<U;Z++){const mt=G.getViewport(Z);d.set(u.x*mt.x,u.y*mt.y,u.x*mt.z,u.y*mt.w),ut.viewport(d),G.updateMatrices(W,Z),r=G.getFrustum(),F(P,it,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===Yi&&O(G,it),G.needsUpdate=!1}x=this.type,v.needsUpdate=!1,o.setRenderTarget(N,A,K)};function O(H,P){const it=e.update(w);_.defines.VSM_SAMPLES!==H.blurSamples&&(_.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new dr(l.x,l.y)),_.uniforms.shadow_pass.value=H.map.texture,_.uniforms.resolution.value=H.mapSize,_.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,it,_,w,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,it,E,w,null)}function C(H,P,it,N){let A=null;const K=it.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(K!==void 0)A=K;else if(A=it.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const ut=A.uuid,B=P.uuid;let ft=p[ut];ft===void 0&&(ft={},p[ut]=ft);let st=ft[B];st===void 0&&(st=A.clone(),ft[B]=st,P.addEventListener("dispose",k)),A=st}if(A.visible=P.visible,A.wireframe=P.wireframe,N===Yi?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:S[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,it.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ut=o.properties.get(A);ut.light=it}return A}function F(H,P,it,N,A){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Yi)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,H.matrixWorld);const B=e.update(H),ft=H.material;if(Array.isArray(ft)){const st=B.groups;for(let I=0,W=st.length;I<W;I++){const G=st[I],_t=ft[G.materialIndex];if(_t&&_t.visible){const U=C(H,_t,N,A);H.onBeforeShadow(o,H,P,it,B,U,G),o.renderBufferDirect(it,null,B,U,H,G),H.onAfterShadow(o,H,P,it,B,U,G)}}}else if(ft.visible){const st=C(H,ft,N,A);H.onBeforeShadow(o,H,P,it,B,st,null),o.renderBufferDirect(it,null,B,st,H,null),H.onAfterShadow(o,H,P,it,B,st,null)}}const ut=H.children;for(let B=0,ft=ut.length;B<ft;B++)F(ut[B],P,it,N,A)}function k(H){H.target.removeEventListener("dispose",k);for(const it in p){const N=p[it],A=H.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}function nA(o){function e(){let y=!1;const ot=new pn;let xt=null;const wt=new pn(0,0,0,0);return{setMask:function(zt){xt!==zt&&!y&&(o.colorMask(zt,zt,zt,zt),xt=zt)},setLocked:function(zt){y=zt},setClear:function(zt,ge,ue,Oe,We){We===!0&&(zt*=Oe,ge*=Oe,ue*=Oe),ot.set(zt,ge,ue,Oe),wt.equals(ot)===!1&&(o.clearColor(zt,ge,ue,Oe),wt.copy(ot))},reset:function(){y=!1,xt=null,wt.set(-1,0,0,0)}}}function i(){let y=!1,ot=null,xt=null,wt=null;return{setTest:function(zt){zt?vt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(zt){ot!==zt&&!y&&(o.depthMask(zt),ot=zt)},setFunc:function(zt){if(xt!==zt){switch(zt){case SS:o.depthFunc(o.NEVER);break;case MS:o.depthFunc(o.ALWAYS);break;case yS:o.depthFunc(o.LESS);break;case xc:o.depthFunc(o.LEQUAL);break;case ES:o.depthFunc(o.EQUAL);break;case TS:o.depthFunc(o.GEQUAL);break;case bS:o.depthFunc(o.GREATER);break;case AS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}xt=zt}},setLocked:function(zt){y=zt},setClear:function(zt){wt!==zt&&(o.clearDepth(zt),wt=zt)},reset:function(){y=!1,ot=null,xt=null,wt=null}}}function r(){let y=!1,ot=null,xt=null,wt=null,zt=null,ge=null,ue=null,Oe=null,We=null;return{setTest:function(Ee){y||(Ee?vt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Ee){ot!==Ee&&!y&&(o.stencilMask(Ee),ot=Ee)},setFunc:function(Ee,Ge,qe){(xt!==Ee||wt!==Ge||zt!==qe)&&(o.stencilFunc(Ee,Ge,qe),xt=Ee,wt=Ge,zt=qe)},setOp:function(Ee,Ge,qe){(ge!==Ee||ue!==Ge||Oe!==qe)&&(o.stencilOp(Ee,Ge,qe),ge=Ee,ue=Ge,Oe=qe)},setLocked:function(Ee){y=Ee},setClear:function(Ee){We!==Ee&&(o.clearStencil(Ee),We=Ee)},reset:function(){y=!1,ot=null,xt=null,wt=null,zt=null,ge=null,ue=null,Oe=null,We=null}}}const l=new e,u=new i,d=new r,h=new WeakMap,m=new WeakMap;let p={},g={},S=new WeakMap,_=[],E=null,R=!1,w=null,v=null,x=null,O=null,C=null,F=null,k=null,H=new ye(0,0,0),P=0,it=!1,N=null,A=null,K=null,ut=null,B=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,I=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(W)[1]),st=I>=1):W.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),st=I>=2);let G=null,_t={};const U=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),mt=new pn().fromArray(U),yt=new pn().fromArray(Z);function X(y,ot,xt,wt){const zt=new Uint8Array(4),ge=o.createTexture();o.bindTexture(y,ge),o.texParameteri(y,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(y,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ue=0;ue<xt;ue++)y===o.TEXTURE_3D||y===o.TEXTURE_2D_ARRAY?o.texImage3D(ot,0,o.RGBA,1,1,wt,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(ot+ue,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return ge}const ht={};ht[o.TEXTURE_2D]=X(o.TEXTURE_2D,o.TEXTURE_2D,1),ht[o.TEXTURE_CUBE_MAP]=X(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[o.TEXTURE_2D_ARRAY]=X(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ht[o.TEXTURE_3D]=X(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),vt(o.DEPTH_TEST),u.setFunc(xc),Et(!1),Bt(Mg),vt(o.CULL_FACE),Wt(Na);function vt(y){p[y]!==!0&&(o.enable(y),p[y]=!0)}function At(y){p[y]!==!1&&(o.disable(y),p[y]=!1)}function Pt(y,ot){return g[y]!==ot?(o.bindFramebuffer(y,ot),g[y]=ot,y===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=ot),y===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=ot),!0):!1}function qt(y,ot){let xt=_,wt=!1;if(y){xt=S.get(ot),xt===void 0&&(xt=[],S.set(ot,xt));const zt=y.textures;if(xt.length!==zt.length||xt[0]!==o.COLOR_ATTACHMENT0){for(let ge=0,ue=zt.length;ge<ue;ge++)xt[ge]=o.COLOR_ATTACHMENT0+ge;xt.length=zt.length,wt=!0}}else xt[0]!==o.BACK&&(xt[0]=o.BACK,wt=!0);wt&&o.drawBuffers(xt)}function re(y){return E!==y?(o.useProgram(y),E=y,!0):!1}const et={[cr]:o.FUNC_ADD,[iS]:o.FUNC_SUBTRACT,[aS]:o.FUNC_REVERSE_SUBTRACT};et[rS]=o.MIN,et[sS]=o.MAX;const te={[oS]:o.ZERO,[lS]:o.ONE,[cS]:o.SRC_COLOR,[bh]:o.SRC_ALPHA,[mS]:o.SRC_ALPHA_SATURATE,[dS]:o.DST_COLOR,[fS]:o.DST_ALPHA,[uS]:o.ONE_MINUS_SRC_COLOR,[Ah]:o.ONE_MINUS_SRC_ALPHA,[pS]:o.ONE_MINUS_DST_COLOR,[hS]:o.ONE_MINUS_DST_ALPHA,[gS]:o.CONSTANT_COLOR,[_S]:o.ONE_MINUS_CONSTANT_COLOR,[vS]:o.CONSTANT_ALPHA,[xS]:o.ONE_MINUS_CONSTANT_ALPHA};function Wt(y,ot,xt,wt,zt,ge,ue,Oe,We,Ee){if(y===Na){R===!0&&(At(o.BLEND),R=!1);return}if(R===!1&&(vt(o.BLEND),R=!0),y!==nS){if(y!==w||Ee!==it){if((v!==cr||C!==cr)&&(o.blendEquation(o.FUNC_ADD),v=cr,C=cr),Ee)switch(y){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yg:o.blendFunc(o.ONE,o.ONE);break;case Eg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}else switch(y){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case yg:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Eg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Tg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",y);break}x=null,O=null,F=null,k=null,H.set(0,0,0),P=0,w=y,it=Ee}return}zt=zt||ot,ge=ge||xt,ue=ue||wt,(ot!==v||zt!==C)&&(o.blendEquationSeparate(et[ot],et[zt]),v=ot,C=zt),(xt!==x||wt!==O||ge!==F||ue!==k)&&(o.blendFuncSeparate(te[xt],te[wt],te[ge],te[ue]),x=xt,O=wt,F=ge,k=ue),(Oe.equals(H)===!1||We!==P)&&(o.blendColor(Oe.r,Oe.g,Oe.b,We),H.copy(Oe),P=We),w=y,it=!1}function Dt(y,ot){y.side===ji?At(o.CULL_FACE):vt(o.CULL_FACE);let xt=y.side===zn;ot&&(xt=!xt),Et(xt),y.blending===vs&&y.transparent===!1?Wt(Na):Wt(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),u.setFunc(y.depthFunc),u.setTest(y.depthTest),u.setMask(y.depthWrite),l.setMask(y.colorWrite);const wt=y.stencilWrite;d.setTest(wt),wt&&(d.setMask(y.stencilWriteMask),d.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),d.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),T(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function Et(y){N!==y&&(y?o.frontFace(o.CW):o.frontFace(o.CCW),N=y)}function Bt(y){y!==$x?(vt(o.CULL_FACE),y!==A&&(y===Mg?o.cullFace(o.BACK):y===tS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),A=y}function D(y){y!==K&&(st&&o.lineWidth(y),K=y)}function T(y,ot,xt){y?(vt(o.POLYGON_OFFSET_FILL),(ut!==ot||B!==xt)&&(o.polygonOffset(ot,xt),ut=ot,B=xt)):At(o.POLYGON_OFFSET_FILL)}function Y(y){y?vt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function $(y){y===void 0&&(y=o.TEXTURE0+ft-1),G!==y&&(o.activeTexture(y),G=y)}function lt(y,ot,xt){xt===void 0&&(G===null?xt=o.TEXTURE0+ft-1:xt=G);let wt=_t[xt];wt===void 0&&(wt={type:void 0,texture:void 0},_t[xt]=wt),(wt.type!==y||wt.texture!==ot)&&(G!==xt&&(o.activeTexture(xt),G=xt),o.bindTexture(y,ot||ht[y]),wt.type=y,wt.texture=ot)}function pt(){const y=_t[G];y!==void 0&&y.type!==void 0&&(o.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)}function Ut(){try{o.compressedTexImage2D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Mt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ot(){try{o.texSubImage2D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Rt(){try{o.texSubImage3D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function bt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ct(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function It(){try{o.texStorage2D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ft(){try{o.texStorage3D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function Ht(){try{o.texImage2D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function pe(){try{o.texImage3D.apply(o,arguments)}catch(y){console.error("THREE.WebGLState:",y)}}function ce(y){mt.equals(y)===!1&&(o.scissor(y.x,y.y,y.z,y.w),mt.copy(y))}function xe(y){yt.equals(y)===!1&&(o.viewport(y.x,y.y,y.z,y.w),yt.copy(y))}function oe(y,ot){let xt=m.get(ot);xt===void 0&&(xt=new WeakMap,m.set(ot,xt));let wt=xt.get(y);wt===void 0&&(wt=o.getUniformBlockIndex(ot,y.name),xt.set(y,wt))}function Se(y,ot){const wt=m.get(ot).get(y);h.get(ot)!==wt&&(o.uniformBlockBinding(ot,wt,y.__bindingPointIndex),h.set(ot,wt))}function kt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},G=null,_t={},g={},S=new WeakMap,_=[],E=null,R=!1,w=null,v=null,x=null,O=null,C=null,F=null,k=null,H=new ye(0,0,0),P=0,it=!1,N=null,A=null,K=null,ut=null,B=null,mt.set(0,0,o.canvas.width,o.canvas.height),yt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:vt,disable:At,bindFramebuffer:Pt,drawBuffers:qt,useProgram:re,setBlending:Wt,setMaterial:Dt,setFlipSided:Et,setCullFace:Bt,setLineWidth:D,setPolygonOffset:T,setScissorTest:Y,activeTexture:$,bindTexture:lt,unbindTexture:pt,compressedTexImage2D:Ut,compressedTexImage3D:Mt,texImage2D:Ht,texImage3D:pe,updateUBOMapping:oe,uniformBlockBinding:Se,texStorage2D:It,texStorage3D:Ft,texSubImage2D:Ot,texSubImage3D:Rt,compressedTexSubImage2D:bt,compressedTexSubImage3D:Ct,scissor:ce,viewport:xe,reset:kt}}function iA(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ee,g=new WeakMap;let S;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(D,T){return E?new OffscreenCanvas(D,T):bc("canvas")}function w(D,T,Y){let $=1;const lt=Bt(D);if((lt.width>Y||lt.height>Y)&&($=Y/Math.max(lt.width,lt.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pt=Math.floor($*lt.width),Ut=Math.floor($*lt.height);S===void 0&&(S=R(pt,Ut));const Mt=T?R(pt,Ut):S;return Mt.width=pt,Mt.height=Ut,Mt.getContext("2d").drawImage(D,0,0,pt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+pt+"x"+Ut+")."),Mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),D;return D}function v(D){return D.generateMipmaps&&D.minFilter!==ai&&D.minFilter!==di}function x(D){o.generateMipmap(D)}function O(D,T,Y,$,lt=!1){if(D!==null){if(o[D]!==void 0)return o[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pt=T;if(T===o.RED&&(Y===o.FLOAT&&(pt=o.R32F),Y===o.HALF_FLOAT&&(pt=o.R16F),Y===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(pt=o.R8UI),Y===o.UNSIGNED_SHORT&&(pt=o.R16UI),Y===o.UNSIGNED_INT&&(pt=o.R32UI),Y===o.BYTE&&(pt=o.R8I),Y===o.SHORT&&(pt=o.R16I),Y===o.INT&&(pt=o.R32I)),T===o.RG&&(Y===o.FLOAT&&(pt=o.RG32F),Y===o.HALF_FLOAT&&(pt=o.RG16F),Y===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(pt=o.RG8UI),Y===o.UNSIGNED_SHORT&&(pt=o.RG16UI),Y===o.UNSIGNED_INT&&(pt=o.RG32UI),Y===o.BYTE&&(pt=o.RG8I),Y===o.SHORT&&(pt=o.RG16I),Y===o.INT&&(pt=o.RG32I)),T===o.RGB&&Y===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),T===o.RGBA){const Ut=lt?Mc:Ne.getTransfer($);Y===o.FLOAT&&(pt=o.RGBA32F),Y===o.HALF_FLOAT&&(pt=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(pt=Ut===Fe?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function C(D,T){return v(D)===!0||D.isFramebufferTexture&&D.minFilter!==ai&&D.minFilter!==di?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),H(T),T.isVideoTexture&&g.delete(T)}function k(D){const T=D.target;T.removeEventListener("dispose",k),it(T)}function H(D){const T=r.get(D);if(T.__webglInit===void 0)return;const Y=D.source,$=_.get(Y);if($){const lt=$[T.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&P(D),Object.keys($).length===0&&_.delete(Y)}r.remove(D)}function P(D){const T=r.get(D);o.deleteTexture(T.__webglTexture);const Y=D.source,$=_.get(Y);delete $[T.__cacheKey],d.memory.textures--}function it(D){const T=r.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let lt=0;lt<T.__webglFramebuffer[$].length;lt++)o.deleteFramebuffer(T.__webglFramebuffer[$][lt]);else o.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)o.deleteFramebuffer(T.__webglFramebuffer[$]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=D.textures;for(let $=0,lt=Y.length;$<lt;$++){const pt=r.get(Y[$]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),d.memory.textures--),r.remove(Y[$])}r.remove(D)}let N=0;function A(){N=0}function K(){const D=N;return D>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),N+=1,D}function ut(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function B(D,T){const Y=r.get(D);if(D.isVideoTexture&&Dt(D),D.isRenderTargetTexture===!1&&D.version>0&&Y.__version!==D.version){const $=D.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(Y,D,T);return}}i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+T)}function ft(D,T){const Y=r.get(D);if(D.version>0&&Y.__version!==D.version){mt(Y,D,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+T)}function st(D,T){const Y=r.get(D);if(D.version>0&&Y.__version!==D.version){mt(Y,D,T);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+T)}function I(D,T){const Y=r.get(D);if(D.version>0&&Y.__version!==D.version){yt(Y,D,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+T)}const W={[wh]:o.REPEAT,[fr]:o.CLAMP_TO_EDGE,[Dh]:o.MIRRORED_REPEAT},G={[ai]:o.NEAREST,[zS]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[hr]:o.LINEAR_MIPMAP_LINEAR},_t={[KS]:o.NEVER,[nM]:o.ALWAYS,[QS]:o.LESS,[g0]:o.LEQUAL,[JS]:o.EQUAL,[eM]:o.GEQUAL,[$S]:o.GREATER,[tM]:o.NOTEQUAL};function U(D,T){if(T.type===La&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===di||T.magFilter===Ff||T.magFilter===Wl||T.magFilter===hr||T.minFilter===di||T.minFilter===Ff||T.minFilter===Wl||T.minFilter===hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,W[T.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,W[T.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,W[T.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,G[T.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,G[T.minFilter]),T.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,_t[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==Wl&&T.minFilter!==hr||T.type===La&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Z(D,T){let Y=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const $=T.source;let lt=_.get($);lt===void 0&&(lt={},_.set($,lt));const pt=ut(T);if(pt!==D.__cacheKey){lt[pt]===void 0&&(lt[pt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Y=!0),lt[pt].usedTimes++;const Ut=lt[D.__cacheKey];Ut!==void 0&&(lt[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&P(T)),D.__cacheKey=pt,D.__webglTexture=lt[pt].texture}return Y}function mt(D,T,Y){let $=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=o.TEXTURE_3D);const lt=Z(D,T),pt=T.source;i.bindTexture($,D.__webglTexture,o.TEXTURE0+Y);const Ut=r.get(pt);if(pt.version!==Ut.__version||lt===!0){i.activeTexture(o.TEXTURE0+Y);const Mt=Ne.getPrimaries(Ne.workingColorSpace),Ot=T.colorSpace===Ua?null:Ne.getPrimaries(T.colorSpace),Rt=T.colorSpace===Ua||Mt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let bt=w(T.image,!1,l.maxTextureSize);bt=Et(T,bt);const Ct=u.convert(T.format,T.colorSpace),It=u.convert(T.type);let Ft=O(T.internalFormat,Ct,It,T.colorSpace,T.isVideoTexture);U($,T);let Ht;const pe=T.mipmaps,ce=T.isVideoTexture!==!0&&Ft!==p0,xe=Ut.__version===void 0||lt===!0,oe=pt.dataReady,Se=C(T,bt);if(T.isDepthTexture)Ft=o.DEPTH_COMPONENT16,T.type===La?Ft=o.DEPTH_COMPONENT32F:T.type===Es?Ft=o.DEPTH_COMPONENT24:T.type===Po&&(Ft=o.DEPTH24_STENCIL8),xe&&(ce?i.texStorage2D(o.TEXTURE_2D,1,Ft,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Ft,bt.width,bt.height,0,Ct,It,null));else if(T.isDataTexture)if(pe.length>0){ce&&xe&&i.texStorage2D(o.TEXTURE_2D,Se,Ft,pe[0].width,pe[0].height);for(let kt=0,y=pe.length;kt<y;kt++)Ht=pe[kt],ce?oe&&i.texSubImage2D(o.TEXTURE_2D,kt,0,0,Ht.width,Ht.height,Ct,It,Ht.data):i.texImage2D(o.TEXTURE_2D,kt,Ft,Ht.width,Ht.height,0,Ct,It,Ht.data);T.generateMipmaps=!1}else ce?(xe&&i.texStorage2D(o.TEXTURE_2D,Se,Ft,bt.width,bt.height),oe&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Ct,It,bt.data)):i.texImage2D(o.TEXTURE_2D,0,Ft,bt.width,bt.height,0,Ct,It,bt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&xe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Se,Ft,pe[0].width,pe[0].height,bt.depth);for(let kt=0,y=pe.length;kt<y;kt++)Ht=pe[kt],T.format!==Ti?Ct!==null?ce?oe&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,kt,0,0,0,Ht.width,Ht.height,bt.depth,Ct,Ht.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,kt,Ft,Ht.width,Ht.height,bt.depth,0,Ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?oe&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,kt,0,0,0,Ht.width,Ht.height,bt.depth,Ct,It,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,kt,Ft,Ht.width,Ht.height,bt.depth,0,Ct,It,Ht.data)}else{ce&&xe&&i.texStorage2D(o.TEXTURE_2D,Se,Ft,pe[0].width,pe[0].height);for(let kt=0,y=pe.length;kt<y;kt++)Ht=pe[kt],T.format!==Ti?Ct!==null?ce?oe&&i.compressedTexSubImage2D(o.TEXTURE_2D,kt,0,0,Ht.width,Ht.height,Ct,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,kt,Ft,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?oe&&i.texSubImage2D(o.TEXTURE_2D,kt,0,0,Ht.width,Ht.height,Ct,It,Ht.data):i.texImage2D(o.TEXTURE_2D,kt,Ft,Ht.width,Ht.height,0,Ct,It,Ht.data)}else if(T.isDataArrayTexture)ce?(xe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Se,Ft,bt.width,bt.height,bt.depth),oe&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ct,It,bt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,bt.width,bt.height,bt.depth,0,Ct,It,bt.data);else if(T.isData3DTexture)ce?(xe&&i.texStorage3D(o.TEXTURE_3D,Se,Ft,bt.width,bt.height,bt.depth),oe&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ct,It,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,bt.width,bt.height,bt.depth,0,Ct,It,bt.data);else if(T.isFramebufferTexture){if(xe)if(ce)i.texStorage2D(o.TEXTURE_2D,Se,Ft,bt.width,bt.height);else{let kt=bt.width,y=bt.height;for(let ot=0;ot<Se;ot++)i.texImage2D(o.TEXTURE_2D,ot,Ft,kt,y,0,Ct,It,null),kt>>=1,y>>=1}}else if(pe.length>0){if(ce&&xe){const kt=Bt(pe[0]);i.texStorage2D(o.TEXTURE_2D,Se,Ft,kt.width,kt.height)}for(let kt=0,y=pe.length;kt<y;kt++)Ht=pe[kt],ce?oe&&i.texSubImage2D(o.TEXTURE_2D,kt,0,0,Ct,It,Ht):i.texImage2D(o.TEXTURE_2D,kt,Ft,Ct,It,Ht);T.generateMipmaps=!1}else if(ce){if(xe){const kt=Bt(bt);i.texStorage2D(o.TEXTURE_2D,Se,Ft,kt.width,kt.height)}oe&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,It,bt)}else i.texImage2D(o.TEXTURE_2D,0,Ft,Ct,It,bt);v(T)&&x($),Ut.__version=pt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function yt(D,T,Y){if(T.image.length!==6)return;const $=Z(D,T),lt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Y);const pt=r.get(lt);if(lt.version!==pt.__version||$===!0){i.activeTexture(o.TEXTURE0+Y);const Ut=Ne.getPrimaries(Ne.workingColorSpace),Mt=T.colorSpace===Ua?null:Ne.getPrimaries(T.colorSpace),Ot=T.colorSpace===Ua||Ut===Mt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,bt=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let y=0;y<6;y++)!Rt&&!bt?Ct[y]=w(T.image[y],!0,l.maxCubemapSize):Ct[y]=bt?T.image[y].image:T.image[y],Ct[y]=Et(T,Ct[y]);const It=Ct[0],Ft=u.convert(T.format,T.colorSpace),Ht=u.convert(T.type),pe=O(T.internalFormat,Ft,Ht,T.colorSpace),ce=T.isVideoTexture!==!0,xe=pt.__version===void 0||$===!0,oe=lt.dataReady;let Se=C(T,It);U(o.TEXTURE_CUBE_MAP,T);let kt;if(Rt){ce&&xe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Se,pe,It.width,It.height);for(let y=0;y<6;y++){kt=Ct[y].mipmaps;for(let ot=0;ot<kt.length;ot++){const xt=kt[ot];T.format!==Ti?Ft!==null?ce?oe&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot,0,0,xt.width,xt.height,Ft,xt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot,pe,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?oe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot,0,0,xt.width,xt.height,Ft,Ht,xt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot,pe,xt.width,xt.height,0,Ft,Ht,xt.data)}}}else{if(kt=T.mipmaps,ce&&xe){kt.length>0&&Se++;const y=Bt(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Se,pe,y.width,y.height)}for(let y=0;y<6;y++)if(bt){ce?oe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,Ct[y].width,Ct[y].height,Ft,Ht,Ct[y].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,pe,Ct[y].width,Ct[y].height,0,Ft,Ht,Ct[y].data);for(let ot=0;ot<kt.length;ot++){const wt=kt[ot].image[y].image;ce?oe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot+1,0,0,wt.width,wt.height,Ft,Ht,wt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot+1,pe,wt.width,wt.height,0,Ft,Ht,wt.data)}}else{ce?oe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,Ft,Ht,Ct[y]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,pe,Ft,Ht,Ct[y]);for(let ot=0;ot<kt.length;ot++){const xt=kt[ot];ce?oe&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot+1,0,0,Ft,Ht,xt.image[y]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+y,ot+1,pe,Ft,Ht,xt.image[y])}}}v(T)&&x(o.TEXTURE_CUBE_MAP),pt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function X(D,T,Y,$,lt,pt){const Ut=u.convert(Y.format,Y.colorSpace),Mt=u.convert(Y.type),Ot=O(Y.internalFormat,Ut,Mt,Y.colorSpace);if(!r.get(T).__hasExternalTextures){const bt=Math.max(1,T.width>>pt),Ct=Math.max(1,T.height>>pt);lt===o.TEXTURE_3D||lt===o.TEXTURE_2D_ARRAY?i.texImage3D(lt,pt,Ot,bt,Ct,T.depth,0,Ut,Mt,null):i.texImage2D(lt,pt,Ot,bt,Ct,0,Ut,Mt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Wt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$,lt,r.get(Y).__webglTexture,0,te(T)):(lt===o.TEXTURE_2D||lt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,$,lt,r.get(Y).__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ht(D,T,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,D),T.depthBuffer&&!T.stencilBuffer){let $=o.DEPTH_COMPONENT24;if(Y||Wt(T)){const lt=T.depthTexture;lt&&lt.isDepthTexture&&(lt.type===La?$=o.DEPTH_COMPONENT32F:lt.type===Es&&($=o.DEPTH_COMPONENT24));const pt=te(T);Wt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pt,$,T.width,T.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,pt,$,T.width,T.height)}else o.renderbufferStorage(o.RENDERBUFFER,$,T.width,T.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,D)}else if(T.depthBuffer&&T.stencilBuffer){const $=te(T);Y&&Wt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,$,o.DEPTH24_STENCIL8,T.width,T.height):Wt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,$,o.DEPTH24_STENCIL8,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,D)}else{const $=T.textures;for(let lt=0;lt<$.length;lt++){const pt=$[lt],Ut=u.convert(pt.format,pt.colorSpace),Mt=u.convert(pt.type),Ot=O(pt.internalFormat,Ut,Mt,pt.colorSpace),Rt=te(T);Y&&Wt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,Ot,T.width,T.height):Wt(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,Ot,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ot,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function vt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);const $=r.get(T.depthTexture).__webglTexture,lt=te(T);if(T.depthTexture.format===xs)Wt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,$,0);else if(T.depthTexture.format===Oo)Wt(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0,lt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function At(D){const T=r.get(D),Y=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");vt(T.__webglFramebuffer,D)}else if(Y){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]=o.createRenderbuffer(),ht(T.__webglDepthbuffer[$],D,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=o.createRenderbuffer(),ht(T.__webglDepthbuffer,D,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(D,T,Y){const $=r.get(D);T!==void 0&&X($.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&At(D)}function qt(D){const T=D.texture,Y=r.get(D),$=r.get(T);D.addEventListener("dispose",k);const lt=D.textures,pt=D.isWebGLCubeRenderTarget===!0,Ut=lt.length>1;if(Ut||($.__webglTexture===void 0&&($.__webglTexture=o.createTexture()),$.__version=T.version,d.memory.textures++),pt){Y.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Mt]=[];for(let Ot=0;Ot<T.mipmaps.length;Ot++)Y.__webglFramebuffer[Mt][Ot]=o.createFramebuffer()}else Y.__webglFramebuffer[Mt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Mt=0;Mt<T.mipmaps.length;Mt++)Y.__webglFramebuffer[Mt]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(Ut)for(let Mt=0,Ot=lt.length;Mt<Ot;Mt++){const Rt=r.get(lt[Mt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Wt(D)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Mt=0;Mt<lt.length;Mt++){const Ot=lt[Mt];Y.__webglColorRenderbuffer[Mt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt]);const Rt=u.convert(Ot.format,Ot.colorSpace),bt=u.convert(Ot.type),Ct=O(Ot.internalFormat,Rt,bt,Ot.colorSpace,D.isXRRenderTarget===!0),It=te(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Ct,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Mt,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Mt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),ht(Y.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture),U(o.TEXTURE_CUBE_MAP,T);for(let Mt=0;Mt<6;Mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ot=0;Ot<T.mipmaps.length;Ot++)X(Y.__webglFramebuffer[Mt][Ot],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Ot);else X(Y.__webglFramebuffer[Mt],D,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);v(T)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ut){for(let Mt=0,Ot=lt.length;Mt<Ot;Mt++){const Rt=lt[Mt],bt=r.get(Rt);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),U(o.TEXTURE_2D,Rt),X(Y.__webglFramebuffer,D,Rt,o.COLOR_ATTACHMENT0+Mt,o.TEXTURE_2D,0),v(Rt)&&x(o.TEXTURE_2D)}i.unbindTexture()}else{let Mt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,$.__webglTexture),U(Mt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ot=0;Ot<T.mipmaps.length;Ot++)X(Y.__webglFramebuffer[Ot],D,T,o.COLOR_ATTACHMENT0,Mt,Ot);else X(Y.__webglFramebuffer,D,T,o.COLOR_ATTACHMENT0,Mt,0);v(T)&&x(Mt),i.unbindTexture()}D.depthBuffer&&At(D)}function re(D){const T=D.textures;for(let Y=0,$=T.length;Y<$;Y++){const lt=T[Y];if(v(lt)){const pt=D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ut=r.get(lt).__webglTexture;i.bindTexture(pt,Ut),x(pt),i.unbindTexture()}}}function et(D){if(D.samples>0&&Wt(D)===!1){const T=D.textures,Y=D.width,$=D.height;let lt=o.COLOR_BUFFER_BIT;const pt=[],Ut=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=r.get(D),Ot=T.length>1;if(Ot)for(let Rt=0;Rt<T.length;Rt++)i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){pt.push(o.COLOR_ATTACHMENT0+Rt),D.depthBuffer&&pt.push(Ut);const bt=Mt.__ignoreDepthValues!==void 0?Mt.__ignoreDepthValues:!1;if(bt===!1&&(D.depthBuffer&&(lt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&Mt.__isTransmissionRenderTarget!==!0&&(lt|=o.STENCIL_BUFFER_BIT)),Ot&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]),bt===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Ut]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Ut])),Ot){const Ct=r.get(T[Rt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,Y,$,0,0,Y,$,lt,o.NEAREST),m&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,pt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ot)for(let Rt=0;Rt<T.length;Rt++){i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[Rt]);const bt=r.get(T[Rt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}}function te(D){return Math.min(l.maxSamples,D.samples)}function Wt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Dt(D){const T=d.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function Et(D,T){const Y=D.colorSpace,$=D.format,lt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Y!==Ia&&Y!==Ua&&(Ne.getTransfer(Y)===Fe?($!==Ti||lt!==Pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Bt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=A,this.setTexture2D=B,this.setTexture2DArray=ft,this.setTexture3D=st,this.setTextureCube=I,this.rebindTextures=Pt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Wt}function aA(o,e){function i(r,l=Ua){let u;const d=Ne.getTransfer(l);if(r===Pa)return o.UNSIGNED_BYTE;if(r===c0)return o.UNSIGNED_SHORT_4_4_4_4;if(r===u0)return o.UNSIGNED_SHORT_5_5_5_1;if(r===FS)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===BS)return o.BYTE;if(r===IS)return o.SHORT;if(r===o0)return o.UNSIGNED_SHORT;if(r===l0)return o.INT;if(r===Es)return o.UNSIGNED_INT;if(r===La)return o.FLOAT;if(r===Sc)return o.HALF_FLOAT;if(r===HS)return o.ALPHA;if(r===GS)return o.RGB;if(r===Ti)return o.RGBA;if(r===VS)return o.LUMINANCE;if(r===kS)return o.LUMINANCE_ALPHA;if(r===xs)return o.DEPTH_COMPONENT;if(r===Oo)return o.DEPTH_STENCIL;if(r===XS)return o.RED;if(r===f0)return o.RED_INTEGER;if(r===WS)return o.RG;if(r===h0)return o.RG_INTEGER;if(r===d0)return o.RGBA_INTEGER;if(r===Hf||r===Gf||r===Vf||r===kf)if(d===Fe)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Hf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===kf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Hf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===kf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===bg||r===Ag||r===Rg||r===Cg)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===bg)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ag)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rg)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cg)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===p0)return u=e.get("WEBGL_compressed_texture_etc1"),u!==null?u.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===wg||r===Dg)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===wg)return d===Fe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Dg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ug||r===Lg||r===Ng||r===Og||r===Pg||r===zg||r===Bg||r===Ig||r===Fg||r===Hg||r===Gg||r===Vg||r===kg||r===Xg)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ug)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ng)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Og)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ig)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xg)return d===Fe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xf||r===Wg||r===qg)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Xf)return d===Fe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wg)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qg)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qS||r===Yg||r===jg||r===Zg)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Xf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Yg)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===jg)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Zg)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class rA extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _s extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sA={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const w of e.hand.values()){const v=i.getJointPose(w,r),x=this._getHandJoint(p,w);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],_=g.position.distanceTo(S.position),E=.02,R=.005;p.inputState.pinching&&_>E+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=E-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(sA)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new _s;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
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

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new Bn,u=e.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new Ba({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new mi(new wc(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class uA extends gr{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,S=null,_=null,E=null,R=null;const w=new cA,v=i.getContextAttributes();let x=null,O=null;const C=[],F=[],k=new ee;let H=null;const P=new ii;P.layers.enable(1),P.viewport=new pn;const it=new ii;it.layers.enable(2),it.viewport=new pn;const N=[P,it],A=new rA;A.layers.enable(1),A.layers.enable(2);let K=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ht=C[X];return ht===void 0&&(ht=new gh,C[X]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(X){let ht=C[X];return ht===void 0&&(ht=new gh,C[X]=ht),ht.getGripSpace()},this.getHand=function(X){let ht=C[X];return ht===void 0&&(ht=new gh,C[X]=ht),ht.getHandSpace()};function B(X){const ht=F.indexOf(X.inputSource);if(ht===-1)return;const vt=C[ht];vt!==void 0&&(vt.update(X.inputSource,X.frame,p||d),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function ft(){l.removeEventListener("select",B),l.removeEventListener("selectstart",B),l.removeEventListener("selectend",B),l.removeEventListener("squeeze",B),l.removeEventListener("squeezestart",B),l.removeEventListener("squeezeend",B),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",st);for(let X=0;X<C.length;X++){const ht=F[X];ht!==null&&(F[X]=null,C[X].disconnect(ht))}K=null,ut=null,w.reset(),e.setRenderTarget(x),E=null,_=null,S=null,l=null,O=null,yt.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){u=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return S},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",B),l.addEventListener("selectstart",B),l.addEventListener("selectend",B),l.addEventListener("squeeze",B),l.addEventListener("squeezestart",B),l.addEventListener("squeezeend",B),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await i.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(k),l.renderState.layers===void 0){const ht={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:u};E=new XRWebGLLayer(l,i,ht),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new dr(E.framebufferWidth,E.framebufferHeight,{format:Ti,type:Pa,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ht=null,vt=null,At=null;v.depth&&(At=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ht=v.stencil?Oo:xs,vt=v.stencil?Po:Es);const Pt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:u};S=new XRWebGLBinding(l,i),_=S.createProjectionLayer(Pt),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),O=new dr(_.textureWidth,_.textureHeight,{format:Ti,type:Pa,depthTexture:new D0(_.textureWidth,_.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const qt=e.properties.get(O);qt.__ignoreDepthValues=_.ignoreDepthValues}O.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function st(X){for(let ht=0;ht<X.removed.length;ht++){const vt=X.removed[ht],At=F.indexOf(vt);At>=0&&(F[At]=null,C[At].disconnect(vt))}for(let ht=0;ht<X.added.length;ht++){const vt=X.added[ht];let At=F.indexOf(vt);if(At===-1){for(let qt=0;qt<C.length;qt++)if(qt>=F.length){F.push(vt),At=qt;break}else if(F[qt]===null){F[qt]=vt,At=qt;break}if(At===-1)break}const Pt=C[At];Pt&&Pt.connect(vt)}}const I=new J,W=new J;function G(X,ht,vt){I.setFromMatrixPosition(ht.matrixWorld),W.setFromMatrixPosition(vt.matrixWorld);const At=I.distanceTo(W),Pt=ht.projectionMatrix.elements,qt=vt.projectionMatrix.elements,re=Pt[14]/(Pt[10]-1),et=Pt[14]/(Pt[10]+1),te=(Pt[9]+1)/Pt[5],Wt=(Pt[9]-1)/Pt[5],Dt=(Pt[8]-1)/Pt[0],Et=(qt[8]+1)/qt[0],Bt=re*Dt,D=re*Et,T=At/(-Dt+Et),Y=T*-Dt;ht.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Y),X.translateZ(T),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const $=re+T,lt=et+T,pt=Bt-Y,Ut=D+(At-Y),Mt=te*et/lt*$,Ot=Wt*et/lt*$;X.projectionMatrix.makePerspective(pt,Ut,Mt,Ot,$,lt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function _t(X,ht){ht===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ht.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;w.texture!==null&&(X.near=w.depthNear,X.far=w.depthFar),A.near=it.near=P.near=X.near,A.far=it.far=P.far=X.far,(K!==A.near||ut!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),K=A.near,ut=A.far,P.near=K,P.far=ut,it.near=K,it.far=ut,P.updateProjectionMatrix(),it.updateProjectionMatrix(),X.updateProjectionMatrix());const ht=X.parent,vt=A.cameras;_t(A,ht);for(let At=0;At<vt.length;At++)_t(vt[At],ht);vt.length===2?G(A,P,it):A.projectionMatrix.copy(P.projectionMatrix),U(X,A,ht)};function U(X,ht,vt){vt===null?X.matrix.copy(ht.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ht.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ht.projectionMatrix),X.projectionMatrixInverse.copy(ht.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Uh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&E===null))return m},this.setFoveation=function(X){m=X,_!==null&&(_.fixedFoveation=X),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=X)},this.hasDepthSensing=function(){return w.texture!==null};let Z=null;function mt(X,ht){if(g=ht.getViewerPose(p||d),R=ht,g!==null){const vt=g.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let At=!1;vt.length!==A.cameras.length&&(A.cameras.length=0,At=!0);for(let qt=0;qt<vt.length;qt++){const re=vt[qt];let et=null;if(E!==null)et=E.getViewport(re);else{const Wt=S.getViewSubImage(_,re);et=Wt.viewport,qt===0&&(e.setRenderTargetTextures(O,Wt.colorTexture,_.ignoreDepthValues?void 0:Wt.depthStencilTexture),e.setRenderTarget(O))}let te=N[qt];te===void 0&&(te=new ii,te.layers.enable(qt),te.viewport=new pn,N[qt]=te),te.matrix.fromArray(re.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(re.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(et.x,et.y,et.width,et.height),qt===0&&(A.matrix.copy(te.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),At===!0&&A.cameras.push(te)}const Pt=l.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const qt=S.getDepthInformation(vt[0]);qt&&qt.isValid&&qt.texture&&w.init(e,qt,l.renderState)}}for(let vt=0;vt<C.length;vt++){const At=F[vt],Pt=C[vt];At!==null&&Pt!==void 0&&Pt.update(At,ht,p||d)}w.render(e,A),Z&&Z(X,ht),ht.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ht}),R=null}const yt=new C0;yt.setAnimationLoop(mt),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}}const or=new Ri,fA=new Qe;function hA(o,e){function i(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,b0(o)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function l(v,x,O,C,F){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(v,x):x.isMeshToonMaterial?(u(v,x),S(v,x)):x.isMeshPhongMaterial?(u(v,x),g(v,x)):x.isMeshStandardMaterial?(u(v,x),_(v,x),x.isMeshPhysicalMaterial&&E(v,x,F)):x.isMeshMatcapMaterial?(u(v,x),R(v,x)):x.isMeshDepthMaterial?u(v,x):x.isMeshDistanceMaterial?(u(v,x),w(v,x)):x.isMeshNormalMaterial?u(v,x):x.isLineBasicMaterial?(d(v,x),x.isLineDashedMaterial&&h(v,x)):x.isPointsMaterial?m(v,x,O,C):x.isSpriteMaterial?p(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,i(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===zn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,i(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===zn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,i(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,i(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const O=e.get(x),C=O.envMap,F=O.envMapRotation;if(C&&(v.envMap.value=C,or.copy(F),or.x*=-1,or.y*=-1,or.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),v.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(or)),v.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap){v.lightMap.value=x.lightMap;const k=o._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=x.lightMapIntensity*k,i(x.lightMap,v.lightMapTransform)}x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,v.aoMapTransform))}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform))}function h(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function m(v,x,O,C){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*O,v.scale.value=C*.5,x.map&&(v.map.value=x.map,i(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function g(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function S(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function _(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function E(v,x,O){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&v.clearcoatNormalScale.value.negate())),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=O.texture,v.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,v.specularIntensityMapTransform))}function R(v,x){x.matcap&&(v.matcap.value=x.matcap)}function w(v,x){const O=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(O.matrixWorld),v.nearDistance.value=O.shadow.camera.near,v.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function dA(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,C){const F=C.program;r.uniformBlockBinding(O,F)}function p(O,C){let F=l[O.id];F===void 0&&(R(O),F=g(O),l[O.id]=F,O.addEventListener("dispose",v));const k=C.program;r.updateUBOMapping(O,k);const H=e.render.frame;u[O.id]!==H&&(_(O),u[O.id]=H)}function g(O){const C=S();O.__bindingPointIndex=C;const F=o.createBuffer(),k=O.__size,H=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,k,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,C,F),F}function S(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const C=l[O.id],F=O.uniforms,k=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,C);for(let H=0,P=F.length;H<P;H++){const it=Array.isArray(F[H])?F[H]:[F[H]];for(let N=0,A=it.length;N<A;N++){const K=it[N];if(E(K,H,N,k)===!0){const ut=K.__offset,B=Array.isArray(K.value)?K.value:[K.value];let ft=0;for(let st=0;st<B.length;st++){const I=B[st],W=w(I);typeof I=="number"||typeof I=="boolean"?(K.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,ut+ft,K.__data)):I.isMatrix3?(K.__data[0]=I.elements[0],K.__data[1]=I.elements[1],K.__data[2]=I.elements[2],K.__data[3]=0,K.__data[4]=I.elements[3],K.__data[5]=I.elements[4],K.__data[6]=I.elements[5],K.__data[7]=0,K.__data[8]=I.elements[6],K.__data[9]=I.elements[7],K.__data[10]=I.elements[8],K.__data[11]=0):(I.toArray(K.__data,ft),ft+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ut,K.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(O,C,F,k){const H=O.value,P=C+"_"+F;if(k[P]===void 0)return typeof H=="number"||typeof H=="boolean"?k[P]=H:k[P]=H.clone(),!0;{const it=k[P];if(typeof H=="number"||typeof H=="boolean"){if(it!==H)return k[P]=H,!0}else if(it.equals(H)===!1)return it.copy(H),!0}return!1}function R(O){const C=O.uniforms;let F=0;const k=16;for(let P=0,it=C.length;P<it;P++){const N=Array.isArray(C[P])?C[P]:[C[P]];for(let A=0,K=N.length;A<K;A++){const ut=N[A],B=Array.isArray(ut.value)?ut.value:[ut.value];for(let ft=0,st=B.length;ft<st;ft++){const I=B[ft],W=w(I),G=F%k;G!==0&&k-G<W.boundary&&(F+=k-G),ut.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=F,F+=W.storage}}}const H=F%k;return H>0&&(F+=k-H),O.__size=F,O.__cache={},this}function w(O){const C={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(C.boundary=4,C.storage=4):O.isVector2?(C.boundary=8,C.storage=8):O.isVector3||O.isColor?(C.boundary=16,C.storage=12):O.isVector4?(C.boundary=16,C.storage=16):O.isMatrix3?(C.boundary=48,C.storage=48):O.isMatrix4?(C.boundary=64,C.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),C}function v(O){const C=O.target;C.removeEventListener("dispose",v);const F=d.indexOf(C.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[C.id]),delete l[C.id],delete u[C.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:x}}class pA{constructor(e={}){const{canvas:i=rM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=d;const E=new Uint32Array(4),R=new Int32Array(4);let w=null,v=null;const x=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yi,this._useLegacyLights=!1,this.toneMapping=Oa,this.toneMappingExposure=1;const C=this;let F=!1,k=0,H=0,P=null,it=-1,N=null;const A=new pn,K=new pn;let ut=null;const B=new ye(0);let ft=0,st=i.width,I=i.height,W=1,G=null,_t=null;const U=new pn(0,0,st,I),Z=new pn(0,0,st,I);let mt=!1;const yt=new Bh;let X=!1,ht=!1;const vt=new Qe,At=new ee,Pt=new J,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return P===null?W:1}let et=r;function te(L,j){const nt=i.getContext(L,j);return nt!==null?nt:null}try{const L={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oh}`),i.addEventListener("webglcontextlost",ot,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),et===null){const j="webgl2";if(et=te(j,L),et===null)throw te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Wt,Dt,Et,Bt,D,T,Y,$,lt,pt,Ut,Mt,Ot,Rt,bt,Ct,It,Ft,Ht,pe,ce,xe,oe,Se;function kt(){Wt=new yT(et),Wt.init(),Dt=new gT(et,Wt,e),xe=new aA(et,Wt),Et=new nA(et),Bt=new bT(et),D=new Vb,T=new iA(et,Wt,Et,D,Dt,xe,Bt),Y=new vT(C),$=new MT(C),lt=new UM(et),oe=new pT(et,lt),pt=new ET(et,lt,Bt,oe),Ut=new RT(et,pt,lt,Bt),Ht=new AT(et,Dt,T),Ct=new _T(D),Mt=new Gb(C,Y,$,Wt,Dt,oe,Ct),Ot=new hA(C,D),Rt=new Xb,bt=new Kb(Wt),Ft=new dT(C,Y,$,Et,Ut,_,m),It=new eA(C,Ut,Dt),Se=new dA(et,Bt,Dt,Et),pe=new mT(et,Wt,Bt),ce=new TT(et,Wt,Bt),Bt.programs=Mt.programs,C.capabilities=Dt,C.extensions=Wt,C.properties=D,C.renderLists=Rt,C.shadowMap=It,C.state=Et,C.info=Bt}kt();const y=new uA(C,et);this.xr=y,this.getContext=function(){return et},this.getContextAttributes=function(){return et.getContextAttributes()},this.forceContextLoss=function(){const L=Wt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Wt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(st,I,!1))},this.getSize=function(L){return L.set(st,I)},this.setSize=function(L,j,nt=!0){if(y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=L,I=j,i.width=Math.floor(L*W),i.height=Math.floor(j*W),nt===!0&&(i.style.width=L+"px",i.style.height=j+"px"),this.setViewport(0,0,L,j)},this.getDrawingBufferSize=function(L){return L.set(st*W,I*W).floor()},this.setDrawingBufferSize=function(L,j,nt){st=L,I=j,W=nt,i.width=Math.floor(L*nt),i.height=Math.floor(j*nt),this.setViewport(0,0,L,j)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(U)},this.setViewport=function(L,j,nt,dt){L.isVector4?U.set(L.x,L.y,L.z,L.w):U.set(L,j,nt,dt),Et.viewport(A.copy(U).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(Z)},this.setScissor=function(L,j,nt,dt){L.isVector4?Z.set(L.x,L.y,L.z,L.w):Z.set(L,j,nt,dt),Et.scissor(K.copy(Z).multiplyScalar(W).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(L){Et.setScissorTest(mt=L)},this.setOpaqueSort=function(L){G=L},this.setTransparentSort=function(L){_t=L},this.getClearColor=function(L){return L.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(L=!0,j=!0,nt=!0){let dt=0;if(L){let ct=!1;if(P!==null){const Lt=P.texture.format;ct=Lt===d0||Lt===h0||Lt===f0}if(ct){const Lt=P.texture.type,Vt=Lt===Pa||Lt===Es||Lt===o0||Lt===Po||Lt===c0||Lt===u0,jt=Ft.getClearColor(),Qt=Ft.getClearAlpha(),ne=jt.r,ie=jt.g,$t=jt.b;Vt?(E[0]=ne,E[1]=ie,E[2]=$t,E[3]=Qt,et.clearBufferuiv(et.COLOR,0,E)):(R[0]=ne,R[1]=ie,R[2]=$t,R[3]=Qt,et.clearBufferiv(et.COLOR,0,R))}else dt|=et.COLOR_BUFFER_BIT}j&&(dt|=et.DEPTH_BUFFER_BIT),nt&&(dt|=et.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ot,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Rt.dispose(),bt.dispose(),D.dispose(),Y.dispose(),$.dispose(),Ut.dispose(),oe.dispose(),Se.dispose(),Mt.dispose(),y.dispose(),y.removeEventListener("sessionstart",Ge),y.removeEventListener("sessionend",qe),Ye.stop()};function ot(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const L=Bt.autoReset,j=It.enabled,nt=It.autoUpdate,dt=It.needsUpdate,ct=It.type;kt(),Bt.autoReset=L,It.enabled=j,It.autoUpdate=nt,It.needsUpdate=dt,It.type=ct}function wt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function zt(L){const j=L.target;j.removeEventListener("dispose",zt),ge(j)}function ge(L){ue(L),D.remove(L)}function ue(L){const j=D.get(L).programs;j!==void 0&&(j.forEach(function(nt){Mt.releaseProgram(nt)}),L.isShaderMaterial&&Mt.releaseShaderCache(L))}this.renderBufferDirect=function(L,j,nt,dt,ct,Lt){j===null&&(j=qt);const Vt=ct.isMesh&&ct.matrixWorld.determinant()<0,jt=Cs(L,j,nt,dt,ct);Et.setMaterial(dt,Vt);let Qt=nt.index,ne=1;if(dt.wireframe===!0){if(Qt=pt.getWireframeAttribute(nt),Qt===void 0)return;ne=2}const ie=nt.drawRange,$t=nt.attributes.position;let ze=ie.start*ne,ke=(ie.start+ie.count)*ne;Lt!==null&&(ze=Math.max(ze,Lt.start*ne),ke=Math.min(ke,(Lt.start+Lt.count)*ne)),Qt!==null?(ze=Math.max(ze,0),ke=Math.min(ke,Qt.count)):$t!=null&&(ze=Math.max(ze,0),ke=Math.min(ke,$t.count));const je=ke-ze;if(je<0||je===1/0)return;oe.setup(ct,dt,jt,nt,Qt);let jn,Ae=pe;if(Qt!==null&&(jn=lt.get(Qt),Ae=ce,Ae.setIndex(jn)),ct.isMesh)dt.wireframe===!0?(Et.setLineWidth(dt.wireframeLinewidth*re()),Ae.setMode(et.LINES)):Ae.setMode(et.TRIANGLES);else if(ct.isLine){let ae=dt.linewidth;ae===void 0&&(ae=1),Et.setLineWidth(ae*re()),ct.isLineSegments?Ae.setMode(et.LINES):ct.isLineLoop?Ae.setMode(et.LINE_LOOP):Ae.setMode(et.LINE_STRIP)}else ct.isPoints?Ae.setMode(et.POINTS):ct.isSprite&&Ae.setMode(et.TRIANGLES);if(ct.isBatchedMesh)Ae.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else if(ct.isInstancedMesh)Ae.renderInstances(ze,je,ct.count);else if(nt.isInstancedBufferGeometry){const ae=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Fa=Math.min(nt.instanceCount,ae);Ae.renderInstances(ze,je,Fa)}else Ae.render(ze,je)};function Oe(L,j,nt){L.transparent===!0&&L.side===ji&&L.forceSinglePass===!1?(L.side=zn,L.needsUpdate=!0,_r(L,j,nt),L.side=za,L.needsUpdate=!0,_r(L,j,nt),L.side=ji):_r(L,j,nt)}this.compile=function(L,j,nt=null){nt===null&&(nt=L),v=bt.get(nt),v.init(),O.push(v),nt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(j.layers)&&(v.pushLight(ct),ct.castShadow&&v.pushShadow(ct))}),L!==nt&&L.traverseVisible(function(ct){ct.isLight&&ct.layers.test(j.layers)&&(v.pushLight(ct),ct.castShadow&&v.pushShadow(ct))}),v.setupLights(C._useLegacyLights);const dt=new Set;return L.traverse(function(ct){const Lt=ct.material;if(Lt)if(Array.isArray(Lt))for(let Vt=0;Vt<Lt.length;Vt++){const jt=Lt[Vt];Oe(jt,nt,ct),dt.add(jt)}else Oe(Lt,nt,ct),dt.add(Lt)}),O.pop(),v=null,dt},this.compileAsync=function(L,j,nt=null){const dt=this.compile(L,j,nt);return new Promise(ct=>{function Lt(){if(dt.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&dt.delete(Vt)}),dt.size===0){ct(L);return}setTimeout(Lt,10)}Wt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let We=null;function Ee(L){We&&We(L)}function Ge(){Ye.stop()}function qe(){Ye.start()}const Ye=new C0;Ye.setAnimationLoop(Ee),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(L){We=L,y.setAnimationLoop(L),L===null?Ye.stop():Ye.start()},y.addEventListener("sessionstart",Ge),y.addEventListener("sessionend",qe),this.render=function(L,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),y.enabled===!0&&y.isPresenting===!0&&(y.cameraAutoUpdate===!0&&y.updateCamera(j),j=y.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,j,P),v=bt.get(L,O.length),v.init(),O.push(v),vt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),yt.setFromProjectionMatrix(vt),ht=this.localClippingEnabled,X=Ct.init(this.clippingPlanes,ht),w=Rt.get(L,x.length),w.init(),x.push(w),Re(L,j,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(G,_t),this.info.render.frame++,X===!0&&Ct.beginShadows();const nt=v.state.shadowsArray;if(It.render(nt,L,j),X===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(y.enabled===!1||y.isPresenting===!1||y.hasDepthSensing()===!1)&&Ft.render(w,L),v.setupLights(C._useLegacyLights),j.isArrayCamera){const dt=j.cameras;for(let ct=0,Lt=dt.length;ct<Lt;ct++){const Vt=dt[ct];Ve(w,L,Vt,Vt.viewport)}}else Ve(w,L,j);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),L.isScene===!0&&L.onAfterRender(C,L,j),oe.resetDefaultState(),it=-1,N=null,O.pop(),O.length>0?v=O[O.length-1]:v=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function Re(L,j,nt,dt){if(L.visible===!1)return;if(L.layers.test(j.layers)){if(L.isGroup)nt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(j);else if(L.isLight)v.pushLight(L),L.castShadow&&v.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||yt.intersectsSprite(L)){dt&&Pt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(vt);const Vt=Ut.update(L),jt=L.material;jt.visible&&w.push(L,Vt,jt,nt,Pt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||yt.intersectsObject(L))){const Vt=Ut.update(L),jt=L.material;if(dt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Pt.copy(L.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Pt.copy(Vt.boundingSphere.center)),Pt.applyMatrix4(L.matrixWorld).applyMatrix4(vt)),Array.isArray(jt)){const Qt=Vt.groups;for(let ne=0,ie=Qt.length;ne<ie;ne++){const $t=Qt[ne],ze=jt[$t.materialIndex];ze&&ze.visible&&w.push(L,Vt,ze,nt,Pt.z,$t)}}else jt.visible&&w.push(L,Vt,jt,nt,Pt.z,null)}}const Lt=L.children;for(let Vt=0,jt=Lt.length;Vt<jt;Vt++)Re(Lt[Vt],j,nt,dt)}function Ve(L,j,nt,dt){const ct=L.opaque,Lt=L.transmissive,Vt=L.transparent;v.setupLightsView(nt),X===!0&&Ct.setGlobalState(C.clippingPlanes,nt),Lt.length>0&&In(ct,Lt,j,nt),dt&&Et.viewport(A.copy(dt)),ct.length>0&&ri(ct,j,nt),Lt.length>0&&ri(Lt,j,nt),Vt.length>0&&ri(Vt,j,nt),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function In(L,j,nt,dt){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget===null){v.state.transmissionRenderTarget=new dr(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Sc:Pa,minFilter:hr,samples:4,stencilBuffer:u});const ne=D.get(v.state.transmissionRenderTarget);ne.__isTransmissionRenderTarget=!0}const Lt=v.state.transmissionRenderTarget;C.getDrawingBufferSize(At),Lt.setSize(At.x,At.y);const Vt=C.getRenderTarget();C.setRenderTarget(Lt),C.getClearColor(B),ft=C.getClearAlpha(),ft<1&&C.setClearColor(16777215,.5),C.clear();const jt=C.toneMapping;C.toneMapping=Oa,ri(L,nt,dt),T.updateMultisampleRenderTarget(Lt),T.updateRenderTargetMipmap(Lt);let Qt=!1;for(let ne=0,ie=j.length;ne<ie;ne++){const $t=j[ne],ze=$t.object,ke=$t.geometry,je=$t.material,jn=$t.group;if(je.side===ji&&ze.layers.test(dt.layers)){const Ae=je.side;je.side=zn,je.needsUpdate=!0,Io(ze,nt,dt,ke,je,jn),je.side=Ae,je.needsUpdate=!0,Qt=!0}}Qt===!0&&(T.updateMultisampleRenderTarget(Lt),T.updateRenderTargetMipmap(Lt)),C.setRenderTarget(Vt),C.setClearColor(B,ft),C.toneMapping=jt}function ri(L,j,nt){const dt=j.isScene===!0?j.overrideMaterial:null;for(let ct=0,Lt=L.length;ct<Lt;ct++){const Vt=L[ct],jt=Vt.object,Qt=Vt.geometry,ne=dt===null?Vt.material:dt,ie=Vt.group;jt.layers.test(nt.layers)&&Io(jt,j,nt,Qt,ne,ie)}}function Io(L,j,nt,dt,ct,Lt){L.onBeforeRender(C,j,nt,dt,ct,Lt),L.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ct.onBeforeRender(C,j,nt,dt,L,Lt),ct.transparent===!0&&ct.side===ji&&ct.forceSinglePass===!1?(ct.side=zn,ct.needsUpdate=!0,C.renderBufferDirect(nt,j,dt,ct,L,Lt),ct.side=za,ct.needsUpdate=!0,C.renderBufferDirect(nt,j,dt,ct,L,Lt),ct.side=ji):C.renderBufferDirect(nt,j,dt,ct,L,Lt),L.onAfterRender(C,j,nt,dt,ct,Lt)}function _r(L,j,nt){j.isScene!==!0&&(j=qt);const dt=D.get(L),ct=v.state.lights,Lt=v.state.shadowsArray,Vt=ct.state.version,jt=Mt.getParameters(L,ct.state,Lt,j,nt),Qt=Mt.getProgramCacheKey(jt);let ne=dt.programs;dt.environment=L.isMeshStandardMaterial?j.environment:null,dt.fog=j.fog,dt.envMap=(L.isMeshStandardMaterial?$:Y).get(L.envMap||dt.environment),dt.envMapRotation=dt.environment!==null&&L.envMap===null?j.environmentRotation:L.envMapRotation,ne===void 0&&(L.addEventListener("dispose",zt),ne=new Map,dt.programs=ne);let ie=ne.get(Qt);if(ie!==void 0){if(dt.currentProgram===ie&&dt.lightsStateVersion===Vt)return Qi(L,jt),ie}else jt.uniforms=Mt.getUniforms(L),L.onBuild(nt,jt,C),L.onBeforeCompile(jt,C),ie=Mt.acquireProgram(jt,Qt),ne.set(Qt,ie),dt.uniforms=jt.uniforms;const $t=dt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&($t.clippingPlanes=Ct.uniform),Qi(L,jt),dt.needsLights=$i(L),dt.lightsStateVersion=Vt,dt.needsLights&&($t.ambientLightColor.value=ct.state.ambient,$t.lightProbe.value=ct.state.probe,$t.directionalLights.value=ct.state.directional,$t.directionalLightShadows.value=ct.state.directionalShadow,$t.spotLights.value=ct.state.spot,$t.spotLightShadows.value=ct.state.spotShadow,$t.rectAreaLights.value=ct.state.rectArea,$t.ltc_1.value=ct.state.rectAreaLTC1,$t.ltc_2.value=ct.state.rectAreaLTC2,$t.pointLights.value=ct.state.point,$t.pointLightShadows.value=ct.state.pointShadow,$t.hemisphereLights.value=ct.state.hemi,$t.directionalShadowMap.value=ct.state.directionalShadowMap,$t.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,$t.spotShadowMap.value=ct.state.spotShadowMap,$t.spotLightMatrix.value=ct.state.spotLightMatrix,$t.spotLightMap.value=ct.state.spotLightMap,$t.pointShadowMap.value=ct.state.pointShadowMap,$t.pointShadowMatrix.value=ct.state.pointShadowMatrix),dt.currentProgram=ie,dt.uniformsList=null,ie}function Rs(L){if(L.uniformsList===null){const j=L.currentProgram.getUniforms();L.uniformsList=vc.seqWithValue(j.seq,L.uniforms)}return L.uniformsList}function Qi(L,j){const nt=D.get(L);nt.outputColorSpace=j.outputColorSpace,nt.batching=j.batching,nt.instancing=j.instancing,nt.instancingColor=j.instancingColor,nt.instancingMorph=j.instancingMorph,nt.skinning=j.skinning,nt.morphTargets=j.morphTargets,nt.morphNormals=j.morphNormals,nt.morphColors=j.morphColors,nt.morphTargetsCount=j.morphTargetsCount,nt.numClippingPlanes=j.numClippingPlanes,nt.numIntersection=j.numClipIntersection,nt.vertexAlphas=j.vertexAlphas,nt.vertexTangents=j.vertexTangents,nt.toneMapping=j.toneMapping}function Cs(L,j,nt,dt,ct){j.isScene!==!0&&(j=qt),T.resetTextureUnits();const Lt=j.fog,Vt=dt.isMeshStandardMaterial?j.environment:null,jt=P===null?C.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ia,Qt=(dt.isMeshStandardMaterial?$:Y).get(dt.envMap||Vt),ne=dt.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ie=!!nt.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),$t=!!nt.morphAttributes.position,ze=!!nt.morphAttributes.normal,ke=!!nt.morphAttributes.color;let je=Oa;dt.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(je=C.toneMapping);const jn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,Ae=jn!==void 0?jn.length:0,ae=D.get(dt),Fa=v.state.lights;if(X===!0&&(ht===!0||L!==N)){const Dn=L===N&&dt.id===it;Ct.setState(dt,L,Dn)}let Be=!1;dt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Fa.state.version||ae.outputColorSpace!==jt||ct.isBatchedMesh&&ae.batching===!1||!ct.isBatchedMesh&&ae.batching===!0||ct.isInstancedMesh&&ae.instancing===!1||!ct.isInstancedMesh&&ae.instancing===!0||ct.isSkinnedMesh&&ae.skinning===!1||!ct.isSkinnedMesh&&ae.skinning===!0||ct.isInstancedMesh&&ae.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&ae.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&ae.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&ae.instancingMorph===!1&&ct.morphTexture!==null||ae.envMap!==Qt||dt.fog===!0&&ae.fog!==Lt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ct.numPlanes||ae.numIntersection!==Ct.numIntersection)||ae.vertexAlphas!==ne||ae.vertexTangents!==ie||ae.morphTargets!==$t||ae.morphNormals!==ze||ae.morphColors!==ke||ae.toneMapping!==je||ae.morphTargetsCount!==Ae)&&(Be=!0):(Be=!0,ae.__version=dt.version);let gi=ae.currentProgram;Be===!0&&(gi=_r(dt,j,ct));let An=!1,ta=!1,ws=!1;const Je=gi.getUniforms(),si=ae.uniforms;if(Et.useProgram(gi.program)&&(An=!0,ta=!0,ws=!0),dt.id!==it&&(it=dt.id,ta=!0),An||N!==L){Je.setValue(et,"projectionMatrix",L.projectionMatrix),Je.setValue(et,"viewMatrix",L.matrixWorldInverse);const Dn=Je.map.cameraPosition;Dn!==void 0&&Dn.setValue(et,Pt.setFromMatrixPosition(L.matrixWorld)),Dt.logarithmicDepthBuffer&&Je.setValue(et,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Je.setValue(et,"isOrthographic",L.isOrthographicCamera===!0),N!==L&&(N=L,ta=!0,ws=!0)}if(ct.isSkinnedMesh){Je.setOptional(et,ct,"bindMatrix"),Je.setOptional(et,ct,"bindMatrixInverse");const Dn=ct.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Je.setValue(et,"boneTexture",Dn.boneTexture,T))}ct.isBatchedMesh&&(Je.setOptional(et,ct,"batchingTexture"),Je.setValue(et,"batchingTexture",ct._matricesTexture,T));const ea=nt.morphAttributes;if((ea.position!==void 0||ea.normal!==void 0||ea.color!==void 0)&&Ht.update(ct,nt,gi),(ta||ae.receiveShadow!==ct.receiveShadow)&&(ae.receiveShadow=ct.receiveShadow,Je.setValue(et,"receiveShadow",ct.receiveShadow)),dt.isMeshGouraudMaterial&&dt.envMap!==null&&(si.envMap.value=Qt,si.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),dt.isMeshStandardMaterial&&dt.envMap===null&&j.environment!==null&&(si.envMapIntensity.value=j.environmentIntensity),ta&&(Je.setValue(et,"toneMappingExposure",C.toneMappingExposure),ae.needsLights&&Ji(si,ws),Lt&&dt.fog===!0&&Ot.refreshFogUniforms(si,Lt),Ot.refreshMaterialUniforms(si,dt,W,I,v.state.transmissionRenderTarget),vc.upload(et,Rs(ae),si,T)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(vc.upload(et,Rs(ae),si,T),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Je.setValue(et,"center",ct.center),Je.setValue(et,"modelViewMatrix",ct.modelViewMatrix),Je.setValue(et,"normalMatrix",ct.normalMatrix),Je.setValue(et,"modelMatrix",ct.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const Dn=dt.uniformsGroups;for(let xn=0,Ds=Dn.length;xn<Ds;xn++){const Us=Dn[xn];Se.update(Us,gi),Se.bind(Us,gi)}}return gi}function Ji(L,j){L.ambientLightColor.needsUpdate=j,L.lightProbe.needsUpdate=j,L.directionalLights.needsUpdate=j,L.directionalLightShadows.needsUpdate=j,L.pointLights.needsUpdate=j,L.pointLightShadows.needsUpdate=j,L.spotLights.needsUpdate=j,L.spotLightShadows.needsUpdate=j,L.rectAreaLights.needsUpdate=j,L.hemisphereLights.needsUpdate=j}function $i(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(L,j,nt){D.get(L.texture).__webglTexture=j,D.get(L.depthTexture).__webglTexture=nt;const dt=D.get(L);dt.__hasExternalTextures=!0,dt.__autoAllocateDepthBuffer=nt===void 0,dt.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),dt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,j){const nt=D.get(L);nt.__webglFramebuffer=j,nt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(L,j=0,nt=0){P=L,k=j,H=nt;let dt=!0,ct=null,Lt=!1,Vt=!1;if(L){const Qt=D.get(L);Qt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(et.FRAMEBUFFER,null),dt=!1):Qt.__webglFramebuffer===void 0?T.setupRenderTarget(L):Qt.__hasExternalTextures&&T.rebindTextures(L,D.get(L.texture).__webglTexture,D.get(L.depthTexture).__webglTexture);const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Vt=!0);const ie=D.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[j])?ct=ie[j][nt]:ct=ie[j],Lt=!0):L.samples>0&&T.useMultisampledRTT(L)===!1?ct=D.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?ct=ie[nt]:ct=ie,A.copy(L.viewport),K.copy(L.scissor),ut=L.scissorTest}else A.copy(U).multiplyScalar(W).floor(),K.copy(Z).multiplyScalar(W).floor(),ut=mt;if(Et.bindFramebuffer(et.FRAMEBUFFER,ct)&&dt&&Et.drawBuffers(L,ct),Et.viewport(A),Et.scissor(K),Et.setScissorTest(ut),Lt){const Qt=D.get(L.texture);et.framebufferTexture2D(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,et.TEXTURE_CUBE_MAP_POSITIVE_X+j,Qt.__webglTexture,nt)}else if(Vt){const Qt=D.get(L.texture),ne=j||0;et.framebufferTextureLayer(et.FRAMEBUFFER,et.COLOR_ATTACHMENT0,Qt.__webglTexture,nt||0,ne)}it=-1},this.readRenderTargetPixels=function(L,j,nt,dt,ct,Lt,Vt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=D.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Vt!==void 0&&(jt=jt[Vt]),jt){Et.bindFramebuffer(et.FRAMEBUFFER,jt);try{const Qt=L.texture,ne=Qt.format,ie=Qt.type;if(ne!==Ti&&xe.convert(ne)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=ie===Sc&&(Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float"));if(ie!==Pa&&xe.convert(ie)!==et.getParameter(et.IMPLEMENTATION_COLOR_READ_TYPE)&&ie!==La&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=L.width-dt&&nt>=0&&nt<=L.height-ct&&et.readPixels(j,nt,dt,ct,xe.convert(ne),xe.convert(ie),Lt)}finally{const Qt=P!==null?D.get(P).__webglFramebuffer:null;Et.bindFramebuffer(et.FRAMEBUFFER,Qt)}}},this.copyFramebufferToTexture=function(L,j,nt=0){const dt=Math.pow(2,-nt),ct=Math.floor(j.image.width*dt),Lt=Math.floor(j.image.height*dt);T.setTexture2D(j,0),et.copyTexSubImage2D(et.TEXTURE_2D,nt,0,0,L.x,L.y,ct,Lt),Et.unbindTexture()},this.copyTextureToTexture=function(L,j,nt,dt=0){const ct=j.image.width,Lt=j.image.height,Vt=xe.convert(nt.format),jt=xe.convert(nt.type);T.setTexture2D(nt,0),et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,nt.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,nt.unpackAlignment),j.isDataTexture?et.texSubImage2D(et.TEXTURE_2D,dt,L.x,L.y,ct,Lt,Vt,jt,j.image.data):j.isCompressedTexture?et.compressedTexSubImage2D(et.TEXTURE_2D,dt,L.x,L.y,j.mipmaps[0].width,j.mipmaps[0].height,Vt,j.mipmaps[0].data):et.texSubImage2D(et.TEXTURE_2D,dt,L.x,L.y,Vt,jt,j.image),dt===0&&nt.generateMipmaps&&et.generateMipmap(et.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(L,j,nt,dt,ct=0){const Lt=Math.round(L.max.x-L.min.x),Vt=Math.round(L.max.y-L.min.y),jt=L.max.z-L.min.z+1,Qt=xe.convert(dt.format),ne=xe.convert(dt.type);let ie;if(dt.isData3DTexture)T.setTexture3D(dt,0),ie=et.TEXTURE_3D;else if(dt.isDataArrayTexture||dt.isCompressedArrayTexture)T.setTexture2DArray(dt,0),ie=et.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}et.pixelStorei(et.UNPACK_FLIP_Y_WEBGL,dt.flipY),et.pixelStorei(et.UNPACK_PREMULTIPLY_ALPHA_WEBGL,dt.premultiplyAlpha),et.pixelStorei(et.UNPACK_ALIGNMENT,dt.unpackAlignment);const $t=et.getParameter(et.UNPACK_ROW_LENGTH),ze=et.getParameter(et.UNPACK_IMAGE_HEIGHT),ke=et.getParameter(et.UNPACK_SKIP_PIXELS),je=et.getParameter(et.UNPACK_SKIP_ROWS),jn=et.getParameter(et.UNPACK_SKIP_IMAGES),Ae=nt.isCompressedTexture?nt.mipmaps[ct]:nt.image;et.pixelStorei(et.UNPACK_ROW_LENGTH,Ae.width),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,Ae.height),et.pixelStorei(et.UNPACK_SKIP_PIXELS,L.min.x),et.pixelStorei(et.UNPACK_SKIP_ROWS,L.min.y),et.pixelStorei(et.UNPACK_SKIP_IMAGES,L.min.z),nt.isDataTexture||nt.isData3DTexture?et.texSubImage3D(ie,ct,j.x,j.y,j.z,Lt,Vt,jt,Qt,ne,Ae.data):dt.isCompressedArrayTexture?et.compressedTexSubImage3D(ie,ct,j.x,j.y,j.z,Lt,Vt,jt,Qt,Ae.data):et.texSubImage3D(ie,ct,j.x,j.y,j.z,Lt,Vt,jt,Qt,ne,Ae),et.pixelStorei(et.UNPACK_ROW_LENGTH,$t),et.pixelStorei(et.UNPACK_IMAGE_HEIGHT,ze),et.pixelStorei(et.UNPACK_SKIP_PIXELS,ke),et.pixelStorei(et.UNPACK_SKIP_ROWS,je),et.pixelStorei(et.UNPACK_SKIP_IMAGES,jn),ct===0&&dt.generateMipmaps&&et.generateMipmap(ie),Et.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?T.setTextureCube(L,0):L.isData3DTexture?T.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?T.setTexture2DArray(L,0):T.setTexture2D(L,0),Et.unbindTexture()},this.resetState=function(){k=0,H=0,P=null,Et.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Ph?"display-p3":"srgb",i.unpackColorSpace=Ne.workingColorSpace===Rc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mA extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class z0 extends bs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const H_=new J,G_=new J,V_=new Qe,_h=new zh,dc=new Cc;class gA extends vn{constructor(e=new Ki,i=new z0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)H_.fromBufferAttribute(i,l-1),G_.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=H_.distanceTo(G_);e.setAttribute("lineDistance",new Ai(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),dc.copy(r.boundingSphere),dc.applyMatrix4(l),dc.radius+=u,e.ray.intersectsSphere(dc)===!1)return;V_.copy(l).invert(),_h.copy(e.ray).applyMatrix4(V_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=new J,g=new J,S=new J,_=new J,E=this.isLineSegments?2:1,R=r.index,v=r.attributes.position;if(R!==null){const x=Math.max(0,d.start),O=Math.min(R.count,d.start+d.count);for(let C=x,F=O-1;C<F;C+=E){const k=R.getX(C),H=R.getX(C+1);if(p.fromBufferAttribute(v,k),g.fromBufferAttribute(v,H),_h.distanceSqToSegment(p,g,_,S)>m)continue;_.applyMatrix4(this.matrixWorld);const it=e.ray.origin.distanceTo(_);it<e.near||it>e.far||i.push({distance:it,point:S.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,d.start),O=Math.min(v.count,d.start+d.count);for(let C=x,F=O-1;C<F;C+=E){if(p.fromBufferAttribute(v,C),g.fromBufferAttribute(v,C+1),_h.distanceSqToSegment(p,g,_,S)>m)continue;_.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(_);H<e.near||H>e.far||i.push({distance:H,point:S.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}const k_=new J,X_=new J;class _A extends gA{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)k_.fromBufferAttribute(i,l),X_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+k_.distanceTo(X_);e.setAttribute("lineDistance",new Ai(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const pc=new J,mc=new J,vh=new J,gc=new pi;class vA extends Ki{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),u=Math.cos(No*i),d=e.getIndex(),h=e.getAttribute("position"),m=d?d.count:h.count,p=[0,0,0],g=["a","b","c"],S=new Array(3),_={},E=[];for(let R=0;R<m;R+=3){d?(p[0]=d.getX(R),p[1]=d.getX(R+1),p[2]=d.getX(R+2)):(p[0]=R,p[1]=R+1,p[2]=R+2);const{a:w,b:v,c:x}=gc;if(w.fromBufferAttribute(h,p[0]),v.fromBufferAttribute(h,p[1]),x.fromBufferAttribute(h,p[2]),gc.getNormal(vh),S[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,S[1]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,S[2]=`${Math.round(x.x*l)},${Math.round(x.y*l)},${Math.round(x.z*l)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let O=0;O<3;O++){const C=(O+1)%3,F=S[O],k=S[C],H=gc[g[O]],P=gc[g[C]],it=`${F}_${k}`,N=`${k}_${F}`;N in _&&_[N]?(vh.dot(_[N].normal)<=u&&(E.push(H.x,H.y,H.z),E.push(P.x,P.y,P.z)),_[N]=null):it in _||(_[it]={index0:p[O],index1:p[C],normal:vh.clone()})}}for(const R in _)if(_[R]){const{index0:w,index1:v}=_[R];pc.fromBufferAttribute(h,w),mc.fromBufferAttribute(h,v),E.push(pc.x,pc.y,pc.z),E.push(mc.x,mc.y,mc.z)}this.setAttribute("position",new Ai(E,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class W_ extends bs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=m0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class B0 extends vn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const xh=new Qe,q_=new J,Y_=new J;class xA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;q_.setFromMatrixPosition(e.matrixWorld),i.position.copy(q_),Y_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Y_),i.updateMatrixWorld(),xh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class SA extends xA{constructor(){super(new w0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MA extends B0{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new SA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class yA extends B0{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class EA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=j_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=j_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function j_(){return(typeof performance>"u"?Date:performance).now()}class Z_{constructor(e=1,i=0,r=0){return this.radius=e,this.phi=i,this.theta=r,this}set(e,i,r){return this.radius=e,this.phi=i,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,r){return this.radius=Math.sqrt(e*e+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(wn(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);const K_={type:"change"},Sh={type:"start"},Q_={type:"end"},_c=new zh,J_=new Da,TA=Math.cos(70*aM.DEG2RAD);class bA extends gr{constructor(e,i){super(),this.object=e,this.domElement=i,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:Jr.ROTATE,TWO:Jr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return h.phi},this.getAzimuthalAngle=function(){return h.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(y){y.addEventListener("keydown",Ct),this._domElementKeyEvents=y},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ct),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(K_),r.update(),u=l.NONE},this.update=function(){const y=new J,ot=new pr().setFromUnitVectors(e.up,new J(0,1,0)),xt=ot.clone().invert(),wt=new J,zt=new pr,ge=new J,ue=2*Math.PI;return function(We=null){const Ee=r.object.position;y.copy(Ee).sub(r.target),y.applyQuaternion(ot),h.setFromVector3(y),r.autoRotate&&u===l.NONE&&ut(A(We)),r.enableDamping?(h.theta+=m.theta*r.dampingFactor,h.phi+=m.phi*r.dampingFactor):(h.theta+=m.theta,h.phi+=m.phi);let Ge=r.minAzimuthAngle,qe=r.maxAzimuthAngle;isFinite(Ge)&&isFinite(qe)&&(Ge<-Math.PI?Ge+=ue:Ge>Math.PI&&(Ge-=ue),qe<-Math.PI?qe+=ue:qe>Math.PI&&(qe-=ue),Ge<=qe?h.theta=Math.max(Ge,Math.min(qe,h.theta)):h.theta=h.theta>(Ge+qe)/2?Math.max(Ge,h.theta):Math.min(qe,h.theta)),h.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,h.phi)),h.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor);let Ye=!1;if(r.zoomToCursor&&H||r.object.isOrthographicCamera)h.radius=U(h.radius);else{const Re=h.radius;h.radius=U(h.radius*p),Ye=Re!=h.radius}if(y.setFromSpherical(h),y.applyQuaternion(xt),Ee.copy(r.target).add(y),r.object.lookAt(r.target),r.enableDamping===!0?(m.theta*=1-r.dampingFactor,m.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(m.set(0,0,0),g.set(0,0,0)),r.zoomToCursor&&H){let Re=null;if(r.object.isPerspectiveCamera){const Ve=y.length();Re=U(Ve*p);const In=Ve-Re;r.object.position.addScaledVector(F,In),r.object.updateMatrixWorld(),Ye=!!In}else if(r.object.isOrthographicCamera){const Ve=new J(k.x,k.y,0);Ve.unproject(r.object);const In=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),r.object.updateProjectionMatrix(),Ye=In!==r.object.zoom;const ri=new J(k.x,k.y,0);ri.unproject(r.object),r.object.position.sub(ri).add(Ve),r.object.updateMatrixWorld(),Re=y.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;Re!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(Re).add(r.object.position):(_c.origin.copy(r.object.position),_c.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(_c.direction))<TA?e.lookAt(r.target):(J_.setFromNormalAndCoplanarPoint(r.object.up,r.target),_c.intersectPlane(J_,r.target))))}else if(r.object.isOrthographicCamera){const Re=r.object.zoom;r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/p)),Re!==r.object.zoom&&(r.object.updateProjectionMatrix(),Ye=!0)}return p=1,H=!1,Ye||wt.distanceToSquared(r.object.position)>d||8*(1-zt.dot(r.object.quaternion))>d||ge.distanceToSquared(r.target)>d?(r.dispatchEvent(K_),wt.copy(r.object.position),zt.copy(r.object.quaternion),ge.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",Ht),r.domElement.removeEventListener("pointerdown",Y),r.domElement.removeEventListener("pointercancel",lt),r.domElement.removeEventListener("wheel",Mt),r.domElement.removeEventListener("pointermove",$),r.domElement.removeEventListener("pointerup",lt),r.domElement.getRootNode().removeEventListener("keydown",Rt,{capture:!0}),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Ct),r._domElementKeyEvents=null)};const r=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=l.NONE;const d=1e-6,h=new Z_,m=new Z_;let p=1;const g=new J,S=new ee,_=new ee,E=new ee,R=new ee,w=new ee,v=new ee,x=new ee,O=new ee,C=new ee,F=new J,k=new ee;let H=!1;const P=[],it={};let N=!1;function A(y){return y!==null?2*Math.PI/60*r.autoRotateSpeed*y:2*Math.PI/60/60*r.autoRotateSpeed}function K(y){const ot=Math.abs(y*.01);return Math.pow(.95,r.zoomSpeed*ot)}function ut(y){m.theta-=y}function B(y){m.phi-=y}const ft=function(){const y=new J;return function(xt,wt){y.setFromMatrixColumn(wt,0),y.multiplyScalar(-xt),g.add(y)}}(),st=function(){const y=new J;return function(xt,wt){r.screenSpacePanning===!0?y.setFromMatrixColumn(wt,1):(y.setFromMatrixColumn(wt,0),y.crossVectors(r.object.up,y)),y.multiplyScalar(xt),g.add(y)}}(),I=function(){const y=new J;return function(xt,wt){const zt=r.domElement;if(r.object.isPerspectiveCamera){const ge=r.object.position;y.copy(ge).sub(r.target);let ue=y.length();ue*=Math.tan(r.object.fov/2*Math.PI/180),ft(2*xt*ue/zt.clientHeight,r.object.matrix),st(2*wt*ue/zt.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(ft(xt*(r.object.right-r.object.left)/r.object.zoom/zt.clientWidth,r.object.matrix),st(wt*(r.object.top-r.object.bottom)/r.object.zoom/zt.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function W(y){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p/=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function G(y){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?p*=y:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function _t(y,ot){if(!r.zoomToCursor)return;H=!0;const xt=r.domElement.getBoundingClientRect(),wt=y-xt.left,zt=ot-xt.top,ge=xt.width,ue=xt.height;k.x=wt/ge*2-1,k.y=-(zt/ue)*2+1,F.set(k.x,k.y,1).unproject(r.object).sub(r.object.position).normalize()}function U(y){return Math.max(r.minDistance,Math.min(r.maxDistance,y))}function Z(y){S.set(y.clientX,y.clientY)}function mt(y){_t(y.clientX,y.clientX),x.set(y.clientX,y.clientY)}function yt(y){R.set(y.clientX,y.clientY)}function X(y){_.set(y.clientX,y.clientY),E.subVectors(_,S).multiplyScalar(r.rotateSpeed);const ot=r.domElement;ut(2*Math.PI*E.x/ot.clientHeight),B(2*Math.PI*E.y/ot.clientHeight),S.copy(_),r.update()}function ht(y){O.set(y.clientX,y.clientY),C.subVectors(O,x),C.y>0?W(K(C.y)):C.y<0&&G(K(C.y)),x.copy(O),r.update()}function vt(y){w.set(y.clientX,y.clientY),v.subVectors(w,R).multiplyScalar(r.panSpeed),I(v.x,v.y),R.copy(w),r.update()}function At(y){_t(y.clientX,y.clientY),y.deltaY<0?G(K(y.deltaY)):y.deltaY>0&&W(K(y.deltaY)),r.update()}function Pt(y){let ot=!1;switch(y.code){case r.keys.UP:y.ctrlKey||y.metaKey||y.shiftKey?B(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,r.keyPanSpeed),ot=!0;break;case r.keys.BOTTOM:y.ctrlKey||y.metaKey||y.shiftKey?B(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(0,-r.keyPanSpeed),ot=!0;break;case r.keys.LEFT:y.ctrlKey||y.metaKey||y.shiftKey?ut(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(r.keyPanSpeed,0),ot=!0;break;case r.keys.RIGHT:y.ctrlKey||y.metaKey||y.shiftKey?ut(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):I(-r.keyPanSpeed,0),ot=!0;break}ot&&(y.preventDefault(),r.update())}function qt(y){if(P.length===1)S.set(y.pageX,y.pageY);else{const ot=Se(y),xt=.5*(y.pageX+ot.x),wt=.5*(y.pageY+ot.y);S.set(xt,wt)}}function re(y){if(P.length===1)R.set(y.pageX,y.pageY);else{const ot=Se(y),xt=.5*(y.pageX+ot.x),wt=.5*(y.pageY+ot.y);R.set(xt,wt)}}function et(y){const ot=Se(y),xt=y.pageX-ot.x,wt=y.pageY-ot.y,zt=Math.sqrt(xt*xt+wt*wt);x.set(0,zt)}function te(y){r.enableZoom&&et(y),r.enablePan&&re(y)}function Wt(y){r.enableZoom&&et(y),r.enableRotate&&qt(y)}function Dt(y){if(P.length==1)_.set(y.pageX,y.pageY);else{const xt=Se(y),wt=.5*(y.pageX+xt.x),zt=.5*(y.pageY+xt.y);_.set(wt,zt)}E.subVectors(_,S).multiplyScalar(r.rotateSpeed);const ot=r.domElement;ut(2*Math.PI*E.x/ot.clientHeight),B(2*Math.PI*E.y/ot.clientHeight),S.copy(_)}function Et(y){if(P.length===1)w.set(y.pageX,y.pageY);else{const ot=Se(y),xt=.5*(y.pageX+ot.x),wt=.5*(y.pageY+ot.y);w.set(xt,wt)}v.subVectors(w,R).multiplyScalar(r.panSpeed),I(v.x,v.y),R.copy(w)}function Bt(y){const ot=Se(y),xt=y.pageX-ot.x,wt=y.pageY-ot.y,zt=Math.sqrt(xt*xt+wt*wt);O.set(0,zt),C.set(0,Math.pow(O.y/x.y,r.zoomSpeed)),W(C.y),x.copy(O);const ge=(y.pageX+ot.x)*.5,ue=(y.pageY+ot.y)*.5;_t(ge,ue)}function D(y){r.enableZoom&&Bt(y),r.enablePan&&Et(y)}function T(y){r.enableZoom&&Bt(y),r.enableRotate&&Dt(y)}function Y(y){r.enabled!==!1&&(P.length===0&&(r.domElement.setPointerCapture(y.pointerId),r.domElement.addEventListener("pointermove",$),r.domElement.addEventListener("pointerup",lt)),!xe(y)&&(pe(y),y.pointerType==="touch"?It(y):pt(y)))}function $(y){r.enabled!==!1&&(y.pointerType==="touch"?Ft(y):Ut(y))}function lt(y){switch(ce(y),P.length){case 0:r.domElement.releasePointerCapture(y.pointerId),r.domElement.removeEventListener("pointermove",$),r.domElement.removeEventListener("pointerup",lt),r.dispatchEvent(Q_),u=l.NONE;break;case 1:const ot=P[0],xt=it[ot];It({pointerId:ot,pageX:xt.x,pageY:xt.y});break}}function pt(y){let ot;switch(y.button){case 0:ot=r.mouseButtons.LEFT;break;case 1:ot=r.mouseButtons.MIDDLE;break;case 2:ot=r.mouseButtons.RIGHT;break;default:ot=-1}switch(ot){case Qr.DOLLY:if(r.enableZoom===!1)return;mt(y),u=l.DOLLY;break;case Qr.ROTATE:if(y.ctrlKey||y.metaKey||y.shiftKey){if(r.enablePan===!1)return;yt(y),u=l.PAN}else{if(r.enableRotate===!1)return;Z(y),u=l.ROTATE}break;case Qr.PAN:if(y.ctrlKey||y.metaKey||y.shiftKey){if(r.enableRotate===!1)return;Z(y),u=l.ROTATE}else{if(r.enablePan===!1)return;yt(y),u=l.PAN}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Sh)}function Ut(y){switch(u){case l.ROTATE:if(r.enableRotate===!1)return;X(y);break;case l.DOLLY:if(r.enableZoom===!1)return;ht(y);break;case l.PAN:if(r.enablePan===!1)return;vt(y);break}}function Mt(y){r.enabled===!1||r.enableZoom===!1||u!==l.NONE||(y.preventDefault(),r.dispatchEvent(Sh),At(Ot(y)),r.dispatchEvent(Q_))}function Ot(y){const ot=y.deltaMode,xt={clientX:y.clientX,clientY:y.clientY,deltaY:y.deltaY};switch(ot){case 1:xt.deltaY*=16;break;case 2:xt.deltaY*=100;break}return y.ctrlKey&&!N&&(xt.deltaY*=10),xt}function Rt(y){y.key==="Control"&&(N=!0,r.domElement.getRootNode().addEventListener("keyup",bt,{passive:!0,capture:!0}))}function bt(y){y.key==="Control"&&(N=!1,r.domElement.getRootNode().removeEventListener("keyup",bt,{passive:!0,capture:!0}))}function Ct(y){r.enabled===!1||r.enablePan===!1||Pt(y)}function It(y){switch(oe(y),P.length){case 1:switch(r.touches.ONE){case Jr.ROTATE:if(r.enableRotate===!1)return;qt(y),u=l.TOUCH_ROTATE;break;case Jr.PAN:if(r.enablePan===!1)return;re(y),u=l.TOUCH_PAN;break;default:u=l.NONE}break;case 2:switch(r.touches.TWO){case Jr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;te(y),u=l.TOUCH_DOLLY_PAN;break;case Jr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Wt(y),u=l.TOUCH_DOLLY_ROTATE;break;default:u=l.NONE}break;default:u=l.NONE}u!==l.NONE&&r.dispatchEvent(Sh)}function Ft(y){switch(oe(y),u){case l.TOUCH_ROTATE:if(r.enableRotate===!1)return;Dt(y),r.update();break;case l.TOUCH_PAN:if(r.enablePan===!1)return;Et(y),r.update();break;case l.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;D(y),r.update();break;case l.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;T(y),r.update();break;default:u=l.NONE}}function Ht(y){r.enabled!==!1&&y.preventDefault()}function pe(y){P.push(y.pointerId)}function ce(y){delete it[y.pointerId];for(let ot=0;ot<P.length;ot++)if(P[ot]==y.pointerId){P.splice(ot,1);return}}function xe(y){for(let ot=0;ot<P.length;ot++)if(P[ot]==y.pointerId)return!0;return!1}function oe(y){let ot=it[y.pointerId];ot===void 0&&(ot=new ee,it[y.pointerId]=ot),ot.set(y.pageX,y.pageY)}function Se(y){const ot=y.pointerId===P[0]?P[1]:P[0];return it[ot]}r.domElement.addEventListener("contextmenu",Ht),r.domElement.addEventListener("pointerdown",Y),r.domElement.addEventListener("pointercancel",lt),r.domElement.addEventListener("wheel",Mt,{passive:!1}),r.domElement.getRootNode().addEventListener("keydown",Rt,{passive:!0,capture:!0}),this.update()}}var Mh={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function AA(){if($_)return Uo;$_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Uo.Fragment=e,Uo.jsx=i,Uo.jsxs=i,Uo}var t0;function RA(){return t0||(t0=1,Mh.exports=AA()),Mh.exports}var se=RA(),Tn=10,bn=20,rn=1,I0=[0,16711680,65280,255,16776960,16711935,65535,16753920],CA={id:"I",matrix:[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],colorIndex:1},wA={id:"L",matrix:[[0,2,0],[0,2,0],[0,2,2]],colorIndex:2},DA={id:"J",matrix:[[0,3,0],[0,3,0],[3,3,0]],colorIndex:3},UA={id:"O",matrix:[[4,4],[4,4]],colorIndex:4},LA={id:"S",matrix:[[0,5,5],[5,5,0],[0,0,0]],colorIndex:5},NA={id:"Z",matrix:[[6,6,0],[0,6,6],[0,0,0]],colorIndex:6},OA={id:"T",matrix:[[0,7,0],[7,7,7],[0,0,0]],colorIndex:7},e0=[CA,wA,DA,UA,LA,NA,OA],yh=1e3,n0=50,PA=10,zA=o=>{const e=[o];let i=o;for(let r=0;r<3;r++){const l=i.length,u=Array(l).fill(null).map(()=>Array(l).fill(0));for(let d=0;d<l;d++)for(let h=0;h<l;h++)u[h][l-1-d]=i[d][h];e.push(u),i=u}return e},Eh=300,Th=()=>Array(bn).fill(null).map(()=>Array(Tn).fill(0)),BA=({gameState:o,setGameState:e,score:i,setScore:r,linesCleared:l,setLinesCleared:u,level:d,setLevel:h,nextPiecePreview:m,setNextPiecePreview:p,onGameOver:g,isAiActive:S})=>{const _=Kt.useRef(null),E=Kt.useRef(null),R=Kt.useRef(null),w=Kt.useRef(null),v=Kt.useRef(null),x=Kt.useRef(new EA),O=Kt.useRef(new _s),C=Kt.useRef(new _s),F=Kt.useRef(null),k=Kt.useRef([]),H=Kt.useRef(null),[P,it]=Kt.useState(Th()),[N,A]=Kt.useState(null),K=Kt.useRef(yh),ut=Kt.useRef(0),B=Kt.useRef(null),ft=Kt.useRef(Th()),st=Kt.useRef(!1),I=Kt.useRef(null),W=Kt.useRef(null),G=Kt.useRef(null),_t=75,U=Kt.useRef(null),Z=Kt.useRef([]),mt=Kt.useRef(!1),yt=Kt.useRef(null);Kt.useEffect(()=>{B.current=N},[N]),Kt.useEffect(()=>{ft.current=P},[P]);const X=Kt.useCallback(()=>{const Dt=Math.floor(Math.random()*e0.length),Et=e0[Dt],Bt=zA(Et.matrix.map(D=>D.map(T=>T>0?Et.colorIndex:0)));return{shape:Et,matrices:Bt,rotation:0,position:{row:0,col:Math.floor(Tn/2)-Math.floor(Bt[0][0].length/2)}}},[]),ht=Kt.useCallback((Dt,Et,Bt)=>{const D=Dt.matrices[Dt.rotation];for(let T=0;T<D.length;T++)for(let Y=0;Y<D[T].length;Y++)if(D[T][Y]!==0){const $=Et.row+T,lt=Et.col+Y;if($>=bn||lt<0||lt>=Tn||$>=0&&Bt[$]&&Bt[$][lt]!==0)return!0}return!1},[]);Kt.useEffect(()=>{const Dt=U.current;if(U.current=o,o===0){if(Dt===3||Dt===2||Dt===null){it(Th());const Et=X();A(Et),p&&p(X()),K.current=Math.max(100,yh-(d-1)*n0),mt.current=!1,Z.current=[]}ut.current=performance.now(),st.current=!1,W.current=null,I.current&&clearTimeout(I.current),G.current&&clearTimeout(G.current)}else(o===2||o===3||o===1)&&(o!==1&&A(null),st.current=!1,W.current=null,I.current&&clearTimeout(I.current),G.current&&clearTimeout(G.current),yt.current&&(clearTimeout(yt.current),yt.current=null),mt.current=!1,Z.current=[])},[o,d,X,p]);const vt=Kt.useCallback(Dt=>{if(!Dt){st.current=!1;return}if(mt.current)return;const Et=ft.current.map($=>[...$]);Dt.matrices[Dt.rotation].forEach(($,lt)=>{$.forEach((pt,Ut)=>{if(pt!==0){const Mt=Dt.position.row+lt,Ot=Dt.position.col+Ut;Mt>=0&&Mt<bn&&Ot>=0&&Ot<Tn&&(Et[Mt][Ot]=pt)}})});let D=!1;const T=Dt.matrices[Dt.rotation];for(let $=0;$<T.length;$++){for(let lt=0;lt<T[$].length;lt++)if(T[$][lt]!==0&&Dt.position.row+$<0){D=!0;break}if(D)break}if(D){g(),A(null),st.current=!1,W.current=null,G.current&&clearTimeout(G.current),yt.current&&clearTimeout(yt.current),mt.current=!1,Z.current=[];return}let Y=[];for(let $=bn-1;$>=0;$--)Et[$].every(lt=>lt!==0)&&Y.push($);if(it(Et),Y.length>0)Z.current=Y,mt.current=!0,A(null),yt.current&&clearTimeout(yt.current),yt.current=window.setTimeout(()=>{const $=ft.current.map(Mt=>[...Mt]);let lt=0;const pt=[...Z.current].sort((Mt,Ot)=>Ot-Mt);for(const Mt of pt)$.splice(Mt,1),$.unshift(Array(Tn).fill(0)),lt++;if(it($),lt>0){const Mt=l+lt;u(Mt),r(Rt=>Rt+lt*100*lt*d);const Ot=Math.floor(Mt/PA)+1;Ot>d&&(h(Ot),K.current=Math.max(100,yh-(Ot-1)*n0))}let Ut=null;m?(Ut=m,p&&p(X())):(Ut=X(),p&&p(X())),Ut&&ht(Ut,Ut.position,$)?g():A(Ut),Z.current=[],mt.current=!1,st.current=!1,W.current=null,G.current&&clearTimeout(G.current),ut.current=performance.now()},Eh);else{let $=null;m?($=m,p&&p(X())):($=X(),p&&p(X())),$&&ht($,$.position,Et)?(g(),A(null)):A($),st.current=!1,W.current=null,G.current&&clearTimeout(G.current)}},[m,X,u,r,h,d,l,g,p,ht,ft]),At=Kt.useCallback((Dt,Et)=>{if(!B.current||o!==0||mt.current)return!1;const Bt={row:B.current.position.row+Dt,col:B.current.position.col+Et};return ht(B.current,Bt,ft.current)?!1:(A(D=>D?{...D,position:Bt}:null),!0)},[ht,o,A]),Pt=Kt.useCallback(()=>{!B.current||o!==0||mt.current||At(1,0)||vt(B.current)},[At,vt,o]),qt=Kt.useCallback(()=>{if(!B.current||o!==0||mt.current)return;const Dt=(B.current.rotation+1)%B.current.matrices.length,Et={...B.current,rotation:Dt};if(!ht(Et,B.current.position,ft.current))A(Et);else{const Bt=[-1,1,-2,2];for(const D of Bt){const T={row:B.current.position.row,col:B.current.position.col+D};if(!ht(Et,T,ft.current)){A({...Et,position:T});return}}if(B.current.shape.id==="I"&&B.current.position.row<=1){const D={...B.current.position,row:B.current.position.row-1};if(!ht(Et,D,ft.current)){A({...Et,position:D});return}const T={...B.current.position,row:B.current.position.row-2};if(!ht(Et,T,ft.current)){A({...Et,position:T});return}}else if(B.current.position.row<=1){const D={...B.current.position,row:B.current.position.row-1};if(!ht(Et,D,ft.current)){A({...Et,position:D});return}}}},[ht,o,A]),re=Kt.useCallback(()=>{if(!B.current||o!==0||mt.current)return;let Dt={...B.current},Et={...Dt.position};for(;!ht(Dt,{row:Et.row+1,col:Et.col},ft.current);)Et.row++;const Bt={...B.current,position:Et};vt(Bt)},[o,ht,vt]);Kt.useEffect(()=>{const Dt=Et=>{if(!mt.current){if(S&&o===0){Et.preventDefault();return}if(o!==0||!B.current){Et.key===" "&&o===0&&!B.current&&!mt.current&&Et.preventDefault();return}switch(Et.key===" "&&Et.preventDefault(),Et.key){case"ArrowLeft":At(0,-1);break;case"ArrowRight":At(0,1);break;case"ArrowDown":ut.current=performance.now(),Pt();break;case"ArrowUp":case"x":case"X":qt();break;case" ":re();break}}};return window.addEventListener("keydown",Dt),()=>window.removeEventListener("keydown",Dt)},[o,At,Pt,qt,re,S]);const et=(Dt,Et,Bt)=>{let D=0,T=0;const Y=Dt.map(Rt=>[...Rt]),$=Et.matrices[Et.rotation];let lt=!1;if($.forEach((Rt,bt)=>{Rt.forEach((Ct,It)=>{if(Ct!==0){const Ft=Bt+bt,Ht=Et.position.col+It;Ft>=0&&Ft<bn&&Ht>=0&&Ht<Tn?Y[Ft][Ht]=Ct:Ft<0&&(lt=!0)}})}),lt)return-1/0;for(let Rt=bn-1;Rt>=0;)Y[Rt].every(bt=>bt!==0)?(T++,Y.splice(Rt,1),Y.unshift(Array(Tn).fill(0))):Rt--;D+=T*5e3;let pt=0;const Ut=Array(Tn).fill(0);for(let Rt=0;Rt<Tn;Rt++){for(let bt=0;bt<bn;bt++)if(Y[bt][Rt]!==0){Ut[Rt]=bn-bt;break}pt+=Ut[Rt]}D-=pt*10;let Mt=0;for(let Rt=0;Rt<Tn;Rt++){let bt=!1;for(let Ct=0;Ct<bn;Ct++)Y[Ct][Rt]!==0?bt=!0:bt&&Y[Ct][Rt]===0&&Mt++}D-=Mt*75;let Ot=0;for(let Rt=0;Rt<Tn-1;Rt++)Ot+=Math.abs(Ut[Rt]-Ut[Rt+1]);return D-=Ot*3,D},te=Kt.useCallback((Dt,Et)=>{let Bt=null;for(let D=0;D<Dt.matrices.length;D++){const T=Dt.matrices[D];let Y=T[0].length,$=-1,lt=!0;for(let pt=0;pt<T.length;++pt)for(let Ut=0;Ut<T[pt].length;++Ut)T[pt][Ut]!==0&&(lt=!1,Y=Math.min(Y,Ut),$=Math.max($,Ut));if(!lt)for(let pt=-Y;pt<=Tn-1-$;pt++){const Ut={...Dt,rotation:D,position:{row:0,col:pt}};let Mt=0;if(ht(Ut,{row:0,col:pt},Et)){let Ct=!1;for(let It=-1;It>=-3;It--)if(!ht(Ut,{row:It,col:pt},Et)){Mt=It,Ct=!0;break}if(!Ct&&ht(Ut,{row:0,col:pt},Et))continue}let Ot=Mt;for(;!ht(Ut,{row:Ot+1,col:pt},Et);)Ot++;const Rt=Ot,bt=et(Et,{...Ut,position:{row:Rt,col:pt}},Rt);(Bt===null||bt>Bt.score)&&(Bt={targetRotation:D,targetCol:pt,score:bt,finalRow:Rt})}}return Bt},[ht]),Wt=Kt.useCallback(()=>{if(G.current&&clearTimeout(G.current),!S||o!==0||!B.current||!W.current||mt.current){st.current=!1,W.current=null;return}const Dt=B.current,Et=W.current;let Bt=!1;if(Dt.rotation!==Et.targetRotation){const D={...Dt,rotation:Et.targetRotation};if(!ht(D,Dt.position,ft.current))A(D),Bt=!0;else{const T=[-1,1,-2,2];let Y=!1;for(const $ of T){const lt={...Dt.position,col:Dt.position.col+$};if(!ht(D,lt,ft.current)){A({...D,position:lt}),Bt=!0,Y=!0;break}}if(!Y&&(Dt.shape.id==="I"||Dt.shape.id==="L"||Dt.shape.id==="J")&&Dt.position.row<=1){const $=[-1,-2];for(const lt of $){const pt={...Dt.position,row:Dt.position.row+lt};if(!ht(D,pt,ft.current)){A({...D,position:pt}),Bt=!0,Y=!0;break}}}if(!Y){vt(B.current);return}}}else if(Dt.position.col!==Et.targetCol){const D=Et.targetCol>Dt.position.col?1:-1;if(At(0,D))Bt=!0;else{vt(B.current);return}}else if(Dt.position.row<Et.finalRow)if(At(1,0))Bt=!0;else{vt(B.current);return}else{vt(B.current);return}Bt&&st.current?G.current=window.setTimeout(Wt,_t):!Bt&&st.current&&vt(B.current)},[S,o,ht,At,vt,A,ft,_t]);return Kt.useEffect(()=>{if(mt.current){I.current&&clearTimeout(I.current),G.current&&clearTimeout(G.current),st.current=!1,W.current=null;return}if(S&&o===0&&B.current&&!st.current){st.current=!0,I.current&&clearTimeout(I.current);const Dt=K.current>0?Math.min(K.current/2,200):100;I.current=window.setTimeout(()=>{const Et=B.current,Bt=ft.current;if(!Et||!Bt||!S||o!==0||mt.current){st.current=!1;return}const D=te(Et,Bt);D?(W.current=D,Wt()):B.current?At(1,0)?st.current=!1:vt(B.current):st.current=!1},Dt)}return()=>{I.current&&clearTimeout(I.current)}},[S,o,N,te,Wt,vt,At]),Kt.useEffect(()=>{S||(I.current&&clearTimeout(I.current),G.current&&clearTimeout(G.current),st.current=!1,W.current=null)},[S]),Kt.useEffect(()=>{if(!_.current)return;E.current=new mA,E.current.background=new ye(2963272),R.current=new ii(75,_.current.clientWidth/_.current.clientHeight,.1,1e3),R.current.position.set(Tn*rn/2-rn/2,bn*rn/4,bn*rn*.75),w.current=new pA({antialias:!0}),w.current.setSize(_.current.clientWidth,_.current.clientHeight),w.current.setPixelRatio(window.devicePixelRatio),_.current.appendChild(w.current.domElement),v.current=new bA(R.current,w.current.domElement),v.current.target.set(Tn*rn/2-rn/2,bn*rn/2-rn/2,0),v.current.enablePan=!0,v.current.enableZoom=!0;const Dt=new yA(16777215,.6);E.current.add(Dt);const Et=new MA(16777215,.8);Et.position.set(5,10,7.5),E.current.add(Et),E.current.add(O.current),E.current.add(C.current);const Bt=new mr(Tn*rn,bn*rn,rn),D=new vA(Bt),T=new z0({color:11184810}),Y=new _A(D,T);Y.position.set((Tn/2-.5)*rn,(bn/2-.5)*rn,-1/2),E.current.add(Y),F.current||(F.current=new mr(rn*.95,rn*.95,rn*.95)),k.current.length===0&&I0.forEach(lt=>{k.current.push(new W_({color:lt}))}),H.current||(H.current=new W_({color:16777215,emissive:15658734,emissiveIntensity:1,transparent:!0,opacity:1}));const $=()=>{R.current&&w.current&&_.current&&(R.current.aspect=_.current.clientWidth/_.current.clientHeight,R.current.updateProjectionMatrix(),w.current.setSize(_.current.clientWidth,_.current.clientHeight))};return window.addEventListener("resize",$),x.current.start(),()=>{window.removeEventListener("resize",$),w.current&&w.current.dispose(),_.current&&w.current&&_.current.contains(w.current.domElement)&&_.current.removeChild(w.current.domElement),v.current&&v.current.dispose(),F.current&&(F.current.dispose(),F.current=null),k.current.forEach(lt=>lt.dispose()),k.current=[],H.current&&(H.current.dispose(),H.current=null),Bt.dispose(),T.dispose(),x.current.stop(),I.current&&clearTimeout(I.current),G.current&&clearTimeout(G.current),yt.current&&clearTimeout(yt.current)}},[]),Kt.useEffect(()=>{if(!E.current||!R.current||!w.current||!F.current||k.current.length===0)return;let Dt;const Et=Bt=>{for(Dt=requestAnimationFrame(Et),o===0&&B.current&&!S&&!mt.current&&Bt-ut.current>K.current&&(Pt(),ut.current=Bt);O.current.children.length>0;)O.current.remove(O.current.children[0]);for(;C.current.children.length>0;)C.current.remove(C.current.children[0]);if(ft.current.forEach((D,T)=>{D.forEach((Y,$)=>{if(Y!==0&&Y<k.current.length){let lt=k.current[Y];if(mt.current&&Z.current.includes(T)&&H.current){lt=H.current;const Ut=performance.now()%(Eh/1.5)/(Eh/1.5),Mt=Math.sin(Ut*Math.PI)*.4+.6;H.current.emissiveIntensity=Mt,H.current.opacity=Mt}const pt=new mi(F.current,lt);pt.position.set($*rn,(bn-1-T)*rn,0),O.current.add(pt)}})}),B.current){const D=B.current;D.matrices[D.rotation].forEach((Y,$)=>{Y.forEach((lt,pt)=>{if(lt!==0&&lt<k.current.length){const Ut=k.current[lt],Mt=new mi(F.current,Ut);Mt.position.set((D.position.col+pt)*rn,(bn-1-(D.position.row+$))*rn,0),C.current.add(Mt)}})})}v.current&&v.current.update(),w.current.render(E.current,R.current)};return Dt=requestAnimationFrame(Et),()=>cancelAnimationFrame(Dt)},[o,Pt,S]),se.jsx("div",{ref:_,className:"w-full h-full"})},IA=BA,FA=()=>{const[o,e]=Kt.useState(3),[i,r]=Kt.useState(0),[l,u]=Kt.useState(0),[d,h]=Kt.useState(1),[m,p]=Kt.useState(null),[g,S]=Kt.useState(!1),_=()=>{r(0),u(0),h(1),p(null),e(0)},E=()=>{o===0&&e(1)},R=()=>{o===1&&e(0)},w=Kt.useCallback(()=>{e(2)},[]),v=({piece:x})=>{if(!x)return se.jsx("div",{className:"w-24 h-24 border border-gray-600 bg-gray-800 flex items-center justify-center text-xs rounded",children:"미리보기 없음"});const O=x.matrices[x.rotation];let C=O.length,F=-1,k=O[0].length,H=-1,P=!1;if(O.forEach((K,ut)=>{K.forEach((B,ft)=>{B!==0&&(P=!0,C=Math.min(C,ut),F=Math.max(F,ut),k=Math.min(k,ft),H=Math.max(H,ft))})}),!P)return se.jsx("div",{className:"w-24 h-24 border border-gray-600 bg-gray-800 flex items-center justify-center text-xs rounded",children:"미리보기 없음"});const it=F-C+1,N=H-k+1,A=4;return se.jsx("div",{className:"grid grid-cols-4 gap-0.5 p-1 border border-gray-600 bg-gray-700 rounded",style:{width:"6rem",height:"6rem"},children:Array(A*A).fill(0).map((K,ut)=>{const B=Math.floor(ut/A),ft=Math.floor(ut%A),st=Math.floor((A-it)/2),I=Math.floor((A-N)/2),W=B-st,G=ft-I;let _t=0;W>=0&&W<it&&G>=0&&G<N&&O[W+C]&&O[W+C][G+k]!==0&&(_t=O[W+C][G+k]);const U=_t?I0[_t]:"transparent",mt={backgroundColor:typeof U=="number"?`#${U.toString(16).padStart(6,"0")}`:U};return se.jsx("div",{className:"w-full h-full",style:mt},ut)})})};return se.jsxs("div",{className:"flex flex-col w-screen h-screen bg-gray-900 text-white p-2 md:p-4 gap-2 items-center justify-start overflow-hidden",children:[se.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-center w-full shrink-0 my-1 md:my-2",children:"테트리스 AI 마스터 3D"}),se.jsxs("div",{className:"flex flex-col items-center shrink-0 my-1 md:my-2",children:[se.jsx("h3",{className:"text-lg md:text-xl font-semibold mb-1 md:mb-2 text-center",children:"다음 조각:"}),se.jsx(v,{piece:m})]}),se.jsxs("div",{className:"flex flex-col md:flex-row w-full flex-grow items-stretch gap-4 min-h-0",children:[se.jsxs("div",{className:"flex-grow relative w-full md:w-3/4 min-h-0 order-1",children:[o===2&&se.jsxs("div",{className:"absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-10",children:[se.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-red-500",children:"게임 종료"}),se.jsxs("p",{className:"text-lg md:text-xl mt-2",children:["점수: ",i]}),se.jsx("button",{onClick:_,className:"mt-6 md:mt-8 px-5 py-2 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg md:text-xl font-semibold transition-colors",children:"다시 시작"})]}),o===3&&se.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-10",children:se.jsx("button",{onClick:_,className:"px-6 py-3 md:px-8 md:py-4 bg-green-600 hover:bg-green-700 rounded-lg text-xl md:text-2xl font-semibold transition-colors",children:"게임 시작"})}),se.jsx(IA,{gameState:o,setGameState:e,score:i,setScore:r,linesCleared:l,setLinesCleared:u,level:d,setLevel:h,nextPiecePreview:m,setNextPiecePreview:p,onGameOver:w,isAiActive:g})]}),se.jsxs("div",{className:"w-full md:w-1/4 p-3 md:p-4 bg-gray-800 rounded-lg shadow-xl flex flex-col gap-3 items-stretch overflow-y-auto order-2 min-h-0",children:[se.jsxs("div",{className:"flex flex-row gap-2 justify-start items-center mb-1 md:mb-2 w-full",children:[o===0&&se.jsx("button",{onClick:E,className:"px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-yellow-500 hover:bg-yellow-600 rounded text-black font-semibold transition-colors",children:"일시정지"}),o===1&&se.jsx("button",{onClick:R,className:"px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-green-500 hover:bg-green-600 rounded text-white font-semibold transition-colors",children:"계속하기"}),(o===0||o===1||o===2)&&se.jsx("button",{onClick:_,className:"px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base bg-red-600 hover:bg-red-700 rounded text-white font-semibold transition-colors",children:"게임 재시작"})]}),se.jsxs("div",{className:"flex items-center justify-start gap-3 mt-2 md:mt-1",children:[" ",se.jsx("label",{htmlFor:"ai-toggle",className:"text-sm md:text-base text-gray-300",children:"AI 위임:"}),se.jsx("button",{id:"ai-toggle",onClick:()=>S(x=>!x),disabled:o!==0&&o!==1,className:`w-20 px-3 py-1 rounded text-white font-semibold text-sm transition-colors text-center ${g?"bg-blue-500 hover:bg-blue-600":"bg-gray-600 hover:bg-gray-500"} ${o!==0&&o!==1?"opacity-50 cursor-not-allowed":""}`,"aria-pressed":g,children:g?"ON":"OFF"})]}),se.jsxs("div",{className:"w-full text-sm md:text-lg mt-2 md:mt-1",children:[se.jsxs("p",{children:[se.jsx("span",{className:"font-semibold",children:"점수:"})," ",i]}),se.jsxs("p",{children:[se.jsx("span",{className:"font-semibold",children:"줄 수:"})," ",l]}),se.jsxs("p",{children:[se.jsx("span",{className:"font-semibold",children:"레벨:"})," ",d]})]}),se.jsxs("div",{className:"text-xs md:text-sm text-gray-400 w-full mt-2 md:mt-3",children:[se.jsx("h3",{className:"font-semibold text-gray-300 md:text-gray-200",children:"조작법:"}),se.jsx("p",{children:"화살표: 이동"}),se.jsx("p",{children:"위 화살표 / X: 회전"}),se.jsx("p",{children:"스페이스바: 빠른 내림"}),se.jsx("p",{children:"마우스: 카메라 회전"}),g&&se.jsx("p",{className:"text-yellow-400 mt-1",children:"AI 위임 활성됨 (수동 조작 비활성화)"})]})]})]})]})},HA=FA,F0=document.getElementById("root");if(!F0)throw new Error("Could not find root element to mount to");var GA=Jx.createRoot(F0);GA.render(se.jsx(Xx.StrictMode,{children:se.jsx(HA,{})}));
