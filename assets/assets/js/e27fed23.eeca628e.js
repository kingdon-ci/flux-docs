"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[5384],{80129:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(88746);n(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},79732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),i=n(80129);const o={title:"Introduction",hide_title:!0},l='Introduction <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/intro",id:"version-0.35.0/gitops-templates/intro",title:"Introduction",description:"A GitOpsTemplate enables application developers to self-service components and",source:"@site/versioned_docs/version-0.35.0/gitops-templates/intro.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/intro",permalink:"/docs/0.35.0/gitops-templates/intro",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.35.0/gitops-templates/intro.mdx",tags:[],version:"0.35.0",frontMatter:{title:"Introduction",hide_title:!0},sidebar:"docs",previous:{title:"SecretSync",permalink:"/docs/0.35.0/secrets/spec/v1alpha1/secretSync"},next:{title:"Quickstart",permalink:"/docs/0.35.0/gitops-templates/quickstart-templates"}},s={},c=[],d={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-"},"Introduction ",(0,a.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," enables application developers to self-service components and\nservices easily through the Weave GitOps Dashboard. It's a simple YAML file that you can enrich with parameters, variables,\nmetadata, and conditions."),(0,a.kt)("p",null,"Use a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," to template any resource that can be expressed in YAML\n(basic Kubernetes resources, Flux primitives, Terraform controller, Crossplane, Cluster API, etc.)\ninto a standardised definition."),(0,a.kt)("p",null,"Application developers can use a template through our GUI. The rendered\ntemplate is added to their GitOps repository via a pull request. When merged and reconciled, the resources in\nthe template are created. A resource can be a ",(0,a.kt)("inlineCode",{parentName:"p"},"MachinePool")," for\nCAPI objects, a Flux Kustomization, or a Terraform Controller resource, to name a few examples."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," must be valid ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),". Beyond\nthis, a rendered template can create any resource you need \u2728.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"quickstart templates view",src:n(28886).Z,width:"2818",height:"1506"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"GitOpsTemplate or CAPITemplate?"),(0,a.kt)("p",{parentName:"admonition"},"The only difference between ",(0,a.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," is the default\nvalue of these two annotations:"),(0,a.kt)("table",{parentName:"admonition"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,a.kt)("th",{parentName:"tr",align:null},"default value for ",(0,a.kt)("inlineCode",{parentName:"th"},"CAPITemplate")),(0,a.kt)("th",{parentName:"tr",align:null},"default value for ",(0,a.kt)("inlineCode",{parentName:"th"},"GitOpsTemplate")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"templates.weave.works/add-common-bases")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"true"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"false"'))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"templates.weave.works/inject-prune-annotations")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"true"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"false"')))))))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28886:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/quickstart-templates-view-18b7b56ccfd872b0dbdc6602820071b0.png"}}]);