"use strict";(self.webpackChunkfranks543_website=self.webpackChunkfranks543_website||[]).push([["2998"],{7912:function(e,t,n){n.r(t),n.d(t,{default:()=>b});var r=n("5893");n("7294");var i=n("7026"),l=n("2743"),o=n("4681"),s=n("4183"),a=n("5571"),c=n("1220"),u=n("6025"),d=n("790");function f(e){let{nextItem:t,prevItem:n}=e;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,r.jsx)(d.Z,{...n,subLabel:(0,r.jsx)(u.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer post"})}),t&&(0,r.jsx)(d.Z,{...t,subLabel:(0,r.jsx)(u.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older post"}),isNext:!0})]})}function h(){let{assets:e,metadata:t}=(0,s.nO)(),{title:n,description:i,date:o,tags:a,authors:c,frontMatter:u}=t,{keywords:d}=u,f=e.image??u.image;return(0,r.jsxs)(l.d,{title:u.title_meta??n,description:i,keywords:d,image:f,children:[(0,r.jsx)("meta",{property:"og:type",content:"article"}),(0,r.jsx)("meta",{property:"article:published_time",content:o}),c.some(e=>e.url)&&(0,r.jsx)("meta",{property:"article:author",content:c.map(e=>e.url).filter(Boolean).join(",")}),a.length>0&&(0,r.jsx)("meta",{property:"article:tag",content:a.map(e=>e.label).join(",")})]})}var m=n("4819");function p(){let e=(0,s.iZ)();return(0,r.jsx)(m.Z,{children:(0,r.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n("101"),g=n("8813");function v(e){let{sidebar:t,children:n}=e,{metadata:i,toc:l}=(0,s.nO)(),{nextItem:o,prevItem:u,frontMatter:d}=i,{hide_table_of_contents:h,toc_min_heading_level:m,toc_max_heading_level:p}=d;return(0,r.jsxs)(a.Z,{sidebar:t,toc:!h&&l.length>0?(0,r.jsx)(x.Z,{toc:l,minHeadingLevel:m,maxHeadingLevel:p}):void 0,children:[(0,r.jsx)(g.Z,{metadata:i}),(0,r.jsx)(c.Z,{children:n}),(o||u)&&(0,r.jsx)(f,{nextItem:o,prevItem:u})]})}function b(e){let t=e.content;return(0,r.jsx)(s.n4,{content:e.content,isBlogPostPage:!0,children:(0,r.jsxs)(l.FG,{className:(0,i.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage),children:[(0,r.jsx)(h,{}),(0,r.jsx)(p,{}),(0,r.jsx)(v,{sidebar:e.sidebar,children:(0,r.jsx)(t,{})})]})})}},5133:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(5893);n(7294);var i=n(7026),l=n(202),o=n(4681),s=n(5094);function a(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.cI,{}),className:(0,i.Z)(t,o.k.common.unlistedBanner),children:(0,r.jsx)(l.eU,{})})}function c(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.T$,{}),(0,r.jsx)(a,{...e})]})}},8813:function(e,t,n){n.d(t,{Z:()=>u});var r=n("5893");n("7294");var i=n("7026"),l=n("202"),o=n("4681"),s=n("5094");function a(e){let{className:t}=e;return(0,r.jsx)(s.Z,{type:"caution",title:(0,r.jsx)(l.ht,{}),className:(0,i.Z)(t,o.k.common.draftBanner),children:(0,r.jsx)(l.xo,{})})}var c=n("5133");function u(e){let{metadata:t}=e,{unlisted:n,frontMatter:i}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||i.unlisted)&&(0,r.jsx)(c.Z,{}),i.draft&&(0,r.jsx)(a,{})]})}},101:function(e,t,n){n.d(t,{Z:()=>f});var r=n("5893"),i=n("7294"),l=n("7026"),o=n("140");function s(e){let t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}var a=n("3012");let c=i.memo(function e(t){let{toc:n,className:i,linkClassName:l,isChild:o}=t;return n.length?(0,r.jsx)("ul",{className:o?void 0:i,children:n.map(t=>(0,r.jsxs)("li",{children:[(0,r.jsx)(a.Z,{to:`#${t.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,r.jsx)(e,{isChild:!0,toc:t.children,className:i,linkClassName:l})]},t.id))}):null});function u(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:d,...f}=e,h=(0,o.L)(),m=u??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:r,maxHeadingLevel:i}=t;return n.flatMap(t=>{var n;let l=e({toc:t.children,minHeadingLevel:r,maxHeadingLevel:i});return(n=t).level>=r&&n.level<=i?[{...t,children:l}]:l})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t});let r=[];return t.forEach(e=>{let{parentIndex:n,...i}=e;n>=0?t[n].children.push(i):r.push(i)}),r}(t),minHeadingLevel:n,maxHeadingLevel:r}),[t,n,r])}({toc:t,minHeadingLevel:m,maxHeadingLevel:p});return!function(e){let t=(0,i.useRef)(void 0),n=function(){let e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,i.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,i.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:o}=e;function a(){var e;let a=(e=r,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,r=e.find(e=>s(e).top>=n);if(r){var i;return(i=s(r)).top>0&&i.bottom<window.innerHeight/2?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,r=[];for(let e=t;e<=n;e+=1)r.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),{anchorTopOffset:n.current}),u=a.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});a.forEach(e=>{var n;n=e,e===u?(t.current&&t.current!==n&&t.current.classList.remove(i),n.classList.add(i),t.current=n):n.classList.remove(i)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,n])}((0,i.useMemo)(()=>{if(l&&a)return{linkClassName:l,linkActiveClassName:a,minHeadingLevel:m,maxHeadingLevel:p}},[l,a,m,p])),(0,r.jsx)(c,{toc:x,className:n,linkClassName:l,...f})}let d="tableOfContents_bqdL";function f(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,l.Z)(d,"thin-scrollbar",t),children:(0,r.jsx)(u,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},202:function(e,t,n){n.d(t,{T$:function(){return a},cI:function(){return o},eU:function(){return s},ht:function(){return c},xo:function(){return u}});var r=n(5893);n(7294);var i=n(6025),l=n(4819);function o(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function s(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function a(){return(0,r.jsx)(l.Z,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);