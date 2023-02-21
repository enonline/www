"use strict";(self.webpackChunkghost_casper=self.webpackChunkghost_casper||[]).push([[706],{2880:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(1151),r=n(7294);function o(e){const t=Object.assign({ol:"ol",li:"li",p:"p",h2:"h2",blockquote:"blockquote",strong:"strong"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.ol,null,"\n",r.createElement(t.li,null,"Ghost is designed for ambitious, professional publishers who want to actively build a business around their content. That's who it works best for."),"\n",r.createElement(t.li,null,"The entire platform can be modified and customised to suit your needs. It's very powerful, but does require some knowledge of code. Ghost is not necessarily a good platform for beginners or people who just want a simple personal blog."),"\n",r.createElement(t.li,null,"For the best experience we recommend downloading the Ghost Desktop App for your computer, which is the best way to access your Ghost site on a desktop device."),"\n"),"\n",r.createElement(t.p,null,"Ghost is made by an independent non-profit organisation called the Ghost Foundation. We are 100% self funded by revenue from our Ghost(Pro) service, and every penny we make is re-invested into funding further development of free, open source technology for modern publishing."),"\n",r.createElement(t.p,null,"The version of Ghost you are looking at right now would not have been made possible without generous contributions from the open source community."),"\n",r.createElement(t.h2,null,"Next up, the editor"),"\n",r.createElement(t.p,null,"The main thing you'll want to read about next is probably: the Ghost editor. This is where the good stuff happens."),"\n",r.createElement(t.blockquote,null,"\n",r.createElement(t.p,null,"By the way, once you're done reading, you can simply delete the default ",r.createElement(t.strong,null,"Ghost")," user from your team to remove all of these introductory posts!"),"\n"))}var s=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?r.createElement(t,e,r.createElement(o,e)):o(e)},l=n(8487),c=n(8364),m=n(8721),i=n(6149),u=n(7422),d=n(9670),f=n(5593),h=n(8803),p=n(7943);const E=({post:e,stickyRef:t})=>{const{intl:n,formatMessage:a}=(0,i.Z)();return r.createElement("header",{className:p.mM},r.createElement("div",{className:"inner"},e.frontmatter.tags&&r.createElement("section",{className:p.jB},r.createElement(c.Z,{to:`/tags/${e.frontmatter.tags[0]}/`},a("tags."+e.frontmatter.tags[0]+".title"))),r.createElement("h1",{ref:t,className:p.ON},e.frontmatter.title),e.excerpt&&r.createElement("p",{className:p.Ey},e.excerpt),r.createElement("div",{className:p.C9},r.createElement("section",{className:p.vU},r.createElement(m.Z,{authors:e.frontmatter.authors,isPost:!0}),r.createElement("section",{className:p.bL},r.createElement("h4",{className:"author-name"},e.frontmatter.authors.map(((t,n)=>r.createElement(r.Fragment,{key:n},r.createElement(c.Z,{to:`/authors/${t.id}/`},a(`authors.${t.yamlId}.title`)),n!==e.frontmatter.authors.length-1&&a("posts.seperator")+" ")))),r.createElement("div",null,r.createElement("time",{className:p.tk,dateTime:e.frontmatter.date},n.formatDate(e.frontmatter.date,{year:"numeric",month:"short",day:"numeric"})),r.createElement("span",null,r.createElement("span",{className:"bull"},"•")," ",n.formatNumber(e.timeToRead)+" ",a("posts.timeToRead"))))))))},g=({data:e,children:t})=>{const n=r.useRef(null);return r.createElement(l.Z,{template:"post",stickyRef:n,data:e,readNext:r.createElement(f.Z,{data:e})},r.createElement("div",{className:"inner"},r.createElement("article",{className:p.hm},r.createElement(E,{post:e.post,stickyRef:n}),r.createElement("figure",{className:p.M},r.createElement(u.Z,{className:p.CB,image:e.post.frontmatter.image.childImageSharp.gatsbyImageData,alt:e.post.frontmatter.title})),r.createElement(h.S,null,t)),r.createElement(d.Z,null)))};function y(e){return r.createElement(g,e,r.createElement(s,e))}},9670:function(e,t,n){var a=n(7294),r=n(6149),o=n(3621),s=n(4316);t.Z=()=>{const{formatMessage:e}=(0,r.Z)();return a.createElement(a.Fragment,null,a.createElement("section",{className:s.oJ},a.createElement("h3",{className:s.Ws}," ",e("subscribe.title")),a.createElement("p",{className:s.d7}," ",e("subscribe.desc")),a.createElement(o.Z,null)))}},8803:function(e,t,n){n.d(t,{S:function(){return c}});var a=n(7294),r=n(1151),o=n(694);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const l={a:({href:e,...t})=>/^#/.test(e)||!/^\/(?!\/)/.test(e)||(e=>/^\/static/.test(e))(e)?a.createElement("a",s({href:e,target:"_blank",rel:"noopener noreferrer"},t)):a.createElement(o.Z,s({},t,{to:e}))},c=({children:e})=>a.createElement("section",{className:"r_cm"},a.createElement("div",{className:"r_cl"},a.createElement(r.Zo,{components:l},e)))},5593:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294),r=n(655),o=n(6896),s=n(680);function l(e){var t=(0,o.Z)(),n=t.formatMessage,r=t.textComponent,s=void 0===r?a.Fragment:r,l=e.id,c=e.description,m=e.defaultMessage,i=e.values,u=e.children,d=e.tagName,f=void 0===d?s:d,h=n({id:l,description:c,defaultMessage:m},i,{ignoreTag:e.ignoreTag});return"function"==typeof u?u(Array.isArray(h)?h:[h]):f?a.createElement(f,null,a.Children.toArray(h)):a.createElement(a.Fragment,null,h)}l.displayName="FormattedMessage";var c=a.memo(l,(function(e,t){var n=e.values,a=(0,r._T)(e,["values"]),o=t.values,l=(0,r._T)(t,["values"]);return(0,s.wU)(o,n)&&(0,s.wU)(a,l)}));c.displayName="MemoizedFormattedMessage";var m=c,i=n(8364),u=n(6149),d=n(2023);var f=({data:e})=>{const t=e.relatedPosts,n=e.post.frontmatter.tags[0],{formatMessage:r,intl:o}=(0,u.Z)();return a.createElement("aside",{className:"q_cc"},a.createElement("div",{className:"inner "},a.createElement("div",{className:"q_cd"},a.createElement("article",{className:"q_cf"},a.createElement("header",{className:"q_ch"},a.createElement("h3",null,a.createElement("span",null,r("posts.moreByTag"))," ",a.createElement(i.Z,{to:`/tags/${n}/`},r("tags."+n+".title")))),a.createElement("div",{className:"q_cj"},a.createElement("ul",null,t.nodes.map((e=>a.createElement("li",{key:e.id},a.createElement("h4",null,a.createElement("a",{href:"/welcome/"},e.frontmatter.title)),a.createElement("div",{className:"q_ck"},a.createElement("p",null,a.createElement("time",{dateTime:e.frontmatter.date},o.formatDate(e.frontmatter.date,{year:"numeric",month:"short",day:"numeric"}))," ","– ",o.formatNumber(e.timeToRead)+" ",r("posts.timeToRead")))))))),a.createElement("footer",{className:"q_cg"},a.createElement("a",{href:`/tags/${n}`},a.createElement(m,{id:"posts.seeAll",values:{num:t.totalCount}})))),t.nodes.map((e=>a.createElement(d.Z,{isHome:!1,post:e,i:0,key:e.id}))))))}},7943:function(e,t,n){n.d(t,{C9:function(){return o},CB:function(){return a},Ey:function(){return c},M:function(){return i},ON:function(){return f},bL:function(){return l},hm:function(){return r},jB:function(){return d},mM:function(){return m},tk:function(){return u},vU:function(){return s}});var a="h_P",r="h_N",o="h_H",s="h_J",l="h_L",c="h_F",m="h_z",i="h_G",u="h_C",d="h_B",f="h_D"},1151:function(e,t,n){n.d(t,{Zo:function(){return l},ah:function(){return o}});var a=n(7294);const r=a.createContext({});function o(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function l({components:e,children:t,disableParentContext:n}){let l=o(e);return n&&(l=e||s),a.createElement(r.Provider,{value:l},t)}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-content-file-path-c-users-mohsen-desktop-dev-dev-starters-ghost-starter-www-posts-en-hello-mdx-9503f9e498322e280959.js.map