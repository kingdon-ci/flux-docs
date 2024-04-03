"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[32508],{32342:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),a=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>N});var i=n(87462),a=n(67294),o=n(86010),r=n(63735),l=n(16550),s=n(34423),c=n(20636),u=n(99200);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:a}}=e;return{value:t,label:n,attributes:i,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,o=d(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:i}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,o]=(0,u.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:i}),y=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(5730);const g="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),i=c[n].value;i!==l&&(p(t),s(i))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},r,{className:(0,o.Z)("tabs__item",b,r?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(v,(0,i.Z)({},e,t)),a.createElement(k,(0,i.Z)({},e,t)))}function N(e){const t=(0,y.Z)();return a.createElement(w,(0,i.Z)({key:String(t)},e))}},48717:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),a=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function r(e){let{tiers:t}=e;return i.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},47727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var i=n(87462),a=(n(67294),n(3905)),o=n(71125),r=n(32342),l=n(48717);const s={title:"Weave Policy Profile",hide_title:!0},c='Weave policy profile <TierLabel tiers="Enterprise" />',u={unversionedId:"policy/weave-policy-profile",id:"version-0.17.0/policy/weave-policy-profile",title:"Weave Policy Profile",description:"Overview",source:"@site/versioned_docs/version-0.17.0/policy/weave-policy-profile.mdx",sourceDirName:"policy",slug:"/policy/weave-policy-profile",permalink:"/docs/0.17.0/policy/weave-policy-profile",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.17.0/policy/weave-policy-profile.mdx",tags:[],version:"0.17.0",frontMatter:{title:"Weave Policy Profile",hide_title:!0},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/0.17.0/policy/getting-started"},next:{title:"Weave Policy Agent Configuration",permalink:"/docs/0.17.0/policy/configuration"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Policy Sources",id:"policy-sources",level:2},{value:"Admission Controller Setup",id:"admission-controller-setup",level:2},{value:"Audit",id:"audit",level:2},{value:"Policy Sets",id:"policy-sets",level:2},{value:"Policy Validation Sinks",id:"policy-validation-sinks",level:2},{value:"Policy Validation",id:"policy-validation",level:2}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weave-policy-profile-"},"Weave policy profile ",(0,a.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("h1",{id:"weave-policy-profile"},"Weave Policy Profile"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Weave policy profile provides policies to automate the enforcement of best practice and conventions. It ensures the compliance of workloads through the use of a policy agent that provides an admission controller webhook that stops violating resources from deploying to a cluster and runs a daily audit that reports violating resources already deployed."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"policy-sources"},"Policy Sources"),(0,a.kt)("p",null,"Policies are provided in the profile as Custom Resources. The agent reads from the policies deployed on the cluster and runs them during each admission request or when auditing a resource."),(0,a.kt)("p",null,"Policies are hosted in a policy library which is usually a git repository. They are fetched in the profile through the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomize.toolkit.fluxcd.io.Kustomization"),", that deploys the policies to the cluster."),(0,a.kt)("p",null,"By default all policies in the specified path would be deployed in order to specify which policies should be deployed in a library, a ",(0,a.kt)("inlineCode",{parentName:"p"},"kustomize.config.k8s.io.Kustomization")," file should be defined in the repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources: # specifies the path to each required policy \n  - policies/ControllerContainerAllowingPrivilegeEscalation/policy.yaml\n  - policies/ControllerContainerRunningAsRoot/policy.yaml\n  - policies/ControllerReadOnlyFileSystem/policy.yaml\n")),(0,a.kt)("p",null,"The profile then needs to be configured with the necessary config to be able to reach the repository that is acting as a policy library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policySource:\n  enabled: true\n  url: URL of the repo where your policies exist\n  tag: tag name on the policies repo\n  path: Path to the policies dir - or a kustomization.yaml that selects some policies - in the repo\n  secretRef (if the repo is private): Name of the K8s secret with private repo credentials (leave empty if the repo is public)\n")),(0,a.kt)("p",null,"There is the option of referencing an existing policy library source instead of creating a new one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policySource:\n  enabled: true\n  sourceRef:\n    kind: Kind of the existing source\n    name: Name of the policy library source\n    namespace: Namespace where the source exists\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"admission-controller-setup"},"Admission Controller Setup"),(0,a.kt)("p",null,"To enable admission control:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    admission:\n      enabled: true\n")),(0,a.kt)("p",null,"Enabling admission controller requires certificates for secure communication with the webhook client and the admission server. The best way to achieve this is by installing ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},"cert manager")," and then configuring the profile as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  useCertManager: true\n")),(0,a.kt)("p",null,"There is the option of providing previously generated certificates although it is not recommended and it is up to the user to manage it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  certificate: "---" # admission server certificate\n  key: "---" # admission server private key\n  caCertificate: "---" # CA bundle to validate the webhook server, used by the client\n')),(0,a.kt)("p",null,"If the agent webhook could not be reached or the request failed to complete, the corresponding request would be refused. To change that behavior and accepts the request in cases of failure, this needs to be set:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  failurePolicy: Ignore\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"audit"},"Audit"),(0,a.kt)("p",null,"Audit functionality provide a full scan on the cluster(s) and report back policy violations. This usually is used for policy violations reporting, and Compliance posture analysis against known benchmarks like PCI DSS, CIS, .etc."),(0,a.kt)("p",null,"To enable audit functionality:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    audit:\n      enabled: true\n      interval: 24 # configuring the frequent of audit operations running in hours (default is 24 hour)\n")),(0,a.kt)("p",null,"Audit will be performed when the agent starts and then at an interval of your choice in hours (default is 24 hour). The results from that sink would be published by the registered sinks."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"policy-sets"},"Policy Sets"),(0,a.kt)("p",null,"Policy set is a custom resource that gives more control over which policies to be used in each scenario. There are cases in which certain policies are required to be observed but denying the requests of violating objects would be disruptive. Policy set allows defining additional filters for each scenario: ",(0,a.kt)("inlineCode",{parentName:"p"},"Audit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Admission")," so it is possible to report violations on certain policies without the need of blocking the deployments if certain policies are not as critical as others."),(0,a.kt)("p",null,"Policy set should also be hosted on the policy library. The following definition defines which specific policies should be used using policy names:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pac.weave.works/v2beta1\nkind: PolicySet\nmetadata:\n    name: admission-policy-set\nspec:\n    id: admission-policy-set\n    name: admission-policy-set\n    filters:\n      ids:\n        - weave.policies.containers-running-with-privilege-escalation\n        - weave.policies.containers-read-only-root-filesystem\n")),(0,a.kt)("p",null,"To make use of this policy set in the profile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config: \n    admission:\n      policySet: admission-policy-set # name of policy set to be used for admission\n    audit: \n      policySet: audit-policy-set # name of policy set to be used for audit\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"policy-validation-sinks"},"Policy Validation Sinks"),(0,a.kt)("p",null,"When validating a resource a validation object is generated that contains information about the status of that validation and metadata about the resource and policy involved. These objects should be exported to be visible for users as a critical part of the audit flow, but can also be useful as logs for the admission scenario."),(0,a.kt)("p",null,"By default the agent only writes policy validation that are violating a certain policy when performing an audit, to write compliance results as well, the following needs to be specified in the profile:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    audit:\n      writeCompliance: true\n")),(0,a.kt)("p",null,"The agent profile supports multiple methods for different scenarios either Admission or Audit to expose this data and multiple can be used at the same time:"),(0,a.kt)(o.Z,{groupId:"violations-sinks",default:!0,mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"text-file",label:"Text File",mdxType:"TabItem"},(0,a.kt)("p",null,"The results would be dumped into a text file in ",(0,a.kt)("inlineCode",{parentName:"p"},"logs")," directory in the agent container as a json string. It is important to note that this file would not be persistent and would be deleted upon pod restart, so generally this approach is not recommended for production environment."),(0,a.kt)("p",null,"To enable writing to a text file in audit scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    audit:\n      sinks:\n        fileSystemSink:\n          fileName: "file.json"\n')),(0,a.kt)("p",null,"To enable writing to a text file in admission scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    admission:\n      sinks:\n        fileSystemSink:\n          fileName: "file.json"\n')),(0,a.kt)("p",null,"It is possible to make the file persistent, this assumes that there is a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PersistentVolume")," already configured on the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  persistence:\n    enabled: false # specifies whether to use persistence or not\n    claimStorage: 1Gi # claim size\n    storageClassName: standard # k8s StorageClass name\n"))),(0,a.kt)(r.Z,{value:"kubernetes-events",label:"Kubernetes Events",mdxType:"TabItem"},"The results would be written as Kubernetes events. This means that they are accessible through the kubernetes API and can be consumed by custom exporters.",(0,a.kt)("p",null,"To enable writing Kubernetes events in audit scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    audit:\n      sinks:\n        k8sEventsSink:\n          enabled: true\n")),(0,a.kt)("p",null,"To enable writing Kubernetes events in admission scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    admission:\n      sinks:\n        k8sEventsSink:\n          enabled: true\n"))),(0,a.kt)(r.Z,{value:"notification-controller",label:"Notification Controller",mdxType:"TabItem"},"This requires the cluster to be managed using flux. It makes use of flux notification controller to send events to multiple sources, depending on the controller configuration. The agent writes the events to the controller and it proceeds to publish it to the configured listeners.",(0,a.kt)("p",null,"To enable writing to flux notification controller in audit scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    audit:\n      sinks:\n        fluxNotificationSink:\n          address: ""\n')),(0,a.kt)("p",null,"To enable writing to flux notification controller in admission scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    admission:\n      sinks:\n        fluxNotificationSink:\n          address: ""\n'))),(0,a.kt)(r.Z,{value:"elasticsearch",label:"Elasticsearch",mdxType:"TabItem"},"The results of validating entities against policies would be written in Elasticsearch index.",(0,a.kt)("p",null,"To enable writing to elasticsearch in audit scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    audit:\n      sinks:\n        elasticSink:\n          address: ""\n          username: ""\n          password: ""\n          indexName: ""\n          insertionMode: "upsert"\n')),(0,a.kt)("p",null,"To enable writing to flux notification controller in admission scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    admission:\n      sinks:\n        elasticSink:\n          address: ""\n          username: ""\n          password: ""\n          indexName: ""\n          insertionMode: "insert"\n')))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"policy-validation"},"Policy Validation"),(0,a.kt)("p",null,"Policy validation object contains all the necessary information to give the user a clear idea on what caused it. It is the result of validating an entity against a policy."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: string # identifier for the violation\naccount_id: string # organization identifier\ncluster_id: string # cluster identifier\npolicy: object # contains related policy data\nentity: object # contains related resource data\nstatus: string # Violation or Compliance\nmessage: string # message that summarizes the policy validation\ntype: string # Admission or Audit\ntrigger: string # what triggered the validation, create request or initial audit,..\ncreated_at: string # time that the validation occurred in \n")))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);