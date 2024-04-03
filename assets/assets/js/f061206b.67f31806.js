"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[41374],{19666:(e,i,t)=>{t.d(i,{Z:()=>l});var n=t(67294),o=t(5730);function l(e){let{children:i,fallback:t}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,i?.()):t??null}},1664:(e,i,t)=>{t.d(i,{Z:()=>a});var n=t(67294),o=t(88746);t(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function a(e){let{tiers:i}=e;return n.createElement(o.Z,{title:`This feature is a available on ${i}.`,style:l},i)}},90933:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>s,default:()=>R,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(87462),o=(t(67294),t(3905)),l=t(1664);t(77823),t(19666);const a={title:"Getting Started",hide_title:!0},s='Getting Started <TierLabel tiers="Enterprise" />',c={unversionedId:"policy/getting-started",id:"version-0.34.0/policy/getting-started",title:"Getting Started",description:"Enabling the Weave Policy Engine features in Weave GitOps is done by running the policy agent on the cluster. This section gives an overview of the policy ecosystem and the steps required for installing and running the policy agent on leaf clusters.",source:"@site/versioned_docs/version-0.34.0/policy/getting-started.mdx",sourceDirName:"policy",slug:"/policy/getting-started",permalink:"/docs/0.34.0/policy/getting-started",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/policy/getting-started.mdx",tags:[],version:"0.34.0",frontMatter:{title:"Getting Started",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.34.0/policy/intro"},next:{title:"Authorization",permalink:"/docs/0.34.0/policy/authorization"}},r={},p=[{value:"The Policy Ecosystem",id:"the-policy-ecosystem",level:2},{value:"Installation Pre-requisites",id:"installation-pre-requisites",level:2},{value:"Weave GitOps",id:"weave-gitops",level:3},{value:"Policy Library",id:"policy-library",level:3},{value:"Install the Policy Agent",id:"install-the-policy-agent",level:2},{value:"Policies in UI",id:"policies-in-ui",level:2},{value:"Prevent Violating Changes",id:"prevent-violating-changes",level:2},{value:"Violations Logs in UI",id:"violations-logs-in-ui",level:2}],E={toc:p};function R(e){let{components:i,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},E,a,{components:i,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-"},"Getting Started ",(0,o.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,o.kt)("p",null,"Enabling the Weave Policy Engine features in Weave GitOps is done by running the policy agent on the cluster. This section gives an overview of the policy ecosystem and the steps required for installing and running the policy agent on leaf clusters."),(0,o.kt)("h2",{id:"the-policy-ecosystem"},"The Policy Ecosystem"),(0,o.kt)("p",null,"The policy ecosystem consists of several moving parts. The two primary components are the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/weave-policy-profile#policy-agent-configuration"},"Policy Agent")," and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/"},"Policy CRs"),". The agent runs in several ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/weave-policy-profile#agent-modes"},"modes"),", and uses the Policy CRs to perform validations on different resources. The results of those validations can be written to different ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/weave-policy-profile#policy-validation-sinks"},"sinks"),"."),(0,o.kt)("p",null,"There are two other optional components: the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/policy-set"},"PolicySet"),", and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/policy-configuration"},"PolicyConfig"),". The PolicySet can be used to filter policies for a specific mode, while the PolicyConfig can be used to override policy parameters during the validation of a certain resource."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Policy Ecosystem",src:t(23376).Z,width:"1105",height:"465"})),(0,o.kt)("h2",{id:"installation-pre-requisites"},"Installation Pre-requisites"),(0,o.kt)("h3",{id:"weave-gitops"},"Weave GitOps"),(0,o.kt)("p",null,"You need to have a running instance of Weave GitOps with at least one CAPI provider installed to provision Kubernetes clusters. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.gitops.weave.works/docs/installation/"},"Weave GitOps Installation")," page for more details about installing Weave GitOps."),(0,o.kt)("h3",{id:"policy-library"},"Policy Library"),(0,o.kt)("p",null,"For the policy agent to work, it will need a source for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/"},"policies")," that it will enforce in the cluster. Enterprise customers should request access to fork our policy library into their local repositories. Our policy library includes an extensive list of policy CRs that cover a multitude of security and compliance benchmarks."),(0,o.kt)("h2",{id:"install-the-policy-agent"},"Install the Policy Agent"),(0,o.kt)("p",null,"To install the policy agent on a leaf cluster, you should select the ",(0,o.kt)("inlineCode",{parentName:"p"},"weave-policy-agent")," from the profiles dropdown in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create Cluster")," page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Policy Profile",src:t(13524).Z,width:"1145",height:"92"})),(0,o.kt)("p",null,"You should then configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," to pull the policies from your repo into the cluster. This is done by configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"policySource")," section. If your policy library repo is private, you will also need to reference the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret")," that contains the repo credentials. This is usually the secret you created while bootstrapping Flux on the management cluster and is copied to your leaf cluster during creation."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see an example that creates a new git source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"policySource:\n  enabled: true\n  url: ssh://git@github.com/weaveworks/policy-library # This should be the url of the forked repo\n  tag: v1.0.0\n  path: ./  # Could be a path to the policies dir or a kustomization.yaml file\n  secretRef: my-pat # the name of the secret containing the repo credentials\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand to see an example that uses an existing git source"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"policySource:\n  enabled: true\n  sourceRef: # Specify the name for an existing GitSource reference\n    kind: GitRepository\n    name: policy-library\n    namespace: flux-system\n"))),(0,o.kt)("p",null,"You can find more about other policy profile configurations ",(0,o.kt)("a",{parentName:"p",href:"../weave-policy-profile/"},"here"),"."),(0,o.kt)("h2",{id:"policies-in-ui"},"Policies in UI"),(0,o.kt)("p",null,"After the leaf cluster is provisioned and the profile is installed, you should now see the policies listed in the Policies tab in Weave GitOps UI."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Policies",src:t(66867).Z,width:"3356",height:"1882"})),(0,o.kt)("p",null,"Now you have a provisioned cluster with these policies enforced by the policy agent."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, the policy profile is set up to enforce policies at deployment time using admission controller, which results in blocking any deployment that violates the enforced policies.")),(0,o.kt)("h2",{id:"prevent-violating-changes"},"Prevent Violating Changes"),(0,o.kt)("p",null,"Now let's try to deploy a Kubernetes deployment that violates the ",(0,o.kt)("inlineCode",{parentName:"p"},"Container Image Pull Policy")," which is one of the enforced policies.\nThis policy is violated when the container's ",(0,o.kt)("inlineCode",{parentName:"p"},"imagePullPolicy")," is not set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Always"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Expand for an example of a violating deployment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\nname: nginx-deployment\nlabels:\n  app: nginx\nspec:\nreplicas: 3\nselector:\n  matchLabels:\n    app: nginx\ntemplate:\n  metadata:\n    labels:\n      app: nginx\n  spec:\n    containers:\n    - name: nginx\n      image: nginx:1.14.2\n      imagePullPolicy: IfNotPresent\n      ports:\n      - containerPort: 80\n"))),(0,o.kt)("p",null,"Once you apply it, the policy agent will deny this request and show a violation message, and accordingly the deployment will not be created."),(0,o.kt)("h2",{id:"violations-logs-in-ui"},"Violations Logs in UI"),(0,o.kt)("p",null,"You can go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Violations Log")," in Weave GitOps UI to view the policy violations of all the connected clusters, and dive into the details of each violation."),(0,o.kt)("p",null,"This view shows only the violations resulting from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/weave-policy-profile#admission"},"admission")," mode by configuring the ",(0,o.kt)("a",{parentName:"p",href:"/docs/0.34.0/policy/weave-policy-profile#policy-validation-sinks"},"events sink"),"."),(0,o.kt)("strong",null,"Violations Log"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Violations Logs",src:t(64727).Z,width:"3360",height:"1880"})),(0,o.kt)("strong",null,"Violations Log Details"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Violation Log Details",src:t(8686).Z,width:"3360",height:"2972"})))}R.isMDXComponent=!0},23376:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/policy-ecosystem-29a73c1e7e30b8479c47151cc520305a.png"},8686:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/violations-log-detail-644dce8dc57662d17e64817ed300ade6.png"},64727:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/violations-logs-76fd64e5027509cd16039494f8e4f904.png"},66867:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/weave-policies-79e6dfeda5fb02d06b0f4a5725e77f73.png"},13524:(e,i,t)=>{t.d(i,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHkAAABcCAYAAAD6QmlOAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAqdEVYdENyZWF0aW9uIFRpbWUAVGh1IDAyIE1hciAyMDIzIDE2OjMyOjQ0IEVFVLXd81IAAB1jSURBVHic7d13fBR1/sfx12w2jVTSgBASCJAECL1Jr6ErIkhREdBT7vRO7mznWRCx3U/OcnYQFQEREVGaSBWkRKSHGhJKQkIgpJCQQsru/P4IaISgp4BJ1vfz8cgf2d3ZfHay853vvOf7nTFM0zQREREREREREZFqzVLZBYiIiIiIiIiIyNVTyCMiIiIiIiIi4gAU8oiIiIiIiIiIOACFPCIiIiIiIiIiDkAhj4iIiIiIiIiIA1DIIyIiIiIiIiLiABTyiIiIiIiIiIg4AIU8IiIiIiIiIiIOwPpbF0xKSrqWdYiIiIiIiIiIVEthYWGVXQIAhmmaZmUXISIiIiIiIiIiV0fTtUREREREREREHIBCHhERERERERERB6CQR0RERERERETEASjkERERERERERFxAAp5REREREREREQcgEIeEREREREREREHoJBHRERERERERMQBKOQREREREREREXEACnlERERERERERByAQh4REREREREREQegkEdERERERERExAEo5BERERERERERcQAKeUREREREREREHIBCHhERERERERERB6CQR0RERERERETEAVgruwAREZHqJD4+vrJLEKlUkZGRlV3Cb6JtV6T6qK7tjEhVoJBHRETkV1LnU/6oqntQom1XpOqr7u2MSGXTdC0REREREREREQegkEdERERERERExAEo5BERERERERERcQAKeUREREREREREHIBCHhERERERERERB6CQR0RERERERETEASjkERERERERERFxAAp5REREREREREQcgLWyCwBYn1nChN15HC+0/6bl67tb+LCVJz39na9xZSIiIiIiIiIi1UOVGMkz/ioCHoDjhXYm7M67hhWJiIiIiIiIiFQvVSLkSbqKgOeiqwmJREREfg+FCYt5dlwfWkc0oGF0V0Y88gE7sq60/yph/SMtqFe3LnUv+anX5l9sLql4qbxFdxFewTJ1w/rwnwOl1+2ziTguG9nxG1g8fw5z5q/naE4i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EREREREREREHoJBHRERERERERMQBKOQREREREREREXEACnlERERERERERBxAlbiFuoiIiFRfxvs7KruE68a8u21llyAiIiLyP1PIIyIi8ivFx8dXdgnyO9H/2rHo/ykiIo7OME3TrOwiRERERERERETk6uiaPCIiIiIiIiIiDkAhj4iIiIiIiIiIA1DIIyIiIiIiIiLiABTyiIiIiIiIiIg4AIU8IiIiIiIiIiIOQCGPiIiIiIiIiIgDUMgjIiIiIiIiIuIAFPKIiIiIiIiIiDgAhTwiIiIiIiIiIg5AIY+IiIiIiIiIiANQyCMiIiIiIiIi4gAU8oiIiIiIiIiIOACFPCIiIiIiIiIiDkAhj4iIiIiIiIiIA1DIIyIiIiIiIiLiAKy/dcGkpKRrWYeIiIiIiIiISLUUFhZW2SUAYJimaVZ2ESIiIiIiIiIicnU0XUtERERERERExAEo5BERERERERERcQAKeUREREREREREHIBCHhERERERERERB6CQR0RERERERETEASjkERERERERERFxAAp5REREREREREQcgEIeEREREREREREHoJBHRERERERERMQBKOQREREREREREXEACnlERERERERERBzA/wNL4/ss1aQ5ywAAAABJRU5ErkJggg=="}}]);