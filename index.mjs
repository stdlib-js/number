// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";var S=Number,H=new n(1),T=new r(H.buffer);function L(t){return H[0]=t,T[0]}var E="function"==typeof Math.fround?Math.fround:null,O=new n(1);var V="function"==typeof E?E:function(t){return O[0]=t,O[0]};var q=new r(1),G=new n(q.buffer);function k(t,n,r,e){return t!=t||t===i||t===s?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<u?(t=V(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function z(t){return k(t,[0,0],1,0)}f(z,"assign",k);function M(t){for(var n,r="";t>0;)r=(n=t/2)===(t=d(n))?"0"+r:"1"+r;return r}var F={};t(F,"exponentf",(function(t){var n=L(t);return(n=(2139095040&n)>>>23)-e})),t(F,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?i:s:NaN;r+=1}return V(n*r*o(2,f))})),t(F,"fromWordf",(function(t){return q[0]=t,G[0]})),t(F,"normalizef",z),t(F,"signbitf",(function(t){return!!(L(t)>>>31)})),t(F,"significandf",(function(t){return 8388607&L(t)})),t(F,"toBinaryStringf",(function(t){var n,r,o,a,f,u,l;if(r=t<0||1/t===s?"1":"0",t===i||t===s)return r+(a=v("1",8))+(o=v("0",23));if(t!=t)return r+(a=v("1",8))+(o="1"+v("0",22));if(0===t)return r+(a=v("0",8))+(o=v("0",23));if(u=(t=m(t))-(f=d(t)),f=M(f),u=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>24));e++);return n}(u),f)a=f.length-1;else{for(l=0;l<u.length;l++)if("1"===u[l]){n=l+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=M(a+e),r+(a=h(a,8,"0"))+(o=g(o,23,"0").substring(0,23))})),t(F,"float32ToInt32",(function(t){return 0|t})),t(F,"float32ToUint32",(function(t){return t>>>0})),t(F,"toWordf",L);var J={};t(J,"base",F);var A=!0===p?1:0,C=new c(1),D=new r(C.buffer);function K(t){return C[0]=t,D[A]}var P,Q,R=new x(8);!0===p?(P=1,Q=0):(P=0,Q=1);var X={HIGH:P,LOW:Q},Y=new c(1),Z=new r(Y.buffer),$=X.HIGH,_=X.LOW;var tt=!0===p?0:1,nt=new c(1),rt=new r(nt.buffer);function et(t,n,r,e){return B(t)||N(t)?(n[e]=t,n[e+r]=0,n):0!==t&&m(t)<U?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function it(t){return et(t,[0,0],1,0)}f(it,"assign",et);var st=!0===p?1:0,ot=new c(1),at=new r(ot.buffer);var ft=!0===p?0:1,ut=new c(1),lt=new r(ut.buffer);function mt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=d(n))?"0"+r:"1"+r;return r}function dt(t){var n,r,e,i;return n=new x(8),0===t||(i=(4294967295&t)>>>0,e=d(t/4294967296),r=new I(n.buffer),p?(r.setUint32(0,i,p),r.setUint32(4,e,p)):(r.setUint32(0,e,p),r.setUint32(4,i,p))),n}var gt,ht,vt=new x(8),ct=new I(vt.buffer);function pt(t){return t>>>0}f(dt,"assign",(function(t,n,r,e){var i,s,o;if(0===t){for(o=0;o<vt.length;o++)n[e]=0,e+=r;return n}for(s=(4294967295&t)>>>0,i=d(t/4294967296),p?(ct.setUint32(0,s,p),ct.setUint32(4,i,p)):(ct.setUint32(0,i,p),ct.setUint32(4,s,p)),o=0;o<vt.length;o++)n[e]=vt[o],e+=r;return n})),!0===p?(gt=1,ht=0):(gt=0,ht=1);var jt={HIGH:gt,LOW:ht},bt=new c(1),wt=new r(bt.buffer),yt=jt.HIGH,xt=jt.LOW;function It(t,n,r,e){return bt[0]=t,n[e]=wt[yt],n[e+r]=wt[xt],n}function Ut(t){return It(t,[0,0],1,0)}f(Ut,"assign",It);var Nt={};t(Nt,"exponent",(function(t){var n=K(t);return(n=(n&j)>>>20)-b|0})),t(Nt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-b,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-b){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===b+1)return 0===r?1===n?w:y:NaN;r+=1}return n*r*o(2,e)})),t(Nt,"fromInt64Bytes",(function(t,n,r){var e,i,s,o,a;if(1===n)o=t;else{for(o=R,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new I(o.buffer,o.byteOffset,o.byteLength),p?(s=e.getInt32(r,p),i=e.getInt32(r+4,p)):(i=e.getInt32(r,p),s=e.getInt32(r+4,p)),s<0&&(s+=4294967296),4294967296*i+s})),t(Nt,"fromWords",(function(t,n){return Z[$]=t,Z[_]=n,Y[0]})),t(Nt,"getHighWord",K),t(Nt,"getLowWord",(function(t){return nt[0]=t,rt[tt]})),t(Nt,"normalize",it),t(Nt,"setHighWord",(function(t,n){return ot[0]=t,at[st]=n>>>0,ot[0]})),t(Nt,"setLowWord",(function(t,n){return ut[0]=t,lt[ft]=n>>>0,ut[0]})),t(Nt,"signbit",(function(t){return!!(K(t)>>>31)})),t(Nt,"toBinaryString",(function(t){var n,r,e,i,s,o,a;if(r=t<0||W(t)?"1":"0",t===w||t===y)return r+(i=v("1",11))+(e=v("0",52));if(B(t))return r+(i=v("1",11))+(e="1"+v("0",51));if(0===t)return r+(i=v("0",11))+(e=v("0",52));if(o=(t=m(t))-(s=d(t)),s=mt(s),o=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>54));e++);return n}(o),s)i=s.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}i=-n}return e=s+o,i<0?(i<=-b&&(n=b-1),e=e.substring(n)):e=e.substring(1),i=mt(i+b),r+(i=h(i,11,"0"))+(e=g(e,52,"0").substring(0,52))})),t(Nt,"float64ToFloat32",V),t(Nt,"float64ToInt32",(function(t){return 0|t})),t(Nt,"float64ToInt64Bytes",dt),t(Nt,"float64ToUint32",pt),t(Nt,"toWords",Ut);var Bt={};function Wt(t){return t>>>0}t(Bt,"base",Nt),t(Bt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return w;if("-Infinity"===n.value)return y}return n})),t(Bt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===w?{type:"float64",value:"+Infinity"}:t===y?{type:"float64",value:"-Infinity"}:t}));var St={};t(St,"int32ToUint32",Wt);var Ht={};t(Ht,"base",St);var Tt={};t(Tt,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t(Tt,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,8,"0")}));var Lt={};t(Lt,"base",Tt);var Et={};t(Et,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(Et,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,16,"0")}));var Ot={};t(Ot,"base",Et);var Vt=Wt(31);var qt=Wt(31);var Gt={};t(Gt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return pt(n)})),t(Gt,"rotl32",(function(t,n){return Wt(t<<(n&=Vt)|t>>>(-n&Vt))})),t(Gt,"rotr32",(function(t,n){return Wt(t>>>(n&=qt)|t<<(-n&qt))})),t(Gt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,32,"0")})),t(Gt,"uint32ToInt32",(function(t){return 0|t}));var kt={};t(kt,"base",Gt);var zt={};t(zt,"Number",S),t(zt,"float32",J),t(zt,"float64",Bt),t(zt,"int32",Ht),t(zt,"uint8",Lt),t(zt,"uint16",Ot),t(zt,"uint32",kt);export{S as Number,zt as default,J as float32,Bt as float64,Ht as int32,Ot as uint16,kt as uint32,Lt as uint8};
//# sourceMappingURL=index.mjs.map