"use strict";(self.webpackChunkfranks543_website=self.webpackChunkfranks543_website||[]).push([[844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),f=n,h=p["".concat(u,".").concat(f)]||p[f]||m[f]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},4567:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>O,default:()=>D,frontMatter:()=>x,metadata:()=>j,toc:()=>I});var r=a(7462),n=a(7294),l=a(3905),i=a(6010),o=a(2466),u=a(6550),s=a(1980),c=a(7392),p=a(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function f(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const r=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=f(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=k({queryString:a,groupId:r}),[c,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,p.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),d=(()=>{const e=u??c;return h({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{d&&o(d)}),[d]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),m(e)}),[s,m,l]),tabValues:l}}var b=a(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==l&&(p(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:m},o,{className:(0,i.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=d(e);return n.createElement("div",{className:(0,i.Z)("tabs-container",y.tabList)},n.createElement(v,(0,r.Z)({},e,t)),n.createElement(g,(0,r.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}const E={tabItem:"tabItem_Ymn6"};function T(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(E.tabItem,r),hidden:a},t)}const x={title:"Welcome",toc_max_heading_level:2},O=void 0,j={type:"mdx",permalink:"/",source:"@site/src/pages/index.md",title:"Welcome",description:"Social Network",frontMatter:{title:"Welcome",toc_max_heading_level:2}},I=[{value:"Social Network",id:"social-network",level:3},{value:"misc",id:"misc",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Repo",id:"repo",level:3},{value:"Private Tracker",id:"private-tracker",level:3},{value:"JDrama",id:"jdrama",level:3},{value:"BitTorrent",id:"bittorrent",level:3}],S={toc:I},V="wrapper";function D(e){let{components:t,...a}=e;return(0,l.kt)(V,(0,r.Z)({},S,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(w,{className:"unique-tabs",mdxType:"Tabs"},(0,l.kt)(T,{value:"home",label:"Home",mdxType:"TabItem"},(0,l.kt)("h3",{id:"social-network"},"Social Network"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://twitter.com/franklai_tw"},"twitter")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.plurk.com/fujirou"},"Plurk")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://share.readmoo.com/mooer/be7588k6a/bookshelf/franklai/total"},"Readmoo"))),(0,l.kt)("h3",{id:"misc"},"misc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.csie.ntu.edu.tw/~b91072/php/gb/"},"\u4e94\u56db\u4e09\u7559\u8a00\u677f")))),(0,l.kt)(T,{value:"tool",label:"Tool",mdxType:"TabItem"},(0,l.kt)("h3",{id:"javascript"},"JavaScript"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franks543-lyric-get.vercel.app/"},"Lyric Get@Vercel")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franks543-lyric-get.azurewebsites.net/"},"Lyric Get@Azure")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/torrent-rss/"},"torrent-rss")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/playground/railway/"},"\u53f0\u9435\u6642\u523b\u67e5\u8a62")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/playground/bike/"},"\u516c\u5171\u81ea\u884c\u8eca\u8cc7\u8a0a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/github-release-download-count/"},"GitHub Releases download count")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/xhtml/js/U2B_oneLine.htm"},"Converter"))),(0,l.kt)("h3",{id:"repo"},"Repo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/franklai/synologylyric/releases"},"synologylyric")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/franklai/synologyhost/releases"},"synologyhost")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/franklai/lyric-get-electron"},"lyric-get-electron")))),(0,l.kt)(T,{value:"ura",label:"\u3046\u3089",default:!0,mdxType:"TabItem"},(0,l.kt)("h3",{id:"private-tracker"},"Private Tracker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jpopsuki.eu/"},"JPopsuki 2.0"))),(0,l.kt)("h3",{id:"jdrama"},"JDrama"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.fanxinzhui.com/list?channel=tv"},"\u8ffd\u65b0\u756a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.zimuxia.cn/%E6%88%91%E4%BB%AC%E7%9A%84%E4%BD%9C%E5%93%81?cat=fix%E6%97%A5%E8%AF%AD%E7%A4%BE"},"FIX"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://btdig.com/search?order=2&q=FIX%E5%AD%97%E5%B9%95%E4%BE%A0"},"BTDigg")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.zzrbl.com/wordpress/?cat=11"},"\u8c6c\u8c6c")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.mytvbt.net/forumdisplay.php?fid=6"},"\u65e5\u83c1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://www.tvboxnow.com/forum-10-1.html"},"TVBOXNOW"))),(0,l.kt)("h3",{id:"bittorrent"},"BitTorrent"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://share.dmhy.org/"},"share.dmhy.org"),"; ",(0,l.kt)("a",{parentName:"li",href:"https://dmhy.anoneko.com/"},"dmhy.anoneko.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nipponsei.minglong.org/tracker/"},"Nipponsei")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://yts.mx/"},"YTS.MX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://1337x.to/"},"1337X")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rarbg.to/torrents.php"},"RARBG")))),(0,l.kt)(T,{value:"archived",label:"\u6b77\u5e74\u9996\u9801",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/docsify"},"docsify")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/bootstrap"},"Bootstrap v3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/jquery"},"jQuery Mobile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/xhtml"},"XHTML, until 2006")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/old543"},"old543, until 2001"))))))}D.isMDXComponent=!0}}]);