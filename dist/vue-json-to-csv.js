!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("vue-json-to-csv",[],n):"object"==typeof exports?exports["vue-json-to-csv"]=n():t["vue-json-to-csv"]=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r=e(1)(e(2),e(83),null,null);t.exports=r.exports},function(t,n){t.exports=function(t,n,e,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var c="function"==typeof i?i.options:i;if(n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),e&&(c._scopeId=e),r){var f=Object.create(c.computed||null);Object.keys(r).forEach(function(t){var n=r[t];f[t]=function(){return n}}),c.computed=f}return{esModule:o,exports:i,options:c}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(3),i=r(o),u=e(42),c=r(u),f=e(48),s=r(f),a=e(51),l=r(a);n.default={mixins:[l.default],props:{jsonData:{type:Array,required:!0},csvTitle:{type:[String,Number],default:"csv",required:!1},showLabels:{type:Boolean,default:!0,required:!1},labels:{type:Object,required:!1},separator:{type:String,default:";",required:!1}},data:function(){return{csvLabels:null,csvData:null}},destroyed:function(){this.csvLabels=null,this.csvData=null},methods:{handleClick:function(){var t=(0,s.default)(this._events).indexOf("error")>-1,n=(0,s.default)(this._events).indexOf("success")>-1;if(!this.jsonData.length)return void this.handleError("Error: Data are empty",t);if(this.labels&&!(0,s.default)(this.labels).length)return void this.handleError("Error: Labels are empty",t);var e=(0,c.default)((0,i.default)({},this.jsonData[0])),r=this.labels||this.$_createCsvLabelsConf(e);if(this.csvLabels=this.showLabels?this.$_createCsvLabels(r,this.separator):"",this.csvData=this.$_createCsvContent(this.jsonData,r,this.separator),"error"===this.csvLabels||"error"===this.csvData)return void this.handleError("Error: An error occured while parsing the data.",t);var o=this.csvLabels+this.csvData,u=this.$_downloadCsv("csv-"+this._uid,o,this.csvTitle);u||this.handleError("An error has occured",t),u&&n&&this.$emit("success",!0)},handleError:function(t,n){throw t}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(4),i=r(o);n.default=i.default||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}},function(t,n,e){t.exports={default:e(5),__esModule:!0}},function(t,n,e){e(6),t.exports=e(9).Object.assign},function(t,n,e){var r=e(7);r(r.S+r.F,"Object",{assign:e(23)})},function(t,n,e){var r=e(8),o=e(9),i=e(10),u=e(12),c=e(22),f="prototype",s=function(t,n,e){var a,l,p,d=t&s.F,v=t&s.G,y=t&s.S,h=t&s.P,b=t&s.B,m=t&s.W,x=v?o:o[n]||(o[n]={}),g=x[f],O=v?r:y?r[n]:(r[n]||{})[f];v&&(e=n);for(a in e)l=!d&&O&&void 0!==O[a],l&&c(x,a)||(p=l?O[a]:e[a],x[a]=v&&"function"!=typeof O[a]?e[a]:b&&l?i(p,r):m&&O[a]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[f]=t[f],n}(p):h&&"function"==typeof p?i(Function.call,p):p,h&&((x.virtual||(x.virtual={}))[a]=p,t&s.R&&g&&!g[a]&&u(g,a,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(11);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(13),o=e(21);t.exports=e(17)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(14),o=e(16),i=e(20),u=Object.defineProperty;n.f=e(17)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(15);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(17)&&!e(18)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(15),o=e(8).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(15);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){"use strict";var r=e(17),o=e(24),i=e(39),u=e(40),c=e(41),f=e(27),s=Object.assign;t.exports=!s||e(18)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=s({},t)[e]||Object.keys(s({},n)).join("")!=r})?function(t,n){for(var e=c(t),s=arguments.length,a=1,l=i.f,p=u.f;s>a;)for(var d,v=f(arguments[a++]),y=l?o(v).concat(l(v)):o(v),h=y.length,b=0;h>b;)d=y[b++],r&&!p.call(v,d)||(e[d]=v[d]);return e}:s},function(t,n,e){var r=e(25),o=e(38);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(22),o=e(26),i=e(30)(!1),u=e(34)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(27),o=e(29);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(26),o=e(31),i=e(33);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),a=i(u,s);if(t&&e!=e){for(;s>a;)if(c=f[a++],c!=c)return!0}else for(;s>a;a++)if((t||a in f)&&f[a]===e)return t||a||0;return!t&&-1}}},function(t,n,e){var r=e(32),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(32),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(35)("keys"),o=e(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(9),o=e(8),i="__core-js_shared__",u=o[i]||(o[i]={});(t.exports=function(t,n){return u[t]||(u[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(36)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!0},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(29);t.exports=function(t){return Object(r(t))}},function(t,n,e){t.exports={default:e(43),__esModule:!0}},function(t,n,e){e(44);var r=e(9).Object;t.exports=function(t){return r.getOwnPropertyNames(t)}},function(t,n,e){e(45)("getOwnPropertyNames",function(){return e(46).f})},function(t,n,e){var r=e(7),o=e(9),i=e(18);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n,e){var r=e(26),o=e(47).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?c(t):o(r(t))}},function(t,n,e){var r=e(25),o=e(38).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){t.exports={default:e(49),__esModule:!0}},function(t,n,e){e(50),t.exports=e(9).Object.keys},function(t,n,e){var r=e(41),o=e(24);e(45)("keys",function(){return function(t){return o(r(t))}})},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var o=e(52),i=r(o),u=e(48),c=r(u);t.exports={methods:{$_createCsvLabelsConf:function(t){var n={};return t.map(function(t,e){n[t]={title:t}}),n},$_createCsvLabels:function(t,n){var e="",r="";try{(0,c.default)(t).map(function(r,o){e+='"'+t[r].title+'"'+n}),e=e.slice(0,-1),r+=e+"\r\n"}catch(t){r="error"}finally{return r}},$_createCsvContent:function(t,n,e){var r="",o="",u="";try{t.map(function(t,f){r="",(0,c.default)(n).map(function(n,o){u=(0,i.default)(t[n]),r+="number"===u||"float"===u?'"'+t[n]+'"'+e:null!==t[n]&&"null"!==t[n]?'"'+t[n]+'"'+e:'""'+e}),r=r.slice(0,-1),o+=r+"\r\n"})}catch(t){o="error"}finally{return o}},$_downloadCsv:function(t,n,e){try{var r=new Blob(["\ufeff"+n],{type:"text/csv"}),o=document.createElement("a");return o.id="csv-"+t,o.href=URL.createObjectURL(r),document.body.appendChild(o),document.getElementById(o.id).style.visibility="hidden",document.getElementById(o.id).download=e+".csv",document.body.appendChild(o),document.getElementById(o.id).click(),setTimeout(function(){document.body.removeChild(o)}),!0}catch(t){return!1}}}}},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(53),i=r(o),u=e(72),c=r(u),f="function"==typeof c.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":typeof t};n.default="function"==typeof c.default&&"symbol"===f(i.default)?function(t){return"undefined"==typeof t?"undefined":f(t)}:function(t){return t&&"function"==typeof c.default&&t.constructor===c.default&&t!==c.default.prototype?"symbol":"undefined"==typeof t?"undefined":f(t)}},function(t,n,e){t.exports={default:e(54),__esModule:!0}},function(t,n,e){e(55),e(67),t.exports=e(71).f("iterator")},function(t,n,e){"use strict";var r=e(56)(!0);e(57)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(32),o=e(29);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),f=r(e),s=c.length;return f<0||f>=s?t?"":void 0:(i=c.charCodeAt(f),i<55296||i>56319||f+1===s||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n,e){"use strict";var r=e(36),o=e(7),i=e(58),u=e(12),c=e(59),f=e(60),s=e(64),a=e(66),l=e(65)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",y="values",h=function(){return this};t.exports=function(t,n,e,b,m,x,g){f(e,n,b);var O,_,S,j=function(t){if(!p&&t in P)return P[t];switch(t){case v:return function(){return new e(this,t)};case y:return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",E=m==y,L=!1,P=t.prototype,M=P[l]||P[d]||m&&P[m],C=M||j(m),k=m?E?j("entries"):C:void 0,T="Array"==n?P.entries||M:M;if(T&&(S=a(T.call(new t)),S!==Object.prototype&&S.next&&(s(S,w,!0),r||"function"==typeof S[l]||u(S,l,h))),E&&M&&M.name!==y&&(L=!0,C=function(){return M.call(this)}),r&&!g||!p&&!L&&P[l]||u(P,l,C),c[n]=C,c[w]=h,m)if(O={values:E?C:j(y),keys:x?C:j(v),entries:k},g)for(_ in O)_ in P||i(P,_,O[_]);else o(o.P+o.F*(p||L),n,O);return O}},function(t,n,e){t.exports=e(12)},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(61),o=e(21),i=e(64),u={};e(12)(u,e(65)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(14),o=e(62),i=e(38),u=e(34)("IE_PROTO"),c=function(){},f="prototype",s=function(){var t,n=e(19)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(63).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),s=t.F;r--;)delete s[f][i[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[f]=r(t),e=new c,c[f]=null,e[u]=t):e=s(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(13),o=e(14),i=e(24);t.exports=e(17)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,f=0;c>f;)r.f(t,e=u[f++],n[e]);return t}},function(t,n,e){var r=e(8).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(13).f,o=e(22),i=e(65)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(35)("wks"),o=e(37),i=e(8).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,n,e){var r=e(22),o=e(41),i=e(34)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){e(68);for(var r=e(8),o=e(12),i=e(59),u=e(65)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),f=0;f<c.length;f++){var s=c[f],a=r[s],l=a&&a.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},function(t,n,e){"use strict";var r=e(69),o=e(70),i=e(59),u=e(26);t.exports=e(57)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){n.f=e(65)},function(t,n,e){t.exports={default:e(73),__esModule:!0}},function(t,n,e){e(74),e(80),e(81),e(82),t.exports=e(9).Symbol},function(t,n,e){"use strict";var r=e(8),o=e(22),i=e(17),u=e(7),c=e(58),f=e(75).KEY,s=e(18),a=e(35),l=e(64),p=e(37),d=e(65),v=e(71),y=e(76),h=e(77),b=e(78),m=e(14),x=e(15),g=e(41),O=e(26),_=e(20),S=e(21),j=e(61),w=e(46),E=e(79),L=e(39),P=e(13),M=e(24),C=E.f,k=P.f,T=w.f,F=r.Symbol,D=r.JSON,A=D&&D.stringify,N="prototype",I=d("_hidden"),R=d("toPrimitive"),$={}.propertyIsEnumerable,G=a("symbol-registry"),B=a("symbols"),q=a("op-symbols"),V=Object[N],W="function"==typeof F&&!!L.f,H=r.QObject,J=!H||!H[N]||!H[N].findChild,z=i&&s(function(){return 7!=j(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=C(V,n);r&&delete V[n],k(t,n,e),r&&t!==V&&k(V,n,r)}:k,K=function(t){var n=B[t]=j(F[N]);return n._k=t,n},U=W&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},Y=function(t,n,e){return t===V&&Y(q,n,e),m(t),n=_(n,!0),m(e),o(B,n)?(e.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),e=j(e,{enumerable:S(0,!1)})):(o(t,I)||k(t,I,S(1,{})),t[I][n]=!0),z(t,n,e)):k(t,n,e)},Q=function(t,n){m(t);for(var e,r=h(n=O(n)),o=0,i=r.length;i>o;)Y(t,e=r[o++],n[e]);return t},X=function(t,n){return void 0===n?j(t):Q(j(t),n)},Z=function(t){var n=$.call(this,t=_(t,!0));return!(this===V&&o(B,t)&&!o(q,t))&&(!(n||!o(this,t)||!o(B,t)||o(this,I)&&this[I][t])||n)},tt=function(t,n){if(t=O(t),n=_(n,!0),t!==V||!o(B,n)||o(q,n)){var e=C(t,n);return!e||!o(B,n)||o(t,I)&&t[I][n]||(e.enumerable=!0),e}},nt=function(t){for(var n,e=T(O(t)),r=[],i=0;e.length>i;)o(B,n=e[i++])||n==I||n==f||r.push(n);return r},et=function(t){for(var n,e=t===V,r=T(e?q:O(t)),i=[],u=0;r.length>u;)!o(B,n=r[u++])||e&&!o(V,n)||i.push(B[n]);return i};W||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===V&&n.call(q,e),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),z(this,t,S(1,e))};return i&&J&&z(V,t,{configurable:!0,set:n}),K(t)},c(F[N],"toString",function(){return this._k}),E.f=tt,P.f=Y,e(47).f=w.f=nt,e(40).f=Z,L.f=et,i&&!e(36)&&c(V,"propertyIsEnumerable",Z,!0),v.f=function(t){return K(d(t))}),u(u.G+u.W+u.F*!W,{Symbol:F});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ot=0;rt.length>ot;)d(rt[ot++]);for(var it=M(d.store),ut=0;it.length>ut;)y(it[ut++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(G,t+="")?G[t]:G[t]=F(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var n in G)if(G[n]===t)return n},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!W,"Object",{create:X,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:nt,getOwnPropertySymbols:et});var ct=s(function(){L.f(1)});u(u.S+u.F*ct,"Object",{getOwnPropertySymbols:function(t){return L.f(g(t))}}),D&&u(u.S+u.F*(!W||s(function(){var t=F();return"[null]"!=A([t])||"{}"!=A({a:t})||"{}"!=A(Object(t))})),"JSON",{stringify:function(t){for(var n,e,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(e=n=r[1],(x(n)||void 0!==t)&&!U(t))return b(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!U(n))return n}),r[1]=n,A.apply(D,r)}}),F[N][R]||e(12)(F[N],R,F[N].valueOf),l(F,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){var r=e(37)("meta"),o=e(15),i=e(22),u=e(13).f,c=0,f=Object.isExtensible||function(){return!0},s=!e(18)(function(){return f(Object.preventExtensions({}))}),a=function(t){u(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!f(t))return"F";if(!n)return"E";a(t)}return t[r].i},p=function(t,n){if(!i(t,r)){if(!f(t))return!0;if(!n)return!1;a(t)}return t[r].w},d=function(t){return s&&v.NEED&&f(t)&&!i(t,r)&&a(t),t},v=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,n,e){var r=e(8),o=e(9),i=e(36),u=e(71),c=e(13).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(24),o=e(39),i=e(40);t.exports=function(t){var n=r(t),e=o.f;if(e)for(var u,c=e(t),f=i.f,s=0;c.length>s;)f.call(t,u=c[s++])&&n.push(u);return n}},function(t,n,e){var r=e(28);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(40),o=e(21),i=e(26),u=e(20),c=e(22),f=e(16),s=Object.getOwnPropertyDescriptor;n.f=e(17)?s:function(t,n){if(t=i(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(c(t,n))return o(!r.f.call(t,n),t[n])}},function(t,n){},function(t,n,e){e(76)("asyncIterator")},function(t,n,e){e(76)("observable")},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{attrs:{id:"json-to-csv-"+t._uid},on:{click:t.handleClick}},[t._t("default",[e("button",[t._v("\n      Download\n    ")])])],2)},staticRenderFns:[]}}])});