"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[81264],{80822:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return a.createElement(n.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},9703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),i=r(80822);const l={title:"Parameters",hide_title:!0},o='Parameters <TierLabel tiers="Enterprise" />',s={unversionedId:"gitops-templates/params",id:"version-0.25.0/gitops-templates/params",title:"Parameters",description:"When users have chosen a template, they will be presented with a form to",source:"@site/versioned_docs/version-0.25.0/gitops-templates/params.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/params",permalink:"/docs/0.25.0/gitops-templates/params",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.25.0/gitops-templates/params.mdx",tags:[],version:"0.25.0",frontMatter:{title:"Parameters",hide_title:!0},sidebar:"docs",previous:{title:"Annotations",permalink:"/docs/0.25.0/gitops-templates/annotations"},next:{title:"Supported Templating Languages",permalink:"/docs/0.25.0/gitops-templates/supported-langs"}},p={},m=[{value:"Required params",id:"required-params",level:2},{value:"Parameters metadata",id:"parameters-metadata",level:2}],c={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"parameters-"},"Parameters ",(0,n.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,n.kt)("p",null,"When users have chosen a template, they will be presented with a form to\ncomplete."),(0,n.kt)("p",null,"This form will collect the specific resource configuration which they would like\napplied to their instance."),(0,n.kt)("p",null,"Resource variables, or parameters, are set by the template author in the\ntemplate object manifest under ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.params"),"."),(0,n.kt)("h2",{id:"required-params"},"Required params"),(0,n.kt)("p",null,"Some params are ",(0,n.kt)("strong",{parentName:"p"},"required")," for all resources as they will be used to generate\npaths for the eventually rendered resources."),(0,n.kt)("p",null,"These are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CLUSTER_NAME")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"RESOURCE_NAME"))),(0,n.kt)("h2",{id:"parameters-metadata"},"Parameters metadata"),(0,n.kt)("p",null,"The following metadata fields can be added for each parameter under\n",(0,n.kt)("inlineCode",{parentName:"p"},"spec.params"),". These will get rendered nicely in the UI form allowing users to understand\nwhat each field is for."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"name"),": The variable name within the resource templates."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"description"),": Description of the parameter. This will be rendered in both the UI\nand CLI."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options"),": The list of possible values this parameter can be set to."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"required")," -  Whether the parameter must contain a non-empty value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"default")," - Default value of the parameter.")),(0,n.kt)("p",null,"Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  params:\n    - name: IP_ADDRESS\n      description: 'The IP address of this service'\n      options: [1.2.3.4, 5.6.7.8]\n      default: 1.2.3.4\n")))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(f,l(l({ref:t},m),{},{components:r})):a.createElement(f,l({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);