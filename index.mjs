// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var z=Number;var M={};t(M,"isSameValuef",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(M,"isSameValueZerof",(function(t,n){return t===n||t!=t&&n!=n}));var Z=new n(1),F=new r(Z.buffer);function J(t){return Z[0]=t,F[0]}var A="function"==typeof Math.fround?Math.fround:null,C=new f(1);var D="function"==typeof A?A:function(t){return C[0]=t,C[0]};var K=new r(1),P=new n(K.buffer);var Q=8388608;function R(t,n,r,e){return t!=t||t===s||t===i?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<m?(t=D(t*Q),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function X(t){return R(t,[0,0],1,0)}u(X,"assign",R);function Y(t){for(var n,r="";t>0;)r=(n=t/2)===(t=v(n))?"0"+r:"1"+r;return r}var $=149,_=24;var tt={};t(tt,"assert",M),t(tt,"exponentf",(function(t){var n=J(t);return(n=(2139095040&n)>>>23)-e})),t(tt,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?s:i:NaN;r+=1}return D(n*r*o(2,f))})),t(tt,"fromWordf",(function(t){return K[0]=t,P[0]})),t(tt,"normalizef",X),t(tt,"signbitf",(function(t){return!!(J(t)>>>31)})),t(tt,"significandf",(function(t){return 8388607&J(t)})),t(tt,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===i?"1":"0",t===s||t===i)return r+(a=g("1",8))+(o=g("0",23));if(t!=t)return r+(a=g("1",8))+(o="1"+g("0",22));if(0===t)return r+(a=g("0",8))+(o=g("0",23));if(u=(t=d(t))-(f=v(t)),f=Y(f),u=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=$,e=0;e<$&&((r=2*t)>=1?(t=r-1,n+="1",s===$&&(s=e)):(t=r,n+="0"),!(1===r||e-s>_));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=Y(a+e),r+(a=p(a,8,"0"))+(o=h(o,23,"0").substring(0,23))})),t(tt,"float32ToInt32",(function(t){return 0|t})),t(tt,"float32ToUint32",(function(t){return t>>>0})),t(tt,"toWordf",J);var nt={};t(nt,"base",tt);var rt={};t(rt,"isSameValue",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(rt,"isSameValueZero",(function(t,n){return t===n||t!=t&&n!=n}));var et=!0===c?1:0,st=new j(1),it=new r(st.buffer);function ot(t){return st[0]=t,it[et]}var at,ft,ut=4294967296,mt=new I(8);!0===c?(at=1,ft=0):(at=0,ft=1);var lt={HIGH:at,LOW:ft},dt=new j(1),vt=new r(dt.buffer),ht=lt.HIGH,pt=lt.LOW;var gt=!0===c?0:1,jt=new j(1),ct=new r(jt.buffer);var bt=4503599627370496;function xt(t,n,r,e){return B(t)||N(t)?(n[e]=t,n[e+r]=0,n):0!==t&&W(t)<S?(n[e]=t*bt,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function wt(t){return xt(t,[0,0],1,0)}u(wt,"assign",xt);var yt=!0===c?1:0,It=new j(1),Ut=new r(It.buffer);var St=!0===c?0:1,Nt=new H(1),Bt=new r(Nt.buffer);function Wt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=v(n))?"0"+r:"1"+r;return r}var Ht=1075,Vt=54;function Tt(t){var n,r,e,s;return n=new I(8),0===t||(s=(4294967295&t)>>>0,e=L(t/4294967296),r=new G(n.buffer),c?(r.setUint32(0,s,c),r.setUint32(4,e,c)):(r.setUint32(0,e,c),r.setUint32(4,s,c))),n}var Lt,Et,Ot=new I(8),qt=new G(Ot.buffer);function Gt(t){return t>>>0}u(Tt,"assign",(function(t,n,r,e){var s,i,o;if(0===t){for(o=0;o<Ot.length;o++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,s=L(t/4294967296),c?(qt.setUint32(0,i,c),qt.setUint32(4,s,c)):(qt.setUint32(0,s,c),qt.setUint32(4,i,c)),o=0;o<Ot.length;o++)n[e]=Ot[o],e+=r;return n})),!0===c?(Lt=1,Et=0):(Lt=0,Et=1);var kt={HIGH:Lt,LOW:Et},zt=new j(1),Mt=new r(zt.buffer),Zt=kt.HIGH,Ft=kt.LOW;function Jt(t,n,r,e){return zt[0]=t,n[e]=Mt[Zt],n[e+r]=Mt[Ft],n}function At(t){return Jt(t,[0,0],1,0)}u(At,"assign",Jt);var Ct={};t(Ct,"assert",rt),t(Ct,"exponent",(function(t){var n=ot(t);return(n=(n&b)>>>20)-x|0})),t(Ct,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-x,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-x){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===x+1)return 0===r?1===n?w:y:NaN;r+=1}return n*r*o(2,e)})),t(Ct,"fromInt64Bytes",(function(t,n,r){var e,s,i,o,a;if(1===n)o=t;else{for(o=mt,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new U(o.buffer,o.byteOffset,o.byteLength),c?(i=e.getInt32(r,c),s=e.getInt32(r+4,c)):(s=e.getInt32(r,c),i=e.getInt32(r+4,c)),i<0&&(i+=ut),s*ut+i})),t(Ct,"fromWords",(function(t,n){return vt[ht]=t,vt[pt]=n,dt[0]})),t(Ct,"getHighWord",ot),t(Ct,"getLowWord",(function(t){return jt[0]=t,ct[gt]})),t(Ct,"normalize",wt),t(Ct,"setHighWord",(function(t,n){return It[0]=t,Ut[yt]=n>>>0,It[0]})),t(Ct,"setLowWord",(function(t,n){return Nt[0]=t,Bt[St]=n>>>0,Nt[0]})),t(Ct,"signbit",(function(t){return!!(ot(t)>>>31)})),t(Ct,"toBinaryString",(function(t){var n,r,e,s,i,o,a;if(r=t<0||T(t)?"1":"0",t===w||t===y)return r+(s=q("1",11))+(e=q("0",52));if(B(t))return r+(s=q("1",11))+(e="1"+q("0",51));if(0===t)return r+(s=q("0",11))+(e=q("0",52));if(o=(t=W(t))-(i=L(t)),i=Wt(i),o=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=Ht,e=0;e<Ht&&((r=2*t)>=1?(t=r-1,n+="1",s===Ht&&(s=e)):(t=r,n+="0"),!(1===r||e-s>Vt));e++);return n}(o),i)s=i.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}s=-n}return e=i+o,s<0?(s<=-V&&(n=V-1),e=e.substring(n)):e=e.substring(1),s=Wt(s+V),r+(s=O(s,11,"0"))+(e=E(e,52,"0").substring(0,52))})),t(Ct,"float64ToFloat32",D),t(Ct,"float64ToInt32",(function(t){return 0|t})),t(Ct,"float64ToInt64Bytes",Tt),t(Ct,"float64ToUint32",Gt),t(Ct,"toWords",At);var Dt={};function Kt(t){return t>>>0}t(Dt,"base",Ct),t(Dt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return w;if("-Infinity"===n.value)return y}return n})),t(Dt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===w?{type:"float64",value:"+Infinity"}:t===y?{type:"float64",value:"-Infinity"}:t}));var Pt={};t(Pt,"int32ToUint32",Kt);var Qt={};t(Qt,"base",Pt);var Rt=8;var Xt={};t(Xt,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=k(2,8-r-1));return n})),t(Xt,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=Rt;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,8,"0")}));var Yt={};t(Yt,"base",Xt);var $t=16;var _t={};t(_t,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=k(2,16-r-1));return n})),t(_t,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=$t;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,16,"0")}));var tn={};t(tn,"base",_t);var nn=Kt(31);var rn=Kt(31);var en=32;var sn={};t(sn,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=k(2,32-r-1));return Gt(n)})),t(sn,"rotl32",(function(t,n){return Kt(t<<(n&=nn)|t>>>(-n&nn))})),t(sn,"rotr32",(function(t,n){return Kt(t>>>(n&=rn)|t<<(-n&rn))})),t(sn,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=en;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,32,"0")})),t(sn,"uint32ToInt32",(function(t){return 0|t}));var on={};t(on,"base",sn);var an={};t(an,"Number",z),t(an,"float32",nt),t(an,"float64",Dt),t(an,"int32",Qt),t(an,"uint8",Yt),t(an,"uint16",tn),t(an,"uint32",on);export{z as Number,an as default,nt as float32,Dt as float64,Qt as int32,tn as uint16,on as uint32,Yt as uint8};
//# sourceMappingURL=index.mjs.map
