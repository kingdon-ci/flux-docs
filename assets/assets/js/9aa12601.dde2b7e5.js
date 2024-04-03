"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[96941],{19666:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(5730);function l(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},32342:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},71125:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),l=a(86010),s=a(63735),o=a(16550),i=a(34423),u=a(20636),c=a(99200);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(5730);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",v,s?.className,{"tabs__item--active":o===t})}),a??t)})))}function E(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(E,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,n.Z)({key:String(t)},e))}},8971:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(88746);a(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){let{tiers:t}=e;return n.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},85502:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=(a(71125),a(32342),a(8971)),s=a(77823),o=a(19666);const i={title:"Deploying CAPA with EKS",hide_title:!0},u=void 0,c={unversionedId:"guides/deploying-capa",id:"version-0.26.0/guides/deploying-capa",title:"Deploying CAPA with EKS",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.26.0/guides/deploying-capa.mdx",sourceDirName:"guides",slug:"/guides/deploying-capa",permalink:"/docs/0.26.0/guides/deploying-capa",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.26.0/guides/deploying-capa.mdx",tags:[],version:"0.26.0",frontMatter:{title:"Deploying CAPA with EKS",hide_title:!0},sidebar:"docs",previous:{title:"Displaying Custom Metadata",permalink:"/docs/0.26.0/guides/displaying-custom-metadata"},next:{title:"Using Terraform templates",permalink:"/docs/0.26.0/guides/using-terraform-templates"}},p={},d=[{value:"Creating your first CAPA Cluster",id:"creating-your-first-capa-cluster",level:2},{value:"1. Configure a capi provider",id:"1-configure-a-capi-provider",level:3},{value:"2. Add a template",id:"2-add-a-template",level:3}],m={toc:d};function f(e){let{components:t,...u}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,i.title," ",(0,r.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,r.kt)("h2",{id:"creating-your-first-capa-cluster"},"Creating your first CAPA Cluster"),(0,r.kt)("admonition",{title:"BEFORE YOU START",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the following software is installed before continuing with these instructions:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"github cli")," >= 2.3.0 ",(0,r.kt)("a",{parentName:"li",href:"https://cli.github.com/"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/#kubectl"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eksctl")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/eksctl/releases"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws cli")," ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusterctl")," >= v1.0.1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api/releases"},"(source)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusterawsadm")," >= v1.1.0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/cluster-api-provider-aws/releases"},"(source)"))),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID"),"and ",(0,r.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," of a user should be configured either via ",(0,r.kt)("inlineCode",{parentName:"p"},"aws configure")," or exported in the current shell.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," should be set as an environment variable in the current shell. It should have permissions to create Pull Requests against the cluster config repo.")),(0,r.kt)("p",null,"If you've followed the ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.26.0/enterprise/getting-started/install-enterprise"},"Installation guide")," you should have a management cluster ready to roll."),(0,r.kt)("h3",{id:"1-configure-a-capi-provider"},"1. Configure a capi provider"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.26.0/cluster-management/cluster-api-providers"},"Cluster API Providers")," page for more details on providers. He're we'll continue with ",(0,r.kt)("inlineCode",{parentName:"p"},"eks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"capa")," as an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Enable support for `ClusterResourceSet`s for automatically installing CNIs\nexport EXP_EKS=true\nexport EXP_MACHINE_POOL=true\nexport CAPA_EKS_IAM=true\nexport EXP_CLUSTER_RESOURCE_SET=true\n\nclusterctl init --infrastructure aws\n")),(0,r.kt)("h3",{id:"2-add-a-template"},"2. Add a template"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.26.0/gitops-templates/intro"},"CAPI Templates")," page for more details on this topic. Once we load a template we can use it in the UI to create clusters!"),(0,r.kt)("p",null,"Download the template below to your config repository path, then commit and push to your git origin."),(0,r.kt)(o.Z,{mdxType:"BrowserOnly"},(()=>(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/templates/capa-template.yaml"," ",window.location.protocol,"//",window.location.host,a(13284).Z))),(0,r.kt)(s.Z,{title:"clusters/management/apps/capi/templates/capa-template.yaml",className:"language-yaml",mdxType:"CodeBlock"},'apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: aws-eks-dev\n  namespace: default\n  annotations:\n    templates.weave.works/inject-prune-annotation: "true"\n    templates.weave.works/add-common-bases: "true"\n  labels:\n    weave.works/template-type: cluster\nspec:\n  description: AWS EKS Development Cluster\n  params:\n    - name: CLUSTER_NAME\n      description: The name for this cluster.\n    - name: AWS_REGION\n      description: AWS Region to create cluster\n      options: ["us-east-1", "eu-central-1", "eu-west-2", "us-west-2"]\n    - name: KUBERNETES_VERSION\n      description: EKS Kubernetes version to use\n      options: ["v1.19.8", "v1.20.7", "v1.21.2"]\n    - name: WORKER_MACHINE_COUNT\n      description: Number of worker nodes to create.\n  resourcetemplates:\n    - contents:\n        - apiVersion: gitops.weave.works/v1alpha1\n          kind: GitopsCluster\n          metadata:\n            name: "${CLUSTER_NAME}"\n            namespace: default\n            labels:\n              weave.works/capi: bootstrap\n          spec:\n            capiClusterRef:\n              name: "${CLUSTER_NAME}"\n\n        - apiVersion: cluster.x-k8s.io/v1beta1\n          kind: Cluster\n          metadata:\n            name: ${CLUSTER_NAME}\n            namespace: default\n            labels:\n              weave.works/capi: bootstrap\n          spec:\n            clusterNetwork:\n              pods:\n                cidrBlocks:\n                  - 192.168.0.0/16\n            controlPlaneRef:\n              apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n              kind: AWSManagedControlPlane\n              name: ${CLUSTER_NAME}-control-plane\n            infrastructureRef:\n              apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n              kind: AWSManagedControlPlane\n              name: ${CLUSTER_NAME}-control-plane\n\n        - apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n          kind: AWSManagedControlPlane\n          metadata:\n            name: ${CLUSTER_NAME}-control-plane\n            namespace: default\n          spec:\n            region: ${AWS_REGION}\n            sshKeyName: default\n            version: ${KUBERNETES_VERSION}\n            eksClusterName: ${CLUSTER_NAME}\n\n        - apiVersion: cluster.x-k8s.io/v1beta1\n          kind: MachinePool\n          metadata:\n            name: ${CLUSTER_NAME}-pool-0\n            namespace: default\n          spec:\n            clusterName: ${CLUSTER_NAME}\n            replicas: ${WORKER_MACHINE_COUNT}\n            template:\n              spec:\n                bootstrap:\n                  dataSecretName: ""\n                clusterName: ${CLUSTER_NAME}\n                infrastructureRef:\n                  apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n                  kind: AWSManagedMachinePool\n                  name: ${CLUSTER_NAME}-pool-0\n\n        - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n          kind: AWSManagedMachinePool\n          metadata:\n            name: ${CLUSTER_NAME}-pool-0\n            namespace: default\n          spec: {}\n'))}f.isMDXComponent=!0},13284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/capa-template-49001fbae51e2a9f365b80caebd6f341.yaml"}}]);