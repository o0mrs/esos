function Kv(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var sa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Gv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ii={},Qv={get exports(){return Ii},set exports(t){Ii=t}},Lo={},oa=/([!#\$%&'\*\+\-\.\^_`\|~0-9A-Za-z]+)/,qv=/([^!#\$%&'\*\+\-\.\^_`\|~0-9A-Za-z])/g,Yv=/"((?:\\[\x00-\x7f]|[^\x00-\x08\x0a-\x1f\x7f"\\])*)"/,la=new RegExp(oa.source+"(?:=(?:"+oa.source+"|"+Yv.source+"))?"),aa=new RegExp(oa.source+"(?: *; *"+la.source+")*","g"),Xv=new RegExp("^"+aa.source+"(?: *, *"+aa.source+")*$"),Jv=/^-?(0|[1-9][0-9]*)(\.[0-9]+)?$/,Rh=Object.prototype.hasOwnProperty,Zv={parseHeader:function(t){var e=new ts;if(t===""||t===void 0)return e;if(!Xv.test(t))throw new SyntaxError("Invalid Sec-WebSocket-Extensions header: "+t);var n=t.match(aa);return n.forEach(function(r){var i=r.match(new RegExp(la.source,"g")),s=i.shift(),o={};i.forEach(function(l){var a=l.match(la),u=a[1],c;a[2]!==void 0?c=a[2]:a[3]!==void 0?c=a[3].replace(/\\/g,""):c=!0,Jv.test(c)&&(c=parseFloat(c)),Rh.call(o,u)?(o[u]=[].concat(o[u]),o[u].push(c)):o[u]=c},this),e.push(s,o)},this),e},serializeParams:function(t,e){var n=[],r=function(s,o){o instanceof Array?o.forEach(function(l){r(s,l)}):o===!0?n.push(s):typeof o=="number"?n.push(s+"="+o):qv.test(o)?n.push(s+'="'+o.replace(/"/g,'\\"')+'"'):n.push(s+"="+o)};for(var i in e)r(i,e[i]);return[t].concat(n).join("; ")}},ts=function(){this._byName={},this._inOrder=[]};ts.prototype.push=function(t,e){Rh.call(this._byName,t)||(this._byName[t]=[]),this._byName[t].push(e),this._inOrder.push({name:t,params:e})};ts.prototype.eachOffer=function(t,e){for(var n=this._inOrder,r=0,i=n.length;r<i;r++)t.call(e,n[r].name,n[r].params)};ts.prototype.byName=function(t){return this._byName[t]||[]};ts.prototype.toArray=function(){return this._inOrder.slice()};var e_=Zv,ns=function(t){this._bufferSize=t,this.clear()};ns.prototype.clear=function(){this._buffer=new Array(this._bufferSize),this._ringOffset=0,this._ringSize=this._bufferSize,this._head=0,this._tail=0,this.length=0};ns.prototype.push=function(t){var e=!1,n=!1;this._ringSize<this._bufferSize?e=this._tail===0:this._ringOffset===this._ringSize&&(e=!0,n=this._tail===0),e&&(this._tail=this._bufferSize,this._buffer=this._buffer.concat(new Array(this._bufferSize)),this._bufferSize=this._buffer.length,n&&(this._ringSize=this._bufferSize)),this._buffer[this._tail]=t,this.length+=1,this._tail<this._ringSize&&(this._ringOffset+=1),this._tail=(this._tail+1)%this._bufferSize};ns.prototype.peek=function(){if(this.length!==0)return this._buffer[this._head]};ns.prototype.shift=function(){if(this.length!==0){var t=this._buffer[this._head];return this._buffer[this._head]=void 0,this.length-=1,this._ringOffset-=1,this._ringOffset===0&&this.length>0?(this._head=this._ringSize,this._ringOffset=this.length,this._ringSize=this._bufferSize):this._head=(this._head+1)%this._ringSize,t}};var Oh=ns,t_=Oh,Ur=function(t,e){this._session=t,this._method=e,this._queue=new t_(Ur.QUEUE_SIZE),this._stopped=!1,this.pending=0};Ur.QUEUE_SIZE=8;Ur.prototype.call=function(t,e,n,r){if(!this._stopped){var i={error:t,message:e,callback:n,context:r,done:!1},s=!1,o=this;if(this._queue.push(i),i.error)return i.done=!0,this._stop(),this._flushQueue();var l=function(a,u){s^(s=!0)&&(a?(o._stop(),i.error=a,i.message=null):i.message=u,i.done=!0,o._flushQueue())};try{this._session[this._method](e,l)}catch(a){l(a)}}};Ur.prototype._stop=function(){this.pending=this._queue.length,this._stopped=!0};Ur.prototype._flushQueue=function(){for(var t=this._queue,e;t.length>0&&t.peek().done;)e=t.shift(),e.error?(this.pending=0,t.clear()):this.pending-=1,e.callback.call(e.context,e.error,e.message)};var n_=Ur,r_=Oh,Bn=function(){this._complete=!1,this._callbacks=new r_(Bn.QUEUE_SIZE)};Bn.QUEUE_SIZE=4;Bn.all=function(t){var e=new Bn,n=t.length,r=n;for(n===0&&e.done();r--;)t[r].then(function(){n-=1,n===0&&e.done()});return e};Bn.prototype.then=function(t){this._complete?t():this._callbacks.push(t)};Bn.prototype.done=function(){this._complete=!0;for(var t=this._callbacks,e;e=t.shift();)e()};var Ah=Bn,hd=n_,i_=Ah,Zn=function(t){this._ext=t[0],this._session=t[1],this._functors={incoming:new hd(this._session,"processIncomingMessage"),outgoing:new hd(this._session,"processOutgoingMessage")}};Zn.prototype.pending=function(t){var e=this._functors[t];e._stopped||(e.pending+=1)};Zn.prototype.incoming=function(t,e,n,r){this._exec("incoming",t,e,n,r)};Zn.prototype.outgoing=function(t,e,n,r){this._exec("outgoing",t,e,n,r)};Zn.prototype.close=function(){return this._closed=this._closed||new i_,this._doClose(),this._closed};Zn.prototype._exec=function(t,e,n,r,i){this._functors[t].call(e,n,function(s,o){s&&(s.message=this._ext.name+": "+s.message),r.call(i,s,o),this._doClose()},this)};Zn.prototype._doClose=function(){var t=this._functors.incoming,e=this._functors.outgoing;!this._closed||t.pending+e.pending!==0||(this._session&&this._session.close(),this._session=null,this._closed.done())};var s_=Zn,o_=s_,l_=Ah,rs=function(t){this._cells=t.map(function(e){return new o_(e)}),this._stopped={incoming:!1,outgoing:!1}};rs.prototype.processIncomingMessage=function(t,e,n){this._stopped.incoming||this._loop("incoming",this._cells.length-1,-1,-1,t,e,n)};rs.prototype.processOutgoingMessage=function(t,e,n){this._stopped.outgoing||this._loop("outgoing",0,this._cells.length,1,t,e,n)};rs.prototype.close=function(t,e){this._stopped={incoming:!0,outgoing:!0};var n=this._cells.map(function(r){return r.close()});t&&l_.all(n).then(function(){t.call(e)})};rs.prototype._loop=function(t,e,n,r,i,s,o){for(var l=this._cells,a=l.length,u=this;a--;)l[a].pending(t);var c=function(d,f,g){if(d===n)return s.call(o,f,g);l[d][t](f,g,function(v,y){v&&(u._stopped[t]=!0),c(d+r,v,y)})};c(e,null,i)};var a_=rs,Yr=e_,pd=a_,Fo=function(){this._rsv1=this._rsv2=this._rsv3=null,this._byName={},this._inOrder=[],this._sessions=[],this._index={}};Fo.MESSAGE_OPCODES=[1,2];var md={add:function(t){if(typeof t.name!="string")throw new TypeError("extension.name must be a string");if(t.type!=="permessage")throw new TypeError('extension.type must be "permessage"');if(typeof t.rsv1!="boolean")throw new TypeError("extension.rsv1 must be true or false");if(typeof t.rsv2!="boolean")throw new TypeError("extension.rsv2 must be true or false");if(typeof t.rsv3!="boolean")throw new TypeError("extension.rsv3 must be true or false");if(this._byName.hasOwnProperty(t.name))throw new TypeError('An extension with name "'+t.name+'" is already registered');this._byName[t.name]=t,this._inOrder.push(t)},generateOffer:function(){var t=[],e=[],n={};return this._inOrder.forEach(function(r){var i=r.createClientSession();if(i){var s=[r,i];t.push(s),n[r.name]=s;var o=i.generateOffer();o=o?[].concat(o):[],o.forEach(function(l){e.push(Yr.serializeParams(r.name,l))},this)}},this),this._sessions=t,this._index=n,e.length>0?e.join(", "):null},activate:function(t){var e=Yr.parseHeader(t),n=[];e.eachOffer(function(r,i){var s=this._index[r];if(!s)throw new Error('Server sent an extension response for unknown extension "'+r+'"');var o=s[0],l=s[1],a=this._reserved(o);if(a)throw new Error("Server sent two extension responses that use the RSV"+a[0]+' bit: "'+a[1]+'" and "'+o.name+'"');if(l.activate(i)!==!0)throw new Error("Server sent unacceptable extension parameters: "+Yr.serializeParams(r,i));this._reserve(o),n.push(s)},this),this._sessions=n,this._pipeline=new pd(n)},generateResponse:function(t){var e=[],n=[],r=Yr.parseHeader(t);return this._inOrder.forEach(function(i){var s=r.byName(i.name);if(!(s.length===0||this._reserved(i))){var o=i.createServerSession(s);o&&(this._reserve(i),e.push([i,o]),n.push(Yr.serializeParams(i.name,o.generateResponse())))}},this),this._sessions=e,this._pipeline=new pd(e),n.length>0?n.join(", "):null},validFrameRsv:function(t){var e={rsv1:!1,rsv2:!1,rsv3:!1},n;if(Fo.MESSAGE_OPCODES.indexOf(t.opcode)>=0)for(var r=0,i=this._sessions.length;r<i;r++)n=this._sessions[r][0],e.rsv1=e.rsv1||n.rsv1,e.rsv2=e.rsv2||n.rsv2,e.rsv3=e.rsv3||n.rsv3;return(e.rsv1||!t.rsv1)&&(e.rsv2||!t.rsv2)&&(e.rsv3||!t.rsv3)},processIncomingMessage:function(t,e,n){this._pipeline.processIncomingMessage(t,e,n)},processOutgoingMessage:function(t,e,n){this._pipeline.processOutgoingMessage(t,e,n)},close:function(t,e){if(!this._pipeline)return t.call(e);this._pipeline.close(t,e)},_reserve:function(t){this._rsv1=this._rsv1||t.rsv1&&t.name,this._rsv2=this._rsv2||t.rsv2&&t.name,this._rsv3=this._rsv3||t.rsv3&&t.name},_reserved:function(t){return this._rsv1&&t.rsv1?[1,this._rsv1]:this._rsv2&&t.rsv2?[2,this._rsv2]:this._rsv3&&t.rsv3?[3,this._rsv3]:!1}};for(var gd in md)Fo.prototype[gd]=md[gd];var O=Fo;const ua=Kv({__proto__:null,default:O},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_=O,c_=Symbol.for("react.element"),d_=Symbol.for("react.fragment"),f_=Object.prototype.hasOwnProperty,h_=u_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p_={key:!0,ref:!0,__self:!0,__source:!0};function bh(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)f_.call(e,r)&&!p_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:c_,type:t,key:s,ref:o,props:i,_owner:h_.current}}Lo.Fragment=d_;Lo.jsx=bh;Lo.jsxs=bh;(function(t){t.exports=Lo})(Qv);const ut=Ii.Fragment,E=Ii.jsx,H=Ii.jsxs;var ca={},da={},m_={get exports(){return da},set exports(t){da=t}},it={},fa={},g_={get exports(){return fa},set exports(t){fa=t}},Mh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,z){var V=R.length;R.push(z);e:for(;0<V;){var ie=V-1>>>1,k=R[ie];if(0<i(k,z))R[ie]=z,R[V]=k,V=ie;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],V=R.pop();if(V!==z){R[0]=V;e:for(var ie=0,k=R.length,L=k>>>1;ie<L;){var W=2*(ie+1)-1,Q=R[W],U=W+1,_=R[U];if(0>i(Q,V))U<k&&0>i(_,Q)?(R[ie]=_,R[U]=V,ie=U):(R[ie]=Q,R[W]=V,ie=W);else if(U<k&&0>i(_,V))R[ie]=_,R[U]=V,ie=U;else break e}}return z}function i(R,z){var V=R.sortIndex-z.sortIndex;return V!==0?V:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,f=3,g=!1,v=!1,y=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(R){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=R)r(u),z.sortIndex=z.expirationTime,e(a,z);else break;z=n(u)}}function w(R){if(y=!1,m(R),!v)if(n(a)!==null)v=!0,Xe(S);else{var z=n(u);z!==null&&Jt(w,z.startTime-R)}}function S(R,z){v=!1,y&&(y=!1,p(P),P=-1),g=!0;var V=f;try{for(m(z),d=n(a);d!==null&&(!(d.expirationTime>z)||R&&!me());){var ie=d.callback;if(typeof ie=="function"){d.callback=null,f=d.priorityLevel;var k=ie(d.expirationTime<=z);z=t.unstable_now(),typeof k=="function"?d.callback=k:d===n(a)&&r(a),m(z)}else r(a);d=n(a)}if(d!==null)var L=!0;else{var W=n(u);W!==null&&Jt(w,W.startTime-z),L=!1}return L}finally{d=null,f=V,g=!1}}var I=!1,x=null,P=-1,Y=5,j=-1;function me(){return!(t.unstable_now()-j<Y)}function Ne(){if(x!==null){var R=t.unstable_now();j=R;var z=!0;try{z=x(!0,R)}finally{z?Ye():(I=!1,x=null)}}else I=!1}var Ye;if(typeof h=="function")Ye=function(){h(Ne)};else if(typeof MessageChannel<"u"){var Yt=new MessageChannel,Xt=Yt.port2;Yt.port1.onmessage=Ne,Ye=function(){Xt.postMessage(null)}}else Ye=function(){D(Ne,0)};function Xe(R){x=R,I||(I=!0,Ye())}function Jt(R,z){P=D(function(){R(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Xe(S))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var V=f;f=z;try{return R()}finally{f=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var V=f;f=R;try{return z()}finally{f=V}},t.unstable_scheduleCallback=function(R,z,V){var ie=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ie+V:ie):V=ie,R){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=V+k,R={id:c++,callback:z,priorityLevel:R,startTime:V,expirationTime:k,sortIndex:-1},V>ie?(R.sortIndex=V,e(u,R),n(a)===null&&R===n(u)&&(y?(p(P),P=-1):y=!0,Jt(w,V-ie))):(R.sortIndex=k,e(a,R),v||g||(v=!0,Xe(S))),R},t.unstable_shouldYield=me,t.unstable_wrapCallback=function(R){var z=f;return function(){var V=f;f=z;try{return R.apply(this,arguments)}finally{f=V}}}})(Mh);(function(t){t.exports=Mh})(g_);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh=O,rt=fa;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lh=new Set,Ni={};function er(t,e){Rr(t,e),Rr(t+"Capture",e)}function Rr(t,e){for(Ni[t]=e,t=0;t<e.length;t++)Lh.add(e[t])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ha=Object.prototype.hasOwnProperty,v_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},_d={};function __(t){return ha.call(_d,t)?!0:ha.call(vd,t)?!1:v_.test(t)?_d[t]=!0:(vd[t]=!0,!1)}function y_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w_(t,e,n,r){if(e===null||typeof e>"u"||y_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ue(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ue(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ue(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ue(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ue(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ue(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ue(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ue(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ue(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ue(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ru=/[\-:]([a-z])/g;function Ou(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ru,Ou);Oe[e]=new Ue(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ru,Ou);Oe[e]=new Ue(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ru,Ou);Oe[e]=new Ue(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ue(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ue(t,1,!1,t.toLowerCase(),null,!0,!0)});function Au(t,e,n,r){var i=Oe.hasOwnProperty(e)?Oe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(w_(e,n,i,r)&&(n=null),r||i===null?__(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Gt=Dh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gs=Symbol.for("react.element"),or=Symbol.for("react.portal"),lr=Symbol.for("react.fragment"),bu=Symbol.for("react.strict_mode"),pa=Symbol.for("react.profiler"),Fh=Symbol.for("react.provider"),zh=Symbol.for("react.context"),Mu=Symbol.for("react.forward_ref"),ma=Symbol.for("react.suspense"),ga=Symbol.for("react.suspense_list"),Du=Symbol.for("react.memo"),en=Symbol.for("react.lazy"),Bh=Symbol.for("react.offscreen"),yd=Symbol.iterator;function Xr(t){return t===null||typeof t!="object"?null:(t=yd&&t[yd]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,ml;function ui(t){if(ml===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ml=e&&e[1]||""}return`
`+ml+t}var gl=!1;function vl(t,e){if(!t||gl)return"";gl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{gl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ui(t):""}function E_(t){switch(t.tag){case 5:return ui(t.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return t=vl(t.type,!1),t;case 11:return t=vl(t.type.render,!1),t;case 1:return t=vl(t.type,!0),t;default:return""}}function va(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case lr:return"Fragment";case or:return"Portal";case pa:return"Profiler";case bu:return"StrictMode";case ma:return"Suspense";case ga:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zh:return(t.displayName||"Context")+".Consumer";case Fh:return(t._context.displayName||"Context")+".Provider";case Mu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Du:return e=t.displayName||null,e!==null?e:va(t.type)||"Memo";case en:e=t._payload,t=t._init;try{return va(t(e))}catch{}}return null}function S_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return va(e);case 8:return e===bu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _n(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function C_(t){var e=jh(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vs(t){t._valueTracker||(t._valueTracker=C_(t))}function Uh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=jh(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ws(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _a(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=_n(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vh(t,e){e=e.checked,e!=null&&Au(t,"checked",e,!1)}function ya(t,e){Vh(t,e);var n=_n(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wa(t,e.type,n):e.hasOwnProperty("defaultValue")&&wa(t,e.type,_n(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ed(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wa(t,e,n){(e!=="number"||Ws(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ci=Array.isArray;function wr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_n(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ea(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Sd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(ci(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:_n(n)}}function Hh(t,e){var n=_n(e.value),r=_n(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Cd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _s,$h=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_s=_s||document.createElement("div"),_s.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_s.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k_=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(t){k_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),pi[e]=pi[t]})});function Kh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||pi.hasOwnProperty(t)&&pi[t]?(""+e).trim():e+"px"}function Gh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var x_=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ca(t,e){if(e){if(x_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function ka(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function Lu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ta=null,Er=null,Sr=null;function kd(t){if(t=os(t)){if(typeof Ta!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Vo(e),Ta(t.stateNode,t.type,e))}}function Qh(t){Er?Sr?Sr.push(t):Sr=[t]:Er=t}function qh(){if(Er){var t=Er,e=Sr;if(Sr=Er=null,kd(t),e)for(t=0;t<e.length;t++)kd(e[t])}}function Yh(t,e){return t(e)}function Xh(){}var _l=!1;function Jh(t,e,n){if(_l)return t(e,n);_l=!0;try{return Yh(t,e,n)}finally{_l=!1,(Er!==null||Sr!==null)&&(Xh(),qh())}}function Ri(t,e){var n=t.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var Ia=!1;if(Ut)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){Ia=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{Ia=!1}function T_(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var mi=!1,$s=null,Ks=!1,Na=null,I_={onError:function(t){mi=!0,$s=t}};function N_(t,e,n,r,i,s,o,l,a){mi=!1,$s=null,T_.apply(I_,arguments)}function P_(t,e,n,r,i,s,o,l,a){if(N_.apply(this,arguments),mi){if(mi){var u=$s;mi=!1,$s=null}else throw Error(T(198));Ks||(Ks=!0,Na=u)}}function tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xd(t){if(tr(t)!==t)throw Error(T(188))}function R_(t){var e=t.alternate;if(!e){if(e=tr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xd(i),t;if(s===r)return xd(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function ep(t){return t=R_(t),t!==null?tp(t):null}function tp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tp(t);if(e!==null)return e;t=t.sibling}return null}var np=rt.unstable_scheduleCallback,Td=rt.unstable_cancelCallback,O_=rt.unstable_shouldYield,A_=rt.unstable_requestPaint,ge=rt.unstable_now,b_=rt.unstable_getCurrentPriorityLevel,Fu=rt.unstable_ImmediatePriority,rp=rt.unstable_UserBlockingPriority,Gs=rt.unstable_NormalPriority,M_=rt.unstable_LowPriority,ip=rt.unstable_IdlePriority,zo=null,It=null;function D_(t){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(zo,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:z_,L_=Math.log,F_=Math.LN2;function z_(t){return t>>>=0,t===0?32:31-(L_(t)/F_|0)|0}var ys=64,ws=4194304;function di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qs(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=di(l):(s&=o,s!==0&&(r=di(s)))}else o=n&~i,o!==0?r=di(o):s!==0&&(r=di(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function B_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=B_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Pa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sp(){var t=ys;return ys<<=1,!(ys&4194240)&&(ys=64),t}function yl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function is(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function U_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function zu(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Z=0;function op(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var lp,Bu,ap,up,cp,Ra=!1,Es=[],an=null,un=null,cn=null,Oi=new Map,Ai=new Map,nn=[],V_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Id(t,e){switch(t){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(e.pointerId)}}function Zr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=os(e),e!==null&&Bu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function H_(t,e,n,r,i){switch(e){case"focusin":return an=Zr(an,t,e,n,r,i),!0;case"dragenter":return un=Zr(un,t,e,n,r,i),!0;case"mouseover":return cn=Zr(cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oi.set(s,Zr(Oi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ai.set(s,Zr(Ai.get(s)||null,t,e,n,r,i)),!0}return!1}function dp(t){var e=Rn(t.target);if(e!==null){var n=tr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zh(n),e!==null){t.blockedOn=e,cp(t.priority,function(){ap(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ms(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return e=os(n),e!==null&&Bu(e),t.blockedOn=n,!1;e.shift()}return!0}function Nd(t,e,n){Ms(t)&&n.delete(e)}function W_(){Ra=!1,an!==null&&Ms(an)&&(an=null),un!==null&&Ms(un)&&(un=null),cn!==null&&Ms(cn)&&(cn=null),Oi.forEach(Nd),Ai.forEach(Nd)}function ei(t,e){t.blockedOn===e&&(t.blockedOn=null,Ra||(Ra=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,W_)))}function bi(t){function e(i){return ei(i,t)}if(0<Es.length){ei(Es[0],t);for(var n=1;n<Es.length;n++){var r=Es[n];r.blockedOn===t&&(r.blockedOn=null)}}for(an!==null&&ei(an,t),un!==null&&ei(un,t),cn!==null&&ei(cn,t),Oi.forEach(e),Ai.forEach(e),n=0;n<nn.length;n++)r=nn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nn.length&&(n=nn[0],n.blockedOn===null);)dp(n),n.blockedOn===null&&nn.shift()}var Cr=Gt.ReactCurrentBatchConfig,qs=!0;function $_(t,e,n,r){var i=Z,s=Cr.transition;Cr.transition=null;try{Z=1,ju(t,e,n,r)}finally{Z=i,Cr.transition=s}}function K_(t,e,n,r){var i=Z,s=Cr.transition;Cr.transition=null;try{Z=4,ju(t,e,n,r)}finally{Z=i,Cr.transition=s}}function ju(t,e,n,r){if(qs){var i=Oa(t,e,n,r);if(i===null)Pl(t,e,r,Ys,n),Id(t,r);else if(H_(i,t,e,n,r))r.stopPropagation();else if(Id(t,r),e&4&&-1<V_.indexOf(t)){for(;i!==null;){var s=os(i);if(s!==null&&lp(s),s=Oa(t,e,n,r),s===null&&Pl(t,e,r,Ys,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pl(t,e,r,null,n)}}var Ys=null;function Oa(t,e,n,r){if(Ys=null,t=Lu(r),t=Rn(t),t!==null)if(e=tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ys=t,null}function fp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b_()){case Fu:return 1;case rp:return 4;case Gs:case M_:return 16;case ip:return 536870912;default:return 16}default:return 16}}var sn=null,Uu=null,Ds=null;function hp(){if(Ds)return Ds;var t,e=Uu,n=e.length,r,i="value"in sn?sn.value:sn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ds=i.slice(t,1<r?1-r:void 0)}function Ls(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ss(){return!0}function Pd(){return!1}function st(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ss:Pd,this.isPropagationStopped=Pd,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),e}var Vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vu=st(Vr),ss=fe({},Vr,{view:0,detail:0}),G_=st(ss),wl,El,ti,Bo=fe({},ss,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ti&&(ti&&t.type==="mousemove"?(wl=t.screenX-ti.screenX,El=t.screenY-ti.screenY):El=wl=0,ti=t),wl)},movementY:function(t){return"movementY"in t?t.movementY:El}}),Rd=st(Bo),Q_=fe({},Bo,{dataTransfer:0}),q_=st(Q_),Y_=fe({},ss,{relatedTarget:0}),Sl=st(Y_),X_=fe({},Vr,{animationName:0,elapsedTime:0,pseudoElement:0}),J_=st(X_),Z_=fe({},Vr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ey=st(Z_),ty=fe({},Vr,{data:0}),Od=st(ty),ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=iy[t])?!!e[t]:!1}function Hu(){return sy}var oy=fe({},ss,{key:function(t){if(t.key){var e=ny[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ls(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ry[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Ls(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ls(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ly=st(oy),ay=fe({},Bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ad=st(ay),uy=fe({},ss,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),cy=st(uy),dy=fe({},Vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=st(dy),hy=fe({},Bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),py=st(hy),my=[9,13,27,32],Wu=Ut&&"CompositionEvent"in window,gi=null;Ut&&"documentMode"in document&&(gi=document.documentMode);var gy=Ut&&"TextEvent"in window&&!gi,pp=Ut&&(!Wu||gi&&8<gi&&11>=gi),bd=String.fromCharCode(32),Md=!1;function mp(t,e){switch(t){case"keyup":return my.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ar=!1;function vy(t,e){switch(t){case"compositionend":return gp(e);case"keypress":return e.which!==32?null:(Md=!0,bd);case"textInput":return t=e.data,t===bd&&Md?null:t;default:return null}}function _y(t,e){if(ar)return t==="compositionend"||!Wu&&mp(t,e)?(t=hp(),Ds=Uu=sn=null,ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pp&&e.locale!=="ko"?null:e.data;default:return null}}var yy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yy[t.type]:e==="textarea"}function vp(t,e,n,r){Qh(r),e=Xs(e,"onChange"),0<e.length&&(n=new Vu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vi=null,Mi=null;function wy(t){Np(t,0)}function jo(t){var e=dr(t);if(Uh(e))return t}function Ey(t,e){if(t==="change")return e}var _p=!1;if(Ut){var Cl;if(Ut){var kl="oninput"in document;if(!kl){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),kl=typeof Ld.oninput=="function"}Cl=kl}else Cl=!1;_p=Cl&&(!document.documentMode||9<document.documentMode)}function Fd(){vi&&(vi.detachEvent("onpropertychange",yp),Mi=vi=null)}function yp(t){if(t.propertyName==="value"&&jo(Mi)){var e=[];vp(e,Mi,t,Lu(t)),Jh(wy,e)}}function Sy(t,e,n){t==="focusin"?(Fd(),vi=e,Mi=n,vi.attachEvent("onpropertychange",yp)):t==="focusout"&&Fd()}function Cy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jo(Mi)}function ky(t,e){if(t==="click")return jo(e)}function xy(t,e){if(t==="input"||t==="change")return jo(e)}function Ty(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:Ty;function Di(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ha.call(e,i)||!Ct(t[i],e[i]))return!1}return!0}function zd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bd(t,e){var n=zd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zd(n)}}function wp(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?wp(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ep(){for(var t=window,e=Ws();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ws(t.document)}return e}function $u(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Iy(t){var e=Ep(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&wp(n.ownerDocument.documentElement,n)){if(r!==null&&$u(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Bd(n,s);var o=Bd(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ny=Ut&&"documentMode"in document&&11>=document.documentMode,ur=null,Aa=null,_i=null,ba=!1;function jd(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ba||ur==null||ur!==Ws(r)||(r=ur,"selectionStart"in r&&$u(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_i&&Di(_i,r)||(_i=r,r=Xs(Aa,"onSelect"),0<r.length&&(e=new Vu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ur)))}function Cs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var cr={animationend:Cs("Animation","AnimationEnd"),animationiteration:Cs("Animation","AnimationIteration"),animationstart:Cs("Animation","AnimationStart"),transitionend:Cs("Transition","TransitionEnd")},xl={},Sp={};Ut&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Uo(t){if(xl[t])return xl[t];if(!cr[t])return t;var e=cr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Sp)return xl[t]=e[n];return t}var Cp=Uo("animationend"),kp=Uo("animationiteration"),xp=Uo("animationstart"),Tp=Uo("transitionend"),Ip=new Map,Ud="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(t,e){Ip.set(t,e),er(e,[t])}for(var Tl=0;Tl<Ud.length;Tl++){var Il=Ud[Tl],Py=Il.toLowerCase(),Ry=Il[0].toUpperCase()+Il.slice(1);Cn(Py,"on"+Ry)}Cn(Cp,"onAnimationEnd");Cn(kp,"onAnimationIteration");Cn(xp,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Tp,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));er("onBeforeInput",["compositionend","keypress","textInput","paste"]);er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function Vd(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,P_(r,e,void 0,t),t.currentTarget=null}function Np(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Vd(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Vd(i,l,u),s=a}}}if(Ks)throw t=Na,Ks=!1,Na=null,t}function se(t,e){var n=e[za];n===void 0&&(n=e[za]=new Set);var r=t+"__bubble";n.has(r)||(Pp(e,t,2,!1),n.add(r))}function Nl(t,e,n){var r=0;e&&(r|=4),Pp(n,t,r,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Li(t){if(!t[ks]){t[ks]=!0,Lh.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||Nl(n,!1,t),Nl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,Nl("selectionchange",!1,e))}}function Pp(t,e,n,r){switch(fp(e)){case 1:var i=$_;break;case 4:i=K_;break;default:i=ju}n=i.bind(null,e,n,t),i=void 0,!Ia||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Pl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Rn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Jh(function(){var u=s,c=Lu(n),d=[];e:{var f=Ip.get(t);if(f!==void 0){var g=Vu,v=t;switch(t){case"keypress":if(Ls(n)===0)break e;case"keydown":case"keyup":g=ly;break;case"focusin":v="focus",g=Sl;break;case"focusout":v="blur",g=Sl;break;case"beforeblur":case"afterblur":g=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Rd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=cy;break;case Cp:case kp:case xp:g=J_;break;case Tp:g=fy;break;case"scroll":g=G_;break;case"wheel":g=py;break;case"copy":case"cut":case"paste":g=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ad}var y=(e&4)!==0,D=!y&&t==="scroll",p=y?f!==null?f+"Capture":null:f;y=[];for(var h=u,m;h!==null;){m=h;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=Ri(h,p),w!=null&&y.push(Fi(h,w,m)))),D)break;h=h.return}0<y.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==xa&&(v=n.relatedTarget||n.fromElement)&&(Rn(v)||v[Vt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Rn(v):null,v!==null&&(D=tr(v),v!==D||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Rd,w="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(y=Ad,w="onPointerLeave",p="onPointerEnter",h="pointer"),D=g==null?f:dr(g),m=v==null?f:dr(v),f=new y(w,h+"leave",g,n,c),f.target=D,f.relatedTarget=m,w=null,Rn(c)===u&&(y=new y(p,h+"enter",v,n,c),y.target=m,y.relatedTarget=D,w=y),D=w,g&&v)t:{for(y=g,p=v,h=0,m=y;m;m=ir(m))h++;for(m=0,w=p;w;w=ir(w))m++;for(;0<h-m;)y=ir(y),h--;for(;0<m-h;)p=ir(p),m--;for(;h--;){if(y===p||p!==null&&y===p.alternate)break t;y=ir(y),p=ir(p)}y=null}else y=null;g!==null&&Hd(d,f,g,y,!1),v!==null&&D!==null&&Hd(d,D,v,y,!0)}}e:{if(f=u?dr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=Ey;else if(Dd(f))if(_p)S=xy;else{S=Cy;var I=Sy}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=ky);if(S&&(S=S(t,u))){vp(d,S,n,c);break e}I&&I(t,f,u),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&wa(f,"number",f.value)}switch(I=u?dr(u):window,t){case"focusin":(Dd(I)||I.contentEditable==="true")&&(ur=I,Aa=u,_i=null);break;case"focusout":_i=Aa=ur=null;break;case"mousedown":ba=!0;break;case"contextmenu":case"mouseup":case"dragend":ba=!1,jd(d,n,c);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":jd(d,n,c)}var x;if(Wu)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ar?mp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(pp&&n.locale!=="ko"&&(ar||P!=="onCompositionStart"?P==="onCompositionEnd"&&ar&&(x=hp()):(sn=c,Uu="value"in sn?sn.value:sn.textContent,ar=!0)),I=Xs(u,P),0<I.length&&(P=new Od(P,t,null,n,c),d.push({event:P,listeners:I}),x?P.data=x:(x=gp(n),x!==null&&(P.data=x)))),(x=gy?vy(t,n):_y(t,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(c=new Od("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=x))}Np(d,e)})}function Fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xs(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ri(t,n),s!=null&&r.unshift(Fi(t,s,i)),s=Ri(t,e),s!=null&&r.push(Fi(t,s,i))),t=t.return}return r}function ir(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hd(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Ri(n,s),a!=null&&o.unshift(Fi(n,a,l))):i||(a=Ri(n,s),a!=null&&o.push(Fi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ay=/\r\n?/g,by=/\u0000|\uFFFD/g;function Wd(t){return(typeof t=="string"?t:""+t).replace(Ay,`
`).replace(by,"")}function xs(t,e,n){if(e=Wd(e),Wd(t)!==e&&n)throw Error(T(425))}function Js(){}var Ma=null,Da=null;function La(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fa=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,$d=typeof Promise=="function"?Promise:void 0,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof $d<"u"?function(t){return $d.resolve(null).then(t).catch(Ly)}:Fa;function Ly(t){setTimeout(function(){throw t})}function Rl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Hr,zi="__reactProps$"+Hr,Vt="__reactContainer$"+Hr,za="__reactEvents$"+Hr,Fy="__reactListeners$"+Hr,zy="__reactHandles$"+Hr;function Rn(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Vt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kd(t);t!==null;){if(n=t[Tt])return n;t=Kd(t)}return e}t=n,n=t.parentNode}return null}function os(t){return t=t[Tt]||t[Vt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function dr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Vo(t){return t[zi]||null}var Ba=[],fr=-1;function kn(t){return{current:t}}function le(t){0>fr||(t.current=Ba[fr],Ba[fr]=null,fr--)}function re(t,e){fr++,Ba[fr]=t.current,t.current=e}var yn={},Fe=kn(yn),Ke=kn(!1),jn=yn;function Or(t,e){var n=t.type.contextTypes;if(!n)return yn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ge(t){return t=t.childContextTypes,t!=null}function Zs(){le(Ke),le(Fe)}function Gd(t,e,n){if(Fe.current!==yn)throw Error(T(168));re(Fe,e),re(Ke,n)}function Rp(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,S_(t)||"Unknown",i));return fe({},n,r)}function eo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yn,jn=Fe.current,re(Fe,t),re(Ke,Ke.current),!0}function Qd(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Rp(t,e,jn),r.__reactInternalMemoizedMergedChildContext=t,le(Ke),le(Fe),re(Fe,t)):le(Ke),re(Ke,n)}var Mt=null,Ho=!1,Ol=!1;function Op(t){Mt===null?Mt=[t]:Mt.push(t)}function By(t){Ho=!0,Op(t)}function xn(){if(!Ol&&Mt!==null){Ol=!0;var t=0,e=Z;try{var n=Mt;for(Z=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Mt=null,Ho=!1}catch(i){throw Mt!==null&&(Mt=Mt.slice(t+1)),np(Fu,xn),i}finally{Z=e,Ol=!1}}return null}var hr=[],pr=0,to=null,no=0,ot=[],lt=0,Un=null,Dt=1,Lt="";function Tn(t,e){hr[pr++]=no,hr[pr++]=to,to=t,no=e}function Ap(t,e,n){ot[lt++]=Dt,ot[lt++]=Lt,ot[lt++]=Un,Un=t;var r=Dt;t=Lt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Dt=1<<32-wt(e)+i|n<<i|r,Lt=s+t}else Dt=1<<s|n<<i|r,Lt=t}function Ku(t){t.return!==null&&(Tn(t,1),Ap(t,1,0))}function Gu(t){for(;t===to;)to=hr[--pr],hr[pr]=null,no=hr[--pr],hr[pr]=null;for(;t===Un;)Un=ot[--lt],ot[lt]=null,Lt=ot[--lt],ot[lt]=null,Dt=ot[--lt],ot[lt]=null}var tt=null,et=null,ue=!1,gt=null;function bp(t,e){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,et=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Un!==null?{id:Dt,overflow:Lt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,et=null,!0):!1;default:return!1}}function ja(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ua(t){if(ue){var e=et;if(e){var n=e;if(!qd(t,e)){if(ja(t))throw Error(T(418));e=dn(n.nextSibling);var r=tt;e&&qd(t,e)?bp(r,n):(t.flags=t.flags&-4097|2,ue=!1,tt=t)}}else{if(ja(t))throw Error(T(418));t.flags=t.flags&-4097|2,ue=!1,tt=t}}}function Yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function Ts(t){if(t!==tt)return!1;if(!ue)return Yd(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!La(t.type,t.memoizedProps)),e&&(e=et)){if(ja(t))throw Mp(),Error(T(418));for(;e;)bp(t,e),e=dn(e.nextSibling)}if(Yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=tt?dn(t.stateNode.nextSibling):null;return!0}function Mp(){for(var t=et;t;)t=dn(t.nextSibling)}function Ar(){et=tt=null,ue=!1}function Qu(t){gt===null?gt=[t]:gt.push(t)}var jy=Gt.ReactCurrentBatchConfig;function pt(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ro=kn(null),io=null,mr=null,qu=null;function Yu(){qu=mr=io=null}function Xu(t){var e=ro.current;le(ro),t._currentValue=e}function Va(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function kr(t,e){io=t,qu=mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(He=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(qu!==t)if(t={context:t,memoizedValue:e,next:null},mr===null){if(io===null)throw Error(T(308));mr=t,io.dependencies={lanes:0,firstContext:t}}else mr=mr.next=t;return e}var On=null;function Ju(t){On===null?On=[t]:On.push(t)}function Dp(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ju(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ht(t,r)}function Ht(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tn=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ht(t,n)}return i=r.interleaved,i===null?(e.next=e,Ju(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ht(t,n)}function Fs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zu(t,n)}}function Xd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function so(t,e,n,r){var i=t.updateQueue;tn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,y=l;switch(f=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=fe({},d,f);break e;case 2:tn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=g,a=d):c=c.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hn|=o,t.lanes=o,t.memoizedState=d}}function Jd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Fp=new Dh.Component().refs;function Ha(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wo={isMounted:function(t){return(t=t._reactInternals)?tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),i=pn(t),s=zt(r,i);s.payload=e,n!=null&&(s.callback=n),e=fn(t,s,i),e!==null&&(Et(e,t,i,r),Fs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),i=pn(t),s=zt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=fn(t,s,i),e!==null&&(Et(e,t,i,r),Fs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=pn(t),i=zt(n,r);i.tag=2,e!=null&&(i.callback=e),e=fn(t,i,r),e!==null&&(Et(e,t,r,n),Fs(e,t,r))}};function Zd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Di(n,r)||!Di(i,s):!0}function zp(t,e,n){var r=!1,i=yn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Ge(e)?jn:Fe.current,r=e.contextTypes,s=(r=r!=null)?Or(t,i):yn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wo,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ef(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wo.enqueueReplaceState(e,e.state,null)}function Wa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Fp,Zu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Ge(e)?jn:Fe.current,i.context=Or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ha(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wo.enqueueReplaceState(i,i.state,null),so(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Fp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Is(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function tf(t){var e=t._init;return e(t._payload)}function Bp(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=mn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,w){return h===null||h.tag!==6?(h=zl(m,p.mode,w),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,w){var S=m.type;return S===lr?c(p,h,m.props.children,w,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===en&&tf(S)===h.type)?(w=i(h,m.props),w.ref=ni(p,h,m),w.return=p,w):(w=Hs(m.type,m.key,m.props,null,p.mode,w),w.ref=ni(p,h,m),w.return=p,w)}function u(p,h,m,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Bl(m,p.mode,w),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,w,S){return h===null||h.tag!==7?(h=Ln(m,p.mode,w,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function d(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=zl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case gs:return m=Hs(h.type,h.key,h.props,null,p.mode,m),m.ref=ni(p,null,h),m.return=p,m;case or:return h=Bl(h,p.mode,m),h.return=p,h;case en:var w=h._init;return d(p,w(h._payload),m)}if(ci(h)||Xr(h))return h=Ln(h,p.mode,m,null),h.return=p,h;Is(p,h)}return null}function f(p,h,m,w){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,h,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case gs:return m.key===S?a(p,h,m,w):null;case or:return m.key===S?u(p,h,m,w):null;case en:return S=m._init,f(p,h,S(m._payload),w)}if(ci(m)||Xr(m))return S!==null?null:c(p,h,m,w,null);Is(p,m)}return null}function g(p,h,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(h,p,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case gs:return p=p.get(w.key===null?m:w.key)||null,a(h,p,w,S);case or:return p=p.get(w.key===null?m:w.key)||null,u(h,p,w,S);case en:var I=w._init;return g(p,h,m,I(w._payload),S)}if(ci(w)||Xr(w))return p=p.get(m)||null,c(h,p,w,S,null);Is(h,w)}return null}function v(p,h,m,w){for(var S=null,I=null,x=h,P=h=0,Y=null;x!==null&&P<m.length;P++){x.index>P?(Y=x,x=null):Y=x.sibling;var j=f(p,x,m[P],w);if(j===null){x===null&&(x=Y);break}t&&x&&j.alternate===null&&e(p,x),h=s(j,h,P),I===null?S=j:I.sibling=j,I=j,x=Y}if(P===m.length)return n(p,x),ue&&Tn(p,P),S;if(x===null){for(;P<m.length;P++)x=d(p,m[P],w),x!==null&&(h=s(x,h,P),I===null?S=x:I.sibling=x,I=x);return ue&&Tn(p,P),S}for(x=r(p,x);P<m.length;P++)Y=g(x,p,P,m[P],w),Y!==null&&(t&&Y.alternate!==null&&x.delete(Y.key===null?P:Y.key),h=s(Y,h,P),I===null?S=Y:I.sibling=Y,I=Y);return t&&x.forEach(function(me){return e(p,me)}),ue&&Tn(p,P),S}function y(p,h,m,w){var S=Xr(m);if(typeof S!="function")throw Error(T(150));if(m=S.call(m),m==null)throw Error(T(151));for(var I=S=null,x=h,P=h=0,Y=null,j=m.next();x!==null&&!j.done;P++,j=m.next()){x.index>P?(Y=x,x=null):Y=x.sibling;var me=f(p,x,j.value,w);if(me===null){x===null&&(x=Y);break}t&&x&&me.alternate===null&&e(p,x),h=s(me,h,P),I===null?S=me:I.sibling=me,I=me,x=Y}if(j.done)return n(p,x),ue&&Tn(p,P),S;if(x===null){for(;!j.done;P++,j=m.next())j=d(p,j.value,w),j!==null&&(h=s(j,h,P),I===null?S=j:I.sibling=j,I=j);return ue&&Tn(p,P),S}for(x=r(p,x);!j.done;P++,j=m.next())j=g(x,p,P,j.value,w),j!==null&&(t&&j.alternate!==null&&x.delete(j.key===null?P:j.key),h=s(j,h,P),I===null?S=j:I.sibling=j,I=j);return t&&x.forEach(function(Ne){return e(p,Ne)}),ue&&Tn(p,P),S}function D(p,h,m,w){if(typeof m=="object"&&m!==null&&m.type===lr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case gs:e:{for(var S=m.key,I=h;I!==null;){if(I.key===S){if(S=m.type,S===lr){if(I.tag===7){n(p,I.sibling),h=i(I,m.props.children),h.return=p,p=h;break e}}else if(I.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===en&&tf(S)===I.type){n(p,I.sibling),h=i(I,m.props),h.ref=ni(p,I,m),h.return=p,p=h;break e}n(p,I);break}else e(p,I);I=I.sibling}m.type===lr?(h=Ln(m.props.children,p.mode,w,m.key),h.return=p,p=h):(w=Hs(m.type,m.key,m.props,null,p.mode,w),w.ref=ni(p,h,m),w.return=p,p=w)}return o(p);case or:e:{for(I=m.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Bl(m,p.mode,w),h.return=p,p=h}return o(p);case en:return I=m._init,D(p,h,I(m._payload),w)}if(ci(m))return v(p,h,m,w);if(Xr(m))return y(p,h,m,w);Is(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=zl(m,p.mode,w),h.return=p,p=h),o(p)):n(p,h)}return D}var br=Bp(!0),jp=Bp(!1),ls={},Nt=kn(ls),Bi=kn(ls),ji=kn(ls);function An(t){if(t===ls)throw Error(T(174));return t}function ec(t,e){switch(re(ji,e),re(Bi,t),re(Nt,ls),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sa(e,t)}le(Nt),re(Nt,e)}function Mr(){le(Nt),le(Bi),le(ji)}function Up(t){An(ji.current);var e=An(Nt.current),n=Sa(e,t.type);e!==n&&(re(Bi,t),re(Nt,n))}function tc(t){Bi.current===t&&(le(Nt),le(Bi))}var ce=kn(0);function oo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Al=[];function nc(){for(var t=0;t<Al.length;t++)Al[t]._workInProgressVersionPrimary=null;Al.length=0}var zs=Gt.ReactCurrentDispatcher,bl=Gt.ReactCurrentBatchConfig,Vn=0,de=null,_e=null,Ce=null,lo=!1,yi=!1,Ui=0,Uy=0;function Ae(){throw Error(T(321))}function rc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function ic(t,e,n,r,i,s){if(Vn=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zs.current=t===null||t.memoizedState===null?$y:Ky,t=n(r,i),yi){s=0;do{if(yi=!1,Ui=0,25<=s)throw Error(T(301));s+=1,Ce=_e=null,e.updateQueue=null,zs.current=Gy,t=n(r,i)}while(yi)}if(zs.current=ao,e=_e!==null&&_e.next!==null,Vn=0,Ce=_e=de=null,lo=!1,e)throw Error(T(300));return t}function sc(){var t=Ui!==0;return Ui=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?de.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function ft(){if(_e===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=Ce===null?de.memoizedState:Ce.next;if(e!==null)Ce=e,_e=t;else{if(t===null)throw Error(T(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ce===null?de.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function Vi(t,e){return typeof e=="function"?e(t):e}function Ml(t){var e=ft(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((Vn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,de.lanes|=c,Hn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ct(r,e.memoizedState)||(He=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,Hn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dl(t){var e=ft(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ct(s,e.memoizedState)||(He=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Vp(){}function Hp(t,e){var n=de,r=ft(),i=e(),s=!Ct(r.memoizedState,i);if(s&&(r.memoizedState=i,He=!0),r=r.queue,oc(Kp.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Hi(9,$p.bind(null,n,r,i,e),void 0,null),Te===null)throw Error(T(349));Vn&30||Wp(n,e,i)}return i}function Wp(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $p(t,e,n,r){e.value=n,e.getSnapshot=r,Gp(e)&&Qp(t)}function Kp(t,e,n){return n(function(){Gp(e)&&Qp(t)})}function Gp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function Qp(t){var e=Ht(t,1);e!==null&&Et(e,t,1,-1)}function nf(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},e.queue=t,t=t.dispatch=Wy.bind(null,de,t),[e.memoizedState,t]}function Hi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qp(){return ft().memoizedState}function Bs(t,e,n,r){var i=xt();de.flags|=t,i.memoizedState=Hi(1|e,n,void 0,r===void 0?null:r)}function $o(t,e,n,r){var i=ft();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&rc(r,o.deps)){i.memoizedState=Hi(e,n,s,r);return}}de.flags|=t,i.memoizedState=Hi(1|e,n,s,r)}function rf(t,e){return Bs(8390656,8,t,e)}function oc(t,e){return $o(2048,8,t,e)}function Yp(t,e){return $o(4,2,t,e)}function Xp(t,e){return $o(4,4,t,e)}function Jp(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zp(t,e,n){return n=n!=null?n.concat([t]):null,$o(4,4,Jp.bind(null,e,t),n)}function lc(){}function em(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function tm(t,e){var n=ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function nm(t,e,n){return Vn&21?(Ct(n,e)||(n=sp(),de.lanes|=n,Hn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,He=!0),t.memoizedState=n)}function Vy(t,e){var n=Z;Z=n!==0&&4>n?n:4,t(!0);var r=bl.transition;bl.transition={};try{t(!1),e()}finally{Z=n,bl.transition=r}}function rm(){return ft().memoizedState}function Hy(t,e,n){var r=pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},im(t))sm(e,n);else if(n=Dp(t,e,n,r),n!==null){var i=Be();Et(n,t,r,i),om(n,e,r)}}function Wy(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(im(t))sm(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,o)){var a=e.interleaved;a===null?(i.next=i,Ju(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Dp(t,e,i,r),n!==null&&(i=Be(),Et(n,t,r,i),om(n,e,r))}}function im(t){var e=t.alternate;return t===de||e!==null&&e===de}function sm(t,e){yi=lo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function om(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,zu(t,n)}}var ao={readContext:dt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},$y={readContext:dt,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:rf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bs(4194308,4,Jp.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bs(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bs(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Hy.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:nf,useDebugValue:lc,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=nf(!1),e=t[0];return t=Vy.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=xt();if(ue){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Te===null)throw Error(T(349));Vn&30||Wp(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,rf(Kp.bind(null,r,s,t),[t]),r.flags|=2048,Hi(9,$p.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=Te.identifierPrefix;if(ue){var n=Lt,r=Dt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ui++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Uy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ky={readContext:dt,useCallback:em,useContext:dt,useEffect:oc,useImperativeHandle:Zp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:tm,useReducer:Ml,useRef:qp,useState:function(){return Ml(Vi)},useDebugValue:lc,useDeferredValue:function(t){var e=ft();return nm(e,_e.memoizedState,t)},useTransition:function(){var t=Ml(Vi)[0],e=ft().memoizedState;return[t,e]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:rm,unstable_isNewReconciler:!1},Gy={readContext:dt,useCallback:em,useContext:dt,useEffect:oc,useImperativeHandle:Zp,useInsertionEffect:Yp,useLayoutEffect:Xp,useMemo:tm,useReducer:Dl,useRef:qp,useState:function(){return Dl(Vi)},useDebugValue:lc,useDeferredValue:function(t){var e=ft();return _e===null?e.memoizedState=t:nm(e,_e.memoizedState,t)},useTransition:function(){var t=Dl(Vi)[0],e=ft().memoizedState;return[t,e]},useMutableSource:Vp,useSyncExternalStore:Hp,useId:rm,unstable_isNewReconciler:!1};function Dr(t,e){try{var n="",r=e;do n+=E_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ll(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $a(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qy=typeof WeakMap=="function"?WeakMap:Map;function lm(t,e,n){n=zt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){co||(co=!0,tu=r),$a(t,e)},n}function am(t,e,n){n=zt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$a(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$a(t,e),typeof r!="function"&&(hn===null?hn=new Set([this]):hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function sf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Qy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=a0.bind(null,t,e,n),e.then(t,t))}function of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zt(-1,1),e.tag=2,fn(n,e,1))),n.lanes|=1),t)}var qy=Gt.ReactCurrentOwner,He=!1;function ze(t,e,n,r){e.child=t===null?jp(e,null,n,r):br(e,t.child,n,r)}function af(t,e,n,r,i){n=n.render;var s=e.ref;return kr(e,i),r=ic(t,e,n,r,s,i),n=sc(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(ue&&n&&Ku(e),e.flags|=1,ze(t,e,r,i),e.child)}function uf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,um(t,e,s,r,i)):(t=Hs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Di,n(o,r)&&t.ref===e.ref)return Wt(t,e,i)}return e.flags|=1,t=mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function um(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Di(s,r)&&t.ref===e.ref)if(He=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(He=!0);else return e.lanes=t.lanes,Wt(t,e,i)}return Ka(t,e,n,r,i)}function cm(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(vr,Je),Je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(vr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(vr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(vr,Je),Je|=r;return ze(t,e,i,n),e.child}function dm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ka(t,e,n,r,i){var s=Ge(n)?jn:Fe.current;return s=Or(e,s),kr(e,i),n=ic(t,e,n,r,s,i),r=sc(),t!==null&&!He?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(ue&&r&&Ku(e),e.flags|=1,ze(t,e,n,i),e.child)}function cf(t,e,n,r,i){if(Ge(n)){var s=!0;eo(e)}else s=!1;if(kr(e,i),e.stateNode===null)js(t,e),zp(e,n,r),Wa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ge(n)?jn:Fe.current,u=Or(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ef(e,o,r,u),tn=!1;var f=e.memoizedState;o.state=f,so(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Ke.current||tn?(typeof c=="function"&&(Ha(e,n,c,r),a=e.memoizedState),(l=tn||Zd(e,n,l,r,f,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lp(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:pt(e.type,l),o.props=u,d=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=dt(a):(a=Ge(n)?jn:Fe.current,a=Or(e,a));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||f!==a)&&ef(e,o,r,a),tn=!1,f=e.memoizedState,o.state=f,so(e,r,o,i);var v=e.memoizedState;l!==d||f!==v||Ke.current||tn?(typeof g=="function"&&(Ha(e,n,g,r),v=e.memoizedState),(u=tn||Zd(e,n,u,r,f,v,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Ga(t,e,n,r,s,i)}function Ga(t,e,n,r,i,s){dm(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Qd(e,n,!1),Wt(t,e,s);r=e.stateNode,qy.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=br(e,t.child,null,s),e.child=br(e,null,l,s)):ze(t,e,l,s),e.memoizedState=r.state,i&&Qd(e,n,!0),e.child}function fm(t){var e=t.stateNode;e.pendingContext?Gd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gd(t,e.context,!1),ec(t,e.containerInfo)}function df(t,e,n,r,i){return Ar(),Qu(i),e.flags|=256,ze(t,e,n,r),e.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function qa(t){return{baseLanes:t,cachePool:null,transitions:null}}function hm(t,e,n){var r=e.pendingProps,i=ce.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(ce,i&1),t===null)return Ua(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Qo(o,r,0,null),t=Ln(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qa(n),e.memoizedState=Qa,t):ac(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Yy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mn(l,s):(s=Ln(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qa,r}return s=t.child,t=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ac(t,e){return e=Qo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ns(t,e,n,r){return r!==null&&Qu(r),br(e,t.child,null,n),t=ac(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Yy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ll(Error(T(422))),Ns(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Qo({mode:"visible",children:r.children},i,0,null),s=Ln(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&br(e,t.child,null,o),e.child.memoizedState=qa(o),e.memoizedState=Qa,s);if(!(e.mode&1))return Ns(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(T(419)),r=Ll(s,r,void 0),Ns(t,e,o,r)}if(l=(o&t.childLanes)!==0,He||l){if(r=Te,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ht(t,i),Et(r,t,i,-1))}return pc(),r=Ll(Error(T(421))),Ns(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=u0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,et=dn(i.nextSibling),tt=e,ue=!0,gt=null,t!==null&&(ot[lt++]=Dt,ot[lt++]=Lt,ot[lt++]=Un,Dt=t.id,Lt=t.overflow,Un=e),e=ac(e,r.children),e.flags|=4096,e)}function ff(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Va(t.return,e,n)}function Fl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function pm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ze(t,e,r.children,n),r=ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ff(t,n,e);else if(t.tag===19)ff(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&oo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Fl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&oo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Fl(e,!0,n,null,s);break;case"together":Fl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function js(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xy(t,e,n){switch(e.tag){case 3:fm(e),Ar();break;case 5:Up(e);break;case 1:Ge(e.type)&&eo(e);break;case 4:ec(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(ro,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(ce,ce.current&1),e.flags|=128,null):n&e.child.childLanes?hm(t,e,n):(re(ce,ce.current&1),t=Wt(t,e,n),t!==null?t.sibling:null);re(ce,ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return pm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ce,ce.current),r)break;return null;case 22:case 23:return e.lanes=0,cm(t,e,n)}return Wt(t,e,n)}var mm,Ya,gm,vm;mm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ya=function(){};gm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,An(Nt.current);var s=null;switch(n){case"input":i=_a(t,i),r=_a(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=Ea(t,i),r=Ea(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Js)}Ca(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ni.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ni.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&se("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};vm=function(t,e,n,r){n!==r&&(e.flags|=4)};function ri(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function be(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Jy(t,e,n){var r=e.pendingProps;switch(Gu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(e),null;case 1:return Ge(e.type)&&Zs(),be(e),null;case 3:return r=e.stateNode,Mr(),le(Ke),le(Fe),nc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ts(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(iu(gt),gt=null))),Ya(t,e),be(e),null;case 5:tc(e);var i=An(ji.current);if(n=e.type,t!==null&&e.stateNode!=null)gm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return be(e),null}if(t=An(Nt.current),Ts(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[zi]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<fi.length;i++)se(fi[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":wd(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Sd(r,s),se("invalid",r)}Ca(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&xs(r.textContent,l,t),i=["children",""+l]):Ni.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":vs(r),Ed(r,s,!0);break;case"textarea":vs(r),Cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Js)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[zi]=r,mm(t,e,!1,!1),e.stateNode=t;e:{switch(o=ka(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<fi.length;i++)se(fi[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":wd(t,r),i=_a(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),se("invalid",t);break;case"textarea":Sd(t,r),i=Ea(t,r),se("invalid",t);break;default:i=r}Ca(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Gh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&$h(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Pi(t,a):typeof a=="number"&&Pi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ni.hasOwnProperty(s)?a!=null&&s==="onScroll"&&se("scroll",t):a!=null&&Au(t,s,a,o))}switch(n){case"input":vs(t),Ed(t,r,!1);break;case"textarea":vs(t),Cd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+_n(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?wr(t,!!r.multiple,s,!1):r.defaultValue!=null&&wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return be(e),null;case 6:if(t&&e.stateNode!=null)vm(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=An(ji.current),An(Nt.current),Ts(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:xs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return be(e),null;case 13:if(le(ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&et!==null&&e.mode&1&&!(e.flags&128))Mp(),Ar(),e.flags|=98560,s=!1;else if(s=Ts(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Tt]=e}else Ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;be(e),s=!1}else gt!==null&&(iu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ce.current&1?we===0&&(we=3):pc())),e.updateQueue!==null&&(e.flags|=4),be(e),null);case 4:return Mr(),Ya(t,e),t===null&&Li(e.stateNode.containerInfo),be(e),null;case 10:return Xu(e.type._context),be(e),null;case 17:return Ge(e.type)&&Zs(),be(e),null;case 19:if(le(ce),s=e.memoizedState,s===null)return be(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ri(s,!1);else{if(we!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=oo(t),o!==null){for(e.flags|=128,ri(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(ce,ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Lr&&(e.flags|=128,r=!0,ri(s,!1),e.lanes=4194304)}else{if(!r)if(t=oo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return be(e),null}else 2*ge()-s.renderingStartTime>Lr&&n!==1073741824&&(e.flags|=128,r=!0,ri(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=ce.current,re(ce,r?n&1|2:n&1),e):(be(e),null);case 22:case 23:return hc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(be(e),e.subtreeFlags&6&&(e.flags|=8192)):be(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function Zy(t,e){switch(Gu(e),e.tag){case 1:return Ge(e.type)&&Zs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Mr(),le(Ke),le(Fe),nc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return tc(e),null;case 13:if(le(ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));Ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(ce),null;case 4:return Mr(),null;case 10:return Xu(e.type._context),null;case 22:case 23:return hc(),null;case 24:return null;default:return null}}var Ps=!1,Me=!1,e0=typeof WeakSet=="function"?WeakSet:Set,b=null;function gr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function Xa(t,e,n){try{n()}catch(r){he(t,e,r)}}var hf=!1;function t0(t,e){if(Ma=qs,t=Ep(),$u(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++c===r&&(a=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Da={focusedElem:t,selectionRange:n},qs=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,D=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),D);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=hf,hf=!1,v}function wi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Xa(e,n,s)}i=i.next}while(i!==r)}}function Ko(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ja(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function _m(t){var e=t.alternate;e!==null&&(t.alternate=null,_m(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[zi],delete e[za],delete e[Fy],delete e[zy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ym(t){return t.tag===5||t.tag===3||t.tag===4}function pf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ym(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Za(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Js));else if(r!==4&&(t=t.child,t!==null))for(Za(t,e,n),t=t.sibling;t!==null;)Za(t,e,n),t=t.sibling}function eu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(eu(t,e,n),t=t.sibling;t!==null;)eu(t,e,n),t=t.sibling}var Pe=null,mt=!1;function Zt(t,e,n){for(n=n.child;n!==null;)wm(t,e,n),n=n.sibling}function wm(t,e,n){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(zo,n)}catch{}switch(n.tag){case 5:Me||gr(n,e);case 6:var r=Pe,i=mt;Pe=null,Zt(t,e,n),Pe=r,mt=i,Pe!==null&&(mt?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(mt?(t=Pe,n=n.stateNode,t.nodeType===8?Rl(t.parentNode,n):t.nodeType===1&&Rl(t,n),bi(t)):Rl(Pe,n.stateNode));break;case 4:r=Pe,i=mt,Pe=n.stateNode.containerInfo,mt=!0,Zt(t,e,n),Pe=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Xa(n,e,o),i=i.next}while(i!==r)}Zt(t,e,n);break;case 1:if(!Me&&(gr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){he(n,e,l)}Zt(t,e,n);break;case 21:Zt(t,e,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Zt(t,e,n),Me=r):Zt(t,e,n);break;default:Zt(t,e,n)}}function mf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new e0),e.forEach(function(r){var i=c0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,mt=!1;break e;case 3:Pe=l.stateNode.containerInfo,mt=!0;break e;case 4:Pe=l.stateNode.containerInfo,mt=!0;break e}l=l.return}if(Pe===null)throw Error(T(160));wm(s,o,i),Pe=null,mt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){he(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Em(e,t),e=e.sibling}function Em(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ht(e,t),kt(t),r&4){try{wi(3,t,t.return),Ko(3,t)}catch(y){he(t,t.return,y)}try{wi(5,t,t.return)}catch(y){he(t,t.return,y)}}break;case 1:ht(e,t),kt(t),r&512&&n!==null&&gr(n,n.return);break;case 5:if(ht(e,t),kt(t),r&512&&n!==null&&gr(n,n.return),t.flags&32){var i=t.stateNode;try{Pi(i,"")}catch(y){he(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Vh(i,s),ka(l,o);var u=ka(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?Gh(i,d):c==="dangerouslySetInnerHTML"?$h(i,d):c==="children"?Pi(i,d):Au(i,c,d,u)}switch(l){case"input":ya(i,s);break;case"textarea":Hh(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?wr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?wr(i,!!s.multiple,s.defaultValue,!0):wr(i,!!s.multiple,s.multiple?[]:"",!1))}i[zi]=s}catch(y){he(t,t.return,y)}}break;case 6:if(ht(e,t),kt(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){he(t,t.return,y)}}break;case 3:if(ht(e,t),kt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bi(e.containerInfo)}catch(y){he(t,t.return,y)}break;case 4:ht(e,t),kt(t);break;case 13:ht(e,t),kt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dc=ge())),r&4&&mf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Me=(u=Me)||c,ht(e,t),Me=u):ht(e,t),kt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(f=b,g=f.child,f.tag){case 0:case 11:case 14:case 15:wi(4,f,f.return);break;case 1:gr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){vf(d);continue}}g!==null?(g.return=f,b=g):vf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Kh("display",o))}catch(y){he(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){he(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ht(e,t),kt(t),r&4&&mf(t);break;case 21:break;default:ht(e,t),kt(t)}}function kt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ym(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pi(i,""),r.flags&=-33);var s=pf(t);eu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pf(t);Za(t,l,o);break;default:throw Error(T(161))}}catch(a){he(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function n0(t,e,n){b=t,Sm(t)}function Sm(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ps;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Me;l=Ps;var u=Me;if(Ps=o,(Me=a)&&!u)for(b=i;b!==null;)o=b,a=o.child,o.tag===22&&o.memoizedState!==null?_f(i):a!==null?(a.return=o,b=a):_f(i);for(;s!==null;)b=s,Sm(s),s=s.sibling;b=i,Ps=l,Me=u}gf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):gf(t)}}function gf(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Me||Ko(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Jd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Jd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&bi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Me||e.flags&512&&Ja(e)}catch(f){he(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function vf(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function _f(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ko(4,e)}catch(a){he(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){he(e,i,a)}}var s=e.return;try{Ja(e)}catch(a){he(e,s,a)}break;case 5:var o=e.return;try{Ja(e)}catch(a){he(e,o,a)}}}catch(a){he(e,e.return,a)}if(e===t){b=null;break}var l=e.sibling;if(l!==null){l.return=e.return,b=l;break}b=e.return}}var r0=Math.ceil,uo=Gt.ReactCurrentDispatcher,uc=Gt.ReactCurrentOwner,ct=Gt.ReactCurrentBatchConfig,X=0,Te=null,ve=null,Re=0,Je=0,vr=kn(0),we=0,Wi=null,Hn=0,Go=0,cc=0,Ei=null,Ve=null,dc=0,Lr=1/0,At=null,co=!1,tu=null,hn=null,Rs=!1,on=null,fo=0,Si=0,nu=null,Us=-1,Vs=0;function Be(){return X&6?ge():Us!==-1?Us:Us=ge()}function pn(t){return t.mode&1?X&2&&Re!==0?Re&-Re:jy.transition!==null?(Vs===0&&(Vs=sp()),Vs):(t=Z,t!==0||(t=window.event,t=t===void 0?16:fp(t.type)),t):1}function Et(t,e,n,r){if(50<Si)throw Si=0,nu=null,Error(T(185));is(t,n,r),(!(X&2)||t!==Te)&&(t===Te&&(!(X&2)&&(Go|=n),we===4&&rn(t,Re)),Qe(t,r),n===1&&X===0&&!(e.mode&1)&&(Lr=ge()+500,Ho&&xn()))}function Qe(t,e){var n=t.callbackNode;j_(t,e);var r=Qs(t,t===Te?Re:0);if(r===0)n!==null&&Td(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Td(n),e===1)t.tag===0?By(yf.bind(null,t)):Op(yf.bind(null,t)),Dy(function(){!(X&6)&&xn()}),n=null;else{switch(op(r)){case 1:n=Fu;break;case 4:n=rp;break;case 16:n=Gs;break;case 536870912:n=ip;break;default:n=Gs}n=Rm(n,Cm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cm(t,e){if(Us=-1,Vs=0,X&6)throw Error(T(327));var n=t.callbackNode;if(xr()&&t.callbackNode!==n)return null;var r=Qs(t,t===Te?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ho(t,r);else{e=r;var i=X;X|=2;var s=xm();(Te!==t||Re!==e)&&(At=null,Lr=ge()+500,Dn(t,e));do try{o0();break}catch(l){km(t,l)}while(1);Yu(),uo.current=s,X=i,ve!==null?e=0:(Te=null,Re=0,e=we)}if(e!==0){if(e===2&&(i=Pa(t),i!==0&&(r=i,e=ru(t,i))),e===1)throw n=Wi,Dn(t,0),rn(t,r),Qe(t,ge()),n;if(e===6)rn(t,r);else{if(i=t.current.alternate,!(r&30)&&!i0(i)&&(e=ho(t,r),e===2&&(s=Pa(t),s!==0&&(r=s,e=ru(t,s))),e===1))throw n=Wi,Dn(t,0),rn(t,r),Qe(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:In(t,Ve,At);break;case 3:if(rn(t,r),(r&130023424)===r&&(e=dc+500-ge(),10<e)){if(Qs(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Fa(In.bind(null,t,Ve,At),e);break}In(t,Ve,At);break;case 4:if(rn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*r0(r/1960))-r,10<r){t.timeoutHandle=Fa(In.bind(null,t,Ve,At),r);break}In(t,Ve,At);break;case 5:In(t,Ve,At);break;default:throw Error(T(329))}}}return Qe(t,ge()),t.callbackNode===n?Cm.bind(null,t):null}function ru(t,e){var n=Ei;return t.current.memoizedState.isDehydrated&&(Dn(t,e).flags|=256),t=ho(t,e),t!==2&&(e=Ve,Ve=n,e!==null&&iu(e)),t}function iu(t){Ve===null?Ve=t:Ve.push.apply(Ve,t)}function i0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ct(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rn(t,e){for(e&=~cc,e&=~Go,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function yf(t){if(X&6)throw Error(T(327));xr();var e=Qs(t,0);if(!(e&1))return Qe(t,ge()),null;var n=ho(t,e);if(t.tag!==0&&n===2){var r=Pa(t);r!==0&&(e=r,n=ru(t,r))}if(n===1)throw n=Wi,Dn(t,0),rn(t,e),Qe(t,ge()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,In(t,Ve,At),Qe(t,ge()),null}function fc(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Lr=ge()+500,Ho&&xn())}}function Wn(t){on!==null&&on.tag===0&&!(X&6)&&xr();var e=X;X|=1;var n=ct.transition,r=Z;try{if(ct.transition=null,Z=1,t)return t()}finally{Z=r,ct.transition=n,X=e,!(X&6)&&xn()}}function hc(){Je=vr.current,le(vr)}function Dn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,My(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(Gu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Zs();break;case 3:Mr(),le(Ke),le(Fe),nc();break;case 5:tc(r);break;case 4:Mr();break;case 13:le(ce);break;case 19:le(ce);break;case 10:Xu(r.type._context);break;case 22:case 23:hc()}n=n.return}if(Te=t,ve=t=mn(t.current,null),Re=Je=e,we=0,Wi=null,cc=Go=Hn=0,Ve=Ei=null,On!==null){for(e=0;e<On.length;e++)if(n=On[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return t}function km(t,e){do{var n=ve;try{if(Yu(),zs.current=ao,lo){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lo=!1}if(Vn=0,Ce=_e=de=null,yi=!1,Ui=0,uc.current=null,n===null||n.return===null){we=1,Wi=e,ve=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=Re,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=of(o);if(g!==null){g.flags&=-257,lf(g,o,l,s,e),g.mode&1&&sf(s,u,e),e=g,a=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(a),e.updateQueue=y}else v.add(a);break e}else{if(!(e&1)){sf(s,u,e),pc();break e}a=Error(T(426))}}else if(ue&&l.mode&1){var D=of(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),lf(D,o,l,s,e),Qu(Dr(a,l));break e}}s=a=Dr(a,l),we!==4&&(we=2),Ei===null?Ei=[s]:Ei.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=lm(s,a,e);Xd(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(hn===null||!hn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=am(s,l,e);Xd(s,w);break e}}s=s.return}while(s!==null)}Im(n)}catch(S){e=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(1)}function xm(){var t=uo.current;return uo.current=ao,t===null?ao:t}function pc(){(we===0||we===3||we===2)&&(we=4),Te===null||!(Hn&268435455)&&!(Go&268435455)||rn(Te,Re)}function ho(t,e){var n=X;X|=2;var r=xm();(Te!==t||Re!==e)&&(At=null,Dn(t,e));do try{s0();break}catch(i){km(t,i)}while(1);if(Yu(),X=n,uo.current=r,ve!==null)throw Error(T(261));return Te=null,Re=0,we}function s0(){for(;ve!==null;)Tm(ve)}function o0(){for(;ve!==null&&!O_();)Tm(ve)}function Tm(t){var e=Pm(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?Im(t):ve=e,uc.current=null}function Im(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Zy(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{we=6,ve=null;return}}else if(n=Jy(n,e,Je),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);we===0&&(we=5)}function In(t,e,n){var r=Z,i=ct.transition;try{ct.transition=null,Z=1,l0(t,e,n,r)}finally{ct.transition=i,Z=r}return null}function l0(t,e,n,r){do xr();while(on!==null);if(X&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(U_(t,s),t===Te&&(ve=Te=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Rs||(Rs=!0,Rm(Gs,function(){return xr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ct.transition,ct.transition=null;var o=Z;Z=1;var l=X;X|=4,uc.current=null,t0(t,n),Em(n,t),Iy(Da),qs=!!Ma,Da=Ma=null,t.current=n,n0(n),A_(),X=l,Z=o,ct.transition=s}else t.current=n;if(Rs&&(Rs=!1,on=t,fo=i),s=t.pendingLanes,s===0&&(hn=null),D_(n.stateNode),Qe(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(co)throw co=!1,t=tu,tu=null,t;return fo&1&&t.tag!==0&&xr(),s=t.pendingLanes,s&1?t===nu?Si++:(Si=0,nu=t):Si=0,xn(),null}function xr(){if(on!==null){var t=op(fo),e=ct.transition,n=Z;try{if(ct.transition=null,Z=16>t?16:t,on===null)var r=!1;else{if(t=on,on=null,fo=0,X&6)throw Error(T(331));var i=X;for(X|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:wi(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var f=c.sibling,g=c.return;if(_m(c),c===u){b=null;break}if(f!==null){f.return=g,b=f;break}b=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var D=y.sibling;y.sibling=null,y=D}while(y!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var h=t.current;for(b=h;b!==null;){o=b;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,b=m;else e:for(o=h;b!==null;){if(l=b,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ko(9,l)}}catch(S){he(l,l.return,S)}if(l===o){b=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,b=w;break e}b=l.return}}if(X=i,xn(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(zo,t)}catch{}r=!0}return r}finally{Z=n,ct.transition=e}}return!1}function wf(t,e,n){e=Dr(n,e),e=lm(t,e,1),t=fn(t,e,1),e=Be(),t!==null&&(is(t,1,e),Qe(t,e))}function he(t,e,n){if(t.tag===3)wf(t,t,n);else for(;e!==null;){if(e.tag===3){wf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hn===null||!hn.has(r))){t=Dr(n,t),t=am(e,t,1),e=fn(e,t,1),t=Be(),e!==null&&(is(e,1,t),Qe(e,t));break}}e=e.return}}function a0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Re&n)===n&&(we===4||we===3&&(Re&130023424)===Re&&500>ge()-dc?Dn(t,0):cc|=n),Qe(t,e)}function Nm(t,e){e===0&&(t.mode&1?(e=ws,ws<<=1,!(ws&130023424)&&(ws=4194304)):e=1);var n=Be();t=Ht(t,e),t!==null&&(is(t,e,n),Qe(t,n))}function u0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nm(t,n)}function c0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),Nm(t,n)}var Pm;Pm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ke.current)He=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return He=!1,Xy(t,e,n);He=!!(t.flags&131072)}else He=!1,ue&&e.flags&1048576&&Ap(e,no,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;js(t,e),t=e.pendingProps;var i=Or(e,Fe.current);kr(e,n),i=ic(null,e,r,t,i,n);var s=sc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ge(r)?(s=!0,eo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zu(e),i.updater=Wo,e.stateNode=i,i._reactInternals=e,Wa(e,r,t,n),e=Ga(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&Ku(e),ze(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(js(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=f0(r),t=pt(r,t),i){case 0:e=Ka(null,e,r,t,n);break e;case 1:e=cf(null,e,r,t,n);break e;case 11:e=af(null,e,r,t,n);break e;case 14:e=uf(null,e,r,pt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Ka(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),cf(t,e,r,i,n);case 3:e:{if(fm(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lp(t,e),so(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Dr(Error(T(423)),e),e=df(t,e,r,n,i);break e}else if(r!==i){i=Dr(Error(T(424)),e),e=df(t,e,r,n,i);break e}else for(et=dn(e.stateNode.containerInfo.firstChild),tt=e,ue=!0,gt=null,n=jp(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){e=Wt(t,e,n);break e}ze(t,e,r,n)}e=e.child}return e;case 5:return Up(e),t===null&&Ua(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,La(r,i)?o=null:s!==null&&La(r,s)&&(e.flags|=32),dm(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&Ua(e),null;case 13:return hm(t,e,n);case 4:return ec(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,n):ze(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),af(t,e,r,i,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(ro,r._currentValue),r._currentValue=o,s!==null)if(Ct(s.value,o)){if(s.children===i.children&&!Ke.current){e=Wt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Va(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Va(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ze(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,kr(e,n),i=dt(i),r=r(i),e.flags|=1,ze(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),uf(t,e,r,i,n);case 15:return um(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),js(t,e),e.tag=1,Ge(r)?(t=!0,eo(e)):t=!1,kr(e,n),zp(e,r,i),Wa(e,r,i,n),Ga(null,e,r,!0,t,n);case 19:return pm(t,e,n);case 22:return cm(t,e,n)}throw Error(T(156,e.tag))};function Rm(t,e){return np(t,e)}function d0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(t,e,n,r){return new d0(t,e,n,r)}function mc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function f0(t){if(typeof t=="function")return mc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mu)return 11;if(t===Du)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=at(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Hs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mc(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case lr:return Ln(n.children,i,s,e);case bu:o=8,i|=8;break;case pa:return t=at(12,n,e,i|2),t.elementType=pa,t.lanes=s,t;case ma:return t=at(13,n,e,i),t.elementType=ma,t.lanes=s,t;case ga:return t=at(19,n,e,i),t.elementType=ga,t.lanes=s,t;case Bh:return Qo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fh:o=10;break e;case zh:o=9;break e;case Mu:o=11;break e;case Du:o=14;break e;case en:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=at(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ln(t,e,n,r){return t=at(7,t,r,e),t.lanes=n,t}function Qo(t,e,n,r){return t=at(22,t,r,e),t.elementType=Bh,t.lanes=n,t.stateNode={isHidden:!1},t}function zl(t,e,n){return t=at(6,t,null,e),t.lanes=n,t}function Bl(t,e,n){return e=at(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function h0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gc(t,e,n,r,i,s,o,l,a){return t=new h0(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=at(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zu(s),t}function p0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Om(t){if(!t)return yn;t=t._reactInternals;e:{if(tr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ge(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(Ge(n))return Rp(t,n,e)}return e}function Am(t,e,n,r,i,s,o,l,a){return t=gc(n,r,!0,t,i,s,o,l,a),t.context=Om(null),n=t.current,r=Be(),i=pn(n),s=zt(r,i),s.callback=e??null,fn(n,s,i),t.current.lanes=i,is(t,i,r),Qe(t,r),t}function qo(t,e,n,r){var i=e.current,s=Be(),o=pn(i);return n=Om(n),e.context===null?e.context=n:e.pendingContext=n,e=zt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=fn(i,e,o),t!==null&&(Et(t,i,o,s),Fs(t,i,o)),o}function po(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ef(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vc(t,e){Ef(t,e),(t=t.alternate)&&Ef(t,e)}function m0(){return null}var bm=typeof reportError=="function"?reportError:function(t){console.error(t)};function _c(t){this._internalRoot=t}Yo.prototype.render=_c.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));qo(t,e,null,null)};Yo.prototype.unmount=_c.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wn(function(){qo(null,t,null,null)}),e[Vt]=null}};function Yo(t){this._internalRoot=t}Yo.prototype.unstable_scheduleHydration=function(t){if(t){var e=up();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nn.length&&e!==0&&e<nn[n].priority;n++);nn.splice(n,0,t),n===0&&dp(t)}};function yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Sf(){}function g0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=po(o);s.call(u)}}var o=Am(e,r,t,0,null,!1,!1,"",Sf);return t._reactRootContainer=o,t[Vt]=o.current,Li(t.nodeType===8?t.parentNode:t),Wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=po(a);l.call(u)}}var a=gc(t,0,!1,null,null,!1,!1,"",Sf);return t._reactRootContainer=a,t[Vt]=a.current,Li(t.nodeType===8?t.parentNode:t),Wn(function(){qo(e,a,n,r)}),a}function Jo(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=po(o);l.call(a)}}qo(e,o,t,i)}else o=g0(n,e,t,i,r);return po(o)}lp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=di(e.pendingLanes);n!==0&&(zu(e,n|1),Qe(e,ge()),!(X&6)&&(Lr=ge()+500,xn()))}break;case 13:Wn(function(){var r=Ht(t,1);if(r!==null){var i=Be();Et(r,t,1,i)}}),vc(t,1)}};Bu=function(t){if(t.tag===13){var e=Ht(t,134217728);if(e!==null){var n=Be();Et(e,t,134217728,n)}vc(t,134217728)}};ap=function(t){if(t.tag===13){var e=pn(t),n=Ht(t,e);if(n!==null){var r=Be();Et(n,t,e,r)}vc(t,e)}};up=function(){return Z};cp=function(t,e){var n=Z;try{return Z=t,e()}finally{Z=n}};Ta=function(t,e,n){switch(e){case"input":if(ya(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vo(r);if(!i)throw Error(T(90));Uh(r),ya(r,i)}}}break;case"textarea":Hh(t,n);break;case"select":e=n.value,e!=null&&wr(t,!!n.multiple,e,!1)}};Yh=fc;Xh=Wn;var v0={usingClientEntryPoint:!1,Events:[os,dr,Vo,Qh,qh,fc]},ii={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_0={bundleType:ii.bundleType,version:ii.version,rendererPackageName:ii.rendererPackageName,rendererConfig:ii.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ep(t),t===null?null:t.stateNode},findFiberByHostInstance:ii.findFiberByHostInstance||m0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Os=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Os.isDisabled&&Os.supportsFiber)try{zo=Os.inject(_0),It=Os}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=v0;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(e))throw Error(T(200));return p0(t,e,null,n)};it.createRoot=function(t,e){if(!yc(t))throw Error(T(299));var n=!1,r="",i=bm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gc(t,1,!1,null,null,n,!1,r,i),t[Vt]=e.current,Li(t.nodeType===8?t.parentNode:t),new _c(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=ep(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return Wn(t)};it.hydrate=function(t,e,n){if(!Xo(e))throw Error(T(200));return Jo(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!yc(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=bm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Am(e,null,t,1,n??null,i,!1,s,o),t[Vt]=e.current,Li(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yo(e)};it.render=function(t,e,n){if(!Xo(e))throw Error(T(200));return Jo(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!Xo(t))throw Error(T(40));return t._reactRootContainer?(Wn(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[Vt]=null})}),!0):!1};it.unstable_batchedUpdates=fc;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xo(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return Jo(t,e,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=it})(m_);var Cf=da;ca.createRoot=Cf.createRoot,ca.hydrateRoot=Cf.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mo.apply(this,arguments)}var ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ln||(ln={}));const kf="popstate";function y0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return su("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:wc(i)}return S0(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function w0(){return Math.random().toString(36).substr(2,8)}function xf(t){return{usr:t.state,key:t.key}}function su(t,e,n,r){return n===void 0&&(n=null),mo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Wr(e):e,{state:n,key:e&&e.key||r||w0()})}function wc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Wr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function E0(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:wc(t);return Ie(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function S0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=ln.Pop,a=null;function u(){l=ln.Pop,a&&a({action:l,location:f.location})}function c(g,v){l=ln.Push;let y=su(f.location,g,v);n&&n(y,g);let D=xf(y),p=f.createHref(y);try{o.pushState(D,"",p)}catch{i.location.assign(p)}s&&a&&a({action:l,location:f.location})}function d(g,v){l=ln.Replace;let y=su(f.location,g,v);n&&n(y,g);let D=xf(y),p=f.createHref(y);o.replaceState(D,"",p),s&&a&&a({action:l,location:f.location})}let f={get action(){return l},get location(){return t(i,o)},listen(g){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(kf,u),a=g,()=>{i.removeEventListener(kf,u),a=null}},createHref(g){return e(i,g)},encodeLocation(g){let v=E0(typeof g=="string"?g:wc(g));return{pathname:v.pathname,search:v.search,hash:v.hash}},push:c,replace:d,go(g){return o.go(g)}};return f}var Tf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Tf||(Tf={}));function C0(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Wr(e):e,i=Lm(r.pathname||"/",n);if(i==null)return null;let s=Mm(t);k0(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=b0(s[l],L0(i));return o}function Mm(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&(Ie(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Fn([r,a.relativePath]),c=n.concat(a);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Mm(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:O0(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of Dm(s.path))i(s,o,a)}),e}function Dm(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Dm(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function k0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:A0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const x0=/^:\w+$/,T0=3,I0=2,N0=1,P0=10,R0=-2,If=t=>t==="*";function O0(t,e){let n=t.split("/"),r=n.length;return n.some(If)&&(r+=R0),e&&(r+=I0),n.filter(i=>!If(i)).reduce((i,s)=>i+(x0.test(s)?T0:s===""?N0:P0),r)}function A0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function b0(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=M0({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;s.push({params:r,pathname:Fn([i,c.pathname]),pathnameBase:V0(Fn([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Fn([i,c.pathnameBase]))}return s}function M0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=D0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=l[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=F0(l[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function D0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Ec(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function L0(t){try{return decodeURI(t)}catch(e){return Ec(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function F0(t,e){try{return decodeURIComponent(t)}catch(n){return Ec(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Lm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Ec(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Wr(t):t;return{pathname:n?n.startsWith("/")?n:B0(n,e):e,search:H0(r),hash:W0(i)}}function B0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function jl(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function U0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Wr(t):(i=mo({},t),Ie(!i.pathname||!i.pathname.includes("?"),jl("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),jl("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),jl("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?e[d]:"/"}let a=z0(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Fn=t=>t.join("/").replace(/\/\/+/g,"/"),V0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),H0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,W0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class $0{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function K0(t){return t instanceof $0}const G0=["post","put","patch","delete"];[...G0];/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ou(){return ou=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ou.apply(this,arguments)}function Q0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const q0=typeof Object.is=="function"?Object.is:Q0,{useState:Y0,useEffect:X0,useLayoutEffect:J0,useDebugValue:Z0}=ua;function ew(t,e,n){const r=e(),[{inst:i},s]=Y0({inst:{value:r,getSnapshot:e}});return J0(()=>{i.value=r,i.getSnapshot=e,Ul(i)&&s({inst:i})},[t,r,e]),X0(()=>(Ul(i)&&s({inst:i}),t(()=>{Ul(i)&&s({inst:i})})),[t]),Z0(r),r}function Ul(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!q0(n,r)}catch{return!0}}function tw(t,e,n){return e()}const nw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rw=!nw,iw=rw?tw:ew;"useSyncExternalStore"in ua&&(t=>t.useSyncExternalStore)(ua);const sw=O.createContext(null),ow=O.createContext(null),Fm=O.createContext(null),Sc=O.createContext(null),Zo=O.createContext(null),as=O.createContext({outlet:null,matches:[]}),zm=O.createContext(null);function el(){return O.useContext(Zo)!=null}function Bm(){return el()||Ie(!1),O.useContext(Zo).location}function us(){el()||Ie(!1);let{basename:t,navigator:e}=O.useContext(Sc),{matches:n}=O.useContext(as),{pathname:r}=Bm(),i=JSON.stringify(j0(n).map(l=>l.pathnameBase)),s=O.useRef(!1);return O.useEffect(()=>{s.current=!0}),O.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){e.go(l);return}let u=U0(l,JSON.parse(i),r,a.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Fn([t,u.pathname])),(a.replace?e.replace:e.push)(u,a.state,a)},[t,e,i,r])}function lw(t,e){el()||Ie(!1);let{navigator:n}=O.useContext(Sc),r=O.useContext(Fm),{matches:i}=O.useContext(as),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Bm(),u;if(e){var c;let y=typeof e=="string"?Wr(e):e;l==="/"||(c=y.pathname)!=null&&c.startsWith(l)||Ie(!1),u=y}else u=a;let d=u.pathname||"/",f=l==="/"?d:d.slice(l.length)||"/",g=C0(t,{pathname:f}),v=dw(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},o,y.params),pathname:Fn([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Fn([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,r||void 0);return e&&v?O.createElement(Zo.Provider,{value:{location:ou({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ln.Pop}},v):v}function aw(){let t=mw(),e=K0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unhandled Thrown Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:i},n):null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:s},"errorElement")," props on ",O.createElement("code",{style:s},"<Route>")))}class uw extends O.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?O.createElement(as.Provider,{value:this.props.routeContext},O.createElement(zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function cw(t){let{routeContext:e,match:n,children:r}=t,i=O.useContext(sw);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),O.createElement(as.Provider,{value:e},r)}function dw(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ie(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||O.createElement(aw,null):null,c=e.concat(r.slice(0,l+1)),d=()=>O.createElement(cw,{match:o,routeContext:{outlet:s,matches:c}},a?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||l===0)?O.createElement(uw,{location:n.location,component:u,error:a,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Nf;(function(t){t.UseRevalidator="useRevalidator"})(Nf||(Nf={}));var go;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(go||(go={}));function fw(t){let e=O.useContext(Fm);return e||Ie(!1),e}function hw(t){let e=O.useContext(as);return e||Ie(!1),e}function pw(t){let e=hw(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function mw(){var t;let e=O.useContext(zm),n=fw(go.UseRouteError),r=pw(go.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function hi(t){Ie(!1)}function gw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:s,static:o=!1}=t;el()&&Ie(!1);let l=e.replace(/^\/*/,"/"),a=O.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Wr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:g="default"}=r,v=O.useMemo(()=>{let y=Lm(u,l);return y==null?null:{pathname:y,search:c,hash:d,state:f,key:g}},[l,u,c,d,f,g]);return v==null?null:O.createElement(Sc.Provider,{value:a},O.createElement(Zo.Provider,{children:n,value:{location:v,navigationType:i}}))}function vw(t){let{children:e,location:n}=t,r=O.useContext(ow),i=r&&!e?r.router.routes:lu(e);return lw(i,n)}var Pf;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Pf||(Pf={}));new Promise(()=>{});function lu(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(r,i)=>{if(!O.isValidElement(r))return;if(r.type===O.Fragment){n.push.apply(n,lu(r.props.children,e));return}r.type!==hi&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=lu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _w(t){let{basename:e,children:n,window:r}=t,i=O.useRef();i.current==null&&(i.current=y0({window:r,v5Compat:!0}));let s=i.current,[o,l]=O.useState({action:s.action,location:s.location});return O.useLayoutEffect(()=>s.listen(l),[s]),O.createElement(gw,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}var Rf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Rf||(Rf={}));var Of;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Of||(Of={}));var Cc={},yw=sa&&sa.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Cc,"__esModule",{value:!0});var ww=O,kc=function(t){yw(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.componentWillMount=function(){var n=this,r=this.props,i=r.src,s=r.preview,o=this.props.initialBlur;this.setState({src:s,blur:o}),this.fetch(i).then(function(l){return n.setState({src:l,blur:0})})},e.prototype.render=function(){var n=this.state.src,r=this.props.render;return r(n,this.getStyle())},e.prototype.fetch=function(n){return new Promise(function(r){var i=new Image;i.src=n,i.addEventListener("load",function(){return r(n)},!1)})},e.prototype.getStyle=function(){var n=this.props,r=n.transitionTime,i=n.timingFunction,s=this.state.blur;return{filter:"blur("+s+"px)",transition:"filter "+r+"ms "+i}},e}(ww.Component);kc.defaultProps={transitionTime:500,timingFunction:"ease",initialBlur:10};Cc.ProgressiveImage=kc;Cc.default=kc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw $r(e)},$r=function(t){return new Error("Firebase Database ("+jm.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ew=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Um(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ew(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw Error();const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Vm=function(t){const e=Um(t);return xc.encodeByteArray(e,!0)},vo=function(t){return Vm(t).replace(/\./g,"")},au=function(t){try{return xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t){return Hm(void 0,t)}function Hm(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Cw(n)||(t[n]=Hm(t[n],e[n]));return t}function Cw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kw(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kw())}function xw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $m(){return jm.NODE_ADMIN===!0}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function Gm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Tw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}function Iw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Nw=()=>Iw().__FIREBASE_DEFAULTS__,Pw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&au(t[1]);return e&&JSON.parse(e)},Qm=()=>{try{return Nw()||Pw()||Rw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ow=t=>{var e,n;return(n=(e=Qm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Aw=t=>{const e=Ow(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},bw=()=>{var t;return(t=Qm())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Mw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[vo(JSON.stringify(n)),vo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="FirebaseError";class Kr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dw,Object.setPrototypeOf(this,Kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tl.prototype.create)}}class tl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Lw(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Kr(i,l,r)}}function Lw(t,e){return t.replace(Fw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Fw=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=$i(au(s[0])||""),n=$i(au(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},zw=function(t){const e=qm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bw=function(t){const e=qm(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Af(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function uu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(bf(s)&&bf(o)){if(!uu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const f=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Ym(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Gr(t){return t&&t._delegate?t._delegate:t}class $t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Tc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($w(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ww(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ww(t){return t===Nn?void 0:t}function $w(t){return t.instantiationMode==="EAGER"}/**
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
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Gw={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Qw=te.INFO,qw={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Yw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xm{constructor(e){this.name=e,this._logLevel=Qw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Xw=(t,e)=>e.some(n=>t instanceof n);let Mf,Df;function Jw(){return Mf||(Mf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return Df||(Df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jm=new WeakMap,cu=new WeakMap,Zm=new WeakMap,Vl=new WeakMap,Ic=new WeakMap;function e1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Bt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jm.set(n,t)}).catch(()=>{}),Ic.set(e,t),e}function t1(t){if(cu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let du={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function n1(t){du=t(du)}function r1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hl(this),e,...n);return Zm.set(r,e.sort?e.sort():[e]),Bt(r)}:Zw().includes(t)?function(...e){return t.apply(Hl(this),e),Bt(Jm.get(this))}:function(...e){return Bt(t.apply(Hl(this),e))}}function i1(t){return typeof t=="function"?r1(t):(t instanceof IDBTransaction&&t1(t),Xw(t,Jw())?new Proxy(t,du):t)}function Bt(t){if(t instanceof IDBRequest)return e1(t);if(Vl.has(t))return Vl.get(t);const e=i1(t);return e!==t&&(Vl.set(t,e),Ic.set(e,t)),e}const Hl=t=>Ic.get(t);function rl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Bt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Bt(o.result),a.oldVersion,a.newVersion,Bt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}function Wl(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",()=>e()),Bt(n).then(()=>{})}const s1=["get","getKey","getAll","getAllKeys","count"],o1=["put","add","delete","clear"],$l=new Map;function Lf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($l.get(e))return $l.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=o1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||s1.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return $l.set(e,s),s}n1(t=>({...t,get:(e,n,r)=>Lf(e,n)||t.get(e,n,r),has:(e,n)=>!!Lf(e,n)||t.has(e,n)}));/**
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
 */class l1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(a1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function a1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fu="@firebase/app",Ff="0.9.0";/**
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
 */const $n=new Xm("@firebase/app"),u1="@firebase/app-compat",c1="@firebase/analytics-compat",d1="@firebase/analytics",f1="@firebase/app-check-compat",h1="@firebase/app-check",p1="@firebase/auth",m1="@firebase/auth-compat",g1="@firebase/database",v1="@firebase/database-compat",_1="@firebase/functions",y1="@firebase/functions-compat",w1="@firebase/installations",E1="@firebase/installations-compat",S1="@firebase/messaging",C1="@firebase/messaging-compat",k1="@firebase/performance",x1="@firebase/performance-compat",T1="@firebase/remote-config",I1="@firebase/remote-config-compat",N1="@firebase/storage",P1="@firebase/storage-compat",R1="@firebase/firestore",O1="@firebase/firestore-compat",A1="firebase",b1="9.15.0";/**
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
 */const hu="[DEFAULT]",M1={[fu]:"fire-core",[u1]:"fire-core-compat",[d1]:"fire-analytics",[c1]:"fire-analytics-compat",[h1]:"fire-app-check",[f1]:"fire-app-check-compat",[p1]:"fire-auth",[m1]:"fire-auth-compat",[g1]:"fire-rtdb",[v1]:"fire-rtdb-compat",[_1]:"fire-fn",[y1]:"fire-fn-compat",[w1]:"fire-iid",[E1]:"fire-iid-compat",[S1]:"fire-fcm",[C1]:"fire-fcm-compat",[k1]:"fire-perf",[x1]:"fire-perf-compat",[T1]:"fire-rc",[I1]:"fire-rc-compat",[N1]:"fire-gcs",[P1]:"fire-gcs-compat",[R1]:"fire-fst",[O1]:"fire-fst-compat","fire-js":"fire-js",[A1]:"fire-js-all"};/**
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
 */const yo=new Map,pu=new Map;function D1(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wn(t){const e=t.name;if(pu.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;pu.set(e,t);for(const n of yo.values())D1(n,t);return!0}function il(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const L1={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gn=new tl("app","Firebase",L1);/**
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
 */class F1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const z1=b1;function eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=bw()),!n)throw gn.create("no-options");const s=yo.get(i);if(s){if(uu(n,s.options)&&uu(r,s.config))return s;throw gn.create("duplicate-app",{appName:i})}const o=new Kw(i);for(const a of pu.values())o.addComponent(a);const l=new F1(n,r,o);return yo.set(i,l),l}function tg(t=hu){const e=yo.get(t);if(!e&&t===hu)return eg();if(!e)throw gn.create("no-app",{appName:t});return e}function Pt(t,e,n){var r;let i=(r=M1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(l.join(" "));return}wn(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const B1="firebase-heartbeat-database",j1=1,Ki="firebase-heartbeat-store";let Kl=null;function ng(){return Kl||(Kl=rl(B1,j1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ki)}}}).catch(t=>{throw gn.create("idb-open",{originalErrorMessage:t.message})})),Kl}async function U1(t){try{return(await ng()).transaction(Ki).objectStore(Ki).get(rg(t))}catch(e){if(e instanceof Kr)$n.warn(e.message);else{const n=gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function zf(t,e){try{const r=(await ng()).transaction(Ki,"readwrite");return await r.objectStore(Ki).put(e,rg(t)),r.done}catch(n){if(n instanceof Kr)$n.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function rg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const V1=1024,H1=30*24*60*60*1e3;class W1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new K1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=H1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bf(),{heartbeatsToSend:n,unsentEntries:r}=$1(this._heartbeatsCache.heartbeats),i=vo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bf(){return new Date().toISOString().substring(0,10)}function $1(t,e=V1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class K1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?Gm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await U1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return zf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jf(t){return vo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function G1(t){wn(new $t("platform-logger",e=>new l1(e),"PRIVATE")),wn(new $t("heartbeat",e=>new W1(e),"PRIVATE")),Pt(fu,Ff,t),Pt(fu,Ff,"esm2017"),Pt("fire-js","")}G1("");var Q1="firebase",q1="9.15.0";/**
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
 */Pt(Q1,q1,"app");const ig="@firebase/installations",Nc="0.6.0";/**
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
 */const sg=1e4,og=`w:${Nc}`,lg="FIS_v2",Y1="https://firebaseinstallations.googleapis.com/v1",X1=60*60*1e3,J1="installations",Z1="Installations";/**
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
 */const eE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Kn=new tl(J1,Z1,eE);function ag(t){return t instanceof Kr&&t.code.includes("request-failed")}/**
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
 */function ug({projectId:t}){return`${Y1}/projects/${t}/installations`}function cg(t){return{token:t.token,requestStatus:2,expiresIn:nE(t.expiresIn),creationTime:Date.now()}}async function dg(t,e){const r=(await e.json()).error;return Kn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function tE(t,{refreshToken:e}){const n=fg(t);return n.append("Authorization",rE(e)),n}async function hg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function nE(t){return Number(t.replace("s","000"))}function rE(t){return`${lg} ${t}`}/**
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
 */async function iE({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ug(t),i=fg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:lg,appId:t.appId,sdkVersion:og},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await hg(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:cg(u.authToken)}}else throw await dg("Create Installation",a)}/**
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
 */function pg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function sE(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const oE=/^[cdef][\w-]{21}$/,mu="";function lE(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=aE(t);return oE.test(n)?n:mu}catch{return mu}}function aE(t){return sE(t).substr(0,22)}/**
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
 */function sl(t){return`${t.appName}!${t.appId}`}/**
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
 */const mg=new Map;function gg(t,e){const n=sl(t);vg(n,e),uE(n,e)}function vg(t,e){const n=mg.get(t);if(n)for(const r of n)r(e)}function uE(t,e){const n=cE();n&&n.postMessage({key:t,fid:e}),dE()}let bn=null;function cE(){return!bn&&"BroadcastChannel"in self&&(bn=new BroadcastChannel("[Firebase] FID Change"),bn.onmessage=t=>{vg(t.data.key,t.data.fid)}),bn}function dE(){mg.size===0&&bn&&(bn.close(),bn=null)}/**
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
 */const fE="firebase-installations-database",hE=1,Gn="firebase-installations-store";let Gl=null;function Pc(){return Gl||(Gl=rl(fE,hE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gn)}}})),Gl}async function wo(t,e){const n=sl(t),i=(await Pc()).transaction(Gn,"readwrite"),s=i.objectStore(Gn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&gg(t,e.fid),e}async function _g(t){const e=sl(t),r=(await Pc()).transaction(Gn,"readwrite");await r.objectStore(Gn).delete(e),await r.done}async function ol(t,e){const n=sl(t),i=(await Pc()).transaction(Gn,"readwrite"),s=i.objectStore(Gn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&gg(t,l.fid),l}/**
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
 */async function Rc(t){let e;const n=await ol(t.appConfig,r=>{const i=pE(r),s=mE(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===mu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function pE(t){const e=t||{fid:lE(),registrationStatus:0};return yg(e)}function mE(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Kn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=gE(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vE(t)}:{installationEntry:e}}async function gE(t,e){try{const n=await iE(t,e);return wo(t.appConfig,n)}catch(n){throw ag(n)&&n.customData.serverCode===409?await _g(t.appConfig):await wo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vE(t){let e=await Uf(t.appConfig);for(;e.registrationStatus===1;)await pg(100),e=await Uf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rc(t);return r||n}return e}function Uf(t){return ol(t,e=>{if(!e)throw Kn.create("installation-not-found");return yg(e)})}function yg(t){return _E(t)?{fid:t.fid,registrationStatus:0}:t}function _E(t){return t.registrationStatus===1&&t.registrationTime+sg<Date.now()}/**
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
 */async function yE({appConfig:t,heartbeatServiceProvider:e},n){const r=wE(t,n),i=tE(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:og,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await hg(()=>fetch(r,l));if(a.ok){const u=await a.json();return cg(u)}else throw await dg("Generate Auth Token",a)}function wE(t,{fid:e}){return`${ug(t)}/${e}/authTokens:generate`}/**
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
 */async function Oc(t,e=!1){let n;const r=await ol(t.appConfig,s=>{if(!wg(s))throw Kn.create("not-registered");const o=s.authToken;if(!e&&CE(o))return s;if(o.requestStatus===1)return n=EE(t,e),s;{if(!navigator.onLine)throw Kn.create("app-offline");const l=xE(s);return n=SE(t,l),l}});return n?await n:r.authToken}async function EE(t,e){let n=await Vf(t.appConfig);for(;n.authToken.requestStatus===1;)await pg(100),n=await Vf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Oc(t,e):r}function Vf(t){return ol(t,e=>{if(!wg(e))throw Kn.create("not-registered");const n=e.authToken;return TE(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function SE(t,e){try{const n=await yE(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wo(t.appConfig,r),n}catch(n){if(ag(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await _g(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wo(t.appConfig,r)}throw n}}function wg(t){return t!==void 0&&t.registrationStatus===2}function CE(t){return t.requestStatus===2&&!kE(t)}function kE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+X1}function xE(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function TE(t){return t.requestStatus===1&&t.requestTime+sg<Date.now()}/**
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
 */async function IE(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rc(e);return r?r.catch(console.error):Oc(e).catch(console.error),n.fid}/**
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
 */async function NE(t,e=!1){const n=t;return await PE(n),(await Oc(n,e)).token}async function PE(t){const{registrationPromise:e}=await Rc(t);e&&await e}/**
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
 */function RE(t){if(!t||!t.options)throw Ql("App Configuration");if(!t.name)throw Ql("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ql(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ql(t){return Kn.create("missing-app-config-values",{valueName:t})}/**
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
 */const Eg="installations",OE="installations-internal",AE=t=>{const e=t.getProvider("app").getImmediate(),n=RE(e),r=il(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},bE=t=>{const e=t.getProvider("app").getImmediate(),n=il(e,Eg).getImmediate();return{getId:()=>IE(n),getToken:i=>NE(n,i)}};function ME(){wn(new $t(Eg,AE,"PUBLIC")),wn(new $t(OE,bE,"PRIVATE"))}ME();Pt(ig,Nc);Pt(ig,Nc,"esm2017");/**
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
 */const DE="/firebase-messaging-sw.js",LE="/firebase-cloud-messaging-push-scope",Sg="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",FE="https://fcmregistrations.googleapis.com/v1",Cg="google.c.a.c_id",zE="google.c.a.c_l",BE="google.c.a.ts",jE="google.c.a.e";var Hf;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Hf||(Hf={}));/**
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
 */var Gi;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Gi||(Gi={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function UE(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const ql="fcm_token_details_db",VE=5,Wf="fcm_token_object_Store";async function HE(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ql))return null;let e=null;return(await rl(ql,VE,{upgrade:async(r,i,s,o)=>{var l;if(i<2||!r.objectStoreNames.contains(Wf))return;const a=o.objectStore(Wf),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(i===2){const c=u;if(!c.auth||!c.p256dh||!c.endpoint)return;e={token:c.fcmToken,createTime:(l=c.createTime)!==null&&l!==void 0?l:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:typeof c.vapidKey=="string"?c.vapidKey:bt(c.vapidKey)}}}else if(i===3){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:bt(c.auth),p256dh:bt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:bt(c.vapidKey)}}}else if(i===4){const c=u;e={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:bt(c.auth),p256dh:bt(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:bt(c.vapidKey)}}}}}})).close(),await Wl(ql),await Wl("fcm_vapid_details_db"),await Wl("undefined"),WE(e)?e:null}function WE(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const $E="firebase-messaging-database",KE=1,Qn="firebase-messaging-store";let Yl=null;function Ac(){return Yl||(Yl=rl($E,KE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qn)}}})),Yl}async function kg(t){const e=Mc(t),r=await(await Ac()).transaction(Qn).objectStore(Qn).get(e);if(r)return r;{const i=await HE(t.appConfig.senderId);if(i)return await bc(t,i),i}}async function bc(t,e){const n=Mc(t),i=(await Ac()).transaction(Qn,"readwrite");return await i.objectStore(Qn).put(e,n),await i.done,e}async function GE(t){const e=Mc(t),r=(await Ac()).transaction(Qn,"readwrite");await r.objectStore(Qn).delete(e),await r.done}function Mc({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["only-available-in-window"]:"This method is available in a Window context.",["only-available-in-sw"]:"This method is available in a service worker context.",["permission-default"]:"The notification permission was not granted and dismissed instead.",["permission-blocked"]:"The notification permission was not granted and blocked instead.",["unsupported-browser"]:"This browser doesn't support the API's required to use the Firebase SDK.",["indexed-db-unsupported"]:"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",["failed-service-worker-registration"]:"We are unable to register the default service worker. {$browserErrorMessage}",["token-subscribe-failed"]:"A problem occurred while subscribing the user to FCM: {$errorInfo}",["token-subscribe-no-token"]:"FCM returned no token when subscribing the user to push.",["token-unsubscribe-failed"]:"A problem occurred while unsubscribing the user from FCM: {$errorInfo}",["token-update-failed"]:"A problem occurred while updating the user from FCM: {$errorInfo}",["token-update-no-token"]:"FCM returned no token when updating the user to push.",["use-sw-after-get-token"]:"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",["invalid-sw-registration"]:"The input to useServiceWorker() must be a ServiceWorkerRegistration.",["invalid-bg-handler"]:"The input to setBackgroundMessageHandler() must be a function.",["invalid-vapid-key"]:"The public VAPID key must be a string.",["use-vapid-key-after-get-token"]:"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},je=new tl("messaging","Messaging",QE);/**
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
 */async function qE(t,e){const n=await Lc(t),r=Tg(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Dc(t.appConfig),i)).json()}catch(o){throw je.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw je.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw je.create("token-subscribe-no-token");return s.token}async function YE(t,e){const n=await Lc(t),r=Tg(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Dc(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw je.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw je.create("token-update-failed",{errorInfo:o})}if(!s.token)throw je.create("token-update-no-token");return s.token}async function xg(t,e){const r={method:"DELETE",headers:await Lc(t)};try{const s=await(await fetch(`${Dc(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw je.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw je.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Dc({projectId:t}){return`${FE}/projects/${t}/registrations`}async function Lc({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Tg({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==Sg&&(i.web.applicationPubKey=r),i}/**
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
 */const XE=7*24*60*60*1e3;async function JE(t){const e=await tS(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:bt(e.getKey("auth")),p256dh:bt(e.getKey("p256dh"))},r=await kg(t.firebaseDependencies);if(r){if(nS(r.subscriptionOptions,n))return Date.now()>=r.createTime+XE?eS(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await xg(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return $f(t.firebaseDependencies,n)}else return $f(t.firebaseDependencies,n)}async function ZE(t){const e=await kg(t.firebaseDependencies);e&&(await xg(t.firebaseDependencies,e.token),await GE(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function eS(t,e){try{const n=await YE(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await bc(t.firebaseDependencies,r),n}catch(n){throw await ZE(t),n}}async function $f(t,e){const r={token:await qE(t,e),createTime:Date.now(),subscriptionOptions:e};return await bc(t,r),r.token}async function tS(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:UE(e)})}function nS(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function Kf(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return rS(e,t),iS(e,t),sS(e,t),e}function rS(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function iS(t,e){e.data&&(t.data=e.data)}function sS(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const l=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;l&&(t.fcmOptions.link=l);const a=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;a&&(t.fcmOptions.analyticsLabel=a)}/**
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
 */function oS(t){return typeof t=="object"&&!!t&&Cg in t}/**
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
 */Ig("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ig("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ig(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function lS(t){if(!t||!t.options)throw Xl("App Configuration Object");if(!t.name)throw Xl("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Xl(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Xl(t){return je.create("missing-app-config-values",{valueName:t})}/**
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
 */class aS{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=lS(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function uS(t){try{t.swRegistration=await navigator.serviceWorker.register(DE,{scope:LE}),t.swRegistration.update().catch(()=>{})}catch(e){throw je.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function cS(t,e){if(!e&&!t.swRegistration&&await uS(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw je.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function dS(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Sg)}/**
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
 */async function Ng(t,e){if(!navigator)throw je.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw je.create("permission-blocked");return await dS(t,e==null?void 0:e.vapidKey),await cS(t,e==null?void 0:e.serviceWorkerRegistration),JE(t)}/**
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
 */async function fS(t,e,n){const r=hS(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Cg],message_name:n[zE],message_time:n[BE],message_device_time:Math.floor(Date.now()/1e3)})}function hS(t){switch(t){case Gi.NOTIFICATION_CLICKED:return"notification_open";case Gi.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pS(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Gi.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Kf(n)):t.onMessageHandler.next(Kf(n)));const r=n.data;oS(r)&&r[jE]==="1"&&await fS(t,n.messageType,r)}const Gf="@firebase/messaging",Qf="0.12.0";/**
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
 */const mS=t=>{const e=new aS(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>pS(e,n)),e},gS=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Ng(e,r)}};function vS(){wn(new $t("messaging",mS,"PUBLIC")),wn(new $t("messaging-internal",gS,"PRIVATE")),Pt(Gf,Qf),Pt(Gf,Qf,"esm2017")}/**
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
 */async function _S(){try{await Gm()}catch{return!1}return typeof window<"u"&&Km()&&Tw()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(t=tg()){return _S().then(e=>{if(!e)throw je.create("unsupported-browser")},e=>{throw je.create("indexed-db-unsupported")}),il(Gr(t),"messaging").getImmediate()}async function wS(t,e){return t=Gr(t),Ng(t,e)}vS();const qf="@firebase/database",Yf="0.14.0";/**
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
 */let Pg="";function ES(t){Pg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$i(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new SS(e)}}catch{}return new CS},Mn=Rg("localStorage"),gu=Rg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Xm("@firebase/database"),kS=function(){let t=1;return function(){return t++}}(),Og=function(t){const e=Vw(t),n=new Uw;n.update(e);const r=n.digest();return xc.encodeByteArray(r)},cs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=cs.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let zn=null,Xf=!0;const xS=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Tr.logLevel=te.VERBOSE,zn=Tr.log.bind(Tr),e&&gu.set("logging_enabled",!0)):typeof t=="function"?zn=t:(zn=null,gu.remove("logging_enabled"))},De=function(...t){if(Xf===!0&&(Xf=!1,zn===null&&gu.get("logging_enabled")===!0&&xS(!0)),zn){const e=cs.apply(null,t);zn(e)}},ds=function(t){return function(...e){De(t,...e)}},vu=function(...t){const e="FIREBASE INTERNAL ERROR: "+cs(...t);Tr.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${cs(...t)}`;throw Tr.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+cs(...t);Tr.warn(e)},TS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ag=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},IS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zr="[MIN_NAME]",qn="[MAX_NAME]",Qr=function(t,e){if(t===e)return 0;if(t===zr||e===qn)return-1;if(e===zr||t===qn)return 1;{const n=Jf(t),r=Jf(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},NS=function(t,e){return t===e?0:t<e?-1:1},si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},Fc=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=Fc(t[e[r]]);return n+="}",n},bg=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Mg=function(t){N(!Ag(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let f=parseInt(c.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},PS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},RS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OS(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const AS=new RegExp("^-?(0*)\\d{1,10}$"),bS=-2147483648,MS=2147483647,Jf=function(t){if(AS.test(t)){const e=Number(t);if(e>=bS&&e<=MS)return e}return null},fs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},DS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ci=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class LS{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class Ir{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ir.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc="5",Dg="v",Lg="s",Fg="r",zg="f",Bg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jg="ls",Ug="p",_u="ac",Vg="websocket",Hg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n,r,i,s=!1,o="",l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function zS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $g(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===Vg)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hg)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zS(t)&&(n.ns=t.namespace);const i=[];return qe(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Sw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl={},Zl={};function Bc(t){const e=t.toString();return Jl[e]||(Jl[e]=new BS),Jl[e]}function jS(t,e){const n=t.toString();return Zl[n]||(Zl[n]=e()),Zl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&fs(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="start",VS="close",HS="pLPCommand",WS="pRTLPCB",Kg="id",Gg="pw",Qg="ser",$S="cb",KS="seg",GS="ts",QS="d",qS="dframe",qg=1870,Yg=30,YS=qg-Yg,XS=25e3,JS=3e4;class _r{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ds(e),this.stats_=Bc(n),this.urlFn=a=>(this.appCheckToken&&(a[_u]=this.appCheckToken),$g(n,Hg,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new US(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(JS)),IS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new jc((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zf)this.id=l,this.password=a;else if(o===VS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Zf]="t",r[Qg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[$S]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Dg]=zc,this.transportSessionId&&(r[Lg]=this.transportSessionId),this.lastSessionId&&(r[jg]=this.lastSessionId),this.applicationId&&(r[Ug]=this.applicationId),this.appCheckToken&&(r[_u]=this.appCheckToken),typeof location<"u"&&location.hostname&&Bg.test(location.hostname)&&(r[Fg]=zg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){_r.forceAllow_=!0}static forceDisallow(){_r.forceDisallow_=!0}static isAvailable(){return _r.forceAllow_?!0:!_r.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PS()&&!RS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Vm(n),i=bg(r,YS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qS]="t",r[Kg]=e,r[Gg]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class jc{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kS(),window[HS+this.uniqueCallbackIdentifier]=e,window[WS+this.uniqueCallbackIdentifier]=n,this.myIFrame=jc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){De("frame writing exception"),l.stack&&De(l.stack),De(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Kg]=this.myID,e[Gg]=this.myPW,e[Qg]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yg+r.length<=qg;){const o=this.pendingSegs.shift();r=r+"&"+KS+i+"="+o.seg+"&"+GS+i+"="+o.ts+"&"+QS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(XS)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=16384,eC=45e3;let Eo=null;typeof MozWebSocket<"u"?Eo=MozWebSocket:typeof WebSocket<"u"&&(Eo=WebSocket);class vt{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ds(this.connId),this.stats_=Bc(n),this.connURL=vt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Dg]=zc,typeof location<"u"&&location.hostname&&Bg.test(location.hostname)&&(o[Fg]=zg),n&&(o[Lg]=n),r&&(o[jg]=r),i&&(o[_u]=i),s&&(o[Ug]=s),$g(e,Vg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mn.set("previous_websocket_failure",!0);try{let r;$m(),this.mySock=new Eo(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Eo!==null&&!vt.forceDisallow_}static previouslyFailed(){return Mn.isInMemoryStorage||Mn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=$i(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=bg(n,ZS);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eC))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}vt.responsesRequiredToBeHealthy=2;vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[_r,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=vt&&vt.isAvailable();let r=n&&!vt.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[vt];else{const i=this.transports_=[];for(const s of Qi.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=6e4,nC=5e3,rC=10*1024,iC=100*1024,ea="t",eh="d",sC="s",th="r",oC="e",nh="o",rh="a",ih="n",sh="p",lC="h";class aC{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ds("c:"+this.id+":"),this.transportManager_=new Qi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ci(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ea in e){const n=e[ea];n===rh?this.upgradeIfSecondaryHealthy_():n===th?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=si("t",e),r=si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:sh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:rh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ih,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=si("t",e),r=si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=si(ea,e);if(eh in e){const r=e[eh];if(n===lC)this.onHandshake_(r);else if(n===ih){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===sC?this.onConnectionShutdown_(r):n===th?this.onReset_(r):n===oC?vu("Server Error: "+r):n===nh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zc!==r&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ci(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tC))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ci(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:sh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Jg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wm()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new So}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=32,lh=768;class ee{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ee("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function En(t){return t.pieces_.length-t.pieceNum_}function ne(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ee(t.pieces_,e)}function Zg(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function uC(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ev(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ee(e,0)}function ye(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ee)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ee(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return We(ne(t),ne(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Uc(t,e){if(En(t)!==En(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function _t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(En(t)>En(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class cC{constructor(e,n){this.errorPrefix_=n,this.parts_=ev(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=nl(this.parts_[r]);nv(this)}}function dC(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nl(e),nv(t)}function fC(t){const e=t.parts_.pop();t.byteLength_-=nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function nv(t){if(t.byteLength_>lh)throw new Error(t.errorPrefix_+"has a key path longer than "+lh+" bytes ("+t.byteLength_+").");if(t.parts_.length>oh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+oh+") or object contains a cycle "+Pn(t))}function Pn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends Jg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vc}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,hC=60*5*1e3,ah=30*1e3,pC=1.3,mC=3e4,gC="server_kill",uh=3;class jt extends Xg{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=jt.nextPersistentConnectionId_++,this.log_=ds("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=hC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!$m())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&So.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Tc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;jt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=Fr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bw(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ah)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=zw(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vu("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mC&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*pC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){N(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,l=new aC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{nt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(gC)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&nt(d),a())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Af(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Fc(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ee(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=uh&&(this.reconnectDelay_=ah,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=uh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Pg.replace(/\./g,"-")]=1,Wm()?e["framework.cordova"]=1:xw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=So.getInstance().currentlyOnline();return Af(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ll{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new $(zr,e),i=new $(zr,n);return this.compare(r,i)!==0}minPost(){return $.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As;class rv extends ll{static get __EMPTY_NODE(){return As}static set __EMPTY_NODE(e){As=e}compare(e,n){return Qr(e.name,n.name)}isDefinedOn(e){throw $r("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return $.MIN}maxPost(){return new $(qn,As)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new $(e,As)}toString(){return".key"}}const Nr=new rv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ke.RED,this.left=i??$e.EMPTY_NODE,this.right=s??$e.EMPTY_NODE}copy(e,n,r,i,s){return new ke(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return $e.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return $e.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class vC{copy(e,n,r,i,s){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class $e{constructor(e,n=$e.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new $e(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new $e(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new bs(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new bs(this.root_,null,this.comparator_,!0,e)}}$e.EMPTY_NODE=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t,e){return Qr(t.name,e.name)}function Hc(t,e){return Qr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;function yC(t){yu=t}const iv=function(t){return typeof t=="number"?"number:"+Mg(t):"string:"+t},sv=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else N(t===yu||t.isEmpty(),"priority of unexpected type.");N(t===yu||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ch;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sv(this.priorityNode_)}static set __childrenNodeConstructor(e){ch=e}static get __childrenNodeConstructor(){return ch}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||En(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(ne(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Mg(this.value_):e+=this.value_,this.lazyHash_=Og(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),s=Se.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ov,lv;function wC(t){ov=t}function EC(t){lv=t}class SC extends ll{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Qr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return $.MIN}maxPost(){return new $(qn,new Se("[PRIORITY-POST]",lv))}makePost(e,n){const r=ov(e);return new $(n,new Se("[PRIORITY-POST]",r))}toString(){return".priority"}}const pe=new SC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=Math.log(2);class kC{constructor(e){const n=s=>parseInt(Math.log(s)/CC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Co=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,f;if(c===0)return null;if(c===1)return d=t[a],f=n?n(d):d,new ke(f,d.node,ke.BLACK,null,null);{const g=parseInt(c/2,10)+a,v=i(a,g),y=i(g+1,u);return d=t[g],f=n?n(d):d,new ke(f,d.node,ke.BLACK,v,y)}},s=function(a){let u=null,c=null,d=t.length;const f=function(v,y){const D=d-v,p=d;d-=v;const h=i(D+1,p),m=t[D],w=n?n(m):m;g(new ke(w,m.node,y,null,h))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<a.count;++v){const y=a.nextBitIsOne(),D=Math.pow(2,a.count-(v+1));y?f(D,ke.BLACK):(f(D,ke.BLACK),f(D,ke.RED))}return c},o=new kC(t.length),l=s(o);return new $e(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;const sr={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(sr&&pe,"ChildrenNode.ts has not been loaded"),ta=ta||new Ft({".priority":sr},{".priority":pe}),ta}get(e){const n=Fr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof $e?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){N(e!==Nr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator($.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Co(r,e.getCompare()):l=sr;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new Ft(c,u)}addToIndexes(e,n){const r=_o(this.indexes_,(i,s)=>{const o=Fr(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===sr)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator($.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Co(l,o.getCompare())}else return sr;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new $(e.name,l))),a.insert(e,e.node)}});return new Ft(r,this.indexSet_)}removeFromIndexes(e,n){const r=_o(this.indexes_,i=>{if(i===sr)return i;{const s=n.get(e.name);return s?i.remove(new $(e.name,s)):i}});return new Ft(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class B{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sv(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return li||(li=new B(new $e(Hc),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ne(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new $(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?li:this.priorityNode_;return new B(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{N(K(e)!==".priority"||En(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ne(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(pe,(o,l)=>{n[o]=l.val(e),r++,s&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iv(this.getPriority().val())+":"),this.forEachChild(pe,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Og(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new $(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new $(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new $(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,$.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===hs?-1:0}withIndex(e){if(e===Nr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Nr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(pe),i=n.getIterator(pe);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Nr?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xC extends B{constructor(){super(new $e(Hc),B.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const hs=new xC;Object.defineProperties($,{MIN:{value:new $(zr,B.EMPTY_NODE)},MAX:{value:new $(qn,hs)}});rv.__EMPTY_NODE=B.EMPTY_NODE;Se.__childrenNodeConstructor=B;yC(hs);EC(hs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC=!0;function Le(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,Le(e))}if(!(t instanceof Array)&&TC){const n=[];let r=!1;if(qe(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=Le(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new $(o,a)))}}),n.length===0)return B.EMPTY_NODE;const s=Co(n,_C,o=>o.name,Hc);if(r){const o=Co(n,pe.getCompare());return new B(s,Le(e),new Ft({".priority":o},{".priority":pe}))}else return new B(s,Le(e),Ft.Default)}else{let n=B.EMPTY_NODE;return qe(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}wC(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC extends ll{constructor(e){super(),this.indexPath_=e,N(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Qr(e.name,n.name):s}makePost(e,n){const r=Le(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,r);return new $(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,hs);return new $(qn,e)}toString(){return ev(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC extends ll{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Qr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return $.MIN}maxPost(){return $.MAX}makePost(e,n){const r=Le(e);return new $(n,r)}toString(){return".value"}}const PC=new NC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){return{type:"value",snapshotNode:t}}function Br(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function RC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(qi(n,l)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Br(n,r)):o.trackChildChange(Yi(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(pe,(i,s)=>{n.hasChild(i)||r.trackChildChange(qi(i,s))}),n.isLeafNode()||n.forEachChild(pe,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Yi(i,s,o))}else r.trackChildChange(Br(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e){this.indexedFilter_=new Wc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xi.getStartPost_(e),this.endPost_=Xi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new $(n,r))||(r=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const s=this;return n.forEachChild(pe,(o,l)=>{s.matches(new $(o,l))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new $(n,r))||(r=B.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const l=e;N(l.numChildren()===this.limit_,"");const a=new $(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Yi(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(qi(n,d));const y=l.updateImmediateChild(n,B.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Br(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(qi(u.name,u.node)),s.trackChildChange(Br(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zr}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===pe}copy(){const e=new $c;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function AC(t){return t.loadsAllData()?new Wc(t.getIndex()):t.hasLimit()?new OC(t):new Xi(t)}function dh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===pe?n="$priority":t.index_===PC?n="$value":t.index_===Nr?n="$key":(N(t.index_ instanceof IC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function fh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Xg{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=ds("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=ko.getListenId_(e,r),l={};this.listens_[o]=l;const a=dh(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),Fr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=ko.getListenId_(e,n);delete this.listens_[r]}get(e){const n=dh(e._queryParams),r=e._path.toString(),i=new Tc;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jw(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=$i(l.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(){return{value:null,children:new Map}}function uv(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,xo());const i=t.children.get(r);e=ne(e),uv(i,e,n)}}function wu(t,e,n){t.value!==null?n(e,t.value):MC(t,(r,i)=>{const s=new ee(e.toString()+"/"+r);wu(i,s,n)})}function MC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=10*1e3,LC=30*1e3,FC=5*60*1e3;class zC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new DC(e);const r=hh+(LC-hh)*Math.random();Ci(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;qe(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ci(this.reportStats_.bind(this),Math.floor(Math.random()*2*FC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function cv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=cv()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ee(e));return new To(J(),n,this.revert)}}else return N(K(this.path)===e,"operationForChild called for unrelated child."),new To(ne(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new Ji(this.source,J()):new Ji(this.source,ne(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return G(this.path)?new Yn(this.source,J(),this.snap.getImmediateChild(e)):new Yn(this.source,ne(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new ee(e));return n.isEmpty()?null:n.value?new Yn(this.source,J(),n.value):new Zi(this.source,J(),n)}else return N(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zi(this.source,ne(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(RC(o.childName,o.snapshotNode))}),ai(t,i,"child_removed",e,r,n),ai(t,i,"child_added",e,r,n),ai(t,i,"child_moved",s,r,n),ai(t,i,"child_changed",e,r,n),ai(t,i,"value",e,r,n),i}function ai(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>VC(t,l,a)),o.forEach(l=>{const a=UC(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function UC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function VC(t,e,n){if(e.childName==null||n.childName==null)throw $r("Should only compare child_ events.");const r=new $(e.childName,e.snapshotNode),i=new $(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){return{eventCache:t,serverCache:e}}function ki(t,e,n,r){return al(new Xn(e,n,r),t.serverCache)}function dv(t,e,n,r){return al(t.eventCache,new Xn(e,n,r))}function Eu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Jn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na;const HC=()=>(na||(na=new $e(NS)),na);class oe{constructor(e,n=HC()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return qe(e,(r,i)=>{n=n.set(new ee(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(G(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ne(e),n);return s!=null?{path:ye(new ee(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ne(e)):new oe(null)}}set(e,n){if(G(e))return new oe(n,this.children);{const r=K(e),s=(this.children.get(r)||new oe(null)).set(ne(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ne(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ne(e)):null}}setTree(e,n){if(G(e))return n;{const r=K(e),s=(this.children.get(r)||new oe(null)).setTree(ne(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ye(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ne(e),ye(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ne(e),ye(n,i),r):new oe(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ye(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.writeTree_=e}static empty(){return new St(new oe(null))}}function xi(t,e,n){if(G(e))return new St(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=We(i,e);return s=s.updateChild(o,n),new St(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new St(s)}}}function ph(t,e,n){let r=t;return qe(n,(i,s)=>{r=xi(r,ye(e,i),s)}),r}function mh(t,e){if(G(e))return St.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new St(n)}}function Su(t,e){return nr(t,e)!=null}function nr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function gh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(pe,(r,i)=>{e.push(new $(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new $(r,i.value))}),e}function vn(t,e){if(G(e))return t;{const n=nr(t,e);return n!=null?new St(new oe(n)):new St(t.writeTree_.subtree(e))}}function Cu(t){return t.writeTree_.isEmpty()}function jr(t,e){return fv(J(),t.writeTree_,e)}function fv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=fv(ye(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ye(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e){return gv(e,t)}function WC(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xi(t.visibleWrites,e,n)),t.lastWriteId=r}function $C(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function KC(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&GC(l,r.path)?i=!1:_t(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return QC(t),!0;if(r.snap)t.visibleWrites=mh(t.visibleWrites,r.path);else{const l=r.children;qe(l,a=>{t.visibleWrites=mh(t.visibleWrites,ye(r.path,a))})}return!0}else return!1}function GC(t,e){if(t.snap)return _t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&_t(ye(t.path,n),e))return!0;return!1}function QC(t){t.visibleWrites=hv(t.allWrites,qC,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qC(t){return t.visible}function hv(t,e,n){let r=St.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)_t(n,o)?(l=We(n,o),r=xi(r,l,s.snap)):_t(o,n)&&(l=We(o,n),r=xi(r,J(),s.snap.getChild(l)));else if(s.children){if(_t(n,o))l=We(n,o),r=ph(r,l,s.children);else if(_t(o,n))if(l=We(o,n),G(l))r=ph(r,J(),s.children);else{const a=Fr(s.children,K(l));if(a){const u=a.getChild(ne(l));r=xi(r,J(),u)}}}else throw $r("WriteRecord should have .snap or .children")}}return r}function pv(t,e,n,r,i){if(!r&&!i){const s=nr(t.visibleWrites,e);if(s!=null)return s;{const o=vn(t.visibleWrites,e);if(Cu(o))return n;if(n==null&&!Su(o,J()))return null;{const l=n||B.EMPTY_NODE;return jr(o,l)}}}else{const s=vn(t.visibleWrites,e);if(!i&&Cu(s))return n;if(!i&&n==null&&!Su(s,J()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(_t(u.path,e)||_t(e,u.path))},l=hv(t.allWrites,o,e),a=n||B.EMPTY_NODE;return jr(l,a)}}}function YC(t,e,n){let r=B.EMPTY_NODE;const i=nr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(pe,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=vn(t.visibleWrites,e);return n.forEachChild(pe,(o,l)=>{const a=jr(vn(s,new ee(o)),l);r=r.updateImmediateChild(o,a)}),gh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=vn(t.visibleWrites,e);return gh(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function XC(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ye(e,n);if(Su(t.visibleWrites,s))return null;{const o=vn(t.visibleWrites,s);return Cu(o)?i.getChild(n):jr(o,i.getChild(n))}}function JC(t,e,n,r){const i=ye(e,n),s=nr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=vn(t.visibleWrites,i);return jr(o,r.getNode().getImmediateChild(n))}else return null}function ZC(t,e){return nr(t.visibleWrites,e)}function ek(t,e,n,r,i,s,o){let l;const a=vn(t.visibleWrites,e),u=nr(a,J());if(u!=null)l=u;else if(n!=null)l=jr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function tk(){return{visibleWrites:St.empty(),allWrites:[],lastWriteId:-1}}function Io(t,e,n,r){return pv(t.writeTree,t.treePath,e,n,r)}function qc(t,e){return YC(t.writeTree,t.treePath,e)}function vh(t,e,n,r){return XC(t.writeTree,t.treePath,e,n,r)}function No(t,e){return ZC(t.writeTree,ye(t.treePath,e))}function nk(t,e,n,r,i,s){return ek(t.writeTree,t.treePath,e,n,r,i,s)}function Yc(t,e,n){return JC(t.writeTree,t.treePath,e,n)}function mv(t,e){return gv(ye(t.treePath,e),t.writeTree)}function gv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Yi(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,qi(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Br(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Yi(r,e.snapshotNode,i.oldSnap));else throw $r("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const vv=new ik;class Xc{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Xn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yc(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Jn(this.viewCache_),s=nk(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){return{filter:t}}function ok(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function lk(t,e,n,r,i){const s=new rk;let o,l;if(n.type===yt.OVERWRITE){const u=n;u.source.fromUser?o=ku(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Po(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===yt.MERGE){const u=n;u.source.fromUser?o=uk(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=xu(t,e,u.path,u.children,r,i,l,s))}else if(n.type===yt.ACK_USER_WRITE){const u=n;u.revert?o=fk(t,e,u.path,r,i,s):o=ck(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=dk(t,e,n.path,r,s);else throw $r("Unknown operation type: "+n.type);const a=s.getChanges();return ak(e,o,a),{viewCache:o,changes:a}}function ak(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Eu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(av(Eu(e)))}}function _v(t,e,n,r,i,s){const o=e.eventCache;if(No(r,n)!=null)return e;{let l,a;if(G(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Jn(e),c=u instanceof B?u:B.EMPTY_NODE,d=qc(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Io(r,Jn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){N(En(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=vh(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=ne(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=vh(r,n,o.getNode(),a);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=Yc(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return ki(e,l,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Po(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),g,null)}else{const g=K(n);if(!a.isCompleteForPath(n)&&En(n)>1)return e;const v=ne(n),D=a.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(a.getNode(),D):u=c.updateChild(a.getNode(),g,D,v,vv,null)}const d=dv(e,u,a.isFullyInitialized()||G(n),c.filtersNodes()),f=new Xc(i,d,s);return _v(t,d,n,i,f,l)}function ku(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new Xc(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=ki(e,u,!0,t.filter.filtersNodes());else{const d=K(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=ki(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=ne(n),g=l.getNode().getImmediateChild(d);let v;if(G(f))v=r;else{const y=c.getCompleteChild(d);y!=null?Zg(f)===".priority"&&y.getChild(tv(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=B.EMPTY_NODE}if(g.equals(v))a=e;else{const y=t.filter.updateChild(l.getNode(),d,v,f,c,o);a=ki(e,y,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function _h(t,e){return t.eventCache.isCompleteForChild(e)}function uk(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ye(n,a);_h(e,K(c))&&(l=ku(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ye(n,a);_h(e,K(c))||(l=ku(t,l,c,u,i,s,o))}),l}function yh(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function xu(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;G(n)?u=r:u=new oe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=yh(t,g,f);a=Po(t,a,new ee(d),v,i,s,o,l)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),y=yh(t,v,f);a=Po(t,a,new ee(d),y,i,s,o,l)}}),a}function ck(t,e,n,r,i,s,o){if(No(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(G(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Po(t,e,n,a.getNode().getChild(n),i,s,l,o);if(G(n)){let u=new oe(null);return a.getNode().forEachChild(Nr,(c,d)=>{u=u.set(new ee(c),d)}),xu(t,e,n,u,i,s,l,o)}else return e}else{let u=new oe(null);return r.foreach((c,d)=>{const f=ye(n,c);a.isCompleteForPath(f)&&(u=u.set(c,a.getNode().getChild(f)))}),xu(t,e,n,u,i,s,l,o)}}function dk(t,e,n,r,i){const s=e.serverCache,o=dv(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return _v(t,o,n,r,vv,i)}function fk(t,e,n,r,i,s){let o;if(No(r,n)!=null)return e;{const l=new Xc(r,e,i),a=e.eventCache.getNode();let u;if(G(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Io(r,Jn(e));else{const d=e.serverCache.getNode();N(d instanceof B,"serverChildren would be complete if leaf node"),c=qc(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=K(n);let d=Yc(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,ne(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,B.EMPTY_NODE,ne(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Io(r,Jn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||No(r,J())!=null,ki(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wc(r.getIndex()),s=AC(r);this.processor_=sk(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(B.EMPTY_NODE,l.getNode(),null),c=new Xn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Xn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=al(d,c),this.eventGenerator_=new BC(this.query_)}get query(){return this.query_}}function pk(t){return t.viewCache_.serverCache.getNode()}function mk(t,e){const n=Jn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function wh(t){return t.eventRegistrations_.length===0}function gk(t,e){t.eventRegistrations_.push(e)}function Eh(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Sh(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(N(Jn(t.viewCache_),"We should always have a full cache before handling merges"),N(Eu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=lk(t.processor_,i,e,n,r);return ok(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,yv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function vk(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(pe,(s,o)=>{r.push(Br(s,o))}),n.isFullyInitialized()&&r.push(av(n.getNode())),yv(t,r,n.getNode(),e)}function yv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return jC(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro;class _k{constructor(){this.views=new Map}}function yk(t){N(!Ro,"__referenceConstructor has already been defined"),Ro=t}function wk(){return N(Ro,"Reference.ts has not been loaded"),Ro}function Ek(t){return t.views.size===0}function Jc(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),Sh(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Sh(o,e,n,r));return s}}function Sk(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Io(n,i?r:null),a=!1;l?a=!0:r instanceof B?(l=qc(n,r),a=!1):(l=B.EMPTY_NODE,a=!1);const u=al(new Xn(l,a,!1),new Xn(r,i,!1));return new hk(e,u)}return o}function Ck(t,e,n,r,i,s){const o=Sk(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gk(o,n),vk(o,n)}function kk(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Sn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(Eh(u,n,r)),wh(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(Eh(a,n,r)),wh(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Sn(t)&&s.push(new(wk())(e._repo,e._path)),{removed:s,events:o}}function wv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Pr(t,e){let n=null;for(const r of t.views.values())n=n||mk(r,e);return n}function Ev(t,e){if(e._queryParams.loadsAllData())return ul(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Sv(t,e){return Ev(t,e)!=null}function Sn(t){return ul(t)!=null}function ul(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo;function xk(t){N(!Oo,"__referenceConstructor has already been defined"),Oo=t}function Tk(){return N(Oo,"Reference.ts has not been loaded"),Oo}let Ik=1;class Ch{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=tk(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nk(t,e,n,r,i){return WC(t.pendingWriteTree_,e,n,r,i),i?ps(t,new Yn(cv(),e,n)):[]}function yr(t,e,n=!1){const r=$C(t.pendingWriteTree_,e);if(KC(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(J(),!0):qe(r.children,o=>{s=s.set(new ee(o),!0)}),ps(t,new To(r.path,s,n))}else return[]}function cl(t,e,n){return ps(t,new Yn(Kc(),e,n))}function Pk(t,e,n){const r=oe.fromObject(n);return ps(t,new Zi(Kc(),e,r))}function Rk(t,e){return ps(t,new Ji(Kc(),e))}function Ok(t,e,n){const r=Zc(t,n);if(r){const i=ed(r),s=i.path,o=i.queryId,l=We(s,e),a=new Ji(Gc(o),l);return td(t,s,a)}else return[]}function Tu(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||Sv(o,e))){const a=kk(o,e,n,r);Ek(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>Sn(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=Mk(f);for(let v=0;v<g.length;++v){const y=g[v],D=y.query,p=Tv(t,y);t.listenProvider_.startListening(Ti(D),Ao(t,D),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ti(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(dl(f));t.listenProvider_.stopListening(Ti(f),g)}))}Dk(t,u)}return l}function Ak(t,e,n,r){const i=Zc(t,r);if(i!=null){const s=ed(i),o=s.path,l=s.queryId,a=We(o,e),u=new Yn(Gc(l),a,n);return td(t,o,u)}else return[]}function bk(t,e,n,r){const i=Zc(t,r);if(i){const s=ed(i),o=s.path,l=s.queryId,a=We(o,e),u=oe.fromObject(n),c=new Zi(Gc(l),a,u);return td(t,o,c)}else return[]}function kh(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=We(f,i);s=s||Pr(g,v),o=o||Sn(g)});let l=t.syncPointTree_.get(i);l?(o=o||Sn(l),s=s||Pr(l,J())):(l=new _k,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=Pr(v,J());y&&(s=s.updateImmediateChild(g,y))}));const u=Sv(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=dl(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Lk();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=Qc(t.pendingWriteTree_,i);let d=Ck(l,e,n,c,s,a);if(!u&&!o&&!r){const f=Ev(l,e);d=d.concat(Fk(t,e,f))}return d}function Cv(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=We(o,e),u=Pr(l,a);if(u)return u});return pv(i,e,s,n,!0)}function ps(t,e){return kv(e,t.syncPointTree_,null,Qc(t.pendingWriteTree_,J()))}function kv(t,e,n,r){if(G(t.path))return xv(t,e,n,r);{const i=e.get(J());n==null&&i!=null&&(n=Pr(i,J()));let s=[];const o=K(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=mv(r,o);s=s.concat(kv(l,a,u,c))}return i&&(s=s.concat(Jc(i,t,r,n))),s}}function xv(t,e,n,r){const i=e.get(J());n==null&&i!=null&&(n=Pr(i,J()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=mv(r,o),c=t.operationForChild(o);c&&(s=s.concat(xv(c,l,a,u)))}),i&&(s=s.concat(Jc(i,t,r,n))),s}function Tv(t,e){const n=e.query,r=Ao(t,n);return{hashFn:()=>(pk(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Ok(t,n._path,r):Rk(t,n._path);{const s=OS(i,n);return Tu(t,n,null,s)}}}}function Ao(t,e){const n=dl(e);return t.queryToTagMap.get(n)}function dl(t){return t._path.toString()+"$"+t._queryIdentifier}function Zc(t,e){return t.tagToQueryMap.get(e)}function ed(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ee(t.substr(0,e))}}function td(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=Qc(t.pendingWriteTree_,e);return Jc(r,n,i,null)}function Mk(t){return t.fold((e,n,r)=>{if(n&&Sn(n))return[ul(n)];{let i=[];return n&&(i=wv(n)),qe(r,(s,o)=>{i=i.concat(o)}),i}})}function Ti(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Tk())(t._repo,t._path):t}function Dk(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=dl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Lk(){return Ik++}function Fk(t,e,n){const r=e._path,i=Ao(t,e),s=Tv(t,n),o=t.listenProvider_.startListening(Ti(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)N(!Sn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!G(u)&&c&&Sn(c))return[ul(c).query];{let f=[];return c&&(f=f.concat(wv(c).map(g=>g.query))),qe(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(Ti(c),Ao(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new nd(n)}node(){return this.node_}}class rd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ye(this.path_,e);return new rd(this.syncTree_,n)}node(){return Cv(this.syncTree_,this.path_)}}const zk=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},xh=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Bk(t[".sv"],e,n);if(typeof t[".sv"]=="object")return jk(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Bk=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},jk=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Uk=function(t,e,n,r){return id(e,new rd(n,t),r)},Vk=function(t,e,n){return id(t,new nd(e),n)};function id(t,e,n){const r=t.getPriority().val(),i=xh(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=xh(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Se(l,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Se(i))),o.forEachChild(pe,(l,a)=>{const u=id(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function od(t,e){let n=e instanceof ee?e:new ee(e),r=t,i=K(n);for(;i!==null;){const s=Fr(r.node.children,i)||{children:{},childCount:0};r=new sd(i,r,s),n=ne(n),i=K(n)}return r}function qr(t){return t.node.value}function Iv(t,e){t.node.value=e,Iu(t)}function Nv(t){return t.node.childCount>0}function Hk(t){return qr(t)===void 0&&!Nv(t)}function fl(t,e){qe(t.node.children,(n,r)=>{e(new sd(n,t,r))})}function Pv(t,e,n,r){n&&!r&&e(t),fl(t,i=>{Pv(i,e,!0,r)}),n&&r&&e(t)}function Wk(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ms(t){return new ee(t.parent===null?t.name:ms(t.parent)+"/"+t.name)}function Iu(t){t.parent!==null&&$k(t.parent,t.name,t)}function $k(t,e,n){const r=Hk(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Iu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Iu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=/[\[\].#$\/\u0000-\u001F\u007F]/,Gk=/[\[\].#$\u0000-\u001F\u007F]/,ra=10*1024*1024,Rv=function(t){return typeof t=="string"&&t.length!==0&&!Kk.test(t)},Ov=function(t){return typeof t=="string"&&t.length!==0&&!Gk.test(t)},Qk=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ov(t)},Av=function(t,e,n){const r=n instanceof ee?new cC(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pn(r));if(typeof e=="function")throw new Error(t+"contains a function "+Pn(r)+" with contents = "+e.toString());if(Ag(e))throw new Error(t+"contains "+e.toString()+" "+Pn(r));if(typeof e=="string"&&e.length>ra/3&&nl(e)>ra)throw new Error(t+"contains a string greater than "+ra+" utf8 bytes "+Pn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(qe(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Rv(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);dC(r,o),Av(t,l,r),fC(r)}),i&&s)throw new Error(t+' contains ".value" child '+Pn(r)+" in addition to actual children.")}},bv=function(t,e,n,r){if(!(r&&n===void 0)&&!Ov(n))throw new Error(Ym(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},qk=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bv(t,e,n,r)},Yk=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Qk(n))throw new Error(Ym(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Mv(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Uc(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Dv(t,e,n){Mv(t,n),Lv(t,r=>Uc(r,e))}function rr(t,e,n){Mv(t,n),Lv(t,r=>_t(r,e)||_t(e,r))}function Lv(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Jk(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Jk(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();zn&&De("event: "+n.toString()),fs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk="repo_interrupt",ex=25;class tx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xo(),this.transactionQueueTree_=new sd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function nx(t,e,n){if(t.stats_=Bc(t.repoInfo_),t.forceRestClient_||DS())t.server_=new ko(t.repoInfo_,(r,i,s,o)=>{Th(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ih(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new jt(t.repoInfo_,e,(r,i,s,o)=>{Th(t,r,i,s,o)},r=>{Ih(t,r)},r=>{ix(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=jS(t.repoInfo_,()=>new zC(t.stats_,t.server_)),t.infoData_=new bC,t.infoSyncTree_=new Ch({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=cl(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ld(t,"connected",!1),t.serverSyncTree_=new Ch({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);rr(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function rx(t){const n=t.infoData_.getNode(new ee(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fv(t){return zk({timestamp:rx(t)})}function Th(t,e,n,r,i){t.dataUpdateCount++;const s=new ee(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=_o(n,u=>Le(u));o=bk(t.serverSyncTree_,s,a,i)}else{const a=Le(n);o=Ak(t.serverSyncTree_,s,a,i)}else if(r){const a=_o(n,u=>Le(u));o=Pk(t.serverSyncTree_,s,a)}else{const a=Le(n);o=cl(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ud(t,s)),rr(t.eventQueue_,l,o)}function Ih(t,e){ld(t,"connected",e),e===!1&&ox(t)}function ix(t,e){qe(e,(n,r)=>{ld(t,n,r)})}function ld(t,e,n){const r=new ee("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=cl(t.infoSyncTree_,r,i);rr(t.eventQueue_,r,s)}function sx(t){return t.nextWriteId_++}function ox(t){zv(t,"onDisconnectEvents");const e=Fv(t),n=xo();wu(t.onDisconnect_,J(),(i,s)=>{const o=Uk(i,s,t.serverSyncTree_,e);uv(n,i,o)});let r=[];wu(n,J(),(i,s)=>{r=r.concat(cl(t.serverSyncTree_,i,s));const o=dx(t,i);ud(t,o)}),t.onDisconnect_=xo(),rr(t.eventQueue_,J(),r)}function lx(t,e,n){let r;K(e._path)===".info"?r=kh(t.infoSyncTree_,e,n):r=kh(t.serverSyncTree_,e,n),Dv(t.eventQueue_,e._path,r)}function Nh(t,e,n){let r;K(e._path)===".info"?r=Tu(t.infoSyncTree_,e,n):r=Tu(t.serverSyncTree_,e,n),Dv(t.eventQueue_,e._path,r)}function ax(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Zk)}function zv(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function Bv(t,e,n){return Cv(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function ad(t,e=t.transactionQueueTree_){if(e||hl(t,e),qr(e)){const n=Uv(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ux(t,ms(e),n)}else Nv(e)&&fl(e,n=>{ad(t,n)})}function ux(t,e,n){const r=n.map(u=>u.currentWriteId),i=Bv(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];N(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=We(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{zv(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(yr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();hl(t,od(t.transactionQueueTree_,e)),ad(t,t.transactionQueueTree_),rr(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)fs(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{nt("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ud(t,e)}},o)}function ud(t,e){const n=jv(t,e),r=ms(n),i=Uv(t,n);return cx(t,i,r),r}function cx(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=We(n,a.path);let c=!1,d;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(yr(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=ex)c=!0,d="maxretry",i=i.concat(yr(t.serverSyncTree_,a.currentWriteId,!0));else{const f=Bv(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Av("transaction failed: Data returned ",g,a.path);let v=Le(g);typeof g=="object"&&g!=null&&Qt(g,".priority")||(v=v.updatePriority(f.getPriority()));const D=a.currentWriteId,p=Fv(t),h=Vk(v,f,p);a.currentOutputSnapshotRaw=v,a.currentOutputSnapshotResolved=h,a.currentWriteId=sx(t),o.splice(o.indexOf(D),1),i=i.concat(Nk(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(yr(t.serverSyncTree_,D,!0))}else c=!0,d="nodata",i=i.concat(yr(t.serverSyncTree_,a.currentWriteId,!0))}rr(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}hl(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)fs(r[l]);ad(t,t.transactionQueueTree_)}function jv(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&qr(r)===void 0;)r=od(r,n),e=ne(e),n=K(e);return r}function Uv(t,e){const n=[];return Vv(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Vv(t,e,n){const r=qr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);fl(e,i=>{Vv(t,i,n)})}function hl(t,e){const n=qr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Iv(e,n.length>0?n:void 0)}fl(e,r=>{hl(t,r)})}function dx(t,e){const n=ms(jv(t,e)),r=od(t.transactionQueueTree_,e);return Wk(r,i=>{ia(t,i)}),ia(t,r),Pv(r,i=>{ia(t,i)}),n}function ia(t,e){const n=qr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(yr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Iv(e,void 0):n.length=s+1,rr(t.eventQueue_,ms(e),i);for(let o=0;o<r.length;o++)fs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hx(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ph=function(t,e){const n=px(t),r=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||TS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wg(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ee(n.pathString)}},px=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=fx(t.substring(c,d)));const f=hx(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class Wv{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cd{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:Zg(this._path)}get ref(){return new qt(this._repo,this._path)}get _queryIdentifier(){const e=fh(this._queryParams),n=Fc(e);return n==="{}"?"default":n}get _queryObject(){return fh(this._queryParams)}isEqual(e){if(e=Gr(e),!(e instanceof cd))return!1;const n=this._repo===e._repo,r=Uc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+uC(this._path)}}class qt extends cd{constructor(e,n){super(e,n,new $c,!1)}get parent(){const e=tv(this._path);return e===null?null:new qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class es{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ee(e),r=bo(this.ref,e);return new es(this._node.getChild(n),r,pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new es(i,bo(this.ref,r),pe)))}hasChild(e){const n=new ee(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gx(t,e){return t=Gr(t),t._checkNotDeleted("ref"),e!==void 0?bo(t._root,e):t._root}function bo(t,e){return t=Gr(t),K(t._path)===null?qk("child","path",e,!1):bv("child","path",e,!1),new qt(t._repo,ye(t._path,e))}class dd{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Hv("value",this,new es(e.snapshotNode,new qt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wv(this,e,n):null}matches(e){return e instanceof dd?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class fd{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Wv(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=bo(new qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Hv(e.type,this,new es(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof fd?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function vx(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{Nh(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new mx(n,s||void 0),l=e==="value"?new dd(o):new fd(e,o);return lx(t._repo,t,l),()=>Nh(t._repo,t,l)}function _x(t,e,n,r){return vx(t,"value",e,n,r)}yk(qt);xk(qt);/**
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
 */const yx="FIREBASE_DATABASE_EMULATOR_HOST",Nu={};let wx=!1;function Ex(t,e,n,r){t.repoInfo_=new Wg(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function Sx(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ph(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[yx]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Ph(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const c=i&&a?new Ir(Ir.OWNER):new FS(t.name,t.options,e);Yk("Invalid Firebase Database URL",o),G(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=kx(l,t,c,new LS(t.name,n));return new xx(d,t)}function Cx(t,e){const n=Nu[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ax(t),delete n[t.key]}function kx(t,e,n,r){let i=Nu[e.name];i||(i={},Nu[e.name]=i);let s=i[t.toURLString()];return s&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new tx(t,wx,n,r),i[t.toURLString()]=s,s}class xx{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(nx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Cx(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Tx(t=tg(),e){const n=il(t,"database").getImmediate({identifier:e}),r=Aw("database");return r&&Ix(n,...r),n}function Ix(t,e,n,r={}){t=Gr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ir(Ir.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Mw(r.mockUserToken,t.app.options.projectId);s=new Ir(o)}Ex(i,e,n,s)}/**
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
 */function Nx(t){ES(z1),wn(new $t("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Sx(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Pt(qf,Yf,t),Pt(qf,Yf,"esm2017")}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Nx();const Px={apiKey:"AIzaSyBnq3jxJPLAHZVzM7dbVK6fYc_zWAwuCPA",authDomain:"c1com-fae54.firebaseapp.com",projectId:"c1com-fae54",storageBucket:"c1com-fae54.appspot.com",messagingSenderId:"985908238030",appId:"1:985908238030:web:e0271c2dde819fc179629f",measurementId:"G-J42CTXNDCQ",databaseURL:"https://c1com-fae54-default-rtdb.firebaseio.com/"},$v=eg(Px),Rx=yS($v),Ox=Tx($v),Mo=async()=>{localStorage.getItem("token")?(alert("It's already enabled"),window.location.replace("https://esos.pages.dev/done")):wS(Rx,{vapidKey:"BFis-cQVENFyIavJl96JRuQk3zWceC0YvjQOJYYHYQmfEda4WqnZeLNmkxepB5jTVm4sVx_JSrlBR1vYvUcPhPg"}).then(async t=>{t?await fetch("http://sosapi.zuisos.info:3000/adduser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:t})}).then(e=>e.json()).then(e=>{console.log(e),localStorage.setItem("token",t),window.location.replace("https://esos.pages.dev/done")}).catch(e=>console.error(e)):(alert("No registration token available. Request permission to generate one."),console.log("No registration token available. Request permission to generate one."))}).catch(t=>{alert("An error occurred while retrieving token. "+t),console.log("An error occurred while retrieving token. "+t)})},pl=()=>H("footer",{className:"footer footer-center p-10 bg-[#111314] pt-[50vh]  text-base-content rounded",children:[H("div",{className:"grid grid-flow-col gap-4",children:[E("a",{className:"link link-hover",children:"About us"}),E("a",{className:"link link-hover",children:"Contact"}),E("a",{className:"link link-hover",children:"Jobs"}),E("a",{className:"link link-hover",children:"Press kit"})]}),E("div",{children:H("div",{className:"grid grid-flow-col gap-4",children:[E("a",{children:E("i",{class:"fa-brands cursor-pointer fa-github-alt text-3xl"})}),E("a",{children:E("i",{class:"fa-brands cursor-pointer fa-twitter text-3xl"})})]})}),E("div",{children:E("p",{children:"Copyright © 2023 - All right reserved by omar"})})]}),Ze=()=>{O.useState(1),O.useState("./logo.png");let t=us();return E(ut,{children:H("div",{className:"navbar text-white bg-[#111314]",children:[E("div",{className:"navbar-start",children:H("div",{className:"dropdown",children:[E("label",{tabIndex:0,className:"btn btn-ghost btn-circle",children:E("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h7"})})}),H("ul",{tabIndex:0,className:"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52",children:[E("li",{onClick:()=>{t("/",{replace:!1})},children:E("a",{children:"Homepage"})}),E("li",{onClick:()=>{t("/mo",{replace:!1})},children:E("a",{children:"Live data"})}),E("li",{onClick:()=>{t("/data",{replace:!1})},children:E("a",{children:"Get resouses"})}),E("li",{onClick:()=>{t("/",{replace:!1})},children:E("a",{children:"About"})})]})]})}),E("div",{className:"navbar-center",children:E("a",{onClick:()=>{t("/",{replace:!1})},className:"btn btn-ghost normal-case Poppins text-xl",children:"ESOS"})}),E("div",{className:"navbar-end",children:E("button",{className:"btn btn-ghost btn-circle",children:H("div",{className:"indicator",children:[E("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:E("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})}),E("span",{className:"badge badge-xs badge-primary indicator-item"})]})})})]})})},Ax=()=>{us();const[t,e]=O.useState(1);if(O.useState(0),O.useState(0),O.useState(0),O.useState(!1),O.useState(""),t==0)return E(ut,{});if(t==1)return E(ut,{children:H("div",{className:"bg-[#111314] Poppins h-screen",children:[E(Ze,{}),H("div",{className:"lg:pl-24 sm:pl-4 ",children:[E("div",{className:"text-left Poppins text-4xl mt-8",children:"Download resouses"}),H("div",{className:"text-[#b7b6b6] sm:mt-3 lg:mt-7 lg:max-w-[80%]",children:["All of this project resouses are open sourced (the collected data is availbe on demand you gotta contact me for more details) ",E("br",{}),"source code: ",E("a",{className:"underline underline-offset-2",href:"https://github.com/o0mrs/esos",children:"https://github.com/o0mrs/esos"})]})]}),E(pl,{})]})})};var Pu={},bx={get exports(){return Pu},set exports(t){Pu=t}};(function(t,e){(function(r,i){t.exports=i()})(typeof self<"u"?self:sa,function(){return function(n){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=n,i.c=r,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{configurable:!1,enumerable:!0,get:l})},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="/",i(i.s=7)}([function(n,r,i){function s(o,l,a,u,c,d,f,g){if(!o){var v;if(l===void 0)v=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var y=[a,u,c,d,f,g],D=0;v=new Error(l.replace(/%s/g,function(){return y[D++]})),v.name="Invariant Violation"}throw v.framesToPop=1,v}}n.exports=s},function(n,r,i){function s(l){return function(){return l}}var o=function(){};o.thatReturns=s,o.thatReturnsFalse=s(!1),o.thatReturnsTrue=s(!0),o.thatReturnsNull=s(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(l){return l},n.exports=o},function(n,r,i){/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function a(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function u(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var d={},f=0;f<10;f++)d["_"+String.fromCharCode(f)]=f;var g=Object.getOwnPropertyNames(d).map(function(y){return d[y]});if(g.join("")!=="0123456789")return!1;var v={};return"abcdefghijklmnopqrst".split("").forEach(function(y){v[y]=y}),Object.keys(Object.assign({},v)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}n.exports=u()?Object.assign:function(c,d){for(var f,g=a(c),v,y=1;y<arguments.length;y++){f=Object(arguments[y]);for(var D in f)o.call(f,D)&&(g[D]=f[D]);if(s){v=s(f);for(var p=0;p<v.length;p++)l.call(f,v[p])&&(g[v[p]]=f[v[p]])}}return g}},function(n,r,i){var s=i(1),o=s;n.exports=o},function(n,r,i){var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";n.exports=s},function(n,r,i){var s={};n.exports=s},function(n,r,i){function s(o,l,a,u,c){}n.exports=s},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=Object.assign||function(w){for(var S=1;S<arguments.length;S++){var I=arguments[S];for(var x in I)Object.prototype.hasOwnProperty.call(I,x)&&(w[x]=I[x])}return w},o=function(){function w(S,I){for(var x=0;x<I.length;x++){var P=I[x];P.enumerable=P.enumerable||!1,P.configurable=!0,"value"in P&&(P.writable=!0),Object.defineProperty(S,P.key,P)}}return function(S,I,x){return I&&w(S.prototype,I),x&&w(S,x),S}}(),l=i(8),a=v(l),u=i(11),c=v(u),d=i(14),f=g(d);function g(w){if(w&&w.__esModule)return w;var S={};if(w!=null)for(var I in w)Object.prototype.hasOwnProperty.call(w,I)&&(S[I]=w[I]);return S.default=w,S}function v(w){return w&&w.__esModule?w:{default:w}}function y(w,S){var I={};for(var x in w)S.indexOf(x)>=0||Object.prototype.hasOwnProperty.call(w,x)&&(I[x]=w[x]);return I}function D(w,S){if(!(w instanceof S))throw new TypeError("Cannot call a class as a function")}function p(w,S){if(!w)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return S&&(typeof S=="object"||typeof S=="function")?S:w}function h(w,S){if(typeof S!="function"&&S!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof S);w.prototype=Object.create(S&&S.prototype,{constructor:{value:w,enumerable:!1,writable:!0,configurable:!0}}),S&&(Object.setPrototypeOf?Object.setPrototypeOf(w,S):w.__proto__=S)}var m=function(w){h(S,w);function S(){var I,x,P,Y;D(this,S);for(var j=arguments.length,me=Array(j),Ne=0;Ne<j;Ne++)me[Ne]=arguments[Ne];return Y=(x=(P=p(this,(I=S.__proto__||Object.getPrototypeOf(S)).call.apply(I,[this].concat(me))),P),P.state={delayed:P.props.delay>0},x),p(P,Y)}return o(S,[{key:"componentDidMount",value:function(){var x=this,P=this.props.delay,Y=this.state.delayed;Y&&(this.timeout=setTimeout(function(){x.setState({delayed:!1})},P))}},{key:"componentWillUnmount",value:function(){var x=this.timeout;x&&clearTimeout(x)}},{key:"render",value:function(){var x=this.props,P=x.color;x.delay;var Y=x.type,j=x.height,me=x.width,Ne=y(x,["color","delay","type","height","width"]),Ye=this.state.delayed?"blank":Y,Yt=f[Ye],Xt={fill:P,height:j,width:me};return a.default.createElement("div",s({style:Xt,dangerouslySetInnerHTML:{__html:Yt}},Ne))}}]),S}(l.Component);m.propTypes={color:c.default.string,delay:c.default.number,type:c.default.string,height:c.default.oneOfType([c.default.string,c.default.number]),width:c.default.oneOfType([c.default.string,c.default.number])},m.defaultProps={color:"#fff",delay:0,type:"balls",height:64,width:64},r.default=m},function(n,r,i){n.exports=i(9)},function(n,r,i){/** @license React v16.3.2
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=i(2),o=i(0),l=i(5),a=i(1),u=typeof Symbol=="function"&&Symbol.for,c=u?Symbol.for("react.element"):60103,d=u?Symbol.for("react.portal"):60106,f=u?Symbol.for("react.fragment"):60107,g=u?Symbol.for("react.strict_mode"):60108,v=u?Symbol.for("react.provider"):60109,y=u?Symbol.for("react.context"):60110,D=u?Symbol.for("react.async_mode"):60111,p=u?Symbol.for("react.forward_ref"):60112,h=typeof Symbol=="function"&&Symbol.iterator;function m(_){for(var C=arguments.length-1,M="http://reactjs.org/docs/error-decoder.html?invariant="+_,A=0;A<C;A++)M+="&args[]="+encodeURIComponent(arguments[A+1]);o(!1,"Minified React error #"+_+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",M)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function S(_,C,M){this.props=_,this.context=C,this.refs=l,this.updater=M||w}S.prototype.isReactComponent={},S.prototype.setState=function(_,C){typeof _!="object"&&typeof _!="function"&&_!=null&&m("85"),this.updater.enqueueSetState(this,_,C,"setState")},S.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function I(){}I.prototype=S.prototype;function x(_,C,M){this.props=_,this.context=C,this.refs=l,this.updater=M||w}var P=x.prototype=new I;P.constructor=x,s(P,S.prototype),P.isPureReactComponent=!0;var Y={current:null},j=Object.prototype.hasOwnProperty,me={key:!0,ref:!0,__self:!0,__source:!0};function Ne(_,C,M){var A=void 0,F={},q=null,Ee=null;if(C!=null)for(A in C.ref!==void 0&&(Ee=C.ref),C.key!==void 0&&(q=""+C.key),C)j.call(C,A)&&!me.hasOwnProperty(A)&&(F[A]=C[A]);var ae=arguments.length-2;if(ae===1)F.children=M;else if(1<ae){for(var Rt=Array(ae),Ot=0;Ot<ae;Ot++)Rt[Ot]=arguments[Ot+2];F.children=Rt}if(_&&_.defaultProps)for(A in ae=_.defaultProps,ae)F[A]===void 0&&(F[A]=ae[A]);return{$$typeof:c,type:_,key:q,ref:Ee,props:F,_owner:Y.current}}function Ye(_){return typeof _=="object"&&_!==null&&_.$$typeof===c}function Yt(_){var C={"=":"=0",":":"=2"};return"$"+(""+_).replace(/[=:]/g,function(M){return C[M]})}var Xt=/\/+/g,Xe=[];function Jt(_,C,M,A){if(Xe.length){var F=Xe.pop();return F.result=_,F.keyPrefix=C,F.func=M,F.context=A,F.count=0,F}return{result:_,keyPrefix:C,func:M,context:A,count:0}}function R(_){_.result=null,_.keyPrefix=null,_.func=null,_.context=null,_.count=0,10>Xe.length&&Xe.push(_)}function z(_,C,M,A){var F=typeof _;(F==="undefined"||F==="boolean")&&(_=null);var q=!1;if(_===null)q=!0;else switch(F){case"string":case"number":q=!0;break;case"object":switch(_.$$typeof){case c:case d:q=!0}}if(q)return M(A,_,C===""?"."+V(_,0):C),1;if(q=0,C=C===""?".":C+":",Array.isArray(_))for(var Ee=0;Ee<_.length;Ee++){F=_[Ee];var ae=C+V(F,Ee);q+=z(F,ae,M,A)}else if(_===null||typeof _>"u"?ae=null:(ae=h&&_[h]||_["@@iterator"],ae=typeof ae=="function"?ae:null),typeof ae=="function")for(_=ae.call(_),Ee=0;!(F=_.next()).done;)F=F.value,ae=C+V(F,Ee++),q+=z(F,ae,M,A);else F==="object"&&(M=""+_,m("31",M==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":M,""));return q}function V(_,C){return typeof _=="object"&&_!==null&&_.key!=null?Yt(_.key):C.toString(36)}function ie(_,C){_.func.call(_.context,C,_.count++)}function k(_,C,M){var A=_.result,F=_.keyPrefix;_=_.func.call(_.context,C,_.count++),Array.isArray(_)?L(_,A,M,a.thatReturnsArgument):_!=null&&(Ye(_)&&(C=F+(!_.key||C&&C.key===_.key?"":(""+_.key).replace(Xt,"$&/")+"/")+M,_={$$typeof:c,type:_.type,key:C,ref:_.ref,props:_.props,_owner:_._owner}),A.push(_))}function L(_,C,M,A,F){var q="";M!=null&&(q=(""+M).replace(Xt,"$&/")+"/"),C=Jt(C,q,A,F),_==null||z(_,"",k,C),R(C)}var W={Children:{map:function(_,C,M){if(_==null)return _;var A=[];return L(_,A,null,C,M),A},forEach:function(_,C,M){if(_==null)return _;C=Jt(null,null,C,M),_==null||z(_,"",ie,C),R(C)},count:function(_){return _==null?0:z(_,"",a.thatReturnsNull,null)},toArray:function(_){var C=[];return L(_,C,null,a.thatReturnsArgument),C},only:function(_){return Ye(_)||m("143"),_}},createRef:function(){return{current:null}},Component:S,PureComponent:x,createContext:function(_,C){return C===void 0&&(C=null),_={$$typeof:y,_calculateChangedBits:C,_defaultValue:_,_currentValue:_,_changedBits:0,Provider:null,Consumer:null},_.Provider={$$typeof:v,_context:_},_.Consumer=_},forwardRef:function(_){return{$$typeof:p,render:_}},Fragment:f,StrictMode:g,unstable_AsyncMode:D,createElement:Ne,cloneElement:function(_,C,M){_==null&&m("267",_);var A=void 0,F=s({},_.props),q=_.key,Ee=_.ref,ae=_._owner;if(C!=null){C.ref!==void 0&&(Ee=C.ref,ae=Y.current),C.key!==void 0&&(q=""+C.key);var Rt=void 0;_.type&&_.type.defaultProps&&(Rt=_.type.defaultProps);for(A in C)j.call(C,A)&&!me.hasOwnProperty(A)&&(F[A]=C[A]===void 0&&Rt!==void 0?Rt[A]:C[A])}if(A=arguments.length-2,A===1)F.children=M;else if(1<A){Rt=Array(A);for(var Ot=0;Ot<A;Ot++)Rt[Ot]=arguments[Ot+2];F.children=Rt}return{$$typeof:c,type:_.type,key:q,ref:Ee,props:F,_owner:ae}},createFactory:function(_){var C=Ne.bind(null,_);return C.type=_,C},isValidElement:Ye,version:"16.3.2",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:Y,assign:s}},Q=Object.freeze({default:W}),U=Q&&W||Q;n.exports=U.default?U.default:U},function(n,r,i){},function(n,r,i){n.exports=i(13)()},function(n,r,i){var s=i(1),o=i(0),l=i(3),a=i(2),u=i(4),c=i(6);n.exports=function(d,f){var g=typeof Symbol=="function"&&Symbol.iterator,v="@@iterator";function y(k){var L=k&&(g&&k[g]||k[v]);if(typeof L=="function")return L}var D="<<anonymous>>",p={array:S("array"),bool:S("boolean"),func:S("function"),number:S("number"),object:S("object"),string:S("string"),symbol:S("symbol"),any:I(),arrayOf:x,element:P(),instanceOf:Y,node:Ye(),objectOf:me,oneOf:j,oneOfType:Ne,shape:Yt,exact:Xt};function h(k,L){return k===L?k!==0||1/k===1/L:k!==k&&L!==L}function m(k){this.message=k,this.stack=""}m.prototype=Error.prototype;function w(k){function L(Q,U,_,C,M,A,F){return C=C||D,A=A||_,F!==u&&f&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"),U[_]==null?Q?U[_]===null?new m("The "+M+" `"+A+"` is marked as required "+("in `"+C+"`, but its value is `null`.")):new m("The "+M+" `"+A+"` is marked as required in "+("`"+C+"`, but its value is `undefined`.")):null:k(U,_,C,M,A)}var W=L.bind(null,!1);return W.isRequired=L.bind(null,!0),W}function S(k){function L(W,Q,U,_,C,M){var A=W[Q],F=R(A);if(F!==k){var q=z(A);return new m("Invalid "+_+" `"+C+"` of type "+("`"+q+"` supplied to `"+U+"`, expected ")+("`"+k+"`."))}return null}return w(L)}function I(){return w(s.thatReturnsNull)}function x(k){function L(W,Q,U,_,C){if(typeof k!="function")return new m("Property `"+C+"` of component `"+U+"` has invalid PropType notation inside arrayOf.");var M=W[Q];if(!Array.isArray(M)){var A=R(M);return new m("Invalid "+_+" `"+C+"` of type "+("`"+A+"` supplied to `"+U+"`, expected an array."))}for(var F=0;F<M.length;F++){var q=k(M,F,U,_,C+"["+F+"]",u);if(q instanceof Error)return q}return null}return w(L)}function P(){function k(L,W,Q,U,_){var C=L[W];if(!d(C)){var M=R(C);return new m("Invalid "+U+" `"+_+"` of type "+("`"+M+"` supplied to `"+Q+"`, expected a single ReactElement."))}return null}return w(k)}function Y(k){function L(W,Q,U,_,C){if(!(W[Q]instanceof k)){var M=k.name||D,A=ie(W[Q]);return new m("Invalid "+_+" `"+C+"` of type "+("`"+A+"` supplied to `"+U+"`, expected ")+("instance of `"+M+"`."))}return null}return w(L)}function j(k){if(!Array.isArray(k))return s.thatReturnsNull;function L(W,Q,U,_,C){for(var M=W[Q],A=0;A<k.length;A++)if(h(M,k[A]))return null;var F=JSON.stringify(k);return new m("Invalid "+_+" `"+C+"` of value `"+M+"` "+("supplied to `"+U+"`, expected one of "+F+"."))}return w(L)}function me(k){function L(W,Q,U,_,C){if(typeof k!="function")return new m("Property `"+C+"` of component `"+U+"` has invalid PropType notation inside objectOf.");var M=W[Q],A=R(M);if(A!=="object")return new m("Invalid "+_+" `"+C+"` of type "+("`"+A+"` supplied to `"+U+"`, expected an object."));for(var F in M)if(M.hasOwnProperty(F)){var q=k(M,F,U,_,C+"."+F,u);if(q instanceof Error)return q}return null}return w(L)}function Ne(k){if(!Array.isArray(k))return s.thatReturnsNull;for(var L=0;L<k.length;L++){var W=k[L];if(typeof W!="function")return l(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",V(W),L),s.thatReturnsNull}function Q(U,_,C,M,A){for(var F=0;F<k.length;F++){var q=k[F];if(q(U,_,C,M,A,u)==null)return null}return new m("Invalid "+M+" `"+A+"` supplied to "+("`"+C+"`."))}return w(Q)}function Ye(){function k(L,W,Q,U,_){return Xe(L[W])?null:new m("Invalid "+U+" `"+_+"` supplied to "+("`"+Q+"`, expected a ReactNode."))}return w(k)}function Yt(k){function L(W,Q,U,_,C){var M=W[Q],A=R(M);if(A!=="object")return new m("Invalid "+_+" `"+C+"` of type `"+A+"` "+("supplied to `"+U+"`, expected `object`."));for(var F in k){var q=k[F];if(q){var Ee=q(M,F,U,_,C+"."+F,u);if(Ee)return Ee}}return null}return w(L)}function Xt(k){function L(W,Q,U,_,C){var M=W[Q],A=R(M);if(A!=="object")return new m("Invalid "+_+" `"+C+"` of type `"+A+"` "+("supplied to `"+U+"`, expected `object`."));var F=a({},W[Q],k);for(var q in F){var Ee=k[q];if(!Ee)return new m("Invalid "+_+" `"+C+"` key `"+q+"` supplied to `"+U+"`.\nBad object: "+JSON.stringify(W[Q],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(k),null,"  "));var ae=Ee(M,q,U,_,C+"."+q,u);if(ae)return ae}return null}return w(L)}function Xe(k){switch(typeof k){case"number":case"string":case"undefined":return!0;case"boolean":return!k;case"object":if(Array.isArray(k))return k.every(Xe);if(k===null||d(k))return!0;var L=y(k);if(L){var W=L.call(k),Q;if(L!==k.entries){for(;!(Q=W.next()).done;)if(!Xe(Q.value))return!1}else for(;!(Q=W.next()).done;){var U=Q.value;if(U&&!Xe(U[1]))return!1}}else return!1;return!0;default:return!1}}function Jt(k,L){return k==="symbol"||L["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&L instanceof Symbol}function R(k){var L=typeof k;return Array.isArray(k)?"array":k instanceof RegExp?"object":Jt(L,k)?"symbol":L}function z(k){if(typeof k>"u"||k===null)return""+k;var L=R(k);if(L==="object"){if(k instanceof Date)return"date";if(k instanceof RegExp)return"regexp"}return L}function V(k){var L=z(k);switch(L){case"array":case"object":return"an "+L;case"boolean":case"date":case"regexp":return"a "+L;default:return L}}function ie(k){return!k.constructor||!k.constructor.name?D:k.constructor.name}return p.checkPropTypes=c,p.PropTypes=p,p}},function(n,r,i){var s=i(1),o=i(0),l=i(4);n.exports=function(){function a(d,f,g,v,y,D){D!==l&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}a.isRequired=a;function u(){return a}var c={array:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:u,element:a,instanceOf:u,node:a,objectOf:u,oneOf:u,oneOfType:u,shape:u,exact:u};return c.checkPropTypes=s,c.PropTypes=c,c}},function(n,r,i){Object.defineProperty(r,"__esModule",{value:!0});var s=i(15);Object.defineProperty(r,"blank",{enumerable:!0,get:function(){return v(s).default}});var o=i(16);Object.defineProperty(r,"balls",{enumerable:!0,get:function(){return v(o).default}});var l=i(17);Object.defineProperty(r,"bars",{enumerable:!0,get:function(){return v(l).default}});var a=i(18);Object.defineProperty(r,"bubbles",{enumerable:!0,get:function(){return v(a).default}});var u=i(19);Object.defineProperty(r,"cubes",{enumerable:!0,get:function(){return v(u).default}});var c=i(20);Object.defineProperty(r,"cylon",{enumerable:!0,get:function(){return v(c).default}});var d=i(21);Object.defineProperty(r,"spin",{enumerable:!0,get:function(){return v(d).default}});var f=i(22);Object.defineProperty(r,"spinningBubbles",{enumerable:!0,get:function(){return v(f).default}});var g=i(23);Object.defineProperty(r,"spokes",{enumerable:!0,get:function(){return v(g).default}});function v(y){return y&&y.__esModule?y:{default:y}}},function(n,r){n.exports=`<svg class="icon-blank" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"></svg>
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
`}])})})(bx);const Do=Gv(Pu),Mx=()=>{us();const[t,e]=O.useState(0),[n,r]=O.useState("");if(t==0)return H(ut,{children:[H("div",{className:"bg-[#111314] lg:hidden Poppins h-screen",children:[E(Ze,{}),H("div",{children:[E("div",{children:E("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),E("div",{className:"mt-12 text-center",children:"..."}),H("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[E("div",{className:"mt-16",children:E("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),E("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]}),H("div",{className:"bg-[#111314] sm:hidden lg:block Poppins h-screen",children:[E(Ze,{}),E("div",{children:H("div",{className:"grid grid-cols-2",children:[E("div",{children:H("div",{className:" text-[#8BCCD0] leading-relaxed mt-32 Poppins font-bdold px-3 text-left pl-10 text-5xl",children:["Let's save lives from the ",E("br",{})," impact of earthquakes.",E("div",{className:" text-[#b3b3b3] leading-relaxed Poppins  text-lg font-bdold px-2 max-w-[90%] mt-5 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),E("div",{children:E("div",{onClick:()=>{e(2);const i=Mo();console.log(i)},className:"h-14 cursor-pointer text-white max-w-[90%] mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})}),E("div",{children:E("img",{src:"main2.png",className:"lg:max-w-[48vw] sm:max-w-screen px-3 mt-12 "})})]})})]}),E(pl,{})]});if(t==1)return H("div",{className:"bg-[#111314] Poppins h-screen",children:[E(Ze,{}),H("div",{children:[E("div",{children:E("img",{src:"main.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),E("div",{className:" text-[#fff] leading-relaxed Poppins font-bdold px-4 mt-3 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),n,E("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:E("div",{onClick:async()=>{e(2),Mo()},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})]});if(t==2)return E(ut,{children:H("div",{className:"bg-[#111314] Poppins h-screen",children:[E(Ze,{}),E("div",{className:"grid place-items-center sm:hidden lg:grid mt-52",children:E(Do,{type:"balls",color:"#fff",height:"8%",width:"8%"})}),E("div",{className:"grid place-items-center sm:grid lg:hidden mt-32",children:E(Do,{type:"balls",color:"#fff",height:"30%",width:"30%"})})]})});if(t==3)return E(ut,{children:H("div",{className:"bg-[#111314] Poppins h-screen text-4xl ",children:[E(Ze,{}),E("div",{className:"mt-32 text-center",children:"done"})]})})},Dx=()=>{us();const[t,e]=O.useState(1),[n,r]=O.useState(0),[i,s]=O.useState(0),[o,l]=O.useState(0),[a,u]=O.useState(!1);if(O.useEffect(()=>{const c=gx(Ox,"a");return _x(c,d=>{d.val(),d.val()?(r(d.val().x),s(d.val().y),l(d.val().z),u(d.val().earth)):console.log("doesnt")})},[]),O.useState(""),t==0)return H("div",{className:"bg-[#111314 ] Poppins h-screen",children:[E(Ze,{}),H("div",{children:[E("div",{children:E("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),E("div",{className:"mt-12 text-center",children:"..."}),H("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[E("div",{className:"mt-16",children:E("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),E("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]});if(t==1)return E(ut,{children:H("div",{className:"bg-[#111314] text-white Poppins h-screen",children:[E(Ze,{}),H("div",{className:"text-6xl place-items-center mt-32 grid grid-cols-3",children:[H("div",{children:["x: ",n]}),H("div",{children:["y: ",i]}),H("div",{children:["z: ",o]})]}),H("div",{className:"text-center text-6xl mt-32",children:[a&&E(ut,{children:"THER'S AN EARTQUAKE"}),!a&&E(ut,{children:"SAFE"})]}),E(pl,{})]})})},Lx=()=>{us();const[t,e]=O.useState(3),[n,r]=O.useState("");if(t==0)return H(ut,{children:[H("div",{className:"bg-[#111314] lg:hidden Poppins h-screen",children:[E(Ze,{}),H("div",{children:[E("div",{children:E("img",{src:"main2.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),E("div",{className:"mt-12 text-center",children:"..."}),H("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:[E("div",{className:"mt-16",children:E("div",{className:" text-[#8BCCD0] leading-relaxed /Poppins font-bdold px-3 text-center text-2xl",children:"Let's save lives from the impact of earthquakes."})}),E("div",{onClick:()=>{e(1)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Get started"})]})]})]}),H("div",{className:"bg-[#111314] sm:hidden lg:block Poppins h-screen",children:[E(Ze,{}),E("div",{children:H("div",{className:"grid grid-cols-2",children:[E("div",{children:H("div",{className:" text-[#8BCCD0] leading-relaxed mt-32 Poppins font-bdold px-3 text-left pl-10 text-5xl",children:["Let's save lives from the ",E("br",{})," impact of earthquakes.",E("div",{className:" text-[#b3b3b3] leading-relaxed Poppins  text-lg font-bdold px-2 max-w-[90%] mt-5 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),E("div",{children:E("div",{onClick:()=>{e(2);const i=Mo();console.log(i)},className:"h-14 cursor-pointer text-white max-w-[90%] mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})}),E("div",{children:E("img",{src:"main2.png",className:"lg:max-w-[48vw] sm:max-w-screen px-3 mt-12 "})})]})})]}),E(pl,{})]});if(t==1)return H("div",{className:"bg-[#111314] Poppins h-screen",children:[E(Ze,{}),H("div",{children:[E("div",{children:E("img",{src:"main.png",className:"lg:max-w-[30rem] sm:max-w-screen px-3 mt-12 "})}),E("div",{className:" text-[#fff] leading-relaxed Poppins font-bdold px-4 mt-3 text-left text-md",children:"We will send you a notification when an earthquake happens, depending on the seismic focus you might get around 30 seconds to runaway"}),n,E("div",{className:"bottom-0 fixed text-center w-screen px-4 pb-14",children:E("div",{onClick:async()=>{e(2);const i=await Mo();console.log(i)},className:"h-14 mt-14 text-center text-xl pt-3.5 rounded-3xl bg-[#527e80]",children:"Enable"})})]})]});if(t==2)return E(ut,{children:H("div",{className:"bg-[#111314] Poppins h-screen",children:[E(Ze,{}),E("div",{className:"grid place-items-center sm:hidden lg:grid mt-52",children:E(Do,{type:"balls",color:"#fff",height:"8%",width:"8%"})}),E("div",{className:"grid place-items-center sm:grid lg:hidden mt-32",children:E(Do,{type:"balls",color:"#fff",height:"30%",width:"30%"})})]})});if(t==3)return E(ut,{children:H("div",{className:"bg-[#111314] Poppins h-screen text-4xl ",children:[E(Ze,{}),E("div",{className:"mt-32 text-center",children:"done"})]})})};function Fx(){return H(vw,{children:[E(hi,{path:"/",element:E(Mx,{})}),E(hi,{path:"/mo",element:E(Dx,{})}),E(hi,{path:"/data",element:E(Ax,{})}),E(hi,{path:"/done",element:E(Lx,{})})]})}Boolean(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator?console.log("no"):(console.log("yes"),navigator.serviceWorker.ready.then(t=>{t.register()}));ca.createRoot(document.getElementById("root")).render(E(_w,{children:E(Fx,{})}));
