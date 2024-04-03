"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[20152],{19666:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),a=n(5730);function s(e){let{children:t,fallback:n}=e;return(0,a.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},862:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(67294),a=n(88746);n(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return i.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},15708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var i=n(87462),a=(n(67294),n(3905)),s=n(862);n(77823),n(19666);const o={title:"Using GitOpsTemplates for Pipelines",hide_title:!0},l='Using GitOpsTemplates for Pipelines <TierLabel tiers="Enterprise" />',r={unversionedId:"pipelines/pipeline-templates",id:"version-0.19.0/pipelines/pipeline-templates",title:"Using GitOpsTemplates for Pipelines",description:"To create new Pipelines and their required resources from within Weave GitOps",source:"@site/versioned_docs/version-0.19.0/pipelines/pipeline-templates.mdx",sourceDirName:"pipelines",slug:"/pipelines/pipeline-templates",permalink:"/docs/0.19.0/pipelines/pipeline-templates",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.19.0/pipelines/pipeline-templates.mdx",tags:[],version:"0.19.0",frontMatter:{title:"Using GitOpsTemplates for Pipelines",hide_title:!0},sidebar:"docs",previous:{title:"Promoting applications",permalink:"/docs/0.19.0/pipelines/promoting-applications"},next:{title:"Pipelines With Jenkins Webhook",permalink:"/docs/0.19.0/pipelines/pipelines-with-jenkins"}},p={},m=[{value:"Adding new resources from within the Weave GitOps Enterprise dashboard",id:"adding-new-resources-from-within-the-weave-gitops-enterprise-dashboard",level:2},{value:"Example GitOpsTemplates",id:"example-gitopstemplates",level:2},{value:"Pipeline - Visualization only",id:"pipeline---visualization-only",level:3},{value:"Pipeline - Multi-cluster promotion",id:"pipeline---multi-cluster-promotion",level:3},{value:"Git credentials",id:"git-credentials",level:4},{value:"Promotion marker to be added to HelmRelease in <code>Second-Environment</code>",id:"promotion-marker-to-be-added-to-helmrelease-in-second-environment",level:4},{value:"Alerts and Providers",id:"alerts-and-providers",level:3},{value:"Summary",id:"summary",level:2}],c={toc:m};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-gitopstemplates-for-pipelines-"},"Using GitOpsTemplates for Pipelines ",(0,a.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"To create new Pipelines and their required resources from within Weave GitOps\nEnterprise, you can leverage ",(0,a.kt)("a",{parentName:"p",href:"../../gitops-templates/intro"},"GitOpsTemplates")," to help platform teams scale for developer self-service. "),(0,a.kt)("p",null,"This document will provide example configuration which could be adapted for use within your own organization, based on your ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/blog/2021/04/15/three-tenancy-models-for-kubernetes/"},"tenancy model")," of choice."),(0,a.kt)("p",null,"We will cover the creation of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pipelines"),(0,a.kt)("li",{parentName:"ul"},"Alerts"),(0,a.kt)("li",{parentName:"ul"},"Providers")),(0,a.kt)("p",null,"Secrets, required for authentication and authorization between leaf and management clusters as well as to Git, are out of scope for this document and would need to be handled by your secret management solution of choice."),(0,a.kt)("p",null,"For advice on Secrets Management, you can refer to the Flux guide ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/security/secrets-management/"},"here")," or contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"Weaveworks")," for assistance."),(0,a.kt)("p",null,"Templates can include a single resource or multiple resources depending on your use case, for example - you may want to only create the Pipeline custom resource to associate existing HelmReleases, or you could create the HelmReleases, notification controller resources, and Pipeline all in a single template. They are highly customizable to suit your teams' needs."),(0,a.kt)("h2",{id:"adding-new-resources-from-within-the-weave-gitops-enterprise-dashboard"},"Adding new resources from within the Weave GitOps Enterprise dashboard"),(0,a.kt)("p",null,"GitOpsTemplates are custom resources installed onto the management cluster where Weave GitOps Enterprise resides. To add a new Pipeline, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Create a Pipeline")," from within the Pipeline view, which will take you to a pre-filtered list of templates with the label: ",(0,a.kt)("inlineCode",{parentName:"p"},"weave.works/template-type: pipeline"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Pipeline button in Pipeline view",src:n(75529).Z,width:"2552",height:"1126"})),(0,a.kt)("p",null," The ",(0,a.kt)("inlineCode",{parentName:"p"},"Templates")," view (shown below) lists all templates for which a given user has the appropriate permission to view. You can install GitOpsTemplates into different namespaces, and apply standard kubernetes RBAC to limit which teams can utilize which templates. You could additionally configure ",(0,a.kt)("a",{parentName:"p",href:"../../policy/intro"},"Policy")," to enforce permitted values within a template."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Templates view showing Pipeline templates",src:n(93788).Z,width:"3136",height:"1694"})),(0,a.kt)("h2",{id:"example-gitopstemplates"},"Example GitOpsTemplates"),(0,a.kt)("p",null,"This section provides examples to help you build your own templates for Pipelines."),(0,a.kt)("h3",{id:"pipeline---visualization-only"},"Pipeline - Visualization only"),(0,a.kt)("admonition",{title:"Included Sample",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This template is shipped by default with Weave GitOps Enterprise to help you get started with Pipelines.")),(0,a.kt)("p",null,"For flexibility, this allows the user of the template to specify the names of the Clusters where the application is deployed, and to vary the namespace per cluster. This means it would even work in a tenancy model where environments co-exist on the same cluster and use namespaces for isolation. "),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view example template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: pipeline-sample\n  namespace: default # Namespace where the GitOpsTemplate is installed, consider that a team will need READ access to this namespace and the custom resource\n  labels:\n    weave.works/template-type: pipeline\nspec:\n  description: Sample Pipeline showing visualization of two helm releases across two environments.\n  params:\n    - name: RESOURCE_NAME # This is a required parameter name to enable Weave GitOps to write to your Git Repository\n      description: Name of the Pipeline\n    - name: RESOURCE_NAMESPACE\n      description: Namespace for the Pipeline on the management cluster\n      default: flux-system # default values make it easier for users to fill in a template\n    - name: FIRST_CLUSTER_NAME\n      description: Name of GitopsCluster object for the first environment\n    - name: FIRST_CLUSTER_NAMESPACE\n      description: Namespace where this object exists\n      default: default\n    - name: FIRST_APPLICATION_NAME\n      description: Name of the HelmRelease for your application in the first environment\n    - name: FIRST_APPLICATION_NAMESPACE\n      description: Namespace for this application\n      default: flux-system\n    - name: SECOND_CLUSTER_NAME\n      description: Name of GitopsCluster object for the second environment\n    - name: SECOND_CLUSTER_NAMESPACE\n      description: Namespace where this object exists\n      default: default\n    - name: SECOND_APPLICATION_NAME\n      description: Name of the HelmRelease for your application in the second environment\n    - name: SECOND_APPLICATION_NAMESPACE\n      description: Namespace for this application\n      default: flux-system\n  resourcetemplates:\n    - content:\n      - apiVersion: pipelines.weave.works/v1alpha1\n        kind: Pipeline\n        metadata:\n          name: ${RESOURCE_NAME}\n          namespace: ${RESOURCE_NAMESPACE}\n        spec:\n          appRef:\n            apiVersion: helm.toolkit.fluxcd.io/v2beta1\n            kind: HelmRelease\n            name: ${APPLICATION_NAME}\n          environments:\n          - name: First-Environment\n            targets:\n              - namespace: ${FIRST_APPLICATION_NAMESPACE}\n                clusterRef:\n                  kind: GitopsCluster\n                  name: ${FIRST_CLUSTER_NAME}\n                  namespace: ${FIRST_CLUSTER_NAMESPACE}\n          - name: Second-Environment\n            targets:\n              - namespace: ${SECOND_APPLICATION_NAMESPACE}\n                clusterRef:\n                  kind: GitopsCluster\n                  name: ${SECOND_CLUSTER_NAME}\n                  namespace: ${SECOND_CLUSTER_NAMESPACE}\n"))),(0,a.kt)("h3",{id:"pipeline---multi-cluster-promotion"},"Pipeline - Multi-cluster promotion"),(0,a.kt)("p",null,"This example extends the above to add a promotion strategy, in this case it will raise a pull request to update the application version in subsequent environments."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view example template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"---\napiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: pipeline-sample\n  namespace: default\n  labels:\n    weave.works/template-type: pipeline\nspec:\n  description: Sample Pipeline showing visualization of two helm releases across two environments.\n  params:\n    - name: RESOURCE_NAME\n      description: Name of the Pipeline\n    - name: RESOURCE_NAMESPACE\n      description: Namespace for the Pipeline on the management cluster\n      default: flux-system\n    - name: FIRST_CLUSTER_NAME\n      description: Name of GitopsCluster object for the first environment\n    - name: FIRST_CLUSTER_NAMESPACE\n      description: Namespace where this object exists\n      default: default\n    - name: FIRST_APPLICATION_NAME\n      description: Name of the HelmRelease for your application in the first environment\n    - name: FIRST_APPLICATION_NAMESPACE\n      description: Namespace for this application\n      default: flux-system\n    - name: SECOND_CLUSTER_NAME\n      description: Name of GitopsCluster object for the second environment\n    - name: SECOND_CLUSTER_NAMESPACE\n      description: Namespace where this object exists\n      default: default\n    - name: SECOND_APPLICATION_NAME\n      description: Name of the HelmRelease for your application in the second environment\n    - name: SECOND_APPLICATION_NAMESPACE\n      description: Namespace for this application\n      default: flux-system\n    - name: APPLICATION_REPO_URL\n      description: URL for the git repository containing the HelmRelease objects\n    - name: APPLICATION_REPO_BRANCH\n      description: Branch to update with new version\n    - name: GIT_CREDENTIALS_SECRET\n      description: Name of the secret in RESOURCE_NAMESPACE containing credentials to create pull requests\n  resourcetemplates:\n    - content:\n      - apiVersion: pipelines.weave.works/v1alpha1\n        kind: Pipeline\n        metadata:\n          name: ${RESOURCE_NAME}\n          namespace: ${RESOURCE_NAMESPACE}\n        spec:\n          appRef:\n            apiVersion: helm.toolkit.fluxcd.io/v2beta1\n            kind: HelmRelease\n            name: ${APPLICATION_NAME}\n          environments:\n          - name: First-Environment\n            targets:\n              - namespace: ${FIRST_APPLICATION_NAMESPACE}\n                clusterRef:\n                  kind: GitopsCluster\n                  name: ${FIRST_CLUSTER_NAME}\n                  namespace: ${FIRST_CLUSTER_NAMESPACE}\n          - name: Second-Environment\n            targets:\n              - namespace: ${SECOND_APPLICATION_NAMESPACE}\n                clusterRef:\n                  kind: GitopsCluster\n                  name: ${SECOND_CLUSTER_NAME}\n                  namespace: ${SECOND_CLUSTER_NAMESPACE}\n          promotion:\n            pull-request:\n                url: ${APPLICATION_REPO_URL}\n                baseBranch: ${APPLICATION_REPO_BRANCH}\n                secretRef:\n                  name: ${GIT_CREDENTIALS_SECRET}\n"))),(0,a.kt)("h4",{id:"git-credentials"},"Git credentials"),(0,a.kt)("p",null,"For guidance on configuring credentials - see instructions in the ",(0,a.kt)("a",{parentName:"p",href:"../promoting-applications#create-credentials-secret"},"Promoting Applications")," documentation."),(0,a.kt)("h4",{id:"promotion-marker-to-be-added-to-helmrelease-in-second-environment"},"Promotion marker to be added to HelmRelease in ",(0,a.kt)("inlineCode",{parentName:"h4"},"Second-Environment")),(0,a.kt)("p",null,"A comment would need to be added to the HelmRelease or Kustomization patch where the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.chart.spec.version")," is defined."),(0,a.kt)("p",null,"For example, if the values used in the above template were as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"RESOURCE_NAME=my-app\nRESOURCE_NAMESPACE=pipeline-01\n")),(0,a.kt)("p",null,"Then the marker would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# {"$promotion": "pipeline-01:my-app:Second-Environment"}\n')),(0,a.kt)("p",null,"More guidance on adding markers can be found ",(0,a.kt)("a",{parentName:"p",href:"../promoting-applications#add-markers-to-app-manifests"},"here"),"."),(0,a.kt)("h3",{id:"alerts-and-providers"},"Alerts and Providers"),(0,a.kt)("p",null,"This example shows how you can configure multiple resources in a single template, and simplify creation through common naming strategies. The notification controller is used to communicate update events from the leaf clusters where Applications are deployed, to the management cluster where the Pipeline Controller resides and orchestrates."),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"Alert"),", this template is filtering events to detect when an update has occurred. Depending on your use case, you could use different filtering."),(0,a.kt)("p",null,"For the ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider"),", this template uses authenticated (HMAC) communication to the promotion endpoint, where a secret will need to be present on both the management cluster and leaf cluster(s). For simplicity, a ",(0,a.kt)("inlineCode",{parentName:"p"},"generic")," provider could be used instead - which would not require the secret."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view example template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: pipeline-notification-resources\n  namespace: default\n  labels:\n    weave.works/template-type: application # These are generic Flux resources rather than Pipeline-specific\nspec:\n  description: Creates flux notification controller resources for a cluster, required for promoting applications via pipelines.\n  params:\n    - name: RESOURCE_NAME \n      description: Name for the generated objects, should match the target Application (HelmRelease) name.\n    - name: RESOURCE_NAMESPACE\n      description: Namespace for the generated objects, should match the target Application (HelmRelease) namespace.\n    - name: PROMOTION_HOST\n      description: Host for the promotion webhook on the management cluster, i.e. "promotions.example.org"\n    - name: SECRET_REF\n      description: Name of the secret containing HMAC key in the token field\n    - name: ENV_NAME\n      description: Environment the cluster is a part of within a pipeline.\n  resourcetemplates:\n    - content:\n      - apiVersion: notification.toolkit.fluxcd.io/v1beta1\n        kind: Provider\n        metadata:\n          name: ${RESOURCE_NAME}\n          namespace: ${RESOURCE_NAMESPACE}\n        spec:\n          address: http://${PROMOTION_HOST}/promotion/${APP_NAME}/${ENV_NAME}\n          type: generic-hmac\n          secretRef: ${SECRET_REF}\n      - apiVersion: notification.toolkit.fluxcd.io/v1beta1\n        kind: Alert\n        metadata:\n          name: ${RESOURCE_NAME}\n          namespace: ${RESOURCE_NAMESPACE}\n        spec:\n          providerRef:\n            name: ${RESOURCE_NAME}\n          eventSeverity: info\n          eventSources:\n            - kind: HelmRelease\n              name: ${RESOURCE_NAME}\n          exclusionList:\n            - ".*upgrade.*has.*started"\n            - ".*is.*not.*ready"\n            - "^Dependencies.*"\n'))),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"GitOpsTemplates provide a highly flexible way for platform and application teams to work together with Pipelines."),(0,a.kt)("p",null,"You can hard-code values, offer a range of accepted values, or leave open to the consumer of the template to provide input based on your organization's requirements. "),(0,a.kt)("p",null,"Templates are subject to RBAC as with any Kubernetes resource, enabling you to easily control which tenants have access to which templates."),(0,a.kt)("p",null,"For full details on GitOpsTemplates, be sure to read our\n",(0,a.kt)("a",{parentName:"p",href:"../../gitops-templates/intro"},"documentation"),"."))}d.isMDXComponent=!0},75529:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pipelines-table-create-5f9a4f66b7b146e3e6165c097c26c3f8.png"},93788:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/pipelines-templates-49fbf63dfd6832ad453a19fe0e02548d.png"}}]);