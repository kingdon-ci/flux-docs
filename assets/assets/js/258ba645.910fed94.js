"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[12366],{12316:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(67294),a=n(88746);n(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return s.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:r},t)}},24252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var s=n(87462),a=(n(67294),n(3905)),r=n(12316),o=n(77823);const i={title:"Setup SOPS",hide_title:!0},l=void 0,p={unversionedId:"secrets/setup-sops",id:"version-0.29.0/secrets/setup-sops",title:"Setup SOPS",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.29.0/secrets/setup-sops.mdx",sourceDirName:"secrets",slug:"/secrets/setup-sops",permalink:"/docs/0.29.0/secrets/setup-sops",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.29.0/secrets/setup-sops.mdx",tags:[],version:"0.29.0",frontMatter:{title:"Setup SOPS",hide_title:!0},sidebar:"docs",previous:{title:"Setup ESO",permalink:"/docs/0.29.0/secrets/setup-eso"},next:{title:"Manage Secrets UI",permalink:"/docs/0.29.0/secrets/manage-secrets-ui"}},c={},u=[{value:"Setup SOPS on management cluster or existing leaf cluster",id:"setup-sops-on-management-cluster-or-existing-leaf-cluster",level:2},{value:"Encrypting secrets using GPG/OpenPGP",id:"encrypting-secrets-using-gpgopenpgp",level:3},{value:"Encrypting secrets using age",id:"encrypting-secrets-using-age",level:3},{value:"Bootstrapping SOPS to leaf clusters",id:"bootstrapping-sops-to-leaf-clusters",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"ClusterBootstrapConfig job",id:"clusterbootstrapconfig-job",level:4},{value:"Cluster template updates",id:"cluster-template-updates",level:4},{value:"Installation Steps",id:"installation-steps",level:3},{value:"What to expect",id:"what-to-expect",level:3},{value:"Security Recommendations",id:"security-recommendations",level:2}],m={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",null,i.title," ",(0,a.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("p",null,"Weave GitOps Enterprise now supports managing secrets using SOPS, a tool that encrypts and decrypts secrets using various key management services, from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.29.0/secrets/manage-secrets-ui#sops"},"UI"),". To be able to use this functionality, users need to configure their private and public key-pairs using one of the guides below."),(0,a.kt)("h2",{id:"setup-sops-on-management-cluster-or-existing-leaf-cluster"},"Setup SOPS on management cluster or existing leaf cluster"),(0,a.kt)("p",null,"In this section, we will cover the prerequisites for using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops"},"SOPS")," with Weave GitOps Enterprise, and how to configure SOPS for your existing Kubernetes cluster to work with GPG and age keys."),(0,a.kt)("p",null,"For a more advanced setup for SOPS with flux, please refer to this ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/guides/mozilla-sops/"},"guide"),"."),(0,a.kt)("h3",{id:"encrypting-secrets-using-gpgopenpgp"},"Encrypting secrets using GPG/OpenPGP"),(0,a.kt)("p",null,"OpenPGP is a way of using SOPS to encrypt and decrypt secrets with Weave GitOps Enterprise."),(0,a.kt)("p",null,"Here are the steps to generate an OpenPGP key and configure your cluster to work with Weave GitOps Enterprise secrets management."),(0,a.kt)("p",null,"1- Generate a gpg key pairs"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand for instructions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KEY_NAME="gpg-key"\nexport KEY_COMMENT="gpg key"\n\ngpg --batch --full-generate-key <<EOF\n%no-protection\nKey-Type: 1\nKey-Length: 4096\nSubkey-Type: 1\nSubkey-Length: 4096\nExpire-Date: 0\nName-Comment: ${KEY_COMMENT}\nName-Real: ${KEY_NAME}\nEOF\n'))),(0,a.kt)("p",null,"2- Export the key pairs fingerprint in the shell"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gpg --list-secret-keys "${KEY_NAME}"\n\nsec   rsa4096 2020-09-06 [SC]\n      710DC0DB6C1662F707095FC30233CB21E656A3CB\n\nexport KEY_FP="710DC0DB6C1662F707095FC30233CB21E656A3CB"\n')),(0,a.kt)("p",null,"3- Export the generated private key to a kubernetes secret ",(0,a.kt)("inlineCode",{parentName:"p"},"sops-gpg-private-key")," which will be used by flux's kustomize-controller to decrypt the secrets using sops."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gpg --export-secret-keys --armor "${KEY_FP}" |\nkubectl create secret generic sops-gpg-private-key \\\n--namespace=flux-system \\\n--from-file=sops.asc=/dev/stdin\n')),(0,a.kt)("p",null,"4- Export the generated public key to a kubernetes secret ",(0,a.kt)("inlineCode",{parentName:"p"},"sops-gpg-public-key")," which will be used by Weave GitOps Enterprise to encrypt the secrets created from the UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gpg --export --armor "${KEY_FP}" |\nkubectl create secret generic sops-gpg-public-key \\\n--namespace=flux-system \\\n--from-file=sops.asc=/dev/stdin\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"}," It's recommended to remove the secret from your machine"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'gpg --delete-secret-keys "${KEY_FP}"\n'))),(0,a.kt)("p",null,"5- Create a kustomization for reconciling the secrets on the cluster and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"--decryption-secret")," flag to the name of the private key created in step 3."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flux create kustomization gpg-secrets \\\n--source=secrets \\ # the git source to reconcile the secrets from\n--path=./secrets/gpg \\\n--prune=true \\\n--interval=10m \\\n--decryption-provider=sops \\\n--decryption-secret=sops-gpg-private-key\n")),(0,a.kt)("p",null,"6- Annotate the kustomization object created in the previous step with the name and namespace of the public key created in step 4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate kustomization gpg-secrets \\\nsops-public-key/name=sops-gpg-public-key \\\nsops-public-key/namespace=flux-system \\\n-n flux-system\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see the expected kustomization object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: gpg-secrets\n  namespace: flux-system\n  annotations:\n    sops-public-key/name: sops-gpg-public-key\n    sops-public-key/namespace: flux-system\nspec:\n  interval: 10m\n  sourceRef:\n    kind: GitRepository\n    name: secrets\n  path: ./secrets/gpg\n  decryption:\n    provider: sops\n    secretRef:\n      name: sops-gpg-private-key\n  prune: true\n  validation: server\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is an essential step in order to allow other operators and developers to utilize WeaveGitOps UI to encrypt SOPS secrets using the public key secret in the cluster.")),(0,a.kt)("h3",{id:"encrypting-secrets-using-age"},"Encrypting secrets using age"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/FiloSottile/age"},"age")," is a simple, modern and secure file encryption tool, that can be used to encrypt secrets using Weave GitOps Enterprise."),(0,a.kt)("p",null,"Here are the steps to generate an age key and configure your cluster to work with Weave GitOps Enterprise secrets management."),(0,a.kt)("p",null,"1- Generate an age key with age-keygen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"age-keygen -o age.agekey\n\nPublic key: <public key>\n")),(0,a.kt)("p",null,"2- Export the generated private key to a kubernetes secret ",(0,a.kt)("inlineCode",{parentName:"p"},"sops-age-private-key")," which will be used by flux's kustomize-controller to decrypt the secrets using sops."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cat age.agekey |\nkubectl create secret generic sops-age-private-key \\\n--namespace=flux-system \\\n--from-file=age.agekey=/dev/stdin\n")),(0,a.kt)("p",null,"4- Export the generated public key to a kubernetes secret ",(0,a.kt)("inlineCode",{parentName:"p"},"sops-age-public-key")," which will be used by Weave GitOps Enterprise to encrypt the secrets created from the UI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "<public key>" |\nkubectl create secret generic sops-age-public-key \\\n--namespace=flux-system \\\n--from-file=age.agekey=/dev/stdin\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It's recommended to remove the secret from your machine"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -f age.ageKey\n"))),(0,a.kt)("p",null,"5- Create a kustomization for reconciling the secrets on the cluster and set the ",(0,a.kt)("inlineCode",{parentName:"p"},"--decryption-secret")," flag to the name of the private key created in step 2."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flux create kustomization age-secrets \\\n--source=secrets \\ # the git source to reconcile the secrets from\n--path=./secrets/age \\\n--prune=true \\\n--interval=10m \\\n--decryption-provider=sops \\\n--decryption-secret=sops-age-private-key\n")),(0,a.kt)("p",null,"6- Annotate the kustomization object created in the previous step with the name and namespace of the public key created in step 4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate kustomization age-secrets \\\nsops-public-key/name=sops-age-public-key \\\nsops-public-key/namespace=flux-system \\\n-n flux-system\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to see the expected kustomization object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kustomize.toolkit.fluxcd.io/v1beta2\nkind: Kustomization\nmetadata:\n  name: age-secrets\n  namespace: flux-system\n  annotations:\n    sops-public-key/name: sops-age-public-key\n    sops-public-key/namespace: flux-system\nspec:\n  interval: 10m\n  sourceRef:\n    kind: GitRepository\n    name: secrets\n  path: ./secrets/age\n  decryption:\n    provider: sops\n    secretRef:\n      name: sops-age-private-key\n  prune: true\n  validation: server\n"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," This is an essential step in order to allow other operators and developers to utilize WeaveGitOps UI to encrypt SOPS secrets using the public key secret in the cluster.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"}," In case of using OpenPGP and age in the same cluster, you need to make the kustomizations point to different directories. This is because flux's kustomize-controller expects that all the secrets in the kustomization's path are encrypted with the same key.")),(0,a.kt)("h2",{id:"bootstrapping-sops-to-leaf-clusters"},"Bootstrapping SOPS to leaf clusters"),(0,a.kt)("p",null,"Bootstrapping SOPS to leaf clusters in WGE can be done by utilizing ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterBootstrapConfig")," job to bootstrap Flux and SOPS.\nThe job is a container which generates SOPS secrets key pair, creates a kubernetes secret with the private key, creates a kubernetes secret with the public key (to be used in self-serve flow) and the proper rbac for it.\nAs well as an option to push the public key to the git repository via a PR (to be distributed)."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h4",{id:"clusterbootstrapconfig-job"},"ClusterBootstrapConfig job"),(0,a.kt)("p",null,"The following example is using GPG encryption to install SOPS and generate keys when bootstrapping leaf clusters. Create the following ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterBootstrapConfig")," CR and push it to your fleet repo."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view "),(0,a.kt)(o.Z,{title:"clusters/management/capi/boostrap/sops-bootstrap-job.yaml",className:"language-yaml",mdxType:"CodeBlock"},'apiVersion: capi.weave.works/v1alpha1\nkind: ClusterBootstrapConfig\nmetadata:\n  name: sops-installation\n  namespace: default\nspec:\n  clusterSelector:\n    matchLabels:\n      weave.works/flux: "bootstrap"\n  jobTemplate:\n    generateName: "run-gitops-flux-{{ .ObjectMeta.Name }}"\n    spec:\n      containers:\n        - image: ghcr.io/fluxcd/flux-cli:v0.35.0\n          imagePullPolicy: Always\n          name: flux-bootstrap\n          resources: {}\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/gitops"\n              readOnly: true\n          args:\n            [\n              "bootstrap",\n              "github",\n              "--kubeconfig=/etc/gitops/value",\n              "--owner=<github-username>", # to be changed\n              "--repository=<github-repository>", # to be changed\n              "--path=./clusters/{{ .ObjectMeta.Namespace }}/{{ .ObjectMeta.Name }}",\n            ]\n          envFrom:\n            - secretRef:\n                name: my-pat # github token secret for flux: see https://docs.gitops.weave.works/docs/cluster-management/getting-started/\n          env:\n            - name: EXP_CLUSTER_RESOURCE_SET\n              value: "true"\n        - image: weaveworks/sops-bootstrap:0.1.0\n          imagePullPolicy: Always\n          name: sops-bootstrap\n          resources: {}\n          volumeMounts:\n            - name: kubeconfig\n              mountPath: "/etc/gitops"\n              readOnly: true\n          command: ["bash", "/root/entrypoint.sh"]\n          envFrom:\n            - secretRef:\n                name: my-pat # github token secret for flux: see https://docs.gitops.weave.works/docs/cluster-management/getting-started/\n          env:\n            - name: KEY_NAME  \n              value: \'{{ annotation "weave.works/sops-key-name" }}\'\n            - name: KEY_COMMENT  \n              value: \'{{ annotation "weave.works/sops-key-comment" }}\'\n            - name: SOPS_SECRET_REF \n              value: \'{{ annotation "weave.works/sops-secret-ref" }}\'\n            - name: SOPS_SECRET_REF_NAMESPACE\n              value: \'{{ annotation "weave.works/sops-secret-ref-namespace" }}\'\n            - name: PUSH_TO_GIT\n              value: \'{{ annotation "weave.works/sops-push-to-git" }}\'\n            - name: CLUSTER_NAME\n              value: "{{ .ObjectMeta.Name }}"\n            - name: CLUSTER_NAMESPACE\n              value: "{{ .ObjectMeta.Namespace }}"\n      restartPolicy: Never\n      volumes:\n        - name: kubeconfig\n          secret:\n            secretName: "{{ .ObjectMeta.Name }}-kubeconfig"\n')),(0,a.kt)("h4",{id:"cluster-template-updates"},"Cluster template updates"),(0,a.kt)("p",null,"In order to bootstrap SOPS to leaf clusters, we need some modifications to the cluster template to allow creating a ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/guides/mozilla-sops/#configure-in-cluster-secrets-decryption"},"Kustomization"),"\nfor reconciling the secrets on the cluster using SOPS and to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterBootstrapConfig")," job during cluster creation."),(0,a.kt)("p",null,"The template metadata should have annotation, it will be used by WGE to create the Kustomization with the cluster files."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'templates.weave.works/sops-enabled: "true"\n')),(0,a.kt)("p",null,"The template should have the following parameters that are needed for the Kustomization"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view "),(0,a.kt)(o.Z,{title:"clusters/management/capi/templates/template.yaml",className:"language-yaml",mdxType:"CodeBlock"},"- name: SOPS_KUSTOMIZATION_NAME\n  required: true\n  description: This Kustomization will be used to decrypt SOPS secrets from this path `clusters/default/leaf-cluster/sops/` after reconciling on the cluster. example (`my-secrets`)\n- name: SOPS_SECRET_REF\n  required: true\n  description: The private key secret name that will be generated by SOPS in the bootstrap job. example (`sops-gpg`)\n- name: SOPS_SECRET_REF_NAMESPACE\n  required: true\n  description: The private key secret namespace this secret will be generated by SOPS in the bootstrap job. example (`flux-system`)\n- name: SOPS_KEY_NAME\n  required: true\n  description: SOPS key name. This will be used to generate SOPS keys. example (`test.yourdomain.com`)\n- name: SOPS_KEY_COMMENT\n  required: true\n  description: SOPS key comment. This will be used to generate SOPS keys. example (`sops secret comment`)\n- name: SOPS_PUSH_TO_GIT\n  required: true\n  description: Option to push the public key to the git repository. expected values (`true`, `false`)\n")),(0,a.kt)("p",null,"The template should have the following annotations under ",(0,a.kt)("inlineCode",{parentName:"p"},"GitOpsCluster")," to be used in the bootstrap job"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view "),(0,a.kt)(o.Z,{title:"clusters/management/capi/templates/template.yaml",className:"language-yaml",mdxType:"CodeBlock"},'# annotation to hold the kustomization values for cluster bootstrap job\nweave.works/sops-kustomization: "${SOPS_KUSTOMIZATION_NAME}"\nweave.works/sops-secret-ref: "${SOPS_SECRET_REF}"\nweave.works/sops-secret-ref-namespace: "${SOPS_SECRET_REF_NAMESPACE}"\nweave.works/sops-push-to-git: "${SOPS_PUSH_TO_GIT}"\nweave.works/sops-key-name: "${SOPS_KEY_NAME}"\nweave.works/sops-key-comment: "${SOPS_KEY_COMMENT}"\n')),(0,a.kt)("h3",{id:"installation-steps"},"Installation Steps"),(0,a.kt)("p",null,"To bootstrap SOPS on a leaf cluster, create a new cluster using the SOPS template from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Cluster")," page and fill in the following SOPS-related values in the form:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOPS_KUSTOMIZATION_NAME"),": This Kustomization will be used to decrypt SOPS secrets from this path ",(0,a.kt)("inlineCode",{parentName:"li"},"clusters/default/leaf-cluster/sops/")," after reconciling on the cluster. example (",(0,a.kt)("inlineCode",{parentName:"li"},"my-secrets"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOPS_SECRET_REF"),": The private key secret name that will be generated by SOPS in the bootstrap job. example (",(0,a.kt)("inlineCode",{parentName:"li"},"sops-gpg"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOPS_SECRET_REF_NAMESPACE"),": The private key secret namespace this secret will be generated by SOPS in the bootstrap job. example (",(0,a.kt)("inlineCode",{parentName:"li"},"flux-system"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOPS_KEY_NAME"),": SOPS key name. This will be used to generate SOPS keys. example (",(0,a.kt)("inlineCode",{parentName:"li"},"test.yourdomain.com"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOPS_KEY_COMMENT"),": SOPS key comment. This will be used to generate SOPS keys. example (",(0,a.kt)("inlineCode",{parentName:"li"},"sops secret comment"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SOPS_PUSH_TO_GIT"),": Option to push the public key to the git repository. expected values (",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bootstrap SOPS",src:n(5241).Z,width:"1362",height:"881"})),(0,a.kt)("h3",{id:"what-to-expect"},"What to expect"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A leaf cluster created with Flux & SOPS bootstrapped"),(0,a.kt)("li",{parentName:"ul"},"A secret created on leaf cluster ",(0,a.kt)("inlineCode",{parentName:"li"},"sops-gpg")," to decrypt secrets"),(0,a.kt)("li",{parentName:"ul"},"A secret created on leaf cluster ",(0,a.kt)("inlineCode",{parentName:"li"},"sops-gpg-pub")," to encrypt secrets"),(0,a.kt)("li",{parentName:"ul"},"A Kustomization with ",(0,a.kt)("inlineCode",{parentName:"li"},"decryption")," defined in it to ",(0,a.kt)("inlineCode",{parentName:"li"},"SOPS")," location in the cluster repo location"),(0,a.kt)("li",{parentName:"ul"},"Added Role for the public key to be accessed through management cluster"),(0,a.kt)("li",{parentName:"ul"},"A PR is created to the cluster repo with the public key and SOPS creation rules (optional)"),(0,a.kt)("li",{parentName:"ul"},"Visit the Secrets Page and start managing your secrets via the ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.29.0/secrets/manage-secrets-ui"},"UI"))),(0,a.kt)("h2",{id:"security-recommendations"},"Security Recommendations"),(0,a.kt)("p",null,"Access to sops decryption secrets should be restricted and allowed only to be read by flux's kustomize controller. This can be done using Kubernetes RBAC."),(0,a.kt)("p",null,"Here's an example of how you can use RBAC to restrict access to sops decryption secrets:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new Kubernetes role that grants read access to sops decryption secrets")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: sops-secrets-role\nrules:\n- apiGroups: [""]\n  resources: ["secrets"]\n  resourceNames: ["sops-gpg-private-key", "sops-age-private-key"]\n  verbs: ["get", "watch", "list"]\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Bind the role to the service account of the flux's kustomize-controller")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Expand to view the RoleBinding "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: sops-secrets-rolebinding\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: Role\n  name: sops-secrets-role\nsubjects:\n- kind: ServiceAccount\n  name: kustomize-controller\n"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You would need to ensure that no other rolebindings or clusterrolebndings would allow reading the the decryption secret at any time. This could be achieved by leveraging policy capabilities to detect existing and prevent future creation of roles that would grant read secrets permissions.")))}d.isMDXComponent=!0},5241:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/sops-2e9846aaf3bf701f08c34252b388a87e.png"}}]);