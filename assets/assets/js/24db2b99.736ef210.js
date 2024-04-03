"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[15882],{37536:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(88746);a(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(r.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},7703:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>v,default:()=>C,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var n=a(87462),r=a(67294),l=a(3905),i=a(71125),s=a(32342),o=a(37536),p=a(77823),u=a(19666);function c(e){let{localPath:t,hostedPath:a,content:n}=e;return r.createElement(r.Fragment,null,r.createElement(u.Z,null,(()=>r.createElement(p.Z,{className:"language-bash"},"curl -o ",t," ",window.location.protocol,"//",window.location.host,a))),r.createElement(p.Z,{title:t,className:"language-yaml"},n))}var m=a(74354),d=a(17779),h=a(87585),g=a(65719);const k=a.p+"assets/files/example-enterprise-helm-137984942127ddce028d014dde5b973a.yaml",f={title:"Install Weave GitOps Enterprise",hide_title:!0,pagination_next:"enterprise/getting-started/releases-enterprise"},v='Install Weave GitOps Enterprise<TierLabel tiers="Enterprise" />',b={unversionedId:"enterprise/getting-started/install-enterprise",id:"version-0.29.0/enterprise/getting-started/install-enterprise",title:"Install Weave GitOps Enterprise",description:"To purchase an entitlement to Weave GitOps Enterprise, please contact sales@weave.works.",source:"@site/versioned_docs/version-0.29.0/enterprise/getting-started/install-enterprise.mdx",sourceDirName:"enterprise/getting-started",slug:"/enterprise/getting-started/install-enterprise",permalink:"/docs/0.29.0/enterprise/getting-started/install-enterprise",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/enterprise/getting-started/install-enterprise.mdx",tags:[],version:"0.29.0",frontMatter:{title:"Install Weave GitOps Enterprise",hide_title:!0,pagination_next:"enterprise/getting-started/releases-enterprise"},sidebar:"docs",previous:{title:"Introduction to Weave GitOps Enterprise",permalink:"/docs/0.29.0/enterprise/getting-started/intro-enterprise"},next:{title:"Enterprise Releases",permalink:"/docs/0.29.0/enterprise/getting-started/releases-enterprise"}},N={},y=[{value:"Example: Set up a Management Cluster with CAPA and EKS",id:"example-set-up-a-management-cluster-with-capa-and-eks",level:2},{value:"Prep Step: Create a Repository",id:"prep-step-create-a-repository",level:3},{value:"1. CAPA Setup",id:"1-capa-setup",level:3},{value:"2. Prepare IAM for Installation",id:"2-prepare-iam-for-installation",level:3},{value:"3. Create the Cluster",id:"3-create-the-cluster",level:3},{value:"4. Add the Cluster to kubeconfig",id:"4-add-the-cluster-to-kubeconfig",level:3},{value:"5. Install Flux Onto Your Cluster with the <code>flux bootstrap</code> Command",id:"5-install-flux-onto-your-cluster-with-the-flux-bootstrap-command",level:3},{value:"6. Install CAPA",id:"6-install-capa",level:3},{value:"Apply the Entitlements Secret",id:"apply-the-entitlements-secret",level:2},{value:"Configure Access for Writing to Git from the Weave GitOps Enterprise UI",id:"configure-access-for-writing-to-git-from-the-weave-gitops-enterprise-ui",level:2},{value:"Configure Helm Chart and Commit",id:"configure-helm-chart-and-commit",level:2},{value:"<code>values.config.capi.repositoryURL</code>",id:"valuesconfigcapirepositoryurl",level:4},{value:"<code>values.config.capi.repositoryPath</code>",id:"valuesconfigcapirepositorypath",level:4},{value:"<code>values.config.capi.repositoryClustersPath</code>",id:"valuesconfigcapirepositoryclusterspath",level:4},{value:"(Optional) Install policy agent",id:"optional-install-policy-agent",level:4},{value:"Configure Your Password",id:"configure-your-password",level:2},{value:"Install the Weave GitOps Enterprise CLI Tool",id:"install-the-weave-gitops-enterprise-cli-tool",level:2},{value:"Next Steps",id:"next-steps",level:2}],w={toc:y};function C(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-weave-gitops-enterprise"},"Install Weave GitOps Enterprise",(0,l.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"To purchase an entitlement to Weave GitOps Enterprise, please contact ",(0,l.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works"),".")),(0,l.kt)("p",null,"Follow the instructions on this page to:"),(0,l.kt)(g.Z,{toc:(()=>{const e=y.slice(y.findIndex((e=>"install-weave-gitops-enterprise"==e.id))+1);return e.slice(0,e.findIndex((e=>"4"==e.level)))})(),mdxType:"TOCInline"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"There is no need to install the open source version of Weave GitOps before installing Weave GitOps Enterprise.")),(0,l.kt)("h2",{id:"example-set-up-a-management-cluster-with-capa-and-eks"},"Example: Set up a Management Cluster with CAPA and EKS"),(0,l.kt)("p",null,"To get you started, we'll cover EKS as our management cluster with the CAPA provider. Please note again that Weave GitOps Enterprise supports ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.29.0/cluster-management/managing-clusters-without-capi"},"clusters without Cluster API"),", as well as any combination of management cluster and CAPI provider."),(0,l.kt)("h3",{id:"prep-step-create-a-repository"},"Prep Step: Create a Repository"),(0,l.kt)("p",null,"Create a new private GitHub repository and give it a name. We'll call our repo ",(0,l.kt)("inlineCode",{parentName:"p"},"fleet-infra"),"."),(0,l.kt)("p",null,"Set up a Git client for your private repo. For GitHub, see their docs on ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer"},"setting your username")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-email-address-for-every-repository-on-your-computer"},"setting your email address"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/introduction.html"},"Cluster API")," provides declarative APIs, controllers, and tooling to manage the lifecycle of Kubernetes clusters, across a large number of ",(0,l.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/reference/providers.html#infrastructure"},"infrastructure providers"),".\nThe CAPI custom resource definitions are platform-independent as each provider implementation handles the creation of virtual machines,\nVPCs, networks, and other required infrastructure parts, enabling consistent and repeatable cluster deployments."),(0,l.kt)("p",null,"The following example and steps reflect Flux\u2019s architecture and operations. Go ",(0,l.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/cmd/"},"here")," for more detailed documentation about Flux."),(0,l.kt)("h3",{id:"1-capa-setup"},"1. CAPA Setup"),(0,l.kt)("p",null,"Cluster API requires kubectl access to an existing Kubernetes cluster. For this example, configure kubectl to use the management cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/path/to/kubeconfig\n")),(0,l.kt)("p",null,"After having configured kubectl, deploy the CAPA components by following the ",(0,l.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/getting-started.html#install-clusterctl"},"steps provided by Cluster API documentation"),"."),(0,l.kt)("h3",{id:"2-prepare-iam-for-installation"},"2. Prepare IAM for Installation"),(0,l.kt)("p",null,"Cluster API needs special permissions in AWS. Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterawsadm")," command below to roll out a CloudStack and install the permissions into your AWS account. Although the CloudStack is bound to a region, the resulting permissions are globally scoped. You can use any AWS Region that you have access to. "),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterawsadm")," command takes an AWSIAMConfiguration file. ",(0,l.kt)("a",{parentName:"p",href:"https://cluster-api-aws.sigs.k8s.io/topics/using-clusterawsadm-to-fulfill-prerequisites.html#with-eks-support"},"Cluster API docs provide the command")," for you; run this."),(0,l.kt)("p",null,"Run the ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterawsadm")," command to create an IAM group:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clusterawsadm bootstrap iam create-cloudformation-stack --config eks-config.yaml --region $REGION\n")),(0,l.kt)("p",null,"Create an IAM User, which will be used as a kind of service account, and assign the newly created group to this user. The group name will be something like: ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster-api-provider-aws-s-AWSIAMGroupBootstrapper-XXXX"),". "),(0,l.kt)("p",null,"Create a secret for the newly created IAM user."),(0,l.kt)("h3",{id:"3-create-the-cluster"},"3. Create the Cluster"),(0,l.kt)("p",null,"In testing, we used the following values:\n",(0,l.kt)("inlineCode",{parentName:"p"},"$INSTANCESIZE")," : t3.large\n",(0,l.kt)("inlineCode",{parentName:"p"},"$NUMOFNODES")," : 2\n",(0,l.kt)("inlineCode",{parentName:"p"},"$MINNODES")," : 2\n",(0,l.kt)("inlineCode",{parentName:"p"},"$MAXNODES")," : 6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'eksctl create cluster -n "$CLUSTERNAME" -r "$REGION" --nodegroup-name workers -t $INSTANCESIZE --nodes $NUMOFNODES --nodes-min $MINNODES --nodes-max $MAXNODES --ssh-access --alb-ingress-access\n')),(0,l.kt)("h3",{id:"4-add-the-cluster-to-kubeconfig"},"4. Add the Cluster to kubeconfig"),(0,l.kt)("p",null,"Once you've created your cluster, add it to your ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeconfig"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'aws eks --region "$REGION" update-kubeconfig --name "$CLUSTERNAME"\n')),(0,l.kt)("h3",{id:"5-install-flux-onto-your-cluster-with-the-flux-bootstrap-command"},"5. Install Flux Onto Your Cluster with the ",(0,l.kt)("inlineCode",{parentName:"h3"},"flux bootstrap")," Command"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"flux bootstrap")," command enables you to deploy Flux on a cluster the GitOps way. Go ",(0,l.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/cmd/"},"here")," for more information about the ",(0,l.kt)("inlineCode",{parentName:"p"},"flux bootstrap")," command."),(0,l.kt)(i.Z,{groupId:"infrastructure",default:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"github",label:"GitHub",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"flux bootstrap github \\\n  --owner=<github username> \\\n  --repository=fleet-infra \\\n  --branch=main \\\n  --path=./clusters/management \\\n  --personal \\\n  --components-extra image-reflector-controller,image-automation-controller\n"))),(0,l.kt)(s.Z,{value:"gitlab",label:"GitLab",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"flux bootstrap gitlab \\\n  --owner=<gitlab username> \\\n  --repository=fleet-infra \\\n  --branch=main \\\n  --path=./clusters/management \\\n  --personal \\\n  --components-extra image-reflector-controller,image-automation-controller\n")))),(0,l.kt)("p",null,"Your private GitHub repo should have a clusters/management folder that includes the manifests Flux needs to operate, and that also generates a key value pair for Flux to access the repo. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"owner"),": The username (or organization) of the Git repository"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"repository"),": Git repository name"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"branch"),': Git branch (default "main")'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"path"),": Path relative to the repository root; when specified, the cluster sync will be scoped to this path"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"personal"),": If set, the owner is assumed to be a repo user"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"components-extra"),": Additional controllers to install")),(0,l.kt)("p",null,"At this point your Flux management cluster should be running. Take a look at the repository you created earlier."),(0,l.kt)("h3",{id:"6-install-capa"},"6. Install CAPA"),(0,l.kt)("p",null,"You do not need to install a CAPI provider to provision Kubernetes clusters using Weave GitOps Enterprise\u2014you can also provision with Terraform. But for this example with CAPA, you must."),(0,l.kt)("p",null,"Download a specific version of clusterctl from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/cluster-api/releases"},"releases page"),". We've tested the example templates provided in this guide with ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterctl")," version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.1.3"),"."),(0,l.kt)("p",null,"Next, run this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export EXP_EKS=true\nexport EXP_MACHINE_POOL=true\nexport CAPA_EKS_IAM=true\nexport EXP_CLUSTER_RESOURCE_SET=true\n\nclusterctl init --infrastructure aws\n")),(0,l.kt)("p",null,"Please note that, while the next few steps apply to our example, they are also relevant whether you're using another CAPI provider or none at all."),(0,l.kt)("h2",{id:"apply-the-entitlements-secret"},"Apply the Entitlements Secret"),(0,l.kt)("p",null,"Contact ",(0,l.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works")," for a valid entitlements secret. Then apply it to the cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f entitlements.yaml\n")),(0,l.kt)("h2",{id:"configure-access-for-writing-to-git-from-the-weave-gitops-enterprise-ui"},"Configure Access for Writing to Git from the Weave GitOps Enterprise UI"),(0,l.kt)("p",null,"Here we provide guidance for GitHub, GitLab, BitBucket Server, and Azure DevOps."),(0,l.kt)(i.Z,{groupId:"git-provider",default:!0,mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"github",label:"GitHub",mdxType:"TabItem"},"GitHub requires no additional configuration for OAuth git access"),(0,l.kt)(s.Z,{value:"gitlab",label:"GitLab",mdxType:"TabItem"},(0,l.kt)("p",null,"Create a GitLab OAuth application that will request ",(0,l.kt)("inlineCode",{parentName:"p"},"api")," permissions to create pull requests on your behalf."),(0,l.kt)("p",null,"Follow the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/integration/oauth_provider.html"},"GitLab docs"),"."),(0,l.kt)("p",null,"The application should have at least these scopes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"api")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"openid")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"email")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"profile"))),(0,l.kt)("p",null,"Add callback URLs to the application for each address the UI will be exposed on, e.g.:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://localhost:8000/oauth/gitlab")," for port-forwarding and testing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"https://git.example.com/oauth/gitlab")," for production use")),(0,l.kt)("p",null,"Save your application, taking note of the ",(0,l.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,l.kt)("strong",{parentName:"p"},"Client Secret"),". Save\nthem into the ",(0,l.kt)("inlineCode",{parentName:"p"},"git-provider-credentials")," secret, along with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GIT_HOST_TYPES")," to tell WGE that the host is gitlab"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GITLAB_HOSTNAME")," where the OAuth app is hosted")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Replace values")," in this snippet and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic git-provider-credentials --namespace=flux-system \\\n  --from-literal="GITLAB_CLIENT_ID=13457" \\\n  --from-literal="GITLAB_CLIENT_SECRET=24680" \\\n  --from-literal="GITLAB_HOSTNAME=git.example.com" \\\n  --from-literal="GIT_HOST_TYPES=git.example.com=gitlab"\n'))),(0,l.kt)(s.Z,{value:"bitbucket-server",label:"BitBucket Server",mdxType:"TabItem"},(0,l.kt)("p",null,"Create a new ",(0,l.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/bitbucketserver/configure-an-incoming-link-1108483657.html"},"incoming application link")," from\nthe BitBucket administration dashboard. You will be asked to enter a unique name and the redirect URL for the external application. The redirect URL\nshould be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"<WGE dashboard URL>/oauth/bitbucketserver"),". You will also need to select permissions for the application. The minimum set of\npermissions needed for WGE to create pull requests on behalf of users is ",(0,l.kt)("inlineCode",{parentName:"p"},"Repositories - Write"),". An example of configuring these settings is shown below."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:m.Z,width:"500"}),(0,l.kt)("figcaption",null,"Configuring a new incoming application link")),(0,l.kt)("p",null,"Save your application and take note of the ",(0,l.kt)("strong",{parentName:"p"},"Client ID")," and ",(0,l.kt)("strong",{parentName:"p"},"Client Secret"),". Save\nthem into the ",(0,l.kt)("inlineCode",{parentName:"p"},"git-provider-credentials")," secret, along with:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GIT_HOST_TYPES")," to tell WGE that the host is bitbucket-server"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BITBUCKET_SERVER_HOSTNAME")," where the OAuth app is hosted")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Replace values")," in this snippet and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic git-provider-credentials --namespace=flux-system \\\n  --from-literal="BITBUCKET_SERVER_CLIENT_ID=13457" \\\n  --from-literal="BITBUCKET_SERVER_CLIENT_SECRET=24680" \\\n  --from-literal="BITBUCKET_SERVER_HOSTNAME=git.example.com" \\\n  --from-literal="GIT_HOST_TYPES=git.example.com=bitbucket-server"\n')),(0,l.kt)("p",null,"If the secret is already present, use the following command to update it using your default editor:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl edit secret generic git-provider-credentials --namespace=flux-system\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If BitBucket Server is running on the default port (7990), make sure you include the port number in the values of the secret. For example: ",(0,l.kt)("inlineCode",{parentName:"p"},"GIT_HOST_TYPES=git.example.com:7990=bitbucket-server")))),(0,l.kt)(s.Z,{value:"azure-devops",label:"Azure DevOps",mdxType:"TabItem"},(0,l.kt)("p",null,"Navigate to ",(0,l.kt)("a",{parentName:"p",href:"https://app.vsaex.visualstudio.com/app/register"},"VisualStudio")," and register a new application, as explained in the ",(0,l.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#1-register-your-app"},"docs"),". Set the authorization callback URL and select which scopes to grant. Set the callback URL to ",(0,l.kt)("inlineCode",{parentName:"p"},"<WGE dashboard URL>/oauth/azuredevops"),". "),(0,l.kt)("p",null,"Select the ",(0,l.kt)("inlineCode",{parentName:"p"},"Code (read and write)")," scope from the list. This is necessary so that WGE can create pull requests on behalf of users. An example of configuring these settings is shown below."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:d.Z}),(0,l.kt)("figcaption",null,"Creating a new application")),(0,l.kt)("p",null,"After creating your application, you will be presented with the application settings. Take note of the ",(0,l.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Client Secret")," values\u2014you will use them to configure WGE."),(0,l.kt)("figure",null,(0,l.kt)("img",{src:h.Z}),(0,l.kt)("figcaption",null,"Application settings")),(0,l.kt)("p",null,"In your cluster, create a secret named ",(0,l.kt)("inlineCode",{parentName:"p"},"git-provider-credentials")," that contains the ",(0,l.kt)("inlineCode",{parentName:"p"},"App ID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Client Secret")," values from the newly created application."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Replace values")," in this snippet and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create secret generic git-provider-credentials --namespace=flux-system \\\n  --from-literal="AZURE_DEVOPS_CLIENT_ID=<App ID value>" \\\n  --from-literal="AZURE_DEVOPS_CLIENT_SECRET=<Client Secret value>"\n')),(0,l.kt)("p",null,"WGE is now configured to ask users for authorization the next time a pull request must be created as part of using a template. Note that each user can view and manage which applications they have authorized by navigating to ",(0,l.kt)("a",{parentName:"p",href:"https://app.vsaex.visualstudio.com/me"},"https://app.vsaex.visualstudio.com/me"),"."))),(0,l.kt)("h2",{id:"configure-helm-chart-and-commit"},"Configure Helm Chart and Commit"),(0,l.kt)("p",null,"We deploy WGE via a Helm chart. We'll save and adapt the below template before committing it in Git to a Flux-reconciled path."),(0,l.kt)("p",null,"Clone the newly created repo locally. We're gonna add some things!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@<provider>:<username>/fleet-infra\ncd fleet-infra\n")),(0,l.kt)("p",null,"Download the helm-release to ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/management/weave-gitops-enterprise.yaml"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Expand to see file contents"),(0,l.kt)(c,{localPath:"clusters/management/weave-gitops-enterprise.yaml",hostedPath:k,content:"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weave-gitops-enterprise-charts\n  namespace: flux-system\nspec:\n  interval: 60m\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  url: https://charts.dev.wkp.weave.works/releases/charts-v3\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      interval: 65m\n      chart: mccp\n      sourceRef:\n        kind: HelmRepository\n        name: weave-gitops-enterprise-charts\n        namespace: flux-system\n      version: 0.x.x\n  install:\n    crds: CreateReplace\n  upgrade:\n    crds: CreateReplace\n  interval: 50m\n  values:\n    # -- Configure TLS settings if needed\n    # tls:\n      # -- Can be disabled if TLS is handled by a user-provided ingress controller\n      # enabled: true\n      # -- optionally specify a TLS secret\n      # secretName: null\n    config:\n      capi:\n        repositoryURL: https://github.com/$GITHUB_USER/fleet-infra\n        # -- Can be changed depending on your git repo structure\n        # repositoryPath: ./clusters/management/clusters\n        # repositoryClustersPath: ./cluster\n      git:\n        type: github\n        # -- Change if using on-prem github/gitlab\n        # hostname: https://github.com\n",mdxType:"CurlCodeBlock"})),(0,l.kt)("p",null,"Once you have copied the above file, open and adjust the following configuration\noptions:"),(0,l.kt)("h4",{id:"valuesconfigcapirepositoryurl"},(0,l.kt)("inlineCode",{parentName:"h4"},"values.config.capi.repositoryURL")),(0,l.kt)("p",null,"Ensure this has been set to your repository URL."),(0,l.kt)("h4",{id:"valuesconfigcapirepositorypath"},(0,l.kt)("inlineCode",{parentName:"h4"},"values.config.capi.repositoryPath")),(0,l.kt)("p",null,"By default, WGE will create new clusters in the ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/management/clusters")," path.\nYou can configure it with ",(0,l.kt)("inlineCode",{parentName:"p"},"values.config.capi.repositoryPath"),".\nYou might what to change it to ",(0,l.kt)("inlineCode",{parentName:"p"},"clusters/my-cluster/cluster")," if you configured Flux to reconcile ",(0,l.kt)("inlineCode",{parentName:"p"},"./clusters/my-cluster")," instead."),(0,l.kt)("h4",{id:"valuesconfigcapirepositoryclusterspath"},(0,l.kt)("inlineCode",{parentName:"h4"},"values.config.capi.repositoryClustersPath")),(0,l.kt)("p",null,"The other important path to configure is where you'll store applications and workloads run on the new cluster.\nBy default this is ",(0,l.kt)("inlineCode",{parentName:"p"},"./clusters"),". When a new cluster is specified, any selected profiles will be written to ",(0,l.kt)("inlineCode",{parentName:"p"},"./clusters/{.namespace}/{.clusterName}/profiles.yaml"),".\nWhen the new cluster is bootstrapped, Flux will sync the ",(0,l.kt)("inlineCode",{parentName:"p"},"./clusters/{.namespace}/{.clusterName}")," path."),(0,l.kt)("h4",{id:"optional-install-policy-agent"},"(Optional) Install policy agent"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/0.29.0/policy/intro"},"Policy agent")," comes packaged with the WGE chart. To install it, set the following values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"values.policy-agent.enabled"),": set to true to install the agent with WGE"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"values.policy-agent.config.accountId"),": organization name, used as identifier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"values.policy-agent.config.clusterId"),": unique identifier for the cluster")),(0,l.kt)("p",null,"Commit and push all the files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'git add clusters/management/weave-gitops-enterprise.yaml\ngit commit -m "Deploy Weave GitOps Enterprise"\ngit push\n')),(0,l.kt)("p",null,"Flux will reconcile the helm-release and WGE will be deployed into the cluster. You can check the ",(0,l.kt)("inlineCode",{parentName:"p"},"flux-system")," namespace to verify all pods are running."),(0,l.kt)("h2",{id:"configure-your-password"},"Configure Your Password"),(0,l.kt)("p",null,"To login to the WGE UI, generate a bcrypt hash for your chosen password and store it as a secret in the Kubernetes cluster. There are several different ways to generate a bcrypt hash. Here, we'll use ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops get bcrypt-hash")," from our CLI."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'PASSWORD="<Make up and insert a brand-new password here>"\necho -n $PASSWORD | gitops get bcrypt-hash | kubectl create secret generic cluster-user-auth -n flux-system --from-literal=username=wego-admin --from-file=password=/dev/stdin\n')),(0,l.kt)("p",null,"A validation to know it\u2019s working:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret -n flux-system cluster-user-auth\n")),(0,l.kt)("h2",{id:"install-the-weave-gitops-enterprise-cli-tool"},"Install the Weave GitOps Enterprise CLI Tool"),(0,l.kt)("p",null,"To do this, you can use either brew or curl."),(0,l.kt)(i.Z,{groupId:"weave-gitops-cli",default:"homebrew",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"homebrew",label:"Homebrew",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install weaveworks/tap/gitops-ee\n"))),(0,l.kt)(s.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl --silent --location "https://artifacts.wge.dev.weave.works/releases/bin/0.27.0/gitops-$(uname)-$(uname -m).tar.gz" | tar xz -C /tmp\nsudo mv /tmp/gitops /usr/local/bin\ngitops version\n')))),(0,l.kt)("h2",{id:"next-steps"},"Next Steps"),(0,l.kt)("p",null,"Here are a couple of options for you to take your next steps with WGE. Explore one option or all of them, in no particular order."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.gitops.weave.works/docs/next/cluster-management/intro/"},"Cluster Management"),": We'll show you how to join WGE to a cluster and install an application on that cluster ",(0,l.kt)("em",{parentName:"li"},"without")," using Cluster API. But if you prefer using Cluster API, our docs cover that too."),(0,l.kt)("li",{parentName:"ul"},"Install the ",(0,l.kt)("a",{parentName:"li",href:"https://weaveworks.github.io/tf-controller/"},"Terraform Controller")," to reconcile your Terraform resources in a GitOps way. With Flux and the TF Controller, WGE makes it easy to add Terraform templates to your clusters and continuously reconcile any changes made to the Terraform source manifest."),(0,l.kt)("li",{parentName:"ul"},"Install ",(0,l.kt)("a",{parentName:"li",href:"/docs/0.29.0/policy/intro"},"Policy agent"),", which comes packaged with the WGE chart.")))}C.isMDXComponent=!0},87585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth-azure-devops-success-4806f495e958a093e7e20df952e2026e.png"},17779:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth-azure-devops-fedd005afed739e13a4a8bbd676c3928.png"},74354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oauth-bitbucket-dd2f409a75d5fa495765537b2c3f6f17.png"}}]);