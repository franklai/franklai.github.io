"use strict";(self.webpackChunkfranks543_website=self.webpackChunkfranks543_website||[]).push([[844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=l,k=c["".concat(p,".").concat(h)]||c[h]||m[h]||n;return a?r.createElement(k,i(i({ref:t},s),{},{components:a})):r.createElement(k,i({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7455:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>N,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>y});var r=a(7462),l=a(7294),n=a(3905),i=a(6010),o=a(2389),p=a(7392),u=a(7094),s=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function h(e){const{lazy:t,block:a,defaultValue:n,values:o,groupId:h,className:k}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),d=o??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,p.l)(d,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===n?n:n??f.find((e=>e.props.default))?.props.value??f[0].props.value;if(null!==N&&!d.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${d.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,u.U)(),[g,w]=(0,l.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=h){const e=v[h];null!=e&&e!==g&&d.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,a=T.indexOf(t),r=d[a].value;r!==g&&(E(t),w(r),null!=h&&y(h,String(r)))},x=e=>{let t=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const a=T.indexOf(e.currentTarget)+1;t=T[a]??T[0];break}case"ArrowLeft":{const a=T.indexOf(e.currentTarget)-1;t=T[a]??T[T.length-1];break}}t?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},k)},d.map((e=>{let{value:t,label:a,attributes:n}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:O},n,{className:(0,i.Z)("tabs__item",c,n?.className,{"tabs__item--active":g===t})}),a??t)}))),t?(0,l.cloneElement)(f.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function k(e){const t=(0,o.Z)();return l.createElement(h,(0,r.Z)({key:String(t)},e))}const f="tabItem_Ymn6";function d(e){let{children:t,hidden:a,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(f,r),hidden:a},t)}const b={title:"Welcome",toc_max_heading_level:2},N=void 0,v={type:"mdx",permalink:"/",source:"@site/src/pages/index.md",title:"Welcome",description:"Blog",frontMatter:{title:"Welcome",toc_max_heading_level:2}},y=[{value:"Blog",id:"blog",level:3},{value:"Social Network",id:"social-network",level:3},{value:"misc",id:"misc",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"Repo",id:"repo",level:3},{value:"Private Tracker",id:"private-tracker",level:3},{value:"JDrama",id:"jdrama",level:3},{value:"BitTorrent",id:"bittorrent",level:3}],g={toc:y};function w(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(k,{className:"unique-tabs",mdxType:"Tabs"},(0,n.kt)(d,{value:"home",label:"Home",mdxType:"TabItem"},(0,n.kt)("h3",{id:"blog"},"Blog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franks543.blogspot.com/"},"Frank \u7684\u4e94\u56db\u4e09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fujirou.blogspot.com/"},"\u042f\u043f\u043e\u043d\u0441\u043a\u0430\u044f \u043c\u0443\u0437\u044b\u043a\u0430")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://fujirou2.blogspot.com/"},"A champagne supernova in the sky")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.blogspot.com/"},"Frank \u7684\u4e94\u56db\u4e09 (CS \u5206\u7ad9)"))),(0,n.kt)("h3",{id:"social-network"},"Social Network"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/franklai_tw"},"twitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.plurk.com/fujirou"},"Plurk")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://share.readmoo.com/mooer/be7588k6a/bookshelf/franklai/total"},"Readmoo"))),(0,n.kt)("h3",{id:"misc"},"misc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.csie.ntu.edu.tw/~b91072/php/gb/"},"\u4e94\u56db\u4e09\u7559\u8a00\u677f")))),(0,n.kt)(d,{value:"tool",label:"Tool",mdxType:"TabItem"},(0,n.kt)("h3",{id:"javascript"},"JavaScript"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franks543-lyric-get.vercel.app/"},"Lyric Get@Vercel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franks543-lyric-get.azurewebsites.net/"},"Lyric Get@Azure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/torrent-rss/"},"torrent-rss")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/playground/railway/"},"\u53f0\u9435\u6642\u523b\u67e5\u8a62")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/playground/bike/"},"\u516c\u5171\u81ea\u884c\u8eca\u8cc7\u8a0a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/github-release-download-count/"},"GitHub Releases download count")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/xhtml/js/U2B_oneLine.htm"},"Converter"))),(0,n.kt)("h3",{id:"repo"},"Repo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/franklai/synologylyric/releases"},"synologylyric")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/franklai/synologyhost/releases"},"synologyhost")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/franklai/lyric-get-electron"},"lyric-get-electron")))),(0,n.kt)(d,{value:"ura",label:"\u3046\u3089",default:!0,mdxType:"TabItem"},(0,n.kt)("h3",{id:"private-tracker"},"Private Tracker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jpopsuki.eu/"},"JPopsuki 2.0"))),(0,n.kt)("h3",{id:"jdrama"},"JDrama"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.fanxinzhui.com/list?channel=tv"},"\u8ffd\u65b0\u756a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.zimuxia.cn/%E6%88%91%E4%BB%AC%E7%9A%84%E4%BD%9C%E5%93%81?cat=fix%E6%97%A5%E8%AF%AD%E7%A4%BE"},"FIX"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://btdig.com/search?order=2&q=FIX%E5%AD%97%E5%B9%95%E4%BE%A0"},"BTDigg")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.zzrbl.com/wordpress/?cat=11"},"\u8c6c\u8c6c")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.mytvbt.net/forumdisplay.php?fid=6"},"\u65e5\u83c1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.tvboxnow.com/forum-10-1.html"},"TVBOXNOW"))),(0,n.kt)("h3",{id:"bittorrent"},"BitTorrent"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://share.dmhy.org/"},"share.dmhy.org"),"; ",(0,n.kt)("a",{parentName:"li",href:"https://dmhy.anoneko.com/"},"dmhy.anoneko.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://nipponsei.minglong.org/tracker/"},"Nipponsei")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://yts.mx/"},"YTS.MX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://1337x.to/"},"1337X")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rarbg.to/torrents.php"},"RARBG")))),(0,n.kt)(d,{value:"archived",label:"\u6b77\u5e74\u9996\u9801",mdxType:"TabItem"},(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/docsify"},"docsify")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/bootstrap"},"Bootstrap v3")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/jquery"},"jQuery Mobile")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/xhtml"},"XHTML, until 2006")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://franklai.github.io/franks543/old543"},"old543, until 2001"))))))}w.isMDXComponent=!0}}]);