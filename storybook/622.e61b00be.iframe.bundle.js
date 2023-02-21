"use strict";(self.webpackChunkghost_casper=self.webpackChunkghost_casper||[]).push([[622],{"./src/components/Sections/PostCard/PostCard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>PostCard_PostCard});var react=__webpack_require__("./node_modules/react/index.js"),AuthorList=__webpack_require__("./src/components/Sections/AuthorList/AuthorList.tsx"),Link=__webpack_require__("./src/_i18n/components/Link.tsx"),ImgSharp=__webpack_require__("./src/components/utils/ImgSharp/ImgSharp.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PostCard_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Sections/PostCard/PostCard.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PostCard_module.ZP,options);PostCard_module.ZP&&PostCard_module.ZP.locals&&PostCard_module.ZP.locals;var useIntlHelper=__webpack_require__("./src/_i18n/helpers/useIntlHelper.tsx"),PostCard_options={year:"numeric",month:"short",day:"numeric"};const PostCard_PostCard=function PostCard(_ref){var _post$frontmatter,_post$frontmatter$aut,_post$frontmatter2,_post$frontmatter2$au,post=_ref.post,i=_ref.i,isHome=_ref.isHome,intl=(0,useIntlHelper.Z)().intl,isFeatured=post.frontmatter.featured;return react.createElement("article",{className:PostCard_module.k8+" "+(isHome&&isFeatured&&0==i%6&&PostCard_module.Y3||"")},react.createElement(Link.Z,{className:PostCard_module.tC,to:"/posts/".concat(post.fields.slug)},react.createElement(ImgSharp.Z,{className:PostCard_module.s0,alt:post.frontmatter.title,image:post.frontmatter.image.childImageSharp.gatsbyImageData})),react.createElement("div",{className:PostCard_module.xE},react.createElement(Link.Z,{className:PostCard_module.G5,to:"/posts/".concat(post.fields.slug)},react.createElement("header",{className:PostCard_module.we},react.createElement("div",{className:PostCard_module.Xl},void 0!==post.frontmatter.tags[0]&&intl.formatMessage({id:"tags.".concat(post.frontmatter.tags[0],".title")})),react.createElement("h2",{className:PostCard_module.Kg},post.frontmatter.title)),react.createElement("section",{className:PostCard_module.QN},react.createElement("p",null,post.excerpt))),react.createElement("footer",{className:PostCard_module.YA},react.createElement(AuthorList.Z,{authors:post.frontmatter.authors}),react.createElement("div",{className:PostCard_module.Qw},react.createElement("span",null,react.createElement(Link.Z,{to:"/authors/".concat(null==post||null===(_post$frontmatter=post.frontmatter)||void 0===_post$frontmatter||null===(_post$frontmatter$aut=_post$frontmatter.authors[0])||void 0===_post$frontmatter$aut?void 0:_post$frontmatter$aut.yamlId,"/")},intl.formatMessage({id:"authors.".concat(null==post||null===(_post$frontmatter2=post.frontmatter)||void 0===_post$frontmatter2||null===(_post$frontmatter2$au=_post$frontmatter2.authors[0])||void 0===_post$frontmatter2$au?void 0:_post$frontmatter2$au.yamlId,".title")}))),react.createElement("span",{className:PostCard_module.Fj},react.createElement("time",{dateTime:post.frontmatter.date},intl.formatDate(post.frontmatter.date,PostCard_options))," ",react.createElement("span",{className:"bull"},"•")," ",intl.formatNumber(post.timeToRead)," ",intl.formatMessage({id:"posts.timeToRead"}))))))}},"./src/components/Sections/PostFeed/PostFeed.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>PostFeed});var react=__webpack_require__("./node_modules/react/index.js"),PostCard=__webpack_require__("./src/components/Sections/PostCard/PostCard.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),PostFeed_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Sections/PostFeed/PostFeed.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(PostFeed_module.ZP,options);PostFeed_module.ZP&&PostFeed_module.ZP.locals&&PostFeed_module.ZP.locals;var PostFeed=function PostFeed(_ref){var _data$posts,data=_ref.data,isHome=_ref.isHome;return react.createElement("div",{className:PostFeed_module.xu},react.createElement("div",{className:PostFeed_module.P4},(null==data||null===(_data$posts=data.posts)||void 0===_data$posts?void 0:_data$posts.nodes).map((function(post,i){return react.createElement(PostCard.Z,{post,i,key:i,isHome})}))))}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Sections/PostCard/PostCard.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Fj:()=>postCardBylineDate,G5:()=>postCardContentLink,Kg:()=>postCardTitle,QN:()=>postCardExcerpt,Qw:()=>postCardBylineContent,Xl:()=>postCardPrimaryTag,Y3:()=>postCardLarge,YA:()=>postCardMeta,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,k8:()=>postCard,s0:()=>postCardImage,tC:()=>postCardImageLink,we:()=>postCardHeader,xE:()=>postCardContent});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".PostCard-module__postCard___dt7sq{position:relative;flex:1 1 301px;display:flex;flex-direction:column;overflow:hidden;margin:0 0 40px;padding:0 20px 40px;min-height:220px;border-bottom:1px solid var(--lightgrey);background-size:cover}.PostCard-module__postCardImageLink___ylPiN{position:relative;display:block;overflow:hidden;border-radius:3px}.PostCard-module__postCardImage___PzOHx{width:100%;height:200px;background:var(--lightgrey) no-repeat center center;object-fit:cover}.PostCard-module__postCardContentLink___VbLCV{position:relative;display:block;color:var(--darkgrey)}.PostCard-module__postCardContentLink___VbLCV:hover{text-decoration:none}.PostCard-module__postCardHeader___tm4HJ{margin:15px 0 0}.PostCard-module__no-image___WjSTB .PostCard-module__postCardHeader___tm4HJ{margin-top:0}.PostCard-module__postCardPrimaryTag___R16qm{margin:0 0 .2em;color:var(--blue);font-size:1.2rem;font-weight:500;letter-spacing:.2px;text-transform:uppercase}.PostCard-module__postCardTitle___BoypK{margin:0 0 .4em;line-height:1.15em;transition:color .2s ease-in-out}.PostCard-module__no-image___WjSTB .PostCard-module__postCardTitle___BoypK{margin-top:0}.PostCard-module__postCardContent___w8ETR{flex-grow:1;display:flex;flex-direction:column}.PostCard-module__postCardExcerpt___CfcYu{max-width:56em;color:var(--midgrey);font-family:EOBody,sans-serif}.PostCard-module__postCardExcerpt___CfcYu p{margin-bottom:1em}.PostCard-module__postCardMeta___qL5WJ{display:flex;align-items:flex-start;padding:0}.PostCard-module__postCardBylineContent___NdYaP{flex:1 1 50%;display:flex;flex-direction:column;margin:2px 0 0 6px;color:var(--midgrey);font-size:1.2rem;line-height:1.4em;font-weight:400;letter-spacing:.2px;text-transform:uppercase}.PostCard-module__postCardBylineContent___NdYaP span{margin:0}.PostCard-module__postCardBylineContent___NdYaP a{color:var(--darkgrey);font-weight:600}.PostCard-module__postCardBylineDate___Mdx87{font-size:1.2rem}.PostCard-module__postCardBylineDate___Mdx87 .PostCard-module__bull___C290m{display:inline-block;margin:0 4px;opacity:.6}@media(min-width: 795px){.PostCard-module__postCardLarge___xmDeH{flex:1 1 100%;flex-direction:row;padding-bottom:40px;min-height:280px;border-top:0}.PostCard-module__postCardLarge___xmDeH:hover{border-bottom-color:var(--lightgrey)}.PostCard-module__postCardLarge___xmDeH:not(.PostCard-module__no-image___WjSTB) .PostCard-module__postCardHeader___tm4HJ{margin-top:0}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardImageLink___ylPiN{position:relative;flex:1 1 auto;margin-bottom:0;min-height:380px}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardImage___PzOHx{position:absolute;width:100%;height:100%}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardContent___w8ETR{flex:0 1 361px;justify-content:center}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardTitle___BoypK{margin-top:0;font-size:3.2rem}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardContentLink___VbLCV{padding:0 0 0 40px}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardMeta___qL5WJ{padding:0 0 0 40px}.PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardExcerpt___CfcYu p{margin-bottom:1.5em;font-size:1.8rem;line-height:1.5em}}@media(max-width: 1170px){.PostCard-module__postCard___dt7sq{margin-bottom:5vw}}@media(max-width: 650px){.PostCard-module__postCard___dt7sq{margin-bottom:5vw}}@media(max-width: 500px){.PostCard-module__postCardTitle___BoypK{font-size:1.9rem}.PostCard-module__postCardExcerpt___CfcYu{font-size:1.6rem}}html[theme=dark] .PostCard-module__postCard___dt7sq,html[theme=dark] .PostCard-module__postCard___dt7sq:hover{border-bottom-color:var(--darkmode)}html[theme=dark] .PostCard-module__author-profile-image___e0e7J{background:var(--darkmode)}html[theme=dark] .PostCard-module__postCardBylineContent___NdYaP a{color:rgba(255,255,255,.75)}html[theme=dark] .PostCard-module__postCardBylineContent___NdYaP a:hover{color:#fff}html[theme=dark] .PostCard-module__postCardImage___PzOHx{background:var(--darkmode)}html[theme=dark] .PostCard-module__postCardExcerpt___CfcYu{color:var(--midgrey)}html[theme=dark] .PostCard-module__postCardTitle___BoypK{color:rgba(255,255,255,.85)}@media(min-width: 795px){html[dir=rtl] .PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardContentLink___VbLCV{padding:0 40px 0 0}html[dir=rtl] .PostCard-module__postCardLarge___xmDeH .PostCard-module__postCardMeta___qL5WJ{padding:0 40px 0 0}}","",{version:3,sources:["webpack://./src/components/Sections/PostCard/PostCard.module.scss"],names:[],mappings:"AAAA,mCACE,iBAAA,CACA,cAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CACA,eAAA,CACA,mBAAA,CACA,gBAAA,CACA,wCAAA,CACA,qBAAA,CAGF,4CACE,iBAAA,CACA,aAAA,CACA,eAAA,CACA,iBAAA,CAGF,wCACE,UAAA,CACA,YAAA,CACA,mDAAA,CACA,gBAAA,CAGF,8CACE,iBAAA,CACA,aAAA,CACA,qBAAA,CAGF,oDACE,oBAAA,CAGF,yCACE,eAAA,CAGF,4EACE,YAAA,CAGF,6CACE,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,eAAA,CACA,mBAAA,CACA,wBAAA,CAGF,wCACE,eAAA,CACA,kBAAA,CACA,gCAAA,CAGF,2EACE,YAAA,CAGF,0CACE,WAAA,CACA,YAAA,CACA,qBAAA,CAGF,0CACE,cAAA,CACA,oBAAA,CACA,6BAAA,CAGF,4CACE,iBAAA,CAGF,uCACE,YAAA,CACA,sBAAA,CACA,SAAA,CAGF,gDACE,YAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,oBAAA,CACA,gBAAA,CACA,iBAAA,CACA,eAAA,CACA,mBAAA,CACA,wBAAA,CAGF,qDACE,QAAA,CAGF,kDACE,qBAAA,CACA,eAAA,CAGF,6CACE,gBAAA,CAGF,4EACE,oBAAA,CACA,YAAA,CACA,UAAA,CAWF,yBACE,wCACE,aAAA,CACA,kBAAA,CACA,mBAAA,CACA,gBAAA,CACA,YAAA,CAGF,8CACE,oCAAA,CAGF,yHACE,YAAA,CAGF,oFACE,iBAAA,CACA,aAAA,CACA,eAAA,CACA,gBAAA,CAGF,gFACE,iBAAA,CACA,UAAA,CACA,WAAA,CAGF,kFACE,cAAA,CACA,sBAAA,CAGF,gFACE,YAAA,CACA,gBAAA,CAGF,sFACE,kBAAA,CAGF,+EACE,kBAAA,CAGF,oFACE,mBAAA,CACA,gBAAA,CACA,iBAAA,CAAA,CAKJ,0BACE,mCACE,iBAAA,CAAA,CAIJ,yBACE,mCACE,iBAAA,CAAA,CAIJ,yBACE,wCACE,gBAAA,CAGF,0CACE,gBAAA,CAAA,CAKF,8GAEE,mCAAA,CAGF,gEACE,0BAAA,CAGF,mEACE,2BAAA,CAGF,yEACE,UAAA,CAGF,yDACE,0BAAA,CAGF,2DACE,oBAAA,CAGF,yDACE,2BAAA,CAKF,yBACE,oGACE,kBAAA,CAGF,6FACE,kBAAA,CAAA",sourcesContent:[".postCard {\n  position: relative;\n  flex: 1 1 301px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  margin: 0 0 40px;\n  padding: 0 20px 40px;\n  min-height: 220px;\n  border-bottom: 1px solid var(--lightgrey);\n  background-size: cover;\n}\n\n.postCardImageLink {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  border-radius: 3px;\n}\n\n.postCardImage {\n  width: 100%;\n  height: 200px;\n  background: var(--lightgrey) no-repeat center center;\n  object-fit: cover;\n}\n\n.postCardContentLink {\n  position: relative;\n  display: block;\n  color: var(--darkgrey);\n}\n\n.postCardContentLink:hover {\n  text-decoration: none;\n}\n\n.postCardHeader {\n  margin: 15px 0 0;\n}\n\n.no-image .postCardHeader {\n  margin-top: 0;\n}\n\n.postCardPrimaryTag {\n  margin: 0 0 0.2em;\n  color: var(--blue);\n  font-size: 1.2rem;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n}\n\n.postCardTitle {\n  margin: 0 0 0.4em;\n  line-height: 1.15em;\n  transition: color 0.2s ease-in-out;\n}\n\n.no-image .postCardTitle {\n  margin-top: 0;\n}\n\n.postCardContent {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.postCardExcerpt {\n  max-width: 56em;\n  color: var(--midgrey);\n  font-family: EOBody, sans-serif;\n}\n\n.postCardExcerpt p {\n  margin-bottom: 1em;\n}\n\n.postCardMeta {\n  display: flex;\n  align-items: flex-start;\n  padding: 0;\n}\n\n.postCardBylineContent {\n  flex: 1 1 50%;\n  display: flex;\n  flex-direction: column;\n  margin: 2px 0 0 6px;\n  color: var(--midgrey);\n  font-size: 1.2rem;\n  line-height: 1.4em;\n  font-weight: 400;\n  letter-spacing: 0.2px;\n  text-transform: uppercase;\n}\n\n.postCardBylineContent span {\n  margin: 0;\n}\n\n.postCardBylineContent a {\n  color: var(--darkgrey);\n  font-weight: 600;\n}\n\n.postCardBylineDate {\n  font-size: 1.2rem;\n}\n\n.postCardBylineDate .bull {\n  display: inline-block;\n  margin: 0 4px;\n  opacity: 0.6;\n}\n\n/* Special Styling for home page grid (below):\n\nThe first post in the list is styled to be bigger than the others and take over\nthe full width of the grid to give it more emphasis. Wrapped in a media query to\nmake sure this only happens on large viewports / desktop-ish devices.\n\n */\n\n@media (min-width: 795px) {\n  .postCardLarge {\n    flex: 1 1 100%;\n    flex-direction: row;\n    padding-bottom: 40px;\n    min-height: 280px;\n    border-top: 0;\n  }\n\n  .postCardLarge:hover {\n    border-bottom-color: var(--lightgrey);\n  }\n\n  .postCardLarge:not(.no-image) .postCardHeader {\n    margin-top: 0;\n  }\n\n  .postCardLarge .postCardImageLink {\n    position: relative;\n    flex: 1 1 auto;\n    margin-bottom: 0;\n    min-height: 380px;\n  }\n\n  .postCardLarge .postCardImage {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n  }\n\n  .postCardLarge .postCardContent {\n    flex: 0 1 361px;\n    justify-content: center;\n  }\n\n  .postCardLarge .postCardTitle {\n    margin-top: 0;\n    font-size: 3.2rem;\n  }\n\n  .postCardLarge .postCardContentLink {\n    padding: 0 0 0 40px;\n  }\n\n  .postCardLarge .postCardMeta {\n    padding: 0 0 0 40px;\n  }\n\n  .postCardLarge .postCardExcerpt p {\n    margin-bottom: 1.5em;\n    font-size: 1.8rem;\n    line-height: 1.5em;\n  }\n}\n\n/* Adjust some margins for smaller screens */\n@media (max-width: 1170px) {\n  .postCard {\n    margin-bottom: 5vw;\n  }\n}\n\n@media (max-width: 650px) {\n  .postCard {\n    margin-bottom: 5vw;\n  }\n}\n\n@media (max-width: 500px) {\n  .postCardTitle {\n    font-size: 1.9rem;\n  }\n\n  .postCardExcerpt {\n    font-size: 1.6rem;\n  }\n}\n\nhtml[theme='dark'] {\n  .postCard,\n  .postCard:hover {\n    border-bottom-color: var(--darkmode);\n  }\n\n  .author-profile-image {\n    background: var(--darkmode);\n  }\n\n  .postCardBylineContent a {\n    color: rgb(255 255 255 / 75%);\n  }\n\n  .postCardBylineContent a:hover {\n    color: #fff;\n  }\n\n  .postCardImage {\n    background: var(--darkmode);\n  }\n\n  .postCardExcerpt {\n    color: var(--midgrey);\n  }\n\n  .postCardTitle {\n    color: rgb(255 255 255 / 85%);\n  }\n}\n\nhtml[dir='rtl'] {\n  @media (min-width: 795px) {\n    .postCardLarge .postCardContentLink {\n      padding: 0 40px 0 0;\n    }\n\n    .postCardLarge .postCardMeta {\n      padding: 0 40px 0 0;\n    }\n  }\n}\n"],sourceRoot:""}]);var postCard="PostCard-module__postCard___dt7sq",postCardImageLink="PostCard-module__postCardImageLink___ylPiN",postCardImage="PostCard-module__postCardImage___PzOHx",postCardContentLink="PostCard-module__postCardContentLink___VbLCV",postCardHeader="PostCard-module__postCardHeader___tm4HJ",postCardPrimaryTag="PostCard-module__postCardPrimaryTag___R16qm",postCardTitle="PostCard-module__postCardTitle___BoypK",postCardContent="PostCard-module__postCardContent___w8ETR",postCardExcerpt="PostCard-module__postCardExcerpt___CfcYu",postCardMeta="PostCard-module__postCardMeta___qL5WJ",postCardBylineContent="PostCard-module__postCardBylineContent___NdYaP",postCardBylineDate="PostCard-module__postCardBylineDate___Mdx87",postCardLarge="PostCard-module__postCardLarge___xmDeH";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[12].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/components/Sections/PostFeed/PostFeed.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P4:()=>postFeed,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,xu:()=>posts});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".PostFeed-module__posts____sb6f{overflow-x:hidden}.PostFeed-module__postFeed____zxqf{position:relative;display:flex;flex-wrap:wrap;margin:0 -20px;padding:50px 0 0}@media(max-width: 650px){.PostFeed-module__postFeed____zxqf{padding-top:5vw}}@media(min-width: 900px){.PostFeed-module__postFeed____zxqf,.PostFeed-module__postFeed____zxqf,.PostFeed-module__postFeed____zxqf{padding:40px 0 5vw;border-top-left-radius:3px;border-top-right-radius:3px}}","",{version:3,sources:["webpack://./src/components/Sections/PostFeed/PostFeed.module.scss"],names:[],mappings:"AAGA,gCACE,iBAAA,CAGF,mCACE,iBAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA,CACA,gBAAA,CAIF,yBACE,mCACE,eAAA,CAAA,CAGJ,yBACE,yGAGE,kBAAA,CACA,0BAAA,CACA,2BAAA,CAAA",sourcesContent:["/* 6. Post Feed\n/* ---------------------------------------------------------- */\n\n.posts {\n  overflow-x: hidden;\n}\n\n.postFeed {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 -20px;\n  padding: 50px 0 0;\n  //background: #fff;\n}\n\n@media (max-width: 650px) {\n  .postFeed {\n    padding-top: 5vw;\n  }\n}\n@media (min-width: 900px) {\n  .postFeed,\n  .postFeed,\n  .postFeed {\n    padding: 40px 0 5vw;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n  }\n}\n\n/*\n.postFeed {\n\t//background: var(--darkmode);\n}\nhtml[theme='dark'] {\n\n} */\n"],sourceRoot:""}]);var posts="PostFeed-module__posts____sb6f",postFeed="PostFeed-module__postFeed____zxqf";const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);