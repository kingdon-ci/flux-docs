"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[35665],{15675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"OIDC Provider"},o="Login via an OIDC provider",s={unversionedId:"configuration/oidc-access",id:"version-0.19.0/configuration/oidc-access",title:"OIDC Provider",description:"You may decide to give your engineering teams access to the dashboard, in order to view and manage their workloads. In this case, you will want to secure access to the dashboard and restrict who can interact with it. Weave GitOps integrates with your OIDC provider and uses standard Kubernetes RBAC to give you fine-grained control of the permissions for the dashboard users.",source:"@site/versioned_docs/version-0.19.0/configuration/oidc-access.mdx",sourceDirName:"configuration",slug:"/configuration/oidc-access",permalink:"/docs/0.19.0/configuration/oidc-access",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.19.0/configuration/oidc-access.mdx",tags:[],version:"0.19.0",frontMatter:{title:"OIDC Provider"},sidebar:"docs",previous:{title:"Securing access to the dashboard",permalink:"/docs/0.19.0/configuration/securing-access-to-the-dashboard"},next:{title:"Emergency Cluster User Account",permalink:"/docs/0.19.0/configuration/emergency-user"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Customizing",id:"customizing",level:2},{value:"Scopes",id:"scopes",level:3},{value:"Claims",id:"claims",level:3},{value:"Login UI",id:"login-ui",level:3},{value:"Weave Gitops",id:"weave-gitops",level:4},{value:"Weave Gitops Enterprise",id:"weave-gitops-enterprise",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"login-via-an-oidc-provider"},"Login via an OIDC provider"),(0,a.kt)("p",null,"You may decide to give your engineering teams access to the dashboard, in order to view and manage their workloads. In this case, you will want to secure access to the dashboard and restrict who can interact with it. Weave GitOps integrates with your OIDC provider and uses standard Kubernetes RBAC to give you fine-grained control of the permissions for the dashboard users."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"OIDC extends the OAuth2 authorization protocol by including an additional field (ID Token) that contains information (claims) about a user's identity. After a user successfully authenticates with the OIDC provider, this information is used by Weave GitOps to impersonate the user in any calls to the Kubernetes API. This allows cluster administrators to use RBAC rules to control access to the cluster and also the dashboard."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"In order to login via your OIDC provider, you need to create a Kubernetes secret to store the OIDC configuration. This configuration consists of the following parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"issuerURL")),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the issuer, typically the discovery URL without a path"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clientID")),(0,a.kt)("td",{parentName:"tr",align:null},"The client ID that has been setup for Weave GitOps in the issuer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clientSecret")),(0,a.kt)("td",{parentName:"tr",align:null},"The client secret that has been setup for Weave GitOps in the issuer"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"redirectURL")),(0,a.kt)("td",{parentName:"tr",align:null},"The redirect URL that has been setup for Weave GitOps in the issuer, typically the dashboard URL followed by ",(0,a.kt)("inlineCode",{parentName:"td"},"/oauth2/callback ")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"tokenDuration")),(0,a.kt)("td",{parentName:"tr",align:null},"The time duration that the ID Token will remain valid, after successful authentication"),(0,a.kt)("td",{parentName:"tr",align:null},'"1h0m0s"')))),(0,a.kt)("p",null,"Ensure that your OIDC provider has been setup with a client ID/secret and the redirect URL of the dashboard."),(0,a.kt)("p",null,"Create a secret named ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc-auth")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace with these parameters set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic oidc-auth \\\n  --namespace flux-system \\\n  --from-literal=issuerURL=<oidc-issuer-url> \\\n  --from-literal=clientID=<client-id> \\\n  --from-literal=clientSecret=<client-secret> \\\n  --from-literal=redirectURL=<redirect-url> \\\n  --from-literal=tokenDuration=<token-duration>\n")),(0,a.kt)("p",null,"Once the HTTP server starts, unauthenticated users will have to click 'Login With OIDC Provider' to log in or use the cluster account (if configured). Upon successful authentication, the users' identity will be impersonated in any calls made to the Kubernetes API, as part of any action they take in the dashboard. By default the Helm chart will configure RBAC correctly but it is recommended to read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.19.0/configuration/service-account-permissions"},"service account")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.19.0/configuration/user-permissions"},"user")," permissions pages to understand which actions are needed for Weave GitOps to function correctly."),(0,a.kt)("h2",{id:"customizing"},"Customizing"),(0,a.kt)("p",null,"For some OIDC configurations, you may need to customise the requested ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims"},"scopes")," or ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#Claims"},"claims"),"."),(0,a.kt)("h3",{id:"scopes"},"Scopes"),(0,a.kt)("p",null,'By default, the following scopes are requested "openid","offline_access","email","groups".'),(0,a.kt)("p",null,'The "openid" scope is ',(0,a.kt)("strong",{parentName:"p"},"mandatory"),' for OpenID auth, and the "email", and "groups" scopes are commonly used as unique identifiers in organisations.'),(0,a.kt)("p",null,'We use "offline_access" to allow us to refresh OIDC tokens to keep login sessions alive for as long as a refresh token is valid.'),(0,a.kt)("p",null,"You can however change the defaults."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic oidc-auth \\\n  --namespace flux-system \\\n  --from-literal=issuerURL=<oidc-issuer-url> \\\n  --from-literal=clientID=<client-id> \\\n  --from-literal=clientSecret=<client-secret> \\\n  --from-literal=redirectURL=<redirect-url> \\\n  --from-literal=tokenDuration=<token-duration> \\\n  --from-literal=customScopes=custom,scopes\n")),(0,a.kt)("p",null,"The format for the ",(0,a.kt)("inlineCode",{parentName:"p"},"customScopes"),' key is a comma-separated list of scopes to request, in this case, "custom" and "scopes" would be requested, in addition to "openid".'),(0,a.kt)("h3",{id:"claims"},"Claims"),(0,a.kt)("p",null,"By default, the following claims are parsed from the OpenID ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken"},"ID Token"),' "email" and "groups", these are presented as the ',(0,a.kt)("inlineCode",{parentName:"p"},"user")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"groups")," when we communicate with your Kubernetes API server."),(0,a.kt)("p",null,"This is equivalent to ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#configuring-the-api-server"},"configuring")," your ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"--oidc-username-claim=email --oidc-groups-claim=groups"),"."),(0,a.kt)("p",null,"Again, you can configure these from the ",(0,a.kt)("inlineCode",{parentName:"p"},"oidc-auth")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic oidc-auth \\\n  --namespace flux-system \\\n  --from-literal=issuerURL=<oidc-issuer-url> \\\n  --from-literal=clientID=<client-id> \\\n  --from-literal=clientSecret=<client-secret> \\\n  --from-literal=redirectURL=<redirect-url> \\\n  --from-literal=tokenDuration=<token-duration> \\\n  --from-literal=claimUsername=sub \\\n  --from-literal=claimGroups=groups\n")),(0,a.kt)("p",null,"There are two separate configuration keys, you can override them separately, these should match your ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver")," configuration."),(0,a.kt)("h3",{id:"login-ui"},"Login UI"),(0,a.kt)("p",null,"The label of the OIDC button on the login screen is configurable via a feature flag environment variable.\nThis can give your users a more familiar experience when logging in."),(0,a.kt)("p",null,"Adjust the configuration in the helm ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file or the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.values")," section of the Weave Gitops ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmRelease")," resource:"),(0,a.kt)("h4",{id:"weave-gitops"},"Weave Gitops"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'envVars:\n  - name: WEAVE_GITOPS_FEATURE_OIDC_BUTTON_LABEL\n    value: "Login with ACME"\n')),(0,a.kt)("h4",{id:"weave-gitops-enterprise"},"Weave Gitops Enterprise"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'extraEnvVars:\n  - name: WEAVE_GITOPS_FEATURE_OIDC_BUTTON_LABEL\n    value: "Login with ACME"\n')))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);