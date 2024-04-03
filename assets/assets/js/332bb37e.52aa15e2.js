"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[89934],{83306:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},88992:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(83306);const o={title:"Introduction",hide_title:!0},s='GitOpsSets <TierLabel tiers="enterprise" />',l={unversionedId:"gitopssets/gitopssets-intro",id:"version-0.33.0/gitopssets/gitopssets-intro",title:"Introduction",description:"This feature is in alpha and certain aspects will change",source:"@site/versioned_docs/version-0.33.0/gitopssets/gitopssets-intro.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/gitopssets-intro",permalink:"/docs/0.33.0/gitopssets/gitopssets-intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.33.0/gitopssets/gitopssets-intro.mdx",tags:[],version:"0.33.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/0.33.0/gitops-run/gitops-run-get-started"},next:{title:"Installation",permalink:"/docs/0.33.0/gitopssets/gitopssets-installation"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Use Cases",id:"use-cases",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitopssets-"},"GitOpsSets ",(0,a.kt)(i.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,a.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that some changes will be made to the API and behavior,\nparticularly to enhance security by implementing impersonation for more\nfine-grained control over how the generated resources are applied.")),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"GitOpsSets enable Platform Operators to have a single definition for an application for multiple environments and a fleet of clusters. A single definition can be used to generate the environment and cluster-specific configuration."),(0,a.kt)("p",null,"As an example, we can take an application that needs to be deployed to various environments (Dev, Test, Prod) built by a fleet of clusters. Each of those environments + clusters requires a specialized configuration powering the same Application. With GitOpsSets and the generators you just declare the template you want to use, the selector that will match the cluster of the inventory, and where to get the special configuration. "),(0,a.kt)("p",null,"GitOpsSets will create out of the single resource all the objects and Flux primitives that are required to successfully deploy this application. An operation that required the editing of hundreds of files can now be done with a single command. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The initial generators that are coming with the preview release are:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#list-generator"},"List Generator"),": The simplest generator. Provide a list of Key/Value pairs that you want to feed the template with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#gitrepository-generator"},"Git Generator"),": Enables you to extract a set of files (environment-specific configurations) from a Flux GitRepository and make their contents available to the templates. This lets you have config in ",(0,a.kt)("em",{parentName:"li"},"app-dev.json"),", ",(0,a.kt)("em",{parentName:"li"},"app-staging.json"),", and ",(0,a.kt)("em",{parentName:"li"},"app-production.json"),", for example."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#matrix-generator"},"Matrix Generator"),": Combine slices of generators into the desired compounded input."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#pullrequests-generator"},"Pull request Generator"),": Automatically discover open pull requests within a repository to generate a new deployment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#apiclient-generator"},"API Client Generator"),": Poll an HTTP endpoint and parse the result as the generated values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#ocirepository-generator"},"OCI Repository")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#cluster-generator"},"Cluster")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#imagepolicy-generator"},"ImagePolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/0.33.0/gitopssets/templating-from-generators#config-generator"},"Config"))),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single application definition for different environments (EU-West, North America, Germany)"),(0,a.kt)("li",{parentName:"ul"},"Deployment of a single definition across fleet of clusters matching any cluster based on a label (Production) "),(0,a.kt)("li",{parentName:"ul"},"Separation of concerns between teams (teams managing different artifacts flowing into a single definition via generators)")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);