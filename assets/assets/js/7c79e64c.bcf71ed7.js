"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[46745],{41168:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),r=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return i.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},98303:(e,t,n)=>{n.d(t,{ZP:()=>o});var i=n(87462),r=(n(67294),n(3905));const a={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,r.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}o.isMDXComponent=!0},85567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905)),a=n(41168),o=n(98303);const l={title:"Introduction",hide_title:!0},p='Pipelines <TierLabel tiers="Enterprise" />',s={unversionedId:"pipelines/intro",id:"version-0.21.2/pipelines/intro",title:"Introduction",description:"As wikipedia defines, Continuous delivery is",source:"@site/versioned_docs/version-0.21.2/pipelines/intro.mdx",sourceDirName:"pipelines",slug:"/pipelines/intro",permalink:"/docs/0.21.2/pipelines/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.2/pipelines/intro.mdx",tags:[],version:"0.21.2",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"Logging Env Variables",permalink:"/docs/0.21.2/terraform/environment-variables"},next:{title:"Getting started",permalink:"/docs/0.21.2/pipelines/getting-started"}},c={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pipelines-"},"Pipelines ",(0,r.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)(o.ZP,{mdxType:"AlphaWarning"}),(0,r.kt)("p",null,"As ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Continuous_delivery"},"wikipedia defines"),", Continuous delivery is"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a software engineering approach in which teams produce software in short cycles,\nensuring that the software can be reliably released at any time and, when releasing the software, without doing so manually.\nIt aims at building, testing, and releasing software with greater speed and frequency.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Continuous delivery is enabled through the deployment pipeline.\nThe purpose of the deployment pipeline has three components: visibility, feedback, and continually deploy.")),(0,r.kt)("p",null,"Weave GitOps Enterprise Pipelines allows you to define your deployment pipelines to enable continuous delivery for\nyour gitops applications."),(0,r.kt)("p",null,"As part of Weave GitOps Enterprise, you can"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/#define-a-pipeline"},"Define a delivery pipeline")," for an application that is packaged as a Helm chart."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../getting-started/#view-pipeline-list"},"Visualise a pipeline")," and check the current status and versions of your deployments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../promoting-applications"},"Promote applications")," either automatically or manually via the Weave GitOps Enterprise dashboard."),(0,r.kt)("li",{parentName:"ul"},"Notify other CI tools such as ",(0,r.kt)("a",{parentName:"li",href:"../pipelines-with-tekton"},"Tekton")," and ",(0,r.kt)("a",{parentName:"li",href:"../pipelines-with-jenkins"},"Jenkins")," of an application promotion.")),(0,r.kt)("p",null,"Now that you know what delivery pipelines can do for you, follow the ",(0,r.kt)("a",{parentName:"p",href:"../getting-started"},"guide to get started"),"."))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);