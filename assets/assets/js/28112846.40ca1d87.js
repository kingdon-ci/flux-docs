"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[65798],{1461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(87462),o=(t(67294),t(3905));const r={title:"Recommended RBAC Configuration"},i=void 0,s={unversionedId:"configuration/recommended-rbac-configuration",id:"version-0.18.0/configuration/recommended-rbac-configuration",title:"Recommended RBAC Configuration",description:"This page summarises the contents of the securing access to the dashboard,",source:"@site/versioned_docs/version-0.18.0/configuration/recommended-rbac-configuration.mdx",sourceDirName:"configuration",slug:"/configuration/recommended-rbac-configuration",permalink:"/docs/0.18.0/configuration/recommended-rbac-configuration",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.18.0/configuration/recommended-rbac-configuration.mdx",tags:[],version:"0.18.0",frontMatter:{title:"Recommended RBAC Configuration"},sidebar:"docs",previous:{title:"Releases",permalink:"/docs/0.18.0/releases"},next:{title:"Securing access to the dashboard",permalink:"/docs/0.18.0/configuration/securing-access-to-the-dashboard"}},l={},u=[{value:"Summary",id:"summary",level:2},{value:"Example set up",id:"example-set-up",level:2},{value:"Code",id:"code",level:3}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page summarises the contents of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.18.0/configuration/securing-access-to-the-dashboard"},"securing access to the dashboard"),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.18.0/configuration/service-account-permissions"},"service account permissions")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.18.0/configuration/user-permissions"},"user permissions"),". They should be\nread in addition to this page in order to understand the suggestions made here and\ntheir ramifications."),(0,o.kt)("p",null,"This page is purposefully vague as the intention is to give a broad idea of how\nsuch a system could be implemented, not the specifics as that will be dependent\non your specific circumstances and goals."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"The general recommendation is to use OIDC and a small number of groups that\nWeave GitOps can impersonate."),(0,o.kt)("p",null,"OIDC is the recommended method for managing authentication as it decouples the\nneed to manage user lists from the application, allowing it to be managed via\na central system designed for that purpose (i.e. the OIDC provider). OIDC also\nenables the creation of groups (either via your provider's own systems or by\nusing a connector like ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.18.0/guides/setting-up-dex"},"Dex"),")."),(0,o.kt)("p",null,"Configuring Weave GitOps to impersonate kubernetes groups rather than\nusers has the following benefits:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A user's permissions for impersonation by Weave GitOps can be separate from\nany other permissions that they may or may not have within the cluster."),(0,o.kt)("li",{parentName:"ul"},"Users do not have to be individually managed within the cluster and can have\ntheir permissions managed together.")),(0,o.kt)("h2",{id:"example-set-up"},"Example set up"),(0,o.kt)("p",null,"Assume that your company has the following people in OIDC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Aisha, a cluster admin, who should have full admin access to Weave GitOps"),(0,o.kt)("li",{parentName:"ul"},"Brian, lead of team-A, who should have admin permissions to their team's\nnamespace in Weave GitOps and readonly otherwise"),(0,o.kt)("li",{parentName:"ul"},"June and Jo, developers in team-A who should have read-only access to Weave GitOps")),(0,o.kt)("p",null,"You could then create 3 groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wego-admin"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bound to the ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterRole"),", created by Helm, ",(0,o.kt)("inlineCode",{parentName:"li"},"wego-admin-cluster-role")),(0,o.kt)("li",{parentName:"ul"},"Aisha is the only member"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wego-team-a-admin"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bound to a ",(0,o.kt)("inlineCode",{parentName:"li"},"Role"),", using the same permissions as ",(0,o.kt)("inlineCode",{parentName:"li"},"wego-admin-role"),", created\nin Team's namespace"),(0,o.kt)("li",{parentName:"ul"},"Brian and Aisha are members"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wego-readonly"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Bound to a ",(0,o.kt)("inlineCode",{parentName:"li"},"ClusterRole")," that matches ",(0,o.kt)("inlineCode",{parentName:"li"},"wego-admin-cluster-role")," but with\nno ",(0,o.kt)("inlineCode",{parentName:"li"},"patch")," permissions."),(0,o.kt)("li",{parentName:"ul"},"Aisha, Brian, June & Jo are all members")))),(0,o.kt)("p",null,"The Weave GitOps service account can then be configured with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'rbac:\n  impersonationResourceNames: ["wego-admin", "wego-team-a-admin", "wego-readonly"]\n  impersonationResources: ["groups"]\n')),(0,o.kt)("p",null,"so that only these three groups can be ",(0,o.kt)("inlineCode",{parentName:"p"},"impersonated")," by the service account."),(0,o.kt)("admonition",{title:"Using OIDC for cluster and Weave GitOps Authentication",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If the same OIDC provider is used to authenticate a user with the cluster\nitself (e.g. for use with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),") and to Weave GitOps then, depending\non OIDC configuration, they may end up with the super-set of their permissions\nfrom Weave GitOps and any other permissions granted to them."),(0,o.kt)("p",{parentName:"admonition"},"This can lead to un-intended consequences (e.g. viewing ",(0,o.kt)("inlineCode",{parentName:"p"},"secrets"),"). To avoid\nthis OIDC providers will often let you configure which groups are returned\nto which clients: the Weave GitOps groups should not be returned to the\ncluster client (and vice versa).")),(0,o.kt)("h3",{id:"code"},"Code"),(0,o.kt)("p",null,"The yaml to configure these permissions would look roughly like:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example RBAC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Admin cluster role\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: wego-admin-cluster-role\nrules:\n  - apiGroups: [""]\n    resources: ["secrets", "pods" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["apps"]\n    resources: [ "deployments", "replicasets"]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: [ "kustomizations" ]\n    verbs: [ "get", "list", "patch" ]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list", "patch" ]\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: [ "get", "list", "patch" ]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n---\n# Read only cluster role\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: wego-readonly-role\nrules:\n  # All the \'patch\' permissions have been removed\n  - apiGroups: [""]\n    resources: ["secrets", "pods" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["apps"]\n    resources: [ "deployments", "replicasets"]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: [ "kustomizations" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n---\n# Bind the cluster admin role to the wego-admin group\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: wego-cluster-admin\nsubjects:\n- kind: Group\n  name: wego-admin # only Aisha is a member\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: wego-admin-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n---\n# Bind the admin role in the team-a namespace for the wego-team-a-admin group\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: wego-team-a-admin-role\n  namespace: team-a\nsubjects:\n- kind: Group\n  name: wego-team-a-admin # Aisha & Brian are members\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  # Use the cluster role to set rules, just bind them in the team-a namespace\n  kind: ClusterRole\n  name: wego-admin-role\n  apiGroup: rbac.authorization.k8s.io\n---\n# Bind the readonly role to the readonly group\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: wego-readonly-role\nsubjects:\n- kind: Group\n  name: wego-readonly # Everyone is a member\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: wego-readonly-role\n  apiGroup: rbac.authorization.k8s.io\n---\n'))))}c.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(t),d=o,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return t?a.createElement(h,i(i({ref:n},p),{},{components:t})):a.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);