/*!
 * Fotorama 4.4.6 | http://fotorama.io/license/
 */
!function(a,b,c,d,e){"use strict";function f(a){var b="bez_"+d.makeArray(arguments).join("_").replace(".","p");if("function"!=typeof d.easing[b]){var c=function(a,b){var c=[null,null],d=[null,null],e=[null,null],f=function(f,g){return e[g]=3*a[g],d[g]=3*(b[g]-a[g])-e[g],c[g]=1-e[g]-d[g],f*(e[g]+f*(d[g]+f*c[g]))},g=function(a){return e[0]+a*(2*d[0]+3*c[0]*a)},h=function(a){for(var b,c=a,d=0;++d<14&&(b=f(c,0)-a,!(Math.abs(b)<.001));)c-=b/g(c);return c};return function(a){return f(h(a),1)}};d.easing[b]=function(b,d,e,f,g){return f*c([a[0],a[1]],[a[2],a[3]])(d/g)+e}}return b}function g(){}function h(a,b,c){return Math.max(isNaN(b)?-1/0:b,Math.min(isNaN(c)?1/0:c,a))}function i(a){return a.match(/ma/)&&a.match(/-?\d+(?!d)/g)[a.match(/3d/)?12:4]}function j(a){return yc?+i(a.css("transform")):+a.css("left").replace("px","")}function k(a,b){var c={};return yc?c.transform="translate3d("+(a+(b?.001:0))+"px,0,0)":c.left=a,c}function l(a){return{"transition-duration":a+"ms"}}function m(a,b){return+String(a).replace(b||"px","")||e}function n(a){return/%$/.test(a)&&m(a,"%")}function o(a){return(!!m(a)||!!m(a,"%"))&&a}function p(a,b,c,d){return(a-(d||0))*(b+(c||0))}function q(a,b,c,d){return-Math.round(a/(b+(c||0))-(d||0))}function r(a){var b=a.data();if(!b.tEnd){var c=a[0],d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",msTransition:"MSTransitionEnd",transition:"transitionend"};c.addEventListener(d[jc.prefixed("transition")],function(a){b.tProp&&a.propertyName.match(b.tProp)&&b.onEndFn()},!1),b.tEnd=!0}}function s(a,b,c,d){var e,f=a.data();f&&(f.onEndFn=function(){e||(e=!0,clearTimeout(f.tT),c())},f.tProp=b,clearTimeout(f.tT),f.tT=setTimeout(function(){f.onEndFn()},1.5*d),r(a))}function t(a,b,c){if(a.length){var d=a.data();yc?(a.css(l(0)),d.onEndFn=g,clearTimeout(d.tT)):a.stop();var e=u(b,function(){return j(a)});return a.css(k(e,c)),e}}function u(){for(var a,b=0,c=arguments.length;c>b&&(a=b?arguments[b]():arguments[b],"number"!=typeof a);b++);return a}function v(a,b){return Math.round(a+(b-a)/1.5)}function w(){return w.p=w.p||("https://"===c.protocol?"https://":"http://"),w.p}function x(a){var c=b.createElement("a");return c.href=a,c}function y(a,b){if("string"!=typeof a)return a;a=x(a);var c,d;if(a.host.match(/youtube\.com/)&&a.search){if(c=a.search.split("v=")[1]){var e=c.indexOf("&");-1!==e&&(c=c.substring(0,e)),d="youtube"}}else a.host.match(/youtube\.com|youtu\.be/)?(c=a.pathname.replace(/^\/(embed\/|v\/)?/,"").replace(/\/.*/,""),d="youtube"):a.host.match(/vimeo\.com/)&&(d="vimeo",c=a.pathname.replace(/^\/(video\/)?/,"").replace(/\/.*/,""));return c&&d||!b||(c=a.href,d="custom"),c?{id:c,type:d,s:a.search.replace(/^\?/,"")}:!1}function z(a,b,c){var e,f,g=a.video;return"youtube"===g.type?(f=w()+"img.youtube.com/vi/"+g.id+"/default.jpg",e=f.replace(/\/default.jpg$/,"/hqdefault.jpg"),a.thumbsReady=!0):"vimeo"===g.type?d.ajax({url:w()+"vimeo.com/api/v2/video/"+g.id+".json",dataType:"jsonp",success:function(d){a.thumbsReady=!0,A(b,{img:d[0].thumbnail_large,thumb:d[0].thumbnail_small},a.i,c)}}):a.thumbsReady=!0,{img:e,thumb:f}}function A(a,b,c,e){for(var f=0,g=a.length;g>f;f++){var h=a[f];if(h.i===c&&h.thumbsReady){var i={videoReady:!0};i[Oc]=i[Qc]=i[Pc]=!1,e.splice(f,1,d.extend({},h,i,b));break}}}function B(a){function b(a,b,e){var f=a.children("img").eq(0),g=a.attr("href"),h=a.attr("src"),i=f.attr("src"),j=b.video,k=e?y(g,j===!0):!1;k?g=!1:k=j,c(a,f,d.extend(b,{video:k,img:b.img||g||h||i,thumb:b.thumb||i||h||g}))}function c(a,b,c){var e=c.thumb&&c.img!==c.thumb,f=m(c.width||a.attr("width")),g=m(c.height||a.attr("height"));d.extend(c,{width:f,height:g,thumbratio:Q(c.thumbratio||m(c.thumbwidth||b&&b.attr("width")||e||f)/m(c.thumbheight||b&&b.attr("height")||e||g))})}var e=[];return a.children().each(function(){var a=d(this),f=P(d.extend(a.data(),{id:a.attr("id")}));if(a.is("a, img"))b(a,f,!0);else{if(a.is(":empty"))return;c(a,null,d.extend(f,{html:this,_html:a.html()}))}e.push(f)}),e}function C(a){return 0===a.offsetWidth&&0===a.offsetHeight}function D(a){return!d.contains(b.documentElement,a)}function E(a,b,c){a()?b():setTimeout(function(){E(a,b)},c||100)}function F(a){c.replace(c.protocol+"//"+c.host+c.pathname.replace(/^\/?/,"/")+c.search+"#"+a)}function G(a,b,c){var d=a.data(),e=d.measures;if(e&&(!d.l||d.l.W!==e.width||d.l.H!==e.height||d.l.r!==e.ratio||d.l.w!==b.w||d.l.h!==b.h||d.l.m!==c)){var f=e.width,g=e.height,i=b.w/b.h,j=e.ratio>=i,k="scaledown"===c,l="contain"===c,m="cover"===c;j&&(k||l)||!j&&m?(f=h(b.w,0,k?f:1/0),g=f/e.ratio):(j&&m||!j&&(k||l))&&(g=h(b.h,0,k?g:1/0),f=g*e.ratio),a.css({width:Math.ceil(f),height:Math.ceil(g),marginLeft:Math.floor(-f/2),marginTop:Math.floor(-g/2)}),d.l={W:e.width,H:e.height,r:e.ratio,w:b.w,h:b.h,m:c}}return!0}function H(a,b){var c=a[0];c.styleSheet?c.styleSheet.cssText=b:a.html(b)}function I(a,b,c){return b===c?!1:b>=a?"left":a>=c?"right":"left right"}function J(a,b,c,d){if(!c)return!1;if(!isNaN(a))return a-(d?0:1);for(var e,f=0,g=b.length;g>f;f++){var h=b[f];if(h.id===a){e=f;break}}return e}function K(a,b,c){c=c||{},a.each(function(){var a,e=d(this),f=e.data();f.clickOn||(f.clickOn=!0,d.extend(W(e,{onStart:function(b){a=b,(c.onStart||g).call(this,b)},onMove:c.onMove||g,onEnd:function(d){d.moved||c.tail.checked||b.call(this,a)}}),c.tail))})}function L(a,b){return'<div class="'+a+'">'+(b||"")+"</div>"}function M(a){for(var b=a.length;b;){var c=Math.floor(Math.random()*b--),d=a[b];a[b]=a[c],a[c]=d}return a}function N(a){return"[object Array]"==Object.prototype.toString.call(a)&&d.map(a,function(a){return d.extend({},a)})}function O(a,b){uc.scrollLeft(a).scrollTop(b)}function P(a){if(a){var b={};return d.each(a,function(a,c){b[a.toLowerCase()]=c}),b}}function Q(a){if(a){var b=+a;return isNaN(b)?(b=a.split("/"),+b[0]/+b[1]||e):b}}function R(a,b){a.preventDefault(),b&&a.stopPropagation()}function S(a){return a?">":"<"}function T(a,b){var c=Math.round(b.pos),e=b.onEnd||g;"undefined"!=typeof b.overPos&&b.overPos!==b.pos&&(c=b.overPos,e=function(){T(a,d.extend({},b,{overPos:b.pos,time:Math.max(Hc,b.time/2)}))});var f=d.extend(k(c,b._001),b.width&&{width:b.width});yc?(a.css(d.extend(l(b.time),f)),b.time>10?s(a,"transform",e,b.time):e()):a.stop().animate(f,b.time,Rc,e)}function U(a,b,c,e,f,h){var i="undefined"!=typeof h;if(i||(f.push(arguments),Array.prototype.push.call(arguments,f.length),!(f.length>1))){a=a||d(a),b=b||d(b);var j=a[0],k=b[0],l="crossfade"===e.method,m=function(){if(!m.done){m.done=!0;var a=(i||f.shift())&&f.shift();a&&U.apply(this,a),(e.onEnd||g)(!!a)}},n=e.time/(h||1);c.not(a.addClass(Hb).removeClass(Gb)).not(b.addClass(Gb).removeClass(Hb)).removeClass(Hb+" "+Gb),a.stop(),b.stop(),l&&k&&a.fadeTo(0,0),a.fadeTo(l?n:1,1,l&&m),b.fadeTo(n,0,m),j&&l||k||m()}}function V(a){var b=(a.touches||[])[0]||a;a._x=b.pageX,a._y=b.clientY}function W(c,e){function f(a){return n=d(a.target),t.checked=q=r=!1,l||t.flow||a.touches&&a.touches.length>1||a.which>1||qc&&qc.type!==a.type&&sc||(q=e.select&&n.is(e.select,s))?q:(p="touchstart"===a.type,r=n.is("a, a *",s),V(a),m=qc=a,rc=a.type.replace(/down|start/,"move").replace(/Down/,"Move"),o=t.control,(e.onStart||g).call(s,a,{control:o,$target:n}),l=t.flow=!0,(!p||t.go)&&R(a),void 0)}function h(a){if(a.touches&&a.touches.length>1||Ec&&!a.isPrimary||rc!==a.type||!l)return l&&i(),void 0;V(a);var b=Math.abs(a._x-m._x),c=Math.abs(a._y-m._y),d=b-c,f=(t.go||t.x||d>=0)&&!t.noSwipe,h=0>d;p&&!t.checked?(l=f)&&R(a):(R(a),(e.onMove||g).call(s,a,{touch:p})),t.checked=t.checked||f||h}function i(a){var b=l;t.control=l=!1,b&&(t.flow=!1),!b||r&&!t.checked||(a&&R(a),sc=!0,clearTimeout(tc),tc=setTimeout(function(){sc=!1},1e3),(e.onEnd||g).call(s,{moved:t.checked,$target:n,control:o,touch:p,startEvent:m,aborted:!a||"MSPointerCancel"===a.type}))}function j(){t.flow||setTimeout(function(){t.flow=!0},10)}function k(){t.flow&&setTimeout(function(){t.flow=!1},Gc)}var l,m,n,o,p,q,r,s=c[0],t={};return Ec?(s[Dc]("MSPointerDown",f,!1),b[Dc]("MSPointerMove",h,!1),b[Dc]("MSPointerCancel",i,!1),b[Dc]("MSPointerUp",i,!1)):(s[Dc]&&(s[Dc]("touchstart",f,!1),s[Dc]("touchmove",h,!1),s[Dc]("touchend",i,!1),b[Dc]("touchstart",j,!1),b[Dc]("touchend",k,!1),b[Dc]("touchcancel",k,!1),a[Dc]("scroll",k,!1)),c.on("mousedown",f),vc.on("mousemove",h).on("mouseup",i)),c.on("click","a",function(a){t.checked&&R(a)}),t}function X(a,b){function c(c){j=l=c._x,q=d.now(),p=[[q,j]],m=n=C.noMove?0:t(a,(b.getPos||g)(),b._001),(b.onStart||g).call(A,c)}function e(a,b){s=B.min,u=B.max,w=B.snap,x=a.altKey,z=!1,y=b.control,y||c(a)}function f(e,f){y&&(y=!1,c(e)),C.noSwipe||(l=e._x,p.push([d.now(),l]),n=m-(j-l),o=I(n,s,u),s>=n?n=v(n,s):n>=u&&(n=v(n,u)),C.noMove||(a.css(k(n,b._001)),z||(z=!0,f.touch||Ec||a.addClass(Wb)),(b.onMove||g).call(A,e,{pos:n,edge:o})))}function i(c){if(!y){c.touch||Ec||a.removeClass(Wb),r=(new Date).getTime();for(var e,f,i,j,k,o,q,t,v,z=r-Gc,B=null,C=Hc,D=b.friction,E=p.length-1;E>=0;E--){if(e=p[E][0],f=Math.abs(e-z),null===B||i>f)B=e,j=p[E][1];else if(B===z||f>i)break;i=f}q=h(n,s,u);var F=j-l,G=F>=0,H=r-B,I=H>Gc,J=!I&&n!==m&&q===n;w&&(q=h(Math[J?G?"floor":"ceil":"round"](n/w)*w,s,u),s=u=q),J&&(w||q===n)&&(v=-(F/H),C*=h(Math.abs(v),b.timeLow,b.timeHigh),k=Math.round(n+v*C/D),w||(q=k),(!G&&k>u||G&&s>k)&&(o=G?s:u,t=k-o,w||(q=o),t=h(q+.03*t,o-50,o+50),C=Math.abs((n-t)/(v/D)))),C*=x?10:1,(b.onEnd||g).call(A,d.extend(c,{pos:n,newPos:q,overPos:t,time:C,moved:I?w:Math.abs(n-m)>(w?0:3)}))}}var j,l,m,n,o,p,q,r,s,u,w,x,y,z,A=a[0],B=a.data(),C={};return C=d.extend(W(b.$wrap,{onStart:e,onMove:f,onEnd:i,select:b.select,control:b.control}),C)}function Y(a,b){var c,e,f,h=a[0],i={prevent:{}};return h[Dc]&&h[Dc](Fc,function(a){var h=a.wheelDeltaY||-1*a.deltaY||0,j=a.wheelDeltaX||-1*a.deltaX||0,k=Math.abs(j)>Math.abs(h),l=S(0>j),m=e===l,n=d.now(),o=Gc>n-f;e=l,f=n,k&&i.ok&&(!i.prevent[l]||c)&&(R(a,!0),c&&m&&o||(b.shift&&(c=!0,clearTimeout(i.t),i.t=setTimeout(function(){c=!1},Ic)),(b.onEnd||g)(a,b.shift?l:j)))},!1),i}function Z(){d.each(d.Fotorama.instances,function(a,b){b.index=a})}function $(a){d.Fotorama.instances.push(a),Z()}function _(a){d.Fotorama.instances.splice(a.index,1),Z()}var ab="fotorama",bb="fullscreen",cb=ab+"__wrap",db=cb+"--css2",eb=cb+"--css3",fb=cb+"--video",gb=cb+"--fade",hb=cb+"--slide",ib=cb+"--no-controls",jb=cb+"--no-shadows",kb=cb+"--pan-y",lb=cb+"--rtl",mb=ab+"__stage",nb=mb+"__frame",ob=nb+"--video",pb=mb+"__shaft",qb=mb+"--only-active",rb=ab+"__grab",sb=ab+"__pointer",tb=ab+"__arr",ub=tb+"--disabled",vb=tb+"--prev",wb=tb+"--next",xb=ab+"__nav",yb=xb+"-wrap",zb=xb+"__shaft",Ab=xb+"--dots",Bb=xb+"--thumbs",Cb=xb+"__frame",Db=Cb+"--dot",Eb=Cb+"--thumb",Fb=ab+"__fade",Gb=Fb+"-front",Hb=Fb+"-rear",Ib=ab+"__shadow",Jb=Ib+"s",Kb=Jb+"--left",Lb=Jb+"--right",Mb=ab+"__active",Nb=ab+"__select",Ob=ab+"--hidden",Pb=ab+"--fullscreen",Qb=ab+"__fullscreen-icon",Rb=ab+"__error",Sb=ab+"__loading",Tb=ab+"__loaded",Ub=Tb+"--full",Vb=Tb+"--img",Wb=ab+"__grabbing",Xb=ab+"__img",Yb=Xb+"--full",Zb=ab+"__dot",$b=ab+"__thumb",_b=$b+"-border",ac=ab+"__html",bc=ab+"__video",cc=bc+"-play",dc=bc+"-close",ec=ab+"__caption",fc=ab+"__caption__wrap",gc=ab+"__oooo",hc=d&&d.fn.jquery.split(".");if(!hc||hc[0]<1||1==hc[0]&&hc[1]<8)throw"Fotorama requires jQuery 1.8 or later and will not run without it.";var ic={},jc=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&r[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+v.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',p,'">',a,"</style>"].join(""),j.id=p,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=o.style.overflow,o.style.overflow="hidden",o.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),o.style.overflow=i),!!g},A={}.hasOwnProperty;l=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d}),w.csstransforms3d=function(){var a=!!i("perspective");return a};for(var B in w)l(w,B)&&(k=B.toLowerCase(),n[k]=w[B](),x.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(o.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),q=j=null,n._version=m,n._prefixes=s,n._domPrefixes=v,n._cssomPrefixes=u,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=z,n.prefixed=function(a,b,c){return b?i(a,b,c):i(a,"pfx")},n}(a,b),kc={ok:!1,is:function(){return!1},request:function(){},cancel:function(){},event:"",prefix:""},lc="webkit moz o ms khtml".split(" ");if("undefined"!=typeof b.cancelFullScreen)kc.ok=!0;else for(var mc=0,nc=lc.length;nc>mc;mc++)if(kc.prefix=lc[mc],"undefined"!=typeof b[kc.prefix+"CancelFullScreen"]){kc.ok=!0;break}kc.ok&&(kc.event=kc.prefix+"fullscreenchange",kc.is=function(){switch(this.prefix){case"":return b.fullScreen;case"webkit":return b.webkitIsFullScreen;default:return b[this.prefix+"FullScreen"]}},kc.request=function(a){return""===this.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},kc.cancel=function(){return""===this.prefix?b.cancelFullScreen():b[this.prefix+"CancelFullScreen"]()});var oc,pc,qc,rc,sc,tc,uc=d(a),vc=d(b),wc="quirks"===c.hash.replace("#",""),xc=jc.csstransforms3d,yc=xc&&!wc,zc=xc||"CSS1Compat"===b.compatMode,Ac=kc.ok,Bc=navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),Cc=!yc||Bc,Dc="addEventListener",Ec=a.navigator.msPointerEnabled,Fc="onwheel"in b.createElement("div")?"wheel":b.onmousewheel!==e?"mousewheel":"DOMMouseScroll",Gc=250,Hc=300,Ic=1400,Jc=5e3,Kc=2,Lc=64,Mc=500,Nc=333,Oc="$stageFrame",Pc="$navDotFrame",Qc="$navThumbFrame",Rc=f([.1,0,.25,1]);jQuery.Fotorama=function(a,f){function i(){d.each(jd,function(a,b){if(!b.i){b.i=Vd++;var c=y(b.video,!0);if(c){var d={};b.video=c,b.img||b.thumb?b.thumbsReady=!0:d=z(b,jd,Rd),A(jd,{img:d.img,thumb:d.thumb},b.i,Rd)}}})}function j(a){var b="keydown."+ab,c="keydown."+ab+Sd,d="resize."+ab+Sd;a?(vc.on(c,function(a){md&&27===a.keyCode?(R(a),ad(md,!0,!0)):(Rd.fullScreen||f.keyboard&&!Rd.index)&&(27===a.keyCode?(R(a),Rd.cancelFullScreen()):39===a.keyCode||40===a.keyCode&&Rd.fullScreen?(R(a),Rd.show({index:">",slow:a.altKey,user:!0})):(37===a.keyCode||38===a.keyCode&&Rd.fullScreen)&&(R(a),Rd.show({index:"<",slow:a.altKey,user:!0})))}),Rd.index||vc.off(b).on(b,"textarea, input, select",function(a){!pc.hasClass(bb)&&a.stopPropagation()}),uc.on(d,Rd.resize)):(vc.off(c),uc.off(d))}function r(b){b!==r.f&&(b?(a.html("").addClass(ab+" "+Td).append(Zd).before(Xd).before(Yd),$(Rd)):(Zd.detach(),Xd.detach(),Yd.detach(),a.html(Wd.urtext).removeClass(Td),_(Rd)),j(b),r.f=b)}function s(){jd=Rd.data=jd||N(f.data)||B(a),kd=Rd.size=jd.length,!id.ok&&f.shuffle&&M(jd),i(),re=W(re),kd&&r(!0)}function v(){var a=2>kd||md;ue.noMove=a||Bd,ue.noSwipe=a||!f.swipe,_d.toggleClass(rb,!ue.noMove&&!ue.noSwipe),Ec&&Zd.toggleClass(kb,!ue.noSwipe)}function w(a){a===!0&&(a=""),f.autoplay=Math.max(+a||Jc,1.5*Ed)}function x(a){return a?"add":"remove"}function C(){Rd.options=f=P(f),Bd="crossfade"===f.transition||"dissolve"===f.transition,vd=f.loop&&(kd>2||Bd),Ed=+f.transitionduration||Hc,Gd="rtl"===f.direction;var a={add:[],remove:[]};kd>1?(wd=f.nav,yd="top"===f.navposition,a.remove.push(Nb),de.toggle(f.arrows)):(wd=!1,de.hide()),xc(),Bc(),f.autoplay&&w(f.autoplay),Cd=m(f.thumbwidth)||Lc,Dd=m(f.thumbheight)||Lc,ve.ok=xe.ok=f.trackpad&&!Cc,v(),Uc(f,!0),xd="thumbs"===wd,xd?(mc(kd,"navThumb"),ld=ie,Qd=Qc,H(Xd,d.Fotorama.jst.style({w:Cd,h:Dd,b:f.thumbborderwidth,m:f.thumbmargin,s:Sd,q:!zc})),fe.addClass(Bb).removeClass(Ab)):"dots"===wd?(mc(kd,"navDot"),ld=he,Qd=Pc,fe.addClass(Ab).removeClass(Bb)):(wd=!1,fe.removeClass(Bb+" "+Ab)),wd&&(yd?ee.insertBefore($d):ee.insertAfter($d),sc.nav=!1,sc(ld,ge,"nav")),zd=f.allowfullscreen,zd?(me.appendTo($d),Ad=Ac&&"native"===zd):(me.detach(),Ad=!1),a[x(Bd)].push(gb),a[x(!Bd)].push(hb),a[x(Gd)].push(lb),Fd=f.shadows&&!Cc,a[x(!Fd)].push(jb),jc(),Zd.addClass(a.add.join(" ")).removeClass(a.remove.join(" ")),se=d.extend({},f)}function V(a){return 0>a?(kd+a%kd)%kd:a>=kd?a%kd:a}function W(a){return h(a,0,kd-1)}function Z(a){return vd?V(a):W(a)}function Fb(a){return a>0||vd?a-1:!1}function Gb(a){return kd-1>a||vd?a+1:!1}function Hb(){je.min=vd?-1/0:-p(kd-1,te.w,f.margin,pd),je.max=vd?1/0:-p(0,te.w,f.margin,pd),je.snap=te.w+f.margin}function Ib(){ke.min=Math.min(0,te.W-ge.width()),ke.max=0,ge.toggleClass(rb,!(we.noMove=ke.min===ke.max))}function Wb(a,b,c){if("number"==typeof a){a=new Array(a);var e=!0}return d.each(a,function(a,d){if(e&&(d=a),"number"==typeof d){var f=jd[V(d)];if(f){var g="$"+b+"Frame",h=f[g];c.call(this,a,d,f,h,g,h&&h.data())}}})}function bc(a,b,c,d){(!Hd||"*"===Hd&&d===ud)&&(a=o(f.width)||o(a)||Mc,b=o(f.height)||o(b)||Nc,Rd.resize({width:a,ratio:f.ratio||c||a/b},0,d===ud?!0:"*"))}function hc(a,b,c,e,g){Wb(a,b,function(a,h,i,j,k,l){function m(a){var b=V(h);Vc(a,{index:b,src:v,frame:jd[b]})}function n(){s.remove(),d.Fotorama.cache[v]="error",i.html&&"stage"===b||!w||w===v?(!v||i.html||q?"stage"===b&&(j.trigger("f:load").removeClass(Sb+" "+Rb).addClass(Tb),m("load"),bc()):(j.trigger("f:error").removeClass(Sb).addClass(Rb),m("error")),l.state="error",!(kd>1)||i.html||i.deleted||i.video||q||(i.deleted=!0,Rd.splice(h,1))):(i[u]=v=w,hc([h],b,c,e,!0))}function o(){var a=r.width,g=r.height,k=a/g;t.measures={width:a,height:g,ratio:k},bc(a,g,k,h),s.off("load error").addClass(Xb+(q?" "+Yb:"")).prependTo(j),G(s,c||te,e||i.fit||f.fit),d.Fotorama.cache[v]=l.state="loaded",setTimeout(function(){j.trigger("f:load").removeClass(Sb+" "+Rb).addClass(Tb+" "+(q?Ub:Vb)),"stage"===b&&m("load")},5)}function p(){var a=10;E(function(){return!Od||!a--&&!Cc},function(){o()})}if(j){var q=Rd.fullScreen&&i.full&&i.full!==i.img&&!l.$full&&"stage"===b;if(!l.$img||g||q){var r=new Image,s=d(r),t=s.data();l[q?"$full":"$img"]=s;var u="stage"===b?q?"full":"img":"thumb",v=i[u],w=q?null:i["stage"===b?"thumb":"img"];if("navThumb"===b&&(j=l.$wrap),!v)return n(),void 0;d.Fotorama.cache[v]?!function x(){"error"===d.Fotorama.cache[v]?n():"loaded"===d.Fotorama.cache[v]?setTimeout(p,0):setTimeout(x,100)}():(d.Fotorama.cache[v]="*",s.on("load",p).on("error",n)),l.state="",r.src=v}}})}function ic(a){jc(!0),Ee.appendTo(a),De=0,Fe(),Ce=setInterval(Fe,200)}function jc(a){a||Ee.detach(),clearInterval(Ce)}function lc(){var a=Rd.activeFrame[Oc];a&&!a.data().state&&(ic(a),a.on("f:load f:error",function(){a.off("f:load f:error"),jc()}))}function mc(a,b){Wb(a,b,function(a,c,e,g,h,i){g||(g=e[h]=Zd[h].clone(),i=g.data(),i.data=e,"stage"===b?(e.html&&d('<div class="'+ac+'"></div>').append(e._html?d(e.html).removeAttr("id").html(e._html):e.html).appendTo(g),f.captions&&e.caption&&d(L(ec,L(fc,e.caption))).appendTo(g),e.video&&g.addClass(ob).append(oe.clone()),ae=ae.add(g)):"navDot"===b?he=he.add(g):"navThumb"===b&&(i.$wrap=g.children(":first"),ie=ie.add(g),e.video&&g.append(oe.clone())))})}function nc(a,b,c){return a&&a.length&&G(a,b,c)}function qc(a){Wb(a,"stage",function(a,b,c,e,g,h){if(e){ze[Oc][V(b)]=e.css(d.extend({left:Bd?0:p(b,te.w,f.margin,pd)},Bd&&l(0))),D(e[0])&&(e.appendTo(_d),ad(c.$video));var i=c.fit||f.fit;nc(h.$img,te,i),nc(h.$full,te,i)}})}function rc(a,b){if("thumbs"===wd&&!isNaN(a)){var c=-a,e=-a+te.w;ie.each(function(){var a=d(this),f=a.data(),g=f.eq,h={h:Dd},i="cover";h.w=f.w,f.l+f.w<c||f.l>e||nc(f.$img,h,i)||b&&hc([g],"navThumb",h,i)})}}function sc(a,b,c){if(!sc[c]){var e="nav"===c&&xd,g=0;b.append(a.filter(function(){for(var a,b=d(this),c=b.data(),e=0,f=jd.length;f>e;e++)if(c.data===jd[e]){a=!0,c.eq=e;break}return a||b.remove()&&!1}).sort(function(a,b){return d(a).data().eq-d(b).data().eq}).each(function(){if(e){var a=d(this),b=a.data(),c=Math.round(Dd*b.data.thumbratio)||Cd;b.l=g,b.w=c,a.css({width:c}),g+=c+f.thumbmargin}})),sc[c]=!0}}function tc(a){return a-Ae>te.w/3}function wc(a){return!(vd||re+a&&re-kd+a||md)}function xc(){be.toggleClass(ub,wc(0)),ce.toggleClass(ub,wc(1))}function Bc(){ve.ok&&(ve.prevent={"<":wc(0),">":wc(1)})}function Dc(a){var b,c,d=a.data();return xd?(b=d.l,c=d.w):(b=a.position().left,c=a.width()),{c:b+c/2,min:-b+10*f.thumbmargin,max:-b+te.w-c-10*f.thumbmargin}}function Fc(a){var b=Rd.activeFrame[Qd].data();T(le,{time:.9*a,pos:b.l,width:b.w-2*f.thumbborderwidth})}function Ic(a){var b=jd[a.guessIndex][Qd];if(b){var c=ke.min!==ke.max,d=c&&Dc(Rd.activeFrame[Qd]),e=c&&(a.keep&&Ic.l?Ic.l:h((a.coo||te.w/2)-Dc(b).c,d.min,d.max)),f=c&&h(e,ke.min,ke.max),g=.9*a.time;T(ge,{time:g,pos:f||0,onEnd:function(){rc(f,!0)}}),_c(fe,I(f,ke.min,ke.max)),Ic.l=e}}function Kc(){Rc(Qd),ye[Qd].push(Rd.activeFrame[Qd].addClass(Mb))}function Rc(a){for(var b=ye[a];b.length;)b.shift().removeClass(Mb)}function Sc(a){var b=ze[a];d.each(od,function(a,c){delete b[V(c)]}),d.each(b,function(a,c){delete b[a],c.detach()})}function Tc(a){pd=qd=re;var b=Rd.activeFrame,c=b[Oc];c&&(Rc(Oc),ye[Oc].push(c.addClass(Mb)),a||Rd.show.onEnd(!0),t(_d,0,!0),Sc(Oc),qc(od),Hb(),Ib())}function Uc(a,b){a&&d.extend(te,{width:a.width||te.width,height:a.height,minwidth:a.minwidth,maxwidth:a.maxwidth,minheight:a.minheight,maxheight:a.maxheight,ratio:Q(a.ratio)})&&!b&&d.extend(f,{width:te.width,height:te.height,minwidth:te.minwidth,maxwidth:te.maxwidth,minheight:te.minheight,maxheight:te.maxheight,ratio:te.ratio})}function Vc(b,c,d){a.trigger(ab+":"+b,[Rd,c]),Rd.prevent[b]?delete Rd.prevent[b]:(d||g)()}function Wc(){clearTimeout(Xc.t),Od=1,f.stopautoplayontouch?Rd.stopAutoplay():Ld=!0}function Xc(){Xc.t=setTimeout(function(){Od=0},Hc+Gc)}function Yc(){Ld=!(!md&&!Md)}function Zc(){if(clearTimeout(Zc.t),!f.autoplay||Ld)return Rd.autoplay&&(Rd.autoplay=!1,Vc("stopautoplay")),void 0;Rd.autoplay||(Rd.autoplay=!0,Vc("startautoplay"));var a=re,b=Rd.activeFrame[Oc].data();E(function(){return b.state||a!==re},function(){Zc.t=setTimeout(function(){Ld||a!==re||Rd.show(vd?S(!Gd):V(re+(Gd?-1:1)))},f.autoplay)})}function $c(){Rd.fullScreen&&(Rd.fullScreen=!1,Ac&&kc.cancel(Ud),pc.removeClass(bb),oc.removeClass(bb),a.removeClass(Pb).insertAfter(Yd),te=d.extend({},Nd),ad(md,!0,!0),ed("x",!1),Rd.resize(),hc(od,"stage"),O(Jd,Id),Vc("fullscreenexit"))}function _c(a,b){Fd&&(a.removeClass(Kb+" "+Lb),b&&!md&&a.addClass(b.replace(/^|\s/g," "+Jb+"--")))}function ad(a,b,c){b&&(Zd.removeClass(fb),md=!1,v()),a&&a!==md&&(a.remove(),Vc("unloadvideo")),c&&(Yc(),Zc())}function bd(a){Zd.toggleClass(ib,a)}function cd(a){if(!ue.flow){var b=a?a.pageX:cd.x,c=b&&!wc(tc(b))&&f.click;cd.p===c||!Bd&&f.swipe||!$d.toggleClass(sb,c)||(cd.p=c,cd.x=b)}}function dd(a,b){var c=a.target,g=d(c);g.hasClass(cc)?Rd.playVideo():c===ne?Rd[(Rd.fullScreen?"cancel":"request")+"FullScreen"]():md?c===qe&&ad(md,!0,!0):Vc("stagetap",e,function(){b?bd():f.click&&Rd.show({index:a.shiftKey||S(tc(a._x)),slow:a.altKey,user:!0})})}function ed(a,b){ue[a]=we[a]=b}function fd(a,b){var c=d(this).data().eq;Rd.show({index:c,slow:a.altKey,user:!0,coo:a._x-fe.offset().left,time:b})}function gd(){if(s(),C(),!gd.i){gd.i=!0;var a=f.startindex;(a||f.hash&&c.hash)&&(ud=J(a||c.hash.replace(/^#/,""),jd,0===Rd.index||a,a)),re=pd=qd=rd=ud=Z(ud)||0}if(kd){if(hd())return;md&&ad(md,!0),od=[],Sc(Oc),Rd.show({index:re,time:0}),Rd.resize()}else Rd.destroy()}function hd(){return!hd.f===Gd?(hd.f=Gd,re=kd-1-re,Rd.reverse(),!0):void 0}function id(){id.ok||(id.ok=!0,Vc("ready"))}oc=oc||d("html"),pc=pc||d("body");var jd,kd,ld,md,nd,od,pd,qd,rd,sd,td,ud,vd,wd,xd,yd,zd,Ad,Bd,Cd,Dd,Ed,Fd,Gd,Hd,Id,Jd,Kd,Ld,Md,Nd,Od,Pd,Qd,Rd=this,Sd=d.now(),Td=ab+Sd,Ud=a[0],Vd=1,Wd=a.data(),Xd=d("<style></style>"),Yd=d(L(Ob)),Zd=d(L(cb)),$d=d(L(mb)).appendTo(Zd),_d=($d[0],d(L(pb)).appendTo($d)),ae=d(),be=d(L(tb+" "+vb)),ce=d(L(tb+" "+wb)),de=be.add(ce).appendTo($d),ee=d(L(yb)),fe=d(L(xb)).appendTo(ee),ge=d(L(zb)).appendTo(fe),he=d(),ie=d(),je=_d.data(),ke=ge.data(),le=d(L(_b)).appendTo(ge),me=d(L(Qb)),ne=me[0],oe=d(L(cc)),pe=d(L(dc)).appendTo($d),qe=pe[0],re=!1,se={},te={},ue={},ve={},we={},xe={},ye={},ze={},Ae=0,Be=[];Zd[Oc]=d(L(nb)),Zd[Qc]=d(L(Cb+" "+Eb,L($b))),Zd[Pc]=d(L(Cb+" "+Db,L(Zb))),ye[Oc]=[],ye[Qc]=[],ye[Pc]=[],ze[Oc]={},Rd.prevent={},Zd.addClass(yc?eb:db),Wd.fotorama=this;var Ce,De,Ee=d(L("",L(gc))),Fe=function(){Ee.attr("class",gc+" "+gc+"--"+De),De++,De>4&&(De=0)};Rd.startAutoplay=function(a){return Rd.autoplay?this:(Ld=Md=!1,w(a||f.autoplay),Zc(),this)},Rd.stopAutoplay=function(){return Rd.autoplay&&(Ld=Md=!0,Zc()),this},Rd.show=function(a){var b;"object"!=typeof a?(b=a,a={}):b=a.index,b=">"===b?qd+1:"<"===b?qd-1:"<<"===b?0:">>"===b?kd-1:b,b=isNaN(b)?J(b,jd,!0):b,b="undefined"==typeof b?re||0:b,Rd.activeIndex=re=Z(b),sd=Fb(re),td=Gb(re),od=[re,sd,td],qd=vd?b:re;var c=Math.abs(rd-qd),d=u(a.time,function(){return Math.min(Ed*(1+(c-1)/12),2*Ed)}),e=a.overPos;a.slow&&(d*=10),Rd.activeFrame=nd=jd[re],ad(md,nd.i!==jd[V(pd)].i),mc(od,"stage"),qc(Cc?[qd]:[qd,Fb(qd),Gb(qd)]),ed("go",!0),Vc("show",{user:a.user,time:d});var g=Rd.show.onEnd=function(b){g.ok||(g.ok=!0,lc(),hc(od,"stage"),b||Tc(!0),Vc("showend",{user:a.user}),ed("go",!1),Bc(),cd(),Yc(),Zc())};if(Bd){var i=nd[Oc],j=re!==rd?jd[rd][Oc]:null;U(i,j,ae,{time:d,method:f.transition,onEnd:g},Be)}else T(_d,{pos:-p(qd,te.w,f.margin,pd),overPos:e,time:d,onEnd:g,_001:!0});if(xc(),wd){Kc();var k=W(re+h(qd-rd,-1,1));Ic({time:d,coo:k!==re&&a.coo,guessIndex:"undefined"!=typeof a.coo?k:re}),xd&&Fc(d)}return Kd="undefined"!=typeof rd&&rd!==re,rd=re,f.hash&&Kd&&!Rd.eq&&F(nd.id||re+1),this},Rd.requestFullScreen=function(){return zd&&!Rd.fullScreen&&(Id=uc.scrollTop(),Jd=uc.scrollLeft(),O(0,0),ed("x",!0),Nd=d.extend({},te),a.addClass(Pb).appendTo(pc.addClass(bb)),oc.addClass(bb),ad(md,!0,!0),Rd.fullScreen=!0,Ad&&kc.request(Ud),Rd.resize(),hc(od,"stage"),lc(),Vc("fullscreenenter")),this},Rd.cancelFullScreen=function(){return Ad&&kc.is()?kc.cancel(b):$c(),this},b.addEventListener&&b.addEventListener(kc.event,function(){!jd||kc.is()||md||$c()},!1),Rd.resize=function(a){if(!jd)return this;Uc(Rd.fullScreen?{width:"100%",maxwidth:null,minwidth:null,height:"100%",maxheight:null,minheight:null}:P(a),Rd.fullScreen);var b=arguments[1]||0,c=arguments[2],d=te.width,e=te.height,g=te.ratio,i=uc.height()-(wd?fe.height():0);return o(d)&&(Zd.css({width:d,minWidth:te.minwidth,maxWidth:te.maxwidth}),d=te.W=te.w=Zd.width(),f.glimpse&&(te.w-=Math.round(2*(n(f.glimpse)/100*d||m(f.glimpse)))),_d.css({width:te.w,marginLeft:(te.W-te.w)/2}),e=n(e)/100*i||m(e),e=e||g&&d/g,e&&(d=Math.round(d),e=te.h=Math.round(h(e,n(te.minheight)/100*i||m(te.minheight),n(te.maxheight)/100*i||m(te.maxheight))),Tc(),$d.addClass(qb).stop().animate({width:d,height:e},b,function(){$d.removeClass(qb)}),wd&&(fe.stop().animate({width:d},b),Ic({guessIndex:re,time:b,keep:!0}),xd&&sc.nav&&Fc(b)),Hd=c||!0,id())),Ae=$d.offset().left,this},Rd.setOptions=function(a){return d.extend(f,a),gd(),this},Rd.shuffle=function(){return jd&&M(jd)&&gd(),this},Rd.destroy=function(){return Rd.cancelFullScreen(),Rd.stopAutoplay(),jd=Rd.data=null,r(),od=[],Sc(Oc),this},Rd.playVideo=function(){var a=Rd.activeFrame,b=a.video,c=re;return"object"==typeof b&&a.videoReady&&(Ad&&Rd.fullScreen&&Rd.cancelFullScreen(),E(function(){return!kc.is()||c!==re},function(){c===re&&(a.$video=a.$video||d(d.Fotorama.jst.video(b)),a.$video.appendTo(a[Oc]),Zd.addClass(fb),md=a.$video,v(),Vc("loadvideo"))})),this},Rd.stopVideo=function(){return ad(md,!0,!0),this},$d.on("mousemove",cd),ue=X(_d,{onStart:Wc,onMove:function(a,b){_c($d,b.edge)},onEnd:function(a){_c($d),Xc();var b=(Ec&&!Pd||a.touch)&&f.arrows;if(a.moved||b&&a.pos!==a.newPos){var c=q(a.newPos,te.w,f.margin,pd);Rd.show({index:c,time:Bd?Ed:a.time,overPos:a.overPos,user:!0})}else a.aborted||dd(a.startEvent,b)},getPos:function(){return-p(qd,te.w,f.margin,pd)},_001:!0,timeLow:1,timeHigh:1,friction:2,select:"."+Nb+", ."+Nb+" *",$wrap:$d}),we=X(ge,{onStart:Wc,onMove:function(a,b){_c(fe,b.edge)},onEnd:function(a){function b(){Ic.l=a.newPos,Yc(),Zc(),rc(a.newPos,!0)}if(Xc(),a.moved)a.pos!==a.newPos?(T(ge,{time:a.time,pos:a.newPos,overPos:a.overPos,onEnd:b}),rc(a.newPos),Fd&&_c(fe,I(a.newPos,ke.min,ke.max))):b();else{var c=a.$target.closest("."+Cb,ge)[0];c&&fd.call(c,a.startEvent)}},timeLow:.5,timeHigh:2,friction:5,$wrap:fe}),ve=Y($d,{shift:!0,onEnd:function(a,b){Wc(),Xc(),Rd.show({index:b,slow:a.altKey})}}),xe=Y(fe,{onEnd:function(a,b){Wc(),Xc();var c=t(ge)+.25*b;ge.css(k(h(c,ke.min,ke.max))),Fd&&_c(fe,I(c,ke.min,ke.max)),xe.prevent={"<":c>=ke.max,">":c<=ke.min},clearTimeout(xe.t),xe.t=setTimeout(function(){rc(c,!0)},Gc),rc(c)}}),Zd.hover(function(){setTimeout(function(){Od||(Pd=!0,bd(!Pd))},0)},function(){Pd&&(Pd=!1,bd(!Pd))}),K(de,function(a){R(a),md?ad(md,!0,!0):(Xc(),Rd.show({index:de.index(this)?">":"<",slow:a.altKey,user:!0}))},{onStart:function(){Wc(),ue.control=!0},tail:ue}),d.each("load push pop shift unshift reverse sort splice".split(" "),function(a,b){Rd[b]=function(){return jd=jd||[],"load"!==b?Array.prototype[b].apply(jd,arguments):arguments[0]&&"object"==typeof arguments[0]&&arguments[0].length&&(jd=N(arguments[0])),gd(),Rd}}),gd()},d.fn.fotorama=function(b){return this.each(function(){var c=this,e=d(this),f=e.data(),g=f.fotorama;g?g.setOptions(b):E(function(){return!C(c)},function(){f.urtext=e.html(),new d.Fotorama(e,d.extend({},{width:null,minwidth:null,maxwidth:"100%",height:null,minheight:null,maxheight:null,ratio:null,margin:Kc,glimpse:0,nav:"dots",navposition:"bottom",thumbwidth:Lc,thumbheight:Lc,thumbmargin:Kc,thumbborderwidth:Kc,allowfullscreen:!1,fit:"contain",transition:"slide",transitionduration:Hc,captions:!0,hash:!1,startindex:0,loop:!1,autoplay:!1,stopautoplayontouch:!0,keyboard:!1,arrows:!0,click:!0,swipe:!0,trackpad:!0,shuffle:!1,direction:"ltr",shadows:!0},a.fotoramaDefaults,b,f))})})},d.Fotorama.instances=[],d.Fotorama.cache={},d=d||{},d.Fotorama=d.Fotorama||{},d.Fotorama.jst=d.Fotorama.jst||{},d.Fotorama.jst.style=function(a){var b,c="";return ic.escape,c+=".fotorama"+(null==(b=a.s)?"":b)+" .fotorama__nav--thumbs .fotorama__nav__frame{\npadding:"+(null==(b=a.m)?"":b)+"px;\nheight:"+(null==(b=a.h)?"":b)+"px}\n.fotorama"+(null==(b=a.s)?"":b)+" .fotorama__thumb-border{\nheight:"+(null==(b=a.h-a.b*(a.q?0:2))?"":b)+"px;\nborder-width:"+(null==(b=a.b)?"":b)+"px;\nmargin-top:"+(null==(b=a.m)?"":b)+"px}"},d.Fotorama.jst.video=function(a){function b(){c+=d.call(arguments,"")}var c="",d=(ic.escape,Array.prototype.join);return c+='<div class="fotorama__video"><iframe src="',b(("youtube"==a.type?"http://youtube.com/embed/"+a.id+"?autoplay=1":"vimeo"==a.type?"http://player.vimeo.com/video/"+a.id+"?autoplay=1&badge=0":a.id)+(a.s?"&"+a.s:"")),c+='" frameborder="0" allowfullscreen></iframe></div>'},d(function(){d("."+ab+':not([data-auto="false"])').fotorama()})}(window,document,location,window.jQuery);