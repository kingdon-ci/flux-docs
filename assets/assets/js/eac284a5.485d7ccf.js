"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[5505],{21408:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(88746);n(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return a.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},17955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905)),s=n(21408);const o={title:"Multi Tenancy",hide_title:!0},r=void 0,l={unversionedId:"workspaces/multi-tenancy",id:"version-0.38.0/workspaces/multi-tenancy",title:"Multi Tenancy",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.38.0/workspaces/multi-tenancy.mdx",sourceDirName:"workspaces",slug:"/workspaces/multi-tenancy",permalink:"/docs/workspaces/multi-tenancy",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.38.0/workspaces/multi-tenancy.mdx",tags:[],version:"0.38.0",frontMatter:{title:"Multi Tenancy",hide_title:!0},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/workspaces/intro"},next:{title:"Workspaces View",permalink:"/docs/workspaces/view-workspaces"}},c={},u=[{value:"Multi Tenancy",id:"multi-tenancy",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Tenancy file",id:"tenancy-file",level:3},{value:"Gitops create tenants command",id:"gitops-create-tenants-command",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,o.title," ",(0,i.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"multi-tenancy"},"Multi Tenancy"),(0,i.kt)("p",null,"Multi tenancy provides users with the ability to define boundaries to multiple engineering teams working on a single cluster. Through a simple interface it adds permissions to the necessary Kubernetes resources to make it easy for customers to manage their multiple tenants."),(0,i.kt)("p",null,"WGE multi tenancy expands on the multi tenancy feature provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"flux"),". In addition to creating the necessary Kubernetes tenancy resources that ",(0,i.kt)("inlineCode",{parentName:"p"},"flux")," adds, multi tenancy in WGE also adds the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defining tenancy using a single yaml file that serves as a source of truth for the organization"),(0,i.kt)("li",{parentName:"ul"},"Makes use of WGE policy features to enforce non Kubernetes native permissions")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/references/cli-reference/gitops"},(0,i.kt)("inlineCode",{parentName:"a"},"gitops")," command line tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tenancy-file"},"Tenancy File")," (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/policy/intro"},"Policies")," (optional)")),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"gitops")," command line tool is responsible for creating the multi tenancy resources. The tool is distributed as part of WGE offering. It reads the definitions of a yaml file and can either apply the necessary changes directly to the cluster or output it to stdout so it can be saved into a file and pushed to a repo to be reconciled by ",(0,i.kt)("inlineCode",{parentName:"p"},"flux"),"."),(0,i.kt)("p",null,"To make use of the policy features, ",(0,i.kt)("a",{parentName:"p",href:"/docs/policy/intro"},"policy agent")," needs to be installed in the necessary cluster(s). "),(0,i.kt)("h3",{id:"tenancy-file"},"Tenancy file"),(0,i.kt)("p",null,"Below is an example of a tenancy file:"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="tenancy.yaml"',title:'"tenancy.yaml"'},"---\ntenants:\n  - name: first-tenant\n    namespaces:\n    - first-ns\n  - name: second-tenant\n    namespaces:\n    - second-test-ns\n    - second-dev-ns\n    allowedRepositories:\n    - kind: GitRepository\n      url: https://github.com/testorg/testrepo\n    - kind: GitRepository\n      url: https://github.com/testorg/testinfo\n    - kind: Bucket\n      url: minio.example.com\n    - kind: HelmRepository\n      url: https://testorg.github.io/testrepo\n    allowedClusters:\n    - kubeConfig: cluster-1-kubeconfig\n    - kubeConfig: cluster-2-kubeconfig\n    teamRBAC:\n      groupNames:\n      - foo-group\n      - bar-group\n      rules:\n        - apiGroups:\n            - ''\n          resources:\n            - 'namespaces'\n            - 'pods'\n          verbs:\n            - 'list'\n            - 'get'\n    deploymentRBAC:\n      bindRoles:\n        - name: foo-role\n          kind: Role\n      rules:\n        - apiGroups:\n            - ''\n          resources:\n            - 'namespaces'\n            - 'pods'\n          verbs:\n            - 'list'\n            - 'get'\nserviceAccount:\n  name: \"reconcilerServiceAccount\"\n"))),(0,i.kt)("p",null,"The file above defines two tenants: ",(0,i.kt)("inlineCode",{parentName:"p"},"first-tenant")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"second-tenant")," as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"namespaces"),": describes which namespaces should be part of the tenant. Meaning that users who are part of the tenant would have access on those namespaces."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowedRepositories"),": limits the ",(0,i.kt)("inlineCode",{parentName:"li"},"flux")," repositories sources that can be used in the tenant's namespaces. This is done through policies and thus requires ",(0,i.kt)("inlineCode",{parentName:"li"},"policy-agent")," to be deployed on the cluster which will stop these sources from being deployed if they aren't allowed as part of the tenant. IT consists of:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kind"),": the ",(0,i.kt)("inlineCode",{parentName:"li"},"flux")," source kind. Can be: ",(0,i.kt)("inlineCode",{parentName:"li"},"GitRepository"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Bucket")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"HelmRepository"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"url"),": the URL for that source."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowedClusters"),": limits which secrets containing cluster configuraton can be used. It stops WGE ",(0,i.kt)("inlineCode",{parentName:"li"},"GitopsCluster")," and flux ",(0,i.kt)("inlineCode",{parentName:"li"},"Kustomization")," from being deployed if they point to a secret not in the list, essentially giving control on which cluster can be added to a multi-cluster setup. Requires ",(0,i.kt)("inlineCode",{parentName:"li"},"policy-agent"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubeConfig"),": name of the secret that can be used for this tenant."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"teamRBAC"),": Generate Roles and Rolebindings for a list of ",(0,i.kt)("inlineCode",{parentName:"li"},"groupNames"),". This allows you to easily give an OIDC group access to a tenant's resources. When the Weave Gitops Enterprise UI is configured with your OIDC provider, tenants can log in and view the status of the resources they have been granted access to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deploymentRBAC"),": generate Roles and Rolebindings for a service account. Can additionally bind to an existing Roles/ClusterRoles. Would use the global service account if specified in the tenants file, otherwise it will use the created service account which takes the tenant name. If not specified a Rolebinding would be created that binds to ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster-admin")," ClusterRole.")),(0,i.kt)("p",null,"Global options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"serviceAccount"),": Override the name of the generated ",(0,i.kt)("inlineCode",{parentName:"li"},"ServiceAccount")," for all tenants. This allows you to easily use the flux controllers' ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fluxcd/flux2-multi-tenancy#enforce-tenant-isolation"},(0,i.kt)("inlineCode",{parentName:"a"},"--default-service-account"))," feature. Tenants do not need to make sure they correctly specify the ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceAccount")," when using ",(0,i.kt)("inlineCode",{parentName:"li"},"Kustomization")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"HelmRelease")," resources. The kustomization-controller and helm-controller will instead look for the ",(0,i.kt)("inlineCode",{parentName:"li"},"default-service-account")," in the namespace being reconciled to and use that. Just configure ",(0,i.kt)("inlineCode",{parentName:"li"},"serviceAccount.name")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"--default-service-account")," to the same value.")),(0,i.kt)("h3",{id:"gitops-create-tenants-command"},"Gitops create tenants command"),(0,i.kt)("p",null,"The command creates the necessary resources to apply multi tenancy on the user's cluster. To use the command to apply the resources directly the user needs to have the necessary configuration to connect to the desired cluster.\nThe command considers the tenancy file as a source of truth and will change the cluster state to match what is currently described in the file."),(0,i.kt)("p",null,"For more control on a specific tenant a tenancy file should be used, the command allows the creation of the base resources that defines a tenancy through the arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create tenants --name test-tenant --namespace test-ns1 --namespace test-ns2\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view command output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/test-ns1 created\ntest-ns1/serviceaccount/test-tenant created\ntest-ns1/rolebinding.rbac.authorization.k8s.io/test-tenant-service-account-cluster-admin created\nnamespace/test-ns2 created\ntest-ns2/serviceaccount/test-tenant created\ntest-ns2/rolebinding.rbac.authorization.k8s.io/test-tenant-service-account-cluster-admin created\npolicy.pac.weave.works/weave.policies.tenancy.test-tenant-allowed-application-deploy created\n"))),(0,i.kt)("p",null,"The above will create the namespaces and permissions through a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," with the same name as the tenant, ",(0,i.kt)("inlineCode",{parentName:"p"},"test-tenant")," in the case of the above example, in each required namespace.\nThe same can be done through a file as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"tenants:\n  - name: test-tenant\n    namespaces:\n    - test-ns1\n    - test-ns2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create tenants --from-file tenants.yaml\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view command output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"namespace/test-ns1 created\ntest-ns1/serviceaccount/test-tenant created\ntest-ns1/rolebinding.rbac.authorization.k8s.io/test-tenant-service-account-cluster-admin created\nnamespace/test-ns2 created\ntest-ns2/serviceaccount/test-tenant created\ntest-ns2/rolebinding.rbac.authorization.k8s.io/test-tenant-service-account-cluster-admin created\npolicy.pac.weave.works/weave.policies.tenancy.test-tenant-allowed-application-deploy created\n"))),(0,i.kt)("p",null,"To check the resources that would be deployed first use the ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create tenants --from-file tenants.yaml --export\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to view command output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: test-ns1\nspec: {}\nstatus: {}\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: test-tenant\n  namespace: test-ns1\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: test-tenant-service-account-cluster-admin\n  namespace: test-ns1\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: test-tenant\n  namespace: test-ns1\n---\napiVersion: v1\nkind: Namespace\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: test-ns2\nspec: {}\nstatus: {}\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: test-tenant\n  namespace: test-ns2\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: test-tenant-service-account-cluster-admin\n  namespace: test-ns2\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: cluster-admin\nsubjects:\n- kind: ServiceAccount\n  name: test-tenant\n  namespace: test-ns2\n---\napiVersion: pac.weave.works/v2beta2\nkind: Policy\nmetadata:\n  creationTimestamp: null\n  labels:\n    toolkit.fluxcd.io/tenant: test-tenant\n  name: weave.policies.tenancy.test-tenant-allowed-application-deploy\nspec:\n  category: weave.categories.tenancy\n  code: |\n    package weave.tenancy.allowed_application_deploy\n\n    controller_input := input.review.object\n    violation[result] {\n        namespaces := input.parameters.namespaces\n        targetNamespace := controller_input.spec.targetNamespace\n        not contains_array(targetNamespace, namespaces)\n        result = {\n        "issue detected": true,\n        "msg": sprintf("using target namespace %v is not allowed", [targetNamespace]),\n        }\n    }\n    violation[result] {\n        serviceAccountName := controller_input.spec.serviceAccountName\n        serviceAccountName != input.parameters.service_account_name\n        result = {\n        "issue detected": true,\n        "msg": sprintf("using service account name %v is not allowed", [serviceAccountName]),\n        }\n    }\n    contains_array(item, items) {\n        items[_] = item\n    }\n  description: Determines which helm release and kustomization can be used in a tenant\n  how_to_solve: ""\n  id: weave.policies.tenancy.test-tenant-allowed-application-deploy\n  name: test-tenant allowed application deploy\n  parameters:\n  - name: namespaces\n    required: false\n    type: array\n    value:\n    - test-ns1\n    - test-ns2\n  - name: service_account_name\n    required: false\n    type: string\n    value: test-tenant\n  provider: kubernetes\n  severity: high\n  standards: []\n  tags:\n  - tenancy\n  targets:\n    kinds:\n    - HelmRelease\n    - Kustomization\n    labels: []\n    namespaces:\n    - test-ns1\n    - test-ns2\nstatus: {}\n---\n'))),(0,i.kt)("p",null,"Applying the resources through the command line is not usually recommended. For WGE the recommended way is to commit the result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"create tenants")," command to source control and let ",(0,i.kt)("inlineCode",{parentName:"p"},"flux")," handle deployment. To achieve that you can save the result of the ",(0,i.kt)("inlineCode",{parentName:"p"},"export")," to a file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create tenants --from-file tenants.yaml --export > clusters/management/tenants.yaml \n")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);