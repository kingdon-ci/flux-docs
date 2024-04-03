"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[32618],{19666:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),s=a(5730);function o(e){let{children:t,fallback:a}=e;return(0,s.Z)()?n.createElement(n.Fragment,null,t?.()):a??null}},8971:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),s=a(88746);a(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function r(e){let{tiers:t}=e;return n.createElement(s.Z,{title:`This feature is a available on ${t}.`,style:o},t)}},22958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=a(87462),s=(a(67294),a(3905)),o=a(8971),r=a(77823),l=a(19666);var i=a(83565);const c={title:"Getting started",hide_title:!0},p='Getting started <TierLabel tiers="enterprise" />',u={unversionedId:"cluster-management/getting-started",id:"version-0.26.0/cluster-management/getting-started",title:"Getting started",description:"Creating your first CAPD Cluster",source:"@site/versioned_docs/version-0.26.0/cluster-management/getting-started.mdx",sourceDirName:"cluster-management",slug:"/cluster-management/getting-started",permalink:"/docs/0.26.0/cluster-management/getting-started",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.26.0/cluster-management/getting-started.mdx",tags:[],version:"0.26.0",frontMatter:{title:"Getting started",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/0.26.0/cluster-management/intro"},next:{title:"Cluster API Providers",permalink:"/docs/0.26.0/cluster-management/cluster-api-providers"}},m={},d=[{value:"Creating your first CAPD Cluster",id:"creating-your-first-capd-cluster",level:2},{value:"Directory structure",id:"directory-structure",level:3},{value:"Add common RBAC to the repo",id:"add-common-rbac-to-the-repo",level:3},{value:"Add a template",id:"add-a-template",level:3},{value:"Automatically install a CNI with <code>ClusterResourceSet</code>s",id:"automatically-install-a-cni-with-clusterresourcesets",level:2},{value:"Add a CRS to install a CNI",id:"add-a-crs-to-install-a-cni",level:3},{value:"Profiles and clusters",id:"profiles-and-clusters",level:2},{value:"Add a helmrepo",id:"add-a-helmrepo",level:4},{value:"Add a cluster bootstrap config",id:"add-a-cluster-bootstrap-config",level:4},{value:"Add Monitoring Dashboards to your cluster",id:"add-monitoring-dashboards-to-your-cluster",level:4},{value:"Specifying CAPI cluster kinds",id:"specifying-capi-cluster-kinds",level:4},{value:"Test",id:"test",level:2}],k={toc:d};function g(e){let{components:t,...c}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,c,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started-"},"Getting started ",(0,s.kt)(o.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,s.kt)("h2",{id:"creating-your-first-capd-cluster"},"Creating your first CAPD Cluster"),(0,s.kt)("p",null,"If you've followed the ",(0,s.kt)("a",{parentName:"p",href:"/docs/0.26.0/enterprise/getting-started/install-enterprise"},"Installation guide")," you should have:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Weave GitOps Enterprise installed"),(0,s.kt)("li",{parentName:"ol"},"A CAPI provider installed (With support for ",(0,s.kt)("inlineCode",{parentName:"li"},"ClusterResourceSet"),"s enabled).")),(0,s.kt)("p",null,"Next up we'll add a template and use it to create a cluster."),(0,s.kt)("h3",{id:"directory-structure"},"Directory structure"),(0,s.kt)("p",null,"Let's setup a directory structure to manage our clusters"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p clusters/bases \\\n  clusters/management/capi/templates \\\n  clusters/management/capi/bootstrap \\\n  clusters/management/capi/profiles\n")),(0,s.kt)("p",null,"Now we should have:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u2514\u2500\u2500 clusters\n    \u251c\u2500\u2500 bases\n    \u2514\u2500\u2500 management\n        \u2514\u2500\u2500 capi\n            \u251c\u2500\u2500 bootstrap\n            \u251c\u2500\u2500 profiles\n            \u2514\u2500\u2500 templates\n")),(0,s.kt)("p",null,"This assumes that we've configured flux to reconcile everything in ",(0,s.kt)("inlineCode",{parentName:"p"},"clusters/management")," into our management cluster."),(0,s.kt)("p",null,"To keep things organized we've created some subpaths for the different resources:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bases")," for any common resources between clusters like RBAC and policy."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"templates")," for ",(0,s.kt)("inlineCode",{parentName:"li"},"GitOpsTemplates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bootstrap")," for ",(0,s.kt)("inlineCode",{parentName:"li"},"ClusterBootstrapConfig"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"ClusterResourceSet")," and the ",(0,s.kt)("inlineCode",{parentName:"li"},"ConfigMap")," they reference"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"profiles")," for the ",(0,s.kt)("inlineCode",{parentName:"li"},"HelmRepository")," of the profiles for the newly created clusters")),(0,s.kt)("p",null,"Lets grab some sample resources to create our first cluster!"),(0,s.kt)("h3",{id:"add-common-rbac-to-the-repo"},"Add common RBAC to the repo"),(0,s.kt)("p",null,"When a cluster is provisioned, by default it will reconcile all the manifests in ",(0,s.kt)("inlineCode",{parentName:"p"},"./clusters/<cluster-namespace>/<cluster-name>")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"./clusters/bases"),"."),(0,s.kt)("p",null,"To display Applications and Sources in the UI we need to give the logged in user permissions to inspect the new cluster."),(0,s.kt)("p",null,"Adding common rbac rules to ",(0,s.kt)("inlineCode",{parentName:"p"},"./clusters/bases/rbac")," is an easy way to configure this!"),(0,s.kt)(l.Z,{mdxType:"BrowserOnly"},(()=>(0,s.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/bases/rbac/wego-admin.yaml ",window.location.protocol,"//",window.location.host,a(96498).Z))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Expand to see full template yaml"),(0,s.kt)(r.Z,{title:"clusters/bases/rbac/wego-admin.yaml",className:"language-yaml",mdxType:"CodeBlock"},'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: wego-admin-cluster-role-binding\nsubjects:\n  - kind: User\n    name: wego-admin\n    apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: wego-admin-cluster-role\n  apiGroup: rbac.authorization.k8s.io\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: wego-admin-cluster-role\nrules:\n  - apiGroups: [""]\n    resources: ["secrets", "pods"]\n    verbs: ["get", "list"]\n  - apiGroups: ["apps"]\n    resources: ["deployments", "replicasets"]\n    verbs: ["get", "list"]\n  - apiGroups: ["kustomize.toolkit.fluxcd.io"]\n    resources: ["kustomizations"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: ["helm.toolkit.fluxcd.io"]\n    resources: ["helmreleases"]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: ["source.toolkit.fluxcd.io"]\n    resources: [ "buckets", "helmcharts", "gitrepositories", "helmrepositories", "ocirepositories" ]\n    verbs: ["get", "list", "patch"]\n  - apiGroups: [""]\n    resources: ["events"]\n    verbs: ["get", "watch", "list"]\n  - apiGroups: ["pac.weave.works"]\n    resources: ["policies"]\n    verbs: ["get", "list"]\n')),(0,s.kt)("h3",{id:"add-a-template"},"Add a template"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/0.26.0/gitops-templates/intro"},"CAPI Templates")," page for more details on this topic. Once we load a template we can use it in the UI to create clusters!"),(0,s.kt)("p",null,"Download the template below to your config repository path, then commit and push to your git origin."),(0,s.kt)(l.Z,{mdxType:"BrowserOnly"},(()=>(0,s.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/templates/capd-template.yaml"," ",window.location.protocol,"//",window.location.host,a(53001).Z))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Expand to see full template yaml"),(0,s.kt)(r.Z,{title:"clusters/management/capi/templates/capd-template.yaml",className:"language-yaml",mdxType:"CodeBlock"},i.Z)),(0,s.kt)("h2",{id:"automatically-install-a-cni-with-clusterresourcesets"},"Automatically install a CNI with ",(0,s.kt)("inlineCode",{parentName:"h2"},"ClusterResourceSet"),"s"),(0,s.kt)("p",null,"We can use ",(0,s.kt)("inlineCode",{parentName:"p"},"ClusterResourceSet"),"s to automatically install CNI's on a new cluster, here we use calico as an example."),(0,s.kt)("h3",{id:"add-a-crs-to-install-a-cni"},"Add a CRS to install a CNI"),(0,s.kt)("p",null,"Create a calico configmap and a CRS as follows:"),(0,s.kt)(l.Z,{mdxType:"BrowserOnly"},(()=>(0,s.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/bootstrap/calico-crs.yaml"," ",window.location.protocol,"//",window.location.host,a(10076).Z,"\n","curl -o clusters/management/capi/bootstrap/calico-crs-configmap.yaml ",window.location.protocol,"//",window.location.host,a(62092).Z))),(0,s.kt)(r.Z,{title:"clusters/management/capi/boostrap/calico-crs.yaml",className:"language-yaml",mdxType:"CodeBlock"},"apiVersion: addons.cluster.x-k8s.io/v1alpha3\nkind: ClusterResourceSet\nmetadata:\n  name: calico-crs\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      cni: calico\n  resources:\n  - kind: ConfigMap\n    name: calico-crs-configmap\n\n"),(0,s.kt)("p",null,"The full ",(0,s.kt)("a",{target:"_blank",href:a(96877).Z},(0,s.kt)("code",null,"calico-crs-configmap.yaml"))," is a bit large to display inline here but make sure to download it to ",(0,s.kt)("inlineCode",{parentName:"p"},"clusters/management/capi/bootstrap/calico-crs-configmap.yaml")," too, manually or with the above ",(0,s.kt)("inlineCode",{parentName:"p"},"curl")," command."),(0,s.kt)("h2",{id:"profiles-and-clusters"},"Profiles and clusters"),(0,s.kt)("p",null,"WGE can automatically install profiles onto new clusters"),(0,s.kt)("h4",{id:"add-a-helmrepo"},"Add a helmrepo"),(0,s.kt)("p",null,"Download the profile repository below to your config repository path then commit and push. Make sure to update the url to point to a Helm repository containing your profiles."),(0,s.kt)(l.Z,{mdxType:"BrowserOnly"},(()=>(0,s.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/profiles/profile-repo.yaml"," ",window.location.protocol,"//",window.location.host,a(70987).Z))),(0,s.kt)(r.Z,{title:"clusters/management/capi/profiles/profile-repo.yaml",className:"language-yaml",mdxType:"CodeBlock"},"apiVersion: source.toolkit.fluxcd.io/v1beta2\nkind: HelmRepository\nmetadata:\n  name: weaveworks-charts\n  namespace: flux-system\nspec:\n  interval: 1m\n  url: https://weaveworks.github.io/weave-gitops-profile-examples/\nstatus: {}\n"),(0,s.kt)("p",null,"For more information about profiles, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/0.26.0/cluster-management/profiles/#optional-using-a-helm-chart-from-a-remote-publicprivate-repository"},"profiles from private helm repositories"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/0.26.0/policy/weave-policy-profile"},"policy profiles"),", and ",(0,s.kt)("a",{parentName:"p",href:"/docs/0.26.0/secrets/setup-eso"},"eso secrets profiles"),"."),(0,s.kt)("h4",{id:"add-a-cluster-bootstrap-config"},"Add a cluster bootstrap config"),(0,s.kt)("p",null,"Create a cluster bootstrap config as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," kubectl create secret generic my-pat --from-literal GITHUB_TOKEN=$GITHUB_TOKEN\n")),(0,s.kt)("p",null,"Download the config with"),(0,s.kt)(l.Z,{mdxType:"BrowserOnly"},(()=>(0,s.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"curl -o clusters/management/capi/bootstrap/capi-gitops-cluster-bootstrap-config.yaml"," ",window.location.protocol,"//",window.location.host,a(11859).Z))),(0,s.kt)("p",null,"Then update the ",(0,s.kt)("inlineCode",{parentName:"p"},"GITOPS_REPO")," variable to point to your cluster"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"Expand to see full yaml"),(0,s.kt)(r.Z,{title:"clusters/management/capi/boostrap/capi-gitops-cluster-bootstrap-config.yaml",className:"language-yaml",mdxType:"CodeBlock"},'apiVersion: capi.weave.works/v1alpha1\nkind: ClusterBootstrapConfig\nmetadata:\n  name: capi-gitops\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      weave.works/capi: bootstrap\n  jobTemplate:\n    generateName: "run-gitops-{{ .ObjectMeta.Name }}"\n    spec:\n      containers:\n        - image: ghcr.io/fluxcd/flux-cli:v0.29.5\n          name: flux-bootstrap\n          resources: {}\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/gitops"\n              readOnly: true\n          args:\n            [\n              "bootstrap",\n              "github",\n              "--kubeconfig=/etc/gitops/value",\n              "--owner=$GITHUB_USER",\n              "--repository=fleet-infra",\n              "--path=./clusters/{{ .ObjectMeta.Namespace }}/{{ .ObjectMeta.Name }}",\n            ]\n          envFrom:\n            - secretRef:\n                name: my-pat\n      restartPolicy: Never\n      volumes:\n        - name: kubeconfig\n          secret:\n            secretName: "{{ .ObjectMeta.Name }}-kubeconfig"\n')),(0,s.kt)("h4",{id:"add-monitoring-dashboards-to-your-cluster"},"Add Monitoring Dashboards to your cluster"),(0,s.kt)("p",null,"In order to add dashboards to your cluster, you'll need to use metadata annotations following the below pattern."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"apiVersion: gitops.weave.works/v1alpha1\nkind: GitopsCluster\nmetadata:\n  annotations:\n    metadata.weave.works/dashboard.grafana: https://grafana.com/\n    metadata.weave.works/dashboard.prometheus: https://prometheus.io/\n")),(0,s.kt)("h4",{id:"specifying-capi-cluster-kinds"},"Specifying CAPI cluster kinds"),(0,s.kt)("p",null,"To be able to explicitly specify the type of cluster, you need to use metadata annotations using ",(0,s.kt)("inlineCode",{parentName:"p"},"weave.works/cluster-kind")," for the annotation key as the below pattern:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"apiVersion: gitops.weave.works/v1alpha1\nkind: GitopsCluster\nmetadata:\n  annotations:\n      weave.works/cluster-kind: <CLUSTER_KIND>\n")),(0,s.kt)("p",null,"where the ",(0,s.kt)("strong",{parentName:"p"},"CLUSTER_KIND")," can be one of the following supported ones:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"DockerCluster"),(0,s.kt)("li",{parentName:"ul"},"AWSCluster"),(0,s.kt)("li",{parentName:"ul"},"AWSManagedCluster"),(0,s.kt)("li",{parentName:"ul"},"AzureCluster"),(0,s.kt)("li",{parentName:"ul"},"AzureManagedCluster"),(0,s.kt)("li",{parentName:"ul"},"GCPCluster"),(0,s.kt)("li",{parentName:"ul"},"MicrovmCluster"),(0,s.kt)("li",{parentName:"ul"},"Rancher"),(0,s.kt)("li",{parentName:"ul"},"Openshift"),(0,s.kt)("li",{parentName:"ul"},"Tanzu"),(0,s.kt)("li",{parentName:"ul"},"OtherOnprem")),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("p",null,"You should now be able to create a new cluster from your template and install profiles onto it with a single Pull Request via the WGE UI!"))}g.isMDXComponent=!0},53001:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/capd-template-4a466e0684a7d1aabaa22d1fc36b32bd.yaml"},62092:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/calico-crs-configmap-c9a5eb78b26c51e350118feaf4fdeeac.yaml"},10076:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/calico-crs-cf0fc463720dc26518b2a4758781bbc5.yaml"},11859:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/capi-gitops-cluster-bootstrap-config-aac52e7e6708493492d6ad80166c2893.yaml"},70987:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/profile-repo-212eb275934da7aa020caa37f52073e6.yaml"},96498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/wego-admin-c80945c1acf9908fe6e61139ef65c62e.yaml"},96877:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/calico-crs-configmap-c9a5eb78b26c51e350118feaf4fdeeac.yaml"},83565:(e,t,a)=>{a.d(t,{Z:()=>n});const n='apiVersion: templates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: cluster-template-development\n  namespace: default\n  annotations:\n    templates.weave.works/add-common-bases: "true"\n    templates.weave.works/inject-prune-annotation: "true"\n  labels:\n    weave.works/template-type: cluster\nspec:\n  description: A simple CAPD template\n  params:\n    - name: CLUSTER_NAME\n      required: true\n      description: This is used for the cluster naming.\n    - name: NAMESPACE\n      description: Namespace to create the cluster in\n    - name: KUBERNETES_VERSION\n      description: Kubernetes version to use for the cluster\n      options: ["1.19.11", "1.21.1", "1.22.0", "1.23.3"]\n    - name: CONTROL_PLANE_MACHINE_COUNT\n      description: Number of control planes\n      options: ["1", "2", "3"]\n    - name: WORKER_MACHINE_COUNT\n      description: Number of worker machines\n  resourcetemplates:\n    - content:\n        - apiVersion: gitops.weave.works/v1alpha1\n          kind: GitopsCluster\n          metadata:\n            name: "${CLUSTER_NAME}"\n            namespace: "${NAMESPACE}"\n            labels:\n              weave.works/capi: bootstrap\n          spec:\n            capiClusterRef:\n              name: "${CLUSTER_NAME}"\n        - apiVersion: cluster.x-k8s.io/v1beta1\n          kind: Cluster\n          metadata:\n            name: "${CLUSTER_NAME}"\n            namespace: "${NAMESPACE}"\n            labels:\n              cni: calico\n          spec:\n            clusterNetwork:\n              pods:\n                cidrBlocks:\n                  - 192.168.0.0/16\n              serviceDomain: cluster.local\n              services:\n                cidrBlocks:\n                  - 10.128.0.0/12\n            controlPlaneRef:\n              apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n              kind: KubeadmControlPlane\n              name: "${CLUSTER_NAME}-control-plane"\n              namespace: "${NAMESPACE}"\n            infrastructureRef:\n              apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n              kind: DockerCluster\n              name: "${CLUSTER_NAME}"\n              namespace: "${NAMESPACE}"\n        - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n          kind: DockerCluster\n          metadata:\n            name: "${CLUSTER_NAME}"\n            namespace: "${NAMESPACE}"\n        - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n          kind: DockerMachineTemplate\n          metadata:\n            name: "${CLUSTER_NAME}-control-plane"\n            namespace: "${NAMESPACE}"\n          spec:\n            template:\n              spec:\n                extraMounts:\n                  - containerPath: /var/run/docker.sock\n                    hostPath: /var/run/docker.sock\n        - apiVersion: controlplane.cluster.x-k8s.io/v1beta1\n          kind: KubeadmControlPlane\n          metadata:\n            name: "${CLUSTER_NAME}-control-plane"\n            namespace: "${NAMESPACE}"\n          spec:\n            kubeadmConfigSpec:\n              clusterConfiguration:\n                apiServer:\n                  certSANs:\n                    - localhost\n                    - 127.0.0.1\n                    - 0.0.0.0\n                controllerManager:\n                  extraArgs:\n                    enable-hostpath-provisioner: "true"\n              initConfiguration:\n                nodeRegistration:\n                  criSocket: /var/run/containerd/containerd.sock\n                  kubeletExtraArgs:\n                    cgroup-driver: cgroupfs\n                    eviction-hard: nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%\n              joinConfiguration:\n                nodeRegistration:\n                  criSocket: /var/run/containerd/containerd.sock\n                  kubeletExtraArgs:\n                    cgroup-driver: cgroupfs\n                    eviction-hard: nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%\n            machineTemplate:\n              infrastructureRef:\n                apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n                kind: DockerMachineTemplate\n                name: "${CLUSTER_NAME}-control-plane"\n                namespace: "${NAMESPACE}"\n            replicas: "${CONTROL_PLANE_MACHINE_COUNT}"\n            version: "${KUBERNETES_VERSION}"\n        - apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n          kind: DockerMachineTemplate\n          metadata:\n            name: "${CLUSTER_NAME}-md-0"\n            namespace: "${NAMESPACE}"\n          spec:\n            template:\n              spec: {}\n        - apiVersion: bootstrap.cluster.x-k8s.io/v1beta1\n          kind: KubeadmConfigTemplate\n          metadata:\n            name: "${CLUSTER_NAME}-md-0"\n            namespace: "${NAMESPACE}"\n          spec:\n            template:\n              spec:\n                joinConfiguration:\n                  nodeRegistration:\n                    kubeletExtraArgs:\n                      cgroup-driver: cgroupfs\n                      eviction-hard: nodefs.available<0%,nodefs.inodesFree<0%,imagefs.available<0%\n        - apiVersion: cluster.x-k8s.io/v1beta1\n          kind: MachineDeployment\n          metadata:\n            name: "${CLUSTER_NAME}-md-0"\n            namespace: "${NAMESPACE}"\n          spec:\n            clusterName: "${CLUSTER_NAME}"\n            replicas: "${WORKER_MACHINE_COUNT}"\n            selector:\n              matchLabels: null\n            template:\n              spec:\n                bootstrap:\n                  configRef:\n                    apiVersion: bootstrap.cluster.x-k8s.io/v1beta1\n                    kind: KubeadmConfigTemplate\n                    name: "${CLUSTER_NAME}-md-0"\n                    namespace: "${NAMESPACE}"\n                clusterName: "${CLUSTER_NAME}"\n                infrastructureRef:\n                  apiVersion: infrastructure.cluster.x-k8s.io/v1beta1\n                  kind: DockerMachineTemplate\n                  name: "${CLUSTER_NAME}-md-0"\n                  namespace: "${NAMESPACE}"\n                version: "${KUBERNETES_VERSION}"\n'}}]);