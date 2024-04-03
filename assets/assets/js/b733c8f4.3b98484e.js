"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[7710],{862:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},78918:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"To run this example you will need extra RBAC")),(0,a.kt)("p",{parentName:"admonition"},"This particular example creates kustomizations, so you will need to add the below RBAC\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account to allow it to create kustomizations."),(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.19.0/gitopssets/intro#security"},"Security")," section for more information."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"However this will change in the next release with impersonation. Instead you can choose a service account\nfor each ",(0,a.kt)("inlineCode",{parentName:"strong"},"GitOpsSet")," that has the required permissions for creating the rendered resources in the\n",(0,a.kt)("inlineCode",{parentName:"strong"},"templates")," section.")),(0,a.kt)("p",{parentName:"admonition"},"Additional RBAC for the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see SA resources"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: demo-role\nrules:\n- apiGroups:\n  - kustomize.toolkit.fluxcd.io\n  resources:\n  - kustomizations\n  verbs:\n  - create\n  - delete\n  - get\n  - list\n  - patch\n  - update\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: demo-role-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: demo-role\nsubjects:\n- kind: ServiceAccount\n  name: gitopssets-controller-manager\n  namespace: flux-system\n")))))}i.isMDXComponent=!0},53674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(862),i=n(78918);const s={title:"Matrix generator",hide_title:!0},l='Matrix generator <TierLabel tiers="enterprise" />',p={unversionedId:"gitopssets/matrix-generator",id:"version-0.19.0/gitopssets/matrix-generator",title:"Matrix generator",description:"Example",source:"@site/versioned_docs/version-0.19.0/gitopssets/matrix-generator.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/matrix-generator",permalink:"/docs/0.19.0/gitopssets/matrix-generator",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.19.0/gitopssets/matrix-generator.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Matrix generator",hide_title:!0},sidebar:"docs",previous:{title:"GitRepository generator",permalink:"/docs/0.19.0/gitopssets/git-generator"},next:{title:"PullRequests generator",permalink:"/docs/0.19.0/gitopssets/pull-request-generator"}},m={},c=[{value:"Example",id:"example",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"matrix-generator-"},"Matrix generator ",(0,a.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"matrix")," generator doesn't generate resources by itself. It combines the results of\ngeneration from other generators e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: templates.weave.works/v1alpha1\nkind: GitOpsSet\nmetadata:\n  name: matrix-sample\nspec:\n  generators:\n    - matrix:\n        generators:\n          - gitRepository:\n              repositoryRef: go-demo-repo\n              files:\n                - path: examples/generation/dev.yaml\n                - path: examples/generation/production.yaml\n                - path: examples/generation/staging.yaml\n          - list:\n              elements:\n                - cluster: dev-cluster\n                  version: 1.0.0\n")),(0,a.kt)("p",null,"Given the files mentioned all have the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=examples/generation/dev.yaml",title:"examples/generation/dev.yaml"},"env: dev\nteam: developers\n")),(0,a.kt)("p",null,"This will result in three sets of generated parameters, which are a combination of the maps in the files in the gitRepository, and the elements in the list generator, this can result in a combinatorial explosion of resources being created in your cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- env: dev\n  team: developers\n  cluster: dev-cluster\n  version: 1.0.0\n- env: staging\n  team: staging-team\n  cluster: dev-cluster\n  version: 1.0.0\n- env: production\n  team: production-team\n  cluster: dev-cluster\n  version: 1.0.0\n")),(0,a.kt)("p",null,"These can be referenced in the templates, note that all keys in the merged generators from the Matrix are contained in the ",(0,a.kt)("inlineCode",{parentName:"p"},"element")," scope."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha1\nkind: GitOpsSet\nmetadata:\n  name: matrix-sample\nspec:\n  generators:\n    - matrix:\n        generators:\n          - gitRepository:\n              repositoryRef: go-demo-repo\n              files:\n                - path: examples/generation/dev.yaml\n                - path: examples/generation/production.yaml\n                - path: examples/generation/staging.yaml\n          - list:\n              elements:\n                - cluster: dev-cluster\n                  version: 1.0.0\n  templates:\n    - content:\n        kind: Kustomization\n        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\n        metadata:\n          name: "{{ .Element.env }}-demo"\n          labels:\n            app.kubernetes.io/name: go-demo\n            app.kubernetes.io/instance: "{{ .Element.env }}"\n            com.example/team: "{{ .Element.team }}"\n            com.example/cluster: "{{ .Element.cluster }}"\n            com.example/version: "{{ .Element.version }}"\n        spec:\n          interval: 5m\n          path: "./examples/kustomize/environments/{{ .Element.env }}"\n          prune: true\n          sourceRef:\n            kind: GitRepository\n            name: go-demo-repo\n')),(0,a.kt)(i.ZP,{mdxType:"RBACWarning"}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},m),{},{components:n})):r.createElement(g,i({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);