"use strict";(self.webpackChunkfranks543_website=self.webpackChunkfranks543_website||[]).push([[103],{5203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(7294);var i=t(512),s=t(1944),a=t(5281),o=t(9460),l=t(7846),r=t(2438),c=t(5999),d=t(2244),u=t(5893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,o.C)(),{title:t,description:i,date:a,tags:l,authors:r,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(s.d,{title:t,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var f=t(794),h=t(2212);function v(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:s}=(0,o.C)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!v&&s.length>0?(0,u.jsx)(f.Z,{toc:s,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[g&&(0,u.jsx)(h.Z,{}),(0,u.jsx)(r.Z,{children:t}),(a||c)&&(0,u.jsx)(m,{nextItem:a,prevItem:c})]})}function p(e){const n=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(s.FG,{className:(0,i.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},794:(e,n,t)=>{t.d(n,{Z:()=>j});var i=t(7294),s=t(512),a=t(6668);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...s}=e;t>=0?n[t].children.push(s):i.push(s)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:a,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let s=n;s<=t;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:o}),r=c(l,{anchorTopOffset:t.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(9960),g=t(5893);function f(e){let{toc:n,className:t,linkClassName:i,isChild:s}=e;return n.length?(0,g.jsx)("ul",{className:s?void 0:t,children:n.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(m.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(f);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const f=(0,a.L)(),v=c??f.tableOfContents.minHeadingLevel,p=d??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>l({toc:o(n),minHeadingLevel:t,maxHeadingLevel:s})),[n,t,s])}({toc:n,minHeadingLevel:v,maxHeadingLevel:p});return u((0,i.useMemo)((()=>{if(s&&r)return{linkClassName:s,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:p}}),[s,r,v,p])),(0,g.jsx)(h,{toc:x,className:t,linkClassName:s,...m})}const p={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},x="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function j(e){let{className:n,...t}=e;return(0,g.jsx)("div",{className:(0,s.Z)(p.tableOfContents,"thin-scrollbar",n),children:(0,g.jsx)(v,{...t,linkClassName:x,linkActiveClassName:b})})}},2212:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var i=t(512),s=t(5999),a=t(5742),o=t(5893);function l(){return(0,o.jsx)(s.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(s.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(a.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){let{className:n}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);