// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.1-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.2.1-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.2.1-esm/index.mjs";var E=Number;var O={};t(O,"isSameValuef",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(O,"isSameValueZerof",(function(t,n){return t===n||t!=t&&n!=n}));var q=new n(1),G=new r(q.buffer);function k(t){return q[0]=t,G[0]}var z="function"==typeof Math.fround?Math.fround:null,M=new n(1);var Z="function"==typeof z?z:function(t){return M[0]=t,M[0]};var F=new r(1),J=new n(F.buffer);var A=8388608;function C(t,n,r,e){return t!=t||t===i||t===s?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<u?(t=Z(t*A),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function D(t){return C(t,[0,0],1,0)}f(D,"assign",C);function K(t){for(var n,r="";t>0;)r=(n=t/2)===(t=c(n))?"0"+r:"1"+r;return r}var P=149,Q=24;var R={};t(R,"assert",O),t(R,"exponentf",(function(t){var n=k(t);return(n=(2139095040&n)>>>23)-e})),t(R,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?i:s:NaN;r+=1}return Z(n*r*o(2,f))})),t(R,"fromWordf",(function(t){return F[0]=t,J[0]})),t(R,"normalizef",D),t(R,"signbitf",(function(t){return!!(k(t)>>>31)})),t(R,"significandf",(function(t){return 8388607&k(t)})),t(R,"toBinaryStringf",(function(t){var n,r,o,a,f,u,l;if(r=t<0||1/t===s?"1":"0",t===i||t===s)return r+(a=g("1",8))+(o=g("0",23));if(t!=t)return r+(a=g("1",8))+(o="1"+g("0",22));if(0===t)return r+(a=g("0",8))+(o=g("0",23));if(u=(t=m(t))-(f=d(t)),f=K(f),u=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=P,e=0;e<P&&((r=2*t)>=1?(t=r-1,n+="1",i===P&&(i=e)):(t=r,n+="0"),!(1===r||e-i>Q));e++);return n}(u),f)a=f.length-1;else{for(l=0;l<u.length;l++)if("1"===u[l]){n=l+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=K(a+e),r+(a=h(a,8,"0"))+(o=v(o,23,"0").substring(0,23))})),t(R,"float32ToInt32",(function(t){return 0|t})),t(R,"float32ToUint32",(function(t){return t>>>0})),t(R,"toWordf",k);var X={};t(X,"base",R);var Y={};t(Y,"isSameValue",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(Y,"isSameValueZero",(function(t,n){return t===n||t!=t&&n!=n}));var $=!0===j?1:0,_=new p(1),tt=new r(_.buffer);function nt(t){return _[0]=t,tt[$]}var rt,et,it=4294967296,st=new U(8);!0===j?(rt=1,et=0):(rt=0,et=1);var ot={HIGH:rt,LOW:et},at=new p(1),ft=new r(at.buffer),ut=ot.HIGH,lt=ot.LOW;var mt=!0===j?0:1,dt=new p(1),vt=new r(dt.buffer);var ht=4503599627370496;function gt(t,n,r,e){return W(t)||B(t)?(n[e]=t,n[e+r]=0,n):0!==t&&H(t)<N?(n[e]=t*ht,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function ct(t){return gt(t,[0,0],1,0)}f(ct,"assign",gt);var pt=!0===j?1:0,jt=new p(1),bt=new r(jt.buffer);var wt=!0===j?0:1,xt=new p(1),yt=new r(xt.buffer);function It(t){for(var n,r="";t>0;)r=(n=t/2)===(t=c(n))?"0"+r:"1"+r;return r}var Ut=1075,St=54;function Nt(t){var n,r,e,i;return n=new U(8),0===t||(i=(4294967295&t)>>>0,e=d(t/4294967296),r=new S(n.buffer),j?(r.setUint32(0,i,j),r.setUint32(4,e,j)):(r.setUint32(0,e,j),r.setUint32(4,i,j))),n}var Bt,Wt,Ht=new U(8),Vt=new S(Ht.buffer);function Tt(t){return t>>>0}f(Nt,"assign",(function(t,n,r,e){var i,s,o;if(0===t){for(o=0;o<Ht.length;o++)n[e]=0,e+=r;return n}for(s=(4294967295&t)>>>0,i=c(t/4294967296),j?(Vt.setUint32(0,s,j),Vt.setUint32(4,i,j)):(Vt.setUint32(0,i,j),Vt.setUint32(4,s,j)),o=0;o<Ht.length;o++)n[e]=Ht[o],e+=r;return n})),!0===T?(Bt=1,Wt=0):(Bt=0,Wt=1);var Lt={HIGH:Bt,LOW:Wt},Et=new p(1),Ot=new r(Et.buffer),qt=Lt.HIGH,Gt=Lt.LOW;function kt(t,n,r,e){return Et[0]=t,n[e]=Ot[qt],n[e+r]=Ot[Gt],n}function zt(t){return kt(t,[0,0],1,0)}f(zt,"assign",kt);var Mt={};t(Mt,"assert",Y),t(Mt,"exponent",(function(t){var n=nt(t);return(n=(n&b)>>>20)-w|0})),t(Mt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-I,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-I){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===I+1)return 0===r?1===n?x:y:NaN;r+=1}return n*r*o(2,e)})),t(Mt,"fromInt64Bytes",(function(t,n,r){var e,i,s,o,a;if(1===n)o=t;else{for(o=st,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new S(o.buffer,o.byteOffset,o.byteLength),j?(s=e.getInt32(r,j),i=e.getInt32(r+4,j)):(i=e.getInt32(r,j),s=e.getInt32(r+4,j)),s<0&&(s+=it),i*it+s})),t(Mt,"fromWords",(function(t,n){return ft[ut]=t,ft[lt]=n,at[0]})),t(Mt,"getHighWord",nt),t(Mt,"getLowWord",(function(t){return dt[0]=t,vt[mt]})),t(Mt,"normalize",ct),t(Mt,"setHighWord",(function(t,n){return jt[0]=t,bt[pt]=n>>>0,jt[0]})),t(Mt,"setLowWord",(function(t,n){return xt[0]=t,yt[wt]=n>>>0,xt[0]})),t(Mt,"signbit",(function(t){return!!(nt(t)>>>31)})),t(Mt,"toBinaryString",(function(t){var n,r,e,i,s,o,a;if(r=t<0||V(t)?"1":"0",t===x||t===y)return r+(i=g("1",11))+(e=g("0",52));if(W(t))return r+(i=g("1",11))+(e="1"+g("0",51));if(0===t)return r+(i=g("0",11))+(e=g("0",52));if(o=(t=H(t))-(s=d(t)),s=It(s),o=function(t){var n,r,e,i;if(n="",0===t)return n;for(i=Ut,e=0;e<Ut&&((r=2*t)>=1?(t=r-1,n+="1",i===Ut&&(i=e)):(t=r,n+="0"),!(1===r||e-i>St));e++);return n}(o),s)i=s.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}i=-n}return e=s+o,i<0?(i<=-w&&(n=w-1),e=e.substring(n)):e=e.substring(1),i=It(i+w),r+(i=h(i,11,"0"))+(e=v(e,52,"0").substring(0,52))})),t(Mt,"float64ToFloat32",Z),t(Mt,"float64ToInt32",(function(t){return 0|t})),t(Mt,"float64ToInt64Bytes",Nt),t(Mt,"float64ToUint32",Tt),t(Mt,"toWords",zt);var Zt={};function Ft(t){return t>>>0}t(Zt,"base",Mt),t(Zt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return x;if("-Infinity"===n.value)return y}return n})),t(Zt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===x?{type:"float64",value:"+Infinity"}:t===y?{type:"float64",value:"-Infinity"}:t}));var Jt={};t(Jt,"int32ToUint32",Ft);var At={};t(At,"base",Jt);var Ct=8;var Dt={};t(Dt,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t(Dt,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=Ct;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=h(n,8,"0")}));var Kt={};t(Kt,"base",Dt);var Pt=16;var Qt={};t(Qt,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,16-r-1));return n})),t(Qt,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=Pt;t>0&&n;)e=(r=t/2)===(t=c(r))?"0"+e:"1"+e,n-=1;return e}(t),n=L(n,16,"0")}));var Rt={};t(Rt,"base",Qt);var Xt=Ft(31);var Yt=Ft(31);var $t=32;var _t={};t(_t,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return Tt(n)})),t(_t,"rotl32",(function(t,n){return Ft(t<<(n&=Xt)|t>>>(-n&Xt))})),t(_t,"rotr32",(function(t,n){return Ft(t>>>(n&=Yt)|t<<(-n&Yt))})),t(_t,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=$t;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=L(n,32,"0")})),t(_t,"uint32ToInt32",(function(t){return 0|t}));var tn={};t(tn,"base",_t);var nn={};t(nn,"Number",E),t(nn,"float32",X),t(nn,"float64",Zt),t(nn,"int32",At),t(nn,"uint8",Kt),t(nn,"uint16",Rt),t(nn,"uint32",tn);export{E as Number,nn as default,X as float32,Zt as float64,At as int32,Rt as uint16,tn as uint32,Kt as uint8};
//# sourceMappingURL=index.mjs.map
