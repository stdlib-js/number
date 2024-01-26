// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function t(r){return"number"==typeof r}function e(r){var n,t="";for(n=0;n<r;n++)t+="0";return t}function i(r,n,t){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,e,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!t(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(e=(-u).toString(n),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(n),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===n&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===n&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,g=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,w=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var n,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),e=i.toExponential(n)):e=i.toPrecision(r.precision),r.alternate||(e=g.call(e,b,"$1e"),e=g.call(e,d,"e"),e=g.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=g.call(e,p,"e+0$1"),e=g.call(e,v,"e-0$1"),r.alternate&&(e=g.call(e,y,"$1."),e=g.call(e,w,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===l.call(r.specifier)?l.call(e):s.call(e)}function A(r){var n,t="";for(n=0;n<r;n++)t+=" ";return t}function E(r,n,t){var e=n-r.length;return e<0?r:r=t?r+A(e):A(e)+r}var I=String.fromCharCode,S=isNaN,V=Array.isArray;function U(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function F(r){var n,t,e,a,o,c,s,l,g;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(e=r[l]))c+=e;else{if(n=void 0!==e.precision,!(e=U(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+e+"`.");for(e.mapping&&(s=e.mapping),t=e.flags,g=0;g<t.length;g++)switch(a=t.charAt(g)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=t.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[s],10),s+=1,S(e.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(n&&"*"===e.precision){if(e.precision=parseInt(arguments[s],10),s+=1,S(e.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,n=!1)}switch(e.arg=arguments[s],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=n?e.precision:-1;break;case"c":if(!S(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=S(o)?String(e.arg):I(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(e.precision=6),e.arg=m(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=E(e.arg,e.width,e.padRight)),c+=e.arg||"",s+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function _(r){var n,t,e,i;for(t=[],i=0,e=T.exec(r);e;)(n=r.slice(i,T.lastIndex-e[0].length)).length&&t.push(n),t.push(N(e)),i=T.lastIndex,e=T.exec(r);return(n=r.slice(i)).length&&t.push(n),t}function j(r){return"string"==typeof r}function O(r){var n,t;if(!j(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[_(r)],t=1;t<arguments.length;t++)n.push(arguments[t]);return F.apply(null,n)}var x=Object.prototype,k=x.toString,W=x.__defineGetter__,B=x.__defineSetter__,H=x.__lookupGetter__,L=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,t){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(H.call(r,n)||L.call(r,n)?(e=r.__proto__,r.__proto__=x,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&W&&W.call(r,n,t.get),o&&B&&B.call(r,n,t.set),r};function P(r,n,t){G(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})}var R=Number,$={};P($,"isSameValuef",(function(r,n){return r===n?0!==r||1/r==1/n:r!=r&&n!=n})),P($,"isSameValueZerof",(function(r,n){return r===n||r!=r&&n!=n}));var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function C(){return M&&"symbol"==typeof Symbol.toStringTag}var D,Z=Object.prototype.toString,q=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,X="function"==typeof z?z.toStringTag:"";D=C()?function(r){var n,t,e,i,a;if(null==r)return Z.call(r);t=r[X],a=X,n=null!=(i=r)&&q.call(i,a);try{r[X]=void 0}catch(n){return Z.call(r)}return e=Z.call(r),n?r[X]=t:delete r[X],e}:function(r){return Z.call(r)};var Y,J=D,K="function"==typeof Float32Array,Q=Number.POSITIVE_INFINITY,rr="function"==typeof Float32Array?Float32Array:null,nr="function"==typeof Float32Array?Float32Array:void 0;Y=function(){var r,n,t;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,5e40]),t=n,r=(K&&t instanceof Float32Array||"[object Float32Array]"===J(t))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===Q}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var tr,er=Y,ir="function"==typeof Uint32Array,ar="function"==typeof Uint32Array?Uint32Array:null,or="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,n,t;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(ir&&t instanceof Uint32Array||"[object Uint32Array]"===J(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=tr,fr=new er(1),cr=new ur(fr.buffer);function sr(r){return fr[0]=r,cr[0]}var lr=127,gr=new er(1);new ur(gr.buffer)[0]=2139095040;var pr=gr[0],vr=new er(1);new ur(vr.buffer)[0]=4286578688;var yr=vr[0];function wr(r){return r!=r}var hr=Math.floor;function dr(r){return hr(r)===r}function br(r){return dr(r/2)}function mr(r){return br(r>0?r-1:r+1)}var Ar=Number,Er=Ar.NEGATIVE_INFINITY;function Ir(r){return r===Q||r===Er}var Sr=Math.sqrt;function Vr(r){return Math.abs(r)}function Ur(r,n,t){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Fr,Tr="function"==typeof Float64Array,Nr="function"==typeof Float64Array?Float64Array:null,_r="function"==typeof Float64Array?Float64Array:void 0;Fr=function(){var r,n,t;if("function"!=typeof Nr)return!1;try{n=new Nr([1,3.14,-3.14,NaN]),t=n,r=(Tr&&t instanceof Float64Array||"[object Float64Array]"===J(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var jr,Or=Fr,xr="function"==typeof Uint8Array,kr="function"==typeof Uint8Array?Uint8Array:null,Wr="function"==typeof Uint8Array?Uint8Array:void 0;jr=function(){var r,n,t;if("function"!=typeof kr)return!1;try{n=new kr(n=[1,3.14,-3.14,256,257]),t=n,r=(xr&&t instanceof Uint8Array||"[object Uint8Array]"===J(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Wr:function(){throw new Error("not implemented")};var Br,Hr=jr,Lr="function"==typeof Uint16Array,Gr="function"==typeof Uint16Array?Uint16Array:null,Pr="function"==typeof Uint16Array?Uint16Array:void 0;Br=function(){var r,n,t;if("function"!=typeof Gr)return!1;try{n=new Gr(n=[1,3.14,-3.14,65536,65537]),t=n,r=(Lr&&t instanceof Uint16Array||"[object Uint16Array]"===J(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Rr,$r={uint16:Br,uint8:Hr};(Rr=new $r.uint16(1))[0]=4660;var Mr,Cr,Dr=52===new $r.uint8(Rr.buffer)[0];!0===Dr?(Mr=1,Cr=0):(Mr=0,Cr=1);var Zr={HIGH:Mr,LOW:Cr},qr=new Or(1),zr=new ur(qr.buffer),Xr=Zr.HIGH,Yr=Zr.LOW;function Jr(r,n,t,e){return qr[0]=r,n[e]=zr[Xr],n[e+t]=zr[Yr],n}function Kr(r){return Jr(r,[0,0],1,0)}Ur(Kr,"assign",Jr);var Qr=!0===Dr?0:1,rn=new Or(1),nn=new ur(rn.buffer);function tn(r,n){return rn[0]=r,nn[Qr]=n>>>0,rn[0]}function en(r){return 0|r}var an,on,un=2147483647,fn=!0===Dr?1:0,cn=new Or(1),sn=new ur(cn.buffer);function ln(r){return cn[0]=r,sn[fn]}!0===Dr?(an=1,on=0):(an=0,on=1);var gn={HIGH:an,LOW:on},pn=new Or(1),vn=new ur(pn.buffer),yn=gn.HIGH,wn=gn.LOW;function hn(r,n){return vn[yn]=r,vn[wn]=n,pn[0]}var dn=[0,0];function bn(r,n){var t,e;return Kr.assign(r,dn,1,0),t=dn[0],t&=un,e=ln(n),hn(t|=e&=2147483648,dn[1])}var mn=!0===Dr?1:0,An=new Or(1),En=new ur(An.buffer);function In(r,n){return An[0]=r,En[mn]=n>>>0,An[0]}var Sn=1023,Vn=1048576,Un=[1,1.5],Fn=[0,.5849624872207642],Tn=[0,1.350039202129749e-8],Nn=22250738585072014e-324;function _n(r,n,t,e){return wr(r)||Ir(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Vr(r)<Nn?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}Ur((function(r){return _n(r,[0,0],1,0)}),"assign",_n);var jn=2146435072,On=[0,0],xn=[0,0];function kn(r,n){var t,e;return 0===n||0===r||wr(r)||Ir(r)?r:(_n(r,On,1,0),n+=On[1],n+=function(r){var n=ln(r);return(n=(n&jn)>>>20)-Sn|0}(r=On[0]),n<-1074?bn(0,r):n>1023?r<0?Er:Q:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Kr.assign(r,xn,1,0),t=xn[0],t&=2148532223,e*hn(t|=n+Sn<<20,xn[1])))}var Wn=1048575,Bn=1048576,Hn=1083179008,Ln=1e300,Gn=1e-300,Pn=[0,0],Rn=[0,0];function $n(r,n){var t,e,i,a,o,u,f,c,s,l,g,p,v,y;if(wr(r)||wr(n))return NaN;if(Kr.assign(n,Pn,1,0),o=Pn[0],0===Pn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Sr(r);if(-.5===n)return 1/Sr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Ir(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Vr(r)<1==(n===Q)?0:Q}(r,n)}if(Kr.assign(r,Pn,1,0),a=Pn[0],0===Pn[1]){if(0===a)return function(r,n){return n===Er?Q:n===Q?0:n>0?mr(n)?r:0:mr(n)?bn(Q,r):Q}(r,n);if(1===r)return 1;if(-1===r&&mr(n))return-1;if(Ir(r))return r===Er?$n(-0,-n):n<0?0:Q}if(r<0&&!1===dr(n))return(r-r)/(r-r);if(i=Vr(r),t=a&un|0,e=o&un|0,f=o>>>31|0,u=(u=a>>>31|0)&&mr(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(ln(r)&un)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===f?u*Ln*Ln:u*Gn*Gn;if(t>1072693248)return 0===f?u*Ln*Ln:u*Gn*Gn;g=function(r,n){var t,e,i,a,o,u;return t=(o=1.9259629911266175e-8*(i=n-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=tn(e=(a=1.4426950216293335*i)+o,0))-a),r[0]=e,r[1]=t,r}(Rn,i)}else g=function(r,n,t){var e,i,a,o,u,f,c,s,l,g,p,v,y,w,h,d,b,m,A,E,I;return m=0,t<Vn&&(m-=53,t=ln(n*=9007199254740992)),m+=(t>>20)-Sn|0,t=1072693248|(A=1048575&t|0),A<=235662?E=0:A<767610?E=1:(E=0,m+=1,t-=Vn),o=tn(i=(d=(n=In(n,t))-(c=Un[E]))*(b=1/(n+c)),0),e=524288+(t>>1|536870912),f=In(0,e+=E<<18),h=(a=i*i)*a*(0===(I=a)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=tn(f=3+(a=o*o)+(h+=(u=b*(d-o*f-o*(n-(f-c))))*(o+i)),0),y=(p=-7.028461650952758e-9*(l=tn(l=(d=o*f)+(b=u*f+(h-(f-3-a))*i),0))+.9617966939259756*(b-(l-d))+Tn[E])-((v=tn(v=(g=.9617967009544373*l)+p+(s=Fn[E])+(w=m),0))-w-s-g),r[0]=v,r[1]=y,r}(Rn,i,t);if(p=(l=(n-(c=tn(n,0)))*g[0]+n*g[1])+(s=c*g[0]),Kr.assign(p,Pn,1,0),v=en(Pn[0]),y=en(Pn[1]),v>=Hn){if(0!=(v-Hn|y))return u*Ln*Ln;if(l+8008566259537294e-32>p-s)return u*Ln*Ln}else if((v&un)>=1083231232){if(0!=(v-3230714880|y))return u*Gn*Gn;if(l<=p-s)return u*Gn*Gn}return p=function(r,n,t){var e,i,a,o,u,f,c,s,l,g;return l=((s=r&un|0)>>20)-Sn|0,c=0,s>1071644672&&(i=In(0,((c=r+(Bn>>l+1)>>>0)&~(Wn>>(l=((c&un)>>20)-Sn|0)))>>>0),c=(c&Wn|Bn)>>20-l>>>0,r<0&&(c=-c),n-=i),r=en(r=ln(f=1-((f=(a=.6931471824645996*(i=tn(i=t+n,0)))+(o=.6931471805599453*(t-(i-n))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(g=i)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?kn(f,c):In(f,r)}(v,s,l),u*p}var Mn="function"==typeof Math.fround?Math.fround:null,Cn=new er(1),Dn="function"==typeof Mn?Mn:function(r){return Cn[0]=r,Cn[0]},Zn=new ur(1),qn=new er(Zn.buffer);function zn(r,n,t,e){return r!=r||r===pr||r===yr?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<11754943508222875e-54?(r=Dn(8388608*r),n[e]=r,n[e+t]=-23,n):(n[e]=r,n[e+t]=0,n)}function Xn(r){return zn(r,[0,0],1,0)}function Yn(r){return"number"==typeof r}Ur(Xn,"assign",zn);var Jn=Ar.prototype.toString,Kn=C();function Qn(r){return"object"==typeof r&&(r instanceof Ar||(Kn?function(r){try{return Jn.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function rt(r){return Yn(r)||Qn(r)}function nt(r){return r<Q&&r>Er&&dr(r)}function tt(r){return Yn(r)&&nt(r)}function et(r){return Qn(r)&&nt(r.valueOf())}function it(r){return tt(r)||et(r)}function at(r){return tt(r)&&r>=0}function ot(r){return et(r)&&r.valueOf()>=0}function ut(r){return at(r)||ot(r)}function ft(r){return"string"==typeof r}Ur(rt,"isPrimitive",Yn),Ur(rt,"isObject",Qn),Ur(it,"isPrimitive",tt),Ur(it,"isObject",et),Ur(ut,"isPrimitive",at),Ur(ut,"isObject",ot);var ct=String.prototype.valueOf,st=C();function lt(r){return"object"==typeof r&&(r instanceof String||(st?function(r){try{return ct.call(r),!0}catch(r){return!1}}(r):"[object String]"===J(r)))}function gt(r){return ft(r)||lt(r)}Ur(gt,"isPrimitive",ft),Ur(gt,"isObject",lt);var pt=9007199254740991,vt=void 0!==String.prototype.repeat,yt=String.prototype.repeat,wt=vt?function(r,n){return yt.call(r,n)}:function(r,n){var t,e;if(0===r.length||0===n)return"";for(t="",e=n;1==(1&e)&&(t+=r),0!=(e>>>=1);)r+=r;return t},ht=Math.ceil;function dt(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=ht(e),r+wt(t,e))}function bt(r,n,t){var e;if(!ft(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!at(n))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!ft(e=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else e=" ";if(n>pt)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return dt(r,n,e)}function mt(r,n,t){var e=(n-r.length)/t.length;return e<=0?r:(e=ht(e),wt(t,e)+r)}function At(r,n,t){var e;if(!ft(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!at(n))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));if(arguments.length>2){if(!ft(e=t))throw new TypeError(O("invalid argument. Third argument must be a string. Value: `%s`.",e));if(0===e.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else e=" ";if(n>pt)throw new RangeError(O("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",n));return mt(r,n,e)}function Et(r,n){if(!ft(r))throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",r));if(!at(n))throw new TypeError(O("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",n));return wt(r,n)}function It(r){for(var n,t="";r>0;)t=(n=r/2)===(r=hr(n))?"0"+t:"1"+t;return t}var St={};P(St,"assert",$),P(St,"exponentf",(function(r){var n=sr(r);return(n=(2139095040&n)>>>23)-lr})),P(St,"fromBinaryStringf",(function(r){var n,t,e;if(32!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,9),2)-lr,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=$n(2,-(n+1)));return t}(r.substring(9)),-127===e){if(0===t)return 1===n?0:-0;e=-126}else{if(128===e)return 0===t?1===n?pr:yr:NaN;t+=1}return Dn(n*t*$n(2,e))})),P(St,"fromWordf",(function(r){return Zn[0]=r,qn[0]})),P(St,"normalizef",Xn),P(St,"signbitf",(function(r){return!!(sr(r)>>>31)})),P(St,"significandf",(function(r){return 8388607&sr(r)})),P(St,"toBinaryStringf",(function(r){var n,t,e,i,a,o,u;if(t=r<0||1/r===yr?"1":"0",r===pr||r===yr)return t+(i=Et("1",8))+(e=Et("0",23));if(r!=r)return t+(i=Et("1",8))+(e="1"+Et("0",22));if(0===r)return t+(i=Et("0",8))+(e=Et("0",23));if(o=(r=Vr(r))-(a=hr(r)),a=It(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=149,e=0;e<149&&((t=2*r)>=1?(r=t-1,n+="1",149===i&&(i=e)):(r=t,n+="0"),!(1===t||e-i>24));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-127&&(n=126),e=e.substring(n)):e=e.substring(1),t+(i=At(i=It(i+lr),8,"0"))+(e=bt(e,23,"0").substring(0,23))})),P(St,"float32ToInt32",(function(r){return 0|r})),P(St,"float32ToUint32",(function(r){return r>>>0})),P(St,"toWordf",sr);var Vt={};P(Vt,"base",St);var Ut={};P(Ut,"isSameValue",(function(r,n){return r===n?0!==r||1/r==1/n:r!=r&&n!=n})),P(Ut,"isSameValueZero",(function(r,n){return r===n||r!=r&&n!=n}));var Ft=!0===Dr?1:0,Tt=new Or(1),Nt=new ur(Tt.buffer);function _t(r){return Tt[0]=r,Nt[Ft]}var jt,Ot="function"==typeof DataView,xt="function"==typeof ArrayBuffer,kt="function"==typeof ArrayBuffer?ArrayBuffer:null,Wt="function"==typeof ArrayBuffer?ArrayBuffer:void 0;jt=function(){var r,n,t,e;if("function"!=typeof kt)return!1;try{t=new kt(16),e=t,(r=(xt&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===J(e))&&"function"==typeof kt.isView)&&((n=new Or(t))[0]=-3.14,n[1]=NaN,r=r&&kt.isView(n)&&16===t.byteLength&&-3.14===n[0]&&n[1]!=n[1])}catch(n){r=!1}return r}()?Wt:function(){throw new Error("not implemented")};var Bt,Ht=jt,Lt="function"==typeof DataView?DataView:null,Gt="function"==typeof DataView?DataView:void 0;Bt=function(){var r,n,t,e;if("function"!=typeof Lt)return!1;try{t=new Ht(24),n=new Lt(t,8),e=n,(r=(Ot&&e instanceof DataView||"[object DataView]"===J(e))&&"function"==typeof n.getFloat64&&"function"==typeof n.setFloat64)&&(n.setFloat64(0,-3.14),n.setFloat64(8,NaN),r=r&&n.buffer===t&&16===n.byteLength&&8===n.byteOffset&&-3.14===n.getFloat64(0)&&n.getFloat64(8)!=n.getFloat64(8))}catch(n){r=!1}return r}()?Gt:function(){throw new Error("not implemented")};var Pt,Rt,$t=Bt,Mt=4294967296,Ct=new Hr(8);!0===Dr?(Pt=1,Rt=0):(Pt=0,Rt=1);var Dt={HIGH:Pt,LOW:Rt},Zt=new Or(1),qt=new ur(Zt.buffer),zt=Dt.HIGH,Xt=Dt.LOW,Yt=!0===Dr?0:1,Jt=new Or(1),Kt=new ur(Jt.buffer);function Qt(r,n,t,e){return wr(r)||Ir(r)?(n[e]=r,n[e+t]=0,n):0!==r&&Vr(r)<Nn?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}function re(r){return Qt(r,[0,0],1,0)}Ur(re,"assign",Qt);var ne=!0===Dr?1:0,te=new Or(1),ee=new ur(te.buffer),ie=!0===Dr?0:1,ae=new Or(1),oe=new ur(ae.buffer);function ue(r){for(var n,t="";r>0;)t=(n=r/2)===(r=hr(n))?"0"+t:"1"+t;return t}var fe=1075;function ce(r){var n,t,e,i;return n=new Hr(8),0===r||(i=(4294967295&r)>>>0,e=hr(r/4294967296),t=new $t(n.buffer),Dr?(t.setUint32(0,i,Dr),t.setUint32(4,e,Dr)):(t.setUint32(0,e,Dr),t.setUint32(4,i,Dr))),n}var se,le,ge=new Hr(8),pe=new $t(ge.buffer);function ve(r){return r>>>0}Ur(ce,"assign",(function(r,n,t,e){var i,a,o;if(0===r){for(o=0;o<ge.length;o++)n[e]=0,e+=t;return n}for(a=(4294967295&r)>>>0,i=hr(r/4294967296),Dr?(pe.setUint32(0,a,Dr),pe.setUint32(4,i,Dr)):(pe.setUint32(0,i,Dr),pe.setUint32(4,a,Dr)),o=0;o<ge.length;o++)n[e]=ge[o],e+=t;return n})),!0===Dr?(se=1,le=0):(se=0,le=1);var ye={HIGH:se,LOW:le},we=new Or(1),he=new ur(we.buffer),de=ye.HIGH,be=ye.LOW;function me(r,n,t,e){return we[0]=r,n[e]=he[de],n[e+t]=he[be],n}function Ae(r){return me(r,[0,0],1,0)}Ur(Ae,"assign",me);var Ee={};P(Ee,"assert",Ut),P(Ee,"exponent",(function(r){var n=_t(r);return(n=(n&jn)>>>20)-Sn|0})),P(Ee,"fromBinaryString",(function(r){var n,t,e;if(64!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",64,r));if(n="1"===r[0]?-1:1,e=parseInt(r.substring(1,12),2)-Sn,t=function(r){var n,t=0;for(n=0;n<r.length;n++)"1"===r[n]&&(t+=$n(2,-(n+1)));return t}(r.substring(12)),-1023===e){if(0===t)return 1===n?0:-0;e=-1022}else{if(1024===e)return 0===t?1===n?Q:Er:NaN;t+=1}return n*t*$n(2,e)})),P(Ee,"fromInt64Bytes",(function(r,n,t){var e,i,a,o,u;if(1===n)o=r;else{for(o=Ct,u=0;u<8;u++)o[u]=r[t],t+=n;t=0}return e=new $t(o.buffer,o.byteOffset,o.byteLength),Dr?(a=e.getInt32(t,Dr),i=e.getInt32(t+4,Dr)):(i=e.getInt32(t,Dr),a=e.getInt32(t+4,Dr)),a<0&&(a+=Mt),i*Mt+a})),P(Ee,"fromWords",(function(r,n){return qt[zt]=r,qt[Xt]=n,Zt[0]})),P(Ee,"getHighWord",_t),P(Ee,"getLowWord",(function(r){return Jt[0]=r,Kt[Yt]})),P(Ee,"normalize",re),P(Ee,"setHighWord",(function(r,n){return te[0]=r,ee[ne]=n>>>0,te[0]})),P(Ee,"setLowWord",(function(r,n){return ae[0]=r,oe[ie]=n>>>0,ae[0]})),P(Ee,"signbit",(function(r){return!!(_t(r)>>>31)})),P(Ee,"toBinaryString",(function(r){var n,t,e,i,a,o,u;if(t=r<0||function(r){return 0===r&&1/r===Er}(r)?"1":"0",r===Q||r===Er)return t+(i=Et("1",11))+(e=Et("0",52));if(wr(r))return t+(i=Et("1",11))+(e="1"+Et("0",51));if(0===r)return t+(i=Et("0",11))+(e=Et("0",52));if(o=(r=Vr(r))-(a=hr(r)),a=ue(a),o=function(r){var n,t,e,i;if(n="",0===r)return n;for(i=fe,e=0;e<fe&&((t=2*r)>=1?(r=t-1,n+="1",i===fe&&(i=e)):(r=t,n+="0"),!(1===t||e-i>54));e++);return n}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){n=u+1;break}i=-n}return e=a+o,i<0?(i<=-1023&&(n=1022),e=e.substring(n)):e=e.substring(1),t+(i=At(i=ue(i+Sn),11,"0"))+(e=bt(e,52,"0").substring(0,52))})),P(Ee,"float64ToFloat32",Dn),P(Ee,"float64ToInt32",(function(r){return 0|r})),P(Ee,"float64ToInt64Bytes",ce),P(Ee,"float64ToUint32",ve),P(Ee,"toWords",Ae);var Ie={};function Se(r){return r>>>0}P(Ie,"base",Ee),P(Ie,"reviver",(function(r,n){if(null!==n&&"object"==typeof n&&"float64"===n.type){if("NaN"===n.value)return NaN;if("+Infinity"===n.value)return Q;if("-Infinity"===n.value)return Er}return n})),P(Ie,"toJSON",(function(r){if("number"!=typeof r)throw new TypeError(O("invalid argument. Must provide a number. Value: `%s`.",r));return r!=r?{type:"float64",value:"NaN"}:r===Q?{type:"float64",value:"+Infinity"}:r===Er?{type:"float64",value:"-Infinity"}:r}));var Ve={};P(Ve,"int32ToUint32",Se);var Ue={};P(Ue,"base",Ve);var Fe={};P(Fe,"fromBinaryStringUint8",(function(r){var n,t;if(8!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",8,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=$n(2,8-t-1));return n})),P(Fe,"toBinaryStringUint8",(function(r){var n;return n=function(r){var n,t,e="";for(n=8;r>0&&n;)e=(t=r/2)===(r=hr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=At(n,8,"0")}));var Te={};P(Te,"base",Fe);var Ne={};P(Ne,"fromBinaryStringUint16",(function(r){var n,t;if(16!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",16,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=$n(2,16-t-1));return n})),P(Ne,"toBinaryStringUint16",(function(r){var n;return n=function(r){var n,t,e="";for(n=16;r>0&&n;)e=(t=r/2)===(r=hr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=At(n,16,"0")}));var _e={};P(_e,"base",Ne);var je=Se(31),Oe=Se(31),xe={};P(xe,"fromBinaryStringUint32",(function(r){var n,t;if(32!==r.length)throw new Error(O("invalid argument. Input string must have a length equal to %u. Value: `%s`.",32,r));for(n=0,t=0;t<r.length;t++)"1"===r[t]&&(n+=$n(2,32-t-1));return ve(n)})),P(xe,"rotl32",(function(r,n){return Se(r<<(n&=je)|r>>>(-n&je))})),P(xe,"rotr32",(function(r,n){return Se(r>>>(n&=Oe)|r<<(-n&Oe))})),P(xe,"toBinaryStringUint32",(function(r){var n;return n=function(r){var n,t,e="";for(n=32;r>0&&n;)e=(t=r/2)===(r=hr(t))?"0"+e:"1"+e,n-=1;return e}(r),n=At(n,32,"0")})),P(xe,"uint32ToInt32",(function(r){return 0|r}));var ke={};P(ke,"base",xe);var We={};return P(We,"Number",R),P(We,"float32",Vt),P(We,"float64",Ie),P(We,"int32",Ue),P(We,"uint8",Te),P(We,"uint16",_e),P(We,"uint32",ke),We},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=n();
//# sourceMappingURL=index.js.map
