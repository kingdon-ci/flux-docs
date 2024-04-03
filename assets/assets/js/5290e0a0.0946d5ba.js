"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[69338],{11330:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},95179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(11330);const l={title:"Version Information",hide_title:!0},i='Version Information <TierLabel tiers="Enterprise" />',s={unversionedId:"gitops-templates/versions",id:"version-0.20.0/gitops-templates/versions",title:"Version Information",description:"There are now multiple published versions of the template CRD.",source:"@site/versioned_docs/version-0.20.0/gitops-templates/versions.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/versions",permalink:"/docs/0.20.0/gitops-templates/versions",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.20.0/gitops-templates/versions.mdx",tags:[],version:"0.20.0",frontMatter:{title:"Version Information",hide_title:!0},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/0.20.0/gitops-templates/cli"},next:{title:"Introduction",permalink:"/docs/0.20.0/gitopssets/intro"}},p={},c=[{value:"Migration notes",id:"migration-notes",level:2},{value:"<code>v1alpha1</code> to <code>v1alpha2</code>",id:"v1alpha1-to-v1alpha2",level:3},{value:"Conversion Webhook",id:"conversion-webhook",level:2},{value:"v1alpha1 to v1alpha2 conversion",id:"v1alpha1-to-v1alpha2-conversion",level:3},{value:"<code>v1alpha2</code> (default) notes",id:"v1alpha2-default-notes",level:2},{value:"<code>v1alpha1</code> notes",id:"v1alpha1-notes",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-information-"},"Version Information ",(0,r.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"There are now multiple published versions of the template CRD."),(0,r.kt)("h2",{id:"migration-notes"},"Migration notes"),(0,r.kt)("h3",{id:"v1alpha1-to-v1alpha2"},(0,r.kt)("inlineCode",{parentName:"h3"},"v1alpha1")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"v1alpha2")),(0,r.kt)("p",null,"When manually migrating a template from ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha2")," (for example in git) you will need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"apiVersion")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"templates.weave.works/v1alpha2")),(0,r.kt)("li",{parentName:"ol"},"Move the ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.resourcetemplates")," field to ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.resourcetemplates[0].contents")),(0,r.kt)("li",{parentName:"ol"},"Either leave the ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.resourcetemplates[0].path")," field empty or give it a sensible value.")),(0,r.kt)("p",null,"If you experience issues with the path not being recognised when Flux reconciles\nthe new template versions, try manually applying the new template to the cluster directly with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply -f capi-template.yaml")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"flux reconcile kustomization --with-source flux-system")," ",(0,r.kt)("strong",{parentName:"li"},"twice"),".")),(0,r.kt)("h2",{id:"conversion-webhook"},"Conversion Webhook"),(0,r.kt)("p",null,"A conversion webhook is hosted by the ",(0,r.kt)("inlineCode",{parentName:"p"},"flux-system/templates-controller-webhook-service")," service.\n",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1")," templates are automatically converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha2")," when they are loaded into the cluster."),(0,r.kt)("h3",{id:"v1alpha1-to-v1alpha2-conversion"},"v1alpha1 to v1alpha2 conversion"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," field is moved to ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates[0].contents")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates[0].path")," is left empty.\nWhen the tempalte is rendered the ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates[0].path")," field has a default value calculated."),(0,r.kt)("h2",{id:"v1alpha2-default-notes"},(0,r.kt)("inlineCode",{parentName:"h2"},"v1alpha2")," (default) notes"),(0,r.kt)("p",null,"This version changes the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," from a list of objects to a list of files with a ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"contents"),":"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  resourcetemplates:\n    - path: "clusters/{{ .params.CLUSTER_NAME }}.yaml"\n      contents:\n        - apiVersion: cluster.x-k8s.io/v1alpha3\n          kind: Cluster\n          metadata:\n            name: "{{ .params.CLUSTER_NAME }}"\n          path: "clusters/{{ .params.CLUSTER_NAME }}.yaml"\n')),(0,r.kt)("h2",{id:"v1alpha1-notes"},(0,r.kt)("inlineCode",{parentName:"h2"},"v1alpha1")," notes"),(0,r.kt)("p",null,"The original version of the template. This version is deprecated and will be removed in a future release."),(0,r.kt)("p",null,"It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," as a list of resources to render."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  resourcetemplates:\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: Cluster\n      metadata:\n        name: "{{ .params.CLUSTER_NAME }}"\n')))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,l(l({ref:t},c),{},{components:n})):a.createElement(v,l({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);