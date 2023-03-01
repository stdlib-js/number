// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.0.8-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.0.7-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.0.7-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.0.7-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.0.3-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.0.8-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.0.8-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.0.8-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.0.8-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var T=Number,L=new n(1),E=new r(L.buffer);function O(t){return L[0]=t,E[0]}var V="function"==typeof Math.fround?Math.fround:null,q=new n(1);var G="function"==typeof V?V:function(t){return q[0]=t,q[0]};var k=new r(1),z=new n(k.buffer);function M(t,n,r,e){return t!=t||t===i||t===s?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<u?(t=G(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function F(t){return M(t,[0,0],1,0)}f(F,"assign",M);function J(t){for(var n,r="";t>0;)r=(n=t/2)===(t=d(n))?"0"+r:"1"+r;return r}var A={};t(A,"exponentf",(function(t){var n=O(t);return(n=(2139095040&n)>>>23)-e})),t(A,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?i:s:NaN;r+=1}return G(n*r*o(2,f))})),t(A,"fromWordf",(function(t){return k[0]=t,z[0]})),t(A,"normalizef",F),t(A,"signbitf",(function(t){return!!(O(t)>>>31)})),t(A,"significandf",(function(t){return 8388607&O(t)})),t(A,"toBinaryStringf",(function(t){var n,r,o,a,f,u,l;if(r=t<0||1/t===s?"1":"0",t===i||t===s)return r+(a=g("1",8))+(o=g("0",23));if(t!=t)return r+(a=g("1",8))+(o="1"+g("0",22));if(0===t)return r+(a=g("0",8))+(o=g("0",23));if(u=(t=m(t))-(f=d(t)),f=J(f),u=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>24));e++);return n}(u),f)a=f.length-1;else{for(l=0;l<u.length;l++)if("1"===u[l]){n=l+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=J(a+e),r+(a=h(a,8,"0"))+(o=v(o,23,"0").substring(0,23))})),t(A,"float32ToInt32",(function(t){return 0|t})),t(A,"float32ToUint32",(function(t){return t>>>0})),t(A,"toWordf",O);var C={};t(C,"base",A);var D=!0===p?1:0,K=new c(1),P=new r(K.buffer);function Q(t){return K[0]=t,P[D]}var R,X,Y=new I(8);!0===p?(R=1,X=0):(R=0,X=1);var Z={HIGH:R,LOW:X},$=new c(1),_=new r($.buffer),tt=Z.HIGH,nt=Z.LOW;var rt=!0===p?0:1,et=new c(1),it=new r(et.buffer);function st(t,n,r,e){return W(t)||B(t)?(n[e]=t,n[e+r]=0,n):0!==t&&m(t)<N?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function ot(t){return st(t,[0,0],1,0)}f(ot,"assign",st);var at=!0===p?1:0,ft=new c(1),ut=new r(ft.buffer);var lt=!0===p?0:1,mt=new c(1),dt=new r(mt.buffer);function vt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=d(n))?"0"+r:"1"+r;return r}function ht(t){var n,r,e,i;return n=new I(8),0===t||(i=(4294967295&t)>>>0,e=d(t/4294967296),r=new U(n.buffer),p?(r.setUint32(0,i,p),r.setUint32(4,e,p)):(r.setUint32(0,e,p),r.setUint32(4,i,p))),n}var gt,ct,pt=new I(8),jt=new U(pt.buffer);function bt(t){return t>>>0}f(ht,"assign",(function(t,n,r,e){var i,s,o;if(0===t){for(o=0;o<pt.length;o++)n[e]=0,e+=r;return n}for(s=(4294967295&t)>>>0,i=d(t/4294967296),p?(jt.setUint32(0,s,p),jt.setUint32(4,i,p)):(jt.setUint32(0,i,p),jt.setUint32(4,s,p)),o=0;o<pt.length;o++)n[e]=pt[o],e+=r;return n})),!0===p?(gt=1,ct=0):(gt=0,ct=1);var wt={HIGH:gt,LOW:ct},xt=new c(1),yt=new r(xt.buffer),It=wt.HIGH,Ut=wt.LOW;function Nt(t,n,r,e){return xt[0]=t,n[e]=yt[It],n[e+r]=yt[Ut],n}function Bt(t){return Nt(t,[0,0],1,0)}f(Bt,"assign",Nt);var Wt={};t(Wt,"exponent",(function(t){var n=Q(t);return(n=(n&j)>>>20)-b|0})),t(Wt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-y,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-y){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===y+1)return 0===r?1===n?w:x:NaN;r+=1}return n*r*o(2,e)})),t(Wt,"fromInt64Bytes",(function(t,n,r){var e,i,s,o,a;if(1===n)o=t;else{for(o=Y,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new U(o.buffer,o.byteOffset,o.byteLength),p?(s=e.getInt32(r,p),i=e.getInt32(r+4,p)):(i=e.getInt32(r,p),s=e.getInt32(r+4,p)),s<0&&(s+=4294967296),4294967296*i+s})),t(Wt,"fromWords",(function(t,n){return _[tt]=t,_[nt]=n,$[0]})),t(Wt,"getHighWord",Q),t(Wt,"getLowWord",(function(t){return et[0]=t,it[rt]})),t(Wt,"normalize",ot),t(Wt,"setHighWord",(function(t,n){return ft[0]=t,ut[at]=n>>>0,ft[0]})),t(Wt,"setLowWord",(function(t,n){return mt[0]=t,dt[lt]=n>>>0,mt[0]})),t(Wt,"signbit",(function(t){return!!(Q(t)>>>31)})),t(Wt,"toBinaryString",(function(t){var n,r,e,i,s,o,a;if(r=t<0||S(t)?"1":"0",t===w||t===x)return r+(i=g("1",11))+(e=g("0",52));if(W(t))return r+(i=g("1",11))+(e="1"+g("0",51));if(0===t)return r+(i=g("0",11))+(e=g("0",52));if(o=(t=m(t))-(s=d(t)),s=vt(s),o=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>54));e++);return n}(o),s)i=s.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}i=-n}return e=s+o,i<0?(i<=-b&&(n=b-1),e=e.substring(n)):e=e.substring(1),i=vt(i+b),r+(i=h(i,11,"0"))+(e=v(e,52,"0").substring(0,52))})),t(Wt,"float64ToFloat32",G),t(Wt,"float64ToInt32",(function(t){return 0|t})),t(Wt,"float64ToInt64Bytes",ht),t(Wt,"float64ToUint32",bt),t(Wt,"toWords",Bt);var St={};function Ht(t){return t>>>0}t(St,"base",Wt),t(St,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return w;if("-Infinity"===n.value)return x}return n})),t(St,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===w?{type:"float64",value:"+Infinity"}:t===x?{type:"float64",value:"-Infinity"}:t}));var Tt={};t(Tt,"int32ToUint32",Ht);var Lt={};t(Lt,"base",Tt);var Et={};t(Et,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=H(2,8-r-1));return n})),t(Et,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,8,"0")}));var Ot={};t(Ot,"base",Et);var Vt={};t(Vt,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=H(2,16-r-1));return n})),t(Vt,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,16,"0")}));var qt={};t(qt,"base",Vt);var Gt=Ht(31);var kt=Ht(31);var zt={};t(zt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=H(2,32-r-1));return bt(n)})),t(zt,"rotl32",(function(t,n){return Ht(t<<(n&=Gt)|t>>>(-n&Gt))})),t(zt,"rotr32",(function(t,n){return Ht(t>>>(n&=kt)|t<<(-n&kt))})),t(zt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,32,"0")})),t(zt,"uint32ToInt32",(function(t){return 0|t}));var Mt={};t(Mt,"base",zt);var Ft={};t(Ft,"Number",T),t(Ft,"float32",C),t(Ft,"float64",St),t(Ft,"int32",Lt),t(Ft,"uint8",Ot),t(Ft,"uint16",qt),t(Ft,"uint32",Mt);export{T as Number,Ft as default,C as float32,St as float64,Lt as int32,qt as uint16,Mt as uint32,Ot as uint8};
//# sourceMappingURL=index.mjs.map
