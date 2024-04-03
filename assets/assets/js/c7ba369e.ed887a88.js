"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[85034],{862:(e,n,t)=>{t.d(n,{Z:()=>a});var i=t(67294),o=t(88746);t(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:n}=e;return i.createElement(o.Z,{title:`This feature is a available on ${n}.`,style:r},n)}},57596:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=t(87462),o=(t(67294),t(3905)),r=t(862);const a={title:"Pipeline",hide_title:!0},s='Pipeline <TierLabel tiers="Enterprise" />',p={unversionedId:"pipelines/spec/v1alpha1/pipeline",id:"version-0.19.0/pipelines/spec/v1alpha1/pipeline",title:"Pipeline",description:"The Pipeline API defines a resource for continuous delivery pipelines.",source:"@site/versioned_docs/version-0.19.0/pipelines/spec/v1alpha1/pipeline.mdx",sourceDirName:"pipelines/spec/v1alpha1",slug:"/pipelines/spec/v1alpha1/pipeline",permalink:"/docs/0.19.0/pipelines/spec/v1alpha1/pipeline",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.19.0/pipelines/spec/v1alpha1/pipeline.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Pipeline",hide_title:!0},sidebar:"docs",previous:{title:"Pipelines With Tekton",permalink:"/docs/0.19.0/pipelines/pipelines-with-tekton"},next:{title:"Introduction",permalink:"/docs/0.19.0/workspaces/intro"}},l={},c=[{value:"Specification",id:"specification",level:2},{value:"Pipeline",id:"pipeline",level:3},{value:"References",id:"references",level:3},{value:"Status",id:"status",level:3},{value:"Condition Reasons",id:"condition-reasons",level:4}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pipeline-"},"Pipeline ",(0,o.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"The Pipeline API defines a resource for continuous delivery pipelines."),(0,o.kt)("p",null,"An example of a fully defined pipeline that creates pull requests for application promotions is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pipelines.weave.works/v1alpha1\nkind: Pipeline\nmetadata:\n  name: podinfo-02\n  namespace: default\nspec:\n  appRef:\n    apiVersion: helm.toolkit.fluxcd.io/v2beta1\n    kind: HelmRelease\n    name: podinfo\n  environments:\n    - name: dev\n      targets:\n        - namespace: podinfo-02-dev\n          clusterRef:\n            kind: GitopsCluster\n            name: dev\n            namespace: flux-system\n    - name: test\n      targets:\n        - namespace: podinfo-02-qa\n          clusterRef:\n            kind: GitopsCluster\n            name: dev\n            namespace: flux-system\n        - namespace: podinfo-02-perf\n          clusterRef:\n            kind: GitopsCluster\n            name: dev\n            namespace: flux-system\n    - name: prod\n      targets:\n        - namespace: podinfo-02-prod\n          clusterRef:\n            kind: GitopsCluster\n            name: prod\n            namespace: flux-system\n  promotion:\n    strategy:\n      pull-request:\n        type: github\n        url: https://github.com/my-org/my-app-repo\n        baseBranch: main\n        secretRef:\n          name: github-credentials\n")),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("p",null,"The documentation for version ",(0,o.kt)("inlineCode",{parentName:"p"},"v1alpha1"),"  of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipeline")," resource is found next."),(0,o.kt)("h3",{id:"pipeline"},"Pipeline"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Pipeline is the Schema for the pipelines API\ntype Pipeline struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec PipelineSpec `json:"spec,omitempty"`\n    // +kubebuilder:default={"observedGeneration":-1}\n    Status PipelineStatus `json:"status,omitempty"`\n}\n\ntype PipelineSpec struct {\n    // Environments is a list of environments to which the pipeline\'s application is supposed to be deployed.\n    // +required\n    Environments []Environment `json:"environments"`\n    // AppRef denotes the name and type of the application that\'s governed by the pipeline.\n    // +required\n    AppRef LocalAppReference `json:"appRef"`\n    // Promotion defines details about how promotions are carried out between the environments\n    // of this pipeline.\n    // +optional\n    Promotion *Promotion `json:"promotion,omitempty"`\n}\n\ntype Environment struct {\n    // Name defines the name of this environment. This is commonly something such as "dev" or "prod".\n    // +required\n    Name string `json:"name"`\n    // Targets is a list of targets that are part of this environment. Each environment should have\n    // at least one target.\n    // +required\n    Targets []Target `json:"targets"`\n}\n\ntype Target struct {\n    // Namespace denotes the namespace of this target on the referenced cluster. This is where\n    // the app pointed to by the environment\'s `appRef` is searched.\n    // +required\n    Namespace string `json:"namespace"`\n    // ClusterRef points to the cluster that\'s targeted by this target. If this field is not set, then the target is assumed\n    // to point to a Namespace on the cluster that the Pipeline resources resides on (i.e. a local target).\n    // +optional\n    ClusterRef *CrossNamespaceClusterReference `json:"clusterRef,omitempty"`\n}\n\n// Promotion define promotion configuration for the pipeline.\ntype Promotion struct {\n    // Manual option to allow promotion between to require manual approval before proceeding.\n    // +optional\n    Manual bool `json:"manual,omitempty"`\n    // Strategy defines which strategy the promotion should use.\n    Strategy Strategy `json:"strategy"`\n}\n\n// Strategy defines all the available promotion strategies. All of the fields in here are mutually exclusive, i.e. you can only select one\n// promotion strategy per Pipeline. Failure to do so will result in undefined behaviour.\ntype Strategy struct {\n    // PullRequest defines a promotion through a Pull Request.\n    // +optional\n    PullRequest *PullRequestPromotion `json:"pull-request,omitempty"`\n    // Notification defines a promotion where an event is emitted through Flux\'s notification-controller each time an app is to be promoted.\n    // +optional\n    Notification *NotificationPromotion `json:"notification,omitempty"`\n    // SecrefRef reference the secret that contains a \'hmac-key\' field with HMAC key used to authenticate webhook calls.\n    // +optional\n    SecretRef *meta.LocalObjectReference `json:"secretRef,omitempty"`\n}\ntype GitProviderType string\n\nconst (\n    Github GitProviderType = "github"\n    Gitlab GitProviderType = "gitlab"\n)\n\ntype PullRequestPromotion struct {\n    // Indicates the git provider type to manage pull requests.\n    // +required\n    // +kubebuilder:validation:Enum=github;gitlab\n    Type GitProviderType `json:"type"`\n    // The git repository HTTPS URL used to patch the manifests for promotion.\n    // +required\n    URL string `json:"url"`\n    // The branch to checkout after cloning. Note: This is just the base\n    // branch that will eventually receive the PR changes upon merge and does\n    // not denote the branch used to create a PR from. The latter is generated\n    // automatically and cannot be provided.\n    // +required\n    BaseBranch string `json:"baseBranch"`\n    // SecretRef specifies the Secret containing authentication credentials for\n    // the git repository and for the Git provider API.\n    // For HTTPS repositories the Secret must contain \'username\' and \'password\'\n    // fields.\n    // For SSH repositories the Secret must contain \'identity\'\n    // and \'known_hosts\' fields.\n    // For Git Provider API to manage pull requests, it must contain a \'token\' field.\n    // +required\n    SecretRef meta.LocalObjectReference `json:"secretRef"`\n}\n\ntype NotificationPromotion struct{}\n\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// LocalAppReference is used together with a Target to find a single instance of an application on a certain cluster.\ntype LocalAppReference struct {\n    // API version of the referent.\n    // +required\n    APIVersion string `json:"apiVersion"`\n\n    // Kind of the referent.\n    // +required\n    Kind string `json:"kind"`\n\n    // Name of the referent.\n    // +required\n    Name string `json:"name"`\n}\n\n// CrossNamespaceClusterReference contains enough information to let you locate the\n// typed Kubernetes resource object at cluster level.\ntype CrossNamespaceClusterReference struct {\n    // API version of the referent.\n    // +optional\n    APIVersion string `json:"apiVersion,omitempty"`\n\n    // Kind of the referent.\n    // +required\n    Kind string `json:"kind"`\n\n    // Name of the referent.\n    // +required\n    Name string `json:"name"`\n\n    // Namespace of the referent, defaults to the namespace of the Kubernetes resource object that contains the reference.\n    // +optional\n    Namespace string `json:"namespace,omitempty"`\n}\n')),(0,o.kt)("h3",{id:"status"},"Status"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'type PipelineStatus struct {\n    // ObservedGeneration is the last observed generation.\n    // +optional\n    ObservedGeneration int64 `json:"observedGeneration,omitempty"`\n\n    // Conditions holds the conditions for the Pipeline.\n    // +optional\n    Conditions []metav1.Condition `json:"conditions,omitempty"`\n}\n')),(0,o.kt)("h4",{id:"condition-reasons"},"Condition Reasons"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Reasons are provided as utility, and are not part of the declarative API.\nconst (\n    // TargetClusterNotFoundReason signals a failure to locate a cluster resource on the management cluster.\n    TargetClusterNotFoundReason string = "TargetClusterNotFound"\n    // TargetClusterNotReadyReason signals that a cluster pointed to by a Pipeline is not ready.\n    TargetClusterNotReadyReason string = "TargetClusterNotReady"\n    // ReconciliationSucceededReason signals that a Pipeline has been successfully reconciled.\n    ReconciliationSucceededReason string = "ReconciliationSucceeded"\n)\n')))}d.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),l=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);