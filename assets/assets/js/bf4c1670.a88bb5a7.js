"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[25492],{19666:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(67294),a=s(5730);function n(e){let{children:t,fallback:s}=e;return(0,a.Z)()?r.createElement(r.Fragment,null,t?.()):s??null}},80129:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(67294),a=s(88746);s(52426);const n={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:n},t)}},91083:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=s(87462),a=(s(67294),s(3905)),n=s(80129);s(77823),s(19666);const o={title:"Setup ESO",hide_title:!0},l=void 0,i={unversionedId:"secrets/setup-eso",id:"version-0.35.0/secrets/setup-eso",title:"Setup ESO",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.35.0/secrets/setup-eso.mdx",sourceDirName:"secrets",slug:"/secrets/setup-eso",permalink:"/docs/0.35.0/secrets/setup-eso",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.35.0/secrets/setup-eso.mdx",tags:[],version:"0.35.0",frontMatter:{title:"Setup ESO",hide_title:!0},sidebar:"docs",previous:{title:"Bootstrapping Secrets",permalink:"/docs/0.35.0/secrets/bootstrapping-secrets"},next:{title:"Setup SOPS",permalink:"/docs/0.35.0/secrets/setup-sops"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"SecretStores",id:"secretstores",level:3},{value:"ESO Profile",id:"eso-profile",level:3},{value:"Secrets",id:"secrets",level:3},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Install ESO on management cluster or existing leaf cluster",id:"install-eso-on-management-cluster-or-existing-leaf-cluster",level:3},{value:"Install ESO on leaf cluster",id:"install-eso-on-leaf-cluster",level:3},{value:"Profile values",id:"profile-values",level:3}],u={toc:c};function h(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,o.title," ",(0,a.kt)(n.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"Weave GitOps Enterprise now supports managing secrets using ",(0,a.kt)("a",{parentName:"p",href:"https://external-secrets.io/v0.8.1/"},"External Secrets Operator")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.35.0/secrets/manage-secrets-ui#external-secrets"},"UI"),". External Secrets Operator is a Kubernetes operator that allows users to use secrets from external secrets management systems by reading their information using external APIs and injecting their values into Kubernetes secrets. To be able to use this functionality, users need to configure their External Secrets Operator and SecretStores using one of the guides below."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"secretstores"},"SecretStores"),(0,a.kt)("p",null,"You should have your ",(0,a.kt)("a",{parentName:"p",href:"https://external-secrets.io/v0.8.1/"},"SecretStore CRs")," defined in a git repository. Those CRs will be installed to your cluster in the following steps and used by the creation UI."),(0,a.kt)("h3",{id:"eso-profile"},"ESO Profile"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/weave-gitops-profile-examples/tree/main/charts/external-secrets"},"ESO profile")," is packaged with the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/weave-gitops-profile-examples"},"weaveworks-charts"),". If you have the usual profiles setup, you will not need to do anything extra.\nThis profile installs the ESO controller, all the required CRDs, and the SecretStore CRs defined in the ",(0,a.kt)("a",{parentName:"p",href:"./#secretstores"},"previous")," step."),(0,a.kt)("h3",{id:"secrets"},"Secrets"),(0,a.kt)("p",null,"There are several Kubernetes Secrets that need to exist on your management cluster for the whole flow to work."),(0,a.kt)("p",null,"If your SecretStores repository is private then you'll need a Secret, that contains the repo credentials, to access the repository. This is usually the Secret you created while bootstrapping Flux on the management cluster and is copied to your leaf cluster during creation."),(0,a.kt)("p",null,"For each SecretStore CR, you'll need to add a Secret, that follows the format expected by this CR, to allow the operator to access the defined External Secret Store."),(0,a.kt)("p",null,"Follow this ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.35.0/secrets/bootstrapping-secrets"},"guide")," for bootstrapping those secrets on leaf clusters."),(0,a.kt)("h2",{id:"installation-steps"},"Installation Steps"),(0,a.kt)("h3",{id:"install-eso-on-management-cluster-or-existing-leaf-cluster"},"Install ESO on management cluster or existing leaf cluster"),(0,a.kt)("p",null,"To install the ESO profile on an exisitng cluster, use ",(0,a.kt)("inlineCode",{parentName:"p"},"Add an application")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Applications")," page and select ",(0,a.kt)("inlineCode",{parentName:"p"},"external-secrets")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"weaveworks-charts"),". Check the ",(0,a.kt)("a",{parentName:"p",href:"./#profile-values"},"Profile values")," section for more info about configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,a.kt)("h3",{id:"install-eso-on-leaf-cluster"},"Install ESO on leaf cluster"),(0,a.kt)("p",null,"To bootstrap the ESO profile on a leaf cluster, select ",(0,a.kt)("inlineCode",{parentName:"p"},"external-secrets")," from the profiles dropdown in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Cluster")," page. Check the ",(0,a.kt)("a",{parentName:"p",href:"./#profile-values"},"Profile values")," section for more info about configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,a.kt)("h3",{id:"profile-values"},"Profile values"),(0,a.kt)("p",null,"You should then configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"SecretStores")," on the cluster from a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository"),".\nThis is done by configuring the ",(0,a.kt)("inlineCode",{parentName:"p"},"secretStores")," section."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see an example that creates a new git source from a specific tag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"secretStores:\n  enabled: true\n  url: ssh://git@github.com/github-owner/repo-name   # url for the git repository that contains the SecretStores\n  tag: v1.0.0\n  path: ./    # could be a path to the secrets dir or a kustomization.yaml file for the SecretStore in the GitRepository\n  secretRef: my-pat   # the name of the Secret containing the repo credentials for private repositories\n"))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see an example that uses an existing git source"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"secretStores:\n  enabled: true\n  sourceRef: # Specify the name for an existing GitSource reference\n    kind: GitRepository\n    name: flux-system\n    namespace: flux-system\n"))))}h.isMDXComponent=!0}}]);