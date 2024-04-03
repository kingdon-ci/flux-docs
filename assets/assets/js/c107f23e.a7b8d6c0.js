"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[91058],{16420:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}`,style:o},t)}},22582:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"To run this example you will need extra RBAC")),(0,a.kt)("p",{parentName:"admonition"},"This particular example creates kustomizations, so you will need to add the below RBAC\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account to allow it to create kustomizations."),(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.16.0/gitopssets/intro#security"},"Security")," section for more information."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"However this will change in the next release with impersonation. Instead you can choose a service account\nfor each ",(0,a.kt)("inlineCode",{parentName:"strong"},"GitOpsSet")," that has the required permissions for creating the rendered resources in the\n",(0,a.kt)("inlineCode",{parentName:"strong"},"templates")," section.")),(0,a.kt)("p",{parentName:"admonition"},"Additional RBAC for the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: demo-role\nrules:\n- apiGroups:\n  - kustomize.toolkit.fluxcd.io\n  resources:\n  - kustomizations\n  verbs:\n  - create\n  - delete\n  - get\n  - list\n  - patch\n  - update\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: demo-role-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: demo-role\nsubjects:\n- kind: ServiceAccount\n  name: gitopssets-controller-manager\n  namespace: flux-system\n"))))}i.isMDXComponent=!0},12238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(16420),i=n(22582);const s={title:"List generator",hide_title:!0},p='List generator <TierLabel tiers="enterprise" />',l={unversionedId:"gitopssets/list-generator",id:"version-0.16.0/gitopssets/list-generator",title:"List generator",description:"The list generator is a simple generator that generates a list of params from a list of elements.",source:"@site/versioned_docs/version-0.16.0/gitopssets/list-generator.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/list-generator",permalink:"/docs/0.16.0/gitopssets/list-generator",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.16.0/gitopssets/list-generator.mdx",tags:[],version:"0.16.0",frontMatter:{title:"List generator",hide_title:!0},sidebar:"docs",previous:{title:"Features",permalink:"/docs/0.16.0/gitopssets/features"},next:{title:"GitRepository generator",permalink:"/docs/0.16.0/gitopssets/git-generator"}},m={},c=[{value:"Example",id:"example",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"list-generator-"},"List generator ",(0,a.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," generator is a simple generator that generates a list of params from a list of elements."),(0,a.kt)("p",null,"This is the simplest generator, this is a hard-coded array of JSON objects, described as YAML mappings."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha1\nkind: GitOpsSet\nmetadata:\n  labels:\n    app.kubernetes.io/name: gitopsset\n    app.kubernetes.io/instance: gitopsset-sample\n    app.kubernetes.io/part-of: gitopssets-controller\n    app.kubernetes.io/managed-by: kustomize\n    app.kubernetes.io/created-by: gitopssets-controller\n  name: gitopsset-sample\nspec:\n  generators:\n    - list:\n        elements:\n          - env: dev\n            team: dev-team\n          - env: production\n            team: ops-team\n          - env: staging\n            team: ops-team\n  templates:\n    - content:\n        kind: Kustomization\n        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\n        metadata:\n          name: "{{ .element.env }}-demo"\n          labels:\n            app.kubernetes.io/name: go-demo\n            app.kubernetes.io/instance: "{{ .element.env }}"\n            com.example/team: "{{ .element.team }}"\n        spec:\n          interval: 5m\n          path: "./examples/kustomize/environments/{{ .element.env }}"\n          prune: true\n          sourceRef:\n            kind: GitRepository\n            name: go-demo-repo\n')),(0,a.kt)(i.ZP,{mdxType:"RBACWarning"}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=a,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);