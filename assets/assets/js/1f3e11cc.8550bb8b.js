"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[41716],{32342:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),o=n(86010);const a="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>N});var i=n(87462),o=n(67294),a=n(86010),r=n(63735),s=n(16550),l=n(34423),p=n(20636),c=n(99200);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:o}}=e;return{value:t,label:n,attributes:i,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=m(e),[r,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[l,p]=h({queryString:n,groupId:i}),[u,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,c.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),g=(()=>{const e=l??u;return d({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),f(e)}),[p,f,a]),tabValues:a}}var g=n(5730);const k="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),i=p[n].value;i!==s&&(u(t),l(i))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,i.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},r,{className:(0,a.Z)("tabs__item",v,r?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",k)},o.createElement(y,(0,i.Z)({},e,t)),o.createElement(b,(0,i.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(w,(0,i.Z)({key:String(t)},e))}},80822:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(67294),o=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function r(e){let{tiers:t}=e;return i.createElement(o.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},65699:(e,t,n)=>{n.d(t,{ZP:()=>r});var i=n(87462),o=(n(67294),n(3905));const a={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"This feature is in alpha and certain aspects will change")),(0,o.kt)("p",{parentName:"admonition"},"We're very excited for people to use this feature.\nHowever, please note that changes in the API, behaviour and security will evolve.\nThe feature is suitable to use in controlled testing environments.")))}r.isMDXComponent=!0},81082:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var i=n(87462),o=(n(67294),n(3905)),a=n(80822),r=(n(71125),n(32342),n(65699));const s=n.p+"assets/images/manual-promotion-ui-6fd5aea1f366d7d647e2005668b4b106.png",l={title:"Promoting applications",hide_title:!0},p='Promoting applications through pipeline environments <TierLabel tiers="Enterprise" />',c={unversionedId:"pipelines/promoting-applications",id:"version-0.25.0/pipelines/promoting-applications",title:"Promoting applications",description:"Pipelines allow you to configure automatic promotions of applications through a consecutive set of environments, e.g. from dev to staging to production. The environments are defined in the Pipeline resource itself so that each pipeline governs a single application and all the environments to which it is deployed.",source:"@site/versioned_docs/version-0.25.0/pipelines/promoting-applications.mdx",sourceDirName:"pipelines",slug:"/pipelines/promoting-applications",permalink:"/docs/0.25.0/pipelines/promoting-applications",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.25.0/pipelines/promoting-applications.mdx",tags:[],version:"0.25.0",frontMatter:{title:"Promoting applications",hide_title:!0},sidebar:"docs",previous:{title:"Authorization",permalink:"/docs/0.25.0/pipelines/authorization"},next:{title:"Using GitOpsTemplates for Pipelines",permalink:"/docs/0.25.0/pipelines/pipeline-templates"}},u={},m=[{value:"Expose the promotion webhook",id:"expose-the-promotion-webhook",level:2},{value:"Setup notifications from leaf clusters",id:"setup-notifications-from-leaf-clusters",level:2},{value:"Pull request",id:"pull-request",level:2},{value:"Supported Git Providers",id:"supported-git-providers",level:3},{value:"Credentials Secret",id:"credentials-secret",level:3},{value:"Define promotion in pipeline resource",id:"define-promotion-in-pipeline-resource",level:3},{value:"Security Recommendations",id:"security-recommendations",level:3},{value:"Add markers to app manifests",id:"add-markers-to-app-manifests",level:3},{value:"Notification",id:"notification",level:2},{value:"Manual promotion",id:"manual-promotion",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Retry Logic",id:"retry-logic",level:3},{value:"Rate Limiting",id:"rate-limiting",level:3}],d={toc:m};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"promoting-applications-through-pipeline-environments-"},"Promoting applications through pipeline environments ",(0,o.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)(r.ZP,{mdxType:"AlphaWarning"}),(0,o.kt)("p",null,"Pipelines allow you to configure automatic promotions of applications through a consecutive set of environments, e.g. from dev to staging to production. The environments are defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipeline")," resource itself so that each pipeline governs a single application and all the environments to which it is deployed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"At the moment only applications defined as Flux ",(0,o.kt)("inlineCode",{parentName:"p"},"HelmReleases")," are supported in automatic promotions.")),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"an example promotion PR",src:n(828).Z,width:"1724",height:"1505"})),(0,o.kt)("figcaption",null,"An example of a pull request for an application promotion")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../getting-started"},"Getting started guide")," describes how to create a basic pipeline for an application so you can visualize its deployments across a series of environments. You may also configure a pipeline in order to promote applications across a series of environments.\nThere are currently two supported strategies for application promotions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pull request strategy: this strategy is used for applications that are delivered via Flux to all environments of a pipeline. Typically, the versions of these applications are stored in Git and therefore pull requests can be used to update them as part of a promotion."),(0,o.kt)("li",{parentName:"ul"},"Notification strategy: this strategy is used when an external CI system is responsible for promoting an application across the environments of a pipeline. In this strategy, the notification controller running on the management cluster is used to forward notifications of succesful promotions to external CI systems.")),(0,o.kt)("p",null,"Before configuring any of the above promotion strategies, you need to setup notifications from all your environments so that whenever a new version gets deployed, the promotion webhook component of the pipeline controller is notified and takes an action based on the pipeline definition. The rest of this guide describes the configuration needed to setup application promotion via pipelines."),(0,o.kt)("h2",{id:"expose-the-promotion-webhook"},"Expose the promotion webhook"),(0,o.kt)("p",null,"Applications deployed in leaf clusters use the Flux notification controller running on each leaf cluster, to notify the management cluster of a successful promotion. This requires network connectivity to be established between the leaf cluster and the management cluster."),(0,o.kt)("p",null,"The component responsible for listening to incoming notifications from leaf clusters is the pipeline controller. It hosts a webhook service that needs to be exposed via an ingress resource to make it available for external calls. Exposing the webhook service is done via the Weave GitOps Enterprise Helm chart values and the configuration used depends on your environment. The example below shows the configuration for NGINX ingress controller and needs to be adjusted if another ingress controller is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  values:\n    enablePipelines: true\n    pipeline-controller:\n      promotion:\n        ingress:\n          enabled: true\n          className: nginx\n          annotations:\n            cert-manager.io/cluster-issuer: letsencrypt\n          hosts:\n          - host: promotions.example.org\n            paths:\n            - path: /?(.*)\n              pathType: ImplementationSpecific\n          tls:\n          - secretName: promotions-tls\n            hosts:\n            - promotions.example.org\n")),(0,o.kt)("p",null,"You will need the externally reachable URL of this service later on in this guide."),(0,o.kt)("h2",{id:"setup-notifications-from-leaf-clusters"},"Setup notifications from leaf clusters"),(0,o.kt)("p",null,"Once the webhook service is exposed over HTTP/S, you need to create alert/provider resources to send notifications to it from leaf clusters. These notifications represent successful promotions for applications running on the leaf clusters."),(0,o.kt)("p",null,"Successful promotion events are triggered by Flux's ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/notification/"},"notification controller"),". You create a Provider pointing to the promotion webhook exposed earlier and an Alert targeting the app's HelmRelease:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Provider\nmetadata:\n  name: promotion-my-app\nspec:\n  address: "https://promotions.example.org/promotion/pipeline-01/my-app/dev"\n  type: generic-hmac\n  secretRef:\n    name: hmac-secret\n')),(0,o.kt)("p",null,"In the example above, the ",(0,o.kt)("inlineCode",{parentName:"p"},"generic-hmac")," Provider is used to ensure notifications originate from authenticated sources. The referenced Secret, should include a ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," field which holds the HMAC key. The same HMAC key must be specified in the Secret referenced by the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.promotion.strategy.secretRef.name")," field, so that the pipeline controller can verify any incoming notifications. For more information on the ",(0,o.kt)("inlineCode",{parentName:"p"},"generic-hmac")," Provider, please refer to the notification controller ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/notification/provider/#generic-webhook-with-hmac"},"docs"),"."),(0,o.kt)("p",null,"Note that by default, the promotion webhook endpoint is exposed at ",(0,o.kt)("inlineCode",{parentName:"p"},"/promotion")," as shown in the example above. However you may use rewrite rules in your ingress configuration to omit it, if desired. For example, if using NGINX ingress controller, you may use the following annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"annotations:\n  nginx.ingress.kubernetes.io/rewrite-target: /promotion/$1\n")),(0,o.kt)("p",null,"The Provider address can then be set as ",(0,o.kt)("inlineCode",{parentName:"p"},"https://promotions.example.org/pipeline-01/my-app/dev"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may also use the ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/notification/provider/#generic-webhook-with-hmac"},"generic webhook provider type that supports HMAC verification")," to ensure incoming notifications originate from authenticated sources. ")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"address")," field's URL path is comprised of 3 components again:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The namespace of the app's pipeline."),(0,o.kt)("li",{parentName:"ol"},"The name of the pipeline resource."),(0,o.kt)("li",{parentName:"ol"},'The origin environment\'s name. This is the name of the environment that the event is created in, e.g. "dev" for events coming from the "dev" environment.')),(0,o.kt)("p",null,"Weave GitOps Enterprise can then parse the incoming URL path to identify the pipeline resource and look up the next environment for the defined promotion action."),(0,o.kt)("p",null,"An example Alert might look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Alert\nspec:\n  eventSeverity: info\n  eventSources:\n  - kind: HelmRelease\n    name: my-app\n  exclusionList:\n  - .*upgrade.*has.*started\n  - .*is.*not.*ready\n  - ^Dependencies.*\n  providerRef:\n    name: promotion-my-app\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Be sure to create the Provider/Alert tuple on ",(0,o.kt)("strong",{parentName:"p"},"each of the leaf clusters\ntargeted by a pipeline"),".")),(0,o.kt)("p",null,"Now as soon as the ",(0,o.kt)("inlineCode",{parentName:"p"},"HelmRelease")," on the first environment defined in the pipeline is bumped (e.g. by Flux discovering a new version in the Helm repository), an event is sent to the promotion webhook which will determine the next action based on the pipeline definition and chosen strategy. The rest of this guide describes how to setup up any of the available strategies depending on your requirements. "),(0,o.kt)("h2",{id:"pull-request"},"Pull request"),(0,o.kt)("p",null,"This section covers adding a promotion by pull request (PR) strategy, so that whenever the application defined in a pipeline\nis upgraded in one of the pipeline's environments, a PR is created that updates the manifest file setting the application version in the next environment."),(0,o.kt)("p",null,"The dynamic nature of GitOps deployments requires you to assist Weave GitOps a little with information on which repository hosts the manifest files,\nhow to authenticate with the repository and the Git provider API, and which file hosts the version definition for each environment."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Creating pull requests requires read and write access in your git repo.\nA compromised token could lead to changing the git repository and creation of legitimate looking changes/pull requests."),(0,o.kt)("p",{parentName:"admonition"},"Ensure you understand and adopt ",(0,o.kt)("a",{parentName:"p",href:"./#security-recommendations"},"security recommendations")," before using the feature.")),(0,o.kt)("h3",{id:"supported-git-providers"},"Supported Git Providers"),(0,o.kt)("p",null,"The following Git providers are currently support by this promotion strategy:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gitlab.com/"},"GitLab")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.atlassian.com/software/bitbucket/enterprise"},"BitBucket Server / DataCenter"))),(0,o.kt)("p",null,"Select your Git provider via ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.promotion.strategy.pull-request.type"),". For example, for ",(0,o.kt)("inlineCode",{parentName:"p"},"gitlab")," it would look similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'promotion:\n  strategy:\n    pull-request:\n      type: gitlab\n      url: "https://gitlab.com/weaveworks/<my-awesome-project.git>"\n      baseBranch: main\n      secretRef:\n        name: gitlab-promotion-credentials\n')),(0,o.kt)("p",null,"More info in the ",(0,o.kt)("a",{parentName:"p",href:"../spec/v1alpha1/pipeline/#pipeline"},"spec"),"."),(0,o.kt)("h3",{id:"credentials-secret"},"Credentials Secret"),(0,o.kt)("p",null,"In the journey of creating a pull request, there are different secrets involved:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pipeline controller receives events via ",(0,o.kt)("a",{parentName:"li",href:"./#setup-notifications-from-leaf-clusters"},"webhook from leaf clusters"),". Hmac is used for authN/authZ so an hmac key should be provided in this case."),(0,o.kt)("li",{parentName:"ol"},"Pipeline controller clones and patches manifests to promote from the pipeline configuration repo. A set of ",(0,o.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/gitrepositories/#secret-reference"},"git credentials")," are required."),(0,o.kt)("li",{parentName:"ol"},"Pipeline controller uses git provider api to create the pull request with the promoted manifests. A Personal Access Token (PAT) needs to be created to interact with pipelines git provider API. This PAT is also used to list pull requests from the configured repository.")),(0,o.kt)("p",null,"Create a Kubernetes secret with the previous data."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# example to use git over https with basic auth and pat\n$ kubectl create secret generic promotion-credentials \\\n  --namespace=pipeline-01 \\\n  --from-literal="username=<bot account name>" \\\n  --from-literal="password=<token value>" \\\n  --from-literal="token=<token value>" \\\n  --from-literal="hmac-key=<hmac-key value>"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: Secret\nmetadata:\n  name: promotion-credentials\n  namespace: pipeline-01\ndata:\n  username: ZXhhbXBsZQ==\n  password: ZXhhbXBsZS1wYXNzd29yZA==\n  token: Z2hwX01IL3RsTFpXTXZMY0FxVWRYY1ZGL0lGbzh0WDdHNjdsZmRxWQ==\n  hmac-key: OEIzMTNBNjQ0REU0OEVGODgxMTJCQ0VFNTQ3NkE=\ntype: Opaque\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"The Git provider token provided in the ",(0,o.kt)("inlineCode",{parentName:"li"},"token")," field needs to be given permission to create pull requests in the pipeline's repository (defined in ",(0,o.kt)("inlineCode",{parentName:"li"},".spec.promotion.strategy.pull-request.url"),")."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"hmac-key")," field must match the key used for the Provider resource (.spec.secretRef), if specified in the leaf clusters.")))),(0,o.kt)("h3",{id:"define-promotion-in-pipeline-resource"},"Define promotion in pipeline resource"),(0,o.kt)("p",null,"The field ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.promotion.strategy.pull-request")," defines details about the Git repository used for promoting the given app.\nSet the ",(0,o.kt)("inlineCode",{parentName:"p"},"secretRef.name")," field to the name of the Secret created in the previous step and the ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"branch")," fields to the\nGit repository's HTTPS URL and optionally a specific branch (if the branch is not set, it defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),").\nIf using the ",(0,o.kt)("inlineCode",{parentName:"p"},"generic-hmac")," Provider from leaf clusters, also set the ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.promotion.strategy.secretRef.name")," to the name of the Secret created previously."),(0,o.kt)("p",null,"More info in the ",(0,o.kt)("a",{parentName:"p",href:"../spec/v1alpha1/pipeline/#pipeline"},"spec")),(0,o.kt)("h3",{id:"security-recommendations"},"Security Recommendations"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Adopt as much of the recommendations in this section to reduce the risks associated with the secrets involved in pull requests.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Create a user account for pull request changes"),": this user context would be used to do any git provider operation,\nand for security and auditing perspective, you don't want to impersonate a real user for it.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"using bot account",src:n(29786).Z,width:"2074",height:"494"}))),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Restrict access to the secret"),": the promotion credentials needs to reside in the same Namespace as the Pipeline resource on the management cluster. Restrict\nvia RBAC that only ",(0,o.kt)("inlineCode",{parentName:"li"},"pipeline-controller")," service account is able to read it.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: read-app-promotion-credentials\n  namespace: app\nrules:\n  - apiGroups:\n      - ""\n    resourceNames:\n      - "app-promotion-credentials"\n    resources:\n      - "secrets"\n    verbs:\n      - "get"\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: pipeline-controller-read-app-promotion-credentials\n  namespace: app\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: read-app-promotion-credentials\nsubjects:\n  - kind: ServiceAccount\n    name: pipeline-controller\n    namespace: pipeline-system\n'))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Do not use long-live tokens"),": set an expiration date and rotate them according to your security policy.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create token with expiration",src:n(79385).Z,width:"1598",height:"926"}))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Honour the least privilege principle"),": avoid having high privilege tokens. Restrict the token to your just your repo and to just the operations required.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("p",null,"For example, if the case of GitHub, use ",(0,o.kt)("a",{parentName:"p",href:"https://github.blog/2022-10-18-introducing-fine-grained-personal-access-tokens-for-github/"},"fine-grained tokens")," to only\nallow access to the single repo that your configuration manifests exist."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create token least priviledge",src:n(59988).Z,width:"1596",height:"1380"}))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Review active access tokens on a regular basis"),": to ensure that only the ones that are required are present at all times.")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("p",null,"For example, using github and fine-grained tokens you ",(0,o.kt)("a",{parentName:"p",href:"https://github.blog/2022-10-18-introducing-fine-grained-personal-access-tokens-for-github/#approving-and-auditing-personal-access-tokens"},"could do so"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"review tokens",src:n(83276).Z,width:"1750",height:"570"}))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Review git provider recommendations and examples"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"GitHub")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"GitLab"))),(0,o.kt)("h3",{id:"add-markers-to-app-manifests"},"Add markers to app manifests"),(0,o.kt)("p",null,"The discovery of the version field is done using deterministic markers in a YAML manifest file. An example ",(0,o.kt)("inlineCode",{parentName:"p"},"HelmRelease")," manifest with such a marker looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{7}","{7}":!0},'---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nspec:\n  chart:\n    spec:\n      version: 0.13.7 # {"$promotion": "pipeline-01:my-app:prod"}\n')),(0,o.kt)("p",null,"The value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"$promotion")," field in the comment is comprised of 3 components separated by colons:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The first field is the Namespace of the pipeline resource that the app is part of. In the example above this is ",(0,o.kt)("inlineCode",{parentName:"li"},"pipeline-01"),"."),(0,o.kt)("li",{parentName:"ol"},"The second field denotes the name of the pipeline resource."),(0,o.kt)("li",{parentName:"ol"},"The third field is the name of the environment that this specific HelmRelease targets. The environment name in the marker needs to match with the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," field of one of the environments defined in the pipeline's ",(0,o.kt)("inlineCode",{parentName:"li"},".spec.environments")," array.")),(0,o.kt)("p",null,"Weave GitOps Enterprise will look for this marker whenever it receives an event from the respective HelmRelease of one of the leaf clusters and patch the file with the version denoted in the event (see the section above for instructions on setting up notification events from leaf clusters). Finally, it will create a Git provider PR to update the version of the application for the next environment in the pipeline."),(0,o.kt)("h2",{id:"notification"},"Notification"),(0,o.kt)("p",null,"This section explains how to configure pipelines to work with external CI systems that are responsible for application promotions."),(0,o.kt)("p",null,"This strategy uses the notification controller running on the management cluster, to forward any notifications received by the promotion webhook, from leaf clusters to external CI systems. This requires to ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/cheatsheets/bootstrap/#enable-notifications-for-third-party-controllers"},"patch")," the Flux manifests of the management cluster, in order to allow objects of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipeline")," to be used as event sources. An example of a patch applied to enable this is shown below: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: kustomize.config.k8s.io/v1beta1\nkind: Kustomization\nresources:\n- gotk-components.yaml\n- gotk-sync.yaml\npatches:\n- patch: |\n    - op: add\n      path: /spec/versions/0/schema/openAPIV3Schema/properties/spec/properties/eventSources/items/properties/kind/enum/-\n      value: Pipeline\n  target:\n    kind: CustomResourceDefinition\n    name:  alerts.notification.toolkit.fluxcd.io\n")),(0,o.kt)("p",null,"You can now create Provider/Alert resources on the management cluster to forward notifications to external systems. For example, the Provider resource shown below is used to invoke a GitHub Actions workflow on a repository: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Provider\nmetadata:\n  name: promotion-my-app-via-github-actions\nspec:\n  type: githubdispatch\n  address: https://github.com/my-org/my-app-repo\n  secretRef:\n    name: github-credentials\n")),(0,o.kt)("p",null,"To use this Provider, add an Alert that uses the pipeline resource defined on the management cluster as an event source. An example of such an Alert is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Alert\nmetadata:\n  name: promotion-my-app-via-github-actions\nspec:\n  eventSeverity: info\n  eventSources:\n  - kind: Pipeline\n    name: my-app\n    namespace: my-app-ns\n  providerRef:\n    name: promotion-my-app-via-github-actions\n")),(0,o.kt)("p",null,"The notification controller running on the management cluster is now configured to forward any promotion notifications received from leaf clusters. To actually use this strategy from a pipeline, set the promotion field as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{8-9}","{8-9}":!0},"---\napiVersion: pipelines.weave.works/v1alpha1\nkind: Pipeline\nmetadata:\n  name: my-app\n  namespace: my-app-ns\nspec:\n  promotion:\n    notification: {}\n")),(0,o.kt)("p",null,"Promotion notifications from leaf clusters should now be forwarded via the notification controller running on the management cluster and should include information about the version of the application being promoted."),(0,o.kt)("h2",{id:"manual-promotion"},"Manual promotion"),(0,o.kt)("p",null,"The supported strategies mentioned above, do not require any user interaction when handling promotions. However, there is often a need for a human operator to manually approve a promotion to the next environment. To achieve that, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.promotion.manual")," key to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{8}","{8}":!0},"apiVersion: pipelines.weave.works/v1alpha1\nkind: Pipeline\nmetadata:\n  name: my-app\n  namespace: my-app-ns\nspec:\n  promotion:\n    manual: true\n    strategy:\n      pull-request:\n        type: github\n        url: https://github.com/my-org/my-app-repo\n        baseBranch: main\n        secretRef:\n          name: promotion-credentials              \n"))),(0,o.kt)("p",null,"When this key is set and a promotion is detected, Weave GitOps will prompt the user to manually promote the application to the next environment, via the use of a button shown under the next environment."),(0,o.kt)("figure",null,(0,o.kt)("img",{src:s,style:{width:"70%",height:"70%"}}),(0,o.kt)("figcaption",null,"Manual promotion of an application")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"retry-logic"},"Retry Logic"),(0,o.kt)("p",null,"By default if a promotion fails, an exponential back-off retry happens and\nreturns with an error only after three retries."),(0,o.kt)("p",null,"Through Helm values, the retry logic is configurable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# values.yaml\npromotion:\n  retry:\n    # Initial delay between retries.\n    delay: 2\n    # Maximum delay between retries.\n    maxDelay: 20\n    # Number of attempts.\n    threshold: 3\n")),(0,o.kt)("p",null,"The promotion happens through an HTTP endpoint call, that endpoint may has\nconnection timeout limits, that's why the ",(0,o.kt)("inlineCode",{parentName:"p"},"maxDelay")," option is there. If the\ncalculated delay would exceed this value, it will use that as delay. For example\nif the delay values would be ",(0,o.kt)("inlineCode",{parentName:"p"},"[2, 4, 8, 16, 32, 64]"),", but ",(0,o.kt)("inlineCode",{parentName:"p"},"maxDelay")," is set to\n15, the list will be ",(0,o.kt)("inlineCode",{parentName:"p"},"[2, 4, 8, 15, 15, 15]"),". With this option, the promotion\nwill be retried on failure, but the sum of delay values will be only 59 seconds\ninstead of 126 seconds."),(0,o.kt)("h3",{id:"rate-limiting"},"Rate Limiting"),(0,o.kt)("p",null,"The promotion endpoint can be exposed to the internet (for example github\nactions), to mitigate DoS attacks, the endpoint has rate limits. By default it's\n20 requests per 30 seconds."),(0,o.kt)("p",null,"Rate limiting can be configured through Helm values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# values.yaml\npromotion:\n  rateLimit:\n    # Number of requests allowed in set interval.\n    value: 20\n    interval: 30\n")))}h.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29786:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bot-account-9b70d2b1f4248abe74dec9fa30327fc5.png"},79385:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/create-token-with-expiration-9958f4ff972dd009c18c4df373771368.png"},59988:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/fine-grained-token-8e56cfc829c5c3a8da466f3a0ef87287.png"},83276:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/manage-fine-grained-f01f8fb2949076750713dd0e6911cb30.png"},828:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/promotion-pr-b8e144adb1ad9f1fba0ebacb0e2abf40.png"}}]);