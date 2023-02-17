"use strict";(self.webpackChunkuhe_docs=self.webpackChunkuhe_docs||[]).push([[468],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),h=i,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},35492:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={slug:"architecture-overview",title:"Architecture Overview",sidebar_position:1},c="Architecture Overview",a={unversionedId:"Architecture/overview",id:"Architecture/overview",title:"Architecture Overview",description:"This section presents a brief overview of our architecture and design choices.",source:"@site/docs/Architecture/overview.md",sourceDirName:"Architecture",slug:"/Architecture/architecture-overview",permalink:"/uhi-documentation-site/docs/Architecture/architecture-overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Architecture/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"architecture-overview",title:"Architecture Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Unified Health Ecosystem",permalink:"/uhi-documentation-site/docs/intro"},next:{title:"API Integration with ABDM",permalink:"/uhi-documentation-site/docs/Architecture/abdm-api-integration-process"}},s={},l=[{value:"Technologies/Design Choices",id:"technologiesdesign-choices",level:2}],u={toc:l};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture-overview"},"Architecture Overview"),(0,i.kt)("p",null,"This section presents a brief overview of our architecture and design choices."),(0,i.kt)("p",null,"The application consists of a frontend and a backend, along with a database. The backend of our application interacts with the ABDM components (like the Gateway, the Consent Manager and the like) through API calls on exposed endpoints."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture Overview",src:r(95638).Z,width:"666",height:"561"})),(0,i.kt)("h2",{id:"technologiesdesign-choices"},"Technologies/Design Choices"),(0,i.kt)("p",null,"For the frontend, we have decided to go with the following tech stack:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Next.js/React"),(0,i.kt)("li",{parentName:"ul"},"Tailwind CSS")),(0,i.kt)("p",null,"For the backend, we have decided to go forward with the following tech stack:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Express, running on NodeJS")),(0,i.kt)("p",null,"We use a relational database (PostgreSQL) for storing relevant information."),(0,i.kt)("p",null,"The frontend and the backend are connected with a RESTful API.\nThe backend of our application further interacts with the APIs of ABDM to provide relevant functionalities."))}p.isMDXComponent=!0},95638:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture_overview-fd755af58c9884f842b42ad1304ed805.svg"}}]);