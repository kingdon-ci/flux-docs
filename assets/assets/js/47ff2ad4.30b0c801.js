"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[14193],{8971:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){let{tiers:t}=e;return n.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},94598:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),i=r(8971);const s={title:"User Permissions"},l=void 0,o={unversionedId:"configuration/user-permissions",id:"version-0.26.0/configuration/user-permissions",title:"User Permissions",description:"This is an explanation of the kubernetes permissions",source:"@site/versioned_docs/version-0.26.0/configuration/user-permissions.mdx",sourceDirName:"configuration",slug:"/configuration/user-permissions",permalink:"/docs/0.26.0/configuration/user-permissions",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.26.0/configuration/user-permissions.mdx",tags:[],version:"0.26.0",frontMatter:{title:"User Permissions"},sidebar:"docs",previous:{title:"Dashboard Runtime Permissions",permalink:"/docs/0.26.0/configuration/service-account-permissions"},next:{title:"TLS and Certificates",permalink:"/docs/0.26.0/configuration/tls"}},p={},u=[{value:"Flux Resources",id:"flux-resources",level:3},{value:"Resources managed via Flux",id:"resources-managed-via-flux",level:3},{value:"Feedback from Flux",id:"feedback-from-flux",level:3},{value:'Weave GitOps Enterprise <TierLabel tiers="Enterprise" />',id:"weave-gitops-enterprise-",level:2},{value:"Progressive delivery with Flagger",id:"progressive-delivery-with-flagger",level:3},{value:"Setting up remote cluster permissions",id:"setting-up-remote-cluster-permissions",level:4}],c={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is an explanation of the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"kubernetes permissions"),"\nneeded by users/groups of the Weave GitOps application. As covered in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/0.26.0/configuration/service-account-permissions"},"service account permissions"),"\nthe primary way that the application interacts with the Kube API is via ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/authentication/#user-impersonation"},"impersonation"),".\nThis means that the permissions granted to the users and groups that Weave GitOps\ncan impersonate determine the scope of actions that it can take within your cluster."),(0,a.kt)("p",null,"At a minimum, a User should be bound to Role in the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace (where\nflux stores its resources by default) with the following permissions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'rules:\n  # Flux Resources\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: [ "kustomizations" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: [ "notification.toolkit.fluxcd.io" ]\n    resources: [ "providers", "alerts" ]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  - apiGroups: ["infra.contrib.fluxcd.io"]\n    resources: ["terraforms"]\n    verbs: [ "get", "list", "watch", "patch" ]\n\n  # Read access for all other Kubernetes objects\n  - apiGroups: ["*"]\n    resources: ["*"]\n    verbs: [ "get", "list", "watch" ]\n')),(0,a.kt)("p",null,"For a wider scope the User can be bound to a ClusterRole with the same set."),(0,a.kt)("h3",{id:"flux-resources"},"Flux Resources"),(0,a.kt)("p",null,"The resources that Flux works with directly, including the one from TF-controller."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Api Group"),(0,a.kt)("th",{parentName:"tr",align:null},"Resources"),(0,a.kt)("th",{parentName:"tr",align:null},"Permissions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"kustomize.toolkit.fluxcd.io"),(0,a.kt)("td",{parentName:"tr",align:null},"kustomizations"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, patch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"helm.toolkit.fluxcd.io"),(0,a.kt)("td",{parentName:"tr",align:null},"helmreleases"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, patch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source.toolkit.fluxcd.io"),(0,a.kt)("td",{parentName:"tr",align:null},"buckets, helmcharts, gitrepositories, helmrepositories, ocirepositories"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, patch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"notification.toolkit.fluxcd.io"),(0,a.kt)("td",{parentName:"tr",align:null},"providers, alerts"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"infra.contrib.fluxcd.io"),(0,a.kt)("td",{parentName:"tr",align:null},"terraforms"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, patch")))),(0,a.kt)("p",null,"In order for Weave GitOps to be able to accurately display the state of Flux it\nneeds to be able to query the ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/components/"},"CRDs")," that Flux uses. This is done using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," permissions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"patch")," permissions are used for 2 features: to suspend and resume\nreconciliation of a resource by modifying the 'spec' of a resource,\nand to force reconciliation of a resource by modifying the annotations\nof the resource. These features work the same way ",(0,a.kt)("inlineCode",{parentName:"p"},"flux suspend"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"flux resume")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"flux reconcile")," does on the CLI."),(0,a.kt)("h3",{id:"resources-managed-via-flux"},"Resources managed via Flux"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Api Group"),(0,a.kt)("th",{parentName:"tr",align:null},"Resources"),(0,a.kt)("th",{parentName:"tr",align:null},"Permissions"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'""'),(0,a.kt)("td",{parentName:"tr",align:null},"configmaps, secrets, pods, services, persistentvolumes, persistentvolumeclaims"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, watch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"apps"),(0,a.kt)("td",{parentName:"tr",align:null},"deployments, replicasets, statefulsets"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, watch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"batch"),(0,a.kt)("td",{parentName:"tr",align:null},"jobs, cronjobs"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, watch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoscaling"),(0,a.kt)("td",{parentName:"tr",align:null},"horizontalpodautoscalers"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, watch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"rbac.authorization.k8s.io"),(0,a.kt)("td",{parentName:"tr",align:null},"roles, clusterroles, rolebindings, clusterrolebindings"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, watch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"networking.k8s.io"),(0,a.kt)("td",{parentName:"tr",align:null},"ingresses"),(0,a.kt)("td",{parentName:"tr",align:null},"get, list, watch")))),(0,a.kt)("p",null,"Weave GitOps reads basic resources so that it can monitor the effect that Flux has\non what's running."),(0,a.kt)("p",null,"Reading ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," enables Weave GitOps to monitor the state of Helm releases\nas that's where it stores the ",(0,a.kt)("a",{parentName:"p",href:"https://helm.sh/docs/faq/changes_since_helm2/#secrets-as-the-default-storage-driver"},"state by default"),".\nFor clarity this these are the Helm release objects ",(0,a.kt)("em",{parentName:"p"},"not")," the Flux HelmRelease\nresource (which are dealt with by the earlier section)."),(0,a.kt)("h3",{id:"feedback-from-flux"},"Feedback from Flux"),(0,a.kt)("p",null,"The primary method by which Flux communicates the status of itself is by events,\nthese will show when reconciliations start and stop, whether they're successful\nand information as to why they're not."),(0,a.kt)("h2",{id:"weave-gitops-enterprise-"},"Weave GitOps Enterprise ",(0,a.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"Weave GitOps Enterprise extends Weave GitOps OSS by adding more roles. These roles may need to be extended further in order to support certain use cases. Some of the most common use cases are described below."),(0,a.kt)("h3",{id:"progressive-delivery-with-flagger"},"Progressive delivery with Flagger"),(0,a.kt)("p",null,"Weave GitOps Enterprise integrates with Flagger in order to provide a view on progressive delivery deployments. This includes the ability to view all the resources that Flagger manages during its operation. The default ClusterRole ",(0,a.kt)("inlineCode",{parentName:"p"},"gitops-canaries-reader")," includes the minimum permissions necessary for a user to be able to view canary object details, metric template object details and canary related events. "),(0,a.kt)("p",null,"When Flagger is configured to integrate with a service mesh such as Linkerd or Istio for the rollout, then this ClusterRole needs to be extended so that it can read the additional service mesh resources being generated by Flagger. Note that currently, in order to display service mesh or ingress related resources, we require ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.provider")," to be set in each canary resource. "),(0,a.kt)("p",null,"The following table provides a list of all the custom resources that Flagger generates grouped by provider:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"API Group"),(0,a.kt)("th",{parentName:"tr",align:null},"Resource"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AppMesh"),(0,a.kt)("td",{parentName:"tr",align:null},"appmesh.k8s.aws"),(0,a.kt)("td",{parentName:"tr",align:null},"virtualnode")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"appmesh.k8s.aws"),(0,a.kt)("td",{parentName:"tr",align:null},"virtualrouter")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"appmesh.k8s.aws"),(0,a.kt)("td",{parentName:"tr",align:null},"virtualservice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Linkerd"),(0,a.kt)("td",{parentName:"tr",align:null},"split.smi-spec.io"),(0,a.kt)("td",{parentName:"tr",align:null},"trafficsplit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Istio"),(0,a.kt)("td",{parentName:"tr",align:null},"networking.istio.io"),(0,a.kt)("td",{parentName:"tr",align:null},"destinationrule")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"networking.istio.io"),(0,a.kt)("td",{parentName:"tr",align:null},"virtualservice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Contour"),(0,a.kt)("td",{parentName:"tr",align:null},"projectcontour.io"),(0,a.kt)("td",{parentName:"tr",align:null},"httpproxy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gloo"),(0,a.kt)("td",{parentName:"tr",align:null},"gateway.solo.io"),(0,a.kt)("td",{parentName:"tr",align:null},"routetable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"gloo.solo.io"),(0,a.kt)("td",{parentName:"tr",align:null},"upstream")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nginx"),(0,a.kt)("td",{parentName:"tr",align:null},"networking.k8s.io"),(0,a.kt)("td",{parentName:"tr",align:null},"ingress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Skipper"),(0,a.kt)("td",{parentName:"tr",align:null},"networking.k8s.io"),(0,a.kt)("td",{parentName:"tr",align:null},"ingress")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Traefik"),(0,a.kt)("td",{parentName:"tr",align:null},"traefik.containo.us"),(0,a.kt)("td",{parentName:"tr",align:null},"traefikservice")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Open Service Mesh"),(0,a.kt)("td",{parentName:"tr",align:null},"split.smi-spec.io"),(0,a.kt)("td",{parentName:"tr",align:null},"trafficsplit")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Kuma"),(0,a.kt)("td",{parentName:"tr",align:null},"kuma.io"),(0,a.kt)("td",{parentName:"tr",align:null},"trafficroute")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GatewayAPI"),(0,a.kt)("td",{parentName:"tr",align:null},"gateway.networking.k8s.io"),(0,a.kt)("td",{parentName:"tr",align:null},"httproute")))),(0,a.kt)("p",null,"For example, the following manifest shows how ",(0,a.kt)("inlineCode",{parentName:"p"},"gitops-canaries-reader")," has been extended to allow the user for viewing TrafficSplit resources when Linkerd is used:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see example canary reader RBAC"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="gitops-canaries-reader.yaml"',title:'"gitops-canaries-reader.yaml"'},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: gitops-canaries-reader\nrules:\n- apiGroups:\n  - flagger.app\n  resources:\n  - canaries\n  - metrictemplates\n  verbs:\n  - get\n  - list\n- apiGroups:\n  - ""\n  resources:\n  - events\n  verbs:\n  - get\n  - watch\n  - list\n# Additional permissions for Linkerd resources are added below\n- apiGroups:\n  - split.smi-spec.io\n  resources:\n  - trafficsplits\n  verbs:\n  - get\n  - list\n'))),(0,a.kt)("h4",{id:"setting-up-remote-cluster-permissions"},"Setting up remote cluster permissions"),(0,a.kt)("p",null,"In order to view canaries in a remote cluster from the management cluster, you need to consider the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The service account used to access the remote cluster needs to be able to list namespaces and custom resource definitions in the given cluster. It additionally needs to be able to impersonate users and groups."),(0,a.kt)("li",{parentName:"ul"},"The user or group that logs in to the management cluster, needs appropriate permissions to certain resources of the remote cluster.")),(0,a.kt)("p",null,"For example, applying the following manifest on remote clusters, ensures that the ",(0,a.kt)("inlineCode",{parentName:"p"},"wego-admin")," user will be able to view canary information from within the Weave GitOps Enterprise UI on the management cluster:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see example of remote cluster canary reader"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="remote-cluster-service-user-rbac.yaml"',title:'"remote-cluster-service-user-rbac.yaml"'},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: user-groups-impersonator\nrules:\n  - apiGroups: [""]\n    resources: ["users", "groups"]\n    verbs: ["impersonate"]\n  - apiGroups: [""]\n    resources: ["namespaces"]\n    verbs: ["get", "list"]\n  - apiGroups: ["apiextensions.k8s.io"]\n    resources: ["customresourcedefinitions"]\n    verbs: ["get", "list"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: impersonate-user-groups\nsubjects:\n  - kind: ServiceAccount\n    name: remote-cluster-01  # Service account created in remote cluster\n    namespace: default\nroleRef:\n  kind: ClusterRole\n  name: user-groups-impersonator\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: canary-reader\nrules:\n  - apiGroups: [""]\n    resources: [ "events", "services" ]\n    verbs: [ "get", "list", "watch" ]\n  - apiGroups: [ "apps" ]\n    resources: [ "*" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: [ "autoscaling" ]\n    resources: [ "*" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: [ "flagger.app" ]\n    resources: [ "canaries", "metrictemplates"]\n    verbs: [ "get", "list", "watch" ]\n  - apiGroups: [ "helm.toolkit.fluxcd.io" ]\n    resources: [ "helmreleases" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: [ "kustomize.toolkit.fluxcd.io" ]\n    resources: [ "kustomizations" ]\n    verbs: [ "get", "list" ]\n  - apiGroups: [ "source.toolkit.fluxcd.io" ]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: [ "get", "list" ]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: read-canaries\nsubjects:\n- kind: User\n  name: wego-admin    # User logged in management cluster, impersonated via service account\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: canary-reader\n  apiGroup: rbac.authorization.k8s.io\n'))),(0,a.kt)("p",null,"You may need to add more users/groups to the ",(0,a.kt)("inlineCode",{parentName:"p"},"read-canaries")," ClusterRoleBinding to ensure additional users can view canary information from within the Weave GitOps Enterprise UI."))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);