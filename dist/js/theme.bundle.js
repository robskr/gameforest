/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'auto'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          stickyElement.addEventListener('DOMNodeInserted', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function() {
            methods.setWrapperHeight(stickyElement);
          }, false);
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('webfontloader')) :
	typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'webfontloader'], factory) :
	(factory((global.gameforest = {}),global.jQuery,global.WebFont));
}(this, (function (exports,$,WebFont) { 'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;
WebFont = WebFont && WebFont.hasOwnProperty('default') ? WebFont['default'] : WebFont;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: helpers.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var DATA_OPTION = 'ya-option';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    this.options = [];
  }

  var _proto = Helpers.prototype;

  _proto.loopArray = function loopArray(element, value) {
    var _this = this;

    if (element.substring(element.length - 1) === ';') {
      element = element.substring(0, element.length - 1);
    }

    return element.split(';').forEach(function (s) {
      var arr = s.split(':');
      value[_this.replaceString(arr[0])] = _this.replaceString(arr[1]);
    });
  };

  _proto.replaceString = function replaceString(string) {
    return string.replace(/\s/g, '');
  };

  _proto.disqus = function disqus(selector) {
    var script = document.createElement('script');
    var iframe = document.createElement('div'); // create script for header

    script.src = "https://" + window.gameforest.disqus + ".disqus.com/embed.js";
    script.setAttribute('data-timestamp', +Number(new Date()));
    iframe.id = 'disqus_thread';
    document.querySelector(selector).appendChild(iframe); // append script

    document.head.appendChild(script);
    document.body.appendChild(script);
    return true;
  };

  _proto.facebook = function facebook(selector) {
    var script = document.createElement('script');
    var root = document.createElement('div');
    var iframe = document.createElement('div');
    script.src = "https://connect.facebook.net/" + window.gameforest.facebook.lang + "/sdk.js#xfbml=1&version=" + window.gameforest.facebook.version + "&appId=" + window.gameforest.facebook.id;
    root.id = 'fb-root';
    iframe.className = 'fb-comments';
    iframe.setAttribute('data-width', '100%');
    iframe.setAttribute('data-numposts', '10');
    iframe.setAttribute('data-href', window.location.href);
    document.querySelector(selector).appendChild(iframe);

    if (!document.getElementById(root.id)) {
      document.body.appendChild(script);
      document.body.appendChild(root);
    }

    return true;
  };

  _proto.vimeo = function vimeo(option) {
    // check data option
    if (option) {
      this.loopArray(option, this.options);
    } // player


    var player = {
      autoplay: this.options.autoplay ? this.options.autoplay : 1,
      loop: this.options.loop ? 1 : 0,
      quality: this.options.quality ? this.options.quality : '1080p',
      mute: this.options.mute ? this.options.mute : 0
    };
    return "?autoplay=" + player.autoplay + "&amp;muted=" + player.mute + "&amp;quality=" + player.quality + "&amp;loop=" + player.loop;
  };

  _proto.youtube = function youtube(option, id) {
    // check data option
    if (option) {
      this.loopArray(option, this.options);
    } // player


    var player = {
      controls: this.options.controls ? this.options.controls : 1,
      autoplay: this.options.autoplay ? this.options.autoplay : 1,
      mute: this.options.mute ? this.options.mute : 0,
      loop: this.options.loop ? this.options.loop + "&amp;playlist=" + id : 0,
      recommends: this.options.recommends ? this.options.recommends : 0,
      start: this.options.start ? this.options.start : 0
    };
    return "?rel=0&amp;autoplay=" + player.autoplay + "&amp;controls=" + player.controls + "&amp;mute=" + player.mute + "&amp;start=" + player.start + "&amp;loop=" + player.loop;
  };

  _proto.video = function video(src) {
    // get option data attribute
    var option = src.getAttribute(DATA_OPTION); // youtube

    if (this._attr.includes('youtube')) {
      var id = this._attr.split('v=')[1];

      src = "https://www.youtube.com/embed/" + (id + this.youtube(option, id));
    } // vimeo


    if (this._attr.includes('vimeo')) {
      var _id = this._attr.split('https://vimeo.com/')[1];

      src = "https://player.vimeo.com/video/" + (_id + this.vimeo(option));
    } // twitch


    if (this._attr.includes('twitch')) {
      if (this._attr.split('clips.twitch.tv/')[1]) {
        var _id2 = this._attr.split('clips.twitch.tv/')[1];

        src = "https://clips.twitch.tv/embed?autoplay=true&clip=" + _id2 + "&tt_content=embed&tt_medium=clips_embed";
      } else {
        var _id3 = this._attr.split('videos/')[1];

        src = "https://player.twitch.tv/?autoplay=true&video=v" + _id3;
      }
    }

    return src;
  };

  return Helpers;
}();

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: background.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA = 'ya-background';
var DATA_KEY = "[" + DATA + "]";
var VERSION = '1.0.0';
var ClassName = {
  EMBED: 'bg-video',
  EMBED_ITEM: 'bg-video-item',
  CONTAINER: 'container-fluid'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Background =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Background, _Helpers);

  function Background(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA);
    _this._iframe = document.createElement('iframe');
    return _this;
  }

  var _proto = Background.prototype;

  _proto._calc = function _calc(el, video) {
    // numbers
    var num = {
      calc: 0.2,
      half: 2,
      x: 16,
      y: 9
    };
    var ratio = num.x / num.y;
    var abundance = this._element.offsetHeight * num.calc; // el parameters

    el.width = this._element.offsetWidth;
    el.outerheight = this._element.offsetHeight;
    el.height = this._element.offsetHeight + abundance; // video paramaters

    video.width = el.width;
    video.height = Math.ceil(video.width / ratio);
    video.marginTop = Math.ceil(-((video.height - el.outerheight) / num.half));
    video.marginLeft = 0; // element height is smaller

    if (video.height < el.height) {
      video.marginTop = Math.ceil(-((el.height - el.outerheight) / num.half));
      video.height = el.height;
      video.width = Math.ceil(video.height * ratio);
      video.marginLeft = Math.ceil(-((video.width - el.width) / num.half));
    }
  }; // private


  _proto._add = function _add(src) {
    // create container
    var container = document.createElement('div');
    container.className = ClassName.CONTAINER;
    var el = {};
    var video = {}; // calculate

    this._calc(el, video); // set style


    this._iframe.setAttribute('style', "width: " + video.width + "px;height: " + video.height + "px;margin-top: " + video.marginTop + "px;margin-left: " + video.marginLeft + "px");

    this.loopArray(src.getAttribute('ya-option'), this.options);

    if (this.options.opacity) {
      this._iframe.style.cssText += "opacity: " + this.options.opacity;
    } // iframe


    this._iframe.className = ClassName.EMBED_ITEM;
    this._iframe.src = this.video(src);
    this._iframe.allow = 'autoplay; encrypted-media'; // add class

    this._element.classList.add(ClassName.EMBED); // append to elements


    this._element.appendChild(container);

    this._element.appendChild(this._iframe);
  };

  _proto._get = function _get() {
    return this._add(this._element);
  }; // static


  Background._init = function _init() {
    var data = new Background(this);

    data._get();
  };

  _createClass(Background, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION;
    }
  }]);

  return Background;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY).forEach(function (el) {
    Background._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: carousel.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION$1 = '1.0.0';
var DATA$1 = 'ya-carousel';
var DATA_KEY$1 = "[" + DATA$1 + "]";
var ClassName$1 = {
  CAROUSEL: 'owl-carousel',
  THEME: 'owl-carousel-theme',
  HEIGHT: 'owl-height-100'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Carousel =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Carousel, _Helpers);

  function Carousel(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$1);
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto._option = function _option() {
    if (this._attr) {
      this.loopArray(this._attr, this.options);
    }

    return this.options;
  };

  _proto._add = function _add() {
    var num = 100;
    var id = Math.floor(Math.random() * num);
    var carousel = ClassName$1.CAROUSEL + "-" + id; // add otpion

    this._option(); // check height


    if (this.options.height) {
      this._element.classList.add(ClassName$1.HEIGHT);
    } // set class


    this._element.classList.add(ClassName$1.THEME, carousel); // init carousel


    return $("." + carousel).owlCarousel({
      autoplay: this.options.autoplay ? true : 0,
      autoplaySpeed: this.options.autoplayspeed ? Number(this.options.autoplayspeed) : '',
      loop: this.options.loop ? 0 : true,
      nav: this.options.nav ? 0 : true,
      dots: this.options.dots ? 0 : true,
      items: this.options.items ? Number(this.options.items) : 1,
      margin: this.options.margin ? Number(this.options.margin) : 0,
      center: this.options.center ? true : 0,
      autoWidth: this.options.autowidth ? true : 0,
      slideBy: this.options.slideItem ? Number(this.options.slideItem) : 1
    });
  }; // private


  _proto._get = function _get() {
    return this._add();
  }; // static


  Carousel._init = function _init() {
    var data = new Carousel(this);

    data._get();
  };

  _createClass(Carousel, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$1;
    }
  }]);

  return Carousel;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$1).forEach(function (el) {
    Carousel._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: disqus.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$2 = 'ya-disqus';
var DATA_KEY$2 = "[" + DATA$2 + "]";
var VERSION$2 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Disqus =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Disqus, _Helpers);

  function Disqus(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$2);
    return _this;
  }

  var _proto = Disqus.prototype;

  _proto._get = function _get() {
    return this.disqus(DATA_KEY$2);
  }; // static


  Disqus._init = function _init() {
    var data = new Disqus(this);

    data._get();
  };

  _createClass(Disqus, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$2;
    }
  }]);

  return Disqus;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$2).forEach(function (el) {
    Disqus._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: embed.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$3 = 'ya-embed';
var DATA_KEY$3 = "[" + DATA$3 + "]";
var DATA_TITLE = 'ya-title';
var DATA_LENGTH = 'ya-length';
var VERSION$3 = '1.0.0';
var ClassName$2 = {
  ITEM: 'embed-item',
  TITLE: 'embed-title',
  LENGTH: 'embed-length'
};
var Selector = {
  EMBED: '.embed',
  CAPTION: '.embed-caption',
  IFRAME: "." + ClassName$2.EMBED_ITEM
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Embed =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Embed, _Helpers);

  function Embed(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$3);
    _this._title = element.getAttribute(DATA_TITLE);
    _this._length = element.getAttribute(DATA_LENGTH);
    _this._item = element.querySelector('img');
    _this._embed = element.querySelector(Selector.EMBED);
    _this._iframe = element.querySelector(Selector.IFRAME);
    return _this;
  }

  var _proto = Embed.prototype;

  _proto.caption = function caption() {
    var caption = document.createElement('div'); // caption

    caption.className = 'embed-caption';

    this._element.appendChild(caption);

    if (this._title) {
      var title = document.createElement('div');
      title.className = ClassName$2.TITLE;
      title.innerText = this._title;
      caption.appendChild(title);
    }

    if (this._length) {
      var length = document.createElement('div');
      length.className = ClassName$2.LENGTH;
      length.innerText = this._length;
      caption.appendChild(length);
    }
  };

  _proto._set = function _set() {
    this._item.classList.add(ClassName$2.ITEM);

    this._element.classList.add('embed', 'embed-responsive', 'embed-responsive-16by9');

    if (this._title || this._length) {
      this.caption();
    }

    return true;
  };

  _proto._remove = function _remove() {
    this._item.classList.add('animated', 'fadeOut'); // animated caption


    if (this._title || this._length) {
      this._element.querySelector(Selector.CAPTION).classList.add('animated', 'fadeOut');
    }

    return true;
  }; // private


  _proto._add = function _add(src) {
    // create an element
    var iframe = document.createElement('iframe'); // iframe

    iframe.className = ClassName$2.ITEM;
    iframe.src = this.video(src); // class when clicked

    this._element.classList.add('play');

    this._remove(); // append iframe


    return this._element.appendChild(iframe);
  };

  _proto._get = function _get() {
    var _this2 = this;

    // set classes
    this._set(); // click event


    this._element.addEventListener('click', function (e) {
      e.preventDefault();
      return _this2._add(_this2._element);
    }, false);
  }; // static


  Embed._init = function _init() {
    var data = new Embed(this);

    data._get();
  };

  _createClass(Embed, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$3;
    }
  }]);

  return Embed;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$3).forEach(function (el) {
    Embed._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: facebook.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$4 = 'ya-facebook';
var DATA_KEY$4 = "[" + DATA$4 + "]";
var VERSION$4 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Facebook =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Facebook, _Helpers);

  function Facebook(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    return _this;
  }

  var _proto = Facebook.prototype;

  _proto._get = function _get() {
    return this.facebook(DATA_KEY$4);
  }; // static


  Facebook._init = function _init() {
    var data = new Facebook(this);

    data._get();
  };

  _createClass(Facebook, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$4;
    }
  }]);

  return Facebook;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$4).forEach(function (el) {
    Facebook._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: icons.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var VERSION$5 = '1.0.0';
var PATH = window.path ? window.path : 'plugins';
var Font = {
  SOLID: '.fas',
  REGULAR: '.far',
  BRAND: '.fab'
};
var FontAwesome = {
  CSS: PATH + "/fontawesome/css/fontawesome.min.css",
  REGULAR: PATH + "/fontawesome/css/regular.min.css",
  BRAND: PATH + "/fontawesome/css/brands.min.css",
  SOLID: PATH + "/fontawesome/css/solid.min.css"
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Icons =
/*#__PURE__*/
function () {
  function Icons() {
    this._stylesheet = document.createElement('link');
    this._stylesheet.rel = 'stylesheet';
    this._stylesheet.href = FontAwesome.CSS;
  }

  var _proto = Icons.prototype;

  _proto._solid = function _solid() {
    if (document.querySelector(Font.SOLID)) {
      // create stylesheet
      var fas = document.createElement('link');
      fas.rel = 'stylesheet';
      fas.href = FontAwesome.SOLID; // append stylesheet

      document.head.appendChild(fas);
    }

    return true;
  };

  _proto._brand = function _brand() {
    if (document.querySelector(Font.BRAND)) {
      // create stylesheet
      var fab = document.createElement('link');
      fab.rel = 'stylesheet';
      fab.href = FontAwesome.BRAND; // append stylesheet

      document.head.appendChild(fab);
    }

    return true;
  };

  _proto._regular = function _regular() {
    if (document.querySelector(Font.REGULAR)) {
      // create stylesheet
      var far = document.createElement('link');
      far.rel = 'stylesheet';
      far.href = FontAwesome.REGULAR; // append stylesheet

      document.head.appendChild(far);
    }

    return true;
  };

  _proto._get = function _get() {
    // append stylesheet
    document.head.appendChild(this._stylesheet); // detect type

    this._solid();

    this._brand();

    this._regular();
  }; // static


  Icons._init = function _init() {
    var data = new Icons();

    data._get();
  };

  _createClass(Icons, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$5;
    }
  }]);

  return Icons;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector(Font.SOLID) || document.querySelector(Font.BRAND) || document.querySelector(Font.REGULAR)) {
    Icons._init.call();
  }
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: lightbox.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$5 = 'ya-lightbox';
var DATA_KEY$5 = "[" + DATA$5 + "]";
var VERSION$6 = '1.0.0';
var ClassName$3 = {
  LIGHTBOX: DATA$5,
  BACKDROP: DATA$5 + "-backdrop",
  CLOSE: DATA$5 + "-close",
  BODY: DATA$5 + "-body",
  IFRAME: 'embed-responsive embed-responsive-16by9',
  IFRAME_ITEM: 'embed-responsive-item',
  IMAGE: DATA$5 + "-img",
  ITEM: DATA$5 + "-item",
  FACEBOOK: 'ya-facebook',
  DISQUS: 'ya-disqus'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Lightbox =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Lightbox, _Helpers);

  function Lightbox(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute('href');
    _this._data = element.getAttribute(DATA$5);
    _this._rel = element.getAttribute('rel');
    return _this;
  }

  var _proto = Lightbox.prototype;

  // private
  _proto._add = function _add(src) {
    var _this2 = this;

    // define types
    var youtube = this._attr.includes('youtube.com/watch');

    var twitch = this._attr.includes('twitch'); // create elements


    var lightbox = document.createElement('div');
    lightbox.backdrop = document.createElement('div');
    lightbox.body = document.createElement('div');
    lightbox.item = document.createElement('div');
    lightbox.close = document.createElement('div'); // add classes

    lightbox.className = ClassName$3.LIGHTBOX;
    lightbox.body.className = ClassName$3.BODY;
    lightbox.close.className = ClassName$3.CLOSE;
    lightbox.backdrop.className = ClassName$3.BACKDROP; // add effect

    lightbox.body.classList.add('animated', 'fast', 'fadeIn', 'animate1');
    lightbox.backdrop.classList.add('animated', 'fadeIn', 'fast'); // add lightbox

    document.body.appendChild(lightbox);
    lightbox.appendChild(lightbox.body);
    lightbox.item.appendChild(lightbox.close);
    lightbox.appendChild(lightbox.backdrop); // check type

    if (this._rel) {
      this._gallery(lightbox); // append gallery

    } else if (youtube || twitch) {
      this._video(lightbox, src); // append video

    } else {
      this._image(lightbox); // append image

    }

    if (this._data) {
      this.loopArray(this._data, this.options);
      lightbox.option = this.options;

      if (lightbox.option.disqus || lightbox.option.facebook) {
        this._comments(lightbox);
      }
    } // remove lightbox


    lightbox.item.addEventListener('click', function (e) {
      e.preventDefault();

      if (!lightbox.element.contains(e.target)) {
        if (lightbox.carousel) {
          if (!lightbox.element.contains(e.target) && !lightbox.carousel.contains(e.target)) {
            _this2._remove(lightbox);
          }
        } else {
          _this2._remove(lightbox);
        }
      }

      return false;
    }, false);
    return true;
  }; // gallery


  _proto._gallery = function _gallery(lightbox) {
    var _this3 = this;

    lightbox.item.className = ClassName$3.ITEM + " ya-lightbox-gallery";
    lightbox.element = document.createElement('img');
    lightbox.element.className = ClassName$3.IMAGE;
    lightbox.element.src = this._attr;
    lightbox.carousel = document.createElement('div');
    lightbox.carousel.className = 'owl-carousel owl-carousel-theme'; // append gallery

    lightbox.body.appendChild(lightbox.item);
    lightbox.item.appendChild(lightbox.carousel);
    lightbox.carousel.appendChild(lightbox.element); // detect gallery

    document.querySelectorAll(DATA_KEY$5 + "[rel=" + this._rel + "]").forEach(function (el) {
      if (_this3._attr !== el.getAttribute('href')) {
        lightbox.element = document.createElement('img');
        lightbox.element.className = ClassName$3.IMAGE;
        lightbox.element.src = el.getAttribute('href'); // append gallery

        lightbox.carousel.appendChild(lightbox.element);
      }
    });
    $('.owl-carousel-theme').owlCarousel({
      loop: true,
      nav: true,
      items: 1
    });
    return true;
  }; // video


  _proto._video = function _video(lightbox, src) {
    lightbox.item.className = ClassName$3.ITEM;
    lightbox.element = document.createElement('iframe');
    lightbox.element.className = ClassName$3.IFRAME_ITEM;
    lightbox.element.src = this.video(src);
    lightbox.embed = document.createElement('div');
    lightbox.embed.className = ClassName$3.IFRAME; // append iframe

    lightbox.body.appendChild(lightbox.item);
    lightbox.item.appendChild(lightbox.embed);
    lightbox.embed.appendChild(lightbox.element);
    return true;
  }; // image


  _proto._image = function _image(lightbox) {
    lightbox.item.className = ClassName$3.ITEM;
    lightbox.element = document.createElement('img');
    lightbox.element.className = ClassName$3.IMAGE;
    lightbox.element.src = this._attr; // append image

    lightbox.body.appendChild(lightbox.item);
    lightbox.item.appendChild(lightbox.element);
    return true;
  };

  _proto._comments = function _comments(lightbox) {
    lightbox.item.classList.add('ya-lightbox-comment');
    lightbox.comments = document.createElement('div');
    lightbox.comments.className = 'ya-lightbox-comments';
    lightbox.comment = document.createElement('div'); // append comment

    lightbox.body.appendChild(lightbox.comments);

    if (lightbox.option.disqus) {
      lightbox.comment.id = 'disqus_thread';
      lightbox.comment.setAttribute(ClassName$3.DISQUS, '');
      lightbox.comments.appendChild(lightbox.comment);
      this.disqus("[" + ClassName$3.DISQUS + "]");
    }

    if (lightbox.option.facebook) {
      lightbox.comment.className = 'fb-comments';
      lightbox.comment.setAttribute(ClassName$3.FACEBOOK, '');
      lightbox.comment.setAttribute('data-width', '100%');
      lightbox.comment.setAttribute('data-numposts', '10');
      lightbox.comments.appendChild(lightbox.comment);
      this.facebook("[" + ClassName$3.FACEBOOK + "]");
    }

    return true;
  };

  _proto._remove = function _remove(lightbox) {
    return document.body.removeChild(lightbox);
  };

  _proto._get = function _get() {
    var _this4 = this;

    this._element.addEventListener('click', function (e) {
      e.preventDefault();

      _this4._add(_this4._element);
    }, false);
  }; // static


  Lightbox._init = function _init() {
    var data = new Lightbox(this);

    data._get();
  };

  _createClass(Lightbox, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$6;
    }
  }]);

  return Lightbox;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$5).forEach(function (el) {
    Lightbox._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: navbar.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var VERSION$7 = '1.0.0';
var Selector$1 = {
  NAVBAR: '.navbar',
  SEARCH: '.navbar-search',
  ICON: '.toggle-search',
  CLOSE: '.search-close'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Navbar =
/*#__PURE__*/
function () {
  function Navbar() {
    this._element = document.querySelector(Selector$1.SEARCH);
    this._close = document.querySelector(Selector$1.CLOSE);
    this._icon = document.querySelector(Selector$1.ICON);
  }

  var _proto = Navbar.prototype;

  _proto._fix = function _fix() {
    $('.dropdown-lg').on('hide.bs.dropdown', function () {
      document.querySelector('.owl-carousel').classList.add('owl-hide');
    });
    $('.dropdown-lg').on('show.bs.dropdown', function () {
      document.querySelector('.owl-carousel').classList.remove('owl-hide');
    });
  };

  _proto._hover = function _hover() {
    $('.dropdown > .dropdown-menu > .dropdown').hover(function () {
      $(this).toggleClass('show');
    });
  }; // private


  _proto._toggle = function _toggle() {
    return this._element.classList.toggle('active');
  };

  _proto._remove = function _remove() {
    return this._element.classList.remove('active');
  };

  _proto._get = function _get() {
    var _this = this;

    if (this._icon) {
      this._icon.addEventListener('click', function (e) {
        e.preventDefault();

        _this._toggle();
      }, false);

      this._close.addEventListener('click', function (e) {
        e.preventDefault();

        _this._remove();
      }, false);
    }

    this._fix();

    this._hover();
  }; // static


  Navbar._init = function _init() {
    var data = new Navbar(this);

    data._get();
  };

  _createClass(Navbar, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$7;
    }
  }]);

  return Navbar;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(Selector$1.NAVBAR).forEach(function (el) {
    Navbar._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: notify.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$6 = 'ya-notify';
var DATA_KEY$6 = "[" + DATA$6 + "]";
var DATA_TITLE$1 = 'ya-title';
var VERSION$8 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Notify =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Notify, _Helpers);

  function Notify(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$6);
    _this._title = element.getAttribute(DATA_TITLE$1);
    return _this;
  }

  var _proto = Notify.prototype;

  _proto._remove = function _remove(notify) {
    var time = {
      hide: 3000,
      remove: 4000
    };
    setTimeout(function () {
      notify.classList.remove('fadeInDown');
      notify.classList.add('fadeOutUp');
    }, time.hide);
    setTimeout(function () {
      document.body.removeChild(notify);
    }, time.remove);
  };

  _proto._option = function _option() {
    if (this._attr) {
      this.loopArray(this._attr, this.options);
    }

    return this.options;
  };

  _proto._set = function _set(notify, alert) {
    this._option();

    if (this.options.align) {
      notify.classList.add("notify-" + this.options.align);
    }

    if (this.options.alert) {
      alert.classList.remove('alert-darken-primary');
      alert.classList.add("alert-darken-" + this.options.alert);
    }
  };

  _proto._add = function _add() {
    // constants
    var notify = document.createElement('div');
    var alert = document.createElement('div');
    var text = document.createTextNode(this._title);
    notify.classList.add('notify', 'animated', 'fadeInDown', 'fast');
    alert.classList.add('alert', 'alert-darken-primary');
    document.body.appendChild(notify);
    notify.appendChild(alert);
    alert.appendChild(text); // set notify options

    this._set(notify, alert); // remove notify


    this._remove(notify);
  };

  _proto._get = function _get() {
    var _this2 = this;

    this._element.addEventListener('click', function (e) {
      e.preventDefault();

      _this2._add(_this2._element);
    }, false);
  }; // static


  Notify._init = function _init() {
    var data = new Notify(this);

    data._get();
  };

  _createClass(Notify, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$8;
    }
  }]);

  return Notify;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$6).forEach(function (el) {
    Notify._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: progress.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var DATA$7 = '.progress-loaded';
var VERSION$9 = '1.0.0';
var Selector$2 = {
  VALUE: 'aria-valuenow',
  BAR: '.progress-bar'
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

};

var Progress =
/*#__PURE__*/
function () {
  function Progress(element) {
    this._element = element;
    this._bar = element.querySelector(Selector$2.BAR);
    this._value = this._bar.getAttribute(Selector$2.VALUE);
  }

  var _proto = Progress.prototype;

  _proto._get = function _get() {
    var _this = this;

    var current = 0;
    setInterval(function (el) {
      if (current >= _this._value) {
        clearInterval(el);
      } else {
        current += 1;

        _this._bar.style.setProperty('width', current + "%");
      }
    }, 0);
    return true;
  }; // static


  Progress._init = function _init() {
    var data = new Progress(this);

    data._get();
  };

  _createClass(Progress, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$9;
    }
  }]);

  return Progress;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA$7).forEach(function (el) {
    Progress._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: sticky.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$8 = 'ya-sticky';
var DATA_KEY$7 = "[" + DATA$8 + "]";
var VERSION$10 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Sticky =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Sticky, _Helpers);

  function Sticky(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$8);
    _this._top = 60;
    _this._zindex = 7;
    return _this;
  }

  var _proto = Sticky.prototype;

  _proto._option = function _option() {
    if (this._attr) {
      this.loopArray(this._attr, this.options);
    }

    return this.options;
  };

  _proto._set = function _set() {
    return $(this._element).sticky({
      topSpacing: this.options.top ? Number(this.options.top) : this._top,
      bottomSpacing: this.options.bottom ? Number(this.options.bottom) : '',
      zIndex: this.options.zindex ? Number(this.options.zindex) : this._zindex
    });
  };

  _proto._get = function _get() {
    // add otpion
    this._option();

    this._set();

    return true;
  }; // static


  Sticky._init = function _init() {
    var data = new Sticky(this);

    data._get();
  };

  _createClass(Sticky, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$10;
    }
  }]);

  return Sticky;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$7).forEach(function (el) {
    Sticky._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: style.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var DATA$9 = 'ya-style';
var DATA_KEY$8 = "[" + DATA$9 + "]";
var VERSION$11 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Style =
/*#__PURE__*/
function (_Helpers) {
  _inheritsLoose(Style, _Helpers);

  function Style(element) {
    var _this;

    _this = _Helpers.call(this) || this;
    _this._element = element;
    _this._attr = element.getAttribute(DATA$9);
    _this.option = [];
    return _this;
  }

  var _proto = Style.prototype;

  // private
  _proto._set = function _set(option) {
    var Defaults = {
      bg: option['background-color'] ? "background-color: " + option['background-color'] + " !important;" : '',
      height: option.height ? "height: " + option.height + " !important;" : '',
      opacity: option.opacity ? "opacity: " + option.opacity + " !important;" : '',
      borderColor: option['border-color'] ? "border-color: " + option['border-color'] + ";" : ' '
    };
    return Defaults.height + Defaults.bg + Defaults.opacity + Defaults.borderColor;
  };

  _proto._get = function _get() {
    this.loopArray(this._attr, this.option);
    this._element.style.cssText = this._set(this.option);

    this._element.removeAttribute(DATA$9);
  }; // static


  Style._init = function _init() {
    var data = new Style(this);

    data._get();
  };

  _createClass(Style, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$11;
    }
  }]);

  return Style;
}(Helpers);
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$8).forEach(function (el) {
    Style._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: svg.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */
var DATA$10 = 'ya-svg';
var DATA_KEY$9 = "[" + DATA$10 + "]";
var VERSION$12 = '1.0.0';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Svg =
/*#__PURE__*/
function () {
  function Svg(element) {
    this._element = element;
    this._attr = element.getAttribute(DATA$10);
  }

  var _proto = Svg.prototype;

  _proto._get = function _get() {
    var svg = {
      chat: '<svg viewBox="0 0 48 48" width="48" height="48"><g><path d="M45,3H3A2,2,0,0,0,1,5V35a2,2,0,0,0,2,2h8v9a1,1,0,0,0,1,1,.988.988,0,0,0,.581-.187L26.32,37H45a2,2,0,0,0,2-2V5A2,2,0,0,0,45,3Z" fill="#ea9860"></path> <path d="M21,29H8a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" fill="#fff"></path> <path d="M40,29H27a1,1,0,0,1,0-2H40a1,1,0,0,1,0,2Z" fill="#fff"></path> <path d="M30,23H8a1,1,0,0,1,0-2H30a1,1,0,0,1,0,2Z" fill="#fff"></path> <path d="M40,23H36a1,1,0,0,1,0-2h4a1,1,0,0,1,0,2Z" fill="#fff"></path></g></svg>',
      article: '<svg viewBox="0 0 48 48" width="48" height="48"><g><path fill="#444444" d="M45,45H3c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h42c1.105,0,2,0.895,2,2v38C47,44.105,46.105,45,45,45z "></path> <rect x="3" y="10" fill="#FFFFFF" width="42" height="33"></rect> <circle fill="#E86C60" cx="4.5" cy="6.5" r="1.5"></circle> <circle fill="#EFD358" cx="9.5" cy="6.5" r="1.5"></circle> <circle fill="#72C472" cx="14.5" cy="6.5" r="1.5"></circle> <path fill="#43A6DD" d="M20,28H8c-0.552,0-1-0.447-1-1V15c0-0.553,0.448-1,1-1h12c0.552,0,1,0.447,1,1v12C21,27.553,20.552,28,20,28 z"></path> <path fill="#B3B3B3" d="M40,16H26c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.552,0,1,0.447,1,1S40.552,16,40,16z"></path> <path fill="#B3B3B3" d="M40,22H26c-0.552,0-1-0.447-1-1s0.448-1,1-1h14c0.552,0,1,0.447,1,1S40.552,22,40,22z"></path> <path fill="#B3B3B3" d="M40,33H8c-0.552,0-1-0.447-1-1s0.448-1,1-1h32c0.552,0,1,0.447,1,1S40.552,33,40,33z"></path> <path fill="#B3B3B3" d="M32,39H8c-0.552,0-1-0.447-1-1s0.448-1,1-1h24c0.552,0,1,0.447,1,1S32.552,39,32,39z"></path> <path fill="#B3B3B3" d="M35,28h-9c-0.552,0-1-0.447-1-1s0.448-1,1-1h9c0.552,0,1,0.447,1,1S35.552,28,35,28z"></path></g></svg>',
      monkey: '<svg viewBox="0 0 48 48" width="48" height="48"><g><circle cx="8" cy="20" r="7" fill="#ead8c5"></circle> <path d="M8,28a8,8,0,1,1,8-8A8.009,8.009,0,0,1,8,28ZM8,14a6,6,0,1,0,6,6A6.006,6.006,0,0,0,8,14Z" fill="#87613e"></path> <circle cx="40" cy="20" r="7" fill="#ead8c5"></circle> <path d="M40,28a8,8,0,1,1,8-8A8.009,8.009,0,0,1,40,28Zm0-14a6,6,0,1,0,6,6A6.006,6.006,0,0,0,40,14Z" fill="#87613e"></path> <path d="M24,44A20,20,0,1,1,44,24,20.023,20.023,0,0,1,24,44Z" fill="#87613e"></path> <path d="M24,41A12,12,0,1,1,36,29,12.013,12.013,0,0,1,24,41Z" fill="#ead8c5"></path> <path d="M17,28a8,8,0,1,1,8-8A8.009,8.009,0,0,1,17,28Z" fill="#ead8c5"></path> <path d="M31,28a8,8,0,1,1,8-8A8.009,8.009,0,0,1,31,28Z" fill="#ead8c5"></path> <path d="M17,23a3,3,0,1,1,3-3A3,3,0,0,1,17,23Z" fill="#444"></path> <path d="M31,23a3,3,0,1,1,3-3A3,3,0,0,1,31,23Z" fill="#444"></path> <path d="M21,7a8.277,8.277,0,0,1,8-7c-2,1-1,6-1,6Z" fill="#87613e"></path> <circle cx="22" cy="25" r="1" fill="#c6a279"></circle> <circle cx="26" cy="25" r="1" fill="#c6a279"></circle> <path d="M36,47a4.975,4.975,0,0,1-2.476-.66l-7-4a5,5,0,1,1,4.96-8.682l7,4A5,5,0,0,1,36,47Z" fill="#a67c52"></path> <path d="M12.005,47A5,5,0,0,1,9.52,37.659l7-4a5,5,0,0,1,4.96,8.682l-7,4A4.974,4.974,0,0,1,12.005,47Z" fill="#a67c52"></path> <path d="M26.479,36.451l4.952-1.829a1.44,1.44,0,0,0-1-2.7L25.481,33.75a.959.959,0,1,1-.665-1.8l4.051-1.5a1.44,1.44,0,0,0-1-2.7L19.78,30.741l1.193-2.591a1.92,1.92,0,1,0-3.487-1.606s-3.754,8.183-4.018,8.762a5.986,5.986,0,0,0-.327,3.663,6.246,6.246,0,0,0,8.249,4.479l10.8-3.992a1.44,1.44,0,0,0-1-2.7l-4.052,1.5a.96.96,0,0,1-.665-1.8Z" fill="#e5a57a"></path> <path d="M21.521,36.451l-4.952-1.829a1.44,1.44,0,0,1,1-2.7l4.952,1.829a.959.959,0,1,0,.665-1.8l-4.051-1.5a1.44,1.44,0,0,1,1-2.7l8.089,2.989L27.027,28.15a1.92,1.92,0,1,1,3.487-1.606s3.754,8.183,4.018,8.762a5.986,5.986,0,0,1,.327,3.663,6.246,6.246,0,0,1-8.249,4.479l-10.8-3.992a1.44,1.44,0,0,1,1-2.7l4.052,1.5a.96.96,0,1,0,.665-1.8Z" fill="#eebc99"></path></g></svg>',
      divider: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"/></svg>',
      awesome: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#ffd764"/> <path d="M12,25a1,1,0,0,1-.707-1.707l6-6a1,1,0,0,1,1.414,1.414l-6,6A1,1,0,0,1,12,25Z" fill="#444"/><path d="M18,25a1,1,0,0,1-.707-.293l-6-6a1,1,0,0,1,1.414-1.414l6,6A1,1,0,0,1,18,25Z" fill="#444"/> <path d="M36,25a1,1,0,0,0,.707-1.707l-6-6a1,1,0,0,0-1.414,1.414l6,6A1,1,0,0,0,36,25Z" fill="#444"/><path d="M30,25a1,1,0,0,0,.707-.293l6-6a1,1,0,0,0-1.414-1.414l-6,6A1,1,0,0,0,30,25Z" fill="#444"/> <path d="M24,39a5,5,0,1,1,5-5A5.006,5.006,0,0,1,24,39Z" fill="#ae453e"/><ellipse cx="24" cy="37" rx="3.974" ry="2" fill="#fa645a"/></g></svg>',
      like: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#ffd764"/> <circle cx="38" cy="28" r="3" fill="#e86c60" opacity="0.5"/> <circle cx="10" cy="28" r="3" fill="#e86c60" opacity="0.5"/> <path d="M19,24a1,1,0,0,1-1-1,2,2,0,0,0-4,0,1,1,0,0,1-2,0,4,4,0,0,1,8,0A1,1,0,0,1,19,24Z" fill="#444"/> <path d="M35,24a1,1,0,0,1-1-1,2,2,0,0,0-4,0,1,1,0,0,1-2,0,4,4,0,0,1,8,0A1,1,0,0,1,35,24Z" fill="#444"/> <path d="M24.059,39a9.025,9.025,0,0,1-7.81-4.537,1,1,0,0,1,1.736-.994,6.989,6.989,0,0,0,12.147,0,1,1,0,0,1,1.736.994A9.024,9.024,0,0,1,24.059,39Z" fill="#444"/></g></svg>',
      sick: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#ffd764"/> <path d="M12,25a1,1,0,0,1-.448-1.895L15.764,21,11.553,18.9a1,1,0,0,1,.894-1.79l6,3a1,1,0,0,1,0,1.79l-6,3A1,1,0,0,1,12,25Z" fill="#444"/> <path d="M36,25a1,1,0,0,1-.446-.105l-6-3a1,1,0,0,1,0-1.79l6-3a1,1,0,1,1,.894,1.79L32.236,21l4.211,2.105A1,1,0,0,1,36,25Z" fill="#444"/> <path d="M40,42a3.97,3.97,0,0,0-2.666,1.04,6.978,6.978,0,0,0-11.551-1.691,5.97,5.97,0,0,0-7.283-.213,5.978,5.978,0,0,0-8.433,1.457A3.954,3.954,0,0,0,8,42a4,4,0,0,0-4,4H44A4,4,0,0,0,40,42Z" fill="#72c472"/> <circle cx="38" cy="36" r="2" fill="#72c472"/> <circle cx="11.5" cy="37.5" r="1.5" fill="#72c472"/> <path d="M14.134,30H33.866c-1.76-1.809-5.421-3-9.866-3S15.894,28.191,14.134,30Z" fill="#fff"/> <path d="M14.134,30A3.579,3.579,0,0,0,13,32.5c0,3.136,4.729,5.5,11,5.5s11-2.364,11-5.5A3.579,3.579,0,0,0,33.866,30Z" fill="#ae453e"/> <path d="M18,30V43a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V30Z" fill="#72c472"/></g></svg>',
      angry: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48"><g><path d="M24,46A22,22,0,1,1,46,24,22.025,22.025,0,0,1,24,46Z" fill="#e86c60"/> <circle cx="33" cy="25" r="3" fill="#444"/> <circle cx="15" cy="25" r="3" fill="#444"/> <path d="M17.292,37a1,1,0,0,1-.745-1.667,10,10,0,0,1,14.906,0,1,1,0,1,1-1.49,1.334,8,8,0,0,0-11.926,0A1,1,0,0,1,17.292,37Z" fill="#444"/> <path d="M30,21a1,1,0,0,1-.516-1.857l5-3a1,1,0,0,1,1.03,1.714l-5,3A.994.994,0,0,1,30,21Z" fill="#444"/> <path d="M18,21a.994.994,0,0,1-.514-.143l-5-3a1,1,0,0,1,1.03-1.714l5,3A1,1,0,0,1,18,21Z" fill="#444"/></g></svg>'
    };

    if (this._attr) {
      this._element.innerHTML = svg[this._attr];
    }

    return true;
  }; // static


  Svg._init = function _init() {
    var data = new Svg(this);

    data._get();
  };

  _createClass(Svg, null, [{
    key: "VERSION",
    get: function get() {
      return VERSION$12;
    }
  }]);

  return Svg;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll(DATA_KEY$9).forEach(function (el) {
    Svg._init.call(el);
  });
});

/**
 * ---------------------------------------------------------------------------------------
 * Gameforest Bootstrap Gaming Theme: theme.js
 * Copyright (c) 2018 yakuthemes.com (https://yakuthemes.com)
 *
 * @link      https://themeforest.net/item/gameforest-responsive-gaming-html-theme/5007730
 * @version   5.0.0
 * @license   https://www.gnu.org/licenses/gpl-3.0.html GPLv3 License
 * ---------------------------------------------------------------------------------------
 */
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

var FONTS = 'Roboto:300,400,500,700,900';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var Theme =
/*#__PURE__*/
function () {
  function Theme() {}

  var _proto = Theme.prototype;

  _proto._bootstrap = function _bootstrap() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
  };

  _proto._webfont = function _webfont() {
    return WebFont.load({
      google: {
        families: [FONTS]
      }
    });
  }; // private


  _proto._load = function _load() {
    this._bootstrap();

    this._webfont();
  }; // static


  Theme._init = function _init() {
    var data = new Theme();

    data._load();
  };

  return Theme;
}();
/**
 * ------------------------------------------------------------------------
 * Load Event
 * ------------------------------------------------------------------------
*/


document.addEventListener('DOMContentLoaded', function () {
  Theme._init.call();
});

exports.Background = Background;
exports.Carousel = Carousel;
exports.Disqus = Disqus;
exports.Embed = Embed;
exports.Facebook = Facebook;
exports.Icons = Icons;
exports.Lightbox = Lightbox;
exports.Navbar = Navbar;
exports.Notify = Notify;
exports.Progress = Progress;
exports.Sticky = Sticky;
exports.Style = Style;
exports.Svg = Svg;
exports.Theme = Theme;

Object.defineProperty(exports, '__esModule', { value: true });

})));
