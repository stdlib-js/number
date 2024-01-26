// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.1-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.1.0-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.1.1-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.1.1-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.1.1-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.1.0-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";var Z=Number;var F={};t(F,"isSameValuef",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(F,"isSameValueZerof",(function(t,n){return t===n||t!=t&&n!=n}));var J=new n(1),A=new r(J.buffer);function C(t){return J[0]=t,A[0]}var D="function"==typeof Math.fround?Math.fround:null,K=new f(1);var P="function"==typeof D?D:function(t){return K[0]=t,K[0]};var Q=new m(1),R=new n(Q.buffer);function X(t,n,r,e){return t!=t||t===s||t===i?(n[e]=t,n[e+r]=0,n):0!==t&&v(t)<d?(t=P(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function Y(t){return X(t,[0,0],1,0)}l(Y,"assign",X);function $(t){for(var n,r="";t>0;)r=(n=t/2)===(t=b(n))?"0"+r:"1"+r;return r}var _={};t(_,"assert",F),t(_,"exponentf",(function(t){var n=C(t);return(n=(2139095040&n)>>>23)-e})),t(_,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=u(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?s:i:NaN;r+=1}return P(n*r*o(2,f))})),t(_,"fromWordf",(function(t){return Q[0]=t,R[0]})),t(_,"normalizef",Y),t(_,"signbitf",(function(t){return!!(C(t)>>>31)})),t(_,"significandf",(function(t){return 8388607&C(t)})),t(_,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===i?"1":"0",t===s||t===i)return r+(a=c("1",8))+(o=c("0",23));if(t!=t)return r+(a=c("1",8))+(o="1"+c("0",22));if(0===t)return r+(a=c("0",8))+(o=c("0",23));if(u=(t=h(t))-(f=p(t)),f=$(f),u=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===s&&(s=e)):(t=r,n+="0"),!(1===r||e-s>24));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=$(a+e),r+(a=g(a,8,"0"))+(o=j(o,23,"0").substring(0,23))})),t(_,"float32ToInt32",(function(t){return 0|t})),t(_,"float32ToUint32",(function(t){return t>>>0})),t(_,"toWordf",C);var tt={};t(tt,"base",_);var nt={};t(nt,"isSameValue",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(nt,"isSameValueZero",(function(t,n){return t===n||t!=t&&n!=n}));var rt=!0===w?1:0,et=new x(1),st=new r(et.buffer);function it(t){return et[0]=t,st[rt]}var ot,at,ft=new N(8);!0===w?(ot=1,at=0):(ot=0,at=1);var ut={HIGH:ot,LOW:at},mt=new x(1),lt=new r(mt.buffer),dt=ut.HIGH,vt=ut.LOW;var ht=!0===w?0:1,pt=new x(1),jt=new r(pt.buffer);function gt(t,n,r,e){return V(t)||H(t)?(n[e]=t,n[e+r]=0,n):0!==t&&T(t)<W?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function ct(t){return gt(t,[0,0],1,0)}l(ct,"assign",gt);var bt=!0===w?1:0,xt=new x(1),wt=new r(xt.buffer);var yt=!0===w?0:1,It=new x(1),Ut=new r(It.buffer);function St(t){for(var n,r="";t>0;)r=(n=t/2)===(t=b(n))?"0"+r:"1"+r;return r}function Nt(t){var n,r,e,s;return n=new N(8),0===t||(s=(4294967295&t)>>>0,e=p(t/4294967296),r=new k(n.buffer),G?(r.setUint32(0,s,G),r.setUint32(4,e,G)):(r.setUint32(0,e,G),r.setUint32(4,s,G))),n}var Bt,Wt,Ht=new z(8),Vt=new k(Ht.buffer);function Tt(t){return t>>>0}l(Nt,"assign",(function(t,n,r,e){var s,i,o;if(0===t){for(o=0;o<Ht.length;o++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,s=p(t/4294967296),G?(Vt.setUint32(0,i,G),Vt.setUint32(4,s,G)):(Vt.setUint32(0,s,G),Vt.setUint32(4,i,G)),o=0;o<Ht.length;o++)n[e]=Ht[o],e+=r;return n})),!0===w?(Bt=1,Wt=0):(Bt=0,Wt=1);var Lt={HIGH:Bt,LOW:Wt},Et=new M(1),Ot=new r(Et.buffer),qt=Lt.HIGH,Gt=Lt.LOW;function kt(t,n,r,e){return Et[0]=t,n[e]=Ot[qt],n[e+r]=Ot[Gt],n}function zt(t){return kt(t,[0,0],1,0)}l(zt,"assign",kt);var Mt={};t(Mt,"assert",nt),t(Mt,"exponent",(function(t){var n=it(t);return(n=(n&y)>>>20)-I|0})),t(Mt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-I,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=u(2,-(n+1)));return r}(t.substring(12)),e===-I){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===I+1)return 0===r?1===n?U:S:NaN;r+=1}return n*r*u(2,e)})),t(Mt,"fromInt64Bytes",(function(t,n,r){var e,s,i,o,a;if(1===n)o=t;else{for(o=ft,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new B(o.buffer,o.byteOffset,o.byteLength),w?(i=e.getInt32(r,w),s=e.getInt32(r+4,w)):(s=e.getInt32(r,w),i=e.getInt32(r+4,w)),i<0&&(i+=4294967296),4294967296*s+i})),t(Mt,"fromWords",(function(t,n){return lt[dt]=t,lt[vt]=n,mt[0]})),t(Mt,"getHighWord",it),t(Mt,"getLowWord",(function(t){return pt[0]=t,jt[ht]})),t(Mt,"normalize",ct),t(Mt,"setHighWord",(function(t,n){return xt[0]=t,wt[bt]=n>>>0,xt[0]})),t(Mt,"setLowWord",(function(t,n){return It[0]=t,Ut[yt]=n>>>0,It[0]})),t(Mt,"signbit",(function(t){return!!(it(t)>>>31)})),t(Mt,"toBinaryString",(function(t){var n,r,e,s,i,o,a;if(r=t<0||L(t)?"1":"0",t===U||t===S)return r+(s=q("1",11))+(e=q("0",52));if(V(t))return r+(s=q("1",11))+(e="1"+q("0",51));if(0===t)return r+(s=q("0",11))+(e=q("0",52));if(o=(t=T(t))-(i=b(t)),i=St(i),o=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===s&&(s=e)):(t=r,n+="0"),!(1===r||e-s>54));e++);return n}(o),i)s=i.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}s=-n}return e=i+o,s<0?(s<=-I&&(n=I-1),e=e.substring(n)):e=e.substring(1),s=St(s+I),r+(s=O(s,11,"0"))+(e=E(e,52,"0").substring(0,52))})),t(Mt,"float64ToFloat32",P),t(Mt,"float64ToInt32",(function(t){return 0|t})),t(Mt,"float64ToInt64Bytes",Nt),t(Mt,"float64ToUint32",Tt),t(Mt,"toWords",zt);var Zt={};function Ft(t){return t>>>0}t(Zt,"base",Mt),t(Zt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return U;if("-Infinity"===n.value)return S}return n})),t(Zt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===U?{type:"float64",value:"+Infinity"}:t===S?{type:"float64",value:"-Infinity"}:t}));var Jt={};t(Jt,"int32ToUint32",Ft);var At={};t(At,"base",Jt);var Ct={};t(Ct,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t(Ct,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=b(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,8,"0")}));var Dt={};t(Dt,"base",Ct);var Kt={};t(Kt,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(Kt,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=b(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,16,"0")}));var Pt={};t(Pt,"base",Kt);var Qt=Ft(31);var Rt=Ft(31);var Xt={};t(Xt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return Tt(n)})),t(Xt,"rotl32",(function(t,n){return Ft(t<<(n&=Qt)|t>>>(-n&Qt))})),t(Xt,"rotr32",(function(t,n){return Ft(t>>>(n&=Rt)|t<<(-n&Rt))})),t(Xt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=b(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,32,"0")})),t(Xt,"uint32ToInt32",(function(t){return 0|t}));var Yt={};t(Yt,"base",Xt);var $t={};t($t,"Number",Z),t($t,"float32",tt),t($t,"float64",Zt),t($t,"int32",At),t($t,"uint8",Dt),t($t,"uint16",Pt),t($t,"uint32",Yt);export{Z as Number,$t as default,tt as float32,Zt as float64,At as int32,Pt as uint16,Yt as uint32,Dt as uint8};
//# sourceMappingURL=index.mjs.map
