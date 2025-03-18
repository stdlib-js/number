// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.2-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import Z from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var F=Number;var J={};t(J,"isSameValuef",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(J,"isSameValueZerof",(function(t,n){return t===n||t!=t&&n!=n}));var A=new n(1),C=new r(A.buffer);function D(t){return A[0]=t,C[0]}var K="function"==typeof Math.fround?Math.fround:null,P=new f(1);var Q="function"==typeof K?K:function(t){return P[0]=t,P[0]};var R=new r(1),X=new n(R.buffer);var Y=8388608;function $(t,n,r,e){return t!=t||t===s||t===i?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<m?(t=Q(t*Y),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function _(t){return $(t,[0,0],1,0)}u(_,"assign",$);function tt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=v(n))?"0"+r:"1"+r;return r}var nt=149,rt=24;var et={};t(et,"assert",J),t(et,"exponentf",(function(t){var n=D(t);return(n=(2139095040&n)>>>23)-e})),t(et,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?s:i:NaN;r+=1}return Q(n*r*o(2,f))})),t(et,"fromWordf",(function(t){return R[0]=t,X[0]})),t(et,"normalizef",_),t(et,"signbitf",(function(t){return!!(D(t)>>>31)})),t(et,"significandf",(function(t){return 8388607&D(t)})),t(et,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===i?"1":"0",t===s||t===i)return r+(a=j("1",8))+(o=j("0",23));if(t!=t)return r+(a=j("1",8))+(o="1"+j("0",22));if(0===t)return r+(a=j("0",8))+(o=j("0",23));if(u=(t=d(t))-(f=v(t)),f=tt(f),u=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=nt,e=0;e<nt&&((r=2*t)>=1?(t=r-1,n+="1",s===nt&&(s=e)):(t=r,n+="0"),!(1===r||e-s>rt));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=tt(a+e),r+(a=p(a,8,"0"))+(o=h(o,23,"0").substring(0,23))})),t(et,"float32ToInt32",(function(t){return 0|t})),t(et,"float32ToUint32",(function(t){return t>>>0})),t(et,"toWordf",D);var st={};t(st,"base",et);var it={};t(it,"isSameValue",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(it,"isSameValueZero",(function(t,n){return t===n||t!=t&&n!=n}));var ot=!0===c?1:0,at=new g(1),ft=new r(at.buffer);function ut(t){return at[0]=t,ft[ot]}var mt,lt,dt=4294967296,vt=new I(8);!0===c?(mt=1,lt=0):(mt=0,lt=1);var ht={HIGH:mt,LOW:lt},pt=new g(1),jt=new r(pt.buffer),gt=ht.HIGH,ct=ht.LOW;var bt=!0===c?0:1,xt=new N(1),wt=new S(xt.buffer);var yt=4503599627370496;function It(t,n,r,e){return H(t)||W(t)?(n[e]=t,n[e+r]=0,n):0!==t&&V(t)<B?(n[e]=t*yt,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function Ut(t){return It(t,[0,0],1,0)}u(Ut,"assign",It);var St=!0===c?1:0,Nt=new N(1),Bt=new S(Nt.buffer);var Wt=!0===c?0:1,Ht=new N(1),Vt=new S(Ht.buffer);function Tt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=v(n))?"0"+r:"1"+r;return r}var Lt=1075,Et=54;function Ot(t){var n,r,e,s;return n=new z(8),0===t||(s=(4294967295&t)>>>0,e=E(t/4294967296),r=new M(n.buffer),k?(r.setUint32(0,s,k),r.setUint32(4,e,k)):(r.setUint32(0,e,k),r.setUint32(4,s,k))),n}var qt,Gt,kt=new z(8),zt=new M(kt.buffer);function Mt(t){return t>>>0}u(Ot,"assign",(function(t,n,r,e){var s,i,o;if(0===t){for(o=0;o<kt.length;o++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,s=E(t/4294967296),k?(zt.setUint32(0,i,k),zt.setUint32(4,s,k)):(zt.setUint32(0,s,k),zt.setUint32(4,i,k)),o=0;o<kt.length;o++)n[e]=kt[o],e+=r;return n})),!0===c?(qt=1,Gt=0):(qt=0,Gt=1);var Zt={HIGH:qt,LOW:Gt},Ft=new N(1),Jt=new S(Ft.buffer),At=Zt.HIGH,Ct=Zt.LOW;function Dt(t,n,r,e){return Ft[0]=t,n[e]=Jt[At],n[e+r]=Jt[Ct],n}function Kt(t){return Dt(t,[0,0],1,0)}u(Kt,"assign",Dt);var Pt={};t(Pt,"assert",it),t(Pt,"exponent",(function(t){var n=ut(t);return(n=(n&b)>>>20)-x|0})),t(Pt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-x,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-x){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===x+1)return 0===r?1===n?w:y:NaN;r+=1}return n*r*o(2,e)})),t(Pt,"fromInt64Bytes",(function(t,n,r){var e,s,i,o,a;if(1===n)o=t;else{for(o=vt,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new U(o.buffer,o.byteOffset,o.byteLength),c?(i=e.getInt32(r,c),s=e.getInt32(r+4,c)):(s=e.getInt32(r,c),i=e.getInt32(r+4,c)),i<0&&(i+=dt),s*dt+i})),t(Pt,"fromWords",(function(t,n){return jt[gt]=t,jt[ct]=n,pt[0]})),t(Pt,"getHighWord",ut),t(Pt,"getLowWord",(function(t){return xt[0]=t,wt[bt]})),t(Pt,"normalize",Ut),t(Pt,"setHighWord",(function(t,n){return Nt[0]=t,Bt[St]=n>>>0,Nt[0]})),t(Pt,"setLowWord",(function(t,n){return Ht[0]=t,Vt[Wt]=n>>>0,Ht[0]})),t(Pt,"signbit",(function(t){return!!(ut(t)>>>31)})),t(Pt,"toBinaryString",(function(t){var n,r,e,s,i,o,a;if(r=t<0||L(t)?"1":"0",t===w||t===y)return r+(s=G("1",11))+(e=G("0",52));if(H(t))return r+(s=G("1",11))+(e="1"+G("0",51));if(0===t)return r+(s=G("0",11))+(e=G("0",52));if(o=(t=V(t))-(i=E(t)),i=Tt(i),o=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=Lt,e=0;e<Lt&&((r=2*t)>=1?(t=r-1,n+="1",s===Lt&&(s=e)):(t=r,n+="0"),!(1===r||e-s>Et));e++);return n}(o),i)s=i.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}s=-n}return e=i+o,s<0?(s<=-T&&(n=T-1),e=e.substring(n)):e=e.substring(1),s=Tt(s+T),r+(s=q(s,11,"0"))+(e=O(e,52,"0").substring(0,52))})),t(Pt,"float64ToFloat32",Q),t(Pt,"float64ToInt32",(function(t){return 0|t})),t(Pt,"float64ToInt64Bytes",Ot),t(Pt,"float64ToUint32",Mt),t(Pt,"toWords",Kt);var Qt={};function Rt(t){return t>>>0}t(Qt,"base",Pt),t(Qt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return w;if("-Infinity"===n.value)return y}return n})),t(Qt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===w?{type:"float64",value:"+Infinity"}:t===y?{type:"float64",value:"-Infinity"}:t}));var Xt={};t(Xt,"int32ToUint32",Rt);var Yt={};t(Yt,"base",Xt);var $t=8;var _t={};t(_t,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=Z(2,8-r-1));return n})),t(_t,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=$t;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=q(n,8,"0")}));var tn={};t(tn,"base",_t);var nn=16;var rn={};t(rn,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=Z(2,16-r-1));return n})),t(rn,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=nn;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=q(n,16,"0")}));var en={};t(en,"base",rn);var sn=Rt(31);var on=Rt(31);var an=32;var fn={};t(fn,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=Z(2,32-r-1));return Mt(n)})),t(fn,"rotl32",(function(t,n){return Rt(t<<(n&=sn)|t>>>(-n&sn))})),t(fn,"rotr32",(function(t,n){return Rt(t>>>(n&=on)|t<<(-n&on))})),t(fn,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=an;t>0&&n;)e=(r=t/2)===(t=v(r))?"0"+e:"1"+e,n-=1;return e}(t),n=q(n,32,"0")})),t(fn,"uint32ToInt32",(function(t){return 0|t}));var un={};t(un,"base",fn);var mn={};t(mn,"Number",F),t(mn,"float32",st),t(mn,"float64",Qt),t(mn,"int32",Yt),t(mn,"uint8",tn),t(mn,"uint16",en),t(mn,"uint32",un);export{F as Number,mn as default,st as float32,Qt as float64,Yt as int32,en as uint16,un as uint32,tn as uint8};
//# sourceMappingURL=index.mjs.map
