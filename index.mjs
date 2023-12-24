// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.1.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.1.0-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.1.1-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.1-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.1.1-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.1.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.1.0-esm/index.mjs";var O=Number,V=new n(1),q=new r(V.buffer);function G(t){return V[0]=t,q[0]}var k="function"==typeof Math.fround?Math.fround:null,z=new f(1);var M="function"==typeof k?k:function(t){return z[0]=t,z[0]};var F=new r(1),J=new n(F.buffer);function A(t,n,r,e){return t!=t||t===i||t===s?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<m?(t=M(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function C(t){return A(t,[0,0],1,0)}u(C,"assign",A);function D(t){for(var n,r="";t>0;)r=(n=t/2)===(t=c(n))?"0"+r:"1"+r;return r}var K={};t(K,"exponentf",(function(t){var n=G(t);return(n=(2139095040&n)>>>23)-e})),t(K,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?i:s:NaN;r+=1}return M(n*r*o(2,f))})),t(K,"fromWordf",(function(t){return F[0]=t,J[0]})),t(K,"normalizef",C),t(K,"signbitf",(function(t){return!!(G(t)>>>31)})),t(K,"significandf",(function(t){return 8388607&G(t)})),t(K,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===s?"1":"0",t===i||t===s)return r+(a=p("1",8))+(o=p("0",23));if(t!=t)return r+(a=p("1",8))+(o="1"+p("0",22));if(0===t)return r+(a=p("0",8))+(o=p("0",23));if(u=(t=d(t))-(f=v(t)),f=D(f),u=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>24));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=D(a+e),r+(a=g(a,8,"0"))+(o=h(o,23,"0").substring(0,23))})),t(K,"float32ToInt32",(function(t){return 0|t})),t(K,"float32ToUint32",(function(t){return t>>>0})),t(K,"toWordf",G);var P={};t(P,"base",K);var Q=!0===b?1:0,R=new j(1),X=new r(R.buffer);function Y(t){return R[0]=t,X[Q]}var Z,$,_=new U(8);!0===b?(Z=1,$=0):(Z=0,$=1);var tt={HIGH:Z,LOW:$},nt=new j(1),rt=new r(nt.buffer),et=tt.HIGH,it=tt.LOW;var st=!0===b?0:1,ot=new j(1),at=new r(ot.buffer);function ft(t,n,r,e){return S(t)||W(t)?(n[e]=t,n[e+r]=0,n):0!==t&&d(t)<B?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function ut(t){return ft(t,[0,0],1,0)}u(ut,"assign",ft);var mt=!0===b?1:0,lt=new j(1),dt=new r(lt.buffer);var vt=!0===b?0:1,ht=new j(1),gt=new r(ht.buffer);function pt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=c(n))?"0"+r:"1"+r;return r}function ct(t){var n,r,e,i;return n=new U(8),0===t||(i=(4294967295&t)>>>0,e=c(t/4294967296),r=new N(n.buffer),b?(r.setUint32(0,i,b),r.setUint32(4,e,b)):(r.setUint32(0,e,b),r.setUint32(4,i,b))),n}var jt,bt,wt=new U(8),xt=new N(wt.buffer);function yt(t){return t>>>0}u(ct,"assign",(function(t,n,r,e){var i,s,o;if(0===t){for(o=0;o<wt.length;o++)n[e]=0,e+=r;return n}for(s=(4294967295&t)>>>0,i=v(t/4294967296),b?(xt.setUint32(0,s,b),xt.setUint32(4,i,b)):(xt.setUint32(0,i,b),xt.setUint32(4,s,b)),o=0;o<wt.length;o++)n[e]=wt[o],e+=r;return n})),!0===b?(jt=1,bt=0):(jt=0,bt=1);var It={HIGH:jt,LOW:bt},Ut=new j(1),Nt=new r(Ut.buffer),Bt=It.HIGH,Wt=It.LOW;function St(t,n,r,e){return Ut[0]=t,n[e]=Nt[Bt],n[e+r]=Nt[Wt],n}function Ht(t){return St(t,[0,0],1,0)}u(Ht,"assign",St);var Tt={};t(Tt,"exponent",(function(t){var n=Y(t);return(n=(n&w)>>>20)-x|0})),t(Tt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-x,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-x){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===x+1)return 0===r?1===n?y:I:NaN;r+=1}return n*r*o(2,e)})),t(Tt,"fromInt64Bytes",(function(t,n,r){var e,i,s,o,a;if(1===n)o=t;else{for(o=_,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new N(o.buffer,o.byteOffset,o.byteLength),b?(s=e.getInt32(r,b),i=e.getInt32(r+4,b)):(i=e.getInt32(r,b),s=e.getInt32(r+4,b)),s<0&&(s+=4294967296),4294967296*i+s})),t(Tt,"fromWords",(function(t,n){return rt[et]=t,rt[it]=n,nt[0]})),t(Tt,"getHighWord",Y),t(Tt,"getLowWord",(function(t){return ot[0]=t,at[st]})),t(Tt,"normalize",ut),t(Tt,"setHighWord",(function(t,n){return lt[0]=t,dt[mt]=n>>>0,lt[0]})),t(Tt,"setLowWord",(function(t,n){return ht[0]=t,gt[vt]=n>>>0,ht[0]})),t(Tt,"signbit",(function(t){return!!(Y(t)>>>31)})),t(Tt,"toBinaryString",(function(t){var n,r,e,i,s,o,a;if(r=t<0||H(t)?"1":"0",t===y||t===I)return r+(i=E("1",11))+(e=E("0",52));if(S(t))return r+(i=E("1",11))+(e="1"+E("0",51));if(0===t)return r+(i=E("0",11))+(e=E("0",52));if(o=(t=d(t))-(s=c(t)),s=pt(s),o=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>54));e++);return n}(o),s)i=s.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}i=-n}return e=s+o,i<0?(i<=-x&&(n=x-1),e=e.substring(n)):e=e.substring(1),i=pt(i+x),r+(i=L(i,11,"0"))+(e=T(e,52,"0").substring(0,52))})),t(Tt,"float64ToFloat32",M),t(Tt,"float64ToInt32",(function(t){return 0|t})),t(Tt,"float64ToInt64Bytes",ct),t(Tt,"float64ToUint32",yt),t(Tt,"toWords",Ht);var Lt={};function Et(t){return t>>>0}t(Lt,"base",Tt),t(Lt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return y;if("-Infinity"===n.value)return I}return n})),t(Lt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===y?{type:"float64",value:"+Infinity"}:t===I?{type:"float64",value:"-Infinity"}:t}));var Ot={};t(Ot,"int32ToUint32",Et);var Vt={};t(Vt,"base",Ot);var qt={};t(qt,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t(qt,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,8,"0")}));var Gt={};t(Gt,"base",qt);var kt={};t(kt,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(kt,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,16,"0")}));var zt={};t(zt,"base",kt);var Mt=Et(31);var Ft=Et(31);var Jt={};t(Jt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return yt(n)})),t(Jt,"rotl32",(function(t,n){return Et(t<<(n&=Mt)|t>>>(-n&Mt))})),t(Jt,"rotr32",(function(t,n){return Et(t>>>(n&=Ft)|t<<(-n&Ft))})),t(Jt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,32,"0")})),t(Jt,"uint32ToInt32",(function(t){return 0|t}));var At={};t(At,"base",Jt);var Ct={};t(Ct,"Number",O),t(Ct,"float32",P),t(Ct,"float64",Lt),t(Ct,"int32",Vt),t(Ct,"uint8",Gt),t(Ct,"uint16",zt),t(Ct,"uint32",At);export{O as Number,Ct as default,P as float32,Lt as float64,Vt as int32,zt as uint16,At as uint32,Gt as uint8};
//# sourceMappingURL=index.mjs.map
