"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[60779],{11330:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},21649:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),i=n(11330);const o={title:"Introduction",hide_title:!0},l='Introduction <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/intro",id:"version-0.20.0/gitops-templates/intro",title:"Introduction",description:"GitOpsTemplates enable Application Developers to self-service components and",source:"@site/versioned_docs/version-0.20.0/gitops-templates/intro.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/intro",permalink:"/docs/0.20.0/gitops-templates/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.20.0/gitops-templates/intro.mdx",tags:[],version:"0.20.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"SecretSync",permalink:"/docs/0.20.0/secrets/spec/v1alpha1/secretSync"},next:{title:"Quickstart",permalink:"/docs/0.20.0/gitops-templates/quickstart-templates"}},s={},c=[],d={toc:c};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-"},"Introduction ",(0,r.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate"),"s enable Application Developers to self-service components and\nservices easily through the Weave GitOps Dashboard."),(0,r.kt)("p",null,"With a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate"),", any resource that can be expressed in yaml\n(such as basic kubernetes resources, Flux primitives, TF controller, Crossplane, Cluster API)\ncan be templated into a standardised definition, available for use."),(0,r.kt)("p",null,"Templates are simple YAML files, which can be enriched with Parameters, Variables,\nMetadata and conditions."),(0,r.kt)("p",null,"Whan an Application Developer uses a Template via the GIU, the rendered\ntemplate is added to their GitOps repository via a PR. When merged and reconciled, the resources in\nthe template are created. These can be any resource, such as a ",(0,r.kt)("inlineCode",{parentName:"p"},"MachinePool")," for\nCAPI objects, a Flux Kustomization or a Terraform Controller resource."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The only restriction on ",(0,r.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate"),"s is that they are valid ",(0,r.kt)("inlineCode",{parentName:"p"},"yaml"),". Beyond\nthat, a rendered template can create any resource desired \u2728.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"quickstart templates view",src:n(81559).Z,width:"2818",height:"1506"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"GitOpsTemplate or CAPITemplate?"),(0,r.kt)("p",{parentName:"admonition"},"The only difference between ",(0,r.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," is the default\nvalue of these two annotations:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,r.kt)("th",{parentName:"tr",align:null},"default value for ",(0,r.kt)("inlineCode",{parentName:"th"},"CAPITemplate")),(0,r.kt)("th",{parentName:"tr",align:null},"default value for ",(0,r.kt)("inlineCode",{parentName:"th"},"GitOpsTemplate")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"templates.weave.works/add-common-bases")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"true"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"false"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"templates.weave.works/inject-prune-annotations")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"true"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"false"')))))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81559:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/quickstart-templates-view-18b7b56ccfd872b0dbdc6602820071b0.png"}}]);