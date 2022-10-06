// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(u):e(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var n,e,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,o=parseInt(e,10),!isFinite(o)){if(!t(e))throw new Error("invalid integer. Value: "+e);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(e=(-o).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=o.toString(n),o||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):u.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,v=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,d=/\.0*e/,h=/(\..*[^0])0*e/;function _(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,h,"$1e"),e=s.call(e,d,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,p,"e+0$1"),e=s.call(e,g,"e-0$1"),r.alternate&&(e=s.call(e,y,"$1."),e=s.call(e,b,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===v.call(r.specifier)?v.call(e):l.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function O(r,n,t){var e=n-r.length;return e<0?r:r=t?r+m(e):m(e)+r}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function I(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function S(r){var n,t,e,u,a,c,l,v,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,v=0;v<r.length;v++)if(f(e=r[v]))c+=e;else{if(n=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,s=0;s<t.length;s++)switch(u=t.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,A(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=o(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!A(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(a)?String(e.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=_(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=O(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(V(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function T(r){return"string"==typeof r}function z(r){var n,t,e;if(!T(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=F(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return S.apply(null,t)}var N=Object.freeze({__proto__:null,default:z}),x=Object.prototype,k=x.toString,W=x.__defineGetter__,B=x.__defineSetter__,H=x.__lookupGetter__,L=x.__lookupSetter__;var P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,a="set"in t,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&W&&W.call(r,n,t.get),a&&B&&B.call(r,n,t.set),r};function G(r,n,t){P(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function R(r){var n=r.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var $=Number,D=R(Object.freeze({__proto__:null,default:G}));var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return M&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;var X,Y="function"==typeof Symbol?Symbol.toStringTag:"";X=C()?function(r){var n,t,e,i,u;if(null==r)return q.call(r);t=r[Y],u=Y,n=null!=(i=r)&&Z.call(i,u);try{r[Y]=void 0}catch(n){return q.call(r)}return e=q.call(r),n?r[Y]=t:delete r[Y],e}:function(r){return q.call(r)};var J=X,K="function"==typeof Float32Array;var Q=Number.POSITIVE_INFINITY,rr=Object.freeze({__proto__:null,default:Q}),nr="function"==typeof Float32Array?Float32Array:null;var tr,er="function"==typeof Float32Array?Float32Array:void 0;tr=function(){var r,n,t;if("function"!=typeof nr)return!1;try{n=new nr([1,3.14,-3.14,5e40]),t=n,r=(K&&t instanceof Float32Array||"[object Float32Array]"===J(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Q}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir=tr,ur=R(Object.freeze({__proto__:null,default:ir})),ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var fr,cr="function"==typeof Uint32Array?Uint32Array:void 0;fr=function(){var r,n,t;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr,vr,sr,pr,gr=fr,yr=R(Object.freeze({__proto__:null,default:gr}));function br(){if(pr)return sr;pr=1;var r=function(){if(vr)return lr;vr=1;var r=yr,n=new ur(1),t=new r(n.buffer);return lr=function(r){return n[0]=r,t[0]}}();return sr=r}var wr,dr,hr,_r,mr=R(Object.freeze({__proto__:null,default:127}));function Or(){if(_r)return hr;_r=1;var r=function(){if(dr)return wr;dr=1;var r=br(),n=mr;return wr=function(t){var e=r(t);return(e=(2139095040&e)>>>23)-n}}();return hr=r}var jr=new ir(1);new gr(jr.buffer)[0]=2139095040;var Ar=jr[0],Er=R(Object.freeze({__proto__:null,default:Ar})),Ir=new ir(1);new gr(Ir.buffer)[0]=4286578688;var Sr=Ir[0],Ur=R(Object.freeze({__proto__:null,default:Sr}));function Vr(r){return r!=r}var Fr=Object.freeze({__proto__:null,default:Vr}),Tr=Math.floor,zr=Object.freeze({__proto__:null,default:Tr});function Nr(r){return Tr(r)===r}function xr(r){return Nr(r/2)}function kr(r){return xr(r>0?r-1:r+1)}var Wr=Number,Br=Wr.NEGATIVE_INFINITY,Hr=Object.freeze({__proto__:null,default:Br});function Lr(r){return r===Q||r===Br}var Pr=Object.freeze({__proto__:null,default:Lr}),Gr=Math.sqrt;function Rr(r){return Math.abs(r)}var $r=Object.freeze({__proto__:null,default:Rr}),Dr="function"==typeof Float64Array;var Mr="function"==typeof Float64Array?Float64Array:null;var Cr,qr="function"==typeof Float64Array?Float64Array:void 0;Cr=function(){var r,n,t;if("function"!=typeof Mr)return!1;try{n=new Mr([1,3.14,-3.14,NaN]),t=n,r=(Dr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Zr=Cr,Xr=Object.freeze({__proto__:null,default:Zr}),Yr="function"==typeof Uint8Array;var Jr="function"==typeof Uint8Array?Uint8Array:null;var Kr,Qr="function"==typeof Uint8Array?Uint8Array:void 0;Kr=function(){var r,n,t;if("function"!=typeof Jr)return!1;try{n=new Jr(n=[1,3.14,-3.14,256,257]),t=n,r=(Yr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Qr:function(){throw new Error("not implemented")};var rn=Kr,nn=Object.freeze({__proto__:null,default:rn}),tn="function"==typeof Uint16Array;var en="function"==typeof Uint16Array?Uint16Array:null;var un,an="function"==typeof Uint16Array?Uint16Array:void 0;un=function(){var r,n,t;if("function"!=typeof en)return!1;try{n=new en(n=[1,3.14,-3.14,65536,65537]),t=n,r=(tn&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?an:function(){throw new Error("not implemented")};var on,fn={uint16:un,uint8:rn};(on=new fn.uint16(1))[0]=4660;var cn,ln,vn=52===new fn.uint8(on.buffer)[0],sn=Object.freeze({__proto__:null,default:vn});!0===vn?(cn=1,ln=0):(cn=0,ln=1);var pn={HIGH:cn,LOW:ln},gn=new Zr(1),yn=new gr(gn.buffer),bn=pn.HIGH,wn=pn.LOW;function dn(r,n){return gn[0]=n,r[0]=yn[bn],r[1]=yn[wn],r}function hn(r,n){return 1===arguments.length?dn([0,0],r):dn(r,n)}var _n=!0===vn?0:1,mn=new Zr(1),On=new gr(mn.buffer);function jn(r,n){return mn[0]=r,On[_n]=n>>>0,mn[0]}function An(r){return 0|r}var En,In,Sn=!0===vn?1:0,Un=new Zr(1),Vn=new gr(Un.buffer);function Fn(r){return Un[0]=r,Vn[Sn]}!0===vn?(En=1,In=0):(En=0,In=1);var Tn={HIGH:En,LOW:In},zn=new Zr(1),Nn=new gr(zn.buffer),xn=Tn.HIGH,kn=Tn.LOW;function Wn(r,n){return Nn[xn]=r,Nn[kn]=n,zn[0]}var Bn=[0,0];function Hn(r,n){var t,e;return hn(Bn,r),t=Bn[0],t&=2147483647,e=Fn(n),Wn(t|=e&=2147483648,Bn[1])}var Ln=!0===vn?1:0,Pn=new Zr(1),Gn=new gr(Pn.buffer);function Rn(r,n){return Pn[0]=r,Gn[Ln]=n>>>0,Pn[0]}var $n=Object.freeze({__proto__:null,default:1023});var Dn=[1,1.5],Mn=[0,.5849624872207642],Cn=[0,1.350039202129749e-8];var qn=Object.freeze({__proto__:null,default:22250738585072014e-324});function Zn(r,n){return Vr(n)||Lr(n)?(r[0]=n,r[1]=0,r):0!==n&&Rr(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Xn=Object.freeze({__proto__:null,default:2146435072});var Yn=[0,0],Jn=[0,0];function Kn(r,n){var t,e;return 0===n||0===r||Vr(r)||Lr(r)?r:(function(r,n){1===arguments.length?Zn([0,0],r):Zn(r,n)}(Yn,r),n+=Yn[1],n+=function(r){var n=Fn(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Yn[0]),n<-1074?Hn(0,r):n>1023?r<0?Br:Q:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,hn(Jn,r),t=Jn[0],t&=2148532223,e*Wn(t|=n+1023<<20,Jn[1])))}var Qn=1e300,rt=1e-300,nt=[0,0],tt=[0,0];var et,it,ut,at,ot,ft,ct,lt,vt,st,pt,gt,yt,bt,wt,dt,ht=Object.freeze({__proto__:null,default:function r(n,t){var e,i,u,a,o,f,c,l,v,s,p,g,y,b;if(Vr(n)||Vr(t))return NaN;if(hn(nt,t),o=nt[0],0===nt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Gr(n);if(-.5===t)return 1/Gr(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Lr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Rr(r)<1==(n===Q)?0:Q}(n,t)}if(hn(nt,n),a=nt[0],0===nt[1]){if(0===a)return function(r,n){return n===Br?Q:n===Q?0:n>0?kr(n)?r:0:kr(n)?Hn(Q,r):Q}(n,t);if(1===n)return 1;if(-1===n&&kr(t))return-1;if(Lr(n))return n===Br?r(-0,-t):t<0?0:Q}if(n<0&&!1===Nr(t))return(n-n)/(n-n);if(u=Rr(n),e=2147483647&a|0,i=2147483647&o|0,c=o>>>31|0,f=(f=a>>>31|0)&&kr(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(2147483647&Fn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?f*Qn*Qn:f*rt*rt;if(e>1072693248)return 0===c?f*Qn*Qn:f*rt*rt;p=function(r,n){var t,e,i,u,a,o;return t=(a=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=jn(e=(u=1.4426950216293335*i)+a,0))-u),r[0]=e,r[1]=t,r}(tt,u)}else p=function(r,n,t){var e,i,u,a,o,f,c,l,v,s,p,g,y,b,w,d,h,_,m,O,j;return _=0,t<1048576&&(_-=53,t=Fn(n*=9007199254740992)),_+=(t>>20)-1023|0,t=1072693248|(m=1048575&t|0),m<=235662?O=0:m<767610?O=1:(O=0,_+=1,t-=1048576),a=jn(i=(d=(n=Rn(n,t))-(c=Dn[O]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),f=Rn(0,e+=O<<18),w=(u=i*i)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),f=jn(f=3+(u=a*a)+(w+=(o=h*(d-a*f-a*(n-(f-c))))*(a+i)),0),y=(p=-7.028461650952758e-9*(v=jn(v=(d=a*f)+(h=o*f+(w-(f-3-u))*i),0))+.9617966939259756*(h-(v-d))+Cn[O])-((g=jn(g=(s=.9617967009544373*v)+p+(l=Mn[O])+(b=_),0))-b-l-s),r[0]=g,r[1]=y,r}(tt,u,e);if(s=(t-(l=jn(t,0)))*p[0]+t*p[1],v=l*p[0],hn(nt,g=s+v),y=An(nt[0]),b=An(nt[1]),y>=1083179008){if(0!=(y-1083179008|b))return f*Qn*Qn;if(s+8008566259537294e-32>g-v)return f*Qn*Qn}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|b))return f*rt*rt;if(s<=g-v)return f*rt*rt}return g=function(r,n,t){var e,i,u,a,o,f,c,l,v,s,p;return s=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>s+1)>>>0)&~(1048575>>(s=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-s>>>0,r<0&&(l=-l),n-=u=Rn(0,e)),r=An(r=Fn(c=1-((c=(a=.6931471824645996*(u=jn(u=t+n,0)))+(o=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-a))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Kn(c,l):Rn(c,r)}(y,v,s),f*g}}),_t=R(ht),mt=R(N);function Ot(){if(ft)return ot;ft=1;var r=function(){if(it)return et;it=1;var r="function"==typeof Math.fround?Math.fround:null;return et=r}(),n=function(){if(at)return ut;at=1;var r=new ur(1);return ut=function(n){return r[0]=n,r[0]}}();return ot="function"==typeof r?r:n}function jt(){if(st)return vt;st=1;var r=Er,n=Ur,t=mr,e=_t,i=mt,u=Ot(),a=function(){if(lt)return ct;lt=1;var r=_t;return ct=function(n){var t,e=0;for(t=0;t<n.length;t++)"1"===n[t]&&(e+=r(2,-(t+1)));return e}}();return vt=function(o){var f,c,l;if(32!==o.length)throw new Error(i("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,o));if(f="1"===o[0]?-1:1,l=parseInt(o.substring(1,9),2)-t,c=a(o.substring(9)),l===-t){if(0===c)return 1===f?0:-0;l=-(t-1)}else{if(l===t+1)return 0===c?1===f?r:n:NaN;c+=1}return u(f*c*e(2,l))}}function At(){if(dt)return wt;dt=1;var r=function(){if(bt)return yt;bt=1;var r=ur,n=new yr(1),t=new r(n.buffer);return yt=function(r){return n[0]=r,t[0]}}();return wt=r}var Et,It,St,Ut,Vt,Ft,Tt,zt,Nt,xt,kt,Wt,Bt,Ht,Lt=R(Object.freeze({__proto__:null,default:11754943508222875e-54})),Pt=R($r);function Gt(){if(It)return Et;It=1;var r=Lt,n=Er,t=Ur,e=Pt,i=Ot();return Et=function(u,a){return a!=a||a===n||a===t?(u[0]=a,u[1]=0,u):0!==a&&e(a)<r?(a=i(8388608*a),u[0]=a,u[1]=-23,u):(u[0]=a,u[1]=0,u)}}function Rt(){if(Ft)return Vt;Ft=1;var r=function(){if(Ut)return St;Ut=1;var r=Gt();return St=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},St}();return Vt=r}function $t(){if(xt)return Nt;xt=1;var r=function(){if(zt)return Tt;zt=1;var r=br();return Tt=function(n){return!!(r(n)>>>31)}}();return Nt=r}function Dt(){if(Ht)return Bt;Ht=1;var r=function(){if(Wt)return kt;Wt=1;var r=br();return kt=function(n){return 8388607&r(n)}}();return Bt=r}var Mt=R(zr);function Ct(r,n,t){P(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var qt=Object.freeze({__proto__:null,default:Ct});function Zt(r){return"number"==typeof r}var Xt=Wr.prototype.toString;var Yt=C();function Jt(r){return"object"==typeof r&&(r instanceof Wr||(Yt?function(r){try{return Xt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function Kt(r){return Zt(r)||Jt(r)}function Qt(r){return r<Q&&r>Br&&Nr(r)}function re(r){return Zt(r)&&Qt(r)}function ne(r){return Jt(r)&&Qt(r.valueOf())}function te(r){return re(r)||ne(r)}function ee(r){return re(r)&&r>=0}function ie(r){return ne(r)&&r.valueOf()>=0}function ue(r){return ee(r)||ie(r)}function ae(r){return"string"==typeof r}Ct(Kt,"isPrimitive",Zt),Ct(Kt,"isObject",Jt),Ct(te,"isPrimitive",re),Ct(te,"isObject",ne),Ct(ue,"isPrimitive",ee),Ct(ue,"isObject",ie);var oe=String.prototype.valueOf;var fe=C();function ce(r){return"object"==typeof r&&(r instanceof String||(fe?function(r){try{return oe.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function le(r){return ae(r)||ce(r)}Ct(le,"isPrimitive",ae),Ct(le,"isObject",ce);var ve=void 0!==String.prototype.repeat;var se=String.prototype.repeat;var pe=ve?function(r,n){return se.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t};function ge(r,n){if(!ae(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ee(n))throw new TypeError(z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return pe(r,n)}var ye=Object.freeze({__proto__:null,default:ge}),be=Math.ceil;var we=R(Object.freeze({__proto__:null,default:function(r,n,t){var e,i;if(!ae(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ee(n))throw new TypeError(z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!ae(i=t))throw new TypeError(z("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(n>9007199254740991)throw new RangeError(z("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return(e=(n-r.length)/i.length)<=0?r:r+ge(i,e=be(e))}}));function de(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=be(e),pe(t,e)+r)}var he,_e,me,Oe,je,Ae,Ee,Ie,Se,Ue,Ve,Fe,Te,ze,Ne,xe,ke,We,Be=R(Object.freeze({__proto__:null,default:function(r,n,t){var e;if(!ae(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ee(n))throw new TypeError(z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!ae(e=t))throw new TypeError(z("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>9007199254740991)throw new RangeError(z("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return de(r,n,e)}})),He=R(ye);function Le(){if(Ae)return je;Ae=1;var r=Er,n=Ur,t=mr,e=Pt,i=Mt,u=we,a=Be,o=He,f=function(){if(_e)return he;_e=1;var r=Mt;return he=function(n){for(var t,e="";n>0;)e=(t=n/2)===(n=r(t))?"0"+e:"1"+e;return e}}(),c=Oe?me:(Oe=1,me=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=149,e=0;e<149&&((t=2*r)>=1?(r=t-1,n+="1",149===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>24));e++);return n});return je=function(l){var v,s,p,g,y,b,w;if(s=l<0||1/l===n?"1":"0",l===r||l===n)return s+(g=o("1",8))+(p=o("0",23));if(l!=l)return s+(g=o("1",8))+(p="1"+o("0",22));if(0===l)return s+(g=o("0",8))+(p=o("0",23));if(b=(l=e(l))-(y=i(l)),y=f(y),b=c(b),y)g=y.length-1;else{for(w=0;w<b.length;w++)if("1"===b[w]){v=w+1;break}g=-v}return p=y+b,g<0?(g<=-t&&(v=t-1),p=p.substring(v)):p=p.substring(1),g=f(g+t),s+(g=a(g,8,"0"))+(p=u(p,23,"0").substring(0,23))}}function Pe(){if(Fe)return Ve;Fe=1;var r=Ue?Se:(Ue=1,Se=function(r){return 0|r});return Ve=r}function Ge(){if(xe)return Ne;xe=1;var r=ze?Te:(ze=1,Te=function(r){return r>>>0});return Ne=r}var Re={};D(Re,"base",function(){if(We)return ke;We=1;var r=D,n={};return r(n,"exponentf",Or()),r(n,"fromBinaryStringf",function(){if(gt)return pt;gt=1;var r=jt();return pt=r}()),r(n,"fromWordf",At()),r(n,"normalizef",Rt()),r(n,"signbitf",$t()),r(n,"significandf",Dt()),r(n,"toBinaryStringf",function(){if(Ie)return Ee;Ie=1;var r=Le();return Ee=r}()),r(n,"float32ToInt32",Pe()),r(n,"float32ToUint32",Ge()),r(n,"toWordf",br()),ke=n}());var $e,De,Me,Ce,qe,Ze,Xe=Re,Ye=R(Xr),Je=R(sn);function Ke(){if(Ce)return Me;Ce=1;var r=yr,n=De?$e:(De=1,$e=!0===Je?1:0),t=new Ye(1),e=new r(t.buffer);return Me=function(r){return t[0]=r,e[n]}}function Qe(){if(Ze)return qe;Ze=1;var r=Ke();return qe=r}var ri,ni,ti,ei,ii=R(Xn),ui=R($n);function ai(){if(ei)return ti;ei=1;var r=function(){if(ni)return ri;ni=1;var r=Qe(),n=ii,t=ui;return ri=function(e){var i=r(e);return(i=(i&n)>>>20)-t|0},ri}();return ti=r}var oi,fi,ci,li,vi,si,pi=R(rr),gi=R(Hr);function yi(){if(li)return ci;li=1;var r=pi,n=gi,t=ui,e=_t,i=mt,u=function(){if(fi)return oi;fi=1;var r=_t;return oi=function(n){var t,e=0;for(t=0;t<n.length;t++)"1"===n[t]&&(e+=r(2,-(t+1)));return e}}();return ci=function(a){var o,f,c;if(64!==a.length)throw new Error(i("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,a));if(o="1"===a[0]?-1:1,c=parseInt(a.substring(1,12),2)-t,f=u(a.substring(12)),c===-t){if(0===f)return 1===o?0:-0;c=-1022}else{if(c===t+1)return 0===f?1===o?r:n:NaN;f+=1}return o*f*e(2,c)}}var bi=R(nn),wi="function"==typeof DataView;var di="function"==typeof ArrayBuffer;var hi="function"==typeof ArrayBuffer?ArrayBuffer:null;var _i,mi="function"==typeof ArrayBuffer?ArrayBuffer:void 0;_i=function(){var r,n,t,e;if("function"!=typeof hi)return!1;try{t=new hi(16),e=t,(r=(di&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===J(e))&&"function"==typeof hi.isView)&&((n=new Zr(t))[0]=-3.14,n[1]=NaN,r=r&&hi.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?mi:function(){throw new Error("not implemented")};var Oi=_i,ji="function"==typeof DataView?DataView:null;var Ai,Ei="function"==typeof DataView?DataView:void 0;Ai=function(){var r,n,t,e;if("function"!=typeof ji)return!1;try{t=new Oi(24),n=new ji(t,8),e=n,(r=(wi&&e instanceof DataView||"[object DataView]"===J(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),r=r&&n.buffer===t&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){r=!1}return r}()?Ei:function(){throw new Error("not implemented")};var Ii,Si,Ui,Vi,Fi,Ti,zi,Ni,xi,ki,Wi,Bi,Hi,Li,Pi,Gi,Ri=Ai,$i=R(Object.freeze({__proto__:null,default:Ri}));function Di(){if(Vi)return Ui;Vi=1;var r=function(){if(Si)return Ii;Si=1;var r=Je,n=$i,t=4294967296,e=new bi(8);return Ii=function(i,u,a){var o,f,c,l,v;if(1===u)l=i;else{for(l=e,v=0;v<8;v++)l[v]=i[a],a+=u;a=0}return o=new n(l.buffer,l.byteOffset,l.byteLength),r?(c=o.getInt32(a,r),f=o.getInt32(a+4,r)):(f=o.getInt32(a,r),c=o.getInt32(a+4,r)),c<0&&(c+=t),f*t+c}}();return Ui=r}function Mi(){if(Ni)return zi;Ni=1;var r=yr,n=Ye,t=function(){return Ti?Fi:(Ti=1,!0===Je?(r=1,n=0):(r=0,n=1),Fi={HIGH:r,LOW:n});var r,n}(),e=new n(1),i=new r(e.buffer),u=t.HIGH,a=t.LOW;return zi=function(r,n){return i[u]=r,i[a]=n,e[0]},zi}function Ci(){if(Li)return Hi;Li=1;var r=yr,n=Bi?Wi:(Bi=1,Wi=!0===Je?0:1),t=new Ye(1),e=new r(t.buffer);return Hi=function(r){return t[0]=r,e[n]}}var qi,Zi,Xi,Yi,Ji,Ki,Qi,ru,nu,tu,eu,iu,uu,au,ou,fu,cu,lu,vu,su,pu,gu,yu=R(qn),bu=R(Pr),wu=R(Fr);function du(){if(Yi)return Xi;Yi=1;var r=function(){if(Zi)return qi;Zi=1;var r=yu,n=bu,t=wu,e=Pt;return qi=function(i,u){return t(u)||n(u)?(i[0]=u,i[1]=0,i):0!==u&&e(u)<r?(i[0]=4503599627370496*u,i[1]=-52,i):(i[0]=u,i[1]=0,i)}}();return Xi=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},Xi}function hu(){if(tu)return nu;tu=1;var r=yr,n=ru?Qi:(ru=1,Qi=!0===Je?1:0),t=new Ye(1),e=new r(t.buffer);return nu=function(r,i){return t[0]=r,e[n]=i>>>0,t[0]},nu}function _u(){if(fu)return ou;fu=1;var r=yr,n=au?uu:(au=1,uu=!0===Je?0:1),t=new Ye(1),e=new r(t.buffer);return ou=function(r,i){return t[0]=r,e[n]=i>>>0,t[0]},ou}function mu(){if(gu)return pu;gu=1;var r=function(){if(su)return vu;su=1;var r=Qe();return vu=function(n){return!!(r(n)>>>31)}}();return pu=r}var Ou,ju,Au,Eu,Iu,Su,Uu,Vu,Fu,Tu,zu,Nu,xu=R(Object.freeze({__proto__:null,default:function(r){return 0===r&&1/r===Br}}));function ku(){if(Su)return Iu;Su=1;var r=pi,n=gi,t=ui,e=wu,i=xu,u=Pt,a=Mt,o=we,f=Be,c=He,l=function(){if(ju)return Ou;ju=1;var r=Mt;return Ou=function(n){for(var t,e="";n>0;)e=(t=n/2)===(n=r(t))?"0"+e:"1"+e;return e}}(),v=function(){if(Eu)return Au;Eu=1;var r=1075;return Au=function(n){var t,e,i,u;if(t="",0===n)return t;for(u=r,i=0;i<r&&((e=2*n)>=1?(n=e-1,t+="1",u===r&&(u=i)):(n=e,t+="0"),!(1===e||i-u>54));i++);return t}}();return Iu=function(s){var p,g,y,b,w,d,h;if(g=s<0||i(s)?"1":"0",s===r||s===n)return g+(b=c("1",11))+(y=c("0",52));if(e(s))return g+(b=c("1",11))+(y="1"+c("0",51));if(0===s)return g+(b=c("0",11))+(y=c("0",52));if(d=(s=u(s))-(w=a(s)),w=l(w),d=v(d),w)b=w.length-1;else{for(h=0;h<d.length;h++)if("1"===d[h]){p=h+1;break}b=-p}return y=w+d,b<0?(b<=-t&&(p=t-1),y=y.substring(p)):y=y.substring(1),b=l(b+t),g+(b=f(b,11,"0"))+(y=o(y,52,"0").substring(0,52))}}function Wu(){if(Nu)return zu;Nu=1;var r=Tu?Fu:(Tu=1,Fu=function(r){return 0|r});return zu=r}var Bu,Hu,Lu,Pu,Gu,Ru,$u,Du,Mu,Cu,qu,Zu,Xu,Yu,Ju,Ku,Qu,ra,na,ta,ea=R(qt);function ia(){if(Pu)return Lu;Pu=1;var r=Je,n=$i,t=Mt,e=new bi(8),i=new n(e.buffer);return Lu=function(n,u,a,o){var f,c,l;if(0===n){for(l=0;l<e.length;l++)u[o]=0,o+=a;return u}for(c=(4294967295&n)>>>0,f=t(n/4294967296),r?(i.setUint32(0,c,r),i.setUint32(4,f,r)):(i.setUint32(0,f,r),i.setUint32(4,c,r)),l=0;l<e.length;l++)u[o]=e[l],o+=a;return u}}function ua(){if(Ru)return Gu;Ru=1;var r=ea,n=function(){if(Hu)return Bu;Hu=1;var r=Je,n=bi,t=$i,e=Mt;return Bu=function(i){var u,a,o,f;return u=new n(8),0===i||(f=(4294967295&i)>>>0,o=e(i/4294967296),a=new t(u.buffer),r?(a.setUint32(0,f,r),a.setUint32(4,o,r)):(a.setUint32(0,o,r),a.setUint32(4,f,r))),u}}();return r(n,"assign",ia()),Gu=n}function aa(){if(Cu)return Mu;Cu=1;var r=Du?$u:(Du=1,$u=function(r){return r>>>0});return Mu=r}function oa(){if(Yu)return Xu;Yu=1;var r=yr,n=Ye,t=function(){return Zu?qu:(Zu=1,!0===Je?(r=1,n=0):(r=0,n=1),qu={HIGH:r,LOW:n});var r,n}(),e=new n(1),i=new r(e.buffer),u=t.HIGH,a=t.LOW;return Xu=function(r,n){return e[0]=n,r[0]=i[u],r[1]=i[a],r}}function fa(){if(ra)return Qu;ra=1;var r=function(){if(Ku)return Ju;Ku=1;var r=oa();return Ju=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},Ju}();return Qu=r}var ca={};D(ca,"base",function(){if(ta)return na;ta=1;var r=D,n={};return r(n,"exponent",ai()),r(n,"fromBinaryString",function(){if(si)return vi;si=1;var r=yi();return vi=r}()),r(n,"fromInt64Bytes",Di()),r(n,"fromWords",function(){if(ki)return xi;ki=1;var r=Mi();return xi=r}()),r(n,"getHighWord",Qe()),r(n,"getLowWord",function(){if(Gi)return Pi;Gi=1;var r=Ci();return Pi=r}()),r(n,"normalize",function(){if(Ki)return Ji;Ki=1;var r=du();return Ji=r}()),r(n,"setHighWord",function(){if(iu)return eu;iu=1;var r=hu();return eu=r}()),r(n,"setLowWord",function(){if(lu)return cu;lu=1;var r=_u();return cu=r}()),r(n,"signbit",mu()),r(n,"toBinaryString",function(){if(Vu)return Uu;Vu=1;var r=ku();return Uu=r}()),r(n,"float64ToFloat32",Ot()),r(n,"float64ToInt32",Wu()),r(n,"float64ToInt64Bytes",ua()),r(n,"float64ToUint32",aa()),r(n,"toWords",fa()),na=n}());var la,va,sa,pa,ga,ya,ba=ca;function wa(){if(pa)return sa;pa=1;var r=va?la:(va=1,la=function(r){return r>>>0});return sa=r}var da={};D(da,"base",function(){if(ya)return ga;ya=1;var r={};return D(r,"int32ToUint32",wa()),ga=r}());var ha,_a,ma,Oa,ja,Aa,Ea,Ia,Sa,Ua,Va,Fa,Ta=da;function za(){if(Oa)return ma;Oa=1;var r=function(){if(_a)return ha;_a=1;var r=mt,n=_t;return ha=function(t){var e,i;if(8!==t.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(e=0,i=0;i<t.length;i++)"1"===t[i]&&(e+=n(2,8-i-1));return e}}();return ma=r}function Na(){if(Ia)return Ea;Ia=1;var r=Be,n=function(){if(Aa)return ja;Aa=1;var r=Mt;return ja=function(n){var t,e,i="";for(t=8;n>0&&t;)i=(e=n/2)===(n=r(e))?"0"+i:"1"+i,t-=1;return i}}();return Ea=function(t){var e;return e=n(t),e=r(e,8,"0")}}var xa={};D(xa,"base",function(){if(Fa)return Va;Fa=1;var r=D,n={};return r(n,"fromBinaryStringUint8",za()),r(n,"toBinaryStringUint8",function(){if(Ua)return Sa;Ua=1;var r=Na();return Sa=r}()),Va=n}());var ka,Wa,Ba,Ha,La,Pa,Ga,Ra,$a,Da,Ma,Ca,qa=xa;function Za(){if(Ha)return Ba;Ha=1;var r=function(){if(Wa)return ka;Wa=1;var r=mt,n=_t;return ka=function(t){var e,i;if(16!==t.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(e=0,i=0;i<t.length;i++)"1"===t[i]&&(e+=n(2,16-i-1));return e}}();return Ba=r}function Xa(){if(Ra)return Ga;Ra=1;var r=Be,n=function(){if(Pa)return La;Pa=1;var r=Mt;return La=function(n){var t,e,i="";for(t=16;n>0&&t;)i=(e=n/2)===(n=r(e))?"0"+i:"1"+i,t-=1;return i}}();return Ga=function(t){var e;return e=n(t),e=r(e,16,"0")}}var Ya={};D(Ya,"base",function(){if(Ca)return Ma;Ca=1;var r=D,n={};return r(n,"fromBinaryStringUint16",Za()),r(n,"toBinaryStringUint16",function(){if(Da)return $a;Da=1;var r=Xa();return $a=r}()),Ma=n}());var Ja,Ka,Qa,ro,no,to,eo,io,uo,ao,oo,fo,co,lo,vo,so,po,go,yo,bo,wo,ho,_o,mo,Oo=Ya;function jo(){if(ro)return Qa;ro=1;var r=function(){if(Ka)return Ja;Ka=1;var r=_t,n=mt,t=aa();return Ja=function(e){var i,u;if(32!==e.length)throw new Error(n("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,e));for(i=0,u=0;u<e.length;u++)"1"===e[u]&&(i+=r(2,32-u-1));return t(i)}}();return Qa=r}function Ao(){if(io)return eo;io=1;var r=function(){if(to)return no;to=1;var r=wa(),n=r(31);return no=function(t,e){return r(t<<(e&=n)|t>>>(-e&n))}}();return eo=r}function Eo(){if(fo)return oo;fo=1;var r=function(){if(ao)return uo;ao=1;var r=wa(),n=r(31);return uo=function(t,e){return r(t>>>(e&=n)|t<<(-e&n))}}();return oo=r}function Io(){if(so)return vo;so=1;var r=Be,n=function(){if(lo)return co;lo=1;var r=Mt;return co=function(n){var t,e,i="";for(t=32;n>0&&t;)i=(e=n/2)===(n=r(e))?"0"+i:"1"+i,t-=1;return i}}();return vo=function(t){var e;return e=n(t),e=r(e,32,"0")}}function So(){if(ho)return wo;ho=1;var r=bo?yo:(bo=1,yo=function(r){return 0|r});return wo=r}var Uo={};D(Uo,"base",function(){if(mo)return _o;mo=1;var r=D,n={};return r(n,"fromBinaryStringUint32",jo()),r(n,"rotl32",Ao()),r(n,"rotr32",Eo()),r(n,"toBinaryStringUint32",function(){if(go)return po;go=1;var r=Io();return po=r}()),r(n,"uint32ToInt32",So()),_o=n}());var Vo=Uo,Fo={};G(Fo,"Number",$),G(Fo,"float32",Xe),G(Fo,"float64",ba),G(Fo,"int32",Ta),G(Fo,"uint8",qa),G(Fo,"uint16",Oo),G(Fo,"uint32",Vo);export{$ as Number,Fo as default,Xe as float32,ba as float64,Ta as int32,Oo as uint16,Vo as uint32,qa as uint8};
//# sourceMappingURL=mod.js.map
