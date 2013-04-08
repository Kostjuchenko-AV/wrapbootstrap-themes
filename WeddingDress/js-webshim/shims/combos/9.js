jQuery.webshims.register("dom-extend",function(e,t,n,r,i){"use strict";e("<form />").attr("novalidate")===""&&t.warn("IE browser modes are busted in IE10. Please test your HTML/CSS/JS with a real IE version");var s=t.modules,o=/\s*,\s*/,u={},a={},f={},l={},c={},h=e.fn.val,p=function(t,n,r,i,s){return s?h.call(e(t)):h.call(e(t),r)};e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.val=function(t){var n=this[0];arguments.length&&t==null&&(t="");if(!arguments.length)return!n||n.nodeType!==1?h.call(this):e.prop(n,"value",t,"val",!0);if(e.isArray(t))return h.apply(this,arguments);var r=e.isFunction(t);return this.each(function(s){n=this;if(n.nodeType===1)if(r){var o=t.call(n,s,e.prop(n,"value",i,"val",!0));o==null&&(o=""),e.prop(n,"value",o,"val")}else e.prop(n,"value",t,"val")})};var d="_webshimsLib"+Math.round(Math.random()*1e3),v=function(t,n,r){t=t.jquery?t[0]:t;if(!t)return r||{};var s=e.data(t,d);return r!==i&&(s||(s=e.data(t,d,{})),n&&(s[n]=r)),n?s&&s[n]:s};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){return this.map(function(){var e=v(this,"shadowData");return e&&e[t.prop]||this})}}),["removeAttr","prop","attr"].forEach(function(n){u[n]=e[n],e[n]=function(t,r,s,o,l){var h=o=="val",d=h?p:u[n];if(!t||!a[r]||t.nodeType!==1||!h&&o&&n=="attr"&&e.attrFn[r])return d(t,r,s,o,l);var v=(t.nodeName||"").toLowerCase(),m=f[v],g=n!="attr"||s!==!1&&s!==null?n:"removeAttr",y,b,w;m||(m=f["*"]),m&&(m=m[r]),m&&(y=m[g]);if(y){r=="value"&&(b=y.isVal,y.isVal=h);if(g==="removeAttr")return y.value.call(t);if(s===i)return y.get?y.get.call(t):y.value;y.set&&(n=="attr"&&s===!0&&(s=r),w=y.set.call(t,s)),r=="value"&&(y.isVal=b)}else w=d(t,r,s,o,l);if((s!==i||g==="removeAttr")&&c[v]&&c[v][r]){var E;g=="removeAttr"?E=!1:g=="prop"?E=!!s:E=!0,c[v][r].forEach(function(e){(!e.only||(e.only=n=="prop")||e.only=="attr"&&n!="prop")&&e.call(t,s,E,h?"val":g,n)})}return w},l[n]=function(r,s,o){f[r]||(f[r]={}),f[r][s]||(f[r][s]={});var a=f[r][s][n],l=function(e,t,r){return t&&t[e]?t[e]:r&&r[e]?r[e]:n=="prop"&&s=="value"?function(e){var t=this;return o.isVal?p(t,s,e,!1,arguments.length===0):u[n](t,s,e)}:n=="prop"&&e=="value"&&o.value.apply?function(e){var t=u[n](this,s);return t&&t.apply&&(t=t.apply(this,arguments)),t}:function(e){return u[n](this,s,e)}};f[r][s][n]=o,o.value===i&&(o.set||(o.set=o.writeable?l("set",o,a):t.cfg.useStrict&&s=="prop"?function(){throw s+" is readonly on "+r}:e.noop),o.get||(o.get=l("get",o,a))),["value","get","set"].forEach(function(e){o[e]&&(o["_sup"+e]=l(e,a))})}});var m=Modernizr.ES5,g=function(){var e=t.getPrototypeOf(r.createElement("foobar")),n=Object.prototype.hasOwnProperty;return function(i,s,o){var u,a;if(m&&(u=r.createElement(i))&&(a=t.getPrototypeOf(u))&&e!==a&&(!u[s]||!n.call(u,s))){var f=u[s];o._supvalue=function(){return f&&f.apply?f.apply(this,arguments):f},a[s]=o.value}else o._supvalue=function(){var e=v(this,"propValue");return e&&e[s]&&e[s].apply?e[s].apply(this,arguments):e&&e[s]},y.extendValue(i,s,o.value);o.value._supvalue=o._supvalue}}(),y=function(){var n={};t.addReady(function(r,i){var s={},o=function(t){s[t]||(s[t]=e(r.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(s[t]=s[t].add(i)))};e.each(n,function(e,n){o(e);if(!n||!n.forEach){t.warn("Error: with "+e+"-property. methods: "+n);return}n.forEach(function(t){s[e].each(t)})}),s=null});var i,s=e([]),o=function(t,s){n[t]?n[t].push(s):n[t]=[s],e.isDOMReady&&(i||e(r.getElementsByTagName(t))).each(s)},u={};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(r.getElementsByTagName(t))),i||s},flushTmpCache:function(){i=null},content:function(t,n){o(t,function(){var t=e.attr(this,n);t!=null&&e.attr(this,n,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,n,r){o(t,function(){e(this).each(function(){var e=v(this,"propValue",{});e[n]=this[n],this[n]=r})})}}}(),b=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{getID:function(){var t=(new Date).getTime();return function(n){n=e(n);var r=n.attr("id");return r||(t++,r="ID-"+t,n.attr("id",r)),r}}(),extendUNDEFProp:function(t,n){e.each(n,function(e,n){e in t||(t[e]=n)})},createPropDefault:b,data:v,moveToFirstEvent:function(t,n,r){var i=(e._data(t,"events")||{})[n],s;i&&i.length>1&&(s=i.pop(),r||(r="bind"),r=="bind"&&i.delegateCount?i.splice(i.delegateCount,0,s):i.unshift(s)),t=null},addShadowDom:function(){var i,s,o,u={init:!1,runs:0,test:function(){var e=u.getHeight(),t=u.getWidth();e!=u.height||t!=u.width?(u.height=e,u.width=t,u.handler({type:"docresize"}),u.runs++,u.runs<9&&setTimeout(u.test,90)):u.runs=0},handler:function(t){clearTimeout(i),i=setTimeout(function(){if(t.type=="resize"){var i=e(n).width(),a=e(n).width();if(a==s&&i==o)return;s=a,o=i,u.height=u.getHeight(),u.width=u.getWidth()}e(r).triggerHandler("updateshadowdom")},t.type=="resize"?50:9)},_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var n=r.body,i=r.documentElement;u[t]=function(){return Math.max(n["scroll"+e],i["scroll"+e],n["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&r.body&&(this.init=!0,this._create(),this.height=u.getHeight(),this.width=u.getWidth(),setInterval(this.test,600),e(this.test),t.ready("WINDOWLOAD",this.test),e(n).bind("resize",this.handler),function(){var t=e.fn.animate,n;e.fn.animate=function(){return clearTimeout(n),n=setTimeout(function(){u.test()},99),t.apply(this,arguments)}}())}};return t.docObserve=function(){t.ready("DOM",function(){u.start()})},function(n,r,i){i=i||{},n.jquery&&(n=n[0]),r.jquery&&(r=r[0]);var s=e.data(n,d)||e.data(n,d,{}),o=e.data(r,d)||e.data(r,d,{}),u={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),u=e.data(i.shadowFocusElement,d)||e.data(i.shadowFocusElement,d,u)):i.shadowFocusElement=r,s.hasShadow=r,u.nativeElement=o.nativeElement=n,u.shadowData=o.shadowData=s.shadowData={nativeElement:n,shadowElement:r,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){v(this,"shadowData",o.shadowData)}),i.data&&(u.shadowData.data=o.shadowData.data=s.shadowData.data=i.data),i=null,t.docObserve()}}(),propTypes:{standard:function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}}},"boolean":function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return e.attr.get.call(this)!=null}}},src:function(){var t=r.createElement("a");return t.style.display="none",function(n,r){b(n);if(n.prop)return;n.prop={set:function(e){n.attr.set.call(this,e)},get:function(){var n=this.getAttribute(r),i;if(n==null)return"";t.setAttribute("href",n+"");if(!e.support.hrefNormalized){try{e(t).insertAfter(this),i=t.getAttribute("href",4)}catch(s){i=t.getAttribute("href",4)}e(t).detach()}return i||t.href}}}}(),enumarated:function(e,t){b(e);if(e.prop)return;e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();if(!t||e.limitedTo.indexOf(t)==-1)t=e.defaultValue;return t}}}},reflectProperties:function(n,r){typeof r=="string"&&(r=r.split(o)),r.forEach(function(r){t.defineNodeNamesProperty(n,r,{prop:{set:function(t){e.attr(this,r,t)},get:function(){return e.attr(this,r)||""}}})})},defineNodeNameProperty:function(n,r,i){return a[r]=!0,i.reflect&&t.propTypes[i.propType||"standard"](i,r),["prop","attr","removeAttr"].forEach(function(s){var o=i[s];o&&(s==="prop"?o=e.extend({writeable:!0},o):o=e.extend({},o,{writeable:!0}),l[s](n,r,o),n!="*"&&t.cfg.extendNative&&s=="prop"&&o.value&&e.isFunction(o.value)&&g(n,r,o),i[s]=o)}),i.initAttr&&y.content(n,r),i},defineNodeNameProperties:function(e,n,r,i){var s;for(var o in n)!i&&n[o].initAttr&&y.createTmpCache(e),r&&(n[o][r]||(n[o][r]={},["value","set","get"].forEach(function(e){e in n[o]&&(n[o][r][e]=n[o][e],delete n[o][e])}))),n[o]=t.defineNodeNameProperty(e,o,n[o]);return i||y.flushTmpCache(),n},createElement:function(n,r,i){var s;return e.isFunction(r)&&(r={after:r}),y.createTmpCache(n),r.before&&y.createElement(n,r.before),i&&(s=t.defineNodeNameProperties(n,i,!1,!0)),r.after&&y.createElement(n,r.after),y.flushTmpCache(),s},onNodeNamesPropertyModify:function(t,n,r,i){typeof t=="string"&&(t=t.split(o)),e.isFunction(r)&&(r={set:r}),t.forEach(function(e){c[e]||(c[e]={}),typeof n=="string"&&(n=n.split(o)),r.initAttr&&y.createTmpCache(e),n.forEach(function(t){c[e][t]||(c[e][t]=[],a[t]=!0),r.set&&(i&&(r.set.only=i),c[e][t].push(r.set)),r.initAttr&&y.content(e,t)}),y.flushTmpCache()})},defineNodeNamesBooleanProperty:function(n,r,s){s||(s={}),e.isFunction(s)&&(s.set=s),t.defineNodeNamesProperty(n,r,{attr:{set:function(e){this.setAttribute(r,e),s.set&&s.set.call(this,!0)},get:function(){var e=this.getAttribute(r);return e==null?i:r}},removeAttr:{value:function(){this.removeAttribute(r),s.set&&s.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:s.initAttr||!1})},contentAttr:function(e,t,n){if(!e.nodeName)return;var r;if(n===i)return r=e.attributes[t]||{},n=r.specified?r.value:null,n==null?i:n;typeof n=="boolean"?n?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,n)},activeLang:function(){var n=[],r={},i,o,u=/:\/\/|^\.*\//,a=function(n,r,i){var s;return r&&i&&e.inArray(r,i.availabeLangs||[])!==-1?(n.loading=!0,s=i.langSrc,u.test(s)||(s=t.cfg.basePath+s),t.loader.loadScript(s+r+".js",function(){n.langObj[r]?(n.loading=!1,l(n,!0)):e(function(){n.langObj[r]&&l(n,!0),n.loading=!1})}),!0):!1},f=function(e){r[e]&&r[e].forEach(function(e){e.callback()})},l=function(e,t){if(e.activeLang!=i&&e.activeLang!==o){var n=s[e.module].options;e.langObj[i]||o&&e.langObj[o]?(e.activeLang=i,e.callback(e.langObj[i]||e.langObj[o],i),f(e.module)):!t&&!a(e,i,n)&&!a(e,o,n)&&e.langObj[""]&&e.activeLang!==""&&(e.activeLang="",e.callback(e.langObj[""],i),f(e.module))}},c=function(t){return typeof t=="string"&&t!==i?(i=t,o=i.split("-")[0],i==o&&(o=!1),e.each(n,function(e,t){l(t)})):typeof t=="object"&&(t.register?(r[t.register]||(r[t.register]=[]),r[t.register].push(t),t.callback()):(t.activeLang||(t.activeLang=""),n.push(t),l(t))),i};return c}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,n){t[e]=function(e,r,i,s){typeof e=="string"&&(e=e.split(o));var u={};return e.forEach(function(e){u[e]=t[n](e,r,i,s)}),u}}),t.isReady("webshimLocalization",!0)}),function(e,t){if(!Modernizr.localstorage||"hidden"in t.createElement("a"))return;var n={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},r=function(e,t){var n=e.getAttribute("role");n||e.setAttribute("role",t)};e.webshims.addReady(function(i,s){e.each(n,function(t,n){var o=e(t,i).add(s.filter(t));for(var u=0,a=o.length;u<a;u++)r(o[u],n)});if(i===t){var o=t.getElementsByTagName("header")[0],u=t.getElementsByTagName("footer"),a=u.length;o&&!e(o).closest("section, article")[0]&&r(o,"banner");if(!a)return;var f=u[a-1];e(f).closest("section, article")[0]||r(f,"contentinfo")}})}(jQuery,document),function(e,t,n){"use strict";var r=t.audio&&t.video,i=!1,s=n.bugs,o=function(){n.ready(a,function(){n.mediaelement.createSWF||(n.mediaelement.loadSwf=!0,n.reTest([a],r))})},u=n.cfg.mediaelement,a=u&&u.player=="jwplayer"?"mediaelement-swf":"mediaelement-jaris",f;if(!u){n.error("mediaelement wasn't implemented but loaded");return}if(r){var l=document.createElement("video");t.videoBuffered="buffered"in l,i="loop"in l,n.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),t.videoBuffered||(n.addPolyfill("mediaelement-native-fix",{f:"mediaelement",test:t.videoBuffered,d:["dom-support"]}),n.reTest("mediaelement-native-fix"))}if(r&&!u.preferFlash){var c={1:1,2:1},h=function(t){var r,i=t.target.parentNode;!u.preferFlash&&(e(t.target).is("audio, video")||i&&e("source:last",i)[0]==t.target)&&(r=e(t.target).closest("audio, video"))&&!c[r.prop("error")]&&e(function(){f&&!u.preferFlash?(o(),n.ready("WINDOWLOAD "+a,function(){setTimeout(function(){!u.preferFlash&&n.mediaelement.createSWF&&!r.is(".nonnative-api-active")&&(u.preferFlash=!0,document.removeEventListener("error",h,!0),e("audio, video").each(function(){n.mediaelement.selectSource(this)}),n.info("switching mediaelements option to 'preferFlash', due to an error with native player: "+t.target.src+" Mediaerror: "+r.prop("error")))},9)})):document.removeEventListener("error",h,!0)})};document.addEventListener("error",h,!0),e("audio, video").each(function(){var t=e.prop(this,"error");if(t&&!c[t])return h({target:this}),!1})}t.track&&!s.track&&function(){s.track||(s.track=typeof e("<track />")[0].readyState!="number");if(!s.track)try{new TextTrackCue(2,3,"")}catch(t){s.track=!0}var r=n.cfg.track,i=function(t){e(t.target).filter("track").each(o)},o=function(){if(s.track||!r.override&&e.prop(this,"readyState")==3)r.override=!0,n.reTest("track"),document.removeEventListener("error",i,!0),this&&e.nodeName(this,"track")?n.error("track support was overwritten. Please check your vtt including your vtt mime-type"):n.info("track support was overwritten. due to bad browser support")},u=function(){document.addEventListener("error",i,!0),s.track?o():e("track").each(o)};r.override||(n.isReady("track")?u():e(u))}(),n.register("mediaelement-core",function(e,n,l,c,h){f=swfobject.hasFlashPlayerVersion("9.0.115"),e("html").addClass(f?"swf":"no-swf");var p=n.mediaelement;p.parseRtmp=function(e){var t=e.src.split("://"),r=t[1].split("/"),i,s,o;e.server=t[0]+"://"+r[0]+"/",e.streamId=[];for(i=1,s=r.length;i<s;i++)!o&&r[i].indexOf(":")!==-1&&(r[i]=r[i].split(":")[1],o=!0),o?e.streamId.push(r[i]):e.server+=r[i]+"/";e.streamId.length||n.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var d=function(t,n){t=e(t);var r={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")},i;if(!r.src)return r;i=t.attr("data-server"),i!=null&&(r.server=i),i=t.attr("type"),i?(r.type=i,r.container=e.trim(i.split(";")[0])):(n||(n=t[0].nodeName.toLowerCase(),n=="source"&&(n=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r.server?(r.type=n+"/rtmp",r.container=n+"/rtmp"):(i=p.getTypeForSrc(r.src,n,r),i&&(r.type=i,r.container=i))),i=t.attr("media"),i&&(r.media=i);if(r.type=="audio/rtmp"||r.type=="video/rtmp")r.server?r.streamId=r.src:p.parseRtmp(r);return r},v=!f&&"postMessage"in l&&r,m=function(){if(m.loaded)return;m.loaded=!0,e(function(){n.loader.loadList(["track-ui"])})},g=function(){var t;return function(){if(t||!v)return;t=!0,n.loader.loadScript("https://www.youtube.com/player_api"),e(function(){n.polyfill("mediaelement-yt")})}}(),y=function(){f?o():g()};n.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,n,r){if(t.indexOf("youtube.com/watch?")!=-1||t.indexOf("youtube.com/v/")!=-1)return"video/youtube";if(t.indexOf("rtmp")===0)return n+"/rtmp";t=t.split("?")[0].split("."),t=t[t.length-1];var i;return e.each(p.mimeTypes[n],function(e,n){if(n.indexOf(t)!==-1)return i=e,!1}),i},p.srces=function(t,n){t=e(t);if(!n){n=[];var r=t[0].nodeName.toLowerCase(),i=d(t,r);return i.src?n.push(i):e("source",t).each(function(){i=d(this,r),i.src&&n.push(i)}),n}t.removeAttr("src").removeAttr("type").find("source").remove(),e.isArray(n)||(n=[n]),n.forEach(function(e){var n=c.createElement("source");typeof e=="string"&&(e={src:e}),n.setAttribute("src",e.src),e.type&&n.setAttribute("type",e.type),e.media&&n.setAttribute("media",e.media),t.append(n)})},e.fn.loadMediaSrc=function(t,n){return this.each(function(){n!==h&&(e(this).removeAttr("poster"),n&&e.attr(this,"poster",n)),p.srces(this,t),e(this).mediaLoad()})},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","jwplayer/jwplayer","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,n){var r="";if(f||v)t=e(t),n=n||p.srces(t),e.each(n,function(e,t){if(t.container&&t.src&&(f&&p.swfMimeTypes.indexOf(t.container)!=-1||v&&t.container=="video/youtube"))return r=t,!1});return r};var b={};p.canNativePlaySrces=function(t,n){var i="";if(r){t=e(t);var s=(t[0].nodeName||"").toLowerCase();if(!b[s])return i;n=n||p.srces(t),e.each(n,function(e,n){if(n.type&&b[s].prop._supvalue.call(t[0],n.type))return i=n,!1})}return i},p.setError=function(t,r){r||(r="can't play sources"),e(t).pause().data("mediaerror",r),n.warn("mediaelementError: "+r),setTimeout(function(){e(t).data("mediaerror")&&e(t).trigger("mediaerror")},1)};var w=function(){var e;return function(t,r,i){e||m(),n.ready(f?a:"mediaelement-yt",function(){p.createSWF?p.createSWF(t,r,i):e||(e=!0,y(),w(t,r,i))}),!e&&v&&!p.createSWF&&g()}}(),E=function(e,t,n,r,i){var s;n||n!==!1&&t&&t.isActive=="third"?(s=p.canThirdPlaySrces(e,r),s?w(e,s,t):i?p.setError(e,!1):E(e,t,!1,r,!0)):(s=p.canNativePlaySrces(e,r),s?t&&t.isActive=="third"&&p.setActive(e,"html5",t):i?(p.setError(e,!1),t&&t.isActive=="third"&&p.setActive(e,"html5",t)):E(e,t,!0,r,!0))},S=/^(?:embed|object|datalist)$/i,x=function(t,r){var i=n.data(t,"mediaelementBase")||n.data(t,"mediaelementBase",{}),s=p.srces(t),o=t.parentNode;clearTimeout(i.loadTimer),e.data(t,"mediaerror",!1);if(!s.length||!o||o.nodeType!=1||S.test(o.nodeName||""))return;r=r||n.data(t,"mediaelement"),E(t,r,u.preferFlash||h,s)};p.selectSource=x,e(c).on("ended",function(t){var r=n.data(t.target,"mediaelement");if(i&&(!r||r.isActive=="html5")&&!e.prop(t.target,"loop"))return;setTimeout(function(){if(e.prop(t.target,"paused")||!e.prop(t.target,"loop"))return;e(t.target).prop("currentTime",0).play()},1)}),i||n.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var i=n.defineNodeNameProperty(t,"load",{prop:{value:function(){var e=n.data(this,"mediaelement");x(this,e),r&&(!e||e.isActive=="html5")&&i.prop._supvalue&&i.prop._supvalue.apply(this,arguments)}}});b[t]=n.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(n){var i="";return r&&b[t].prop._supvalue&&(i=b[t].prop._supvalue.call(this,n),i=="no"&&(i="")),!i&&f&&(n=e.trim((n||"").split(";")[0]),p.swfMimeTypes.indexOf(n)!=-1&&(i="maybe")),i}}})}),n.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=n.data(e,"mediaelementBase")||n.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){x(e),e=null},9)}});var T=function(){n.addReady(function(t,i){var s=e("video, audio",t).add(i.filter("video, audio")).each(function(){var t=n.data(this,"mediaelement");r&&e.prop(this,"paused")&&!e.prop(this,"readyState")&&e(this).is('audio[preload="none"][controls]:not([autoplay])')&&(!t||t.isActive=="html5")?e(this).prop("preload","metadata").mediaLoad():x(this,t),r&&function(){var t,n,r=this,i=function(){var t=e.prop(r,"buffered");if(!t)return;var n="";for(var i=0,s=t.length;i<s;i++)n+=t.end(i);return n},s=function(){var t=i();t!=n&&(n=t,e(r).triggerHandler("progress"))};e(this).on({"play loadstart progress":function(e){e.type=="progress"&&(n=i()),clearTimeout(t),t=setTimeout(s,999)},"emptied stalled mediaerror abort suspend":function(e){e.type=="emptied"&&(n=!1),clearTimeout(t)}})}()});!m.loaded&&e("track",s).length&&m(),s=null})};t.track&&!s.track&&n.defineProperty(TextTrack.prototype,"shimActiveCues",{get:function(){return this._shimActiveCues||this.activeCues}}),r?(n.isReady("mediaelement-core",!0),T(),n.ready("WINDOWLOAD mediaelement",y)):n.ready(a,T),n.ready("WINDOWLOAD mediaelement",m)})}(jQuery,Modernizr,jQuery.webshims),jQuery.webshims.register("mediaelement-swf",function(e,t,n,r,i,s){"use strict";var o="sendEvent",u=t.mediaelement,a=n.swfobject,f=Modernizr.audio&&Modernizr.video,l=a.hasFlashPlayerVersion("9.0.115"),c=0,h={paused:!0,ended:!1,currentSrc:"",duration:n.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){if(e){t.error("buffered index size error");return}return 0},end:function(e){if(e){t.error("buffered index size error");return}return 0},length:0}},p=Object.keys(h),d={currentTime:0,volume:1,muted:!1},v=Object.keys(d),m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_bufferedEnd:0,_bufferedStart:0,_metadata:!1,_durationCalcs:-1,_callMeta:!1,currentTime:0,_ppFlag:i},h,d),g=/^jwplayer-/,y=function(e){var n=r.getElementById(e.replace(g,""));if(!n)return;var i=t.data(n,"mediaelement");return i.isActive=="third"?i:null},b=function(e){try{e.nodeName}catch(n){return null}var r=t.data(e,"mediaelement");return r&&r.isActive=="third"?r:null},w=function(t,n){n=e.Event(n),n.preventDefault(),e.event.trigger(n,i,t)},E=s.playerPath||t.cfg.basePath+"jwplayer/"+(s.playerName||"player.swf"),S=s.pluginPath||t.cfg.basePath+"swf/jwwebshims.swf";t.extendUNDEFProp(s.params,{allowscriptaccess:"always",allowfullscreen:"true",wmode:"transparent"}),t.extendUNDEFProp(s.vars,{screencolor:"ffffffff"}),t.extendUNDEFProp(s.attrs,{bgcolor:"#000000"});var x=function(t,n){var r=t.duration;if(r&&t._durationCalcs>0)return;try{t.duration=t.jwapi.getPlaylist()[0].duration;if(!t.duration||t.duration<=0||t.duration===t._lastDuration)t.duration=r}catch(i){}t.duration&&t.duration!=t._lastDuration?(w(t._elem,"durationchange"),(t._elemNodeName=="audio"||t._callMeta)&&u.jwEvents.Model.META(e.extend({duration:t.duration},n),t),t._durationCalcs--):t._durationCalcs++},T=function(e,t){e<3&&clearTimeout(t._canplaythroughTimer),e>=3&&t.readyState<3&&(t.readyState=e,w(t._elem,"canplay"),clearTimeout(t._canplaythroughTimer),t._canplaythroughTimer=setTimeout(function(){T(4,t)},4e3)),e>=4&&t.readyState<4&&(t.readyState=e,w(t._elem,"canplaythrough")),t.readyState=e};e.extend(e.event.customEvent,{updatemediaelementdimensions:!0,flashblocker:!0,swfstageresize:!0,mediaelementapichange:!0}),u.jwEvents={View:{PLAY:function(e){var t=y(e.id);if(!t||t.stopPlayPause)return;t._ppFlag=!0,t.paused==e.state&&(t.paused=!e.state,t.ended&&(t.ended=!1),w(t._elem,e.state?"play":"pause"))}},Model:{BUFFER:function(t){var n=y(t.id);if(!n||!("percentage"in t)||n._bufferedEnd==t.percentage)return;n.networkState=t.percentage==100?1:2,(isNaN(n.duration)||t.percentage>5&&t.percentage<25||t.percentage===100)&&x(n,t),n.ended&&(n.ended=!1);if(!n.duration)return;t.percentage>2&&t.percentage<20?T(3,n):t.percentage>20&&T(4,n),n._bufferedEnd&&n._bufferedEnd>t.percentage&&(n._bufferedStart=n.currentTime||0),n._bufferedEnd=t.percentage,n.buffered.length=1,t.percentage==100&&(n.networkState=1,T(4,n)),e.event.trigger("progress",i,n._elem,!0)},META:function(e,t){t=t&&t.networkState?t:y(e.id);if(!t)return;if(!("duration"in e)){t._callMeta=!0;return}if(t._metadata&&(!e.height||t.videoHeight==e.height)&&e.duration===t.duration)return;t._metadata=!0;var n=t.duration;e.duration&&(t.duration=e.duration),t._lastDuration=t.duration;if(e.height||e.width)t.videoHeight=e.height||0,t.videoWidth=e.width||0;t.networkState||(t.networkState=2),t.readyState<1&&T(1,t),t.duration&&n!==t.duration&&w(t._elem,"durationchange"),w(t._elem,"loadedmetadata")},TIME:function(e){var t=y(e.id);if(!t||t.currentTime===e.position)return;t.currentTime=e.position,t.duration&&t.duration<t.currentTime&&x(t,e),t.readyState<2&&T(2,t),t.ended&&(t.ended=!1),w(t._elem,"timeupdate")},STATE:function(e){var t=y(e.id);if(!t)return;switch(e.newstate){case"BUFFERING":t.ended&&(t.ended=!1),T(1,t),w(t._elem,"waiting");break;case"PLAYING":t.paused=!1,t._ppFlag=!0,t.duration||x(t,e),t.readyState<3&&T(3,t),t.ended&&(t.ended=!1),w(t._elem,"playing");break;case"PAUSED":!t.paused&&!t.stopPlayPause&&(t.paused=!0,t._ppFlag=!0,w(t._elem,"pause"));break;case"COMPLETED":t.readyState<4&&T(4,t),t.ended=!0,w(t._elem,"ended")}}},Controller:{ERROR:function(e){var t=y(e.id);if(!t)return;u.setError(t._elem,e.message)},SEEK:function(e){var t=y(e.id);if(!t)return;t.ended&&(t.ended=!1);if(t.paused)try{t.jwapi[o]("play","false")}catch(n){}t.currentTime!=e.position&&(t.currentTime=e.position,w(t._elem,"timeupdate"))},VOLUME:function(e){var t=y(e.id);if(!t)return;var n=e.percentage/100;if(t.volume==n)return;t.volume=n,w(t._elem,"volumechange")},MUTE:function(e){if(e.state)return;var t=y(e.id);if(!t)return;if(t.muted==e.state)return;t.muted=e.state,w(t._elem,"volumechange")}}};var N=function(t){var n=!0;return e.each(u.jwEvents,function(r,i){e.each(i,function(e){try{t.jwapi["add"+r+"Listener"](e,"jQuery.webshims.mediaelement.jwEvents."+r+"."+e)}catch(i){return n=!1,!1}})}),n},C=function(e){var t=e.actionQueue.length,n=0,r;if(t&&e.isActive=="third")while(e.actionQueue.length&&t>n)n++,r=e.actionQueue.shift(),e.jwapi[r.fn].apply(e.jwapi,r.args);e.actionQueue.length&&(e.actionQueue=[])},k=function(t){if(!t)return;(t._ppFlag===i&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if(t.isActive=="third"&&(t._ppFlag===i||!t.paused))try{e(t._elem).play()}catch(n){}},1)};u.playerResize=function(t){if(!t)return;var n=r.getElementById(t.replace(g,""));n&&e(n).triggerHandler("swfstageresize"),n=null},e(r).on("emptied",function(e){var t=b(e.target);k(t)});var L;u.jwPlayerReady=function(n){var r=y(n.id),i=!0,s=0,o=function(){if(s>9)return;s++;if(N(r)){if(!r.wasSwfReady){var i=parseFloat(n.version,10);(i<5.1||i>=6)&&t.warn("mediaelement-swf is only testet with jwplayer 5.6+")}else e(r._elem).mediaLoad();r.wasSwfReady=!0,r.tryedReframeing=0,C(r),k(r)}else clearTimeout(r.reframeTimer),r.reframeTimer=setTimeout(o,9*s),s>2&&r.tryedReframeing<9&&(r.tryedReframeing++,r.shadowElem.css({overflow:"visible"}),setTimeout(function(){r.shadowElem.css({overflow:"hidden"})},16))};if(!r||!r.jwapi)return;r.tryedReframeing||(r.tryedReframeing=0),clearTimeout(L),r.jwData=n,r.shadowElem.removeClass("flashblocker-assumed"),e.prop(r._elem,"volume",r.volume),e.prop(r._elem,"muted",r.muted),o()};var A=e.noop;if(f){var O={play:1,playing:1},M=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","durationchange","emptied"],_=M.map(function(e){return e+".webshimspolyfill"}).join(" "),D={html5:"third",third:"html5"},P=function(n){var r=t.data(n.target,"mediaelement");if(!r)return;var i=n.originalEvent&&n.originalEvent.type===n.type;i==(r.activating=="third")&&(n.stopImmediatePropagation(),O[n.type]&&(r.isActive!=r.activating?e(n.target).pause():(r.isActive=D[r.isActive],e(n.target).pause(),r.isActive=D[r.isActive])))};A=function(n){e(n).off(_).on(_,P),M.forEach(function(e){t.moveToFirstEvent(n,e)})},A(r)}u.setActive=function(n,r,i){i||(i=t.data(n,"mediaelement"));if(!i||i.isActive==r)return;r!="html5"&&r!="third"&&t.warn("wrong type for mediaelement activating: "+r);var s=t.data(n,"shadowData");i.activating=r,e(n).pause(),i.isActive=r,r=="third"?(s.shadowElement=s.shadowFocusElement=i.shadowElem[0],e(n).addClass("swf-api-active nonnative-api-active").hide().getShadowElement().show()):(e(n).removeClass("swf-api-active nonnative-api-active").show().getShadowElement().hide(),s.shadowElement=s.shadowFocusElement=!1),e(n).trigger("mediaelementapichange")};var H=function(){var e=["_bufferedEnd","_bufferedStart","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta","_durationCalcs"],t=e.length;return function(n){if(!n)return;var r=t,i=n.networkState;T(0,n);while(--r)delete n[e[r]];n.actionQueue=[],n.buffered.length=0,i&&w(n._elem,"emptied")}}(),B=function(t,n){var r=t._elem,i=t.shadowElem;e(r)[n?"addClass":"removeClass"]("webshims-controls"),t._elemNodeName=="audio"&&!n?i.css({width:0,height:0}):i.css({width:r.style.width||e(r).width(),height:r.style.height||e(r).height()})};u.createSWF=function(n,i,h){if(!l){setTimeout(function(){e(n).mediaLoad()},1);return}c<1?c=1:c++;var p=e.extend({},s.vars,{image:e.attr(n,"poster")&&e.prop(n,"poster")||"",file:i.streamId||i.srcProp}),d=e(n).data("vars")||{};i.server&&(p.streamer=i.server),h||(h=t.data(n,"mediaelement"));if(h&&h.swfCreated){u.setActive(n,"third",h),H(h),h.currentSrc=i.srcProp,e.extend(p,d),s.changeSWF(p,n,i,h,"load"),j(n,o,["LOAD",p]);return}var v=e.prop(n,"controls"),g="jwplayer-"+t.getID(n),y=e.extend({},s.params,e(n).data("params")),b=n.nodeName.toLowerCase(),w=e.extend({},s.attrs,{name:g,id:g},e(n).data("attrs")),x=e('<div class="polyfill-'+b+' polyfill-mediaelement" id="wrapper-'+g+'"><div id="'+g+'"></div>').css({position:"relative",overflow:"hidden"}),T=function(){B(h,e.prop(n,"controls"))};h=t.data(n,"mediaelement",t.objectCreate(m,{actionQueue:{value:[]},shadowElem:{value:x},_elemNodeName:{value:b},_elem:{value:n},currentSrc:{value:i.srcProp},swfCreated:{value:!0},buffered:{value:{start:function(e){if(e>=h.buffered.length){t.error("buffered index size error");return}return 0},end:function(e){if(e>=h.buffered.length){t.error("buffered index size error");return}return(h.duration-h._bufferedStart)*h._bufferedEnd/100+h._bufferedStart},length:0}}})),B(h,v),x.insertBefore(n),f&&e.extend(h,{volume:e.prop(n,"volume"),muted:e.prop(n,"muted")}),e.extend(p,{id:g,controlbar:v?s.vars.controlbar||(b=="video"?"over":"bottom"):b=="video"?"none":"bottom",icons:""+(v&&b=="video")},d,{playerready:"jQuery.webshims.mediaelement.jwPlayerReady"}),p.plugins?p.plugins+=","+S:p.plugins=S,t.addShadowDom(n,x),A(n),u.setActive(n,"third",h),s.changeSWF(p,n,i,h,"embed"),e(r).on("updateshadowdom",T),e(n).on("updatemediaelementdimensions",T),a.embedSWF(E,g,"100%","100%","9.0.0",!1,p,y,w,function(r){r.success&&(h.jwapi=r.ref,v||e(r.ref).attr("tabindex","-1").css("outline","none"),setTimeout(function(){if(!r.ref.parentNode&&x[0].parentNode||r.ref.style.display=="none")x.addClass("flashblocker-assumed"),e(n).trigger("flashblocker"),t.warn("flashblocker assumed");e(r.ref).css({minHeight:"2px",minWidth:"2px",display:"block"})},9),L||(clearTimeout(L),L=setTimeout(function(){var n=e(r.ref);n[0].offsetWidth>1&&n[0].offsetHeight>1&&location.protocol.indexOf("file:")===0?t.error("Add your local development-directory to the local-trusted security sandbox:  http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html"):(n[0].offsetWidth<2||n[0].offsetHeight<2)&&t.warn("JS-SWF connection can't be established on hidden or unconnected flash objects"),n=null},8e3)))})};var j=function(e,t,n,r){return r=r||b(e),r?(r.jwapi&&r.jwapi[t]?r.jwapi[t].apply(r.jwapi,n||[]):(r.actionQueue.push({fn:t,args:n}),r.actionQueue.length>10&&setTimeout(function(){r.actionQueue.length>5&&r.actionQueue.shift()},99)),r):!1};["audio","video"].forEach(function(n){var r={},i,s=function(e){if(n=="audio"&&(e=="videoHeight"||e=="videoWidth"))return;r[e]={get:function(){var t=b(this);return t?t[e]:f&&i[e].prop._supget?i[e].prop._supget.apply(this):m[e]},writeable:!1}},u=function(e,t){s(e),delete r[e].writeable,r[e].set=t};u("volume",function(e){var n=b(this);if(n){e*=100;if(!isNaN(e)){var r=n.muted;(e<0||e>100)&&t.error("volume greater or less than allowed "+e/100),j(this,o,["VOLUME",e],n);if(r)try{n.jwapi.sendEvent("mute","true")}catch(s){}e/=100;if(n.volume==e||n.isActive!="third")return;n.volume=e,w(n._elem,"volumechange"),n=null}}else if(i.volume.prop._supset)return i.volume.prop._supset.apply(this,arguments)}),u("muted",function(e){var t=b(this);if(t){e=!!e,j(this,o,["mute",""+e],t);if(t.muted==e||t.isActive!="third")return;t.muted=e,w(t._elem,"volumechange"),t=null}else if(i.muted.prop._supset)return i.muted.prop._supset.apply(this,arguments)}),u("currentTime",function(e){var t=b(this);if(t){e*=1;if(!isNaN(e)){t.paused&&(clearTimeout(t.stopPlayPause),t.stopPlayPause=setTimeout(function(){t.paused=!0,t.stopPlayPause=!1},50)),j(this,o,["SEEK",""+e],t);if(t.paused){t.readyState>0&&(t.currentTime=e,w(t._elem,"timeupdate"));try{t.jwapi[o]("play","false")}catch(n){}}}}else if(i.currentTime.prop._supset)return i.currentTime.prop._supset.apply(this,arguments)}),["play","pause"].forEach(function(e){r[e]={value:function(){var t=b(this);if(t)t.stopPlayPause&&clearTimeout(t.stopPlayPause),j(this,o,["play",e=="play"],t),setTimeout(function(){t.isActive=="third"&&(t._ppFlag=!0,t.paused!=(e!="play")&&(t.paused=e!="play",w(t._elem,e)))},1);else if(i[e].prop._supvalue)return i[e].prop._supvalue.apply(this,arguments)}}}),p.forEach(s),t.onNodeNamesPropertyModify(n,"controls",function(r,i){var s=b(this);e(this)[i?"addClass":"removeClass"]("webshims-controls");if(s){try{j(this,i?"showControls":"hideControls",[n],s)}catch(o){t.warn("you need to generate a crossdomain.xml")}n=="audio"&&B(s,i),e(s.jwapi).attr("tabindex",i?"0":"-1")}}),i=t.defineNodeNameProperties(n,r,"prop")});if(l&&e.cleanData){var F=e.cleanData,I={object:1,OBJECT:1};e.cleanData=function(e){var t,n,r;if(e&&(n=e.length)&&c)for(t=0;t<n;t++)if(I[e[t].nodeName]){if(o in e[t]){c--;try{e[t][o]("play",!1)}catch(i){}}try{for(r in e[t])typeof e[t][r]=="function"&&(e[t][r]=null)}catch(i){}}return F.apply(this,arguments)}}f||(["poster","src"].forEach(function(e){t.defineNodeNamesProperty(e=="src"?["audio","video","source"]:["video"],e,{reflect:!0,propType:"src"})}),["autoplay","controls"].forEach(function(e){t.defineNodeNamesBooleanProperty(["audio","video"],e)}),t.defineNodeNamesProperties(["audio","video"],{HAVE_CURRENT_DATA:{value:2},HAVE_ENOUGH_DATA:{value:4},HAVE_FUTURE_DATA:{value:3},HAVE_METADATA:{value:1},HAVE_NOTHING:{value:0},NETWORK_EMPTY:{value:0},NETWORK_IDLE:{value:1},NETWORK_LOADING:{value:2},NETWORK_NO_SOURCE:{value:3}},"prop"))});