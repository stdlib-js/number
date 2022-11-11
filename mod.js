// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,g=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,w=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=g.call(e,d,"$1e"),e=g.call(e,b,"e"),e=g.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=g.call(e,p,"e+0$1"),e=g.call(e,v,"e-0$1"),r.alternate&&(e=g.call(e,y,"$1."),e=g.call(e,w,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function A(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function E(r,n,t){var e=n-r.length;return e<0?r:r=t?r+A(e):A(e)+r}var I=String.fromCharCode,S=isNaN,U=Array.isArray;function V(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function F(r){var n,t,e,a,o,c,l,s,g;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(e=r[s]))c+=e;else{if(n=void 0!==e.precision,!(e=V(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,g=0;g<t.length;g++)switch(a=t.charAt(g)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,S(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,S(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!S(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=S(o)?String(e.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function _(r){var n,t,e,i;for(t=[],i=0,e=T.exec(r);e;)(n=r.slice(i,T.lastIndex-e[0].length)).length&&t.push(n),t.push(N(e)),i=T.lastIndex,e=T.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function O(r){return"string"==typeof r}function j(r){var n,t,e;if(!O(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=_(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return F.apply(null,t)}var x=Object.prototype,k=x.toString,W=x.__defineGetter__,B=x.__defineSetter__,H=x.__lookupGetter__,L=x.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&W&&W.call(r,n,t.get),o&&B&&B.call(r,n,t.set),r};function P(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}var R=Number;var $="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return $&&"symbol"==typeof Symbol.toStringTag}var C=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var q,Z="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Z?Z.toStringTag:"";q=M()?function(r){var n,t,e,i,a;if(null==r)return C.call(r);t=r[z],a=z,n=null!=(i=r)&&D.call(i,a);try{r[z]=void 0}catch(n){return C.call(r)}return e=C.call(r),n?r[z]=t:delete r[z],e}:function(r){return C.call(r)};var X=q,Y="function"==typeof Float32Array;var J=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null;var Q,rr="function"==typeof Float32Array?Float32Array:void 0;Q=function(){var r,n,t;if("function"!=typeof K)return!1;try{n=new K([1,3.14,-3.14,5e40]),t=n,r=(Y&&t instanceof Float32Array||"[object Float32Array]"===X(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===J}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr=Q,tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var ir,ar="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,n,t;if("function"!=typeof er)return!1;try{n=new er(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===X(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=ir,ur=new nr(1),fr=new or(ur.buffer);function cr(r){return ur[0]=r,fr[0]}var lr=new nr(1);new or(lr.buffer)[0]=2139095040;var sr=lr[0],gr=new nr(1);new or(gr.buffer)[0]=4286578688;var pr=gr[0];function vr(r){return r!=r}var yr=Math.floor;function wr(r){return yr(r)===r}function hr(r){return wr(r/2)}function br(r){return hr(r>0?r-1:r+1)}var dr=Number,mr=dr.NEGATIVE_INFINITY;function Ar(r){return r===J||r===mr}var Er=Math.sqrt;function Ir(r){return Math.abs(r)}function Sr(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Ur="function"==typeof Float64Array;var Vr="function"==typeof Float64Array?Float64Array:null;var Fr,Tr="function"==typeof Float64Array?Float64Array:void 0;Fr=function(){var r,n,t;if("function"!=typeof Vr)return!1;try{n=new Vr([1,3.14,-3.14,NaN]),t=n,r=(Ur&&t instanceof Float64Array||"[object Float64Array]"===X(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Tr:function(){throw new Error("not implemented")};var Nr=Fr,_r="function"==typeof Uint8Array;var Or="function"==typeof Uint8Array?Uint8Array:null;var jr,xr="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,n,t;if("function"!=typeof Or)return!1;try{n=new Or(n=[1,3.14,-3.14,256,257]),t=n,r=(_r&&t instanceof Uint8Array||"[object Uint8Array]"===X(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?xr:function(){throw new Error("not implemented")};var kr=jr,Wr="function"==typeof Uint16Array;var Br="function"==typeof Uint16Array?Uint16Array:null;var Hr,Lr="function"==typeof Uint16Array?Uint16Array:void 0;Hr=function(){var r,n,t;if("function"!=typeof Br)return!1;try{n=new Br(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Wr&&t instanceof Uint16Array||"[object Uint16Array]"===X(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Lr:function(){throw new Error("not implemented")};var Gr,Pr={uint16:Hr,uint8:kr};(Gr=new Pr.uint16(1))[0]=4660;var Rr,$r,Mr=52===new Pr.uint8(Gr.buffer)[0];!0===Mr?(Rr=1,$r=0):(Rr=0,$r=1);var Cr={HIGH:Rr,LOW:$r},Dr=new Nr(1),qr=new or(Dr.buffer),Zr=Cr.HIGH,zr=Cr.LOW;function Xr(r,n,t,e){return Dr[0]=r,n[e]=qr[Zr],n[e+t]=qr[zr],n}function Yr(r){return Xr(r,[0,0],1,0)}Sr(Yr,"assign",Xr);var Jr=!0===Mr?0:1,Kr=new Nr(1),Qr=new or(Kr.buffer);function rn(r,n){return Kr[0]=r,Qr[Jr]=n>>>0,Kr[0]}function nn(r){return 0|r}var tn,en,an=!0===Mr?1:0,on=new Nr(1),un=new or(on.buffer);function fn(r){return on[0]=r,un[an]}!0===Mr?(tn=1,en=0):(tn=0,en=1);var cn={HIGH:tn,LOW:en},ln=new Nr(1),sn=new or(ln.buffer),gn=cn.HIGH,pn=cn.LOW;function vn(r,n){return sn[gn]=r,sn[pn]=n,ln[0]}var yn=[0,0];function wn(r,n){var t,e;return Yr.assign(r,yn,1,0),t=yn[0],t&=2147483647,e=fn(n),vn(t|=e&=2147483648,yn[1])}var hn=!0===Mr?1:0,bn=new Nr(1),dn=new or(bn.buffer);function mn(r,n){return bn[0]=r,dn[hn]=n>>>0,bn[0]}var An=[1,1.5],En=[0,.5849624872207642],In=[0,1.350039202129749e-8];function Sn(r,n,t,e){return vr(r)||Ar(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ir(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}Sr((function(r){return Sn(r,[0,0],1,0)}),"assign",Sn);var Un=[0,0],Vn=[0,0];function Fn(r,n){var t,e;return 0===n||0===r||vr(r)||Ar(r)?r:(Sn(r,Un,1,0),n+=Un[1],n+=function(r){var n=fn(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Un[0]),n<-1074?wn(0,r):n>1023?r<0?mr:J:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Yr.assign(r,Vn,1,0),t=Vn[0],t&=2148532223,e*vn(t|=n+1023<<20,Vn[1])))}var Tn=1e300,Nn=1e-300,_n=[0,0],On=[0,0];function jn(r,n){var t,e,i,a,o,u,f,c,l,s,g,p,v,y;if(vr(r)||vr(n))return NaN;if(Yr.assign(n,_n,1,0),o=_n[0],0===_n[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Er(r);if(-.5===n)return 1/Er(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Ar(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Ir(r)<1==(n===J)?0:J}(r,n)}if(Yr.assign(r,_n,1,0),a=_n[0],0===_n[1]){if(0===a)return function(r,n){return n===mr?J:n===J?0:n>0?br(n)?r:0:br(n)?wn(J,r):J}(r,n);if(1===r)return 1;if(-1===r&&br(n))return-1;if(Ar(r))return r===mr?jn(-0,-n):n<0?0:J}if(r<0&&!1===wr(n))return(r-r)/(r-r);if(i=Ir(r),t=2147483647&a|0,e=2147483647&o|0,f=o>>>31|0,u=(u=a>>>31|0)&&br(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&fn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Tn*Tn:u*Nn*Nn;if(t>1072693248)return 0===f?u*Tn*Tn:u*Nn*Nn;g=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=rn(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(On,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,l,s,g,p,v,y,w,h,b,d,m,A,E,I;return m=0,t<1048576&&(m-=53,t=fn(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,t-=1048576),o=rn(i=(b=(n=mn(n,t))-(c=An[E]))*(d=1/(n+c)),0),e=524288+(t>>1|536870912),f=mn(0,e+=E<<18),h=(a=i*i)*a*(0===(I=a)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=rn(f=3+(a=o*o)+(h+=(u=d*(b-o*f-o*(n-(f-c))))*(o+i)),0),y=(p=-7.028461650952758e-9*(s=rn(s=(b=o*f)+(d=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(d-(s-b))+In[E])-((v=rn(v=(g=.9617967009544373*s)+p+(l=En[E])+(w=m),0))-w-l-g),r[0]=v,r[1]=y,r}(On,i,t);if(p=(s=(n-(c=rn(n,0)))*g[0]+n*g[1])+(l=c*g[0]),Yr.assign(p,_n,1,0),v=nn(_n[0]),y=nn(_n[1]),v>=1083179008){if(0!=(v-1083179008|y))return u*Tn*Tn;if(s+8008566259537294e-32>p-l)return u*Tn*Tn}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|y))return u*Nn*Nn;if(s<=p-l)return u*Nn*Nn}return p=function(r,n,t){var e,i,a,o,u,f,c,l,s,g,p;return g=((s=2147483647&r|0)>>20)-1023|0,l=0,s>1071644672&&(e=((l=r+(1048576>>g+1)>>>0)&~(1048575>>(g=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-g>>>0,r<0&&(l=-l),n-=a=mn(0,e)),r=nn(r=fn(c=1-((c=(o=.6931471824645996*(a=rn(a=t+n,0)))+(u=.6931471805599453*(t-(a-n))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(p=a)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=u-(c-o))+c*f)-c))),(r+=l<<20>>>0)>>20<=0?Fn(c,l):mn(c,r)}(v,l,s),u*p}var xn="function"==typeof Math.fround?Math.fround:null,kn=new nr(1);var Wn="function"==typeof xn?xn:function(r){return kn[0]=r,kn[0]};var Bn=new or(1),Hn=new nr(Bn.buffer);function Ln(r,n,t,e){return r!=r||r===sr||r===pr?(n[e]=r,n[e+t]=0,n):0!==r&&Ir(r)<11754943508222875e-54?(r=Wn(8388608*r),n[e]=r,n[e+t]=-23,n):(n[e]=r,n[e+t]=0,n)}function Gn(r){return Ln(r,[0,0],1,0)}Sr(Gn,"assign",Ln);function Pn(r){return"number"==typeof r}var Rn=dr.prototype.toString;var $n=M();function Mn(r){return"object"==typeof r&&(r instanceof dr||($n?function(r){try{return Rn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===X(r)))}function Cn(r){return Pn(r)||Mn(r)}function Dn(r){return r<J&&r>mr&&wr(r)}function qn(r){return Pn(r)&&Dn(r)}function Zn(r){return Mn(r)&&Dn(r.valueOf())}function zn(r){return qn(r)||Zn(r)}function Xn(r){return qn(r)&&r>=0}function Yn(r){return Zn(r)&&r.valueOf()>=0}function Jn(r){return Xn(r)||Yn(r)}function Kn(r){return"string"==typeof r}Sr(Cn,"isPrimitive",Pn),Sr(Cn,"isObject",Mn),Sr(zn,"isPrimitive",qn),Sr(zn,"isObject",Zn),Sr(Jn,"isPrimitive",Xn),Sr(Jn,"isObject",Yn);var Qn=String.prototype.valueOf;var rt=M();function nt(r){return"object"==typeof r&&(r instanceof String||(rt?function(r){try{return Qn.call(r),!0}catch(r){return!1}}(r):"[object String]"===X(r)))}function tt(r){return Kn(r)||nt(r)}Sr(tt,"isPrimitive",Kn),Sr(tt,"isObject",nt);var et=void 0!==String.prototype.repeat;var it=String.prototype.repeat;var at=et?function(r,n){return it.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t};function ot(r,n){if(!Kn(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Xn(n))throw new TypeError(j("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return at(r,n)}var ut=Math.ceil;function ft(r,n,t){var e,i;if(!Kn(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Xn(n))throw new TypeError(j("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!Kn(i=t))throw new TypeError(j("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(n>9007199254740991)throw new RangeError(j("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return(e=(n-r.length)/i.length)<=0?r:r+ot(i,e=ut(e))}function ct(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=ut(e),at(t,e)+r)}function lt(r,n,t){var e;if(!Kn(r))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Xn(n))throw new TypeError(j("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!Kn(e=t))throw new TypeError(j("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>9007199254740991)throw new RangeError(j("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return ct(r,n,e)}function st(r){for(var n,t="";r>0;)t=(n=r/2)===(r=yr(n))?"0"+t:"1"+t;return t}var gt={};P(gt,"exponentf",(function(r){var n=cr(r);return(n=(2139095040&n)>>>23)-127})),P(gt,"fromBinaryStringf",(function(r){var n,t,e;if(32!==r.length)throw new Error(j("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,9),2)-127,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=jn(2,-(n+1)));return t}(r.substring(9)),-127===e){if(0===t)return 1===n?0:-0;e=-126}else{if(128===e)return 0===t?1===n?sr:pr:NaN;t+=1}return Wn(n*t*jn(2,e))})),P(gt,"fromWordf",(function(r){return Bn[0]=r,Hn[0]})),P(gt,"normalizef",Gn),P(gt,"signbitf",(function(r){return!!(cr(r)>>>31)})),P(gt,"significandf",(function(r){return 8388607&cr(r)})),P(gt,"toBinaryStringf",(function(r){var n,t,e,i,a,o,u;if(t=r<0||1/r===pr?"1":"0",r===sr||r===pr)return t+(i=ot("1",8))+(e=ot("0",23));if(r!=r)return t+(i=ot("1",8))+(e="1"+ot("0",22));if(0===r)return t+(i=ot("0",8))+(e=ot("0",23));if(o=(r=Ir(r))-(a=yr(r)),a=st(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=149,e=0;e<149&&((t=2*r)>=1?(r=t-1,n+="1",149===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>24));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-127&&(n=126),e=e.substring(n)):e=e.substring(1),t+(i=lt(i=st(i+127),8,"0"))+(e=ft(e,23,"0").substring(0,23))})),P(gt,"float32ToInt32",(function(r){return 0|r})),P(gt,"float32ToUint32",(function(r){return r>>>0})),P(gt,"toWordf",cr);var pt={};P(pt,"base",gt);var vt=!0===Mr?1:0,yt=new Nr(1),wt=new or(yt.buffer);function ht(r){return yt[0]=r,wt[vt]}var bt="function"==typeof DataView;var dt="function"==typeof ArrayBuffer;var mt="function"==typeof ArrayBuffer?ArrayBuffer:null;var At,Et="function"==typeof ArrayBuffer?ArrayBuffer:void 0;At=function(){var r,n,t,e;if("function"!=typeof mt)return!1;try{t=new mt(16),e=t,(r=(dt&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===X(e))&&"function"==typeof mt.isView)&&((n=new Nr(t))[0]=-3.14,n[1]=NaN,r=r&&mt.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?Et:function(){throw new Error("not implemented")};var It=At,St="function"==typeof DataView?DataView:null;var Ut,Vt="function"==typeof DataView?DataView:void 0;Ut=function(){var r,n,t,e;if("function"!=typeof St)return!1;try{t=new It(24),n=new St(t,8),e=n,(r=(bt&&e instanceof DataView||"[object DataView]"===X(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),r=r&&n.buffer===t&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){r=!1}return r}()?Vt:function(){throw new Error("not implemented")};var Ft,Tt,Nt=Ut,_t=new kr(8);!0===Mr?(Ft=1,Tt=0):(Ft=0,Tt=1);var Ot={HIGH:Ft,LOW:Tt},jt=new Nr(1),xt=new or(jt.buffer),kt=Ot.HIGH,Wt=Ot.LOW;var Bt=!0===Mr?0:1,Ht=new Nr(1),Lt=new or(Ht.buffer);function Gt(r,n,t,e){return vr(r)||Ar(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Ir(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}function Pt(r){return Gt(r,[0,0],1,0)}Sr(Pt,"assign",Gt);var Rt=!0===Mr?1:0,$t=new Nr(1),Mt=new or($t.buffer);var Ct=!0===Mr?0:1,Dt=new Nr(1),qt=new or(Dt.buffer);function Zt(r){for(var n,t="";r>0;)t=(n=r/2)===(r=yr(n))?"0"+t:"1"+t;return t}function zt(r){var n,t,e,i;return n=new kr(8),0===r||(i=(4294967295&r)>>>0,e=yr(r/4294967296),t=new Nt(n.buffer),Mr?(t.setUint32(0,i,Mr),t.setUint32(4,e,Mr)):(t.setUint32(0,e,Mr),t.setUint32(4,i,Mr))),n}var Xt,Yt,Jt=new kr(8),Kt=new Nt(Jt.buffer);function Qt(r){return r>>>0}Sr(zt,"assign",(function(r,n,t,e){var i,a,o;if(0===r){for(o=0;o<Jt.length;o++)n[e]=0,e+=t;return n}for(a=(4294967295&r)>>>0,i=yr(r/4294967296),Mr?(Kt.setUint32(0,a,Mr),Kt.setUint32(4,i,Mr)):(Kt.setUint32(0,i,Mr),Kt.setUint32(4,a,Mr)),o=0;o<Jt.length;o++)n[e]=Jt[o],e+=t;return n})),!0===Mr?(Xt=1,Yt=0):(Xt=0,Yt=1);var re={HIGH:Xt,LOW:Yt},ne=new Nr(1),te=new or(ne.buffer),ee=re.HIGH,ie=re.LOW;function ae(r,n,t,e){return ne[0]=r,n[e]=te[ee],n[e+t]=te[ie],n}function oe(r){return ae(r,[0,0],1,0)}Sr(oe,"assign",ae);var ue={};P(ue,"exponent",(function(r){var n=ht(r);return(n=(2146435072&n)>>>20)-1023|0})),P(ue,"fromBinaryString",(function(r){var n,t,e;if(64!==r.length)throw new Error(j("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,12),2)-1023,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=jn(2,-(n+1)));return t}(r.substring(12)),-1023===e){if(0===t)return 1===n?0:-0;e=-1022}else{if(1024===e)return 0===t?1===n?J:mr:NaN;t+=1}return n*t*jn(2,e)})),P(ue,"fromInt64Bytes",(function(r,n,t){var e,i,a,o,u;if(1===n)o=r;else{for(o=_t,u=0;u<8;u++)o[u]=r[t],t+=n;t=0}return e=new Nt(o.buffer,o.byteOffset,o.byteLength),Mr?(a=e.getInt32(t,Mr),i=e.getInt32(t+4,Mr)):(i=e.getInt32(t,Mr),a=e.getInt32(t+4,Mr)),a<0&&(a+=4294967296),4294967296*i+a})),P(ue,"fromWords",(function(r,n){return xt[kt]=r,xt[Wt]=n,jt[0]})),P(ue,"getHighWord",ht),P(ue,"getLowWord",(function(r){return Ht[0]=r,Lt[Bt]})),P(ue,"normalize",Pt),P(ue,"setHighWord",(function(r,n){return $t[0]=r,Mt[Rt]=n>>>0,$t[0]})),P(ue,"setLowWord",(function(r,n){return Dt[0]=r,qt[Ct]=n>>>0,Dt[0]})),P(ue,"signbit",(function(r){return!!(ht(r)>>>31)})),P(ue,"toBinaryString",(function(r){var n,t,e,i,a,o,u;if(t=r<0||function(r){return 0===r&&1/r===mr}(r)?"1":"0",r===J||r===mr)return t+(i=ot("1",11))+(e=ot("0",52));if(vr(r))return t+(i=ot("1",11))+(e="1"+ot("0",51));if(0===r)return t+(i=ot("0",11))+(e=ot("0",52));if(o=(r=Ir(r))-(a=yr(r)),a=Zt(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=1075,e=0;e<1075&&((t=2*r)>=1?(r=t-1,n+="1",1075===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>54));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-1023&&(n=1022),e=e.substring(n)):e=e.substring(1),t+(i=lt(i=Zt(i+1023),11,"0"))+(e=ft(e,52,"0").substring(0,52))})),P(ue,"float64ToFloat32",Wn),P(ue,"float64ToInt32",(function(r){return 0|r})),P(ue,"float64ToInt64Bytes",zt),P(ue,"float64ToUint32",Qt),P(ue,"toWords",oe);var fe={};function ce(r){return r>>>0}P(fe,"base",ue),P(fe,"reviver",(function(r,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return J;if("-Infinity"===n.value)return mr}return n})),P(fe,"toJSON",(function(r){if("number"!=typeof r)throw new TypeError(j("invalid argument. Must provide a number. Value: `%s`.",r));return r!=r?{type:"float64",value:"NaN"}:r===J?{type:"float64",value:"+Infinity"}:r===mr?{type:"float64",value:"-Infinity"}:r}));var le={};P(le,"int32ToUint32",ce);var se={};P(se,"base",le);var ge={};P(ge,"fromBinaryStringUint8",(function(r){var n,t;if(8!==r.length)throw new Error(j("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=jn(2,8-t-1));return n})),P(ge,"toBinaryStringUint8",(function(r){var n;return n=function(r){var n,t,e="";for(n=8;r>0&&n;)e=(t=r/2)===(r=yr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=lt(n,8,"0")}));var pe={};P(pe,"base",ge);var ve={};P(ve,"fromBinaryStringUint16",(function(r){var n,t;if(16!==r.length)throw new Error(j("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=jn(2,16-t-1));return n})),P(ve,"toBinaryStringUint16",(function(r){var n;return n=function(r){var n,t,e="";for(n=16;r>0&&n;)e=(t=r/2)===(r=yr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=lt(n,16,"0")}));var ye={};P(ye,"base",ve);var we=ce(31);var he=ce(31);var be={};P(be,"fromBinaryStringUint32",(function(r){var n,t;if(32!==r.length)throw new Error(j("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=jn(2,32-t-1));return Qt(n)})),P(be,"rotl32",(function(r,n){return ce(r<<(n&=we)|r>>>(-n&we))})),P(be,"rotr32",(function(r,n){return ce(r>>>(n&=he)|r<<(-n&he))})),P(be,"toBinaryStringUint32",(function(r){var n;return n=function(r){var n,t,e="";for(n=32;r>0&&n;)e=(t=r/2)===(r=yr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=lt(n,32,"0")})),P(be,"uint32ToInt32",(function(r){return 0|r}));var de={};P(de,"base",be);var me={};P(me,"Number",R),P(me,"float32",pt),P(me,"float64",fe),P(me,"int32",se),P(me,"uint8",pe),P(me,"uint16",ye),P(me,"uint32",de);export{R as Number,me as default,pt as float32,fe as float64,se as int32,ye as uint16,de as uint32,pe as uint8};
//# sourceMappingURL=mod.js.map
