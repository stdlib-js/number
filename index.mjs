// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-smallest-normal@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-exponent-mask@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@v0.2.2-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.2.2-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-infinite@v0.2.2-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import W from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-little-endian@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/array-dataview@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";var Z=Number;var F={};t(F,"isSameValuef",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(F,"isSameValueZerof",(function(t,n){return t===n||t!=t&&n!=n}));var J=new n(1),A=new r(J.buffer);function C(t){return J[0]=t,A[0]}var D="function"==typeof Math.fround?Math.fround:null,K=new n(1);var P="function"==typeof D?D:function(t){return K[0]=t,K[0]};var Q=new r(1),R=new n(Q.buffer);var X=8388608;function Y(t,n,r,e){return t!=t||t===s||t===i?(n[e]=t,n[e+r]=0,n):0!==t&&m(t)<u?(t=P(t*X),n[e]=t,n[e+r]=-23,n):(n[e]=t,n[e+r]=0,n)}function $(t){return Y(t,[0,0],1,0)}f($,"assign",Y);function _(t){for(var n,r="";t>0;)r=(n=t/2)===(t=d(n))?"0"+r:"1"+r;return r}var tt=149,nt=24;var rt={};t(rt,"assert",F),t(rt,"exponentf",(function(t){var n=C(t);return(n=(2139095040&n)>>>23)-e})),t(rt,"fromBinaryStringf",(function(t){var n,r,f;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));if(n="1"===t[0]?-1:1,f=parseInt(t.substring(1,9),2)-e,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(9)),f===-e){if(0===r)return 1===n?0:-0;f=-(e-1)}else{if(f===e+1)return 0===r?1===n?s:i:NaN;r+=1}return P(n*r*o(2,f))})),t(rt,"fromWordf",(function(t){return Q[0]=t,R[0]})),t(rt,"normalizef",$),t(rt,"signbitf",(function(t){return!!(C(t)>>>31)})),t(rt,"significandf",(function(t){return 8388607&C(t)})),t(rt,"toBinaryStringf",(function(t){var n,r,o,a,f,u,m;if(r=t<0||1/t===i?"1":"0",t===s||t===i)return r+(a=p("1",8))+(o=p("0",23));if(t!=t)return r+(a=p("1",8))+(o="1"+p("0",22));if(0===t)return r+(a=p("0",8))+(o=p("0",23));if(u=(t=l(t))-(f=d(t)),f=_(f),u=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=tt,e=0;e<tt&&((r=2*t)>=1?(t=r-1,n+="1",s===tt&&(s=e)):(t=r,n+="0"),!(1===r||e-s>nt));e++);return n}(u),f)a=f.length-1;else{for(m=0;m<u.length;m++)if("1"===u[m]){n=m+1;break}a=-n}return o=f+u,a<0?(a<=-e&&(n=e-1),o=o.substring(n)):o=o.substring(1),a=_(a+e),r+(a=h(a,8,"0"))+(o=v(o,23,"0").substring(0,23))})),t(rt,"float32ToInt32",(function(t){return 0|t})),t(rt,"float32ToUint32",(function(t){return t>>>0})),t(rt,"toWordf",C);var et={};t(et,"base",rt);var st={};t(st,"isSameValue",(function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n})),t(st,"isSameValueZero",(function(t,n){return t===n||t!=t&&n!=n}));var it=!0===g?1:0,ot=new j(1),at=new r(ot.buffer);function ft(t){return ot[0]=t,at[it]}var ut,mt,lt=4294967296,dt=new y(8);!0===g?(ut=1,mt=0):(ut=0,mt=1);var vt={HIGH:ut,LOW:mt},ht=new j(1),pt=new r(ht.buffer),jt=vt.HIGH,gt=vt.LOW;var ct=!0===g?0:1,bt=new U(1),xt=new r(bt.buffer);var wt=4503599627370496;function yt(t,n,r,e){return B(t)||N(t)?(n[e]=t,n[e+r]=0,n):0!==t&&l(t)<S?(n[e]=t*wt,n[e+r]=-52,n):(n[e]=t,n[e+r]=0,n)}function It(t){return yt(t,[0,0],1,0)}f(It,"assign",yt);var Ut=!0===g?1:0,St=new j(1),Nt=new r(St.buffer);var Bt=!0===g?0:1,Wt=new j(1),Ht=new r(Wt.buffer);function Vt(t){for(var n,r="";t>0;)r=(n=t/2)===(t=d(n))?"0"+r:"1"+r;return r}var Tt=1075,Lt=54;function Et(t){var n,r,e,s;return n=new k(8),0===t||(s=(4294967295&t)>>>0,e=L(t/4294967296),r=new z(n.buffer),G?(r.setUint32(0,s,G),r.setUint32(4,e,G)):(r.setUint32(0,e,G),r.setUint32(4,s,G))),n}var Ot,qt,Gt=new k(8),kt=new z(Gt.buffer);function zt(t){return t>>>0}f(Et,"assign",(function(t,n,r,e){var s,i,o;if(0===t){for(o=0;o<Gt.length;o++)n[e]=0,e+=r;return n}for(i=(4294967295&t)>>>0,s=L(t/4294967296),G?(kt.setUint32(0,i,G),kt.setUint32(4,s,G)):(kt.setUint32(0,s,G),kt.setUint32(4,i,G)),o=0;o<Gt.length;o++)n[e]=Gt[o],e+=r;return n})),!0===g?(Ot=1,qt=0):(Ot=0,qt=1);var Mt={HIGH:Ot,LOW:qt},Zt=new U(1),Ft=new r(Zt.buffer),Jt=Mt.HIGH,At=Mt.LOW;function Ct(t,n,r,e){return Zt[0]=t,n[e]=Ft[Jt],n[e+r]=Ft[At],n}function Dt(t){return Ct(t,[0,0],1,0)}f(Dt,"assign",Ct);var Kt={};t(Kt,"assert",st),t(Kt,"exponent",(function(t){var n=ft(t);return(n=(n&c)>>>20)-b|0})),t(Kt,"fromBinaryString",(function(t){var n,r,e;if(64!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,t));if(n="1"===t[0]?-1:1,e=parseInt(t.substring(1,12),2)-b,r=function(t){var n,r=0;for(n=0;n<t.length;n++)"1"===t[n]&&(r+=o(2,-(n+1)));return r}(t.substring(12)),e===-b){if(0===r)return 1===n?0:-0;e=-1022}else{if(e===b+1)return 0===r?1===n?x:w:NaN;r+=1}return n*r*o(2,e)})),t(Kt,"fromInt64Bytes",(function(t,n,r){var e,s,i,o,a;if(1===n)o=t;else{for(o=dt,a=0;a<8;a++)o[a]=t[r],r+=n;r=0}return e=new I(o.buffer,o.byteOffset,o.byteLength),g?(i=e.getInt32(r,g),s=e.getInt32(r+4,g)):(s=e.getInt32(r,g),i=e.getInt32(r+4,g)),i<0&&(i+=lt),s*lt+i})),t(Kt,"fromWords",(function(t,n){return pt[jt]=t,pt[gt]=n,ht[0]})),t(Kt,"getHighWord",ft),t(Kt,"getLowWord",(function(t){return bt[0]=t,xt[ct]})),t(Kt,"normalize",It),t(Kt,"setHighWord",(function(t,n){return St[0]=t,Nt[Ut]=n>>>0,St[0]})),t(Kt,"setLowWord",(function(t,n){return Wt[0]=t,Ht[Bt]=n>>>0,Wt[0]})),t(Kt,"signbit",(function(t){return!!(ft(t)>>>31)})),t(Kt,"toBinaryString",(function(t){var n,r,e,s,i,o,a;if(r=t<0||V(t)?"1":"0",t===x||t===w)return r+(s=q("1",11))+(e=q("0",52));if(H(t))return r+(s=q("1",11))+(e="1"+q("0",51));if(0===t)return r+(s=q("0",11))+(e=q("0",52));if(o=(t=T(t))-(i=L(t)),i=Vt(i),o=function(t){var n,r,e,s;if(n="",0===t)return n;for(s=Tt,e=0;e<Tt&&((r=2*t)>=1?(t=r-1,n+="1",s===Tt&&(s=e)):(t=r,n+="0"),!(1===r||e-s>Lt));e++);return n}(o),i)s=i.length-1;else{for(a=0;a<o.length;a++)if("1"===o[a]){n=a+1;break}s=-n}return e=i+o,s<0?(s<=-W&&(n=W-1),e=e.substring(n)):e=e.substring(1),s=Vt(s+W),r+(s=O(s,11,"0"))+(e=E(e,52,"0").substring(0,52))})),t(Kt,"float64ToFloat32",P),t(Kt,"float64ToInt32",(function(t){return 0|t})),t(Kt,"float64ToInt64Bytes",Et),t(Kt,"float64ToUint32",zt),t(Kt,"toWords",Dt);var Pt={};function Qt(t){return t>>>0}t(Pt,"base",Kt),t(Pt,"reviver",(function(t,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return x;if("-Infinity"===n.value)return w}return n})),t(Pt,"toJSON",(function(t){if("number"!=typeof t)throw new TypeError(a("invalid argument. Must provide a number. Value: `%s`.",t));return t!=t?{type:"float64",value:"NaN"}:t===x?{type:"float64",value:"+Infinity"}:t===w?{type:"float64",value:"-Infinity"}:t}));var Rt={};t(Rt,"int32ToUint32",Qt);var Xt={};t(Xt,"base",Rt);var Yt=8;var $t={};t($t,"fromBinaryStringUint8",(function(t){var n,r;if(8!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,8-r-1));return n})),t($t,"toBinaryStringUint8",(function(t){var n;return n=function(t){var n,r,e="";for(n=Yt;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,8,"0")}));var _t={};t(_t,"base",$t);var tn=16;var nn={};t(nn,"fromBinaryStringUint16",(function(t){var n,r;if(16!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=M(2,16-r-1));return n})),t(nn,"toBinaryStringUint16",(function(t){var n;return n=function(t){var n,r,e="";for(n=tn;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,16,"0")}));var rn={};t(rn,"base",nn);var en=Qt(31);var sn=Qt(31);var on=32;var an={};t(an,"fromBinaryStringUint32",(function(t){var n,r;if(32!==t.length)throw new Error(a("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,t));for(n=0,r=0;r<t.length;r++)"1"===t[r]&&(n+=o(2,32-r-1));return zt(n)})),t(an,"rotl32",(function(t,n){return Qt(t<<(n&=en)|t>>>(-n&en))})),t(an,"rotr32",(function(t,n){return Qt(t>>>(n&=sn)|t<<(-n&sn))})),t(an,"toBinaryStringUint32",(function(t){var n;return n=function(t){var n,r,e="";for(n=on;t>0&&n;)e=(r=t/2)===(t=d(r))?"0"+e:"1"+e,n-=1;return e}(t),n=O(n,32,"0")})),t(an,"uint32ToInt32",(function(t){return 0|t}));var fn={};t(fn,"base",an);var un={};t(un,"Number",Z),t(un,"float32",et),t(un,"float64",Pt),t(un,"int32",Xt),t(un,"uint8",_t),t(un,"uint16",rn),t(un,"uint32",fn);export{Z as Number,un as default,et as float32,Pt as float64,Xt as int32,rn as uint16,fn as uint32,_t as uint8};
//# sourceMappingURL=index.mjs.map
