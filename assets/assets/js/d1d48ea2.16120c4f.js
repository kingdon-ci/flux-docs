"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[78121],{48717:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),o=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},37272:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),o=(n(67294),n(3905));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"To run this example you will need extra RBAC")),(0,o.kt)("p",{parentName:"admonition"},"This particular example creates kustomizations, so you will need to add the below RBAC\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account to allow it to create kustomizations."),(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.17.0/gitopssets/intro#security"},"Security")," section for more information."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"However this will change in the next release with impersonation. Instead you can choose a service account\nfor each ",(0,o.kt)("inlineCode",{parentName:"strong"},"GitOpsSet")," that has the required permissions for creating the rendered resources in the\n",(0,o.kt)("inlineCode",{parentName:"strong"},"templates")," section.")),(0,o.kt)("p",{parentName:"admonition"},"Additional RBAC for the ",(0,o.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: demo-role\nrules:\n- apiGroups:\n  - kustomize.toolkit.fluxcd.io\n  resources:\n  - kustomizations\n  verbs:\n  - create\n  - delete\n  - get\n  - list\n  - patch\n  - update\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: demo-role-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: demo-role\nsubjects:\n- kind: ServiceAccount\n  name: gitopssets-controller-manager\n  namespace: flux-system\n"))))}i.isMDXComponent=!0},29517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(48717),i=n(37272);const s={title:"GitRepository generator",hide_title:!0},p='GitRepository generator <TierLabel tiers="enterprise" />',l={unversionedId:"gitopssets/git-generator",id:"version-0.17.0/gitopssets/git-generator",title:"GitRepository generator",description:"The gitRepository generator allows you to generate resources from the contents of files in a Git repository.",source:"@site/versioned_docs/version-0.17.0/gitopssets/git-generator.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/git-generator",permalink:"/docs/0.17.0/gitopssets/git-generator",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.17.0/gitopssets/git-generator.mdx",tags:[],version:"0.17.0",frontMatter:{title:"GitRepository generator",hide_title:!0},sidebar:"docs",previous:{title:"List generator",permalink:"/docs/0.17.0/gitopssets/list-generator"},next:{title:"Matrix generator",permalink:"/docs/0.17.0/gitopssets/matrix-generator"}},m={},c=[{value:"Example",id:"example",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"gitrepository-generator-"},"GitRepository generator ",(0,o.kt)(a.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gitRepository")," generator allows you to generate resources from the contents of files in a Git repository."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha1\nkind: GitOpsSet\nmetadata:\n  labels:\n    app.kubernetes.io/name: gitopsset\n    app.kubernetes.io/instance: gitopsset-sample\n    app.kubernetes.io/part-of: gitopssets-controller\n    app.kubernetes.io/managed-by: kustomize\n    app.kubernetes.io/created-by: gitopssets-controller\n  name: repository-sample\nspec:\n  generators:\n    - gitRepository:\n        repositoryRef: go-demo-repo\n        files:\n          - path: examples/generation/dev.yaml\n          - path: examples/generation/production.yaml\n          - path: examples/generation/staging.yaml\n  templates:\n    - content:\n        kind: Kustomization\n        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\n        metadata:\n          name: "{{ .element.env }}-demo"\n          labels:\n            app.kubernetes.io/name: go-demo\n            app.kubernetes.io/instance: "{{ .element.env }}"\n            com.example/team: "{{ .element.team }}"\n        spec:\n          interval: 5m\n          path: "./examples/kustomize/environments/{{ .element.env }}"\n          prune: true\n          sourceRef:\n            kind: GitRepository\n            name: go-demo-repo\n\n')),(0,o.kt)("p",null,"In this example, a ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/source/gitrepositories/"},"Flux ",(0,o.kt)("inlineCode",{parentName:"a"},"GitRepository"))," called ",(0,o.kt)("inlineCode",{parentName:"p"},"go-demo-repo")," in the same namespace as the ",(0,o.kt)("inlineCode",{parentName:"p"},"GitOpsSet")," will be tracked, and ",(0,o.kt)("inlineCode",{parentName:"p"},"Kustomization")," resources are generated from the three files listed."),(0,o.kt)("p",null,"These files can be JSON or YAML."),(0,o.kt)("p",null,"In this example we expect to find the following structure in the files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=examples/generation/dev.yaml",title:"examples/generation/dev.yaml"},"env: dev\nteam: developers\n")),(0,o.kt)("p",null,"Changes pushed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"GitRepository")," will result in rereconciliation of the templates into the cluster."),(0,o.kt)("p",null,"For security reasons, you need to explicitly list out the files that the generator should parse."),(0,o.kt)(i.ZP,{mdxType:"RBACWarning"}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,g=c["".concat(p,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);