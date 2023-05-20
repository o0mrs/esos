function Xv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Rh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ti={},Jv={get exports(){return Ti},set exports(t){Ti=t}},Lo={},R={},Zv={get exports(){return R},set exports(t){R=t}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var es=Symbol.for("react.element"),ey=Symbol.for("react.portal"),ty=Symbol.for("react.fragment"),ny=Symbol.for("react.strict_mode"),ry=Symbol.for("react.profiler"),iy=Symbol.for("react.provider"),sy=Symbol.for("react.context"),oy=Symbol.for("react.forward_ref"),ly=Symbol.for("react.suspense"),ay=Symbol.for("react.memo"),uy=Symbol.for("react.lazy"),pd=Symbol.iterator;function cy(t){return t===null||typeof t!="object"?null:(t=pd&&t[pd]||t["@@iterator"],typeof t=="function"?t:null)}var Oh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ah=Object.assign,Dh={};function Ur(t,e,n){this.props=t,this.context=e,this.refs=Dh,this.updater=n||Oh}Ur.prototype.isReactComponent={};Ur.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ur.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Mh(){}Mh.prototype=Ur.prototype;function Iu(t,e,n){this.props=t,this.context=e,this.refs=Dh,this.updater=n||Oh}var Nu=Iu.prototype=new Mh;Nu.constructor=Iu;Ah(Nu,Ur.prototype);Nu.isPureReactComponent=!0;var md=Array.isArray,bh=Object.prototype.hasOwnProperty,Pu={current:null},Lh={key:!0,ref:!0,__self:!0,__source:!0};function Fh(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bh.call(e,r)&&!Lh.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:es,type:t,key:s,ref:o,props:i,_owner:Pu.current}}function dy(t,e){return{$$typeof:es,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ru(t){return typeof t=="object"&&t!==null&&t.$$typeof===es}function fy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var gd=/\/+/g;function pl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fy(""+t.key):e.toString(36)}function As(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case es:case ey:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+pl(o,0):r,md(i)?(n="",t!=null&&(n=t.replace(gd,"$&/")+"/"),As(i,e,n,"",function(u){return u})):i!=null&&(Ru(i)&&(i=dy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",md(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+pl(s,l);o+=As(s,e,n,a,i)}else if(a=cy(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+pl(s,l++),o+=As(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function hs(t,e,n){if(t==null)return t;var r=[],i=0;return As(t,r,"","",function(s){return e.call(n,s,i++)}),r}function hy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ve={current:null},Ds={transition:null},py={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Ds,ReactCurrentOwner:Pu};q.Children={map:hs,forEach:function(t,e,n){hs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return hs(t,function(){e++}),e},toArray:function(t){return hs(t,function(e){return e})||[]},only:function(t){if(!Ru(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=Ur;q.Fragment=ty;q.Profiler=ry;q.PureComponent=Iu;q.StrictMode=ny;q.Suspense=ly;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=py;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ah({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Pu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)bh.call(e,a)&&!Lh.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:es,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:sy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iy,_context:t},t.Consumer=t};q.createElement=Fh;q.createFactory=function(t){var e=Fh.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:oy,render:t}};q.isValidElement=Ru;q.lazy=function(t){return{$$typeof:uy,_payload:{_status:-1,_result:t},_init:hy}};q.memo=function(t,e){return{$$typeof:ay,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Ds.transition;Ds.transition={};try{t()}finally{Ds.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return Ve.current.useCallback(t,e)};q.useContext=function(t){return Ve.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return Ve.current.useDeferredValue(t)};q.useEffect=function(t,e){return Ve.current.useEffect(t,e)};q.useId=function(){return Ve.current.useId()};q.useImperativeHandle=function(t,e,n){return Ve.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return Ve.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return Ve.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return Ve.current.useMemo(t,e)};q.useReducer=function(t,e,n){return Ve.current.useReducer(t,e,n)};q.useRef=function(t){return Ve.current.useRef(t)};q.useState=function(t){return Ve.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return Ve.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return Ve.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(Zv);const my=Rh(R),oa=Xv({__proto__:null,default:my},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy=R,vy=Symbol.for("react.element"),yy=Symbol.for("react.fragment"),_y=Object.prototype.hasOwnProperty,wy=gy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sy={key:!0,ref:!0,__self:!0,__source:!0};function zh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)_y.call(e,r)&&!Sy.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vy,type:t,key:s,ref:o,props:i,_owner:wy.current}}Lo.Fragment=yy;Lo.jsx=zh;Lo.jsxs=zh;(function(t){t.exports=Lo})(Jv);const dt=Ti.Fragment,S=Ti.jsx,H=Ti.jsxs;var la={},aa={},Ey={get exports(){return aa},set exports(t){aa=t}},ot={},ua={},Cy={get exports(){return ua},set exports(t){ua=t}},jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,z){var V=O.length;O.push(z);e:for(;0<V;){var se=V-1>>>1,k=O[se];if(0<i(k,z))O[se]=z,O[V]=k,V=se;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var z=O[0],V=O.pop();if(V!==z){O[0]=V;e:for(var se=0,k=O.length,L=k>>>1;se<L;){var W=2*(se+1)-1,Q=O[W],U=W+1,y=O[U];if(0>i(Q,V))U<k&&0>i(y,Q)?(O[se]=y,O[U]=V,se=U):(O[se]=Q,O[W]=V,se=W);else if(U<k&&0>i(y,V))O[se]=y,O[U]=V,se=U;else break e}}return z}function i(O,z){var V=O.sortIndex-z.sortIndex;return V!==0?V:O.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,f=3,g=!1,v=!1,_=!1,b=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=O)r(u),z.sortIndex=z.expirationTime,e(a,z);else break;z=n(u)}}function w(O){if(_=!1,m(O),!v)if(n(a)!==null)v=!0,Ze(E);else{var z=n(u);z!==null&&en(w,z.startTime-O)}}function E(O,z){v=!1,_&&(_=!1,p(P),P=-1),g=!0;var V=f;try{for(m(z),d=n(a);d!==null&&(!(d.expirationTime>z)||O&&!ge());){var se=d.callback;if(typeof se=="function"){d.callback=null,f=d.priorityLevel;var k=se(d.expirationTime<=z);z=t.unstable_now(),typeof k=="function"?d.callback=k:d===n(a)&&r(a),m(z)}else r(a);d=n(a)}if(d!==null)var L=!0;else{var W=n(u);W!==null&&en(w,W.startTime-z),L=!1}return L}finally{d=null,f=V,g=!1}}var I=!1,x=null,P=-1,X=5,B=-1;function ge(){return!(t.unstable_now()-B<X)}function Pe(){if(x!==null){var O=t.unstable_now();B=O;var z=!0;try{z=x(!0,O)}finally{z?Je():(I=!1,x=null)}}else I=!1}var Je;if(typeof h=="function")Je=function(){h(Pe)};else if(typeof MessageChannel<"u"){var Jt=new MessageChannel,Zt=Jt.port2;Jt.port1.onmessage=Pe,Je=function(){Zt.postMessage(null)}}else Je=function(){b(Pe,0)};function Ze(O){x=O,I||(I=!0,Je())}function en(O,z){P=b(function(){O(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Ze(E))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var V=f;f=z;try{return O()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=f;f=O;try{return z()}finally{f=V}},t.unstable_scheduleCallback=function(O,z,V){var se=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?se+V:se):V=se,O){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=V+k,O={id:c++,callback:z,priorityLevel:O,startTime:V,expirationTime:k,sortIndex:-1},V>se?(O.sortIndex=V,e(u,O),n(a)===null&&O===n(u)&&(_?(p(P),P=-1):_=!0,en(w,V-se))):(O.sortIndex=k,e(a,O),v||g||(v=!0,Ze(E))),O},t.unstable_shouldYield=ge,t.unstable_wrapCallback=function(O){var z=f;return function(){var V=f;f=z;try{return O.apply(this,arguments)}finally{f=V}}}})(jh);(function(t){t.exports=jh})(Cy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bh=R,st=ua;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uh=new Set,Ii={};function er(t,e){Rr(t,e),Rr(t+"Capture",e)}function Rr(t,e){for(Ii[t]=e,t=0;t<e.length;t++)Uh.add(e[t])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ca=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},yd={};function xy(t){return ca.call(yd,t)?!0:ca.call(vd,t)?!1:ky.test(t)?yd[t]=!0:(vd[t]=!0,!1)}function Ty(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Iy(t,e,n,r){if(e===null||typeof e>"u"||Ty(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new He(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new He(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new He(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new He(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new He(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new He(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new He(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new He(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new He(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ou=/[\-:]([a-z])/g;function Au(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ou,Au);Ae[e]=new He(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ou,Au);Ae[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ou,Au);Ae[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new He(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new He(t,1,!1,t.toLowerCase(),null,!0,!0)});function Du(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Iy(e,n,i,r)&&(n=null),r||i===null?xy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=Bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ps=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),Mu=Symbol.for("react.strict_mode"),da=Symbol.for("react.profiler"),Vh=Symbol.for("react.provider"),Hh=Symbol.for("react.context"),bu=Symbol.for("react.forward_ref"),fa=Symbol.for("react.suspense"),ha=Symbol.for("react.suspense_list"),Lu=Symbol.for("react.memo"),nn=Symbol.for("react.lazy"),Wh=Symbol.for("react.offscreen"),_d=Symbol.iterator;function Yr(t){return t===null||typeof t!="object"?null:(t=_d&&t[_d]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,ml;function ai(t){if(ml===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ml=e&&e[1]||""}return`
`+ml+t}var gl=!1;function vl(t,e){if(!t||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ai(t):""}function Ny(t){switch(t.tag){case 5:return ai(t.type);case 16:return ai("Lazy");case 13:return ai("Suspense");case 19:return ai("SuspenseList");case 0:case 2:case 15:return t=vl(t.type,!1),t;case 11:return t=vl(t.type.render,!1),t;case 1:return t=vl(t.type,!0),t;default:return""}}function pa(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case da:return"Profiler";case Mu:return"StrictMode";case fa:return"Suspense";case ha:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hh:return(t.displayName||"Context")+".Consumer";case Vh:return(t._context.displayName||"Context")+".Provider";case bu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Lu:return e=t.displayName||null,e!==null?e:pa(t.type)||"Memo";case nn:e=t._payload,t=t._init;try{return pa(t(e))}catch{}}return null}function Py(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(e);case 8:return e===Mu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $h(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ry(t){var e=$h(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ms(t){t._valueTracker||(t._valueTracker=Ry(t))}function Kh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$h(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ws(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ma(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gh(t,e){e=e.checked,e!=null&&Du(t,"checked",e,!1)}function ga(t,e){Gh(t,e);var n=wn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?va(t,e.type,n):e.hasOwnProperty("defaultValue")&&va(t,e.type,wn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Sd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function va(t,e,n){(e!=="number"||Ws(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ui=Array.isArray;function wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ya(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ed(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ui(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wn(n)}}function Qh(t,e){var n=wn(e.value),r=wn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _a(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var gs,Yh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=gs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ni(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oy=["Webkit","ms","Moz","O"];Object.keys(hi).forEach(function(t){Oy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),hi[e]=hi[t]})});function Xh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||hi.hasOwnProperty(t)&&hi[t]?(""+e).trim():e+"px"}function Jh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Xh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ay=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wa(t,e){if(e){if(Ay[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Sa(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=null;function Fu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ca=null,Sr=null,Er=null;function kd(t){if(t=rs(t)){if(typeof Ca!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Uo(e),Ca(t.stateNode,t.type,e))}}function Zh(t){Sr?Er?Er.push(t):Er=[t]:Sr=t}function ep(){if(Sr){var t=Sr,e=Er;if(Er=Sr=null,kd(t),e)for(t=0;t<e.length;t++)kd(e[t])}}function tp(t,e){return t(e)}function np(){}var yl=!1;function rp(t,e,n){if(yl)return t(e,n);yl=!0;try{return tp(t,e,n)}finally{yl=!1,(Sr!==null||Er!==null)&&(np(),ep())}}function Pi(t,e){var n=t.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var ka=!1;if(Ht)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ka=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ka=!1}function Dy(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var pi=!1,$s=null,Ks=!1,xa=null,My={onError:function(t){pi=!0,$s=t}};function by(t,e,n,r,i,s,o,l,a){pi=!1,$s=null,Dy.apply(My,arguments)}function Ly(t,e,n,r,i,s,o,l,a){if(by.apply(this,arguments),pi){if(pi){var u=$s;pi=!1,$s=null}else throw Error(T(198));Ks||(Ks=!0,xa=u)}}function tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ip(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xd(t){if(tr(t)!==t)throw Error(T(188))}function Fy(t){var e=t.alternate;if(!e){if(e=tr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xd(i),t;if(s===r)return xd(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function sp(t){return t=Fy(t),t!==null?op(t):null}function op(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=op(t);if(e!==null)return e;t=t.sibling}return null}var lp=st.unstable_scheduleCallback,Td=st.unstable_cancelCallback,zy=st.unstable_shouldYield,jy=st.unstable_requestPaint,ve=st.unstable_now,By=st.unstable_getCurrentPriorityLevel,zu=st.unstable_ImmediatePriority,ap=st.unstable_UserBlockingPriority,Gs=st.unstable_NormalPriority,Uy=st.unstable_LowPriority,up=st.unstable_IdlePriority,Fo=null,Pt=null;function Vy(t){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Fo,t,void 0,(t.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:$y,Hy=Math.log,Wy=Math.LN2;function $y(t){return t>>>=0,t===0?32:31-(Hy(t)/Wy|0)|0}var vs=64,ys=4194304;function ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=ci(l):(s&=o,s!==0&&(r=ci(s)))}else o=n&~i,o!==0?r=ci(o):s!==0&&(r=ci(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Et(e),i=1<<n,r|=t[n],e&=~i;return r}function Ky(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gy(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Et(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Ky(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Ta(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function cp(){var t=vs;return vs<<=1,!(vs&4194240)&&(vs=64),t}function _l(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ts(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Et(e),t[e]=n}function Qy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Et(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ju(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Et(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ee=0;function dp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var fp,Bu,hp,pp,mp,Ia=!1,_s=[],cn=null,dn=null,fn=null,Ri=new Map,Oi=new Map,sn=[],qy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(t,e){switch(t){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Ri.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(e.pointerId)}}function Jr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=rs(e),e!==null&&Bu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Yy(t,e,n,r,i){switch(e){case"focusin":return cn=Jr(cn,t,e,n,r,i),!0;case"dragenter":return dn=Jr(dn,t,e,n,r,i),!0;case"mouseover":return fn=Jr(fn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ri.set(s,Jr(Ri.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Oi.set(s,Jr(Oi.get(s)||null,t,e,n,r,i)),!0}return!1}function gp(t){var e=An(t.target);if(e!==null){var n=tr(e);if(n!==null){if(e=n.tag,e===13){if(e=ip(n),e!==null){t.blockedOn=e,mp(t.priority,function(){hp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ms(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Na(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ea=r,n.target.dispatchEvent(r),Ea=null}else return e=rs(n),e!==null&&Bu(e),t.blockedOn=n,!1;e.shift()}return!0}function Nd(t,e,n){Ms(t)&&n.delete(e)}function Xy(){Ia=!1,cn!==null&&Ms(cn)&&(cn=null),dn!==null&&Ms(dn)&&(dn=null),fn!==null&&Ms(fn)&&(fn=null),Ri.forEach(Nd),Oi.forEach(Nd)}function Zr(t,e){t.blockedOn===e&&(t.blockedOn=null,Ia||(Ia=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Xy)))}function Ai(t){function e(i){return Zr(i,t)}if(0<_s.length){Zr(_s[0],t);for(var n=1;n<_s.length;n++){var r=_s[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cn!==null&&Zr(cn,t),dn!==null&&Zr(dn,t),fn!==null&&Zr(fn,t),Ri.forEach(e),Oi.forEach(e),n=0;n<sn.length;n++)r=sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sn.length&&(n=sn[0],n.blockedOn===null);)gp(n),n.blockedOn===null&&sn.shift()}var Cr=qt.ReactCurrentBatchConfig,qs=!0;function Jy(t,e,n,r){var i=ee,s=Cr.transition;Cr.transition=null;try{ee=1,Uu(t,e,n,r)}finally{ee=i,Cr.transition=s}}function Zy(t,e,n,r){var i=ee,s=Cr.transition;Cr.transition=null;try{ee=4,Uu(t,e,n,r)}finally{ee=i,Cr.transition=s}}function Uu(t,e,n,r){if(qs){var i=Na(t,e,n,r);if(i===null)Pl(t,e,r,Ys,n),Id(t,r);else if(Yy(i,t,e,n,r))r.stopPropagation();else if(Id(t,r),e&4&&-1<qy.indexOf(t)){for(;i!==null;){var s=rs(i);if(s!==null&&fp(s),s=Na(t,e,n,r),s===null&&Pl(t,e,r,Ys,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pl(t,e,r,null,n)}}var Ys=null;function Na(t,e,n,r){if(Ys=null,t=Fu(r),t=An(t),t!==null)if(e=tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ip(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ys=t,null}function vp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(By()){case zu:return 1;case ap:return 4;case Gs:case Uy:return 16;case up:return 536870912;default:return 16}default:return 16}}var ln=null,Vu=null,bs=null;function yp(){if(bs)return bs;var t,e=Vu,n=e.length,r,i="value"in ln?ln.value:ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return bs=i.slice(t,1<r?1-r:void 0)}function Ls(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ws(){return!0}function Pd(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ws:Pd,this.isPropagationStopped=Pd,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),e}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=lt(Vr),ns=he({},Vr,{view:0,detail:0}),e0=lt(ns),wl,Sl,ei,zo=he({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ei&&(ei&&t.type==="mousemove"?(wl=t.screenX-ei.screenX,Sl=t.screenY-ei.screenY):Sl=wl=0,ei=t),wl)},movementY:function(t){return"movementY"in t?t.movementY:Sl}}),Rd=lt(zo),t0=he({},zo,{dataTransfer:0}),n0=lt(t0),r0=he({},ns,{relatedTarget:0}),El=lt(r0),i0=he({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),s0=lt(i0),o0=he({},Vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l0=lt(o0),a0=he({},Vr,{data:0}),Od=lt(a0),u0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=d0[t])?!!e[t]:!1}function Wu(){return f0}var h0=he({},ns,{key:function(t){if(t.key){var e=u0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ls(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?c0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wu,charCode:function(t){return t.type==="keypress"?Ls(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ls(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),p0=lt(h0),m0=he({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=lt(m0),g0=he({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wu}),v0=lt(g0),y0=he({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_0=lt(y0),w0=he({},zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S0=lt(w0),E0=[9,13,27,32],$u=Ht&&"CompositionEvent"in window,mi=null;Ht&&"documentMode"in document&&(mi=document.documentMode);var C0=Ht&&"TextEvent"in window&&!mi,_p=Ht&&(!$u||mi&&8<mi&&11>=mi),Dd=String.fromCharCode(32),Md=!1;function wp(t,e){switch(t){case"keyup":return E0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function k0(t,e){switch(t){case"compositionend":return Sp(e);case"keypress":return e.which!==32?null:(Md=!0,Dd);case"textInput":return t=e.data,t===Dd&&Md?null:t;default:return null}}function x0(t,e){if(ar)return t==="compositionend"||!$u&&wp(t,e)?(t=yp(),bs=Vu=ln=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return _p&&e.locale!=="ko"?null:e.data;default:return null}}var T0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T0[t.type]:e==="textarea"}function Ep(t,e,n,r){Zh(r),e=Xs(e,"onChange"),0<e.length&&(n=new Hu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var gi=null,Di=null;function I0(t){Dp(t,0)}function jo(t){var e=dr(t);if(Kh(e))return t}function N0(t,e){if(t==="change")return e}var Cp=!1;if(Ht){var Cl;if(Ht){var kl="oninput"in document;if(!kl){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),kl=typeof Ld.oninput=="function"}Cl=kl}else Cl=!1;Cp=Cl&&(!document.documentMode||9<document.documentMode)}function Fd(){gi&&(gi.detachEvent("onpropertychange",kp),Di=gi=null)}function kp(t){if(t.propertyName==="value"&&jo(Di)){var e=[];Ep(e,Di,t,Fu(t)),rp(I0,e)}}function P0(t,e,n){t==="focusin"?(Fd(),gi=e,Di=n,gi.attachEvent("onpropertychange",kp)):t==="focusout"&&Fd()}function R0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Di)}function O0(t,e){if(t==="click")return jo(e)}function A0(t,e){if(t==="input"||t==="change")return jo(e)}function D0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xt=typeof Object.is=="function"?Object.is:D0;function Mi(t,e){if(xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ca.call(e,i)||!xt(t[i],e[i]))return!1}return!0}function zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jd(t,e){var n=zd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zd(n)}}function xp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tp(){for(var t=window,e=Ws();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ws(t.document)}return e}function Ku(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function M0(t){var e=Tp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xp(n.ownerDocument.documentElement,n)){if(r!==null&&Ku(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jd(n,s);var o=jd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var b0=Ht&&"documentMode"in document&&11>=document.documentMode,ur=null,Pa=null,vi=null,Ra=!1;function Bd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||ur==null||ur!==Ws(r)||(r=ur,"selectionStart"in r&&Ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vi&&Mi(vi,r)||(vi=r,r=Xs(Pa,"onSelect"),0<r.length&&(e=new Hu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function Ss(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionend:Ss("Transition","TransitionEnd")},xl={},Ip={};Ht&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Bo(t){if(xl[t])return xl[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ip)return xl[t]=e[n];return t}var Np=Bo("animationend"),Pp=Bo("animationiteration"),Rp=Bo("animationstart"),Op=Bo("transitionend"),Ap=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xn(t,e){Ap.set(t,e),er(e,[t])}for(var Tl=0;Tl<Ud.length;Tl++){var Il=Ud[Tl],L0=Il.toLowerCase(),F0=Il[0].toUpperCase()+Il.slice(1);xn(L0,"on"+F0)}xn(Np,"onAnimationEnd");xn(Pp,"onAnimationIteration");xn(Rp,"onAnimationStart");xn("dblclick","onDoubleClick");xn("focusin","onFocus");xn("focusout","onBlur");xn(Op,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function Vd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ly(r,e,void 0,t),t.currentTarget=null}function Dp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Vd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Vd(i,l,u),s=a}}}if(Ks)throw t=xa,Ks=!1,xa=null,t}function oe(t,e){var n=e[ba];n===void 0&&(n=e[ba]=new Set);var r=t+"__bubble";n.has(r)||(Mp(e,t,2,!1),n.add(r))}function Nl(t,e,n){var r=0;e&&(r|=4),Mp(n,t,r,e)}var Es="_reactListening"+Math.random().toString(36).slice(2);function bi(t){if(!t[Es]){t[Es]=!0,Uh.forEach(function(n){n!=="selectionchange"&&(z0.has(n)||Nl(n,!1,t),Nl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Es]||(e[Es]=!0,Nl("selectionchange",!1,e))}}function Mp(t,e,n,r){switch(vp(e)){case 1:var i=Jy;break;case 4:i=Zy;break;default:i=Uu}n=i.bind(null,e,n,t),i=void 0,!ka||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=An(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}rp(function(){var u=s,c=Fu(n),d=[];e:{var f=Ap.get(t);if(f!==void 0){var g=Hu,v=t;switch(t){case"keypress":if(Ls(n)===0)break e;case"keydown":case"keyup":g=p0;break;case"focusin":v="focus",g=El;break;case"focusout":v="blur",g=El;break;case"beforeblur":case"afterblur":g=El;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=n0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=v0;break;case Np:case Pp:case Rp:g=s0;break;case Op:g=_0;break;case"scroll":g=e0;break;case"wheel":g=S0;break;case"copy":case"cut":case"paste":g=l0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ad}var _=(e&4)!==0,b=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Pi(h,p),w!=null&&_.push(Li(h,w,m)))),b)break;h=h.return}0<_.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Ea&&(v=n.relatedTarget||n.fromElement)&&(An(v)||v[Wt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?An(v):null,v!==null&&(b=tr(v),v!==b||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Rd,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=Ad,w="onPointerLeave",p="onPointerEnter",h="pointer"),b=g==null?f:dr(g),m=v==null?f:dr(v),f=new _(w,h+"leave",g,n,c),f.target=b,f.relatedTarget=m,w=null,An(c)===u&&(_=new _(p,h+"enter",v,n,c),_.target=m,_.relatedTarget=b,w=_),b=w,g&&v)t:{for(_=g,p=v,h=0,m=_;m;m=ir(m))h++;for(m=0,w=p;w;w=ir(w))m++;for(;0<h-m;)_=ir(_),h--;for(;0<m-h;)p=ir(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=ir(_),p=ir(p)}_=null}else _=null;g!==null&&Hd(d,f,g,_,!1),v!==null&&b!==null&&Hd(d,b,v,_,!0)}}e:{if(f=u?dr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=N0;else if(bd(f))if(Cp)E=A0;else{E=R0;var I=P0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=O0);if(E&&(E=E(t,u))){Ep(d,E,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&va(f,"number",f.value)}switch(I=u?dr(u):window,t){case"focusin":(bd(I)||I.contentEditable==="true")&&(ur=I,Pa=u,vi=null);break;case"focusout":vi=Pa=ur=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,Bd(d,n,c);break;case"selectionchange":if(b0)break;case"keydown":case"keyup":Bd(d,n,c)}var x;if($u)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ar?wp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(_p&&n.locale!=="ko"&&(ar||P!=="onCompositionStart"?P==="onCompositionEnd"&&ar&&(x=yp()):(ln=c,Vu="value"in ln?ln.value:ln.textContent,ar=!0)),I=Xs(u,P),0<I.length&&(P=new Od(P,t,null,n,c),d.push({event:P,listeners:I}),x?P.data=x:(x=Sp(n),x!==null&&(P.data=x)))),(x=C0?k0(t,n):x0(t,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(c=new Od("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}Dp(d,e)})}function Li(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Pi(t,n),s!=null&&r.unshift(Li(t,s,i)),s=Pi(t,e),s!=null&&r.push(Li(t,s,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Pi(n,s),a!=null&&o.unshift(Li(n,a,l))):i||(a=Pi(n,s),a!=null&&o.push(Li(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var j0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function Wd(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(B0,"")}function Cs(t,e,n){if(e=Wd(e),Wd(t)!==e&&n)throw Error(T(425))}function Js(){}var Oa=null,Aa=null;function Da(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ma=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,V0=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(t){return $d.resolve(null).then(t).catch(H0)}:Ma;function H0(t){setTimeout(function(){throw t})}function Rl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(e)}function hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Hr,Fi="__reactProps$"+Hr,Wt="__reactContainer$"+Hr,ba="__reactEvents$"+Hr,W0="__reactListeners$"+Hr,$0="__reactHandles$"+Hr;function An(t){var e=t[Nt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wt]||n[Nt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kd(t);t!==null;){if(n=t[Nt])return n;t=Kd(t)}return e}t=n,n=t.parentNode}return null}function rs(t){return t=t[Nt]||t[Wt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Uo(t){return t[Fi]||null}var La=[],fr=-1;function Tn(t){return{current:t}}function ae(t){0>fr||(t.current=La[fr],La[fr]=null,fr--)}function ie(t,e){fr++,La[fr]=t.current,t.current=e}var Sn={},ze=Tn(Sn),Qe=Tn(!1),Un=Sn;function Or(t,e){var n=t.type.contextTypes;if(!n)return Sn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function qe(t){return t=t.childContextTypes,t!=null}function Zs(){ae(Qe),ae(ze)}function Gd(t,e,n){if(ze.current!==Sn)throw Error(T(168));ie(ze,e),ie(Qe,n)}function bp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,Py(t)||"Unknown",i));return he({},n,r)}function eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sn,Un=ze.current,ie(ze,t),ie(Qe,Qe.current),!0}function Qd(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=bp(t,e,Un),r.__reactInternalMemoizedMergedChildContext=t,ae(Qe),ae(ze),ie(ze,t)):ae(Qe),ie(Qe,n)}var Lt=null,Vo=!1,Ol=!1;function Lp(t){Lt===null?Lt=[t]:Lt.push(t)}function K0(t){Vo=!0,Lp(t)}function In(){if(!Ol&&Lt!==null){Ol=!0;var t=0,e=ee;try{var n=Lt;for(ee=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Lt=null,Vo=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(t+1)),lp(zu,In),i}finally{ee=e,Ol=!1}}return null}var hr=[],pr=0,to=null,no=0,at=[],ut=0,Vn=null,Ft=1,zt="";function Nn(t,e){hr[pr++]=no,hr[pr++]=to,to=t,no=e}function Fp(t,e,n){at[ut++]=Ft,at[ut++]=zt,at[ut++]=Vn,Vn=t;var r=Ft;t=zt;var i=32-Et(r)-1;r&=~(1<<i),n+=1;var s=32-Et(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ft=1<<32-Et(e)+i|n<<i|r,zt=s+t}else Ft=1<<s|n<<i|r,zt=t}function Gu(t){t.return!==null&&(Nn(t,1),Fp(t,1,0))}function Qu(t){for(;t===to;)to=hr[--pr],hr[pr]=null,no=hr[--pr],hr[pr]=null;for(;t===Vn;)Vn=at[--ut],at[ut]=null,zt=at[--ut],at[ut]=null,Ft=at[--ut],at[ut]=null}var rt=null,nt=null,ce=!1,yt=null;function zp(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,nt=hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vn!==null?{id:Ft,overflow:zt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rt=t,nt=null,!0):!1;default:return!1}}function Fa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function za(t){if(ce){var e=nt;if(e){var n=e;if(!qd(t,e)){if(Fa(t))throw Error(T(418));e=hn(n.nextSibling);var r=rt;e&&qd(t,e)?zp(r,n):(t.flags=t.flags&-4097|2,ce=!1,rt=t)}}else{if(Fa(t))throw Error(T(418));t.flags=t.flags&-4097|2,ce=!1,rt=t}}}function Yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function ks(t){if(t!==rt)return!1;if(!ce)return Yd(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Da(t.type,t.memoizedProps)),e&&(e=nt)){if(Fa(t))throw jp(),Error(T(418));for(;e;)zp(t,e),e=hn(e.nextSibling)}if(Yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=rt?hn(t.stateNode.nextSibling):null;return!0}function jp(){for(var t=nt;t;)t=hn(t.nextSibling)}function Ar(){nt=rt=null,ce=!1}function qu(t){yt===null?yt=[t]:yt.push(t)}var G0=qt.ReactCurrentBatchConfig;function gt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ro=Tn(null),io=null,mr=null,Yu=null;function Xu(){Yu=mr=io=null}function Ju(t){var e=ro.current;ae(ro),t._currentValue=e}function ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function kr(t,e){io=t,Yu=mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&($e=!0),t.firstContext=null)}function ht(t){var e=t._currentValue;if(Yu!==t)if(t={context:t,memoizedValue:e,next:null},mr===null){if(io===null)throw Error(T(308));mr=t,io.dependencies={lanes:0,firstContext:t}}else mr=mr.next=t;return e}var Dn=null;function Zu(t){Dn===null?Dn=[t]:Dn.push(t)}function Bp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zu(e)):(n.next=i.next,i.next=n),e.interleaved=n,$t(t,r)}function $t(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rn=!1;function ec(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Up(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$t(t,n)}return i=r.interleaved,i===null?(e.next=e,Zu(r)):(e.next=i.next,i.next=e),r.interleaved=e,$t(t,n)}function Fs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ju(t,n)}}function Xd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function so(t,e,n,r){var i=t.updateQueue;rn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,_=l;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=he({},d,f);break e;case 2:rn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Wn|=o,t.lanes=o,t.memoizedState=d}}function Jd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Vp=new Bh.Component().refs;function Ba(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ho={isMounted:function(t){return(t=t._reactInternals)?tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),i=gn(t),s=Bt(r,i);s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(Ct(e,t,i,r),Fs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),i=gn(t),s=Bt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pn(t,s,i),e!==null&&(Ct(e,t,i,r),Fs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=gn(t),i=Bt(n,r);i.tag=2,e!=null&&(i.callback=e),e=pn(t,i,r),e!==null&&(Ct(e,t,r,n),Fs(e,t,r))}};function Zd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,s):!0}function Hp(t,e,n){var r=!1,i=Sn,s=e.contextType;return typeof s=="object"&&s!==null?s=ht(s):(i=qe(e)?Un:ze.current,r=e.contextTypes,s=(r=r!=null)?Or(t,i):Sn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ho,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ef(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ho.enqueueReplaceState(e,e.state,null)}function Ua(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Vp,ec(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=ht(s):(s=qe(e)?Un:ze.current,i.context=Or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ba(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ho.enqueueReplaceState(i,i.state,null),so(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Vp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function xs(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tf(t){var e=t._init;return e(t._payload)}function Wp(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=vn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,w){return h===null||h.tag!==6?(h=zl(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,w){var E=m.type;return E===lr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nn&&tf(E)===h.type)?(w=i(h,m.props),w.ref=ti(p,h,m),w.return=p,w):(w=Hs(m.type,m.key,m.props,null,p.mode,w),w.ref=ti(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=jl(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,E){return h===null||h.tag!==7?(h=zn(m,p.mode,w,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function d(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=zl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ps:return m=Hs(h.type,h.key,h.props,null,p.mode,m),m.ref=ti(p,null,h),m.return=p,m;case or:return h=jl(h,p.mode,m),h.return=p,h;case nn:var w=h._init;return d(p,w(h._payload),m)}if(ui(h)||Yr(h))return h=zn(h,p.mode,m,null),h.return=p,h;xs(p,h)}return null}function f(p,h,m,w){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:l(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ps:return m.key===E?a(p,h,m,w):null;case or:return m.key===E?u(p,h,m,w):null;case nn:return E=m._init,f(p,h,E(m._payload),w)}if(ui(m)||Yr(m))return E!==null?null:c(p,h,m,w,null);xs(p,m)}return null}function g(p,h,m,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(h,p,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ps:return p=p.get(w.key===null?m:w.key)||null,a(h,p,w,E);case or:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,E);case nn:var I=w._init;return g(p,h,m,I(w._payload),E)}if(ui(w)||Yr(w))return p=p.get(m)||null,c(h,p,w,E,null);xs(h,w)}return null}function v(p,h,m,w){for(var E=null,I=null,x=h,P=h=0,X=null;x!==null&&P<m.length;P++){x.index>P?(X=x,x=null):X=x.sibling;var B=f(p,x,m[P],w);if(B===null){x===null&&(x=X);break}t&&x&&B.alternate===null&&e(p,x),h=s(B,h,P),I===null?E=B:I.sibling=B,I=B,x=X}if(P===m.length)return n(p,x),ce&&Nn(p,P),E;if(x===null){for(;P<m.length;P++)x=d(p,m[P],w),x!==null&&(h=s(x,h,P),I===null?E=x:I.sibling=x,I=x);return ce&&Nn(p,P),E}for(x=r(p,x);P<m.length;P++)X=g(x,p,P,m[P],w),X!==null&&(t&&X.alternate!==null&&x.delete(X.key===null?P:X.key),h=s(X,h,P),I===null?E=X:I.sibling=X,I=X);return t&&x.forEach(function(ge){return e(p,ge)}),ce&&Nn(p,P),E}function _(p,h,m,w){var E=Yr(m);if(typeof E!="function")throw Error(T(150));if(m=E.call(m),m==null)throw Error(T(151));for(var I=E=null,x=h,P=h=0,X=null,B=m.next();x!==null&&!B.done;P++,B=m.next()){x.index>P?(X=x,x=null):X=x.sibling;var ge=f(p,x,B.value,w);if(ge===null){x===null&&(x=X);break}t&&x&&ge.alternate===null&&e(p,x),h=s(ge,h,P),I===null?E=ge:I.sibling=ge,I=ge,x=X}if(B.done)return n(p,x),ce&&Nn(p,P),E;if(x===null){for(;!B.done;P++,B=m.next())B=d(p,B.value,w),B!==null&&(h=s(B,h,P),I===null?E=B:I.sibling=B,I=B);return ce&&Nn(p,P),E}for(x=r(p,x);!B.done;P++,B=m.next())B=g(x,p,P,B.value,w),B!==null&&(t&&B.alternate!==null&&x.delete(B.key===null?P:B.key),h=s(B,h,P),I===null?E=B:I.sibling=B,I=B);return t&&x.forEach(function(Pe){return e(p,Pe)}),ce&&Nn(p,P),E}function b(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ps:e:{for(var E=m.key,I=h;I!==null;){if(I.key===E){if(E=m.type,E===lr){if(I.tag===7){n(p,I.sibling),h=i(I,m.props.children),h.return=p,p=h;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===nn&&tf(E)===I.type){n(p,I.sibling),h=i(I,m.props),h.ref=ti(p,I,m),h.return=p,p=h;break e}n(p,I);break}else e(p,I);I=I.sibling}m.type===lr?(h=zn(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=Hs(m.type,m.key,m.props,null,p.mode,w),w.ref=ti(p,h,m),w.return=p,p=w)}return o(p);case or:e:{for(I=m.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=jl(m,p.mode,w),h.return=p,p=h}return o(p);case nn:return I=m._init,b(p,h,I(m._payload),w)}if(ui(m))return v(p,h,m,w);if(Yr(m))return _(p,h,m,w);xs(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=zl(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return b}var Dr=Wp(!0),$p=Wp(!1),is={},Rt=Tn(is),zi=Tn(is),ji=Tn(is);function Mn(t){if(t===is)throw Error(T(174));return t}function tc(t,e){switch(ie(ji,e),ie(zi,t),ie(Rt,is),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:_a(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=_a(e,t)}ae(Rt),ie(Rt,e)}function Mr(){ae(Rt),ae(zi),ae(ji)}function Kp(t){Mn(ji.current);var e=Mn(Rt.current),n=_a(e,t.type);e!==n&&(ie(zi,t),ie(Rt,n))}function nc(t){zi.current===t&&(ae(Rt),ae(zi))}var de=Tn(0);function oo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Al=[];function rc(){for(var t=0;t<Al.length;t++)Al[t]._workInProgressVersionPrimary=null;Al.length=0}var zs=qt.ReactCurrentDispatcher,Dl=qt.ReactCurrentBatchConfig,Hn=0,fe=null,_e=null,ke=null,lo=!1,yi=!1,Bi=0,Q0=0;function De(){throw Error(T(321))}function ic(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!xt(t[n],e[n]))return!1;return!0}function sc(t,e,n,r,i,s){if(Hn=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zs.current=t===null||t.memoizedState===null?J0:Z0,t=n(r,i),yi){s=0;do{if(yi=!1,Bi=0,25<=s)throw Error(T(301));s+=1,ke=_e=null,e.updateQueue=null,zs.current=e_,t=n(r,i)}while(yi)}if(zs.current=ao,e=_e!==null&&_e.next!==null,Hn=0,ke=_e=fe=null,lo=!1,e)throw Error(T(300));return t}function oc(){var t=Bi!==0;return Bi=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?fe.memoizedState=ke=t:ke=ke.next=t,ke}function pt(){if(_e===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=ke===null?fe.memoizedState:ke.next;if(e!==null)ke=e,_e=t;else{if(t===null)throw Error(T(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},ke===null?fe.memoizedState=ke=t:ke=ke.next=t}return ke}function Ui(t,e){return typeof e=="function"?e(t):e}function Ml(t){var e=pt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Hn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,fe.lanes|=c,Wn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,xt(r,e.memoizedState)||($e=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,Wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bl(t){var e=pt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);xt(s,e.memoizedState)||($e=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Gp(){}function Qp(t,e){var n=fe,r=pt(),i=e(),s=!xt(r.memoizedState,i);if(s&&(r.memoizedState=i,$e=!0),r=r.queue,lc(Xp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Vi(9,Yp.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(T(349));Hn&30||qp(n,e,i)}return i}function qp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yp(t,e,n,r){e.value=n,e.getSnapshot=r,Jp(e)&&Zp(t)}function Xp(t,e,n){return n(function(){Jp(e)&&Zp(t)})}function Jp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xt(t,n)}catch{return!0}}function Zp(t){var e=$t(t,1);e!==null&&Ct(e,t,1,-1)}function nf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},e.queue=t,t=t.dispatch=X0.bind(null,fe,t),[e.memoizedState,t]}function Vi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function em(){return pt().memoizedState}function js(t,e,n,r){var i=It();fe.flags|=t,i.memoizedState=Vi(1|e,n,void 0,r===void 0?null:r)}function Wo(t,e,n,r){var i=pt();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&ic(r,o.deps)){i.memoizedState=Vi(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Vi(1|e,n,s,r)}function rf(t,e){return js(8390656,8,t,e)}function lc(t,e){return Wo(2048,8,t,e)}function tm(t,e){return Wo(4,2,t,e)}function nm(t,e){return Wo(4,4,t,e)}function rm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function im(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4,4,rm.bind(null,e,t),n)}function ac(){}function sm(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ic(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function om(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ic(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lm(t,e,n){return Hn&21?(xt(n,e)||(n=cp(),fe.lanes|=n,Wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,$e=!0),t.memoizedState=n)}function q0(t,e){var n=ee;ee=n!==0&&4>n?n:4,t(!0);var r=Dl.transition;Dl.transition={};try{t(!1),e()}finally{ee=n,Dl.transition=r}}function am(){return pt().memoizedState}function Y0(t,e,n){var r=gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},um(t))cm(e,n);else if(n=Bp(t,e,n,r),n!==null){var i=Be();Ct(n,t,r,i),dm(n,e,r)}}function X0(t,e,n){var r=gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(um(t))cm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,xt(l,o)){var a=e.interleaved;a===null?(i.next=i,Zu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Bp(t,e,i,r),n!==null&&(i=Be(),Ct(n,t,r,i),dm(n,e,r))}}function um(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function cm(t,e){yi=lo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dm(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ju(t,n)}}var ao={readContext:ht,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},J0={readContext:ht,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:ht,useEffect:rf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,js(4194308,4,rm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return js(4194308,4,t,e)},useInsertionEffect:function(t,e){return js(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Y0.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:nf,useDebugValue:ac,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=nf(!1),e=t[0];return t=q0.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=It();if(ce){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Ie===null)throw Error(T(349));Hn&30||qp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rf(Xp.bind(null,r,s,t),[t]),r.flags|=2048,Vi(9,Yp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=Ie.identifierPrefix;if(ce){var n=zt,r=Ft;n=(r&~(1<<32-Et(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Bi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Q0++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Z0={readContext:ht,useCallback:sm,useContext:ht,useEffect:lc,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Ml,useRef:em,useState:function(){return Ml(Ui)},useDebugValue:ac,useDeferredValue:function(t){var e=pt();return lm(e,_e.memoizedState,t)},useTransition:function(){var t=Ml(Ui)[0],e=pt().memoizedState;return[t,e]},useMutableSource:Gp,useSyncExternalStore:Qp,useId:am,unstable_isNewReconciler:!1},e_={readContext:ht,useCallback:sm,useContext:ht,useEffect:lc,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:bl,useRef:em,useState:function(){return bl(Ui)},useDebugValue:ac,useDeferredValue:function(t){var e=pt();return _e===null?e.memoizedState=t:lm(e,_e.memoizedState,t)},useTransition:function(){var t=bl(Ui)[0],e=pt().memoizedState;return[t,e]},useMutableSource:Gp,useSyncExternalStore:Qp,useId:am,unstable_isNewReconciler:!1};function br(t,e){try{var n="",r=e;do n+=Ny(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ll(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Va(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var t_=typeof WeakMap=="function"?WeakMap:Map;function fm(t,e,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){co||(co=!0,Ja=r),Va(t,e)},n}function hm(t,e,n){n=Bt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Va(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Va(t,e),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new t_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=m_.bind(null,t,e,n),e.then(t,t))}function of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bt(-1,1),e.tag=2,pn(n,e,1))),n.lanes|=1),t)}var n_=qt.ReactCurrentOwner,$e=!1;function je(t,e,n,r){e.child=t===null?$p(e,null,n,r):Dr(e,t.child,n,r)}function af(t,e,n,r,i){n=n.render;var s=e.ref;return kr(e,i),r=sc(t,e,n,r,s,i),n=oc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(ce&&n&&Gu(e),e.flags|=1,je(t,e,r,i),e.child)}function uf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pm(t,e,s,r,i)):(t=Hs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&t.ref===e.ref)return Kt(t,e,i)}return e.flags|=1,t=vn(s,r),t.ref=e.ref,t.return=e,e.child=t}function pm(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Mi(s,r)&&t.ref===e.ref)if($e=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&($e=!0);else return e.lanes=t.lanes,Kt(t,e,i)}return Ha(t,e,n,r,i)}function mm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(vr,et),et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(vr,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(vr,et),et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(vr,et),et|=r;return je(t,e,i,n),e.child}function gm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ha(t,e,n,r,i){var s=qe(n)?Un:ze.current;return s=Or(e,s),kr(e,i),n=sc(t,e,n,r,s,i),r=oc(),t!==null&&!$e?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Kt(t,e,i)):(ce&&r&&Gu(e),e.flags|=1,je(t,e,n,i),e.child)}function cf(t,e,n,r,i){if(qe(n)){var s=!0;eo(e)}else s=!1;if(kr(e,i),e.stateNode===null)Bs(t,e),Hp(e,n,r),Ua(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=ht(u):(u=qe(n)?Un:ze.current,u=Or(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ef(e,o,r,u),rn=!1;var f=e.memoizedState;o.state=f,so(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Qe.current||rn?(typeof c=="function"&&(Ba(e,n,c,r),a=e.memoizedState),(l=rn||Zd(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Up(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:gt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=ht(a):(a=qe(n)?Un:ze.current,a=Or(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&ef(e,o,r,a),rn=!1,f=e.memoizedState,o.state=f,so(e,r,o,i);var v=e.memoizedState;l!==d||f!==v||Qe.current||rn?(typeof g=="function"&&(Ba(e,n,g,r),v=e.memoizedState),(u=rn||Zd(e,n,u,r,f,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wa(t,e,n,r,s,i)}function Wa(t,e,n,r,i,s){gm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qd(e,n,!1),Kt(t,e,s);r=e.stateNode,n_.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Dr(e,t.child,null,s),e.child=Dr(e,null,l,s)):je(t,e,l,s),e.memoizedState=r.state,i&&Qd(e,n,!0),e.child}function vm(t){var e=t.stateNode;e.pendingContext?Gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gd(t,e.context,!1),tc(t,e.containerInfo)}function df(t,e,n,r,i){return Ar(),qu(i),e.flags|=256,je(t,e,n,r),e.child}var $a={dehydrated:null,treeContext:null,retryLane:0};function Ka(t){return{baseLanes:t,cachePool:null,transitions:null}}function ym(t,e,n){var r=e.pendingProps,i=de.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(de,i&1),t===null)return za(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Go(o,r,0,null),t=zn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ka(n),e.memoizedState=$a,t):uc(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return r_(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=vn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=vn(l,s):(s=zn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ka(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$a,r}return s=t.child,t=s.sibling,r=vn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function uc(t,e){return e=Go({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ts(t,e,n,r){return r!==null&&qu(r),Dr(e,t.child,null,n),t=uc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function r_(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ll(Error(T(422))),Ts(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Go({mode:"visible",children:r.children},i,0,null),s=zn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Dr(e,t.child,null,o),e.child.memoizedState=Ka(o),e.memoizedState=$a,s);if(!(e.mode&1))return Ts(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(T(419)),r=Ll(s,r,void 0),Ts(t,e,o,r)}if(l=(o&t.childLanes)!==0,$e||l){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$t(t,i),Ct(r,t,i,-1))}return mc(),r=Ll(Error(T(421))),Ts(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=g_.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=hn(i.nextSibling),rt=e,ce=!0,yt=null,t!==null&&(at[ut++]=Ft,at[ut++]=zt,at[ut++]=Vn,Ft=t.id,zt=t.overflow,Vn=e),e=uc(e,r.children),e.flags|=4096,e)}function ff(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ja(t.return,e,n)}function Fl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function _m(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(je(t,e,r.children,n),r=de.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ff(t,n,e);else if(t.tag===19)ff(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(de,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fl(e,!0,n,null,s);break;case"together":Fl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Kt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function i_(t,e,n){switch(e.tag){case 3:vm(e),Ar();break;case 5:Kp(e);break;case 1:qe(e.type)&&eo(e);break;case 4:tc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(ro,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),e.flags|=128,null):n&e.child.childLanes?ym(t,e,n):(ie(de,de.current&1),t=Kt(t,e,n),t!==null?t.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return _m(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return e.lanes=0,mm(t,e,n)}return Kt(t,e,n)}var wm,Ga,Sm,Em;wm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ga=function(){};Sm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mn(Rt.current);var s=null;switch(n){case"input":i=ma(t,i),r=ma(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=ya(t,i),r=ya(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Js)}wa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ii.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ii.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&oe("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Em=function(t,e,n,r){n!==r&&(e.flags|=4)};function ni(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function s_(t,e,n){var r=e.pendingProps;switch(Qu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return qe(e.type)&&Zs(),Me(e),null;case 3:return r=e.stateNode,Mr(),ae(Qe),ae(ze),rc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ks(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yt!==null&&(tu(yt),yt=null))),Ga(t,e),Me(e),null;case 5:nc(e);var i=Mn(ji.current);if(n=e.type,t!==null&&e.stateNode!=null)Sm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return Me(e),null}if(t=Mn(Rt.current),ks(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nt]=e,r[Fi]=s,t=(e.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<di.length;i++)oe(di[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":wd(r,s),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},oe("invalid",r);break;case"textarea":Ed(r,s),oe("invalid",r)}wa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,t),i=["children",""+l]):Ii.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&oe("scroll",r)}switch(n){case"input":ms(r),Sd(r,s,!0);break;case"textarea":ms(r),Cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Js)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nt]=e,t[Fi]=r,wm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sa(n,r),n){case"dialog":oe("cancel",t),oe("close",t),i=r;break;case"iframe":case"object":case"embed":oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<di.length;i++)oe(di[i],t);i=r;break;case"source":oe("error",t),i=r;break;case"img":case"image":case"link":oe("error",t),oe("load",t),i=r;break;case"details":oe("toggle",t),i=r;break;case"input":wd(t,r),i=ma(t,r),oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),oe("invalid",t);break;case"textarea":Ed(t,r),i=ya(t,r),oe("invalid",t);break;default:i=r}wa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Jh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Yh(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ni(t,a):typeof a=="number"&&Ni(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ii.hasOwnProperty(s)?a!=null&&s==="onScroll"&&oe("scroll",t):a!=null&&Du(t,s,a,o))}switch(n){case"input":ms(t),Sd(t,r,!1);break;case"textarea":ms(t),Cd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wr(t,!!r.multiple,s,!1):r.defaultValue!=null&&wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Em(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=Mn(ji.current),Mn(Rt.current),ks(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nt]=e,(s=r.nodeValue!==n)&&(t=rt,t!==null))switch(t.tag){case 3:Cs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=e,e.stateNode=r}return Me(e),null;case 13:if(ae(de),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&nt!==null&&e.mode&1&&!(e.flags&128))jp(),Ar(),e.flags|=98560,s=!1;else if(s=ks(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Nt]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else yt!==null&&(tu(yt),yt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||de.current&1?Se===0&&(Se=3):mc())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Mr(),Ga(t,e),t===null&&bi(e.stateNode.containerInfo),Me(e),null;case 10:return Ju(e.type._context),Me(e),null;case 17:return qe(e.type)&&Zs(),Me(e),null;case 19:if(ae(de),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ni(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oo(t),o!==null){for(e.flags|=128,ni(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(de,de.current&1|2),e.child}t=t.sibling}s.tail!==null&&ve()>Lr&&(e.flags|=128,r=!0,ni(s,!1),e.lanes=4194304)}else{if(!r)if(t=oo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ni(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Me(e),null}else 2*ve()-s.renderingStartTime>Lr&&n!==1073741824&&(e.flags|=128,r=!0,ni(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ve(),e.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return pc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function o_(t,e){switch(Qu(e),e.tag){case 1:return qe(e.type)&&Zs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mr(),ae(Qe),ae(ze),rc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nc(e),null;case 13:if(ae(de),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(de),null;case 4:return Mr(),null;case 10:return Ju(e.type._context),null;case 22:case 23:return pc(),null;case 24:return null;default:return null}}var Is=!1,be=!1,l_=typeof WeakSet=="function"?WeakSet:Set,D=null;function gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Qa(t,e,n){try{n()}catch(r){pe(t,e,r)}}var hf=!1;function a_(t,e){if(Oa=qs,t=Tp(),Ku(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Aa={focusedElem:t,selectionRange:n},qs=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,b=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:gt(e.type,_),b);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){pe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=hf,hf=!1,v}function _i(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qa(e,n,s)}i=i.next}while(i!==r)}}function $o(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qa(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Cm(t){var e=t.alternate;e!==null&&(t.alternate=null,Cm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nt],delete e[Fi],delete e[ba],delete e[W0],delete e[$0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function km(t){return t.tag===5||t.tag===3||t.tag===4}function pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ya(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Js));else if(r!==4&&(t=t.child,t!==null))for(Ya(t,e,n),t=t.sibling;t!==null;)Ya(t,e,n),t=t.sibling}function Xa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xa(t,e,n),t=t.sibling;t!==null;)Xa(t,e,n),t=t.sibling}var Re=null,vt=!1;function tn(t,e,n){for(n=n.child;n!==null;)xm(t,e,n),n=n.sibling}function xm(t,e,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:be||gr(n,e);case 6:var r=Re,i=vt;Re=null,tn(t,e,n),Re=r,vt=i,Re!==null&&(vt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(vt?(t=Re,n=n.stateNode,t.nodeType===8?Rl(t.parentNode,n):t.nodeType===1&&Rl(t,n),Ai(t)):Rl(Re,n.stateNode));break;case 4:r=Re,i=vt,Re=n.stateNode.containerInfo,vt=!0,tn(t,e,n),Re=r,vt=i;break;case 0:case 11:case 14:case 15:if(!be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qa(n,e,o),i=i.next}while(i!==r)}tn(t,e,n);break;case 1:if(!be&&(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){pe(n,e,l)}tn(t,e,n);break;case 21:tn(t,e,n);break;case 22:n.mode&1?(be=(r=be)||n.memoizedState!==null,tn(t,e,n),be=r):tn(t,e,n);break;default:tn(t,e,n)}}function mf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new l_),e.forEach(function(r){var i=v_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Re=l.stateNode,vt=!1;break e;case 3:Re=l.stateNode.containerInfo,vt=!0;break e;case 4:Re=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(Re===null)throw Error(T(160));xm(s,o,i),Re=null,vt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Tm(e,t),e=e.sibling}function Tm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mt(e,t),Tt(t),r&4){try{_i(3,t,t.return),$o(3,t)}catch(_){pe(t,t.return,_)}try{_i(5,t,t.return)}catch(_){pe(t,t.return,_)}}break;case 1:mt(e,t),Tt(t),r&512&&n!==null&&gr(n,n.return);break;case 5:if(mt(e,t),Tt(t),r&512&&n!==null&&gr(n,n.return),t.flags&32){var i=t.stateNode;try{Ni(i,"")}catch(_){pe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Gh(i,s),Sa(l,o);var u=Sa(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Jh(i,d):c==="dangerouslySetInnerHTML"?Yh(i,d):c==="children"?Ni(i,d):Du(i,c,d,u)}switch(l){case"input":ga(i,s);break;case"textarea":Qh(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?wr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?wr(i,!!s.multiple,s.defaultValue,!0):wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fi]=s}catch(_){pe(t,t.return,_)}}break;case 6:if(mt(e,t),Tt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){pe(t,t.return,_)}}break;case 3:if(mt(e,t),Tt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(e.containerInfo)}catch(_){pe(t,t.return,_)}break;case 4:mt(e,t),Tt(t);break;case 13:mt(e,t),Tt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(fc=ve())),r&4&&mf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(be=(u=be)||c,mt(e,t),be=u):mt(e,t),Tt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(f=D,g=f.child,f.tag){case 0:case 11:case 14:case 15:_i(4,f,f.return);break;case 1:gr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){pe(r,n,_)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){vf(d);continue}}g!==null?(g.return=f,D=g):vf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Xh("display",o))}catch(_){pe(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){pe(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:mt(e,t),Tt(t),r&4&&mf(t);break;case 21:break;default:mt(e,t),Tt(t)}}function Tt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(km(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ni(i,""),r.flags&=-33);var s=pf(t);Xa(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pf(t);Ya(t,l,o);break;default:throw Error(T(161))}}catch(a){pe(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function u_(t,e,n){D=t,Im(t)}function Im(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Is;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||be;l=Is;var u=be;if(Is=o,(be=a)&&!u)for(D=i;D!==null;)o=D,a=o.child,o.tag===22&&o.memoizedState!==null?yf(i):a!==null?(a.return=o,D=a):yf(i);for(;s!==null;)D=s,Im(s),s=s.sibling;D=i,Is=l,be=u}gf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):gf(t)}}function gf(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:be||$o(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!be)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:gt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ai(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}be||e.flags&512&&qa(e)}catch(f){pe(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function vf(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function yf(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$o(4,e)}catch(a){pe(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){pe(e,i,a)}}var s=e.return;try{qa(e)}catch(a){pe(e,s,a)}break;case 5:var o=e.return;try{qa(e)}catch(a){pe(e,o,a)}}}catch(a){pe(e,e.return,a)}if(e===t){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var c_=Math.ceil,uo=qt.ReactCurrentDispatcher,cc=qt.ReactCurrentOwner,ft=qt.ReactCurrentBatchConfig,J=0,Ie=null,ye=null,Oe=0,et=0,vr=Tn(0),Se=0,Hi=null,Wn=0,Ko=0,dc=0,wi=null,We=null,fc=0,Lr=1/0,Mt=null,co=!1,Ja=null,mn=null,Ns=!1,an=null,fo=0,Si=0,Za=null,Us=-1,Vs=0;function Be(){return J&6?ve():Us!==-1?Us:Us=ve()}function gn(t){return t.mode&1?J&2&&Oe!==0?Oe&-Oe:G0.transition!==null?(Vs===0&&(Vs=cp()),Vs):(t=ee,t!==0||(t=window.event,t=t===void 0?16:vp(t.type)),t):1}function Ct(t,e,n,r){if(50<Si)throw Si=0,Za=null,Error(T(185));ts(t,n,r),(!(J&2)||t!==Ie)&&(t===Ie&&(!(J&2)&&(Ko|=n),Se===4&&on(t,Oe)),Ye(t,r),n===1&&J===0&&!(e.mode&1)&&(Lr=ve()+500,Vo&&In()))}function Ye(t,e){var n=t.callbackNode;Gy(t,e);var r=Qs(t,t===Ie?Oe:0);if(r===0)n!==null&&Td(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Td(n),e===1)t.tag===0?K0(_f.bind(null,t)):Lp(_f.bind(null,t)),V0(function(){!(J&6)&&In()}),n=null;else{switch(dp(r)){case 1:n=zu;break;case 4:n=ap;break;case 16:n=Gs;break;case 536870912:n=up;break;default:n=Gs}n=bm(n,Nm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Nm(t,e){if(Us=-1,Vs=0,J&6)throw Error(T(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=Qs(t,t===Ie?Oe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ho(t,r);else{e=r;var i=J;J|=2;var s=Rm();(Ie!==t||Oe!==e)&&(Mt=null,Lr=ve()+500,Fn(t,e));do try{h_();break}catch(l){Pm(t,l)}while(1);Xu(),uo.current=s,J=i,ye!==null?e=0:(Ie=null,Oe=0,e=Se)}if(e!==0){if(e===2&&(i=Ta(t),i!==0&&(r=i,e=eu(t,i))),e===1)throw n=Hi,Fn(t,0),on(t,r),Ye(t,ve()),n;if(e===6)on(t,r);else{if(i=t.current.alternate,!(r&30)&&!d_(i)&&(e=ho(t,r),e===2&&(s=Ta(t),s!==0&&(r=s,e=eu(t,s))),e===1))throw n=Hi,Fn(t,0),on(t,r),Ye(t,ve()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:Pn(t,We,Mt);break;case 3:if(on(t,r),(r&130023424)===r&&(e=fc+500-ve(),10<e)){if(Qs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ma(Pn.bind(null,t,We,Mt),e);break}Pn(t,We,Mt);break;case 4:if(on(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Et(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*c_(r/1960))-r,10<r){t.timeoutHandle=Ma(Pn.bind(null,t,We,Mt),r);break}Pn(t,We,Mt);break;case 5:Pn(t,We,Mt);break;default:throw Error(T(329))}}}return Ye(t,ve()),t.callbackNode===n?Nm.bind(null,t):null}function eu(t,e){var n=wi;return t.current.memoizedState.isDehydrated&&(Fn(t,e).flags|=256),t=ho(t,e),t!==2&&(e=We,We=n,e!==null&&tu(e)),t}function tu(t){We===null?We=t:We.push.apply(We,t)}function d_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!xt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e){for(e&=~dc,e&=~Ko,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Et(e),r=1<<n;t[n]=-1,e&=~r}}function _f(t){if(J&6)throw Error(T(327));xr();var e=Qs(t,0);if(!(e&1))return Ye(t,ve()),null;var n=ho(t,e);if(t.tag!==0&&n===2){var r=Ta(t);r!==0&&(e=r,n=eu(t,r))}if(n===1)throw n=Hi,Fn(t,0),on(t,e),Ye(t,ve()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pn(t,We,Mt),Ye(t,ve()),null}function hc(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(Lr=ve()+500,Vo&&In())}}function $n(t){an!==null&&an.tag===0&&!(J&6)&&xr();var e=J;J|=1;var n=ft.transition,r=ee;try{if(ft.transition=null,ee=1,t)return t()}finally{ee=r,ft.transition=n,J=e,!(J&6)&&In()}}function pc(){et=vr.current,ae(vr)}function Fn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,U0(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Qu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zs();break;case 3:Mr(),ae(Qe),ae(ze),rc();break;case 5:nc(r);break;case 4:Mr();break;case 13:ae(de);break;case 19:ae(de);break;case 10:Ju(r.type._context);break;case 22:case 23:pc()}n=n.return}if(Ie=t,ye=t=vn(t.current,null),Oe=et=e,Se=0,Hi=null,dc=Ko=Wn=0,We=wi=null,Dn!==null){for(e=0;e<Dn.length;e++)if(n=Dn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Dn=null}return t}function Pm(t,e){do{var n=ye;try{if(Xu(),zs.current=ao,lo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(Hn=0,ke=_e=fe=null,yi=!1,Bi=0,cc.current=null,n===null||n.return===null){Se=1,Hi=e,ye=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Oe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=of(o);if(g!==null){g.flags&=-257,lf(g,o,l,s,e),g.mode&1&&sf(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(a),e.updateQueue=_}else v.add(a);break e}else{if(!(e&1)){sf(s,u,e),mc();break e}a=Error(T(426))}}else if(ce&&l.mode&1){var b=of(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),lf(b,o,l,s,e),qu(br(a,l));break e}}s=a=br(a,l),Se!==4&&(Se=2),wi===null?wi=[s]:wi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=fm(s,a,e);Xd(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mn===null||!mn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=hm(s,l,e);Xd(s,w);break e}}s=s.return}while(s!==null)}Am(n)}catch(E){e=E,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function Rm(){var t=uo.current;return uo.current=ao,t===null?ao:t}function mc(){(Se===0||Se===3||Se===2)&&(Se=4),Ie===null||!(Wn&268435455)&&!(Ko&268435455)||on(Ie,Oe)}function ho(t,e){var n=J;J|=2;var r=Rm();(Ie!==t||Oe!==e)&&(Mt=null,Fn(t,e));do try{f_();break}catch(i){Pm(t,i)}while(1);if(Xu(),J=n,uo.current=r,ye!==null)throw Error(T(261));return Ie=null,Oe=0,Se}function f_(){for(;ye!==null;)Om(ye)}function h_(){for(;ye!==null&&!zy();)Om(ye)}function Om(t){var e=Mm(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Am(t):ye=e,cc.current=null}function Am(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=o_(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,ye=null;return}}else if(n=s_(n,e,et),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);Se===0&&(Se=5)}function Pn(t,e,n){var r=ee,i=ft.transition;try{ft.transition=null,ee=1,p_(t,e,n,r)}finally{ft.transition=i,ee=r}return null}function p_(t,e,n,r){do xr();while(an!==null);if(J&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qy(t,s),t===Ie&&(ye=Ie=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ns||(Ns=!0,bm(Gs,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=ee;ee=1;var l=J;J|=4,cc.current=null,a_(t,n),Tm(n,t),M0(Aa),qs=!!Oa,Aa=Oa=null,t.current=n,u_(n),jy(),J=l,ee=o,ft.transition=s}else t.current=n;if(Ns&&(Ns=!1,an=t,fo=i),s=t.pendingLanes,s===0&&(mn=null),Vy(n.stateNode),Ye(t,ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,t=Ja,Ja=null,t;return fo&1&&t.tag!==0&&xr(),s=t.pendingLanes,s&1?t===Za?Si++:(Si=0,Za=t):Si=0,In(),null}function xr(){if(an!==null){var t=dp(fo),e=ft.transition,n=ee;try{if(ft.transition=null,ee=16>t?16:t,an===null)var r=!1;else{if(t=an,an=null,fo=0,J&6)throw Error(T(331));var i=J;for(J|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:_i(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var f=c.sibling,g=c.return;if(Cm(c),c===u){D=null;break}if(f!==null){f.return=g,D=f;break}D=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var b=_.sibling;_.sibling=null,_=b}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_i(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,D=p;break e}D=s.return}}var h=t.current;for(D=h;D!==null;){o=D;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,D=m;else e:for(o=h;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:$o(9,l)}}catch(E){pe(l,l.return,E)}if(l===o){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(J=i,In(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Fo,t)}catch{}r=!0}return r}finally{ee=n,ft.transition=e}}return!1}function wf(t,e,n){e=br(n,e),e=fm(t,e,1),t=pn(t,e,1),e=Be(),t!==null&&(ts(t,1,e),Ye(t,e))}function pe(t,e,n){if(t.tag===3)wf(t,t,n);else for(;e!==null;){if(e.tag===3){wf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){t=br(n,t),t=hm(e,t,1),e=pn(e,t,1),t=Be(),e!==null&&(ts(e,1,t),Ye(e,t));break}}e=e.return}}function m_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Oe&n)===n&&(Se===4||Se===3&&(Oe&130023424)===Oe&&500>ve()-fc?Fn(t,0):dc|=n),Ye(t,e)}function Dm(t,e){e===0&&(t.mode&1?(e=ys,ys<<=1,!(ys&130023424)&&(ys=4194304)):e=1);var n=Be();t=$t(t,e),t!==null&&(ts(t,e,n),Ye(t,n))}function g_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dm(t,n)}function v_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Dm(t,n)}var Mm;Mm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Qe.current)$e=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return $e=!1,i_(t,e,n);$e=!!(t.flags&131072)}else $e=!1,ce&&e.flags&1048576&&Fp(e,no,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Bs(t,e),t=e.pendingProps;var i=Or(e,ze.current);kr(e,n),i=sc(null,e,r,t,i,n);var s=oc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,qe(r)?(s=!0,eo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ec(e),i.updater=Ho,e.stateNode=i,i._reactInternals=e,Ua(e,r,t,n),e=Wa(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Gu(e),je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Bs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=__(r),t=gt(r,t),i){case 0:e=Ha(null,e,r,t,n);break e;case 1:e=cf(null,e,r,t,n);break e;case 11:e=af(null,e,r,t,n);break e;case 14:e=uf(null,e,r,gt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Ha(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),cf(t,e,r,i,n);case 3:e:{if(vm(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Up(t,e),so(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=br(Error(T(423)),e),e=df(t,e,r,n,i);break e}else if(r!==i){i=br(Error(T(424)),e),e=df(t,e,r,n,i);break e}else for(nt=hn(e.stateNode.containerInfo.firstChild),rt=e,ce=!0,yt=null,n=$p(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){e=Kt(t,e,n);break e}je(t,e,r,n)}e=e.child}return e;case 5:return Kp(e),t===null&&za(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Da(r,i)?o=null:s!==null&&Da(r,s)&&(e.flags|=32),gm(t,e),je(t,e,o,n),e.child;case 6:return t===null&&za(e),null;case 13:return ym(t,e,n);case 4:return tc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Dr(e,null,r,n):je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),af(t,e,r,i,n);case 7:return je(t,e,e.pendingProps,n),e.child;case 8:return je(t,e,e.pendingProps.children,n),e.child;case 12:return je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(ro,r._currentValue),r._currentValue=o,s!==null)if(xt(s.value,o)){if(s.children===i.children&&!Qe.current){e=Kt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Bt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ja(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ja(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,kr(e,n),i=ht(i),r=r(i),e.flags|=1,je(t,e,r,n),e.child;case 14:return r=e.type,i=gt(r,e.pendingProps),i=gt(r.type,i),uf(t,e,r,i,n);case 15:return pm(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:gt(r,i),Bs(t,e),e.tag=1,qe(r)?(t=!0,eo(e)):t=!1,kr(e,n),Hp(e,r,i),Ua(e,r,i,n),Wa(null,e,r,!0,t,n);case 19:return _m(t,e,n);case 22:return mm(t,e,n)}throw Error(T(156,e.tag))};function bm(t,e){return lp(t,e)}function y_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new y_(t,e,n,r)}function gc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function __(t){if(typeof t=="function")return gc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bu)return 11;if(t===Lu)return 14}return 2}function vn(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lr:return zn(n.children,i,s,e);case Mu:o=8,i|=8;break;case da:return t=ct(12,n,e,i|2),t.elementType=da,t.lanes=s,t;case fa:return t=ct(13,n,e,i),t.elementType=fa,t.lanes=s,t;case ha:return t=ct(19,n,e,i),t.elementType=ha,t.lanes=s,t;case Wh:return Go(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vh:o=10;break e;case Hh:o=9;break e;case bu:o=11;break e;case Lu:o=14;break e;case nn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function zn(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function Go(t,e,n,r){return t=ct(22,t,r,e),t.elementType=Wh,t.lanes=n,t.stateNode={isHidden:!1},t}function zl(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function jl(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_l(0),this.expirationTimes=_l(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_l(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function vc(t,e,n,r,i,s,o,l,a){return t=new w_(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ec(s),t}function S_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lm(t){if(!t)return Sn;t=t._reactInternals;e:{if(tr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(qe(n))return bp(t,n,e)}return e}function Fm(t,e,n,r,i,s,o,l,a){return t=vc(n,r,!0,t,i,s,o,l,a),t.context=Lm(null),n=t.current,r=Be(),i=gn(n),s=Bt(r,i),s.callback=e??null,pn(n,s,i),t.current.lanes=i,ts(t,i,r),Ye(t,r),t}function Qo(t,e,n,r){var i=e.current,s=Be(),o=gn(i);return n=Lm(n),e.context===null?e.context=n:e.pendingContext=n,e=Bt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pn(i,e,o),t!==null&&(Ct(t,i,o,s),Fs(t,i,o)),o}function po(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Sf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yc(t,e){Sf(t,e),(t=t.alternate)&&Sf(t,e)}function E_(){return null}var zm=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}qo.prototype.render=_c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));Qo(t,e,null,null)};qo.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$n(function(){Qo(null,t,null,null)}),e[Wt]=null}};function qo(t){this._internalRoot=t}qo.prototype.unstable_scheduleHydration=function(t){if(t){var e=pp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sn.length&&e!==0&&e<sn[n].priority;n++);sn.splice(n,0,t),n===0&&gp(t)}};function wc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ef(){}function C_(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=po(o);s.call(u)}}var o=Fm(e,r,t,0,null,!1,!1,"",Ef);return t._reactRootContainer=o,t[Wt]=o.current,bi(t.nodeType===8?t.parentNode:t),$n(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=po(a);l.call(u)}}var a=vc(t,0,!1,null,null,!1,!1,"",Ef);return t._reactRootContainer=a,t[Wt]=a.current,bi(t.nodeType===8?t.parentNode:t),$n(function(){Qo(e,a,n,r)}),a}function Xo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=po(o);l.call(a)}}Qo(e,o,t,i)}else o=C_(n,e,t,i,r);return po(o)}fp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ci(e.pendingLanes);n!==0&&(ju(e,n|1),Ye(e,ve()),!(J&6)&&(Lr=ve()+500,In()))}break;case 13:$n(function(){var r=$t(t,1);if(r!==null){var i=Be();Ct(r,t,1,i)}}),yc(t,1)}};Bu=function(t){if(t.tag===13){var e=$t(t,134217728);if(e!==null){var n=Be();Ct(e,t,134217728,n)}yc(t,134217728)}};hp=function(t){if(t.tag===13){var e=gn(t),n=$t(t,e);if(n!==null){var r=Be();Ct(n,t,e,r)}yc(t,e)}};pp=function(){return ee};mp=function(t,e){var n=ee;try{return ee=t,e()}finally{ee=n}};Ca=function(t,e,n){switch(e){case"input":if(ga(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Uo(r);if(!i)throw Error(T(90));Kh(r),ga(r,i)}}}break;case"textarea":Qh(t,n);break;case"select":e=n.value,e!=null&&wr(t,!!n.multiple,e,!1)}};tp=hc;np=$n;var k_={usingClientEntryPoint:!1,Events:[rs,dr,Uo,Zh,ep,hc]},ri={findFiberByHostInstance:An,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},x_={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=sp(t),t===null?null:t.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||E_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{Fo=Ps.inject(x_),Pt=Ps}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k_;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wc(e))throw Error(T(200));return S_(t,e,null,n)};ot.createRoot=function(t,e){if(!wc(t))throw Error(T(299));var n=!1,r="",i=zm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=vc(t,1,!1,null,null,n,!1,r,i),t[Wt]=e.current,bi(t.nodeType===8?t.parentNode:t),new _c(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=sp(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return $n(t)};ot.hydrate=function(t,e,n){if(!Yo(e))throw Error(T(200));return Xo(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!wc(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Fm(e,null,t,1,n??null,i,!1,s,o),t[Wt]=e.current,bi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new qo(e)};ot.render=function(t,e,n){if(!Yo(e))throw Error(T(200));return Xo(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!Yo(t))throw Error(T(40));return t._reactRootContainer?($n(function(){Xo(null,null,t,!1,function(){t._reactRootContainer=null,t[Wt]=null})}),!0):!1};ot.unstable_batchedUpdates=hc;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yo(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Xo(t,e,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=ot})(Ey);var Cf=aa;la.createRoot=Cf.createRoot,la.hydrateRoot=Cf.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var un;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(un||(un={}));const kf="popstate";function T_(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return nu("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Sc(i)}return P_(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function I_(){return Math.random().toString(36).substr(2,8)}function xf(t){return{usr:t.state,key:t.key}}function nu(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wr(e):e,{state:n,key:e&&e.key||r||I_()})}function Sc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function N_(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Sc(t);return Ne(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function P_(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=un.Pop,a=null;function u(){l=un.Pop,a&&a({action:l,location:f.location})}function c(g,v){l=un.Push;let _=nu(f.location,g,v);n&&n(_,g);let b=xf(_),p=f.createHref(_);try{o.pushState(b,"",p)}catch{i.location.assign(p)}s&&a&&a({action:l,location:f.location})}function d(g,v){l=un.Replace;let _=nu(f.location,g,v);n&&n(_,g);let b=xf(_),p=f.createHref(_);o.replaceState(b,"",p),s&&a&&a({action:l,location:f.location})}let f={get action(){return l},get location(){return t(i,o)},listen(g){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(kf,u),a=g,()=>{i.removeEventListener(kf,u),a=null}},createHref(g){return e(i,g)},encodeLocation(g){let v=N_(typeof g=="string"?g:Sc(g));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:c,replace:d,go(g){return o.go(g)}};return f}var Tf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tf||(Tf={}));function R_(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Wr(e):e,i=Um(r.pathname||"/",n);if(i==null)return null;let s=jm(t);O_(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=B_(s[l],H_(i));return o}function jm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(Ne(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=jn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),jm(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:z_(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Bm(s.path))i(s,o,a)}),e}function Bm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Bm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function O_(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:j_(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const A_=/^:\w+$/,D_=3,M_=2,b_=1,L_=10,F_=-2,If=t=>t==="*";function z_(t,e){let n=t.split("/"),r=n.length;return n.some(If)&&(r+=F_),e&&(r+=M_),n.filter(i=>!If(i)).reduce((i,s)=>i+(A_.test(s)?D_:s===""?b_:L_),r)}function j_(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function B_(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=U_({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:jn([i,c.pathname]),pathnameBase:q_(jn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=jn([i,c.pathnameBase]))}return s}function U_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=V_(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=l[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=W_(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function V_(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ec(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function H_(t){try{return decodeURI(t)}catch(e){return Ec(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function W_(t,e){try{return decodeURIComponent(t)}catch(n){return Ec(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Um(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ec(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $_(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Wr(t):t;return{pathname:n?n.startsWith("/")?n:K_(n,e):e,search:Y_(r),hash:X_(i)}}function K_(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Bl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function G_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Q_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Wr(t):(i=mo({},t),Ne(!i.pathname||!i.pathname.includes("?"),Bl("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Bl("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Bl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=$_(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const jn=t=>t.join("/").replace(/\/\/+/g,"/"),q_=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y_=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,X_=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class J_{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Z_(t){return t instanceof J_}const ew=["post","put","patch","delete"];[...ew];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ru(){return ru=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ru.apply(this,arguments)}function tw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const nw=typeof Object.is=="function"?Object.is:tw,{useState:rw,useEffect:iw,useLayoutEffect:sw,useDebugValue:ow}=oa;function lw(t,e,n){const r=e(),[{inst:i},s]=rw({inst:{value:r,getSnapshot:e}});return sw(()=>{i.value=r,i.getSnapshot=e,Ul(i)&&s({inst:i})},[t,r,e]),iw(()=>(Ul(i)&&s({inst:i}),t(()=>{Ul(i)&&s({inst:i})})),[t]),ow(r),r}function Ul(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!nw(n,r)}catch{return!0}}function aw(t,e,n){return e()}const uw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cw=!uw,dw=cw?aw:lw;"useSyncExternalStore"in oa&&(t=>t.useSyncExternalStore)(oa);const fw=R.createContext(null),hw=R.createContext(null),Vm=R.createContext(null),Cc=R.createContext(null),Jo=R.createContext(null),ss=R.createContext({outlet:null,matches:[]}),Hm=R.createContext(null);function Zo(){return R.useContext(Jo)!=null}function Wm(){return Zo()||Ne(!1),R.useContext(Jo).location}function os(){Zo()||Ne(!1);let{basename:t,navigator:e}=R.useContext(Cc),{matches:n}=R.useContext(ss),{pathname:r}=Wm(),i=JSON.stringify(G_(n).map(l=>l.pathnameBase)),s=R.useRef(!1);return R.useEffect(()=>{s.current=!0}),R.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=Q_(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:jn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function pw(t,e){Zo()||Ne(!1);let{navigator:n}=R.useContext(Cc),r=R.useContext(Vm),{matches:i}=R.useContext(ss),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Wm(),u;if(e){var c;let _=typeof e=="string"?Wr(e):e;l==="/"||(c=_.pathname)!=null&&c.startsWith(l)||Ne(!1),u=_}else u=a;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",g=R_(t,{pathname:f}),v=yw(g&&g.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:jn([l,n.encodeLocation?n.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?l:jn([l,n.encodeLocation?n.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,r||void 0);return e&&v?R.createElement(Jo.Provider,{value:{location:ru({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:un.Pop}},v):v}function mw(){let t=Ew(),e=Z_(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unhandled Thrown Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,R.createElement("p",null,"💿 Hey developer 👋"),R.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",R.createElement("code",{style:s},"errorElement")," props on ",R.createElement("code",{style:s},"<Route>")))}class gw extends R.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R.createElement(ss.Provider,{value:this.props.routeContext},R.createElement(Hm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vw(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(fw);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),R.createElement(ss.Provider,{value:e},r)}function yw(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ne(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||R.createElement(mw,null):null,c=e.concat(r.slice(0,l+1)),d=()=>R.createElement(vw,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?R.createElement(gw,{location:n.location,component:u,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Nf;(function(t){t.UseRevalidator="useRevalidator"})(Nf||(Nf={}));var go;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(go||(go={}));function _w(t){let e=R.useContext(Vm);return e||Ne(!1),e}function ww(t){let e=R.useContext(ss);return e||Ne(!1),e}function Sw(t){let e=ww(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function Ew(){var t;let e=R.useContext(Hm),n=_w(go.UseRouteError),r=Sw(go.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function fi(t){Ne(!1)}function Cw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=un.Pop,navigator:s,static:o=!1}=t;Zo()&&Ne(!1);let l=e.replace(/^\/*/,"/"),a=R.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,v=R.useMemo(()=>{let _=Um(u,l);return _==null?null:{pathname:_,search:c,hash:d,state:f,key:g}},[l,u,c,d,f,g]);return v==null?null:R.createElement(Cc.Provider,{value:a},R.createElement(Jo.Provider,{children:n,value:{location:v,navigationType:i}}))}function kw(t){let{children:e,location:n}=t,r=R.useContext(hw),i=r&&!e?r.router.routes:iu(e);return pw(i,n)}var Pf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Pf||(Pf={}));new Promise(()=>{});function iu(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;if(r.type===R.Fragment){n.push.apply(n,iu(r.props.children,e));return}r.type!==fi&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=iu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xw(t){let{basename:e,children:n,window:r}=t,i=R.useRef();i.current==null&&(i.current=T_({window:r,v5Compat:!0}));let s=i.current,[o,l]=R.useState({action:s.action,location:s.location});return R.useLayoutEffect(()=>s.listen(l),[s]),R.createElement(Cw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Rf||(Rf={}));var Of;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Of||(Of={}));var kc={},Tw=sa&&sa.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(kc,"__esModule",{value:!0});var Iw=R,xc=function(t){Tw(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.componentWillMount=function(){var n=this,r=this.props,i=r.src,s=r.preview,o=this.props.initialBlur;this.setState({src:s,blur:o}),this.fetch(i).then(function(l){return n.setState({src:l,blur:0})})},e.prototype.render=function(){var n=this.state.src,r=this.props.render;return r(n,this.getStyle())},e.prototype.fetch=function(n){return new Promise(function(r){var i=new Image;i.src=n,i.addEventListener("load",function(){return r(n)},!1)})},e.prototype.getStyle=function(){var n=this.props,r=n.transitionTime,i=n.timingFunction,s=this.state.blur;return{filter:"blur("+s+"px)",transition:"filter "+r+"ms "+i}},e}(Iw.Component);xc.defaultProps={transitionTime:500,timingFunction:"ease",initialBlur:10};kc.ProgressiveImage=xc;kc.default=xc;/**
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
 */const $m={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const N=function(t,e){if(!t)throw $r(e)},$r=function(t){return new Error("Firebase Database ("+$m.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Km=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Tc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Km(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Gm=function(t){const e=Km(t);return Tc.encodeByteArray(e,!0)},vo=function(t){return Gm(t).replace(/\./g,"")},su=function(t){try{return Tc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Pw(t){return Qm(void 0,t)}function Qm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Rw(n)||(t[n]=Qm(t[n],e[n]));return t}function Rw(t){return t!=="__proto__"}/**
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
 */function Ow(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ow())}function Aw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){return $m.NODE_ADMIN===!0}function Xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Jm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Dw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Mw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bw=()=>Mw().__FIREBASE_DEFAULTS__,Lw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Fw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&su(t[1]);return e&&JSON.parse(e)},Zm=()=>{try{return bw()||Lw()||Fw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zw=t=>{var e,n;return(n=(e=Zm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jw=t=>{const e=zw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Bw=()=>{var t;return(t=Zm())===null||t===void 0?void 0:t.config};/**
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
 */class Ic{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Uw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),l].join(".")}/**
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
 */const Vw="FirebaseError";class Kr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vw,Object.setPrototypeOf(this,Kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Hw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kr(i,l,r)}}function Hw(t,e){return t.replace(Ww,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Ww=/\{\$([^}]+)}/g;/**
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
 */function Wi(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
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
 */const eg=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wi(su(s[0])||""),n=Wi(su(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},$w=function(t){const e=eg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Kw=function(t){const e=eg(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Af(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ou(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Df(s)&&Df(o)){if(!ou(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Df(t){return t!==null&&typeof t=="object"}/**
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
 */function Gw(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Qw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const f=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function tg(t,e){return`${t} failed: ${e} argument `}/**
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
 */const qw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},tl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Gr(t){return t&&t._delegate?t._delegate:t}class Gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rn="[DEFAULT]";/**
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
 */class Yw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ic;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jw(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xw(t){return t===Rn?void 0:t}function Jw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const e1={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},t1=ne.INFO,n1={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},r1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=n1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ng{constructor(e){this.name=e,this._logLevel=t1,this._logHandler=r1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?e1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const i1=(t,e)=>e.some(n=>t instanceof n);let Mf,bf;function s1(){return Mf||(Mf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function o1(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rg=new WeakMap,lu=new WeakMap,ig=new WeakMap,Vl=new WeakMap,Nc=new WeakMap;function l1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ut(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rg.set(n,t)}).catch(()=>{}),Nc.set(e,t),e}function a1(t){if(lu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});lu.set(t,e)}let au={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ig.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function u1(t){au=t(au)}function c1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hl(this),e,...n);return ig.set(r,e.sort?e.sort():[e]),Ut(r)}:o1().includes(t)?function(...e){return t.apply(Hl(this),e),Ut(rg.get(this))}:function(...e){return Ut(t.apply(Hl(this),e))}}function d1(t){return typeof t=="function"?c1(t):(t instanceof IDBTransaction&&a1(t),i1(t,s1())?new Proxy(t,au):t)}function Ut(t){if(t instanceof IDBRequest)return l1(t);if(Vl.has(t))return Vl.get(t);const e=d1(t);return e!==t&&(Vl.set(t,e),Nc.set(e,t)),e}const Hl=t=>Nc.get(t);function nl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ut(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ut(o.result),a.oldVersion,a.newVersion,Ut(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}function Wl(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Ut(n).then(()=>{})}const f1=["get","getKey","getAll","getAllKeys","count"],h1=["put","add","delete","clear"],$l=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=h1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||f1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return $l.set(e,s),s}u1(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
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
 */class p1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(m1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function m1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const uu="@firebase/app",Ff="0.9.0";/**
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
 */const Kn=new ng("@firebase/app"),g1="@firebase/app-compat",v1="@firebase/analytics-compat",y1="@firebase/analytics",_1="@firebase/app-check-compat",w1="@firebase/app-check",S1="@firebase/auth",E1="@firebase/auth-compat",C1="@firebase/database",k1="@firebase/database-compat",x1="@firebase/functions",T1="@firebase/functions-compat",I1="@firebase/installations",N1="@firebase/installations-compat",P1="@firebase/messaging",R1="@firebase/messaging-compat",O1="@firebase/performance",A1="@firebase/performance-compat",D1="@firebase/remote-config",M1="@firebase/remote-config-compat",b1="@firebase/storage",L1="@firebase/storage-compat",F1="@firebase/firestore",z1="@firebase/firestore-compat",j1="firebase",B1="9.15.0";/**
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
 */const cu="[DEFAULT]",U1={[uu]:"fire-core",[g1]:"fire-core-compat",[y1]:"fire-analytics",[v1]:"fire-analytics-compat",[w1]:"fire-app-check",[_1]:"fire-app-check-compat",[S1]:"fire-auth",[E1]:"fire-auth-compat",[C1]:"fire-rtdb",[k1]:"fire-rtdb-compat",[x1]:"fire-fn",[T1]:"fire-fn-compat",[I1]:"fire-iid",[N1]:"fire-iid-compat",[P1]:"fire-fcm",[R1]:"fire-fcm-compat",[O1]:"fire-perf",[A1]:"fire-perf-compat",[D1]:"fire-rc",[M1]:"fire-rc-compat",[b1]:"fire-gcs",[L1]:"fire-gcs-compat",[F1]:"fire-fst",[z1]:"fire-fst-compat","fire-js":"fire-js",[j1]:"fire-js-all"};/**
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
 */const _o=new Map,du=new Map;function V1(t,e){try{t.container.addComponent(e)}catch(n){Kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function En(t){const e=t.name;if(du.has(e))return Kn.debug(`There were multiple attempts to register component ${e}.`),!1;du.set(e,t);for(const n of _o.values())V1(n,t);return!0}function rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const H1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yn=new el("app","Firebase",H1);/**
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
 */class W1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
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
 */const $1=B1;function sg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=Bw()),!n)throw yn.create("no-options");const s=_o.get(i);if(s){if(ou(n,s.options)&&ou(r,s.config))return s;throw yn.create("duplicate-app",{appName:i})}const o=new Zw(i);for(const a of du.values())o.addComponent(a);const l=new W1(n,r,o);return _o.set(i,l),l}function og(t=cu){const e=_o.get(t);if(!e&&t===cu)return sg();if(!e)throw yn.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=U1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kn.warn(l.join(" "));return}En(new Gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const K1="firebase-heartbeat-database",G1=1,$i="firebase-heartbeat-store";let Kl=null;function lg(){return Kl||(Kl=nl(K1,G1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($i)}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function Q1(t){try{return(await lg()).transaction($i).objectStore($i).get(ag(t))}catch(e){if(e instanceof Kr)Kn.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kn.warn(n.message)}}}async function zf(t,e){try{const r=(await lg()).transaction($i,"readwrite");return await r.objectStore($i).put(e,ag(t)),r.done}catch(n){if(n instanceof Kr)Kn.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kn.warn(r.message)}}}function ag(t){return`${t.name}!${t.options.appId}`}/**
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
 */const q1=1024,Y1=30*24*60*60*1e3;class X1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Z1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=jf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Y1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=jf(),{heartbeatsToSend:n,unsentEntries:r}=J1(this._heartbeatsCache.heartbeats),i=vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function jf(){return new Date().toISOString().substring(0,10)}function J1(t,e=q1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Bf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Bf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Z1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xm()?Jm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Q1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Bf(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function eS(t){En(new Gt("platform-logger",e=>new p1(e),"PRIVATE")),En(new Gt("heartbeat",e=>new X1(e),"PRIVATE")),Ot(uu,Ff,t),Ot(uu,Ff,"esm2017"),Ot("fire-js","")}eS("");var tS="firebase",nS="9.15.0";/**
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
 */Ot(tS,nS,"app");const ug="@firebase/installations",Pc="0.6.0";/**
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
 */const cg=1e4,dg=`w:${Pc}`,fg="FIS_v2",rS="https://firebaseinstallations.googleapis.com/v1",iS=60*60*1e3,sS="installations",oS="Installations";/**
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
 */const lS={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Gn=new el(sS,oS,lS);function hg(t){return t instanceof Kr&&t.code.includes("request-failed")}/**
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
 */function pg({projectId:t}){return`${rS}/projects/${t}/installations`}function mg(t){return{token:t.token,requestStatus:2,expiresIn:uS(t.expiresIn),creationTime:Date.now()}}async function gg(t,e){const r=(await e.json()).error;return Gn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function vg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aS(t,{refreshToken:e}){const n=vg(t);return n.append("Authorization",cS(e)),n}async function yg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function uS(t){return Number(t.replace("s","000"))}function cS(t){return`${fg} ${t}`}/**
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
 */async function dS({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=pg(t),i=vg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:fg,appId:t.appId,sdkVersion:dg},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await yg(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:mg(u.authToken)}}else throw await gg("Create Installation",a)}/**
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
 */function _g(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function fS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hS=/^[cdef][\w-]{21}$/,fu="";function pS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mS(t);return hS.test(n)?n:fu}catch{return fu}}function mS(t){return fS(t).substr(0,22)}/**
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
 */function il(t){return`${t.appName}!${t.appId}`}/**
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
 */const wg=new Map;function Sg(t,e){const n=il(t);Eg(n,e),gS(n,e)}function Eg(t,e){const n=wg.get(t);if(n)for(const r of n)r(e)}function gS(t,e){const n=vS();n&&n.postMessage({key:t,fid:e}),yS()}let bn=null;function vS(){return!bn&&"BroadcastChannel"in self&&(bn=new BroadcastChannel("[Firebase] FID Change"),bn.onmessage=t=>{Eg(t.data.key,t.data.fid)}),bn}function yS(){wg.size===0&&bn&&(bn.close(),bn=null)}/**
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
 */const _S="firebase-installations-database",wS=1,Qn="firebase-installations-store";let Gl=null;function Rc(){return Gl||(Gl=nl(_S,wS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}})),Gl}async function wo(t,e){const n=il(t),i=(await Rc()).transaction(Qn,"readwrite"),s=i.objectStore(Qn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Sg(t,e.fid),e}async function Cg(t){const e=il(t),r=(await Rc()).transaction(Qn,"readwrite");await r.objectStore(Qn).delete(e),await r.done}async function sl(t,e){const n=il(t),i=(await Rc()).transaction(Qn,"readwrite"),s=i.objectStore(Qn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Sg(t,l.fid),l}/**
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
 */async function Oc(t){let e;const n=await sl(t.appConfig,r=>{const i=SS(r),s=ES(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===fu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function SS(t){const e=t||{fid:pS(),registrationStatus:0};return kg(e)}function ES(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Gn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=CS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:kS(t)}:{installationEntry:e}}async function CS(t,e){try{const n=await dS(t,e);return wo(t.appConfig,n)}catch(n){throw hg(n)&&n.customData.serverCode===409?await Cg(t.appConfig):await wo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function kS(t){let e=await Uf(t.appConfig);for(;e.registrationStatus===1;)await _g(100),e=await Uf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Oc(t);return r||n}return e}function Uf(t){return sl(t,e=>{if(!e)throw Gn.create("installation-not-found");return kg(e)})}function kg(t){return xS(t)?{fid:t.fid,registrationStatus:0}:t}function xS(t){return t.registrationStatus===1&&t.registrationTime+cg<Date.now()}/**
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
 */async function TS({appConfig:t,heartbeatServiceProvider:e},n){const r=IS(t,n),i=aS(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:dg,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await yg(()=>fetch(r,l));if(a.ok){const u=await a.json();return mg(u)}else throw await gg("Generate Auth Token",a)}function IS(t,{fid:e}){return`${pg(t)}/${e}/authTokens:generate`}/**
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
 */async function Ac(t,e=!1){let n;const r=await sl(t.appConfig,s=>{if(!xg(s))throw Gn.create("not-registered");const o=s.authToken;if(!e&&RS(o))return s;if(o.requestStatus===1)return n=NS(t,e),s;{if(!navigator.onLine)throw Gn.create("app-offline");const l=AS(s);return n=PS(t,l),l}});return n?await n:r.authToken}async function NS(t,e){let n=await Vf(t.appConfig);for(;n.authToken.requestStatus===1;)await _g(100),n=await Vf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ac(t,e):r}function Vf(t){return sl(t,e=>{if(!xg(e))throw Gn.create("not-registered");const n=e.authToken;return DS(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function PS(t,e){try{const n=await TS(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wo(t.appConfig,r),n}catch(n){if(hg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Cg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wo(t.appConfig,r)}throw n}}function xg(t){return t!==void 0&&t.registrationStatus===2}function RS(t){return t.requestStatus===2&&!OS(t)}function OS(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+iS}function AS(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function DS(t){return t.requestStatus===1&&t.requestTime+cg<Date.now()}/**
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
 */async function MS(t){const e=t,{installationEntry:n,registrationPromise:r}=await Oc(e);return r?r.catch(console.error):Ac(e).catch(console.error),n.fid}/**
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
 */async function bS(t,e=!1){const n=t;return await LS(n),(await Ac(n,e)).token}async function LS(t){const{registrationPromise:e}=await Oc(t);e&&await e}/**
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
 */function FS(t){if(!t||!t.options)throw Ql("App Configuration");if(!t.name)throw Ql("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ql(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ql(t){return Gn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Tg="installations",zS="installations-internal",jS=t=>{const e=t.getProvider("app").getImmediate(),n=FS(e),r=rl(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},BS=t=>{const e=t.getProvider("app").getImmediate(),n=rl(e,Tg).getImmediate();return{getId:()=>MS(n),getToken:i=>bS(n,i)}};function US(){En(new Gt(Tg,jS,"PUBLIC")),En(new Gt(zS,BS,"PRIVATE"))}US();Ot(ug,Pc);Ot(ug,Pc,"esm2017");/**
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
 */const VS="/firebase-messaging-sw.js",HS="/firebase-cloud-messaging-push-scope",Ig="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",WS="https://fcmregistrations.googleapis.com/v1",Ng="google.c.a.c_id",$S="google.c.a.c_l",KS="google.c.a.ts",GS="google.c.a.e";var Hf;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hf||(Hf={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Ki;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ki||(Ki={}));/**
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
 */function bt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function QS(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const ql="fcm_token_details_db",qS=5,Wf="fcm_token_object_Store";async function YS(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ql))return null;let e=null;return(await nl(ql,qS,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Wf))return;const a=o.objectStore(Wf),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(l=c.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:bt(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:bt(c.auth),p256dh:bt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:bt(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:bt(c.auth),p256dh:bt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:bt(c.vapidKey)}}}}}})).close(),await Wl(ql),await Wl("fcm_vapid_details_db"),await Wl("undefined"),XS(e)?e:null}function XS(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const JS="firebase-messaging-database",ZS=1,qn="firebase-messaging-store";let Yl=null;function Dc(){return Yl||(Yl=nl(JS,ZS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}})),Yl}async function Pg(t){const e=bc(t),r=await(await Dc()).transaction(qn).objectStore(qn).get(e);if(r)return r;{const i=await YS(t.appConfig.senderId);if(i)return await Mc(t,i),i}}async function Mc(t,e){const n=bc(t),i=(await Dc()).transaction(qn,"readwrite");return await i.objectStore(qn).put(e,n),await i.done,e}async function eE(t){const e=bc(t),r=(await Dc()).transaction(qn,"readwrite");await r.objectStore(qn).delete(e),await r.done}function bc({appConfig:t}){return t.appId}/**
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
 */const tE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ue=new el("messaging","Messaging",tE);/**
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
 */async function nE(t,e){const n=await Fc(t),r=Og(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Lc(t.appConfig),i)).json()}catch(o){throw Ue.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ue.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ue.create("token-subscribe-no-token");return s.token}async function rE(t,e){const n=await Fc(t),r=Og(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Lc(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ue.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ue.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ue.create("token-update-no-token");return s.token}async function Rg(t,e){const r={method:"DELETE",headers:await Fc(t)};try{const s=await(await fetch(`${Lc(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ue.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ue.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Lc({projectId:t}){return`${WS}/projects/${t}/registrations`}async function Fc({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Og({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==Ig&&(i.web.applicationPubKey=r),i}/**
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
 */const iE=7*24*60*60*1e3;async function sE(t){const e=await aE(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:bt(e.getKey("auth")),p256dh:bt(e.getKey("p256dh"))},r=await Pg(t.firebaseDependencies);if(r){if(uE(r.subscriptionOptions,n))return Date.now()>=r.createTime+iE?lE(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Rg(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return $f(t.firebaseDependencies,n)}else return $f(t.firebaseDependencies,n)}async function oE(t){const e=await Pg(t.firebaseDependencies);e&&(await Rg(t.firebaseDependencies,e.token),await eE(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function lE(t,e){try{const n=await rE(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Mc(t.firebaseDependencies,r),n}catch(n){throw await oE(t),n}}async function $f(t,e){const r={token:await nE(t,e),createTime:Date.now(),subscriptionOptions:e};return await Mc(t,r),r.token}async function aE(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:QS(e)})}function uE(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function Kf(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return cE(e,t),dE(e,t),fE(e,t),e}function cE(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function dE(t,e){e.data&&(t.data=e.data)}function fE(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const a=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;a&&(t.fcmOptions.analyticsLabel=a)}/**
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
 */function hE(t){return typeof t=="object"&&!!t&&Ng in t}/**
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
 */Ag("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ag("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ag(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function pE(t){if(!t||!t.options)throw Xl("App Configuration Object");if(!t.name)throw Xl("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Xl(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Xl(t){return Ue.create("missing-app-config-values",{valueName:t})}/**
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
 */class mE{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=pE(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function gE(t){try{t.swRegistration=await navigator.serviceWorker.register(VS,{scope:HS}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ue.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function vE(t,e){if(!e&&!t.swRegistration&&await gE(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ue.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function yE(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Ig)}/**
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
 */async function Dg(t,e){if(!navigator)throw Ue.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ue.create("permission-blocked");return await yE(t,e==null?void 0:e.vapidKey),await vE(t,e==null?void 0:e.serviceWorkerRegistration),sE(t)}/**
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
 */async function _E(t,e,n){const r=wE(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Ng],message_name:n[$S],message_time:n[KS],message_device_time:Math.floor(Date.now()/1e3)})}function wE(t){switch(t){case Ki.NOTIFICATION_CLICKED:return"notification_open";case Ki.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function SE(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ki.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Kf(n)):t.onMessageHandler.next(Kf(n)));const r=n.data;hE(r)&&r[GS]==="1"&&await _E(t,n.messageType,r)}const Gf="@firebase/messaging",Qf="0.12.0";/**
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
 */const EE=t=>{const e=new mE(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>SE(e,n)),e},CE=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Dg(e,r)}};function kE(){En(new Gt("messaging",EE,"PUBLIC")),En(new Gt("messaging-internal",CE,"PRIVATE")),Ot(Gf,Qf),Ot(Gf,Qf,"esm2017")}/**
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
 */async function xE(){try{await Jm()}catch{return!1}return typeof window<"u"&&Xm()&&Dw()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function TE(t=og()){return xE().then(e=>{if(!e)throw Ue.create("unsupported-browser")},e=>{throw Ue.create("indexed-db-unsupported")}),rl(Gr(t),"messaging").getImmediate()}async function IE(t,e){return t=Gr(t),Dg(t,e)}kE();const qf="@firebase/database",Yf="0.14.0";/**
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
 */let Mg="";function NE(t){Mg=t}/**
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
 */class PE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class RE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PE(e)}}catch{}return new RE},Ln=bg("localStorage"),hu=bg("sessionStorage");/**
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
 */const Tr=new ng("@firebase/database"),OE=function(){let t=1;return function(){return t++}}(),Lg=function(t){const e=qw(t),n=new Qw;n.update(e);const r=n.digest();return Tc.encodeByteArray(r)},ls=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ls.apply(null,r):typeof r=="object"?e+=Te(r):e+=r,e+=" "}return e};let Bn=null,Xf=!0;const AE=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tr.logLevel=ne.VERBOSE,Bn=Tr.log.bind(Tr),e&&hu.set("logging_enabled",!0)):typeof t=="function"?Bn=t:(Bn=null,hu.remove("logging_enabled"))},Le=function(...t){if(Xf===!0&&(Xf=!1,Bn===null&&hu.get("logging_enabled")===!0&&AE(!0)),Bn){const e=ls.apply(null,t);Bn(e)}},as=function(t){return function(...e){Le(t,...e)}},pu=function(...t){const e="FIREBASE INTERNAL ERROR: "+ls(...t);Tr.error(e)},Qt=function(...t){const e=`FIREBASE FATAL ERROR: ${ls(...t)}`;throw Tr.error(e),new Error(e)},it=function(...t){const e="FIREBASE WARNING: "+ls(...t);Tr.warn(e)},DE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&it("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Fg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ME=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",Yn="[MAX_NAME]",Qr=function(t,e){if(t===e)return 0;if(t===zr||e===Yn)return-1;if(e===zr||t===Yn)return 1;{const n=Jf(t),r=Jf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bE=function(t,e){return t===e?0:t<e?-1:1},ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},zc=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Te(e[r]),n+=":",n+=zc(t[e[r]]);return n+="}",n},zg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const jg=function(t){N(!Fg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(c.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},LE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},FE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zE(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const jE=new RegExp("^-?(0*)\\d{1,10}$"),BE=-2147483648,UE=2147483647,Jf=function(t){if(jE.test(t)){const e=Number(t);if(e>=BE&&e<=UE)return e}return null},us=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw it("Exception was thrown by user callback.",n),e},Math.floor(0))}},VE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ei=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class HE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){it(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class WE{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',it(e)}}class Ir{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ir.OWNER="owner";/**
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
 */const jc="5",Bg="v",Ug="s",Vg="r",Hg="f",Wg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$g="ls",Kg="p",mu="ac",Gg="websocket",Qg="long_polling";/**
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
 */class qg{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ln.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ln.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $E(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Yg(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===Gg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Qg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$E(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class KE{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Pw(this.counters_)}}/**
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
 */const Jl={},Zl={};function Bc(t){const e=t.toString();return Jl[e]||(Jl[e]=new KE),Jl[e]}function GE(t,e){const n=t.toString();return Zl[n]||(Zl[n]=e()),Zl[n]}/**
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
 */class QE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&us(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zf="start",qE="close",YE="pLPCommand",XE="pRTLPCB",Xg="id",Jg="pw",Zg="ser",JE="cb",ZE="seg",eC="ts",tC="d",nC="dframe",ev=1870,tv=30,rC=ev-tv,iC=25e3,sC=3e4;class yr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=as(e),this.stats_=Bc(n),this.urlFn=a=>(this.appCheckToken&&(a[mu]=this.appCheckToken),Yg(n,Qg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new QE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(sC)),ME(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zf)this.id=l,this.password=a;else if(o===qE)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zf]="t",r[Zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[JE]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Bg]=jc,this.transportSessionId&&(r[Ug]=this.transportSessionId),this.lastSessionId&&(r[$g]=this.lastSessionId),this.applicationId&&(r[Kg]=this.applicationId),this.appCheckToken&&(r[mu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wg.test(location.hostname)&&(r[Vg]=Hg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){yr.forceAllow_=!0}static forceDisallow(){yr.forceDisallow_=!0}static isAvailable(){return yr.forceAllow_?!0:!yr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LE()&&!FE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Gm(n),i=zg(r,rC);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[nC]="t",r[Xg]=e,r[Jg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Uc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OE(),window[YE+this.uniqueCallbackIdentifier]=e,window[XE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Uc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xg]=this.myID,e[Jg]=this.myPW,e[Zg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+tv+r.length<=ev;){const o=this.pendingSegs.shift();r=r+"&"+ZE+i+"="+o.seg+"&"+eC+i+"="+o.ts+"&"+tC+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(iC)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const oC=16384,lC=45e3;let So=null;typeof MozWebSocket<"u"?So=MozWebSocket:typeof WebSocket<"u"&&(So=WebSocket);class _t{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=as(this.connId),this.stats_=Bc(n),this.connURL=_t.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Bg]=jc,typeof location<"u"&&location.hostname&&Wg.test(location.hostname)&&(o[Vg]=Hg),n&&(o[Ug]=n),r&&(o[$g]=r),i&&(o[mu]=i),s&&(o[Kg]=s),Yg(e,Gg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ln.set("previous_websocket_failure",!0);try{let r;Ym(),this.mySock=new So(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&So!==null&&!_t.forceDisallow_}static previouslyFailed(){return Ln.isInMemoryStorage||Ln.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ln.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=zg(n,oC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(lC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class Gi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[yr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||it("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of Gi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Gi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Gi.globalTransportInitialized_=!1;/**
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
 */const aC=6e4,uC=5e3,cC=10*1024,dC=100*1024,ea="t",eh="d",fC="s",th="r",hC="e",nh="o",rh="a",ih="n",sh="p",pC="h";class mC{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=as("c:"+this.id+":"),this.transportManager_=new Gi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>dC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ea in e){const n=e[ea];n===rh?this.upgradeIfSecondaryHealthy_():n===th?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ii("t",e),r=ii("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ih,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ii("t",e),r=ii("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ii(ea,e);if(eh in e){const r=e[eh];if(n===pC)this.onHandshake_(r);else if(n===ih){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===fC?this.onConnectionShutdown_(r):n===th?this.onReset_(r):n===hC?pu("Server Error: "+r):n===nh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jc!==r&&it("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ln.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class nv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class rv{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Eo extends rv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Eo}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const oh=32,lh=768;class te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new te("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Cn(t){return t.pieces_.length-t.pieceNum_}function re(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new te(t.pieces_,e)}function iv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function gC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function sv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function ov(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new te(e,0)}function we(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof te)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new te(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function Ke(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return Ke(re(t),re(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Vc(t,e){if(Cn(t)!==Cn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function wt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Cn(t)>Cn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class vC{constructor(e,n){this.errorPrefix_=n,this.parts_=sv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=tl(this.parts_[r]);lv(this)}}function yC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=tl(e),lv(t)}function _C(t){const e=t.parts_.pop();t.byteLength_-=tl(e),t.parts_.length>0&&(t.byteLength_-=1)}function lv(t){if(t.byteLength_>lh)throw new Error(t.errorPrefix_+"has a key path longer than "+lh+" bytes ("+t.byteLength_+").");if(t.parts_.length>oh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oh+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Hc extends rv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Hc}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const si=1e3,wC=60*5*1e3,ah=30*1e3,SC=1.3,EC=3e4,CC="server_kill",uh=3;class Vt extends nv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Vt.nextPersistentConnectionId_++,this.log_=as("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=si,this.maxReconnectDelay_=wC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Ym())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Eo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Te(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ic,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Vt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const r=Fr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();it(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Kw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ah)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$w(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pu("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>EC&&(this.reconnectDelay_=si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*SC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new mC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{it(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(CC)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&it(d),a())}}}interrupt(e){Le("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Le("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Af(this.interruptReasons_)&&(this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>zc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new te(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Le("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uh&&(this.reconnectDelay_=ah,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Le("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Mg.replace(/\./g,"-")]=1,qm()?e["framework.cordova"]=1:Aw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Eo.getInstance().currentlyOnline();return Af(this.interruptReasons_)&&e}}Vt.nextPersistentConnectionId_=0;Vt.nextConnectionId_=0;/**
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
 */class ${constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new $(e,n)}}/**
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
 */class ol{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(zr,e),i=new $(zr,n);return this.compare(r,i)!==0}minPost(){return $.MIN}}/**
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
 */let Rs;class av extends ol{static get __EMPTY_NODE(){return Rs}static set __EMPTY_NODE(e){Rs=e}compare(e,n){return Qr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(Yn,Rs)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,Rs)}toString(){return".key"}}const Nr=new av;/**
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
 */class Os{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??Ge.EMPTY_NODE,this.right=s??Ge.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ge.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class kC{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Os(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new kC;/**
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
 */function xC(t,e){return Qr(t.name,e.name)}function Wc(t,e){return Qr(t,e)}/**
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
 */let gu;function TC(t){gu=t}const uv=function(t){return typeof t=="number"?"number:"+jg(t):"string:"+t},cv=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else N(t===gu||t.isEmpty(),"priority of unexpected type.");N(t===gu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ch;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cv(this.priorityNode_)}static set __childrenNodeConstructor(e){ch=e}static get __childrenNodeConstructor(){return ch}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Cn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+uv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=jg(this.value_):e+=this.value_,this.lazyHash_=Lg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ce.VALUE_TYPE_ORDER.indexOf(n),s=Ce.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let dv,fv;function IC(t){dv=t}function NC(t){fv=t}class PC extends ol{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Qr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(Yn,new Ce("[PRIORITY-POST]",fv))}makePost(e,n){const r=dv(e);return new $(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const me=new PC;/**
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
 */const RC=Math.log(2);class OC{constructor(e){const n=s=>parseInt(Math.log(s)/RC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Co=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,f;if(c===0)return null;if(c===1)return d=t[a],f=n?n(d):d,new xe(f,d.node,xe.BLACK,null,null);{const g=parseInt(c/2,10)+a,v=i(a,g),_=i(g+1,u);return d=t[g],f=n?n(d):d,new xe(f,d.node,xe.BLACK,v,_)}},s=function(a){let u=null,c=null,d=t.length;const f=function(v,_){const b=d-v,p=d;d-=v;const h=i(b+1,p),m=t[b],w=n?n(m):m;g(new xe(w,m.node,_,null,h))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const _=a.nextBitIsOne(),b=Math.pow(2,a.count-(v+1));_?f(b,xe.BLACK):(f(b,xe.BLACK),f(b,xe.RED))}return c},o=new OC(t.length),l=s(o);return new Ge(r||e,l)};/**
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
 */let ta;const sr={};class jt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(sr&&me,"ChildrenNode.ts has not been loaded"),ta=ta||new jt({".priority":sr},{".priority":me}),ta}get(e){const n=Fr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Co(r,e.getCompare()):l=sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new jt(c,u)}addToIndexes(e,n){const r=yo(this.indexes_,(i,s)=>{const o=Fr(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator($.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Co(l,o.getCompare())}else return sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new $(e.name,l))),a.insert(e,e.node)}});return new jt(r,this.indexSet_)}removeFromIndexes(e,n){const r=yo(this.indexes_,i=>{if(i===sr)return i;{const s=n.get(e.name);return s?i.remove(new $(e.name,s)):i}});return new jt(r,this.indexSet_)}}/**
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
 */let oi;class j{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&cv(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oi||(oi=new j(new Ge(Wc),null,jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oi:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(re(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?oi:this.priorityNode_;return new j(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{N(K(e)!==".priority"||Cn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(re(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(me,(o,l)=>{n[o]=l.val(e),r++,s&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+uv(this.getPriority().val())+":"),this.forEachChild(me,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Lg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cs?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(me),i=n.getIterator(me);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AC extends j{constructor(){super(new Ge(Wc),j.EMPTY_NODE,jt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const cs=new AC;Object.defineProperties($,{MIN:{value:new $(zr,j.EMPTY_NODE)},MAX:{value:new $(Yn,cs)}});av.__EMPTY_NODE=j.EMPTY_NODE;Ce.__childrenNodeConstructor=j;TC(cs);NC(cs);/**
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
 */const DC=!0;function Fe(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,Fe(e))}if(!(t instanceof Array)&&DC){const n=[];let r=!1;if(Xe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Fe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new $(o,a)))}}),n.length===0)return j.EMPTY_NODE;const s=Co(n,xC,o=>o.name,Wc);if(r){const o=Co(n,me.getCompare());return new j(s,Fe(e),new jt({".priority":o},{".priority":me}))}else return new j(s,Fe(e),jt.Default)}else{let n=j.EMPTY_NODE;return Xe(t,(r,i)=>{if(Yt(t,r)&&r.substring(0,1)!=="."){const s=Fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Fe(e))}}IC(Fe);/**
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
 */class MC extends ol{constructor(e){super(),this.indexPath_=e,N(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Qr(e.name,n.name):s}makePost(e,n){const r=Fe(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,cs);return new $(Yn,e)}toString(){return sv(this.indexPath_,0).join("/")}}/**
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
 */class bC extends ol{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Qr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=Fe(e);return new $(n,r)}toString(){return".value"}}const LC=new bC;/**
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
 */function hv(t){return{type:"value",snapshotNode:t}}function jr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function FC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class $c{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Qi(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(jr(n,r)):o.trackChildChange(qi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(me,(i,s)=>{n.hasChild(i)||r.trackChildChange(Qi(i,s))}),n.isLeafNode()||n.forEachChild(me,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(qi(i,s,o))}else r.trackChildChange(jr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Yi{constructor(e){this.indexedFilter_=new $c(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yi.getStartPost_(e),this.endPost_=Yi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new $(n,r))||(r=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const s=this;return n.forEachChild(me,(o,l)=>{s.matches(new $(o,l))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class zC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Yi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new $(n,r))||(r=j.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new $(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(qi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Qi(n,d));const _=l.updateImmediateChild(n,j.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(jr(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Qi(u.name,u.node)),s.trackChildChange(jr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,j.EMPTY_NODE)):e}}/**
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
 */class Kc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Yn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new Kc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jC(t){return t.loadsAllData()?new $c(t.getIndex()):t.hasLimit()?new zC(t):new Yi(t)}function dh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===LC?n="$value":t.index_===Nr?n="$key":(N(t.index_ instanceof MC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Te(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Te(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Te(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
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
 */class ko extends nv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=as("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ko.getListenId_(e,r),l={};this.listens_[o]=l;const a=dh(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Fr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=ko.getListenId_(e,n);delete this.listens_[r]}get(e){const n=dh(e._queryParams),r=e._path.toString(),i=new Ic;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gw(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Wi(l.responseText)}catch{it("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&it("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class BC{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function xo(){return{value:null,children:new Map}}function pv(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,xo());const i=t.children.get(r);e=re(e),pv(i,e,n)}}function vu(t,e,n){t.value!==null?n(e,t.value):UC(t,(r,i)=>{const s=new te(e.toString()+"/"+r);vu(i,s,n)})}function UC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class VC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const hh=10*1e3,HC=30*1e3,WC=5*60*1e3;class $C{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VC(e);const r=hh+(HC-hh)*Math.random();Ei(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Xe(e,(i,s)=>{s>0&&Yt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*WC))}}/**
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
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function mv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class To{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=mv()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new te(e));return new To(Z(),n,this.revert)}}else return N(K(this.path)===e,"operationForChild called for unrelated child."),new To(re(this.path),this.affectedTree,this.revert)}}/**
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
 */class Xi{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Xi(this.source,Z()):new Xi(this.source,re(this.path))}}/**
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
 */class Xn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return G(this.path)?new Xn(this.source,Z(),this.snap.getImmediateChild(e)):new Xn(this.source,re(this.path),this.snap)}}/**
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
 */class Ji{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new te(e));return n.isEmpty()?null:n.value?new Xn(this.source,Z(),n.value):new Ji(this.source,Z(),n)}else return N(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ji(this.source,re(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Jn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class KC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function GC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(FC(o.childName,o.snapshotNode))}),li(t,i,"child_removed",e,r,n),li(t,i,"child_added",e,r,n),li(t,i,"child_moved",s,r,n),li(t,i,"child_changed",e,r,n),li(t,i,"value",e,r,n),i}function li(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>qC(t,l,a)),o.forEach(l=>{const a=QC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function QC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function qC(t,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function ll(t,e){return{eventCache:t,serverCache:e}}function Ci(t,e,n,r){return ll(new Jn(e,n,r),t.serverCache)}function gv(t,e,n,r){return ll(t.eventCache,new Jn(e,n,r))}function yu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let na;const YC=()=>(na||(na=new Ge(bE)),na);class le{constructor(e,n=YC()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return Xe(e,(r,i)=>{n=n.set(new te(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(G(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(re(e),n);return s!=null?{path:we(new te(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(re(e)):new le(null)}}set(e,n){if(G(e))return new le(n,this.children);{const r=K(e),s=(this.children.get(r)||new le(null)).set(re(e),n),o=this.children.insert(r,s);return new le(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(re(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new le(null):new le(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(re(e)):null}}setTree(e,n){if(G(e))return n;{const r=K(e),s=(this.children.get(r)||new le(null)).setTree(re(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new le(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(we(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(re(e),we(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(re(e),we(n,i),r):new le(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(we(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new le(null))}}function ki(t,e,n){if(G(e))return new kt(new le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ke(i,e);return s=s.updateChild(o,n),new kt(t.writeTree_.set(i,s))}else{const i=new le(n),s=t.writeTree_.setTree(e,i);return new kt(s)}}}function ph(t,e,n){let r=t;return Xe(n,(i,s)=>{r=ki(r,we(e,i),s)}),r}function mh(t,e){if(G(e))return kt.empty();{const n=t.writeTree_.setTree(e,new le(null));return new kt(n)}}function _u(t,e){return nr(t,e)!=null}function nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ke(n.path,e)):null}function gh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(r,i)=>{e.push(new $(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new $(r,i.value))}),e}function _n(t,e){if(G(e))return t;{const n=nr(t,e);return n!=null?new kt(new le(n)):new kt(t.writeTree_.subtree(e))}}function wu(t){return t.writeTree_.isEmpty()}function Br(t,e){return vv(Z(),t.writeTree_,e)}function vv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=vv(we(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(we(t,".priority"),r)),n}}/**
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
 */function qc(t,e){return Sv(e,t)}function XC(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ki(t.visibleWrites,e,n)),t.lastWriteId=r}function JC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ZC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&ek(l,r.path)?i=!1:wt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return tk(t),!0;if(r.snap)t.visibleWrites=mh(t.visibleWrites,r.path);else{const l=r.children;Xe(l,a=>{t.visibleWrites=mh(t.visibleWrites,we(r.path,a))})}return!0}else return!1}function ek(t,e){if(t.snap)return wt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&wt(we(t.path,n),e))return!0;return!1}function tk(t){t.visibleWrites=yv(t.allWrites,nk,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function nk(t){return t.visible}function yv(t,e,n){let r=kt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)wt(n,o)?(l=Ke(n,o),r=ki(r,l,s.snap)):wt(o,n)&&(l=Ke(o,n),r=ki(r,Z(),s.snap.getChild(l)));else if(s.children){if(wt(n,o))l=Ke(n,o),r=ph(r,l,s.children);else if(wt(o,n))if(l=Ke(o,n),G(l))r=ph(r,Z(),s.children);else{const a=Fr(s.children,K(l));if(a){const u=a.getChild(re(l));r=ki(r,Z(),u)}}}else throw $r("WriteRecord should have .snap or .children")}}return r}function _v(t,e,n,r,i){if(!r&&!i){const s=nr(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(wu(o))return n;if(n==null&&!_u(o,Z()))return null;{const l=n||j.EMPTY_NODE;return Br(o,l)}}}else{const s=_n(t.visibleWrites,e);if(!i&&wu(s))return n;if(!i&&n==null&&!_u(s,Z()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(wt(u.path,e)||wt(e,u.path))},l=yv(t.allWrites,o,e),a=n||j.EMPTY_NODE;return Br(l,a)}}}function rk(t,e,n){let r=j.EMPTY_NODE;const i=nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(me,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(me,(o,l)=>{const a=Br(_n(s,new te(o)),l);r=r.updateImmediateChild(o,a)}),gh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return gh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ik(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(_u(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return wu(o)?i.getChild(n):Br(o,i.getChild(n))}}function sk(t,e,n,r){const i=we(e,n),s=nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Br(o,r.getNode().getImmediateChild(n))}else return null}function ok(t,e){return nr(t.visibleWrites,e)}function lk(t,e,n,r,i,s,o){let l;const a=_n(t.visibleWrites,e),u=nr(a,Z());if(u!=null)l=u;else if(n!=null)l=Br(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function ak(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Io(t,e,n,r){return _v(t.writeTree,t.treePath,e,n,r)}function Yc(t,e){return rk(t.writeTree,t.treePath,e)}function vh(t,e,n,r){return ik(t.writeTree,t.treePath,e,n,r)}function No(t,e){return ok(t.writeTree,we(t.treePath,e))}function uk(t,e,n,r,i,s){return lk(t.writeTree,t.treePath,e,n,r,i,s)}function Xc(t,e,n){return sk(t.writeTree,t.treePath,e,n)}function wv(t,e){return Sv(we(t.treePath,e),t.writeTree)}function Sv(t,e){return{treePath:t,writeTree:e}}/**
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
 */class ck{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,qi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Qi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,jr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,qi(r,e.snapshotNode,i.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class dk{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Ev=new dk;class Jc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Jn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zn(this.viewCache_),s=uk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function fk(t){return{filter:t}}function hk(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function pk(t,e,n,r,i){const s=new ck;let o,l;if(n.type===St.OVERWRITE){const u=n;u.source.fromUser?o=Su(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Po(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===St.MERGE){const u=n;u.source.fromUser?o=gk(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Eu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===St.ACK_USER_WRITE){const u=n;u.revert?o=_k(t,e,u.path,r,i,s):o=vk(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===St.LISTEN_COMPLETE)o=yk(t,e,n.path,r,s);else throw $r("Unknown operation type: "+n.type);const a=s.getChanges();return mk(e,o,a),{viewCache:o,changes:a}}function mk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=yu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(hv(yu(e)))}}function Cv(t,e,n,r,i,s){const o=e.eventCache;if(No(r,n)!=null)return e;{let l,a;if(G(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zn(e),c=u instanceof j?u:j.EMPTY_NODE,d=Yc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Io(r,Zn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){N(Cn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=vh(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=re(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=vh(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Xc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ci(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Po(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=K(n);if(!a.isCompleteForPath(n)&&Cn(n)>1)return e;const v=re(n),b=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(a.getNode(),b):u=c.updateChild(a.getNode(),g,b,v,Ev,null)}const d=gv(e,u,a.isFullyInitialized()||G(n),c.filtersNodes()),f=new Jc(i,d,s);return Cv(t,d,n,i,f,l)}function Su(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Jc(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ci(e,u,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ci(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=re(n),g=l.getNode().getImmediateChild(d);let v;if(G(f))v=r;else{const _=c.getCompleteChild(d);_!=null?iv(f)===".priority"&&_.getChild(ov(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=j.EMPTY_NODE}if(g.equals(v))a=e;else{const _=t.filter.updateChild(l.getNode(),d,v,f,c,o);a=Ci(e,_,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function yh(t,e){return t.eventCache.isCompleteForChild(e)}function gk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=we(n,a);yh(e,K(c))&&(l=Su(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=we(n,a);yh(e,K(c))||(l=Su(t,l,c,u,i,s,o))}),l}function _h(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Eu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=r:u=new le(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=_h(t,g,f);a=Po(t,a,new te(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),_=_h(t,v,f);a=Po(t,a,new te(d),_,i,s,o,l)}}),a}function vk(t,e,n,r,i,s,o){if(No(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Po(t,e,n,a.getNode().getChild(n),i,s,l,o);if(G(n)){let u=new le(null);return a.getNode().forEachChild(Nr,(c,d)=>{u=u.set(new te(c),d)}),Eu(t,e,n,u,i,s,l,o)}else return e}else{let u=new le(null);return r.foreach((c,d)=>{const f=we(n,c);a.isCompleteForPath(f)&&(u=u.set(c,a.getNode().getChild(f)))}),Eu(t,e,n,u,i,s,l,o)}}function yk(t,e,n,r,i){const s=e.serverCache,o=gv(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return Cv(t,o,n,r,Ev,i)}function _k(t,e,n,r,i,s){let o;if(No(r,n)!=null)return e;{const l=new Jc(r,e,i),a=e.eventCache.getNode();let u;if(G(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Io(r,Zn(e));else{const d=e.serverCache.getNode();N(d instanceof j,"serverChildren would be complete if leaf node"),c=Yc(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=K(n);let d=Xc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,re(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,j.EMPTY_NODE,re(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Io(r,Zn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||No(r,Z())!=null,Ci(e,u,o,t.filter.filtersNodes())}}/**
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
 */class wk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new $c(r.getIndex()),s=jC(r);this.processor_=fk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(j.EMPTY_NODE,l.getNode(),null),c=new Jn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Jn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ll(d,c),this.eventGenerator_=new KC(this.query_)}get query(){return this.query_}}function Sk(t){return t.viewCache_.serverCache.getNode()}function Ek(t,e){const n=Zn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function wh(t){return t.eventRegistrations_.length===0}function Ck(t,e){t.eventRegistrations_.push(e)}function Sh(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Eh(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(N(Zn(t.viewCache_),"We should always have a full cache before handling merges"),N(yu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=pk(t.processor_,i,e,n,r);return hk(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,kv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function kk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(s,o)=>{r.push(jr(s,o))}),n.isFullyInitialized()&&r.push(hv(n.getNode())),kv(t,r,n.getNode(),e)}function kv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return GC(t.eventGenerator_,e,n,i)}/**
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
 */let Ro;class xk{constructor(){this.views=new Map}}function Tk(t){N(!Ro,"__referenceConstructor has already been defined"),Ro=t}function Ik(){return N(Ro,"Reference.ts has not been loaded"),Ro}function Nk(t){return t.views.size===0}function Zc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),Eh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Eh(o,e,n,r));return s}}function Pk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Io(n,i?r:null),a=!1;l?a=!0:r instanceof j?(l=Yc(n,r),a=!1):(l=j.EMPTY_NODE,a=!1);const u=ll(new Jn(l,a,!1),new Jn(r,i,!1));return new wk(e,u)}return o}function Rk(t,e,n,r,i,s){const o=Pk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ck(o,n),kk(o,n)}function Ok(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=kn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Sh(u,n,r)),wh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Sh(a,n,r)),wh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!kn(t)&&s.push(new(Ik())(e._repo,e._path)),{removed:s,events:o}}function xv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const r of t.views.values())n=n||Ek(r,e);return n}function Tv(t,e){if(e._queryParams.loadsAllData())return al(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Iv(t,e){return Tv(t,e)!=null}function kn(t){return al(t)!=null}function al(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Oo;function Ak(t){N(!Oo,"__referenceConstructor has already been defined"),Oo=t}function Dk(){return N(Oo,"Reference.ts has not been loaded"),Oo}let Mk=1;class Ch{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=ak(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function bk(t,e,n,r,i){return XC(t.pendingWriteTree_,e,n,r,i),i?ds(t,new Xn(mv(),e,n)):[]}function _r(t,e,n=!1){const r=JC(t.pendingWriteTree_,e);if(ZC(t.pendingWriteTree_,e)){let s=new le(null);return r.snap!=null?s=s.set(Z(),!0):Xe(r.children,o=>{s=s.set(new te(o),!0)}),ds(t,new To(r.path,s,n))}else return[]}function ul(t,e,n){return ds(t,new Xn(Gc(),e,n))}function Lk(t,e,n){const r=le.fromObject(n);return ds(t,new Ji(Gc(),e,r))}function Fk(t,e){return ds(t,new Xi(Gc(),e))}function zk(t,e,n){const r=ed(t,n);if(r){const i=td(r),s=i.path,o=i.queryId,l=Ke(s,e),a=new Xi(Qc(o),l);return nd(t,s,a)}else return[]}function Cu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Iv(o,e))){const a=Ok(o,e,n,r);Nk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>kn(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=Uk(f);for(let v=0;v<g.length;++v){const _=g[v],b=_.query,p=Ov(t,_);t.listenProvider_.startListening(xi(b),Ao(t,b),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(xi(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(cl(f));t.listenProvider_.stopListening(xi(f),g)}))}Vk(t,u)}return l}function jk(t,e,n,r){const i=ed(t,r);if(i!=null){const s=td(i),o=s.path,l=s.queryId,a=Ke(o,e),u=new Xn(Qc(l),a,n);return nd(t,o,u)}else return[]}function Bk(t,e,n,r){const i=ed(t,r);if(i){const s=td(i),o=s.path,l=s.queryId,a=Ke(o,e),u=le.fromObject(n),c=new Ji(Qc(l),a,u);return nd(t,o,c)}else return[]}function kh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=Ke(f,i);s=s||Pr(g,v),o=o||kn(g)});let l=t.syncPointTree_.get(i);l?(o=o||kn(l),s=s||Pr(l,Z())):(l=new xk,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const _=Pr(v,Z());_&&(s=s.updateImmediateChild(g,_))}));const u=Iv(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=cl(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Hk();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=qc(t.pendingWriteTree_,i);let d=Rk(l,e,n,c,s,a);if(!u&&!o&&!r){const f=Tv(l,e);d=d.concat(Wk(t,e,f))}return d}function Nv(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Ke(o,e),u=Pr(l,a);if(u)return u});return _v(i,e,s,n,!0)}function ds(t,e){return Pv(e,t.syncPointTree_,null,qc(t.pendingWriteTree_,Z()))}function Pv(t,e,n,r){if(G(t.path))return Rv(t,e,n,r);{const i=e.get(Z());n==null&&i!=null&&(n=Pr(i,Z()));let s=[];const o=K(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=wv(r,o);s=s.concat(Pv(l,a,u,c))}return i&&(s=s.concat(Zc(i,t,r,n))),s}}function Rv(t,e,n,r){const i=e.get(Z());n==null&&i!=null&&(n=Pr(i,Z()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=wv(r,o),c=t.operationForChild(o);c&&(s=s.concat(Rv(c,l,a,u)))}),i&&(s=s.concat(Zc(i,t,r,n))),s}function Ov(t,e){const n=e.query,r=Ao(t,n);return{hashFn:()=>(Sk(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?zk(t,n._path,r):Fk(t,n._path);{const s=zE(i,n);return Cu(t,n,null,s)}}}}function Ao(t,e){const n=cl(e);return t.queryToTagMap.get(n)}function cl(t){return t._path.toString()+"$"+t._queryIdentifier}function ed(t,e){return t.tagToQueryMap.get(e)}function td(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new te(t.substr(0,e))}}function nd(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=qc(t.pendingWriteTree_,e);return Zc(r,n,i,null)}function Uk(t){return t.fold((e,n,r)=>{if(n&&kn(n))return[al(n)];{let i=[];return n&&(i=xv(n)),Xe(r,(s,o)=>{i=i.concat(o)}),i}})}function xi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Dk())(t._repo,t._path):t}function Vk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=cl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Hk(){return Mk++}function Wk(t,e,n){const r=e._path,i=Ao(t,e),s=Ov(t,n),o=t.listenProvider_.startListening(xi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)N(!kn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!G(u)&&c&&kn(c))return[al(c).query];{let f=[];return c&&(f=f.concat(xv(c).map(g=>g.query))),Xe(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(xi(c),Ao(t,c))}}return o}/**
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
 */class rd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rd(n)}node(){return this.node_}}class id{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new id(this.syncTree_,n)}node(){return Nv(this.syncTree_,this.path_)}}const $k=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xh=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Kk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Gk(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Kk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},Gk=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Qk=function(t,e,n,r){return sd(e,new id(n,t),r)},qk=function(t,e,n){return sd(t,new rd(e),n)};function sd(t,e,n){const r=t.getPriority().val(),i=xh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=xh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ce(l,Fe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ce(i))),o.forEachChild(me,(l,a)=>{const u=sd(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class od{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ld(t,e){let n=e instanceof te?e:new te(e),r=t,i=K(n);for(;i!==null;){const s=Fr(r.node.children,i)||{children:{},childCount:0};r=new od(i,r,s),n=re(n),i=K(n)}return r}function qr(t){return t.node.value}function Av(t,e){t.node.value=e,ku(t)}function Dv(t){return t.node.childCount>0}function Yk(t){return qr(t)===void 0&&!Dv(t)}function dl(t,e){Xe(t.node.children,(n,r)=>{e(new od(n,t,r))})}function Mv(t,e,n,r){n&&!r&&e(t),dl(t,i=>{Mv(i,e,!0,r)}),n&&r&&e(t)}function Xk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function fs(t){return new te(t.parent===null?t.name:fs(t.parent)+"/"+t.name)}function ku(t){t.parent!==null&&Jk(t.parent,t.name,t)}function Jk(t,e,n){const r=Yk(n),i=Yt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ku(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ku(t))}/**
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
 */const Zk=/[\[\].#$\/\u0000-\u001F\u007F]/,ex=/[\[\].#$\u0000-\u001F\u007F]/,ra=10*1024*1024,bv=function(t){return typeof t=="string"&&t.length!==0&&!Zk.test(t)},Lv=function(t){return typeof t=="string"&&t.length!==0&&!ex.test(t)},tx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Lv(t)},Fv=function(t,e,n){const r=n instanceof te?new vC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(r));if(typeof e=="function")throw new Error(t+"contains a function "+On(r)+" with contents = "+e.toString());if(Fg(e))throw new Error(t+"contains "+e.toString()+" "+On(r));if(typeof e=="string"&&e.length>ra/3&&tl(e)>ra)throw new Error(t+"contains a string greater than "+ra+" utf8 bytes "+On(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Xe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!bv(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yC(r,o),Fv(t,l,r),_C(r)}),i&&s)throw new Error(t+' contains ".value" child '+On(r)+" in addition to actual children.")}},zv=function(t,e,n,r){if(!(r&&n===void 0)&&!Lv(n))throw new Error(tg(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},nx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),zv(t,e,n,r)},rx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!bv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!tx(n))throw new Error(tg(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ix{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function jv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Vc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Bv(t,e,n){jv(t,n),Uv(t,r=>Vc(r,e))}function rr(t,e,n){jv(t,n),Uv(t,r=>wt(r,e)||wt(e,r))}function Uv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(sx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Bn&&Le("event: "+n.toString()),us(r)}}}/**
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
 */const ox="repo_interrupt",lx=25;class ax{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ix,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xo(),this.transactionQueueTree_=new od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ux(t,e,n){if(t.stats_=Bc(t.repoInfo_),t.forceRestClient_||VE())t.server_=new ko(t.repoInfo_,(r,i,s,o)=>{Th(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ih(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Vt(t.repoInfo_,e,(r,i,s,o)=>{Th(t,r,i,s,o)},r=>{Ih(t,r)},r=>{dx(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=GE(t.repoInfo_,()=>new $C(t.stats_,t.server_)),t.infoData_=new BC,t.infoSyncTree_=new Ch({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=ul(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ad(t,"connected",!1),t.serverSyncTree_=new Ch({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);rr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function cx(t){const n=t.infoData_.getNode(new te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vv(t){return $k({timestamp:cx(t)})}function Th(t,e,n,r,i){t.dataUpdateCount++;const s=new te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=yo(n,u=>Fe(u));o=Bk(t.serverSyncTree_,s,a,i)}else{const a=Fe(n);o=jk(t.serverSyncTree_,s,a,i)}else if(r){const a=yo(n,u=>Fe(u));o=Lk(t.serverSyncTree_,s,a)}else{const a=Fe(n);o=ul(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=cd(t,s)),rr(t.eventQueue_,l,o)}function Ih(t,e){ad(t,"connected",e),e===!1&&hx(t)}function dx(t,e){Xe(e,(n,r)=>{ad(t,n,r)})}function ad(t,e,n){const r=new te("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(r,i);const s=ul(t.infoSyncTree_,r,i);rr(t.eventQueue_,r,s)}function fx(t){return t.nextWriteId_++}function hx(t){Hv(t,"onDisconnectEvents");const e=Vv(t),n=xo();vu(t.onDisconnect_,Z(),(i,s)=>{const o=Qk(i,s,t.serverSyncTree_,e);pv(n,i,o)});let r=[];vu(n,Z(),(i,s)=>{r=r.concat(ul(t.serverSyncTree_,i,s));const o=yx(t,i);cd(t,o)}),t.onDisconnect_=xo(),rr(t.eventQueue_,Z(),r)}function px(t,e,n){let r;K(e._path)===".info"?r=kh(t.infoSyncTree_,e,n):r=kh(t.serverSyncTree_,e,n),Bv(t.eventQueue_,e._path,r)}function Nh(t,e,n){let r;K(e._path)===".info"?r=Cu(t.infoSyncTree_,e,n):r=Cu(t.serverSyncTree_,e,n),Bv(t.eventQueue_,e._path,r)}function mx(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ox)}function Hv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Le(n,...e)}function Wv(t,e,n){return Nv(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function ud(t,e=t.transactionQueueTree_){if(e||fl(t,e),qr(e)){const n=Kv(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gx(t,fs(e),n)}else Dv(e)&&dl(e,n=>{ud(t,n)})}function gx(t,e,n){const r=n.map(u=>u.currentWriteId),i=Wv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ke(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Hv(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(_r(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();fl(t,ld(t.transactionQueueTree_,e)),ud(t,t.transactionQueueTree_),rr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)us(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{it("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}cd(t,e)}},o)}function cd(t,e){const n=$v(t,e),r=fs(n),i=Kv(t,n);return vx(t,i,r),r}function vx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Ke(n,a.path);let c=!1,d;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(_r(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=lx)c=!0,d="maxretry",i=i.concat(_r(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Wv(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Fv("transaction failed: Data returned ",g,a.path);let v=Fe(g);typeof g=="object"&&g!=null&&Yt(g,".priority")||(v=v.updatePriority(f.getPriority()));const b=a.currentWriteId,p=Vv(t),h=qk(v,f,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=h,a.currentWriteId=fx(t),o.splice(o.indexOf(b),1),i=i.concat(bk(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(_r(t.serverSyncTree_,b,!0))}else c=!0,d="nodata",i=i.concat(_r(t.serverSyncTree_,a.currentWriteId,!0))}rr(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}fl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)us(r[l]);ud(t,t.transactionQueueTree_)}function $v(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&qr(r)===void 0;)r=ld(r,n),e=re(e),n=K(e);return r}function Kv(t,e){const n=[];return Gv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Gv(t,e,n){const r=qr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);dl(e,i=>{Gv(t,i,n)})}function fl(t,e){const n=qr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Av(e,n.length>0?n:void 0)}dl(e,r=>{fl(t,r)})}function yx(t,e){const n=fs($v(t,e)),r=ld(t.transactionQueueTree_,e);return Xk(r,i=>{ia(t,i)}),ia(t,r),Mv(r,i=>{ia(t,i)}),n}function ia(t,e){const n=qr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(_r(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Av(e,void 0):n.length=s+1,rr(t.eventQueue_,fs(e),i);for(let o=0;o<r.length;o++)us(r[o])}}/**
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
 */function _x(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):it(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ph=function(t,e){const n=Sx(t),r=n.namespace;n.domain==="firebase.com"&&Qt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Qt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DE();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new qg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new te(n.pathString)}},Sx=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=_x(t.substring(c,d)));const f=wx(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Qv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class qv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ex{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:iv(this._path)}get ref(){return new Xt(this._repo,this._path)}get _queryIdentifier(){const e=fh(this._queryParams),n=zc(e);return n==="{}"?"default":n}get _queryObject(){return fh(this._queryParams)}isEqual(e){if(e=Gr(e),!(e instanceof dd))return!1;const n=this._repo===e._repo,r=Vc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gC(this._path)}}class Xt extends dd{constructor(e,n){super(e,n,new Kc,!1)}get parent(){const e=ov(this._path);return e===null?null:new Xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new te(e),r=Do(this.ref,e);return new Zi(this._node.getChild(n),r,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Zi(i,Do(this.ref,r),me)))}hasChild(e){const n=new te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Cx(t,e){return t=Gr(t),t._checkNotDeleted("ref"),e!==void 0?Do(t._root,e):t._root}function Do(t,e){return t=Gr(t),K(t._path)===null?nx("child","path",e,!1):zv("child","path",e,!1),new Xt(t._repo,we(t._path,e))}class fd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Qv("value",this,new Zi(e.snapshotNode,new Xt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qv(this,e,n):null}matches(e){return e instanceof fd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new qv(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Do(new Xt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Qv(e.type,this,new Zi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function kx(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{Nh(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Ex(n,s||void 0),l=e==="value"?new fd(o):new hd(e,o);return px(t._repo,t,l),()=>Nh(t._repo,t,l)}function xx(t,e,n,r){return kx(t,"value",e,n,r)}Tk(Xt);Ak(Xt);/**
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
 */const Tx="FIREBASE_DATABASE_EMULATOR_HOST",xu={};let Ix=!1;function Nx(t,e,n,r){t.repoInfo_=new qg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function Px(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Qt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ph(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Tx]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Ph(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Ir(Ir.OWNER):new WE(t.name,t.options,e);rx("Invalid Firebase Database URL",o),G(o.path)||Qt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Ox(l,t,c,new HE(t.name,n));return new Ax(d,t)}function Rx(t,e){const n=xu[e];(!n||n[t.key]!==t)&&Qt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mx(t),delete n[t.key]}function Ox(t,e,n,r){let i=xu[e.name];i||(i={},xu[e.name]=i);let s=i[t.toURLString()];return s&&Qt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ax(t,Ix,n,r),i[t.toURLString()]=s,s}class Ax{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ux(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Qt("Cannot call "+e+" on a deleted database.")}}function Dx(t=og(),e){const n=rl(t,"database").getImmediate({identifier:e}),r=jw("database");return r&&Mx(n,...r),n}function Mx(t,e,n,r={}){t=Gr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Qt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Qt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ir(Ir.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Uw(r.mockUserToken,t.app.options.projectId);s=new Ir(o)}Nx(i,e,n,s)}/**
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
 */function bx(t){NE($1),En(new Gt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Px(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ot(qf,Yf,t),Ot(qf,Yf,"esm2017")}Vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bx();const Lx={apiKey:"AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",authDomain:"c1com-fae54.firebaseapp.com",projectId:"c1com-fae54",storageBucket:"c1com-fae54.appspot.com",messagingSenderId:"985908238030",appId:"1:985908238030:web:e0271c2dde819fc179629f",measurementId:"G-J42CTXNDCQ",databaseURL:"https://c1com-fae54-default-rtdb.firebaseio.com/"},Yv=sg(Lx),Fx=TE(Yv),zx=Dx(Yv),Mo=async()=>{localStorage.getItem("token")?(alert("It's already enabled"),window.location.replace("https://esos.pages.dev/done")):IE(Fx,{vapidKey:"BFis-cQVENFyIavJl96JRuQk3zWceC0YvjQOJYYHYQmfEda4WqnZeLNmkxepB5jTVm4sVx_JSrlBR1vYvUcPhPg"}).then(async t=>{t?await fetch("https://sosapi.zuisos.info/adduser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})}).then(e=>e.json()).then(e=>{console.log(e),localStorage.setItem("token",t),window.location.replace("https://zuisos.info/done")}).catch(e=>console.error(e)):(alert("No registration token available. Request permission to generate one."),console.log("No registration token available. Request permission to generate one."))}).catch(t=>{alert("An error occurred while retrieving token. "+t),console.log("An error occurred while retrieving token. "+t)})},hl=()=>H("footer",{className:"footer footer-center p-10 bg-[#111314] pt-[50vh]  text-base-content rounded",children:[H("div",{className:"grid grid-flow-col gap-4",children:[S("a",{className:"link link-hover",children:"About us"}),S("a",{className:"link link-hover",children:"Contact"}),S("a",{className:"link link-hover",children:"Jobs"}),S("a",{className:"link link-hover",children:"Press kit"})]}),S("div",{children:H("div",{className:"grid grid-flow-col gap-4",children:[S("a",{children:S("i",{class:"fa-brands cursor-pointer fa-github-alt text-3xl"})}),S("a",{children:S("i",{class:"fa-brands cursor-pointer fa-twitter text-3xl"})})]})}),S("div",{children:S("p",{children:"Copyright © 2023 - All right reserved by omar"})})]}),tt=()=>{R.useState(1),R.useState("./logo.png");let t=os();return S(dt,{children:H("div",{className:"navbar text-white bg-[#111314]",children:[S("div",{className:"navbar-start",children:H("div",{className:"dropdown",children:[S("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:S("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:S("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),H("ul",{tabIndex:0,className:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52",children:[S("li",{onClick:()=>{t("/",{replace:!1})},children:S("a",{children:"Homepage"})}),S("li",{onClick:()=>{t("/mo",{replace:!1})},children:S("a",{children:"Live data"})}),S("li",{onClick:()=>{t("/data",{replace:!1})},children:S("a",{children:"Get resouses"})}),S("li",{onClick:()=>{t("/",{replace:!1})},children:S("a",{children:"About"})})]})]})}),S("div",{className:"navbar-center",children:S("a",{onClick:()=>{t("/",{replace:!1})},className:"btn btn-ghost normal-case Poppins text-xl",children:"ESOS"})}),S("div",{className:"navbar-end",children:S("button",{className:"btn btn-ghost btn-circle",children:H("div",{className:"indicator",children:[S("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:S("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),S("span",{className:"badge badge-xs badge-primary indicator-item"})]})})})]})})},jx=()=>{os();const[t,e]=R.useState(1);if(R.useState(0),R.useState(0),R.useState(0),R.useState(!1),R.useState(""),t==0)return S(dt,{});if(t==1)return S(dt,{children:H("div",{className:"bg-[#111314] Poppins h-screen",children:[S(tt,{}),H("div",{className:"lg:pl-24 sm:pl-4 ",children:[S("div",{className:"text-left Poppins text-4xl mt-8",children:"Download resouses"}),H("div",{className:"text-[#b7b6b6] sm:mt-3 lg:mt-7 lg:max-w-[80%]",children:["All of this project resouses are open sourced (the collected data is availbe on demand you gotta contact me for more details) ",S("br",{}),"source code: ",S("a",{className:"underline underline-offset-2",href:"https://github.com/o0mrs/esos",children:"https://github.com/o0mrs/esos"})]})]}),S(hl,{})]})})};var Tu={},Bx={get exports(){return Tu},set exports(t){Tu=t}};(function(t,e){(function(r,i){t.exports=i()})(typeof self<"u"?self:sa,function(){return function(n){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=n,i.c=r,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:l})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="/",i(i.s=7)}([function(n,r,i){function s(o,l,a,u,c,d,f,g){if(!o){var v;if(l===void 0)v=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var _=[a,u,c,d,f,g],b=0;v=new Error(l.replace(/%s/g,function(){return _[b++]})),v.name="Invariant Violation"}throw v.framesToPop=1,v}}n.exports=s},function(n,r,i){function s(l){return function(){return l}}var o=function(){};o.thatReturns=s,o.thatReturnsFalse=s(!1),o.thatReturnsTrue=s(!0),o.thatReturnsNull=s(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(l){return l},n.exports=o},function(n,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function a(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function u(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var d={},f=0;f<10;f++)d["_"+String.fromCharCode(f)]=f;var g=Object.getOwnPropertyNames(d).map(function(_){return d[_]});if(g.join("")!=="0123456789")return!1;var v={};return"abcdefghijklmnopqrst".split("").forEach(function(_){v[_]=_}),Object.keys(Object.assign({},v)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}n.exports=u()?Object.assign:function(c,d){for(var f,g=a(c),v,_=1;_<arguments.length;_++){f=Object(arguments[_]);for(var b in f)o.call(f,b)&&(g[b]=f[b]);if(s){v=s(f);for(var p=0;p<v.length;p++)l.call(f,v[p])&&(g[v[p]]=f[v[p]])}}return g}},function(n,r,i){var s=i(1),o=s;n.exports=o},function(n,r,i){var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";n.exports=s},function(n,r,i){var s={};n.exports=s},function(n,r,i){function s(o,l,a,u,c){}n.exports=s},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(w){for(var E=1;E<arguments.length;E++){var I=arguments[E];for(var x in I)Object.prototype.hasOwnProperty.call(I,x)&&(w[x]=I[x])}return w},o=function(){function w(E,I){for(var x=0;x<I.length;x++){var P=I[x];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(E,P.key,P)}}return function(E,I,x){return I&&w(E.prototype,I),x&&w(E,x),E}}(),l=i(8),a=v(l),u=i(11),c=v(u),d=i(14),f=g(d);function g(w){if(w&&w.__esModule)return w;var E={};if(w!=null)for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&(E[I]=w[I]);return E.default=w,E}function v(w){return w&&w.__esModule?w:{default:w}}function _(w,E){var I={};for(var x in w)E.indexOf(x)>=0||Object.prototype.hasOwnProperty.call(w,x)&&(I[x]=w[x]);return I}function b(w,E){if(!(w instanceof E))throw new TypeError("Cannot call a class as a function")}function p(w,E){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return E&&(typeof E=="object"||typeof E=="function")?E:w}function h(w,E){if(typeof E!="function"&&E!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof E);w.prototype=Object.create(E&&E.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),E&&(Object.setPrototypeOf?Object.setPrototypeOf(w,E):w.__proto__=E)}var m=function(w){h(E,w);function E(){var I,x,P,X;b(this,E);for(var B=arguments.length,ge=Array(B),Pe=0;Pe<B;Pe++)ge[Pe]=arguments[Pe];return X=(x=(P=p(this,(I=E.__proto__||Object.getPrototypeOf(E)).call.apply(I,[this].concat(ge))),P),P.state={delayed:P.props.delay>0},x),p(P,X)}return o(E,[{key:"componentDidMount",value:function(){var x=this,P=this.props.delay,X=this.state.delayed;X&&(this.timeout=setTimeout(function(){x.setState({delayed:!1})},P))}},{key:"componentWillUnmount",value:function(){var x=this.timeout;x&&clearTimeout(x)}},{key:"render",value:function(){var x=this.props,P=x.color;x.delay;var X=x.type,B=x.height,ge=x.width,Pe=_(x,["color","delay","type","height","width"]),Je=this.state.delayed?"blank":X,Jt=f[Je],Zt={fill:P,height:B,width:ge};return a.default.createElement("div",s({style:Zt,dangerouslySetInnerHTML:{__html:Jt}},Pe))}}]),E}(l.Component);m.propTypes={color:c.default.string,delay:c.default.number,type:c.default.string,height:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number])},m.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},r.default=m},function(n,r,i){n.exports=i(9)},function(n,r,i){/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(2),o=i(0),l=i(5),a=i(1),u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.provider"):60109,_=u?Symbol.for("react.context"):60110,b=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.forward_ref"):60112,h=typeof Symbol=="function"&&Symbol.iterator;function m(y){for(var C=arguments.length-1,M="http://reactjs.org/docs/error-decoder.html?invariant="+y,A=0;A<C;A++)M+="&args[]="+encodeURIComponent(arguments[A+1]);o(!1,"Minified React error #"+y+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",M)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function E(y,C,M){this.props=y,this.context=C,this.refs=l,this.updater=M||w}E.prototype.isReactComponent={},E.prototype.setState=function(y,C){typeof y!="object"&&typeof y!="function"&&y!=null&&m("85"),this.updater.enqueueSetState(this,y,C,"setState")},E.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function I(){}I.prototype=E.prototype;function x(y,C,M){this.props=y,this.context=C,this.refs=l,this.updater=M||w}var P=x.prototype=new I;P.constructor=x,s(P,E.prototype),P.isPureReactComponent=!0;var X={current:null},B=Object.prototype.hasOwnProperty,ge={key:!0,ref:!0,__self:!0,__source:!0};function Pe(y,C,M){var A=void 0,F={},Y=null,Ee=null;if(C!=null)for(A in C.ref!==void 0&&(Ee=C.ref),C.key!==void 0&&(Y=""+C.key),C)B.call(C,A)&&!ge.hasOwnProperty(A)&&(F[A]=C[A]);var ue=arguments.length-2;if(ue===1)F.children=M;else if(1<ue){for(var At=Array(ue),Dt=0;Dt<ue;Dt++)At[Dt]=arguments[Dt+2];F.children=At}if(y&&y.defaultProps)for(A in ue=y.defaultProps,ue)F[A]===void 0&&(F[A]=ue[A]);return{$$typeof:c,type:y,key:Y,ref:Ee,props:F,_owner:X.current}}function Je(y){return typeof y=="object"&&y!==null&&y.$$typeof===c}function Jt(y){var C={"=":"=0",":":"=2"};return"$"+(""+y).replace(/[=:]/g,function(M){return C[M]})}var Zt=/\/+/g,Ze=[];function en(y,C,M,A){if(Ze.length){var F=Ze.pop();return F.result=y,F.keyPrefix=C,F.func=M,F.context=A,F.count=0,F}return{result:y,keyPrefix:C,func:M,context:A,count:0}}function O(y){y.result=null,y.keyPrefix=null,y.func=null,y.context=null,y.count=0,10>Ze.length&&Ze.push(y)}function z(y,C,M,A){var F=typeof y;(F==="undefined"||F==="boolean")&&(y=null);var Y=!1;if(y===null)Y=!0;else switch(F){case"string":case"number":Y=!0;break;case"object":switch(y.$$typeof){case c:case d:Y=!0}}if(Y)return M(A,y,C===""?"."+V(y,0):C),1;if(Y=0,C=C===""?".":C+":",Array.isArray(y))for(var Ee=0;Ee<y.length;Ee++){F=y[Ee];var ue=C+V(F,Ee);Y+=z(F,ue,M,A)}else if(y===null||typeof y>"u"?ue=null:(ue=h&&y[h]||y["@@iterator"],ue=typeof ue=="function"?ue:null),typeof ue=="function")for(y=ue.call(y),Ee=0;!(F=y.next()).done;)F=F.value,ue=C+V(F,Ee++),Y+=z(F,ue,M,A);else F==="object"&&(M=""+y,m("31",M==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":M,""));return Y}function V(y,C){return typeof y=="object"&&y!==null&&y.key!=null?Jt(y.key):C.toString(36)}function se(y,C){y.func.call(y.context,C,y.count++)}function k(y,C,M){var A=y.result,F=y.keyPrefix;y=y.func.call(y.context,C,y.count++),Array.isArray(y)?L(y,A,M,a.thatReturnsArgument):y!=null&&(Je(y)&&(C=F+(!y.key||C&&C.key===y.key?"":(""+y.key).replace(Zt,"$&/")+"/")+M,y={$$typeof:c,type:y.type,key:C,ref:y.ref,props:y.props,_owner:y._owner}),A.push(y))}function L(y,C,M,A,F){var Y="";M!=null&&(Y=(""+M).replace(Zt,"$&/")+"/"),C=en(C,Y,A,F),y==null||z(y,"",k,C),O(C)}var W={Children:{map:function(y,C,M){if(y==null)return y;var A=[];return L(y,A,null,C,M),A},forEach:function(y,C,M){if(y==null)return y;C=en(null,null,C,M),y==null||z(y,"",se,C),O(C)},count:function(y){return y==null?0:z(y,"",a.thatReturnsNull,null)},toArray:function(y){var C=[];return L(y,C,null,a.thatReturnsArgument),C},only:function(y){return Je(y)||m("143"),y}},createRef:function(){return{current:null}},Component:E,PureComponent:x,createContext:function(y,C){return C===void 0&&(C=null),y={$$typeof:_,_calculateChangedBits:C,_defaultValue:y,_currentValue:y,_changedBits:0,Provider:null,Consumer:null},y.Provider={$$typeof:v,_context:y},y.Consumer=y},forwardRef:function(y){return{$$typeof:p,render:y}},Fragment:f,StrictMode:g,unstable_AsyncMode:b,createElement:Pe,cloneElement:function(y,C,M){y==null&&m("267",y);var A=void 0,F=s({},y.props),Y=y.key,Ee=y.ref,ue=y._owner;if(C!=null){C.ref!==void 0&&(Ee=C.ref,ue=X.current),C.key!==void 0&&(Y=""+C.key);var At=void 0;y.type&&y.type.defaultProps&&(At=y.type.defaultProps);for(A in C)B.call(C,A)&&!ge.hasOwnProperty(A)&&(F[A]=C[A]===void 0&&At!==void 0?At[A]:C[A])}if(A=arguments.length-2,A===1)F.children=M;else if(1<A){At=Array(A);for(var Dt=0;Dt<A;Dt++)At[Dt]=arguments[Dt+2];F.children=At}return{$$typeof:c,type:y.type,key:Y,ref:Ee,props:F,_owner:ue}},createFactory:function(y){var C=Pe.bind(null,y);return C.type=y,C},isValidElement:Je,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:X,assign:s}},Q=Object.freeze({default:W}),U=Q&&W||Q;n.exports=U.default?U.default:U},function(n,r,i){},function(n,r,i){n.exports=i(13)()},function(n,r,i){var s=i(1),o=i(0),l=i(3),a=i(2),u=i(4),c=i(6);n.exports=function(d,f){var g=typeof Symbol=="function"&&Symbol.iterator,v="@@iterator";function _(k){var L=k&&(g&&k[g]||k[v]);if(typeof L=="function")return L}var b="<<anonymous>>",p={array:E("array"),bool:E("boolean"),func:E("function"),number:E("number"),object:E("object"),string:E("string"),symbol:E("symbol"),any:I(),arrayOf:x,element:P(),instanceOf:X,node:Je(),objectOf:ge,oneOf:B,oneOfType:Pe,shape:Jt,exact:Zt};function h(k,L){return k===L?k!==0||1/k===1/L:k!==k&&L!==L}function m(k){this.message=k,this.stack=""}m.prototype=Error.prototype;function w(k){function L(Q,U,y,C,M,A,F){return C=C||b,A=A||y,F!==u&&f&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),U[y]==null?Q?U[y]===null?new m("The "+M+" `"+A+"` is marked as required "+("in `"+C+"`, but its value is `null`.")):new m("The "+M+" `"+A+"` is marked as required in "+("`"+C+"`, but its value is `undefined`.")):null:k(U,y,C,M,A)}var W=L.bind(null,!1);return W.isRequired=L.bind(null,!0),W}function E(k){function L(W,Q,U,y,C,M){var A=W[Q],F=O(A);if(F!==k){var Y=z(A);return new m("Invalid "+y+" `"+C+"` of type "+("`"+Y+"` supplied to `"+U+"`, expected ")+("`"+k+"`."))}return null}return w(L)}function I(){return w(s.thatReturnsNull)}function x(k){function L(W,Q,U,y,C){if(typeof k!="function")return new m("Property `"+C+"` of component `"+U+"` has invalid PropType notation inside arrayOf.");var M=W[Q];if(!Array.isArray(M)){var A=O(M);return new m("Invalid "+y+" `"+C+"` of type "+("`"+A+"` supplied to `"+U+"`, expected an array."))}for(var F=0;F<M.length;F++){var Y=k(M,F,U,y,C+"["+F+"]",u);if(Y instanceof Error)return Y}return null}return w(L)}function P(){function k(L,W,Q,U,y){var C=L[W];if(!d(C)){var M=O(C);return new m("Invalid "+U+" `"+y+"` of type "+("`"+M+"` supplied to `"+Q+"`, expected a single ReactElement."))}return null}return w(k)}function X(k){function L(W,Q,U,y,C){if(!(W[Q]instanceof k)){var M=k.name||b,A=se(W[Q]);return new m("Invalid "+y+" `"+C+"` of type "+("`"+A+"` supplied to `"+U+"`, expected ")+("instance of `"+M+"`."))}return null}return w(L)}function B(k){if(!Array.isArray(k))return s.thatReturnsNull;function L(W,Q,U,y,C){for(var M=W[Q],A=0;A<k.length;A++)if(h(M,k[A]))return null;var F=JSON.stringify(k);return new m("Invalid "+y+" `"+C+"` of value `"+M+"` "+("supplied to `"+U+"`, expected one of "+F+"."))}return w(L)}function ge(k){function L(W,Q,U,y,C){if(typeof k!="function")return new m("Property `"+C+"` of component `"+U+"` has invalid PropType notation inside objectOf.");var M=W[Q],A=O(M);if(A!=="object")return new m("Invalid "+y+" `"+C+"` of type "+("`"+A+"` supplied to `"+U+"`, expected an object."));for(var F in M)if(M.hasOwnProperty(F)){var Y=k(M,F,U,y,C+"."+F,u);if(Y instanceof Error)return Y}return null}return w(L)}function Pe(k){if(!Array.isArray(k))return s.thatReturnsNull;for(var L=0;L<k.length;L++){var W=k[L];if(typeof W!="function")return l(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",V(W),L),s.thatReturnsNull}function Q(U,y,C,M,A){for(var F=0;F<k.length;F++){var Y=k[F];if(Y(U,y,C,M,A,u)==null)return null}return new m("Invalid "+M+" `"+A+"` supplied to "+("`"+C+"`."))}return w(Q)}function Je(){function k(L,W,Q,U,y){return Ze(L[W])?null:new m("Invalid "+U+" `"+y+"` supplied to "+("`"+Q+"`, expected a ReactNode."))}return w(k)}function Jt(k){function L(W,Q,U,y,C){var M=W[Q],A=O(M);if(A!=="object")return new m("Invalid "+y+" `"+C+"` of type `"+A+"` "+("supplied to `"+U+"`, expected `object`."));for(var F in k){var Y=k[F];if(Y){var Ee=Y(M,F,U,y,C+"."+F,u);if(Ee)return Ee}}return null}return w(L)}function Zt(k){function L(W,Q,U,y,C){var M=W[Q],A=O(M);if(A!=="object")return new m("Invalid "+y+" `"+C+"` of type `"+A+"` "+("supplied to `"+U+"`, expected `object`."));var F=a({},W[Q],k);for(var Y in F){var Ee=k[Y];if(!Ee)return new m("Invalid "+y+" `"+C+"` key `"+Y+"` supplied to `"+U+"`.\nBad object: "+JSON.stringify(W[Q],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(k),null,"  "));var ue=Ee(M,Y,U,y,C+"."+Y,u);if(ue)return ue}return null}return w(L)}function Ze(k){switch(typeof k){case"number":case"string":case"undefined":return!0;case"boolean":return!k;case"object":if(Array.isArray(k))return k.every(Ze);if(k===null||d(k))return!0;var L=_(k);if(L){var W=L.call(k),Q;if(L!==k.entries){for(;!(Q=W.next()).done;)if(!Ze(Q.value))return!1}else for(;!(Q=W.next()).done;){var U=Q.value;if(U&&!Ze(U[1]))return!1}}else return!1;return!0;default:return!1}}function en(k,L){return k==="symbol"||L["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&L instanceof Symbol}function O(k){var L=typeof k;return Array.isArray(k)?"array":k instanceof RegExp?"object":en(L,k)?"symbol":L}function z(k){if(typeof k>"u"||k===null)return""+k;var L=O(k);if(L==="object"){if(k instanceof Date)return"date";if(k instanceof RegExp)return"regexp"}return L}function V(k){var L=z(k);switch(L){case"array":case"object":return"an "+L;case"boolean":case"date":case"regexp":return"a "+L;default:return L}}function se(k){return!k.constructor||!k.constructor.name?b:k.constructor.name}return p.checkPropTypes=c,p.PropTypes=p,p}},function(n,r,i){var s=i(1),o=i(0),l=i(4);n.exports=function(){function a(d,f,g,v,_,b){b!==l&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}a.isRequired=a;function u(){return a}var c={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:u,element:a,instanceOf:u,node:a,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u};return c.checkPropTypes=s,c.PropTypes=c,c}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(15);Object.defineProperty(r,"blank",{enumerable:!0,get:function(){return v(s).default}});var o=i(16);Object.defineProperty(r,"balls",{enumerable:!0,get:function(){return v(o).default}});var l=i(17);Object.defineProperty(r,"bars",{enumerable:!0,get:function(){return v(l).default}});var a=i(18);Object.defineProperty(r,"bubbles",{enumerable:!0,get:function(){return v(a).default}});var u=i(19);Object.defineProperty(r,"cubes",{enumerable:!0,get:function(){return v(u).default}});var c=i(20);Object.defineProperty(r,"cylon",{enumerable:!0,get:function(){return v(c).default}});var d=i(21);Object.defineProperty(r,"spin",{enumerable:!0,get:function(){return v(d).default}});var f=i(22);Object.defineProperty(r,"spinningBubbles",{enumerable:!0,get:function(){return v(f).default}});var g=i(23);Object.defineProperty(r,"spokes",{enumerable:!0,get:function(){return v(g).default}});function v(_){return _&&_.__esModule?_:{default:_}}},function(n,r){n.exports=`<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
`},function(n,r){n.exports=`<svg class="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(2)" d="M0 12 V20 H4 V12z"> 
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(8)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.2" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(14)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.4" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(20)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.6" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(26)" d="M0 12 V20 H4 V12z">
    <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="0.8" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(2 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(12 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
  <path transform="translate(24 0)" d="M0 12 V20 H8 V12z"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keytimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline"  />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.5" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.1s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
  <path opacity="0.25" transform="translate(0 0)" d="M0 12 V20 H4 V12z">
    <animateTransform attributeName="transform" type="translate" values="0 0; 28 0; 0 0; 0 0" dur="1.5s" begin="0.2s" repeatCount="indefinite" keytimes="0;0.3;0.6;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".25" d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
  <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z">
    <animateTransform attributeName="transform" type="rotate" from="0 16 16" to="360 16 16" dur="0.8s" repeatCount="indefinite" />
  </path>
</svg>
`},function(n,r){n.exports=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(45 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.125s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(90 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.25s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(135 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.375s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(225 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.625s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(270 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.75s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(315 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.875s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="rotate(180 16 16)" cx="16" cy="3" r="0">
    <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="0.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
`},function(n,r){n.exports=`<svg id="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(0 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(45 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.125s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(90 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.25s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(135 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.375s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(180 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.5s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(225 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.675s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(270 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.75s"/>
  </path>
  <path opacity=".1" d="M14 0 H18 V8 H14 z" transform="rotate(315 16 16)">
    <animate attributeName="opacity" from="1" to=".1" dur="1s" repeatCount="indefinite" begin="0.875s"/>
  </path>
</svg>
`}])})})(Bx);const bo=Rh(Tu),Ux=()=>{os();const[t,e]=R.useState(0),[n,r]=R.useState("");if(t==0)return H(dt,{children:[H("div",{className:"bg-[#111314] lg:hidden Poppins h-screen",children:[S(tt,{}),H("div",{children:[S("div",{children:S("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),S("div",{className:"mt-12 text-center",children:"..."}),H("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[S("div",{className:"mt-16",children:S("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),S("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]}),H("div",{className:"bg-[#111314] sm:hidden lg:block Poppins h-screen",children:[S(tt,{}),S("div",{children:H("div",{className:"grid grid-cols-2",children:[S("div",{children:H("div",{className:" text-[#8BCCD0] leading-relaxed mt-32 Poppins font-bdold px-3 text-left pl-10 text-5xl",children:["Let's save lives from the ",S("br",{})," impact of earthquakes.",S("div",{className:" text-[#b3b3b3] leading-relaxed Poppins  text-lg font-bdold px-2 max-w-[90%] mt-5 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),S("div",{children:S("div",{onClick:()=>{e(2);const i=Mo();console.log(i)},className:"h-14 cursor-pointer text-white max-w-[90%] mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})}),S("div",{children:S("img",{src:"main2.png",className:"lg:max-w-[48vw] sm:max-w-screen px-3 mt-12 "})})]})})]}),S(hl,{})]});if(t==1)return H("div",{className:"bg-[#111314] Poppins h-screen",children:[S(tt,{}),H("div",{children:[S("div",{children:S("img",{src:"main.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),S("div",{className:" text-[#fff] leading-relaxed Poppins font-bdold px-4 mt-3 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),n,S("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:S("div",{onClick:async()=>{e(2),Mo()},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})]});if(t==2)return S(dt,{children:H("div",{className:"bg-[#111314] Poppins h-screen",children:[S(tt,{}),S("div",{className:"grid place-items-center sm:hidden lg:grid mt-52",children:S(bo,{type:"balls",color:"#fff",height:"8%",width:"8%"})}),S("div",{className:"grid place-items-center sm:grid lg:hidden mt-32",children:S(bo,{type:"balls",color:"#fff",height:"30%",width:"30%"})})]})});if(t==3)return S(dt,{children:H("div",{className:"bg-[#111314] Poppins h-screen text-4xl ",children:[S(tt,{}),S("div",{className:"mt-32 text-center",children:"done"})]})})},Vx=()=>{os();const[t,e]=R.useState(1),[n,r]=R.useState(0),[i,s]=R.useState(0),[o,l]=R.useState(0),[a,u]=R.useState(!1);if(R.useEffect(()=>{const c=Cx(zx,"a");return xx(c,d=>{d.val(),d.val()?(r(d.val().x),s(d.val().y),l(d.val().z),u(d.val().earth)):console.log("doesnt")})},[]),R.useState(""),t==0)return H("div",{className:"bg-[#111314 ] Poppins h-screen",children:[S(tt,{}),H("div",{children:[S("div",{children:S("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),S("div",{className:"mt-12 text-center",children:"..."}),H("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[S("div",{className:"mt-16",children:S("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),S("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]});if(t==1)return S(dt,{children:H("div",{className:"bg-[#111314]  Poppins h-screen",children:[S(tt,{}),H("div",{className:"text-6xl place-items-center mt-32 grid grid-cols-3",children:[H("div",{children:["x: ",n]}),H("div",{children:["y: ",i]}),H("div",{children:["z: ",o]})]}),H("div",{className:"text-center text-6xl mt-32",children:[a&&S(dt,{children:"THERE'S AN EARTHQUAKE"}),!a&&S(dt,{children:"SAFE"})]}),S(hl,{})]})})},Hx=()=>{os();const[t,e]=R.useState(3),[n,r]=R.useState("");if(t==0)return H(dt,{children:[H("div",{className:"bg-[#111314] lg:hidden Poppins h-screen",children:[S(tt,{}),H("div",{children:[S("div",{children:S("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),S("div",{className:"mt-12 text-center",children:"..."}),H("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[S("div",{className:"mt-16",children:S("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),S("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]}),H("div",{className:"bg-[#111314] sm:hidden lg:block Poppins h-screen",children:[S(tt,{}),S("div",{children:H("div",{className:"grid grid-cols-2",children:[S("div",{children:H("div",{className:" text-[#8BCCD0] leading-relaxed mt-32 Poppins font-bdold px-3 text-left pl-10 text-5xl",children:["Let's save lives from the ",S("br",{})," impact of earthquakes.",S("div",{className:" text-[#b3b3b3] leading-relaxed Poppins  text-lg font-bdold px-2 max-w-[90%] mt-5 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),S("div",{children:S("div",{onClick:()=>{e(2);const i=Mo();console.log(i)},className:"h-14 cursor-pointer text-white max-w-[90%] mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})}),S("div",{children:S("img",{src:"main2.png",className:"lg:max-w-[48vw] sm:max-w-screen px-3 mt-12 "})})]})})]}),S(hl,{})]});if(t==1)return H("div",{className:"bg-[#111314] Poppins h-screen",children:[S(tt,{}),H("div",{children:[S("div",{children:S("img",{src:"main.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),S("div",{className:" text-[#fff] leading-relaxed Poppins font-bdold px-4 mt-3 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),n,S("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:S("div",{onClick:async()=>{e(2);const i=await Mo();console.log(i)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})]});if(t==2)return S(dt,{children:H("div",{className:"bg-[#111314] Poppins h-screen",children:[S(tt,{}),S("div",{className:"grid place-items-center sm:hidden lg:grid mt-52",children:S(bo,{type:"balls",color:"#fff",height:"8%",width:"8%"})}),S("div",{className:"grid place-items-center sm:grid lg:hidden mt-32",children:S(bo,{type:"balls",color:"#fff",height:"30%",width:"30%"})})]})});if(t==3)return S(dt,{children:H("div",{className:"bg-[#111314] Poppins h-screen text-4xl ",children:[S(tt,{}),S("div",{className:"mt-32 text-center",children:"done"})]})})};function Wx(){return H(kw,{children:[S(fi,{path:"/",element:S(Ux,{})}),S(fi,{path:"/mo",element:S(Vx,{})}),S(fi,{path:"/data",element:S(jx,{})}),S(fi,{path:"/done",element:S(Hx,{})})]})}Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator?console.log("no"):(console.log("yes"),navigator.serviceWorker.ready.then(t=>{t.register()}));la.createRoot(document.getElementById("root")).render(S(xw,{children:S(Wx,{})}));
