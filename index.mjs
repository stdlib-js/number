// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.1.0-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.1.1-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.1-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";var F=Number,J=new n(1),A=new r(J.buffer);function C(t){return J[0]=t,A[0]}var D="function"==typeof Math.fround?Math.fround:null,K=new n(1);var P="function"==typeof D?D:function(t){return K[0]=t,K[0]};var Q=new r(1),R=new n(Q.buffer);function X(t,n,r,e){return t!=t||t===s||t===i?(n[e]=t,n[e+r]=0,n):0!==t&&m(t)<u?(t=P(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function Y(t){return X(t,[0,0],1,0)}f(Y,"assign",X);function Z(t){for(var n,r="";t>0;)r=(n=t/2)===(t=l(n))?"0"+r:"1"+r;return r}var $={};t($,"exponentf",(function(t){var n=C(t);return(n=(2139095040&n)>>>23)-e})),t($,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?s:i:NaN;r+=1}return P(n*r*o(2,f))})),t($,"fromWordf",(function(t){return Q[0]=t,R[0]})),t($,"normalizef",Y),t($,"signbitf",(function(t){return!!(C(t)>>>31)})),t($,"significandf",(function(t){return 8388607&C(t)})),t($,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===i?"1":"0",t===s||t===i)return r+(a=p("1",8))+(o=p("0",23));if(t!=t)return r+(a=p("1",8))+(o="1"+p("0",22));if(0===t)return r+(a=p("0",8))+(o=p("0",23));if(u=(t=d(t))-(f=l(t)),f=Z(f),u=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===s&&(s=e)):(t=r,n+="0"),!(1===r||e-s>24));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=Z(a+e),r+(a=h(a,8,"0"))+(o=v(o,23,"0").substring(0,23))})),t($,"float32ToInt32",(function(t){return 0|t})),t($,"float32ToUint32",(function(t){return t>>>0})),t($,"toWordf",C);var _={};t(_,"base",$);var tt=!0===g?1:0,nt=new j(1),rt=new r(nt.buffer);function et(t){return nt[0]=t,rt[tt]}var st,it,ot=new y(8);!0===g?(st=1,it=0):(st=0,it=1);var at={HIGH:st,LOW:it},ft=new j(1),ut=new r(ft.buffer),mt=at.HIGH,dt=at.LOW;var lt=!0===g?0:1,vt=new U(1),ht=new r(vt.buffer);function pt(t,n,r,e){return W(t)||B(t)?(n[e]=t,n[e+r]=0,n):0!==t&&d(t)<N?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function jt(t){return pt(t,[0,0],1,0)}f(jt,"assign",pt);var gt=!0===g?1:0,ct=new U(1),bt=new S(ct.buffer);var xt=!0===g?0:1,wt=new U(1),yt=new r(wt.buffer);function It(t){for(var n,r="";t>0;)r=(n=t/2)===(t=l(n))?"0"+r:"1"+r;return r}function Ut(t){var n,r,e,s;return n=new z(8),0===t||(s=(4294967295&t)>>>0,e=O(t/4294967296),r=new M(n.buffer),k?(r.setUint32(0,s,k),r.setUint32(4,e,k)):(r.setUint32(0,e,k),r.setUint32(4,s,k))),n}var Nt,Bt,Wt=new z(8),St=new M(Wt.buffer);function Ht(t){return t>>>0}f(Ut,"assign",(function(t,n,r,e){var s,i,o;if(0===t){for(o=0;o<Wt.length;o++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,s=O(t/4294967296),k?(St.setUint32(0,i,k),St.setUint32(4,s,k)):(St.setUint32(0,s,k),St.setUint32(4,i,k)),o=0;o<Wt.length;o++)n[e]=Wt[o],e+=r;return n})),!0===g?(Nt=1,Bt=0):(Nt=0,Bt=1);var Tt={HIGH:Nt,LOW:Bt},Lt=new U(1),Et=new r(Lt.buffer),Ot=Tt.HIGH,Vt=Tt.LOW;function qt(t,n,r,e){return Lt[0]=t,n[e]=Et[Ot],n[e+r]=Et[Vt],n}function Gt(t){return qt(t,[0,0],1,0)}f(Gt,"assign",qt);var kt={};t(kt,"exponent",(function(t){var n=et(t);return(n=(n&c)>>>20)-b|0})),t(kt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-b,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-b){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===b+1)return 0===r?1===n?x:w:NaN;r+=1}return n*r*o(2,e)})),t(kt,"fromInt64Bytes",(function(t,n,r){var e,s,i,o,a;if(1===n)o=t;else{for(o=ot,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new I(o.buffer,o.byteOffset,o.byteLength),g?(i=e.getInt32(r,g),s=e.getInt32(r+4,g)):(s=e.getInt32(r,g),i=e.getInt32(r+4,g)),i<0&&(i+=4294967296),4294967296*s+i})),t(kt,"fromWords",(function(t,n){return ut[mt]=t,ut[dt]=n,ft[0]})),t(kt,"getHighWord",et),t(kt,"getLowWord",(function(t){return vt[0]=t,ht[lt]})),t(kt,"normalize",jt),t(kt,"setHighWord",(function(t,n){return ct[0]=t,bt[gt]=n>>>0,ct[0]})),t(kt,"setLowWord",(function(t,n){return wt[0]=t,yt[xt]=n>>>0,wt[0]})),t(kt,"signbit",(function(t){return!!(et(t)>>>31)})),t(kt,"toBinaryString",(function(t){var n,r,e,s,i,o,a;if(r=t<0||L(t)?"1":"0",t===x||t===w)return r+(s=G("1",11))+(e=G("0",52));if(T(t))return r+(s=G("1",11))+(e="1"+G("0",51));if(0===t)return r+(s=G("0",11))+(e=G("0",52));if(o=(t=E(t))-(i=O(t)),i=It(i),o=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===s&&(s=e)):(t=r,n+="0"),!(1===r||e-s>54));e++);return n}(o),i)s=i.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}s=-n}return e=i+o,s<0?(s<=-H&&(n=H-1),e=e.substring(n)):e=e.substring(1),s=It(s+H),r+(s=q(s,11,"0"))+(e=V(e,52,"0").substring(0,52))})),t(kt,"float64ToFloat32",P),t(kt,"float64ToInt32",(function(t){return 0|t})),t(kt,"float64ToInt64Bytes",Ut),t(kt,"float64ToUint32",Ht),t(kt,"toWords",Gt);var zt={};function Mt(t){return t>>>0}t(zt,"base",kt),t(zt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return x;if("-Infinity"===n.value)return w}return n})),t(zt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===x?{type:"float64",value:"+Infinity"}:t===w?{type:"float64",value:"-Infinity"}:t}));var Ft={};t(Ft,"int32ToUint32",Mt);var Jt={};t(Jt,"base",Ft);var At={};t(At,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t(At,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=l(r))?"0"+e:"1"+e,n-=1;return e}(t),n=q(n,8,"0")}));var Ct={};t(Ct,"base",At);var Dt={};t(Dt,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(Dt,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=l(r))?"0"+e:"1"+e,n-=1;return e}(t),n=q(n,16,"0")}));var Kt={};t(Kt,"base",Dt);var Pt=Mt(31);var Qt=Mt(31);var Rt={};t(Rt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return Ht(n)})),t(Rt,"rotl32",(function(t,n){return Mt(t<<(n&=Pt)|t>>>(-n&Pt))})),t(Rt,"rotr32",(function(t,n){return Mt(t>>>(n&=Qt)|t<<(-n&Qt))})),t(Rt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=l(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,32,"0")})),t(Rt,"uint32ToInt32",(function(t){return 0|t}));var Xt={};t(Xt,"base",Rt);var Yt={};t(Yt,"Number",F),t(Yt,"float32",_),t(Yt,"float64",zt),t(Yt,"int32",Jt),t(Yt,"uint8",Ct),t(Yt,"uint16",Kt),t(Yt,"uint32",Xt);export{F as Number,Yt as default,_ as float32,zt as float64,Jt as int32,Kt as uint16,Xt as uint32,Ct as uint8};
//# sourceMappingURL=index.mjs.map
