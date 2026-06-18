(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function kE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var wx={exports:{}},od={},Ax={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iu=Symbol.for("react.element"),zE=Symbol.for("react.portal"),BE=Symbol.for("react.fragment"),HE=Symbol.for("react.strict_mode"),VE=Symbol.for("react.profiler"),GE=Symbol.for("react.provider"),WE=Symbol.for("react.context"),XE=Symbol.for("react.forward_ref"),YE=Symbol.for("react.suspense"),qE=Symbol.for("react.memo"),$E=Symbol.for("react.lazy"),Ng=Symbol.iterator;function jE(n){return n===null||typeof n!="object"?null:(n=Ng&&n[Ng]||n["@@iterator"],typeof n=="function"?n:null)}var Cx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Rx=Object.assign,Px={};function rl(n,e,t){this.props=n,this.context=e,this.refs=Px,this.updater=t||Cx}rl.prototype.isReactComponent={};rl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};rl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function bx(){}bx.prototype=rl.prototype;function s_(n,e,t){this.props=n,this.context=e,this.refs=Px,this.updater=t||Cx}var o_=s_.prototype=new bx;o_.constructor=s_;Rx(o_,rl.prototype);o_.isPureReactComponent=!0;var Og=Array.isArray,Dx=Object.prototype.hasOwnProperty,a_={current:null},Lx={key:!0,ref:!0,__self:!0,__source:!0};function Ix(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dx.call(e,i)&&!Lx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Iu,type:n,key:s,ref:o,props:r,_owner:a_.current}}function KE(n,e){return{$$typeof:Iu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function l_(n){return typeof n=="object"&&n!==null&&n.$$typeof===Iu}function ZE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fg=/\/+/g;function Ud(n,e){return typeof n=="object"&&n!==null&&n.key!=null?ZE(""+n.key):e.toString(36)}function Xc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Iu:case zE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Ud(o,0):i,Og(r)?(t="",n!=null&&(t=n.replace(Fg,"$&/")+"/"),Xc(r,e,t,"",function(u){return u})):r!=null&&(l_(r)&&(r=KE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Og(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Ud(s,a);o+=Xc(s,e,t,l,r)}else if(l=jE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Ud(s,a++),o+=Xc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xu(n,e,t){if(n==null)return n;var i=[],r=0;return Xc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function QE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Vn={current:null},Yc={transition:null},JE={ReactCurrentDispatcher:Vn,ReactCurrentBatchConfig:Yc,ReactCurrentOwner:a_};function Ux(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Xu,forEach:function(n,e,t){Xu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Xu(n,function(){e++}),e},toArray:function(n){return Xu(n,function(e){return e})||[]},only:function(n){if(!l_(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=rl;ot.Fragment=BE;ot.Profiler=VE;ot.PureComponent=s_;ot.StrictMode=HE;ot.Suspense=YE;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE;ot.act=Ux;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Rx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=a_.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Dx.call(e,l)&&!Lx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Iu,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:WE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:GE,_context:n},n.Consumer=n};ot.createElement=Ix;ot.createFactory=function(n){var e=Ix.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:XE,render:n}};ot.isValidElement=l_;ot.lazy=function(n){return{$$typeof:$E,_payload:{_status:-1,_result:n},_init:QE}};ot.memo=function(n,e){return{$$typeof:qE,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=Yc.transition;Yc.transition={};try{n()}finally{Yc.transition=e}};ot.unstable_act=Ux;ot.useCallback=function(n,e){return Vn.current.useCallback(n,e)};ot.useContext=function(n){return Vn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return Vn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return Vn.current.useEffect(n,e)};ot.useId=function(){return Vn.current.useId()};ot.useImperativeHandle=function(n,e,t){return Vn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return Vn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return Vn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return Vn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return Vn.current.useReducer(n,e,t)};ot.useRef=function(n){return Vn.current.useRef(n)};ot.useState=function(n){return Vn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return Vn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return Vn.current.useTransition()};ot.version="18.3.1";Ax.exports=ot;var Li=Ax.exports;const e1=kE(Li);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t1=Li,n1=Symbol.for("react.element"),i1=Symbol.for("react.fragment"),r1=Object.prototype.hasOwnProperty,s1=t1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o1={key:!0,ref:!0,__self:!0,__source:!0};function Nx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)r1.call(e,i)&&!o1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:n1,type:n,key:s,ref:o,props:r,_owner:s1.current}}od.Fragment=i1;od.jsx=Nx;od.jsxs=Nx;wx.exports=od;var An=wx.exports,Jh={},Ox={exports:{}},Ci={},Fx={exports:{}},kx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(L,j){var P=L.length;L.push(j);e:for(;0<P;){var te=P-1>>>1,ye=L[te];if(0<r(ye,j))L[te]=j,L[P]=ye,P=te;else break e}}function t(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var j=L[0],P=L.pop();if(P!==j){L[0]=P;e:for(var te=0,ye=L.length,He=ye>>>1;te<He;){var H=2*(te+1)-1,Q=L[H],re=H+1,ae=L[re];if(0>r(Q,P))re<ye&&0>r(ae,Q)?(L[te]=ae,L[re]=P,te=re):(L[te]=Q,L[H]=P,te=H);else if(re<ye&&0>r(ae,P))L[te]=ae,L[re]=P,te=re;else break e}}return j}function r(L,j){var P=L.sortIndex-j.sortIndex;return P!==0?P:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var j=t(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=L)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(u)}}function S(L){if(g=!1,x(L),!_)if(t(l)!==null)_=!0,B(C);else{var j=t(u);j!==null&&Y(S,j.startTime-L)}}function C(L,j){_=!1,g&&(g=!1,h(R),R=-1),p=!0;var P=f;try{for(x(j),d=t(l);d!==null&&(!(d.expirationTime>j)||L&&!T());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var ye=te(d.expirationTime<=j);j=n.unstable_now(),typeof ye=="function"?d.callback=ye:d===t(l)&&i(l),x(j)}else i(l);d=t(l)}if(d!==null)var He=!0;else{var H=t(u);H!==null&&Y(S,H.startTime-j),He=!1}return He}finally{d=null,f=P,p=!1}}var A=!1,M=null,R=-1,I=5,y=-1;function T(){return!(n.unstable_now()-y<I)}function U(){if(M!==null){var L=n.unstable_now();y=L;var j=!0;try{j=M(!0,L)}finally{j?z():(A=!1,M=null)}}else A=!1}var z;if(typeof v=="function")z=function(){v(U)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,$=X.port2;X.port1.onmessage=U,z=function(){$.postMessage(null)}}else z=function(){m(U,0)};function B(L){M=L,A||(A=!0,z())}function Y(L,j){R=m(function(){L(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(L){L.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,B(C))},n.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<L?Math.floor(1e3/L):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(L){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var P=f;f=j;try{return L()}finally{f=P}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var P=f;f=L;try{return j()}finally{f=P}},n.unstable_scheduleCallback=function(L,j,P){var te=n.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?te+P:te):P=te,L){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=P+ye,L={id:c++,callback:j,priorityLevel:L,startTime:P,expirationTime:ye,sortIndex:-1},P>te?(L.sortIndex=P,e(u,L),t(l)===null&&L===t(u)&&(g?(h(R),R=-1):g=!0,Y(S,P-te))):(L.sortIndex=ye,e(l,L),_||p||(_=!0,B(C))),L},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(L){var j=f;return function(){var P=f;f=j;try{return L.apply(this,arguments)}finally{f=P}}}})(kx);Fx.exports=kx;var a1=Fx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=Li,Ti=a1;function le(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zx=new Set,su={};function Oo(n,e){za(n,e),za(n+"Capture",e)}function za(n,e){for(su[n]=e,n=0;n<e.length;n++)zx.add(e[n])}var Hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ep=Object.prototype.hasOwnProperty,u1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},zg={};function c1(n){return ep.call(zg,n)?!0:ep.call(kg,n)?!1:u1.test(n)?zg[n]=!0:(kg[n]=!0,!1)}function f1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function d1(n,e,t,i){if(e===null||typeof e>"u"||f1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var yn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){yn[n]=new Gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];yn[e]=new Gn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){yn[n]=new Gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){yn[n]=new Gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){yn[n]=new Gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){yn[n]=new Gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){yn[n]=new Gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){yn[n]=new Gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){yn[n]=new Gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var u_=/[\-:]([a-z])/g;function c_(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(u_,c_);yn[e]=new Gn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(u_,c_);yn[e]=new Gn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(u_,c_);yn[e]=new Gn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){yn[n]=new Gn(n,1,!1,n.toLowerCase(),null,!1,!1)});yn.xlinkHref=new Gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){yn[n]=new Gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function f_(n,e,t,i){var r=yn.hasOwnProperty(e)?yn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(d1(e,t,r,i)&&(t=null),i||r===null?c1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Kr=l1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yu=Symbol.for("react.element"),aa=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),d_=Symbol.for("react.strict_mode"),tp=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),h_=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),ip=Symbol.for("react.suspense_list"),p_=Symbol.for("react.memo"),as=Symbol.for("react.lazy"),Vx=Symbol.for("react.offscreen"),Bg=Symbol.iterator;function ul(n){return n===null||typeof n!="object"?null:(n=Bg&&n[Bg]||n["@@iterator"],typeof n=="function"?n:null)}var Bt=Object.assign,Nd;function Al(n){if(Nd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Nd=e&&e[1]||""}return`
`+Nd+n}var Od=!1;function Fd(n,e){if(!n||Od)return"";Od=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Od=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Al(n):""}function h1(n){switch(n.tag){case 5:return Al(n.type);case 16:return Al("Lazy");case 13:return Al("Suspense");case 19:return Al("SuspenseList");case 0:case 2:case 15:return n=Fd(n.type,!1),n;case 11:return n=Fd(n.type.render,!1),n;case 1:return n=Fd(n.type,!0),n;default:return""}}function rp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case la:return"Fragment";case aa:return"Portal";case tp:return"Profiler";case d_:return"StrictMode";case np:return"Suspense";case ip:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Hx:return(n.displayName||"Context")+".Consumer";case Bx:return(n._context.displayName||"Context")+".Provider";case h_:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case p_:return e=n.displayName||null,e!==null?e:rp(n.type)||"Memo";case as:e=n._payload,n=n._init;try{return rp(n(e))}catch{}}return null}function p1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rp(e);case 8:return e===d_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ls(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Gx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function m1(n){var e=Gx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function qu(n){n._valueTracker||(n._valueTracker=m1(n))}function Wx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Gx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function yf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function sp(n,e){var t=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Hg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ls(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Xx(n,e){e=e.checked,e!=null&&f_(n,"checked",e,!1)}function op(n,e){Xx(n,e);var t=Ls(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ap(n,e.type,t):e.hasOwnProperty("defaultValue")&&ap(n,e.type,Ls(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Vg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ap(n,e,t){(e!=="number"||yf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Cl=Array.isArray;function Ea(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ls(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function lp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Gg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(le(92));if(Cl(t)){if(1<t.length)throw Error(le(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ls(t)}}function Yx(n,e){var t=Ls(e.value),i=Ls(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Wg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function qx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function up(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?qx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var $u,$x=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for($u=$u||document.createElement("div"),$u.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$u.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ou(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_1=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(n){_1.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),kl[e]=kl[n]})});function jx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||kl.hasOwnProperty(n)&&kl[n]?(""+e).trim():e+"px"}function Kx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var g1=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cp(n,e){if(e){if(g1[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function fp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dp=null;function m_(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hp=null,Ta=null,wa=null;function Xg(n){if(n=Ou(n)){if(typeof hp!="function")throw Error(le(280));var e=n.stateNode;e&&(e=fd(e),hp(n.stateNode,n.type,e))}}function Zx(n){Ta?wa?wa.push(n):wa=[n]:Ta=n}function Qx(){if(Ta){var n=Ta,e=wa;if(wa=Ta=null,Xg(n),e)for(n=0;n<e.length;n++)Xg(e[n])}}function Jx(n,e){return n(e)}function ey(){}var kd=!1;function ty(n,e,t){if(kd)return n(e,t);kd=!0;try{return Jx(n,e,t)}finally{kd=!1,(Ta!==null||wa!==null)&&(ey(),Qx())}}function au(n,e){var t=n.stateNode;if(t===null)return null;var i=fd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(le(231,e,typeof t));return t}var pp=!1;if(Hr)try{var cl={};Object.defineProperty(cl,"passive",{get:function(){pp=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{pp=!1}function v1(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var zl=!1,Sf=null,Mf=!1,mp=null,x1={onError:function(n){zl=!0,Sf=n}};function y1(n,e,t,i,r,s,o,a,l){zl=!1,Sf=null,v1.apply(x1,arguments)}function S1(n,e,t,i,r,s,o,a,l){if(y1.apply(this,arguments),zl){if(zl){var u=Sf;zl=!1,Sf=null}else throw Error(le(198));Mf||(Mf=!0,mp=u)}}function Fo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function ny(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Yg(n){if(Fo(n)!==n)throw Error(le(188))}function M1(n){var e=n.alternate;if(!e){if(e=Fo(n),e===null)throw Error(le(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Yg(r),n;if(s===i)return Yg(r),e;s=s.sibling}throw Error(le(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(le(189))}}if(t.alternate!==i)throw Error(le(190))}if(t.tag!==3)throw Error(le(188));return t.stateNode.current===t?n:e}function iy(n){return n=M1(n),n!==null?ry(n):null}function ry(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=ry(n);if(e!==null)return e;n=n.sibling}return null}var sy=Ti.unstable_scheduleCallback,qg=Ti.unstable_cancelCallback,E1=Ti.unstable_shouldYield,T1=Ti.unstable_requestPaint,qt=Ti.unstable_now,w1=Ti.unstable_getCurrentPriorityLevel,__=Ti.unstable_ImmediatePriority,oy=Ti.unstable_UserBlockingPriority,Ef=Ti.unstable_NormalPriority,A1=Ti.unstable_LowPriority,ay=Ti.unstable_IdlePriority,ad=null,gr=null;function C1(n){if(gr&&typeof gr.onCommitFiberRoot=="function")try{gr.onCommitFiberRoot(ad,n,void 0,(n.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:b1,R1=Math.log,P1=Math.LN2;function b1(n){return n>>>=0,n===0?32:31-(R1(n)/P1|0)|0}var ju=64,Ku=4194304;function Rl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Rl(a):(s&=o,s!==0&&(i=Rl(s)))}else o=t&~r,o!==0?i=Rl(o):s!==0&&(i=Rl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-rr(e),r=1<<t,i|=n[t],e&=~r;return i}function D1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=D1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _p(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ly(){var n=ju;return ju<<=1,!(ju&4194240)&&(ju=64),n}function zd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Uu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-rr(e),n[e]=t}function I1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-rr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function g_(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-rr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function uy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var cy,v_,fy,dy,hy,gp=!1,Zu=[],xs=null,ys=null,Ss=null,lu=new Map,uu=new Map,us=[],U1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $g(n,e){switch(n){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":lu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":uu.delete(e.pointerId)}}function fl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ou(e),e!==null&&v_(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function N1(n,e,t,i,r){switch(e){case"focusin":return xs=fl(xs,n,e,t,i,r),!0;case"dragenter":return ys=fl(ys,n,e,t,i,r),!0;case"mouseover":return Ss=fl(Ss,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return lu.set(s,fl(lu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,uu.set(s,fl(uu.get(s)||null,n,e,t,i,r)),!0}return!1}function py(n){var e=ao(n.target);if(e!==null){var t=Fo(e);if(t!==null){if(e=t.tag,e===13){if(e=ny(t),e!==null){n.blockedOn=e,hy(n.priority,function(){fy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);dp=i,t.target.dispatchEvent(i),dp=null}else return e=Ou(t),e!==null&&v_(e),n.blockedOn=t,!1;e.shift()}return!0}function jg(n,e,t){qc(n)&&t.delete(e)}function O1(){gp=!1,xs!==null&&qc(xs)&&(xs=null),ys!==null&&qc(ys)&&(ys=null),Ss!==null&&qc(Ss)&&(Ss=null),lu.forEach(jg),uu.forEach(jg)}function dl(n,e){n.blockedOn===e&&(n.blockedOn=null,gp||(gp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,O1)))}function cu(n){function e(r){return dl(r,n)}if(0<Zu.length){dl(Zu[0],n);for(var t=1;t<Zu.length;t++){var i=Zu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(xs!==null&&dl(xs,n),ys!==null&&dl(ys,n),Ss!==null&&dl(Ss,n),lu.forEach(e),uu.forEach(e),t=0;t<us.length;t++)i=us[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<us.length&&(t=us[0],t.blockedOn===null);)py(t),t.blockedOn===null&&us.shift()}var Aa=Kr.ReactCurrentBatchConfig,wf=!0;function F1(n,e,t,i){var r=vt,s=Aa.transition;Aa.transition=null;try{vt=1,x_(n,e,t,i)}finally{vt=r,Aa.transition=s}}function k1(n,e,t,i){var r=vt,s=Aa.transition;Aa.transition=null;try{vt=4,x_(n,e,t,i)}finally{vt=r,Aa.transition=s}}function x_(n,e,t,i){if(wf){var r=vp(n,e,t,i);if(r===null)jd(n,e,i,Af,t),$g(n,i);else if(N1(r,n,e,t,i))i.stopPropagation();else if($g(n,i),e&4&&-1<U1.indexOf(n)){for(;r!==null;){var s=Ou(r);if(s!==null&&cy(s),s=vp(n,e,t,i),s===null&&jd(n,e,i,Af,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else jd(n,e,i,null,t)}}var Af=null;function vp(n,e,t,i){if(Af=null,n=m_(i),n=ao(n),n!==null)if(e=Fo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=ny(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Af=n,null}function my(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(w1()){case __:return 1;case oy:return 4;case Ef:case A1:return 16;case ay:return 536870912;default:return 16}default:return 16}}var ds=null,y_=null,$c=null;function _y(){if($c)return $c;var n,e=y_,t=e.length,i,r="value"in ds?ds.value:ds.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return $c=r.slice(n,1<i?1-i:void 0)}function jc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qu(){return!0}function Kg(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qu:Kg,this.isPropagationStopped=Kg,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qu)},persist:function(){},isPersistent:Qu}),e}var sl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},S_=Ri(sl),Nu=Bt({},sl,{view:0,detail:0}),z1=Ri(Nu),Bd,Hd,hl,ld=Bt({},Nu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:M_,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==hl&&(hl&&n.type==="mousemove"?(Bd=n.screenX-hl.screenX,Hd=n.screenY-hl.screenY):Hd=Bd=0,hl=n),Bd)},movementY:function(n){return"movementY"in n?n.movementY:Hd}}),Zg=Ri(ld),B1=Bt({},ld,{dataTransfer:0}),H1=Ri(B1),V1=Bt({},Nu,{relatedTarget:0}),Vd=Ri(V1),G1=Bt({},sl,{animationName:0,elapsedTime:0,pseudoElement:0}),W1=Ri(G1),X1=Bt({},sl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Y1=Ri(X1),q1=Bt({},sl,{data:0}),Qg=Ri(q1),$1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=K1[n])?!!e[n]:!1}function M_(){return Z1}var Q1=Bt({},Nu,{key:function(n){if(n.key){var e=$1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:M_,charCode:function(n){return n.type==="keypress"?jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),J1=Ri(Q1),eT=Bt({},ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jg=Ri(eT),tT=Bt({},Nu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:M_}),nT=Ri(tT),iT=Bt({},sl,{propertyName:0,elapsedTime:0,pseudoElement:0}),rT=Ri(iT),sT=Bt({},ld,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oT=Ri(sT),aT=[9,13,27,32],E_=Hr&&"CompositionEvent"in window,Bl=null;Hr&&"documentMode"in document&&(Bl=document.documentMode);var lT=Hr&&"TextEvent"in window&&!Bl,gy=Hr&&(!E_||Bl&&8<Bl&&11>=Bl),e0=" ",t0=!1;function vy(n,e){switch(n){case"keyup":return aT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ua=!1;function uT(n,e){switch(n){case"compositionend":return xy(e);case"keypress":return e.which!==32?null:(t0=!0,e0);case"textInput":return n=e.data,n===e0&&t0?null:n;default:return null}}function cT(n,e){if(ua)return n==="compositionend"||!E_&&vy(n,e)?(n=_y(),$c=y_=ds=null,ua=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return gy&&e.locale!=="ko"?null:e.data;default:return null}}var fT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!fT[n.type]:e==="textarea"}function yy(n,e,t,i){Zx(i),e=Cf(e,"onChange"),0<e.length&&(t=new S_("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Hl=null,fu=null;function dT(n){Dy(n,0)}function ud(n){var e=da(n);if(Wx(e))return n}function hT(n,e){if(n==="change")return e}var Sy=!1;if(Hr){var Gd;if(Hr){var Wd="oninput"in document;if(!Wd){var i0=document.createElement("div");i0.setAttribute("oninput","return;"),Wd=typeof i0.oninput=="function"}Gd=Wd}else Gd=!1;Sy=Gd&&(!document.documentMode||9<document.documentMode)}function r0(){Hl&&(Hl.detachEvent("onpropertychange",My),fu=Hl=null)}function My(n){if(n.propertyName==="value"&&ud(fu)){var e=[];yy(e,fu,n,m_(n)),ty(dT,e)}}function pT(n,e,t){n==="focusin"?(r0(),Hl=e,fu=t,Hl.attachEvent("onpropertychange",My)):n==="focusout"&&r0()}function mT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ud(fu)}function _T(n,e){if(n==="click")return ud(e)}function gT(n,e){if(n==="input"||n==="change")return ud(e)}function vT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var or=typeof Object.is=="function"?Object.is:vT;function du(n,e){if(or(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ep.call(e,r)||!or(n[r],e[r]))return!1}return!0}function s0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function o0(n,e){var t=s0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=s0(t)}}function Ey(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ey(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Ty(){for(var n=window,e=yf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yf(n.document)}return e}function T_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function xT(n){var e=Ty(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Ey(t.ownerDocument.documentElement,t)){if(i!==null&&T_(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=o0(t,s);var o=o0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yT=Hr&&"documentMode"in document&&11>=document.documentMode,ca=null,xp=null,Vl=null,yp=!1;function a0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yp||ca==null||ca!==yf(i)||(i=ca,"selectionStart"in i&&T_(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vl&&du(Vl,i)||(Vl=i,i=Cf(xp,"onSelect"),0<i.length&&(e=new S_("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ca)))}function Ju(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var fa={animationend:Ju("Animation","AnimationEnd"),animationiteration:Ju("Animation","AnimationIteration"),animationstart:Ju("Animation","AnimationStart"),transitionend:Ju("Transition","TransitionEnd")},Xd={},wy={};Hr&&(wy=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function cd(n){if(Xd[n])return Xd[n];if(!fa[n])return n;var e=fa[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in wy)return Xd[n]=e[t];return n}var Ay=cd("animationend"),Cy=cd("animationiteration"),Ry=cd("animationstart"),Py=cd("transitionend"),by=new Map,l0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zs(n,e){by.set(n,e),Oo(e,[n])}for(var Yd=0;Yd<l0.length;Yd++){var qd=l0[Yd],ST=qd.toLowerCase(),MT=qd[0].toUpperCase()+qd.slice(1);zs(ST,"on"+MT)}zs(Ay,"onAnimationEnd");zs(Cy,"onAnimationIteration");zs(Ry,"onAnimationStart");zs("dblclick","onDoubleClick");zs("focusin","onFocus");zs("focusout","onBlur");zs(Py,"onTransitionEnd");za("onMouseEnter",["mouseout","mouseover"]);za("onMouseLeave",["mouseout","mouseover"]);za("onPointerEnter",["pointerout","pointerover"]);za("onPointerLeave",["pointerout","pointerover"]);Oo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ET=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pl));function u0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,S1(i,e,void 0,n),n.currentTarget=null}function Dy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;u0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;u0(r,a,u),s=l}}}if(Mf)throw n=mp,Mf=!1,mp=null,n}function Rt(n,e){var t=e[wp];t===void 0&&(t=e[wp]=new Set);var i=n+"__bubble";t.has(i)||(Ly(e,n,2,!1),t.add(i))}function $d(n,e,t){var i=0;e&&(i|=4),Ly(t,n,i,e)}var ec="_reactListening"+Math.random().toString(36).slice(2);function hu(n){if(!n[ec]){n[ec]=!0,zx.forEach(function(t){t!=="selectionchange"&&(ET.has(t)||$d(t,!1,n),$d(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ec]||(e[ec]=!0,$d("selectionchange",!1,e))}}function Ly(n,e,t,i){switch(my(e)){case 1:var r=F1;break;case 4:r=k1;break;default:r=x_}t=r.bind(null,e,t,n),r=void 0,!pp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function jd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ao(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ty(function(){var u=s,c=m_(t),d=[];e:{var f=by.get(n);if(f!==void 0){var p=S_,_=n;switch(n){case"keypress":if(jc(t)===0)break e;case"keydown":case"keyup":p=J1;break;case"focusin":_="focus",p=Vd;break;case"focusout":_="blur",p=Vd;break;case"beforeblur":case"afterblur":p=Vd;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=H1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nT;break;case Ay:case Cy:case Ry:p=W1;break;case Py:p=rT;break;case"scroll":p=z1;break;case"wheel":p=oT;break;case"copy":case"cut":case"paste":p=Y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jg}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,h!==null&&(S=au(v,h),S!=null&&g.push(pu(v,S,x)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==dp&&(_=t.relatedTarget||t.fromElement)&&(ao(_)||_[Vr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?ao(_):null,_!==null&&(m=Fo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=Zg,S="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=Jg,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:da(p),x=_==null?f:da(_),f=new g(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,ao(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=Bo(x))v++;for(x=0,S=h;S;S=Bo(S))x++;for(;0<v-x;)g=Bo(g),v--;for(;0<x-v;)h=Bo(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=Bo(g),h=Bo(h)}g=null}else g=null;p!==null&&c0(d,f,p,g,!1),_!==null&&m!==null&&c0(d,m,_,g,!0)}}e:{if(f=u?da(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=hT;else if(n0(f))if(Sy)C=gT;else{C=mT;var A=pT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=_T);if(C&&(C=C(n,u))){yy(d,C,t,c);break e}A&&A(n,f,u),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&ap(f,"number",f.value)}switch(A=u?da(u):window,n){case"focusin":(n0(A)||A.contentEditable==="true")&&(ca=A,xp=u,Vl=null);break;case"focusout":Vl=xp=ca=null;break;case"mousedown":yp=!0;break;case"contextmenu":case"mouseup":case"dragend":yp=!1,a0(d,t,c);break;case"selectionchange":if(yT)break;case"keydown":case"keyup":a0(d,t,c)}var M;if(E_)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ua?vy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(gy&&t.locale!=="ko"&&(ua||R!=="onCompositionStart"?R==="onCompositionEnd"&&ua&&(M=_y()):(ds=c,y_="value"in ds?ds.value:ds.textContent,ua=!0)),A=Cf(u,R),0<A.length&&(R=new Qg(R,n,null,t,c),d.push({event:R,listeners:A}),M?R.data=M:(M=xy(t),M!==null&&(R.data=M)))),(M=lT?uT(n,t):cT(n,t))&&(u=Cf(u,"onBeforeInput"),0<u.length&&(c=new Qg("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}Dy(d,e)})}function pu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Cf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=au(n,t),s!=null&&i.unshift(pu(n,s,r)),s=au(n,e),s!=null&&i.push(pu(n,s,r))),n=n.return}return i}function Bo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function c0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=au(t,s),l!=null&&o.unshift(pu(t,l,a))):r||(l=au(t,s),l!=null&&o.push(pu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var TT=/\r\n?/g,wT=/\u0000|\uFFFD/g;function f0(n){return(typeof n=="string"?n:""+n).replace(TT,`
`).replace(wT,"")}function tc(n,e,t){if(e=f0(e),f0(n)!==e&&t)throw Error(le(425))}function Rf(){}var Sp=null,Mp=null;function Ep(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tp=typeof setTimeout=="function"?setTimeout:void 0,AT=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,CT=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(n){return d0.resolve(null).then(n).catch(RT)}:Tp;function RT(n){setTimeout(function(){throw n})}function Kd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);cu(e)}function Ms(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function h0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ol=Math.random().toString(36).slice(2),hr="__reactFiber$"+ol,mu="__reactProps$"+ol,Vr="__reactContainer$"+ol,wp="__reactEvents$"+ol,PT="__reactListeners$"+ol,bT="__reactHandles$"+ol;function ao(n){var e=n[hr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vr]||t[hr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=h0(n);n!==null;){if(t=n[hr])return t;n=h0(n)}return e}n=t,t=n.parentNode}return null}function Ou(n){return n=n[hr]||n[Vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function da(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(le(33))}function fd(n){return n[mu]||null}var Ap=[],ha=-1;function Bs(n){return{current:n}}function bt(n){0>ha||(n.current=Ap[ha],Ap[ha]=null,ha--)}function wt(n,e){ha++,Ap[ha]=n.current,n.current=e}var Is={},Ln=Bs(Is),Kn=Bs(!1),Ao=Is;function Ba(n,e){var t=n.type.contextTypes;if(!t)return Is;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Zn(n){return n=n.childContextTypes,n!=null}function Pf(){bt(Kn),bt(Ln)}function p0(n,e,t){if(Ln.current!==Is)throw Error(le(168));wt(Ln,e),wt(Kn,t)}function Iy(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,p1(n)||"Unknown",r));return Bt({},t,i)}function bf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Is,Ao=Ln.current,wt(Ln,n),wt(Kn,Kn.current),!0}function m0(n,e,t){var i=n.stateNode;if(!i)throw Error(le(169));t?(n=Iy(n,e,Ao),i.__reactInternalMemoizedMergedChildContext=n,bt(Kn),bt(Ln),wt(Ln,n)):bt(Kn),wt(Kn,t)}var Pr=null,dd=!1,Zd=!1;function Uy(n){Pr===null?Pr=[n]:Pr.push(n)}function DT(n){dd=!0,Uy(n)}function Hs(){if(!Zd&&Pr!==null){Zd=!0;var n=0,e=vt;try{var t=Pr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pr=null,dd=!1}catch(r){throw Pr!==null&&(Pr=Pr.slice(n+1)),sy(__,Hs),r}finally{vt=e,Zd=!1}}return null}var pa=[],ma=0,Df=null,Lf=0,Ii=[],Ui=0,Co=null,Ir=1,Ur="";function Qs(n,e){pa[ma++]=Lf,pa[ma++]=Df,Df=n,Lf=e}function Ny(n,e,t){Ii[Ui++]=Ir,Ii[Ui++]=Ur,Ii[Ui++]=Co,Co=n;var i=Ir;n=Ur;var r=32-rr(i)-1;i&=~(1<<r),t+=1;var s=32-rr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ir=1<<32-rr(e)+r|t<<r|i,Ur=s+n}else Ir=1<<s|t<<r|i,Ur=n}function w_(n){n.return!==null&&(Qs(n,1),Ny(n,1,0))}function A_(n){for(;n===Df;)Df=pa[--ma],pa[ma]=null,Lf=pa[--ma],pa[ma]=null;for(;n===Co;)Co=Ii[--Ui],Ii[Ui]=null,Ur=Ii[--Ui],Ii[Ui]=null,Ir=Ii[--Ui],Ii[Ui]=null}var Si=null,vi=null,It=!1,er=null;function Oy(n,e){var t=ki(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function _0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Si=n,vi=Ms(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Si=n,vi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Co!==null?{id:Ir,overflow:Ur}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=ki(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Si=n,vi=null,!0):!1;default:return!1}}function Cp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rp(n){if(It){var e=vi;if(e){var t=e;if(!_0(n,e)){if(Cp(n))throw Error(le(418));e=Ms(t.nextSibling);var i=Si;e&&_0(n,e)?Oy(i,t):(n.flags=n.flags&-4097|2,It=!1,Si=n)}}else{if(Cp(n))throw Error(le(418));n.flags=n.flags&-4097|2,It=!1,Si=n}}}function g0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Si=n}function nc(n){if(n!==Si)return!1;if(!It)return g0(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ep(n.type,n.memoizedProps)),e&&(e=vi)){if(Cp(n))throw Fy(),Error(le(418));for(;e;)Oy(n,e),e=Ms(e.nextSibling)}if(g0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(le(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){vi=Ms(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}vi=null}}else vi=Si?Ms(n.stateNode.nextSibling):null;return!0}function Fy(){for(var n=vi;n;)n=Ms(n.nextSibling)}function Ha(){vi=Si=null,It=!1}function C_(n){er===null?er=[n]:er.push(n)}var LT=Kr.ReactCurrentBatchConfig;function pl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(le(309));var i=t.stateNode}if(!i)throw Error(le(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(le(284));if(!t._owner)throw Error(le(290,n))}return n}function ic(n,e){throw n=Object.prototype.toString.call(e),Error(le(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function v0(n){var e=n._init;return e(n._payload)}function ky(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=As(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,S){return v===null||v.tag!==6?(v=rh(x,h.mode,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,S){var C=x.type;return C===la?c(h,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===as&&v0(C)===v.type)?(S=r(v,x.props),S.ref=pl(h,v,x),S.return=h,S):(S=nf(x.type,x.key,x.props,null,h.mode,S),S.ref=pl(h,v,x),S.return=h,S)}function u(h,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=sh(x,h.mode,S),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,S,C){return v===null||v.tag!==7?(v=go(x,h.mode,S,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=rh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yu:return x=nf(v.type,v.key,v.props,null,h.mode,x),x.ref=pl(h,null,v),x.return=h,x;case aa:return v=sh(v,h.mode,x),v.return=h,v;case as:var S=v._init;return d(h,S(v._payload),x)}if(Cl(v)||ul(v))return v=go(v,h.mode,x,null),v.return=h,v;ic(h,v)}return null}function f(h,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yu:return x.key===C?l(h,v,x,S):null;case aa:return x.key===C?u(h,v,x,S):null;case as:return C=x._init,f(h,v,C(x._payload),S)}if(Cl(x)||ul(x))return C!==null?null:c(h,v,x,S,null);ic(h,x)}return null}function p(h,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(x)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Yu:return h=h.get(S.key===null?x:S.key)||null,l(v,h,S,C);case aa:return h=h.get(S.key===null?x:S.key)||null,u(v,h,S,C);case as:var A=S._init;return p(h,v,x,A(S._payload),C)}if(Cl(S)||ul(S))return h=h.get(x)||null,c(v,h,S,C,null);ic(v,S)}return null}function _(h,v,x,S){for(var C=null,A=null,M=v,R=v=0,I=null;M!==null&&R<x.length;R++){M.index>R?(I=M,M=null):I=M.sibling;var y=f(h,M,x[R],S);if(y===null){M===null&&(M=I);break}n&&M&&y.alternate===null&&e(h,M),v=s(y,v,R),A===null?C=y:A.sibling=y,A=y,M=I}if(R===x.length)return t(h,M),It&&Qs(h,R),C;if(M===null){for(;R<x.length;R++)M=d(h,x[R],S),M!==null&&(v=s(M,v,R),A===null?C=M:A.sibling=M,A=M);return It&&Qs(h,R),C}for(M=i(h,M);R<x.length;R++)I=p(M,h,R,x[R],S),I!==null&&(n&&I.alternate!==null&&M.delete(I.key===null?R:I.key),v=s(I,v,R),A===null?C=I:A.sibling=I,A=I);return n&&M.forEach(function(T){return e(h,T)}),It&&Qs(h,R),C}function g(h,v,x,S){var C=ul(x);if(typeof C!="function")throw Error(le(150));if(x=C.call(x),x==null)throw Error(le(151));for(var A=C=null,M=v,R=v=0,I=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(I=M,M=null):I=M.sibling;var T=f(h,M,y.value,S);if(T===null){M===null&&(M=I);break}n&&M&&T.alternate===null&&e(h,M),v=s(T,v,R),A===null?C=T:A.sibling=T,A=T,M=I}if(y.done)return t(h,M),It&&Qs(h,R),C;if(M===null){for(;!y.done;R++,y=x.next())y=d(h,y.value,S),y!==null&&(v=s(y,v,R),A===null?C=y:A.sibling=y,A=y);return It&&Qs(h,R),C}for(M=i(h,M);!y.done;R++,y=x.next())y=p(M,h,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),v=s(y,v,R),A===null?C=y:A.sibling=y,A=y);return n&&M.forEach(function(U){return e(h,U)}),It&&Qs(h,R),C}function m(h,v,x,S){if(typeof x=="object"&&x!==null&&x.type===la&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Yu:e:{for(var C=x.key,A=v;A!==null;){if(A.key===C){if(C=x.type,C===la){if(A.tag===7){t(h,A.sibling),v=r(A,x.props.children),v.return=h,h=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===as&&v0(C)===A.type){t(h,A.sibling),v=r(A,x.props),v.ref=pl(h,A,x),v.return=h,h=v;break e}t(h,A);break}else e(h,A);A=A.sibling}x.type===la?(v=go(x.props.children,h.mode,S,x.key),v.return=h,h=v):(S=nf(x.type,x.key,x.props,null,h.mode,S),S.ref=pl(h,v,x),S.return=h,h=S)}return o(h);case aa:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=sh(x,h.mode,S),v.return=h,h=v}return o(h);case as:return A=x._init,m(h,v,A(x._payload),S)}if(Cl(x))return _(h,v,x,S);if(ul(x))return g(h,v,x,S);ic(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=rh(x,h.mode,S),v.return=h,h=v),o(h)):t(h,v)}return m}var Va=ky(!0),zy=ky(!1),If=Bs(null),Uf=null,_a=null,R_=null;function P_(){R_=_a=Uf=null}function b_(n){var e=If.current;bt(If),n._currentValue=e}function Pp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ca(n,e){Uf=n,R_=_a=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(jn=!0),n.firstContext=null)}function Wi(n){var e=n._currentValue;if(R_!==n)if(n={context:n,memoizedValue:e,next:null},_a===null){if(Uf===null)throw Error(le(308));_a=n,Uf.dependencies={lanes:0,firstContext:n}}else _a=_a.next=n;return e}var lo=null;function D_(n){lo===null?lo=[n]:lo.push(n)}function By(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,D_(e)):(t.next=r.next,r.next=t),e.interleaved=t,Gr(n,i)}function Gr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ls=!1;function L_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zr(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Gr(n,t)}return r=i.interleaved,r===null?(e.next=e,D_(i)):(e.next=r.next,r.next=e),i.interleaved=e,Gr(n,t)}function Kc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,g_(n,t)}}function x0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Nf(n,e,t,i){var r=n.updateQueue;ls=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Bt({},d,f);break e;case 2:ls=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Po|=o,n.lanes=o,n.memoizedState=d}}function y0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var Fu={},vr=Bs(Fu),_u=Bs(Fu),gu=Bs(Fu);function uo(n){if(n===Fu)throw Error(le(174));return n}function I_(n,e){switch(wt(gu,e),wt(_u,n),wt(vr,Fu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:up(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=up(e,n)}bt(vr),wt(vr,e)}function Ga(){bt(vr),bt(_u),bt(gu)}function Vy(n){uo(gu.current);var e=uo(vr.current),t=up(e,n.type);e!==t&&(wt(_u,n),wt(vr,t))}function U_(n){_u.current===n&&(bt(vr),bt(_u))}var Ot=Bs(0);function Of(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qd=[];function N_(){for(var n=0;n<Qd.length;n++)Qd[n]._workInProgressVersionPrimary=null;Qd.length=0}var Zc=Kr.ReactCurrentDispatcher,Jd=Kr.ReactCurrentBatchConfig,Ro=0,zt=null,nn=null,dn=null,Ff=!1,Gl=!1,vu=0,IT=0;function Sn(){throw Error(le(321))}function O_(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!or(n[t],e[t]))return!1;return!0}function F_(n,e,t,i,r,s){if(Ro=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zc.current=n===null||n.memoizedState===null?FT:kT,n=t(i,r),Gl){s=0;do{if(Gl=!1,vu=0,25<=s)throw Error(le(301));s+=1,dn=nn=null,e.updateQueue=null,Zc.current=zT,n=t(i,r)}while(Gl)}if(Zc.current=kf,e=nn!==null&&nn.next!==null,Ro=0,dn=nn=zt=null,Ff=!1,e)throw Error(le(300));return n}function k_(){var n=vu!==0;return vu=0,n}function lr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?zt.memoizedState=dn=n:dn=dn.next=n,dn}function Xi(){if(nn===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var e=dn===null?zt.memoizedState:dn.next;if(e!==null)dn=e,nn=n;else{if(n===null)throw Error(le(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},dn===null?zt.memoizedState=dn=n:dn=dn.next=n}return dn}function xu(n,e){return typeof e=="function"?e(n):e}function eh(n){var e=Xi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=nn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ro&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,zt.lanes|=c,Po|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,or(i,e.memoizedState)||(jn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,zt.lanes|=s,Po|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function th(n){var e=Xi(),t=e.queue;if(t===null)throw Error(le(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);or(s,e.memoizedState)||(jn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Gy(){}function Wy(n,e){var t=zt,i=Xi(),r=e(),s=!or(i.memoizedState,r);if(s&&(i.memoizedState=r,jn=!0),i=i.queue,z_(qy.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||dn!==null&&dn.memoizedState.tag&1){if(t.flags|=2048,yu(9,Yy.bind(null,t,i,r,e),void 0,null),hn===null)throw Error(le(349));Ro&30||Xy(t,e,r)}return r}function Xy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Yy(n,e,t,i){e.value=t,e.getSnapshot=i,$y(e)&&jy(n)}function qy(n,e,t){return t(function(){$y(e)&&jy(n)})}function $y(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!or(n,t)}catch{return!0}}function jy(n){var e=Gr(n,1);e!==null&&sr(e,n,1,-1)}function S0(n){var e=lr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:n},e.queue=n,n=n.dispatch=OT.bind(null,zt,n),[e.memoizedState,n]}function yu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Ky(){return Xi().memoizedState}function Qc(n,e,t,i){var r=lr();zt.flags|=n,r.memoizedState=yu(1|e,t,void 0,i===void 0?null:i)}function hd(n,e,t,i){var r=Xi();i=i===void 0?null:i;var s=void 0;if(nn!==null){var o=nn.memoizedState;if(s=o.destroy,i!==null&&O_(i,o.deps)){r.memoizedState=yu(e,t,s,i);return}}zt.flags|=n,r.memoizedState=yu(1|e,t,s,i)}function M0(n,e){return Qc(8390656,8,n,e)}function z_(n,e){return hd(2048,8,n,e)}function Zy(n,e){return hd(4,2,n,e)}function Qy(n,e){return hd(4,4,n,e)}function Jy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function eS(n,e,t){return t=t!=null?t.concat([n]):null,hd(4,4,Jy.bind(null,e,n),t)}function B_(){}function tS(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&O_(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function nS(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&O_(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function iS(n,e,t){return Ro&21?(or(t,e)||(t=ly(),zt.lanes|=t,Po|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=t)}function UT(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=Jd.transition;Jd.transition={};try{n(!1),e()}finally{vt=t,Jd.transition=i}}function rS(){return Xi().memoizedState}function NT(n,e,t){var i=ws(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},sS(n))oS(e,t);else if(t=By(n,e,t,i),t!==null){var r=Hn();sr(t,n,i,r),aS(t,e,i)}}function OT(n,e,t){var i=ws(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(sS(n))oS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,or(a,o)){var l=e.interleaved;l===null?(r.next=r,D_(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=By(n,e,r,i),t!==null&&(r=Hn(),sr(t,n,i,r),aS(t,e,i))}}function sS(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function oS(n,e){Gl=Ff=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function aS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,g_(n,t)}}var kf={readContext:Wi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},FT={readContext:Wi,useCallback:function(n,e){return lr().memoizedState=[n,e===void 0?null:e],n},useContext:Wi,useEffect:M0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Qc(4194308,4,Jy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Qc(4194308,4,n,e)},useInsertionEffect:function(n,e){return Qc(4,2,n,e)},useMemo:function(n,e){var t=lr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=lr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=NT.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=lr();return n={current:n},e.memoizedState=n},useState:S0,useDebugValue:B_,useDeferredValue:function(n){return lr().memoizedState=n},useTransition:function(){var n=S0(!1),e=n[0];return n=UT.bind(null,n[1]),lr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=lr();if(It){if(t===void 0)throw Error(le(407));t=t()}else{if(t=e(),hn===null)throw Error(le(349));Ro&30||Xy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,M0(qy.bind(null,i,s,n),[n]),i.flags|=2048,yu(9,Yy.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=lr(),e=hn.identifierPrefix;if(It){var t=Ur,i=Ir;t=(i&~(1<<32-rr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=vu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=IT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},kT={readContext:Wi,useCallback:tS,useContext:Wi,useEffect:z_,useImperativeHandle:eS,useInsertionEffect:Zy,useLayoutEffect:Qy,useMemo:nS,useReducer:eh,useRef:Ky,useState:function(){return eh(xu)},useDebugValue:B_,useDeferredValue:function(n){var e=Xi();return iS(e,nn.memoizedState,n)},useTransition:function(){var n=eh(xu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Gy,useSyncExternalStore:Wy,useId:rS,unstable_isNewReconciler:!1},zT={readContext:Wi,useCallback:tS,useContext:Wi,useEffect:z_,useImperativeHandle:eS,useInsertionEffect:Zy,useLayoutEffect:Qy,useMemo:nS,useReducer:th,useRef:Ky,useState:function(){return th(xu)},useDebugValue:B_,useDeferredValue:function(n){var e=Xi();return nn===null?e.memoizedState=n:iS(e,nn.memoizedState,n)},useTransition:function(){var n=th(xu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Gy,useSyncExternalStore:Wy,useId:rS,unstable_isNewReconciler:!1};function Qi(n,e){if(n&&n.defaultProps){e=Bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function bp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var pd={isMounted:function(n){return(n=n._reactInternals)?Fo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Hn(),r=ws(n),s=zr(i,r);s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(sr(e,n,r,i),Kc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Hn(),r=ws(n),s=zr(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(sr(e,n,r,i),Kc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Hn(),i=ws(n),r=zr(t,i);r.tag=2,e!=null&&(r.callback=e),e=Es(n,r,i),e!==null&&(sr(e,n,i,t),Kc(e,n,i))}};function E0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!du(t,i)||!du(r,s):!0}function lS(n,e,t){var i=!1,r=Is,s=e.contextType;return typeof s=="object"&&s!==null?s=Wi(s):(r=Zn(e)?Ao:Ln.current,i=e.contextTypes,s=(i=i!=null)?Ba(n,r):Is),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function T0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&pd.enqueueReplaceState(e,e.state,null)}function Dp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},L_(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wi(s):(s=Zn(e)?Ao:Ln.current,r.context=Ba(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pd.enqueueReplaceState(r,r.state,null),Nf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Wa(n,e){try{var t="",i=e;do t+=h1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function nh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Lp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var BT=typeof WeakMap=="function"?WeakMap:Map;function uS(n,e,t){t=zr(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Bf||(Bf=!0,Vp=i),Lp(n,e)},t}function cS(n,e,t){t=zr(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Lp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Lp(n,e),typeof i!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function w0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new BT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=ew.bind(null,n,e,t),e.then(n,n))}function A0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function C0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=zr(-1,1),e.tag=2,Es(t,e,1))),t.lanes|=1),n)}var HT=Kr.ReactCurrentOwner,jn=!1;function Fn(n,e,t,i){e.child=n===null?zy(e,null,t,i):Va(e,n.child,t,i)}function R0(n,e,t,i,r){t=t.render;var s=e.ref;return Ca(e,r),i=F_(n,e,t,i,s,r),t=k_(),n!==null&&!jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(It&&t&&w_(e),e.flags|=1,Fn(n,e,i,r),e.child)}function P0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!$_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,fS(n,e,s,i,r)):(n=nf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:du,t(o,i)&&n.ref===e.ref)return Wr(n,e,r)}return e.flags|=1,n=As(s,i),n.ref=e.ref,n.return=e,e.child=n}function fS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(du(s,i)&&n.ref===e.ref)if(jn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(jn=!0);else return e.lanes=n.lanes,Wr(n,e,r)}return Ip(n,e,t,i,r)}function dS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(va,di),di|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(va,di),di|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(va,di),di|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(va,di),di|=i;return Fn(n,e,r,t),e.child}function hS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ip(n,e,t,i,r){var s=Zn(t)?Ao:Ln.current;return s=Ba(e,s),Ca(e,r),t=F_(n,e,t,i,s,r),i=k_(),n!==null&&!jn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Wr(n,e,r)):(It&&i&&w_(e),e.flags|=1,Fn(n,e,t,r),e.child)}function b0(n,e,t,i,r){if(Zn(t)){var s=!0;bf(e)}else s=!1;if(Ca(e,r),e.stateNode===null)Jc(n,e),lS(e,t,i),Dp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Wi(u):(u=Zn(t)?Ao:Ln.current,u=Ba(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&T0(e,o,i,u),ls=!1;var f=e.memoizedState;o.state=f,Nf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kn.current||ls?(typeof c=="function"&&(bp(e,t,c,i),l=e.memoizedState),(a=ls||E0(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Hy(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Qi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Wi(l):(l=Zn(t)?Ao:Ln.current,l=Ba(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&T0(e,o,i,l),ls=!1,f=e.memoizedState,o.state=f,Nf(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Kn.current||ls?(typeof p=="function"&&(bp(e,t,p,i),_=e.memoizedState),(u=ls||E0(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Up(n,e,t,i,s,r)}function Up(n,e,t,i,r,s){hS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&m0(e,t,!1),Wr(n,e,s);i=e.stateNode,HT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Va(e,n.child,null,s),e.child=Va(e,null,a,s)):Fn(n,e,a,s),e.memoizedState=i.state,r&&m0(e,t,!0),e.child}function pS(n){var e=n.stateNode;e.pendingContext?p0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&p0(n,e.context,!1),I_(n,e.containerInfo)}function D0(n,e,t,i,r){return Ha(),C_(r),e.flags|=256,Fn(n,e,t,i),e.child}var Np={dehydrated:null,treeContext:null,retryLane:0};function Op(n){return{baseLanes:n,cachePool:null,transitions:null}}function mS(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(Ot,r&1),n===null)return Rp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gd(o,i,0,null),n=go(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Op(t),e.memoizedState=Np,n):H_(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=As(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=As(a,s):(s=go(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Op(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Np,i}return s=n.child,n=s.sibling,i=As(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function H_(n,e){return e=gd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function rc(n,e,t,i){return i!==null&&C_(i),Va(e,n.child,null,t),n=H_(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function VT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=nh(Error(le(422))),rc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=gd({mode:"visible",children:i.children},r,0,null),s=go(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Va(e,n.child,null,o),e.child.memoizedState=Op(o),e.memoizedState=Np,s);if(!(e.mode&1))return rc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(le(419)),i=nh(s,i,void 0),rc(n,e,o,i)}if(a=(o&n.childLanes)!==0,jn||a){if(i=hn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Gr(n,r),sr(i,n,r,-1))}return q_(),i=nh(Error(le(421))),rc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=tw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,vi=Ms(r.nextSibling),Si=e,It=!0,er=null,n!==null&&(Ii[Ui++]=Ir,Ii[Ui++]=Ur,Ii[Ui++]=Co,Ir=n.id,Ur=n.overflow,Co=e),e=H_(e,i.children),e.flags|=4096,e)}function L0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pp(n.return,e,t)}function ih(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function _S(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&L0(n,t,e);else if(n.tag===19)L0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Of(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ih(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Of(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ih(e,!0,t,null,s);break;case"together":ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Wr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Po|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(le(153));if(e.child!==null){for(n=e.child,t=As(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=As(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function GT(n,e,t){switch(e.tag){case 3:pS(e),Ha();break;case 5:Vy(e);break;case 1:Zn(e.type)&&bf(e);break;case 4:I_(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(If,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?mS(n,e,t):(wt(Ot,Ot.current&1),n=Wr(n,e,t),n!==null?n.sibling:null);wt(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return _S(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,dS(n,e,t)}return Wr(n,e,t)}var gS,Fp,vS,xS;gS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fp=function(){};vS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,uo(vr.current);var s=null;switch(t){case"input":r=sp(n,r),i=sp(n,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=lp(n,r),i=lp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Rf)}cp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(su.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(su.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};xS=function(n,e,t,i){t!==i&&(e.flags|=4)};function ml(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function WT(n,e,t){var i=e.pendingProps;switch(A_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return Zn(e.type)&&Pf(),Mn(e),null;case 3:return i=e.stateNode,Ga(),bt(Kn),bt(Ln),N_(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(nc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,er!==null&&(Xp(er),er=null))),Fp(n,e),Mn(e),null;case 5:U_(e);var r=uo(gu.current);if(t=e.type,n!==null&&e.stateNode!=null)vS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return Mn(e),null}if(n=uo(vr.current),nc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[hr]=e,i[mu]=s,n=(e.mode&1)!==0,t){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(r=0;r<Pl.length;r++)Rt(Pl[r],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Hg(i,s),Rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Rt("invalid",i);break;case"textarea":Gg(i,s),Rt("invalid",i)}cp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tc(i.textContent,a,n),r=["children",""+a]):su.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Rt("scroll",i)}switch(t){case"input":qu(i),Vg(i,s,!0);break;case"textarea":qu(i),Wg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=qx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[hr]=e,n[mu]=i,gS(n,e,!1,!1),e.stateNode=n;e:{switch(o=fp(t,i),t){case"dialog":Rt("cancel",n),Rt("close",n),r=i;break;case"iframe":case"object":case"embed":Rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Pl.length;r++)Rt(Pl[r],n);r=i;break;case"source":Rt("error",n),r=i;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),r=i;break;case"details":Rt("toggle",n),r=i;break;case"input":Hg(n,i),r=sp(n,i),Rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),Rt("invalid",n);break;case"textarea":Gg(n,i),r=lp(n,i),Rt("invalid",n);break;default:r=i}cp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&$x(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ou(n,l):typeof l=="number"&&ou(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(su.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Rt("scroll",n):l!=null&&f_(n,s,l,o))}switch(t){case"input":qu(n),Vg(n,i,!1);break;case"textarea":qu(n),Wg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ls(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ea(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ea(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Rf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)xS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(t=uo(gu.current),uo(vr.current),nc(e)){if(i=e.stateNode,t=e.memoizedProps,i[hr]=e,(s=i.nodeValue!==t)&&(n=Si,n!==null))switch(n.tag){case 3:tc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[hr]=e,e.stateNode=i}return Mn(e),null;case 13:if(bt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&vi!==null&&e.mode&1&&!(e.flags&128))Fy(),Ha(),e.flags|=98560,s=!1;else if(s=nc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[hr]=e}else Ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else er!==null&&(Xp(er),er=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?sn===0&&(sn=3):q_())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return Ga(),Fp(n,e),n===null&&hu(e.stateNode.containerInfo),Mn(e),null;case 10:return b_(e.type._context),Mn(e),null;case 17:return Zn(e.type)&&Pf(),Mn(e),null;case 19:if(bt(Ot),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ml(s,!1);else{if(sn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Of(n),o!==null){for(e.flags|=128,ml(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&qt()>Xa&&(e.flags|=128,i=!0,ml(s,!1),e.lanes=4194304)}else{if(!i)if(n=Of(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),ml(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return Mn(e),null}else 2*qt()-s.renderingStartTime>Xa&&t!==1073741824&&(e.flags|=128,i=!0,ml(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qt(),e.sibling=null,t=Ot.current,wt(Ot,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return Y_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?di&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function XT(n,e){switch(A_(e),e.tag){case 1:return Zn(e.type)&&Pf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ga(),bt(Kn),bt(Ln),N_(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return U_(e),null;case 13:if(bt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Ha()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(Ot),null;case 4:return Ga(),null;case 10:return b_(e.type._context),null;case 22:case 23:return Y_(),null;case 24:return null;default:return null}}var sc=!1,Rn=!1,YT=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ga(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function kp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var I0=!1;function qT(n,e){if(Sp=wf,n=Ty(),T_(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Mp={focusedElem:n,selectionRange:t},wf=!1,Ee=e;Ee!==null;)if(e=Ee,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Ee=n;else for(;Ee!==null;){e=Ee;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Qi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(S){Ht(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}return _=I0,I0=!1,_}function Wl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&kp(e,t,s)}r=r.next}while(r!==i)}}function md(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function zp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function yS(n){var e=n.alternate;e!==null&&(n.alternate=null,yS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[hr],delete e[mu],delete e[wp],delete e[PT],delete e[bT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function SS(n){return n.tag===5||n.tag===3||n.tag===4}function U0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||SS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Rf));else if(i!==4&&(n=n.child,n!==null))for(Bp(n,e,t),n=n.sibling;n!==null;)Bp(n,e,t),n=n.sibling}function Hp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hp(n,e,t),n=n.sibling;n!==null;)Hp(n,e,t),n=n.sibling}var _n=null,Ji=!1;function Jr(n,e,t){for(t=t.child;t!==null;)MS(n,e,t),t=t.sibling}function MS(n,e,t){if(gr&&typeof gr.onCommitFiberUnmount=="function")try{gr.onCommitFiberUnmount(ad,t)}catch{}switch(t.tag){case 5:Rn||ga(t,e);case 6:var i=_n,r=Ji;_n=null,Jr(n,e,t),_n=i,Ji=r,_n!==null&&(Ji?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(Ji?(n=_n,t=t.stateNode,n.nodeType===8?Kd(n.parentNode,t):n.nodeType===1&&Kd(n,t),cu(n)):Kd(_n,t.stateNode));break;case 4:i=_n,r=Ji,_n=t.stateNode.containerInfo,Ji=!0,Jr(n,e,t),_n=i,Ji=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kp(t,e,o),r=r.next}while(r!==i)}Jr(n,e,t);break;case 1:if(!Rn&&(ga(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}Jr(n,e,t);break;case 21:Jr(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,Jr(n,e,t),Rn=i):Jr(n,e,t);break;default:Jr(n,e,t)}}function N0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new YT),e.forEach(function(i){var r=nw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function qi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,Ji=!1;break e;case 3:_n=a.stateNode.containerInfo,Ji=!0;break e;case 4:_n=a.stateNode.containerInfo,Ji=!0;break e}a=a.return}if(_n===null)throw Error(le(160));MS(s,o,r),_n=null,Ji=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ES(e,n),e=e.sibling}function ES(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(qi(e,n),ar(n),i&4){try{Wl(3,n,n.return),md(3,n)}catch(g){Ht(n,n.return,g)}try{Wl(5,n,n.return)}catch(g){Ht(n,n.return,g)}}break;case 1:qi(e,n),ar(n),i&512&&t!==null&&ga(t,t.return);break;case 5:if(qi(e,n),ar(n),i&512&&t!==null&&ga(t,t.return),n.flags&32){var r=n.stateNode;try{ou(r,"")}catch(g){Ht(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Xx(r,s),fp(a,o);var u=fp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Kx(r,d):c==="dangerouslySetInnerHTML"?$x(r,d):c==="children"?ou(r,d):f_(r,c,d,u)}switch(a){case"input":op(r,s);break;case"textarea":Yx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ea(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ea(r,!!s.multiple,s.defaultValue,!0):Ea(r,!!s.multiple,s.multiple?[]:"",!1))}r[mu]=s}catch(g){Ht(n,n.return,g)}}break;case 6:if(qi(e,n),ar(n),i&4){if(n.stateNode===null)throw Error(le(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ht(n,n.return,g)}}break;case 3:if(qi(e,n),ar(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{cu(e.containerInfo)}catch(g){Ht(n,n.return,g)}break;case 4:qi(e,n),ar(n);break;case 13:qi(e,n),ar(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(W_=qt())),i&4&&N0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,qi(e,n),Rn=u):qi(e,n),ar(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Ee=n,c=n.child;c!==null;){for(d=Ee=c;Ee!==null;){switch(f=Ee,p=f.child,f.tag){case 0:case 11:case 14:case 15:Wl(4,f,f.return);break;case 1:ga(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Ht(i,t,g)}}break;case 5:ga(f,f.return);break;case 22:if(f.memoizedState!==null){F0(d);continue}}p!==null?(p.return=f,Ee=p):F0(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jx("display",o))}catch(g){Ht(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Ht(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qi(e,n),ar(n),i&4&&N0(n);break;case 21:break;default:qi(e,n),ar(n)}}function ar(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(SS(t)){var i=t;break e}t=t.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ou(r,""),i.flags&=-33);var s=U0(n);Hp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=U0(n);Bp(n,a,o);break;default:throw Error(le(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $T(n,e,t){Ee=n,TS(n)}function TS(n,e,t){for(var i=(n.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=sc;var u=Rn;if(sc=o,(Rn=l)&&!u)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?k0(r):l!==null?(l.return=o,Ee=l):k0(r);for(;s!==null;)Ee=s,TS(s),s=s.sibling;Ee=r,sc=a,Rn=u}O0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):O0(n)}}function O0(n){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||md(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&y0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}y0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&cu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Rn||e.flags&512&&zp(e)}catch(f){Ht(e,e.return,f)}}if(e===n){Ee=null;break}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function F0(n){for(;Ee!==null;){var e=Ee;if(e===n){Ee=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Ee=t;break}Ee=e.return}}function k0(n){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{md(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{zp(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{zp(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var jT=Math.ceil,zf=Kr.ReactCurrentDispatcher,V_=Kr.ReactCurrentOwner,Vi=Kr.ReactCurrentBatchConfig,ft=0,hn=null,en=null,vn=0,di=0,va=Bs(0),sn=0,Su=null,Po=0,_d=0,G_=0,Xl=null,Yn=null,W_=0,Xa=1/0,Cr=null,Bf=!1,Vp=null,Ts=null,oc=!1,hs=null,Hf=0,Yl=0,Gp=null,ef=-1,tf=0;function Hn(){return ft&6?qt():ef!==-1?ef:ef=qt()}function ws(n){return n.mode&1?ft&2&&vn!==0?vn&-vn:LT.transition!==null?(tf===0&&(tf=ly()),tf):(n=vt,n!==0||(n=window.event,n=n===void 0?16:my(n.type)),n):1}function sr(n,e,t,i){if(50<Yl)throw Yl=0,Gp=null,Error(le(185));Uu(n,t,i),(!(ft&2)||n!==hn)&&(n===hn&&(!(ft&2)&&(_d|=t),sn===4&&cs(n,vn)),Qn(n,i),t===1&&ft===0&&!(e.mode&1)&&(Xa=qt()+500,dd&&Hs()))}function Qn(n,e){var t=n.callbackNode;L1(n,e);var i=Tf(n,n===hn?vn:0);if(i===0)t!==null&&qg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&qg(t),e===1)n.tag===0?DT(z0.bind(null,n)):Uy(z0.bind(null,n)),CT(function(){!(ft&6)&&Hs()}),t=null;else{switch(uy(i)){case 1:t=__;break;case 4:t=oy;break;case 16:t=Ef;break;case 536870912:t=ay;break;default:t=Ef}t=LS(t,wS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function wS(n,e){if(ef=-1,tf=0,ft&6)throw Error(le(327));var t=n.callbackNode;if(Ra()&&n.callbackNode!==t)return null;var i=Tf(n,n===hn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Vf(n,i);else{e=i;var r=ft;ft|=2;var s=CS();(hn!==n||vn!==e)&&(Cr=null,Xa=qt()+500,_o(n,e));do try{QT();break}catch(a){AS(n,a)}while(!0);P_(),zf.current=s,ft=r,en!==null?e=0:(hn=null,vn=0,e=sn)}if(e!==0){if(e===2&&(r=_p(n),r!==0&&(i=r,e=Wp(n,r))),e===1)throw t=Su,_o(n,0),cs(n,i),Qn(n,qt()),t;if(e===6)cs(n,i);else{if(r=n.current.alternate,!(i&30)&&!KT(r)&&(e=Vf(n,i),e===2&&(s=_p(n),s!==0&&(i=s,e=Wp(n,s))),e===1))throw t=Su,_o(n,0),cs(n,i),Qn(n,qt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Js(n,Yn,Cr);break;case 3:if(cs(n,i),(i&130023424)===i&&(e=W_+500-qt(),10<e)){if(Tf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Hn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Tp(Js.bind(null,n,Yn,Cr),e);break}Js(n,Yn,Cr);break;case 4:if(cs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-rr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jT(i/1960))-i,10<i){n.timeoutHandle=Tp(Js.bind(null,n,Yn,Cr),i);break}Js(n,Yn,Cr);break;case 5:Js(n,Yn,Cr);break;default:throw Error(le(329))}}}return Qn(n,qt()),n.callbackNode===t?wS.bind(null,n):null}function Wp(n,e){var t=Xl;return n.current.memoizedState.isDehydrated&&(_o(n,e).flags|=256),n=Vf(n,e),n!==2&&(e=Yn,Yn=t,e!==null&&Xp(e)),n}function Xp(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function KT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!or(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cs(n,e){for(e&=~G_,e&=~_d,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-rr(e),i=1<<t;n[t]=-1,e&=~i}}function z0(n){if(ft&6)throw Error(le(327));Ra();var e=Tf(n,0);if(!(e&1))return Qn(n,qt()),null;var t=Vf(n,e);if(n.tag!==0&&t===2){var i=_p(n);i!==0&&(e=i,t=Wp(n,i))}if(t===1)throw t=Su,_o(n,0),cs(n,e),Qn(n,qt()),t;if(t===6)throw Error(le(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Js(n,Yn,Cr),Qn(n,qt()),null}function X_(n,e){var t=ft;ft|=1;try{return n(e)}finally{ft=t,ft===0&&(Xa=qt()+500,dd&&Hs())}}function bo(n){hs!==null&&hs.tag===0&&!(ft&6)&&Ra();var e=ft;ft|=1;var t=Vi.transition,i=vt;try{if(Vi.transition=null,vt=1,n)return n()}finally{vt=i,Vi.transition=t,ft=e,!(ft&6)&&Hs()}}function Y_(){di=va.current,bt(va)}function _o(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,AT(t)),en!==null)for(t=en.return;t!==null;){var i=t;switch(A_(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Pf();break;case 3:Ga(),bt(Kn),bt(Ln),N_();break;case 5:U_(i);break;case 4:Ga();break;case 13:bt(Ot);break;case 19:bt(Ot);break;case 10:b_(i.type._context);break;case 22:case 23:Y_()}t=t.return}if(hn=n,en=n=As(n.current,null),vn=di=e,sn=0,Su=null,G_=_d=Po=0,Yn=Xl=null,lo!==null){for(e=0;e<lo.length;e++)if(t=lo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}lo=null}return n}function AS(n,e){do{var t=en;try{if(P_(),Zc.current=kf,Ff){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ff=!1}if(Ro=0,dn=nn=zt=null,Gl=!1,vu=0,V_.current=null,t===null||t.return===null){sn=1,Su=e,en=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=A0(o);if(p!==null){p.flags&=-257,C0(p,o,a,s,e),p.mode&1&&w0(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){w0(s,u,e),q_();break e}l=Error(le(426))}}else if(It&&a.mode&1){var m=A0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),C0(m,o,a,s,e),C_(Wa(l,a));break e}}s=l=Wa(l,a),sn!==4&&(sn=2),Xl===null?Xl=[s]:Xl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=uS(s,l,e);x0(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ts===null||!Ts.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=cS(s,a,e);x0(s,S);break e}}s=s.return}while(s!==null)}PS(t)}catch(C){e=C,en===t&&t!==null&&(en=t=t.return);continue}break}while(!0)}function CS(){var n=zf.current;return zf.current=kf,n===null?kf:n}function q_(){(sn===0||sn===3||sn===2)&&(sn=4),hn===null||!(Po&268435455)&&!(_d&268435455)||cs(hn,vn)}function Vf(n,e){var t=ft;ft|=2;var i=CS();(hn!==n||vn!==e)&&(Cr=null,_o(n,e));do try{ZT();break}catch(r){AS(n,r)}while(!0);if(P_(),ft=t,zf.current=i,en!==null)throw Error(le(261));return hn=null,vn=0,sn}function ZT(){for(;en!==null;)RS(en)}function QT(){for(;en!==null&&!E1();)RS(en)}function RS(n){var e=DS(n.alternate,n,di);n.memoizedProps=n.pendingProps,e===null?PS(n):en=e,V_.current=null}function PS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=XT(t,e),t!==null){t.flags&=32767,en=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,en=null;return}}else if(t=WT(t,e,di),t!==null){en=t;return}if(e=e.sibling,e!==null){en=e;return}en=e=n}while(e!==null);sn===0&&(sn=5)}function Js(n,e,t){var i=vt,r=Vi.transition;try{Vi.transition=null,vt=1,JT(n,e,t,i)}finally{Vi.transition=r,vt=i}return null}function JT(n,e,t,i){do Ra();while(hs!==null);if(ft&6)throw Error(le(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(le(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(I1(n,s),n===hn&&(en=hn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||oc||(oc=!0,LS(Ef,function(){return Ra(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Vi.transition,Vi.transition=null;var o=vt;vt=1;var a=ft;ft|=4,V_.current=null,qT(n,t),ES(t,n),xT(Mp),wf=!!Sp,Mp=Sp=null,n.current=t,$T(t),T1(),ft=a,vt=o,Vi.transition=s}else n.current=t;if(oc&&(oc=!1,hs=n,Hf=r),s=n.pendingLanes,s===0&&(Ts=null),C1(t.stateNode),Qn(n,qt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bf)throw Bf=!1,n=Vp,Vp=null,n;return Hf&1&&n.tag!==0&&Ra(),s=n.pendingLanes,s&1?n===Gp?Yl++:(Yl=0,Gp=n):Yl=0,Hs(),null}function Ra(){if(hs!==null){var n=uy(Hf),e=Vi.transition,t=vt;try{if(Vi.transition=null,vt=16>n?16:n,hs===null)var i=!1;else{if(n=hs,hs=null,Hf=0,ft&6)throw Error(le(331));var r=ft;for(ft|=4,Ee=n.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ee=u;Ee!==null;){var c=Ee;switch(c.tag){case 0:case 11:case 15:Wl(8,c,s)}var d=c.child;if(d!==null)d.return=c,Ee=d;else for(;Ee!==null;){c=Ee;var f=c.sibling,p=c.return;if(yS(c),c===u){Ee=null;break}if(f!==null){f.return=p,Ee=f;break}Ee=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Wl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Ee=h;break e}Ee=s.return}}var v=n.current;for(Ee=v;Ee!==null;){o=Ee;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Ee=x;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:md(9,a)}}catch(C){Ht(a,a.return,C)}if(a===o){Ee=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Ee=S;break e}Ee=a.return}}if(ft=r,Hs(),gr&&typeof gr.onPostCommitFiberRoot=="function")try{gr.onPostCommitFiberRoot(ad,n)}catch{}i=!0}return i}finally{vt=t,Vi.transition=e}}return!1}function B0(n,e,t){e=Wa(t,e),e=uS(n,e,1),n=Es(n,e,1),e=Hn(),n!==null&&(Uu(n,1,e),Qn(n,e))}function Ht(n,e,t){if(n.tag===3)B0(n,n,t);else for(;e!==null;){if(e.tag===3){B0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))){n=Wa(t,n),n=cS(e,n,1),e=Es(e,n,1),n=Hn(),e!==null&&(Uu(e,1,n),Qn(e,n));break}}e=e.return}}function ew(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Hn(),n.pingedLanes|=n.suspendedLanes&t,hn===n&&(vn&t)===t&&(sn===4||sn===3&&(vn&130023424)===vn&&500>qt()-W_?_o(n,0):G_|=t),Qn(n,e)}function bS(n,e){e===0&&(n.mode&1?(e=Ku,Ku<<=1,!(Ku&130023424)&&(Ku=4194304)):e=1);var t=Hn();n=Gr(n,e),n!==null&&(Uu(n,e,t),Qn(n,t))}function tw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),bS(n,t)}function nw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),bS(n,t)}var DS;DS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Kn.current)jn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return jn=!1,GT(n,e,t);jn=!!(n.flags&131072)}else jn=!1,It&&e.flags&1048576&&Ny(e,Lf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Jc(n,e),n=e.pendingProps;var r=Ba(e,Ln.current);Ca(e,t),r=F_(null,e,i,n,r,t);var s=k_();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zn(i)?(s=!0,bf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,L_(e),r.updater=pd,e.stateNode=r,r._reactInternals=e,Dp(e,i,n,t),e=Up(null,e,i,!0,s,t)):(e.tag=0,It&&s&&w_(e),Fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Jc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rw(i),n=Qi(i,n),r){case 0:e=Ip(null,e,i,n,t);break e;case 1:e=b0(null,e,i,n,t);break e;case 11:e=R0(null,e,i,n,t);break e;case 14:e=P0(null,e,i,Qi(i.type,n),t);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Ip(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),b0(n,e,i,r,t);case 3:e:{if(pS(e),n===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Hy(n,e),Nf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Wa(Error(le(423)),e),e=D0(n,e,i,t,r);break e}else if(i!==r){r=Wa(Error(le(424)),e),e=D0(n,e,i,t,r);break e}else for(vi=Ms(e.stateNode.containerInfo.firstChild),Si=e,It=!0,er=null,t=zy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ha(),i===r){e=Wr(n,e,t);break e}Fn(n,e,i,t)}e=e.child}return e;case 5:return Vy(e),n===null&&Rp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ep(i,r)?o=null:s!==null&&Ep(i,s)&&(e.flags|=32),hS(n,e),Fn(n,e,o,t),e.child;case 6:return n===null&&Rp(e),null;case 13:return mS(n,e,t);case 4:return I_(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Va(e,null,i,t):Fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),R0(n,e,i,r,t);case 7:return Fn(n,e,e.pendingProps,t),e.child;case 8:return Fn(n,e,e.pendingProps.children,t),e.child;case 12:return Fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(If,i._currentValue),i._currentValue=o,s!==null)if(or(s.value,o)){if(s.children===r.children&&!Kn.current){e=Wr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zr(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(le(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ca(e,t),r=Wi(r),i=i(r),e.flags|=1,Fn(n,e,i,t),e.child;case 14:return i=e.type,r=Qi(i,e.pendingProps),r=Qi(i.type,r),P0(n,e,i,r,t);case 15:return fS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qi(i,r),Jc(n,e),e.tag=1,Zn(i)?(n=!0,bf(e)):n=!1,Ca(e,t),lS(e,i,r),Dp(e,i,r,t),Up(null,e,i,!0,n,t);case 19:return _S(n,e,t);case 22:return dS(n,e,t)}throw Error(le(156,e.tag))};function LS(n,e){return sy(n,e)}function iw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(n,e,t,i){return new iw(n,e,t,i)}function $_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rw(n){if(typeof n=="function")return $_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===h_)return 11;if(n===p_)return 14}return 2}function As(n,e){var t=n.alternate;return t===null?(t=ki(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function nf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")$_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case la:return go(t.children,r,s,e);case d_:o=8,r|=8;break;case tp:return n=ki(12,t,e,r|2),n.elementType=tp,n.lanes=s,n;case np:return n=ki(13,t,e,r),n.elementType=np,n.lanes=s,n;case ip:return n=ki(19,t,e,r),n.elementType=ip,n.lanes=s,n;case Vx:return gd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Bx:o=10;break e;case Hx:o=9;break e;case h_:o=11;break e;case p_:o=14;break e;case as:o=16,i=null;break e}throw Error(le(130,n==null?n:typeof n,""))}return e=ki(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function go(n,e,t,i){return n=ki(7,n,i,e),n.lanes=t,n}function gd(n,e,t,i){return n=ki(22,n,i,e),n.elementType=Vx,n.lanes=t,n.stateNode={isHidden:!1},n}function rh(n,e,t){return n=ki(6,n,null,e),n.lanes=t,n}function sh(n,e,t){return e=ki(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function sw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zd(0),this.expirationTimes=zd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function j_(n,e,t,i,r,s,o,a,l){return n=new sw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ki(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},L_(s),n}function ow(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function IS(n){if(!n)return Is;n=n._reactInternals;e:{if(Fo(n)!==n||n.tag!==1)throw Error(le(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(n.tag===1){var t=n.type;if(Zn(t))return Iy(n,t,e)}return e}function US(n,e,t,i,r,s,o,a,l){return n=j_(t,i,!0,n,r,s,o,a,l),n.context=IS(null),t=n.current,i=Hn(),r=ws(t),s=zr(i,r),s.callback=e??null,Es(t,s,r),n.current.lanes=r,Uu(n,r,i),Qn(n,i),n}function vd(n,e,t,i){var r=e.current,s=Hn(),o=ws(r);return t=IS(t),e.context===null?e.context=t:e.pendingContext=t,e=zr(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Es(r,e,o),n!==null&&(sr(n,r,o,s),Kc(n,r,o)),o}function Gf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function H0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function K_(n,e){H0(n,e),(n=n.alternate)&&H0(n,e)}function aw(){return null}var NS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Z_(n){this._internalRoot=n}xd.prototype.render=Z_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(le(409));vd(n,e,null,null)};xd.prototype.unmount=Z_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;bo(function(){vd(null,n,null,null)}),e[Vr]=null}};function xd(n){this._internalRoot=n}xd.prototype.unstable_scheduleHydration=function(n){if(n){var e=dy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<us.length&&e!==0&&e<us[t].priority;t++);us.splice(t,0,n),t===0&&py(n)}};function Q_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function V0(){}function lw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Gf(o);s.call(u)}}var o=US(e,i,n,0,null,!1,!1,"",V0);return n._reactRootContainer=o,n[Vr]=o.current,hu(n.nodeType===8?n.parentNode:n),bo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Gf(l);a.call(u)}}var l=j_(n,0,!1,null,null,!1,!1,"",V0);return n._reactRootContainer=l,n[Vr]=l.current,hu(n.nodeType===8?n.parentNode:n),bo(function(){vd(e,l,t,i)}),l}function Sd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gf(o);a.call(l)}}vd(e,o,n,r)}else o=lw(t,e,n,r,i);return Gf(o)}cy=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Rl(e.pendingLanes);t!==0&&(g_(e,t|1),Qn(e,qt()),!(ft&6)&&(Xa=qt()+500,Hs()))}break;case 13:bo(function(){var i=Gr(n,1);if(i!==null){var r=Hn();sr(i,n,1,r)}}),K_(n,1)}};v_=function(n){if(n.tag===13){var e=Gr(n,134217728);if(e!==null){var t=Hn();sr(e,n,134217728,t)}K_(n,134217728)}};fy=function(n){if(n.tag===13){var e=ws(n),t=Gr(n,e);if(t!==null){var i=Hn();sr(t,n,e,i)}K_(n,e)}};dy=function(){return vt};hy=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};hp=function(n,e,t){switch(e){case"input":if(op(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=fd(i);if(!r)throw Error(le(90));Wx(i),op(i,r)}}}break;case"textarea":Yx(n,t);break;case"select":e=t.value,e!=null&&Ea(n,!!t.multiple,e,!1)}};Jx=X_;ey=bo;var uw={usingClientEntryPoint:!1,Events:[Ou,da,fd,Zx,Qx,X_]},_l={findFiberByHostInstance:ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cw={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=iy(n),n===null?null:n.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance||aw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{ad=ac.inject(cw),gr=ac}catch{}}Ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uw;Ci.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Q_(e))throw Error(le(200));return ow(n,e,null,t)};Ci.createRoot=function(n,e){if(!Q_(n))throw Error(le(299));var t=!1,i="",r=NS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=j_(n,1,!1,null,null,t,!1,i,r),n[Vr]=e.current,hu(n.nodeType===8?n.parentNode:n),new Z_(e)};Ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(le(188)):(n=Object.keys(n).join(","),Error(le(268,n)));return n=iy(e),n=n===null?null:n.stateNode,n};Ci.flushSync=function(n){return bo(n)};Ci.hydrate=function(n,e,t){if(!yd(e))throw Error(le(200));return Sd(null,n,e,!0,t)};Ci.hydrateRoot=function(n,e,t){if(!Q_(n))throw Error(le(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=NS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=US(e,null,n,1,t??null,r,!1,s,o),n[Vr]=e.current,hu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new xd(e)};Ci.render=function(n,e,t){if(!yd(e))throw Error(le(200));return Sd(null,n,e,!1,t)};Ci.unmountComponentAtNode=function(n){if(!yd(n))throw Error(le(40));return n._reactRootContainer?(bo(function(){Sd(null,null,n,!1,function(){n._reactRootContainer=null,n[Vr]=null})}),!0):!1};Ci.unstable_batchedUpdates=X_;Ci.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!yd(t))throw Error(le(200));if(n==null||n._reactInternals===void 0)throw Error(le(38));return Sd(n,e,t,!1,i)};Ci.version="18.3.1-next-f1338f8080-20240426";function OS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OS)}catch(n){console.error(n)}}OS(),Ox.exports=Ci;var fw=Ox.exports,G0=fw;Jh.createRoot=G0.createRoot,Jh.hydrateRoot=G0.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const J_="169",dw=0,W0=1,hw=2,FS=1,pw=2,Ar=3,Us=0,Jn=1,Dr=2,Cs=0,Pa=1,Yp=2,X0=3,Y0=4,mw=5,so=100,_w=101,gw=102,vw=103,xw=104,yw=200,Sw=201,Mw=202,Ew=203,qp=204,$p=205,Tw=206,ww=207,Aw=208,Cw=209,Rw=210,Pw=211,bw=212,Dw=213,Lw=214,jp=0,Kp=1,Zp=2,Ya=3,Qp=4,Jp=5,em=6,tm=7,kS=0,Iw=1,Uw=2,Rs=0,Nw=1,Ow=2,Fw=3,kw=4,zw=5,Bw=6,Hw=7,zS=300,qa=301,$a=302,nm=303,im=304,Md=306,rm=1e3,co=1001,sm=1002,zi=1003,Vw=1004,lc=1005,tr=1006,oh=1007,fo=1008,Xr=1009,BS=1010,HS=1011,Mu=1012,eg=1013,Do=1014,Nr=1015,ku=1016,tg=1017,ng=1018,ja=1020,VS=35902,GS=1021,WS=1022,ir=1023,XS=1024,YS=1025,ba=1026,Ka=1027,qS=1028,ig=1029,$S=1030,rg=1031,sg=1033,rf=33776,sf=33777,of=33778,af=33779,om=35840,am=35841,lm=35842,um=35843,cm=36196,fm=37492,dm=37496,hm=37808,pm=37809,mm=37810,_m=37811,gm=37812,vm=37813,xm=37814,ym=37815,Sm=37816,Mm=37817,Em=37818,Tm=37819,wm=37820,Am=37821,lf=36492,Cm=36494,Rm=36495,jS=36283,Pm=36284,bm=36285,Dm=36286,Gw=3200,Ww=3201,Xw=0,Yw=1,fs="",ur="srgb",Vs="srgb-linear",og="display-p3",Ed="display-p3-linear",Wf="linear",Pt="srgb",Xf="rec709",Yf="p3",Ho=7680,q0=519,qw=512,$w=513,jw=514,KS=515,Kw=516,Zw=517,Qw=518,Jw=519,$0=35044,eA=35048,j0="300 es",Or=2e3,qf=2001;class al{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Lm=180/Math.PI;function zu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function qn(n,e,t){return Math.max(e,Math.min(t,n))}function tA(n,e){return(n%e+e)%e}function lh(n,e,t){return(1-t)*n+t*e}function gl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,i,r,s,o,a,l,u){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],S=r[7],C=r[2],A=r[5],M=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*A,s[6]=o*h+a*S+l*M,s[1]=u*g+c*v+d*C,s[4]=u*m+c*x+d*A,s[7]=u*h+c*S+d*M,s[2]=f*g+p*v+_*C,s[5]=f*m+p*x+_*A,s[8]=f*h+p*S+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uh.makeScale(e,t)),this}rotate(e){return this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new Qe;function ZS(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $f(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nA(){const n=$f("canvas");return n.style.display="block",n}const K0={};function uf(n){n in K0||(K0[n]=!0,console.warn(n))}function iA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function rA(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sA(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Z0=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Q0=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vl={[Vs]:{transfer:Wf,primaries:Xf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[ur]:{transfer:Pt,primaries:Xf,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ed]:{transfer:Wf,primaries:Yf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Q0),fromReference:n=>n.applyMatrix3(Z0)},[og]:{transfer:Pt,primaries:Yf,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Q0),fromReference:n=>n.applyMatrix3(Z0).convertLinearToSRGB()}},oA=new Set([Vs,Ed]),pt={enabled:!0,_workingColorSpace:Vs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!oA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=vl[e].toReference,r=vl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return vl[n].primaries},getTransfer:function(n){return n===fs?Wf:vl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(vl[e].luminanceCoefficients)}};function Da(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ch(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Vo;class aA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vo===void 0&&(Vo=$f("canvas")),Vo.width=e.width,Vo.height=e.height;const i=Vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Vo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$f("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Da(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Da(t[i]/255)*255):t[i]=Da(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lA=0;class QS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=zu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fh(r[o].image)):s.push(fh(r[o]))}else s=fh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uA=0;class ei extends al{constructor(e=ei.DEFAULT_IMAGE,t=ei.DEFAULT_MAPPING,i=co,r=co,s=tr,o=fo,a=ir,l=Xr,u=ei.DEFAULT_ANISOTROPY,c=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uA++}),this.uuid=zu(),this.name="",this.source=new QS(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rm:e.x=e.x-Math.floor(e.x);break;case co:e.x=e.x<0?0:1;break;case sm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rm:e.y=e.y-Math.floor(e.y);break;case co:e.y=e.y<0?0:1;break;case sm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=zS;ei.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,i=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,C=(h+1)/2,A=(c+f)/4,M=(d+g)/4,R=(_+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cA extends al{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ei(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new QS(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lo extends cA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class JS extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fA extends ei{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zi,this.minFilter=zi,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,h*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+_*S,d=d*m+g*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,i=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(J0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(J0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new q,J0=new Bu;class Hu{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,$i):$i.fromBufferAttribute(s,o),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uc.copy(i.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xl),cc.subVectors(this.max,xl),Go.subVectors(e.a,xl),Wo.subVectors(e.b,xl),Xo.subVectors(e.c,xl),es.subVectors(Wo,Go),ts.subVectors(Xo,Wo),Ws.subVectors(Go,Xo);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ws.z,Ws.y,es.z,0,-es.x,ts.z,0,-ts.x,Ws.z,0,-Ws.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ws.y,Ws.x,0];return!hh(t,Go,Wo,Xo,cc)||(t=[1,0,0,0,1,0,0,0,1],!hh(t,Go,Wo,Xo,cc))?!1:(fc.crossVectors(es,ts),t=[fc.x,fc.y,fc.z],hh(t,Go,Wo,Xo,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sr=[new q,new q,new q,new q,new q,new q,new q,new q],$i=new q,uc=new Hu,Go=new q,Wo=new q,Xo=new q,es=new q,ts=new q,Ws=new q,xl=new q,cc=new q,fc=new q,Xs=new q;function hh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Xs.fromArray(n,s);const a=r.x*Math.abs(Xs.x)+r.y*Math.abs(Xs.y)+r.z*Math.abs(Xs.z),l=e.dot(Xs),u=t.dot(Xs),c=i.dot(Xs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const dA=new Hu,yl=new q,ph=new q;class Td{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);const t=yl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ph.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(ph)),this.expandByPoint(yl.copy(e.center).sub(ph))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mr=new q,mh=new q,dc=new q,ns=new q,_h=new q,hc=new q,gh=new q;class eM{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mh.copy(e).add(t).multiplyScalar(.5),dc.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(mh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(dc),a=ns.dot(this.direction),l=-ns.dot(dc),u=ns.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mh).addScaledVector(dc,f),p}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const i=Mr.dot(this.direction),r=Mr.dot(Mr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,r,s){_h.subVectors(t,e),hc.subVectors(i,e),gh.crossVectors(_h,hc);let o=this.direction.dot(gh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ns.subVectors(this.origin,e);const l=a*this.direction.dot(hc.crossVectors(ns,hc));if(l<0)return null;const u=a*this.direction.dot(_h.cross(ns));if(u<0||l+u>o)return null;const c=-a*ns.dot(gh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Yo.setFromMatrixColumn(e,0).length(),s=1/Yo.setFromMatrixColumn(e,1).length(),o=1/Yo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hA,e,pA)}lookAt(e,t,i){const r=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),is.crossVectors(i,ui),is.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),is.crossVectors(i,ui)),is.normalize(),pc.crossVectors(ui,is),r[0]=is.x,r[4]=pc.x,r[8]=ui.x,r[1]=is.y,r[5]=pc.y,r[9]=ui.y,r[2]=is.z,r[6]=pc.z,r[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],S=i[11],C=i[15],A=r[0],M=r[4],R=r[8],I=r[12],y=r[1],T=r[5],U=r[9],z=r[13],X=r[2],$=r[6],B=r[10],Y=r[14],L=r[3],j=r[7],P=r[11],te=r[15];return s[0]=o*A+a*y+l*X+u*L,s[4]=o*M+a*T+l*$+u*j,s[8]=o*R+a*U+l*B+u*P,s[12]=o*I+a*z+l*Y+u*te,s[1]=c*A+d*y+f*X+p*L,s[5]=c*M+d*T+f*$+p*j,s[9]=c*R+d*U+f*B+p*P,s[13]=c*I+d*z+f*Y+p*te,s[2]=_*A+g*y+m*X+h*L,s[6]=_*M+g*T+m*$+h*j,s[10]=_*R+g*U+m*B+h*P,s[14]=_*I+g*z+m*Y+h*te,s[3]=v*A+x*y+S*X+C*L,s[7]=v*M+x*T+S*$+C*j,s[11]=v*R+x*U+S*B+C*P,s[15]=v*I+x*z+S*Y+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,x=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,S=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,A=t*v+i*x+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=v*M,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*M,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=S*M,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*M,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*M,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,v=l*u,x=l*c,S=l*d,C=i.x,A=i.y,M=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+S)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(_+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Yo.set(r[0],r[1],r[2]).length();const o=Yo.set(r[4],r[5],r[6]).length(),a=Yo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ji.copy(this);const u=1/s,c=1/o,d=1/a;return ji.elements[0]*=u,ji.elements[1]*=u,ji.elements[2]*=u,ji.elements[4]*=c,ji.elements[5]*=c,ji.elements[6]*=c,ji.elements[8]*=d,ji.elements[9]*=d,ji.elements[10]*=d,t.setFromRotationMatrix(ji),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Or){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Or)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Or){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===Or)_=(o+s)*d,g=-2*d;else if(a===qf)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Yo=new q,ji=new Kt,hA=new q(0,0,0),pA=new q(1,1,1),is=new q,pc=new q,ui=new q,ev=new Kt,tv=new Bu;class Yr{constructor(e=0,t=0,i=0,r=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ev,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tv.setFromEuler(this),this.setFromQuaternion(tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class tM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mA=0;const nv=new q,qo=new Bu,Er=new Kt,mc=new q,Sl=new q,_A=new q,gA=new Bu,iv=new q(1,0,0),rv=new q(0,1,0),sv=new q(0,0,1),ov={type:"added"},vA={type:"removed"},$o={type:"childadded",child:null},vh={type:"childremoved",child:null};class ti extends al{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mA++}),this.uuid=zu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const e=new q,t=new Yr,i=new Bu,r=new q(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Qe}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.multiply(qo),this}rotateOnWorldAxis(e,t){return qo.setFromAxisAngle(e,t),this.quaternion.premultiply(qo),this}rotateX(e){return this.rotateOnAxis(iv,e)}rotateY(e){return this.rotateOnAxis(rv,e)}rotateZ(e){return this.rotateOnAxis(sv,e)}translateOnAxis(e,t){return nv.copy(e).applyQuaternion(this.quaternion),this.position.add(nv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iv,e)}translateY(e){return this.translateOnAxis(rv,e)}translateZ(e){return this.translateOnAxis(sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mc.copy(e):mc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(Sl,mc,this.up):Er.lookAt(mc,Sl,this.up),this.quaternion.setFromRotationMatrix(Er),r&&(Er.extractRotation(r.matrixWorld),qo.setFromRotationMatrix(Er),this.quaternion.premultiply(qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),$o.child=e,this.dispatchEvent($o),$o.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vA),vh.child=e,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),$o.child=e,this.dispatchEvent($o),$o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,e,_A),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,gA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ti.DEFAULT_UP=new q(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ki=new q,Tr=new q,xh=new q,wr=new q,jo=new q,Ko=new q,av=new q,yh=new q,Sh=new q,Mh=new q,Eh=new $t,Th=new $t,wh=new $t;class nr{constructor(e=new q,t=new q,i=new q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Ki.subVectors(e,t),r.cross(Ki);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Ki.subVectors(r,t),Tr.subVectors(i,t),xh.subVectors(e,t);const o=Ki.dot(Ki),a=Ki.dot(Tr),l=Ki.dot(xh),u=Tr.dot(Tr),c=Tr.dot(xh),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wr.x),l.addScaledVector(o,wr.y),l.addScaledVector(a,wr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Eh.setScalar(0),Th.setScalar(0),wh.setScalar(0),Eh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Eh,s.x),o.addScaledVector(Th,s.y),o.addScaledVector(wh,s.z),o}static isFrontFacing(e,t,i,r){return Ki.subVectors(i,t),Tr.subVectors(e,t),Ki.cross(Tr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ki.subVectors(this.c,this.b),Tr.subVectors(this.a,this.b),Ki.cross(Tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;jo.subVectors(r,i),Ko.subVectors(s,i),yh.subVectors(e,i);const l=jo.dot(yh),u=Ko.dot(yh);if(l<=0&&u<=0)return t.copy(i);Sh.subVectors(e,r);const c=jo.dot(Sh),d=Ko.dot(Sh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(jo,o);Mh.subVectors(e,s);const p=jo.dot(Mh),_=Ko.dot(Mh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Ko,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return av.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(av,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(jo,o).addScaledVector(Ko,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Ah(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class gt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ur){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=pt.workingColorSpace){if(e=tA(e,1),t=qn(t,0,1),i=qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ah(o,s,e+1/3),this.g=Ah(o,s,e),this.b=Ah(o,s,e-1/3)}return pt.toWorkingColorSpace(this,r),this}setStyle(e,t=ur){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ur){const i=nM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=ch(e.r),this.g=ch(e.g),this.b=ch(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ur){return pt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(qn(Tn.r*255,0,255))*65536+Math.round(qn(Tn.g*255,0,255))*256+Math.round(qn(Tn.b*255,0,255))}getHexString(e=ur){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=pt.workingColorSpace){return pt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=ur){pt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==ur?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(_c);const i=lh(rs.h,_c.h,t),r=lh(rs.s,_c.s,t),s=lh(rs.l,_c.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new gt;gt.NAMES=nM;let xA=0;class Vu extends al{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=zu(),this.name="",this.type="Material",this.blending=Pa,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=$p,this.blendEquation=so,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ho,this.stencilZFail=Ho,this.stencilZPass=Ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Pa&&(i.blending=this.blending),this.side!==Us&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qp&&(i.blendSrc=this.blendSrc),this.blendDst!==$p&&(i.blendDst=this.blendDst),this.blendEquation!==so&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ya&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==q0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ho&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ho&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ho&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class iM extends Vu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=kS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new q,gc=new Tt;class Mi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$0,this.updateRanges=[],this.gpuType=Nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),r=Wn(r,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$0&&(e.usage=this.usage),e}}class rM extends Mi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sM extends Mi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class vo extends Mi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yA=0;const bi=new Kt,Ch=new ti,Zo=new q,ci=new Hu,Ml=new Hu,un=new q;class Zr extends al{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yA++}),this.uuid=zu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ZS(e)?sM:rM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,i){return bi.makeTranslation(e,t,i),this.applyMatrix4(bi),this}scale(e,t,i){return bi.makeScale(e,t,i),this.applyMatrix4(bi),this}lookAt(e){return Ch.lookAt(e),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zo).negate(),this.translate(Zo.x,Zo.y,Zo.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vo(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];ci.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Td);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ml.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(ci.min,Ml.min),ci.expandByPoint(un),un.addVectors(ci.max,Ml.max),ci.expandByPoint(un)):(ci.expandByPoint(Ml.min),ci.expandByPoint(Ml.max))}ci.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)un.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(un));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)un.fromBufferAttribute(a,u),l&&(Zo.fromBufferAttribute(e,u),un.add(Zo)),r=Math.max(r,i.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new q,l[R]=new q;const u=new q,c=new q,d=new q,f=new Tt,p=new Tt,_=new Tt,g=new q,m=new q;function h(R,I,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,I),_.fromBufferAttribute(s,y),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(T),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(T),a[R].add(g),a[I].add(g),a[y].add(g),l[R].add(m),l[I].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,I=v.length;R<I;++R){const y=v[R],T=y.start,U=y.count;for(let z=T,X=T+U;z<X;z+=3)h(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new q,S=new q,C=new q,A=new q;function M(R){C.fromBufferAttribute(r,R),A.copy(C);const I=a[R];x.copy(I),x.sub(C.multiplyScalar(C.dot(I))).normalize(),S.crossVectors(A,I);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,I=v.length;R<I;++R){const y=v[R],T=y.start,U=y.count;for(let z=T,X=T+U;z<X;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,u=new q,c=new q,d=new q;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new Mi(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lv=new Kt,Ys=new eM,vc=new Td,uv=new q,xc=new q,yc=new q,Sc=new q,Rh=new q,Mc=new q,cv=new q,Ec=new q;class Fr extends ti{constructor(e=new Zr,t=new iM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Rh.fromBufferAttribute(d,e),o?Mc.addScaledVector(Rh,c):Mc.addScaledVector(Rh.sub(t),c))}t.add(Mc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(vc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(vc,uv)===null||Ys.origin.distanceToSquared(uv)>(e.far-e.near)**2))&&(lv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(lv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const A=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=Tc(this,h,e,i,u,c,d,A,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Tc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const A=S,M=S+1,R=S+2;r=Tc(this,h,e,i,u,c,d,A,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,S=m+2;r=Tc(this,o,e,i,u,c,d,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function SA(n,e,t,i,r,s,o,a){let l;if(e.side===Jn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Us,a),l===null)return null;Ec.copy(a),Ec.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ec);return u<t.near||u>t.far?null:{distance:u,point:Ec.clone(),object:n}}function Tc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,xc),n.getVertexPosition(l,yc),n.getVertexPosition(u,Sc);const c=SA(n,e,t,i,xc,yc,Sc,cv);if(c){const d=new q;nr.getBarycoord(cv,xc,yc,Sc,d),r&&(c.uv=nr.getInterpolatedAttribute(r,a,l,u,d,new Tt)),s&&(c.uv1=nr.getInterpolatedAttribute(s,a,l,u,d,new Tt)),o&&(c.normal=nr.getInterpolatedAttribute(o,a,l,u,d,new q),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new q,materialIndex:0};nr.getNormal(xc,yc,Sc,f.normal),c.face=f,c.barycoord=d}return c}class Gu extends Zr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vo(u,3)),this.setAttribute("normal",new vo(c,3)),this.setAttribute("uv",new vo(d,2));function _(g,m,h,v,x,S,C,A,M,R,I){const y=S/M,T=C/R,U=S/2,z=C/2,X=A/2,$=M+1,B=R+1;let Y=0,L=0;const j=new q;for(let P=0;P<B;P++){const te=P*T-z;for(let ye=0;ye<$;ye++){const He=ye*y-U;j[g]=He*v,j[m]=te*x,j[h]=X,u.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[h]=A>0?1:-1,c.push(j.x,j.y,j.z),d.push(ye/M),d.push(1-P/R),Y+=1}}for(let P=0;P<R;P++)for(let te=0;te<M;te++){const ye=f+te+$*P,He=f+te+$*(P+1),H=f+(te+1)+$*(P+1),Q=f+(te+1)+$*P;l.push(ye,He,Q),l.push(He,H,Q),L+=6}a.addGroup(p,L,I),p+=L,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nn(n){const e={};for(let t=0;t<n.length;t++){const i=Za(n[t]);for(const r in i)e[r]=i[r]}return e}function MA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function oM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const EA={clone:Za,merge:Nn};var TA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qr extends Vu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=TA,this.fragmentShader=wA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=MA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class aM extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=Or}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ss=new q,fv=new Tt,dv=new Tt;class Ni extends aM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lm*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,fv,dv),t.subVectors(dv,fv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ah*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qo=-90,Jo=1;class AA extends ti{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ni(Qo,Jo,e,t);r.layers=this.layers,this.add(r);const s=new Ni(Qo,Jo,e,t);s.layers=this.layers,this.add(s);const o=new Ni(Qo,Jo,e,t);o.layers=this.layers,this.add(o);const a=new Ni(Qo,Jo,e,t);a.layers=this.layers,this.add(a);const l=new Ni(Qo,Jo,e,t);l.layers=this.layers,this.add(l);const u=new Ni(Qo,Jo,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Or)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lM extends ei{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:qa,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class CA extends Lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gu(5,5,5),s=new qr({name:"CubemapFromEquirect",uniforms:Za(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Cs});s.uniforms.tEquirect.value=t;const o=new Fr(r,s),a=t.minFilter;return t.minFilter===fo&&(t.minFilter=tr),new AA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ph=new q,RA=new q,PA=new Qe;class eo{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ph.subVectors(i,t).cross(RA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ph),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||PA.getNormalMatrix(e),r=this.coplanarPoint(Ph).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Td,wc=new q;class uM{constructor(e=new eo,t=new eo,i=new eo,r=new eo,s=new eo,o=new eo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Or){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-h).normalize(),i[1].setComponents(l+s,f+u,m+p,S+h).normalize(),i[2].setComponents(l+o,f+c,m+_,S+v).normalize(),i[3].setComponents(l-o,f-c,m-_,S-v).normalize(),i[4].setComponents(l-a,f-d,m-g,S-x).normalize(),t===Or)i[5].setComponents(l+a,f+d,m+g,S+x).normalize();else if(t===qf)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(wc.x=r.normal.x>0?e.max.x:e.min.x,wc.y=r.normal.y>0?e.max.y:e.min.y,wc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function bA(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(n.bindBuffer(u,a),d.length===0)n.bufferSubData(u,0,c);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],g=d[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const g=d[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class wd extends Zr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const S=x*d-s;_.push(S,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,S=v+u*(h+1),C=v+1+u*(h+1),A=v+1+u*h;p.push(x,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new vo(_,3)),this.setAttribute("normal",new vo(g,3)),this.setAttribute("uv",new vo(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.width,e.height,e.widthSegments,e.heightSegments)}}var DA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LA=`#ifdef USE_ALPHAHASH
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
#endif`,IA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FA=`#ifdef USE_AOMAP
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
#endif`,kA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WA=`#ifdef USE_IRIDESCENCE
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
#endif`,XA=`#ifdef USE_BUMPMAP
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
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eC=`#define PI 3.141592653589793
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
} // validated`,tC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nC=`vec3 transformedNormal = objectNormal;
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
#endif`,iC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aC="gl_FragColor = linearToOutputTexel( gl_FragColor );",lC=`
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
}`,uC=`#ifdef USE_ENVMAP
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
#endif`,cC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fC=`#ifdef USE_ENVMAP
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
#endif`,dC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hC=`#ifdef USE_ENVMAP
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
#endif`,pC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_C=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vC=`#ifdef USE_GRADIENTMAP
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
}`,xC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MC=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,EC=`#ifdef USE_ENVMAP
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
#endif`,TC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RC=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,PC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,bC=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,DC=`#if defined( RE_IndirectDiffuse )
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
#endif`,LC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BC=`#if defined( USE_POINTS_UV )
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
#endif`,HC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,qC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$C=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JC=`#ifdef USE_NORMALMAP
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
#endif`,eR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,oR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_R=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gR=`#ifdef USE_SKINNING
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
#endif`,vR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xR=`#ifdef USE_SKINNING
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
#endif`,yR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ER=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TR=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wR=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DR=`uniform sampler2D t2D;
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
}`,LR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`#include <common>
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
}`,FR=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kR=`#define DISTANCE
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
}`,zR=`#define DISTANCE
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
}`,BR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VR=`uniform float scale;
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
}`,GR=`uniform vec3 diffuse;
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
}`,WR=`#include <common>
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
}`,XR=`uniform vec3 diffuse;
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
}`,YR=`#define LAMBERT
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
}`,qR=`#define LAMBERT
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
}`,$R=`#define MATCAP
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
}`,jR=`#define MATCAP
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
}`,KR=`#define NORMAL
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
}`,ZR=`#define NORMAL
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
}`,QR=`#define PHONG
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
}`,JR=`#define PHONG
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
}`,eP=`#define STANDARD
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
}`,tP=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,nP=`#define TOON
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
}`,iP=`#define TOON
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
}`,rP=`uniform float size;
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
}`,sP=`uniform vec3 diffuse;
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
}`,oP=`#include <common>
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
}`,aP=`uniform vec3 color;
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
}`,lP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,uP=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:DA,alphahash_pars_fragment:LA,alphamap_fragment:IA,alphamap_pars_fragment:UA,alphatest_fragment:NA,alphatest_pars_fragment:OA,aomap_fragment:FA,aomap_pars_fragment:kA,batching_pars_vertex:zA,batching_vertex:BA,begin_vertex:HA,beginnormal_vertex:VA,bsdfs:GA,iridescence_fragment:WA,bumpmap_pars_fragment:XA,clipping_planes_fragment:YA,clipping_planes_pars_fragment:qA,clipping_planes_pars_vertex:$A,clipping_planes_vertex:jA,color_fragment:KA,color_pars_fragment:ZA,color_pars_vertex:QA,color_vertex:JA,common:eC,cube_uv_reflection_fragment:tC,defaultnormal_vertex:nC,displacementmap_pars_vertex:iC,displacementmap_vertex:rC,emissivemap_fragment:sC,emissivemap_pars_fragment:oC,colorspace_fragment:aC,colorspace_pars_fragment:lC,envmap_fragment:uC,envmap_common_pars_fragment:cC,envmap_pars_fragment:fC,envmap_pars_vertex:dC,envmap_physical_pars_fragment:EC,envmap_vertex:hC,fog_vertex:pC,fog_pars_vertex:mC,fog_fragment:_C,fog_pars_fragment:gC,gradientmap_pars_fragment:vC,lightmap_pars_fragment:xC,lights_lambert_fragment:yC,lights_lambert_pars_fragment:SC,lights_pars_begin:MC,lights_toon_fragment:TC,lights_toon_pars_fragment:wC,lights_phong_fragment:AC,lights_phong_pars_fragment:CC,lights_physical_fragment:RC,lights_physical_pars_fragment:PC,lights_fragment_begin:bC,lights_fragment_maps:DC,lights_fragment_end:LC,logdepthbuf_fragment:IC,logdepthbuf_pars_fragment:UC,logdepthbuf_pars_vertex:NC,logdepthbuf_vertex:OC,map_fragment:FC,map_pars_fragment:kC,map_particle_fragment:zC,map_particle_pars_fragment:BC,metalnessmap_fragment:HC,metalnessmap_pars_fragment:VC,morphinstance_vertex:GC,morphcolor_vertex:WC,morphnormal_vertex:XC,morphtarget_pars_vertex:YC,morphtarget_vertex:qC,normal_fragment_begin:$C,normal_fragment_maps:jC,normal_pars_fragment:KC,normal_pars_vertex:ZC,normal_vertex:QC,normalmap_pars_fragment:JC,clearcoat_normal_fragment_begin:eR,clearcoat_normal_fragment_maps:tR,clearcoat_pars_fragment:nR,iridescence_pars_fragment:iR,opaque_fragment:rR,packing:sR,premultiplied_alpha_fragment:oR,project_vertex:aR,dithering_fragment:lR,dithering_pars_fragment:uR,roughnessmap_fragment:cR,roughnessmap_pars_fragment:fR,shadowmap_pars_fragment:dR,shadowmap_pars_vertex:hR,shadowmap_vertex:pR,shadowmask_pars_fragment:mR,skinbase_vertex:_R,skinning_pars_vertex:gR,skinning_vertex:vR,skinnormal_vertex:xR,specularmap_fragment:yR,specularmap_pars_fragment:SR,tonemapping_fragment:MR,tonemapping_pars_fragment:ER,transmission_fragment:TR,transmission_pars_fragment:wR,uv_pars_fragment:AR,uv_pars_vertex:CR,uv_vertex:RR,worldpos_vertex:PR,background_vert:bR,background_frag:DR,backgroundCube_vert:LR,backgroundCube_frag:IR,cube_vert:UR,cube_frag:NR,depth_vert:OR,depth_frag:FR,distanceRGBA_vert:kR,distanceRGBA_frag:zR,equirect_vert:BR,equirect_frag:HR,linedashed_vert:VR,linedashed_frag:GR,meshbasic_vert:WR,meshbasic_frag:XR,meshlambert_vert:YR,meshlambert_frag:qR,meshmatcap_vert:$R,meshmatcap_frag:jR,meshnormal_vert:KR,meshnormal_frag:ZR,meshphong_vert:QR,meshphong_frag:JR,meshphysical_vert:eP,meshphysical_frag:tP,meshtoon_vert:nP,meshtoon_frag:iP,points_vert:rP,points_frag:sP,shadow_vert:oP,shadow_frag:aP,sprite_vert:lP,sprite_frag:uP},ge={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},dr={basic:{uniforms:Nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Nn([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Nn([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Nn([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Nn([ge.points,ge.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Nn([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Nn([ge.common,ge.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Nn([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Nn([ge.sprite,ge.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Nn([ge.common,ge.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Nn([ge.lights,ge.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};dr.physical={uniforms:Nn([dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Ac={r:0,b:0,g:0},$s=new Yr,cP=new Kt;function fP(n,e,t,i,r,s,o){const a=new gt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const S=_(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Md)?(c===void 0&&(c=new Fr(new Gu(1,1,1),new qr({name:"BackgroundCubeMaterial",uniforms:Za(dr.backgroundCube.uniforms),vertexShader:dr.backgroundCube.vertexShader,fragmentShader:dr.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),$s.copy(x.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(cP.makeRotationFromEuler($s)),c.material.toneMapped=pt.getTransfer(S.colorSpace)!==Pt,(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new Fr(new wd(2,2),new qr({name:"BackgroundMaterial",uniforms:Za(dr.background.uniforms),vertexShader:dr.background.vertexShader,fragmentShader:dr.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=pt.getTransfer(S.colorSpace)!==Pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Ac,oM(n)),i.buffers.color.setClear(Ac.r,Ac.g,Ac.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function dP(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,T,U,z,X){let $=!1;const B=d(z,U,T);s!==B&&(s=B,u(s.object)),$=p(y,z,U,X),$&&_(y,z,U,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,T,U,z),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function d(y,T,U){const z=U.wireframe===!0;let X=i[y.id];X===void 0&&(X={},i[y.id]=X);let $=X[T.id];$===void 0&&($={},X[T.id]=$);let B=$[z];return B===void 0&&(B=f(l()),$[z]=B),B}function f(y){const T=[],U=[],z=[];for(let X=0;X<t;X++)T[X]=0,U[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:U,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,T,U,z){const X=s.attributes,$=T.attributes;let B=0;const Y=U.getAttributes();for(const L in Y)if(Y[L].location>=0){const P=X[L];let te=$[L];if(te===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),P===void 0||P.attribute!==te||te&&P.data!==te.data)return!0;B++}return s.attributesNum!==B||s.index!==z}function _(y,T,U,z){const X={},$=T.attributes;let B=0;const Y=U.getAttributes();for(const L in Y)if(Y[L].location>=0){let P=$[L];P===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(P=y.instanceColor));const te={};te.attribute=P,P&&P.data&&(te.data=P.data),X[L]=te,B++}s.attributes=X,s.attributesNum=B,s.index=z}function g(){const y=s.newAttributes;for(let T=0,U=y.length;T<U;T++)y[T]=0}function m(y){h(y,0)}function h(y,T){const U=s.newAttributes,z=s.enabledAttributes,X=s.attributeDivisors;U[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),X[y]!==T&&(n.vertexAttribDivisor(y,T),X[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let U=0,z=T.length;U<z;U++)T[U]!==y[U]&&(n.disableVertexAttribArray(U),T[U]=0)}function x(y,T,U,z,X,$,B){B===!0?n.vertexAttribIPointer(y,T,U,X,$):n.vertexAttribPointer(y,T,U,z,X,$)}function S(y,T,U,z){g();const X=z.attributes,$=U.getAttributes(),B=T.defaultAttributeValues;for(const Y in $){const L=$[Y];if(L.location>=0){let j=X[Y];if(j===void 0&&(Y==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),Y==="instanceColor"&&y.instanceColor&&(j=y.instanceColor)),j!==void 0){const P=j.normalized,te=j.itemSize,ye=e.get(j);if(ye===void 0)continue;const He=ye.buffer,H=ye.type,Q=ye.bytesPerElement,re=H===n.INT||H===n.UNSIGNED_INT||j.gpuType===eg;if(j.isInterleavedBufferAttribute){const ae=j.data,Ce=ae.stride,Te=j.offset;if(ae.isInstancedInterleavedBuffer){for(let qe=0;qe<L.locationSize;qe++)h(L.location+qe,ae.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let qe=0;qe<L.locationSize;qe++)m(L.location+qe);n.bindBuffer(n.ARRAY_BUFFER,He);for(let qe=0;qe<L.locationSize;qe++)x(L.location+qe,te/L.locationSize,H,P,Ce*Q,(Te+te/L.locationSize*qe)*Q,re)}else{if(j.isInstancedBufferAttribute){for(let ae=0;ae<L.locationSize;ae++)h(L.location+ae,j.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ae=0;ae<L.locationSize;ae++)m(L.location+ae);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ae=0;ae<L.locationSize;ae++)x(L.location+ae,te/L.locationSize,H,P,te*Q,te/L.locationSize*ae*Q,re)}}else if(B!==void 0){const P=B[Y];if(P!==void 0)switch(P.length){case 2:n.vertexAttrib2fv(L.location,P);break;case 3:n.vertexAttrib3fv(L.location,P);break;case 4:n.vertexAttrib4fv(L.location,P);break;default:n.vertexAttrib1fv(L.location,P)}}}}v()}function C(){R();for(const y in i){const T=i[y];for(const U in T){const z=T[U];for(const X in z)c(z[X].object),delete z[X];delete T[U]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const U in T){const z=T[U];for(const X in z)c(z[X].object),delete z[X];delete T[U]}delete i[y.id]}function M(y){for(const T in i){const U=i[T];if(U[y.id]===void 0)continue;const z=U[y.id];for(const X in z)c(z[X].object),delete z[X];delete U[y.id]}}function R(){I(),o=!0,s!==r&&(s=r,u(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function hP(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==ir&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===ku&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Xr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Nr&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:A}}function mP(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new eo,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=h.clippingState||null;l.value=S,S=c(_,f,x,p);for(let C=0;C!==x;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,S=p;x!==g;++x,S+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function _P(n){let e=new WeakMap;function t(o,a){return a===nm?o.mapping=qa:a===im&&(o.mapping=$a),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nm||a===im)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new CA(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class gP extends aM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xa=4,hv=[.125,.215,.35,.446,.526,.582],oo=20,bh=new gP,pv=new gt;let Dh=null,Lh=0,Ih=0,Uh=!1;const to=(1+Math.sqrt(5))/2,ea=1/to,mv=[new q(-to,ea,0),new q(to,ea,0),new q(-ea,0,to),new q(ea,0,to),new q(0,to,-ea),new q(0,to,ea),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class _v{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Dh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dh,Lh,Ih),this._renderer.xr.enabled=Uh,e.scissorTest=!1,Cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qa||e.mapping===$a?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dh=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:tr,minFilter:tr,generateMipmaps:!1,type:ku,format:ir,colorSpace:Vs,depthBuffer:!1},r=gv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vP(s)),this._blurMaterial=xP(s,e,t)}return r}_compileMaterial(e){const t=new Fr(this._lodPlanes[0],e);this._renderer.compile(t,bh)}_sceneToCubeUV(e,t,i,r){const a=new Ni(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(pv),c.toneMapping=Rs,c.autoClear=!1;const p=new iM({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1}),_=new Fr(new Gu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(pv),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;Cc(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===qa||e.mapping===$a;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,bh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mv[(r-s-1)%mv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Fr(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*oo-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):oo;m>oo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${oo}`);const h=[];let v=0;for(let M=0;M<oo;++M){const R=M/g,I=Math.exp(-R*R/2);h.push(I),M===0?v+=I:M<m&&(v+=2*I)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-xa?r-x+xa:0),A=4*(this._cubeSize-S);Cc(t,C,A,3*S,2*S),l.setRenderTarget(t),l.render(d,bh)}}function vP(n){const e=[],t=[],i=[];let r=n;const s=n-xa+1+hv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xa?l=hv[o-n+xa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let A=0;A<p;A++){const M=A%3*2/3-1,R=A>2?0:-1,I=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(I,g*_*A),x.set(f,m*_*A);const y=[A,A,A,A,A,A];S.set(y,h*_*A)}const C=new Zr;C.setAttribute("position",new Mi(v,g)),C.setAttribute("uv",new Mi(x,m)),C.setAttribute("faceIndex",new Mi(S,h)),e.push(C),r>xa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gv(n,e,t){const i=new Lo(n,e,t);return i.texture.mapping=Md,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cc(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xP(n,e,t){const i=new Float32Array(oo),r=new q(0,1,0);return new qr({name:"SphericalGaussianBlur",defines:{n:oo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ag(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function vv(){return new qr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ag(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function xv(){return new qr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ag(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ag(){return`

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
	`}function yP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===nm||l===im,c=l===qa||l===$a;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new _v(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new _v(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function SP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&uf("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function MP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],A=v[x+1],M=v[x+2];f.push(C,A,A,M,M,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,A=x+1,M=x+2;f.push(C,A,A,M,M,C)}}else return;const m=new(ZS(f)?sM:rM)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function EP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function TP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function wP(n,e,t){const i=new WeakMap,r=new $t;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*A*4*d),R=new JS(M,C,A,d);R.type=Nr,R.needsUpdate=!0;const I=S*4;for(let T=0;T<d;T++){const U=h[T],z=v[T],X=x[T],$=C*A*4*T;for(let B=0;B<U.count;B++){const Y=B*I;_===!0&&(r.fromBufferAttribute(U,B),M[$+Y+0]=r.x,M[$+Y+1]=r.y,M[$+Y+2]=r.z,M[$+Y+3]=0),g===!0&&(r.fromBufferAttribute(z,B),M[$+Y+4]=r.x,M[$+Y+5]=r.y,M[$+Y+6]=r.z,M[$+Y+7]=0),m===!0&&(r.fromBufferAttribute(X,B),M[$+Y+8]=r.x,M[$+Y+9]=r.y,M[$+Y+10]=r.z,M[$+Y+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new Tt(C,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function AP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class fM extends ei{constructor(e,t,i,r,s,o,a,l,u,c=ba){if(c!==ba&&c!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ba&&(i=Do),i===void 0&&c===Ka&&(i=ja),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:zi,this.minFilter=l!==void 0?l:zi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dM=new ei,yv=new fM(1,1),hM=new JS,pM=new fA,mM=new lM,Sv=[],Mv=[],Ev=new Float32Array(16),Tv=new Float32Array(9),wv=new Float32Array(4);function ll(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Sv[r];if(s===void 0&&(s=new Float32Array(r),Sv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ad(n,e){let t=Mv[e];t===void 0&&(t=new Int32Array(e),Mv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function CP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function PP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function bP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function DP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;wv.set(i),n.uniformMatrix2fv(this.addr,!1,wv),an(t,i)}}function LP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Tv.set(i),n.uniformMatrix3fv(this.addr,!1,Tv),an(t,i)}}function IP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Ev.set(i),n.uniformMatrix4fv(this.addr,!1,Ev),an(t,i)}}function UP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function OP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function FP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function kP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function zP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function BP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function HP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function VP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yv.compareFunction=KS,s=yv):s=dM,t.setTexture2D(e||s,r)}function GP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||pM,r)}function WP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||mM,r)}function XP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hM,r)}function YP(n){switch(n){case 5126:return CP;case 35664:return RP;case 35665:return PP;case 35666:return bP;case 35674:return DP;case 35675:return LP;case 35676:return IP;case 5124:case 35670:return UP;case 35667:case 35671:return NP;case 35668:case 35672:return OP;case 35669:case 35673:return FP;case 5125:return kP;case 36294:return zP;case 36295:return BP;case 36296:return HP;case 35678:case 36198:case 36298:case 36306:case 35682:return VP;case 35679:case 36299:case 36307:return GP;case 35680:case 36300:case 36308:case 36293:return WP;case 36289:case 36303:case 36311:case 36292:return XP}}function qP(n,e){n.uniform1fv(this.addr,e)}function $P(n,e){const t=ll(e,this.size,2);n.uniform2fv(this.addr,t)}function jP(n,e){const t=ll(e,this.size,3);n.uniform3fv(this.addr,t)}function KP(n,e){const t=ll(e,this.size,4);n.uniform4fv(this.addr,t)}function ZP(n,e){const t=ll(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QP(n,e){const t=ll(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function JP(n,e){const t=ll(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function e2(n,e){n.uniform1iv(this.addr,e)}function t2(n,e){n.uniform2iv(this.addr,e)}function n2(n,e){n.uniform3iv(this.addr,e)}function i2(n,e){n.uniform4iv(this.addr,e)}function r2(n,e){n.uniform1uiv(this.addr,e)}function s2(n,e){n.uniform2uiv(this.addr,e)}function o2(n,e){n.uniform3uiv(this.addr,e)}function a2(n,e){n.uniform4uiv(this.addr,e)}function l2(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||dM,s[o])}function u2(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||pM,s[o])}function c2(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||mM,s[o])}function f2(n,e,t){const i=this.cache,r=e.length,s=Ad(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||hM,s[o])}function d2(n){switch(n){case 5126:return qP;case 35664:return $P;case 35665:return jP;case 35666:return KP;case 35674:return ZP;case 35675:return QP;case 35676:return JP;case 5124:case 35670:return e2;case 35667:case 35671:return t2;case 35668:case 35672:return n2;case 35669:case 35673:return i2;case 5125:return r2;case 36294:return s2;case 36295:return o2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return l2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return c2;case 36289:case 36303:case 36311:case 36292:return f2}}class h2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=YP(t.type)}}class p2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d2(t.type)}}class m2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Nh=/(\w+)(\])?(\[|\.)?/g;function Av(n,e){n.seq.push(e),n.map[e.id]=e}function _2(n,e,t){const i=n.name,r=i.length;for(Nh.lastIndex=0;;){const s=Nh.exec(i),o=Nh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Av(t,u===void 0?new h2(a,n,e):new p2(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new m2(a),Av(t,d)),t=d}}}class cf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);_2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Cv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const g2=37297;let v2=0;function x2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function y2(n){const e=pt.getPrimaries(pt.workingColorSpace),t=pt.getPrimaries(n);let i;switch(e===t?i="":e===Yf&&t===Xf?i="LinearDisplayP3ToLinearSRGB":e===Xf&&t===Yf&&(i="LinearSRGBToLinearDisplayP3"),n){case Vs:case Ed:return[i,"LinearTransferOETF"];case ur:case og:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+x2(n.getShaderSource(e),o)}else return r}function S2(n,e){const t=y2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function M2(n,e){let t;switch(e){case Nw:t="Linear";break;case Ow:t="Reinhard";break;case Fw:t="Cineon";break;case kw:t="ACESFilmic";break;case Bw:t="AgX";break;case Hw:t="Neutral";break;case zw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rc=new q;function E2(){pt.getLuminanceCoefficients(Rc);const n=Rc.x.toFixed(4),e=Rc.y.toFixed(4),t=Rc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bl).join(`
`)}function w2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function bl(n){return n!==""}function Pv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Im(n){return n.replace(C2,P2)}const R2=new Map;function P2(n,e){let t=Ze[e];if(t===void 0){const i=R2.get(e);if(i!==void 0)t=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Im(t)}const b2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(n){return n.replace(b2,D2)}function D2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function L2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===FS?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pw?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function I2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qa:case $a:e="ENVMAP_TYPE_CUBE";break;case Md:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case $a:e="ENVMAP_MODE_REFRACTION";break}return e}function N2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kS:e="ENVMAP_BLENDING_MULTIPLY";break;case Iw:e="ENVMAP_BLENDING_MIX";break;case Uw:e="ENVMAP_BLENDING_ADD";break}return e}function O2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function F2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=L2(t),u=I2(t),c=U2(t),d=N2(t),f=O2(t),p=T2(t),_=w2(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bl).join(`
`),h.length>0&&(h+=`
`)):(m=[Lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bl).join(`
`),h=[Lv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rs?"#define TONE_MAPPING":"",t.toneMapping!==Rs?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Rs?M2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,S2("linearToOutputTexel",t.outputColorSpace),E2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bl).join(`
`)),o=Im(o),o=Pv(o,t),o=bv(o,t),a=Im(a),a=Pv(a,t),a=bv(a,t),o=Dv(o),a=Dv(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===j0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===j0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,S=v+h+a,C=Cv(r,r.VERTEX_SHADER,x),A=Cv(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function M(T){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(C).trim(),X=r.getShaderInfoLog(A).trim();let $=!0,B=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,A);else{const Y=Rv(r,C,"vertex"),L=Rv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+U+`
`+Y+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||X==="")&&(B=!1);B&&(T.diagnostics={runnable:$,programLog:U,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:h}})}r.deleteShader(C),r.deleteShader(A),R=new cf(r,g),I=A2(r,g)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let I;this.getAttributes=function(){return I===void 0&&M(this),I};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,g2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v2++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let k2=0;class z2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new B2(e),t.set(e,i)),i}}class B2{constructor(e){this.id=k2++,this.code=e,this.usedTimes=0}}function H2(n,e,t,i,r,s,o){const a=new tM,l=new z2,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function h(y,T,U,z,X){const $=z.fog,B=X.geometry,Y=y.isMeshStandardMaterial?z.environment:null,L=(y.isMeshStandardMaterial?t:e).get(y.envMap||Y),j=L&&L.mapping===Md?L.image.height:null,P=g[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ye=te!==void 0?te.length:0;let He=0;B.morphAttributes.position!==void 0&&(He=1),B.morphAttributes.normal!==void 0&&(He=2),B.morphAttributes.color!==void 0&&(He=3);let H,Q,re,ae;if(P){const De=dr[P];H=De.vertexShader,Q=De.fragmentShader}else H=y.vertexShader,Q=y.fragmentShader,l.update(y),re=l.getVertexShaderID(y),ae=l.getFragmentShaderID(y);const Ce=n.getRenderTarget(),Te=X.isInstancedMesh===!0,qe=X.isBatchedMesh===!0,We=!!y.map,Fe=!!y.matcap,D=!!L,rt=!!y.aoMap,ke=!!y.lightMap,Ve=!!y.bumpMap,k=!!y.normalMap,Ue=!!y.displacementMap,Ae=!!y.emissiveMap,b=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,J=y.clearcoat>0,ie=y.dispersion>0,Z=y.iridescence>0,Se=y.sheen>0,oe=y.transmission>0,he=G&&!!y.anisotropyMap,Ge=J&&!!y.clearcoatMap,se=J&&!!y.clearcoatNormalMap,xe=J&&!!y.clearcoatRoughnessMap,Me=Z&&!!y.iridescenceMap,Oe=Z&&!!y.iridescenceThicknessMap,me=Se&&!!y.sheenColorMap,Ye=Se&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Je=!!y.specularColorMap,N=!!y.specularIntensityMap,ne=oe&&!!y.transmissionMap,K=oe&&!!y.thicknessMap,ee=!!y.gradientMap,ce=!!y.alphaMap,fe=y.alphaTest>0,$e=!!y.alphaHash,yt=!!y.extensions;let Dt=Rs;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const st={shaderID:P,shaderType:y.type,shaderName:y.name,vertexShader:H,fragmentShader:Q,defines:y.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,batching:qe,batchingColor:qe&&X._colorsTexture!==null,instancing:Te,instancingColor:Te&&X.instanceColor!==null,instancingMorph:Te&&X.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Vs,alphaToCoverage:!!y.alphaToCoverage,map:We,matcap:Fe,envMap:D,envMapMode:D&&L.mapping,envMapCubeUVHeight:j,aoMap:rt,lightMap:ke,bumpMap:Ve,normalMap:k,displacementMap:p&&Ue,emissiveMap:Ae,normalMapObjectSpace:k&&y.normalMapType===Yw,normalMapTangentSpace:k&&y.normalMapType===Xw,metalnessMap:b,roughnessMap:E,anisotropy:G,anisotropyMap:he,clearcoat:J,clearcoatMap:Ge,clearcoatNormalMap:se,clearcoatRoughnessMap:xe,dispersion:ie,iridescence:Z,iridescenceMap:Me,iridescenceThicknessMap:Oe,sheen:Se,sheenColorMap:me,sheenRoughnessMap:Ye,specularMap:Ne,specularColorMap:Je,specularIntensityMap:N,transmission:oe,transmissionMap:ne,thicknessMap:K,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Pa&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:fe,alphaHash:$e,combine:y.combine,mapUv:We&&m(y.map.channel),aoMapUv:rt&&m(y.aoMap.channel),lightMapUv:ke&&m(y.lightMap.channel),bumpMapUv:Ve&&m(y.bumpMap.channel),normalMapUv:k&&m(y.normalMap.channel),displacementMapUv:Ue&&m(y.displacementMap.channel),emissiveMapUv:Ae&&m(y.emissiveMap.channel),metalnessMapUv:b&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:he&&m(y.anisotropyMap.channel),clearcoatMapUv:Ge&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:Je&&m(y.specularColorMap.channel),specularIntensityMapUv:N&&m(y.specularIntensityMap.channel),transmissionMapUv:ne&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:ce&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(k||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!B.attributes.uv&&(We||ce),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:He,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:We&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dr,flipSided:y.side===Jn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return st.vertexUv1s=u.has(1),st.vertexUv2s=u.has(2),st.vertexUv3s=u.has(3),u.clear(),st}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)T.push(U),T.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const T=g[y.type];let U;if(T){const z=dr[T];U=EA.clone(z.uniforms)}else U=y.uniforms;return U}function A(y,T){let U;for(let z=0,X=c.length;z<X;z++){const $=c[z];if($.cacheKey===T){U=$,++U.usedTimes;break}}return U===void 0&&(U=new F2(n,T,y,s),c.push(U)),U}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function I(){l.dispose()}return{getParameters:h,getProgramCacheKey:v,getUniforms:C,acquireProgram:A,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:I}}function V2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function G2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||G2),i.length>1&&i.sort(f||Iv),r.length>1&&r.sort(f||Iv)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function W2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Uv,n.set(i,[o])):r>=s.length?(o=new Uv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function X2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new gt};break;case"SpotLight":t={position:new q,direction:new q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function Y2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let q2=0;function $2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function j2(n){const e=new X2,t=Y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,s=new Kt,o=new Kt;function a(u){let c=0,d=0,f=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,x=0,S=0,C=0,A=0,M=0;u.sort($2);for(let I=0,y=u.length;I<y;I++){const T=u[I],U=T.color,z=T.intensity,X=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=U.r*z,d+=U.g*z,f+=U.b*z;else if(T.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(T.sh.coefficients[B],z);M++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Y=T.shadow,L=t.get(T);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=T.shadow.matrix,v++}i.directional[p]=B,p++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(U).multiplyScalar(z),B.distance=X,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,i.spot[g]=B;const Y=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,Y.updateMatrices(T),T.castShadow&&A++),i.spotLightMatrix[g]=Y.matrix,T.castShadow){const L=t.get(T);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,i.spotShadow[g]=L,i.spotShadowMap[g]=$,S++}g++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(U).multiplyScalar(z),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=B,m++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const Y=T.shadow,L=t.get(T);L.shadowIntensity=Y.intensity,L.shadowBias=Y.bias,L.shadowNormalBias=Y.normalBias,L.shadowRadius=Y.radius,L.shadowMapSize=Y.mapSize,L.shadowCameraNear=Y.camera.near,L.shadowCameraFar=Y.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=T.shadow.matrix,x++}i.point[_]=B,_++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(z),B.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[h]=B,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=M,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=M,i.version=q2++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Nv(n){const e=new j2(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function K2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Nv(n),e.set(r,[a])):s>=o.length?(a=new Nv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Z2 extends Vu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q2 extends Vu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const J2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
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
}`;function tb(n,e,t){let i=new uM;const r=new Tt,s=new Tt,o=new $t,a=new Z2({depthPacking:Ww}),l=new Q2,u={},c=t.maxTextureSize,d={[Us]:Jn,[Jn]:Us,[Dr]:Dr},f=new qr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:J2,fragmentShader:eb}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Zr;_.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Fr(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=FS;let h=this.type;this.render=function(A,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const I=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Cs),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=h!==Ar&&this.type===Ar,X=h===Ar&&this.type!==Ar;for(let $=0,B=A.length;$<B;$++){const Y=A[$],L=Y.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||z===!0||X===!0){const te=this.type!==Ar?{minFilter:zi,magFilter:zi}:{};L.map!==null&&L.map.dispose(),L.map=new Lo(r.x,r.y,te),L.map.texture.name=Y.name+".shadowMap",L.camera.updateProjectionMatrix()}n.setRenderTarget(L.map),n.clear();const P=L.getViewportCount();for(let te=0;te<P;te++){const ye=L.getViewport(te);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(o),L.updateMatrices(Y,te),i=L.getFrustum(),S(M,R,L.camera,Y,this.type)}L.isPointLightShadow!==!0&&this.type===Ar&&v(L,R),L.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(I,y,T)};function v(A,M){const R=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Lo(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,R,p,g,null)}function x(A,M,R,I){let y=null;const T=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const U=y.uuid,z=M.uuid;let X=u[U];X===void 0&&(X={},u[U]=X);let $=X[z];$===void 0&&($=y.clone(),X[z]=$,M.addEventListener("dispose",C)),y=$}if(y.visible=M.visible,y.wireframe=M.wireframe,I===Ar?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:d[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=R}return y}function S(A,M,R,I,y){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Ar)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const z=e.update(A),X=A.material;if(Array.isArray(X)){const $=z.groups;for(let B=0,Y=$.length;B<Y;B++){const L=$[B],j=X[L.materialIndex];if(j&&j.visible){const P=x(A,j,I,y);A.onBeforeShadow(n,A,M,R,z,P,L),n.renderBufferDirect(R,null,z,P,A,L),A.onAfterShadow(n,A,M,R,z,P,L)}}}else if(X.visible){const $=x(A,X,I,y);A.onBeforeShadow(n,A,M,R,z,$,null),n.renderBufferDirect(R,null,z,$,A,null),A.onAfterShadow(n,A,M,R,z,$,null)}}const U=A.children;for(let z=0,X=U.length;z<X;z++)S(U[z],M,R,I,y)}function C(A){A.target.removeEventListener("dispose",C);for(const R in u){const I=u[R],y=A.target.uuid;y in I&&(I[y].dispose(),delete I[y])}}}const nb={[jp]:Kp,[Zp]:em,[Qp]:tm,[Ya]:Jp,[Kp]:jp,[em]:Zp,[tm]:Qp,[Jp]:Ya};function ib(n){function e(){let N=!1;const ne=new $t;let K=null;const ee=new $t(0,0,0,0);return{setMask:function(ce){K!==ce&&!N&&(n.colorMask(ce,ce,ce,ce),K=ce)},setLocked:function(ce){N=ce},setClear:function(ce,fe,$e,yt,Dt){Dt===!0&&(ce*=yt,fe*=yt,$e*=yt),ne.set(ce,fe,$e,yt),ee.equals(ne)===!1&&(n.clearColor(ce,fe,$e,yt),ee.copy(ne))},reset:function(){N=!1,K=null,ee.set(-1,0,0,0)}}}function t(){let N=!1,ne=!1,K=null,ee=null,ce=null;return{setReversed:function(fe){ne=fe},setTest:function(fe){fe?re(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(fe){K!==fe&&!N&&(n.depthMask(fe),K=fe)},setFunc:function(fe){if(ne&&(fe=nb[fe]),ee!==fe){switch(fe){case jp:n.depthFunc(n.NEVER);break;case Kp:n.depthFunc(n.ALWAYS);break;case Zp:n.depthFunc(n.LESS);break;case Ya:n.depthFunc(n.LEQUAL);break;case Qp:n.depthFunc(n.EQUAL);break;case Jp:n.depthFunc(n.GEQUAL);break;case em:n.depthFunc(n.GREATER);break;case tm:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=fe}},setLocked:function(fe){N=fe},setClear:function(fe){ce!==fe&&(n.clearDepth(fe),ce=fe)},reset:function(){N=!1,K=null,ee=null,ce=null}}}function i(){let N=!1,ne=null,K=null,ee=null,ce=null,fe=null,$e=null,yt=null,Dt=null;return{setTest:function(st){N||(st?re(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(st){ne!==st&&!N&&(n.stencilMask(st),ne=st)},setFunc:function(st,De,Re){(K!==st||ee!==De||ce!==Re)&&(n.stencilFunc(st,De,Re),K=st,ee=De,ce=Re)},setOp:function(st,De,Re){(fe!==st||$e!==De||yt!==Re)&&(n.stencilOp(st,De,Re),fe=st,$e=De,yt=Re)},setLocked:function(st){N=st},setClear:function(st){Dt!==st&&(n.clearStencil(st),Dt=st)},reset:function(){N=!1,ne=null,K=null,ee=null,ce=null,fe=null,$e=null,yt=null,Dt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,A=new gt(0,0,0),M=0,R=!1,I=null,y=null,T=null,U=null,z=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=B>=2);let L=null,j={};const P=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),ye=new $t().fromArray(P),He=new $t().fromArray(te);function H(N,ne,K,ee){const ce=new Uint8Array(4),fe=n.createTexture();n.bindTexture(N,fe),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $e=0;$e<K;$e++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(ne+$e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return fe}const Q={};Q[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(n.DEPTH_TEST),s.setFunc(Ya),ke(!1),Ve(W0),re(n.CULL_FACE),D(Cs);function re(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ae(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ce(N,ne){return c[N]!==ne?(n.bindFramebuffer(N,ne),c[N]=ne,N===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ne),N===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ne),!0):!1}function Te(N,ne){let K=f,ee=!1;if(N){K=d.get(ne),K===void 0&&(K=[],d.set(ne,K));const ce=N.textures;if(K.length!==ce.length||K[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,$e=ce.length;fe<$e;fe++)K[fe]=n.COLOR_ATTACHMENT0+fe;K.length=ce.length,ee=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ee=!0);ee&&n.drawBuffers(K)}function qe(N){return p!==N?(n.useProgram(N),p=N,!0):!1}const We={[so]:n.FUNC_ADD,[_w]:n.FUNC_SUBTRACT,[gw]:n.FUNC_REVERSE_SUBTRACT};We[vw]=n.MIN,We[xw]=n.MAX;const Fe={[yw]:n.ZERO,[Sw]:n.ONE,[Mw]:n.SRC_COLOR,[qp]:n.SRC_ALPHA,[Rw]:n.SRC_ALPHA_SATURATE,[Aw]:n.DST_COLOR,[Tw]:n.DST_ALPHA,[Ew]:n.ONE_MINUS_SRC_COLOR,[$p]:n.ONE_MINUS_SRC_ALPHA,[Cw]:n.ONE_MINUS_DST_COLOR,[ww]:n.ONE_MINUS_DST_ALPHA,[Pw]:n.CONSTANT_COLOR,[bw]:n.ONE_MINUS_CONSTANT_COLOR,[Dw]:n.CONSTANT_ALPHA,[Lw]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,ne,K,ee,ce,fe,$e,yt,Dt,st){if(N===Cs){_===!0&&(ae(n.BLEND),_=!1);return}if(_===!1&&(re(n.BLEND),_=!0),N!==mw){if(N!==g||st!==R){if((m!==so||x!==so)&&(n.blendEquation(n.FUNC_ADD),m=so,x=so),st)switch(N){case Pa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.ONE,n.ONE);break;case X0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Y0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Pa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yp:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case X0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Y0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,v=null,S=null,C=null,A.set(0,0,0),M=0,g=N,R=st}return}ce=ce||ne,fe=fe||K,$e=$e||ee,(ne!==m||ce!==x)&&(n.blendEquationSeparate(We[ne],We[ce]),m=ne,x=ce),(K!==h||ee!==v||fe!==S||$e!==C)&&(n.blendFuncSeparate(Fe[K],Fe[ee],Fe[fe],Fe[$e]),h=K,v=ee,S=fe,C=$e),(yt.equals(A)===!1||Dt!==M)&&(n.blendColor(yt.r,yt.g,yt.b,Dt),A.copy(yt),M=Dt),g=N,R=!1}function rt(N,ne){N.side===Dr?ae(n.CULL_FACE):re(n.CULL_FACE);let K=N.side===Jn;ne&&(K=!K),ke(K),N.blending===Pa&&N.transparent===!1?D(Cs):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const ee=N.stencilWrite;o.setTest(ee),ee&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){I!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),I=N)}function Ve(N){N!==dw?(re(n.CULL_FACE),N!==y&&(N===W0?n.cullFace(n.BACK):N===hw?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),y=N}function k(N){N!==T&&($&&n.lineWidth(N),T=N)}function Ue(N,ne,K){N?(re(n.POLYGON_OFFSET_FILL),(U!==ne||z!==K)&&(n.polygonOffset(ne,K),U=ne,z=K)):ae(n.POLYGON_OFFSET_FILL)}function Ae(N){N?re(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function b(N){N===void 0&&(N=n.TEXTURE0+X-1),L!==N&&(n.activeTexture(N),L=N)}function E(N,ne,K){K===void 0&&(L===null?K=n.TEXTURE0+X-1:K=L);let ee=j[K];ee===void 0&&(ee={type:void 0,texture:void 0},j[K]=ee),(ee.type!==N||ee.texture!==ne)&&(L!==K&&(n.activeTexture(K),L=K),n.bindTexture(N,ne||Q[N]),ee.type=N,ee.texture=ne)}function G(){const N=j[L];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Oe(N){ye.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ye.copy(N))}function me(N){He.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Ye(N,ne){let K=l.get(ne);K===void 0&&(K=new WeakMap,l.set(ne,K));let ee=K.get(N);ee===void 0&&(ee=n.getUniformBlockIndex(ne,N.name),K.set(N,ee))}function Ne(N,ne){const ee=l.get(ne).get(N);a.get(ne)!==ee&&(n.uniformBlockBinding(ne,ee,N.__bindingPointIndex),a.set(ne,ee))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},L=null,j={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,S=null,C=null,A=new gt(0,0,0),M=0,R=!1,I=null,y=null,T=null,U=null,z=null,ye.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:re,disable:ae,bindFramebuffer:Ce,drawBuffers:Te,useProgram:qe,setBlending:D,setMaterial:rt,setFlipSided:ke,setCullFace:Ve,setLineWidth:k,setPolygonOffset:Ue,setScissorTest:Ae,activeTexture:b,bindTexture:E,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:ie,texImage2D:xe,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:Ne,texStorage2D:Ge,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Se,compressedTexSubImage2D:oe,compressedTexSubImage3D:he,scissor:Oe,viewport:me,reset:Je}}function Ov(n,e,t,i){const r=rb(i);switch(t){case GS:return n*e;case XS:return n*e;case YS:return n*e*2;case qS:return n*e/r.components*r.byteLength;case ig:return n*e/r.components*r.byteLength;case $S:return n*e*2/r.components*r.byteLength;case rg:return n*e*2/r.components*r.byteLength;case WS:return n*e*3/r.components*r.byteLength;case ir:return n*e*4/r.components*r.byteLength;case sg:return n*e*4/r.components*r.byteLength;case rf:case sf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case of:case af:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case am:case um:return Math.max(n,16)*Math.max(e,8)/4;case om:case lm:return Math.max(n,8)*Math.max(e,8)/2;case cm:case fm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case _m:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xm:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ym:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Em:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Am:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lf:case Cm:case Rm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jS:case Pm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bm:case Dm:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function rb(n){switch(n){case Xr:case BS:return{byteLength:1,components:1};case Mu:case HS:case ku:return{byteLength:2,components:1};case tg:case ng:return{byteLength:2,components:4};case Do:case eg:case Nr:return{byteLength:4,components:1};case VS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function sb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Tt,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,E){return p?new OffscreenCanvas(b,E):$f("canvas")}function g(b,E,G){let J=1;const ie=Ae(b);if((ie.width>G||ie.height>G)&&(J=G/Math.max(ie.width,ie.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(J*ie.width),Se=Math.floor(J*ie.height);d===void 0&&(d=_(Z,Se));const oe=E?_(Z,Se):d;return oe.width=Z,oe.height=Se,oe.getContext("2d").drawImage(b,0,0,Z,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Z+"x"+Se+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==zi&&b.minFilter!==tr}function h(b){n.generateMipmap(b)}function v(b,E,G,J,ie=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=E;if(E===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),G===n.UNSIGNED_INT&&(Z=n.RGB32UI),G===n.BYTE&&(Z=n.RGB8I),G===n.SHORT&&(Z=n.RGB16I),G===n.INT&&(Z=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),G===n.UNSIGNED_INT&&(Z=n.RGBA32UI),G===n.BYTE&&(Z=n.RGBA8I),G===n.SHORT&&(Z=n.RGBA16I),G===n.INT&&(Z=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),E===n.RGBA){const Se=ie?Wf:pt.getTransfer(J);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=Se===Pt?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(b,E){let G;return b?E===null||E===Do||E===ja?G=n.DEPTH24_STENCIL8:E===Nr?G=n.DEPTH32F_STENCIL8:E===Mu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Do||E===ja?G=n.DEPTH_COMPONENT24:E===Nr?G=n.DEPTH_COMPONENT32F:E===Mu&&(G=n.DEPTH_COMPONENT16),G}function S(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==zi&&b.minFilter!==tr?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function C(b){const E=b.target;E.removeEventListener("dispose",C),M(E),E.isVideoTexture&&c.delete(E)}function A(b){const E=b.target;E.removeEventListener("dispose",A),I(E)}function M(b){const E=i.get(b);if(E.__webglInit===void 0)return;const G=b.source,J=f.get(G);if(J){const ie=J[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&R(b),Object.keys(J).length===0&&f.delete(G)}i.remove(b)}function R(b){const E=i.get(b);n.deleteTexture(E.__webglTexture);const G=b.source,J=f.get(G);delete J[E.__cacheKey],o.memory.textures--}function I(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let ie=0;ie<E.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(E.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=b.textures;for(let J=0,ie=G.length;J<ie;J++){const Z=i.get(G[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(G[J])}i.remove(b)}let y=0;function T(){y=0}function U(){const b=y;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),y+=1,b}function z(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function X(b,E){const G=i.get(b);if(b.isVideoTexture&&k(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(G,b,E);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function $(b,E){const G=i.get(b);if(b.version>0&&G.__version!==b.version){He(G,b,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function B(b,E){const G=i.get(b);if(b.version>0&&G.__version!==b.version){He(G,b,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function Y(b,E){const G=i.get(b);if(b.version>0&&G.__version!==b.version){H(G,b,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const L={[rm]:n.REPEAT,[co]:n.CLAMP_TO_EDGE,[sm]:n.MIRRORED_REPEAT},j={[zi]:n.NEAREST,[Vw]:n.NEAREST_MIPMAP_NEAREST,[lc]:n.NEAREST_MIPMAP_LINEAR,[tr]:n.LINEAR,[oh]:n.LINEAR_MIPMAP_NEAREST,[fo]:n.LINEAR_MIPMAP_LINEAR},P={[qw]:n.NEVER,[Jw]:n.ALWAYS,[$w]:n.LESS,[KS]:n.LEQUAL,[jw]:n.EQUAL,[Qw]:n.GEQUAL,[Kw]:n.GREATER,[Zw]:n.NOTEQUAL};function te(b,E){if(E.type===Nr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===tr||E.magFilter===oh||E.magFilter===lc||E.magFilter===fo||E.minFilter===tr||E.minFilter===oh||E.minFilter===lc||E.minFilter===fo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,L[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,L[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,L[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,j[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,j[E.minFilter]),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zi||E.minFilter!==lc&&E.minFilter!==fo||E.type===Nr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ye(b,E){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",C));const J=E.source;let ie=f.get(J);ie===void 0&&(ie={},f.set(J,ie));const Z=z(E);if(Z!==b.__cacheKey){ie[Z]===void 0&&(ie[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[Z].usedTimes++;const Se=ie[b.__cacheKey];Se!==void 0&&(ie[b.__cacheKey].usedTimes--,Se.usedTimes===0&&R(E)),b.__cacheKey=Z,b.__webglTexture=ie[Z].texture}return G}function He(b,E,G){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const ie=ye(b,E),Z=E.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+G);const Se=i.get(Z);if(Z.version!==Se.__version||ie===!0){t.activeTexture(n.TEXTURE0+G);const oe=pt.getPrimaries(pt.workingColorSpace),he=E.colorSpace===fs?null:pt.getPrimaries(E.colorSpace),Ge=E.colorSpace===fs||oe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let se=g(E.image,!1,r.maxTextureSize);se=Ue(E,se);const xe=s.convert(E.format,E.colorSpace),Me=s.convert(E.type);let Oe=v(E.internalFormat,xe,Me,E.colorSpace,E.isVideoTexture);te(J,E);let me;const Ye=E.mipmaps,Ne=E.isVideoTexture!==!0,Je=Se.__version===void 0||ie===!0,N=Z.dataReady,ne=S(E,se);if(E.isDepthTexture)Oe=x(E.format===Ka,E.type),Je&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,Oe,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Oe,se.width,se.height,0,xe,Me,null));else if(E.isDataTexture)if(Ye.length>0){Ne&&Je&&t.texStorage2D(n.TEXTURE_2D,ne,Oe,Ye[0].width,Ye[0].height);for(let K=0,ee=Ye.length;K<ee;K++)me=Ye[K],Ne?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,xe,Me,me.data):t.texImage2D(n.TEXTURE_2D,K,Oe,me.width,me.height,0,xe,Me,me.data);E.generateMipmaps=!1}else Ne?(Je&&t.texStorage2D(n.TEXTURE_2D,ne,Oe,se.width,se.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,xe,Me,se.data)):t.texImage2D(n.TEXTURE_2D,0,Oe,se.width,se.height,0,xe,Me,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Oe,Ye[0].width,Ye[0].height,se.depth);for(let K=0,ee=Ye.length;K<ee;K++)if(me=Ye[K],E.format!==ir)if(xe!==null)if(Ne){if(N)if(E.layerUpdates.size>0){const ce=Ov(me.width,me.height,E.format,E.type);for(const fe of E.layerUpdates){const $e=me.data.subarray(fe*ce/me.data.BYTES_PER_ELEMENT,(fe+1)*ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,fe,me.width,me.height,1,xe,$e,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,xe,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Oe,me.width,me.height,se.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,me.width,me.height,se.depth,xe,Me,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Oe,me.width,me.height,se.depth,0,xe,Me,me.data)}else{Ne&&Je&&t.texStorage2D(n.TEXTURE_2D,ne,Oe,Ye[0].width,Ye[0].height);for(let K=0,ee=Ye.length;K<ee;K++)me=Ye[K],E.format!==ir?xe!==null?Ne?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,xe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Oe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,me.width,me.height,xe,Me,me.data):t.texImage2D(n.TEXTURE_2D,K,Oe,me.width,me.height,0,xe,Me,me.data)}else if(E.isDataArrayTexture)if(Ne){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ne,Oe,se.width,se.height,se.depth),N)if(E.layerUpdates.size>0){const K=Ov(se.width,se.height,E.format,E.type);for(const ee of E.layerUpdates){const ce=se.data.subarray(ee*K/se.data.BYTES_PER_ELEMENT,(ee+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,xe,Me,ce)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Me,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,se.width,se.height,se.depth,0,xe,Me,se.data);else if(E.isData3DTexture)Ne?(Je&&t.texStorage3D(n.TEXTURE_3D,ne,Oe,se.width,se.height,se.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Me,se.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,se.width,se.height,se.depth,0,xe,Me,se.data);else if(E.isFramebufferTexture){if(Je)if(Ne)t.texStorage2D(n.TEXTURE_2D,ne,Oe,se.width,se.height);else{let K=se.width,ee=se.height;for(let ce=0;ce<ne;ce++)t.texImage2D(n.TEXTURE_2D,ce,Oe,K,ee,0,xe,Me,null),K>>=1,ee>>=1}}else if(Ye.length>0){if(Ne&&Je){const K=Ae(Ye[0]);t.texStorage2D(n.TEXTURE_2D,ne,Oe,K.width,K.height)}for(let K=0,ee=Ye.length;K<ee;K++)me=Ye[K],Ne?N&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,xe,Me,me):t.texImage2D(n.TEXTURE_2D,K,Oe,xe,Me,me);E.generateMipmaps=!1}else if(Ne){if(Je){const K=Ae(se);t.texStorage2D(n.TEXTURE_2D,ne,Oe,K.width,K.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,xe,Me,se)}else t.texImage2D(n.TEXTURE_2D,0,Oe,xe,Me,se);m(E)&&h(J),Se.__version=Z.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function H(b,E,G){if(E.image.length!==6)return;const J=ye(b,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+G);const Z=i.get(ie);if(ie.version!==Z.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const Se=pt.getPrimaries(pt.workingColorSpace),oe=E.colorSpace===fs?null:pt.getPrimaries(E.colorSpace),he=E.colorSpace===fs||Se===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ge=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!Ge&&!se?xe[ee]=g(E.image[ee],!0,r.maxCubemapSize):xe[ee]=se?E.image[ee].image:E.image[ee],xe[ee]=Ue(E,xe[ee]);const Me=xe[0],Oe=s.convert(E.format,E.colorSpace),me=s.convert(E.type),Ye=v(E.internalFormat,Oe,me,E.colorSpace),Ne=E.isVideoTexture!==!0,Je=Z.__version===void 0||J===!0,N=ie.dataReady;let ne=S(E,Me);te(n.TEXTURE_CUBE_MAP,E);let K;if(Ge){Ne&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Ye,Me.width,Me.height);for(let ee=0;ee<6;ee++){K=xe[ee].mipmaps;for(let ce=0;ce<K.length;ce++){const fe=K[ce];E.format!==ir?Oe!==null?Ne?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,fe.width,fe.height,Oe,fe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,Ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,0,0,fe.width,fe.height,Oe,me,fe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce,Ye,fe.width,fe.height,0,Oe,me,fe.data)}}}else{if(K=E.mipmaps,Ne&&Je){K.length>0&&ne++;const ee=Ae(xe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ne,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,Oe,me,xe[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,xe[ee].width,xe[ee].height,0,Oe,me,xe[ee].data);for(let ce=0;ce<K.length;ce++){const $e=K[ce].image[ee].image;Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,$e.width,$e.height,Oe,me,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,Ye,$e.width,$e.height,0,Oe,me,$e.data)}}else{Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,me,xe[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Oe,me,xe[ee]);for(let ce=0;ce<K.length;ce++){const fe=K[ce];Ne?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,0,0,Oe,me,fe.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ce+1,Ye,Oe,me,fe.image[ee])}}}m(E)&&h(n.TEXTURE_CUBE_MAP),Z.__version=ie.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Q(b,E,G,J,ie,Z){const Se=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),he=v(G.internalFormat,Se,oe,G.colorSpace);if(!i.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>Z),xe=Math.max(1,E.height>>Z);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,Z,he,se,xe,E.depth,0,Se,oe,null):t.texImage2D(ie,Z,he,se,xe,0,Se,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ie,i.get(G).__webglTexture,0,ke(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ie,i.get(G).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(b,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer){const J=E.depthTexture,ie=J&&J.isDepthTexture?J.type:null,Z=x(E.stencilBuffer,ie),Se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=ke(E);Ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,Z,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Z,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Z,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,b)}else{const J=E.textures;for(let ie=0;ie<J.length;ie++){const Z=J[ie],Se=s.convert(Z.format,Z.colorSpace),oe=s.convert(Z.type),he=v(Z.internalFormat,Se,oe,Z.colorSpace),Ge=ke(E);G&&Ve(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,he,E.width,E.height):Ve(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ge,he,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,he,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ae(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,ie=ke(E);if(E.depthTexture.format===ba)Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===Ka)Ve(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ie):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ce(b){const E=i.get(b),G=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),J){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,J.removeEventListener("dispose",ie)};J.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=J}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ae(E.__webglFramebuffer,b)}else if(G){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]===void 0)E.__webglDepthbuffer[J]=n.createRenderbuffer(),re(E.__webglDepthbuffer[J],b,!1);else{const ie=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),re(E.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Te(b,E,G){const J=i.get(b);E!==void 0&&Q(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ce(b)}function qe(b){const E=b.texture,G=i.get(b),J=i.get(E);b.addEventListener("dispose",A);const ie=b.textures,Z=b.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let he=0;he<E.mipmaps.length;he++)G.__webglFramebuffer[oe][he]=n.createFramebuffer()}else G.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)G.__webglFramebuffer[oe]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Se)for(let oe=0,he=ie.length;oe<he;oe++){const Ge=i.get(ie[oe]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Ve(b)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){const he=ie[oe];G.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const Ge=s.convert(he.format,he.colorSpace),se=s.convert(he.type),xe=v(he.internalFormat,Ge,se,he.colorSpace,b.isXRRenderTarget===!0),Me=ke(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,xe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),re(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),te(n.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Q(G.__webglFramebuffer[oe][he],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else Q(G.__webglFramebuffer[oe],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let oe=0,he=ie.length;oe<he;oe++){const Ge=ie[oe],se=i.get(Ge);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),te(n.TEXTURE_2D,Ge),Q(G.__webglFramebuffer,b,Ge,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),m(Ge)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),te(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)Q(G.__webglFramebuffer[he],b,E,n.COLOR_ATTACHMENT0,oe,he);else Q(G.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,oe,0);m(E)&&h(oe),t.unbindTexture()}b.depthBuffer&&Ce(b)}function We(b){const E=b.textures;for(let G=0,J=E.length;G<J;G++){const ie=E[G];if(m(ie)){const Z=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(ie).__webglTexture;t.bindTexture(Z,Se),h(Z),t.unbindTexture()}}}const Fe=[],D=[];function rt(b){if(b.samples>0){if(Ve(b)===!1){const E=b.textures,G=b.width,J=b.height;let ie=n.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(b),oe=E.length>1;if(oe)for(let he=0;he<E.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let he=0;he<E.length;he++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ge=i.get(E[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ge,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,ie,n.NEAREST),l===!0&&(Fe.length=0,D.length=0,Fe.push(n.COLOR_ATTACHMENT0+he),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Fe.push(Z),D.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<E.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Se.__webglColorRenderbuffer[he]);const Ge=i.get(E[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ke(b){return Math.min(r.maxSamples,b.samples)}function Ve(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(b){const E=o.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function Ue(b,E){const G=b.colorSpace,J=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||G!==Vs&&G!==fs&&(pt.getTransfer(G)===Pt?(J!==ir||ie!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=U,this.resetTextureUnits=T,this.setTexture2D=X,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Te,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ve}function ob(n,e){function t(i,r=fs){let s;const o=pt.getTransfer(r);if(i===Xr)return n.UNSIGNED_BYTE;if(i===tg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ng)return n.UNSIGNED_SHORT_5_5_5_1;if(i===VS)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===BS)return n.BYTE;if(i===HS)return n.SHORT;if(i===Mu)return n.UNSIGNED_SHORT;if(i===eg)return n.INT;if(i===Do)return n.UNSIGNED_INT;if(i===Nr)return n.FLOAT;if(i===ku)return n.HALF_FLOAT;if(i===GS)return n.ALPHA;if(i===WS)return n.RGB;if(i===ir)return n.RGBA;if(i===XS)return n.LUMINANCE;if(i===YS)return n.LUMINANCE_ALPHA;if(i===ba)return n.DEPTH_COMPONENT;if(i===Ka)return n.DEPTH_STENCIL;if(i===qS)return n.RED;if(i===ig)return n.RED_INTEGER;if(i===$S)return n.RG;if(i===rg)return n.RG_INTEGER;if(i===sg)return n.RGBA_INTEGER;if(i===rf||i===sf||i===of||i===af)if(o===Pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===of)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===af)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===of)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===af)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===om||i===am||i===lm||i===um)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===om)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===am)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===um)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cm||i===fm||i===dm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===cm||i===fm)return o===Pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===dm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hm||i===pm||i===mm||i===_m||i===gm||i===vm||i===xm||i===ym||i===Sm||i===Mm||i===Em||i===Tm||i===wm||i===Am)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_m)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ym)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Mm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Em)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wm)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Am)return o===Pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lf||i===Cm||i===Rm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lf)return o===Pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jS||i===Pm||i===bm||i===Dm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===lf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Dm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ja?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ab extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Pc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Pc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ub=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
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

}`;class fb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ei,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qr({vertexShader:ub,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fr(new wd(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends al{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new fb,m=t.getContextAttributes();let h=null,v=null;const x=[],S=[],C=new Tt;let A=null;const M=new Ni;M.layers.enable(1),M.viewport=new $t;const R=new Ni;R.layers.enable(2),R.viewport=new $t;const I=[M,R],y=new ab;y.layers.enable(1),y.layers.enable(2);let T=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Q=x[H];return Q===void 0&&(Q=new Oh,x[H]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(H){let Q=x[H];return Q===void 0&&(Q=new Oh,x[H]=Q),Q.getGripSpace()},this.getHand=function(H){let Q=x[H];return Q===void 0&&(Q=new Oh,x[H]=Q),Q.getHandSpace()};function z(H){const Q=S.indexOf(H.inputSource);if(Q===-1)return;const re=x[Q];re!==void 0&&(re.update(H.inputSource,H.frame,u||o),re.dispatchEvent({type:H.type,data:H.inputSource}))}function X(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",$);for(let H=0;H<x.length;H++){const Q=S[H];Q!==null&&(S[H]=null,x[H].disconnect(Q))}T=null,U=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Lo(p.framebufferWidth,p.framebufferHeight,{format:ir,type:Xr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,re=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Ka:ba,re=m.stencil?ja:Do);const Ce={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Lo(f.textureWidth,f.textureHeight,{format:ir,type:Xr,depthTexture:new fM(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(H){for(let Q=0;Q<H.removed.length;Q++){const re=H.removed[Q],ae=S.indexOf(re);ae>=0&&(S[ae]=null,x[ae].disconnect(re))}for(let Q=0;Q<H.added.length;Q++){const re=H.added[Q];let ae=S.indexOf(re);if(ae===-1){for(let Te=0;Te<x.length;Te++)if(Te>=S.length){S.push(re),ae=Te;break}else if(S[Te]===null){S[Te]=re,ae=Te;break}if(ae===-1)break}const Ce=x[ae];Ce&&Ce.connect(re)}}const B=new q,Y=new q;function L(H,Q,re){B.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(re.matrixWorld);const ae=B.distanceTo(Y),Ce=Q.projectionMatrix.elements,Te=re.projectionMatrix.elements,qe=Ce[14]/(Ce[10]-1),We=Ce[14]/(Ce[10]+1),Fe=(Ce[9]+1)/Ce[5],D=(Ce[9]-1)/Ce[5],rt=(Ce[8]-1)/Ce[0],ke=(Te[8]+1)/Te[0],Ve=qe*rt,k=qe*ke,Ue=ae/(-rt+ke),Ae=Ue*-rt;if(Q.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Ae),H.translateZ(Ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ce[10]===-1)H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const b=qe+Ue,E=We+Ue,G=Ve-Ae,J=k+(ae-Ae),ie=Fe*We/E*b,Z=D*We/E*b;H.projectionMatrix.makePerspective(G,J,ie,Z,b,E),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function j(H,Q){Q===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Q.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let Q=H.near,re=H.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(re=g.depthFar)),y.near=R.near=M.near=Q,y.far=R.far=M.far=re,(T!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,U=y.far);const ae=H.parent,Ce=y.cameras;j(y,ae);for(let Te=0;Te<Ce.length;Te++)j(Ce[Te],ae);Ce.length===2?L(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),P(H,y,ae)};function P(H,Q,re){re===null?H.matrix.copy(Q.matrixWorld):(H.matrix.copy(re.matrixWorld),H.matrix.invert(),H.matrix.multiply(Q.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Q.projectionMatrix),H.projectionMatrixInverse.copy(Q.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Lm*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let te=null;function ye(H,Q){if(c=Q.getViewerPose(u||o),_=Q,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ae=!1;re.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let Te=0;Te<re.length;Te++){const qe=re[Te];let We=null;if(p!==null)We=p.getViewport(qe);else{const D=d.getViewSubImage(f,qe);We=D.viewport,Te===0&&(e.setRenderTargetTextures(v,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(v))}let Fe=I[Te];Fe===void 0&&(Fe=new Ni,Fe.layers.enable(Te),Fe.viewport=new $t,I[Te]=Fe),Fe.matrix.fromArray(qe.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(qe.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(We.x,We.y,We.width,We.height),Te===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push(Fe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Te=d.getDepthInformation(re[0]);Te&&Te.isValid&&Te.texture&&g.init(e,Te,r.renderState)}}for(let re=0;re<x.length;re++){const ae=S[re],Ce=x[re];ae!==null&&Ce!==void 0&&Ce.update(ae,Q,u||o)}te&&te(H,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}const He=new cM;He.setAnimationLoop(ye),this.setAnimationLoop=function(H){te=H},this.dispose=function(){}}}const js=new Yr,hb=new Kt;function pb(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,oM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Jn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Jn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,js.copy(S),js.x*=-1,js.y*=-1,js.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(js)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Jn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(_(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function c(v){const x=d();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,A=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let A=0,M=S.length;A<M;A++){const R=Array.isArray(S[A])?S[A]:[S[A]];for(let I=0,y=R.length;I<y;I++){const T=R[I];if(p(T,A,I,C)===!0){const U=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let $=0;$<z.length;$++){const B=z[$],Y=g(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,U+X,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,X),X+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,C){const A=v.value,M=x+"_"+S;if(C[M]===void 0)return typeof A=="number"||typeof A=="boolean"?C[M]=A:C[M]=A.clone(),!0;{const R=C[M];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return C[M]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(v){const x=v.uniforms;let S=0;const C=16;for(let M=0,R=x.length;M<R;M++){const I=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=I.length;y<T;y++){const U=I[y],z=Array.isArray(U.value)?U.value:[U.value];for(let X=0,$=z.length;X<$;X++){const B=z[X],Y=g(B),L=S%C,j=L%Y.boundary,P=L+j;S+=j,P!==0&&C-P<Y.storage&&(S+=C-P),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=Y.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class _b{constructor(e={}){const{canvas:t=nA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ur,this.toneMapping=Rs,this.toneMappingExposure=1;const x=this;let S=!1,C=0,A=0,M=null,R=-1,I=null;const y=new $t,T=new $t;let U=null;const z=new gt(0);let X=0,$=t.width,B=t.height,Y=1,L=null,j=null;const P=new $t(0,0,$,B),te=new $t(0,0,$,B);let ye=!1;const He=new uM;let H=!1,Q=!1;const re=new Kt,ae=new Kt,Ce=new q,Te=new $t,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Fe(){return M===null?Y:1}let D=i;function rt(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${J_}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",fe,!1),D===null){const F="webgl2";if(D=rt(F,w),D===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ke,Ve,k,Ue,Ae,b,E,G,J,ie,Z,Se,oe,he,Ge,se,xe,Me,Oe,me,Ye,Ne,Je,N;function ne(){ke=new SP(D),ke.init(),Ne=new ob(D,ke),Ve=new pP(D,ke,e,Ne),k=new ib(D),Ve.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),Ue=new TP(D),Ae=new V2,b=new sb(D,ke,k,Ae,Ve,Ne,Ue),E=new _P(x),G=new yP(x),J=new bA(D),Je=new dP(D,J),ie=new MP(D,J,Ue,Je),Z=new AP(D,ie,J,Ue),Oe=new wP(D,Ve,b),se=new mP(Ae),Se=new H2(x,E,G,ke,Ve,Je,se),oe=new pb(x,Ae),he=new W2,Ge=new K2(ke),Me=new fP(x,E,G,k,Z,f,l),xe=new tb(x,Z,Ve),N=new mb(D,Ue,Ve,k),me=new hP(D,ke,Ue),Ye=new EP(D,ke,Ue),Ue.programs=Se.programs,x.capabilities=Ve,x.extensions=ke,x.properties=Ae,x.renderLists=he,x.shadowMap=xe,x.state=k,x.info=Ue}ne();const K=new db(x,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize($,B,!1))},this.getSize=function(w){return w.set($,B)},this.setSize=function(w,F,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,B=F,t.width=Math.floor(w*Y),t.height=Math.floor(F*Y),V===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set($*Y,B*Y).floor()},this.setDrawingBufferSize=function(w,F,V){$=w,B=F,Y=V,t.width=Math.floor(w*V),t.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,F,V,W){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,F,V,W),k.viewport(y.copy(P).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,F,V,W){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,F,V,W),k.scissor(T.copy(te).multiplyScalar(Y).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){k.setScissorTest(ye=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){j=w},this.getClearColor=function(w){return w.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor.apply(Me,arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha.apply(Me,arguments)},this.clear=function(w=!0,F=!0,V=!0){let W=0;if(w){let O=!1;if(M!==null){const ue=M.texture.format;O=ue===sg||ue===rg||ue===ig}if(O){const ue=M.texture.type,ve=ue===Xr||ue===Do||ue===Mu||ue===ja||ue===tg||ue===ng,pe=Me.getClearColor(),de=Me.getClearAlpha(),be=pe.r,Be=pe.g,Pe=pe.b;ve?(p[0]=be,p[1]=Be,p[2]=Pe,p[3]=de,D.clearBufferuiv(D.COLOR,0,p)):(_[0]=be,_[1]=Be,_[2]=Pe,_[3]=de,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),he.dispose(),Ge.dispose(),Ae.dispose(),E.dispose(),G.dispose(),Z.dispose(),Je.dispose(),N.dispose(),Se.dispose(),K.dispose(),K.removeEventListener("sessionstart",ct),K.removeEventListener("sessionend",_e),ze.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ue.autoReset,F=xe.enabled,V=xe.autoUpdate,W=xe.needsUpdate,O=xe.type;ne(),Ue.autoReset=w,xe.enabled=F,xe.autoUpdate=V,xe.needsUpdate=W,xe.type=O}function fe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const F=w.target;F.removeEventListener("dispose",$e),yt(F)}function yt(w){Dt(w),Ae.remove(w)}function Dt(w){const F=Ae.get(w).programs;F!==void 0&&(F.forEach(function(V){Se.releaseProgram(V)}),w.isShaderMaterial&&Se.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,W,O,ue){F===null&&(F=qe);const ve=O.isMesh&&O.matrixWorld.determinant()<0,pe=mt(w,F,V,W,O);k.setMaterial(W,ve);let de=V.index,be=1;if(W.wireframe===!0){if(de=ie.getWireframeAttribute(V),de===void 0)return;be=2}const Be=V.drawRange,Pe=V.attributes.position;let lt=Be.start*be,at=(Be.start+Be.count)*be;ue!==null&&(lt=Math.max(lt,ue.start*be),at=Math.min(at,(ue.start+ue.count)*be)),de!==null?(lt=Math.max(lt,0),at=Math.min(at,de.count)):Pe!=null&&(lt=Math.max(lt,0),at=Math.min(at,Pe.count));const xt=at-lt;if(xt<0||xt===1/0)return;Je.setup(O,W,pe,V,de);let ln,et=me;if(de!==null&&(ln=J.get(de),et=Ye,et.setIndex(ln)),O.isMesh)W.wireframe===!0?(k.setLineWidth(W.wireframeLinewidth*Fe()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if(O.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),k.setLineWidth(Ie*Fe()),O.isLineSegments?et.setMode(D.LINES):O.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else O.isPoints?et.setMode(D.POINTS):O.isSprite&&et.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)et.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))et.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,mn=O._multiDrawCounts,dt=O._multiDrawCount,Yi=de?J.get(de).bytesPerElement:1,zo=Ae.get(W).currentProgram.getUniforms();for(let li=0;li<dt;li++)zo.setValue(D,"_gl_DrawID",li),et.render(Ie[li]/Yi,mn[li])}else if(O.isInstancedMesh)et.renderInstances(lt,xt,O.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,mn=Math.min(V.instanceCount,Ie);et.renderInstances(lt,xt,mn)}else et.render(lt,xt)};function st(w,F,V){w.transparent===!0&&w.side===Dr&&w.forceSinglePass===!1?(w.side=Jn,w.needsUpdate=!0,Wt(w,F,V),w.side=Us,w.needsUpdate=!0,Wt(w,F,V),w.side=Dr):Wt(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),m=Ge.get(V),m.init(F),v.push(m),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==V&&w.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const pe=ue[ve];st(pe,V,O),W.add(pe)}else st(ue,V,O),W.add(ue)}),v.pop(),m=null,W},this.compileAsync=function(w,F,V=null){const W=this.compile(w,F,V);return new Promise(O=>{function ue(){if(W.forEach(function(ve){Ae.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){O(w);return}setTimeout(ue,10)}ke.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let De=null;function Re(w){De&&De(w)}function ct(){ze.stop()}function _e(){ze.start()}const ze=new cM;ze.setAnimationLoop(Re),typeof self<"u"&&ze.setContext(self),this.setAnimationLoop=function(w){De=w,K.setAnimationLoop(w),w===null?ze.stop():ze.start()},K.addEventListener("sessionstart",ct),K.addEventListener("sessionend",_e),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,F,M),m=Ge.get(w,v.length),m.init(F),v.push(m),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),He.setFromProjectionMatrix(ae),Q=this.localClippingEnabled,H=se.init(this.clippingPlanes,Q),g=he.get(w,h.length),g.init(),h.push(g),K.enabled===!0&&K.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Le(ue,F,-1/0,x.sortObjects)}Le(w,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(L,j),We=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,We&&Me.addToRenderList(g,w),this.info.render.frame++,H===!0&&se.beginShadows();const V=m.state.shadowsArray;xe.render(V,w,F),H===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,O=g.transmissive;if(m.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let ve=0,pe=ue.length;ve<pe;ve++){const de=ue[ve];Gt(W,O,w,de)}We&&Me.render(w);for(let ve=0,pe=ue.length;ve<pe;ve++){const de=ue[ve];Xe(g,w,de,de.viewport)}}else O.length>0&&Gt(W,O,w,F),We&&Me.render(w),Xe(g,w,F);M!==null&&(b.updateMultisampleRenderTarget(M),b.updateRenderTargetMipmap(M)),w.isScene===!0&&w.onAfterRender(x,w,F),Je.resetDefaultState(),R=-1,I=null,v.pop(),v.length>0?(m=v[v.length-1],H===!0&&se.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Le(w,F,V,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||He.intersectsSprite(w)){W&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ae);const ve=Z.update(w),pe=w.material;pe.visible&&g.push(w,ve,pe,V,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||He.intersectsObject(w))){const ve=Z.update(w),pe=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Te.copy(ve.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(ae)),Array.isArray(pe)){const de=ve.groups;for(let be=0,Be=de.length;be<Be;be++){const Pe=de[be],lt=pe[Pe.materialIndex];lt&&lt.visible&&g.push(w,ve,lt,V,Te.z,Pe)}}else pe.visible&&g.push(w,ve,pe,V,Te.z,null)}}const ue=w.children;for(let ve=0,pe=ue.length;ve<pe;ve++)Le(ue[ve],F,V,W)}function Xe(w,F,V,W){const O=w.opaque,ue=w.transmissive,ve=w.transparent;m.setupLightsView(V),H===!0&&se.setGlobalState(x.clippingPlanes,V),W&&k.viewport(y.copy(W)),O.length>0&&Ke(O,F,V),ue.length>0&&Ke(ue,F,V),ve.length>0&&Ke(ve,F,V),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Gt(w,F,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Lo(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?ku:Xr,minFilter:fo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[W.id],ve=W.viewport||y;ue.setSize(ve.z,ve.w);const pe=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),We&&Me.render(V);const de=x.toneMapping;x.toneMapping=Rs;const be=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),H===!0&&se.setGlobalState(x.clippingPlanes,W),Ke(w,V,W),b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Pe=0,lt=F.length;Pe<lt;Pe++){const at=F[Pe],xt=at.object,ln=at.geometry,et=at.material,Ie=at.group;if(et.side===Dr&&xt.layers.test(W.layers)){const mn=et.side;et.side=Jn,et.needsUpdate=!0,Lt(xt,V,W,ln,et,Ie),et.side=mn,et.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue))}x.setRenderTarget(pe),x.setClearColor(z,X),be!==void 0&&(W.viewport=be),x.toneMapping=de}function Ke(w,F,V){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=w.length;O<ue;O++){const ve=w[O],pe=ve.object,de=ve.geometry,be=W===null?ve.material:W,Be=ve.group;pe.layers.test(V.layers)&&Lt(pe,F,V,de,be,Be)}}function Lt(w,F,V,W,O,ue){w.onBeforeRender(x,F,V,W,O,ue),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(x,F,V,W,w,ue),O.transparent===!0&&O.side===Dr&&O.forceSinglePass===!1?(O.side=Jn,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,w,ue),O.side=Us,O.needsUpdate=!0,x.renderBufferDirect(V,F,W,O,w,ue),O.side=Dr):x.renderBufferDirect(V,F,W,O,w,ue),w.onAfterRender(x,F,V,W,O,ue)}function Wt(w,F,V){F.isScene!==!0&&(F=qe);const W=Ae.get(w),O=m.state.lights,ue=m.state.shadowsArray,ve=O.state.version,pe=Se.getParameters(w,O.state,ue,F,V),de=Se.getProgramCacheKey(pe);let be=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?G:E).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,be===void 0&&(w.addEventListener("dispose",$e),be=new Map,W.programs=be);let Be=be.get(de);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===ve)return St(w,pe),Be}else pe.uniforms=Se.getUniforms(w),w.onBeforeCompile(pe,x),Be=Se.acquireProgram(pe,de),be.set(de,Be),W.uniforms=pe.uniforms;const Pe=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=se.uniform),St(w,pe),W.needsLights=Ct(w),W.lightsStateVersion=ve,W.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function At(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=cf.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function St(w,F){const V=Ae.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function mt(w,F,V,W,O){F.isScene!==!0&&(F=qe),b.resetTextureUnits();const ue=F.fog,ve=W.isMeshStandardMaterial?F.environment:null,pe=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Vs,de=(W.isMeshStandardMaterial?G:E).get(W.envMap||ve),be=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pe=!!V.morphAttributes.position,lt=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let xt=Rs;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(xt=x.toneMapping);const ln=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,et=ln!==void 0?ln.length:0,Ie=Ae.get(W),mn=m.state.lights;if(H===!0&&(Q===!0||w!==I)){const Pi=w===I&&W.id===R;se.setState(W,w,Pi)}let dt=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==mn.state.version||Ie.outputColorSpace!==pe||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==de||W.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==be||Ie.vertexTangents!==Be||Ie.morphTargets!==Pe||Ie.morphNormals!==lt||Ie.morphColors!==at||Ie.toneMapping!==xt||Ie.morphTargetsCount!==et)&&(dt=!0):(dt=!0,Ie.__version=W.version);let Yi=Ie.currentProgram;dt===!0&&(Yi=Wt(W,F,O));let zo=!1,li=!1,Dd=!1;const Xt=Yi.getUniforms(),Qr=Ie.uniforms;if(k.useProgram(Yi.program)&&(zo=!0,li=!0,Dd=!0),W.id!==R&&(R=W.id,li=!0),zo||I!==w){Ve.reverseDepthBuffer?(re.copy(w.projectionMatrix),rA(re),sA(re),Xt.setValue(D,"projectionMatrix",re)):Xt.setValue(D,"projectionMatrix",w.projectionMatrix),Xt.setValue(D,"viewMatrix",w.matrixWorldInverse);const Pi=Xt.map.cameraPosition;Pi!==void 0&&Pi.setValue(D,Ce.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&Xt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Xt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),I!==w&&(I=w,li=!0,Dd=!0)}if(O.isSkinnedMesh){Xt.setOptional(D,O,"bindMatrix"),Xt.setOptional(D,O,"bindMatrixInverse");const Pi=O.skeleton;Pi&&(Pi.boneTexture===null&&Pi.computeBoneTexture(),Xt.setValue(D,"boneTexture",Pi.boneTexture,b))}O.isBatchedMesh&&(Xt.setOptional(D,O,"batchingTexture"),Xt.setValue(D,"batchingTexture",O._matricesTexture,b),Xt.setOptional(D,O,"batchingIdTexture"),Xt.setValue(D,"batchingIdTexture",O._indirectTexture,b),Xt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Xt.setValue(D,"batchingColorTexture",O._colorsTexture,b));const Ld=V.morphAttributes;if((Ld.position!==void 0||Ld.normal!==void 0||Ld.color!==void 0)&&Oe.update(O,V,Yi),(li||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,Xt.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Qr.envMap.value=de,Qr.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Qr.envMapIntensity.value=F.environmentIntensity),li&&(Xt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ie.needsLights&&ai(Qr,Dd),ue&&W.fog===!0&&oe.refreshFogUniforms(Qr,ue),oe.refreshMaterialUniforms(Qr,W,Y,B,m.state.transmissionRenderTarget[w.id]),cf.upload(D,At(Ie),Qr,b)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(cf.upload(D,At(Ie),Qr,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Xt.setValue(D,"center",O.center),Xt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Xt.setValue(D,"normalMatrix",O.normalMatrix),Xt.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pi=W.uniformsGroups;for(let Id=0,FE=Pi.length;Id<FE;Id++){const Ug=Pi[Id];N.update(Ug,Yi),N.bind(Ug,Yi)}}return Yi}function ai(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Ct(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,F,V){Ae.get(w.texture).__webglTexture=F,Ae.get(w.depthTexture).__webglTexture=V;const W=Ae.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const V=Ae.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){M=w,C=F,A=V;let W=!0,O=null,ue=!1,ve=!1;if(w){const de=Ae.get(w);if(de.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(de.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(de.__hasExternalTextures)b.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(de.__boundDepthTexture!==Pe){if(Pe!==null&&Ae.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const be=w.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ve=!0);const Be=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?O=Be[F][V]:O=Be[F],ue=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?O=Ae.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[V]:O=Be,y.copy(w.viewport),T.copy(w.scissor),U=w.scissorTest}else y.copy(P).multiplyScalar(Y).floor(),T.copy(te).multiplyScalar(Y).floor(),U=ye;if(k.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&k.drawBuffers(w,O),k.viewport(y),k.scissor(T),k.setScissorTest(U),ue){const de=Ae.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,de.__webglTexture,V)}else if(ve){const de=Ae.get(w.texture),be=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,de.__webglTexture,V||0,be)}R=-1},this.readRenderTargetPixels=function(w,F,V,W,O,ue,ve){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(pe=pe[ve]),pe){k.bindFramebuffer(D.FRAMEBUFFER,pe);try{const de=w.texture,be=de.format,Be=de.type;if(!Ve.textureFormatReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&V>=0&&V<=w.height-O&&D.readPixels(F,V,W,O,Ne.convert(be),Ne.convert(Be),ue)}finally{const de=M!==null?Ae.get(M).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,de)}}},this.readRenderTargetPixelsAsync=async function(w,F,V,W,O,ue,ve){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ve!==void 0&&(pe=pe[ve]),pe){const de=w.texture,be=de.format,Be=de.type;if(!Ve.textureFormatReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-W&&V>=0&&V<=w.height-O){k.bindFramebuffer(D.FRAMEBUFFER,pe);const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(F,V,W,O,Ne.convert(be),Ne.convert(Be),0);const lt=M!==null?Ae.get(M).__webglFramebuffer:null;k.bindFramebuffer(D.FRAMEBUFFER,lt);const at=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await iA(D,at,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Pe),D.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,V=0){w.isTexture!==!0&&(uf("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(w.image.width*W),ue=Math.floor(w.image.height*W),ve=F!==null?F.x:0,pe=F!==null?F.y:0;b.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ve,pe,O,ue),k.unbindTexture()},this.copyTextureToTexture=function(w,F,V=null,W=null,O=0){w.isTexture!==!0&&(uf("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,w=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ue,ve,pe,de,be,Be;V!==null?(ue=V.max.x-V.min.x,ve=V.max.y-V.min.y,pe=V.min.x,de=V.min.y):(ue=w.image.width,ve=w.image.height,pe=0,de=0),W!==null?(be=W.x,Be=W.y):(be=0,Be=0);const Pe=Ne.convert(F.format),lt=Ne.convert(F.type);b.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const at=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ln=D.getParameter(D.UNPACK_SKIP_PIXELS),et=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES),mn=w.isCompressedTexture?w.mipmaps[O]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,mn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,de),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,be,Be,ue,ve,Pe,lt,mn.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,be,Be,mn.width,mn.height,Pe,mn.data):D.texSubImage2D(D.TEXTURE_2D,O,be,Be,ue,ve,Pe,lt,mn),D.pixelStorei(D.UNPACK_ROW_LENGTH,at),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ln),D.pixelStorei(D.UNPACK_SKIP_ROWS,et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V=null,W=null,O=0){w.isTexture!==!0&&(uf("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,w=arguments[2],F=arguments[3],O=arguments[4]||0);let ue,ve,pe,de,be,Be,Pe,lt,at;const xt=w.isCompressedTexture?w.mipmaps[O]:w.image;V!==null?(ue=V.max.x-V.min.x,ve=V.max.y-V.min.y,pe=V.max.z-V.min.z,de=V.min.x,be=V.min.y,Be=V.min.z):(ue=xt.width,ve=xt.height,pe=xt.depth,de=0,be=0,Be=0),W!==null?(Pe=W.x,lt=W.y,at=W.z):(Pe=0,lt=0,at=0);const ln=Ne.convert(F.format),et=Ne.convert(F.type);let Ie;if(F.isData3DTexture)b.setTexture3D(F,0),Ie=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)b.setTexture2DArray(F,0),Ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const mn=D.getParameter(D.UNPACK_ROW_LENGTH),dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yi=D.getParameter(D.UNPACK_SKIP_PIXELS),zo=D.getParameter(D.UNPACK_SKIP_ROWS),li=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,de),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ie,O,Pe,lt,at,ue,ve,pe,ln,et,xt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ie,O,Pe,lt,at,ue,ve,pe,ln,xt.data):D.texSubImage3D(Ie,O,Pe,lt,at,ue,ve,pe,ln,et,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,mn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,zo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,li),O===0&&F.generateMipmaps&&D.generateMipmap(Ie),k.unbindTexture()},this.initRenderTarget=function(w){Ae.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),k.unbindTexture()},this.resetState=function(){C=0,A=0,M=null,k.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===og?"display-p3":"srgb",t.unpackColorSpace=pt.workingColorSpace===Ed?"display-p3":"srgb"}}class gb extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vb extends Vu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new Kt,Um=new eM,bc=new Td,Dc=new q;class xb extends ti{constructor(e=new Zr,t=new vb){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bc.copy(i.boundingSphere),bc.applyMatrix4(r),bc.radius+=s,e.ray.intersectsSphere(bc)===!1)return;Fv.copy(r).invert(),Um.copy(e.ray).applyMatrix4(Fv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const m=u.getX(_);Dc.fromBufferAttribute(d,m),kv(Dc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p;_<g;_++)Dc.fromBufferAttribute(d,_),kv(Dc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function kv(n,e,t,i,r,s,o){const a=Um.distanceSqToPoint(n);if(a<t){const l=new q;Um.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:J_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=J_);function Rr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _M(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Eu={duration:.5,overwrite:!1,delay:0},lg,xn,Ut,Bi=1e8,Et=1/Bi,Nm=Math.PI*2,yb=Nm/4,Sb=0,gM=Math.sqrt,Mb=Math.cos,Eb=Math.sin,pn=function(e){return typeof e=="string"},Vt=function(e){return typeof e=="function"},$r=function(e){return typeof e=="number"},ug=function(e){return typeof e>"u"},yr=function(e){return typeof e=="object"},ni=function(e){return e!==!1},cg=function(){return typeof window<"u"},Lc=function(e){return Vt(e)||pn(e)},vM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Tb=/random\([^)]+\)/g,wb=/,\s*/g,zv=/(?:-?\.?\d|\.)+/gi,xM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ya=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,yM=/[+-]=-?[.\d]+/,Ab=/[^,'"\[\]\s]+/gi,Cb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,cr,Om,fg,wi={},jf={},SM,MM=function(e){return(jf=Qa(e,wi))&&oi},dg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Tu=function(e,t){return!t&&console.warn(e)},EM=function(e,t){return e&&(wi[e]=t)&&jf&&(jf[e]=t)||wi},wu=function(){return 0},Rb={suppressEvents:!0,isStart:!0,kill:!1},ff={suppressEvents:!0,kill:!1},Pb={suppressEvents:!0},hg={},Ps=[],Fm={},TM,pi={},kh={},Bv=30,df=[],pg="",mg=function(e){var t=e[0],i,r;if(yr(t)||Vt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=df.length;r--&&!df[r].targetTest(t););i=df[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new YM(e[r],i)))||e.splice(r,1);return e},xo=function(e){return e._gsap||mg(Hi(e))[0]._gsap},wM=function(e,t,i){return(i=e[t])&&Vt(i)?e[t]():ug(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},La=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},bb=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Kf=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(Fm={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},_g=function(e){return!!(e._initted||e._startAt||e.add)},AM=function(e,t,i,r){Ps.length&&!xn&&Kf(),e.render(t,i,!!(xn&&t<0&&_g(e))),Ps.length&&!xn&&Kf()},CM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ab).length<2?t:pn(e)?e.trim():e},RM=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Db=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Qa=function(e,t){for(var i in t)e[i]=t[i];return e},Hv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=yr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Zf=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ql=function(e){var t=e.parent||Ft,i=e.keyframes?Db(Dn(e.keyframes)):Ai;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},Lb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},PM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Cd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ns=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},yo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Ib=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},km=function(e,t,i,r){return e._startAt&&(xn?e._startAt.revert(ff):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Ub=function n(e){return!e||e._ts&&n(e.parent)},Vv=function(e){return e._repeat?Ja(e._tTime,e=e.duration()+e._rDelay)*e:0},Ja=function(e,t){var i=Math.floor(e=Nt(e/t));return e&&i===e?i-1:i},Qf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Rd=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Et)||0))},Pd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Rd(e),i._dirty||yo(i,e)),e},bM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Qf(e.rawTime(),t),(!t._dur||Wu(0,t.totalDuration(),i)-t._tTime>Et)&&t.render(i,!0)),yo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Et}},pr=function(e,t,i,r){return t.parent&&Ns(t),t._start=Nt(($r(i)?i:i||e!==Ft?Di(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),PM(e,t,"_first","_last",e._sort?"_start":0),zm(t)||(e._recent=t),r||bM(e,t),e._ts<0&&Pd(e,e._tTime),e},DM=function(e,t){return(wi.ScrollTrigger||dg("scrollTrigger",t))&&wi.ScrollTrigger.create(t,e)},LM=function(e,t,i,r,s){if(vg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!xn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&TM!==_i.frame)return Ps.push(e),e._lazy=[s,r],1},Nb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},zm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Ob=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Nb(e)&&!(!e._initted&&zm(e))||(e._ts<0||e._dp._ts<0)&&!zm(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Wu(0,e._tDur,t),c=Ja(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ja(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||xn||r||e._zTime===Et||!t&&e._zTime){if(!e._initted&&LM(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Et:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&km(e,t,i,!0),e._onUpdate&&!i&&xi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&xi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ns(e,1),!i&&!xn&&(xi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Fb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},el=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Pd(e,e._tTime=e._tDur*a),e.parent&&Rd(e),i||yo(e.parent,e),e},Gv=function(e){return e instanceof $n?yo(e):el(e,e._dur)},kb={_start:0,endTime:wu,totalDuration:wu},Di=function n(e,t,i){var r=e.labels,s=e._recent||kb,o=e.duration()>=Bi?s.endTime(!1):e._dur,a,l,u;return pn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},$l=function(e,t,i){var r=$r(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Jt(t[0],o,t[s+1])},Gs=function(e,t){return e||e===0?t(e):t},Wu=function(e,t,i){return i<e?e:i>t?t:i},Pn=function(e,t){return!pn(e)||!(t=Cb.exec(e))?"":t[1]},zb=function(e,t,i){return Gs(i,function(r){return Wu(e,t,r)})},Bm=[].slice,IM=function(e,t){return e&&yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yr(e[0]))&&!e.nodeType&&e!==cr},Bb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return pn(r)&&!t||IM(r,1)?(s=i).push.apply(s,Hi(r)):i.push(r)})||i},Hi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):pn(e)&&!i&&(Om||!tl())?Bm.call((t||fg).querySelectorAll(e),0):Dn(e)?Bb(e,i):IM(e)?Bm.call(e,0):e?[e]:[]},Hm=function(e){return e=Hi(e)[0]||Tu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Hi(t,i.querySelectorAll?i:i===e?Tu("Invalid scope")||fg.createElement("div"):e)}},UM=function(e){return e.sort(function(){return .5-Math.random()})},NM=function(e){if(Vt(e))return e;var t=yr(e)?e:{each:e},i=So(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return pn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,v,x,S,C,A,M,R,I;if(!m){if(I=t.grid==="auto"?0:(t.grid||[1,Bi])[1],!I){for(M=-Bi;M<(M=_[I++].getBoundingClientRect().left)&&I<g;);I<g&&I--}for(m=o[g]=[],h=l?Math.min(I,g)*c-.5:r%I,v=I===Bi?0:l?g*d/I-.5:r/I|0,M=0,R=Bi,A=0;A<g;A++)x=A%I-h,S=v-(A/I|0),m[A]=C=u?Math.abs(u==="y"?S:x):gM(x*x+S*S),C>M&&(M=C),C<R&&(R=C);r==="random"&&UM(m),m.max=M-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(I>g?g-1:u?u==="y"?g/I:I:Math.max(I,g/I))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Pn(t.amount||t.each)||0,i=i&&g<0?Jb(i):i}return g=(m[f]-m.min)/m.max||0,Nt(m.b+(i?i(g):g)*m.v)+m.u}},Vm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+($r(i)?0:Pn(i))}},OM=function(e,t){var i=Dn(e),r,s;return!i&&yr(e)&&(r=i=e.radius||Bi,e.values?(e=Hi(e.values),(s=!$r(e[0]))&&(r*=r)):e=Vm(e.increment)),Gs(t,i?Vt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Bi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||$r(o)?c:c+Pn(o)}:Vm(e))},FM=function(e,t,i,r){return Gs(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Hb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Vb=function(e,t){return function(i){return e(parseFloat(i))+(t||Pn(i))}},Gb=function(e,t,i){return zM(e,t,0,1,i)},kM=function(e,t,i){return Gs(i,function(r){return e[~~t(r)]})},Wb=function n(e,t,i){var r=t-e;return Dn(e)?kM(e,n(0,e.length),t):Gs(i,function(s){return(r+(s-e)%r)%r+e})},Xb=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?kM(e,n(0,e.length-1),t):Gs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Au=function(e){return e.replace(Tb,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(wb);return FM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},zM=function(e,t,i,r,s){var o=t-e,a=r-i;return Gs(s,function(l){return i+((l-e)/o*a||0)})},Yb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=pn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=Qa(Dn(e)?[]:{},e));if(!c){for(l in t)gg.call(a,e,l,"get",t[l]);s=function(_){return Sg(_,a)||(o?e.p:e)}}}return Gs(i,s)},Wv=function(e,t,i){var r=e.labels,s=Bi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},xi=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&Kf(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Dl=function(e){return Ns(e),e.scrollTrigger&&e.scrollTrigger.kill(!!xn),e.progress()<1&&xi(e,"onInterrupt"),e},Sa,BM=[],HM=function(e){if(e)if(e=!e.name&&e.default||e,cg()||e.headless){var t=e.name,i=Vt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:wu,render:Sg,add:gg,kill:uD,modifier:lD,rawVars:0},o={targetTest:0,get:0,getSetter:yg,aliases:{},register:0};if(tl(),e!==r){if(pi[t])return;Ai(r,Ai(Zf(e,s),o)),Qa(r.prototype,Qa(s,Zf(e,o))),pi[r.prop=t]=r,e.targetTest&&(df.push(r),hg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}EM(t,r),e.register&&e.register(oi,r,ri)}else BM.push(e)},Mt=255,Ll={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},zh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Mt+.5|0},VM=function(e,t,i){var r=e?$r(e)?[e>>16,e>>8&Mt,e&Mt]:0:Ll.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ll[e])r=Ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Mt,r&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(zv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=zh(l+1/3,s,o),r[1]=zh(l,s,o),r[2]=zh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(xM),i&&r.length<4&&(r[3]=1),r}else r=e.match(zv)||Ll.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Mt,o=r[1]/Mt,a=r[2]/Mt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},GM=function(e){var t=[],i=[],r=-1;return e.split(bs).forEach(function(s){var o=s.match(ya)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Xv=function(e,t,i){var r="",s=(e+r).match(bs),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=VM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=GM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(bs,"1").split(ya),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(bs),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},bs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ll)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),qb=/hsl[a]?\(/,WM=function(e){var t=e.join(" "),i;if(bs.lastIndex=0,bs.test(t))return i=qb.test(t),e[1]=Xv(e[1],i),e[0]=Xv(e[0],i,GM(e[1])),!0},Cu,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,x,S,C,A;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(A=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(g)),S)for(p=0;p<a.length;p++)a[p](C,f,A,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){SM&&(!Om&&cg()&&(cr=Om=window,fg=cr.document||{},wi.gsap=oi,(cr.gsapVersions||(cr.gsapVersions=[])).push(oi.version),MM(jf||cr.GreenSockGlobals||!cr.gsap&&cr||{}),BM.forEach(HM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Cu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Cu=0,u=wu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(S,C,A,M){m(S,C,A,M),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),tl(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),tl=function(){return!Cu&&_i.wake()},ut={},$b=/^[\d.\-M][\d.\-,\s]/,jb=/["']/g,Kb=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(jb,"").trim():+u,r=l.substr(a+1).trim();return t},Zb=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Qb=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Kb(t[1])]:Zb(e).split(",").map(CM)):ut._CE&&$b.test(e)?ut._CE("",e):i},Jb=function(e){return function(t){return 1-e(1-t)}},So=function(e,t){return e&&(Vt(e)?e:ut[e]||Qb(e))||t},ko=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){ut[a]=wi[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},XM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Nm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Eb((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:XM(a);return s=Nm/s,l.config=function(u,c){return n(e,u,c)},l},Hh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:XM(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ko(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;ko("Elastic",Bh("in"),Bh("out"),Bh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ko("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ko("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ko("Circ",function(n){return-(gM(1-n*n)-1)});ko("Sine",function(n){return n===1?1:-Mb(n*yb)+1});ko("Back",Hh("in"),Hh("out"),Hh());ut.SteppedEase=ut.steps=wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Et;return function(a){return((r*Wu(0,o,a)|0)+s)*i}}};Eu.ease=ut["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return pg+=n+","+n+"Params,"});var YM=function(e,t){this.id=Sb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:wM,this.set=t?t.getSetter:yg},Ru=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,el(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Cu||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,el(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(tl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Pd(this,i),!s._dp||s.parent||bM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Et||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),AM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Vv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Vv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ja(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Qf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Et?0:this._rts,this.totalTime(Wu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Rd(this),Ib(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(tl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Et&&(this._tTime-=Et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&pr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Pb);var r=xn;return xn=i,_g(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),xn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Gv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Gv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Di(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-Et),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Vt(i)?i:RM,l=function(){var c=r.then;r.then=null,s&&s(),Vt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Dl(this)},n}();Ai(Ru.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Et,_prom:0,_ps:!1,_rts:1});var $n=function(n){_M(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),Ft&&pr(i.parent||Ft,Rr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&DM(Rr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return $l(0,arguments,this),this},t.from=function(r,s,o){return $l(1,arguments,this),this},t.fromTo=function(r,s,o,a){return $l(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Jt(r,s,Di(this,o),1),this},t.call=function(r,s,o){return pr(this,Jt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Jt(r,o,Di(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ql(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,ql(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,x,S,C,A,M;if(this!==Ft&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Nt(c%m),c===l?(g=this._repeat,f=u):(C=Nt(c/m),g=~~C,g&&g===C&&(f=u,g--),f>u&&(f=u)),C=Ja(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),A&&g&1&&(f=u-f,M=1),g!==C&&!this._lock){var R=A&&C&1,I=R===(A&&g&1);if(g<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Nt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&xi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,I&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Fb(this,Nt(a),Nt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(xi(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-Et);break}}p=_}else{p=this._last;for(var y=r<0?r:f;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||xn&&_g(p)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=y?-Et:Et);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Et)._zTime=f>=a?1:-1,this._ts))return this._start=S,Rd(this),this.render(r,s,o);this._onUpdate&&!s&&xi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ns(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(xi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if($r(s)||(s=Di(this,s,r)),!(r instanceof Ru)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(pn(r))return this.addLabel(r,s);if(Vt(r))r=Jt.delayedCall(0,r);else return this}return this!==r?pr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Bi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Jt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return pn(r)?this.removeLabel(r):Vt(r)?this.killTweensOf(r):(r.parent===this&&Cd(this,r),r===this._recent&&(this._recent=this._last),yo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Di(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Jt.delayedCall(0,s||wu,o);return a.data="isPause",this._hasPause=1,pr(this,a,Di(this,r))},t.removePause=function(r){var s=this._first;for(r=Di(this,r);s;)s._start===r&&s.data==="isPause"&&Ns(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ps!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Hi(r),l=this._first,u=$r(s),c;l;)l instanceof Jt?bb(l._targets,a)&&(u?(!ps||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Di(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Jt.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Et,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&el(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ai({startAt:{time:Di(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Wv(this,Di(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Wv(this,Di(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Nt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return yo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),yo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Bi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Nt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;el(o,o===Ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ft._ts&&(AM(Ft,Qf(r,Ft)),TM=_i.frame),_i.frame>=Bv){Bv+=Ei.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&Ei.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Ru);Ai($n.prototype,{_lock:0,_hasPause:0,_forcing:0});var eD=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,QM,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Au(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(Fh)||[];d=Fh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?La(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=Fh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(yM.test(r)||h)&&(l.e=0),this._pt=l,l},gg=function(e,t,i,r,s,o,a,l,u,c){Vt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Vt(d)?u?e[t.indexOf("set")||!Vt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Vt(d)?u?sD:KM:xg,_;if(pn(r)&&(~r.indexOf("random(")&&(r=Au(r)),r.charAt(1)==="="&&(_=La(f,r)+(Pn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||Gm)return!isNaN(f*r)&&r!==""?(_=new ri(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?aD:ZM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&dg(t,r),eD.call(this,e,t,f,r,p,l||Ei.stringFilter,u))},tD=function(e,t,i,r,s){if(Vt(e)&&(e=jl(e,s,t,i,r)),!yr(e)||e.style&&e.nodeType||Dn(e)||vM(e))return pn(e)?jl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=jl(e[a],s,t,i,r);return o},qM=function(e,t,i,r,s,o){var a,l,u,c;if(pi[e]&&(a=new pi[e]).init(s,a.rawVars?t[e]:tD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Sa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ps,Gm,vg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!lg,S=e.timeline,C=r.easeReverse||d,A,M,R,I,y,T,U,z,X,$,B,Y,L;if(S&&(!f||!s)&&(s="none"),e._ease=So(s,Eu.ease),e._rEase=C&&(So(C)||e._ease),e._from=!S&&!!r.runBackwards,e._from&&(e.ratio=1),!S||f&&!r.stagger){if(z=m[0]?xo(m[0]).harness:0,Y=z&&r[z.prop],A=Zf(r,hg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?ff:Rb),g._lazy=0),o){if(Ns(e._startAt=Jt.set(m,Ai({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return xi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn||!a&&!p)&&e._startAt.revert(ff),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),R=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ni(l),immediateRender:a,stagger:0,parent:h},A),Y&&(R[z.prop]=Y),Ns(e._startAt=Jt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(xn?e._startAt.revert(ff):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Et,Et);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ni(l)||l&&!_,M=0;M<m.length;M++){if(y=m[M],U=y._gsap||mg(m)[M]._gsap,e._ptLookup[M]=$={},Fm[U.id]&&Ps.length&&Kf(),B=v===m?M:v.indexOf(y),z&&(X=new z).init(y,Y||A,e,B,v)!==!1&&(e._pt=I=new ri(e._pt,y,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(j){$[j]=I}),X.priority&&(T=1)),!z||Y)for(R in A)pi[R]&&(X=qM(R,A,e,B,y,v))?X.priority&&(T=1):$[R]=I=gg.call(e,y,R,"get",A[R],B,v,0,r.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),x&&e._pt&&(ps=e,Ft.killTweensOf(y,$,e.globalTime(t)),L=!e.parent,ps=0),e._pt&&l&&(Fm[U.id]=1)}T&&JM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!L,f&&t<=0&&S.render(Bi,!0,!0)},nD=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Gm=1,e.vars[t]="+=0",vg(e,a),Gm=0,l?Tu(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Yt(i)+Pn(d.e)),d.b&&(d.b=c.s+Pn(d.b))},iD=function(e,t){var i=e[0]?xo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Qa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},rD=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},jl=function(e,t,i,r,s){return Vt(e)?e.call(t,i,r,s):pn(e)&&~e.indexOf("random(")?Au(e):e},$M=pg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",jM={};ii($M+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return jM[n]=1});var Jt=function(n){_M(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=r.parent||Ft,v=(Dn(i)||vM(i)?$r(i[0]):"length"in r)?[i]:Hi(i),x,S,C,A,M,R,I,y;if(a._targets=v.length?mg(v):Tu("GSAP target "+i+" not found. https://gsap.com",!Ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||Lc(u)||Lc(c)){r=a.vars;var T=r.easeReverse||r.yoyoEase;if(x=a.timeline=new $n({data:"nested",defaults:g||{},targets:h&&h.data==="nested"?h.vars.targets:v}),x.kill(),x.parent=x._dp=Rr(a),x._start=0,f||Lc(u)||Lc(c)){if(A=v.length,I=f&&NM(f),yr(f))for(M in f)~$M.indexOf(M)&&(y||(y={}),y[M]=f[M]);for(S=0;S<A;S++)C=Zf(r,jM),C.stagger=0,T&&(C.easeReverse=T),y&&Qa(C,y),R=v[S],C.duration=+jl(u,Rr(a),S,R,v),C.delay=(+jl(c,Rr(a),S,R,v)||0)-a._delay,!f&&A===1&&C.delay&&(a._delay=c=C.delay,a._start+=c,C.delay=0),x.to(R,C,I?I(S,R,v):0),x._ease=ut.none;x.duration()?u=c=0:a.timeline=0}else if(_){ql(Ai(x.vars.defaults,{ease:"none"})),x._ease=So(_.ease||r.ease||"none");var U=0,z,X,$;if(Dn(_))_.forEach(function(B){return x.to(v,B,">")}),x.duration();else{C={};for(M in _)M==="ease"||M==="easeEach"||rD(M,_[M],C,_.easeEach);for(M in C)for(z=C[M].sort(function(B,Y){return B.t-Y.t}),U=0,S=0;S<z.length;S++)X=z[S],$={ease:X.e,duration:(X.t-(S?z[S-1].t:0))/100*u},$[M]=X.v,x.to(v,$,U),U+=$.duration;x.duration()<u&&x.to({},{duration:u-x.duration()})}}u||a.duration(u=x.duration())}else a.timeline=0;return p===!0&&!lg&&(ps=Rr(a),Ft.killTweensOf(v),ps=0),pr(h,Rr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Nt(h._time)&&ni(d)&&Ub(Rr(a))&&h.data!=="nested")&&(a._tTime=-Et,a.render(Math.max(0,-c)||0)),m&&DM(Rr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Et&&!c?l:r<Et?0:r,f,p,_,g,m,h,v,x;if(!u)Ob(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=Nt(d%g),d===l?(_=this._repeat,f=u):(m=Nt(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(f=u-f),m=Ja(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(LM(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var S=f<a;if(S!==this._inv){var C=S?a:u-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=C?(S?-1:1)/C:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/u);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(xi(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&km(this,r,s,o),xi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&xi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&km(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ns(this,1),!s&&!(c&&!a)&&(d||a||h)&&(xi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Cu||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||vg(this,u),c=this._ease(u/this._dur),nD(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Pd(this,0),this.parent||PM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Dl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!xn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ps&&ps.vars.overwrite!==!0)._first||Dl(this),this.parent&&o!==this.timeline.totalDuration()&&el(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Hi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&Lb(a,l))return s==="all"&&(this._pt=0),Dl(this);for(d=this._op=this._op||[],s!=="all"&&(pn(s)&&(g={},ii(s,function(v){return g[v]=1}),s=g),s=iD(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Cd(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Dl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return $l(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return $l(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ft.killTweensOf(r,s,o)},e}(Ru);Ai(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Jt[n]=function(){var e=new $n,t=Bm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var xg=function(e,t,i){return e[t]=i},KM=function(e,t,i){return e[t](i)},sD=function(e,t,i,r){return e[t](r.fp,i)},oD=function(e,t,i){return e.setAttribute(t,i)},yg=function(e,t){return Vt(e[t])?KM:ug(e[t])&&e.setAttribute?oD:xg},ZM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},aD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},QM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Sg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},lD=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},uD=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Cd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},cD=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},JM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||ZM,this.d=l||this,this.set=u||xg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=cD,this.m=i,this.mt=s,this.tween=r},n}();ii(pg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return hg[n]=1});wi.TweenMax=wi.TweenLite=Jt;wi.TimelineLite=wi.TimelineMax=$n;Ft=new $n({sortChildren:!1,defaults:Eu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ei.stringFilter=WM;var Mo=[],hf={},fD=[],Yv=0,dD=0,Vh=function(e){return(hf[e]||fD).map(function(t){return t()})},Wm=function(){var e=Date.now(),t=[];e-Yv>2&&(Vh("matchMediaInit"),Mo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=cr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Vh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Yv=e,Vh("matchMedia"))},eE=function(){function n(t,i){this.selector=i&&Hm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=dD++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Vt(i)&&(s=r,r=i,i=Vt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Hm(s)),Ut=o,d=r.apply(o,arguments),Vt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Vt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Jt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof $n?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Jt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Mo.length;o--;)Mo[o].id===this.id&&Mo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),hD=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){yr(i)||(i={matches:i});var o=new eE(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=cr.matchMedia(i[u]),l&&(Mo.indexOf(o)<0&&Mo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Wm):l.addEventListener("change",Wm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Jf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return HM(r)})},timeline:function(e){return new $n(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,i,r){pn(e)&&(e=Hi(e)[0]);var s=xo(e||{}).get,o=i?RM:CM;return i==="native"&&(i=""),e&&(t?o((pi[t]&&pi[t].get||s)(e,t,i,r)):function(a,l,u){return o((pi[a]&&pi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Hi(e),e.length>1){var r=e.map(function(c){return oi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=pi[t],a=xo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;Sa._pt=0,d.init(e,i?c+i:c,Sa,0,[e]),d.render(1,d),Sa._pt&&Sg(1,Sa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=oi.to(e,Ai((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=So(e.ease,Eu.ease)),Hv(Eu,e||{})},config:function(e){return Hv(Ei,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!pi[a]&&!wi[a]&&Tu(t+" effect requires "+a+" plugin.")}),kh[t]=function(a,l,u){return i(Hi(a),Ai(l||{},s),u)},o&&($n.prototype[t]=function(a,l,u){return this.add(kh[t](a,yr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=So(t)},parseEase:function(e,t){return arguments.length?So(e,t):ut},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new $n(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),Ft.remove(i),i._dp=0,i._time=i._tTime=Ft._time,r=Ft._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Jt&&r.vars.onComplete===r._targets[0]))&&pr(i,r,r._start-r._delay),r=s;return pr(Ft,i,0),i},context:function(e,t){return e?new eE(e,t):Ut},matchMedia:function(e){return new hD(e)},matchMediaRefresh:function(){return Mo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Wm()},addEventListener:function(e,t){var i=hf[e]||(hf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=hf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Wb,wrapYoyo:Xb,distribute:NM,random:FM,snap:OM,normalize:Gb,getUnit:Pn,clamp:zb,splitColor:VM,toArray:Hi,selector:Hm,mapRange:zM,pipe:Hb,unitize:Vb,interpolate:Yb,shuffle:UM},install:MM,effects:kh,ticker:_i,updateRoot:$n.updateRoot,plugins:pi,globalTimeline:Ft,core:{PropTween:ri,globals:EM,Tween:Jt,Timeline:$n,Animation:Ru,getCache:xo,_removeLinkedListItem:Cd,reverting:function(){return xn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return lg=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Jf[n]=Jt[n]});_i.add($n.updateRoot);Sa=Jf.to({},{duration:0});var pD=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},mD=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=pD(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Gh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(pn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}mD(a,s)}}}},oi=Jf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)xn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Gh("roundProps",Vm),Gh("modifiers"),Gh("snap",OM))||Jf;Jt.version=$n.version=oi.version="3.15.0";SM=1;cg()&&tl();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qv,ms,Ia,Mg,ho,$v,Eg,_D=function(){return typeof window<"u"},jr={},no=180/Math.PI,Ua=Math.PI/180,ta=Math.atan2,jv=1e8,Tg=/([A-Z])/g,gD=/(left|right|width|margin|padding|x)/i,vD=/[\s,\(]\S/,mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},xD=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yD=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},SD=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},MD=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},tE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ED=function(e,t,i){return e.style[t]=i},TD=function(e,t,i){return e.style.setProperty(t,i)},wD=function(e,t,i){return e._gsap[t]=i},AD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},CD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},RD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},kt="transform",si=kt+"Origin",PD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in jr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=br(r,a)}):this.tfm[e]=o.x?o[e]:br(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return mr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},iE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},bD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Tg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Eg(),(!s||!s.isStart)&&!i[kt]&&(iE(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},rE=function(e,t){var i={target:e,props:[],revert:bD,save:PD};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},sE,Ym=function(e,t){var i=ms.createElementNS?ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ms.createElement(e);return i&&i.style?i:ms.createElement(e)},yi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Tg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,nl(t)||t,1)||""},Kv="O,Moz,ms,Ms,Webkit".split(","),nl=function(e,t,i){var r=t||ho,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Kv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Kv[o]:"")+e},qm=function(){_D()&&window.document&&(qv=window,ms=qv.document,Ia=ms.documentElement,ho=Ym("div")||{style:{}},Ym("div"),kt=nl(kt),si=kt+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",sE=!!nl("perspective"),Eg=oi.core.reverting,Mg=1)},Zv=function(e){var t=e.ownerSVGElement,i=Ym("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ia.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ia.removeChild(i),s},Qv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},oE=function(e){var t,i;try{t=e.getBBox()}catch{t=Zv(e),i=1}return t&&(t.width||t.height)||i||(t=Zv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Qv(e,["x","cx","x1"])||0,y:+Qv(e,["y","cy","y1"])||0,width:0,height:0}:t},aE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&oE(e))},Os=function(e,t){if(t){var i=e.style,r;t in jr&&t!==si&&(t=kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Tg,"-$1").toLowerCase())):i.removeAttribute(t)}},_s=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?nE:tE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Jv={deg:1,rad:1,turn:1},DD={grid:1,flex:1},Fs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ho.style,l=gD.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||Jv[r]||Jv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&aE(e),(p||o==="%")&&(jr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Yt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ms||!g.appendChild)&&(g=ms.body),m=g._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return Yt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:Os(e,t)}else(p||o==="%")&&!DD[yi(g,"display")]&&(a.position=yi(e,"position")),g===e&&(a.position="static"),g.appendChild(ho),_=ho[c],g.removeChild(ho),a.position="absolute";return l&&p&&(m=xo(g),m.time=_i.time,m.width=g[c]),Yt(f?_*s/d:_&&s?d/_*s:0)},br=function(e,t,i,r){var s;return Mg||qm(),t in mr&&t!=="transform"&&(t=mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),jr[t]&&t!=="transform"?(s=bu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:td(yi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ed[t]&&ed[t](e,t,i)||yi(e,t)||wM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fs(e,t,s,i)+i:s},LD=function(e,t,i,r){if(!i||i==="none"){var s=nl(t,e,1),o=s&&yi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,QM),l=0,u=0,c,d,f,p,_,g,m,h,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=yi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=yi(e,t)||r,g?e.style[t]=g:Os(e,t)),c=[i,r],WM(c),i=c[0],r=c[1],f=i.match(ya)||[],C=r.match(ya)||[],C.length){for(;d=ya.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=La(p,m)+S),h=parseFloat(m),x=m.substr((h+"").length),l=ya.lastIndex-x.length,x||(x=x||Ei.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Fs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?nE:tE;return yM.test(r)&&(a.e=0),this._pt=a,a},ex={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ID=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=ex[i]||i,t[1]=ex[r]||r,t.join(" ")},UD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],jr[a]&&(l=1,a=a==="transformOrigin"?si:kt),Os(i,a);l&&(Os(i,kt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",bu(i,1),o.uncache=1,iE(r)))}},ed={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,UD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Pu=[1,0,0,1,0,0],lE={},uE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},tx=function(e){var t=yi(e,kt);return uE(t)?Pu:t.substr(7).match(xM).map(Yt)},wg=function(e,t){var i=e._gsap||xo(e),r=e.style,s=tx(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Pu:s):(s===Pu&&!e.offsetParent&&e!==Ia&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ia.appendChild(e)),s=tx(e),l?r.display=l:Os(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$m=function(e,t,i,r,s,o){var a=e._gsap,l=s||wg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,A,M,R,I;i?l!==Pu&&(M=p*m-_*g)&&(R=S*(m/M)+C*(-g/M)+(g*v-m*h)/M,I=S*(-_/M)+C*(p/M)-(p*v-_*h)/M,S=R,C=I):(A=oE(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),C=A.y+(~(x[1]||x[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(h=S-u,v=C-c,a.xOffset=d+(h*p+v*g)-h,a.yOffset=f+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(_s(o,a,"xOrigin",u,S),_s(o,a,"yOrigin",c,C),_s(o,a,"xOffset",d,a.xOffset),_s(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},bu=function(e,t){var i=e._gsap||new YM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=yi(e,si)||"0",c,d,f,p,_,g,m,h,v,x,S,C,A,M,R,I,y,T,U,z,X,$,B,Y,L,j,P,te,ye,He,H,Q;return c=d=f=g=m=h=v=x=S=0,p=_=1,i.svg=!!(e.getCTM&&aE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),r.scale=r.rotate=r.translate="none"),M=wg(e,i.svg),i.svg&&(i.uncache?(L=e.getBBox(),u=i.xOrigin-L.x+"px "+(i.yOrigin-L.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),$m(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,A=i.yOrigin||0,M!==Pu&&(T=M[0],U=M[1],z=M[2],X=M[3],c=$=M[4],d=B=M[5],M.length===6?(p=Math.sqrt(T*T+U*U),_=Math.sqrt(X*X+z*z),g=T||U?ta(U,T)*no:0,v=z||X?ta(z,X)*no+g:0,v&&(_*=Math.abs(Math.cos(v*Ua))),i.svg&&(c-=C-(C*T+A*z),d-=A-(C*U+A*X))):(Q=M[6],He=M[7],P=M[8],te=M[9],ye=M[10],H=M[11],c=M[12],d=M[13],f=M[14],R=ta(Q,ye),m=R*no,R&&(I=Math.cos(-R),y=Math.sin(-R),Y=$*I+P*y,L=B*I+te*y,j=Q*I+ye*y,P=$*-y+P*I,te=B*-y+te*I,ye=Q*-y+ye*I,H=He*-y+H*I,$=Y,B=L,Q=j),R=ta(-z,ye),h=R*no,R&&(I=Math.cos(-R),y=Math.sin(-R),Y=T*I-P*y,L=U*I-te*y,j=z*I-ye*y,H=X*y+H*I,T=Y,U=L,z=j),R=ta(U,T),g=R*no,R&&(I=Math.cos(R),y=Math.sin(R),Y=T*I+U*y,L=$*I+B*y,U=U*I-T*y,B=B*I-$*y,T=Y,$=L),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Yt(Math.sqrt(T*T+U*U+z*z)),_=Yt(Math.sqrt(B*B+Q*Q)),R=ta($,B),v=Math.abs(R)>2e-4?R*no:0,S=H?1/(H<0?-H:H):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!uE(yi(e,kt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Yt(p),i.scaleY=Yt(_),i.rotation=Yt(g)+a,i.rotationX=Yt(m)+a,i.rotationY=Yt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=td(u)),i.xOffset=i.yOffset=0,i.force3D=Ei.force3D,i.renderTransform=i.svg?OD:sE?cE:ND,i.uncache=0,i},td=function(e){return(e=e.split(" "))[0]+" "+e[1]},Wh=function(e,t,i){var r=Pn(t);return Yt(parseFloat(t)+parseFloat(Fs(e,"x",i+"px",r)))+r},ND=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cE(e,t)},Ks="0deg",El="0px",Zs=") ",cE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,S="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==Ks||c!==Ks)){var A=parseFloat(c)*Ua,M=Math.sin(A),R=Math.cos(A),I;A=parseFloat(d)*Ua,I=Math.cos(A),o=Wh(v,o,M*I*-x),a=Wh(v,a,-Math.sin(A)*-x),l=Wh(v,l,R*I*-x+x)}m!==El&&(S+="perspective("+m+Zs),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==El||a!==El||l!==El)&&(S+=l!==El||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zs),u!==Ks&&(S+="rotate("+u+Zs),c!==Ks&&(S+="rotateY("+c+Zs),d!==Ks&&(S+="rotateX("+d+Zs),(f!==Ks||p!==Ks)&&(S+="skew("+f+", "+p+Zs),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Zs),v.style[kt]=S||"translate(0, 0)"},OD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,A,M,R,I;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ua,u*=Ua,C=Math.cos(l)*d,A=Math.sin(l)*d,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=Ua,I=Math.tan(u-c),I=Math.sqrt(1+I*I),M*=I,R*=I,c&&(I=Math.tan(c),I=Math.sqrt(1+I*I),C*=I,A*=I)),C=Yt(C),A=Yt(A),M=Yt(M),R=Yt(R)):(C=d,R=f,A=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Fs(p,"x",o,"px"),S=Fs(p,"y",a,"px")),(_||g||m||h)&&(x=Yt(x+_-(_*C+g*M)+m),S=Yt(S+g-(_*A+g*R)+h)),(r||s)&&(I=p.getBBox(),x=Yt(x+r/100*I.width),S=Yt(S+s/100*I.height)),I="matrix("+C+","+A+","+M+","+R+","+x+","+S+")",p.setAttribute("transform",I),v&&(p.style[kt]=I)},FD=function(e,t,i,r,s){var o=360,a=pn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?no:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*jv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*jv)%o-~~(u/o)*o)),e._pt=f=new ri(e._pt,t,i,r,u,xD),f.e=c,f.u="deg",e._props.push(i),f},nx=function(e,t){for(var i in t)e[i]=t[i];return e},kD=function(e,t,i){var r=nx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[kt]=t,a=bu(i,1),Os(i,kt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[kt],o[kt]=t,a=bu(i,1),o[kt]=u);for(l in jr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Pn(u),_=Pn(c),d=p!==_?Fs(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new ri(e._pt,a,l,d,f-d,Xm),e._pt.u=_||0,e._props.push(l));nx(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ed[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return br(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var fE={name:"css",register:qm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,x,S,C,A,M,R,I;Mg||qm(),this.styles=this.styles||rE(e),R=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(pi[g]&&qM(g,t,i,r,e,s)))){if(p=typeof c,_=ed[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Au(c)),_)_(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",bs.lastIndex=0,bs.test(u)||(m=Pn(u),h=Pn(c),h?m!==h&&(u=Fs(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],pn(u)&&~u.indexOf("random(")&&(u=Au(u)),Pn(u+"")||u==="auto"||(u+=Ei.units[g]||Pn(br(e,g))||""),(u+"").charAt(1)==="="&&(u=br(e,g))):u=br(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in mr&&(g==="autoAlpha"&&(f===1&&br(e,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),_s(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=mr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in jr,x){if(this.styles.save(g),I=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=yi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=yi(e,"perspective"),y?e.style.perspective=y:Os(e,"perspective")}d=parseFloat(c)}if(S||(C=e._gsap,C.renderTransform&&!t.parseTransform||bu(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new ri(this._pt,a,kt,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(v?La(C.scaleY,v+d):d)-C.scaleY||0,Xm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(si,0,a[si]),c=ID(c),C.svg?$m(e,c,0,A,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&_s(this,C,"zOrigin",C.zOrigin,h),_s(this,a,g,td(u),td(c)));continue}else if(g==="svgOrigin"){$m(e,c,1,A,0,this);continue}else if(g in lE){FD(this,C,g,f,v?La(f,v+c):c);continue}else if(g==="smoothOrigin"){_s(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){kD(this,c,e);continue}}else g in a||(g=nl(g)||g);if(x||(d||d===0)&&(f||f===0)&&!vD.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=Pn(c)||(g in Ei.units?Ei.units[g]:m),m!==h&&(f=Fs(e,g,u,h)),this._pt=new ri(this._pt,x?C:a,g,f,(v?La(f,v+d):d)-f,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?MD:Xm),this._pt.u=h||0,x&&I!==c?(this._pt.b=u,this._pt.e=I,this._pt.r=SD):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=yD);else if(g in a)LD.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){dg(g,c);continue}x||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,u||e[g])),o.push(g)}}M&&JM(this)},render:function(e,t){if(t.tween._time||!Eg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:br,aliases:mr,getSetter:function(e,t,i){var r=mr[t];return r&&r.indexOf(",")<0&&(t=r),t in jr&&t!==si&&(e._gsap.x||br(e,"x"))?i&&$v===i?t==="scale"?AD:wD:($v=i||{})&&(t==="scale"?CD:RD):e.style&&!ug(e.style[t])?ED:~t.indexOf("-")?TD:yg(e,t)},core:{_removeProperty:Os,_getMatrix:wg}};oi.utils.checkPrefix=nl;oi.core.getStyleSaver=rE;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){jr[s]=1});ii(e,function(s){Ei.units[s]="deg",lE[s]=1}),mr[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");mr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Ei.units[n]="px"});oi.registerPlugin(fE);var po=oi.registerPlugin(fE)||oi;po.core.Tween;function zD(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function BD(n,e,t){return e&&zD(n.prototype,e),n}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gn,pf,gi,gs,vs,Na,dE,io,Oa,hE,kr,Zi,pE,mE=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},_E=1,Ma=[],it=[],xr=[],Kl=Date.now,jm=function(e,t){return t},HD=function(){var e=Oa.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,it),r.push.apply(r,xr),it=i,xr=r,jm=function(o,a){return t[o](a)}},Ds=function(e,t){return~xr.indexOf(e)&&xr[xr.indexOf(e)+1][t]},Zl=function(e){return!!~hE.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},In=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Ic="scrollLeft",Uc="scrollTop",Km=function(){return kr&&kr.isPressed||it.cache++},nd=function(e,t){var i=function r(s){if(s||s===0){_E&&(gi.history.scrollRestoration="manual");var o=kr&&kr.isPressed;s=r.v=Math.round(s)||(kr&&kr.iOS?1:0),e(s),r.cacheID=it.cache,o&&jm("ss",s)}else(t||it.cache!==r.cacheID||jm("ref"))&&(r.cacheID=it.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Bn={s:Ic,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:nd(function(n){return arguments.length?gi.scrollTo(n,rn.sc()):gi.pageXOffset||gs[Ic]||vs[Ic]||Na[Ic]||0})},rn={s:Uc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Bn,sc:nd(function(n){return arguments.length?gi.scrollTo(Bn.sc(),n):gi.pageYOffset||gs[Uc]||vs[Uc]||Na[Uc]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},VD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},ks=function(e,t){var i=t.s,r=t.sc;Zl(e)&&(e=gs.scrollingElement||vs);var s=it.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||Un(e,"scroll",Km);var a=it[s+o],l=a||(it[s+o]=nd(Ds(e,i),!0)||(Zl(e)?r:nd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Zm=function(e,t,i){var r=e,s=e,o=Kl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=Kl();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=Kl();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},Tl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ix=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},gE=function(){Oa=gn.core.globals().ScrollTrigger,Oa&&Oa.core&&HD()},vE=function(e){return gn=e||mE(),!pf&&gn&&typeof document<"u"&&document.body&&(gi=window,gs=document,vs=gs.documentElement,Na=gs.body,hE=[gi,gs,vs,Na],gn.utils.clamp,pE=gn.core.context||function(){},io="onpointerenter"in Na?"pointer":"mouse",dE=jt.isTouch=gi.matchMedia&&gi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in gi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Zi=jt.eventTypes=("ontouchstart"in vs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return _E=0},500),pf=1),Oa||gE(),pf};Bn.op=rn;it.cache=0;var jt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){pf||vE(gn)||console.warn("Please gsap.registerPlugin(Observer)"),Oa||gE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,A=i.onLeft,M=i.onUp,R=i.onDown,I=i.onChangeX,y=i.onChangeY,T=i.onChange,U=i.onToggleX,z=i.onToggleY,X=i.onHover,$=i.onHoverEnd,B=i.onMove,Y=i.ignoreCheck,L=i.isNormalizer,j=i.onGestureStart,P=i.onGestureEnd,te=i.onWheel,ye=i.onEnable,He=i.onDisable,H=i.onClick,Q=i.scrollSpeed,re=i.capture,ae=i.allowClicks,Ce=i.lockAxis,Te=i.onLockAxis;this.target=a=Xn(a)||vs,this.vars=i,p&&(p=gn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,Q=Q||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(gi.getComputedStyle(Na).lineHeight)||22);var qe,We,Fe,D,rt,ke,Ve,k=this,Ue=0,Ae=0,b=i.passive||!c&&i.passive!==!1,E=ks(a,Bn),G=ks(a,rn),J=E(),ie=G(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Zi[0]==="pointerdown",Se=Zl(a),oe=a.ownerDocument||gs,he=[0,0,0],Ge=[0,0,0],se=0,xe=function(){return se=Kl()},Me=function(Re,ct){return(k.event=Re)&&p&&VD(Re.target,p)||ct&&Z&&Re.pointerType!=="touch"||Y&&Y(Re,ct)},Oe=function(){k._vx.reset(),k._vy.reset(),We.pause(),d&&d(k)},me=function(){var Re=k.deltaX=ix(he),ct=k.deltaY=ix(Ge),_e=Math.abs(Re)>=r,ze=Math.abs(ct)>=r;T&&(_e||ze)&&T(k,Re,ct,he,Ge),_e&&(C&&k.deltaX>0&&C(k),A&&k.deltaX<0&&A(k),I&&I(k),U&&k.deltaX<0!=Ue<0&&U(k),Ue=k.deltaX,he[0]=he[1]=he[2]=0),ze&&(R&&k.deltaY>0&&R(k),M&&k.deltaY<0&&M(k),y&&y(k),z&&k.deltaY<0!=Ae<0&&z(k),Ae=k.deltaY,Ge[0]=Ge[1]=Ge[2]=0),(D||Fe)&&(B&&B(k),Fe&&(m&&Fe===1&&m(k),v&&v(k),Fe=0),D=!1),ke&&!(ke=!1)&&Te&&Te(k),rt&&(te(k),rt=!1),qe=0},Ye=function(Re,ct,_e){he[_e]+=Re,Ge[_e]+=ct,k._vx.update(Re),k._vy.update(ct),u?qe||(qe=requestAnimationFrame(me)):me()},Ne=function(Re,ct){Ce&&!Ve&&(k.axis=Ve=Math.abs(Re)>Math.abs(ct)?"x":"y",ke=!0),Ve!=="y"&&(he[2]+=Re,k._vx.update(Re,!0)),Ve!=="x"&&(Ge[2]+=ct,k._vy.update(ct,!0)),u?qe||(qe=requestAnimationFrame(me)):me()},Je=function(Re){if(!Me(Re,1)){Re=Tl(Re,c);var ct=Re.clientX,_e=Re.clientY,ze=ct-k.x,Le=_e-k.y,Xe=k.isDragging;k.x=ct,k.y=_e,(Xe||(ze||Le)&&(Math.abs(k.startX-ct)>=s||Math.abs(k.startY-_e)>=s))&&(Fe||(Fe=Xe?2:1),Xe||(k.isDragging=!0),Ne(ze,Le))}},N=k.onPress=function(De){Me(De,1)||De&&De.button||(k.axis=Ve=null,We.pause(),k.isPressed=!0,De=Tl(De),Ue=Ae=0,k.startX=k.x=De.clientX,k.startY=k.y=De.clientY,k._vx.reset(),k._vy.reset(),Un(L?a:oe,Zi[1],Je,b,!0),k.deltaX=k.deltaY=0,x&&x(k))},ne=k.onRelease=function(De){if(!Me(De,1)){In(L?a:oe,Zi[1],Je,!0);var Re=!isNaN(k.y-k.startY),ct=k.isDragging,_e=ct&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),ze=Tl(De);!_e&&Re&&(k._vx.reset(),k._vy.reset(),c&&ae&&gn.delayedCall(.08,function(){if(Kl()-se>300&&!De.defaultPrevented){if(De.target.click)De.target.click();else if(oe.createEvent){var Le=oe.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,gi,1,ze.screenX,ze.screenY,ze.clientX,ze.clientY,!1,!1,!1,!1,0,null),De.target.dispatchEvent(Le)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,d&&ct&&!L&&We.restart(!0),Fe&&me(),h&&ct&&h(k),S&&S(k,_e)}},K=function(Re){return Re.touches&&Re.touches.length>1&&(k.isGesturing=!0)&&j(Re,k.isDragging)},ee=function(){return(k.isGesturing=!1)||P(k)},ce=function(Re){if(!Me(Re)){var ct=E(),_e=G();Ye((ct-J)*Q,(_e-ie)*Q,1),J=ct,ie=_e,d&&We.restart(!0)}},fe=function(Re){if(!Me(Re)){Re=Tl(Re,c),te&&(rt=!0);var ct=(Re.deltaMode===1?l:Re.deltaMode===2?gi.innerHeight:1)*_;Ye(Re.deltaX*ct,Re.deltaY*ct,0),d&&!L&&We.restart(!0)}},$e=function(Re){if(!Me(Re)){var ct=Re.clientX,_e=Re.clientY,ze=ct-k.x,Le=_e-k.y;k.x=ct,k.y=_e,D=!0,d&&We.restart(!0),(ze||Le)&&Ne(ze,Le)}},yt=function(Re){k.event=Re,X(k)},Dt=function(Re){k.event=Re,$(k)},st=function(Re){return Me(Re)||Tl(Re,c)&&H(k)};We=k._dc=gn.delayedCall(f||.25,Oe).pause(),k.deltaX=k.deltaY=0,k._vx=Zm(0,50,!0),k._vy=Zm(0,50,!0),k.scrollX=E,k.scrollY=G,k.isDragging=k.isGesturing=k.isPressed=!1,pE(this),k.enable=function(De){return k.isEnabled||(Un(Se?oe:a,"scroll",Km),o.indexOf("scroll")>=0&&Un(Se?oe:a,"scroll",ce,b,re),o.indexOf("wheel")>=0&&Un(a,"wheel",fe,b,re),(o.indexOf("touch")>=0&&dE||o.indexOf("pointer")>=0)&&(Un(a,Zi[0],N,b,re),Un(oe,Zi[2],ne),Un(oe,Zi[3],ne),ae&&Un(a,"click",xe,!0,!0),H&&Un(a,"click",st),j&&Un(oe,"gesturestart",K),P&&Un(oe,"gestureend",ee),X&&Un(a,io+"enter",yt),$&&Un(a,io+"leave",Dt),B&&Un(a,io+"move",$e)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=D=Fe=!1,k._vx.reset(),k._vy.reset(),J=E(),ie=G(),De&&De.type&&N(De),ye&&ye(k)),k},k.disable=function(){k.isEnabled&&(Ma.filter(function(De){return De!==k&&Zl(De.target)}).length||In(Se?oe:a,"scroll",Km),k.isPressed&&(k._vx.reset(),k._vy.reset(),In(L?a:oe,Zi[1],Je,!0)),In(Se?oe:a,"scroll",ce,re),In(a,"wheel",fe,re),In(a,Zi[0],N,re),In(oe,Zi[2],ne),In(oe,Zi[3],ne),In(a,"click",xe,!0),In(a,"click",st),In(oe,"gesturestart",K),In(oe,"gestureend",ee),In(a,io+"enter",yt),In(a,io+"leave",Dt),In(a,io+"move",$e),k.isEnabled=k.isPressed=k.isDragging=!1,He&&He(k))},k.kill=k.revert=function(){k.disable();var De=Ma.indexOf(k);De>=0&&Ma.splice(De,1),kr===k&&(kr=0)},Ma.push(k),L&&Zl(a)&&(kr=k),k.enable(g)},BD(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();jt.version="3.15.0";jt.create=function(n){return new jt(n)};jt.register=vE;jt.getAll=function(){return Ma.slice()};jt.getById=function(n){return Ma.filter(function(e){return e.vars.id===n})[0]};mE()&&gn.registerPlugin(jt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var we,sa,nt,_t,mi,ht,Ag,id,Du,Ql,Il,Nc,wn,bd,Qm,kn,rx,sx,oa,xE,Xh,yE,On,Jm,SE,ME,os,e_,Cg,Fa,Rg,Jl,t_,Yh,Oc=1,Cn=Date.now,qh=Cn(),Gi=0,Ul=0,ox=function(e,t,i){var r=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},ax=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},GD=function n(){return Ul&&requestAnimationFrame(n)},lx=function(){return bd=1},ux=function(){return bd=0},fr=function(e){return e},Nl=function(e){return Math.round(e*1e5)/1e5||0},EE=function(){return typeof window<"u"},TE=function(){return we||EE()&&(we=window.gsap)&&we.registerPlugin&&we},Io=function(e){return!!~Ag.indexOf(e)},wE=function(e){return(e==="Height"?Rg:nt["inner"+e])||mi["client"+e]||ht["client"+e]},AE=function(e){return Ds(e,"getBoundingClientRect")||(Io(e)?function(){return xf.width=nt.innerWidth,xf.height=Rg,xf}:function(){return Lr(e)})},WD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ds(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?wE(s):e["client"+s])||0}},XD=function(e,t){return!t||~xr.indexOf(e)?AE(e):function(){return xf}},_r=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ds(e,i))?o()-AE(e)()[s]:Io(e)?(mi[i]||ht[i])-wE(r):e[i]-e["offset"+r])},Fc=function(e,t){for(var i=0;i<oa.length;i+=3)(!t||~t.indexOf(oa[i+1]))&&e(oa[i],oa[i+1],oa[i+2])},hi=function(e){return typeof e=="string"},bn=function(e){return typeof e=="function"},Ol=function(e){return typeof e=="number"},ro=function(e){return typeof e=="object"},wl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},na=function(e,t,i){if(e.enabled){var r=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);r&&r.totalTime&&(e.callbackAnimation=r)}},ia=Math.abs,CE="left",RE="top",Pg="right",bg="bottom",Eo="width",To="height",eu="Right",tu="Left",nu="Top",iu="Bottom",Qt="padding",Oi="margin",il="Width",Dg="Height",tn="px",Fi=function(e){return nt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},YD=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},cx=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Lr=function(e,t){var i=t&&Fi(e)[Qm]!=="matrix(1, 0, 0, 1, 0, 0)"&&we.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),r},rd=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},PE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},qD=function(e){return function(t){return we.utils.snap(PE(e),t)}},Lg=function(e){var t=we.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},$D=function(e){return function(t,i){return Lg(PE(e))(t,i.direction)}},kc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},fn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},cn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},fx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Bc={toggleActions:"play",anticipatePin:0},sd={top:0,left:0,center:.5,bottom:1,right:1},mf=function(e,t){if(hi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in sd?sd[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Hc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=_t.createElement("div"),g=Io(i)||Ds(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?ht:i.tagName==="IFRAME"?i.contentDocument.body:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(r===rn?Pg:bg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],_f(_,0,r,v),_},_f=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+il]=1,s["border"+a+il]=0,s[i.p]=t+"px",we.set(e,s)},tt=[],n_={},Lu,dx=function(){return Cn()-Gi>34&&(Lu||(Lu=requestAnimationFrame(Br)))},ra=function(){(!On||!On.isPressed||On.startX>ht.clientWidth)&&(it.cache++,On?Lu||(Lu=requestAnimationFrame(Br)):Br(),Gi||No("scrollStart"),Gi=Cn())},$h=function(){ME=nt.innerWidth,SE=nt.innerHeight},Fl=function(e){it.cache++,(e===!0||!wn&&!yE&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!Jm||ME!==nt.innerWidth||Math.abs(nt.innerHeight-SE)>nt.innerHeight*.25))&&id.restart(!0)},Uo={},jD=[],bE=function n(){return cn(je,"scrollEnd",n)||mo(!0)},No=function(e){return Uo[e]&&Uo[e].map(function(t){return t()})||jD},fi=[],DE=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},LE=function(){return it.forEach(function(e){return bn(e)&&++e.cacheID&&(e.rec=e())})},Ig=function(e,t){var i;for(kn=0;kn<tt.length;kn++)i=tt[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Jl=!0,t&&DE(t),t||No("revert")},IE=function(e,t){it.cache++,(t||!zn)&&it.forEach(function(i){return bn(i)&&i.cacheID++&&(i.rec=0)}),hi(e)&&(nt.history.scrollRestoration=Cg=e)},zn,wo=0,hx,KD=function(){if(hx!==wo){var e=hx=wo;requestAnimationFrame(function(){return e===wo&&mo(!0)})}},UE=function(){ht.appendChild(Fa),Rg=!On&&Fa.offsetHeight||nt.innerHeight,ht.removeChild(Fa)},px=function(e){return Du(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},mo=function(e,t){if(mi=_t.documentElement,ht=_t.body,Ag=[nt,_t,mi,ht],Gi&&!e&&!Jl){fn(je,"scrollEnd",bE);return}UE(),zn=je.isRefreshing=!0,Jl||LE();var i=No("refreshInit");xE&&je.sort(),t||Ig(),it.forEach(function(r){bn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),Jl=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),t_=1,px(!0),tt.forEach(function(r){var s=_r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),px(!1),t_=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),it.forEach(function(r){bn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),IE(Cg,1),id.pause(),wo++,zn=2,Br(2),tt.forEach(function(r){return bn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=je.isRefreshing=!1,No("refresh")},i_=0,gf=1,ru,Br=function(e){if(e===2||!zn&&!Jl){je.isUpdating=!0,ru&&ru.update(0);var t=tt.length,i=Cn(),r=i-qh>=50,s=t&&tt[0].scroll();if(gf=i_>s?-1:1,zn||(i_=s),r&&(Gi&&!bd&&i-Gi>200&&(Gi=0,No("scrollEnd")),Il=qh,qh=i),gf<0){for(kn=t;kn-- >0;)tt[kn]&&tt[kn].update(0,r);gf=1}else for(kn=0;kn<t;kn++)tt[kn]&&tt[kn].update(0,r);je.isUpdating=!1}Lu=0},r_=[CE,RE,bg,Pg,Oi+iu,Oi+eu,Oi+nu,Oi+tu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vf=r_.concat([Eo,To,"boxSizing","max"+il,"max"+Dg,"position",Oi,Qt,Qt+nu,Qt+eu,Qt+iu,Qt+tu]),ZD=function(e,t,i){ka(i);var r=e._gsap;if(r.spacerIsNative)ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=r_.length,o=t.style,a=e.style,l;s--;)l=r_[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[bg]=a[Pg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Eo]=rd(e,Bn)+tn,o[To]=rd(e,rn)+tn,o[Qt]=a[Oi]=a[RE]=a[CE]="0",ka(r),a[Eo]=a["max"+il]=i[Eo],a[To]=a["max"+Dg]=i[To],a[Qt]=i[Qt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},QD=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||we.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(QD,"-$1").toLowerCase())}},Vc=function(e){for(var t=vf.length,i=e.style,r=[],s=0;s<t;s++)r.push(vf[s],i[vf[s]]);return r.t=e,r},JD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},xf={left:0,top:0},mx=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){bn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?mf("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Ol(e))p&&(e=we.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&_f(a,i,r,!0);else{bn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,A,M;v=Xn(t,l)||ht,S=Lr(v)||{},(!S||!S.left&&!S.top)&&Fi(v).display==="none"&&(M=v.style.display,v.style.display="block",S=Lr(v),M?v.style.display=M:v.style.removeProperty("display")),C=mf(x[0],S[r.d]),A=mf(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-A,a&&_f(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+i,I=o._isStart;m="scroll"+r.d2,_f(o,R,r,I&&R>20||!I&&(d?Math.max(ht[m],mi[m]):o.parentNode[m])<=R+1),d&&(u=Lr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+tn))}return p&&v&&(m=Lr(v),p.seek(f),h=Lr(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},eL=/(webkit|moz|length|cssText|inset)/i,_x=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===ht){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!eL.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;we.core.getCache(e).uncache=1,t.appendChild(e)}},NE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Gc=function(e,t,i){var r={};r[t.p]="+="+i,we.set(e,r)},gx=function(e,t){var i=ks(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=NE(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Br()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=we.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",i.wheelHandler),je.isTouch&&fn(e,"touchmove",i.wheelHandler),s},je=function(){function n(t,i){sa||n.register(we)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),e_(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ul){this.update=this.refresh=this.kill=fr;return}i=cx(hi(i)||Ol(i)||i.nodeType?{trigger:i}:i,Bc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,A=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,I=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Bn:rn,T=!d&&d!==0,U=Xn(i.scroller||nt),z=we.core.getCache(U),X=Io(U),$=("pinType"in i?i.pinType:Ds(U,"pinType")||X&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=T&&i.toggleActions.split(" "),L="markers"in i?i.markers:Bc.markers,j=X?0:parseFloat(Fi(U)["border"+y.p2+il])||0,P=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ye=WD(U,X,y),He=XD(U,X),H=0,Q=0,re=0,ae=ks(U,y),Ce,Te,qe,We,Fe,D,rt,ke,Ve,k,Ue,Ae,b,E,G,J,ie,Z,Se,oe,he,Ge,se,xe,Me,Oe,me,Ye,Ne,Je,N,ne,K,ee,ce,fe,$e,yt,Dt;if(P._startClamp=P._endClamp=!1,P._dir=y,m*=45,P.scroller=U,P.scroll=M?M.time.bind(M):ae,We=ae(),P.vars=i,r=r||i.animation,"refreshPriority"in i&&(xE=1,i.refreshPriority===-9999&&(ru=P)),z.tweenScroll=z.tweenScroll||{top:gx(U,rn),left:gx(U,Bn)},P.tweenTo=Ce=z.tweenScroll[y.p],P.scrubDuration=function(_e){K=Ol(_e)&&_e,K?ne?ne.duration(_e):ne=we.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:K,paused:!0,onComplete:function(){return h&&h(P)}}):(ne&&ne.progress(1).kill(),ne=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(d),Je=0,l||(l=r.vars.id)),S&&((!ro(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ht.style&&we.set(X?[ht,mi]:U,{scrollBehavior:"auto"}),it.forEach(function(_e){return bn(_e)&&_e.target===(X?_t.scrollingElement||mi:U)&&(_e.smooth=!1)}),qe=bn(S.snapTo)?S.snapTo:S.snapTo==="labels"?qD(r):S.snapTo==="labelsDirectional"?$D(r):S.directional!==!1?function(_e,ze){return Lg(S.snapTo)(_e,Cn()-Q<500?0:ze.direction)}:we.utils.snap(S.snapTo),ee=S.duration||{min:.1,max:2},ee=ro(ee)?Ql(ee.min,ee.max):Ql(ee,ee),ce=we.delayedCall(S.delay||K/2||.1,function(){var _e=ae(),ze=Cn()-Q<500,Le=Ce.tween;if((ze||Math.abs(P.getVelocity())<10)&&!Le&&!bd&&H!==_e){var Xe=(_e-D)/E,Gt=r&&!T?r.totalProgress():Xe,Ke=ze?0:(Gt-N)/(Cn()-Il)*1e3||0,Lt=we.utils.clamp(-Xe,1-Xe,ia(Ke/2)*Ke/.185),Wt=Xe+(S.inertia===!1?0:Lt),At,St,mt=S,ai=mt.onStart,Ct=mt.onInterrupt,w=mt.onComplete;if(At=qe(Wt,P),Ol(At)||(At=Wt),St=Math.max(0,Math.round(D+At*E)),_e<=rt&&_e>=D&&St!==_e){if(Le&&!Le._initted&&Le.data<=ia(St-_e))return;S.inertia===!1&&(Lt=At-Xe),Ce(St,{duration:ee(ia(Math.max(ia(Wt-Gt),ia(At-Gt))*.185/Ke/.05||0)),ease:S.ease||"power3",data:ia(St-_e),onInterrupt:function(){return ce.restart(!0)&&Ct&&na(P,Ct)},onComplete:function(){P.update(),H=ae(),r&&!T&&(ne?ne.resetTo("totalProgress",At,r._tTime/r._tDur):r.progress(At)),Je=N=r&&!T?r.totalProgress():P.progress,v&&v(P),w&&na(P,w)}},_e,Lt*E,St-_e-Lt*E),ai&&na(P,ai,Ce.tween)}}else P.isActive&&H!==_e&&ce.restart(!0)}).pause()),l&&(n_[l]=P),f=P.trigger=Xn(f||p!==!0&&p),Dt=f&&f._gsap&&f._gsap.stRevert,Dt&&(Dt=Dt(P)),p=p===!0?f:Xn(p),hi(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Oi||(_=!_&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:Qt),P.pin=p,Te=we.core.getCache(p),Te.spacer?G=Te.pinState:(A&&(A=Xn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Te.spacerIsNative=!!A,A&&(Te.spacerState=Vc(A))),Te.spacer=Z=A||_t.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),Te.pinState=G=Vc(p)),i.force3D!==!1&&we.set(p,{force3D:!0}),P.spacer=Z=Te.spacer,Ne=Fi(p),xe=Ne[_+y.os2],oe=we.getProperty(p),he=we.quickSetter(p,y.a,tn),jh(p,Z,Ne),ie=Vc(p)),L){Ae=ro(L)?cx(L,fx):fx,k=Hc("scroller-start",l,U,y,Ae,0),Ue=Hc("scroller-end",l,U,y,Ae,0,k),Se=k["offset"+y.op.d2];var st=Xn(Ds(U,"content")||U);ke=this.markerStart=Hc("start",l,st,y,Ae,Se,0,M),Ve=this.markerEnd=Hc("end",l,st,y,Ae,Se,0,M),M&&(yt=we.quickSetter([ke,Ve],y.a,tn)),!$&&!(xr.length&&Ds(U,"fixedMarkers")===!0)&&(YD(X?ht:U),we.set([k,Ue],{force3D:!0}),Oe=we.quickSetter(k,y.a,tn),Ye=we.quickSetter(Ue,y.a,tn))}if(M){var De=M.vars.onUpdate,Re=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){P.update(0,0,1),De&&De.apply(M,Re||[])})}if(P.previous=function(){return tt[tt.indexOf(P)-1]},P.next=function(){return tt[tt.indexOf(P)+1]},P.revert=function(_e,ze){if(!ze)return P.kill(!0);var Le=_e!==!1||!P.enabled,Xe=wn;Le!==P.isReverted&&(Le&&(fe=Math.max(ae(),P.scroll.rec||0),re=P.progress,$e=r&&r.progress()),ke&&[ke,Ve,k,Ue].forEach(function(Gt){return Gt.style.display=Le?"none":"block"}),Le&&(wn=P,P.update(Le)),p&&(!C||!P.isActive)&&(Le?ZD(p,Z,G):jh(p,Z,Fi(p),Me)),Le||P.update(Le),wn=Xe,P.isReverted=Le)},P.refresh=function(_e,ze,Le,Xe){if(!((wn||!P.enabled)&&!ze)){if(p&&_e&&Gi){fn(n,"scrollEnd",bE);return}!zn&&te&&te(P),wn=P,Ce.tween&&!Le&&(Ce.tween.kill(),Ce.tween=0),ne&&ne.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(et){return et.vars.immediateRender&&et.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Gt=ye(),Ke=He(),Lt=M?M.duration():_r(U,y),Wt=E<=.01||!E,At=0,St=Xe||0,mt=ro(Le)?Le.end:i.end,ai=i.endTrigger||f,Ct=ro(Le)?Le.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),w=P.pinnedContainer=i.pinnedContainer&&Xn(i.pinnedContainer,P),F=f&&Math.max(0,tt.indexOf(P))||0,V=F,W,O,ue,ve,pe,de,be,Be,Pe,lt,at,xt,ln;for(L&&ro(Le)&&(xt=we.getProperty(k,y.p),ln=we.getProperty(Ue,y.p));V-- >0;)de=tt[V],de.end||de.refresh(0,1)||(wn=P),be=de.pin,be&&(be===f||be===p||be===w)&&!de.isReverted&&(lt||(lt=[]),lt.unshift(de),de.revert(!0,!0)),de!==tt[V]&&(F--,V--);for(bn(Ct)&&(Ct=Ct(P)),Ct=ox(Ct,"start",P),D=mx(Ct,f,Gt,y,ae(),ke,k,P,Ke,j,$,Lt,M,P._startClamp&&"_startClamp")||(p?-.001:0),bn(mt)&&(mt=mt(P)),hi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(hi(Ct)?Ct.split(" ")[0]:"")+mt:(At=mf(mt.substr(2),Gt),mt=hi(Ct)?Ct:(M?we.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,D):D)+At,ai=f)),mt=ox(mt,"end",P),rt=Math.max(D,mx(mt||(ai?"100% 0":Lt),ai,Gt,y,ae()+At,Ve,Ue,P,Ke,j,$,Lt,M,P._endClamp&&"_endClamp"))||-.001,At=0,V=F;V--;)de=tt[V]||{},be=de.pin,be&&de.start-de._pinPush<=D&&!M&&de.end>0&&(W=de.end-(P._startClamp?Math.max(0,de.start):de.start),(be===f&&de.start-de._pinPush<D||be===w)&&isNaN(Ct)&&(At+=W*(1-de.progress)),be===p&&(St+=W));if(D+=At,rt+=At,P._startClamp&&(P._startClamp+=At),P._endClamp&&!zn&&(P._endClamp=rt||-.001,rt=Math.min(rt,_r(U,y))),E=rt-D||(D-=.01)&&.001,Wt&&(re=we.utils.clamp(0,1,we.utils.normalize(D,rt,fe))),P._pinPush=St,ke&&At&&(W={},W[y.a]="+="+At,w&&(W[y.p]="-="+ae()),we.set([ke,Ve],W)),p&&!(t_&&P.end>=_r(U,y)))W=Fi(p),ve=y===rn,ue=ae(),Ge=parseFloat(oe(y.a))+St,!Lt&&rt>1&&(at=(X?_t.scrollingElement||mi:U).style,at={style:at,value:at["overflow"+y.a.toUpperCase()]},X&&Fi(ht)["overflow"+y.a.toUpperCase()]!=="scroll"&&(at.style["overflow"+y.a.toUpperCase()]="scroll")),jh(p,Z,W),ie=Vc(p),O=Lr(p,!0),Be=$&&ks(U,ve?Bn:rn)(),_?(Me=[_+y.os2,E+St+tn],Me.t=Z,V=_===Qt?rd(p,y)+E+St:0,V&&(Me.push(y.d,V+tn),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+tn)),ka(Me),w&&tt.forEach(function(et){et.pin===w&&et.vars.pinSpacing!==!1&&(et._subPinOffset=!0)}),$&&ae(fe)):(V=rd(p,y),V&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=V+tn)),$&&(pe={top:O.top+(ve?ue-D:Be)+tn,left:O.left+(ve?Be:ue-D)+tn,boxSizing:"border-box",position:"fixed"},pe[Eo]=pe["max"+il]=Math.ceil(O.width)+tn,pe[To]=pe["max"+Dg]=Math.ceil(O.height)+tn,pe[Oi]=pe[Oi+nu]=pe[Oi+eu]=pe[Oi+iu]=pe[Oi+tu]="0",pe[Qt]=W[Qt],pe[Qt+nu]=W[Qt+nu],pe[Qt+eu]=W[Qt+eu],pe[Qt+iu]=W[Qt+iu],pe[Qt+tu]=W[Qt+tu],J=JD(G,pe,C),zn&&ae(0)),r?(Pe=r._initted,Xh(1),r.render(r.duration(),!0,!0),se=oe(y.a)-Ge+E+St,me=Math.abs(E-se)>1,$&&me&&J.splice(J.length-2,2),r.render(0,!0,!0),Pe||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Xh(0)):se=E,at&&(at.value?at.style["overflow"+y.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+y.a));else if(f&&ae()&&!M)for(O=f.parentNode;O&&O!==ht;)O._pinOffset&&(D-=O._pinOffset,rt-=O._pinOffset),O=O.parentNode;lt&&lt.forEach(function(et){return et.revert(!1,!0)}),P.start=D,P.end=rt,We=Fe=zn?fe:ae(),!M&&!zn&&(We<fe&&ae(fe),P.scroll.rec=0),P.revert(!1,!0),Q=Cn(),ce&&(H=-1,ce.restart(!0)),wn=0,r&&T&&(r._initted||$e)&&r.progress()!==$e&&r.progress($e||0,!0).render(r.time(),!0,!0),(Wt||re!==P.progress||M||g||r&&!r._initted)&&(r&&!T&&(r._initted||re||r.vars.immediateRender!==!1)&&r.totalProgress(M&&D<-.001&&!re?we.utils.normalize(D,rt,0):re,!0),P.progress=Wt||(We-D)/E===re?0:re),p&&_&&(Z._pinOffset=Math.round(P.progress*se)),ne&&ne.invalidate(),isNaN(xt)||(xt-=we.getProperty(k,y.p),ln-=we.getProperty(Ue,y.p),Gc(k,y,xt),Gc(ke,y,xt-(Xe||0)),Gc(Ue,y,ln),Gc(Ve,y,ln-(Xe||0))),Wt&&!zn&&P.update(),c&&!zn&&!b&&(b=!0,c(P),b=!1)}},P.getVelocity=function(){return(ae()-Fe)/(Cn()-Il)*1e3||0},P.endAnimation=function(){wl(P.callbackAnimation),r&&(ne?ne.progress(1):r.paused()?T||wl(r,P.direction<0,1):wl(r,r.reversed()))},P.labelToScroll=function(_e){return r&&r.labels&&(D||P.refresh()||D)+r.labels[_e]/r.duration()*E||0},P.getTrailing=function(_e){var ze=tt.indexOf(P),Le=P.direction>0?tt.slice(0,ze).reverse():tt.slice(ze+1);return(hi(_e)?Le.filter(function(Xe){return Xe.vars.preventOverlaps===_e}):Le).filter(function(Xe){return P.direction>0?Xe.end<=D:Xe.start>=rt})},P.update=function(_e,ze,Le){if(!(M&&!Le&&!_e)){var Xe=zn===!0?fe:P.scroll(),Gt=_e?0:(Xe-D)/E,Ke=Gt<0?0:Gt>1?1:Gt||0,Lt=P.progress,Wt,At,St,mt,ai,Ct,w,F;if(ze&&(Fe=We,We=M?ae():Xe,S&&(N=Je,Je=r&&!T?r.totalProgress():Ke)),m&&p&&!wn&&!Oc&&Gi&&(!Ke&&D<Xe+(Xe-Fe)/(Cn()-Il)*m?Ke=1e-4:Ke===1&&rt>Xe+(Xe-Fe)/(Cn()-Il)*m&&(Ke=.9999)),Ke!==Lt&&P.enabled){if(Wt=P.isActive=!!Ke&&Ke<1,At=!!Lt&&Lt<1,Ct=Wt!==At,ai=Ct||!!Ke!=!!Lt,P.direction=Ke>Lt?1:-1,P.progress=Ke,ai&&!wn&&(St=Ke&&!Lt?0:Ke===1?1:Lt===1?2:3,T&&(mt=!Ct&&Y[St+1]!=="none"&&Y[St+1]||Y[St],F=r&&(mt==="complete"||mt==="reset"||mt in r))),I&&(Ct||F)&&(F||d||!r)&&(bn(I)?I(P):P.getTrailing(I).forEach(function(ue){return ue.endAnimation()})),T||(ne&&!wn&&!Oc?(ne._dp._time-ne._start!==ne._time&&ne.render(ne._dp._time-ne._start),ne.resetTo?ne.resetTo("totalProgress",Ke,r._tTime/r._tDur):(ne.vars.totalProgress=Ke,ne.invalidate().restart())):r&&r.totalProgress(Ke,!!(wn&&(Q||_e)))),p){if(_e&&_&&(Z.style[_+y.os2]=xe),!$)he(Nl(Ge+se*Ke));else if(ai){if(w=!_e&&Ke>Lt&&rt+1>Xe&&Xe+1>=_r(U,y),C)if(!_e&&(Wt||w)){var V=Lr(p,!0),W=Xe-D;_x(p,ht,V.top+(y===rn?W:0)+tn,V.left+(y===rn?0:W)+tn)}else _x(p,Z);ka(Wt||w?J:ie),me&&Ke<1&&Wt||he(Ge+(Ke===1&&!w?se:0))}}S&&!Ce.tween&&!wn&&!Oc&&ce.restart(!0),a&&(Ct||x&&Ke&&(Ke<1||!Yh))&&Du(a.targets).forEach(function(ue){return ue.classList[Wt||x?"add":"remove"](a.className)}),o&&!T&&!_e&&o(P),ai&&!wn?(T&&(F&&(mt==="complete"?r.pause().totalProgress(1):mt==="reset"?r.restart(!0).pause():mt==="restart"?r.restart(!0):r[mt]()),o&&o(P)),(Ct||!Yh)&&(u&&Ct&&na(P,u),B[St]&&na(P,B[St]),x&&(Ke===1?P.kill(!1,1):B[St]=0),Ct||(St=Ke===1?1:3,B[St]&&na(P,B[St]))),R&&!Wt&&Math.abs(P.getVelocity())>(Ol(R)?R:2500)&&(wl(P.callbackAnimation),ne?ne.progress(1):wl(r,mt==="reverse"?1:!Ke,1))):T&&o&&!wn&&o(P)}if(Ye){var O=M?Xe/M.duration()*(M._caScrollDist||0):Xe;Oe(O+(k._isFlipped?1:0)),Ye(O)}yt&&yt(-Xe/M.duration()*(M._caScrollDist||0))}},P.enable=function(_e,ze){P.enabled||(P.enabled=!0,fn(U,"resize",Fl),X||fn(U,"scroll",ra),te&&fn(n,"refreshInit",te),_e!==!1&&(P.progress=re=0,We=Fe=H=ae()),ze!==!1&&P.refresh())},P.getTween=function(_e){return _e&&Ce?Ce.tween:ne},P.setPositions=function(_e,ze,Le,Xe){if(M){var Gt=M.scrollTrigger,Ke=M.duration(),Lt=Gt.end-Gt.start;_e=Gt.start+Lt*_e/Ke,ze=Gt.start+Lt*ze/Ke}P.refresh(!1,!1,{start:ax(_e,Le&&!!P._startClamp),end:ax(ze,Le&&!!P._endClamp)},Xe),P.update()},P.adjustPinSpacing=function(_e){if(Me&&_e){var ze=Me.indexOf(y.d)+1;Me[ze]=parseFloat(Me[ze])+_e+tn,Me[1]=parseFloat(Me[1])+_e+tn,ka(Me)}},P.disable=function(_e,ze){if(_e!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,ze||ne&&ne.pause(),fe=0,Te&&(Te.uncache=1),te&&cn(n,"refreshInit",te),ce&&(ce.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!X)){for(var Le=tt.length;Le--;)if(tt[Le].scroller===U&&tt[Le]!==P)return;cn(U,"resize",Fl),X||cn(U,"scroll",ra)}},P.kill=function(_e,ze){P.disable(_e,ze),ne&&!ze&&ne.kill(),l&&delete n_[l];var Le=tt.indexOf(P);Le>=0&&tt.splice(Le,1),Le===kn&&gf>0&&kn--,Le=0,tt.forEach(function(Xe){return Xe.scroller===P.scroller&&(Le=1)}),Le||zn||(P.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),ze||r.kill()),ke&&[ke,Ve,k,Ue].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),ru===P&&(ru=0),p&&(Te&&(Te.uncache=1),Le=0,tt.forEach(function(Xe){return Xe.pin===p&&Le++}),Le||(Te.spacer=0)),i.onKill&&i.onKill(P)},tt.push(P),P.enable(!1,!1),Dt&&Dt(P),r&&r.add&&!E){var ct=P.update;P.update=function(){P.update=ct,it.cache++,D||rt||P.refresh()},we.delayedCall(.01,P.update),E=.01,D=rt=0}else P.refresh();p&&KD()},n.register=function(i){return sa||(we=i||TE(),EE()&&window.document&&n.enable(),sa=Ul),sa},n.defaults=function(i){if(i)for(var r in i)Bc[r]=i[r];return Bc},n.disable=function(i,r){Ul=0,tt.forEach(function(o){return o[r?"kill":"disable"](i)}),cn(nt,"wheel",ra),cn(_t,"scroll",ra),clearInterval(Nc),cn(_t,"touchcancel",fr),cn(ht,"touchstart",fr),kc(cn,_t,"pointerdown,touchstart,mousedown",lx),kc(cn,_t,"pointerup,touchend,mouseup",ux),id.kill(),Fc(cn);for(var s=0;s<it.length;s+=3)zc(cn,it[s],it[s+1]),zc(cn,it[s],it[s+2])},n.enable=function(){if(nt=window,_t=document,mi=_t.documentElement,ht=_t.body,we){if(Du=we.utils.toArray,Ql=we.utils.clamp,e_=we.core.context||fr,Xh=we.core.suppressOverwrites||fr,Cg=nt.history.scrollRestoration||"auto",i_=nt.pageYOffset||0,we.core.globals("ScrollTrigger",n),ht){Ul=1,Fa=document.createElement("div"),Fa.style.height="100vh",Fa.style.position="absolute",UE(),GD(),jt.register(we),n.isTouch=jt.isTouch,os=jt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Jm=jt.isTouch===1,fn(nt,"wheel",ra),Ag=[nt,_t,mi,ht],we.matchMedia?(n.matchMedia=function(c){var d=we.matchMedia(),f;for(f in c)d.add(f,c[f]);return d},we.addEventListener("matchMediaInit",function(){LE(),Ig()}),we.addEventListener("matchMediaRevert",function(){return DE()}),we.addEventListener("matchMedia",function(){mo(0,1),No("matchMedia")}),we.matchMedia().add("(orientation: portrait)",function(){return $h(),$h})):console.warn("Requires GSAP 3.11.0 or later"),$h(),fn(_t,"scroll",ra);var i=ht.hasAttribute("style"),r=ht.style,s=r.borderTopStyle,o=we.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Lr(ht),rn.m=Math.round(a.top+rn.sc())||0,Bn.m=Math.round(a.left+Bn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(ht.setAttribute("style",""),ht.removeAttribute("style")),Nc=setInterval(dx,250),we.delayedCall(.5,function(){return Oc=0}),fn(_t,"touchcancel",fr),fn(ht,"touchstart",fr),kc(fn,_t,"pointerdown,touchstart,mousedown",lx),kc(fn,_t,"pointerup,touchend,mouseup",ux),Qm=we.utils.checkPrefix("transform"),vf.push(Qm),sa=Cn(),id=we.delayedCall(.2,mo).pause(),oa=[_t,"visibilitychange",function(){var c=nt.innerWidth,d=nt.innerHeight;_t.hidden?(rx=c,sx=d):(rx!==c||sx!==d)&&Fl()},_t,"DOMContentLoaded",mo,nt,"load",mo,nt,"resize",Fl],Fc(fn),tt.forEach(function(c){return c.enable(0,1)}),l=0;l<it.length;l+=3)zc(cn,it[l],it[l+1]),zc(cn,it[l],it[l+2])}else if(_t){var u=function c(){n.enable(),_t.removeEventListener("DOMContentLoaded",c)};_t.addEventListener("DOMContentLoaded",u)}}},n.config=function(i){"limitCallbacks"in i&&(Yh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Nc)||(Nc=r)&&setInterval(dx,r),"ignoreMobileResize"in i&&(Jm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Fc(cn)||Fc(fn,i.autoRefreshEvents||"none"),yE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=Xn(i),o=it.indexOf(s),a=Io(s);~o&&it.splice(o,a?6:2),r&&(a?xr.unshift(nt,r,ht,r,mi,r):xr.unshift(s,r))},n.clearMatchMedia=function(i){tt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(hi(i)?Xn(i):i).getBoundingClientRect(),a=o[s?Eo:To]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){hi(i)&&(i=Xn(i));var o=i.getBoundingClientRect(),a=o[s?Eo:To],l=r==null?a/2:r in sd?sd[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Uo.killAll||[];Uo={},r.forEach(function(s){return s()})}},n}();je.version="3.15.0";je.saveStyles=function(n){return n?Du(n).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),we.core.getCache(e),e_())}}):fi};je.revert=function(n,e){return Ig(!n,e)};je.create=function(n,e){return new je(n,e)};je.refresh=function(n){return n?Fl(!0):(sa||je.register())&&mo(!0)};je.update=function(n){return++it.cache&&Br(n===!0?2:0)};je.clearScrollMemory=IE;je.maxScroll=function(n,e){return _r(n,e?Bn:rn)};je.getScrollFunc=function(n,e){return ks(Xn(n),e?Bn:rn)};je.getById=function(n){return n_[n]};je.getAll=function(){return tt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Gi};je.snapDirectional=Lg;je.addEventListener=function(n,e){var t=Uo[n]||(Uo[n]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(n,e){var t=Uo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};je.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=we.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&bn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return bn(s)&&(s=s(),fn(je,"refresh",function(){return s=e.batchMax()})),Du(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(je.create(u))}),t};var vx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Kh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(jt.isTouch?" pinch-zoom":""):"none",e===mi&&n(ht,t)},Wc={auto:1,scroll:1},tL=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||we.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wc[(l=Fi(s)).overflowY]||Wc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Io(s)&&(Wc[(l=Fi(s)).overflowY]||Wc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},OE=function(e,t,i,r){return jt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&tL,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&fn(_t,jt.eventTypes[0],yx,!1,!0)},onDisable:function(){return cn(_t,jt.eventTypes[0],yx,!0)}})},nL=/(input|label|select|textarea)/i,xx,yx=function(e){var t=nL.test(e.target.tagName);(t||xx)&&(e._gsapAllow=!0,xx=t)},iL=function(e){ro(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=Xn(e.target)||mi,c=we.core.globals().ScrollSmoother,d=c&&c.get(),f=os&&(e.content&&Xn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=ks(u,rn),_=ks(u,Bn),g=1,m=(jt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,h=0,v=bn(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=OE(u,e.type,!0,s),A=function(){return S=!1},M=fr,R=fr,I=function(){l=_r(u,rn),R=Ql(os?1:0,l),i&&(M=Ql(0,_r(u,Bn))),x=wo},y=function(){f._gsap.y=Nl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},T=function(){if(S){requestAnimationFrame(A);var L=Nl(a.deltaY/2),j=R(p.v-L);if(f&&j!==p.v+p.offset){p.offset=j-p.v;var P=Nl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",p.cacheID=it.cache,Br()}return!0}p.offset&&y(),S=!0},U,z,X,$,B=function(){I(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&we.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return os&&Y.type==="touchmove"&&T()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){S=!1;var Y=g;g=Nl((nt.visualViewport&&nt.visualViewport.scale||1)/m),U.pause(),Y!==g&&Kh(u,g>1.01?!0:i?!1:"x"),z=_(),X=p(),I(),x=wo},e.onRelease=e.onGestureStart=function(Y,L){if(p.offset&&y(),!L)$.restart(!0);else{it.cache++;var j=v(),P,te;i&&(P=_(),te=P+j*.05*-Y.velocityX/.227,j*=vx(_,P,te,_r(u,Bn)),U.vars.scrollX=M(te)),P=p(),te=P+j*.05*-Y.velocityY/.227,j*=vx(p,P,te,_r(u,rn)),U.vars.scrollY=R(te),U.invalidate().duration(j).play(.01),(os&&U.vars.scrollY>=l||P>=l-1)&&we.to({},{onUpdate:B,duration:j})}o&&o(Y)},e.onWheel=function(){U._ts&&U.pause(),Cn()-h>1e3&&(x=0,h=Cn())},e.onChange=function(Y,L,j,P,te){if(wo!==x&&I(),L&&i&&_(M(P[2]===L?z+(Y.startX-Y.x):_()+L-P[1])),j){p.offset&&y();var ye=te[2]===j,He=ye?X+Y.startY-Y.y:p()+j-te[1],H=R(He);ye&&He!==H&&(X+=H-He),p(H)}(j||L)&&Br()},e.onEnable=function(){Kh(u,i?!1:"x"),je.addEventListener("refresh",B),fn(nt,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){Kh(u,!0),cn(nt,"resize",B),je.removeEventListener("refresh",B),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new jt(e),a.iOS=os,os&&!p()&&p(1),os&&we.ticker.add(fr),$=a._dc,U=we.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:NE(p,p(),function(){return U.pause()})},onUpdate:Br,onComplete:$.vars.onComplete}),a};je.sort=function(n){if(bn(n))return tt.sort(n);var e=nt.pageYOffset||0;return je.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),tt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};je.observe=function(n){return new jt(n)};je.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof jt?n:iL(n);return On&&On.target===e.target&&On.kill(),Io(e.target)&&(On=e),e};je.core={_getVelocityProp:Zm,_inputObserver:OE,_scrollers:it,_proxies:xr,bridge:{ss:function(){Gi||No("scrollStart"),Gi=Cn()},ref:function(){return wn}}};TE()&&we.registerPlugin(je);function rL({img:n,targetCount:e,imageScale:t}){const i=n.naturalWidth,r=n.naturalHeight;if(i===0||r===0)return console.error("[sampleImageToParticles] Image has zero dimensions."),{origX:new Float32Array(0),origY:new Float32Array(0),depths:new Float32Array(0),colors:new Float32Array(0),sizes:new Float32Array(0),count:0};const s=document.createElement("canvas");s.width=i,s.height=r;const o=s.getContext("2d",{willReadFrequently:!0});o.drawImage(n,0,0);const{data:a}=o.getImageData(0,0,i,r),l=Math.max(1,Math.floor(Math.sqrt(i*r/e)));let u=0;for(let h=0;h<r;h+=l)for(let v=0;v<i;v+=l){const x=(h*i+v)*4,S=a[x],C=a[x+1],A=a[x+2],M=a[x+3];(.299*S+.587*C+.114*A)/255>.03&&M>20&&u++}const c=new Float32Array(u),d=new Float32Array(u),f=new Float32Array(u),p=new Float32Array(u*3),_=new Float32Array(u),g=r/i;let m=0;for(let h=0;h<r;h+=l)for(let v=0;v<i;v+=l){const x=(h*i+v)*4,S=a[x],C=a[x+1],A=a[x+2],M=a[x+3],R=S/255,I=C/255,y=A/255,T=.299*R+.587*I+.114*y;T<=.03||M<=20||(c[m]=(v/i-.5)*t,d[m]=-((h/r-.5)*t*g),f[m]=-Math.random(),p[m*3]=R,p[m*3+1]=I,p[m*3+2]=y,_[m]=.7+T*1.5,m++)}return{origX:c,origY:d,depths:f,colors:p,sizes:_,count:m}}po.registerPlugin(je);const sL=`
  attribute vec3  aColor;
  attribute float aSize;

  uniform float uPixelRatio;
  uniform float uOpacity;

  varying vec3  vColor;
  varying float vOpacity;

  void main() {
    vColor   = aColor;
    vOpacity = uOpacity;

    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    float depth = max(0.001, -mvPos.z);

    // Perspective-correct point size — tuned for ~2px crisp dots at
    // the final reveal distance (camera z ≈ 2.2).
    float sz = aSize * uPixelRatio * 3.2 / depth;
    gl_PointSize = clamp(sz, uPixelRatio * 0.5, uPixelRatio * 5.0);

    gl_Position = projectionMatrix * mvPos;
  }
`,oL=`
  varying vec3  vColor;
  varying float vOpacity;

  void main() {
    float dist = length(gl_PointCoord - 0.5);

    // Hard circle — discard outside radius.
    if (dist > 0.5) discard;

    // Single-pixel anti-alias at the very edge for sub-pixel smoothness,
    // but NO soft glow and NO brightened core. Razor-sharp dots.
    float alpha = 1.0 - smoothstep(0.46, 0.5, dist);

    gl_FragColor = vec4(vColor, alpha * vOpacity);
  }
`,Zh={mobile:{targetCount:1e4,mouseRadius:.5,mouseStrength:.007},tablet:{targetCount:22e3,mouseRadius:.4,mouseStrength:.01},desktop:{targetCount:55e3,mouseRadius:.35,mouseStrength:.014}},aL=2.8,Qh=.18,lL=2.2,Sx=.45,Mx=.03,uL=.028,cL=.88,Ex=.006,Tx=.5;function fL(){const n=Li.useRef(null),e=Li.useRef(null);return Li.useEffect(()=>{const t=n.current;if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=window.innerWidth,s=window.innerHeight,o=r<=768?Zh.mobile:r<=1024?Zh.tablet:Zh.desktop,a=o.mouseRadius,l=o.mouseStrength,u=a*a,c=document.createElement("canvas");t.appendChild(c);const d=new _b({canvas:c,antialias:!1,alpha:!1,powerPreference:"high-performance"}),f=Math.min(window.devicePixelRatio,2);d.setPixelRatio(f),d.setSize(r,s),d.setClearColor(0,1);const p=new gb,_=new Ni(70,r/s,.001,100);_.position.set(0,-.04,Qh);let g=null,m=null,h=null,v=0,x=null,S=null,C=null,A=null,M=null,R=null,I=0,y=0,T=0,U=0,z=!1,X=0,$=performance.now(),B=!1;const Y=new Image;Y.onload=()=>{if(B)return;const H=rL({img:Y,targetCount:o.targetCount,imageScale:aL});v=H.count,x=H.origX,S=H.origY,C=H.depths,A=new Float32Array(v*3),M=new Float32Array(v),R=new Float32Array(v);for(let re=0;re<v;re++)A[re*3]=x[re],A[re*3+1]=S[re],A[re*3+2]=C[re]*Sx;m=new Zr;const Q=new Mi(A,3);Q.setUsage(eA),m.setAttribute("position",Q),m.setAttribute("aColor",new Mi(H.colors,3)),m.setAttribute("aSize",new Mi(H.sizes,1)),h=new qr({vertexShader:sL,fragmentShader:oL,uniforms:{uPixelRatio:{value:f},uOpacity:{value:.65}},transparent:!0,blending:Yp,depthWrite:!1,depthTest:!1}),g=new xb(m,h),p.add(g),je.create({trigger:t,start:"top top",end:"+=2400",pin:!0,pinSpacing:!0,onUpdate(re){I=re.progress}}),$=performance.now(),e.current=requestAnimationFrame(L)},Y.onerror=()=>{console.warn("[ParticleHero] Could not load /deepak-hero-particles.png — place the image in the /public folder and reload.")},Y.src="/deepak-hero-particles.png";function L(){e.current=requestAnimationFrame(L);const H=performance.now(),Q=Math.min((H-$)/16.667,4);$=H,X+=Q*.016,y+=(I-y)*.09;const re=y,ae=Math.min(I/.6,1),Ce=Qh+ae*(lL-Qh),Te=(1-ae)*-.04;_.position.z+=(Ce-_.position.z)*.18*Q,_.position.y+=(Te-_.position.y)*.18*Q,g&&(g.rotation.x+=((1-ae)*.055-g.rotation.x)*.1*Q);const qe=Math.max(0,1-re*1.3)*Sx;if(h&&(h.uniforms.uOpacity.value+=(.62+re*.38-h.uniforms.uOpacity.value)*.05*Q),!v||!A||!m){d.render(p,_);return}const We=_.fov*Math.PI/180,Fe=_.position.z,D=2*Math.tan(We/2)*Fe,rt=D*_.aspect,ke=T*(rt*.5),Ve=U*(D*.5),k=Math.pow(cL,Q);for(let Ue=0;Ue<v;Ue++){const Ae=Ue*3,b=A[Ae],E=A[Ae+1],G=A[Ae+2],J=x[Ue],ie=S[Ue],Z=C[Ue]*qe,Se=C[Ue]*6.2832,oe=Math.sin(X*Tx+Se)*Ex,he=Math.cos(X*Tx*.73+Se*1.31)*Ex;let Ge=0,se=0;if(z){const me=b-ke,Ye=E-Ve,Ne=me*me+Ye*Ye;if(Ne<u&&Ne>1e-8){const Je=Math.sqrt(Ne),N=(1-Je/a)*l*Q;Ge=me/Je*N,se=Ye/Je*N}}const xe=(J+oe-b)*Mx*Q,Me=(ie+he-E)*Mx*Q,Oe=(Z-G)*uL*Q;M[Ue]=(M[Ue]+xe+Ge)*k,R[Ue]=(R[Ue]+Me+se)*k,A[Ae]=b+M[Ue],A[Ae+1]=E+R[Ue],A[Ae+2]=G+Oe}m.attributes.position.needsUpdate=!0,d.render(p,_)}const j=H=>{T=H.clientX/window.innerWidth*2-1,U=-(H.clientY/window.innerHeight)*2+1,z=!0},P=()=>{z=!1},te=H=>{H.touches.length&&(T=H.touches[0].clientX/window.innerWidth*2-1,U=-(H.touches[0].clientY/window.innerHeight)*2+1,z=!0)},ye=()=>{z=!1},He=()=>{const H=window.innerWidth,Q=window.innerHeight;_.aspect=H/Q,_.updateProjectionMatrix(),d.setSize(H,Q),h&&(h.uniforms.uPixelRatio.value=d.getPixelRatio())};return window.addEventListener("mousemove",j,{passive:!0}),window.addEventListener("mouseleave",P),window.addEventListener("touchmove",te,{passive:!0}),window.addEventListener("touchend",ye,{passive:!0}),window.addEventListener("resize",He),()=>{B=!0,cancelAnimationFrame(e.current),window.removeEventListener("mousemove",j),window.removeEventListener("mouseleave",P),window.removeEventListener("touchmove",te),window.removeEventListener("touchend",ye),window.removeEventListener("resize",He),je.getAll().forEach(H=>H.kill()),m==null||m.dispose(),h==null||h.dispose(),d.dispose(),c.parentNode&&c.parentNode.removeChild(c)}},[]),An.jsx("div",{className:"particle-hero",ref:n,children:An.jsx("noscript",{children:An.jsx("img",{src:"/deepak-hero-particles.png",alt:"Deepak Parikh at 60",className:"particle-fallback"})})})}po.registerPlugin(je);function dL(){const n=Li.useRef(null),e=Li.useRef(null),t=Li.useRef(null),i=Li.useRef(null),r=Li.useRef(null);return Li.useEffect(()=>{const s=n.current,o=e.current,a=t.current,l=i.current,u=r.current;if(!s||!o||!a||!l||!u)return;po.set(o,{backgroundColor:"#F2E6D0"}),po.set(a,{opacity:0,scale:.72}),po.set([l,u],{opacity:0,y:32,filter:"blur(10px)"});const c=po.timeline();c.fromTo(a,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.4,ease:"power2.out"},0),c.fromTo(l,{opacity:0,y:32,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.3,ease:"power3.out"},.3),c.fromTo(u,{opacity:0,y:32,filter:"blur(10px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.27,ease:"power3.out"},.55),c.to({},{duration:.18},.82);const d=je.create({trigger:s,start:"top top",end:"+=2400",pin:!0,pinSpacing:!0,scrub:.8,animation:c});return()=>{d.kill(),c.kill()}},[]),An.jsxs("section",{className:"timeless-section",ref:n,children:[An.jsx("div",{className:"timeless-bg",ref:e}),An.jsx("div",{className:"timeless-grain","aria-hidden":"true"}),An.jsx("div",{className:"timeless-glow",ref:t,"aria-hidden":"true"}),An.jsx("div",{className:"timeless-quote-wrap",children:An.jsxs("h2",{className:"timeless-quote",children:[An.jsx("span",{ref:i,children:"The deepest roots are never seen,"}),An.jsx("span",{ref:r,children:"but everyone remembers the shade."})]})})]})}function hL(){return An.jsxs("main",{children:[An.jsx(fL,{}),An.jsx(dL,{})]})}Jh.createRoot(document.getElementById("root")).render(An.jsx(e1.StrictMode,{children:An.jsx(hL,{})}));
