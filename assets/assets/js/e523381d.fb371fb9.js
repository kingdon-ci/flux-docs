"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[33008],{52923:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=o(87462),a=(o(67294),o(3905));const n={title:"Step 2 - Explore the Open Source UI",hide_title:!0,pagination_next:"open-source/getting-started/deploy-OSS"},r="Step 2: Explore the Weave GitOps Open Source UI",s={unversionedId:"open-source/getting-started/ui-OSS",id:"version-0.38.0/open-source/getting-started/ui-OSS",title:"Step 2 - Explore the Open Source UI",description:"The Weave GitOps user interface enables you to manage and view all of your applications in one place. This documentation gives you an overview of the Weave GitOps Open Source UI.",source:"@site/versioned_docs/version-0.38.0/open-source/getting-started/ui-OSS.mdx",sourceDirName:"open-source/getting-started",slug:"/open-source/getting-started/ui-OSS",permalink:"/docs/open-source/getting-started/ui-OSS",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/open-source/getting-started/ui-OSS.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Step 2 - Explore the Open Source UI",hide_title:!0,pagination_next:"open-source/getting-started/deploy-OSS"},sidebar:"docs",previous:{title:"Step 1 - Install Weave GitOps Open Source",permalink:"/docs/open-source/getting-started/install-OSS"},next:{title:"Step 3 - Deploy an Application",permalink:"/docs/open-source/getting-started/deploy-OSS"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Login to the GitOps Dashboard",id:"login-to-the-gitops-dashboard",level:2},{value:"The Applications View",id:"the-applications-view",level:2},{value:"A Closer Look: Exploring the flux-system Deployment",id:"a-closer-look-exploring-the-flux-system-deployment",level:3},{value:"The Sources View",id:"the-sources-view",level:2},{value:"The Image Automation View",id:"the-image-automation-view",level:2},{value:"The Flux Runtime View",id:"the-flux-runtime-view",level:2},{value:"Controllers",id:"controllers",level:4},{value:"CRDs",id:"crds",level:4},{value:"Moving On",id:"moving-on",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"step-2-explore-the-weave-gitops-open-source-ui"},"Step 2: Explore the Weave GitOps Open Source UI"),(0,a.kt)("p",null,"The Weave GitOps user interface enables you to manage and view all of your applications in one place. This documentation gives you an overview of the Weave GitOps Open Source UI."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To check out Weave GitOps Enterprise's UI, which provides an even richer user experience, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works"),".")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A quick preview of what the Weave GitOps Open Source UI provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"Applications view")," that shows summary information from\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"Kustomization"),"\xa0and\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"HelmRelease"),"\xa0objects so that you can quickly understand the state of your deployments across a cluster."),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("strong",{parentName:"li"},"Sources view")," that shows summary information from\xa0gitrepository,\xa0helmrepository\xa0and\xa0bucket\xa0objects and tells you the current status of resources that are synchronizing content from where you\u2019ve declared the desired state of your system\u2014for example, Git repositories."),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("strong",{parentName:"li"},"Flux Runtime view")," that provides the status of the GitOps engine that continuously reconciles your desired and live state. It shows your installed ",(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/"},"GitOps Toolkit Controllers")," and version."),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("strong",{parentName:"li"},"Image Automation view")," that reduces GitOps friction, particularly in non-production environments, by enabling you to discover repositories, policies, and updates on your cluster. Deploy the latest image in a dev or staging environment with minimal fuss, and keep your platform updated with the latest approved versions\u2014for example, patch releases to reduce exposure to CVEs. Auto-deploy when approval is gated before the image is added to an internal registry."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},"Notifications View")," that leverages Flux's ",(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/notification/"},"notification controller")," to show which notifications are already configured within the UI. This enables WeGO users to set up and receive notifications from Weave GitOps. Here you can find ",(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/notification/providers/#type"},"the list of providers"),". If you\u2019re a platform operator, this view will help you to understand your egress topology across clusters so you\u2019ll know where events are being sent beyond your clusters."),(0,a.kt)("li",{parentName:"ul"},"multiple views for debugging."),(0,a.kt)("li",{parentName:"ul"},"a dark mode option.")),(0,a.kt)("p",null,"It also enables you to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sync your latest Git commits directly from the UI"),(0,a.kt)("li",{parentName:"ul"},"leverage Kubernetes RBAC to control permissions in the dashboard")),(0,a.kt)("p",null,"Let's dive in."),(0,a.kt)("h2",{id:"login-to-the-gitops-dashboard"},"Login to the GitOps Dashboard"),(0,a.kt)("p",null,"First, expose the service running on the cluster with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl port-forward svc/ww-gitops-weave-gitops -n flux-system 9001:9001\n")),(0,a.kt)("p",null,"Next, ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9001/"},"open the dashboard")," and login using either the ",(0,a.kt)("a",{parentName:"p",href:"/docs/enterprise/getting-started/install-enterprise#configuring-the-emergency-user"},"emergency cluster user")," or OIDC, based on your ",(0,a.kt)("a",{parentName:"p",href:"/docs/enterprise/getting-started/install-enterprise#securing-access-to-the-dashboard"},"configuration"),". (Note: The same directions for WGE apply to OSS for this step.)\nIf you followed the example above, the emergency user will be configured with the username set to ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),". This means that you can use \u201cadmin\u201d as your user name, and the password that you set earlier during installation as ",(0,a.kt)("inlineCode",{parentName:"p"},"$PASSWORD"),"."),(0,a.kt)("p",null,"   ",(0,a.kt)("img",{alt:"Weave GitOps login screen",src:o(82031).Z,width:"1914",height:"945"})),(0,a.kt)("p",null,"The label of the OIDC button on the login screen is configurable via a feature flag environment variable.\nThis can give your users a more familiar experience when logging in."),(0,a.kt)("p",null,"Adjust the configuration in the Helm ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file or the ",(0,a.kt)("inlineCode",{parentName:"p"},"spec.values")," section of the Weave GitOps ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmRelease")," resource:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'envVars:\n  - name: WEAVE_GITOPS_FEATURE_OIDC_BUTTON_LABEL\n    value: "Login with ACME"\n')),(0,a.kt)("h2",{id:"the-applications-view"},"The Applications View"),(0,a.kt)("p",null,"Upon login you're taken to the Applications view, which allows you to quickly understand the state of your deployments and shows summary information from ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/kustomize/kustomization/"},(0,a.kt)("inlineCode",{parentName:"a"},"Kustomization"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/helm/helmreleases/"},(0,a.kt)("inlineCode",{parentName:"a"},"HelmRelease"))," objects. You can apply dark mode using the toggle switch in the top right corner."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Applications summary view showing Flux System and Weave GitOps deployments",src:o(17780).Z,width:"2872",height:"455"})),(0,a.kt)("p",null,"In the above screenshot you can see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"two ",(0,a.kt)("inlineCode",{parentName:"li"},"Kustomizations")," called ",(0,a.kt)("inlineCode",{parentName:"li"},"podinfo")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"canaries")," corresponding to the applications with the same names. The source referenced by ",(0,a.kt)("inlineCode",{parentName:"li"},"podinfo")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"shipping-service-podinfo")," which has been verified whereas the one referenced by ",(0,a.kt)("inlineCode",{parentName:"li"},"canaries")," does not have verification set up."),(0,a.kt)("li",{parentName:"ul"},"three ",(0,a.kt)("inlineCode",{parentName:"li"},"HelmReleases")," called ",(0,a.kt)("inlineCode",{parentName:"li"},"weave-gitops-enterprise"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tf-controller")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"podinfo")," which deploys the respective Helm Charts.")),(0,a.kt)("p",null,"The table view shows you the reported status so you can understand whether a reconciliation has been successful, and when it was last updated. You can also see where the Flux objects are deployed, which ",(0,a.kt)("inlineCode",{parentName:"p"},"Source")," object they are reconciling from and whether or not that ",(0,a.kt)("inlineCode",{parentName:"p"},"Source")," is verified (this requires verification to have been set up for the source). Clicking the name of the Source will take you to a detail view for the given Source object. The view automatically updates every few seconds so you know the current state of your system."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"For more information about Sources, please take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/concepts/#sources"},"Flux documentation"),"."),(0,a.kt)("p",{parentName:"admonition"},"For information on Source verification, you can check:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/gitrepositories/#verification"},"Flux documentation - GitRepository verification")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/components/source/ocirepositories/#verification"},"Flux documentation - OCIRepository verification"))),(0,a.kt)("p",{parentName:"admonition"},"If verification is not set up for the repository, this will appear blank in the UI.")),(0,a.kt)("p",null,"More actions you can take:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the magnifying glass icon to search for and filter objects by ",(0,a.kt)("inlineCode",{parentName:"li"},"Name"),"."),(0,a.kt)("li",{parentName:"ul"},"Filter by ",(0,a.kt)("inlineCode",{parentName:"li"},"Type")," by clicking the strawberry icon to its right."),(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Name")," of an object to get a detailed view for the given ",(0,a.kt)("inlineCode",{parentName:"li"},"Kustomization")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"HelmRelease"),". (You'll see this again in the Sources view.)"),(0,a.kt)("li",{parentName:"ul"},"In the main Applications view, you can use the checkbox to the left of your listed applications to select them and perform actions from the actions menu at the top. These actions are Sync (reconcile), Suspend, and Resume, and they affect Flux resources.")),(0,a.kt)("h3",{id:"a-closer-look-exploring-the-flux-system-deployment"},"A Closer Look: Exploring the flux-system Deployment"),(0,a.kt)("p",null,"Let's explore the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," Kustomization. Navigate back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Applications")," view, and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"flux-system")," object."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Application detail view for the flux system kustomization",src:o(44525).Z,width:"3380",height:"1714"})),(0,a.kt)("p",null,"It might take a few moments for the data to load. Once it does, you should get a result that resembles the above screenshot. Here you can find key information about how the resource is defined:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"which ",(0,a.kt)("inlineCode",{parentName:"li"},"Source")," it is reading from"),(0,a.kt)("li",{parentName:"ul"},"the latest applied commit"),(0,a.kt)("li",{parentName:"ul"},"the exact path with the Source repository that is being deployed"),(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("inlineCode",{parentName:"li"},"Interval")," where Flux will look to reconcile any differences between the declared and live state. For example, if a ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," patch has been applied on the cluster, it will effectively be reverted. If a longer error message is reported by this object, you'll be able to see it in its entirety on this page.")),(0,a.kt)("p",null,"Underneath the summary information you'll find:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Details")," (default) table view, which shows all the Kubernetes objects (including Flux objects, deployments, pods, services, etc.) managed and deployed through this ",(0,a.kt)("inlineCode",{parentName:"li"},"kustomization"),"."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Events")," tab (shown below), which shows related Kubernetes events to help you diagnose issues and understand health over time."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Reconciliation Graph")," (shown below), which provides an alternative to the Details view and helps you to understand how various objects relate to each other."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dependencies"),", which provides a directional graph to help you clarify any dependencies between objects and ensure that your automations are set up in the correct order."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Yaml")," (shown below), which provides a raw dump yaml view on the object as it currently exists inside your cluster. Note that this will be different from what's in your GitOps repository.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Events tab"),"\n",(0,a.kt)("img",{alt:"Application detail view showing events for an object",src:o(56659).Z,width:"3368",height:"1572"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reconciliation Graph tab"),"\n",(0,a.kt)("img",{alt:"Application detail view showing reconciliation graph - a directional graph showing object relationships",src:o(91562).Z,width:"3554",height:"1532"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Yaml tab"),"\n",(0,a.kt)("img",{alt:"Application detail view showing the yaml display",src:o(7627).Z,width:"3556",height:"1478"})),(0,a.kt)("h2",{id:"the-sources-view"},"The Sources View"),(0,a.kt)("p",null,"In the left-hand menu of the UI, click on the Sources view. This will show you where Flux pulls its application definitions from\u2014for example, Git repositories\u2014and the current state of that synchronization. Sources shows summary information from ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmRepository"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"HelmChart"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Bucket")," objects."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sources summary view showing Flux System and Weave GitOps sources",src:o(56380).Z,width:"2880",height:"314"})),(0,a.kt)("p",null,"In the above screenshot you can see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"GitRepository")," called ",(0,a.kt)("inlineCode",{parentName:"li"},"shipping-service-podinfo")),(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("inlineCode",{parentName:"li"},"OCIRepository")," called ",(0,a.kt)("inlineCode",{parentName:"li"},"podinfo-oci"))),(0,a.kt)("p",null,"These have both had verification set up on them which has been completed successfully."),(0,a.kt)("p",null,"The Sources table view displays information about status so that you can see whether Flux has been able to successfully pull from a given source, and which specific commit was last detected. It shows you key information like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Interval"),"\u2014namely, how frequently Flux will check for updates in a given source location.\nYou can also see whether or not that source is verified (if this is something that you have set up for the specific source)."),(0,a.kt)("p",null,"Actions you can take:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Apply filtering as you did the Applications view."),(0,a.kt)("li",{parentName:"ul"},"Click a ",(0,a.kt)("inlineCode",{parentName:"li"},"URL")," to navigate to a given source\u2014i.e. a repository in GitHub\u2014or the ",(0,a.kt)("inlineCode",{parentName:"li"},"Name")," of a ",(0,a.kt)("inlineCode",{parentName:"li"},"Source")," to view more details about it.")),(0,a.kt)("p",null,"Go back to the Details tab, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"GitRepository/flux-system")," from the summary at the top of the page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Source detail view showing details for an object",src:o(9159).Z,width:"3554",height:"1270"})),(0,a.kt)("p",null,"As with an Application detail view, you can see key information about how the resource is defined."),(0,a.kt)("h2",{id:"the-image-automation-view"},"The Image Automation View"),(0,a.kt)("p",null,"Maybe you're an app developer who wants to deploy the latest image in a dev/staging environment with as minimal fuss as possible and reduce GitOps friction. Or you might be a platform engineer who wants to keep your platform up-to-date with the latest approved versions\u2014for example, patch releases to reduce exposure to CVEs\u2014or auto-deploy when approval is gated before adding an image to an internal registry. The Image Automation view can help."),(0,a.kt)("p",null,"WeGO's Image Automation view allows users to configure automatic updates to their workloads based on the detection of a new image tag in a repository. For application developers, this means faster deployments and shorter feedback cycles to easily verify changes to an application in a Kubernetes environment. The view still supports GitOps workflows as the changes are committed back to Git\u2014either to the branch already reconciled by Flux, or to an alternative branch so that a Pull Request can be generated and peer review can occur. "),(0,a.kt)("p",null,"Image Automation refers to Flux's ability to update the image tag specified in a manifest based on detection of a newer image and automatically deploy to a cluster. It involves three required objects\u2014",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/image/imagerepositories"},"ImageRepositories"),", ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/image/imagepolicies"},"ImagePolicies"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/image/imageupdateautomations/"},"ImageUpdateAutomations"),"\u2014which WeGO OSS users can discover on their clusters. Users can also view object details either through a YAML-like view, as we do for most non-Flux objects, or a details view. The UI makes it possible to suspend or resume ImageRepositories and ImageUpdateAutomations so that Flux stops looking for new updates or committing these to Git. Also, the UI shows whether all required resources are configured and assists with Image Policy to show the latest image. "),(0,a.kt)("p",null,"ImageRepositories, ImagePolicies, and ImageUpdateAutomations are used by Flux's ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/image/"},"Image Automation")," Controllers. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/image-reflector-controller"},"Image Reflector controller")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/image-automation-controller"},"Image Automation controller")," work together to update a Git repository when new container images are available. In WeGO OSS, if the image-reflector-controller and or image-automation-controller are not installed on a cluster, a warning message will display."),(0,a.kt)("p",null,"If you make a mistake configuring one of the resources, you can use WeGO to easily trace from the Image Repository scan, see whether it is able to select the image based on the Image Policy, and detect whether an Image Update has successfully run. This provides greater visibility into the machinery provided by Flux and enables quicker troubleshooting than what's possible by hunting via the Flux CLI. App devs can triage issues without depending on their platform teams."),(0,a.kt)("h2",{id:"the-flux-runtime-view"},"The Flux Runtime View"),(0,a.kt)("p",null,"Let's go back to the left-hand menu of the UI and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Flux Runtime"),". This view provides information on the GitOps engine, which continuously reconciles your desired and live state, and helps users to know which apiVersion to use in manifests. It comes with two tabs: one for controllers, and other for custom resource definitions (CRDs)."),(0,a.kt)("h4",{id:"controllers"},"Controllers"),(0,a.kt)("p",null,"The Controllers tab shows your installed ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/components/"},"GitOps Toolkit Controllers")," and their version."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flux Runtime view showing the various GitOps Toolkit controllers",src:o(19598).Z,width:"3560",height:"1188"})),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"flux bootstrap")," will install the following controllers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"helm-controller"),(0,a.kt)("li",{parentName:"ul"},"kustomize-controller"),(0,a.kt)("li",{parentName:"ul"},"notification-controller"),(0,a.kt)("li",{parentName:"ul"},"source-controller")),(0,a.kt)("p",null,"From this view you can see whether the controllers are healthy and which version of a given component is currently deployed."),(0,a.kt)("h4",{id:"crds"},"CRDs"),(0,a.kt)("p",null,"The CRD tab lists the custom resources that the GitOps Toolkit Controllers use. This allows you to see which resources you will be able to create."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flux Runtime view showing the various GitOps Toolkit controllers",src:o(77459).Z,width:"3556",height:"1592"})),(0,a.kt)("h2",{id:"moving-on"},"Moving On"),(0,a.kt)("p",null,"Now that we are familiar with the dashboard, let's ",(0,a.kt)("a",{parentName:"p",href:"/docs/open-source/getting-started/deploy-OSS"},"deploy a new application")," \u2728."))}c.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var i=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,i,a=function(e,t){if(null==e)return{};var o,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||n;return o?i.createElement(m,r(r({ref:t},u),{},{components:o})):i.createElement(m,r({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,r=new Array(n);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<n;p++)r[p]=o[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},56659:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-application-events-22b2d0d5bfb7ee6a753cfae6f99112bb.png"},44525:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-application-flux-ae9c3157eaf9f5dc2fe78591b8166313.png"},91562:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-application-reconciliation-59cd8d2be400dc33b4747685ba3428c6.png"},7627:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-application-yaml-d861716a64b0d29f43f1f8e07de9937d.png"},17780:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-applications-overview-682c8b6c2edd01606e50192874584e0f.png"},77459:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-flux-runtime-crd-062848e9492612dba0b951fab79a73ea.png"},19598:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-flux-runtime-5c5e7db66e8cc114ff36290ff65bbdfb.png"},82031:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-login-47dcd82fb1aad3481d9ab81cffa7f1a5.png"},9159:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-source-flux-bcdb7b1b35ff227e24229bd13f95c431.png"},56380:(e,t,o)=>{o.d(t,{Z:()=>i});const i=o.p+"assets/images/dashboard-sources-b6b163377f461197aa32a1c765bf236e.png"}}]);