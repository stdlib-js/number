// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function i(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function u(r,n,t){var e=!1,u=n-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=t?r+i(u):i(u)+r,e&&(r="-"+r)),r}var o=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function a(r){var n,t,i;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!e(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==n)&&(i=4294967295+i+1),i<0?(t=(-i).toString(n),r.precision&&(t=u(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(n),i||r.precision?r.precision&&(t=u(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===f.call(r.specifier)?f.call(t):o.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,v=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,_=/(\..*[^0])0*e/;function m(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,_,"$1e"),t=p.call(t,h,"e"),t=p.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,g,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,d,"$1."),t=p.call(t,b,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v.call(r.specifier)?v.call(t):s.call(t)}function O(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function j(r,n,t){var e=n-r.length;return e<0?r:r=t?r+O(e):O(e)+r}var A=String.fromCharCode,E=isNaN,I=Array.isArray;function S(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,t,e,i,o,f,l,s,v;if(!I(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(e=r[s]))f+=e;else{if(n=void 0!==e.precision,!(e=S(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),t=e.flags,v=0;v<t.length;v++)switch(i=t.charAt(v)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,E(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,E(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=a(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!E(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=E(o)?String(e.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=u(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=j(e.arg,e.width,e.padRight)),f+=e.arg||"",l+=1}return f}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function T(r){var n,t,e,i;for(t=[],i=0,e=V.exec(r);e;)(n=r.slice(i,V.lastIndex-e[0].length)).length&&t.push(n),t.push(F(e)),i=V.lastIndex,e=V.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function N(r){return"string"==typeof r}function z(r){var n,t,e;if(!N(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=T(r),(t=new Array(arguments.length))[0]=n,e=1;e<t.length;e++)t[e]=arguments[e];return U.apply(null,t)}var x=Object.freeze({__proto__:null,default:z}),k=Object.prototype,W=k.toString,B=k.__defineGetter__,H=k.__defineSetter__,L=k.__lookupGetter__,P=k.__lookupSetter__,G=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var e,i,u,o;if("object"!=typeof r||null===r||"[object Array]"===W.call(r))throw new TypeError(z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===W.call(t))throw new TypeError(z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,n)||P.call(r,n)?(e=r.__proto__,r.__proto__=k,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,o="set"in t,i&&(u||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&B&&B.call(r,n,t.get),o&&H&&H.call(r,n,t.set),r};function M(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}function R(r){var n=r.default;if("function"==typeof n){var t=function(){return n.apply(this,arguments)};t.prototype=n.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var $=Number,D=R(Object.freeze({__proto__:null,default:M})),C="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return C&&"symbol"==typeof Symbol.toStringTag}var Z,X=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";Z=q()?function(r){var n,t,e,i,u;if(null==r)return X.call(r);t=r[K],u=K,n=null!=(i=r)&&Y.call(i,u);try{r[K]=void 0}catch(n){return X.call(r)}return e=X.call(r),n?r[K]=t:delete r[K],e}:function(r){return X.call(r)};var Q,rr=Z,nr="function"==typeof Float32Array,tr=Number.POSITIVE_INFINITY,er=Object.freeze({__proto__:null,default:tr}),ir="function"==typeof Float32Array?Float32Array:null,ur="function"==typeof Float32Array?Float32Array:void 0;Q=function(){var r,n,t;if("function"!=typeof ir)return!1;try{n=new ir([1,3.14,-3.14,5e40]),t=n,r=(nr&&t instanceof Float32Array||"[object Float32Array]"===rr(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===tr}catch(n){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var or,fr=Q,ar=R(Object.freeze({__proto__:null,default:fr})),cr="function"==typeof Uint32Array,lr="function"==typeof Uint32Array?Uint32Array:null,sr="function"==typeof Uint32Array?Uint32Array:void 0;or=function(){var r,n,t;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(cr&&t instanceof Uint32Array||"[object Uint32Array]"===rr(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var vr,pr,gr,yr,dr=or,br=R(Object.freeze({__proto__:null,default:dr}));function wr(){if(yr)return gr;yr=1;var r=function(){if(pr)return vr;pr=1;var r=br,n=new ar(1),t=new r(n.buffer);return vr=function(r){return n[0]=r,t[0]}}();return gr=r}var hr,_r,mr,Or,jr=R(Object.freeze({__proto__:null,default:127}));function Ar(){if(Or)return mr;Or=1;var r=function(){if(_r)return hr;_r=1;var r=wr(),n=jr;return hr=function(t){var e=r(t);return(e=(2139095040&e)>>>23)-n}}();return mr=r}var Er=new fr(1);new dr(Er.buffer)[0]=2139095040;var Ir=Er[0],Sr=R(Object.freeze({__proto__:null,default:Ir})),Ur=new fr(1);new dr(Ur.buffer)[0]=4286578688;var Vr=Ur[0],Fr=R(Object.freeze({__proto__:null,default:Vr}));function Tr(r){return r!=r}var Nr=Object.freeze({__proto__:null,default:Tr}),zr=Math.floor,xr=Object.freeze({__proto__:null,default:zr});function kr(r){return zr(r)===r}function Wr(r){return kr(r/2)}function Br(r){return Wr(r>0?r-1:r+1)}var Hr=Number,Lr=Hr.NEGATIVE_INFINITY,Pr=Object.freeze({__proto__:null,default:Lr});function Gr(r){return r===tr||r===Lr}var Mr=Object.freeze({__proto__:null,default:Gr}),Rr=Math.sqrt;function $r(r){return Math.abs(r)}var Dr,Cr=Object.freeze({__proto__:null,default:$r}),qr="function"==typeof Float64Array,Zr="function"==typeof Float64Array?Float64Array:null,Xr="function"==typeof Float64Array?Float64Array:void 0;Dr=function(){var r,n,t;if("function"!=typeof Zr)return!1;try{n=new Zr([1,3.14,-3.14,NaN]),t=n,r=(qr&&t instanceof Float64Array||"[object Float64Array]"===rr(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?Xr:function(){throw new Error("not implemented")};var Yr,Jr=Dr,Kr=Object.freeze({__proto__:null,default:Jr}),Qr="function"==typeof Uint8Array,rn="function"==typeof Uint8Array?Uint8Array:null,nn="function"==typeof Uint8Array?Uint8Array:void 0;Yr=function(){var r,n,t;if("function"!=typeof rn)return!1;try{n=new rn(n=[1,3.14,-3.14,256,257]),t=n,r=(Qr&&t instanceof Uint8Array||"[object Uint8Array]"===rr(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var tn,en=Yr,un=Object.freeze({__proto__:null,default:en}),on="function"==typeof Uint16Array,fn="function"==typeof Uint16Array?Uint16Array:null,an="function"==typeof Uint16Array?Uint16Array:void 0;tn=function(){var r,n,t;if("function"!=typeof fn)return!1;try{n=new fn(n=[1,3.14,-3.14,65536,65537]),t=n,r=(on&&t instanceof Uint16Array||"[object Uint16Array]"===rr(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?an:function(){throw new Error("not implemented")};var cn,ln={uint16:tn,uint8:en};(cn=new ln.uint16(1))[0]=4660;var sn,vn,pn=52===new ln.uint8(cn.buffer)[0],gn=Object.freeze({__proto__:null,default:pn});!0===pn?(sn=1,vn=0):(sn=0,vn=1);var yn={HIGH:sn,LOW:vn},dn=new Jr(1),bn=new dr(dn.buffer),wn=yn.HIGH,hn=yn.LOW;function _n(r,n){return dn[0]=n,r[0]=bn[wn],r[1]=bn[hn],r}function mn(r,n){return 1===arguments.length?_n([0,0],r):_n(r,n)}var On=!0===pn?0:1,jn=new Jr(1),An=new dr(jn.buffer);function En(r,n){return jn[0]=r,An[On]=n>>>0,jn[0]}function In(r){return 0|r}var Sn,Un,Vn=!0===pn?1:0,Fn=new Jr(1),Tn=new dr(Fn.buffer);function Nn(r){return Fn[0]=r,Tn[Vn]}!0===pn?(Sn=1,Un=0):(Sn=0,Un=1);var zn={HIGH:Sn,LOW:Un},xn=new Jr(1),kn=new dr(xn.buffer),Wn=zn.HIGH,Bn=zn.LOW;function Hn(r,n){return kn[Wn]=r,kn[Bn]=n,xn[0]}var Ln=[0,0];function Pn(r,n){var t,e;return mn(Ln,r),t=Ln[0],t&=2147483647,e=Nn(n),Hn(t|=e&=2147483648,Ln[1])}var Gn=!0===pn?1:0,Mn=new Jr(1),Rn=new dr(Mn.buffer);function $n(r,n){return Mn[0]=r,Rn[Gn]=n>>>0,Mn[0]}var Dn=1023,Cn=Object.freeze({__proto__:null,default:Dn}),qn=1048576,Zn=[1,1.5],Xn=[0,.5849624872207642],Yn=[0,1.350039202129749e-8];function Jn(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Kn=Object.freeze({__proto__:null,default:Jn}),Qn=22250738585072014e-324,rt=Object.freeze({__proto__:null,default:Qn});function nt(r,n,t,e){return Tr(r)||Gr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&$r(r)<Qn?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}Jn((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var tt=2146435072,et=Object.freeze({__proto__:null,default:tt}),it=[0,0],ut=[0,0];function ot(r,n){var t,e;return 0===n||0===r||Tr(r)||Gr(r)?r:(nt(r,it,1,0),n+=it[1],n+=function(r){var n=Nn(r);return(n=(n&tt)>>>20)-Dn|0}(r=it[0]),n<-1074?Pn(0,r):n>1023?r<0?Lr:tr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mn(ut,r),t=ut[0],t&=2148532223,e*Hn(t|=n+Dn<<20,ut[1])))}var ft,at,ct,lt,st,vt,pt,gt,yt,dt,bt,wt,ht,_t,mt,Ot,jt=2147483647,At=1048575,Et=1048576,It=2147483647,St=1083179008,Ut=1e300,Vt=1e-300,Ft=[0,0],Tt=[0,0],Nt=Object.freeze({__proto__:null,default:function r(n,t){var e,i,u,o,f,a,c,l,s,v,p,g,y,d;if(Tr(n)||Tr(t))return NaN;if(mn(Ft,t),f=Ft[0],0===Ft[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Rr(n);if(-.5===t)return 1/Rr(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Gr(t))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:$r(r)<1==(n===tr)?0:tr}(n,t)}if(mn(Ft,n),o=Ft[0],0===Ft[1]){if(0===o)return function(r,n){return n===Lr?tr:n===tr?0:n>0?Br(n)?r:0:Br(n)?Pn(tr,r):tr}(n,t);if(1===n)return 1;if(-1===n&&Br(t))return-1;if(Gr(n))return n===Lr?r(-0,-t):t<0?0:tr}if(n<0&&!1===kr(t))return(n-n)/(n-n);if(u=$r(n),e=o&It|0,i=f&It|0,c=f>>>31|0,a=(a=o>>>31|0)&&Br(t)?-1:1,i>1105199104){if(i>1139802112)return function(r,n){return(2147483647&Nn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(n,t);if(e<1072693247)return 1===c?a*Ut*Ut:a*Vt*Vt;if(e>1072693248)return 0===c?a*Ut*Ut:a*Vt*Vt;p=function(r,n){var t,e,i,u,o,f;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=En(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=t,r}(Tt,u)}else p=function(r,n,t){var e,i,u,o,f,a,c,l,s,v,p,g,y,d,b,w,h,_,m,O,j;return _=0,t<qn&&(_-=53,t=Nn(n*=9007199254740992)),_+=(t>>20)-Dn|0,t=1072693248|(m=1048575&t|0),m<=235662?O=0:m<767610?O=1:(O=0,_+=1,t-=qn),o=En(i=(w=(n=$n(n,t))-(c=Zn[O]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=$n(0,e+=O<<18),b=(u=i*i)*u*(0===(j=u)?.5999999999999946:.5999999999999946+j*(.4285714285785502+j*(.33333332981837743+j*(.272728123808534+j*(.23066074577556175+.20697501780033842*j))))),a=En(a=3+(u=o*o)+(b+=(f=h*(w-o*a-o*(n-(a-c))))*(o+i)),0),y=(p=-7.028461650952758e-9*(s=En(s=(w=o*a)+(h=f*a+(b-(a-3-u))*i),0))+.9617966939259756*(h-(s-w))+Yn[O])-((g=En(g=(v=.9617967009544373*s)+p+(l=Xn[O])+(d=_),0))-d-l-v),r[0]=g,r[1]=y,r}(Tt,u,e);if(v=(t-(l=En(t,0)))*p[0]+t*p[1],s=l*p[0],mn(Ft,g=v+s),y=In(Ft[0]),d=In(Ft[1]),y>=St){if(0!=(y-St|d))return a*Ut*Ut;if(v+8008566259537294e-32>g-s)return a*Ut*Ut}else if((y&It)>=1083231232){if(0!=(y-3230714880|d))return a*Vt*Vt;if(v<=g-s)return a*Vt*Vt}return g=function(r,n,t){var e,i,u,o,f,a,c,l,s,v;return s=((l=r&jt|0)>>20)-Dn|0,c=0,l>1071644672&&(i=$n(0,((c=r+(Et>>s+1)>>>0)&~(At>>(s=((c&jt)>>20)-Dn|0)))>>>0),c=(c&At|Et)>>20-s>>>0,r<0&&(c=-c),n-=i),r=In(r=Nn(a=1-((a=(u=.6931471824645996*(i=En(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=a-(i=a*a)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=o-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?ot(a,c):$n(a,r)}(y,s,v),a*g}}),zt=R(Nt),xt=R(x);function kt(){if(vt)return st;vt=1;var r=function(){if(at)return ft;at=1;var r="function"==typeof Math.fround?Math.fround:null;return ft=r}(),n=function(){if(lt)return ct;lt=1;var r=new ar(1);return ct=function(n){return r[0]=n,r[0]}}();return st="function"==typeof r?r:n}function Wt(){if(dt)return yt;dt=1;var r=Sr,n=Fr,t=jr,e=zt,i=xt,u=kt(),o=function(){if(gt)return pt;gt=1;var r=zt;return pt=function(n){var t,e=0;for(t=0;t<n.length;t++)"1"===n[t]&&(e+=r(2,-(t+1)));return e}}();return yt=function(f){var a,c,l;if(32!==f.length)throw new Error(i("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,f));if(a="1"===f[0]?-1:1,l=parseInt(f.substring(1,9),2)-t,c=o(f.substring(9)),l===-t){if(0===c)return 1===a?0:-0;l=-(t-1)}else{if(l===t+1)return 0===c?1===a?r:n:NaN;c+=1}return u(a*c*e(2,l))}}function Bt(){if(Ot)return mt;Ot=1;var r=function(){if(_t)return ht;_t=1;var r=ar,n=new br(1),t=new r(n.buffer);return ht=function(r){return n[0]=r,t[0]}}();return mt=r}var Ht,Lt,Pt,Gt,Mt,Rt,$t,Dt,Ct,qt,Zt,Xt,Yt,Jt,Kt=R(Object.freeze({__proto__:null,default:11754943508222875e-54})),Qt=R(Cr);function re(){if(Lt)return Ht;Lt=1;var r=Kt,n=Sr,t=Fr,e=Qt,i=kt();return Ht=function(u,o){return o!=o||o===n||o===t?(u[0]=o,u[1]=0,u):0!==o&&e(o)<r?(o=i(8388608*o),u[0]=o,u[1]=-23,u):(u[0]=o,u[1]=0,u)}}function ne(){if(Rt)return Mt;Rt=1;var r=function(){if(Gt)return Pt;Gt=1;var r=re();return Pt=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},Pt}();return Mt=r}function te(){if(qt)return Ct;qt=1;var r=function(){if(Dt)return $t;Dt=1;var r=wr();return $t=function(n){return!!(r(n)>>>31)}}();return Ct=r}function ee(){if(Jt)return Yt;Jt=1;var r=function(){if(Xt)return Zt;Xt=1;var r=wr();return Zt=function(n){return 8388607&r(n)}}();return Yt=r}var ie=R(xr);function ue(r){return"number"==typeof r}var oe=Hr.prototype.toString,fe=q();function ae(r){return"object"==typeof r&&(r instanceof Hr||(fe?function(r){try{return oe.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function ce(r){return ue(r)||ae(r)}function le(r){return r<tr&&r>Lr&&kr(r)}function se(r){return ue(r)&&le(r)}function ve(r){return ae(r)&&le(r.valueOf())}function pe(r){return se(r)||ve(r)}function ge(r){return se(r)&&r>=0}function ye(r){return ve(r)&&r.valueOf()>=0}function de(r){return ge(r)||ye(r)}function be(r){return"string"==typeof r}Jn(ce,"isPrimitive",ue),Jn(ce,"isObject",ae),Jn(pe,"isPrimitive",se),Jn(pe,"isObject",ve),Jn(de,"isPrimitive",ge),Jn(de,"isObject",ye);var we=String.prototype.valueOf,he=q();function _e(r){return"object"==typeof r&&(r instanceof String||(he?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object String]"===rr(r)))}function me(r){return be(r)||_e(r)}Jn(me,"isPrimitive",be),Jn(me,"isObject",_e);var Oe=void 0!==String.prototype.repeat,je=String.prototype.repeat,Ae=Oe?function(r,n){return je.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t};function Ee(r,n){if(!be(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ge(n))throw new TypeError(z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return Ae(r,n)}var Ie=Object.freeze({__proto__:null,default:Ee}),Se=Math.ceil,Ue=9007199254740991,Ve=Object.freeze({__proto__:null,default:function(r,n,t){var e,i;if(!be(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ge(n))throw new TypeError(z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!be(i=t))throw new TypeError(z("invalid argument. Third argument must be a string. Value: `%s`.",i));if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(n>Ue)throw new RangeError(z("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return(e=(n-r.length)/i.length)<=0?r:r+Ee(i,e=Se(e))}}),Fe=R(Ve);function Te(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=Se(e),Ae(t,e)+r)}var Ne,ze,xe,ke,We,Be,He,Le,Pe,Ge,Me,Re,$e,De,Ce,qe,Ze,Xe,Ye=Object.freeze({__proto__:null,default:function(r,n,t){var e;if(!be(r))throw new TypeError(z("invalid argument. First argument must be a string. Value: `%s`.",r));if(!ge(n))throw new TypeError(z("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!be(e=t))throw new TypeError(z("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>Ue)throw new RangeError(z("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return Te(r,n,e)}}),Je=R(Ye),Ke=R(Ie);function Qe(){if(Be)return We;Be=1;var r=Sr,n=Fr,t=jr,e=Qt,i=ie,u=Fe,o=Je,f=Ke,a=function(){if(ze)return Ne;ze=1;var r=ie;return Ne=function(n){for(var t,e="";n>0;)e=(t=n/2)===(n=r(t))?"0"+e:"1"+e;return e}}(),c=ke?xe:(ke=1,xe=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=149,e=0;e<149&&((t=2*r)>=1?(r=t-1,n+="1",149===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>24));e++);return n});return We=function(l){var s,v,p,g,y,d,b;if(v=l<0||1/l===n?"1":"0",l===r||l===n)return v+(g=f("1",8))+(p=f("0",23));if(l!=l)return v+(g=f("1",8))+(p="1"+f("0",22));if(0===l)return v+(g=f("0",8))+(p=f("0",23));if(d=(l=e(l))-(y=i(l)),y=a(y),d=c(d),y)g=y.length-1;else{for(b=0;b<d.length;b++)if("1"===d[b]){s=b+1;break}g=-s}return p=y+d,g<0?(g<=-t&&(s=t-1),p=p.substring(s)):p=p.substring(1),g=a(g+t),v+(g=o(g,8,"0"))+(p=u(p,23,"0").substring(0,23))}}function ri(){if(Re)return Me;Re=1;var r=Ge?Pe:(Ge=1,Pe=function(r){return 0|r});return Me=r}function ni(){if(qe)return Ce;qe=1;var r=De?$e:(De=1,$e=function(r){return r>>>0});return Ce=r}var ti={};D(ti,"base",function(){if(Xe)return Ze;Xe=1;var r=D,n={};return r(n,"exponentf",Ar()),r(n,"fromBinaryStringf",function(){if(wt)return bt;wt=1;var r=Wt();return bt=r}()),r(n,"fromWordf",Bt()),r(n,"normalizef",ne()),r(n,"signbitf",te()),r(n,"significandf",ee()),r(n,"toBinaryStringf",function(){if(Le)return He;Le=1;var r=Qe();return He=r}()),r(n,"float32ToInt32",ri()),r(n,"float32ToUint32",ni()),r(n,"toWordf",wr()),Ze=n}());var ei,ii,ui,oi,fi,ai,ci=ti,li=R(Kr),si=R(gn);function vi(){if(oi)return ui;oi=1;var r=br,n=ii?ei:(ii=1,ei=!0===si?1:0),t=new li(1),e=new r(t.buffer);return ui=function(r){return t[0]=r,e[n]}}function pi(){if(ai)return fi;ai=1;var r=vi();return fi=r}var gi,yi,di,bi,wi=R(et),hi=R(Cn);function _i(){if(bi)return di;bi=1;var r=function(){if(yi)return gi;yi=1;var r=pi(),n=wi,t=hi;return gi=function(e){var i=r(e);return(i=(i&n)>>>20)-t|0},gi}();return di=r}var mi,Oi,ji,Ai,Ei,Ii,Si=R(er),Ui=R(Pr);function Vi(){if(Ai)return ji;Ai=1;var r=Si,n=Ui,t=hi,e=zt,i=xt,u=function(){if(Oi)return mi;Oi=1;var r=zt;return mi=function(n){var t,e=0;for(t=0;t<n.length;t++)"1"===n[t]&&(e+=r(2,-(t+1)));return e}}();return ji=function(o){var f,a,c;if(64!==o.length)throw new Error(i("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,o));if(f="1"===o[0]?-1:1,c=parseInt(o.substring(1,12),2)-t,a=u(o.substring(12)),c===-t){if(0===a)return 1===f?0:-0;c=-1022}else{if(c===t+1)return 0===a?1===f?r:n:NaN;a+=1}return f*a*e(2,c)}}var Fi,Ti=R(un),Ni="function"==typeof DataView,zi="function"==typeof ArrayBuffer,xi="function"==typeof ArrayBuffer?ArrayBuffer:null,ki="function"==typeof ArrayBuffer?ArrayBuffer:void 0;Fi=function(){var r,n,t,e;if("function"!=typeof xi)return!1;try{t=new xi(16),e=t,(r=(zi&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===rr(e))&&"function"==typeof xi.isView)&&((n=new Jr(t))[0]=-3.14,n[1]=NaN,r=r&&xi.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?ki:function(){throw new Error("not implemented")};var Wi,Bi=Fi,Hi="function"==typeof DataView?DataView:null,Li="function"==typeof DataView?DataView:void 0;Wi=function(){var r,n,t,e;if("function"!=typeof Hi)return!1;try{t=new Bi(24),n=new Hi(t,8),e=n,(r=(Ni&&e instanceof DataView||"[object DataView]"===rr(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),r=r&&n.buffer===t&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){r=!1}return r}()?Li:function(){throw new Error("not implemented")};var Pi,Gi,Mi,Ri,$i,Di,Ci,qi,Zi,Xi,Yi,Ji,Ki,Qi,ru,nu,tu=Wi,eu=R(Object.freeze({__proto__:null,default:tu}));function iu(){if(Ri)return Mi;Ri=1;var r=function(){if(Gi)return Pi;Gi=1;var r=si,n=eu,t=4294967296,e=new Ti(8);return Pi=function(i,u,o){var f,a,c,l,s;if(1===u)l=i;else{for(l=e,s=0;s<8;s++)l[s]=i[o],o+=u;o=0}return f=new n(l.buffer,l.byteOffset,l.byteLength),r?(c=f.getInt32(o,r),a=f.getInt32(o+4,r)):(a=f.getInt32(o,r),c=f.getInt32(o+4,r)),c<0&&(c+=t),a*t+c}}();return Mi=r}function uu(){if(qi)return Ci;qi=1;var r=br,n=li,t=function(){return Di?$i:(Di=1,!0===si?(r=1,n=0):(r=0,n=1),$i={HIGH:r,LOW:n});var r,n}(),e=new n(1),i=new r(e.buffer),u=t.HIGH,o=t.LOW;return Ci=function(r,n){return i[u]=r,i[o]=n,e[0]},Ci}function ou(){if(Qi)return Ki;Qi=1;var r=br,n=Ji?Yi:(Ji=1,Yi=!0===si?0:1),t=new li(1),e=new r(t.buffer);return Ki=function(r){return t[0]=r,e[n]}}var fu,au,cu,lu,su,vu,pu,gu,yu,du,bu,wu,hu,_u,mu,Ou,ju,Au,Eu,Iu,Su,Uu,Vu=R(Kn),Fu=R(rt),Tu=R(Mr),Nu=R(Nr);function zu(){if(au)return fu;au=1;var r=Fu,n=Tu,t=Nu,e=Qt;return fu=function(i,u,o,f){return t(i)||n(i)?(u[f]=i,u[f+o]=0,u):0!==i&&e(i)<r?(u[f]=4503599627370496*i,u[f+o]=-52,u):(u[f]=i,u[f+o]=0,u)}}function xu(){if(vu)return su;vu=1;var r=Vu,n=function(){if(lu)return cu;lu=1;var r=zu();return cu=function(n){return r(n,[0,0],1,0)}}();return r(n,"assign",zu()),su=n}function ku(){if(du)return yu;du=1;var r=br,n=gu?pu:(gu=1,pu=!0===si?1:0),t=new li(1),e=new r(t.buffer);return yu=function(r,i){return t[0]=r,e[n]=i>>>0,t[0]},yu}function Wu(){if(Ou)return mu;Ou=1;var r=br,n=_u?hu:(_u=1,hu=!0===si?0:1),t=new li(1),e=new r(t.buffer);return mu=function(r,i){return t[0]=r,e[n]=i>>>0,t[0]},mu}function Bu(){if(Uu)return Su;Uu=1;var r=function(){if(Iu)return Eu;Iu=1;var r=pi();return Eu=function(n){return!!(r(n)>>>31)}}();return Su=r}var Hu,Lu,Pu,Gu,Mu,Ru,$u,Du,Cu,qu,Zu,Xu,Yu,Ju,Ku,Qu,ro,no,to,eo,io,uo,oo,fo,ao,co,lo,so,vo,po,go,yo,bo,wo,ho,_o,mo,Oo,jo,Ao,Eo=R(Object.freeze({__proto__:null,default:function(r){return 0===r&&1/r===Lr}}));function Io(){if(Ru)return Mu;Ru=1;var r=Si,n=Ui,t=hi,e=Nu,i=Eo,u=Qt,o=ie,f=Fe,a=Je,c=Ke,l=function(){if(Lu)return Hu;Lu=1;var r=ie;return Hu=function(n){for(var t,e="";n>0;)e=(t=n/2)===(n=r(t))?"0"+e:"1"+e;return e}}(),s=function(){if(Gu)return Pu;Gu=1;var r=1075;return Pu=function(n){var t,e,i,u;if(t="",0===n)return t;for(u=r,i=0;i<r&&((e=2*n)>=1?(n=e-1,t+="1",u===r&&(u=i)):(n=e,t+="0"),!(1===e||i-u>54));i++);return t}}();return Mu=function(v){var p,g,y,d,b,w,h;if(g=v<0||i(v)?"1":"0",v===r||v===n)return g+(d=c("1",11))+(y=c("0",52));if(e(v))return g+(d=c("1",11))+(y="1"+c("0",51));if(0===v)return g+(d=c("0",11))+(y=c("0",52));if(w=(v=u(v))-(b=o(v)),b=l(b),w=s(w),b)d=b.length-1;else{for(h=0;h<w.length;h++)if("1"===w[h]){p=h+1;break}d=-p}return y=b+w,d<0?(d<=-t&&(p=t-1),y=y.substring(p)):y=y.substring(1),d=l(d+t),g+(d=a(d,11,"0"))+(y=f(y,52,"0").substring(0,52))}}function So(){if(Xu)return Zu;Xu=1;var r=qu?Cu:(qu=1,Cu=function(r){return 0|r});return Zu=r}function Uo(){if(Qu)return Ku;Qu=1;var r=si,n=eu,t=ie,e=new Ti(8),i=new n(e.buffer);return Ku=function(n,u,o,f){var a,c,l;if(0===n){for(l=0;l<e.length;l++)u[f]=0,f+=o;return u}for(c=(4294967295&n)>>>0,a=t(n/4294967296),r?(i.setUint32(0,c,r),i.setUint32(4,a,r)):(i.setUint32(0,a,r),i.setUint32(4,c,r)),l=0;l<e.length;l++)u[f]=e[l],f+=o;return u}}function Vo(){if(no)return ro;no=1;var r=Vu,n=function(){if(Ju)return Yu;Ju=1;var r=si,n=Ti,t=eu,e=ie;return Yu=function(i){var u,o,f,a;return u=new n(8),0===i||(a=(4294967295&i)>>>0,f=e(i/4294967296),o=new t(u.buffer),r?(o.setUint32(0,a,r),o.setUint32(4,f,r)):(o.setUint32(0,f,r),o.setUint32(4,a,r))),u}}();return r(n,"assign",Uo()),ro=n}function Fo(){if(uo)return io;uo=1;var r=eo?to:(eo=1,to=function(r){return r>>>0});return io=r}function To(){if(co)return ao;co=1;var r=br,n=li,t=function(){return fo?oo:(fo=1,!0===si?(r=1,n=0):(r=0,n=1),oo={HIGH:r,LOW:n});var r,n}(),e=new n(1),i=new r(e.buffer),u=t.HIGH,o=t.LOW;return ao=function(r,n){return e[0]=n,r[0]=i[u],r[1]=i[o],r}}function No(){if(po)return vo;po=1;var r=function(){if(so)return lo;so=1;var r=To();return lo=function(n,t){return 1===arguments.length?r([0,0],n):r(n,t)},lo}();return vo=r}var zo=D,xo={};zo(xo,"base",function(){if(yo)return go;yo=1;var r=D,n={};return r(n,"exponent",_i()),r(n,"fromBinaryString",function(){if(Ii)return Ei;Ii=1;var r=Vi();return Ei=r}()),r(n,"fromInt64Bytes",iu()),r(n,"fromWords",function(){if(Xi)return Zi;Xi=1;var r=uu();return Zi=r}()),r(n,"getHighWord",pi()),r(n,"getLowWord",function(){if(nu)return ru;nu=1;var r=ou();return ru=r}()),r(n,"normalize",xu()),r(n,"setHighWord",function(){if(wu)return bu;wu=1;var r=ku();return bu=r}()),r(n,"setLowWord",function(){if(Au)return ju;Au=1;var r=Wu();return ju=r}()),r(n,"signbit",Bu()),r(n,"toBinaryString",function(){if(Du)return $u;Du=1;var r=Io();return $u=r}()),r(n,"float64ToFloat32",kt()),r(n,"float64ToInt32",So()),r(n,"float64ToInt64Bytes",Vo()),r(n,"float64ToUint32",Fo()),r(n,"toWords",No()),go=n}()),zo(xo,"reviver",function(){if(_o)return ho;_o=1;var r=function(){if(wo)return bo;wo=1;var r=Si,n=Ui;return bo=function(t,e){if(null!==e&&"object"==typeof e&&"float64"===e.type){if("NaN"===e.value)return NaN;if("+Infinity"===e.value)return r;if("-Infinity"===e.value)return n}return e}}();return ho=r}()),zo(xo,"toJSON",function(){if(Ao)return jo;Ao=1;var r=function(){if(Oo)return mo;Oo=1;var r=Si,n=Ui,t=xt;return mo=function(e){if("number"!=typeof e)throw new TypeError(t("invalid argument. Must provide a number. Value: `%s`.",e));return e!=e?{type:"float64",value:"NaN"}:e===r?{type:"float64",value:"+Infinity"}:e===n?{type:"float64",value:"-Infinity"}:e}}();return jo=r}());var ko,Wo,Bo,Ho,Lo,Po,Go=xo;function Mo(){if(Ho)return Bo;Ho=1;var r=Wo?ko:(Wo=1,ko=function(r){return r>>>0});return Bo=r}var Ro={};D(Ro,"base",function(){if(Po)return Lo;Po=1;var r={};return D(r,"int32ToUint32",Mo()),Lo=r}());var $o,Do,Co,qo,Zo,Xo,Yo,Jo,Ko,Qo,rf,nf,tf=Ro;function ef(){if(qo)return Co;qo=1;var r=function(){if(Do)return $o;Do=1;var r=xt,n=zt;return $o=function(t){var e,i;if(8!==t.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,t));for(e=0,i=0;i<t.length;i++)"1"===t[i]&&(e+=n(2,8-i-1));return e}}();return Co=r}function uf(){if(Jo)return Yo;Jo=1;var r=Je,n=function(){if(Xo)return Zo;Xo=1;var r=ie;return Zo=function(n){var t,e,i="";for(t=8;n>0&&t;)i=(e=n/2)===(n=r(e))?"0"+i:"1"+i,t-=1;return i}}();return Yo=function(t){var e;return e=n(t),e=r(e,8,"0")}}var of={};D(of,"base",function(){if(nf)return rf;nf=1;var r=D,n={};return r(n,"fromBinaryStringUint8",ef()),r(n,"toBinaryStringUint8",function(){if(Qo)return Ko;Qo=1;var r=uf();return Ko=r}()),rf=n}());var ff,af,cf,lf,sf,vf,pf,gf,yf,df,bf,wf,hf=of;function _f(){if(lf)return cf;lf=1;var r=function(){if(af)return ff;af=1;var r=xt,n=zt;return ff=function(t){var e,i;if(16!==t.length)throw new Error(r("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,t));for(e=0,i=0;i<t.length;i++)"1"===t[i]&&(e+=n(2,16-i-1));return e}}();return cf=r}function mf(){if(gf)return pf;gf=1;var r=Je,n=function(){if(vf)return sf;vf=1;var r=ie;return sf=function(n){var t,e,i="";for(t=16;n>0&&t;)i=(e=n/2)===(n=r(e))?"0"+i:"1"+i,t-=1;return i}}();return pf=function(t){var e;return e=n(t),e=r(e,16,"0")}}var Of={};D(Of,"base",function(){if(wf)return bf;wf=1;var r=D,n={};return r(n,"fromBinaryStringUint16",_f()),r(n,"toBinaryStringUint16",function(){if(df)return yf;df=1;var r=mf();return yf=r}()),bf=n}());var jf,Af,Ef,If,Sf,Uf,Vf,Ff,Tf,Nf,zf,xf,kf,Wf,Bf,Hf,Lf,Pf,Gf,Mf,Rf,$f,Df,Cf,qf=Of;function Zf(){if(If)return Ef;If=1;var r=function(){if(Af)return jf;Af=1;var r=zt,n=xt,t=Fo();return jf=function(e){var i,u;if(32!==e.length)throw new Error(n("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,e));for(i=0,u=0;u<e.length;u++)"1"===e[u]&&(i+=r(2,32-u-1));return t(i)}}();return Ef=r}function Xf(){if(Ff)return Vf;Ff=1;var r=function(){if(Uf)return Sf;Uf=1;var r=Mo(),n=r(31);return Sf=function(t,e){return r(t<<(e&=n)|t>>>(-e&n))}}();return Vf=r}function Yf(){if(xf)return zf;xf=1;var r=function(){if(Nf)return Tf;Nf=1;var r=Mo(),n=r(31);return Tf=function(t,e){return r(t>>>(e&=n)|t<<(-e&n))}}();return zf=r}function Jf(){if(Hf)return Bf;Hf=1;var r=Je,n=function(){if(Wf)return kf;Wf=1;var r=ie;return kf=function(n){var t,e,i="";for(t=32;n>0&&t;)i=(e=n/2)===(n=r(e))?"0"+i:"1"+i,t-=1;return i}}();return Bf=function(t){var e;return e=n(t),e=r(e,32,"0")}}function Kf(){if($f)return Rf;$f=1;var r=Mf?Gf:(Mf=1,Gf=function(r){return 0|r});return Rf=r}var Qf={};D(Qf,"base",function(){if(Cf)return Df;Cf=1;var r=D,n={};return r(n,"fromBinaryStringUint32",Zf()),r(n,"rotl32",Xf()),r(n,"rotr32",Yf()),r(n,"toBinaryStringUint32",function(){if(Pf)return Lf;Pf=1;var r=Jf();return Lf=r}()),r(n,"uint32ToInt32",Kf()),Df=n}());var ra=Qf,na={};M(na,"Number",$),M(na,"float32",ci),M(na,"float64",Go),M(na,"int32",tf),M(na,"uint8",hf),M(na,"uint16",qf),M(na,"uint32",ra),r.Number=$,r.default=na,r.float32=ci,r.float64=Go,r.int32=tf,r.uint16=qf,r.uint32=ra,r.uint8=hf,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).ns={});
//# sourceMappingURL=browser.js.map
