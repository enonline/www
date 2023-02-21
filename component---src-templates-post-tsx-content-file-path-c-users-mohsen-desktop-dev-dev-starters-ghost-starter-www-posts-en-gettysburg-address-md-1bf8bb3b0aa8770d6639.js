"use strict";(self.webpackChunkghost_casper=self.webpackChunkghost_casper||[]).push([[424],{6478:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(1151),r=a(7294);function o(e){const t=Object.assign({p:"p"},(0,n.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"Fourscore and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal."),"\n",r.createElement(t.p,null,"Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this."),"\n",r.createElement(t.p,null,"But, in a larger sense, we can not dedicate-we can not consecrate-we can not hallow-this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us-that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion-that we here highly resolve that these dead shall not have died in vain-that this nation, under God, shall have a new birth of freedom-and that government of the people, by the people, for the people shall not perish from the earth."))}var s=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},l=a(8487),c=a(8364),i=a(8721),m=a(6149),u=a(7422),h=a(9670),d=a(5593),f=a(8803),g=a(7943);const p=({post:e,stickyRef:t})=>{const{intl:a,formatMessage:n}=(0,m.Z)();return r.createElement("header",{className:g.mM},r.createElement("div",{className:"inner"},e.frontmatter.tags&&r.createElement("section",{className:g.jB},r.createElement(c.Z,{to:`/tags/${e.frontmatter.tags[0]}/`},n("tags."+e.frontmatter.tags[0]+".title"))),r.createElement("h1",{ref:t,className:g.ON},e.frontmatter.title),e.excerpt&&r.createElement("p",{className:g.Ey},e.excerpt),r.createElement("div",{className:g.C9},r.createElement("section",{className:g.vU},r.createElement(i.Z,{authors:e.frontmatter.authors,isPost:!0}),r.createElement("section",{className:g.bL},r.createElement("h4",{className:"author-name"},e.frontmatter.authors.map(((t,a)=>r.createElement(r.Fragment,{key:a},r.createElement(c.Z,{to:`/authors/${t.id}/`},n(`authors.${t.yamlId}.title`)),a!==e.frontmatter.authors.length-1&&n("posts.seperator")+" ")))),r.createElement("div",null,r.createElement("time",{className:g.tk,dateTime:e.frontmatter.date},a.formatDate(e.frontmatter.date,{year:"numeric",month:"short",day:"numeric"})),r.createElement("span",null,r.createElement("span",{className:"bull"},"•")," ",a.formatNumber(e.timeToRead)+" ",n("posts.timeToRead"))))))))},E=({data:e,children:t})=>{const a=r.useRef(null);return r.createElement(l.Z,{template:"post",stickyRef:a,data:e,readNext:r.createElement(d.Z,{data:e})},r.createElement("div",{className:"inner"},r.createElement("article",{className:g.hm},r.createElement(p,{post:e.post,stickyRef:a}),r.createElement("figure",{className:g.M},r.createElement(u.Z,{className:g.CB,image:e.post.frontmatter.image.childImageSharp.gatsbyImageData,alt:e.post.frontmatter.title})),r.createElement(f.S,null,t)),r.createElement(h.Z,null)))};function v(e){return r.createElement(E,e,r.createElement(s,e))}},9670:function(e,t,a){var n=a(7294),r=a(6149),o=a(3621),s=a(4316);t.Z=()=>{const{formatMessage:e}=(0,r.Z)();return n.createElement(n.Fragment,null,n.createElement("section",{className:s.oJ},n.createElement("h3",{className:s.Ws}," ",e("subscribe.title")),n.createElement("p",{className:s.d7}," ",e("subscribe.desc")),n.createElement(o.Z,null)))}},8803:function(e,t,a){a.d(t,{S:function(){return c}});var n=a(7294),r=a(1151),o=a(694);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}const l={a:({href:e,...t})=>/^#/.test(e)||!/^\/(?!\/)/.test(e)||(e=>/^\/static/.test(e))(e)?n.createElement("a",s({href:e,target:"_blank",rel:"noopener noreferrer"},t)):n.createElement(o.Z,s({},t,{to:e}))},c=({children:e})=>n.createElement("section",{className:"r_cm"},n.createElement("div",{className:"r_cl"},n.createElement(r.Zo,{components:l},e)))},5593:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),r=a(655),o=a(6896),s=a(680);function l(e){var t=(0,o.Z)(),a=t.formatMessage,r=t.textComponent,s=void 0===r?n.Fragment:r,l=e.id,c=e.description,i=e.defaultMessage,m=e.values,u=e.children,h=e.tagName,d=void 0===h?s:h,f=a({id:l,description:c,defaultMessage:i},m,{ignoreTag:e.ignoreTag});return"function"==typeof u?u(Array.isArray(f)?f:[f]):d?n.createElement(d,null,n.Children.toArray(f)):n.createElement(n.Fragment,null,f)}l.displayName="FormattedMessage";var c=n.memo(l,(function(e,t){var a=e.values,n=(0,r._T)(e,["values"]),o=t.values,l=(0,r._T)(t,["values"]);return(0,s.wU)(o,a)&&(0,s.wU)(n,l)}));c.displayName="MemoizedFormattedMessage";var i=c,m=a(8364),u=a(6149),h=a(2023);var d=({data:e})=>{const t=e.relatedPosts,a=e.post.frontmatter.tags[0],{formatMessage:r,intl:o}=(0,u.Z)();return n.createElement("aside",{className:"q_cc"},n.createElement("div",{className:"inner "},n.createElement("div",{className:"q_cd"},n.createElement("article",{className:"q_cf"},n.createElement("header",{className:"q_ch"},n.createElement("h3",null,n.createElement("span",null,r("posts.moreByTag"))," ",n.createElement(m.Z,{to:`/tags/${a}/`},r("tags."+a+".title")))),n.createElement("div",{className:"q_cj"},n.createElement("ul",null,t.nodes.map((e=>n.createElement("li",{key:e.id},n.createElement("h4",null,n.createElement("a",{href:"/welcome/"},e.frontmatter.title)),n.createElement("div",{className:"q_ck"},n.createElement("p",null,n.createElement("time",{dateTime:e.frontmatter.date},o.formatDate(e.frontmatter.date,{year:"numeric",month:"short",day:"numeric"}))," ","– ",o.formatNumber(e.timeToRead)+" ",r("posts.timeToRead")))))))),n.createElement("footer",{className:"q_cg"},n.createElement("a",{href:`/tags/${a}`},n.createElement(i,{id:"posts.seeAll",values:{num:t.totalCount}})))),t.nodes.map((e=>n.createElement(h.Z,{isHome:!1,post:e,i:0,key:e.id}))))))}},7943:function(e,t,a){a.d(t,{C9:function(){return o},CB:function(){return n},Ey:function(){return c},M:function(){return m},ON:function(){return d},bL:function(){return l},hm:function(){return r},jB:function(){return h},mM:function(){return i},tk:function(){return u},vU:function(){return s}});var n="h_P",r="h_N",o="h_H",s="h_J",l="h_L",c="h_F",i="h_z",m="h_G",u="h_C",h="h_B",d="h_D"},1151:function(e,t,a){a.d(t,{Zo:function(){return l},ah:function(){return o}});var n=a(7294);const r=n.createContext({});function o(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function l({components:e,children:t,disableParentContext:a}){let l=o(e);return a&&(l=e||s),n.createElement(r.Provider,{value:l},t)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-c-users-mohsen-desktop-dev-dev-starters-ghost-starter-www-posts-en-gettysburg-address-md-1bf8bb3b0aa8770d6639.js.map