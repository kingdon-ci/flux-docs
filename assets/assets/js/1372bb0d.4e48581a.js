"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[16603],{92365:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return a.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},39146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),o=n(92365);const i={title:"Version Information",hide_title:!0},l='Version Information <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/versions",id:"version-0.32.0/gitops-templates/versions",title:"Version Information",description:"There are now multiple published versions of the template CRD.",source:"@site/versioned_docs/version-0.32.0/gitops-templates/versions.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/versions",permalink:"/docs/0.32.0/gitops-templates/versions",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.32.0/gitops-templates/versions.mdx",tags:[],version:"0.32.0",frontMatter:{title:"Version Information",hide_title:!0},sidebar:"docs",previous:{title:"CLI",permalink:"/docs/0.32.0/gitops-templates/cli"},next:{title:"Introduction to Terraform Controller",permalink:"/docs/0.32.0/terraform/terraform-intro"}},s={},m=[{value:"Migration notes",id:"migration-notes",level:2},{value:"<code>v1alpha1</code> to <code>v1alpha2</code>",id:"v1alpha1-to-v1alpha2",level:3},{value:"Conversion Webhook",id:"conversion-webhook",level:2},{value:"<code>v1alpha2</code> (default) notes",id:"v1alpha2-default-notes",level:2},{value:"<code>v1alpha1</code> notes",id:"v1alpha1-notes",level:2}],c={toc:m};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-information-"},"Version Information ",(0,r.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"There are now multiple published versions of the template CRD."),(0,r.kt)("h2",{id:"migration-notes"},"Migration notes"),(0,r.kt)("h3",{id:"v1alpha1-to-v1alpha2"},(0,r.kt)("inlineCode",{parentName:"h3"},"v1alpha1")," to ",(0,r.kt)("inlineCode",{parentName:"h3"},"v1alpha2")),(0,r.kt)("p",null,"When manually migrating a template from ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha2")," (for example in git) you will need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update the ",(0,r.kt)("inlineCode",{parentName:"li"},"apiVersion"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"for ",(0,r.kt)("inlineCode",{parentName:"li"},"GitopsTemplate")," update the apiVersion to ",(0,r.kt)("inlineCode",{parentName:"li"},"templates.weave.works/v1alpha2")),(0,r.kt)("li",{parentName:"ol"},"for ",(0,r.kt)("inlineCode",{parentName:"li"},"CAPITemplate")," update the apiVersion to ",(0,r.kt)("inlineCode",{parentName:"li"},"capi.weave.works/v1alpha2")))),(0,r.kt)("li",{parentName:"ol"},"Move the ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.resourcetemplates")," field to ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.resourcetemplates[0].content")),(0,r.kt)("li",{parentName:"ol"},"Either leave the ",(0,r.kt)("inlineCode",{parentName:"li"},"spec.resourcetemplates[0].path")," field empty or give it a sensible value.")),(0,r.kt)("p",null,"If you experience issues with the path not being recognised when Flux reconciles\nthe new template versions, try manually applying the new template to the cluster directly with:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl apply -f capi-template.yaml")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"flux reconcile kustomization --with-source flux-system")," ",(0,r.kt)("strong",{parentName:"li"},"twice"),".")),(0,r.kt)("h2",{id:"conversion-webhook"},"Conversion Webhook"),(0,r.kt)("p",null,"As of Weave Gitops Enterprise 0.28.0 the conversion webhook has been removed."),(0,r.kt)("p",null,"This removed the need for cert-manager to be installed, but you will now have to convert any ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1")," templates to ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha2")," manually in git."),(0,r.kt)("h2",{id:"v1alpha2-default-notes"},(0,r.kt)("inlineCode",{parentName:"h2"},"v1alpha2")," (default) notes"),(0,r.kt)("p",null,"This version changes the type of ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," from a list of objects to a list of files with a ",(0,r.kt)("inlineCode",{parentName:"p"},"path")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),":"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  resourcetemplates:\n    - path: "clusters/{{ .params.CLUSTER_NAME }}.yaml"\n      content:\n        - apiVersion: cluster.x-k8s.io/v1alpha3\n          kind: Cluster\n          metadata:\n            name: "{{ .params.CLUSTER_NAME }}"\n          path: "clusters/{{ .params.CLUSTER_NAME }}.yaml"\n')),(0,r.kt)("h2",{id:"v1alpha1-notes"},(0,r.kt)("inlineCode",{parentName:"h2"},"v1alpha1")," notes"),(0,r.kt)("p",null,"The original version of the template. This version no longer works with Weave Gitops Enterprise 0.28.0 and above."),(0,r.kt)("p",null,"It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates")," as a list of resources to render."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  resourcetemplates:\n    - apiVersion: cluster.x-k8s.io/v1alpha3\n      kind: Cluster\n      metadata:\n        name: "{{ .params.CLUSTER_NAME }}"\n')))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>v});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),d=r,v=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?a.createElement(v,i(i({ref:t},m),{},{components:n})):a.createElement(v,i({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);