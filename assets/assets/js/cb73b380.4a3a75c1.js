"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[26485],{37536:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(67294),i=t(88746);t(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function p(e){let{tiers:n}=e;return a.createElement(i.Z,{title:`This feature is a available on ${n}.`,style:s},n)}},19666:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(67294),i=t(5730);function s(e){let{children:n,fallback:t}=e;return(0,i.Z)()?a.createElement(a.Fragment,null,n?.()):t??null}},72481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>m});var a=t(87462),i=(t(67294),t(3905)),s=t(37536);t(77823),t(19666);const p={title:"Pipelines With Tekton",hide_title:!0},r='Setting up Pipelines to Trigger a Tekton Pipeline <TierLabel tiers="Enterprise" />',o={unversionedId:"pipelines/pipelines-with-tekton",id:"pipelines/pipelines-with-tekton",title:"Pipelines With Tekton",description:"Using Flux's [Notification",source:"@site/docs/pipelines/pipelines-with-tekton.mdx",sourceDirName:"pipelines",slug:"/pipelines/pipelines-with-tekton",permalink:"/docs/next/pipelines/pipelines-with-tekton",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/docs/pipelines/pipelines-with-tekton.mdx",tags:[],version:"current",frontMatter:{title:"Pipelines With Tekton",hide_title:!0},sidebar:"docs",previous:{title:"Pipelines With Jenkins Webhook",permalink:"/docs/next/pipelines/pipelines-with-jenkins"},next:{title:"Pipeline",permalink:"/docs/next/pipelines/spec/v1alpha1/pipeline"}},l={},m=[{value:"Configuring Tekton Pipelines",id:"configuring-tekton-pipelines",level:2},{value:"Tekton Tasks",id:"tekton-tasks",level:3},{value:"Tekton Pipeline",id:"tekton-pipeline",level:3},{value:"Configuring Tekton Pipline Automation",id:"configuring-tekton-pipline-automation",level:2},{value:"Tekton TriggerBinding",id:"tekton-triggerbinding",level:3},{value:"Tekton TriggerTemplate",id:"tekton-triggertemplate",level:3},{value:"Tekton EventListener",id:"tekton-eventlistener",level:3},{value:"Configure Notification Provider",id:"configure-notification-provider",level:2},{value:"Set Up Alerts",id:"set-up-alerts",level:2}],d={toc:m};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-pipelines-to-trigger-a-tekton-pipeline-"},"Setting up Pipelines to Trigger a Tekton Pipeline ",(0,i.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("p",null,"Using Flux's ",(0,i.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/notification/"},"Notification\nController"),", a ",(0,i.kt)("a",{parentName:"p",href:"https://tekton.dev/docs/triggers/eventlisteners/"},"Tekton EventListener")," can be triggered on Pipeline promotion events."),(0,i.kt)("h2",{id:"configuring-tekton-pipelines"},"Configuring Tekton Pipelines"),(0,i.kt)("h3",{id:"tekton-tasks"},"Tekton Tasks"),(0,i.kt)("p",null,"In this tutorial, we have two tasks to demonstrate how to use parameter values from the\nPipeline event payload. Both tasks print out messages with information about the\npipeline promotion. Each task has three parameters: ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", and\n",(0,i.kt)("inlineCode",{parentName:"p"},"message"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: hello\n  namespace: ww-pipeline\nspec:\n  params:\n  - name: name\n    type: string\n  - name: namespace\n    type: string\n  - name: message\n    type: string\n  steps:\n    - name: echo\n      image: alpine\n      script: |\n        #!/bin/sh\n        echo "Hello $(params.namespace)/$(params.name)!"\n        echo "Message: $(params.message)"\n---\napiVersion: tekton.dev/v1beta1\nkind: Task\nmetadata:\n  name: goodbye\n  namespace: ww-pipeline\nspec:\n  params:\n  - name: name\n    type: string\n  - name: namespace\n    type: string\n  - name: message\n    type: string\n  steps:\n    - name: goodbye\n      image: ubuntu\n      script: |\n        #!/bin/bash\n        echo "Goodbye $(params.namespace)/$(params.name)!"\n        echo "Message: $(params.message)"\n')),(0,i.kt)("h3",{id:"tekton-pipeline"},"Tekton Pipeline"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-goodbye")," Tekton Pipeline has the same three parameters as the tasks\nand it passes down the values to them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: tekton.dev/v1beta1\nkind: Pipeline\nmetadata:\n  name: hello-goodbye\n  namespace: ww-pipeline\nspec:\n  params:\n  - name: name\n    type: string\n  - name: namespace\n    type: string\n  - name: message\n    type: string\n  tasks:\n    - name: hello\n      taskRef:\n        name: hello\n      params:\n      - name: namespace\n        value: $(params.namespace)\n      - name: name\n        value: $(params.name)\n      - name: message\n        value: $(params.message)\n    - name: goodbye\n      runAfter:\n        - hello\n      taskRef:\n        name: goodbye\n      params:\n      - name: namespace\n        value: $(params.namespace)\n      - name: name\n        value: $(params.name)\n      - name: message\n        value: $(params.message)\n")),(0,i.kt)("h2",{id:"configuring-tekton-pipline-automation"},"Configuring Tekton Pipline Automation"),(0,i.kt)("p",null,"In order to be able to trigger a Pipeline from an external source, we need three\nTekton resources."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TriggerBinding"),": This resource binds the incoming JSON message to parameter\nvariables."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"TriggerTemplate"),": This resource is the template of the ",(0,i.kt)("inlineCode",{parentName:"li"},"PipelineRun")," that\nwill be started."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"EventListener"),": This resource glues the above two resources together and\ncreates an http listener service.")),(0,i.kt)("h3",{id:"tekton-triggerbinding"},"Tekton TriggerBinding"),(0,i.kt)("p",null,"A JSON payload from the Notification Service about a Pipeline promotion looks\nlike this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "involvedObject": {\n    "kind": "Pipeline",\n    "namespace": "flux-system",\n    "name": "podinfo-pipeline",\n    "uid": "74d9e3b6-0269-4c12-9051-3ce8cfb7886f",\n    "apiVersion": "pipelines.weave.works/v1alpha1",\n    "resourceVersion": "373617"\n  },\n  "severity": "info",\n  "timestamp": "2023-02-08T12:34:13Z",\n  "message": "Promote pipeline flux-system/podinfo-pipeline to prod with version 6.1.5",\n  "reason": "Promote",\n  "reportingController": "pipeline-controller",\n  "reportingInstance": "chart-pipeline-controller-8549867565-7822g"\n}\n')),(0,i.kt)("p",null,"In our tasks, we are using only the ",(0,i.kt)("inlineCode",{parentName:"p"},"involvedObject.name"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"involvedObject.namespace")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," fields:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: triggers.tekton.dev/v1beta1\nkind: TriggerBinding\nmetadata:\n  name: ww-pipeline-binding\n  namespace: ww-pipeline\nspec:\n  params:\n  - name: namespace\n    value: $(body.involvedObject.namespace)\n  - name: name\n    value: $(body.involvedObject.name)\n  - name: message\n    value: $(body.message)\n")),(0,i.kt)("h3",{id:"tekton-triggertemplate"},"Tekton TriggerTemplate"),(0,i.kt)("p",null,"The template has the same parameters as the ",(0,i.kt)("inlineCode",{parentName:"p"},"Pipeline")," resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: triggers.tekton.dev/v1beta1\nkind: TriggerTemplate\nmetadata:\n  name: ww-pipeline-template\n  namespace: ww-pipeline\nspec:\n  params:\n  - name: namespace\n    default: "Unknown"\n  - name: name\n    default: "Unknown"\n  - name: message\n    default: "no message"\n  resourcetemplates:\n  - apiVersion: tekton.dev/v1beta1\n    kind: PipelineRun\n    metadata:\n      generateName: hello-goodbye-run-\n    spec:\n      pipelineRef:\n        name: hello-goodbye\n      params:\n      - name: name\n        value: $(tt.params.name)\n      - name: namespace\n        value: $(tt.params.namespace)\n      - name: message\n        value: $(tt.params.message)\n')),(0,i.kt)("h3",{id:"tekton-eventlistener"},"Tekton EventListener"),(0,i.kt)("p",null,"To access all ",(0,i.kt)("a",{parentName:"p",href:"https://tekton.dev/docs/getting-started/triggers/#create-an-eventlistener"},"required resources"),", we need an extra service account:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: tekton-ww-pipeline-robot\n  namespace: ww-pipeline\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: triggers-example-eventlistener-binding\n  namespace: ww-pipeline\nsubjects:\n- kind: ServiceAccount\n  name: tekton-ww-pipeline-robot\n  namespace: ww-pipeline\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: tekton-triggers-eventlistener-roles\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: triggers-example-eventlistener-clusterbinding\nsubjects:\n- kind: ServiceAccount\n  name: tekton-ww-pipeline-robot\n  namespace: ww-pipeline\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: tekton-triggers-eventlistener-clusterroles\n")),(0,i.kt)("p",null,"With this ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount"),", we can create the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventListener")," using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"TriggerBinding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TriggerTemplate"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: triggers.tekton.dev/v1beta1\nkind: EventListener\nmetadata:\n  name: ww-pipeline-listener\n  namespace: ww-pipeline\nspec:\n  serviceAccountName: tekton-ww-pipeline-robot\n  triggers:\n    - name: ww-pipeline-trigger\n      bindings:\n      - ref: ww-pipeline-binding\n      template:\n        ref: ww-pipeline-template\n")),(0,i.kt)("p",null,"At this point, we should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," for our ",(0,i.kt)("inlineCode",{parentName:"p"},"EventListener"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f kubectl get service -n ww-pipeline\nNAME                      TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)             AGE\nel-ww-pipeline-listener   ClusterIP   10.96.250.23   <none>        8080/TCP,9000/TCP   3d\n")),(0,i.kt)("h2",{id:"configure-notification-provider"},"Configure Notification Provider"),(0,i.kt)("p",null,"In this case, we are using Tekton in the same cluster, so we can use an internal\naddress to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventListener")," service. If they are not in the same\ncluster, exposing the service may be required through an ingress or a service mesh."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Provider\nmetadata:\n  name: tekton-promotion\n  namespace: hello-podinfo\nspec:\n  type: generic\n  address: http://el-ww-pipeline-listener.ww-pipeline:8080/\n")),(0,i.kt)("h2",{id:"set-up-alerts"},"Set Up Alerts"),(0,i.kt)("p",null,"We can configure an Alert to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"tekton-promotion")," provider. For example,\nan Alert for the ",(0,i.kt)("inlineCode",{parentName:"p"},"podinfo-pipeline")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: notification.toolkit.fluxcd.io/v1beta1\nkind: Alert\nmetadata:\n  name: tekton-promotion-podinfo\n  namespace: hello-podinfo\nspec:\n  eventSeverity: info\n  eventSources:\n  - kind: Pipeline\n    name: hello-podinfo\n    namespace: flux-system\n  providerRef:\n    name: tekton-promotion\n")))}c.isMDXComponent=!0}}]);