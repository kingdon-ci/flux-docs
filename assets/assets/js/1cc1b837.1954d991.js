"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[29225],{35364:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>k,default:()=>c,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var n=l(87462),r=(l(67294),l(3905));const a={toc:[]};function o(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},a,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"#templates.weave.works%2fv1alpha1"},"templates.weave.works/v1alpha1"))),(0,r.kt)("h2",{id:"templates.weave.works/v1alpha1"},"templates.weave.works/v1alpha1"),(0,r.kt)("p",null,"Package v1alpha1 contains API Schema definitions for the gitopssets v1alpha1 API group"),"Resource Types:",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSet"},"GitOpsSet"))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitOpsSet"},"GitOpsSet"),(0,r.kt)("p",null,"GitOpsSet is the Schema for the gitopssets API"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"apiVersion"),(0,r.kt)("br",null),"string"),(0,r.kt)("td",null,(0,r.kt)("code",null,"templates.weave.works/v1alpha1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"kind"),(0,r.kt)("br",null),"string"),(0,r.kt)("td",null,(0,r.kt)("code",null,"GitOpsSet"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"metadata"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#objectmeta-v1-meta"},"Kubernetes meta/v1.ObjectMeta"))),(0,r.kt)("td",null,"Refer to the Kubernetes API documentation for the fields of the",(0,r.kt)("code",null,"metadata")," field.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"spec"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetSpec"},"GitOpsSetSpec"))),(0,r.kt)("td",null,(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"suspend"),(0,r.kt)("br",null),(0,r.kt)("em",null,"bool")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Suspend tells the controller to suspend the reconciliation of this GitOpsSet."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"generators"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"[]GitOpsSetGenerator"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Generators generate the data to be inserted into the provided templates."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"templates"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetTemplate"},"[]GitOpsSetTemplate"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Templates are a set of YAML templates that are rendered into resources from the data supplied by the generators."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"serviceAccountName"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"The name of the Kubernetes service account to impersonate when reconciling this Kustomization."))))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"status"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetStatus"},"GitOpsSetStatus"))),(0,r.kt)("td",null)))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.APIClientGenerator"},"APIClientGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),",",(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),")"),(0,r.kt)("p",null,"APIClientGenerator defines a generator that queries an API endpoint and uses that to generate data."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interval"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#duration-v1-meta"},"Kubernetes meta/v1.Duration"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"The interval at which to poll the API endpoint."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"endpoint"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"This is the API endpoint to use."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"method"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Method defines the HTTP method to use to talk to the endpoint."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"jsonPath"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"JSONPath is string that is used to modify the result of the API call."),(0,r.kt)("p",null,"This can be used to extract a repeating element from a response.",(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/kubectl/jsonpath/"},"https://kubernetes.io/docs/reference/kubectl/jsonpath/")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"headersRef"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.HeadersReference"},"HeadersReference"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"HeadersRef allows optional configuration of a Secret or ConfigMap to add additional headers to an outgoing request."),(0,r.kt)("p",null,"For example, a Secret with a key Authorization: Bearer abc123 could be used to configure an authorization header."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"body"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#json-v1-apiextensions"},"Kubernetes pkg/apis/apiextensions/v1.JSON"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Body is set as the body in a POST request."),(0,r.kt)("p",null,"If set, this will configure the Method to be POST automatically."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"singleElement"),(0,r.kt)("br",null),(0,r.kt)("em",null,"bool")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"SingleElement means generate a single element with the result of the API call."),(0,r.kt)("p",null,"When true, the response must be a JSON object and will be returned as a single element, i.e. only one element will be generated containing the entire object."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.ClusterGenerator"},"ClusterGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),",",(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),")"),(0,r.kt)("p",null,"ClusterGenerator defines a generator that queries the cluster API for relevant clusters."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"selector"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#labelselector-v1-meta"},"Kubernetes meta/v1.LabelSelector"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Selector is used to filter the clusters that you want to target."),(0,r.kt)("p",null,"If no selector is provided, no clusters will be matched."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetSpec"},"GitOpsSetSpec"),")"),(0,r.kt)("p",null,"GitOpsSetGenerator is the top-level set of generators for this GitOpsSet."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"list"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ListGenerator"},"ListGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"pullRequests"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.PullRequestGenerator"},"PullRequestGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"gitRepository"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitRepositoryGenerator"},"GitRepositoryGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"matrix"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.MatrixGenerator"},"MatrixGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"cluster"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ClusterGenerator"},"ClusterGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"apiClient"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.APIClientGenerator"},"APIClientGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"imagePolicy"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ImagePolicyGenerator"},"ImagePolicyGenerator"))),(0,r.kt)("td",null)))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.MatrixGenerator"},"MatrixGenerator"),")"),(0,r.kt)("p",null,"GitOpsSetNestedGenerator describes the generators usable by the MatrixGenerator. This is a subset of the generators allowed by the GitOpsSetGenerator because the CRD format doesn\u2019t support recursive declarations."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Name is an optional field that will be used to prefix the values generated by the nested generators, this allows multiple generators of the same type in a single Matrix generator."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"list"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ListGenerator"},"ListGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"gitRepository"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitRepositoryGenerator"},"GitRepositoryGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"pullRequests"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.PullRequestGenerator"},"PullRequestGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"cluster"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ClusterGenerator"},"ClusterGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"apiClient"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.APIClientGenerator"},"APIClientGenerator"))),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"imagePolicy"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ImagePolicyGenerator"},"ImagePolicyGenerator"))),(0,r.kt)("td",null)))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitOpsSetSpec"},"GitOpsSetSpec"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSet"},"GitOpsSet"),")"),(0,r.kt)("p",null,"GitOpsSetSpec defines the desired state of GitOpsSet"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"suspend"),(0,r.kt)("br",null),(0,r.kt)("em",null,"bool")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Suspend tells the controller to suspend the reconciliation of this GitOpsSet."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"generators"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"[]GitOpsSetGenerator"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Generators generate the data to be inserted into the provided templates."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"templates"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetTemplate"},"[]GitOpsSetTemplate"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Templates are a set of YAML templates that are rendered into resources from the data supplied by the generators."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"serviceAccountName"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"The name of the Kubernetes service account to impersonate when reconciling this Kustomization."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitOpsSetStatus"},"GitOpsSetStatus"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSet"},"GitOpsSet"),")"),(0,r.kt)("p",null,"GitOpsSetStatus defines the observed state of GitOpsSet"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ReconcileRequestStatus"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://godoc.org/github.com/fluxcd/pkg/apis/meta#ReconcileRequestStatus"},"github.com/fluxcd/pkg/apis/meta.ReconcileRequestStatus"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"(Members of ",(0,r.kt)("code",null,"ReconcileRequestStatus")," are embedded into this type.)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"observedGeneration"),(0,r.kt)("br",null),(0,r.kt)("em",null,"int64")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"ObservedGeneration is the last observed generation of the HelmRepository object."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"conditions"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#condition-v1-meta"},"[]Kubernetes meta/v1.Condition"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Conditions holds the conditions for the GitOpsSet"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"inventory"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ResourceInventory"},"ResourceInventory"))),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Inventory contains the list of Kubernetes resource object references that have been successfully applied"))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitOpsSetTemplate"},"GitOpsSetTemplate"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetSpec"},"GitOpsSetSpec"),")"),(0,r.kt)("p",null,"GitOpsSetTemplate describes a resource to create"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"repeat"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Repeat is a JSONPath string defining that the template content should be repeated for each of the matching elements in the JSONPath expression.",(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/kubectl/jsonpath/"},"https://kubernetes.io/docs/reference/kubectl/jsonpath/")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"content"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#rawextension-runtime-pkg"},"k8s.io/apimachinery/pkg/runtime.RawExtension"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Content is the YAML to be templated and generated."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitRepositoryGenerator"},"GitRepositoryGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),",",(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),")"),(0,r.kt)("p",null,"GitRepositoryGenerator generates from files in a Flux GitRepository resource."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"repositoryRef"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"RepositoryRef is the name of a GitRepository resource to be generated from."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"files"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitRepositoryGeneratorFileItem"},"[]GitRepositoryGeneratorFileItem"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Files is a set of rules for identifying files to be parsed."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"directories"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitRepositoryGeneratorDirectoryItem"},"[]GitRepositoryGeneratorDirectoryItem"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Directories is a set of rules for identifying directories to be generated."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitRepositoryGeneratorDirectoryItem"},"GitRepositoryGeneratorDirectoryItem"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitRepositoryGenerator"},"GitRepositoryGenerator"),")"),(0,r.kt)("p",null,"GitRepositoryGeneratorDirectoryItem stores the information about a specific directory to be generated from."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"path"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"exclude"),(0,r.kt)("br",null),(0,r.kt)("em",null,"bool")),(0,r.kt)("td",null)))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.GitRepositoryGeneratorFileItem"},"GitRepositoryGeneratorFileItem"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitRepositoryGenerator"},"GitRepositoryGenerator"),")"),(0,r.kt)("p",null,"GitRepositoryGeneratorFileItem defines a path to a file to be parsed when generating."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"path"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Path is the name of a file to read and generate from can be JSON or YAML."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.HeadersReference"},"HeadersReference"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.APIClientGenerator"},"APIClientGenerator"),")"),(0,r.kt)("p",null,"HeadersReference references either a Secret or ConfigMap to be used for additional request headers."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"kind"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"The resource kind to get headers from."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"name"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Name of the resource in the same namespace to apply headers from."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.ImagePolicyGenerator"},"ImagePolicyGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),",",(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),")"),(0,r.kt)("p",null,"ImagePolicyGenerator generates from the ImagePolicy."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"policyRef"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"PolicyRef is the name of a ImagePolicy resource to be generated from."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.ListGenerator"},"ListGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),",",(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),")"),(0,r.kt)("p",null,"ListGenerator generates from a hard-coded list."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"elements"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#json-v1-apiextensions"},"[]Kubernetes pkg/apis/apiextensions/v1.JSON"))),(0,r.kt)("td",null)))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.MatrixGenerator"},"MatrixGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),")"),(0,r.kt)("p",null,"MatrixGenerator defines a matrix that combines generators. The matrix is a cartesian product of the generators."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"generators"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"[]GitOpsSetNestedGenerator"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Generators is a list of generators to be combined."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.PullRequestGenerator"},"PullRequestGenerator"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetGenerator"},"GitOpsSetGenerator"),",",(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},"GitOpsSetNestedGenerator"),")"),(0,r.kt)("p",null,"PullRequestGenerator defines a generator that queries a Git hosting service for relevant PRs."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"interval"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#duration-v1-meta"},"Kubernetes meta/v1.Duration"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"The interval at which to check for repository updates."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"driver"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Determines which git-api protocol to use."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"serverURL"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"This is the API endpoint to use."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"repo"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"This should be the Repo you want to query. e.g. my-org/my-repo"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"secretRef"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.19/#localobjectreference-v1-core"},"Kubernetes core/v1.LocalObjectReference"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Reference to Secret in same namespace with a field \u201cpassword\u201d which is an auth token that can query the Git Provider API."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"labels"),(0,r.kt)("br",null),(0,r.kt)("em",null,"[]string")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Labels is used to filter the PRs that you want to target. This may be applied on the server."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"forks"),(0,r.kt)("br",null),(0,r.kt)("em",null,"bool")),(0,r.kt)("td",null,(0,r.kt)("em",null,"(Optional)"),(0,r.kt)("p",null,"Fork is used to filter out forks from the target PRs if false, or to include forks if  true"))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.ResourceInventory"},"ResourceInventory"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.GitOpsSetStatus"},"GitOpsSetStatus"),")"),(0,r.kt)("p",null,"ResourceInventory contains a list of Kubernetes resource object references that have been applied by a Kustomization."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"entries"),(0,r.kt)("br",null),(0,r.kt)("em",null,(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ResourceRef"},"[]ResourceRef"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Entries of Kubernetes resource object references."))))),(0,r.kt)("h3",{id:"templates.weave.works/v1alpha1.ResourceRef"},"ResourceRef"),(0,r.kt)("p",null,"(",(0,r.kt)("em",null,"Appears on:"),(0,r.kt)("a",{href:"#templates.weave.works/v1alpha1.ResourceInventory"},"ResourceInventory"),")"),(0,r.kt)("p",null,"ResourceRef contains the information necessary to locate a resource within a cluster."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Field"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"ID is the string representation of the Kubernetes resource object\u2019s metadata, in the format \u2018namespace_name_group_kind\u2019."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"v"),(0,r.kt)("br",null),(0,r.kt)("em",null,"string")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Version is the API version of the Kubernetes resource object\u2019s kind."))))),(0,r.kt)("div",null,(0,r.kt)("p",null,"This page was automatically generated with ",(0,r.kt)("code",null,"gen-crd-api-reference-docs"))))}o.isMDXComponent=!0;const s=JSON.parse('[{"level":3,"value":"GitOpsSet","id":"templates.weave.works/v1alpha1.GitOpsSet"},{"level":3,"value":"APIClientGenerator","id":"templates.weave.works/v1alpha1.APIClientGenerator"},{"level":3,"value":"ClusterGenerator","id":"templates.weave.works/v1alpha1.ClusterGenerator"},{"level":3,"value":"GitOpsSetGenerator","id":"templates.weave.works/v1alpha1.GitOpsSetGenerator"},{"level":3,"value":"GitOpsSetNestedGenerator","id":"templates.weave.works/v1alpha1.GitOpsSetNestedGenerator"},{"level":3,"value":"GitOpsSetSpec","id":"templates.weave.works/v1alpha1.GitOpsSetSpec"},{"level":3,"value":"GitOpsSetStatus","id":"templates.weave.works/v1alpha1.GitOpsSetStatus"},{"level":3,"value":"GitOpsSetTemplate","id":"templates.weave.works/v1alpha1.GitOpsSetTemplate"},{"level":3,"value":"GitRepositoryGenerator","id":"templates.weave.works/v1alpha1.GitRepositoryGenerator"},{"level":3,"value":"GitRepositoryGeneratorDirectoryItem","id":"templates.weave.works/v1alpha1.GitRepositoryGeneratorDirectoryItem"},{"level":3,"value":"GitRepositoryGeneratorFileItem","id":"templates.weave.works/v1alpha1.GitRepositoryGeneratorFileItem"},{"level":3,"value":"HeadersReference","id":"templates.weave.works/v1alpha1.HeadersReference"},{"level":3,"value":"ImagePolicyGenerator","id":"templates.weave.works/v1alpha1.ImagePolicyGenerator"},{"level":3,"value":"ListGenerator","id":"templates.weave.works/v1alpha1.ListGenerator"},{"level":3,"value":"MatrixGenerator","id":"templates.weave.works/v1alpha1.MatrixGenerator"},{"level":3,"value":"PullRequestGenerator","id":"templates.weave.works/v1alpha1.PullRequestGenerator"},{"level":3,"value":"ResourceInventory","id":"templates.weave.works/v1alpha1.ResourceInventory"},{"level":3,"value":"ResourceRef","id":"templates.weave.works/v1alpha1.ResourceRef"}]'),u={title:"API reference",hide_title:!0},k=void 0,i={unversionedId:"gitopssets/api-reference",id:"version-0.25.0/gitopssets/api-reference",title:"API reference",description:"",source:"@site/versioned_docs/version-0.25.0/gitopssets/api-reference.mdx",sourceDirName:"gitopssets",slug:"/gitopssets/api-reference",permalink:"/docs/0.25.0/gitopssets/api-reference",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.25.0/gitopssets/api-reference.mdx",tags:[],version:"0.25.0",frontMatter:{title:"API reference",hide_title:!0},sidebar:"docs",previous:{title:"Templating from Generators",permalink:"/docs/0.25.0/gitopssets/guide"},next:{title:"Releases",permalink:"/docs/0.25.0/gitopssets/releases"}},p={},d=s,h={toc:d};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o,{mdxType:"GeneratedAPI"}))}c.isMDXComponent=!0},3905:(e,t,l)=>{l.d(t,{Zo:()=>i,kt:()=>c});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=n.createContext({}),k=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},i=function(e){var t=k(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=k(l),h=r,c=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return l?n.createElement(c,o(o({ref:t},i),{},{components:l})):n.createElement(c,o({ref:t},i))}));function c(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var k=2;k<a;k++)o[k]=l[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"}}]);