function b_(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var li={},U_={get exports(){return li},set exports(t){li=t}},vo={},C={},B_={get exports(){return C},set exports(t){C=t}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Li=Symbol.for("react.element"),j_=Symbol.for("react.portal"),W_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),V_=Symbol.for("react.profiler"),H_=Symbol.for("react.provider"),K_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),Q_=Symbol.for("react.suspense"),q_=Symbol.for("react.memo"),Y_=Symbol.for("react.lazy"),ed=Symbol.iterator;function X_(t){return t===null||typeof t!="object"?null:(t=ed&&t[ed]||t["@@iterator"],typeof t=="function"?t:null)}var gh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_h=Object.assign,vh={};function Er(t,e,n){this.props=t,this.context=e,this.refs=vh,this.updater=n||gh}Er.prototype.isReactComponent={};Er.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Er.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yh(){}yh.prototype=Er.prototype;function cu(t,e,n){this.props=t,this.context=e,this.refs=vh,this.updater=n||gh}var du=cu.prototype=new yh;du.constructor=cu;_h(du,Er.prototype);du.isPureReactComponent=!0;var td=Array.isArray,wh=Object.prototype.hasOwnProperty,fu={current:null},Eh={key:!0,ref:!0,__self:!0,__source:!0};function Ch(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wh.call(e,r)&&!Eh.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Li,type:t,key:s,ref:o,props:i,_owner:fu.current}}function J_(t,e){return{$$typeof:Li,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Li}function Z_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nd=/\/+/g;function Jo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z_(""+t.key):e.toString(36)}function ps(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Li:case j_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Jo(o,0):r,td(i)?(n="",t!=null&&(n=t.replace(nd,"$&/")+"/"),ps(i,e,n,"",function(u){return u})):i!=null&&(hu(i)&&(i=J_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nd,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",td(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Jo(s,l);o+=ps(s,e,n,a,i)}else if(a=X_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Jo(s,l++),o+=ps(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qi(t,e,n){if(t==null)return t;var r=[],i=0;return ps(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ev(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xe={current:null},ms={transition:null},tv={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:ms,ReactCurrentOwner:fu};b.Children={map:qi,forEach:function(t,e,n){qi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qi(t,function(){e++}),e},toArray:function(t){return qi(t,function(e){return e})||[]},only:function(t){if(!hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};b.Component=Er;b.Fragment=W_;b.Profiler=V_;b.PureComponent=cu;b.StrictMode=$_;b.Suspense=Q_;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv;b.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_h({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)wh.call(e,a)&&!Eh.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Li,type:t.type,key:i,ref:s,props:r,_owner:o}};b.createContext=function(t){return t={$$typeof:K_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H_,_context:t},t.Consumer=t};b.createElement=Ch;b.createFactory=function(t){var e=Ch.bind(null,t);return e.type=t,e};b.createRef=function(){return{current:null}};b.forwardRef=function(t){return{$$typeof:G_,render:t}};b.isValidElement=hu;b.lazy=function(t){return{$$typeof:Y_,_payload:{_status:-1,_result:t},_init:ev}};b.memo=function(t,e){return{$$typeof:q_,type:t,compare:e===void 0?null:e}};b.startTransition=function(t){var e=ms.transition;ms.transition={};try{t()}finally{ms.transition=e}};b.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};b.useCallback=function(t,e){return xe.current.useCallback(t,e)};b.useContext=function(t){return xe.current.useContext(t)};b.useDebugValue=function(){};b.useDeferredValue=function(t){return xe.current.useDeferredValue(t)};b.useEffect=function(t,e){return xe.current.useEffect(t,e)};b.useId=function(){return xe.current.useId()};b.useImperativeHandle=function(t,e,n){return xe.current.useImperativeHandle(t,e,n)};b.useInsertionEffect=function(t,e){return xe.current.useInsertionEffect(t,e)};b.useLayoutEffect=function(t,e){return xe.current.useLayoutEffect(t,e)};b.useMemo=function(t,e){return xe.current.useMemo(t,e)};b.useReducer=function(t,e,n){return xe.current.useReducer(t,e,n)};b.useRef=function(t){return xe.current.useRef(t)};b.useState=function(t){return xe.current.useState(t)};b.useSyncExternalStore=function(t,e,n){return xe.current.useSyncExternalStore(t,e,n)};b.useTransition=function(){return xe.current.useTransition()};b.version="18.2.0";(function(t){t.exports=b})(B_);const nv=z_(C),$l=b_({__proto__:null,default:nv},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=C,iv=Symbol.for("react.element"),sv=Symbol.for("react.fragment"),ov=Object.prototype.hasOwnProperty,lv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function Sh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ov.call(e,r)&&!av.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iv,type:t,key:s,ref:o,props:i,_owner:lv.current}}vo.Fragment=sv;vo.jsx=Sh;vo.jsxs=Sh;(function(t){t.exports=vo})(U_);const gs=li.Fragment,P=li.jsx,se=li.jsxs;var Vl={},Hl={},uv={get exports(){return Hl},set exports(t){Hl=t}},$e={},Kl={},cv={get exports(){return Kl},set exports(t){Kl=t}},kh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,D){var O=I.length;I.push(D);e:for(;0<O;){var ne=O-1>>>1,ue=I[ne];if(0<i(ue,D))I[ne]=D,I[O]=ue,O=ne;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var D=I[0],O=I.pop();if(O!==D){I[0]=O;e:for(var ne=0,ue=I.length,Gi=ue>>>1;ne<Gi;){var on=2*(ne+1)-1,Xo=I[on],ln=on+1,Qi=I[ln];if(0>i(Xo,O))ln<ue&&0>i(Qi,Xo)?(I[ne]=Qi,I[ln]=O,ne=ln):(I[ne]=Xo,I[on]=O,ne=on);else if(ln<ue&&0>i(Qi,O))I[ne]=Qi,I[ln]=O,ne=ln;else break e}}return D}function i(I,D){var O=I.sortIndex-D.sortIndex;return O!==0?O:I.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,f=3,g=!1,_=!1,v=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=I)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function y(I){if(v=!1,m(I),!_)if(n(a)!==null)_=!0,qo(k);else{var D=n(u);D!==null&&Yo(y,D.startTime-I)}}function k(I,D){_=!1,v&&(v=!1,p(x),x=-1),g=!0;var O=f;try{for(m(D),d=n(a);d!==null&&(!(d.expirationTime>D)||I&&!Xe());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var ue=ne(d.expirationTime<=D);D=t.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(a)&&r(a),m(D)}else r(a);d=n(a)}if(d!==null)var Gi=!0;else{var on=n(u);on!==null&&Yo(y,on.startTime-D),Gi=!1}return Gi}finally{d=null,f=O,g=!1}}var T=!1,N=null,x=-1,te=5,z=-1;function Xe(){return!(t.unstable_now()-z<te)}function Pr(){if(N!==null){var I=t.unstable_now();z=I;var D=!0;try{D=N(!0,I)}finally{D?Ar():(T=!1,N=null)}}else T=!1}var Ar;if(typeof h=="function")Ar=function(){h(Pr)};else if(typeof MessageChannel<"u"){var Jc=new MessageChannel,F_=Jc.port2;Jc.port1.onmessage=Pr,Ar=function(){F_.postMessage(null)}}else Ar=function(){A(Pr,0)};function qo(I){N=I,T||(T=!0,Ar())}function Yo(I,D){x=A(function(){I(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,qo(k))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var O=f;f=D;try{return I()}finally{f=O}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,D){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var O=f;f=I;try{return D()}finally{f=O}},t.unstable_scheduleCallback=function(I,D,O){var ne=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?ne+O:ne):O=ne,I){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=O+ue,I={id:c++,callback:D,priorityLevel:I,startTime:O,expirationTime:ue,sortIndex:-1},O>ne?(I.sortIndex=O,e(u,I),n(a)===null&&I===n(u)&&(v?(p(x),x=-1):v=!0,Yo(y,O-ne))):(I.sortIndex=ue,e(a,I),_||g||(_=!0,qo(k))),I},t.unstable_shouldYield=Xe,t.unstable_wrapCallback=function(I){var D=f;return function(){var O=f;f=D;try{return I.apply(this,arguments)}finally{f=O}}}})(kh);(function(t){t.exports=kh})(cv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih=C,We=Kl;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Th=new Set,ai={};function Mn(t,e){cr(t,e),cr(t+"Capture",e)}function cr(t,e){for(ai[t]=e,t=0;t<e.length;t++)Th.add(e[t])}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,dv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rd={},id={};function fv(t){return Gl.call(id,t)?!0:Gl.call(rd,t)?!1:dv.test(t)?id[t]=!0:(rd[t]=!0,!1)}function hv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pv(t,e,n,r){if(e===null||typeof e>"u"||hv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Re(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ve[t]=new Re(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ve[e]=new Re(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ve[t]=new Re(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ve[t]=new Re(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ve[t]=new Re(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ve[t]=new Re(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ve[t]=new Re(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ve[t]=new Re(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ve[t]=new Re(t,5,!1,t.toLowerCase(),null,!1,!1)});var pu=/[\-:]([a-z])/g;function mu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pu,mu);ve[e]=new Re(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pu,mu);ve[e]=new Re(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pu,mu);ve[e]=new Re(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ve[t]=new Re(t,1,!1,t.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ve[t]=new Re(t,1,!1,t.toLowerCase(),null,!0,!0)});function gu(t,e,n,r){var i=ve.hasOwnProperty(e)?ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pv(e,n,i,r)&&(n=null),r||i===null?fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pt=Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),_u=Symbol.for("react.strict_mode"),Ql=Symbol.for("react.profiler"),Nh=Symbol.for("react.provider"),xh=Symbol.for("react.context"),vu=Symbol.for("react.forward_ref"),ql=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),yu=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Rh=Symbol.for("react.offscreen"),sd=Symbol.iterator;function Dr(t){return t===null||typeof t!="object"?null:(t=sd&&t[sd]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,Zo;function Vr(t){if(Zo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Zo=e&&e[1]||""}return`
`+Zo+t}var el=!1;function tl(t,e){if(!t||el)return"";el=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{el=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vr(t):""}function mv(t){switch(t.tag){case 5:return Vr(t.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return t=tl(t.type,!1),t;case 11:return t=tl(t.type.render,!1),t;case 1:return t=tl(t.type,!0),t;default:return""}}function Xl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jn:return"Fragment";case Bn:return"Portal";case Ql:return"Profiler";case _u:return"StrictMode";case ql:return"Suspense";case Yl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case xh:return(t.displayName||"Context")+".Consumer";case Nh:return(t._context.displayName||"Context")+".Provider";case vu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yu:return e=t.displayName||null,e!==null?e:Xl(t.type)||"Memo";case Mt:e=t._payload,t=t._init;try{return Xl(t(e))}catch{}}return null}function gv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xl(e);case 8:return e===_u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ph(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _v(t){var e=Ph(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xi(t){t._valueTracker||(t._valueTracker=_v(t))}function Ah(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ph(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ns(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Jl(t,e){var n=e.checked;return J({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function od(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dh(t,e){e=e.checked,e!=null&&gu(t,"checked",e,!1)}function Zl(t,e){Dh(t,e);var n=Xt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ea(t,e.type,n):e.hasOwnProperty("defaultValue")&&ea(t,e.type,Xt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ld(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ea(t,e,n){(e!=="number"||Ns(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hr=Array.isArray;function er(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ta(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return J({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ad(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Hr(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xt(n)}}function Oh(t,e){var n=Xt(e.value),r=Xt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ud(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Mh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Mh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ji,Lh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ji=Ji||document.createElement("div"),Ji.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ji.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vv=["Webkit","ms","Moz","O"];Object.keys(Qr).forEach(function(t){vv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qr[e]=Qr[t]})});function Fh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qr.hasOwnProperty(t)&&Qr[t]?(""+e).trim():e+"px"}function bh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Fh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yv=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(t,e){if(e){if(yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function ia(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oa=null,tr=null,nr=null;function cd(t){if(t=zi(t)){if(typeof oa!="function")throw Error(w(280));var e=t.stateNode;e&&(e=So(e),oa(t.stateNode,t.type,e))}}function zh(t){tr?nr?nr.push(t):nr=[t]:tr=t}function Uh(){if(tr){var t=tr,e=nr;if(nr=tr=null,cd(t),e)for(t=0;t<e.length;t++)cd(e[t])}}function Bh(t,e){return t(e)}function jh(){}var nl=!1;function Wh(t,e,n){if(nl)return t(e,n);nl=!0;try{return Bh(t,e,n)}finally{nl=!1,(tr!==null||nr!==null)&&(jh(),Uh())}}function ci(t,e){var n=t.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var la=!1;if(kt)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){la=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{la=!1}function wv(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var qr=!1,xs=null,Rs=!1,aa=null,Ev={onError:function(t){qr=!0,xs=t}};function Cv(t,e,n,r,i,s,o,l,a){qr=!1,xs=null,wv.apply(Ev,arguments)}function Sv(t,e,n,r,i,s,o,l,a){if(Cv.apply(this,arguments),qr){if(qr){var u=xs;qr=!1,xs=null}else throw Error(w(198));Rs||(Rs=!0,aa=u)}}function Ln(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dd(t){if(Ln(t)!==t)throw Error(w(188))}function kv(t){var e=t.alternate;if(!e){if(e=Ln(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dd(i),t;if(s===r)return dd(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Vh(t){return t=kv(t),t!==null?Hh(t):null}function Hh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hh(t);if(e!==null)return e;t=t.sibling}return null}var Kh=We.unstable_scheduleCallback,fd=We.unstable_cancelCallback,Iv=We.unstable_shouldYield,Tv=We.unstable_requestPaint,re=We.unstable_now,Nv=We.unstable_getCurrentPriorityLevel,Eu=We.unstable_ImmediatePriority,Gh=We.unstable_UserBlockingPriority,Ps=We.unstable_NormalPriority,xv=We.unstable_LowPriority,Qh=We.unstable_IdlePriority,yo=null,ft=null;function Rv(t){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(yo,t,void 0,(t.current.flags&128)===128)}catch{}}var st=Math.clz32?Math.clz32:Dv,Pv=Math.log,Av=Math.LN2;function Dv(t){return t>>>=0,t===0?32:31-(Pv(t)/Av|0)|0}var Zi=64,es=4194304;function Kr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function As(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Kr(l):(s&=o,s!==0&&(r=Kr(s)))}else o=n&~i,o!==0?r=Kr(o):s!==0&&(r=Kr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-st(e),i=1<<n,r|=t[n],e&=~i;return r}function Ov(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mv(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-st(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=Ov(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ua(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function qh(){var t=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),t}function rl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-st(e),t[e]=n}function Lv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-st(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-st(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function Yh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Xh,Su,Jh,Zh,ep,ca=!1,ts=[],jt=null,Wt=null,$t=null,di=new Map,fi=new Map,Ft=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,e){switch(t){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(e.pointerId)}}function Mr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zi(e),e!==null&&Su(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function bv(t,e,n,r,i){switch(e){case"focusin":return jt=Mr(jt,t,e,n,r,i),!0;case"dragenter":return Wt=Mr(Wt,t,e,n,r,i),!0;case"mouseover":return $t=Mr($t,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return di.set(s,Mr(di.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fi.set(s,Mr(fi.get(s)||null,t,e,n,r,i)),!0}return!1}function tp(t){var e=fn(t.target);if(e!==null){var n=Ln(e);if(n!==null){if(e=n.tag,e===13){if(e=$h(n),e!==null){t.blockedOn=e,ep(t.priority,function(){Jh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _s(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=da(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sa=r,n.target.dispatchEvent(r),sa=null}else return e=zi(n),e!==null&&Su(e),t.blockedOn=n,!1;e.shift()}return!0}function pd(t,e,n){_s(t)&&n.delete(e)}function zv(){ca=!1,jt!==null&&_s(jt)&&(jt=null),Wt!==null&&_s(Wt)&&(Wt=null),$t!==null&&_s($t)&&($t=null),di.forEach(pd),fi.forEach(pd)}function Lr(t,e){t.blockedOn===e&&(t.blockedOn=null,ca||(ca=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,zv)))}function hi(t){function e(i){return Lr(i,t)}if(0<ts.length){Lr(ts[0],t);for(var n=1;n<ts.length;n++){var r=ts[n];r.blockedOn===t&&(r.blockedOn=null)}}for(jt!==null&&Lr(jt,t),Wt!==null&&Lr(Wt,t),$t!==null&&Lr($t,t),di.forEach(e),fi.forEach(e),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)tp(n),n.blockedOn===null&&Ft.shift()}var rr=Pt.ReactCurrentBatchConfig,Ds=!0;function Uv(t,e,n,r){var i=j,s=rr.transition;rr.transition=null;try{j=1,ku(t,e,n,r)}finally{j=i,rr.transition=s}}function Bv(t,e,n,r){var i=j,s=rr.transition;rr.transition=null;try{j=4,ku(t,e,n,r)}finally{j=i,rr.transition=s}}function ku(t,e,n,r){if(Ds){var i=da(t,e,n,r);if(i===null)hl(t,e,r,Os,n),hd(t,r);else if(bv(i,t,e,n,r))r.stopPropagation();else if(hd(t,r),e&4&&-1<Fv.indexOf(t)){for(;i!==null;){var s=zi(i);if(s!==null&&Xh(s),s=da(t,e,n,r),s===null&&hl(t,e,r,Os,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hl(t,e,r,null,n)}}var Os=null;function da(t,e,n,r){if(Os=null,t=wu(r),t=fn(t),t!==null)if(e=Ln(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$h(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Os=t,null}function np(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nv()){case Eu:return 1;case Gh:return 4;case Ps:case xv:return 16;case Qh:return 536870912;default:return 16}default:return 16}}var zt=null,Iu=null,vs=null;function rp(){if(vs)return vs;var t,e=Iu,n=e.length,r,i="value"in zt?zt.value:zt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return vs=i.slice(t,1<r?1-r:void 0)}function ys(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ns(){return!0}function md(){return!1}function Ve(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ns:md,this.isPropagationStopped=md,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ns)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ns)},persist:function(){},isPersistent:ns}),e}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tu=Ve(Cr),bi=J({},Cr,{view:0,detail:0}),jv=Ve(bi),il,sl,Fr,wo=J({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fr&&(Fr&&t.type==="mousemove"?(il=t.screenX-Fr.screenX,sl=t.screenY-Fr.screenY):sl=il=0,Fr=t),il)},movementY:function(t){return"movementY"in t?t.movementY:sl}}),gd=Ve(wo),Wv=J({},wo,{dataTransfer:0}),$v=Ve(Wv),Vv=J({},bi,{relatedTarget:0}),ol=Ve(Vv),Hv=J({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Kv=Ve(Hv),Gv=J({},Cr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Qv=Ve(Gv),qv=J({},Cr,{data:0}),_d=Ve(qv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jv[t])?!!e[t]:!1}function Nu(){return Zv}var ey=J({},bi,{key:function(t){if(t.key){var e=Yv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ys(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(t){return t.type==="keypress"?ys(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ys(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ty=Ve(ey),ny=J({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Ve(ny),ry=J({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),iy=Ve(ry),sy=J({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oy=Ve(sy),ly=J({},wo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=Ve(ly),uy=[9,13,27,32],xu=kt&&"CompositionEvent"in window,Yr=null;kt&&"documentMode"in document&&(Yr=document.documentMode);var cy=kt&&"TextEvent"in window&&!Yr,ip=kt&&(!xu||Yr&&8<Yr&&11>=Yr),yd=String.fromCharCode(32),wd=!1;function sp(t,e){switch(t){case"keyup":return uy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wn=!1;function dy(t,e){switch(t){case"compositionend":return op(e);case"keypress":return e.which!==32?null:(wd=!0,yd);case"textInput":return t=e.data,t===yd&&wd?null:t;default:return null}}function fy(t,e){if(Wn)return t==="compositionend"||!xu&&sp(t,e)?(t=rp(),vs=Iu=zt=null,Wn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ip&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function lp(t,e,n,r){zh(r),e=Ms(e,"onChange"),0<e.length&&(n=new Tu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xr=null,pi=null;function py(t){vp(t,0)}function Eo(t){var e=Hn(t);if(Ah(e))return t}function my(t,e){if(t==="change")return e}var ap=!1;if(kt){var ll;if(kt){var al="oninput"in document;if(!al){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),al=typeof Cd.oninput=="function"}ll=al}else ll=!1;ap=ll&&(!document.documentMode||9<document.documentMode)}function Sd(){Xr&&(Xr.detachEvent("onpropertychange",up),pi=Xr=null)}function up(t){if(t.propertyName==="value"&&Eo(pi)){var e=[];lp(e,pi,t,wu(t)),Wh(py,e)}}function gy(t,e,n){t==="focusin"?(Sd(),Xr=e,pi=n,Xr.attachEvent("onpropertychange",up)):t==="focusout"&&Sd()}function _y(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eo(pi)}function vy(t,e){if(t==="click")return Eo(e)}function yy(t,e){if(t==="input"||t==="change")return Eo(e)}function wy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var at=typeof Object.is=="function"?Object.is:wy;function mi(t,e){if(at(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gl.call(e,i)||!at(t[i],e[i]))return!1}return!0}function kd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,e){var n=kd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kd(n)}}function cp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dp(){for(var t=window,e=Ns();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ns(t.document)}return e}function Ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ey(t){var e=dp(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cp(n.ownerDocument.documentElement,n)){if(r!==null&&Ru(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Id(n,s);var o=Id(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Cy=kt&&"documentMode"in document&&11>=document.documentMode,$n=null,fa=null,Jr=null,ha=!1;function Td(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||$n==null||$n!==Ns(r)||(r=$n,"selectionStart"in r&&Ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&mi(Jr,r)||(Jr=r,r=Ms(fa,"onSelect"),0<r.length&&(e=new Tu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=$n)))}function rs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vn={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionend:rs("Transition","TransitionEnd")},ul={},fp={};kt&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function Co(t){if(ul[t])return ul[t];if(!Vn[t])return t;var e=Vn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fp)return ul[t]=e[n];return t}var hp=Co("animationend"),pp=Co("animationiteration"),mp=Co("animationstart"),gp=Co("transitionend"),_p=new Map,Nd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(t,e){_p.set(t,e),Mn(e,[t])}for(var cl=0;cl<Nd.length;cl++){var dl=Nd[cl],Sy=dl.toLowerCase(),ky=dl[0].toUpperCase()+dl.slice(1);nn(Sy,"on"+ky)}nn(hp,"onAnimationEnd");nn(pp,"onAnimationIteration");nn(mp,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(gp,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function xd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Sv(r,e,void 0,t),t.currentTarget=null}function vp(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;xd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;xd(i,l,u),s=a}}}if(Rs)throw t=aa,Rs=!1,aa=null,t}function K(t,e){var n=e[va];n===void 0&&(n=e[va]=new Set);var r=t+"__bubble";n.has(r)||(yp(e,t,2,!1),n.add(r))}function fl(t,e,n){var r=0;e&&(r|=4),yp(n,t,r,e)}var is="_reactListening"+Math.random().toString(36).slice(2);function gi(t){if(!t[is]){t[is]=!0,Th.forEach(function(n){n!=="selectionchange"&&(Iy.has(n)||fl(n,!1,t),fl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[is]||(e[is]=!0,fl("selectionchange",!1,e))}}function yp(t,e,n,r){switch(np(e)){case 1:var i=Uv;break;case 4:i=Bv;break;default:i=ku}n=i.bind(null,e,n,t),i=void 0,!la||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=fn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Wh(function(){var u=s,c=wu(n),d=[];e:{var f=_p.get(t);if(f!==void 0){var g=Tu,_=t;switch(t){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":g=ty;break;case"focusin":_="focus",g=ol;break;case"focusout":_="blur",g=ol;break;case"beforeblur":case"afterblur":g=ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=$v;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=iy;break;case hp:case pp:case mp:g=Kv;break;case gp:g=oy;break;case"scroll":g=jv;break;case"wheel":g=ay;break;case"copy":case"cut":case"paste":g=Qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=vd}var v=(e&4)!==0,A=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ci(h,p),y!=null&&v.push(_i(h,y,m)))),A)break;h=h.return}0<v.length&&(f=new g(f,_,null,n,c),d.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==sa&&(_=n.relatedTarget||n.fromElement)&&(fn(_)||_[It]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?fn(_):null,_!==null&&(A=Ln(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=gd,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=vd,y="onPointerLeave",p="onPointerEnter",h="pointer"),A=g==null?f:Hn(g),m=_==null?f:Hn(_),f=new v(y,h+"leave",g,n,c),f.target=A,f.relatedTarget=m,y=null,fn(c)===u&&(v=new v(p,h+"enter",_,n,c),v.target=m,v.relatedTarget=A,y=v),A=y,g&&_)t:{for(v=g,p=_,h=0,m=v;m;m=zn(m))h++;for(m=0,y=p;y;y=zn(y))m++;for(;0<h-m;)v=zn(v),h--;for(;0<m-h;)p=zn(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=zn(v),p=zn(p)}v=null}else v=null;g!==null&&Rd(d,f,g,v,!1),_!==null&&A!==null&&Rd(d,A,_,v,!0)}}e:{if(f=u?Hn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var k=my;else if(Ed(f))if(ap)k=yy;else{k=_y;var T=gy}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=vy);if(k&&(k=k(t,u))){lp(d,k,n,c);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&ea(f,"number",f.value)}switch(T=u?Hn(u):window,t){case"focusin":(Ed(T)||T.contentEditable==="true")&&($n=T,fa=u,Jr=null);break;case"focusout":Jr=fa=$n=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,Td(d,n,c);break;case"selectionchange":if(Cy)break;case"keydown":case"keyup":Td(d,n,c)}var N;if(xu)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Wn?sp(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(ip&&n.locale!=="ko"&&(Wn||x!=="onCompositionStart"?x==="onCompositionEnd"&&Wn&&(N=rp()):(zt=c,Iu="value"in zt?zt.value:zt.textContent,Wn=!0)),T=Ms(u,x),0<T.length&&(x=new _d(x,t,null,n,c),d.push({event:x,listeners:T}),N?x.data=N:(N=op(n),N!==null&&(x.data=N)))),(N=cy?dy(t,n):fy(t,n))&&(u=Ms(u,"onBeforeInput"),0<u.length&&(c=new _d("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}vp(d,e)})}function _i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ms(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ci(t,n),s!=null&&r.unshift(_i(t,s,i)),s=ci(t,e),s!=null&&r.push(_i(t,s,i))),t=t.return}return r}function zn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ci(n,s),a!=null&&o.unshift(_i(n,a,l))):i||(a=ci(n,s),a!=null&&o.push(_i(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ty=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function Pd(t){return(typeof t=="string"?t:""+t).replace(Ty,`
`).replace(Ny,"")}function ss(t,e,n){if(e=Pd(e),Pd(t)!==e&&n)throw Error(w(425))}function Ls(){}var pa=null,ma=null;function ga(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _a=typeof setTimeout=="function"?setTimeout:void 0,xy=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(t){return Ad.resolve(null).then(t).catch(Py)}:_a;function Py(t){setTimeout(function(){throw t})}function pl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),hi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);hi(e)}function Vt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Sr=Math.random().toString(36).slice(2),dt="__reactFiber$"+Sr,vi="__reactProps$"+Sr,It="__reactContainer$"+Sr,va="__reactEvents$"+Sr,Ay="__reactListeners$"+Sr,Dy="__reactHandles$"+Sr;function fn(t){var e=t[dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[It]||n[dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dd(t);t!==null;){if(n=t[dt])return n;t=Dd(t)}return e}t=n,n=t.parentNode}return null}function zi(t){return t=t[dt]||t[It],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function So(t){return t[vi]||null}var ya=[],Kn=-1;function rn(t){return{current:t}}function Q(t){0>Kn||(t.current=ya[Kn],ya[Kn]=null,Kn--)}function H(t,e){Kn++,ya[Kn]=t.current,t.current=e}var Jt={},ke=rn(Jt),Me=rn(!1),En=Jt;function dr(t,e){var n=t.type.contextTypes;if(!n)return Jt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Le(t){return t=t.childContextTypes,t!=null}function Fs(){Q(Me),Q(ke)}function Od(t,e,n){if(ke.current!==Jt)throw Error(w(168));H(ke,e),H(Me,n)}function wp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,gv(t)||"Unknown",i));return J({},n,r)}function bs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jt,En=ke.current,H(ke,t),H(Me,Me.current),!0}function Md(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=wp(t,e,En),r.__reactInternalMemoizedMergedChildContext=t,Q(Me),Q(ke),H(ke,t)):Q(Me),H(Me,n)}var _t=null,ko=!1,ml=!1;function Ep(t){_t===null?_t=[t]:_t.push(t)}function Oy(t){ko=!0,Ep(t)}function sn(){if(!ml&&_t!==null){ml=!0;var t=0,e=j;try{var n=_t;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_t=null,ko=!1}catch(i){throw _t!==null&&(_t=_t.slice(t+1)),Kh(Eu,sn),i}finally{j=e,ml=!1}}return null}var Gn=[],Qn=0,zs=null,Us=0,He=[],Ke=0,Cn=null,vt=1,yt="";function an(t,e){Gn[Qn++]=Us,Gn[Qn++]=zs,zs=t,Us=e}function Cp(t,e,n){He[Ke++]=vt,He[Ke++]=yt,He[Ke++]=Cn,Cn=t;var r=vt;t=yt;var i=32-st(r)-1;r&=~(1<<i),n+=1;var s=32-st(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,vt=1<<32-st(e)+i|n<<i|r,yt=s+t}else vt=1<<s|n<<i|r,yt=t}function Pu(t){t.return!==null&&(an(t,1),Cp(t,1,0))}function Au(t){for(;t===zs;)zs=Gn[--Qn],Gn[Qn]=null,Us=Gn[--Qn],Gn[Qn]=null;for(;t===Cn;)Cn=He[--Ke],He[Ke]=null,yt=He[--Ke],He[Ke]=null,vt=He[--Ke],He[Ke]=null}var Be=null,Ue=null,q=!1,tt=null;function Sp(t,e){var n=Ge(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ld(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Be=t,Ue=Vt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Be=t,Ue=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cn!==null?{id:vt,overflow:yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ge(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Be=t,Ue=null,!0):!1;default:return!1}}function wa(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ea(t){if(q){var e=Ue;if(e){var n=e;if(!Ld(t,e)){if(wa(t))throw Error(w(418));e=Vt(n.nextSibling);var r=Be;e&&Ld(t,e)?Sp(r,n):(t.flags=t.flags&-4097|2,q=!1,Be=t)}}else{if(wa(t))throw Error(w(418));t.flags=t.flags&-4097|2,q=!1,Be=t}}}function Fd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Be=t}function os(t){if(t!==Be)return!1;if(!q)return Fd(t),q=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ga(t.type,t.memoizedProps)),e&&(e=Ue)){if(wa(t))throw kp(),Error(w(418));for(;e;)Sp(t,e),e=Vt(e.nextSibling)}if(Fd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ue=Vt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ue=null}}else Ue=Be?Vt(t.stateNode.nextSibling):null;return!0}function kp(){for(var t=Ue;t;)t=Vt(t.nextSibling)}function fr(){Ue=Be=null,q=!1}function Du(t){tt===null?tt=[t]:tt.push(t)}var My=Pt.ReactCurrentBatchConfig;function Ze(t,e){if(t&&t.defaultProps){e=J({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Bs=rn(null),js=null,qn=null,Ou=null;function Mu(){Ou=qn=js=null}function Lu(t){var e=Bs.current;Q(Bs),t._currentValue=e}function Ca(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ir(t,e){js=t,Ou=qn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ae=!0),t.firstContext=null)}function qe(t){var e=t._currentValue;if(Ou!==t)if(t={context:t,memoizedValue:e,next:null},qn===null){if(js===null)throw Error(w(308));qn=t,js.dependencies={lanes:0,firstContext:t}}else qn=qn.next=t;return e}var hn=null;function Fu(t){hn===null?hn=[t]:hn.push(t)}function Ip(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Fu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Tt(t,r)}function Tt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Lt=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Et(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ht(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,U&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Tt(t,n)}return i=r.interleaved,i===null?(e.next=e,Fu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Tt(t,n)}function ws(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cu(t,n)}}function bd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ws(t,e,n,r){var i=t.updateQueue;Lt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(f=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){d=_.call(g,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(g,d,f):_,f==null)break e;d=J({},d,f);break e;case 2:Lt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);kn|=o,t.lanes=o,t.memoizedState=d}}function zd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Np=new Ih.Component().refs;function Sa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:J({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Io={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Te(),i=Gt(t),s=Et(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ht(t,s,i),e!==null&&(ot(e,t,i,r),ws(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Te(),i=Gt(t),s=Et(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ht(t,s,i),e!==null&&(ot(e,t,i,r),ws(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Te(),r=Gt(t),i=Et(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ht(t,i,r),e!==null&&(ot(e,t,r,n),ws(e,t,r))}};function Ud(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mi(n,r)||!mi(i,s):!0}function xp(t,e,n){var r=!1,i=Jt,s=e.contextType;return typeof s=="object"&&s!==null?s=qe(s):(i=Le(e)?En:ke.current,r=e.contextTypes,s=(r=r!=null)?dr(t,i):Jt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Io,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Io.enqueueReplaceState(e,e.state,null)}function ka(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Np,bu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=qe(s):(s=Le(e)?En:ke.current,i.context=dr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Sa(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Io.enqueueReplaceState(i,i.state,null),Ws(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function br(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Np&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function ls(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jd(t){var e=t._init;return e(t._payload)}function Rp(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Qt(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,y){return h===null||h.tag!==6?(h=Cl(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,y){var k=m.type;return k===jn?c(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mt&&jd(k)===h.type)?(y=i(h,m.props),y.ref=br(p,h,m),y.return=p,y):(y=Ts(m.type,m.key,m.props,null,p.mode,y),y.ref=br(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Sl(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,y,k){return h===null||h.tag!==7?(h=vn(m,p.mode,y,k),h.return=p,h):(h=i(h,m),h.return=p,h)}function d(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Cl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yi:return m=Ts(h.type,h.key,h.props,null,p.mode,m),m.ref=br(p,null,h),m.return=p,m;case Bn:return h=Sl(h,p.mode,m),h.return=p,h;case Mt:var y=h._init;return d(p,y(h._payload),m)}if(Hr(h)||Dr(h))return h=vn(h,p.mode,m,null),h.return=p,h;ls(p,h)}return null}function f(p,h,m,y){var k=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return k!==null?null:l(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:return m.key===k?a(p,h,m,y):null;case Bn:return m.key===k?u(p,h,m,y):null;case Mt:return k=m._init,f(p,h,k(m._payload),y)}if(Hr(m)||Dr(m))return k!==null?null:c(p,h,m,y,null);ls(p,m)}return null}function g(p,h,m,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(h,p,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yi:return p=p.get(y.key===null?m:y.key)||null,a(h,p,y,k);case Bn:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,k);case Mt:var T=y._init;return g(p,h,m,T(y._payload),k)}if(Hr(y)||Dr(y))return p=p.get(m)||null,c(h,p,y,k,null);ls(h,y)}return null}function _(p,h,m,y){for(var k=null,T=null,N=h,x=h=0,te=null;N!==null&&x<m.length;x++){N.index>x?(te=N,N=null):te=N.sibling;var z=f(p,N,m[x],y);if(z===null){N===null&&(N=te);break}t&&N&&z.alternate===null&&e(p,N),h=s(z,h,x),T===null?k=z:T.sibling=z,T=z,N=te}if(x===m.length)return n(p,N),q&&an(p,x),k;if(N===null){for(;x<m.length;x++)N=d(p,m[x],y),N!==null&&(h=s(N,h,x),T===null?k=N:T.sibling=N,T=N);return q&&an(p,x),k}for(N=r(p,N);x<m.length;x++)te=g(N,p,x,m[x],y),te!==null&&(t&&te.alternate!==null&&N.delete(te.key===null?x:te.key),h=s(te,h,x),T===null?k=te:T.sibling=te,T=te);return t&&N.forEach(function(Xe){return e(p,Xe)}),q&&an(p,x),k}function v(p,h,m,y){var k=Dr(m);if(typeof k!="function")throw Error(w(150));if(m=k.call(m),m==null)throw Error(w(151));for(var T=k=null,N=h,x=h=0,te=null,z=m.next();N!==null&&!z.done;x++,z=m.next()){N.index>x?(te=N,N=null):te=N.sibling;var Xe=f(p,N,z.value,y);if(Xe===null){N===null&&(N=te);break}t&&N&&Xe.alternate===null&&e(p,N),h=s(Xe,h,x),T===null?k=Xe:T.sibling=Xe,T=Xe,N=te}if(z.done)return n(p,N),q&&an(p,x),k;if(N===null){for(;!z.done;x++,z=m.next())z=d(p,z.value,y),z!==null&&(h=s(z,h,x),T===null?k=z:T.sibling=z,T=z);return q&&an(p,x),k}for(N=r(p,N);!z.done;x++,z=m.next())z=g(N,p,x,z.value,y),z!==null&&(t&&z.alternate!==null&&N.delete(z.key===null?x:z.key),h=s(z,h,x),T===null?k=z:T.sibling=z,T=z);return t&&N.forEach(function(Pr){return e(p,Pr)}),q&&an(p,x),k}function A(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Yi:e:{for(var k=m.key,T=h;T!==null;){if(T.key===k){if(k=m.type,k===jn){if(T.tag===7){n(p,T.sibling),h=i(T,m.props.children),h.return=p,p=h;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Mt&&jd(k)===T.type){n(p,T.sibling),h=i(T,m.props),h.ref=br(p,T,m),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===jn?(h=vn(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=Ts(m.type,m.key,m.props,null,p.mode,y),y.ref=br(p,h,m),y.return=p,p=y)}return o(p);case Bn:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Sl(m,p.mode,y),h.return=p,p=h}return o(p);case Mt:return T=m._init,A(p,h,T(m._payload),y)}if(Hr(m))return _(p,h,m,y);if(Dr(m))return v(p,h,m,y);ls(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Cl(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return A}var hr=Rp(!0),Pp=Rp(!1),Ui={},ht=rn(Ui),yi=rn(Ui),wi=rn(Ui);function pn(t){if(t===Ui)throw Error(w(174));return t}function zu(t,e){switch(H(wi,e),H(yi,t),H(ht,Ui),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:na(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=na(e,t)}Q(ht),H(ht,e)}function pr(){Q(ht),Q(yi),Q(wi)}function Ap(t){pn(wi.current);var e=pn(ht.current),n=na(e,t.type);e!==n&&(H(yi,t),H(ht,n))}function Uu(t){yi.current===t&&(Q(ht),Q(yi))}var Y=rn(0);function $s(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gl=[];function Bu(){for(var t=0;t<gl.length;t++)gl[t]._workInProgressVersionPrimary=null;gl.length=0}var Es=Pt.ReactCurrentDispatcher,_l=Pt.ReactCurrentBatchConfig,Sn=0,X=null,oe=null,de=null,Vs=!1,Zr=!1,Ei=0,Ly=0;function ye(){throw Error(w(321))}function ju(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!at(t[n],e[n]))return!1;return!0}function Wu(t,e,n,r,i,s){if(Sn=s,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Es.current=t===null||t.memoizedState===null?Uy:By,t=n(r,i),Zr){s=0;do{if(Zr=!1,Ei=0,25<=s)throw Error(w(301));s+=1,de=oe=null,e.updateQueue=null,Es.current=jy,t=n(r,i)}while(Zr)}if(Es.current=Hs,e=oe!==null&&oe.next!==null,Sn=0,de=oe=X=null,Vs=!1,e)throw Error(w(300));return t}function $u(){var t=Ei!==0;return Ei=0,t}function ct(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?X.memoizedState=de=t:de=de.next=t,de}function Ye(){if(oe===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=oe.next;var e=de===null?X.memoizedState:de.next;if(e!==null)de=e,oe=t;else{if(t===null)throw Error(w(310));oe=t,t={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},de===null?X.memoizedState=de=t:de=de.next=t}return de}function Ci(t,e){return typeof e=="function"?e(t):e}function vl(t){var e=Ye(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Sn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,X.lanes|=c,kn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,at(r,e.memoizedState)||(Ae=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,X.lanes|=s,kn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yl(t){var e=Ye(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);at(s,e.memoizedState)||(Ae=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Dp(){}function Op(t,e){var n=X,r=Ye(),i=e(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,Vu(Fp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||de!==null&&de.memoizedState.tag&1){if(n.flags|=2048,Si(9,Lp.bind(null,n,r,i,e),void 0,null),pe===null)throw Error(w(349));Sn&30||Mp(n,e,i)}return i}function Mp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lp(t,e,n,r){e.value=n,e.getSnapshot=r,bp(e)&&zp(t)}function Fp(t,e,n){return n(function(){bp(e)&&zp(t)})}function bp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!at(t,n)}catch{return!0}}function zp(t){var e=Tt(t,1);e!==null&&ot(e,t,1,-1)}function Wd(t){var e=ct();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:t},e.queue=t,t=t.dispatch=zy.bind(null,X,t),[e.memoizedState,t]}function Si(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=X.updateQueue,e===null?(e={lastEffect:null,stores:null},X.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Up(){return Ye().memoizedState}function Cs(t,e,n,r){var i=ct();X.flags|=t,i.memoizedState=Si(1|e,n,void 0,r===void 0?null:r)}function To(t,e,n,r){var i=Ye();r=r===void 0?null:r;var s=void 0;if(oe!==null){var o=oe.memoizedState;if(s=o.destroy,r!==null&&ju(r,o.deps)){i.memoizedState=Si(e,n,s,r);return}}X.flags|=t,i.memoizedState=Si(1|e,n,s,r)}function $d(t,e){return Cs(8390656,8,t,e)}function Vu(t,e){return To(2048,8,t,e)}function Bp(t,e){return To(4,2,t,e)}function jp(t,e){return To(4,4,t,e)}function Wp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $p(t,e,n){return n=n!=null?n.concat([t]):null,To(4,4,Wp.bind(null,e,t),n)}function Hu(){}function Vp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ju(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hp(t,e){var n=Ye();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ju(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kp(t,e,n){return Sn&21?(at(n,e)||(n=qh(),X.lanes|=n,kn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ae=!0),t.memoizedState=n)}function Fy(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=_l.transition;_l.transition={};try{t(!1),e()}finally{j=n,_l.transition=r}}function Gp(){return Ye().memoizedState}function by(t,e,n){var r=Gt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qp(t))qp(e,n);else if(n=Ip(t,e,n,r),n!==null){var i=Te();ot(n,t,r,i),Yp(n,e,r)}}function zy(t,e,n){var r=Gt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qp(t))qp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,o)){var a=e.interleaved;a===null?(i.next=i,Fu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Ip(t,e,i,r),n!==null&&(i=Te(),ot(n,t,r,i),Yp(n,e,r))}}function Qp(t){var e=t.alternate;return t===X||e!==null&&e===X}function qp(t,e){Zr=Vs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cu(t,n)}}var Hs={readContext:qe,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},Uy={readContext:qe,useCallback:function(t,e){return ct().memoizedState=[t,e===void 0?null:e],t},useContext:qe,useEffect:$d,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cs(4194308,4,Wp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cs(4,2,t,e)},useMemo:function(t,e){var n=ct();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ct();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=by.bind(null,X,t),[r.memoizedState,t]},useRef:function(t){var e=ct();return t={current:t},e.memoizedState=t},useState:Wd,useDebugValue:Hu,useDeferredValue:function(t){return ct().memoizedState=t},useTransition:function(){var t=Wd(!1),e=t[0];return t=Fy.bind(null,t[1]),ct().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=X,i=ct();if(q){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),pe===null)throw Error(w(349));Sn&30||Mp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,$d(Fp.bind(null,r,s,t),[t]),r.flags|=2048,Si(9,Lp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ct(),e=pe.identifierPrefix;if(q){var n=yt,r=vt;n=(r&~(1<<32-st(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ei++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},By={readContext:qe,useCallback:Vp,useContext:qe,useEffect:Vu,useImperativeHandle:$p,useInsertionEffect:Bp,useLayoutEffect:jp,useMemo:Hp,useReducer:vl,useRef:Up,useState:function(){return vl(Ci)},useDebugValue:Hu,useDeferredValue:function(t){var e=Ye();return Kp(e,oe.memoizedState,t)},useTransition:function(){var t=vl(Ci)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:Dp,useSyncExternalStore:Op,useId:Gp,unstable_isNewReconciler:!1},jy={readContext:qe,useCallback:Vp,useContext:qe,useEffect:Vu,useImperativeHandle:$p,useInsertionEffect:Bp,useLayoutEffect:jp,useMemo:Hp,useReducer:yl,useRef:Up,useState:function(){return yl(Ci)},useDebugValue:Hu,useDeferredValue:function(t){var e=Ye();return oe===null?e.memoizedState=t:Kp(e,oe.memoizedState,t)},useTransition:function(){var t=yl(Ci)[0],e=Ye().memoizedState;return[t,e]},useMutableSource:Dp,useSyncExternalStore:Op,useId:Gp,unstable_isNewReconciler:!1};function mr(t,e){try{var n="",r=e;do n+=mv(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function wl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ia(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Wy=typeof WeakMap=="function"?WeakMap:Map;function Xp(t,e,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gs||(Gs=!0,La=r),Ia(t,e)},n}function Jp(t,e,n){n=Et(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ia(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ia(t,e),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Wy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=n0.bind(null,t,e,n),e.then(t,t))}function Hd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Et(-1,1),e.tag=2,Ht(n,e,1))),n.lanes|=1),t)}var $y=Pt.ReactCurrentOwner,Ae=!1;function Ie(t,e,n,r){e.child=t===null?Pp(e,null,n,r):hr(e,t.child,n,r)}function Gd(t,e,n,r,i){n=n.render;var s=e.ref;return ir(e,i),r=Wu(t,e,n,r,s,i),n=$u(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(q&&n&&Pu(e),e.flags|=1,Ie(t,e,r,i),e.child)}function Qd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zp(t,e,s,r,i)):(t=Ts(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(o,r)&&t.ref===e.ref)return Nt(t,e,i)}return e.flags|=1,t=Qt(s,r),t.ref=e.ref,t.return=e,e.child=t}function Zp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mi(s,r)&&t.ref===e.ref)if(Ae=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ae=!0);else return e.lanes=t.lanes,Nt(t,e,i)}return Ta(t,e,n,r,i)}function em(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Xn,ze),ze|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,H(Xn,ze),ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,H(Xn,ze),ze|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,H(Xn,ze),ze|=r;return Ie(t,e,i,n),e.child}function tm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ta(t,e,n,r,i){var s=Le(n)?En:ke.current;return s=dr(e,s),ir(e,i),n=Wu(t,e,n,r,s,i),r=$u(),t!==null&&!Ae?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nt(t,e,i)):(q&&r&&Pu(e),e.flags|=1,Ie(t,e,n,i),e.child)}function qd(t,e,n,r,i){if(Le(n)){var s=!0;bs(e)}else s=!1;if(ir(e,i),e.stateNode===null)Ss(t,e),xp(e,n,r),ka(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=qe(u):(u=Le(n)?En:ke.current,u=dr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Bd(e,o,r,u),Lt=!1;var f=e.memoizedState;o.state=f,Ws(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Me.current||Lt?(typeof c=="function"&&(Sa(e,n,c,r),a=e.memoizedState),(l=Lt||Ud(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Tp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Ze(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=qe(a):(a=Le(n)?En:ke.current,a=dr(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&Bd(e,o,r,a),Lt=!1,f=e.memoizedState,o.state=f,Ws(e,r,o,i);var _=e.memoizedState;l!==d||f!==_||Me.current||Lt?(typeof g=="function"&&(Sa(e,n,g,r),_=e.memoizedState),(u=Lt||Ud(e,n,u,r,f,_,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Na(t,e,n,r,s,i)}function Na(t,e,n,r,i,s){tm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Md(e,n,!1),Nt(t,e,s);r=e.stateNode,$y.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hr(e,t.child,null,s),e.child=hr(e,null,l,s)):Ie(t,e,l,s),e.memoizedState=r.state,i&&Md(e,n,!0),e.child}function nm(t){var e=t.stateNode;e.pendingContext?Od(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Od(t,e.context,!1),zu(t,e.containerInfo)}function Yd(t,e,n,r,i){return fr(),Du(i),e.flags|=256,Ie(t,e,n,r),e.child}var xa={dehydrated:null,treeContext:null,retryLane:0};function Ra(t){return{baseLanes:t,cachePool:null,transitions:null}}function rm(t,e,n){var r=e.pendingProps,i=Y.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),H(Y,i&1),t===null)return Ea(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ro(o,r,0,null),t=vn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ra(n),e.memoizedState=xa,t):Ku(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Vy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Qt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qt(l,s):(s=vn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ra(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xa,r}return s=t.child,t=s.sibling,r=Qt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ku(t,e){return e=Ro({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function as(t,e,n,r){return r!==null&&Du(r),hr(e,t.child,null,n),t=Ku(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Vy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=wl(Error(w(422))),as(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ro({mode:"visible",children:r.children},i,0,null),s=vn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hr(e,t.child,null,o),e.child.memoizedState=Ra(o),e.memoizedState=xa,s);if(!(e.mode&1))return as(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=wl(s,r,void 0),as(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ae||l){if(r=pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Tt(t,i),ot(r,t,i,-1))}return Ju(),r=wl(Error(w(421))),as(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=r0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ue=Vt(i.nextSibling),Be=e,q=!0,tt=null,t!==null&&(He[Ke++]=vt,He[Ke++]=yt,He[Ke++]=Cn,vt=t.id,yt=t.overflow,Cn=e),e=Ku(e,r.children),e.flags|=4096,e)}function Xd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ca(t.return,e,n)}function El(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function im(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ie(t,e,r.children,n),r=Y.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xd(t,n,e);else if(t.tag===19)Xd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(H(Y,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$s(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),El(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$s(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}El(e,!0,n,null,s);break;case"together":El(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ss(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Qt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Hy(t,e,n){switch(e.tag){case 3:nm(e),fr();break;case 5:Ap(e);break;case 1:Le(e.type)&&bs(e);break;case 4:zu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;H(Bs,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(H(Y,Y.current&1),e.flags|=128,null):n&e.child.childLanes?rm(t,e,n):(H(Y,Y.current&1),t=Nt(t,e,n),t!==null?t.sibling:null);H(Y,Y.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return im(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),H(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,em(t,e,n)}return Nt(t,e,n)}var sm,Pa,om,lm;sm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pa=function(){};om=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pn(ht.current);var s=null;switch(n){case"input":i=Jl(t,i),r=Jl(t,r),s=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),s=[];break;case"textarea":i=ta(t,i),r=ta(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ls)}ra(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lm=function(t,e,n,r){n!==r&&(e.flags|=4)};function zr(t,e){if(!q)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function we(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ky(t,e,n){var r=e.pendingProps;switch(Au(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(e),null;case 1:return Le(e.type)&&Fs(),we(e),null;case 3:return r=e.stateNode,pr(),Q(Me),Q(ke),Bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(os(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tt!==null&&(za(tt),tt=null))),Pa(t,e),we(e),null;case 5:Uu(e);var i=pn(wi.current);if(n=e.type,t!==null&&e.stateNode!=null)om(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return we(e),null}if(t=pn(ht.current),os(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[dt]=e,r[vi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)K(Gr[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":od(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":ad(r,s),K("invalid",r)}ra(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ss(r.textContent,l,t),i=["children",""+l]):ai.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":Xi(r),ld(r,s,!0);break;case"textarea":Xi(r),ud(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ls)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Mh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[dt]=e,t[vi]=r,sm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ia(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)K(Gr[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":od(t,r),i=Jl(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),K("invalid",t);break;case"textarea":ad(t,r),i=ta(t,r),K("invalid",t);break;default:i=r}ra(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?bh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Lh(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ui(t,a):typeof a=="number"&&ui(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ai.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&gu(t,s,a,o))}switch(n){case"input":Xi(t),ld(t,r,!1);break;case"textarea":Xi(t),ud(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?er(t,!!r.multiple,s,!1):r.defaultValue!=null&&er(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ls)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return we(e),null;case 6:if(t&&e.stateNode!=null)lm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=pn(wi.current),pn(ht.current),os(e)){if(r=e.stateNode,n=e.memoizedProps,r[dt]=e,(s=r.nodeValue!==n)&&(t=Be,t!==null))switch(t.tag){case 3:ss(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ss(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[dt]=e,e.stateNode=r}return we(e),null;case 13:if(Q(Y),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(q&&Ue!==null&&e.mode&1&&!(e.flags&128))kp(),fr(),e.flags|=98560,s=!1;else if(s=os(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[dt]=e}else fr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;we(e),s=!1}else tt!==null&&(za(tt),tt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Y.current&1?ae===0&&(ae=3):Ju())),e.updateQueue!==null&&(e.flags|=4),we(e),null);case 4:return pr(),Pa(t,e),t===null&&gi(e.stateNode.containerInfo),we(e),null;case 10:return Lu(e.type._context),we(e),null;case 17:return Le(e.type)&&Fs(),we(e),null;case 19:if(Q(Y),s=e.memoizedState,s===null)return we(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zr(s,!1);else{if(ae!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$s(t),o!==null){for(e.flags|=128,zr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return H(Y,Y.current&1|2),e.child}t=t.sibling}s.tail!==null&&re()>gr&&(e.flags|=128,r=!0,zr(s,!1),e.lanes=4194304)}else{if(!r)if(t=$s(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!q)return we(e),null}else 2*re()-s.renderingStartTime>gr&&n!==1073741824&&(e.flags|=128,r=!0,zr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=re(),e.sibling=null,n=Y.current,H(Y,r?n&1|2:n&1),e):(we(e),null);case 22:case 23:return Xu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ze&1073741824&&(we(e),e.subtreeFlags&6&&(e.flags|=8192)):we(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function Gy(t,e){switch(Au(e),e.tag){case 1:return Le(e.type)&&Fs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pr(),Q(Me),Q(ke),Bu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Uu(e),null;case 13:if(Q(Y),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));fr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Y),null;case 4:return pr(),null;case 10:return Lu(e.type._context),null;case 22:case 23:return Xu(),null;case 24:return null;default:return null}}var us=!1,Ee=!1,Qy=typeof WeakSet=="function"?WeakSet:Set,S=null;function Yn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(t,e,r)}else n.current=null}function Aa(t,e,n){try{n()}catch(r){Z(t,e,r)}}var Jd=!1;function qy(t,e){if(pa=Ds,t=dp(),Ru(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ma={focusedElem:t,selectionRange:n},Ds=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,A=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ze(e.type,v),A);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){Z(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return _=Jd,Jd=!1,_}function ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Aa(e,n,s)}i=i.next}while(i!==r)}}function No(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Da(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function am(t){var e=t.alternate;e!==null&&(t.alternate=null,am(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[dt],delete e[vi],delete e[va],delete e[Ay],delete e[Dy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function um(t){return t.tag===5||t.tag===3||t.tag===4}function Zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||um(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ls));else if(r!==4&&(t=t.child,t!==null))for(Oa(t,e,n),t=t.sibling;t!==null;)Oa(t,e,n),t=t.sibling}function Ma(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ma(t,e,n),t=t.sibling;t!==null;)Ma(t,e,n),t=t.sibling}var ge=null,et=!1;function Ot(t,e,n){for(n=n.child;n!==null;)cm(t,e,n),n=n.sibling}function cm(t,e,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:Ee||Yn(n,e);case 6:var r=ge,i=et;ge=null,Ot(t,e,n),ge=r,et=i,ge!==null&&(et?(t=ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ge.removeChild(n.stateNode));break;case 18:ge!==null&&(et?(t=ge,n=n.stateNode,t.nodeType===8?pl(t.parentNode,n):t.nodeType===1&&pl(t,n),hi(t)):pl(ge,n.stateNode));break;case 4:r=ge,i=et,ge=n.stateNode.containerInfo,et=!0,Ot(t,e,n),ge=r,et=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Aa(n,e,o),i=i.next}while(i!==r)}Ot(t,e,n);break;case 1:if(!Ee&&(Yn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,e,l)}Ot(t,e,n);break;case 21:Ot(t,e,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Ot(t,e,n),Ee=r):Ot(t,e,n);break;default:Ot(t,e,n)}}function ef(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Qy),e.forEach(function(r){var i=i0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Je(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:ge=l.stateNode,et=!1;break e;case 3:ge=l.stateNode.containerInfo,et=!0;break e;case 4:ge=l.stateNode.containerInfo,et=!0;break e}l=l.return}if(ge===null)throw Error(w(160));cm(s,o,i),ge=null,et=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Z(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dm(e,t),e=e.sibling}function dm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Je(e,t),ut(t),r&4){try{ei(3,t,t.return),No(3,t)}catch(v){Z(t,t.return,v)}try{ei(5,t,t.return)}catch(v){Z(t,t.return,v)}}break;case 1:Je(e,t),ut(t),r&512&&n!==null&&Yn(n,n.return);break;case 5:if(Je(e,t),ut(t),r&512&&n!==null&&Yn(n,n.return),t.flags&32){var i=t.stateNode;try{ui(i,"")}catch(v){Z(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Dh(i,s),ia(l,o);var u=ia(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?bh(i,d):c==="dangerouslySetInnerHTML"?Lh(i,d):c==="children"?ui(i,d):gu(i,c,d,u)}switch(l){case"input":Zl(i,s);break;case"textarea":Oh(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?er(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?er(i,!!s.multiple,s.defaultValue,!0):er(i,!!s.multiple,s.multiple?[]:"",!1))}i[vi]=s}catch(v){Z(t,t.return,v)}}break;case 6:if(Je(e,t),ut(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){Z(t,t.return,v)}}break;case 3:if(Je(e,t),ut(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{hi(e.containerInfo)}catch(v){Z(t,t.return,v)}break;case 4:Je(e,t),ut(t);break;case 13:Je(e,t),ut(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(qu=re())),r&4&&ef(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ee=(u=Ee)||c,Je(e,t),Ee=u):Je(e,t),ut(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(S=t,c=t.child;c!==null;){for(d=S=c;S!==null;){switch(f=S,g=f.child,f.tag){case 0:case 11:case 14:case 15:ei(4,f,f.return);break;case 1:Yn(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:Yn(f,f.return);break;case 22:if(f.memoizedState!==null){nf(d);continue}}g!==null?(g.return=f,S=g):nf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Fh("display",o))}catch(v){Z(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Z(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Je(e,t),ut(t),r&4&&ef(t);break;case 21:break;default:Je(e,t),ut(t)}}function ut(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(um(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var s=Zd(t);Ma(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Zd(t);Oa(t,l,o);break;default:throw Error(w(161))}}catch(a){Z(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Yy(t,e,n){S=t,fm(t)}function fm(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||us;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ee;l=us;var u=Ee;if(us=o,(Ee=a)&&!u)for(S=i;S!==null;)o=S,a=o.child,o.tag===22&&o.memoizedState!==null?rf(i):a!==null?(a.return=o,S=a):rf(i);for(;s!==null;)S=s,fm(s),s=s.sibling;S=i,us=l,Ee=u}tf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,S=s):tf(t)}}function tf(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ee||No(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ze(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&hi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Ee||e.flags&512&&Da(e)}catch(f){Z(e,e.return,f)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function nf(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function rf(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{No(4,e)}catch(a){Z(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Z(e,i,a)}}var s=e.return;try{Da(e)}catch(a){Z(e,s,a)}break;case 5:var o=e.return;try{Da(e)}catch(a){Z(e,o,a)}}}catch(a){Z(e,e.return,a)}if(e===t){S=null;break}var l=e.sibling;if(l!==null){l.return=e.return,S=l;break}S=e.return}}var Xy=Math.ceil,Ks=Pt.ReactCurrentDispatcher,Gu=Pt.ReactCurrentOwner,Qe=Pt.ReactCurrentBatchConfig,U=0,pe=null,ie=null,_e=0,ze=0,Xn=rn(0),ae=0,ki=null,kn=0,xo=0,Qu=0,ti=null,Pe=null,qu=0,gr=1/0,mt=null,Gs=!1,La=null,Kt=null,cs=!1,Ut=null,Qs=0,ni=0,Fa=null,ks=-1,Is=0;function Te(){return U&6?re():ks!==-1?ks:ks=re()}function Gt(t){return t.mode&1?U&2&&_e!==0?_e&-_e:My.transition!==null?(Is===0&&(Is=qh()),Is):(t=j,t!==0||(t=window.event,t=t===void 0?16:np(t.type)),t):1}function ot(t,e,n,r){if(50<ni)throw ni=0,Fa=null,Error(w(185));Fi(t,n,r),(!(U&2)||t!==pe)&&(t===pe&&(!(U&2)&&(xo|=n),ae===4&&bt(t,_e)),Fe(t,r),n===1&&U===0&&!(e.mode&1)&&(gr=re()+500,ko&&sn()))}function Fe(t,e){var n=t.callbackNode;Mv(t,e);var r=As(t,t===pe?_e:0);if(r===0)n!==null&&fd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fd(n),e===1)t.tag===0?Oy(sf.bind(null,t)):Ep(sf.bind(null,t)),Ry(function(){!(U&6)&&sn()}),n=null;else{switch(Yh(r)){case 1:n=Eu;break;case 4:n=Gh;break;case 16:n=Ps;break;case 536870912:n=Qh;break;default:n=Ps}n=wm(n,hm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function hm(t,e){if(ks=-1,Is=0,U&6)throw Error(w(327));var n=t.callbackNode;if(sr()&&t.callbackNode!==n)return null;var r=As(t,t===pe?_e:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=qs(t,r);else{e=r;var i=U;U|=2;var s=mm();(pe!==t||_e!==e)&&(mt=null,gr=re()+500,_n(t,e));do try{e0();break}catch(l){pm(t,l)}while(1);Mu(),Ks.current=s,U=i,ie!==null?e=0:(pe=null,_e=0,e=ae)}if(e!==0){if(e===2&&(i=ua(t),i!==0&&(r=i,e=ba(t,i))),e===1)throw n=ki,_n(t,0),bt(t,r),Fe(t,re()),n;if(e===6)bt(t,r);else{if(i=t.current.alternate,!(r&30)&&!Jy(i)&&(e=qs(t,r),e===2&&(s=ua(t),s!==0&&(r=s,e=ba(t,s))),e===1))throw n=ki,_n(t,0),bt(t,r),Fe(t,re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:un(t,Pe,mt);break;case 3:if(bt(t,r),(r&130023424)===r&&(e=qu+500-re(),10<e)){if(As(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Te(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_a(un.bind(null,t,Pe,mt),e);break}un(t,Pe,mt);break;case 4:if(bt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-st(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xy(r/1960))-r,10<r){t.timeoutHandle=_a(un.bind(null,t,Pe,mt),r);break}un(t,Pe,mt);break;case 5:un(t,Pe,mt);break;default:throw Error(w(329))}}}return Fe(t,re()),t.callbackNode===n?hm.bind(null,t):null}function ba(t,e){var n=ti;return t.current.memoizedState.isDehydrated&&(_n(t,e).flags|=256),t=qs(t,e),t!==2&&(e=Pe,Pe=n,e!==null&&za(e)),t}function za(t){Pe===null?Pe=t:Pe.push.apply(Pe,t)}function Jy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bt(t,e){for(e&=~Qu,e&=~xo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-st(e),r=1<<n;t[n]=-1,e&=~r}}function sf(t){if(U&6)throw Error(w(327));sr();var e=As(t,0);if(!(e&1))return Fe(t,re()),null;var n=qs(t,e);if(t.tag!==0&&n===2){var r=ua(t);r!==0&&(e=r,n=ba(t,r))}if(n===1)throw n=ki,_n(t,0),bt(t,e),Fe(t,re()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,un(t,Pe,mt),Fe(t,re()),null}function Yu(t,e){var n=U;U|=1;try{return t(e)}finally{U=n,U===0&&(gr=re()+500,ko&&sn())}}function In(t){Ut!==null&&Ut.tag===0&&!(U&6)&&sr();var e=U;U|=1;var n=Qe.transition,r=j;try{if(Qe.transition=null,j=1,t)return t()}finally{j=r,Qe.transition=n,U=e,!(U&6)&&sn()}}function Xu(){ze=Xn.current,Q(Xn)}function _n(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xy(n)),ie!==null)for(n=ie.return;n!==null;){var r=n;switch(Au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fs();break;case 3:pr(),Q(Me),Q(ke),Bu();break;case 5:Uu(r);break;case 4:pr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Lu(r.type._context);break;case 22:case 23:Xu()}n=n.return}if(pe=t,ie=t=Qt(t.current,null),_e=ze=e,ae=0,ki=null,Qu=xo=kn=0,Pe=ti=null,hn!==null){for(e=0;e<hn.length;e++)if(n=hn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}hn=null}return t}function pm(t,e){do{var n=ie;try{if(Mu(),Es.current=Hs,Vs){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vs=!1}if(Sn=0,de=oe=X=null,Zr=!1,Ei=0,Gu.current=null,n===null||n.return===null){ae=1,ki=e,ie=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=_e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Hd(o);if(g!==null){g.flags&=-257,Kd(g,o,l,s,e),g.mode&1&&Vd(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){Vd(s,u,e),Ju();break e}a=Error(w(426))}}else if(q&&l.mode&1){var A=Hd(o);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Kd(A,o,l,s,e),Du(mr(a,l));break e}}s=a=mr(a,l),ae!==4&&(ae=2),ti===null?ti=[s]:ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Xp(s,a,e);bd(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Kt===null||!Kt.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Jp(s,l,e);bd(s,y);break e}}s=s.return}while(s!==null)}_m(n)}catch(k){e=k,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(1)}function mm(){var t=Ks.current;return Ks.current=Hs,t===null?Hs:t}function Ju(){(ae===0||ae===3||ae===2)&&(ae=4),pe===null||!(kn&268435455)&&!(xo&268435455)||bt(pe,_e)}function qs(t,e){var n=U;U|=2;var r=mm();(pe!==t||_e!==e)&&(mt=null,_n(t,e));do try{Zy();break}catch(i){pm(t,i)}while(1);if(Mu(),U=n,Ks.current=r,ie!==null)throw Error(w(261));return pe=null,_e=0,ae}function Zy(){for(;ie!==null;)gm(ie)}function e0(){for(;ie!==null&&!Iv();)gm(ie)}function gm(t){var e=ym(t.alternate,t,ze);t.memoizedProps=t.pendingProps,e===null?_m(t):ie=e,Gu.current=null}function _m(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gy(n,e),n!==null){n.flags&=32767,ie=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ae=6,ie=null;return}}else if(n=Ky(n,e,ze),n!==null){ie=n;return}if(e=e.sibling,e!==null){ie=e;return}ie=e=t}while(e!==null);ae===0&&(ae=5)}function un(t,e,n){var r=j,i=Qe.transition;try{Qe.transition=null,j=1,t0(t,e,n,r)}finally{Qe.transition=i,j=r}return null}function t0(t,e,n,r){do sr();while(Ut!==null);if(U&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lv(t,s),t===pe&&(ie=pe=null,_e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cs||(cs=!0,wm(Ps,function(){return sr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qe.transition,Qe.transition=null;var o=j;j=1;var l=U;U|=4,Gu.current=null,qy(t,n),dm(n,t),Ey(ma),Ds=!!pa,ma=pa=null,t.current=n,Yy(n),Tv(),U=l,j=o,Qe.transition=s}else t.current=n;if(cs&&(cs=!1,Ut=t,Qs=i),s=t.pendingLanes,s===0&&(Kt=null),Rv(n.stateNode),Fe(t,re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gs)throw Gs=!1,t=La,La=null,t;return Qs&1&&t.tag!==0&&sr(),s=t.pendingLanes,s&1?t===Fa?ni++:(ni=0,Fa=t):ni=0,sn(),null}function sr(){if(Ut!==null){var t=Yh(Qs),e=Qe.transition,n=j;try{if(Qe.transition=null,j=16>t?16:t,Ut===null)var r=!1;else{if(t=Ut,Ut=null,Qs=0,U&6)throw Error(w(331));var i=U;for(U|=4,S=t.current;S!==null;){var s=S,o=s.child;if(S.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(S=u;S!==null;){var c=S;switch(c.tag){case 0:case 11:case 15:ei(8,c,s)}var d=c.child;if(d!==null)d.return=c,S=d;else for(;S!==null;){c=S;var f=c.sibling,g=c.return;if(am(c),c===u){S=null;break}if(f!==null){f.return=g,S=f;break}S=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var A=v.sibling;v.sibling=null,v=A}while(v!==null)}}S=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,S=o;else e:for(;S!==null;){if(s=S,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ei(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,S=p;break e}S=s.return}}var h=t.current;for(S=h;S!==null;){o=S;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,S=m;else e:for(o=h;S!==null;){if(l=S,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:No(9,l)}}catch(k){Z(l,l.return,k)}if(l===o){S=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,S=y;break e}S=l.return}}if(U=i,sn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(yo,t)}catch{}r=!0}return r}finally{j=n,Qe.transition=e}}return!1}function of(t,e,n){e=mr(n,e),e=Xp(t,e,1),t=Ht(t,e,1),e=Te(),t!==null&&(Fi(t,1,e),Fe(t,e))}function Z(t,e,n){if(t.tag===3)of(t,t,n);else for(;e!==null;){if(e.tag===3){of(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){t=mr(n,t),t=Jp(e,t,1),e=Ht(e,t,1),t=Te(),e!==null&&(Fi(e,1,t),Fe(e,t));break}}e=e.return}}function n0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Te(),t.pingedLanes|=t.suspendedLanes&n,pe===t&&(_e&n)===n&&(ae===4||ae===3&&(_e&130023424)===_e&&500>re()-qu?_n(t,0):Qu|=n),Fe(t,e)}function vm(t,e){e===0&&(t.mode&1?(e=es,es<<=1,!(es&130023424)&&(es=4194304)):e=1);var n=Te();t=Tt(t,e),t!==null&&(Fi(t,e,n),Fe(t,n))}function r0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vm(t,n)}function i0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),vm(t,n)}var ym;ym=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Me.current)Ae=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ae=!1,Hy(t,e,n);Ae=!!(t.flags&131072)}else Ae=!1,q&&e.flags&1048576&&Cp(e,Us,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ss(t,e),t=e.pendingProps;var i=dr(e,ke.current);ir(e,n),i=Wu(null,e,r,t,i,n);var s=$u();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Le(r)?(s=!0,bs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bu(e),i.updater=Io,e.stateNode=i,i._reactInternals=e,ka(e,r,t,n),e=Na(null,e,r,!0,s,n)):(e.tag=0,q&&s&&Pu(e),Ie(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ss(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=o0(r),t=Ze(r,t),i){case 0:e=Ta(null,e,r,t,n);break e;case 1:e=qd(null,e,r,t,n);break e;case 11:e=Gd(null,e,r,t,n);break e;case 14:e=Qd(null,e,r,Ze(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Ta(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),qd(t,e,r,i,n);case 3:e:{if(nm(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Tp(t,e),Ws(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mr(Error(w(423)),e),e=Yd(t,e,r,n,i);break e}else if(r!==i){i=mr(Error(w(424)),e),e=Yd(t,e,r,n,i);break e}else for(Ue=Vt(e.stateNode.containerInfo.firstChild),Be=e,q=!0,tt=null,n=Pp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){e=Nt(t,e,n);break e}Ie(t,e,r,n)}e=e.child}return e;case 5:return Ap(e),t===null&&Ea(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ga(r,i)?o=null:s!==null&&ga(r,s)&&(e.flags|=32),tm(t,e),Ie(t,e,o,n),e.child;case 6:return t===null&&Ea(e),null;case 13:return rm(t,e,n);case 4:return zu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hr(e,null,r,n):Ie(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Gd(t,e,r,i,n);case 7:return Ie(t,e,e.pendingProps,n),e.child;case 8:return Ie(t,e,e.pendingProps.children,n),e.child;case 12:return Ie(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,H(Bs,r._currentValue),r._currentValue=o,s!==null)if(at(s.value,o)){if(s.children===i.children&&!Me.current){e=Nt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Et(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ca(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ca(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ie(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ir(e,n),i=qe(i),r=r(i),e.flags|=1,Ie(t,e,r,n),e.child;case 14:return r=e.type,i=Ze(r,e.pendingProps),i=Ze(r.type,i),Qd(t,e,r,i,n);case 15:return Zp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ze(r,i),Ss(t,e),e.tag=1,Le(r)?(t=!0,bs(e)):t=!1,ir(e,n),xp(e,r,i),ka(e,r,i,n),Na(null,e,r,!0,t,n);case 19:return im(t,e,n);case 22:return em(t,e,n)}throw Error(w(156,e.tag))};function wm(t,e){return Kh(t,e)}function s0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ge(t,e,n,r){return new s0(t,e,n,r)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o0(t){if(typeof t=="function")return Zu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vu)return 11;if(t===yu)return 14}return 2}function Qt(t,e){var n=t.alternate;return n===null?(n=Ge(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ts(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case jn:return vn(n.children,i,s,e);case _u:o=8,i|=8;break;case Ql:return t=Ge(12,n,e,i|2),t.elementType=Ql,t.lanes=s,t;case ql:return t=Ge(13,n,e,i),t.elementType=ql,t.lanes=s,t;case Yl:return t=Ge(19,n,e,i),t.elementType=Yl,t.lanes=s,t;case Rh:return Ro(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nh:o=10;break e;case xh:o=9;break e;case vu:o=11;break e;case yu:o=14;break e;case Mt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=Ge(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vn(t,e,n,r){return t=Ge(7,t,r,e),t.lanes=n,t}function Ro(t,e,n,r){return t=Ge(22,t,r,e),t.elementType=Rh,t.lanes=n,t.stateNode={isHidden:!1},t}function Cl(t,e,n){return t=Ge(6,t,null,e),t.lanes=n,t}function Sl(t,e,n){return e=Ge(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function l0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rl(0),this.expirationTimes=rl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ec(t,e,n,r,i,s,o,l,a){return t=new l0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ge(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(s),t}function a0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Em(t){if(!t)return Jt;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Le(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Le(n))return wp(t,n,e)}return e}function Cm(t,e,n,r,i,s,o,l,a){return t=ec(n,r,!0,t,i,s,o,l,a),t.context=Em(null),n=t.current,r=Te(),i=Gt(n),s=Et(r,i),s.callback=e??null,Ht(n,s,i),t.current.lanes=i,Fi(t,i,r),Fe(t,r),t}function Po(t,e,n,r){var i=e.current,s=Te(),o=Gt(i);return n=Em(n),e.context===null?e.context=n:e.pendingContext=n,e=Et(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ht(i,e,o),t!==null&&(ot(t,i,o,s),ws(t,i,o)),o}function Ys(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tc(t,e){lf(t,e),(t=t.alternate)&&lf(t,e)}function u0(){return null}var Sm=typeof reportError=="function"?reportError:function(t){console.error(t)};function nc(t){this._internalRoot=t}Ao.prototype.render=nc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Po(t,e,null,null)};Ao.prototype.unmount=nc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;In(function(){Po(null,t,null,null)}),e[It]=null}};function Ao(t){this._internalRoot=t}Ao.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ft.length&&e!==0&&e<Ft[n].priority;n++);Ft.splice(n,0,t),n===0&&tp(t)}};function rc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Do(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function af(){}function c0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ys(o);s.call(u)}}var o=Cm(e,r,t,0,null,!1,!1,"",af);return t._reactRootContainer=o,t[It]=o.current,gi(t.nodeType===8?t.parentNode:t),In(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Ys(a);l.call(u)}}var a=ec(t,0,!1,null,null,!1,!1,"",af);return t._reactRootContainer=a,t[It]=a.current,gi(t.nodeType===8?t.parentNode:t),In(function(){Po(e,a,n,r)}),a}function Oo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Ys(o);l.call(a)}}Po(e,o,t,i)}else o=c0(n,e,t,i,r);return Ys(o)}Xh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Kr(e.pendingLanes);n!==0&&(Cu(e,n|1),Fe(e,re()),!(U&6)&&(gr=re()+500,sn()))}break;case 13:In(function(){var r=Tt(t,1);if(r!==null){var i=Te();ot(r,t,1,i)}}),tc(t,1)}};Su=function(t){if(t.tag===13){var e=Tt(t,134217728);if(e!==null){var n=Te();ot(e,t,134217728,n)}tc(t,134217728)}};Jh=function(t){if(t.tag===13){var e=Gt(t),n=Tt(t,e);if(n!==null){var r=Te();ot(n,t,e,r)}tc(t,e)}};Zh=function(){return j};ep=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};oa=function(t,e,n){switch(e){case"input":if(Zl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=So(r);if(!i)throw Error(w(90));Ah(r),Zl(r,i)}}}break;case"textarea":Oh(t,n);break;case"select":e=n.value,e!=null&&er(t,!!n.multiple,e,!1)}};Bh=Yu;jh=In;var d0={usingClientEntryPoint:!1,Events:[zi,Hn,So,zh,Uh,Yu]},Ur={findFiberByHostInstance:fn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},f0={bundleType:Ur.bundleType,version:Ur.version,rendererPackageName:Ur.rendererPackageName,rendererConfig:Ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vh(t),t===null?null:t.stateNode},findFiberByHostInstance:Ur.findFiberByHostInstance||u0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ds=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ds.isDisabled&&ds.supportsFiber)try{yo=ds.inject(f0),ft=ds}catch{}}$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;$e.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rc(e))throw Error(w(200));return a0(t,e,null,n)};$e.createRoot=function(t,e){if(!rc(t))throw Error(w(299));var n=!1,r="",i=Sm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ec(t,1,!1,null,null,n,!1,r,i),t[It]=e.current,gi(t.nodeType===8?t.parentNode:t),new nc(e)};$e.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Vh(e),t=t===null?null:t.stateNode,t};$e.flushSync=function(t){return In(t)};$e.hydrate=function(t,e,n){if(!Do(e))throw Error(w(200));return Oo(null,t,e,!0,n)};$e.hydrateRoot=function(t,e,n){if(!rc(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Sm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cm(e,null,t,1,n??null,i,!1,s,o),t[It]=e.current,gi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ao(e)};$e.render=function(t,e,n){if(!Do(e))throw Error(w(200));return Oo(null,t,e,!1,n)};$e.unmountComponentAtNode=function(t){if(!Do(t))throw Error(w(40));return t._reactRootContainer?(In(function(){Oo(null,null,t,!1,function(){t._reactRootContainer=null,t[It]=null})}),!0):!1};$e.unstable_batchedUpdates=Yu;$e.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Do(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Oo(t,e,n,!1,r)};$e.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=$e})(uv);var uf=Hl;Vl.createRoot=uf.createRoot,Vl.hydrateRoot=uf.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xs(){return Xs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xs.apply(this,arguments)}var Bt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Bt||(Bt={}));const cf="popstate";function h0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Ua("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ic(i)}return g0(e,n,null,t)}function me(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function p0(){return Math.random().toString(36).substr(2,8)}function df(t){return{usr:t.state,key:t.key}}function Ua(t,e,n,r){return n===void 0&&(n=null),Xs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?kr(e):e,{state:n,key:e&&e.key||r||p0()})}function ic(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function kr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function m0(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:ic(t);return me(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function g0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=Bt.Pop,a=null;function u(){l=Bt.Pop,a&&a({action:l,location:f.location})}function c(g,_){l=Bt.Push;let v=Ua(f.location,g,_);n&&n(v,g);let A=df(v),p=f.createHref(v);try{o.pushState(A,"",p)}catch{i.location.assign(p)}s&&a&&a({action:l,location:f.location})}function d(g,_){l=Bt.Replace;let v=Ua(f.location,g,_);n&&n(v,g);let A=df(v),p=f.createHref(v);o.replaceState(A,"",p),s&&a&&a({action:l,location:f.location})}let f={get action(){return l},get location(){return t(i,o)},listen(g){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(cf,u),a=g,()=>{i.removeEventListener(cf,u),a=null}},createHref(g){return e(i,g)},encodeLocation(g){let _=m0(typeof g=="string"?g:ic(g));return{pathname:_.pathname,search:_.search,hash:_.hash}},push:c,replace:d,go(g){return o.go(g)}};return f}var ff;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ff||(ff={}));function _0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?kr(e):e,i=Tm(r.pathname||"/",n);if(i==null)return null;let s=km(t);v0(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=N0(s[l],P0(i));return o}function km(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(me(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=yn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),km(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:I0(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Im(s.path))i(s,o,a)}),e}function Im(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Im(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function v0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const y0=/^:\w+$/,w0=3,E0=2,C0=1,S0=10,k0=-2,hf=t=>t==="*";function I0(t,e){let n=t.split("/"),r=n.length;return n.some(hf)&&(r+=k0),e&&(r+=E0),n.filter(i=>!hf(i)).reduce((i,s)=>i+(y0.test(s)?w0:s===""?C0:S0),r)}function T0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function N0(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=x0({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:yn([i,c.pathname]),pathnameBase:F0(yn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=yn([i,c.pathnameBase]))}return s}function x0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=R0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=l[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=A0(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function R0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sc(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function P0(t){try{return decodeURI(t)}catch(e){return sc(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function A0(t,e){try{return decodeURIComponent(t)}catch(n){return sc(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Tm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sc(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function D0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?kr(t):t;return{pathname:n?n.startsWith("/")?n:O0(n,e):e,search:b0(r),hash:z0(i)}}function O0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function L0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=kr(t):(i=Xs({},t),me(!i.pathname||!i.pathname.includes("?"),kl("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),kl("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),kl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=D0(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const yn=t=>t.join("/").replace(/\/\/+/g,"/"),F0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),b0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,z0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class U0{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function B0(t){return t instanceof U0}const j0=["post","put","patch","delete"];[...j0];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ba.apply(this,arguments)}function W0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const $0=typeof Object.is=="function"?Object.is:W0,{useState:V0,useEffect:H0,useLayoutEffect:K0,useDebugValue:G0}=$l;function Q0(t,e,n){const r=e(),[{inst:i},s]=V0({inst:{value:r,getSnapshot:e}});return K0(()=>{i.value=r,i.getSnapshot=e,Il(i)&&s({inst:i})},[t,r,e]),H0(()=>(Il(i)&&s({inst:i}),t(()=>{Il(i)&&s({inst:i})})),[t]),G0(r),r}function Il(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!$0(n,r)}catch{return!0}}function q0(t,e,n){return e()}const Y0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X0=!Y0,J0=X0?q0:Q0;"useSyncExternalStore"in $l&&(t=>t.useSyncExternalStore)($l);const Z0=C.createContext(null),ew=C.createContext(null),Nm=C.createContext(null),oc=C.createContext(null),Mo=C.createContext(null),Bi=C.createContext({outlet:null,matches:[]}),xm=C.createContext(null);function Lo(){return C.useContext(Mo)!=null}function Rm(){return Lo()||me(!1),C.useContext(Mo).location}function lc(){Lo()||me(!1);let{basename:t,navigator:e}=C.useContext(oc),{matches:n}=C.useContext(Bi),{pathname:r}=Rm(),i=JSON.stringify(M0(n).map(l=>l.pathnameBase)),s=C.useRef(!1);return C.useEffect(()=>{s.current=!0}),C.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=L0(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:yn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function tw(t,e){Lo()||me(!1);let{navigator:n}=C.useContext(oc),r=C.useContext(Nm),{matches:i}=C.useContext(Bi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Rm(),u;if(e){var c;let v=typeof e=="string"?kr(e):e;l==="/"||(c=v.pathname)!=null&&c.startsWith(l)||me(!1),u=v}else u=a;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",g=_0(t,{pathname:f}),_=sw(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:yn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:yn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return e&&_?C.createElement(Mo.Provider,{value:{location:Ba({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Bt.Pop}},_):_}function nw(){let t=uw(),e=B0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unhandled Thrown Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:s},"errorElement")," props on ",C.createElement("code",{style:s},"<Route>")))}class rw extends C.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Bi.Provider,{value:this.props.routeContext},C.createElement(xm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function iw(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Z0);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),C.createElement(Bi.Provider,{value:e},r)}function sw(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||me(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||C.createElement(nw,null):null,c=e.concat(r.slice(0,l+1)),d=()=>C.createElement(iw,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?C.createElement(rw,{location:n.location,component:u,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var pf;(function(t){t.UseRevalidator="useRevalidator"})(pf||(pf={}));var Js;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Js||(Js={}));function ow(t){let e=C.useContext(Nm);return e||me(!1),e}function lw(t){let e=C.useContext(Bi);return e||me(!1),e}function aw(t){let e=lw(),n=e.matches[e.matches.length-1];return n.route.id||me(!1),n.route.id}function uw(){var t;let e=C.useContext(xm),n=ow(Js.UseRouteError),r=aw(Js.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function ja(t){me(!1)}function cw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Bt.Pop,navigator:s,static:o=!1}=t;Lo()&&me(!1);let l=e.replace(/^\/*/,"/"),a=C.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=kr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,_=C.useMemo(()=>{let v=Tm(u,l);return v==null?null:{pathname:v,search:c,hash:d,state:f,key:g}},[l,u,c,d,f,g]);return _==null?null:C.createElement(oc.Provider,{value:a},C.createElement(Mo.Provider,{children:n,value:{location:_,navigationType:i}}))}function dw(t){let{children:e,location:n}=t,r=C.useContext(ew),i=r&&!e?r.router.routes:Wa(e);return tw(i,n)}var mf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(mf||(mf={}));new Promise(()=>{});function Wa(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,Wa(r.props.children,e));return}r.type!==ja&&me(!1),!r.props.index||!r.props.children||me(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Wa(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fw(t){let{basename:e,children:n,window:r}=t,i=C.useRef();i.current==null&&(i.current=h0({window:r,v5Compat:!0}));let s=i.current,[o,l]=C.useState({action:s.action,location:s.location});return C.useLayoutEffect(()=>s.listen(l),[s]),C.createElement(cw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var gf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(gf||(gf={}));var _f;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_f||(_f={}));var ac={},hw=Zc&&Zc.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(ac,"__esModule",{value:!0});var pw=C,uc=function(t){hw(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.componentWillMount=function(){var n=this,r=this.props,i=r.src,s=r.preview,o=this.props.initialBlur;this.setState({src:s,blur:o}),this.fetch(i).then(function(l){return n.setState({src:l,blur:0})})},e.prototype.render=function(){var n=this.state.src,r=this.props.render;return r(n,this.getStyle())},e.prototype.fetch=function(n){return new Promise(function(r){var i=new Image;i.src=n,i.addEventListener("load",function(){return r(n)},!1)})},e.prototype.getStyle=function(){var n=this.props,r=n.transitionTime,i=n.timingFunction,s=this.state.blur;return{filter:"blur("+s+"px)",transition:"filter "+r+"ms "+i}},e}(pw.Component);uc.defaultProps={transitionTime:500,timingFunction:"ease",initialBlur:10};ac.ProgressiveImage=uc;ac.default=uc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Ir(e)},Ir=function(t){return new Error("Firebase Database ("+Pm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},mw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},cc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Am(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Dm=function(t){const e=Am(t);return cc.encodeByteArray(e,!0)},Zs=function(t){return Dm(t).replace(/\./g,"")},$a=function(t){try{return cc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){return Om(void 0,t)}function Om(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_w(n)||(t[n]=Om(t[n],e[n]));return t}function _w(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vw())}function yw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lm(){return Pm.NODE_ADMIN===!0}function Fm(){try{return typeof indexedDB=="object"}catch{return!1}}function bm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ww(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Ew(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cw=()=>Ew().__FIREBASE_DEFAULTS__,Sw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$a(t[1]);return e&&JSON.parse(e)},zm=()=>{try{return Cw()||Sw()||kw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Iw=t=>{var e,n;return(n=(e=zm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tw=t=>{const e=Iw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nw=()=>{var t;return(t=zm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Zs(JSON.stringify(n)),Zs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="FirebaseError";class Tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rw,Object.setPrototypeOf(this,Tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fo.prototype.create)}}class Fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Pw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Tr(i,l,r)}}function Pw(t,e){return t.replace(Aw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Aw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t){return JSON.parse(t)}function he(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ii($a(s[0])||""),n=Ii($a(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Dw=function(t){const e=Um(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ow=function(t){const e=Um(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function _r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eo(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yf(s)&&yf(o)){if(!Va(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const f=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Bm(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bo=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Nr(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class bw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uw(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zw(t){return t===cn?void 0:t}function Uw(t){return t.instantiationMode==="EAGER"}/**
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
 */class Bw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const jw={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Ww=$.INFO,$w={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Vw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=$w[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jm{constructor(e){this.name=e,this._logLevel=Ww,this._logHandler=Vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?jw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Hw=(t,e)=>e.some(n=>t instanceof n);let wf,Ef;function Kw(){return wf||(wf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gw(){return Ef||(Ef=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wm=new WeakMap,Ha=new WeakMap,$m=new WeakMap,Tl=new WeakMap,fc=new WeakMap;function Qw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ct(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wm.set(n,t)}).catch(()=>{}),fc.set(e,t),e}function qw(t){if(Ha.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ha.set(t,e)}let Ka={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ha.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$m.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Yw(t){Ka=t(Ka)}function Xw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Nl(this),e,...n);return $m.set(r,e.sort?e.sort():[e]),Ct(r)}:Gw().includes(t)?function(...e){return t.apply(Nl(this),e),Ct(Wm.get(this))}:function(...e){return Ct(t.apply(Nl(this),e))}}function Jw(t){return typeof t=="function"?Xw(t):(t instanceof IDBTransaction&&qw(t),Hw(t,Kw())?new Proxy(t,Ka):t)}function Ct(t){if(t instanceof IDBRequest)return Qw(t);if(Tl.has(t))return Tl.get(t);const e=Jw(t);return e!==t&&(Tl.set(t,e),fc.set(e,t)),e}const Nl=t=>fc.get(t);function zo(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ct(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ct(o.result),a.oldVersion,a.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}function xl(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Ct(n).then(()=>{})}const Zw=["get","getKey","getAll","getAllKeys","count"],eE=["put","add","delete","clear"],Rl=new Map;function Cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rl.get(e))return Rl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=eE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zw.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Rl.set(e,s),s}Yw(t=>({...t,get:(e,n,r)=>Cf(e,n)||t.get(e,n,r),has:(e,n)=>!!Cf(e,n)||t.has(e,n)}));/**
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
 */class tE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ga="@firebase/app",Sf="0.9.0";/**
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
 */const Tn=new jm("@firebase/app"),rE="@firebase/app-compat",iE="@firebase/analytics-compat",sE="@firebase/analytics",oE="@firebase/app-check-compat",lE="@firebase/app-check",aE="@firebase/auth",uE="@firebase/auth-compat",cE="@firebase/database",dE="@firebase/database-compat",fE="@firebase/functions",hE="@firebase/functions-compat",pE="@firebase/installations",mE="@firebase/installations-compat",gE="@firebase/messaging",_E="@firebase/messaging-compat",vE="@firebase/performance",yE="@firebase/performance-compat",wE="@firebase/remote-config",EE="@firebase/remote-config-compat",CE="@firebase/storage",SE="@firebase/storage-compat",kE="@firebase/firestore",IE="@firebase/firestore-compat",TE="firebase",NE="9.15.0";/**
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
 */const Qa="[DEFAULT]",xE={[Ga]:"fire-core",[rE]:"fire-core-compat",[sE]:"fire-analytics",[iE]:"fire-analytics-compat",[lE]:"fire-app-check",[oE]:"fire-app-check-compat",[aE]:"fire-auth",[uE]:"fire-auth-compat",[cE]:"fire-rtdb",[dE]:"fire-rtdb-compat",[fE]:"fire-fn",[hE]:"fire-fn-compat",[pE]:"fire-iid",[mE]:"fire-iid-compat",[gE]:"fire-fcm",[_E]:"fire-fcm-compat",[vE]:"fire-perf",[yE]:"fire-perf-compat",[wE]:"fire-rc",[EE]:"fire-rc-compat",[CE]:"fire-gcs",[SE]:"fire-gcs-compat",[kE]:"fire-fst",[IE]:"fire-fst-compat","fire-js":"fire-js",[TE]:"fire-js-all"};/**
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
 */const to=new Map,qa=new Map;function RE(t,e){try{t.container.addComponent(e)}catch(n){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zt(t){const e=t.name;if(qa.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;qa.set(e,t);for(const n of to.values())RE(n,t);return!0}function Uo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const PE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new Fo("app","Firebase",PE);/**
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
 */class AE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const DE=NE;function Vm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qa,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=Nw()),!n)throw qt.create("no-options");const s=to.get(i);if(s){if(Va(n,s.options)&&Va(r,s.config))return s;throw qt.create("duplicate-app",{appName:i})}const o=new Bw(i);for(const a of qa.values())o.addComponent(a);const l=new AE(n,r,o);return to.set(i,l),l}function Hm(t=Qa){const e=to.get(t);if(!e&&t===Qa)return Vm();if(!e)throw qt.create("no-app",{appName:t});return e}function pt(t,e,n){var r;let i=(r=xE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}Zt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const OE="firebase-heartbeat-database",ME=1,Ti="firebase-heartbeat-store";let Pl=null;function Km(){return Pl||(Pl=zo(OE,ME,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ti)}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Pl}async function LE(t){try{return(await Km()).transaction(Ti).objectStore(Ti).get(Gm(t))}catch(e){if(e instanceof Tr)Tn.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(n.message)}}}async function kf(t,e){try{const r=(await Km()).transaction(Ti,"readwrite");return await r.objectStore(Ti).put(e,Gm(t)),r.done}catch(n){if(n instanceof Tr)Tn.warn(n.message);else{const r=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tn.warn(r.message)}}}function Gm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const FE=1024,bE=30*24*60*60*1e3;class zE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new BE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=If();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=bE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=If(),{heartbeatsToSend:n,unsentEntries:r}=UE(this._heartbeatsCache.heartbeats),i=Zs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function If(){return new Date().toISOString().substring(0,10)}function UE(t,e=FE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class BE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fm()?bm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await LE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return kf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tf(t){return Zs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function jE(t){Zt(new xt("platform-logger",e=>new tE(e),"PRIVATE")),Zt(new xt("heartbeat",e=>new zE(e),"PRIVATE")),pt(Ga,Sf,t),pt(Ga,Sf,"esm2017"),pt("fire-js","")}jE("");var WE="firebase",$E="9.15.0";/**
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
 */pt(WE,$E,"app");const Qm="@firebase/installations",hc="0.6.0";/**
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
 */const qm=1e4,Ym=`w:${hc}`,Xm="FIS_v2",VE="https://firebaseinstallations.googleapis.com/v1",HE=60*60*1e3,KE="installations",GE="Installations";/**
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
 */const QE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Nn=new Fo(KE,GE,QE);function Jm(t){return t instanceof Tr&&t.code.includes("request-failed")}/**
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
 */function Zm({projectId:t}){return`${VE}/projects/${t}/installations`}function eg(t){return{token:t.token,requestStatus:2,expiresIn:YE(t.expiresIn),creationTime:Date.now()}}async function tg(t,e){const r=(await e.json()).error;return Nn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ng({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qE(t,{refreshToken:e}){const n=ng(t);return n.append("Authorization",XE(e)),n}async function rg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YE(t){return Number(t.replace("s","000"))}function XE(t){return`${Xm} ${t}`}/**
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
 */async function JE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zm(t),i=ng(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Xm,appId:t.appId,sdkVersion:Ym},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await rg(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:eg(u.authToken)}}else throw await tg("Create Installation",a)}/**
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
 */function ig(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ZE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eC=/^[cdef][\w-]{21}$/,Ya="";function tC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=nC(t);return eC.test(n)?n:Ya}catch{return Ya}}function nC(t){return ZE(t).substr(0,22)}/**
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
 */function Bo(t){return`${t.appName}!${t.appId}`}/**
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
 */const sg=new Map;function og(t,e){const n=Bo(t);lg(n,e),rC(n,e)}function lg(t,e){const n=sg.get(t);if(n)for(const r of n)r(e)}function rC(t,e){const n=iC();n&&n.postMessage({key:t,fid:e}),sC()}let mn=null;function iC(){return!mn&&"BroadcastChannel"in self&&(mn=new BroadcastChannel("[Firebase] FID Change"),mn.onmessage=t=>{lg(t.data.key,t.data.fid)}),mn}function sC(){sg.size===0&&mn&&(mn.close(),mn=null)}/**
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
 */const oC="firebase-installations-database",lC=1,xn="firebase-installations-store";let Al=null;function pc(){return Al||(Al=zo(oC,lC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xn)}}})),Al}async function no(t,e){const n=Bo(t),i=(await pc()).transaction(xn,"readwrite"),s=i.objectStore(xn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&og(t,e.fid),e}async function ag(t){const e=Bo(t),r=(await pc()).transaction(xn,"readwrite");await r.objectStore(xn).delete(e),await r.done}async function jo(t,e){const n=Bo(t),i=(await pc()).transaction(xn,"readwrite"),s=i.objectStore(xn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&og(t,l.fid),l}/**
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
 */async function mc(t){let e;const n=await jo(t.appConfig,r=>{const i=aC(r),s=uC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ya?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function aC(t){const e=t||{fid:tC(),registrationStatus:0};return ug(e)}function uC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Nn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=cC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dC(t)}:{installationEntry:e}}async function cC(t,e){try{const n=await JE(t,e);return no(t.appConfig,n)}catch(n){throw Jm(n)&&n.customData.serverCode===409?await ag(t.appConfig):await no(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dC(t){let e=await Nf(t.appConfig);for(;e.registrationStatus===1;)await ig(100),e=await Nf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mc(t);return r||n}return e}function Nf(t){return jo(t,e=>{if(!e)throw Nn.create("installation-not-found");return ug(e)})}function ug(t){return fC(t)?{fid:t.fid,registrationStatus:0}:t}function fC(t){return t.registrationStatus===1&&t.registrationTime+qm<Date.now()}/**
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
 */async function hC({appConfig:t,heartbeatServiceProvider:e},n){const r=pC(t,n),i=qE(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Ym,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await rg(()=>fetch(r,l));if(a.ok){const u=await a.json();return eg(u)}else throw await tg("Generate Auth Token",a)}function pC(t,{fid:e}){return`${Zm(t)}/${e}/authTokens:generate`}/**
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
 */async function gc(t,e=!1){let n;const r=await jo(t.appConfig,s=>{if(!cg(s))throw Nn.create("not-registered");const o=s.authToken;if(!e&&_C(o))return s;if(o.requestStatus===1)return n=mC(t,e),s;{if(!navigator.onLine)throw Nn.create("app-offline");const l=yC(s);return n=gC(t,l),l}});return n?await n:r.authToken}async function mC(t,e){let n=await xf(t.appConfig);for(;n.authToken.requestStatus===1;)await ig(100),n=await xf(t.appConfig);const r=n.authToken;return r.requestStatus===0?gc(t,e):r}function xf(t){return jo(t,e=>{if(!cg(e))throw Nn.create("not-registered");const n=e.authToken;return wC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gC(t,e){try{const n=await hC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await no(t.appConfig,r),n}catch(n){if(Jm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ag(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await no(t.appConfig,r)}throw n}}function cg(t){return t!==void 0&&t.registrationStatus===2}function _C(t){return t.requestStatus===2&&!vC(t)}function vC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HE}function yC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wC(t){return t.requestStatus===1&&t.requestTime+qm<Date.now()}/**
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
 */async function EC(t){const e=t,{installationEntry:n,registrationPromise:r}=await mc(e);return r?r.catch(console.error):gc(e).catch(console.error),n.fid}/**
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
 */async function CC(t,e=!1){const n=t;return await SC(n),(await gc(n,e)).token}async function SC(t){const{registrationPromise:e}=await mc(t);e&&await e}/**
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
 */function kC(t){if(!t||!t.options)throw Dl("App Configuration");if(!t.name)throw Dl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Dl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Dl(t){return Nn.create("missing-app-config-values",{valueName:t})}/**
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
 */const dg="installations",IC="installations-internal",TC=t=>{const e=t.getProvider("app").getImmediate(),n=kC(e),r=Uo(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NC=t=>{const e=t.getProvider("app").getImmediate(),n=Uo(e,dg).getImmediate();return{getId:()=>EC(n),getToken:i=>CC(n,i)}};function xC(){Zt(new xt(dg,TC,"PUBLIC")),Zt(new xt(IC,NC,"PRIVATE"))}xC();pt(Qm,hc);pt(Qm,hc,"esm2017");/**
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
 */const RC="/firebase-messaging-sw.js",PC="/firebase-cloud-messaging-push-scope",fg="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",AC="https://fcmregistrations.googleapis.com/v1",hg="google.c.a.c_id",DC="google.c.a.c_l",OC="google.c.a.ts",MC="google.c.a.e";var Rf;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Rf||(Rf={}));/**
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
 */var Ni;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ni||(Ni={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function LC(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Ol="fcm_token_details_db",FC=5,Pf="fcm_token_object_Store";async function bC(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Ol))return null;let e=null;return(await zo(Ol,FC,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Pf))return;const a=o.objectStore(Pf),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(l=c.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:gt(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:gt(c.auth),p256dh:gt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:gt(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:gt(c.auth),p256dh:gt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:gt(c.vapidKey)}}}}}})).close(),await xl(Ol),await xl("fcm_vapid_details_db"),await xl("undefined"),zC(e)?e:null}function zC(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const UC="firebase-messaging-database",BC=1,Rn="firebase-messaging-store";let Ml=null;function _c(){return Ml||(Ml=zo(UC,BC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rn)}}})),Ml}async function pg(t){const e=yc(t),r=await(await _c()).transaction(Rn).objectStore(Rn).get(e);if(r)return r;{const i=await bC(t.appConfig.senderId);if(i)return await vc(t,i),i}}async function vc(t,e){const n=yc(t),i=(await _c()).transaction(Rn,"readwrite");return await i.objectStore(Rn).put(e,n),await i.done,e}async function jC(t){const e=yc(t),r=(await _c()).transaction(Rn,"readwrite");await r.objectStore(Rn).delete(e),await r.done}function yc({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ne=new Fo("messaging","Messaging",WC);/**
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
 */async function $C(t,e){const n=await Ec(t),r=gg(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(wc(t.appConfig),i)).json()}catch(o){throw Ne.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ne.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw Ne.create("token-subscribe-no-token");return s.token}async function VC(t,e){const n=await Ec(t),r=gg(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${wc(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw Ne.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw Ne.create("token-update-failed",{errorInfo:o})}if(!s.token)throw Ne.create("token-update-no-token");return s.token}async function mg(t,e){const r={method:"DELETE",headers:await Ec(t)};try{const s=await(await fetch(`${wc(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw Ne.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw Ne.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function wc({projectId:t}){return`${AC}/projects/${t}/registrations`}async function Ec({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function gg({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==fg&&(i.web.applicationPubKey=r),i}/**
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
 */const HC=7*24*60*60*1e3;async function KC(t){const e=await qC(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:gt(e.getKey("auth")),p256dh:gt(e.getKey("p256dh"))},r=await pg(t.firebaseDependencies);if(r){if(YC(r.subscriptionOptions,n))return Date.now()>=r.createTime+HC?QC(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await mg(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Af(t.firebaseDependencies,n)}else return Af(t.firebaseDependencies,n)}async function GC(t){const e=await pg(t.firebaseDependencies);e&&(await mg(t.firebaseDependencies,e.token),await jC(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function QC(t,e){try{const n=await VC(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await vc(t.firebaseDependencies,r),n}catch(n){throw await GC(t),n}}async function Af(t,e){const r={token:await $C(t,e),createTime:Date.now(),subscriptionOptions:e};return await vc(t,r),r.token}async function qC(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:LC(e)})}function YC(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function Df(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return XC(e,t),JC(e,t),ZC(e,t),e}function XC(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function JC(t,e){e.data&&(t.data=e.data)}function ZC(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const a=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;a&&(t.fcmOptions.analyticsLabel=a)}/**
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
 */function e1(t){return typeof t=="object"&&!!t&&hg in t}/**
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
 */_g("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");_g("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function _g(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function t1(t){if(!t||!t.options)throw Ll("App Configuration Object");if(!t.name)throw Ll("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ll(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ll(t){return Ne.create("missing-app-config-values",{valueName:t})}/**
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
 */class n1{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=t1(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function r1(t){try{t.swRegistration=await navigator.serviceWorker.register(RC,{scope:PC}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ne.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function i1(t,e){if(!e&&!t.swRegistration&&await r1(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ne.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function s1(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=fg)}/**
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
 */async function vg(t,e){if(!navigator)throw Ne.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ne.create("permission-blocked");return await s1(t,e==null?void 0:e.vapidKey),await i1(t,e==null?void 0:e.serviceWorkerRegistration),KC(t)}/**
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
 */async function o1(t,e,n){const r=l1(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[hg],message_name:n[DC],message_time:n[OC],message_device_time:Math.floor(Date.now()/1e3)})}function l1(t){switch(t){case Ni.NOTIFICATION_CLICKED:return"notification_open";case Ni.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ni.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Df(n)):t.onMessageHandler.next(Df(n)));const r=n.data;e1(r)&&r[MC]==="1"&&await o1(t,n.messageType,r)}const Of="@firebase/messaging",Mf="0.12.0";/**
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
 */const u1=t=>{const e=new n1(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>a1(e,n)),e},c1=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>vg(e,r)}};function d1(){Zt(new xt("messaging",u1,"PUBLIC")),Zt(new xt("messaging-internal",c1,"PRIVATE")),pt(Of,Mf),pt(Of,Mf,"esm2017")}/**
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
 */async function f1(){try{await bm()}catch{return!1}return typeof window<"u"&&Fm()&&ww()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t=Hm()){return f1().then(e=>{if(!e)throw Ne.create("unsupported-browser")},e=>{throw Ne.create("indexed-db-unsupported")}),Uo(Nr(t),"messaging").getImmediate()}async function p1(t,e){return t=Nr(t),vg(t,e)}d1();const Lf="@firebase/database",Ff="0.14.0";/**
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
 */let yg="";function m1(t){yg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),he(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ii(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return At(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new g1(e)}}catch{}return new _1},gn=wg("localStorage"),Xa=wg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new jm("@firebase/database"),v1=function(){let t=1;return function(){return t++}}(),Eg=function(t){const e=Fw(t),n=new Lw;n.update(e);const r=n.digest();return cc.encodeByteArray(r)},ji=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ji.apply(null,r):typeof r=="object"?e+=he(r):e+=r,e+=" "}return e};let wn=null,bf=!0;const y1=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(or.logLevel=$.VERBOSE,wn=or.log.bind(or),e&&Xa.set("logging_enabled",!0)):typeof t=="function"?wn=t:(wn=null,Xa.remove("logging_enabled"))},Ce=function(...t){if(bf===!0&&(bf=!1,wn===null&&Xa.get("logging_enabled")===!0&&y1(!0)),wn){const e=ji.apply(null,t);wn(e)}},Wi=function(t){return function(...e){Ce(t,...e)}},Ja=function(...t){const e="FIREBASE INTERNAL ERROR: "+ji(...t);or.error(e)},Rt=function(...t){const e=`FIREBASE FATAL ERROR: ${ji(...t)}`;throw or.error(e),new Error(e)},je=function(...t){const e="FIREBASE WARNING: "+ji(...t);or.warn(e)},w1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},E1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vr="[MIN_NAME]",Pn="[MAX_NAME]",xr=function(t,e){if(t===e)return 0;if(t===vr||e===Pn)return-1;if(e===vr||t===Pn)return 1;{const n=zf(t),r=zf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},C1=function(t,e){return t===e?0:t<e?-1:1},Br=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+he(e))},Cc=function(t){if(typeof t!="object"||t===null)return he(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=he(e[r]),n+=":",n+=Cc(t[e[r]]);return n+="}",n},Sg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kg=function(t){E(!Cg(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(c.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},S1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},k1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function I1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const T1=new RegExp("^-?(0*)\\d{1,10}$"),N1=-2147483648,x1=2147483647,zf=function(t){if(T1.test(t)){const e=Number(t);if(e>=N1&&e<=x1)return e}return null},$i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw je("Exception was thrown by user callback.",n),e},Math.floor(0))}},R1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ri=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class P1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',je(e)}}class lr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}lr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="5",Ig="v",Tg="s",Ng="r",xg="f",Rg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Pg="ls",Ag="p",Za="ac",Dg="websocket",Og="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=gn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&gn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function D1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Lg(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Dg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Og)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);D1(t)&&(n.ns=t.namespace);const i=[];return be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(){this.counters_={}}incrementCounter(e,n=1){At(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={},bl={};function kc(t){const e=t.toString();return Fl[e]||(Fl[e]=new O1),Fl[e]}function M1(t,e){const n=t.toString();return bl[n]||(bl[n]=e()),bl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$i(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf="start",F1="close",b1="pLPCommand",z1="pRTLPCB",Fg="id",bg="pw",zg="ser",U1="cb",B1="seg",j1="ts",W1="d",$1="dframe",Ug=1870,Bg=30,V1=Ug-Bg,H1=25e3,K1=3e4;class Jn{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Wi(e),this.stats_=kc(n),this.urlFn=a=>(this.appCheckToken&&(a[Za]=this.appCheckToken),Lg(n,Og,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new L1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(K1)),E1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ic((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Uf)this.id=l,this.password=a;else if(o===F1)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Uf]="t",r[zg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[U1]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ig]=Sc,this.transportSessionId&&(r[Tg]=this.transportSessionId),this.lastSessionId&&(r[Pg]=this.lastSessionId),this.applicationId&&(r[Ag]=this.applicationId),this.appCheckToken&&(r[Za]=this.appCheckToken),typeof location<"u"&&location.hostname&&Rg.test(location.hostname)&&(r[Ng]=xg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Jn.forceAllow_=!0}static forceDisallow(){Jn.forceDisallow_=!0}static isAvailable(){return Jn.forceAllow_?!0:!Jn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!S1()&&!k1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Dm(n),i=Sg(r,V1);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$1]="t",r[Fg]=e,r[bg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=he(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ic{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=v1(),window[b1+this.uniqueCallbackIdentifier]=e,window[z1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ic.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Fg]=this.myID,e[bg]=this.myPW,e[zg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Bg+r.length<=Ug;){const o=this.pendingSegs.shift();r=r+"&"+B1+i+"="+o.seg+"&"+j1+i+"="+o.ts+"&"+W1+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(H1)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=16384,Q1=45e3;let ro=null;typeof MozWebSocket<"u"?ro=MozWebSocket:typeof WebSocket<"u"&&(ro=WebSocket);class nt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Wi(this.connId),this.stats_=kc(n),this.connURL=nt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Ig]=Sc,typeof location<"u"&&location.hostname&&Rg.test(location.hostname)&&(o[Ng]=xg),n&&(o[Tg]=n),r&&(o[Pg]=r),i&&(o[Za]=i),s&&(o[Ag]=s),Lg(e,Dg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,gn.set("previous_websocket_failure",!0);try{let r;Lm(),this.mySock=new ro(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&ro!==null&&!nt.forceDisallow_}static previouslyFailed(){return gn.isInMemoryStorage||gn.get("previous_websocket_failure")===!0}markConnectionHealthy(){gn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ii(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=he(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Sg(n,G1);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Q1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Jn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let r=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[nt];else{const i=this.transports_=[];for(const s of xi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);xi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=6e4,Y1=5e3,X1=10*1024,J1=100*1024,zl="t",Bf="d",Z1="s",jf="r",eS="e",Wf="o",$f="a",Vf="n",Hf="p",tS="h";class nS{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Wi("c:"+this.id+":"),this.transportManager_=new xi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ri(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>J1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>X1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zl in e){const n=e[zl];n===$f?this.upgradeIfSecondaryHealthy_():n===jf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Wf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Br("t",e),r=Br("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$f,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Br("t",e),r=Br("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Br(zl,e);if(Bf in e){const r=e[Bf];if(n===tS)this.onHandshake_(r);else if(n===Vf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Z1?this.onConnectionShutdown_(r):n===jf?this.onReset_(r):n===eS?Ja("Server Error: "+r):n===Wf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ja("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Sc!==r&&je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ri(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(q1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ri(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Y1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(gn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends Wg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new io}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=32,Gf=768;class W{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new W("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function en(t){return t.pieces_.length-t.pieceNum_}function V(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new W(t.pieces_,e)}function $g(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rS(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Vg(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new W(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof W)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new W(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function De(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return De(V(t),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Tc(t,e){if(en(t)!==en(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function rt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(en(t)>en(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iS{constructor(e,n){this.errorPrefix_=n,this.parts_=Vg(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=bo(this.parts_[r]);Kg(this)}}function sS(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=bo(e),Kg(t)}function oS(t){const e=t.parts_.pop();t.byteLength_-=bo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Kg(t){if(t.byteLength_>Gf)throw new Error(t.errorPrefix_+"has a key path longer than "+Gf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Kf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Kf+") or object contains a cycle "+dn(t))}function dn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends Wg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Nc}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=1e3,lS=60*5*1e3,Qf=30*1e3,aS=1.3,uS=3e4,cS="server_kill",qf=3;class St extends jg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=St.nextPersistentConnectionId_++,this.log_=Wi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=jr,this.maxReconnectDelay_=lS,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Lm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Nc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&io.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(he(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new dc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;St.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&At(e,"w")){const r=_r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ow(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Qf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Dw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+he(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ja("Unrecognized action received from server: "+he(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=jr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=jr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uS&&(this.reconnectDelay_=jr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aS)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new nS(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{je(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(cS)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&je(d),a())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vf(this.interruptReasons_)&&(this.reconnectDelay_=jr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Cc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new W(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qf&&(this.reconnectDelay_=Qf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+yg.replace(/\./g,"-")]=1,Mm()?e["framework.cordova"]=1:yw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=io.getInstance().currentlyOnline();return vf(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new M(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new M(vr,e),i=new M(vr,n);return this.compare(r,i)!==0}minPost(){return M.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;class Gg extends Wo{static get __EMPTY_NODE(){return fs}static set __EMPTY_NODE(e){fs=e}compare(e,n){return xr(e.name,n.name)}isDefinedOn(e){throw Ir("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return M.MIN}maxPost(){return new M(Pn,fs)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,fs)}toString(){return".key"}}const ar=new Gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??Oe.EMPTY_NODE,this.right=s??Oe.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Oe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class dS{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Oe{constructor(e,n=Oe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Oe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new Oe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hs(this.root_,null,this.comparator_,!0,e)}}Oe.EMPTY_NODE=new dS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fS(t,e){return xr(t.name,e.name)}function xc(t,e){return xr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;function hS(t){eu=t}const Qg=function(t){return typeof t=="number"?"number:"+kg(t):"string:"+t},qg=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&At(e,".sv"),"Priority must be a string or number.")}else E(t===eu||t.isEmpty(),"priority of unexpected type.");E(t===eu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf;class ce{constructor(e,n=ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qg(this.priorityNode_)}static set __childrenNodeConstructor(e){Yf=e}static get __childrenNodeConstructor(){return Yf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:L(e)===".priority"?this.priorityNode_:ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||en(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qg(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kg(this.value_):e+=this.value_,this.lazyHash_=Eg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ce.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ce.VALUE_TYPE_ORDER.indexOf(n),s=ce.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yg,Xg;function pS(t){Yg=t}function mS(t){Xg=t}class gS extends Wo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return M.MIN}maxPost(){return new M(Pn,new ce("[PRIORITY-POST]",Xg))}makePost(e,n){const r=Yg(e);return new M(n,new ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const ee=new gS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=Math.log(2);class vS{constructor(e){const n=s=>parseInt(Math.log(s)/_S,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const so=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,f;if(c===0)return null;if(c===1)return d=t[a],f=n?n(d):d,new fe(f,d.node,fe.BLACK,null,null);{const g=parseInt(c/2,10)+a,_=i(a,g),v=i(g+1,u);return d=t[g],f=n?n(d):d,new fe(f,d.node,fe.BLACK,_,v)}},s=function(a){let u=null,c=null,d=t.length;const f=function(_,v){const A=d-_,p=d;d-=_;const h=i(A+1,p),m=t[A],y=n?n(m):m;g(new fe(y,m.node,v,null,h))},g=function(_){u?(u.left=_,u=_):(c=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),A=Math.pow(2,a.count-(_+1));v?f(A,fe.BLACK):(f(A,fe.BLACK),f(A,fe.RED))}return c},o=new vS(t.length),l=s(o);return new Oe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul;const Un={};class wt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Un&&ee,"ChildrenNode.ts has not been loaded"),Ul=Ul||new wt({".priority":Un},{".priority":ee}),Ul}get(e){const n=_r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Oe?n:null}hasIndex(e){return At(this.indexSet_,e.toString())}addIndex(e,n){E(e!==ar,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(M.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=so(r,e.getCompare()):l=Un;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new wt(c,u)}addToIndexes(e,n){const r=eo(this.indexes_,(i,s)=>{const o=_r(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Un)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(M.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),so(l,o.getCompare())}else return Un;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new M(e.name,l))),a.insert(e,e.node)}});return new wt(r,this.indexSet_)}removeFromIndexes(e,n){const r=eo(this.indexes_,i=>{if(i===Un)return i;{const s=n.get(e.name);return s?i.remove(new M(e.name,s)):i}});return new wt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qg(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wr||(Wr=new R(new Oe(xc),null,wt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wr}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Wr:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new M(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wr:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{E(L(e)!==".priority"||en(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(V(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ee,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qg(this.getPriority().val())+":"),this.forEachChild(ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Eg(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new M(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new M(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new M(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Vi?-1:0}withIndex(e){if(e===ar||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ar||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ee),i=n.getIterator(ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ar?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yS extends R{constructor(){super(new Oe(xc),R.EMPTY_NODE,wt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const Vi=new yS;Object.defineProperties(M,{MIN:{value:new M(vr,R.EMPTY_NODE)},MAX:{value:new M(Pn,Vi)}});Gg.__EMPTY_NODE=R.EMPTY_NODE;ce.__childrenNodeConstructor=R;hS(Vi);mS(Vi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=!0;function Se(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ce(n,Se(e))}if(!(t instanceof Array)&&wS){const n=[];let r=!1;if(be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Se(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new M(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=so(n,fS,o=>o.name,xc);if(r){const o=so(n,ee.getCompare());return new R(s,Se(e),new wt({".priority":o},{".priority":ee}))}else return new R(s,Se(e),wt.Default)}else{let n=R.EMPTY_NODE;return be(t,(r,i)=>{if(At(t,r)&&r.substring(0,1)!=="."){const s=Se(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Se(e))}}pS(Se);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES extends Wo{constructor(e){super(),this.indexPath_=e,E(!F(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xr(e.name,n.name):s}makePost(e,n){const r=Se(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new M(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,Vi);return new M(Pn,e)}toString(){return Vg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS extends Wo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?xr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,n){const r=Se(e);return new M(n,r)}toString(){return".value"}}const SS=new CS;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){return{type:"value",snapshotNode:t}}function yr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ri(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Pi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kS(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ri(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(yr(n,r)):o.trackChildChange(Pi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ri(i,s))}),n.isLeafNode()||n.forEachChild(ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Pi(i,s,o))}else r.trackChildChange(yr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.indexedFilter_=new Rc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ai.getStartPost_(e),this.endPost_=Ai.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new M(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(ee,(o,l)=>{s.matches(new M(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new M(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new M(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Pi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ri(n,d));const v=l.updateImmediateChild(n,R.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(yr(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ri(u.name,u.node)),s.trackChildChange(yr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,R.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new Pc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function TS(t){return t.loadsAllData()?new Rc(t.getIndex()):t.hasLimit()?new IS(t):new Ai(t)}function Xf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===SS?n="$value":t.index_===ar?n="$key":(E(t.index_ instanceof ES,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=he(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=he(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+he(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=he(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+he(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends jg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Wi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=oo.getListenId_(e,r),l={};this.listens_[o]=l;const a=Xf(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),_r(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=oo.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xf(e._queryParams),r=e._path.toString(),i=new dc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Mw(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ii(l.responseText)}catch{je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(){return{value:null,children:new Map}}function Zg(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,lo());const i=t.children.get(r);e=V(e),Zg(i,e,n)}}function tu(t,e,n){t.value!==null?n(e,t.value):xS(t,(r,i)=>{const s=new W(e.toString()+"/"+r);tu(i,s,n)})}function xS(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=10*1e3,PS=30*1e3,AS=5*60*1e3;class DS{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new RS(e);const r=Zf+(PS-Zf)*Math.random();ri(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;be(e,(i,s)=>{s>0&&At(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ri(this.reportStats_.bind(this),Math.floor(Math.random()*2*AS))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function e_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ac(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Dc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=it.ACK_USER_WRITE,this.source=e_()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new W(e));return new ao(B(),n,this.revert)}}else return E(L(this.path)===e,"operationForChild called for unrelated child."),new ao(V(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Di(this.source,B()):new Di(this.source,V(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=it.OVERWRITE}operationForChild(e){return F(this.path)?new An(this.source,B(),this.snap.getImmediateChild(e)):new An(this.source,V(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=it.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new W(e));return n.isEmpty()?null:n.value?new An(this.source,B(),n.value):new Oi(this.source,B(),n)}else return E(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Oi(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function MS(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(kS(o.childName,o.snapshotNode))}),$r(t,i,"child_removed",e,r,n),$r(t,i,"child_added",e,r,n),$r(t,i,"child_moved",s,r,n),$r(t,i,"child_changed",e,r,n),$r(t,i,"value",e,r,n),i}function $r(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>FS(t,l,a)),o.forEach(l=>{const a=LS(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function LS(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function FS(t,e,n){if(e.childName==null||n.childName==null)throw Ir("Should only compare child_ events.");const r=new M(e.childName,e.snapshotNode),i=new M(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t,e){return{eventCache:t,serverCache:e}}function ii(t,e,n,r){return $o(new Dn(e,n,r),t.serverCache)}function t_(t,e,n,r){return $o(t.eventCache,new Dn(e,n,r))}function nu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function On(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl;const bS=()=>(Bl||(Bl=new Oe(C1)),Bl);class G{constructor(e,n=bS()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return be(e,(r,i)=>{n=n.set(new W(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(F(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(V(e),n);return s!=null?{path:le(new W(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(V(e)):new G(null)}}set(e,n){if(F(e))return new G(n,this.children);{const r=L(e),s=(this.children.get(r)||new G(null)).set(V(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(V(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(F(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(V(e)):null}}setTree(e,n){if(F(e))return n;{const r=L(e),s=(this.children.get(r)||new G(null)).setTree(V(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(F(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(V(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(V(e),le(n,i),r):new G(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.writeTree_=e}static empty(){return new lt(new G(null))}}function si(t,e,n){if(F(e))return new lt(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=De(i,e);return s=s.updateChild(o,n),new lt(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new lt(s)}}}function eh(t,e,n){let r=t;return be(n,(i,s)=>{r=si(r,le(e,i),s)}),r}function th(t,e){if(F(e))return lt.empty();{const n=t.writeTree_.setTree(e,new G(null));return new lt(n)}}function ru(t,e){return Fn(t,e)!=null}function Fn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(De(n.path,e)):null}function nh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(r,i)=>{e.push(new M(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new M(r,i.value))}),e}function Yt(t,e){if(F(e))return t;{const n=Fn(t,e);return n!=null?new lt(new G(n)):new lt(t.writeTree_.subtree(e))}}function iu(t){return t.writeTree_.isEmpty()}function wr(t,e){return n_(B(),t.writeTree_,e)}function n_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=n_(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(t,e){return o_(e,t)}function zS(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=si(t.visibleWrites,e,n)),t.lastWriteId=r}function US(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function BS(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&jS(l,r.path)?i=!1:rt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return WS(t),!0;if(r.snap)t.visibleWrites=th(t.visibleWrites,r.path);else{const l=r.children;be(l,a=>{t.visibleWrites=th(t.visibleWrites,le(r.path,a))})}return!0}else return!1}function jS(t,e){if(t.snap)return rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&rt(le(t.path,n),e))return!0;return!1}function WS(t){t.visibleWrites=r_(t.allWrites,$S,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function $S(t){return t.visible}function r_(t,e,n){let r=lt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)rt(n,o)?(l=De(n,o),r=si(r,l,s.snap)):rt(o,n)&&(l=De(o,n),r=si(r,B(),s.snap.getChild(l)));else if(s.children){if(rt(n,o))l=De(n,o),r=eh(r,l,s.children);else if(rt(o,n))if(l=De(o,n),F(l))r=eh(r,B(),s.children);else{const a=_r(s.children,L(l));if(a){const u=a.getChild(V(l));r=si(r,B(),u)}}}else throw Ir("WriteRecord should have .snap or .children")}}return r}function i_(t,e,n,r,i){if(!r&&!i){const s=Fn(t.visibleWrites,e);if(s!=null)return s;{const o=Yt(t.visibleWrites,e);if(iu(o))return n;if(n==null&&!ru(o,B()))return null;{const l=n||R.EMPTY_NODE;return wr(o,l)}}}else{const s=Yt(t.visibleWrites,e);if(!i&&iu(s))return n;if(!i&&n==null&&!ru(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(rt(u.path,e)||rt(e,u.path))},l=r_(t.allWrites,o,e),a=n||R.EMPTY_NODE;return wr(l,a)}}}function VS(t,e,n){let r=R.EMPTY_NODE;const i=Fn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Yt(t.visibleWrites,e);return n.forEachChild(ee,(o,l)=>{const a=wr(Yt(s,new W(o)),l);r=r.updateImmediateChild(o,a)}),nh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Yt(t.visibleWrites,e);return nh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function HS(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(ru(t.visibleWrites,s))return null;{const o=Yt(t.visibleWrites,s);return iu(o)?i.getChild(n):wr(o,i.getChild(n))}}function KS(t,e,n,r){const i=le(e,n),s=Fn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Yt(t.visibleWrites,i);return wr(o,r.getNode().getImmediateChild(n))}else return null}function GS(t,e){return Fn(t.visibleWrites,e)}function QS(t,e,n,r,i,s,o){let l;const a=Yt(t.visibleWrites,e),u=Fn(a,B());if(u!=null)l=u;else if(n!=null)l=wr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function qS(){return{visibleWrites:lt.empty(),allWrites:[],lastWriteId:-1}}function uo(t,e,n,r){return i_(t.writeTree,t.treePath,e,n,r)}function Mc(t,e){return VS(t.writeTree,t.treePath,e)}function rh(t,e,n,r){return HS(t.writeTree,t.treePath,e,n,r)}function co(t,e){return GS(t.writeTree,le(t.treePath,e))}function YS(t,e,n,r,i,s){return QS(t.writeTree,t.treePath,e,n,r,i,s)}function Lc(t,e,n){return KS(t.writeTree,t.treePath,e,n)}function s_(t,e){return o_(le(t.treePath,e),t.writeTree)}function o_(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Pi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ri(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,yr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Pi(r,e.snapshotNode,i.oldSnap));else throw Ir("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const l_=new JS;class Fc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Lc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:On(this.viewCache_),s=YS(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){return{filter:t}}function ek(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function tk(t,e,n,r,i){const s=new XS;let o,l;if(n.type===it.OVERWRITE){const u=n;u.source.fromUser?o=su(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!F(u.path),o=fo(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===it.MERGE){const u=n;u.source.fromUser?o=rk(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=ou(t,e,u.path,u.children,r,i,l,s))}else if(n.type===it.ACK_USER_WRITE){const u=n;u.revert?o=ok(t,e,u.path,r,i,s):o=ik(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===it.LISTEN_COMPLETE)o=sk(t,e,n.path,r,s);else throw Ir("Unknown operation type: "+n.type);const a=s.getChanges();return nk(e,o,a),{viewCache:o,changes:a}}function nk(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=nu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Jg(nu(e)))}}function a_(t,e,n,r,i,s){const o=e.eventCache;if(co(r,n)!=null)return e;{let l,a;if(F(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=On(e),c=u instanceof R?u:R.EMPTY_NODE,d=Mc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=uo(r,On(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){E(en(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=rh(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=V(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=rh(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Lc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return ii(e,l,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function fo(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(F(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=L(n);if(!a.isCompleteForPath(n)&&en(n)>1)return e;const _=V(n),A=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=c.updatePriority(a.getNode(),A):u=c.updateChild(a.getNode(),g,A,_,l_,null)}const d=t_(e,u,a.isFullyInitialized()||F(n),c.filtersNodes()),f=new Fc(i,d,s);return a_(t,d,n,i,f,l)}function su(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Fc(i,e,s);if(F(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ii(e,u,!0,t.filter.filtersNodes());else{const d=L(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ii(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=V(n),g=l.getNode().getImmediateChild(d);let _;if(F(f))_=r;else{const v=c.getCompleteChild(d);v!=null?$g(f)===".priority"&&v.getChild(Hg(f)).isEmpty()?_=v:_=v.updateChild(f,r):_=R.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),d,_,f,c,o);a=ii(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ih(t,e){return t.eventCache.isCompleteForChild(e)}function rk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=le(n,a);ih(e,L(c))&&(l=su(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=le(n,a);ih(e,L(c))||(l=su(t,l,c,u,i,s,o))}),l}function sh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ou(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;F(n)?u=r:u=new G(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),_=sh(t,g,f);a=fo(t,a,new W(d),_,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const _=e.serverCache.getNode().getImmediateChild(d),v=sh(t,_,f);a=fo(t,a,new W(d),v,i,s,o,l)}}),a}function ik(t,e,n,r,i,s,o){if(co(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(F(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return fo(t,e,n,a.getNode().getChild(n),i,s,l,o);if(F(n)){let u=new G(null);return a.getNode().forEachChild(ar,(c,d)=>{u=u.set(new W(c),d)}),ou(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((c,d)=>{const f=le(n,c);a.isCompleteForPath(f)&&(u=u.set(c,a.getNode().getChild(f)))}),ou(t,e,n,u,i,s,l,o)}}function sk(t,e,n,r,i){const s=e.serverCache,o=t_(e,s.getNode(),s.isFullyInitialized()||F(n),s.isFiltered());return a_(t,o,n,r,l_,i)}function ok(t,e,n,r,i,s){let o;if(co(r,n)!=null)return e;{const l=new Fc(r,e,i),a=e.eventCache.getNode();let u;if(F(n)||L(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=uo(r,On(e));else{const d=e.serverCache.getNode();E(d instanceof R,"serverChildren would be complete if leaf node"),c=Mc(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=L(n);let d=Lc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,V(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,R.EMPTY_NODE,V(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=uo(r,On(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||co(r,B())!=null,ii(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Rc(r.getIndex()),s=TS(r);this.processor_=ZS(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),c=new Dn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Dn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=$o(d,c),this.eventGenerator_=new OS(this.query_)}get query(){return this.query_}}function ak(t){return t.viewCache_.serverCache.getNode()}function uk(t,e){const n=On(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function oh(t){return t.eventRegistrations_.length===0}function ck(t,e){t.eventRegistrations_.push(e)}function lh(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ah(t,e,n,r){e.type===it.MERGE&&e.source.queryId!==null&&(E(On(t.viewCache_),"We should always have a full cache before handling merges"),E(nu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=tk(t.processor_,i,e,n,r);return ek(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,u_(t,s.changes,s.viewCache.eventCache.getNode(),null)}function dk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(s,o)=>{r.push(yr(s,o))}),n.isFullyInitialized()&&r.push(Jg(n.getNode())),u_(t,r,n.getNode(),e)}function u_(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return MS(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho;class fk{constructor(){this.views=new Map}}function hk(t){E(!ho,"__referenceConstructor has already been defined"),ho=t}function pk(){return E(ho,"Reference.ts has not been loaded"),ho}function mk(t){return t.views.size===0}function bc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),ah(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ah(o,e,n,r));return s}}function gk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=uo(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Mc(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const u=$o(new Dn(l,a,!1),new Dn(r,i,!1));return new lk(e,u)}return o}function _k(t,e,n,r,i,s){const o=gk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ck(o,n),dk(o,n)}function vk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=tn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(lh(u,n,r)),oh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(lh(a,n,r)),oh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!tn(t)&&s.push(new(pk())(e._repo,e._path)),{removed:s,events:o}}function c_(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ur(t,e){let n=null;for(const r of t.views.values())n=n||uk(r,e);return n}function d_(t,e){if(e._queryParams.loadsAllData())return Vo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function f_(t,e){return d_(t,e)!=null}function tn(t){return Vo(t)!=null}function Vo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po;function yk(t){E(!po,"__referenceConstructor has already been defined"),po=t}function wk(){return E(po,"Reference.ts has not been loaded"),po}let Ek=1;class uh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=qS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ck(t,e,n,r,i){return zS(t.pendingWriteTree_,e,n,r,i),i?Hi(t,new An(e_(),e,n)):[]}function Zn(t,e,n=!1){const r=US(t.pendingWriteTree_,e);if(BS(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(B(),!0):be(r.children,o=>{s=s.set(new W(o),!0)}),Hi(t,new ao(r.path,s,n))}else return[]}function Ho(t,e,n){return Hi(t,new An(Ac(),e,n))}function Sk(t,e,n){const r=G.fromObject(n);return Hi(t,new Oi(Ac(),e,r))}function kk(t,e){return Hi(t,new Di(Ac(),e))}function Ik(t,e,n){const r=zc(t,n);if(r){const i=Uc(r),s=i.path,o=i.queryId,l=De(s,e),a=new Di(Dc(o),l);return Bc(t,s,a)}else return[]}function lu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||f_(o,e))){const a=vk(o,e,n,r);mk(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>tn(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=xk(f);for(let _=0;_<g.length;++_){const v=g[_],A=v.query,p=g_(t,v);t.listenProvider_.startListening(oi(A),mo(t,A),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(oi(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Ko(f));t.listenProvider_.stopListening(oi(f),g)}))}Rk(t,u)}return l}function Tk(t,e,n,r){const i=zc(t,r);if(i!=null){const s=Uc(i),o=s.path,l=s.queryId,a=De(o,e),u=new An(Dc(l),a,n);return Bc(t,o,u)}else return[]}function Nk(t,e,n,r){const i=zc(t,r);if(i){const s=Uc(i),o=s.path,l=s.queryId,a=De(o,e),u=G.fromObject(n),c=new Oi(Dc(l),a,u);return Bc(t,o,c)}else return[]}function ch(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=De(f,i);s=s||ur(g,_),o=o||tn(g)});let l=t.syncPointTree_.get(i);l?(o=o||tn(l),s=s||ur(l,B())):(l=new fk,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=ur(_,B());v&&(s=s.updateImmediateChild(g,v))}));const u=f_(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ko(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Pk();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=Oc(t.pendingWriteTree_,i);let d=_k(l,e,n,c,s,a);if(!u&&!o&&!r){const f=d_(l,e);d=d.concat(Ak(t,e,f))}return d}function h_(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=De(o,e),u=ur(l,a);if(u)return u});return i_(i,e,s,n,!0)}function Hi(t,e){return p_(e,t.syncPointTree_,null,Oc(t.pendingWriteTree_,B()))}function p_(t,e,n,r){if(F(t.path))return m_(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=ur(i,B()));let s=[];const o=L(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=s_(r,o);s=s.concat(p_(l,a,u,c))}return i&&(s=s.concat(bc(i,t,r,n))),s}}function m_(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=ur(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=s_(r,o),c=t.operationForChild(o);c&&(s=s.concat(m_(c,l,a,u)))}),i&&(s=s.concat(bc(i,t,r,n))),s}function g_(t,e){const n=e.query,r=mo(t,n);return{hashFn:()=>(ak(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Ik(t,n._path,r):kk(t,n._path);{const s=I1(i,n);return lu(t,n,null,s)}}}}function mo(t,e){const n=Ko(e);return t.queryToTagMap.get(n)}function Ko(t){return t._path.toString()+"$"+t._queryIdentifier}function zc(t,e){return t.tagToQueryMap.get(e)}function Uc(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new W(t.substr(0,e))}}function Bc(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Oc(t.pendingWriteTree_,e);return bc(r,n,i,null)}function xk(t){return t.fold((e,n,r)=>{if(n&&tn(n))return[Vo(n)];{let i=[];return n&&(i=c_(n)),be(r,(s,o)=>{i=i.concat(o)}),i}})}function oi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wk())(t._repo,t._path):t}function Rk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ko(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Pk(){return Ek++}function Ak(t,e,n){const r=e._path,i=mo(t,e),s=g_(t,n),o=t.listenProvider_.startListening(oi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!tn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!F(u)&&c&&tn(c))return[Vo(c).query];{let f=[];return c&&(f=f.concat(c_(c).map(g=>g.query))),be(d,(g,_)=>{f=f.concat(_)}),f}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(oi(c),mo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new jc(n)}node(){return this.node_}}class Wc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new Wc(this.syncTree_,n)}node(){return h_(this.syncTree_,this.path_)}}const Dk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dh=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Ok(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mk(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Ok=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Mk=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Lk=function(t,e,n,r){return $c(e,new Wc(n,t),r)},Fk=function(t,e,n){return $c(t,new jc(e),n)};function $c(t,e,n){const r=t.getPriority().val(),i=dh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=dh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ce(l,Se(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ce(i))),o.forEachChild(ee,(l,a)=>{const u=$c(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hc(t,e){let n=e instanceof W?e:new W(e),r=t,i=L(n);for(;i!==null;){const s=_r(r.node.children,i)||{children:{},childCount:0};r=new Vc(i,r,s),n=V(n),i=L(n)}return r}function Rr(t){return t.node.value}function __(t,e){t.node.value=e,au(t)}function v_(t){return t.node.childCount>0}function bk(t){return Rr(t)===void 0&&!v_(t)}function Go(t,e){be(t.node.children,(n,r)=>{e(new Vc(n,t,r))})}function y_(t,e,n,r){n&&!r&&e(t),Go(t,i=>{y_(i,e,!0,r)}),n&&r&&e(t)}function zk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ki(t){return new W(t.parent===null?t.name:Ki(t.parent)+"/"+t.name)}function au(t){t.parent!==null&&Uk(t.parent,t.name,t)}function Uk(t,e,n){const r=bk(n),i=At(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,au(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,au(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=/[\[\].#$\/\u0000-\u001F\u007F]/,jk=/[\[\].#$\u0000-\u001F\u007F]/,jl=10*1024*1024,w_=function(t){return typeof t=="string"&&t.length!==0&&!Bk.test(t)},E_=function(t){return typeof t=="string"&&t.length!==0&&!jk.test(t)},Wk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),E_(t)},C_=function(t,e,n){const r=n instanceof W?new iS(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+dn(r));if(typeof e=="function")throw new Error(t+"contains a function "+dn(r)+" with contents = "+e.toString());if(Cg(e))throw new Error(t+"contains "+e.toString()+" "+dn(r));if(typeof e=="string"&&e.length>jl/3&&bo(e)>jl)throw new Error(t+"contains a string greater than "+jl+" utf8 bytes "+dn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!w_(o)))throw new Error(t+" contains an invalid key ("+o+") "+dn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sS(r,o),C_(t,l,r),oS(r)}),i&&s)throw new Error(t+' contains ".value" child '+dn(r)+" in addition to actual children.")}},S_=function(t,e,n,r){if(!(r&&n===void 0)&&!E_(n))throw new Error(Bm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$k=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),S_(t,e,n,r)},Vk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!w_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wk(n))throw new Error(Bm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function k_(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Tc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function I_(t,e,n){k_(t,n),T_(t,r=>Tc(r,e))}function bn(t,e,n){k_(t,n),T_(t,r=>rt(r,e)||rt(e,r))}function T_(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Kk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Kk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();wn&&Ce("event: "+n.toString()),$i(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk="repo_interrupt",Qk=25;class qk{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Hk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lo(),this.transactionQueueTree_=new Vc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Yk(t,e,n){if(t.stats_=kc(t.repoInfo_),t.forceRestClient_||R1())t.server_=new oo(t.repoInfo_,(r,i,s,o)=>{fh(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>hh(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{he(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new St(t.repoInfo_,e,(r,i,s,o)=>{fh(t,r,i,s,o)},r=>{hh(t,r)},r=>{Jk(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=M1(t.repoInfo_,()=>new DS(t.stats_,t.server_)),t.infoData_=new NS,t.infoSyncTree_=new uh({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ho(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Kc(t,"connected",!1),t.serverSyncTree_=new uh({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);bn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Xk(t){const n=t.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function N_(t){return Dk({timestamp:Xk(t)})}function fh(t,e,n,r,i){t.dataUpdateCount++;const s=new W(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=eo(n,u=>Se(u));o=Nk(t.serverSyncTree_,s,a,i)}else{const a=Se(n);o=Tk(t.serverSyncTree_,s,a,i)}else if(r){const a=eo(n,u=>Se(u));o=Sk(t.serverSyncTree_,s,a)}else{const a=Se(n);o=Ho(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Qc(t,s)),bn(t.eventQueue_,l,o)}function hh(t,e){Kc(t,"connected",e),e===!1&&eI(t)}function Jk(t,e){be(e,(n,r)=>{Kc(t,n,r)})}function Kc(t,e,n){const r=new W("/.info/"+e),i=Se(n);t.infoData_.updateSnapshot(r,i);const s=Ho(t.infoSyncTree_,r,i);bn(t.eventQueue_,r,s)}function Zk(t){return t.nextWriteId_++}function eI(t){x_(t,"onDisconnectEvents");const e=N_(t),n=lo();tu(t.onDisconnect_,B(),(i,s)=>{const o=Lk(i,s,t.serverSyncTree_,e);Zg(n,i,o)});let r=[];tu(n,B(),(i,s)=>{r=r.concat(Ho(t.serverSyncTree_,i,s));const o=sI(t,i);Qc(t,o)}),t.onDisconnect_=lo(),bn(t.eventQueue_,B(),r)}function tI(t,e,n){let r;L(e._path)===".info"?r=ch(t.infoSyncTree_,e,n):r=ch(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function ph(t,e,n){let r;L(e._path)===".info"?r=lu(t.infoSyncTree_,e,n):r=lu(t.serverSyncTree_,e,n),I_(t.eventQueue_,e._path,r)}function nI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gk)}function x_(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function R_(t,e,n){return h_(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function Gc(t,e=t.transactionQueueTree_){if(e||Qo(t,e),Rr(e)){const n=A_(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&rI(t,Ki(e),n)}else v_(e)&&Go(e,n=>{Gc(t,n)})}function rI(t,e,n){const r=n.map(u=>u.currentWriteId),i=R_(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];E(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=De(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{x_(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Zn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Qo(t,Hc(t.transactionQueueTree_,e)),Gc(t,t.transactionQueueTree_),bn(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)$i(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{je("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Qc(t,e)}},o)}function Qc(t,e){const n=P_(t,e),r=Ki(n),i=A_(t,n);return iI(t,i,r),r}function iI(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=De(n,a.path);let c=!1,d;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Zn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Qk)c=!0,d="maxretry",i=i.concat(Zn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=R_(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){C_("transaction failed: Data returned ",g,a.path);let _=Se(g);typeof g=="object"&&g!=null&&At(g,".priority")||(_=_.updatePriority(f.getPriority()));const A=a.currentWriteId,p=N_(t),h=Fk(_,f,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=h,a.currentWriteId=Zk(t),o.splice(o.indexOf(A),1),i=i.concat(Ck(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Zn(t.serverSyncTree_,A,!0))}else c=!0,d="nodata",i=i.concat(Zn(t.serverSyncTree_,a.currentWriteId,!0))}bn(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}Qo(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)$i(r[l]);Gc(t,t.transactionQueueTree_)}function P_(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&Rr(r)===void 0;)r=Hc(r,n),e=V(e),n=L(e);return r}function A_(t,e){const n=[];return D_(t,e,n),n.sort((r,i)=>r.order-i.order),n}function D_(t,e,n){const r=Rr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Go(e,i=>{D_(t,i,n)})}function Qo(t,e){const n=Rr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,__(e,n.length>0?n:void 0)}Go(e,r=>{Qo(t,r)})}function sI(t,e){const n=Ki(P_(t,e)),r=Hc(t.transactionQueueTree_,e);return zk(r,i=>{Wl(t,i)}),Wl(t,r),y_(r,i=>{Wl(t,i)}),n}function Wl(t,e){const n=Rr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Zn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?__(e,void 0):n.length=s+1,bn(t.eventQueue_,Ki(e),i);for(let o=0;o<r.length;o++)$i(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function lI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):je(`Invalid query segment '${n}' in query '${t}'`)}return e}const mh=function(t,e){const n=aI(t),r=n.namespace;n.domain==="firebase.com"&&Rt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Rt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||w1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Mg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new W(n.pathString)}},aI=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=oI(t.substring(c,d)));const f=lI(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+he(this.snapshot.exportVal())}}class M_{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class qc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return F(this._path)?null:$g(this._path)}get ref(){return new Dt(this._repo,this._path)}get _queryIdentifier(){const e=Jf(this._queryParams),n=Cc(e);return n==="{}"?"default":n}get _queryObject(){return Jf(this._queryParams)}isEqual(e){if(e=Nr(e),!(e instanceof qc))return!1;const n=this._repo===e._repo,r=Tc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rS(this._path)}}class Dt extends qc{constructor(e,n){super(e,n,new Pc,!1)}get parent(){const e=Hg(this._path);return e===null?null:new Dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Mi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new W(e),r=go(this.ref,e);return new Mi(this._node.getChild(n),r,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Mi(i,go(this.ref,r),ee)))}hasChild(e){const n=new W(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cI(t,e){return t=Nr(t),t._checkNotDeleted("ref"),e!==void 0?go(t._root,e):t._root}function go(t,e){return t=Nr(t),L(t._path)===null?$k("child","path",e,!1):S_("child","path",e,!1),new Dt(t._repo,le(t._path,e))}class Yc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new O_("value",this,new Mi(e.snapshotNode,new Dt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}matches(e){return e instanceof Yc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Xc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new M_(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=go(new Dt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new O_(e.type,this,new Mi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Xc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function dI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{ph(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new uI(n,s||void 0),l=e==="value"?new Yc(o):new Xc(e,o);return tI(t._repo,t,l),()=>ph(t._repo,t,l)}function fI(t,e,n,r){return dI(t,"value",e,n,r)}hk(Dt);yk(Dt);/**
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
 */const hI="FIREBASE_DATABASE_EMULATOR_HOST",uu={};let pI=!1;function mI(t,e,n,r){t.repoInfo_=new Mg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function gI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Rt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mh(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[hI]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=mh(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new lr(lr.OWNER):new A1(t.name,t.options,e);Vk("Invalid Firebase Database URL",o),F(o.path)||Rt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=vI(l,t,c,new P1(t.name,n));return new yI(d,t)}function _I(t,e){const n=uu[e];(!n||n[t.key]!==t)&&Rt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),nI(t),delete n[t.key]}function vI(t,e,n,r){let i=uu[e.name];i||(i={},uu[e.name]=i);let s=i[t.toURLString()];return s&&Rt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new qk(t,pI,n,r),i[t.toURLString()]=s,s}class yI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Yk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_I(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Rt("Cannot call "+e+" on a deleted database.")}}function wI(t=Hm(),e){const n=Uo(t,"database").getImmediate({identifier:e}),r=Tw("database");return r&&EI(n,...r),n}function EI(t,e,n,r={}){t=Nr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Rt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Rt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new lr(lr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:xw(r.mockUserToken,t.app.options.projectId);s=new lr(o)}mI(i,e,n,s)}/**
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
 */function CI(t){m1(DE),Zt(new xt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return gI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),pt(Lf,Ff,t),pt(Lf,Ff,"esm2017")}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};CI();const SI={apiKey:"AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",authDomain:"c1com-fae54.firebaseapp.com",projectId:"c1com-fae54",storageBucket:"c1com-fae54.appspot.com",messagingSenderId:"985908238030",appId:"1:985908238030:web:e0271c2dde819fc179629f",measurementId:"G-J42CTXNDCQ",databaseURL:"https://c1com-fae54-default-rtdb.firebaseio.com/"},L_=Vm(SI),kI=h1(L_),II=wI(L_),TI=()=>p1(kI,{vapidKey:"BFis-cQVENFyIavJl96JRuQk3zWceC0YvjQOJYYHYQmfEda4WqnZeLNmkxepB5jTVm4sVx_JSrlBR1vYvUcPhPg"}).then(t=>{t?(alert(t),console.log(t)):(alert("No registration token available. Request permission to generate one."),console.log("No registration token available. Request permission to generate one."))}).catch(t=>{alert("An error occurred while retrieving token. "+t),console.log("An error occurred while retrieving token. "+t)}),_o=()=>(C.useState(1),C.useState("./logo.png"),lc(),P(gs,{children:se("div",{className:"navbar bg-[#111314]",children:[P("div",{className:"navbar-start",children:se("div",{className:"dropdown",children:[P("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:P("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:P("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),se("ul",{tabIndex:0,className:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52",children:[P("li",{children:P("a",{children:"Homepage"})}),P("li",{children:P("a",{children:"About"})})]})]})}),P("div",{className:"navbar-center",children:P("a",{className:"btn btn-ghost normal-case Poppins text-xl",children:"ESOS"})}),P("div",{className:"navbar-end",children:P("button",{className:"btn btn-ghost btn-circle",children:se("div",{className:"indicator",children:[P("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:P("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),P("span",{className:"badge badge-xs badge-primary indicator-item"})]})})})]})})),NI=()=>{lc();const[t,e]=C.useState(0),[n,r]=C.useState("");if(t==0)return se("div",{className:"bg-[#111314] Poppins h-screen",children:[P(_o,{}),se("div",{children:[P("div",{children:P("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),P("div",{className:"mt-12 text-center",children:"..."}),se("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[P("div",{className:"mt-16",children:P("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),P("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]});if(t==1)return se("div",{className:"bg-[#111314] Poppins h-screen",children:[P(_o,{}),se("div",{children:[P("div",{children:P("img",{src:"main.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),P("div",{className:" text-[#fff] leading-relaxed Poppins font-bdold px-4 mt-3 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),n,P("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:P("div",{onClick:()=>{TI()},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})]})},xI=()=>{lc();const[t,e]=C.useState(1),[n,r]=C.useState(0),[i,s]=C.useState(0),[o,l]=C.useState(0),[a,u]=C.useState(!1);if(C.useEffect(()=>{const c=cI(II,"a");return fI(c,d=>{d.val(),d.val()?(r(d.val().x),s(d.val().y),l(d.val().z),u(d.val().earth)):console.log("doesnt")})},[]),C.useState(""),t==0)return se("div",{className:"bg-[#111314] Poppins h-screen",children:[P(_o,{}),se("div",{children:[P("div",{children:P("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),P("div",{className:"mt-12 text-center",children:"..."}),se("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[P("div",{className:"mt-16",children:P("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),P("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]});if(t==1)return P(gs,{children:se("div",{className:"bg-[#111314] Poppins h-screen",children:[P(_o,{}),se("div",{className:"text-6xl place-items-center mt-32 grid grid-cols-3",children:[se("div",{children:["x: ",n]}),se("div",{children:["y: ",i]}),se("div",{children:["z: ",o]})]}),se("div",{className:"text-center text-6xl mt-32",children:[a&&P(gs,{children:"THER'S AN EARTQUAKE"}),!a&&P(gs,{children:"SAFE"})]})]})})};function RI(){return se(dw,{children:[P(ja,{path:"/",element:P(NI,{})}),P(ja,{path:"/mo",element:P(xI,{})})]})}Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator?console.log("no"):(console.log("yes"),navigator.serviceWorker.ready.then(t=>{t.register()}));Vl.createRoot(document.getElementById("root")).render(P(fw,{children:P(RI,{})}));
