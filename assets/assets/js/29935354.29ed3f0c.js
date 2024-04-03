"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[36144],{75216:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(67294),a=n(88746);n(52426);const l={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){let{tiers:t}=e;return r.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:l},t)}},42094:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(75216);const s={title:"Install Enterprise in Air-gapped Environments",hide_title:!0,toc_max_heading_level:4},i='Install Enterprise in Air-gapped Environments <TierLabel tiers="Enterprise" />',o={unversionedId:"enterprise/getting-started/install-enterprise-airgap",id:"version-0.27.0/enterprise/getting-started/install-enterprise-airgap",title:"Install Enterprise in Air-gapped Environments",description:"From wikipedia)",source:"@site/versioned_docs/version-0.27.0/enterprise/getting-started/install-enterprise-airgap.mdx",sourceDirName:"enterprise/getting-started",slug:"/enterprise/getting-started/install-enterprise-airgap",permalink:"/docs/0.27.0/enterprise/getting-started/install-enterprise-airgap",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.27.0/enterprise/getting-started/install-enterprise-airgap.mdx",tags:[],version:"0.27.0",frontMatter:{title:"Install Enterprise in Air-gapped Environments",hide_title:!0,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Install Weave GitOps Enterprise",permalink:"/docs/0.27.0/enterprise/getting-started/install-enterprise"},next:{title:"Enterprise Releases",permalink:"/docs/0.27.0/enterprise/getting-started/releases-enterprise"}},p={},c=[{value:"Setup a WGE install environment",id:"setup-a-wge-install-environment",level:2},{value:"Setup a proxy host",id:"setup-a-proxy-host",level:3},{value:"Create a Kind Cluster",id:"create-a-kind-cluster",level:4},{value:"Install Flux",id:"install-flux",level:4},{value:"Set up a Helm repo",id:"set-up-a-helm-repo",level:4},{value:"Install Weave Gitops Enterprise",id:"install-weave-gitops-enterprise",level:3},{value:"Cluster API",id:"cluster-api",level:4},{value:"Deploying the Terraform Controller",id:"deploying-the-terraform-controller",level:4},{value:"Weave Gitops Enterprise",id:"weave-gitops-enterprise",level:4},{value:"Collect and Publish Artifacts",id:"collect-and-publish-artifacts",level:2},{value:"Airgap Install",id:"airgap-install",level:2},{value:"Weave Gitops Enterprise",id:"weave-gitops-enterprise-1",level:3},{value:"Cluster API",id:"cluster-api-1",level:3}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-enterprise-in-air-gapped-environments-"},"Install Enterprise in Air-gapped Environments ",(0,a.kt)(l.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"From ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Air_gap_(networking)"},"wikipedia")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"An air gap, air wall, air gapping or disconnected network is a network security measure employed on one or more computers\nto ensure that a secure computer network is physically isolated from unsecured networks, such as the public Internet or an unsecured local area network...")),(0,a.kt)("p",null,"This document guides on how to install Weave Gitops Enterprise in a restricted environment."),(0,a.kt)("h1",{id:"before-you-start"},"Before You Start"),(0,a.kt)("p",null,"There are multiple restrictions that could happen within an air-gapped environment. This guide assumes that you have egress network\nrestrictions. In order to install Weave Gitops Enterprise (WGE), the required artifacts are required to be loaded\nfrom a private registry. This guide helps you with the task to identity the Helm charts\nand container images required to install WGE and to load them into your private registry."),(0,a.kt)("p",null,"It also assumes that you could prepare the installation from a proxy host. A proxy host is defined here\nas a computer that is able to access to both the public and private network. It could take different shapes,\nfor example, it could be a bastion host, a corp laptop, etc."),(0,a.kt)("p",null,"Access to both public and private network is required during the airgap installation but not simultaneously.\nIt is expected to have an online stage to gather the artifacts first, and an offline stage later,\nto load the artifacts in the private network."),(0,a.kt)("p",null,"Finally, we aim to provide an end to end example to use it as a guidance more than a recipe. Feel free to adapt the details\nthat do not fit within your context."),(0,a.kt)("h1",{id:"install"},"Install"),(0,a.kt)("p",null,"There are different variations of the following stages and conditions. We consider that installing\nWGE in an air-gapped environment could follow the following stages."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup a WGE install environment."),(0,a.kt)("li",{parentName:"ol"},"Collect artifacts and publish to a private registry."),(0,a.kt)("li",{parentName:"ol"},"Install Weave Gitops Enterprise in the air-gapped environment.")),(0,a.kt)("h2",{id:"setup-a-wge-install-environment"},"Setup a WGE install environment"),(0,a.kt)("p",null,"The main goal of this stage is to recreate a local Weave Gitops Enterprise within your context, to collect\nthe container images and Helm charts, that will be required in your private registry for the offline installation."),(0,a.kt)("p",null,"A three-step setup is followed."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Setup a proxy host"),(0,a.kt)("li",{parentName:"ol"},"Setup a private registry"),(0,a.kt)("li",{parentName:"ol"},"Install Weave Gitops Enterprise")),(0,a.kt)("h3",{id:"setup-a-proxy-host"},"Setup a proxy host"),(0,a.kt)("p",null,"There are many possible configurations for this host. This guide will assume that the host has installed the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"docker")," as container runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools"},"kubectl and kind")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/containers/skopeo"},"skopeo")," to manage container images"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/flux/cmd/"},"flux")," to boostrap Flux in the environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cluster-api.sigs.k8s.io/user/quick-start.html#install-clusterctl"},"clusterctl")," to replicate the cluster management\ncapabilities.")),(0,a.kt)("h4",{id:"create-a-kind-cluster"},"Create a Kind Cluster"),(0,a.kt)("p",null,"Create a kind cluster with registry following ",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/local-registry/"},"this guide")),(0,a.kt)("h4",{id:"install-flux"},"Install Flux"),(0,a.kt)("p",null,"You could just use ",(0,a.kt)("inlineCode",{parentName:"p"},"flux install")," to install Flux into your kind cluster"),(0,a.kt)("h4",{id:"set-up-a-helm-repo"},"Set up a Helm repo"),(0,a.kt)("p",null,"We are going to install ",(0,a.kt)("a",{parentName:"p",href:"https://chartmuseum.com/"},"ChartMuseum")," via Flux."),(0,a.kt)("p",null,"Remember to also install helm plugin\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chartmuseum/helm-push"},"cm-push"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see installation yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: chartmuseum\n  namespace: flux-system\nspec:\n  interval: 10m\n  url: https://chartmuseum.github.io/charts\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: chartmuseum\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: chartmuseum\n      sourceRef:\n        kind: HelmRepository\n        name: chartmuseum\n        namespace: flux-system\n  interval: 10m0s\n  timeout: 10m0s\n  releaseName: helm-repo\n  install:\n    crds: CreateReplace\n    remediation:\n      retries: 3\n  values:\n    env:\n      open:\n        DISABLE_API: "false"\n        AUTH_ANONYMOUS_GET: "true"\n'))),(0,a.kt)("p",null,"Set up access from your host."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#expose kubernetes svc\nkubectl -n flux-system port-forward svc/helm-repo-chartmuseum 8080:8080 &\n\n#add hostname\nsudo -- sh -c "echo 127.0.0.1 helm-repo-chartmuseum >> /etc/hosts"\n\n')),(0,a.kt)("p",null,"Test that you could reach it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#add repo to helm\nhelm repo add private http://helm-repo-chartmuseum:8080\n\n#test that works\nhelm repo update private\n")),(0,a.kt)("p",null,"At this stage you have already a private registry for container images and helm charts."),(0,a.kt)("h3",{id:"install-weave-gitops-enterprise"},"Install Weave Gitops Enterprise"),(0,a.kt)("p",null,"This step is to gather the artifacts and images in your local environment to push to the private registry."),(0,a.kt)("h4",{id:"cluster-api"},"Cluster API"),(0,a.kt)("p",null,"This would vary depending on the provider, given that we target a offline environment, most likely we are in\na private cloud environment, so we will be using ",(0,a.kt)("a",{parentName:"p",href:"https://weaveworks-liquidmetal.github.io/site/docs/tutorial-basics/capi/"},"liquidmetal"),"."),(0,a.kt)("p",null,"Export these environment variables to configure your CAPI experience. Adjust them to your context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'export CAPI_BASE_PATH=/tmp/capi\nexport CERT_MANAGER_VERSION=v1.9.1\nexport CAPI_VERSION=v1.3.0\nexport CAPMVM_VERSION=v0.7.0\nexport EXP_CLUSTER_RESOURCE_SET=true\nexport CONTROL_PLANE_MACHINE_COUNT=1\nexport WORKER_MACHINE_COUNT=1\nexport CONTROL_PLANE_VIP="192.168.100.9"\nexport HOST_ENDPOINT="192.168.1.130:9090"\n')),(0,a.kt)("p",null,"Execute the following script to generate ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl")," config file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cat << EOF > clusterctl.yaml\ncert-manager:\n  url: "$CAPI_BASE_PATH/cert-manager/$CERT_MANAGER_VERSION/cert-manager.yaml"\n\nproviders:\n  - name: "microvm"\n    url: "$CAPI_BASE_PATH/infrastructure-microvm/$CAPMVM_VERSION/infrastructure-components.yaml"\n    type: "InfrastructureProvider"\n  - name: "cluster-api"\n    url: "$CAPI_BASE_PATH/cluster-api/$CAPI_VERSION/core-components.yaml"\n    type: "CoreProvider"\n  - name: "kubeadm"\n    url: "$CAPI_BASE_PATH/bootstrap-kubeadm/$CAPI_VERSION/bootstrap-components.yaml"\n    type: "BootstrapProvider"\n  - name: "kubeadm"\n    url: "$CAPI_BASE_PATH/control-plane-kubeadm/$CAPI_VERSION/control-plane-components.yaml"\n    type: "ControlPlaneProvider"\nEOF\n')),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"make")," using the following makefile to intialise CAPI in your cluster:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see Makefile contents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-makefile"},".PHONY := capi\n\ncapi: capi-init capi-cluster\n\ncapi-init: cert-manager cluster-api bootstrap-kubeadm control-plane-kubeadm microvm clusterctl-init\n\ncert-manager:\n    mkdir -p  $(CAPI_BASE_PATH)/cert-manager/$(CERT_MANAGER_VERSION)\n    curl -L https://github.com/cert-manager/cert-manager/releases/download/$(CERT_MANAGER_VERSION)/cert-manager.yaml --output $(CAPI_BASE_PATH)/cert-manager/$(CERT_MANAGER_VERSION)/cert-manager.yaml\n\ncluster-api:\n    mkdir -p  $(CAPI_BASE_PATH)/cluster-api/$(CAPI_VERSION)\n    curl -L https://github.com/kubernetes-sigs/cluster-api/releases/download/$(CAPI_VERSION)/core-components.yaml --output $(CAPI_BASE_PATH)/cluster-api/$(CAPI_VERSION)/core-components.yaml\n    curl -L https://github.com/kubernetes-sigs/cluster-api/releases/download/$(CAPI_VERSION)/metadata.yaml --output $(CAPI_BASE_PATH)/cluster-api/$(CAPI_VERSION)/metadata.yaml\n\nbootstrap-kubeadm:\n    mkdir -p  $(CAPI_BASE_PATH)/bootstrap-kubeadm/$(CAPI_VERSION)\n    curl -L https://github.com/kubernetes-sigs/cluster-api/releases/download/$(CAPI_VERSION)/bootstrap-components.yaml --output $(CAPI_BASE_PATH)/bootstrap-kubeadm/$(CAPI_VERSION)/bootstrap-components.yaml\n    curl -L https://github.com/kubernetes-sigs/cluster-api/releases/download/$(CAPI_VERSION)/metadata.yaml --output $(CAPI_BASE_PATH)/bootstrap-kubeadm/$(CAPI_VERSION)/metadata.yaml\n\ncontrol-plane-kubeadm:\n    mkdir -p  $(CAPI_BASE_PATH)/control-plane-kubeadm/$(CAPI_VERSION)\n    curl -L https://github.com/kubernetes-sigs/cluster-api/releases/download/$(CAPI_VERSION)/control-plane-components.yaml --output $(CAPI_BASE_PATH)/control-plane-kubeadm/$(CAPI_VERSION)/control-plane-components.yaml\n    curl -L https://github.com/kubernetes-sigs/cluster-api/releases/download/$(CAPI_VERSION)/metadata.yaml --output $(CAPI_BASE_PATH)/control-plane-kubeadm/$(CAPI_VERSION)/metadata.yaml\n\nmicrovm:\n    mkdir -p  $(CAPI_BASE_PATH)/infrastructure-microvm/$(CAPMVM_VERSION)\n    curl -L https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/releases/download/$(CAPMVM_VERSION)/infrastructure-components.yaml --output $(CAPI_BASE_PATH)/infrastructure-microvm/$(CAPMVM_VERSION)/infrastructure-components.yaml\n    curl -L https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/releases/download/$(CAPMVM_VERSION)/cluster-template-cilium.yaml --output $(CAPI_BASE_PATH)/infrastructure-microvm/$(CAPMVM_VERSION)/cluster-template-cilium.yaml\n    curl -L https://github.com/weaveworks-liquidmetal/cluster-api-provider-microvm/releases/download/$(CAPMVM_VERSION)/metadata.yaml --output $(CAPI_BASE_PATH)/infrastructure-microvm/$(CAPMVM_VERSION)/metadata.yaml\n\nclusterctl-init:\n    clusterctl init --wait-providers -v 4 --config clusterctl.yaml --infrastructure microvm\n\ncapi-cluster:\n    clusterctl generate cluster --config clusterctl.yaml -i microvm:$(CAPMVM_VERSION) -f cilium lm-demo | kubectl apply -f -\n"))),(0,a.kt)("h4",{id:"deploying-the-terraform-controller"},"Deploying the Terraform Controller"),(0,a.kt)("p",null,"Apply the following example manifest to deploy the Terraform Controller:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see file contents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: tf-controller\n  namespace: flux-system\nspec:\n  interval: 10m\n  url: https://weaveworks.github.io/tf-controller/\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: tf-controller\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: tf-controller\n      version: "0.9.2"\n      sourceRef:\n        kind: HelmRepository\n        name: tf-controller\n        namespace: flux-system\n  interval: 10m0s\n  install:\n    crds: CreateReplace\n    remediation:\n      retries: 3\n  upgrade:\n    crds: CreateReplace\n'))),(0,a.kt)("h4",{id:"weave-gitops-enterprise"},"Weave Gitops Enterprise"),(0,a.kt)("p",null,"Update the following manifest to your context."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see file contents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-7,19-20}","{4-7,19-20}":!0},'---\napiVersion: v1\ndata:\n  deploy-key: <changeme>\n  entitlement: <changeme>\n  password: <changeme>\n  username: <changeme>\nkind: Secret\nmetadata:\n  labels:\n    kustomize.toolkit.fluxcd.io/name: shared-secrets\n    kustomize.toolkit.fluxcd.io/namespace: flux-system\n  name: weave-gitops-enterprise-credentials\n  namespace: flux-system\ntype: Opaque\n---\napiVersion: v1\ndata:\n  password: <changeme>\n  username: <changeme>\nkind: Secret\nmetadata:\n  labels:\n    kustomize.toolkit.fluxcd.io/name: enterprise\n    kustomize.toolkit.fluxcd.io/namespace: flux-system\n  name: cluster-user-auth\n  namespace: flux-system\ntype: Opaque\n---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weave-gitops-enterprise-charts\n  namespace: flux-system\nspec:\n  interval: 10m\n  secretRef:\n    name: weave-gitops-enterprise-credentials\n  url: https://charts.dev.wkp.weave.works/releases/charts-v3\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: mccp\n      version: "0.10.2"\n      sourceRef:\n        kind: HelmRepository\n        name: weave-gitops-enterprise-charts\n        namespace: flux-system\n  interval: 10m0s\n  install:\n    crds: CreateReplace\n    remediation:\n      retries: 3\n  upgrade:\n    crds: CreateReplace\n  values:\n    global:\n      capiEnabled: true\n    enablePipelines: true\n    enableTerraformUI: true\n    clusterBootstrapController:\n      enabled: true\n    cluster-controller:\n      controllerManager:\n        kubeRbacProxy:\n          image:\n            repository: gcr.io/kubebuilder/kube-rbac-proxy\n            tag: v0.8.0\n        manager:\n          image:\n            repository: docker.io/weaveworks/cluster-controller\n            tag: v1.4.1\n    policy-agent:\n      enabled: true\n      image: weaveworks/policy-agent\n    pipeline-controller:\n      controller:\n        manager:\n          image:\n            repository: ghcr.io/weaveworks/pipeline-controller\n    images:\n      clustersService: docker.io/weaveworks/weave-gitops-enterprise-clusters-service:v0.10.2\n      uiServer: docker.io/weaveworks/weave-gitops-enterprise-ui-server:v0.10.2\n      clusterBootstrapController: weaveworks/cluster-bootstrap-controller:v0.4.0\n'))),(0,a.kt)("p",null,"At this stage you should have a local management cluster with Weave GitOps Enterprise installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c kubectl get pods -A\nNAMESPACE                           NAME                                                              READY   STATUS    RESTARTS      AGE\n...\nflux-system                         weave-gitops-enterprise-cluster-controller-6f8c69dc8-tq994        2/2     Running   5 (12h ago)   13h\nflux-system                         weave-gitops-enterprise-mccp-cluster-bootstrap-controller-cxd9c   2/2     Running   0             13h\nflux-system                         weave-gitops-enterprise-mccp-cluster-service-8485f5f956-pdtxw     1/1     Running   0             12h\nflux-system                         weave-gitops-enterprise-pipeline-controller-85b76d95bd-2sw7v      1/1     Running   0             13h\n...\n")),(0,a.kt)("p",null,"You can observe the installed Helm Charts with ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get helmcharts.source.toolkit.fluxcd.io\nNAME                                  CHART           VERSION   SOURCE KIND      SOURCE NAME                      AGE   READY   STATUS\nflux-system-cert-manager              cert-manager    0.0.7     HelmRepository   weaveworks-charts                13h   True    pulled 'cert-manager' chart with version '0.0.7'\nflux-system-tf-controller             tf-controller   0.9.2     HelmRepository   tf-controller                    13h   True    pulled 'tf-controller' chart with version '0.9.2'\nflux-system-weave-gitops-enterprise   mccp            v0.10.2   HelmRepository   weave-gitops-enterprise-charts   13h   True    pulled 'mccp' chart with version '0.10.2'\n")),(0,a.kt)("p",null,"As well as the container images:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\nkubectl get pods --all-namespaces -o jsonpath=\"{.items[*].spec['containers','initContainers'][*].image}\" |tr -s '[[:space:]]' '\\n' \\\n| sort | uniq | grep -vE 'kindest|etcd|coredns'\n\ndocker.io/prom/prometheus:v2.34.0\ndocker.io/weaveworks/cluster-controller:v1.4.1\ndocker.io/weaveworks/weave-gitops-enterprise-clusters-service:v0.10.2\ndocker.io/weaveworks/weave-gitops-enterprise-ui-server:v0.10.2\nghcr.io/fluxcd/flagger-loadtester:0.22.0\nghcr.io/fluxcd/flagger:1.21.0\nghcr.io/fluxcd/helm-controller:v0.23.1\nghcr.io/fluxcd/kustomize-controller:v0.27.1\nghcr.io/fluxcd/notification-controller:v0.25.2\n...\n")),(0,a.kt)("h2",{id:"collect-and-publish-artifacts"},"Collect and Publish Artifacts"),(0,a.kt)("p",null,"This section guides you to push installed artifacts to your private registry.\nHere's a Makefile to help you with each stage:"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see Makefile contents"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-makefile",metastring:"{4-6}","{4-6}":!0},".PHONY := all\n\n#set these variable with your custom configuration\nPRIVATE_HELM_REPO_NAME=private\nREGISTRY=localhost:5001\nWGE_VERSION=0.10.2\n\nWGE=mccp-$(WGE_VERSION)\nWGE_CHART=$(WGE).tgz\n\nall: images charts\n\ncharts: pull-charts push-charts\n\nimages:\n    kubectl get pods --all-namespaces -o jsonpath=\"{.items[*].spec['containers','initContainers'][*].image}\" \\\n    |tr -s '[[:space:]]' '\\n' | sort | uniq | grep -vE 'kindest|kube-(.*)|etcd|coredns' | xargs -L 1 -I {} ./image-sync.sh {} $(REGISTRY)\n    kubectl get microvmmachinetemplates --all-namespaces -o jsonpath=\"{.items[*].spec.template.spec.kernel.image}\"|tr -s '[[:space:]]' '\\n' \\\n    | sort | uniq | xargs -L 1 -I {} ./image-sync.sh {} $(REGISTRY)\n\npull-charts:\n    curl -L https://s3.us-east-1.amazonaws.com/weaveworks-wkp/releases/charts-v3/$(WGE_CHART) --output  $(WGE_CHART)\n\npush-charts:\n    helm cm-push -f $(WGE_CHART) $(PRIVATE_HELM_REPO_NAME)\n"))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"image-sync.sh")," referenced in the ",(0,a.kt)("inlineCode",{parentName:"p"},"images")," target of the the above Makefile\nis similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"skopeo copy docker://$1 docker://$2/$1 --preserve-digests --multi-arch=all\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/skopeo"},"Skopeo")," allows you to configure a range a security features to meet your requirements.\nFor example, configuring trust policies before pulling or signing containers before making them available in your private network.\nFeel free to adapt the previous script to meet your security needs.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the environment variables to your context."),(0,a.kt)("li",{parentName:"ol"},"Execute ",(0,a.kt)("inlineCode",{parentName:"li"},"make")," to automatically sync Helm charts and container images.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  resources git:(docs-airgap-install) \u2717 make\nkubectl get microvmmachinetemplates --all-namespaces -o jsonpath=\"{.items[*].spec.template.spec.kernel.image}\"|tr -s '[[:space:]]' '\\n' \\\n    | sort | uniq | xargs -L 1 -I {} ./image-pull-push.sh {} docker-registry:5000\n\n5.10.77: Pulling from weaveworks-liquidmetal/flintlock-kernel\nDigest: sha256:5ef5f3f5b42a75fdb69cdd8d65f5929430f086621e61f00694f53fe351b5d466\nStatus: Image is up to date for ghcr.io/weaveworks-liquidmetal/flintlock-kernel:5.10.77\nghcr.io/weaveworks-liquidmetal/flintlock-kernel:5.10.77\n...5.10.77: digest: sha256:5ef5f3f5b42a75fdb69cdd8d65f5929430f086621e61f00694f53fe351b5d466 size: 739\n")),(0,a.kt)("h2",{id:"airgap-install"},"Airgap Install"),(0,a.kt)("h3",{id:"weave-gitops-enterprise-1"},"Weave Gitops Enterprise"),(0,a.kt)("p",null,"At this stage you have in your private registry both the Helm charts and container images required to install Weave GitOps\nEnterprise. Now you are ready to install WGE from your private registry."),(0,a.kt)("p",null,"Follow the instructions to install WGE with the following considerations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Adjust Helm Releases ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.chart.spec.sourceRef")," to tell Flux to pull Helm charts from your Helm repo."),(0,a.kt)("li",{parentName:"ol"},"Adjust Helm Releases ",(0,a.kt)("inlineCode",{parentName:"li"},"spec.values")," to use the container images from your private registry.")),(0,a.kt)("p",null,"An example of how it would look for Weave GitOps Enterprise is shown below."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view example WGE manifest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="weave-gitops-enterprise.yaml" {21-24,32}',title:'"weave-gitops-enterprise.yaml"',"{21-24,32}":!0},'---\napiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weave-gitops-enterprise-charts\n  namespace: flux-system\nspec:\n  interval: 1m\n  url: http://helm-repo-chartmuseum:8080\n---\napiVersion: helm.toolkit.fluxcd.io/v2beta1\nkind: HelmRelease\nmetadata:\n  name: weave-gitops-enterprise\n  namespace: flux-system\nspec:\n  chart:\n    spec:\n      chart: mccp\n      version: "0.10.2"\n      sourceRef:\n        kind: HelmRepository\n        name: weave-gitops-enterprise-charts\n        namespace: flux-system\n  interval: 1m0s\n  install:\n    crds: CreateReplace\n    remediation:\n      retries: 3\n  upgrade:\n    crds: CreateReplace\n  values:\n    global:\n      capiEnabled: true\n    enablePipelines: true\n    enableTerraformUI: true\n    clusterBootstrapController:\n      enabled: true\n    #images changed\n    cluster-controller:\n      controllerManager:\n        kubeRbacProxy:\n          image:\n            repository: localhost:5001/gcr.io/kubebuilder/kube-rbac-proxy\n            tag: v0.8.0\n        manager:\n          image:\n            repository: localhost:5001/docker.io/weaveworks/cluster-controller\n            tag: v1.4.1\n    policy-agent:\n      enabled: true\n      image: localhost:5001/weaveworks/policy-agent\n    pipeline-controller:\n      controller:\n        manager:\n          image:\n            repository: localhost:5001/ghcr.io/weaveworks/pipeline-controller\n    images:\n      clustersService: localhost:5001/docker.io/weaveworks/weave-gitops-enterprise-clusters-service:v0.10.2\n      uiServer: localhost:5001/docker.io/weaveworks/weave-gitops-enterprise-ui-server:v0.10.2\n      clusterBootstrapController: localhost:5001/weaveworks/cluster-bootstrap-controller:v0.4.0\n'))),(0,a.kt)("h3",{id:"cluster-api-1"},"Cluster API"),(0,a.kt)("p",null,"Indicate in the Cluster API configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"clusterctl.yaml")," that you want to use images from the private repo\nby leveraging ",(0,a.kt)("a",{parentName:"p",href:"https://cluster-api.sigs.k8s.io/clusterctl/configuration.html#image-overrides"},"image overrides"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"images:\n  all:\n    repository: localhost:5001/registry.k8s.io/cluster-api\n  infrastructure-microvm:\n    repository: localhost:5001/ghcr.io/weaveworks-liquidmetal\n")),(0,a.kt)("p",null,"Then execute ",(0,a.kt)("inlineCode",{parentName:"p"},"make clusterctl-init")," to init capi using your private registry."))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);