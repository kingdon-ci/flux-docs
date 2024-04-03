"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[53317],{6148:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={title:"Configuring OIDC with Dex and GitHub"},r=void 0,o={unversionedId:"guides/setting-up-dex",id:"version-0.27.0/guides/setting-up-dex",title:"Configuring OIDC with Dex and GitHub",description:"In this guide we will show you how to enable users to login to the Weave GitOps dashboard by authenticating with their GitHub account.",source:"@site/versioned_docs/version-0.27.0/guides/setting-up-dex.md",sourceDirName:"guides",slug:"/guides/setting-up-dex",permalink:"/docs/0.27.0/guides/setting-up-dex",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.27.0/guides/setting-up-dex.md",tags:[],version:"0.27.0",frontMatter:{title:"Configuring OIDC with Dex and GitHub"},sidebar:"docs",previous:{title:"TLS and Certificates",permalink:"/docs/0.27.0/configuration/tls"},next:{title:"Generating TLS certificates with cert-manager and Let's Encrypt",permalink:"/docs/0.27.0/guides/cert-manager"}},l={},p=[{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"What is Dex?",id:"what-is-dex",level:2},{value:"Create Dex namespace",id:"create-dex-namespace",level:2},{value:"Add credentials",id:"add-credentials",level:2},{value:"Deploy Dex",id:"deploy-dex",level:2},{value:"Set up static user",id:"set-up-static-user",level:3},{value:"OIDC login",id:"oidc-login",level:2}],c={toc:p};function u(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this guide we will show you how to enable users to login to the Weave GitOps dashboard by authenticating with their GitHub account."),(0,i.kt)("p",null,"This example uses ",(0,i.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"Dex")," and its GitHub connector, and assumes Weave GitOps has already been installed on a Kubernetes clusters."),(0,i.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Kubernetes cluster such as ",(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")," cluster running a\n",(0,i.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/installation/#prerequisites"},"Flux-supported version of Kubernetes")),(0,i.kt)("li",{parentName:"ul"},"Weave GitOps is ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.27.0/open-source/getting-started/install-OSS"},"installed")," and ",(0,i.kt)("a",{parentName:"li",href:"/docs/0.27.0/configuration/tls"},"TLS has been enabled"),".")),(0,i.kt)("h2",{id:"what-is-dex"},"What is Dex?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"Dex")," is an identity service that uses ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," to\ndrive authentication for other apps."),(0,i.kt)("p",null,"Alternative solutions for identity and access management exist such as ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak"),"."),(0,i.kt)("h2",{id:"create-dex-namespace"},"Create Dex namespace"),(0,i.kt)("p",null,"Create a namespace where Dex will be installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: dex\n")),(0,i.kt)("h2",{id:"add-credentials"},"Add credentials"),(0,i.kt)("p",null,"There are a ",(0,i.kt)("a",{parentName:"p",href:"https://dexidp.io/docs/connectors/"},"lot of options")," available with Dex, in this guide we will\nuse the ",(0,i.kt)("a",{parentName:"p",href:"https://dexidp.io/docs/connectors/github/"},"GitHub connector"),"."),(0,i.kt)("p",null,"We can get a GitHub ClientID and Client secret by creating a\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app"},"new OAuth application"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub OAuth configuration",src:n(46776).Z,width:"502",height:"722"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic github-client \\\n  --namespace=dex \\\n  --from-literal=client-id=${GITHUB_CLIENT_ID} \\\n  --from-literal=client-secret=${GITHUB_CLIENT_SECRET}\n")),(0,i.kt)("h2",{id:"deploy-dex"},"Deploy Dex"),(0,i.kt)("p",null,"As we did before, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"HelmRepository")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HelmRelease")," objects to let\nFlux deploy everything."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to see resource manifests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: source.toolkit.fluxcd.io/v1beta1\nkind: HelmRepository\nmetadata:\n  name: dex\n  namespace: dex\nspec:\n  interval: 1m\n  url: https://charts.dexidp.io\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: dex\n  namespace: dex\nspec:\n  interval: 5m\n  chart:\n    spec:\n      chart: dex\n      version: 0.6.5\n      sourceRef:\n        kind: HelmRepository\n        name: dex\n        namespace: dex\n      interval: 1m\n  values:\n    image:\n      tag: v2.31.0\n    envVars:\n    - name: GITHUB_CLIENT_ID\n      valueFrom:\n        secretKeyRef:\n          name: github-client\n          key: client-id\n    - name: GITHUB_CLIENT_SECRET\n      valueFrom:\n        secretKeyRef:\n          name: github-client\n          key: client-secret\n    config:\n      # Set it to a valid URL\n      issuer: https://dex.dev.example.tld\n\n      # See https://dexidp.io/docs/storage/ for more options\n      storage:\n        type: memory\n\n      staticClients:\n      - name: 'Weave GitOps Core'\n        id: weave-gitops\n        secret: AiAImuXKhoI5ApvKWF988txjZ+6rG3S7o6X5En\n        redirectURIs:\n        - 'https://localhost:9001/oauth2/callback'\n        - 'https://0.0.0.0:9001/oauth2/callback'\n        - 'http://0.0.0.0:9001/oauth2/callback'\n        - 'http://localhost:4567/oauth2/callback'\n        - 'https://localhost:4567/oauth2/callback'\n        - 'http://localhost:3000/oauth2/callback'\n\n      connectors:\n      - type: github\n        id: github\n        name: GitHub\n        config:\n          clientID: $GITHUB_CLIENT_ID\n          clientSecret: $GITHUB_CLIENT_SECRET\n          redirectURI: https://dex.dev.example.tld/callback\n          orgs:\n          - name: weaveworks\n            teams:\n            - team-a\n            - team-b\n            - QA\n          - name: ww-test-org\n    ingress:\n      enabled: true\n      className: nginx\n      annotations:\n        cert-manager.io/cluster-issuer: letsencrypt-prod\n      hosts:\n        - host: dex.dev.example.tld\n          paths:\n          - path: /\n            pathType: ImplementationSpecific\n      tls:\n        - hosts:\n          - dex.dev.example.tld\n          secretName: dex-dev-example-tld\n"))),(0,i.kt)("admonition",{title:"SSL certificate without cert manager",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If we don't want to use cert manager, we can remove the related annotation and\nuse our predefined secret in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls")," section.")),(0,i.kt)("p",null,"An important part of the configuration is the ",(0,i.kt)("inlineCode",{parentName:"p"},"orgs")," field on the GitHub\nconnector."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"orgs:\n- name: weaveworks\n  teams:\n  - team-a\n  - team-b\n  - QA\n")),(0,i.kt)("p",null,"Here we can define groups under a GitHub organisation. In this example the\nGitHub organisation is ",(0,i.kt)("inlineCode",{parentName:"p"},"weaveworks")," and all members of the ",(0,i.kt)("inlineCode",{parentName:"p"},"team-a"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"team-b"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"QA")," teams can authenticate. Group membership will be added to\nthe user."),(0,i.kt)("p",null,"Based on these groups, we can bind roles to groups:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to see group role bindings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: wego-test-user-read-resources\n  namespace: flux-system\nsubjects:\n  - kind: Group\n    name: weaveworks:QA\n    namespace: flux-system\nroleRef:\n  kind: Role\n  name: wego-admin-role\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: wego-admin-role\n  namespace: flux-system\nrules:\n  - apiGroups: [""]\n    resources: ["secrets", "pods" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["apps"]\n    resources: [ "deployments", "replicasets"]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: [ "kustomizations" ]\n    verbs: [ "get", "list", "patch" ]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list", "patch" ]\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: ["buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n'))),(0,i.kt)("p",null,"The same way we can bind cluster roles to a group:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to see group cluster role bindings"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: weaveworks:team-a\nsubjects:\n- kind: Group\n  name: weaveworks:team-a\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: cluster-admin\n  apiGroup: rbac.authorization.k8s.io\n"))),(0,i.kt)("h3",{id:"set-up-static-user"},"Set up static user"),(0,i.kt)("p",null,"For static user, add ",(0,i.kt)("inlineCode",{parentName:"p"},"staticPasswords")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  values:\n    config:\n      staticPasswords:\n      - email: "admin@example.tld"\n        hash: "$2a$10$2b2cU8CPhOTaGrs1HRQuAueS7JTT5ZHsHSzYiFPm1leZck7Mc8T4W"\n        username: "admin"\n        userID: "08a8684b-db88-4b73-90a9-3cd1661f5466"\n')),(0,i.kt)("p",null,"A static user password can be generated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"gitops")," CLI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'PASSWORD="<your password>"\necho -n $PASSWORD | gitops get bcrypt-hash\n$2a$10$OS5NJmPNEb13UgTOSKnMxOWlmS7mlxX77hv4yAiISvZ71Dc7IuN3q\n')),(0,i.kt)("h2",{id:"oidc-login"},"OIDC login"),(0,i.kt)("p",null,'Using the "Login with OIDC Provider" button:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Login page",src:n(11905).Z,width:"1881",height:"899"})),(0,i.kt)("p",null,"We have to authorize the GitHub OAuth application:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GitHub OAuth page",src:n(83830).Z,width:"1872",height:"893"})),(0,i.kt)("p",null,"After that, grant access to Dex:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dex grant access",src:n(53563).Z,width:"1872",height:"893"})),(0,i.kt)("p",null,"Now we are logged in with our GitHub user and we can see all resources we have\naccess to:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"UI logged in",src:n(63429).Z,width:"1872",height:"893"})))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<s;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53563:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dex-auth-ac6eb85deea39611dc993466ad3bd5b4.png"},83830:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-auth-23eff76cb50af1d3ed0d9a860e7e4ca5.png"},46776:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/github-oauth-application-025c1ee38b9222838c8d1d2c34a5c46a.png"},11905:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/oidc-login-bb254f334d81593a64485ae71289a24f.png"},63429:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ui-logged-in-cd5600d95c346a0f94d12f8fdab3e9fa.png"}}]);