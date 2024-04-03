"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[75833],{19666:(e,n,i)=>{i.d(n,{Z:()=>a});var t=i(67294),o=i(5730);function a(e){let{children:n,fallback:i}=e;return(0,o.Z)()?t.createElement(t.Fragment,null,n?.()):i??null}},52927:(e,n,i)=>{i.d(n,{Z:()=>s});var t=i(67294),o=i(88746);i(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){let{tiers:n}=e;return t.createElement(o.Z,{title:`This feature is a available on ${n}.`,style:a},n)}},3944:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var t=i(87462),o=(i(67294),i(3905)),a=i(52927);i(77823),i(19666);const s={title:"Pipelines With Jenkins Webhook",hide_title:!0},r='Setting Up Pipelines to Notify a Jenkins Webhook <TierLabel tiers="Enterprise" />',p={unversionedId:"pipelines/pipelines-with-jenkins",id:"version-0.36.0/pipelines/pipelines-with-jenkins",title:"Pipelines With Jenkins Webhook",description:"Using Flux's [Notification",source:"@site/versioned_docs/version-0.36.0/pipelines/pipelines-with-jenkins.mdx",sourceDirName:"pipelines",slug:"/pipelines/pipelines-with-jenkins",permalink:"/docs/0.36.0/pipelines/pipelines-with-jenkins",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.36.0/pipelines/pipelines-with-jenkins.mdx",tags:[],version:"0.36.0",frontMatter:{title:"Pipelines With Jenkins Webhook",hide_title:!0},sidebar:"docs",previous:{title:"Using GitOpsTemplates for Pipelines",permalink:"/docs/0.36.0/pipelines/pipelines-templates"},next:{title:"Pipelines With Tekton",permalink:"/docs/0.36.0/pipelines/pipelines-with-tekton"}},l={},d=[{value:"Configuring Jenkins",id:"configuring-jenkins",level:2},{value:"Post content parameters",id:"post-content-parameters",level:3},{value:"Configure Notification Provider",id:"configure-notification-provider",level:2},{value:"Set Up Alerts",id:"set-up-alerts",level:2}],c={toc:d};function k(e){let{components:n,...s}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-pipelines-to-notify-a-jenkins-webhook-"},"Setting Up Pipelines to Notify a Jenkins Webhook ",(0,o.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"Using Flux's ",(0,o.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/notification/"},"Notification\nController"),", a Jenkins Webhook\ncan be invoked on Pipeline promotion events."),(0,o.kt)("h2",{id:"configuring-jenkins"},"Configuring Jenkins"),(0,o.kt)("p",null,"To enable external callers to trigger a build on a job, an additional ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.jenkins.io/generic-webhook-trigger/"},'"Generic\nWebhook Trigger" plugin')," is\nrequired as Jenkins does not have this functionality built-in."),(0,o.kt)("p",null,'After the plugin is installed a new "Generic Webhook Trigger" job configuration\noption is available.'),(0,o.kt)("p",null,'The only mandatory field is the "Token". Without this token, Jenkins will not\nknow which build should be triggered.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"an example token",src:i(89784).Z,width:"656",height:"263"})),(0,o.kt)("h3",{id:"post-content-parameters"},"Post content parameters"),(0,o.kt)("p",null,'To access fields from the pipeline event payload, each field has to be defined\nas a "Post content parameters".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"extract reason from the post content",src:i(95506).Z,width:"649",height:"394"})),(0,o.kt)("details",null,(0,o.kt)("summary",null," Expand to see an example Promotion Event payload"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "involvedObject": {\n    "kind": "Pipeline",\n    "namespace": "flux-system",\n    "name": "podinfo-pipeline",\n    "uid": "74d9e3b6-0269-4c12-9051-3ce8cfb7886f",\n    "apiVersion": "pipelines.weave.works/v1alpha1",\n    "resourceVersion": "373617"\n  },\n  "severity": "info",\n  "timestamp": "2023-02-08T12:34:13Z",\n  "message": "Promote pipeline flux-system/podinfo-pipeline to prod with version 6.1.5",\n  "reason": "Promote",\n  "reportingController": "pipeline-controller",\n  "reportingInstance": "chart-pipeline-controller-8549867565-7822g"\n}\n'))),(0,o.kt)("h2",{id:"configure-notification-provider"},"Configure Notification Provider"),(0,o.kt)("p",null,"In order to be able to invoke a generic webhook, a notification provider has to\nbe defined. Jenkins expects the secret token which you configured above as a GET parameter or in the\nrequest header. The secret token can be stored in a Secret:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\ntype: Opaque\nmetadata:\n  name: jenkins-token\n  namespace: podinfo\nstringData:\n  headers: |\n    token: epicsecret\n")),(0,o.kt)("p",null,"Now we can define a Notification Provider using this secret:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Provider\nmetadata:\n  name: jenkins-promotion\n  namespace: podinfo\nspec:\n  type: generic\n  address: https://jenkins.domain.tld/generic-webhook-trigger/invoke\n  secretRef:\n    name: jenkins-token\n")),(0,o.kt)("h2",{id:"set-up-alerts"},"Set Up Alerts"),(0,o.kt)("p",null,"We can configure an Alert to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"jenkins-promotion")," provider. For example\nan Alert for the ",(0,o.kt)("inlineCode",{parentName:"p"},"podinfo-pipeline")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Alert\nmetadata:\n  name: podinfo-pipeline-promotion\n  namespace: podinfo\nspec:\n  eventSeverity: info\n  eventSources:\n  - kind: Pipeline\n    name: podinfo-pipeline\n    namespace: flux-system\n  providerRef:\n    name: jenkins-promotion\n")))}k.isMDXComponent=!0},95506:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/post-content-param-9026dbfd751543a34ddf2cd43e7564e0.png"},89784:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/token-6d910141f222d55b52e300a0b859cee2.png"}}]);