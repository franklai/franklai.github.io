"use strict";(self.webpackChunkfranks543_website=self.webpackChunkfranks543_website||[]).push([[6490],{6834:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>_,contentTitle:()=>I,default:()=>q,frontMatter:()=>V,metadata:()=>A,toc:()=>S});var n=t(4848),l=t(8453),a=t(6540),i=t(4164),s=t(3104),o=t(6347),c=t(205),u=t(7485),h=t(1682),d=t(9466);function f(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??function(e){return f(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:l}}=e;return{value:r,label:t,attributes:n,default:l}}))}(t);return function(e){const r=(0,h.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function x(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function j(e){let{queryString:r=!1,groupId:t}=e;const n=(0,o.W6)(),l=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,u.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const r=new URLSearchParams(n.location.search);r.set(l,e),n.replace({...n.location,search:r.toString()})}),[l,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,l=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:l}))),[o,u]=j({queryString:t,groupId:n}),[h,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,l]=(0,d.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:n}),m=(()=>{const e=o??h;return x({value:e,tabValues:l})?e:null})();(0,c.A)((()=>{m&&s(m)}),[m]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:r,block:t,selectedValue:l,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),h=e=>{const r=e.currentTarget,t=c.indexOf(r),n=o[t].value;n!==l&&(u(r),a(n))},d=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;r=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;r=c[t]??c[c.length-1];break}}r?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},r),children:o.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:l===r?0:-1,"aria-selected":l===r,ref:e=>c.push(e),onKeyDown:d,onClick:h,...a,className:(0,i.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":l===r}),children:t??r},r)}))})}function k(e){let{lazy:r,children:t,selectedValue:l}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=i.find((e=>e.props.value===l));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==l})))})}function w(e){const r=m(e);return(0,n.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,n.jsx)(g,{...r,...e}),(0,n.jsx)(k,{...r,...e})]})}function y(e){const r=(0,b.A)();return(0,n.jsx)(w,{...e,children:f(e.children)},String(r))}const E={tabItem:"tabItem_Ymn6"};function T(e){let{children:r,hidden:t,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,i.A)(E.tabItem,l),hidden:t,children:r})}const V={title:"Welcome",toc_max_heading_level:2},I=void 0,A={type:"mdx",permalink:"/",source:"@site/src/pages/index.mdx",title:"Welcome",description:"Social Network",frontMatter:{title:"Welcome",toc_max_heading_level:2},unlisted:!1},_={},S=[{value:"Social Network",id:"social-network",level:3},{value:"misc",id:"misc",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Repo",id:"repo",level:3},{value:"Private Tracker",id:"private-tracker",level:3},{value:"JDrama",id:"jdrama",level:3},{value:"BitTorrent",id:"bittorrent",level:3}];function N(e){const r={a:"a",h3:"h3",li:"li",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(y,{className:"unique-tabs",children:[(0,n.jsxs)(T,{value:"home",label:"Home",children:[(0,n.jsx)(r.h3,{id:"social-network",children:"Social Network"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://twitter.com/franklai_tw",children:"twitter"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.plurk.com/fujirou",children:"Plurk"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://share.readmoo.com/mooer/be7588k6a/bookshelf/franklai/total",children:"Readmoo"})}),"\n"]}),(0,n.jsx)(r.h3,{id:"misc",children:"misc"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://www.csie.ntu.edu.tw/~b91072/php/gb/",children:"\u4e94\u56db\u4e09\u7559\u8a00\u677f"})}),"\n"]})]}),(0,n.jsxs)(T,{value:"tool",label:"Tool",children:[(0,n.jsx)(r.h3,{id:"javascript",children:"JavaScript"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franks543-lyric-get.vercel.app/",children:"Lyric Get@Vercel"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/torrent-rss/",children:"torrent-rss"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/playground/railway/",children:"\u53f0\u9435\u6642\u523b\u67e5\u8a62"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/playground/bike/",children:"\u516c\u5171\u81ea\u884c\u8eca\u8cc7\u8a0a"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/github-release-download-count/",children:"GitHub Releases download count"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/franks543/xhtml/js/U2B_oneLine.htm",children:"Converter"})}),"\n"]}),(0,n.jsx)(r.h3,{id:"repo",children:"Repo"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/franklai/synologylyric/releases",children:"synologylyric"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/franklai/synologyhost/releases",children:"synologyhost"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://github.com/franklai/lyric-get-electron",children:"lyric-get-electron"})}),"\n"]})]}),(0,n.jsxs)(T,{value:"ura",label:"\u3046\u3089",default:!0,children:[(0,n.jsx)(r.h3,{id:"private-tracker",children:"Private Tracker"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://jpopsuki.eu/",children:"JPopsuki 2.0"})}),"\n"]}),(0,n.jsx)(r.h3,{id:"jdrama",children:"JDrama"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"http://www.fanxinzhui.com/list?channel=tv",children:"\u8ffd\u65b0\u756a"})}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"http://www.zimuxia.cn/%E6%88%91%E4%BB%AC%E7%9A%84%E4%BD%9C%E5%93%81?cat=fix%E6%97%A5%E8%AF%AD%E7%A4%BE",children:"FIX"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://btdig.com/search?order=2&q=FIX%E5%AD%97%E5%B9%95%E4%BE%A0",children:"BTDigg"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"http://www.zzrbl.com/wordpress/?cat=11",children:"\u8c6c\u8c6c"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"http://www.mytvbt.net/forumdisplay.php?fid=6",children:"\u65e5\u83c1"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"http://www.tvboxnow.com/forum-10-1.html",children:"TVBOXNOW"})}),"\n"]}),(0,n.jsx)(r.h3,{id:"bittorrent",children:"BitTorrent"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://share.dmhy.org/",children:"share.dmhy.org"}),"; ",(0,n.jsx)(r.a,{href:"https://dmhy.anoneko.com/",children:"dmhy.anoneko.com"})]}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://nipponsei.minglong.org/tracker/",children:"Nipponsei"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://yts.mx/",children:"YTS.MX"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://1337x.to/",children:"1337X"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://torrentgalaxy.to/",children:"TorrentGalaxy"})}),"\n"]})]}),(0,n.jsx)(T,{value:"archived",label:"\u6b77\u5e74\u9996\u9801",children:(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/franks543/docsify",children:"docsify"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/franks543/bootstrap",children:"Bootstrap v3"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/franks543/jquery",children:"jQuery Mobile"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/franks543/xhtml",children:"XHTML, until 2006"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://franklai.github.io/franks543/old543",children:"old543, until 2001"})}),"\n"]})})]})}function q(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>s});var n=t(6540);const l={},a=n.createContext(l);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);