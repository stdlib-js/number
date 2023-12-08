// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.1.1-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.1.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.1.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.1-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.1.0-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.1.1-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.1.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.1-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.1.1-esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";var G=Number,k=new n(1),z=new r(k.buffer);function M(t){return k[0]=t,z[0]}var F="function"==typeof Math.fround?Math.fround:null,J=new f(1);var A="function"==typeof F?F:function(t){return J[0]=t,J[0]};var C=new r(1),D=new n(C.buffer);function K(t,n,r,e){return t!=t||t===i||t===s?(n[e]=t,n[e+r]=0,n):0!==t&&d(t)<l?(t=A(8388608*t),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function P(t){return K(t,[0,0],1,0)}m(P,"assign",K);function Q(t){for(var n,r="";t>0;)r=(n=t/2)===(t=c(n))?"0"+r:"1"+r;return r}var R={};t(R,"exponentf",(function(t){var n=M(t);return(n=(2139095040&n)>>>23)-e})),t(R,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=u(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?i:s:NaN;r+=1}return A(n*r*o(2,f))})),t(R,"fromWordf",(function(t){return C[0]=t,D[0]})),t(R,"normalizef",P),t(R,"signbitf",(function(t){return!!(M(t)>>>31)})),t(R,"significandf",(function(t){return 8388607&M(t)})),t(R,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===s?"1":"0",t===i||t===s)return r+(a=j("1",8))+(o=j("0",23));if(t!=t)return r+(a=j("1",8))+(o="1"+j("0",22));if(0===t)return r+(a=j("0",8))+(o=j("0",23));if(u=(t=v(t))-(f=h(t)),f=Q(f),u=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=149,e=0;e<149&&((r=2*t)>=1?(t=r-1,n+="1",149===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>24));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=Q(a+e),r+(a=g(a,8,"0"))+(o=p(o,23,"0").substring(0,23))})),t(R,"float32ToInt32",(function(t){return 0|t})),t(R,"float32ToUint32",(function(t){return t>>>0})),t(R,"toWordf",M);var X={};t(X,"base",R);var Y=!0===x?1:0,Z=new b(1),$=new r(Z.buffer);function _(t){return Z[0]=t,$[Y]}var tt,nt,rt=new B(8);!0===x?(tt=1,nt=0):(tt=0,nt=1);var et={HIGH:tt,LOW:nt},it=new b(1),st=new r(it.buffer),ot=et.HIGH,at=et.LOW;var ft=!0===x?0:1,ut=new b(1),mt=new r(ut.buffer);function lt(t,n,r,e){return T(t)||H(t)?(n[e]=t,n[e+r]=0,n):0!==t&&v(t)<S?(n[e]=4503599627370496*t,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function dt(t){return lt(t,[0,0],1,0)}m(dt,"assign",lt);var vt=!0===x?1:0,ht=new b(1),pt=new L(ht.buffer);var gt=!0===x?0:1,jt=new b(1),ct=new r(jt.buffer);function bt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=c(n))?"0"+r:"1"+r;return r}function xt(t){var n,r,e,i;return n=new V(8),0===t||(i=(4294967295&t)>>>0,e=c(t/4294967296),r=new W(n.buffer),x?(r.setUint32(0,i,x),r.setUint32(4,e,x)):(r.setUint32(0,e,x),r.setUint32(4,i,x))),n}var wt,yt,It=new B(8),Ut=new W(It.buffer);function Nt(t){return t>>>0}m(xt,"assign",(function(t,n,r,e){var i,s,o;if(0===t){for(o=0;o<It.length;o++)n[e]=0,e+=r;return n}for(s=(4294967295&t)>>>0,i=c(t/4294967296),N?(Ut.setUint32(0,s,N),Ut.setUint32(4,i,N)):(Ut.setUint32(0,i,N),Ut.setUint32(4,s,N)),o=0;o<It.length;o++)n[e]=It[o],e+=r;return n})),!0===x?(wt=1,yt=0):(wt=0,yt=1);var Bt={HIGH:wt,LOW:yt},Wt=new q(1),St=new L(Wt.buffer),Ht=Bt.HIGH,Tt=Bt.LOW;function Lt(t,n,r,e){return Wt[0]=t,n[e]=St[Ht],n[e+r]=St[Tt],n}function Et(t){return Lt(t,[0,0],1,0)}m(Et,"assign",Lt);var Ot={};t(Ot,"exponent",(function(t){var n=_(t);return(n=(n&w)>>>20)-y|0})),t(Ot,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-y,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=u(2,-(n+1)));return r}(t.substring(12)),e===-y){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===y+1)return 0===r?1===n?I:U:NaN;r+=1}return n*r*u(2,e)})),t(Ot,"fromInt64Bytes",(function(t,n,r){var e,i,s,o,a;if(1===n)o=t;else{for(o=rt,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new W(o.buffer,o.byteOffset,o.byteLength),N?(s=e.getInt32(r,N),i=e.getInt32(r+4,N)):(i=e.getInt32(r,N),s=e.getInt32(r+4,N)),s<0&&(s+=4294967296),4294967296*i+s})),t(Ot,"fromWords",(function(t,n){return st[ot]=t,st[at]=n,it[0]})),t(Ot,"getHighWord",_),t(Ot,"getLowWord",(function(t){return ut[0]=t,mt[ft]})),t(Ot,"normalize",dt),t(Ot,"setHighWord",(function(t,n){return ht[0]=t,pt[vt]=n>>>0,ht[0]})),t(Ot,"setLowWord",(function(t,n){return jt[0]=t,ct[gt]=n>>>0,jt[0]})),t(Ot,"signbit",(function(t){return!!(_(t)>>>31)})),t(Ot,"toBinaryString",(function(t){var n,r,e,i,s,o,a;if(r=t<0||E(t)?"1":"0",t===I||t===U)return r+(i=j("1",11))+(e=j("0",52));if(T(t))return r+(i=j("1",11))+(e="1"+j("0",51));if(0===t)return r+(i=j("0",11))+(e=j("0",52));if(o=(t=v(t))-(s=c(t)),s=bt(s),o=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=1075,e=0;e<1075&&((r=2*t)>=1?(t=r-1,n+="1",1075===i&&(i=e)):(t=r,n+="0"),!(1===r||e-i>54));e++);return n}(o),s)i=s.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}i=-n}return e=s+o,i<0?(i<=-y&&(n=y-1),e=e.substring(n)):e=e.substring(1),i=bt(i+y),r+(i=O(i,11,"0"))+(e=p(e,52,"0").substring(0,52))})),t(Ot,"float64ToFloat32",A),t(Ot,"float64ToInt32",(function(t){return 0|t})),t(Ot,"float64ToInt64Bytes",xt),t(Ot,"float64ToUint32",Nt),t(Ot,"toWords",Et);var Vt={};function qt(t){return t>>>0}t(Vt,"base",Ot),t(Vt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return I;if("-Infinity"===n.value)return U}return n})),t(Vt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===I?{type:"float64",value:"+Infinity"}:t===U?{type:"float64",value:"-Infinity"}:t}));var Gt={};t(Gt,"int32ToUint32",qt);var kt={};t(kt,"base",Gt);var zt={};t(zt,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t(zt,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=8;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,8,"0")}));var Mt={};t(Mt,"base",zt);var Ft={};t(Ft,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(Ft,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=16;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,16,"0")}));var Jt={};t(Jt,"base",Ft);var At=qt(31);var Ct=qt(31);var Dt={};t(Dt,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return Nt(n)})),t(Dt,"rotl32",(function(t,n){return qt(t<<(n&=At)|t>>>(-n&At))})),t(Dt,"rotr32",(function(t,n){return qt(t>>>(n&=Ct)|t<<(-n&Ct))})),t(Dt,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=32;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=g(n,32,"0")})),t(Dt,"uint32ToInt32",(function(t){return 0|t}));var Kt={};t(Kt,"base",Dt);var Pt={};t(Pt,"Number",G),t(Pt,"float32",X),t(Pt,"float64",Vt),t(Pt,"int32",kt),t(Pt,"uint8",Mt),t(Pt,"uint16",Jt),t(Pt,"uint32",Kt);export{G as Number,Pt as default,X as float32,Vt as float64,kt as int32,Jt as uint16,Kt as uint32,Mt as uint8};
//# sourceMappingURL=index.mjs.map
