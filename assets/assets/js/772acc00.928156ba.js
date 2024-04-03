"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[47639],{80822:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},94378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905)),a=n(80822);const o={title:"Introduction",hide_title:!0},s='GitOpsSets <TierLabel tiers="enterprise" />',l={unversionedId:"gitopssets/intro",id:"version-0.25.0/gitopssets/intro",title:"Introduction",description:"This feature is in alpha and certain aspects will change",source:"@site/versioned_docs/version-0.25.0/gitopssets/intro.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/intro",permalink:"/docs/0.25.0/gitopssets/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.25.0/gitopssets/intro.mdx",tags:[],version:"0.25.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Version Information",permalink:"/docs/0.25.0/gitops-templates/versions"},next:{title:"Installation",permalink:"/docs/0.25.0/gitopssets/installation"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use cases",id:"use-cases",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gitopssets-"},"GitOpsSets ",(0,i.kt)(a.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,i.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that some changes will be made to the API and behavior,\nparticularly to enhance security by implementing impersonation for more\nfine-grained control over how the generated resources are applied.")),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"GitOpsSets enable Platform Operators to have a single definition for an application for multiple environments and a fleet of clusters. A single definition can be used to generate the environment and cluster-specific configuration."),(0,i.kt)("p",null,"As an example, we can take an application that needs to be deployed to various environments (Dev, Test, Prod) built by a fleet of clusters. Each of those environments + clusters requires a specialized configuration powering the same Application. With GitOpsSets and the generators you just declare the template, you want to use, the selector that will match the cluster of the inventory, and where to get the special configuration. "),(0,i.kt)("p",null,"GitOpsSets will create out of the single resource all the objects and Flux primitives that are required to successfully deploy this application. An operation that required the editing of 100s files can be done now with a single command. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The initial generators that are coming with the preview release are:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.25.0/gitopssets/guide#list-generator"},"List Generator"),": The simplest generator. Provide a list of Key/Value pairs that you want to feed the template with."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.25.0/gitopssets/guide#gitrepository-generator"},"Git Generator"),": Enable to extract a set of files (environment-specific configurations) from a Flux GitRepository, and make the contents of these available to the templates, this would let you have config in ",(0,i.kt)("em",{parentName:"li"},"app-dev.json"),", ",(0,i.kt)("em",{parentName:"li"},"app-staging.json")," and ",(0,i.kt)("em",{parentName:"li"},"app-production.json")," for example, and the contents of these would be available to the templates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.25.0/gitopssets/guide#matrix-generator"},"Matrix Generator"),": Combine slices of generators into the desired compounded input."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.25.0/gitopssets/guide#pullrequests-generator"},"Pull request Generator"),": Automatically discover open pull requests within a repository to generate a new deployment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/0.25.0/gitopssets/guide#apiclient-generator"},"API Client Generator"),": Poll an HTTP endpoint and parse the result as the generated values.")),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single application definition for different environments (EU-West, North America, Germany)"),(0,i.kt)("li",{parentName:"ul"},"Deployment of a single definition across fleet of clusters matching any cluster based on a label (Production) "),(0,i.kt)("li",{parentName:"ul"},"Separation of concerns between teams (Teams managing different artifacts flowing into a single definition via generators)")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);