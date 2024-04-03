"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[90597],{49655:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"Emergency Cluster User Account"},s=void 0,i={unversionedId:"configuration/emergency-user",id:"version-0.21.1/configuration/emergency-user",title:"Emergency Cluster User Account",description:"This is an insecure method of securing your dashboard which we only recommend for local",source:"@site/versioned_docs/version-0.21.1/configuration/emergency-user.mdx",sourceDirName:"configuration",slug:"/configuration/emergency-user",permalink:"/docs/0.21.1/configuration/emergency-user",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.1/configuration/emergency-user.mdx",tags:[],version:"0.21.1",frontMatter:{title:"Emergency Cluster User Account"},sidebar:"docs",previous:{title:"OIDC Provider",permalink:"/docs/0.21.1/configuration/oidc-access"},next:{title:"Dashboard Runtime Permissions",permalink:"/docs/0.21.1/configuration/service-account-permissions"}},c={},l=[{value:"Configuring the emergency user",id:"configuring-the-emergency-user",level:2},{value:"Updating the emergency user",id:"updating-the-emergency-user",level:2},{value:"User permissions",id:"user-permissions",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Important",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"This is an ",(0,o.kt)("strong",{parentName:"p"},"insecure")," method of securing your dashboard which we only recommend for local\nand development environments, or if you need to activate emergency access to a damaged cluster."),(0,o.kt)("p",{parentName:"admonition"},"Note also that this mechanism only exists for a single user: you will not be able to\ncreate multiple users. Weave GitOps does not provide its own authentication mechanism,\nfor secure and fully-featured authentication we ",(0,o.kt)("strong",{parentName:"p"},"strongly recommend")," using an OIDC provider as described ",(0,o.kt)("a",{parentName:"p",href:"../oidc-access"},"here"),".")),(0,o.kt)("h2",{id:"configuring-the-emergency-user"},"Configuring the emergency user"),(0,o.kt)("p",null,"Before you login via the emergency user account, you need to generate a bcrypt hash for your chosen password and store it as a secret in Kubernetes.\nThere are several different ways to generate a bcrypt hash, this guide uses ",(0,o.kt)("inlineCode",{parentName:"p"},"gitops get bcrypt-hash")," from our CLI."),(0,o.kt)("p",null,"Generate the password by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'PASSWORD="<your password>"\necho -n $PASSWORD | gitops get bcrypt-hash\n$2a$10$OS5NJmPNEb13UgTOSKnMxOWlmS7mlxX77hv4yAiISvZ71Dc7IuN3q\n')),(0,o.kt)("p",null,"Now create a Kubernetes secret to store your chosen username and the password hash."),(0,o.kt)("p",null,"The name of the secret depends on your configuration (",(0,o.kt)("inlineCode",{parentName:"p"},"adminUser.secretName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"adminUser.createSecret")," values)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl create secret generic cluster-user-auth \\\n  --namespace flux-system \\\n  --from-literal=username=admin \\\n  --from-literal=password='$2a$10$OS5NJmPNEb13UTOSKngMxOWlmS7mlxX77hv4yAiISvZ71Dc7IuN3q'\n")),(0,o.kt)("p",null,"You should now be able to login via the cluster user account using your chosen username and password."),(0,o.kt)("h2",{id:"updating-the-emergency-user"},"Updating the emergency user"),(0,o.kt)("p",null,"To change either the username or the password, recreate the ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster-user-auth"),"\nwith the new details."),(0,o.kt)("p",null,"Note that only one emergency user can be created this way. To add more users,\nenable an ",(0,o.kt)("a",{parentName:"p",href:"../oidc-access"},"OIDC provider"),"."),(0,o.kt)("h2",{id:"user-permissions"},"User permissions"),(0,o.kt)("p",null,"By default both a ClusterRole and Role are generated for the emergency user.\nBoth have the same permissions with former being optional and the latter being\nbound to the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace (where Flux stores its resources by default).\nThe default set of rules are configured like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n  # Flux Resources\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: [ "kustomizations" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: [ "notification.toolkit.fluxcd.io" ]\n    resources: [ "providers", "alerts" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: ["infra.contrib.fluxcd.io"]\n    resources: ["terraforms"]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  # Read access for all other Kubernetes objects\n  - apiGroups: ["*"]\n    resources: ["*"]\n    verbs: [ "get", "list", "watch" ]\n')),(0,o.kt)("p",null,"These permissions give the emergency user Administrator level powers. ",(0,o.kt)("strong",{parentName:"p"},"We do not\nadvise leaving it active on production systems"),"."),(0,o.kt)("p",null,"If required, the permissions can be expanded with the ",(0,o.kt)("inlineCode",{parentName:"p"},"rbac.additionalRules")," field in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.21.1/references/helm-reference"},"Helm Chart"),".\nFollow the instructions in the next section in order to configure RBAC correctly."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To remove the emergency user as a login method, set the following values in the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.21.1/references/helm-reference"},"Helm Chart"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#\nadminUser:\n  create: false\n#\nadditionalArgs:\n- --auth-methods=oidc\n#\n")),(0,o.kt)("p",{parentName:"admonition"},"If you are disabling an already existing emergency user, you will need to\nmanually delete the Kubernetes Secret and any User Roles which were created on\nthe cluster.")))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,h=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);