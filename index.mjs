// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.1.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var z=Number,M=new n(1),F=new r(M.buffer);function J(t){return M[0]=t,F[0]}var A="function"==typeof Math.fround?Math.fround:null,C=new f(1);var D="function"==typeof A?A:function(t){return C[0]=t,C[0]};var K=new r(1),P=new n(K.buffer);function Q(t,n,r,e){return t!=t||t===s||t===i?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<m?(t=D(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function R(t){return Q(t,[0,0],1,0)}u(R,"assign",Q);function X(t){for(var n,r="";t>0;)r=(n=t/2)===(t=v(n))?"0"+r:"1"+r;return r}var Y={};t(Y,"exponentf",(function(t){var n=J(t);return(n=(2139095040&n)>>>23)-e})),t(Y,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?s:i:NaN;r+=1}return D(n*r*o(2,f))})),t(Y,"fromWordf",(function(t){return K[0]=t,P[0]})),t(Y,"normalizef",R),t(Y,"signbitf",(function(t){return!!(J(t)>>>31)})),t(Y,"significandf",(function(t){return 8388607&J(t)})),t(Y,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===i?"1":"0",t===s||t===i)return r+(a=g("1",8))+(o=g("0",23));if(t!=t)return r+(a=g("1",8))+(o="1"+g("0",22));if(0===t)return r+(a=g("0",8))+(o=g("0",23));if(u=(t=d(t))-(f=v(t)),f=X(f),u=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===s&&(s=e)):(t=r,n+="0"),!(1===r||e-s>24));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=X(a+e),r+(a=p(a,8,"0"))+(o=h(o,23,"0").substring(0,23))})),t(Y,"float32ToInt32",(function(t){return 0|t})),t(Y,"float32ToUint32",(function(t){return t>>>0})),t(Y,"toWordf",J);var Z={};t(Z,"base",Y);var $=!0===c?1:0,_=new j(1),tt=new r(_.buffer);function nt(t){return _[0]=t,tt[$]}var rt,et,st=new I(8);!0===c?(rt=1,et=0):(rt=0,et=1);var it={HIGH:rt,LOW:et},ot=new B(1),at=new N(ot.buffer),ft=it.HIGH,ut=it.LOW;var mt=!0===c?0:1,lt=new j(1),dt=new N(lt.buffer);function vt(t,n,r,e){return H(t)||S(t)?(n[e]=t,n[e+r]=0,n):0!==t&&T(t)<W?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function ht(t){return vt(t,[0,0],1,0)}u(ht,"assign",vt);var pt=!0===c?1:0,gt=new B(1),jt=new N(gt.buffer);var ct=!0===c?0:1,bt=new j(1),xt=new N(bt.buffer);function wt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=v(n))?"0"+r:"1"+r;return r}function yt(t){var n,r,e,s;return n=new I(8),0===t||(s=(4294967295&t)>>>0,e=O(t/4294967296),r=new U(n.buffer),c?(r.setUint32(0,s,c),r.setUint32(4,e,c)):(r.setUint32(0,e,c),r.setUint32(4,s,c))),n}var It,Ut,Nt=new I(8),Bt=new U(Nt.buffer);function Wt(t){return t>>>0}u(yt,"assign",(function(t,n,r,e){var s,i,o;if(0===t){for(o=0;o<Nt.length;o++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,s=O(t/4294967296),c?(Bt.setUint32(0,i,c),Bt.setUint32(4,s,c)):(Bt.setUint32(0,s,c),Bt.setUint32(4,i,c)),o=0;o<Nt.length;o++)n[e]=Nt[o],e+=r;return n})),!0===c?(It=1,Ut=0):(It=0,Ut=1);var St={HIGH:It,LOW:Ut},Ht=new j(1),Tt=new N(Ht.buffer),Lt=St.HIGH,Et=St.LOW;function Ot(t,n,r,e){return Ht[0]=t,n[e]=Tt[Lt],n[e+r]=Tt[Et],n}function Vt(t){return Ot(t,[0,0],1,0)}u(Vt,"assign",Ot);var qt={};t(qt,"exponent",(function(t){var n=nt(t);return(n=(n&b)>>>20)-x|0})),t(qt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-x,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-x){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===x+1)return 0===r?1===n?w:y:NaN;r+=1}return n*r*o(2,e)})),t(qt,"fromInt64Bytes",(function(t,n,r){var e,s,i,o,a;if(1===n)o=t;else{for(o=st,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new U(o.buffer,o.byteOffset,o.byteLength),c?(i=e.getInt32(r,c),s=e.getInt32(r+4,c)):(s=e.getInt32(r,c),i=e.getInt32(r+4,c)),i<0&&(i+=4294967296),4294967296*s+i})),t(qt,"fromWords",(function(t,n){return at[ft]=t,at[ut]=n,ot[0]})),t(qt,"getHighWord",nt),t(qt,"getLowWord",(function(t){return lt[0]=t,dt[mt]})),t(qt,"normalize",ht),t(qt,"setHighWord",(function(t,n){return gt[0]=t,jt[pt]=n>>>0,gt[0]})),t(qt,"setLowWord",(function(t,n){return bt[0]=t,xt[ct]=n>>>0,bt[0]})),t(qt,"signbit",(function(t){return!!(nt(t)>>>31)})),t(qt,"toBinaryString",(function(t){var n,r,e,s,i,o,a;if(r=t<0||E(t)?"1":"0",t===w||t===y)return r+(s=G("1",11))+(e=G("0",52));if(H(t))return r+(s=G("1",11))+(e="1"+G("0",51));if(0===t)return r+(s=G("0",11))+(e=G("0",52));if(o=(t=T(t))-(i=O(t)),i=wt(i),o=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===s&&(s=e)):(t=r,n+="0"),!(1===r||e-s>54));e++);return n}(o),i)s=i.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}s=-n}return e=i+o,s<0?(s<=-L&&(n=L-1),e=e.substring(n)):e=e.substring(1),s=wt(s+L),r+(s=q(s,11,"0"))+(e=V(e,52,"0").substring(0,52))})),t(qt,"float64ToFloat32",D),t(qt,"float64ToInt32",(function(t){return 0|t})),t(qt,"float64ToInt64Bytes",yt),t(qt,"float64ToUint32",Wt),t(qt,"toWords",Vt);var Gt={};function kt(t){return t>>>0}t(Gt,"base",qt),t(Gt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return w;if("-Infinity"===n.value)return y}return n})),t(Gt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===w?{type:"float64",value:"+Infinity"}:t===y?{type:"float64",value:"-Infinity"}:t}));var zt={};t(zt,"int32ToUint32",kt);var Mt={};t(Mt,"base",zt);var Ft={};t(Ft,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=k(2,8-r-1));return n})),t(Ft,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=q(n,8,"0")}));var Jt={};t(Jt,"base",Ft);var At={};t(At,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(At,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=p(n,16,"0")}));var Ct={};t(Ct,"base",At);var Dt=kt(31);var Kt=kt(31);var Pt={};t(Pt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return Wt(n)})),t(Pt,"rotl32",(function(t,n){return kt(t<<(n&=Dt)|t>>>(-n&Dt))})),t(Pt,"rotr32",(function(t,n){return kt(t>>>(n&=Kt)|t<<(-n&Kt))})),t(Pt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=p(n,32,"0")})),t(Pt,"uint32ToInt32",(function(t){return 0|t}));var Qt={};t(Qt,"base",Pt);var Rt={};t(Rt,"Number",z),t(Rt,"float32",Z),t(Rt,"float64",Gt),t(Rt,"int32",Mt),t(Rt,"uint8",Jt),t(Rt,"uint16",Ct),t(Rt,"uint32",Qt);export{z as Number,Rt as default,Z as float32,Gt as float64,Mt as int32,Ct as uint16,Qt as uint32,Jt as uint8};
//# sourceMappingURL=index.mjs.map
