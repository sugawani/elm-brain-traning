parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"asWa":[function(require,module,exports) {
!function(n){"use strict";function r(n,r,t){return t.a=n,t.f=r,t}function t(n){return r(2,n,function(r){return function(t){return n(r,t)}})}function e(n){return r(3,n,function(r){return function(t){return function(e){return n(r,t,e)}}})}function u(n){return r(4,n,function(r){return function(t){return function(e){return function(u){return n(r,t,e,u)}}}})}function i(n){return r(5,n,function(r){return function(t){return function(e){return function(u){return function(i){return n(r,t,e,u,i)}}}}})}function f(n){return r(6,n,function(r){return function(t){return function(e){return function(u){return function(i){return function(f){return n(r,t,e,u,i,f)}}}}}})}function o(n,r,t){return 2===n.a?n.f(r,t):n(r)(t)}function a(n,r,t,e){return 3===n.a?n.f(r,t,e):n(r)(t)(e)}function c(n,r,t,e,u){return 4===n.a?n.f(r,t,e,u):n(r)(t)(e)(u)}function v(n,r,t,e,u,i){return 5===n.a?n.f(r,t,e,u,i):n(r)(t)(e)(u)(i)}function s(n,r,t,e,u,i,f){return 6===n.a?n.f(r,t,e,u,i,f):n(r)(t)(e)(u)(i)(f)}function l(n,r){for(var t,e=[],u=b(n,r,0,e);u&&(t=e.pop());u=b(t.a,t.b,0,e));return u}function b(n,r,t,e){if(n===r)return!0;if("object"!=typeof n||null===n||null===r)return"function"==typeof n&&E(5),!1;if(t>100)return e.push(p(n,r)),!0;for(var u in 0>n.$&&(n=ur(n),r=ur(r)),n)if(!b(n[u],r[u],t+1,e))return!1;return!0}function d(n,r,t){if("object"!=typeof n)return n===r?0:r>n?-1:1;if(void 0===n.$)return(t=d(n.a,r.a))?t:(t=d(n.b,r.b))?t:d(n.c,r.c);for(;n.b&&r.b&&!(t=d(n.a,r.a));n=n.b,r=r.b);return t||(n.b?1:r.b?-1:0)}var h=t(function(n,r){var t=d(n,r);return 0>t?rr:t?nr:Zn});function p(n,r){return{a:n,b:r}}function g(n,r,t){return{a:n,b:r,c:t}}function $(n,r){var t={};for(var e in n)t[e]=n[e];for(var e in r)t[e]=r[e];return t}var m={$:0};function w(n,r){return{$:1,a:n,b:r}}var y=t(w);function j(n){for(var r=m,t=n.length;t--;)r=w(n[t],r);return r}var A=e(function(n,r,t){for(var e=[],u=0;n>u;u++)e[u]=t(r+u);return e}),k=t(function(n,r){for(var t=[],e=0;n>e&&r.b;e++)t[e]=r.a,r=r.b;return t.length=e,p(t,r)});function E(n){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+n+".md")}var _=Math.ceil,x=Math.floor,N=Math.log;function C(n){return{$:2,b:n}}C(function(n){return"number"!=typeof n?P("an INT",n):n>-2147483647&&2147483647>n&&(0|n)===n?cr(n):!isFinite(n)||n%1?P("an INT",n):cr(n)}),C(function(n){return"boolean"==typeof n?cr(n):P("a BOOL",n)}),C(function(n){return"number"==typeof n?cr(n):P("a FLOAT",n)}),C(function(n){return cr(S(n))});var L=C(function(n){return"string"==typeof n?cr(n):n instanceof String?cr(n+""):P("a STRING",n)}),T=t(function(n,r){return{$:6,d:n,b:r}});var F=t(function(n,r){return function(n,r){return{$:9,f:n,g:r}}(n,[r])}),D=t(function(n,r){return R(n,M(r))});function R(n,r){switch(n.$){case 2:return n.b(r);case 5:return null===r?cr(n.c):P("null",r);case 3:return B(r)?q(n.b,r,j):P("a LIST",r);case 4:return B(r)?q(n.b,r,O):P("an ARRAY",r);case 6:var t=n.d;if("object"!=typeof r||null===r||!(t in r))return P("an OBJECT with a field named `"+t+"`",r);var e=R(n.b,r[t]);return Fr(e)?e:ir(o(or,t,e.a));case 7:var u=n.e;return B(r)?r.length>u?(e=R(n.b,r[u]),Fr(e)?e:ir(o(ar,u,e.a))):P("a LONGER array. Need index "+u+" but only see "+r.length+" entries",r):P("an ARRAY",r);case 8:if("object"!=typeof r||null===r||B(r))return P("an OBJECT",r);var i=m;for(var f in r)if(r.hasOwnProperty(f)){if(e=R(n.b,r[f]),!Fr(e))return ir(o(or,f,e.a));i=w(p(f,e.a),i)}return cr(hr(i));case 9:for(var a=n.f,c=n.g,v=0;c.length>v;v++){if(e=R(c[v],r),!Fr(e))return e;a=a(e.a)}return cr(a);case 10:return e=R(n.b,r),Fr(e)?R(n.h(e.a),r):e;case 11:for(var s=m,l=n.g;l.b;l=l.b){if(e=R(l.a,r),Fr(e))return e;s=w(e.a,s)}return ir(vr(hr(s)));case 1:return ir(o(fr,n.a,S(r)));case 0:return cr(n.a)}}function q(n,r,t){for(var e=r.length,u=[],i=0;e>i;i++){var f=R(n,r[i]);if(!Fr(f))return ir(o(ar,i,f.a));u[i]=f.a}return cr(t(u))}function B(n){return Array.isArray(n)||"undefined"!=typeof FileList&&n instanceof FileList}function O(n){return o(Tr,n.length,function(r){return n[r]})}function P(n,r){return ir(o(fr,"Expecting "+n,S(r)))}function z(n,r){if(n===r)return!0;if(n.$!==r.$)return!1;switch(n.$){case 0:case 1:return n.a===r.a;case 2:return n.b===r.b;case 5:return n.c===r.c;case 3:case 4:case 8:return z(n.b,r.b);case 6:return n.d===r.d&&z(n.b,r.b);case 7:return n.e===r.e&&z(n.b,r.b);case 9:return n.f===r.f&&I(n.g,r.g);case 10:return n.h===r.h&&z(n.b,r.b);case 11:return I(n.g,r.g)}}function I(n,r){var t=n.length;if(t!==r.length)return!1;for(var e=0;t>e;e++)if(!z(n[e],r[e]))return!1;return!0}function S(n){return n}function M(n){return n}function G(n){return{$:0,a:n}}function J(n){return{$:2,b:n,c:null}}S(null);var Q=t(function(n,r){return{$:3,b:n,d:r}}),V=0;function Y(n){var r={$:0,e:V++,f:n,g:null,h:[]};return Z(r),r}function U(n){return J(function(r){r(G(Y(n)))})}function W(n,r){n.h.push(r),Z(n)}var H=t(function(n,r){return J(function(t){W(n,r),t(G(0))})}),K=!1,X=[];function Z(n){if(X.push(n),!K){for(K=!0;n=X.shift();)nn(n);K=!1}}function nn(n){for(;n.f;){var r=n.f.$;if(0===r||1===r){for(;n.g&&n.g.$!==r;)n.g=n.g.i;if(!n.g)return;n.f=n.g.b(n.f.a),n.g=n.g.i}else{if(2===r)return void(n.f.c=n.f.b(function(r){n.f=r,Z(n)}));if(5===r){if(0===n.h.length)return;n.f=n.f.b(n.h.shift())}else n.g={$:3===r?0:1,b:n.f.b,i:n.g},n.f=n.f.d}}}var rn={};function tn(n,r,t,e,u){return{b:n,c:r,d:t,e:e,f:u}}function en(n,r){var t={g:r,h:void 0},e=n.c,u=n.d,i=n.e,f=n.f;function v(n){return o(Q,v,{$:5,b:function(r){var o=r.a;return 0===r.$?a(u,t,o,n):i&&f?c(e,t,o.i,o.j,n):a(e,t,i?o.i:o.j,n)}})}return t.h=Y(o(Q,v,n.b))}var un=t(function(n,r){return J(function(t){n.g(r),t(G(0))})}),fn=t(function(n,r){return o(H,n.h,{$:0,a:r})});function on(n){return function(r){return{$:1,k:n,l:r}}}function an(n){return{$:2,m:n}}var cn,vn=[],sn=!1;function ln(n,r,t){if(vn.push({p:n,q:r,r:t}),!sn){sn=!0;for(var e;e=vn.shift();)bn(e.p,e.q,e.r);sn=!1}}function bn(n,r,t){var e={};for(var u in dn(!0,r,e,null),dn(!1,t,e,null),n)W(n[u],{$:"fx",a:e[u]||{i:m,j:m}})}function dn(n,r,t,e){switch(r.$){case 1:var u=r.k,i=function(n,t,e){function u(n){for(var r=e;r;r=r.t)n=r.s(n);return n}return o(n?rn[t].e:rn[t].f,u,r.l)}(n,u,e);return void(t[u]=function(n,r,t){return t=t||{i:m,j:m},n?t.i=w(r,t.i):t.j=w(r,t.j),t}(n,i,t[u]));case 2:for(var f=r.m;f.b;f=f.b)dn(n,f.a,t,e);return;case 3:return void dn(n,r.o,t,{s:r.n,t:e})}}var hn="undefined"!=typeof document?document:{};function pn(n,r){n.appendChild(r)}function gn(n){return{$:0,a:n}}var $n=t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var f=e.a;i+=f.b||0,u.push(f)}return i+=u.length,{$:1,c:r,d:An(t),e:u,f:n,b:i}})})(void 0);t(function(n,r){return t(function(t,e){for(var u=[],i=0;e.b;e=e.b){var f=e.a;i+=f.b.b||0,u.push(f)}return i+=u.length,{$:2,c:r,d:An(t),e:u,f:n,b:i}})})(void 0);var mn,wn=t(function(n,r){return{$:"a1",n:n,o:r}}),yn=t(function(n,r){return{$:"a2",n:n,o:r}}),jn=t(function(n,r){return{$:"a3",n:n,o:r}});function An(n){for(var r={};n.b;n=n.b){var t=n.a,e=t.$,u=t.n,i=t.o;if("a2"!==e){var f=r[e]||(r[e]={});"a3"===e&&"class"===u?kn(f,u,i):f[u]=i}else"className"===u?kn(r,u,M(i)):r[u]=M(i)}return r}function kn(n,r,t){var e=n[r];n[r]=e?e+" "+t:t}function En(n,r){var t=n.$;if(5===t)return En(n.k||(n.k=n.m()),r);if(0===t)return hn.createTextNode(n.a);if(4===t){for(var e=n.k,u=n.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var i={j:u,p:r};return(f=En(e,i)).elm_event_node_ref=i,f}if(3===t)return _n(f=n.h(n.g),r,n.d),f;var f=n.f?hn.createElementNS(n.f,n.c):hn.createElement(n.c);cn&&"a"==n.c&&f.addEventListener("click",cn(f)),_n(f,r,n.d);for(var o=n.e,a=0;o.length>a;a++)pn(f,En(1===t?o[a]:o[a].b,r));return f}function _n(n,r,t){for(var e in t){var u=t[e];"a1"===e?xn(n,u):"a0"===e?Ln(n,r,u):"a3"===e?Nn(n,u):"a4"===e?Cn(n,u):("value"!==e&&"checked"!==e||n[e]!==u)&&(n[e]=u)}}function xn(n,r){var t=n.style;for(var e in r)t[e]=r[e]}function Nn(n,r){for(var t in r){var e=r[t];void 0!==e?n.setAttribute(t,e):n.removeAttribute(t)}}function Cn(n,r){for(var t in r){var e=r[t],u=e.f,i=e.o;void 0!==i?n.setAttributeNS(u,t,i):n.removeAttributeNS(u,t)}}function Ln(n,r,t){var e=n.elmFs||(n.elmFs={});for(var u in t){var i=t[u],f=e[u];if(i){if(f){if(f.q.$===i.$){f.q=i;continue}n.removeEventListener(u,f)}f=Tn(r,i),n.addEventListener(u,f,mn&&{passive:2>Rr(i)}),e[u]=f}else n.removeEventListener(u,f),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){mn=!0}}))}catch(n){}function Tn(n,r){function t(r){var e=t.q,u=R(e.a,r);if(Fr(u)){for(var i,f=Rr(e),o=u.a,a=f?3>f?o.a:o.x:o,c=1==f?o.b:3==f&&o.af,v=(c&&r.stopPropagation(),(2==f?o.b:3==f&&o.ab)&&r.preventDefault(),n);i=v.j;){if("function"==typeof i)a=i(a);else for(var s=i.length;s--;)a=i[s](a);v=v.p}v(a,c)}}return t.q=r,t}function Fn(n,r){return n.$==r.$&&z(n.a,r.a)}function Dn(n,r,t,e){var u={$:r,r:t,s:e,t:void 0,u:void 0};return n.push(u),u}function Rn(n,r,t,e){if(n!==r){var u=n.$,i=r.$;if(u!==i){if(1!==u||2!==i)return void Dn(t,0,e,r);r=function(n){for(var r=n.e,t=r.length,e=[],u=0;t>u;u++)e[u]=r[u].b;return{$:1,c:n.c,d:n.d,e:e,f:n.f,b:n.b}}(r),i=1}switch(i){case 5:for(var f=n.l,o=r.l,a=f.length,c=a===o.length;c&&a--;)c=f[a]===o[a];if(c)return void(r.k=n.k);r.k=r.m();var v=[];return Rn(n.k,r.k,v,0),void(v.length>0&&Dn(t,1,e,v));case 4:for(var s=n.j,l=r.j,b=!1,d=n.k;4===d.$;)b=!0,"object"!=typeof s?s=[s,d.j]:s.push(d.j),d=d.k;for(var h=r.k;4===h.$;)b=!0,"object"!=typeof l?l=[l,h.j]:l.push(h.j),h=h.k;return b&&s.length!==l.length?void Dn(t,0,e,r):((b?function(n,r){for(var t=0;n.length>t;t++)if(n[t]!==r[t])return!1;return!0}(s,l):s===l)||Dn(t,2,e,l),void Rn(d,h,t,e+1));case 0:return void(n.a!==r.a&&Dn(t,3,e,r.a));case 1:return void qn(n,r,t,e,On);case 2:return void qn(n,r,t,e,Pn);case 3:if(n.h!==r.h)return void Dn(t,0,e,r);var p=Bn(n.d,r.d);p&&Dn(t,4,e,p);var g=r.i(n.g,r.g);return void(g&&Dn(t,5,e,g))}}}function qn(n,r,t,e,u){if(n.c===r.c&&n.f===r.f){var i=Bn(n.d,r.d);i&&Dn(t,4,e,i),u(n,r,t,e)}else Dn(t,0,e,r)}function Bn(n,r,t){var e;for(var u in n)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in r){var i=n[u],f=r[u];i===f&&"value"!==u&&"checked"!==u||"a0"===t&&Fn(i,f)||((e=e||{})[u]=f)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:n[u].f,o:void 0}:"string"==typeof n[u]?"":null;else{var o=Bn(n[u],r[u]||{},u);o&&((e=e||{})[u]=o)}for(var a in r)a in n||((e=e||{})[a]=r[a]);return e}function On(n,r,t,e){var u=n.e,i=r.e,f=u.length,o=i.length;f>o?Dn(t,6,e,{v:o,i:f-o}):o>f&&Dn(t,7,e,{v:f,e:i});for(var a=o>f?f:o,c=0;a>c;c++){var v=u[c];Rn(v,i[c],t,++e),e+=v.b||0}}function Pn(n,r,t,e){for(var u=[],i={},f=[],o=n.e,a=r.e,c=o.length,v=a.length,s=0,l=0,b=e;c>s&&v>l;){var d=(_=o[s]).a,h=(x=a[l]).a,p=_.b,g=x.b,$=void 0,m=void 0;if(d!==h){var w=o[s+1],y=a[l+1];if(w){var j=w.a,A=w.b;m=h===j}if(y){var k=y.a,E=y.b;$=d===k}if($&&m)Rn(p,E,u,++b),In(i,u,d,g,l,f),b+=p.b||0,Sn(i,u,d,A,++b),b+=A.b||0,s+=2,l+=2;else if($)b++,In(i,u,h,g,l,f),Rn(p,E,u,b),b+=p.b||0,s+=1,l+=2;else if(m)Sn(i,u,d,p,++b),b+=p.b||0,Rn(A,g,u,++b),b+=A.b||0,s+=2,l+=1;else{if(!w||j!==k)break;Sn(i,u,d,p,++b),In(i,u,h,g,l,f),b+=p.b||0,Rn(A,E,u,++b),b+=A.b||0,s+=2,l+=2}}else Rn(p,g,u,++b),b+=p.b||0,s++,l++}for(;c>s;){var _;Sn(i,u,(_=o[s]).a,p=_.b,++b),b+=p.b||0,s++}for(;v>l;){var x,N=N||[];In(i,u,(x=a[l]).a,x.b,void 0,N),l++}(u.length>0||f.length>0||N)&&Dn(t,8,e,{w:u,x:f,y:N})}var zn="_elmW6BL";function In(n,r,t,e,u,i){var f=n[t];if(!f)return i.push({r:u,A:f={c:0,z:e,r:u,s:void 0}}),void(n[t]=f);if(1===f.c){i.push({r:u,A:f}),f.c=2;var o=[];return Rn(f.z,e,o,f.r),f.r=u,void(f.s.s={w:o,A:f})}In(n,r,t+zn,e,u,i)}function Sn(n,r,t,e,u){var i=n[t];if(i){if(0===i.c){i.c=2;var f=[];return Rn(e,i.z,f,u),void Dn(r,9,u,{w:f,A:i})}Sn(n,r,t+zn,e,u)}else{var o=Dn(r,9,u,void 0);n[t]={c:1,z:e,r:u,s:o}}}function Mn(n,r,t,e){return 0===t.length?n:(function n(r,t,e,u){!function r(t,e,u,i,f,o,a){for(var c=u[i],v=c.r;v===f;){var s=c.$;if(1===s)n(t,e.k,c.s,a);else if(8===s)c.t=t,c.u=a,(l=c.s.w).length>0&&r(t,e,l,0,f,o,a);else if(9===s){c.t=t,c.u=a;var l,b=c.s;b&&(b.A.s=t,(l=b.w).length>0&&r(t,e,l,0,f,o,a))}else c.t=t,c.u=a;if(!(c=u[++i])||(v=c.r)>o)return i}var d=e.$;if(4===d){for(var h=e.k;4===h.$;)h=h.k;return r(t,h,u,i,f+1,o,t.elm_event_node_ref)}for(var p=e.e,g=t.childNodes,$=0;p.length>$;$++){var m=1===d?p[$]:p[$].b,w=++f+(m.b||0);if(!(f>v||v>w||(c=u[i=r(g[$],m,u,i,f,w,a)])&&(v=c.r)<=o))return i;f=w}return i}(r,t,e,0,0,t.b,u)}(n,r,t,e),Gn(n,t))}function Gn(n,r){for(var t=0;r.length>t;t++){var e=r[t],u=e.t,i=Jn(u,e);u===n&&(n=i)}return n}function Jn(n,r){switch(r.$){case 0:return function(n){var t=n.parentNode,e=En(r.s,r.u);return e.elm_event_node_ref||(e.elm_event_node_ref=n.elm_event_node_ref),t&&e!==n&&t.replaceChild(e,n),e}(n);case 4:return _n(n,r.u,r.s),n;case 3:return n.replaceData(0,n.length,r.s),n;case 1:return Gn(n,r.s);case 2:return n.elm_event_node_ref?n.elm_event_node_ref.j=r.s:n.elm_event_node_ref={j:r.s,p:r.u},n;case 6:for(var t=r.s,e=0;t.i>e;e++)n.removeChild(n.childNodes[t.v]);return n;case 7:for(var u=(t=r.s).e,i=n.childNodes[e=t.v];u.length>e;e++)n.insertBefore(En(u[e],r.u),i);return n;case 9:if(!(t=r.s))return n.parentNode.removeChild(n),n;var f=t.A;return void 0!==f.r&&n.parentNode.removeChild(n),f.s=Gn(n,t.w),n;case 8:return function(n,r){var t=r.s,e=function(n,r){if(n){for(var t=hn.createDocumentFragment(),e=0;n.length>e;e++){var u=n[e].A;pn(t,2===u.c?u.s:En(u.z,r.u))}return t}}(t.y,r);n=Gn(n,t.w);for(var u=t.x,i=0;u.length>i;i++){var f=u[i],o=f.A,a=2===o.c?o.s:En(o.z,r.u);n.insertBefore(a,n.childNodes[f.r])}return e&&pn(n,e),n}(n,r);case 5:return r.s(n);default:E(10)}}var Qn=u(function(n,r,t,e){return function(n,r,t,e,u,i){var f=o(D,n,S(r?r.flags:void 0));Fr(f)||E(2);var a={},c=t(f.a),v=c.a,s=i(b,v),l=function(n,r){var t;for(var e in rn){var u=rn[e];u.a&&((t=t||{})[e]=u.a(e,r)),n[e]=en(u,r)}return t}(a,b);function b(n,r){var t=o(e,n,v);s(v=t.a,r),ln(a,t.b,u(v))}return ln(a,c.b,u(v)),l?{ports:l}:{}}(r,e,n.bb,n.bw,n.bs,function(r,t){var u=n.bx,i=e.node,f=function n(r){if(3===r.nodeType)return gn(r.textContent);if(1!==r.nodeType)return gn("");for(var t=m,e=r.attributes,u=e.length;u--;){var i=e[u];t=w(o(jn,i.name,i.value),t)}var f=r.tagName.toLowerCase(),c=m,v=r.childNodes;for(u=v.length;u--;)c=w(n(v[u]),c);return a($n,f,t,c)}(i);return function(n,r){r(n);var t=0;function e(){t=1===t?0:(Vn(e),r(n),1)}return function(u,i){n=u,i?(r(n),2===t&&(t=1)):(0===t&&Vn(e),t=2)}}(t,function(n){var t=u(n),e=function(n,r){var t=[];return Rn(n,r,t,0),t}(f,t);i=Mn(i,f,e,r),f=t})})}),Vn=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(n){return setTimeout(n,1e3/60)});var Yn={addEventListener:function(){},removeEventListener:function(){}},Un="undefined"!=typeof document?document:Yn,Wn="undefined"!=typeof window?window:Yn,Hn=e(function(n,r,t){return U(J(function(){function e(n){Y(t(n))}return n.addEventListener(r,e,mn&&{passive:!0}),function(){n.removeEventListener(r,e)}}))}),Kn=t(function(n,r){var t=R(n,r);return Fr(t)?sr(t.a):lr}),Xn=t(function(n,r){return J(function(){var t=setInterval(function(){Y(r)},n);return function(){clearInterval(t)}})}),Zn=1,nr=2,rr=0,tr=y,er=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.d,u=n,i=a(n,t.b,t.c,a(er,n,r,t.e));n=u,r=i,t=e}}),ur=function(n){return a(er,e(function(n,r,t){return o(tr,p(n,r),t)}),m,n)},ir=function(n){return{$:1,a:n}},fr=t(function(n,r){return{$:3,a:n,b:r}}),or=t(function(n,r){return{$:0,a:n,b:r}}),ar=t(function(n,r){return{$:1,a:n,b:r}}),cr=function(n){return{$:0,a:n}},vr=function(n){return{$:2,a:n}},sr=function(n){return{$:0,a:n}},lr={$:1},br=function(n){return n+""},dr=e(function(n,r,t){for(;;){if(!t.b)return r;var e=t.b,u=n,i=o(n,t.a,r);n=u,r=i,t=e}}),hr=function(n){return a(dr,tr,m,n)},pr=u(function(n,r,t,e){return{$:0,a:n,b:r,c:t,d:e}}),gr=[],$r=_,mr=t(function(n,r){return N(r)/N(n)}),wr=$r(o(mr,2,32)),yr=c(pr,0,wr,gr,gr),jr=A,Ar=x,kr=function(n){return n.length},Er=t(function(n,r){return d(n,r)>0?n:r}),_r=k,xr=t(function(n,r){for(;;){var t=o(_r,32,n),e=t.b,u=o(tr,{$:0,a:t.a},r);if(!e.b)return hr(u);n=e,r=u}}),Nr=t(function(n,r){for(;;){var t=$r(r/32);if(1===t)return o(_r,32,n).a;n=o(xr,n,m),r=t}}),Cr=t(function(n,r){if(r.b){var t=32*r.b,e=Ar(o(mr,32,t-1)),u=n?hr(r.e):r.e,i=o(Nr,u,r.b);return c(pr,kr(r.d)+t,o(Er,5,e*wr),i,r.d)}return c(pr,kr(r.d),wr,gr,r.d)}),Lr=i(function(n,r,t,e,u){for(;;){if(0>r)return o(Cr,!1,{e:e,b:t/32|0,d:u});var i={$:1,a:a(jr,32,r,n)};n=n,r-=32,t=t,e=o(tr,i,e),u=u}}),Tr=t(function(n,r){if(n>0){var t=n%32;return v(Lr,r,n-t-32,n,m,a(jr,t,n-t,r))}return yr}),Fr=function(n){return!n.$},Dr=F,Rr=function(n){switch(n.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},qr=G,Br=qr(0),Or=u(function(n,r,t,e){if(e.b){var u=e.a,i=e.b;if(i.b){var f=i.a,v=i.b;if(v.b){var s=v.a,l=v.b;if(l.b){var b=l.b;return o(n,u,o(n,f,o(n,s,o(n,l.a,t>500?a(dr,n,r,hr(b)):c(Or,n,r,t+1,b)))))}return o(n,u,o(n,f,o(n,s,r)))}return o(n,u,o(n,f,r))}return o(n,u,r)}return r}),Pr=e(function(n,r,t){return c(Or,n,r,0,t)}),zr=t(function(n,r){return a(Pr,t(function(r,t){return o(tr,n(r),t)}),m,r)}),Ir=Q,Sr=t(function(n,r){return o(Ir,function(r){return qr(n(r))},r)}),Mr=e(function(n,r,t){return o(Ir,function(r){return o(Ir,function(t){return qr(o(n,r,t))},t)},r)}),Gr=function(n){return a(Pr,Mr(tr),qr(m),n)},Jr=un,Qr=t(function(n,r){var t=r;return U(o(Ir,Jr(n),t))});rn.Task=tn(Br,e(function(n,r){return o(Sr,function(){return 0},Gr(o(zr,Qr(n),r)))}),e(function(){return qr(0)}),t(function(n,r){return o(Sr,n,r)})),on("Task");var Vr,Yr=Qn,Ur=function(n){return{$:1,a:n}},Wr=t(function(n,r){return{$:0,a:n,b:r}}),Hr=function(n){var r=n.b;return o(Wr,1664525*n.a+r>>>0,r)},Kr=(Vr=function(n){return n},J(function(n){n(G(Vr(Date.now())))})),Xr=o(Ir,function(n){return qr(function(n){var r=Hr(o(Wr,0,1013904223));return Hr(o(Wr,r.a+n>>>0,r.b))}(n))},Kr),Zr=t(function(n,r){return n(r)}),nt=e(function(n,r,t){if(r.b){var e=r.b,u=o(Zr,r.a,t),i=u.b;return o(Ir,function(){return a(nt,n,e,i)},o(Jr,n,u.a))}return qr(t)}),rt=e(function(n,r,t){return qr(t)}),tt=t(function(n,r){var t=r;return function(r){var e=t(r),u=e.b;return p(n(e.a),u)}});rn.Random=tn(Xr,nt,rt,t(function(n,r){return o(tt,n,r)}));var et=on("Random"),ut=t(function(n,r){return et(o(tt,n,r))}),it=function(n){var r=n.a,t=277803737*(r^r>>>4+(r>>>28));return(t>>>22^t)>>>0},ft=t(function(n,r){return function(t){var e=0>d(n,r)?p(n,r):p(r,n),u=e.a,i=e.b-u+1;if(i-1&i){var f=(-i>>>0)%i>>>0;return function(n){for(;;){var r=it(n),t=Hr(n);if(d(r,f)>=0)return p(r%i+u,t);n=t}}(t)}return p(((i-1&it(t))>>>0)+u,Hr(t))}}),ot=function(){return o(ut,Ur,o(ft,0,3))},at=function(){return p({l:0,i:0,C:0,P:0,ac:j([{A:"up",D:"salad.jpg",E:0},{A:"left",D:"coin.jpg",E:1},{A:"down",D:"gordian_knot.jpg",E:2},{A:"right",D:"anpan.jpg",E:3}])},ot())},ct=function(n){return{$:0,a:n}},vt=function(n){return{$:2,a:n}},st=an,lt=t(function(n,r){return{$:0,a:n,b:r}}),bt=t(function(n,r){return{aF:r,aR:n}}),dt={$:-2},ht=dt,pt=qr(o(bt,ht,ht)),gt=h,$t=t(function(n,r){n:for(;;){if(-2===r.$)return lr;var t=r.c,e=r.d,u=r.e;switch(o(gt,n,r.b)){case 0:n=n,r=e;continue n;case 1:return sr(t);default:n=n,r=u;continue n}}}),mt=i(function(n,r,t,e,u){return{$:-1,a:n,b:r,c:t,d:e,e:u}}),wt=i(function(n,r,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return v(mt,n,r,t,e,u);var i=e.d;return f=e.e,v(mt,0,e.b,e.c,v(mt,1,i.b,i.c,i.d,i.e),v(mt,1,r,t,f,u))}var f,o=u.b,a=u.c,c=u.d,s=u.e;return-1!==e.$||e.a?v(mt,n,o,a,v(mt,0,r,t,e,c),s):v(mt,0,r,t,v(mt,1,e.b,e.c,e.d,f=e.e),v(mt,1,o,a,c,s))}),yt=e(function(n,r,t){if(-2===t.$)return v(mt,0,n,r,dt,dt);var e=t.a,u=t.b,i=t.c,f=t.d,c=t.e;switch(o(gt,n,u)){case 0:return v(wt,e,u,i,a(yt,n,r,f),c);case 1:return v(mt,e,u,r,f,c);default:return v(wt,e,u,i,f,a(yt,n,r,c))}}),jt=e(function(n,r,t){var e=a(yt,n,r,t);return-1!==e.$||e.a?e:v(mt,1,e.b,e.c,e.d,e.e)}),At=t(function(n,r){var t=n.a,e=n.b,u=o($t,t,r);return a(jt,t,1===u.$?j([e]):o(tr,e,u.a),r)}),kt=function(n){return J(function(r){var t=n.f;2===t.$&&t.c&&t.c(),n.f=null,r(G(0))})},Et=e(function(n,r,t){for(;;){if(-2===t.$)return r;var e=t.e,u=n,i=a(n,t.b,t.c,a(Et,n,r,t.d));n=u,r=i,t=e}}),_t=f(function(n,r,u,i,f,o){var v=a(Et,e(function(t,e,i){n:for(;;){var f=i.a,o=i.b;if(f.b){var v=f.a,s=v.a,l=v.b,b=f.b;if(0>d(s,t)){t=t,e=e,i=p(b,a(n,s,l,o));continue n}return d(s,t)>0?p(f,a(u,t,e,o)):p(b,c(r,s,l,e,o))}return p(f,a(u,t,e,o))}}),p(ur(i),o),f),s=v.a,l=v.b;return a(dr,t(function(r,t){return a(n,r.a,r.b,t)}),l,s)}),xt=fn,Nt=Xn,Ct=U,Lt=e(function(n,r,t){if(r.b){var e=r.a,u=r.b,i=Ct(o(Nt,e,o(xt,n,e)));return o(Ir,function(r){return a(Lt,n,u,a(jt,e,r,t))},i)}return qr(t)}),Tt=e(function(n,r,t){var i=t.aF,f=e(function(n,r,t){var e=t.c;return g(t.a,t.b,o(Ir,function(){return e},kt(r)))}),c=a(dr,At,ht,r),v=s(_t,e(function(n,r,t){var e=t.b,u=t.c;return g(o(tr,n,t.a),e,u)}),u(function(n,r,t,e){var u=e.c;return g(e.a,a(jt,n,t,e.b),u)}),f,c,i,g(m,ht,qr(0))),l=v.a,b=v.b;return o(Ir,function(n){return qr(o(bt,c,n))},o(Ir,function(){return a(Lt,n,l,b)},v.c))}),Ft=e(function(n,r,t){var e=o($t,r,t.aR);if(1===e.$)return qr(t);var u=e.a;return o(Ir,function(){return qr(t)},o(Ir,function(r){return Gr(o(zr,function(t){return o(Jr,n,t(r))},u))},Kr))}),Dt=e(function(n,r,t){return n(r(t))});rn.Time=tn(pt,Tt,Ft,0,t(function(n,r){return o(lt,r.a,o(Dt,n,r.b))}));var Rt=on("Time"),qt=t(function(n,r){return Rt(o(lt,n,r))}),Bt=o(Dr,function(n){switch(n){case"ArrowUp":return 0;case"ArrowDown":return 1;case"ArrowLeft":return 2;case"ArrowRight":return 3;case"Enter":return 4;default:return 5}},o(T,"key",L)),Ot=e(function(n,r,t){return{$:0,a:n,b:r,c:t}}),Pt=t(function(n,r){return{aC:r,aQ:n}}),zt=qr(o(Pt,m,ht)),It=function(n){return p(function(n,r){if("string"==typeof n)return n+r;if(!n.b)return r;var t=w(n.a,r);n=n.b;for(var e=t;n.b;n=n.b)e=e.b=w(n.a,r);return t}(n.a?"w_":"d_",n.b),n)},St=function(n){return a(dr,t(function(n,r){return a(jt,n.a,n.b,r)}),ht,n)},Mt=t(function(n,r){return{ap:r,av:n}}),Gt=e(function(n,r,t){return o(Sr,function(n){return p(r,n)},a(Hn,t.a?Wn:Un,t.b,function(t){return o(xt,n,o(Mt,r,t))}))}),Jt=t(function(n,r){return a(Et,jt,r,n)}),Qt=e(function(n,r,t){var i=e(function(r,t,e){var u=e.c;return g(e.a,e.b,o(tr,a(Gt,n,r,t),u))}),f=e(function(n,r,t){var e=t.b,u=t.c;return g(o(tr,r,t.a),e,u)}),c=u(function(n,r,t,e){var u=e.c;return g(e.a,a(jt,n,r,e.b),u)}),v=o(zr,It,r),l=s(_t,f,c,i,t.aC,St(v),g(m,ht,m)),b=l.b,d=l.c;return o(Ir,function(n){return qr(o(Pt,v,o(Jt,b,St(n))))},o(Ir,function(){return Gr(d)},Gr(o(zr,kt,l.a))))}),Vt=e(function(n,r,t){var e=n(r);return e.$?t:o(tr,e.a,t)}),Yt=t(function(n,r){return a(Pr,Vt(n),m,r)});rn["Browser.Events"]=tn(zt,Qt,e(function(n,r,t){var e=r.av,u=r.ap,i=o(Yt,function(n){var r=n.b.c;return l(n.a,e)?o(Kn,r,u):lr},t.aQ);return o(Ir,function(){return qr(t)},Gr(o(zr,Jr(n),i)))}),0,t(function(n,r){return a(Ot,r.a,r.b,o(Dr,n,r.c))}));var Ut,Wt,Ht=on("Browser.Events"),Kt=o(e(function(n,r,t){return Ht(a(Ot,n,r,t))}),0,"keydown"),Xt=t(function(n,r){return r.$?lr:n(r.a)}),Zt=t(function(n,r){return a(Pr,t(function(r,t){return n(r)?o(tr,r,t):t}),m,r)}),ne=t(function(n,r){return r.$?n:r.a}),re=function(n){return o(ne,{A:"up",D:"salad.jpg",E:0},o(Xt,function(n){return sr(n)},(r=o(Zt,function(r){return l(r.E,n.P)},n.ac)).b?sr(r.a):lr));var r},te=t(function(n,r){return l(re(r).A,n)}),ee=an(m),ue=t(function(n,r){switch(n.$){case 0:var t=n.a;switch(r.C){case 0:return p(4===t?$(r,{C:1}):r,ee);case 1:if(9===r.l)return p($(r,{C:2}),ee);switch(t){case 0:return o(te,"up",r)?p($(r,{l:r.l+1}),ot()):p($(r,{i:r.i+5}),ee);case 1:return o(te,"down",r)?p($(r,{l:r.l+1}),ot()):p($(r,{i:r.i+5}),ee);case 2:return o(te,"left",r)?p($(r,{l:r.l+1}),ot()):p($(r,{i:r.i+5}),ee);case 3:return o(te,"right",r)?p($(r,{l:r.l+1}),ot()):p($(r,{i:r.i+5}),ee);default:return p(r,ee)}default:return 4===t?at():p(r,ee)}case 1:var e=n.a;return l(e,r.P)?p(r,ot()):p($(r,{P:e}),ee);default:return p($(r,{i:r.i+1}),ee)}}),ie=$n("div"),fe=$n("audio"),oe=S,ae=t(function(n,r){return o(yn,n,oe(r))}),ce=ae("autoplay"),ve=function(n){return"あなたの記録は"+br(n.i)+"秒です！"},se=$n("h1"),le=$n("img"),be=S,de=t(function(n,r){return o(yn,n,be(r))}),he=function(n){return o(de,"src",/^\s*(javascript:|data:text\/html)/i.test(r=n)?"":r);var r},pe=wn,ge=gn,$e=de("type"),me=function(n){return o(ie,j([o(pe,"display","flex"),o(pe,"flex-direction","column"),o(pe,"justify-content","center"),o(pe,"align-items","center")]),j([o(le,j([he("result.jpg")]),m),o(se,m,j([ge("ゲームクリア！")])),o(se,m,j([ge(ve(n))])),o(se,m,j([ge("Enterキーでスタート画面に戻ります")])),o(fe,j([he("result.mp3"),$e("audio/mp3"),ce(!0)]),m)]))},we=$n("br"),ye=function(n){return re(n).D},je=de("id"),Ae=ae("loop");Ut={Main:{init:Yr({bb:at,bs:function(n){switch(n.C){case 0:return Kt(o(Dr,ct,Bt));case 1:return st(j([Kt(o(Dr,ct,Bt)),o(qt,1e3,vt)]));default:return Kt(o(Dr,ct,Bt))}},bw:ue,bx:function(n){switch(n.C){case 0:return o(ie,m,j([o(ie,j([o(pe,"display","flex"),o(pe,"flex-direction","column"),o(pe,"justify-content","center"),o(pe,"align-items","center")]),j([o(le,j([he("title.jpg")]),m),o(se,m,j([ge("画面に表示されている写真がなにか当てるゲーム")])),o(se,m,j([ge("正解だと思う矢印キーを押してね")])),o(se,m,j([ge("Chromeの人はサイトの設定から音楽を有効にすると音楽が流れるよ！")])),o(se,m,j([ge("Enterキーを押してスタート！")]))]))]));case 1:return function(n){return o(ie,j([o(pe,"display","flex"),o(pe,"height","100%")]),j([o(ie,j([o(pe,"background-color","skyblue"),o(pe,"width","70%"),je("playView")]),j([o(ie,j([o(pe,"position","absolute"),o(pe,"top","100px"),o(pe,"left","100px"),o(pe,"border","1px solid"),o(pe,"width","50%"),o(pe,"height","40%")]),j([o(le,j([he(ye(n)),o(pe,"width","100%"),o(pe,"height","100%"),o(pe,"object-fit","fill")]),m)])),o(ie,j([o(pe,"position","absolute"),o(pe,"top","800px"),o(pe,"left","100px"),o(pe,"width","50%"),o(pe,"height","30%")]),j([ge("間違ったキーを押すと経過時間+5秒!"),o(le,j([he("sousa.jpg"),o(pe,"width","100%"),o(pe,"height","100%"),o(pe,"object-fit","fill")]),m)]))])),o(ie,j([o(pe,"background-color","green"),o(pe,"width","30%"),je("playView")]),j([o(se,m,j([ge("経過時間")])),o(se,m,j([ge(br(n.i))])),o(we,m,m),o(se,m,j([ge("現在の正解数")])),o(se,m,j([ge(br(n.l)+"/10")]))])),o(fe,j([he("nando_loop.mp3"),$e("audio/mp3"),ce(!0),Ae(!0)]),m)]))}(n);default:return o(ie,m,j([me(n)]))}}})((Wt=0,{$:0,a:Wt}))(0)}},n.Elm?function n(r,t){for(var e in t)e in r?"init"==e?E(6):n(r[e],t[e]):r[e]=t[e]}(n.Elm,Ut):n.Elm=Ut}(this);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./Main.elm");e.Elm.Main.init({node:document.querySelector("main")});
},{"./Main.elm":"asWa"}]},{},["Focm"], null)
//# sourceMappingURL=src.2af7f556.js.map