"use strict";(self.webpackChunkghost_casper=self.webpackChunkghost_casper||[]).push([[757],{8032:function(e,t,a){a.d(t,{G:function(){return Z},L:function(){return g},M:function(){return N},P:function(){return w},_:function(){return o},a:function(){return l},b:function(){return u},g:function(){return m},h:function(){return i}});var r=a(7294),s=(a(2369),a(5697)),n=a.n(s);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const i=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,s){return void 0===s&&(s={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},s,{opacity:t?1:0})})}function m(e,t,a,r,s,n,o,i){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),i&&(c.objectPosition=i);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],p=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=o(e,d);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:i}=e,c=o(e,h);return r.createElement("img",l({},c,{decoding:"async",loading:s,src:i?t:void 0,"data-src":i?void 0:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,alt:n}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=o(e,f);const i=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,l({},n,t,{sizes:i,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:i})})),c):c};var E;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},v.displayName="Picture",v.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,a=o(e,b);return t?r.createElement(v,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:s.string,sources:null==(E=v.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return r.createElement(r.Fragment,null,r.createElement(v,l({},e)),r.createElement("noscript",null,r.createElement(v,l({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],L=e=>e.replace(/\n/g,""),_=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),l=3;l<r;l++)s[l-3]=arguments[l];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:n().object.isRequired,alt:_},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],x=new Set;let R,O;const j=function(e){let{as:t="div",image:s,style:n,backgroundColor:u,className:m,class:d,onStartLoad:p,onLoad:g,onError:h}=e,f=o(e,S);const{width:y,height:v,layout:E}=s,b=c(y,v,E),{style:w,className:N}=b,C=o(b,T),I=(0,r.useRef)(),L=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);d&&(m=d);const _=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,y,v);return(0,r.useEffect)((()=>{R||(R=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=I.current.querySelector("[data-gatsby-image-ssr]");if(e&&i())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(L);if(O&&x.has(L))return;let t,r;return R.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;I.current&&(I.current.innerHTML=a(l({isLoading:!0,isLoaded:x.has(L),image:s},f)),x.has(L)||(t=requestAnimationFrame((()=>{I.current&&(r=o(I.current,L,x,n,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{x.has(L)&&O&&(I.current.innerHTML=O(l({isLoading:x.has(L),isLoaded:x.has(L),image:s},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,r.createElement)(t,l({},C,{style:l({},w,n,{backgroundColor:u}),className:N+(m?" "+m:""),ref:I,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},Z=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));Z.propTypes=k,Z.displayName="GatsbyImage";const $=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:s,__error:n}=t,i=o(t,$);return n&&console.warn(n),s?r.createElement(e,l({image:s},i)):(console.warn("Image not loaded",a),null)}}const P=M((function(e){let{as:t="div",className:a,class:s,style:n,image:i,loading:d="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:v}=e,E=o(e,C);if(!i)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=l({objectFit:y,objectPosition:v,backgroundColor:f},h);const{width:b,height:_,layout:k,images:S,placeholder:T,backgroundColor:x}=i,R=c(b,_,k),{style:O,className:j}=R,Z=o(R,I),$={fallback:void 0,sources:[]};return S.fallback&&($.fallback=l({},S.fallback,{srcSet:S.fallback.srcSet?L(S.fallback.srcSet):void 0})),S.sources&&($.sources=S.sources.map((e=>l({},e,{srcSet:L(e.srcSet)})))),r.createElement(t,l({},Z,{style:l({},O,n,{backgroundColor:f}),className:j+(a?" "+a:"")}),r.createElement(g,{layout:k,width:b,height:_},r.createElement(w,l({},m(T,!1,k,b,_,x,y,v))),r.createElement(N,l({"data-gatsby-image-ssr":"",className:p},E,u("eager"===d,!1,$,d,h)))))})),q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:_,width:q,height:q,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const H=M(Z);H.displayName="StaticImage",H.propTypes=F},2369:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,l=new RegExp("^"+n.source),o=new RegExp(n.source+s.source,"gu"),i=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,l=!1,o=!1;for(let i=0;i<e.length;i++){const c=e[i];n&&t.test(c)?(e=e.slice(0,i)+"-"+e.slice(i),n=!1,o=l,l=!0,i++):l&&o&&a.test(c)?(e=e.slice(0,i-1)+"-"+e.slice(i-1),o=l,l=!1,n=!0):(n=r(c)===c&&s(c)!==c,o=l,l=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(l,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,i.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(i,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},7071:function(e,t,a){var r=a(7294);t.Z=()=>r.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{d:"M3.513 18.998C4.749 15.504 8.082 13 12 13s7.251 2.504 8.487 5.998C18.47 21.442 15.417 23 12 23s-6.47-1.558-8.487-4.002zM12 12c2.21 0 4-2.79 4-5s-1.79-4-4-4-4 1.79-4 4 1.79 5 4 5z",fill:"#FFF"})))},8721:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),s=a(8364),n=a(7422);class l extends r.Component{constructor(e){super(e),this.anchorRef=r.createRef(),this.activeClass=this.props.activeClass,this.hoverTimeout=null,this.state={}}componentDidMount(){this.anchorRef.current&&this.anchorRef.current.addEventListener("mouseout",this.onHoverOut,{passive:!0}),this.anchorRef.current&&this.anchorRef.current.addEventListener("mouseover",this.onHoverIn,{passive:!0})}componentWillUnmount(){clearTimeout(this.hoverTimeout),this.anchorRef.current.removeEventListener("mouseover",this.onHoverIn),this.anchorRef.current.removeEventListener("mouseout",this.onHoverOut)}onHoverIn=()=>{clearTimeout(this.hoverTimeout),this.setState({currentClass:this.activeClass})};onHoverOut=()=>{const e=this;this.hoverTimeout=setTimeout((function(){e.setState({currentClass:""})}),200)};render(){return this.props.children(this)}}var o=a(7071),i="p_bS",c="p_j",u="p_bR",m=a(6149);var d=({authors:e,isPost:t})=>{const{formatMessage:a}=(0,m.Z)();return r.createElement("ul",{className:"p_D"},e.map(((e,m)=>r.createElement(l,{key:m,activeClass:"p_bW"},(l=>r.createElement("li",{key:m,ref:l.anchorRef,className:"p_bQ"},!t&&r.createElement("div",{className:"p_bT"},a(`authors.${e.yamlId}.title`)),t&&r.createElement("div",{className:`p_bV ${l.state.currentClass}`},e.avatar?r.createElement(n.Z,{className:c,image:e.avatar.childImageSharp.gatsbyImageData,alt:e.yamlId}):r.createElement("div",{className:c},r.createElement(o.Z,null)),r.createElement("div",{className:"p_bX"},e.bio?r.createElement("div",{className:"p_bY"},r.createElement("h2",null,a(`authors.${e.yamlId}.title`)),r.createElement("p",null,a(`authors.${e.yamlId}.bio`)),r.createElement("p",null,r.createElement(s.Z,{to:`/authors/${e.yamlId}/`}," ",a("posts.moreByAuthor"))," ",a(`authors.${e.yamlId}.title`),".")):r.createElement(r.Fragment,null,r.createElement("h2",null,a(`authors.${e.yamlId}.title`)),r.createElement("p",null,a("posts.moreByAuthor")," ",r.createElement(s.Z,{to:`/authors/${e.yamlId}/`},a(`authors.${e.yamlId}.title`)))))),e.avatar?r.createElement(s.Z,{to:`/authors/${e.yamlId}/`,className:t?i:u},r.createElement(n.Z,{className:c,image:e.avatar.childImageSharp.gatsbyImageData,alt:e.yamlId})):r.createElement(s.Z,{to:`/authors/${e.yamlId}/`,className:`${t?i:u} p_j`},r.createElement(o.Z,null))))))))}},2023:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),s=a(8721),n=a(8364),l=a(7422),o=a(6149);const i={year:"numeric",month:"short",day:"numeric"};var c=({post:e,i:t,isHome:a})=>{var c,u,m,d;const{intl:p}=(0,o.Z)(),g=e.frontmatter.featured;return r.createElement("article",{className:"r_b1 "+(a&&g&&0==t%6?"r_cl":"")},r.createElement(n.Z,{className:"r_cd",to:`/posts/${e.fields.slug}`},r.createElement(l.Z,{className:"r_b4",alt:e.frontmatter.title,image:e.frontmatter.image.childImageSharp.gatsbyImageData})),r.createElement("div",{className:"r_ch"},r.createElement(n.Z,{className:"r_cf",to:`/posts/${e.fields.slug}`},r.createElement("header",{className:"r_cg"},r.createElement("div",{className:"r_b2"},void 0!==e.frontmatter.tags[0]&&p.formatMessage({id:`tags.${e.frontmatter.tags[0]}.title`})),r.createElement("h2",{className:"r_b3"},e.frontmatter.title)),r.createElement("section",{className:"r_b5"},r.createElement("p",null,e.excerpt))),r.createElement("footer",{className:"r_cj"},r.createElement(s.Z,{authors:e.frontmatter.authors}),r.createElement("div",{className:"r_b6"},r.createElement("span",null,r.createElement(n.Z,{to:`/authors/${null==e||null===(c=e.frontmatter)||void 0===c||null===(u=c.authors[0])||void 0===u?void 0:u.yamlId}/`},p.formatMessage({id:`authors.${null==e||null===(m=e.frontmatter)||void 0===m||null===(d=m.authors[0])||void 0===d?void 0:d.yamlId}.title`}))),r.createElement("span",{className:"r_ck"},r.createElement("time",{dateTime:e.frontmatter.date},p.formatDate(e.frontmatter.date,i))," ",r.createElement("span",{className:"bull"},"•")," ",p.formatNumber(e.timeToRead)," ",p.formatMessage({id:"posts.timeToRead"}))))))}},7422:function(e,t,a){var r=a(7294),s=a(8032);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}t.Z=({className:e,image:t,src:a,alt:l,...o})=>r.createElement(r.Fragment,null,t?r.createElement(s.G,n({className:e,image:t,alt:l},o)):a&&r.createElement("img",n({className:e,src:a,alt:l},o)))}}]);
//# sourceMappingURL=17bb5d8bc11452a147e3aefb44aa8a2eb48f7c9d-8480d44b1577459f8342.js.map