"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[80379],{37536:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(88746);a(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return n.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},19666:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(5730);function s(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},32342:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},71125:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(87462),r=a(67294),s=a(86010),l=a(63735),o=a(16550),i=a(34423),u=a(20636),c=a(99200);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,u]=h({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=i??p;return d({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,s]),tabValues:s}}var g=a(5730);const f="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,s.Z)("tabs__item",b,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(w,(0,n.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},12106:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var n=a(87462),r=(a(67294),a(3905)),s=(a(71125),a(32342),a(37536)),l=a(77823),o=a(19666),i=a(11099);var u=a(46677);const c={title:"Deploying CAPA with EKS",hide_title:!0},p=void 0,m={unversionedId:"cluster-management/deploying-capa-eks",id:"version-0.34.0/cluster-management/deploying-capa-eks",title:"Deploying CAPA with EKS",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.34.0/cluster-management/deploying-capa-eks.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/deploying-capa-eks",permalink:"/docs/0.34.0/cluster-management/deploying-capa-eks",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/cluster-management/deploying-capa-eks.mdx",tags:[],version:"0.34.0",frontMatter:{title:"Deploying CAPA with EKS",hide_title:!0},sidebar:"docs",previous:{title:"Managing Clusters Without Cluster API",permalink:"/docs/0.34.0/cluster-management/managing-clusters-without-capi"},next:{title:"Profiles",permalink:"/docs/0.34.0/cluster-management/profiles"}},d={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Multitenancy",id:"multitenancy",level:2},{value:"1. Add Common RBAC to Your Repository",id:"1-add-common-rbac-to-your-repository",level:2},{value:"2. Build a Kubernetes Platform with Built-in Components Preconfigured for Your Organization",id:"2-build-a-kubernetes-platform-with-built-in-components-preconfigured-for-your-organization",level:2},{value:"3. Add a Cluster Bootstrap Config",id:"3-add-a-cluster-bootstrap-config",level:2},{value:"4. Delete a Cluster with the Weave GitOps Enterprise UI",id:"4-delete-a-cluster-with-the-weave-gitops-enterprise-ui",level:2},{value:"5. Disable CAPI Support",id:"5-disable-capi-support",level:2}],k={toc:h};function g(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,c.title," ",(0,r.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("p",null,"Weave GitOps Enterprise can leverage ",(0,r.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/introduction.html"},"Cluster API")," providers to enable leaf cluster creation. Cluster API provides declarative APIs, controllers, and tooling to manage the lifecycle of Kubernetes clusters across a large number of ",(0,r.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/reference/providers.html#infrastructure"},"infrastructure providers"),". Cluster API custom resource definitions (CRDs) are platform-independent as each provider implementation handles the creation of virtual machines, VPCs, networks, and other required infrastructure parts\u2014enabling consistent and repeatable cluster deployments."),(0,r.kt)("p",null,"As an AWS advanced technology partner, Weaveworks has been working tirelessly to ensure that deploying EKS ",(0,r.kt)("strong",{parentName:"p"},"anywhere")," is smooth and removes the barriers to application modernization."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"You'll need to install the following software before continuing with these instructions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"github cli")," >= 2.3.0 ",(0,r.kt)("a",{parentName:"li",href:"https://cli.github.com/"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eksctl")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/eksctl/releases"},"(source)")),(0,r.kt)("li",{parentName:"ul"},"the AWS Command Line Interface/",(0,r.kt)("inlineCode",{parentName:"li"},"aws cli")," ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusterctl")," >= v1.1.3 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api/releases"},"(source)"),"; follow ",(0,r.kt)("a",{parentName:"li",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"},"these steps")," to initialise the cluster and enable feature gates"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusterawsadm")," >= v1.1.0, following ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api-provider-aws/releases"},"Cluster API's instructions")),(0,r.kt)("li",{parentName:"ul"},"Make sure you have a management cluster. If you followed the Weave GitOps Enterprise ",(0,r.kt)("a",{parentName:"li",href:"/docs/0.34.0/enterprise/getting-started/install-enterprise"},"installation guide"),", you'll have done this already."),(0,r.kt)("li",{parentName:"ul"},"Configure your ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),"and ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY")," with either ",(0,r.kt)("inlineCode",{parentName:"li"},"aws configure")," or by exporting it in the current shell."),(0,r.kt)("li",{parentName:"ul"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"GITHUB_TOKEN")," as an environment variable in the current shell. It should have permissions to create Pull Requests against the cluster config repo.")),(0,r.kt)("h2",{id:"multitenancy"},"Multitenancy"),(0,r.kt)("p",null,"Some Cluster API providers allow you to choose the account or identity that the new cluster will be created with. This is often referred to as ",(0,r.kt)("em",{parentName:"p"},"Multi-tenancy")," in the CAPI world. Weave GitOps currently supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cluster-api-aws.sigs.k8s.io/topics/multitenancy.html"},(0,r.kt)("strong",{parentName:"a"},"AWS")," multi-tenancy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://capz.sigs.k8s.io/topics/multitenancy.html"},(0,r.kt)("strong",{parentName:"a"},"Azure")," multi-tenancy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api-provider-vsphere/blob/master/docs/identity_management.md"},(0,r.kt)("strong",{parentName:"a"},"vSphere")," multi-tenancy"))),(0,r.kt)("h2",{id:"1-add-common-rbac-to-your-repository"},"1. Add Common RBAC to Your Repository"),(0,r.kt)("p",null,"When a cluster is provisioned, by default it will reconcile all the manifests in ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/<cluster-namespace>/<cluster-name>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/bases"),"."),(0,r.kt)("p",null,"To display Applications and Sources in the UI we need to give the logged in user permissions to inspect the new cluster."),(0,r.kt)("p",null,"Adding common RBAC rules to ",(0,r.kt)("inlineCode",{parentName:"p"},"./clusters/bases/rbac")," is an easy way to configure this!"),(0,r.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/bases/rbac/wego-admin.yaml ",window.location.protocol,"//",window.location.host,a(39213).Z))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see full template yaml"),(0,r.kt)(l.Z,{title:"clusters/bases/rbac/wego-admin.yaml",className:"language-yaml",mdxType:"CodeBlock"},i.Z)),(0,r.kt)("h2",{id:"2-build-a-kubernetes-platform-with-built-in-components-preconfigured-for-your-organization"},"2. Build a Kubernetes Platform with Built-in Components Preconfigured for Your Organization"),(0,r.kt)("p",null,"To do this, go to Weaveworks' ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/profiles-catalog"},"Profiles Catalog"),"."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.34.0/gitops-templates/intro"},"CAPI Templates")," page for more details on this topic. Once we load a template we can use it in the UI to create clusters!"),(0,r.kt)("p",null,"Download the template below to your config repository path, then commit and push to your Git origin."),(0,r.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/templates/capa-template.yaml"," ",window.location.protocol,"//",window.location.host,a(80285).Z))),(0,r.kt)(l.Z,{title:"clusters/management/apps/capi/templates/capa-template.yaml",className:"language-yaml",mdxType:"CodeBlock"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: aws-eks-dev\n  namespace: default\n  annotations:\n    templates.weave.works/inject-prune-annotation: "true"\n    templates.weave.works/add-common-bases: "true"\n  labels:\n    weave.works/template-type: cluster\nspec:\n  description: AWS EKS Development Cluster\n  params:\n    - name: CLUSTER_NAME\n      description: The name for this cluster.\n    - name: AWS_REGION\n      description: AWS Region to create cluster\n      options: ["us-east-1", "eu-central-1", "eu-west-2", "us-west-2"]\n    - name: KUBERNETES_VERSION\n      description: EKS Kubernetes version to use\n      options: ["v1.19.8", "v1.20.7", "v1.21.2"]\n    - name: WORKER_MACHINE_COUNT\n      description: Number of worker nodes to create.\n  resourcetemplates:\n    - contents:\n        - apiVersion: gitops.weave.works/v1alpha1\n          kind: GitopsCluster\n          metadata:\n            name: "${CLUSTER_NAME}"\n            namespace: default\n            labels:\n              weave.works/capi: bootstrap\n          spec:\n            capiClusterRef:\n              name: "${CLUSTER_NAME}"\n\n        - apiVersion: cluster.x-k8s.io/v1beta1\n          kind: Cluster\n          metadata:\n            name: ${CLUSTER_NAME}\n            namespace: default\n            labels:\n              weave.works/capi: bootstrap\n          spec:\n            clusterNetwork:\n              pods:\n                cidrBlocks:\n                  - 192.168.0.0/16\n            controlPlaneRef:\n              apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n              kind: AWSManagedControlPlane\n              name: ${CLUSTER_NAME}-control-plane\n            infrastructureRef:\n              apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n              kind: AWSManagedControlPlane\n              name: ${CLUSTER_NAME}-control-plane\n\n        - apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n          kind: AWSManagedControlPlane\n          metadata:\n            name: ${CLUSTER_NAME}-control-plane\n            namespace: default\n          spec:\n            region: ${AWS_REGION}\n            sshKeyName: default\n            version: ${KUBERNETES_VERSION}\n            eksClusterName: ${CLUSTER_NAME}\n\n        - apiVersion: cluster.x-k8s.io/v1beta1\n          kind: MachinePool\n          metadata:\n            name: ${CLUSTER_NAME}-pool-0\n            namespace: default\n          spec:\n            clusterName: ${CLUSTER_NAME}\n            replicas: ${WORKER_MACHINE_COUNT}\n            template:\n              spec:\n                bootstrap:\n                  dataSecretName: ""\n                clusterName: ${CLUSTER_NAME}\n                infrastructureRef:\n                  apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n                  kind: AWSManagedMachinePool\n                  name: ${CLUSTER_NAME}-pool-0\n\n        - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n          kind: AWSManagedMachinePool\n          metadata:\n            name: ${CLUSTER_NAME}-pool-0\n            namespace: default\n          spec: {}\n'),(0,r.kt)("h2",{id:"3-add-a-cluster-bootstrap-config"},"3. Add a Cluster Bootstrap Config"),(0,r.kt)("p",null,"This step ensures that Flux gets installed into your cluster.\xa0Create a cluster bootstrap config as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl create secret generic my-pat --from-literal GITHUB_TOKEN=$GITHUB_TOKEN\n")),(0,r.kt)("p",null,"Download the config with:"),(0,r.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/bootstrap/capi-gitops-cluster-bootstrap-config.yaml"," ",window.location.protocol,"//",window.location.host,a(32618).Z))),(0,r.kt)("p",null,"Then update the ",(0,r.kt)("inlineCode",{parentName:"p"},"GITOPS_REPO")," variable to point to your cluster"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand to see full yaml"),(0,r.kt)(l.Z,{title:"clusters/management/capi/boostrap/capi-gitops-cluster-bootstrap-config.yaml",className:"language-yaml",mdxType:"CodeBlock"},u.Z)),(0,r.kt)("h2",{id:"4-delete-a-cluster-with-the-weave-gitops-enterprise-ui"},"4. Delete a Cluster with the Weave GitOps Enterprise UI"),(0,r.kt)("p",null,"Here are the steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select the clusters you want to delete"),(0,r.kt)("li",{parentName:"ul"},"Press the ",(0,r.kt)("inlineCode",{parentName:"li"},"Create a PR to delete clusters")," button"),(0,r.kt)("li",{parentName:"ul"},"Either update the deletion PR values or leave the default values, depending on your situation"),(0,r.kt)("li",{parentName:"ul"},"Press the ",(0,r.kt)("inlineCode",{parentName:"li"},"Remove clusters")," button"),(0,r.kt)("li",{parentName:"ul"},"Merge the PR for clusters deletion")),(0,r.kt)("p",null,"Note that you can't apply an ",(0,r.kt)("em",{parentName:"p"},"empty")," repository to a cluster. If you have Cluster API clusters and other manifests committed to this repository, and then ",(0,r.kt)("em",{parentName:"p"},"delete all of them")," so there are zero manifests left, then the apply will fail and the resources will not be removed from the cluster.\nA workaround is to add a dummy ",(0,r.kt)("em",{parentName:"p"},"ConfigMap")," back to the Git repository after deleting everything else so that there is at least one manifest to apply."),(0,r.kt)("h2",{id:"5-disable-capi-support"},"5. Disable CAPI Support"),(0,r.kt)("p",null,"If you do not need CAPI-based cluster management support, you can disable CAPI\nvia the Helm Chart values."),(0,r.kt)("p",null,"Update your Weave GitOps Enterprise ",(0,r.kt)("inlineCode",{parentName:"p"},"HelmRelease")," object with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"global.capiEnabled")," value set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{33-35} title='clusters/management/weave-gitops-enterprise.yaml'","{33-35}":!0,title:"'clusters/management/weave-gitops-enterprise.yaml'"},"---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weave-gitops-enterprise-charts\n  namespace: flux-system\nspec:\n  interval: 60m\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  url: https://charts.dev.wkp.weave.works/releases/charts-v3\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      interval: 65m\n      chart: mccp\n      sourceRef:\n        kind: HelmRepository\n        name: weave-gitops-enterprise-charts\n        namespace: flux-system\n      version: 0.12.0\n  install:\n    crds: CreateReplace\n  upgrade:\n    crds: CreateReplace\n  interval: 50m\n  values:\n    global:\n      capiEnabled: false\n")),(0,r.kt)("p",null,"And that's it!"))}g.isMDXComponent=!0},32618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/capi-gitops-cluster-bootstrap-config-d9934a1e6872a5b7ee5559d2d97a3d83.yaml"},39213:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/wego-admin-c80945c1acf9908fe6e61139ef65c62e.yaml"},80285:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/capa-template-49001fbae51e2a9f365b80caebd6f341.yaml"},46677:(e,t,a)=>{a.d(t,{Z:()=>n});const n='apiVersion: capi.weave.works/v1alpha1\nkind: ClusterBootstrapConfig\nmetadata:\n  name: capi-gitops\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      weave.works/capi: bootstrap\n  jobTemplate:\n    generateName: "run-gitops-{{ .ObjectMeta.Name }}"\n    spec:\n      containers:\n        - image: ghcr.io/fluxcd/flux-cli:v0.41.0\n          name: flux-bootstrap\n          resources: {}\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/gitops"\n              readOnly: true\n          args:\n            [\n              "bootstrap",\n              "github",\n              "--kubeconfig=/etc/gitops/value",\n              "--owner=$GITHUB_USER",\n              "--repository=fleet-infra",\n              "--path=./clusters/{{ .ObjectMeta.Namespace }}/{{ .ObjectMeta.Name }}",\n            ]\n          envFrom:\n            - secretRef:\n                name: my-pat\n      restartPolicy: Never\n      volumes:\n        - name: kubeconfig\n          secret:\n            secretName: "{{ .ObjectMeta.Name }}-kubeconfig"\n'},11099:(e,t,a)=>{a.d(t,{Z:()=>n});const n='---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: wego-admin-cluster-role-binding\nsubjects:\n  - kind: User\n    name: wego-admin\n    apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: wego-admin-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: wego-admin-cluster-role\nrules:\n  - apiGroups: [""]\n    resources: ["secrets", "pods"]\n    verbs: ["get", "list"]\n  - apiGroups: ["apps"]\n    resources: ["deployments", "replicasets"]\n    verbs: ["get", "list"]\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: ["kustomizations"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: ["helmreleases"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n  - apiGroups: ["pac.weave.works"]\n    resources: ["policies"]\n    verbs: ["get", "list"]\n'}}]);