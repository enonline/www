(self.webpackChunkghost_casper=self.webpackChunkghost_casper||[]).push([[348],{"./src/components/Layout/Header/HeaderBackground.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Header_HeaderBackground});var react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),HeaderBackground_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/HeaderBackground.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(HeaderBackground_module.ZP,options);HeaderBackground_module.ZP&&HeaderBackground_module.ZP.locals&&HeaderBackground_module.ZP.locals;const Header_HeaderBackground=function HeaderBackground(_ref){var srcImg=_ref.srcImg,children=_ref.children;return react.createElement(react.Fragment,null,react.createElement("div",{className:HeaderBackground_module.Wb},srcImg?react.createElement("div",{className:"outer responsive-header-img "+HeaderBackground_module.xj,style:{backgroundImage:"url(".concat(srcImg,")")}},children):react.createElement("div",{className:"outer responsive-header-img no-image "+HeaderBackground_module.xj},children)))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Layout/Header/HeaderBackground.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Wb:()=>siteHeaderBackgroundWrapper,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,xj:()=>siteHeaderBackground});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.HeaderBackground-module__siteHeaderBackground___LPIfC{position:relative;margin-top:0;padding-bottom:12px;color:#fff;background:var(--darkgrey) no-repeat center center;background-size:cover}.HeaderBackground-module__siteHeaderBackgroundWrapper___Ioqfb{position:relative;z-index:101;display:block;background:rgba(0,0,0,.18)}.HeaderBackground-module__siteHeaderBackground___LPIfC::after{content:"";position:absolute;top:0;right:0;bottom:auto;left:0;z-index:10;display:block;height:140px;background:linear-gradient(rgba(77, 77, 77, 0.246), rgba(0, 0, 0, 0))}.HeaderBackground-module__siteHeaderBackground___LPIfC.HeaderBackground-module__no-image___CcxTa::before,.HeaderBackground-module__siteHeaderBackground___LPIfC.HeaderBackground-module__no-image___CcxTa::after{display:none}html[theme=dark] .HeaderBackground-module__siteHeaderBackground___LPIfC::after{background:linear-gradient(rgba(0, 0, 0, 0.568), rgba(255, 255, 255, 0))}',"",{version:3,sources:["webpack://./src/components/Layout/Header/HeaderBackground.module.scss"],names:[],mappings:"AAAA,uDACE,iBAAA,CACA,YAAA,CACA,mBAAA,CACA,UAAA,CACA,kDAAA,CACA,qBAAA,CAGF,8DACE,iBAAA,CACA,WAAA,CACA,aAAA,CACA,0BAAA,CAGF,8DACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,WAAA,CACA,MAAA,CACA,UAAA,CACA,aAAA,CACA,YAAA,CACA,qEAAA,CAGF,iNAEE,YAAA,CAIA,+EACE,wEAAA",sourcesContent:[".siteHeaderBackground {\n  position: relative;\n  margin-top: 0;\n  padding-bottom: 12px;\n  color: #fff;\n  background: var(--darkgrey) no-repeat center center;\n  background-size: cover;\n}\n\n.siteHeaderBackgroundWrapper {\n  position: relative;\n  z-index: 101;\n  display: block;\n  background: rgb(0 0 0 / 18%);\n}\n\n.siteHeaderBackground::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: auto;\n  left: 0;\n  z-index: 10;\n  display: block;\n  height: 140px;\n  background: linear-gradient(rgb(77 77 77 / 24.6%), rgb(0 0 0 / 0%));\n}\n\n.siteHeaderBackground.no-image::before,\n.siteHeaderBackground.no-image::after {\n  display: none;\n}\n\nhtml[theme='dark'] {\n  .siteHeaderBackground::after {\n    background: linear-gradient(rgb(0 0 0 / 56.8%), rgb(255 255 255 / 0%));\n  }\n}\n"],sourceRoot:""}]);var siteHeaderBackground="HeaderBackground-module__siteHeaderBackground___LPIfC",siteHeaderBackgroundWrapper="HeaderBackground-module__siteHeaderBackgroundWrapper___Ioqfb";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/email-validator/index.js":(__unused_webpack_module,exports)=>{"use strict";var tester=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;exports.validate=function(email){if(!email)return!1;if(email.length>254)return!1;if(!tester.test(email))return!1;var parts=email.split("@");return!(parts[0].length>64)&&!parts[1].split(".").some((function(part){return part.length>63}))}},"./node_modules/gatsby-plugin-mailchimp/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.Z=void 0;var _jsonp=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__("./node_modules/jsonp/index.js")),_emailValidator=__webpack_require__("./node_modules/email-validator/index.js");var subscribeEmailToMailchimp=function subscribeEmailToMailchimp(_ref){var url=_ref.url,timeout=_ref.timeout;return new Promise((function(resolve,reject){return(0,_jsonp.default)(url,{param:"c",timeout},(function(err,data){err&&reject(err),data&&resolve(data)}))}))},convertListFields=function convertListFields(fields){var queryParams="";for(var field in fields)if(Object.prototype.hasOwnProperty.call(fields,field)){var fieldTransformed="group["===field.substring(0,6)?field:field.toUpperCase();queryParams=queryParams.concat("&".concat(fieldTransformed,"=").concat(fields[field]))}return queryParams},_default=function addToMailchimp(email,fields,endpointOverride){var isEmailValid=(0,_emailValidator.validate)(email),emailEncoded=encodeURIComponent(email);if(!isEmailValid)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var endpoint=__GATSBY_PLUGIN_MAILCHIMP_ADDRESS__,timeout=__GATSBY_PLUGIN_MAILCHIMP_TIMEOUT__;arguments.length<3&&"string"==typeof fields?endpoint=fields:"string"==typeof endpointOverride&&(endpoint=endpointOverride),endpoint=endpoint.replace(/\/post/g,"/post-json");var queryParams="&EMAIL=".concat(emailEncoded).concat(convertListFields(fields)),url="".concat(endpoint).concat(queryParams);return subscribeEmailToMailchimp({url,timeout})};exports.Z=_default},"./node_modules/jsonp/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var debug=__webpack_require__("./node_modules/jsonp/node_modules/debug/src/browser.js")("jsonp");module.exports=function jsonp(url,opts,fn){"function"==typeof opts&&(fn=opts,opts={});opts||(opts={});var script,timer,prefix=opts.prefix||"__jp",id=opts.name||prefix+count++,param=opts.param||"callback",timeout=null!=opts.timeout?opts.timeout:6e4,enc=encodeURIComponent,target=document.getElementsByTagName("script")[0]||document.head;timeout&&(timer=setTimeout((function(){cleanup(),fn&&fn(new Error("Timeout"))}),timeout));function cleanup(){script.parentNode&&script.parentNode.removeChild(script),window[id]=noop,timer&&clearTimeout(timer)}return window[id]=function(data){debug("jsonp got",data),cleanup(),fn&&fn(null,data)},url=(url+=(~url.indexOf("?")?"&":"?")+param+"="+enc(id)).replace("?&","?"),debug('jsonp req "%s"',url),(script=document.createElement("script")).src=url,target.parentNode.insertBefore(script,target),function cancel(){window[id]&&cleanup()}};var count=0;function noop(){}},"./node_modules/jsonp/node_modules/debug/src/browser.js":(module,exports,__webpack_require__)=>{var process=__webpack_require__("./node_modules/process/browser.js");function load(){var r;try{r=exports.storage.debug}catch(e){}return!r&&void 0!==process&&"env"in process&&(r=process.env.DEBUG),r}(exports=module.exports=__webpack_require__("./node_modules/jsonp/node_modules/debug/src/debug.js")).log=function log(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},exports.formatArgs=function formatArgs(args){var useColors=this.useColors;if(args[0]=(useColors?"%c":"")+this.namespace+(useColors?" %c":" ")+args[0]+(useColors?"%c ":" ")+"+"+exports.humanize(this.diff),!useColors)return;var c="color: "+this.color;args.splice(1,0,c,"color: inherit");var index=0,lastC=0;args[0].replace(/%[a-zA-Z%]/g,(function(match){"%%"!==match&&(index++,"%c"===match&&(lastC=index))})),args.splice(lastC,0,c)},exports.save=function save(namespaces){try{null==namespaces?exports.storage.removeItem("debug"):exports.storage.debug=namespaces}catch(e){}},exports.load=load,exports.useColors=function useColors(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},exports.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function localstorage(){try{return window.localStorage}catch(e){}}(),exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],exports.formatters.j=function(v){try{return JSON.stringify(v)}catch(err){return"[UnexpectedJSONParseError]: "+err.message}},exports.enable(load())},"./node_modules/jsonp/node_modules/debug/src/debug.js":(module,exports,__webpack_require__)=>{var prevTime;function createDebug(namespace){function debug(){if(debug.enabled){var self=debug,curr=+new Date,ms=curr-(prevTime||curr);self.diff=ms,self.prev=prevTime,self.curr=curr,prevTime=curr;for(var args=new Array(arguments.length),i=0;i<args.length;i++)args[i]=arguments[i];args[0]=exports.coerce(args[0]),"string"!=typeof args[0]&&args.unshift("%O");var index=0;args[0]=args[0].replace(/%([a-zA-Z%])/g,(function(match,format){if("%%"===match)return match;index++;var formatter=exports.formatters[format];if("function"==typeof formatter){var val=args[index];match=formatter.call(self,val),args.splice(index,1),index--}return match})),exports.formatArgs.call(self,args);var logFn=debug.log||exports.log||console.log.bind(console);logFn.apply(self,args)}}return debug.namespace=namespace,debug.enabled=exports.enabled(namespace),debug.useColors=exports.useColors(),debug.color=function selectColor(namespace){var i,hash=0;for(i in namespace)hash=(hash<<5)-hash+namespace.charCodeAt(i),hash|=0;return exports.colors[Math.abs(hash)%exports.colors.length]}(namespace),"function"==typeof exports.init&&exports.init(debug),debug}(exports=module.exports=createDebug.debug=createDebug.default=createDebug).coerce=function coerce(val){return val instanceof Error?val.stack||val.message:val},exports.disable=function disable(){exports.enable("")},exports.enable=function enable(namespaces){exports.save(namespaces),exports.names=[],exports.skips=[];for(var split=("string"==typeof namespaces?namespaces:"").split(/[\s,]+/),len=split.length,i=0;i<len;i++)split[i]&&("-"===(namespaces=split[i].replace(/\*/g,".*?"))[0]?exports.skips.push(new RegExp("^"+namespaces.substr(1)+"$")):exports.names.push(new RegExp("^"+namespaces+"$")))},exports.enabled=function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++)if(exports.skips[i].test(name))return!1;for(i=0,len=exports.names.length;i<len;i++)if(exports.names[i].test(name))return!0;return!1},exports.humanize=__webpack_require__("./node_modules/jsonp/node_modules/ms/index.js"),exports.names=[],exports.skips=[],exports.formatters={}},"./node_modules/jsonp/node_modules/ms/index.js":module=>{var s=1e3,m=60*s,h=60*m,d=24*h,y=365.25*d;function plural(ms,n,name){if(!(ms<n))return ms<1.5*n?Math.floor(ms/n)+" "+name:Math.ceil(ms/n)+" "+name+"s"}module.exports=function(val,options){options=options||{};var type=typeof val;if("string"===type&&val.length>0)return function parse(str){if((str=String(str)).length>100)return;var match=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);switch((match[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*y;case"days":case"day":case"d":return n*d;case"hours":case"hour":case"hrs":case"hr":case"h":return n*h;case"minutes":case"minute":case"mins":case"min":case"m":return n*m;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}(val);if("number"===type&&!1===isNaN(val))return options.long?function fmtLong(ms){return plural(ms,d,"day")||plural(ms,h,"hour")||plural(ms,m,"minute")||plural(ms,s,"second")||ms+" ms"}(val):function fmtShort(ms){if(ms>=d)return Math.round(ms/d)+"d";if(ms>=h)return Math.round(ms/h)+"h";if(ms>=m)return Math.round(ms/m)+"m";if(ms>=s)return Math.round(ms/s)+"s";return ms+"ms"}(val);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(val))}}}]);