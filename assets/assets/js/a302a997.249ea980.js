"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[54684],{74526:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},33925:(e,t,n)=>{n.d(t,{ZP:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"To run this example you will need extra RBAC")),(0,a.kt)("p",{parentName:"admonition"},"This particular example creates kustomizations, so you will need to add the below RBAC\nto the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account to allow it to create kustomizations."),(0,a.kt)("p",{parentName:"admonition"},"Check out the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.18.0/gitopssets/intro#security"},"Security")," section for more information."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"However this will change in the next release with impersonation. Instead you can choose a service account\nfor each ",(0,a.kt)("inlineCode",{parentName:"strong"},"GitOpsSet")," that has the required permissions for creating the rendered resources in the\n",(0,a.kt)("inlineCode",{parentName:"strong"},"templates")," section.")),(0,a.kt)("p",{parentName:"admonition"},"Additional RBAC for the ",(0,a.kt)("inlineCode",{parentName:"p"},"gitopssets-controller-manager")," service account:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see SA resources"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: demo-role\nrules:\n- apiGroups:\n  - kustomize.toolkit.fluxcd.io\n  resources:\n  - kustomizations\n  verbs:\n  - create\n  - delete\n  - get\n  - list\n  - patch\n  - update\n  - watch\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: demo-role-binding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: demo-role\nsubjects:\n- kind: ServiceAccount\n  name: gitopssets-controller-manager\n  namespace: flux-system\n")))))}i.isMDXComponent=!0},46846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(74526),i=n(33925);const s={title:"PullRequests generator",hide_title:!0},l='PullRequests generator <TierLabel tiers="enterprise" />',p={unversionedId:"gitopssets/pull-request-generator",id:"version-0.18.0/gitopssets/pull-request-generator",title:"PullRequests generator",description:"The pullRequests generator will query a repository for open pull requests and emit a set of parameters for each pull request.",source:"@site/versioned_docs/version-0.18.0/gitopssets/pull-request-generator.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/pull-request-generator",permalink:"/docs/0.18.0/gitopssets/pull-request-generator",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.18.0/gitopssets/pull-request-generator.mdx",tags:[],version:"0.18.0",frontMatter:{title:"PullRequests generator",hide_title:!0},sidebar:"docs",previous:{title:"Matrix generator",permalink:"/docs/0.18.0/gitopssets/matrix-generator"}},u={},c=[{value:"Example",id:"example",level:3}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pullrequests-generator-"},"PullRequests generator ",(0,a.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pullRequests")," generator will query a repository for open pull requests and emit a set of parameters for each pull request."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.weave.works/v1alpha1\nkind: GitOpsSet\nmetadata:\n  name: pull-requests-sample\nspec:\n  generators:\n    - pullRequests:\n        interval: 5m\n        driver: github\n        repo: bigkevmcd/go-demo\n        secretRef:\n          name: github-secret\n  templates:\n    - content:\n        apiVersion: source.toolkit.fluxcd.io/v1beta2\n        kind: GitRepository\n        metadata:\n          name: "pr-{{ .Element.Number }}-gitrepository"\n          namespace: default\n        spec:\n          interval: 5m0s\n          url: "{{ .Element.CloneURL }}"\n          ref:\n            branch: "{{ .Element.Branch }}"\n    - content:\n        apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\n        kind: Kustomization\n        metadata:\n          name: "pr-{{ .Element.Number }}-demo"\n          namespace: default\n        spec:\n          interval: 5m\n          path: "./examples/kustomize/environments/dev"\n          prune: true\n          targetNamespace: "{{ .Element.Branch }}-ns"\n          sourceRef:\n            kind: GitRepository\n            name: "pr-{{ .Element.Number }}-gitrepository"\n')),(0,a.kt)("p",null,'This example will poll "github.com/bigkevmcd/go-demo" for open pull requests and trigger the deployment of these by creating a Flux ',(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Kustomization")," to deploy."),(0,a.kt)("p",null,"As the generator only queries open pull requests, when a PR is closed, the generated resources will be removed."),(0,a.kt)("p",null,"For non-public installations, you can configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"serverURL")," field and point it to your own installation."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"driver")," field can be ",(0,a.kt)("inlineCode",{parentName:"p"},"github")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"gitlab")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bitbucketserver"),", other options can be supported from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jenkins-x/go-scm/blob/main/scm/factory/factory.go"},"go-scm"),"."),(0,a.kt)("p",null,"Additionally labels can be provided for querying pull requests with matching labels e.g."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- pullRequests:\n    interval: 5m\n    driver: github\n    repo: bigkevmcd/go-demo\n    secretRef:\n      name: github-secret\n    labels:\n      - deploy\n")),(0,a.kt)("p",null,"The fields emitted by the pull-request are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"number")," this is generated as a string representation"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"branch")," this is the source branch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"head_sha")," this is the SHA of the commit in the merge branch"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clone_url")," this is the HTTPS clone URL for this repository"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clone_ssh_url")," this is the SSH clone URL for this repository")),(0,a.kt)("p",null,"You will need an API key that can query the GitHub API."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl create secret generic github-secret \\\n  --from-literal password=<insert access token here>\n")),(0,a.kt)("p",null,"You can limit the scope of this token to read only access to your repositories."),(0,a.kt)(i.ZP,{mdxType:"RBACWarning"}))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);