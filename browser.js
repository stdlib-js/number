// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,g=/e\+(\d)$/,p=/e-(\d)$/,v=/^(\d+)$/,y=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,d=/(\..*[^0])0*e/;function b(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=l.call(e,d,"$1e"),e=l.call(e,h,"e"),e=l.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=l.call(e,g,"e+0$1"),e=l.call(e,p,"e-0$1"),r.alternate&&(e=l.call(e,v,"$1."),e=l.call(e,y,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):c.call(e)}function m(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}var A=String.fromCharCode,E=Array.isArray;function S(r){return r!=r}function I(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function V(r){var n,t,e,a,o,f,c,s,l,g,p,v,y;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=I(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(c=e.mapping),t=e.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[c],10),c+=1,S(e.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[c],10),c+=1,S(e.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[c],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1,e.arg=String(e.arg);break;case"c":if(!S(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=S(o)?String(e.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=b(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(g=e.arg,p=e.width,v=e.padRight,y=void 0,(y=p-g.length)<0?g:g=v?g+m(y):m(y)+g)),f+=e.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function T(r){var n,t,e,i;for(t=[],i=0,e=U.exec(r);e;)(n=r.slice(i,U.lastIndex-e[0].length)).length&&t.push(n),t.push(F(e)),i=U.lastIndex,e=U.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function _(r){var n,t;if("string"!=typeof r)throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[T(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return V.apply(null,n)}var j=Object.prototype,N=j.toString,O=j.__defineGetter__,x=j.__defineSetter__,k=j.__lookupGetter__,W=j.__lookupSetter__,B=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(_("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(_("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(k.call(r,n)||W.call(r,n)?(e=r.__proto__,r.__proto__=j,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,t.get),o&&x&&x.call(r,n,t.set),r};function H(r,n,t){B(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}var L=Number,G={};H(G,"isSameValuef",(function(r,n){return r===n?0!==r||1/r==1/n:r!=r&&n!=n})),H(G,"isSameValueZerof",(function(r,n){return r===n||r!=r&&n!=n}));var P="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return P&&"symbol"==typeof Symbol.toStringTag}var $,M=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof D?D.toStringTag:"";$=R()?function(r){var n,t,e,i,a;if(null==r)return M.call(r);t=r[Z],a=Z,n=null!=(i=r)&&C.call(i,a);try{r[Z]=void 0}catch(n){return M.call(r)}return e=M.call(r),n?r[Z]=t:delete r[Z],e}:function(r){return M.call(r)};var q,z=$,X="function"==typeof Float32Array,Y=Number.POSITIVE_INFINITY,J="function"==typeof Float32Array?Float32Array:null,K="function"==typeof Float32Array?Float32Array:void 0;q=function(){var r,n,t;if("function"!=typeof J)return!1;try{n=new J([1,3.14,-3.14,5e40]),t=n,r=(X&&t instanceof Float32Array||"[object Float32Array]"===z(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Y}catch(n){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=q,nr="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,er="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,n,t;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?er:function(){throw new Error("not implemented")};var ir=Q,ar=new rr(1),or=new ir(ar.buffer);function ur(r){return ar[0]=r,or[0]}var fr=127,cr=new rr(1);new ir(cr.buffer)[0]=2139095040;var sr=cr[0],lr=new rr(1);new ir(lr.buffer)[0]=4286578688;var gr=lr[0];function pr(r){return r!=r}var vr=Math.floor;function yr(r){return vr(r)===r}function wr(r){return yr(r/2)}function hr(r){return wr(r>0?r-1:r+1)}var dr=Number,br=dr.NEGATIVE_INFINITY;function mr(r){return r===Y||r===br}var Ar=Math.sqrt;function Er(r){return Math.abs(r)}function Sr(r,n,t){B(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Ir,Vr="function"==typeof Float64Array,Ur="function"==typeof Float64Array?Float64Array:null,Fr="function"==typeof Float64Array?Float64Array:void 0;Ir=function(){var r,n,t;if("function"!=typeof Ur)return!1;try{n=new Ur([1,3.14,-3.14,NaN]),t=n,r=(Vr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Fr:function(){throw new Error("not implemented")};var Tr,_r=Ir,jr="function"==typeof Uint8Array,Nr="function"==typeof Uint8Array?Uint8Array:null,Or="function"==typeof Uint8Array?Uint8Array:void 0;Tr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr(n=[1,3.14,-3.14,256,257]),t=n,r=(jr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Or:function(){throw new Error("not implemented")};var xr,kr=Tr,Wr="function"==typeof Uint16Array,Br="function"==typeof Uint16Array?Uint16Array:null,Hr="function"==typeof Uint16Array?Uint16Array:void 0;xr=function(){var r,n,t;if("function"!=typeof Br)return!1;try{n=new Br(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Wr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Lr,Gr={uint16:xr,uint8:kr};(Lr=new Gr.uint16(1))[0]=4660;var Pr,Rr,$r=52===new Gr.uint8(Lr.buffer)[0];!0===$r?(Pr=1,Rr=0):(Pr=0,Rr=1);var Mr={HIGH:Pr,LOW:Rr},Cr=new _r(1),Dr=new ir(Cr.buffer),Zr=Mr.HIGH,qr=Mr.LOW;function zr(r,n,t,e){return Cr[0]=r,n[e]=Dr[Zr],n[e+t]=Dr[qr],n}function Xr(r){return zr(r,[0,0],1,0)}Sr(Xr,"assign",zr);var Yr=!0===$r?0:1,Jr=new _r(1),Kr=new ir(Jr.buffer);function Qr(r,n){return Jr[0]=r,Kr[Yr]=n>>>0,Jr[0]}function rn(r){return 0|r}var nn,tn,en=2147483647,an=2147483648,on=!0===$r?1:0,un=new _r(1),fn=new ir(un.buffer);function cn(r){return un[0]=r,fn[on]}!0===$r?(nn=1,tn=0):(nn=0,tn=1);var sn={HIGH:nn,LOW:tn},ln=new _r(1),gn=new ir(ln.buffer),pn=sn.HIGH,vn=sn.LOW;function yn(r,n){return gn[pn]=r,gn[vn]=n,ln[0]}var wn=[0,0];function hn(r,n){var t,e;return Xr.assign(r,wn,1,0),t=wn[0],t&=en,e=cn(n),yn(t|=e&=an,wn[1])}var dn=1072693247,bn=1e300,mn=1e-300,An=!0===$r?1:0,En=new _r(1),Sn=new ir(En.buffer);function In(r,n){return En[0]=r,Sn[An]=n>>>0,En[0]}var Vn=1023,Un=20,Fn=1048575,Tn=1048576,_n=1072693248,jn=536870912,Nn=524288,On=9007199254740992,xn=.9617966939259756,kn=.9617967009544373,Wn=-7.028461650952758e-9,Bn=[1,1.5],Hn=[0,.5849624872207642],Ln=[0,1.350039202129749e-8],Gn=1.4426950408889634,Pn=1.4426950216293335,Rn=1.9259629911266175e-8,$n=1023,Mn=-1023,Cn=-1074,Dn=22250738585072014e-324,Zn=4503599627370496;function qn(r,n,t,e){return pr(r)||mr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Er(r)<Dn?(n[e]=r*Zn,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}Sr((function(r){return qn(r,[0,0],1,0)}),"assign",qn);var zn=2146435072,Xn=2220446049250313e-31,Yn=2148532223,Jn=[0,0],Kn=[0,0];function Qn(r,n){var t,e;return 0===n||0===r||pr(r)||mr(r)?r:(qn(r,Jn,1,0),r=Jn[0],n+=Jn[1],n+=function(r){var n=cn(r);return(n=(n&zn)>>>20)-Vn|0}(r),n<Cn?hn(0,r):n>$n?r<0?br:Y:(n<=Mn?(n+=52,e=Xn):e=1,Xr.assign(r,Kn,1,0),t=Kn[0],t&=Yn,e*yn(t|=n+Vn<<20,Kn[1])))}var rt=.6931471805599453,nt=1048575,tt=1048576,et=1071644672,it=.6931471824645996,at=-1.904654299957768e-9,ot=1072693247,ut=1105199104,ft=1139802112,ct=1083179008,st=1072693248,lt=1083231232,gt=3230714880,pt=31,vt=1e300,yt=1e-300,wt=8008566259537294e-32,ht=[0,0],dt=[0,0];function bt(r,n){var t,e,i,a,o,u,f,c,s,l,g,p,v,y;if(pr(r)||pr(n))return NaN;if(Xr.assign(n,ht,1,0),o=ht[0],0===ht[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Ar(r);if(-.5===n)return 1/Ar(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(mr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Er(r)<1==(n===Y)?0:Y}(r,n)}if(Xr.assign(r,ht,1,0),a=ht[0],0===ht[1]){if(0===a)return function(r,n){return n===br?Y:n===Y?0:n>0?hr(n)?r:0:hr(n)?hn(Y,r):Y}(r,n);if(1===r)return 1;if(-1===r&&hr(n))return-1;if(mr(r))return r===br?bt(-0,-n):n<0?0:Y}if(r<0&&!1===yr(n))return(r-r)/(r-r);if(i=Er(r),t=a&en|0,e=o&en|0,f=o>>>pt|0,u=(u=a>>>pt|0)&&hr(n)?-1:1,e>ut){if(e>ft)return function(r,n){return(cn(r)&en)<=dn?n<0?bn*bn:mn*mn:n>0?bn*bn:mn*mn}(r,n);if(t<ot)return 1===f?u*vt*vt:u*yt*yt;if(t>st)return 0===f?u*vt*vt:u*yt*yt;g=function(r,n){var t,e,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),t=(u=i*Rn-a*Gn)-((e=Qr(e=(o=Pn*i)+u,0))-o),r[0]=e,r[1]=t,r}(dt,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,s,l,g,p,v,y,w,h,d,b,m,A,E,S;return m=0,t<Tn&&(m-=53,t=cn(n*=On)),m+=(t>>Un)-Vn|0,t=(A=t&Fn|0)|_n|0,A<=235662?E=0:A<767610?E=1:(E=0,m+=1,t-=Tn),o=Qr(i=(d=(n=In(n,t))-(c=Bn[E]))*(b=1/(n+c)),0),e=(t>>1|jn)+Nn,f=In(0,e+=E<<18),h=(a=i*i)*a*(0===(S=a)?.5999999999999946:.5999999999999946+S*(.4285714285785502+S*(.33333332981837743+S*(.272728123808534+S*(.23066074577556175+.20697501780033842*S))))),f=Qr(f=3+(a=o*o)+(h+=(u=b*(d-o*f-o*(n-(f-c))))*(o+i)),0),l=Qr(l=(d=o*f)+(b=u*f+(h-(f-3-a))*i),0),g=kn*l,y=(p=Wn*l+(b-(l-d))*xn+Ln[E])-((v=Qr(v=g+p+(s=Hn[E])+(w=m),0))-w-s-g),r[0]=v,r[1]=y,r}(dt,i,t);if(p=(l=(n-(c=Qr(n,0)))*g[0]+n*g[1])+(s=c*g[0]),Xr.assign(p,ht,1,0),v=rn(ht[0]),y=rn(ht[1]),v>=ct){if(0!=(v-ct|y))return u*vt*vt;if(l+wt>p-s)return u*vt*vt}else if((v&en)>=lt){if(0!=(v-gt|y))return u*yt*yt;if(l<=p-s)return u*yt*yt}return p=function(r,n,t){var e,i,a,o,u,f,c,s,l,g;return l=((s=r&en|0)>>Un)-Vn|0,c=0,s>et&&(i=In(0,((c=r+(tt>>l+1)>>>0)&~(nt>>(l=((c&en)>>Un)-Vn|0)))>>>0),c=(c&nt|tt)>>Un-l>>>0,r<0&&(c=-c),n-=i),r=rn(r=cn(f=1-((f=(a=(i=Qr(i=t+n,0))*it)+(o=(t-(i-n))*rt+i*at))*(e=f-(i=f*f)*(0===(g=i)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Un>>>0)>>Un<=0?Qn(f,c):In(f,r)}(v,s,l),u*p}var mt="function"==typeof Math.fround?Math.fround:null,At=new rr(1),Et="function"==typeof mt?mt:function(r){return At[0]=r,At[0]},St=new ir(1),It=new rr(St.buffer),Vt=11754943508222875e-54,Ut=8388608;function Ft(r,n,t,e){return r!=r||r===sr||r===gr?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<Vt?(r=Et(r*Ut),n[e]=r,n[e+t]=-23,n):(n[e]=r,n[e+t]=0,n)}function Tt(r){return Ft(r,[0,0],1,0)}function _t(r){return"number"==typeof r}Sr(Tt,"assign",Ft);var jt=dr.prototype.toString,Nt=R();function Ot(r){return"object"==typeof r&&(r instanceof dr||(Nt?function(r){try{return jt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function xt(r){return _t(r)||Ot(r)}function kt(r){return r<Y&&r>br&&yr(r)}function Wt(r){return _t(r)&&kt(r)}function Bt(r){return Ot(r)&&kt(r.valueOf())}function Ht(r){return Wt(r)||Bt(r)}function Lt(r){return Wt(r)&&r>=0}function Gt(r){return Bt(r)&&r.valueOf()>=0}function Pt(r){return Lt(r)||Gt(r)}function Rt(r){return"string"==typeof r}Sr(xt,"isPrimitive",_t),Sr(xt,"isObject",Ot),Sr(Ht,"isPrimitive",Wt),Sr(Ht,"isObject",Bt),Sr(Pt,"isPrimitive",Lt),Sr(Pt,"isObject",Gt);var $t=String.prototype.valueOf,Mt=R();function Ct(r){return"object"==typeof r&&(r instanceof String||(Mt?function(r){try{return $t.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function Dt(r){return Rt(r)||Ct(r)}Sr(Dt,"isPrimitive",Rt),Sr(Dt,"isObject",Ct);var Zt=9007199254740991,qt=void 0!==String.prototype.repeat,zt=String.prototype.repeat,Xt=qt?function(r,n){return zt.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t},Yt=Math.ceil;function Jt(r,n,t){var e;if(!Rt(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Lt(n))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!Rt(e=t))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(n>Zt)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return function(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=Yt(e),r+Xt(t,e))}(r,n,e)}function Kt(r,n,t){var e;if(!Rt(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Lt(n))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!Rt(e=t))throw new TypeError(_("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>Zt)throw new RangeError(_("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return function(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=Yt(e),Xt(t,e)+r)}(r,n,e)}function Qt(r,n){if(!Rt(r))throw new TypeError(_("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Lt(n))throw new TypeError(_("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return Xt(r,n)}function re(r){for(var n,t="";r>0;)t=(n=r/2)===(r=vr(n))?"0"+t:"1"+t;return t}var ne=149,te=24,ee={};H(ee,"assert",G),H(ee,"exponentf",(function(r){var n=ur(r);return(n=(2139095040&n)>>>23)-fr})),H(ee,"fromBinaryStringf",(function(r){var n,t,e;if(32!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,9),2)-fr,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=bt(2,-(n+1)));return t}(r.substring(9)),-127===e){if(0===t)return 1===n?0:-0;e=-126}else{if(128===e)return 0===t?1===n?sr:gr:NaN;t+=1}return Et(n*t*bt(2,e))})),H(ee,"fromWordf",(function(r){return St[0]=r,It[0]})),H(ee,"normalizef",Tt),H(ee,"signbitf",(function(r){return!!(ur(r)>>>31)})),H(ee,"significandf",(function(r){return 8388607&ur(r)})),H(ee,"toBinaryStringf",(function(r){var n,t,e,i,a,o,u;if(t=r<0||1/r===gr?"1":"0",r===sr||r===gr)return t+(i=Qt("1",8))+(e=Qt("0",23));if(r!=r)return t+(i=Qt("1",8))+(e="1"+Qt("0",22));if(0===r)return t+(i=Qt("0",8))+(e=Qt("0",23));if(o=(r=Er(r))-(a=vr(r)),a=re(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=ne,e=0;e<ne&&((t=2*r)>=1?(r=t-1,n+="1",i===ne&&(i=e)):(r=t,n+="0"),!(1===t||e-i>te));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-127&&(n=126),e=e.substring(n)):e=e.substring(1),t+(i=Kt(i=re(i+fr),8,"0"))+(e=Jt(e,23,"0").substring(0,23))})),H(ee,"float32ToInt32",(function(r){return 0|r})),H(ee,"float32ToUint32",(function(r){return r>>>0})),H(ee,"toWordf",ur);var ie={};H(ie,"base",ee);var ae={};H(ae,"isSameValue",(function(r,n){return r===n?0!==r||1/r==1/n:r!=r&&n!=n})),H(ae,"isSameValueZero",(function(r,n){return r===n||r!=r&&n!=n}));var oe=!0===$r?1:0,ue=new _r(1),fe=new ir(ue.buffer);function ce(r){return ue[0]=r,fe[oe]}var se,le="function"==typeof DataView,ge="function"==typeof ArrayBuffer,pe="function"==typeof ArrayBuffer?ArrayBuffer:null,ve="function"==typeof ArrayBuffer?ArrayBuffer:void 0;se=function(){var r,n,t,e;if("function"!=typeof pe)return!1;try{t=new pe(16),e=t,(r=(ge&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===z(e))&&"function"==typeof pe.isView)&&((n=new _r(t))[0]=-3.14,n[1]=NaN,r=r&&pe.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?ve:function(){throw new Error("not implemented")};var ye,we=se,he="function"==typeof DataView?DataView:null,de="function"==typeof DataView?DataView:void 0;ye=function(){var r,n,t,e;if("function"!=typeof he)return!1;try{t=new we(24),n=new he(t,8),e=n,(r=(le&&e instanceof DataView||"[object DataView]"===z(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),r=r&&n.buffer===t&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){r=!1}return r}()?de:function(){throw new Error("not implemented")};var be,me,Ae=ye,Ee=4294967296,Se=new kr(8);!0===$r?(be=1,me=0):(be=0,me=1);var Ie={HIGH:be,LOW:me},Ve=new _r(1),Ue=new ir(Ve.buffer),Fe=Ie.HIGH,Te=Ie.LOW,_e=!0===$r?0:1,je=new _r(1),Ne=new ir(je.buffer),Oe=4503599627370496;function xe(r,n,t,e){return pr(r)||mr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Er(r)<Dn?(n[e]=r*Oe,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}function ke(r){return xe(r,[0,0],1,0)}Sr(ke,"assign",xe);var We=!0===$r?1:0,Be=new _r(1),He=new ir(Be.buffer),Le=!0===$r?0:1,Ge=new _r(1),Pe=new ir(Ge.buffer);function Re(r){for(var n,t="";r>0;)t=(n=r/2)===(r=vr(n))?"0"+t:"1"+t;return t}var $e=1075,Me=54;function Ce(r){var n,t,e,i;return n=new kr(8),0===r||(i=(4294967295&r)>>>0,e=vr(r/4294967296),t=new Ae(n.buffer),$r?(t.setUint32(0,i,$r),t.setUint32(4,e,$r)):(t.setUint32(0,e,$r),t.setUint32(4,i,$r))),n}var De,Ze,qe=new kr(8),ze=new Ae(qe.buffer);function Xe(r){return r>>>0}Sr(Ce,"assign",(function(r,n,t,e){var i,a,o;if(0===r){for(o=0;o<qe.length;o++)n[e]=0,e+=t;return n}for(a=(4294967295&r)>>>0,i=vr(r/4294967296),$r?(ze.setUint32(0,a,$r),ze.setUint32(4,i,$r)):(ze.setUint32(0,i,$r),ze.setUint32(4,a,$r)),o=0;o<qe.length;o++)n[e]=qe[o],e+=t;return n})),!0===$r?(De=1,Ze=0):(De=0,Ze=1);var Ye={HIGH:De,LOW:Ze},Je=new _r(1),Ke=new ir(Je.buffer),Qe=Ye.HIGH,ri=Ye.LOW;function ni(r,n,t,e){return Je[0]=r,n[e]=Ke[Qe],n[e+t]=Ke[ri],n}function ti(r){return ni(r,[0,0],1,0)}Sr(ti,"assign",ni);var ei={};H(ei,"assert",ae),H(ei,"exponent",(function(r){var n=ce(r);return(n=(n&zn)>>>20)-Vn|0})),H(ei,"fromBinaryString",(function(r){var n,t,e;if(64!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,12),2)-Vn,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=bt(2,-(n+1)));return t}(r.substring(12)),e===-Vn){if(0===t)return 1===n?0:-0;e=-1022}else{if(e===Vn+1)return 0===t?1===n?Y:br:NaN;t+=1}return n*t*bt(2,e)})),H(ei,"fromInt64Bytes",(function(r,n,t){var e,i,a,o,u;if(1===n)o=r;else{for(o=Se,u=0;u<8;u++)o[u]=r[t],t+=n;t=0}return e=new Ae(o.buffer,o.byteOffset,o.byteLength),$r?(a=e.getInt32(t,$r),i=e.getInt32(t+4,$r)):(i=e.getInt32(t,$r),a=e.getInt32(t+4,$r)),a<0&&(a+=Ee),i*Ee+a})),H(ei,"fromWords",(function(r,n){return Ue[Fe]=r,Ue[Te]=n,Ve[0]})),H(ei,"getHighWord",ce),H(ei,"getLowWord",(function(r){return je[0]=r,Ne[_e]})),H(ei,"normalize",ke),H(ei,"setHighWord",(function(r,n){return Be[0]=r,He[We]=n>>>0,Be[0]})),H(ei,"setLowWord",(function(r,n){return Ge[0]=r,Pe[Le]=n>>>0,Ge[0]})),H(ei,"signbit",(function(r){return!!(ce(r)>>>31)})),H(ei,"toBinaryString",(function(r){var n,t,e,i,a,o,u;if(t=r<0||function(r){return 0===r&&1/r===br}(r)?"1":"0",r===Y||r===br)return t+(i=Qt("1",11))+(e=Qt("0",52));if(pr(r))return t+(i=Qt("1",11))+(e="1"+Qt("0",51));if(0===r)return t+(i=Qt("0",11))+(e=Qt("0",52));if(o=(r=Er(r))-(a=vr(r)),a=Re(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=$e,e=0;e<$e&&((t=2*r)>=1?(r=t-1,n+="1",i===$e&&(i=e)):(r=t,n+="0"),!(1===t||e-i>Me));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-Vn&&(n=Vn-1),e=e.substring(n)):e=e.substring(1),t+(i=Kt(i=Re(i+Vn),11,"0"))+(e=Jt(e,52,"0").substring(0,52))})),H(ei,"float64ToFloat32",Et),H(ei,"float64ToInt32",(function(r){return 0|r})),H(ei,"float64ToInt64Bytes",Ce),H(ei,"float64ToUint32",Xe),H(ei,"toWords",ti);var ii={};function ai(r){return r>>>0}H(ii,"base",ei),H(ii,"reviver",(function(r,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return Y;if("-Infinity"===n.value)return br}return n})),H(ii,"toJSON",(function(r){if("number"!=typeof r)throw new TypeError(_("invalid argument. Must provide a number. Value: `%s`.",r));return r!=r?{type:"float64",value:"NaN"}:r===Y?{type:"float64",value:"+Infinity"}:r===br?{type:"float64",value:"-Infinity"}:r}));var oi={};H(oi,"int32ToUint32",ai);var ui={};H(ui,"base",oi);var fi=8,ci={};H(ci,"fromBinaryStringUint8",(function(r){var n,t;if(8!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=bt(2,8-t-1));return n})),H(ci,"toBinaryStringUint8",(function(r){return Kt(function(r){var n,t,e="";for(n=fi;r>0&&n;)e=(t=r/2)===(r=vr(t))?"0"+e:"1"+e,n-=1;return e}(r),8,"0")}));var si={};H(si,"base",ci);var li=16,gi={};H(gi,"fromBinaryStringUint16",(function(r){var n,t;if(16!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=bt(2,16-t-1));return n})),H(gi,"toBinaryStringUint16",(function(r){return Kt(function(r){var n,t,e="";for(n=li;r>0&&n;)e=(t=r/2)===(r=vr(t))?"0"+e:"1"+e,n-=1;return e}(r),16,"0")}));var pi={};H(pi,"base",gi);var vi=ai(31),yi=ai(31),wi=32,hi={};H(hi,"fromBinaryStringUint32",(function(r){var n,t;if(32!==r.length)throw new Error(_("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=bt(2,32-t-1));return Xe(n)})),H(hi,"rotl32",(function(r,n){return ai(r<<(n&=vi)|r>>>(-n&vi))})),H(hi,"rotr32",(function(r,n){return ai(r>>>(n&=yi)|r<<(-n&yi))})),H(hi,"toBinaryStringUint32",(function(r){return Kt(function(r){var n,t,e="";for(n=wi;r>0&&n;)e=(t=r/2)===(r=vr(t))?"0"+e:"1"+e,n-=1;return e}(r),32,"0")})),H(hi,"uint32ToInt32",(function(r){return 0|r}));var di={};H(di,"base",hi);var bi={};return H(bi,"Number",L),H(bi,"float32",ie),H(bi,"float64",ii),H(bi,"int32",ui),H(bi,"uint8",si),H(bi,"uint16",pi),H(bi,"uint32",di),bi},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=n();
//# sourceMappingURL=browser.js.map
