"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[12002],{32342:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),i=n(67294),o=n(86010),l=n(63735),r=n(16550),s=n(34423),c=n(20636),u=n(99200);function p(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function d(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,r]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,i.useLayoutEffect)((()=>{g&&r(g)}),[g]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var g=n(5730);const y="tabList__CuJ",k="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==r&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k,l?.className,{"tabs__item--active":r===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",y)},i.createElement(b,(0,a.Z)({},e,t)),i.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return i.createElement(w,(0,a.Z)({key:String(t)},e))}},21408:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(88746);n(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return a.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},40634:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),i=(n(67294),n(3905)),o=n(71125),l=n(32342),r=n(21408);const s={title:"Policy Profile",hide_title:!0},c='Policy Profile <TierLabel tiers="Enterprise" />',u={unversionedId:"policy/weave-policy-profile",id:"version-0.38.0/policy/weave-policy-profile",title:"Policy Profile",description:"Overview",source:"@site/versioned_docs/version-0.38.0/policy/weave-policy-profile.mdx",sourceDirName:"policy",slug:"/policy/weave-policy-profile",permalink:"/docs/policy/weave-policy-profile",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/policy/weave-policy-profile.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Policy Profile",hide_title:!0},sidebar:"docs",previous:{title:"Policy",permalink:"/docs/policy/"},next:{title:"PolicySet",permalink:"/docs/policy/policy-set"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Policy Sources",id:"policy-sources",level:2},{value:"Policy Agent Configuration",id:"policy-agent-configuration",level:2},{value:"Agent Modes",id:"agent-modes",level:3},{value:"Admission",id:"admission",level:4},{value:"Audit",id:"audit",level:4},{value:"Terraform Admission",id:"terraform-admission",level:4},{value:"Policy Validation Sinks",id:"policy-validation-sinks",level:3}],m={toc:d};function f(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"policy-profile-"},"Policy Profile ",(0,i.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Weave policy profile provides policies to automate the enforcement of best practices and conventions. It ensures the compliance of workloads through the use of a policy agent that provides an admission controller webhook that stops violating resources from deploying to a cluster and runs a daily audit that reports violating resources already deployed."),(0,i.kt)("p",null,"The profile configuration contains two main sections ",(0,i.kt)("inlineCode",{parentName:"p"},"policySource")," to configure the source for deploying policies and ",(0,i.kt)("inlineCode",{parentName:"p"},"policy-agent")," to configure the policy agent."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand for an example of the profile values file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  failurePolicy: Ignore\n\n  # If you don\'t want to use cert-manager, set useCertManager to false and provide your own certs\n  useCertManager: true\n  certificate: ""\n  key: ""\n  caCertificate: ""\n\n  persistence:\n    enabled: false\n    # claimStorage: 1Gi\n    # sinkDir: /tmp\n    # storageClassName: standard\n\n  config:\n    accountId: ""\n    clusterId: ""\n\n    audit:\n      # Enable audit functionality\n      enabled: false\n      # sinks:\n      #   # Enable writing violations as K8s events\n      #   k8sEventsSink:\n      #     enabled: true\n\n    admission:\n      # Enable admission functionality\n      enabled: true\n      # mutate: true # enable mutating violating resources\n      sinks:\n        # Enable writing violations as K8s events\n        k8sEventsSink:\n          enabled: true\n\n\npolicySource:\n  enabled: false\n  # url: ssh://git@github.com/weaveworks/policy-library\n  # tag: v1.0.0\n  # branch:\n  # path: ./  # Could be a path to the policies dir or a kustomization.yaml file\n  # secretRef: policy-library-auth  # (Optional): Name of the K8s secret with private repo auth credentials\n  # sourceRef: # Could specify a name for an existing GitSource reference instead of creating a new one\n  #   kind: GitRepository\n  #   name: policy-library\n  #   namespace: flux-system\n'))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"policy-sources"},"Policy Sources"),(0,i.kt)("p",null,"Policies are provided in the profile as Custom Resources. The agent reads from the policies deployed on the cluster and runs them during each admission request or when auditing a resource."),(0,i.kt)("p",null,"Policies are hosted in a policy library which is usually a git repository. They are fetched in the profile through the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize.toolkit.fluxcd.io.Kustomization"),", that deploys the policies to the cluster."),(0,i.kt)("p",null,"By default all policies in the specified path would be deployed in order to specify which policies should be deployed in a library, a ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize.config.k8s.io.Kustomization")," file should be defined in the repository."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources: # specifies the path to each required policy\n  - policies/ControllerContainerAllowingPrivilegeEscalation/policy.yaml\n  - policies/ControllerContainerRunningAsRoot/policy.yaml\n  - policies/ControllerReadOnlyFileSystem/policy.yaml\n")),(0,i.kt)("p",null,"The profile then needs to be configured with the necessary config to be able to reach the repository that is acting as a policy library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policySource:\n  enabled: true\n  url: URL of the repo where your policies exist\n  tag: tag name on the policies repo\n  path: Path to the policies dir - or a kustomization.yaml that selects some policies - in the repo\n  secretRef (if the repo is private): Name of the K8s secret with private repo credentials (leave empty if the repo is public)\n")),(0,i.kt)("p",null,"There is the option of referencing an existing policy library source instead of creating a new one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policySource:\n  enabled: true\n  sourceRef:\n    kind: Kind of the existing source\n    name: Name of the policy library source\n    namespace: Namespace where the source exists\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"policy-agent-configuration"},"Policy Agent Configuration"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," section is the single entry point for configuring the agent."),(0,i.kt)("p",null,"The agent needs the following parameters to be provided in the configuration yaml file:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accountId"),": unique identifier that signifies the owner of that agent"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clusterId"),": unique identifier for the cluster that the agent will run against")),(0,i.kt)("p",null,"The following optional parameters can also be provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logLevel"),': app log level (default: "info")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"probesListen"),': address for the probes server to run on (default: ":9000")'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metricsAddress"),': address the metric endpoint binds to (default: ":8080")')),(0,i.kt)("h3",{id:"agent-modes"},"Agent Modes"),(0,i.kt)("h4",{id:"admission"},"Admission"),(0,i.kt)("p",null,"This contains the admission module that enforces policies. It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"controller-runtime")," Kubernetes package to register a callback that will be called when the agent receives an admission request. Once called, the agent will validate the received resource against the admission and tenant policies and k8s will use the result of this validation to either allow or reject the creation/update of said resource."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Works with policies of provider ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes"))),(0,i.kt)("p",null,"To enable admission control:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    admission:\n      enabled: true\n")),(0,i.kt)("p",null,"Enabling admission controller requires certificates for secure communication with the webhook client and the admission server. The best way to achieve this is by installing ",(0,i.kt)("a",{parentName:"p",href:"https://cert-manager.io/docs/installation/"},"cert manager")," and then configuring the profile as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  useCertManager: true\n")),(0,i.kt)("p",null,"The cert manager can also be installed by installing the cert manager profile while creating the cluster."),(0,i.kt)("p",null,"There is the option of providing previously generated certificates although it is not recommended and it is up to the user to manage it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  certificate: "---" # admission server certificate\n  key: "---" # admission server private key\n  caCertificate: "---" # CA bundle to validate the webhook server, used by the client\n')),(0,i.kt)("p",null,"If the agent webhook could not be reached or the request failed to complete, the corresponding request would be refused. To change that behavior and accepts the request in cases of failure, this needs to be set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  failurePolicy: Ignore\n")),(0,i.kt)("h4",{id:"audit"},"Audit"),(0,i.kt)("p",null,"The audit functionality provides a full scan of the cluster(s) and reports back policy violations. This usually is used for policy violations reporting, and compliance posture analysis against known benchmarks like PCI DSS, CIS, .etc."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Works with policies of provider ",(0,i.kt)("inlineCode",{parentName:"p"},"kubernetes"))),(0,i.kt)("p",null,"To enable the audit functionality:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    audit:\n      enabled: true\n      interval: 24 # configuring the frequent of audit operations running in hours (default is 24 hours)\n")),(0,i.kt)("p",null,"The audit will be performed when the agent starts and then again periodically at an interval of your choice in hours (default is 24 hours). The results of the audit will be published to the configured ",(0,i.kt)("a",{parentName:"p",href:"#policy-validation-sinks"},"sink(s)"),"."),(0,i.kt)("h4",{id:"terraform-admission"},"Terraform Admission"),(0,i.kt)("p",null,"This is a webhook used to validate terraform plans. It is mainly used by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/tf-controller"},"TF-Controller")," to enforce policies on terraform plans"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Works with policies of provider ",(0,i.kt)("inlineCode",{parentName:"p"},"terraform"))),(0,i.kt)("p",null,"To enable the terraform admission control:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    tfAdmission:\n      enabled: true\n")),(0,i.kt)("h3",{id:"policy-validation-sinks"},"Policy Validation Sinks"),(0,i.kt)("p",null,"When validating a resource, a ",(0,i.kt)("a",{parentName:"p",href:"#policy-validation-sinks"},"validation object")," is generated that contains information about the status of that validation and metadata about the resource and policy involved. These objects can be exported to be visible for users as a critical part of the audit flow, but can also be useful as logs for the admission scenario."),(0,i.kt)("p",null,"By default, the agent only writes policy validations that are violating a certain policy when performing an audit. To write compliance results as well, the following needs to be specified in the profile:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    audit:\n      writeCompliance: true\n")),(0,i.kt)("p",null,"The agent profile supports storing the validations in different sinks. Multiple sinks can be used at the same time:"),(0,i.kt)(o.Z,{groupId:"violations-sinks",default:!0,mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"text-file",label:"Text File",mdxType:"TabItem"},(0,i.kt)("p",null,"The results will be dumped into a text file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," directory, in the agent container as a json string. It is important to note that this file will not be persisted and will be deleted upon pod restart, so generally this approach is not recommended for a production environment."),(0,i.kt)("p",null,"To enable writing to a text file in audit scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    audit:\n      sinks:\n        fileSystemSink:\n          fileName: "file.json"\n')),(0,i.kt)("p",null,"To enable writing to a text file in admission scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    admission:\n      sinks:\n        fileSystemSink:\n          fileName: "file.json"\n')),(0,i.kt)("p",null,"It is possible to make the file persistent using the following configuration. This assumes that there is a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"PersistentVolume")," already configured on the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  persistence:\n    enabled: false # specifies whether to use persistence or not\n    claimStorage: 1Gi # claim size\n    storageClassName: standard # k8s StorageClass name\n"))),(0,i.kt)(l.Z,{value:"kubernetes-events",label:"Kubernetes Events",mdxType:"TabItem"},"The results will be written as Kubernetes events. This means that they are accessible through the kubernetes API and can be consumed by custom exporters.",(0,i.kt)("p",null,"To enable writing Kubernetes events in audit scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    audit:\n      sinks:\n        k8sEventsSink:\n          enabled: true\n")),(0,i.kt)("p",null,"To enable writing Kubernetes events in admission scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"policy-agent:\n  config:\n    admission:\n      sinks:\n        k8sEventsSink:\n          enabled: true\n"))),(0,i.kt)(l.Z,{value:"notification-controller",label:"Notification Controller",mdxType:"TabItem"},"This requires the cluster to be managed using flux. It makes use of the flux notification controller to send events to multiple sources, depending on the controller configuration. The agent writes the events to the controller and it proceeds to publish it to the configured listeners.",(0,i.kt)("p",null,"To enable writing to flux notification controller in audit scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    audit:\n      sinks:\n        fluxNotificationSink:\n          address: ""\n')),(0,i.kt)("p",null,"To enable writing to flux notification controller in admission scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    admission:\n      sinks:\n        fluxNotificationSink:\n          address: ""\n'))),(0,i.kt)(l.Z,{value:"elasticsearch",label:"Elasticsearch",mdxType:"TabItem"},"The results of validating entities against policies will be written to an Elasticsearch index.",(0,i.kt)("p",null,"To enable writing to elasticsearch in audit scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    audit:\n      sinks:\n        elasticSink:\n          address: ""\n          username: ""\n          password: ""\n          indexName: ""\n          insertionMode: "upsert"\n')),(0,i.kt)("p",null,"To enable writing to elasticsearch in admission scenario:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'policy-agent:\n  config:\n    admission:\n      sinks:\n        elasticSink:\n          address: ""\n          username: ""\n          password: ""\n          indexName: ""\n          insertionMode: "insert"\n')),(0,i.kt)("p",null,"We support the following insertion modes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"insert"),": doesn't update or delete any old records. The index will contain a log for all validation objects and give an insight of all the historical data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"upsert"),": updates the old result of validating an entity against a policy that happened on the same day. So the index will only contain the latest validation results for a policy and entity combination per day."))))))}f.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);