"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[11217],{11330:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(88746);n(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},63241:(e,t,n)=>{n.d(t,{ZP:()=>o});var r=n(87462),a=(n(67294),n(3905));const s={toc:[]};function o(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,a.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}o.isMDXComponent=!0},1256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),s=n(63241),o=n(11330);const i={title:"Bootstrapping Secrets",hide_title:!0},c=void 0,l={unversionedId:"secrets/bootstraping-secrets",id:"version-0.20.0/secrets/bootstraping-secrets",title:"Bootstrapping Secrets",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.20.0/secrets/bootstraping-secrets.mdx",sourceDirName:"secrets",slug:"/secrets/bootstraping-secrets",permalink:"/docs/0.20.0/secrets/bootstraping-secrets",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.20.0/secrets/bootstraping-secrets.mdx",tags:[],version:"0.20.0",frontMatter:{title:"Bootstrapping Secrets",hide_title:!0},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/0.20.0/secrets/getting-started"},next:{title:"Setup ESO",permalink:"/docs/0.20.0/secrets/setup-eso"}},p={},u=[{value:"SecretSync",id:"secretsync",level:2},{value:"Working with SecretSync",id:"working-with-secretsync",level:3},{value:"Pre-requisites",id:"pre-requisites",level:4},{value:"Syncing secrets via SecretSync",id:"syncing-secrets-via-secretsync",level:4}],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,i.title," ",(0,a.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"When accessing protected resources there is a need for a client to authenticate before\nthe access is granted and the resource is consumed. For authentication, a client presents\ncredentials that are either created manually or available through infrastructure. A common scenario\nis to have a secrets store."),(0,a.kt)("p",null,"Weave Gitops allows you to provision the secret management infrastructure as part of its capabilities.\nHowever, in order to provision, as any other application that has secrets, we need to create the secret needed for installing it.\nThis is known as a chicken-egg scenario that get addressed by providing an initial secret. This secret we call it\nbootstrapping secret."),(0,a.kt)("p",null,"Bootstrapping secrets comes in handy, not only while provisioning your secrets management solution,\nbut also in any platform provisioning task where the existence of the secret is a prerequisite.\nAnother common example could be provisioning platform capabilities via ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.20.0/cluster-management/getting-started#profiles-and-clusters"},"profiles"),"\nthat are stored in ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/guides/helmreleases/#helm-repository-authentication-with-credentials"},"private repositories"),"."),(0,a.kt)("p",null,"Weave Gitops provides ",(0,a.kt)("a",{parentName:"p",href:"#secretsync"},"SecretSync")," as a solution to managing your bootstrapping secrets."),(0,a.kt)("h2",{id:"secretsync"},"SecretSync"),(0,a.kt)(s.ZP,{mdxType:"AlphaWarning"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SecretSync")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Kubernetes Custom Resource"),"\nthat provides semantics to sync ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"Kuberentes Secrets")," from management cluster to leaf clusters."),(0,a.kt)("p",null,"An example could be seen below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: capi.weave.works/v1alpha1\nkind: SecretSync\nmetadata:\n  name: my-dev-secret-syncer\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      environment: dev\n  secretRef:\n    name: my-dev-secret\n  targetNamespace: my-namespace\n")),(0,a.kt)("p",null,"Where you could find the following configuration sections:"),(0,a.kt)("p",null,"1) Select the secret to sync:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  secretRef:\n    name: my-dev-secret\n")),(0,a.kt)("p",null,"2) Specify the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.20.0/cluster-management/managing-existing-clusters"},"GitopsClusters"),"\nthat the secret will be synced to via labels:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  clusterSelector:\n    matchLabels:\n      environment: dev\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Secretsync")," reconciles secrets on clusters: any cluster at a future time matching the label selector will have\nthe secret reconciled too."),(0,a.kt)("p",null,"More info about the CRD spec ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.20.0/secrets/spec/v1alpha1/secretSync"},"here")),(0,a.kt)("h3",{id:"working-with-secretsync"},"Working with SecretSync"),(0,a.kt)("h4",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You are using ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.20.0/releases"},"Weave Gitops Enterprise version > v0.19.0")),(0,a.kt)("li",{parentName:"ol"},"You have a set of GitopsClusters representing the clusters that you want to sync the secret to. They have a set of labels to allow matching.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: gitops.weave.works/v1alpha1\nkind: GitopsCluster\nmetadata:\n  namespace: flux-system\n  labels:\n    environment: dev\n"))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"You have created a secret that you want to sync from the management cluster.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\nmetadata:\n  name: my-dev-secret\n  namespace: flux-system\ntype: Opaque\n"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Some restriction apply to the current version:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Resources should be in the same namespace"),(0,a.kt)("li",{parentName:"ul"},"Leaf cluster nodes should be annotated with ",(0,a.kt)("inlineCode",{parentName:"li"},"node-role.kubernetes.io/control-plane")))),(0,a.kt)("h4",{id:"syncing-secrets-via-secretsync"},"Syncing secrets via SecretSync"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create SecretSync manifests that points to your secret. For example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: capi.weave.works/v1alpha1\nkind: SecretSync\nmetadata:\n  name: my-dev-secret-syncer\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      environment: dev\n  secretRef:\n    name: my-dev-secret\n  targetNamespace: my-namespace\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check-in to your configuration repo within your management cluster")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a PR, review and merge")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"See the progress"))),(0,a.kt)("p",null,"Once reconciled, the status section would show created secret resource version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'status:\n  versions:\n    leaf-cluster-1: "211496"\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"See the secret created in your leaf cluster")),(0,a.kt)("p",null,"Your secret has been created in the target leaf cluster"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  kubectl get secret -n default\nNAME               TYPE                                  DATA\nmy-dev-secret      Opaque                                1\n")))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);