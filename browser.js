// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,g=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,w=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=g.call(e,b,"$1e"),e=g.call(e,d,"e"),e=g.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=g.call(e,p,"e+0$1"),e=g.call(e,v,"e-0$1"),r.alternate&&(e=g.call(e,y,"$1."),e=g.call(e,w,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):l.call(e)}function A(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function E(r,n,t){var e=n-r.length;return e<0?r:r=t?r+A(e):A(e)+r}var I=String.fromCharCode,S=isNaN,U=Array.isArray;function V(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function F(r){var n,t,e,a,o,c,l,s,g;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(e=r[s]))c+=e;else{if(n=void 0!==e.precision,!(e=V(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,g=0;g<t.length;g++)switch(a=t.charAt(g)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,S(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,S(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!S(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=S(o)?String(e.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function _(r){var n,t,e,i;for(t=[],i=0,e=T.exec(r);e;)(n=r.slice(i,T.lastIndex-e[0].length)).length&&t.push(n),t.push(N(e)),i=T.lastIndex,e=T.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){return"string"==typeof r}function O(r){var n,t;if(!j(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[_(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return F.apply(null,n)}var x=Object.prototype,k=x.toString,W=x.__defineGetter__,B=x.__defineSetter__,H=x.__lookupGetter__,L=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&W&&W.call(r,n,t.get),o&&B&&B.call(r,n,t.set),r};function P(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}var R=Number,$="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return $&&"symbol"==typeof Symbol.toStringTag}var C,D=Object.prototype.toString,q=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Z?Z.toStringTag:"";C=M()?function(r){var n,t,e,i,a;if(null==r)return D.call(r);t=r[z],a=z,n=null!=(i=r)&&q.call(i,a);try{r[z]=void 0}catch(n){return D.call(r)}return e=D.call(r),n?r[z]=t:delete r[z],e}:function(r){return D.call(r)};var X,Y=C,J="function"==typeof Float32Array,K=Number.POSITIVE_INFINITY,Q="function"==typeof Float32Array?Float32Array:null,rr="function"==typeof Float32Array?Float32Array:void 0;X=function(){var r,n,t;if("function"!=typeof Q)return!1;try{n=new Q([1,3.14,-3.14,5e40]),t=n,r=(J&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===K}catch(n){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var nr,tr=X,er="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or=nr,ur=new tr(1),fr=new or(ur.buffer);function cr(r){return ur[0]=r,fr[0]}var lr=127,sr=new tr(1);new or(sr.buffer)[0]=2139095040;var gr=sr[0],pr=new tr(1);new or(pr.buffer)[0]=4286578688;var vr=pr[0];function yr(r){return r!=r}var wr=Math.floor;function hr(r){return wr(r)===r}function dr(r){return hr(r/2)}function br(r){return dr(r>0?r-1:r+1)}var mr=Number,Ar=mr.NEGATIVE_INFINITY;function Er(r){return r===K||r===Ar}var Ir=Math.sqrt;function Sr(r){return Math.abs(r)}function Ur(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Vr,Fr="function"==typeof Float64Array,Tr="function"==typeof Float64Array?Float64Array:null,Nr="function"==typeof Float64Array?Float64Array:void 0;Vr=function(){var r,n,t;if("function"!=typeof Tr)return!1;try{n=new Tr([1,3.14,-3.14,NaN]),t=n,r=(Fr&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Nr:function(){throw new Error("not implemented")};var _r,jr=Vr,Or="function"==typeof Uint8Array,xr="function"==typeof Uint8Array?Uint8Array:null,kr="function"==typeof Uint8Array?Uint8Array:void 0;_r=function(){var r,n,t;if("function"!=typeof xr)return!1;try{n=new xr(n=[1,3.14,-3.14,256,257]),t=n,r=(Or&&t instanceof Uint8Array||"[object Uint8Array]"===Y(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?kr:function(){throw new Error("not implemented")};var Wr,Br=_r,Hr="function"==typeof Uint16Array,Lr="function"==typeof Uint16Array?Uint16Array:null,Gr="function"==typeof Uint16Array?Uint16Array:void 0;Wr=function(){var r,n,t;if("function"!=typeof Lr)return!1;try{n=new Lr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Hr&&t instanceof Uint16Array||"[object Uint16Array]"===Y(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};var Pr,Rr={uint16:Wr,uint8:Br};(Pr=new Rr.uint16(1))[0]=4660;var $r,Mr,Cr=52===new Rr.uint8(Pr.buffer)[0];!0===Cr?($r=1,Mr=0):($r=0,Mr=1);var Dr={HIGH:$r,LOW:Mr},qr=new jr(1),Zr=new or(qr.buffer),zr=Dr.HIGH,Xr=Dr.LOW;function Yr(r,n,t,e){return qr[0]=r,n[e]=Zr[zr],n[e+t]=Zr[Xr],n}function Jr(r){return Yr(r,[0,0],1,0)}Ur(Jr,"assign",Yr);var Kr=!0===Cr?0:1,Qr=new jr(1),rn=new or(Qr.buffer);function nn(r,n){return Qr[0]=r,rn[Kr]=n>>>0,Qr[0]}function tn(r){return 0|r}var en,an,on=2147483647,un=!0===Cr?1:0,fn=new jr(1),cn=new or(fn.buffer);function ln(r){return fn[0]=r,cn[un]}!0===Cr?(en=1,an=0):(en=0,an=1);var sn={HIGH:en,LOW:an},gn=new jr(1),pn=new or(gn.buffer),vn=sn.HIGH,yn=sn.LOW;function wn(r,n){return pn[vn]=r,pn[yn]=n,gn[0]}var hn=[0,0];function dn(r,n){var t,e;return Jr.assign(r,hn,1,0),t=hn[0],t&=on,e=ln(n),wn(t|=e&=2147483648,hn[1])}var bn=!0===Cr?1:0,mn=new jr(1),An=new or(mn.buffer);function En(r,n){return mn[0]=r,An[bn]=n>>>0,mn[0]}var In=1023,Sn=1048576,Un=[1,1.5],Vn=[0,.5849624872207642],Fn=[0,1.350039202129749e-8],Tn=22250738585072014e-324;function Nn(r,n,t,e){return yr(r)||Er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Sr(r)<Tn?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}Ur((function(r){return Nn(r,[0,0],1,0)}),"assign",Nn);var _n=2146435072,jn=[0,0],On=[0,0];function xn(r,n){var t,e;return 0===n||0===r||yr(r)||Er(r)?r:(Nn(r,jn,1,0),n+=jn[1],n+=function(r){var n=ln(r);return(n=(n&_n)>>>20)-In|0}(r=jn[0]),n<-1074?dn(0,r):n>1023?r<0?Ar:K:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Jr.assign(r,On,1,0),t=On[0],t&=2148532223,e*wn(t|=n+In<<20,On[1])))}var kn=1048575,Wn=1048576,Bn=1083179008,Hn=1e300,Ln=1e-300,Gn=[0,0],Pn=[0,0];function Rn(r,n){var t,e,i,a,o,u,f,c,l,s,g,p,v,y;if(yr(r)||yr(n))return NaN;if(Jr.assign(n,Gn,1,0),o=Gn[0],0===Gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ir(r);if(-.5===n)return 1/Ir(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Er(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Sr(r)<1==(n===K)?0:K}(r,n)}if(Jr.assign(r,Gn,1,0),a=Gn[0],0===Gn[1]){if(0===a)return function(r,n){return n===Ar?K:n===K?0:n>0?br(n)?r:0:br(n)?dn(K,r):K}(r,n);if(1===r)return 1;if(-1===r&&br(n))return-1;if(Er(r))return r===Ar?Rn(-0,-n):n<0?0:K}if(r<0&&!1===hr(n))return(r-r)/(r-r);if(i=Sr(r),t=a&on|0,e=o&on|0,f=o>>>31|0,u=(u=a>>>31|0)&&br(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(ln(r)&on)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Hn*Hn:u*Ln*Ln;if(t>1072693248)return 0===f?u*Hn*Hn:u*Ln*Ln;g=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=nn(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Pn,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,l,s,g,p,v,y,w,h,d,b,m,A,E,I;return m=0,t<Sn&&(m-=53,t=ln(n*=9007199254740992)),m+=(t>>20)-In|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,t-=Sn),o=nn(i=(d=(n=En(n,t))-(c=Un[E]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=En(0,e+=E<<18),h=(a=i*i)*a*(0===(I=a)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=nn(f=3+(a=o*o)+(h+=(u=b*(d-o*f-o*(n-(f-c))))*(o+i)),0),y=(p=-7.028461650952758e-9*(s=nn(s=(d=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(s-d))+Fn[E])-((v=nn(v=(g=.9617967009544373*s)+p+(l=Vn[E])+(w=m),0))-w-l-g),r[0]=v,r[1]=y,r}(Pn,i,t);if(p=(s=(n-(c=nn(n,0)))*g[0]+n*g[1])+(l=c*g[0]),Jr.assign(p,Gn,1,0),v=tn(Gn[0]),y=tn(Gn[1]),v>=Bn){if(0!=(v-Bn|y))return u*Hn*Hn;if(s+8008566259537294e-32>p-l)return u*Hn*Hn}else if((v&on)>=1083231232){if(0!=(v-3230714880|y))return u*Ln*Ln;if(s<=p-l)return u*Ln*Ln}return p=function(r,n,t){var e,i,a,o,u,f,c,l,s,g;return s=((l=r&on|0)>>20)-In|0,c=0,l>1071644672&&(i=En(0,((c=r+(Wn>>s+1)>>>0)&~(kn>>(s=((c&on)>>20)-In|0)))>>>0),c=(c&kn|Wn)>>20-s>>>0,r<0&&(c=-c),n-=i),r=tn(r=ln(f=1-((f=(a=.6931471824645996*(i=nn(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(g=i)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?xn(f,c):En(f,r)}(v,l,s),u*p}var $n="function"==typeof Math.fround?Math.fround:null,Mn=new tr(1),Cn="function"==typeof $n?$n:function(r){return Mn[0]=r,Mn[0]},Dn=new or(1),qn=new tr(Dn.buffer);function Zn(r,n,t,e){return r!=r||r===gr||r===vr?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<11754943508222875e-54?(r=Cn(8388608*r),n[e]=r,n[e+t]=-23,n):(n[e]=r,n[e+t]=0,n)}function zn(r){return Zn(r,[0,0],1,0)}function Xn(r){return"number"==typeof r}Ur(zn,"assign",Zn);var Yn=mr.prototype.toString,Jn=M();function Kn(r){return"object"==typeof r&&(r instanceof mr||(Jn?function(r){try{return Yn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function Qn(r){return Xn(r)||Kn(r)}function rt(r){return r<K&&r>Ar&&hr(r)}function nt(r){return Xn(r)&&rt(r)}function tt(r){return Kn(r)&&rt(r.valueOf())}function et(r){return nt(r)||tt(r)}function it(r){return nt(r)&&r>=0}function at(r){return tt(r)&&r.valueOf()>=0}function ot(r){return it(r)||at(r)}function ut(r){return"string"==typeof r}Ur(Qn,"isPrimitive",Xn),Ur(Qn,"isObject",Kn),Ur(et,"isPrimitive",nt),Ur(et,"isObject",tt),Ur(ot,"isPrimitive",it),Ur(ot,"isObject",at);var ft=String.prototype.valueOf,ct=M();function lt(r){return"object"==typeof r&&(r instanceof String||(ct?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object String]"===Y(r)))}function st(r){return ut(r)||lt(r)}Ur(st,"isPrimitive",ut),Ur(st,"isObject",lt);var gt=9007199254740991,pt=void 0!==String.prototype.repeat,vt=String.prototype.repeat,yt=pt?function(r,n){return vt.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t},wt=Math.ceil;function ht(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=wt(e),r+yt(t,e))}function dt(r,n,t){var e;if(!ut(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!it(n))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!ut(e=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(n>gt)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return ht(r,n,e)}function bt(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=wt(e),yt(t,e)+r)}function mt(r,n,t){var e;if(!ut(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!it(n))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!ut(e=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>gt)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return bt(r,n,e)}function At(r,n){if(!ut(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!it(n))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return yt(r,n)}function Et(r){for(var n,t="";r>0;)t=(n=r/2)===(r=wr(n))?"0"+t:"1"+t;return t}var It={};P(It,"exponentf",(function(r){var n=cr(r);return(n=(2139095040&n)>>>23)-lr})),P(It,"fromBinaryStringf",(function(r){var n,t,e;if(32!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,9),2)-lr,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=Rn(2,-(n+1)));return t}(r.substring(9)),-127===e){if(0===t)return 1===n?0:-0;e=-126}else{if(128===e)return 0===t?1===n?gr:vr:NaN;t+=1}return Cn(n*t*Rn(2,e))})),P(It,"fromWordf",(function(r){return Dn[0]=r,qn[0]})),P(It,"normalizef",zn),P(It,"signbitf",(function(r){return!!(cr(r)>>>31)})),P(It,"significandf",(function(r){return 8388607&cr(r)})),P(It,"toBinaryStringf",(function(r){var n,t,e,i,a,o,u;if(t=r<0||1/r===vr?"1":"0",r===gr||r===vr)return t+(i=At("1",8))+(e=At("0",23));if(r!=r)return t+(i=At("1",8))+(e="1"+At("0",22));if(0===r)return t+(i=At("0",8))+(e=At("0",23));if(o=(r=Sr(r))-(a=wr(r)),a=Et(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=149,e=0;e<149&&((t=2*r)>=1?(r=t-1,n+="1",149===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>24));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-127&&(n=126),e=e.substring(n)):e=e.substring(1),t+(i=mt(i=Et(i+lr),8,"0"))+(e=dt(e,23,"0").substring(0,23))})),P(It,"float32ToInt32",(function(r){return 0|r})),P(It,"float32ToUint32",(function(r){return r>>>0})),P(It,"toWordf",cr);var St={};P(St,"base",It);var Ut=!0===Cr?1:0,Vt=new jr(1),Ft=new or(Vt.buffer);function Tt(r){return Vt[0]=r,Ft[Ut]}var Nt,_t="function"==typeof DataView,jt="function"==typeof ArrayBuffer,Ot="function"==typeof ArrayBuffer?ArrayBuffer:null,xt="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Nt=function(){var r,n,t,e;if("function"!=typeof Ot)return!1;try{t=new Ot(16),e=t,(r=(jt&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===Y(e))&&"function"==typeof Ot.isView)&&((n=new jr(t))[0]=-3.14,n[1]=NaN,r=r&&Ot.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?xt:function(){throw new Error("not implemented")};var kt,Wt=Nt,Bt="function"==typeof DataView?DataView:null,Ht="function"==typeof DataView?DataView:void 0;kt=function(){var r,n,t,e;if("function"!=typeof Bt)return!1;try{t=new Wt(24),n=new Bt(t,8),e=n,(r=(_t&&e instanceof DataView||"[object DataView]"===Y(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),r=r&&n.buffer===t&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){r=!1}return r}()?Ht:function(){throw new Error("not implemented")};var Lt,Gt,Pt=kt,Rt=4294967296,$t=new Br(8);!0===Cr?(Lt=1,Gt=0):(Lt=0,Gt=1);var Mt={HIGH:Lt,LOW:Gt},Ct=new jr(1),Dt=new or(Ct.buffer),qt=Mt.HIGH,Zt=Mt.LOW,zt=!0===Cr?0:1,Xt=new jr(1),Yt=new or(Xt.buffer);function Jt(r,n,t,e){return yr(r)||Er(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Sr(r)<Tn?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}function Kt(r){return Jt(r,[0,0],1,0)}Ur(Kt,"assign",Jt);var Qt=!0===Cr?1:0,re=new jr(1),ne=new or(re.buffer),te=!0===Cr?0:1,ee=new jr(1),ie=new or(ee.buffer);function ae(r){for(var n,t="";r>0;)t=(n=r/2)===(r=wr(n))?"0"+t:"1"+t;return t}var oe=1075;function ue(r){var n,t,e,i;return n=new Br(8),0===r||(i=(4294967295&r)>>>0,e=wr(r/4294967296),t=new Pt(n.buffer),Cr?(t.setUint32(0,i,Cr),t.setUint32(4,e,Cr)):(t.setUint32(0,e,Cr),t.setUint32(4,i,Cr))),n}var fe,ce,le=new Br(8),se=new Pt(le.buffer);function ge(r){return r>>>0}Ur(ue,"assign",(function(r,n,t,e){var i,a,o;if(0===r){for(o=0;o<le.length;o++)n[e]=0,e+=t;return n}for(a=(4294967295&r)>>>0,i=wr(r/4294967296),Cr?(se.setUint32(0,a,Cr),se.setUint32(4,i,Cr)):(se.setUint32(0,i,Cr),se.setUint32(4,a,Cr)),o=0;o<le.length;o++)n[e]=le[o],e+=t;return n})),!0===Cr?(fe=1,ce=0):(fe=0,ce=1);var pe={HIGH:fe,LOW:ce},ve=new jr(1),ye=new or(ve.buffer),we=pe.HIGH,he=pe.LOW;function de(r,n,t,e){return ve[0]=r,n[e]=ye[we],n[e+t]=ye[he],n}function be(r){return de(r,[0,0],1,0)}Ur(be,"assign",de);var me={};P(me,"exponent",(function(r){var n=Tt(r);return(n=(n&_n)>>>20)-In|0})),P(me,"fromBinaryString",(function(r){var n,t,e;if(64!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,12),2)-In,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=Rn(2,-(n+1)));return t}(r.substring(12)),-1023===e){if(0===t)return 1===n?0:-0;e=-1022}else{if(1024===e)return 0===t?1===n?K:Ar:NaN;t+=1}return n*t*Rn(2,e)})),P(me,"fromInt64Bytes",(function(r,n,t){var e,i,a,o,u;if(1===n)o=r;else{for(o=$t,u=0;u<8;u++)o[u]=r[t],t+=n;t=0}return e=new Pt(o.buffer,o.byteOffset,o.byteLength),Cr?(a=e.getInt32(t,Cr),i=e.getInt32(t+4,Cr)):(i=e.getInt32(t,Cr),a=e.getInt32(t+4,Cr)),a<0&&(a+=Rt),i*Rt+a})),P(me,"fromWords",(function(r,n){return Dt[qt]=r,Dt[Zt]=n,Ct[0]})),P(me,"getHighWord",Tt),P(me,"getLowWord",(function(r){return Xt[0]=r,Yt[zt]})),P(me,"normalize",Kt),P(me,"setHighWord",(function(r,n){return re[0]=r,ne[Qt]=n>>>0,re[0]})),P(me,"setLowWord",(function(r,n){return ee[0]=r,ie[te]=n>>>0,ee[0]})),P(me,"signbit",(function(r){return!!(Tt(r)>>>31)})),P(me,"toBinaryString",(function(r){var n,t,e,i,a,o,u;if(t=r<0||function(r){return 0===r&&1/r===Ar}(r)?"1":"0",r===K||r===Ar)return t+(i=At("1",11))+(e=At("0",52));if(yr(r))return t+(i=At("1",11))+(e="1"+At("0",51));if(0===r)return t+(i=At("0",11))+(e=At("0",52));if(o=(r=Sr(r))-(a=wr(r)),a=ae(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=oe,e=0;e<oe&&((t=2*r)>=1?(r=t-1,n+="1",i===oe&&(i=e)):(r=t,n+="0"),!(1===t||e-i>54));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-1023&&(n=1022),e=e.substring(n)):e=e.substring(1),t+(i=mt(i=ae(i+In),11,"0"))+(e=dt(e,52,"0").substring(0,52))})),P(me,"float64ToFloat32",Cn),P(me,"float64ToInt32",(function(r){return 0|r})),P(me,"float64ToInt64Bytes",ue),P(me,"float64ToUint32",ge),P(me,"toWords",be);var Ae={};function Ee(r){return r>>>0}P(Ae,"base",me),P(Ae,"reviver",(function(r,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return K;if("-Infinity"===n.value)return Ar}return n})),P(Ae,"toJSON",(function(r){if("number"!=typeof r)throw new TypeError(O("invalid argument. Must provide a number. Value: `%s`.",r));return r!=r?{type:"float64",value:"NaN"}:r===K?{type:"float64",value:"+Infinity"}:r===Ar?{type:"float64",value:"-Infinity"}:r}));var Ie={};P(Ie,"int32ToUint32",Ee);var Se={};P(Se,"base",Ie);var Ue={};P(Ue,"fromBinaryStringUint8",(function(r){var n,t;if(8!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=Rn(2,8-t-1));return n})),P(Ue,"toBinaryStringUint8",(function(r){var n;return n=function(r){var n,t,e="";for(n=8;r>0&&n;)e=(t=r/2)===(r=wr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=mt(n,8,"0")}));var Ve={};P(Ve,"base",Ue);var Fe={};P(Fe,"fromBinaryStringUint16",(function(r){var n,t;if(16!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=Rn(2,16-t-1));return n})),P(Fe,"toBinaryStringUint16",(function(r){var n;return n=function(r){var n,t,e="";for(n=16;r>0&&n;)e=(t=r/2)===(r=wr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=mt(n,16,"0")}));var Te={};P(Te,"base",Fe);var Ne=Ee(31),_e=Ee(31),je={};P(je,"fromBinaryStringUint32",(function(r){var n,t;if(32!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=Rn(2,32-t-1));return ge(n)})),P(je,"rotl32",(function(r,n){return Ee(r<<(n&=Ne)|r>>>(-n&Ne))})),P(je,"rotr32",(function(r,n){return Ee(r>>>(n&=_e)|r<<(-n&_e))})),P(je,"toBinaryStringUint32",(function(r){var n;return n=function(r){var n,t,e="";for(n=32;r>0&&n;)e=(t=r/2)===(r=wr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=mt(n,32,"0")})),P(je,"uint32ToInt32",(function(r){return 0|r}));var Oe={};P(Oe,"base",je);var xe={};return P(xe,"Number",R),P(xe,"float32",St),P(xe,"float64",Ae),P(xe,"int32",Se),P(xe,"uint8",Ve),P(xe,"uint16",Te),P(xe,"uint32",Oe),xe},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=n();
//# sourceMappingURL=browser.js.map
