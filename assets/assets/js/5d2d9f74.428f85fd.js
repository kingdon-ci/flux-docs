"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[54323],{80129:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(88746);r(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},23281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(80129);const i={title:"Introduction",hide_title:!0},s='GitOpsSets <TierLabel tiers="enterprise" />',l={unversionedId:"gitopssets/gitopssets-intro",id:"version-0.35.0/gitopssets/gitopssets-intro",title:"Introduction",description:"This feature is in alpha and certain aspects will change",source:"@site/versioned_docs/version-0.35.0/gitopssets/gitopssets-intro.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/gitopssets-intro",permalink:"/docs/0.35.0/gitopssets/gitopssets-intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.35.0/gitopssets/gitopssets-intro.mdx",tags:[],version:"0.35.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Operations",permalink:"/docs/0.35.0/explorer/operations"},next:{title:"Installation",permalink:"/docs/0.35.0/gitopssets/gitopssets-installation"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use Cases",id:"use-cases",level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitopssets-"},"GitOpsSets ",(0,a.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,a.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that some changes will be made to the API and behavior,\nparticularly to enhance security by implementing impersonation for more\nfine-grained control over how the generated resources are applied.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"GitOpsSets enable Platform Operators to have a single definition for an application for multiple environments and a fleet of clusters. A single definition can be used to generate the environment and cluster-specific configuration."),(0,a.kt)("p",null,"As an example, we can take an application that needs to be deployed to various environments (Dev, Test, Prod) built by a fleet of clusters. Each of those environments + clusters requires a specialized configuration powering the same Application. With GitOpsSets and the generators you just declare the template you want to use, the selector that will match the cluster of the inventory, and where to get the special configuration. "),(0,a.kt)("p",null,"GitOpsSets will create out of the single resource all the objects and Flux primitives that are required to successfully deploy this application. An operation that required the editing of hundreds of files can now be done with a single command. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The initial generators that are coming with the preview release are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#list-generator"},"List Generator"),": The simplest generator. Provide a list of Key/Value pairs that you want to feed the template with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#gitrepository-generator"},"Git Generator"),": Enables you to extract a set of files (environment-specific configurations) from a Flux GitRepository and make their contents available to the templates. This lets you have config in ",(0,a.kt)("em",{parentName:"li"},"app-dev.json"),", ",(0,a.kt)("em",{parentName:"li"},"app-staging.json"),", and ",(0,a.kt)("em",{parentName:"li"},"app-production.json"),", for example."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#matrix-generator"},"Matrix Generator"),": Combine slices of generators into the desired compounded input."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#pullrequests-generator"},"Pull request Generator"),": Automatically discover open pull requests within a repository to generate a new deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#apiclient-generator"},"API Client Generator"),": Poll an HTTP endpoint and parse the result as the generated values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#ocirepository-generator"},"OCI Repository")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#cluster-generator"},"Cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#imagepolicy-generator"},"ImagePolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.35.0/gitopssets/templating-from-generators#config-generator"},"Config"))),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single application definition for different environments (EU-West, North America, Germany)"),(0,a.kt)("li",{parentName:"ul"},"Deployment of a single definition across fleet of clusters matching any cluster based on a label (Production) "),(0,a.kt)("li",{parentName:"ul"},"Separation of concerns between teams (teams managing different artifacts flowing into a single definition via generators)")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);