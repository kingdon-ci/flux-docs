"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[88993],{16420:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(88746);a(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:t}=e;return r.createElement(n.Z,{title:`This feature is a available on ${t}`,style:s},t)}},72676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905)),s=a(16420);const l={title:"Using Terraform templates"},o='Using Terraform templates <TierLabel tiers="enterprise" />',i={unversionedId:"guides/using-terraform-templates",id:"version-0.16.0/guides/using-terraform-templates",title:"Using Terraform templates",description:"This guide will show you how to use a template to create a Terraform resource in Weave GitOps Enterprise.",source:"@site/versioned_docs/version-0.16.0/guides/using-terraform-templates.mdx",sourceDirName:"guides",slug:"/guides/using-terraform-templates",permalink:"/docs/0.16.0/guides/using-terraform-templates",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.16.0/guides/using-terraform-templates.mdx",tags:[],version:"0.16.0",frontMatter:{title:"Using Terraform templates"},sidebar:"docs",previous:{title:"Displaying custom metadata",permalink:"/docs/0.16.0/guides/displaying-custom-metadata"},next:{title:"Progressive delivery using Flagger",permalink:"/docs/0.16.0/guides/delivery"}},p={},u=[{value:"CLI guide",id:"cli-guide",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"1. Add a template to your cluster",id:"1-add-a-template-to-your-cluster",level:3},{value:"2. Use the template to create a resource",id:"2-use-the-template-to-create-a-resource",level:3},{value:"3. List available templates",id:"3-list-available-templates",level:3},{value:"4. List the parameters of a template",id:"4-list-the-parameters-of-a-template",level:3},{value:"Use Case: Create an Aurora RDS with WGE",id:"use-case-create-an-aurora-rds-with-wge",level:2},{value:"Pre-requisites",id:"pre-requisites-1",level:3},{value:"1. Configure a way to manage secrets",id:"1-configure-a-way-to-manage-secrets",level:3},{value:"2. Encrypt and store your credentials in your Git repository",id:"2-encrypt-and-store-your-credentials-in-your-git-repository",level:3},{value:"4. Add the manifests to your cluster",id:"4-add-the-manifests-to-your-cluster",level:3},{value:"5. Use the template to create the RDS",id:"5-use-the-template-to-create-the-rds",level:3}],m={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-terraform-templates-"},"Using Terraform templates ",(0,n.kt)(s.Z,{tiers:"enterprise",mdxType:"TierLabel"})),(0,n.kt)("p",null,"This guide will show you how to use a template to create a Terraform resource in Weave GitOps Enterprise."),(0,n.kt)("h2",{id:"cli-guide"},"CLI guide"),(0,n.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.16.0/installation/weave-gitops-enterprise/"},"Weave GitOps Enterprise")," with ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.16.0/installation/weave-gitops-enterprise/#optional-install-the-tf-controller"},"TF-Controller installed")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/0.16.0/configuration/tls"},"TLS enabled"),".")),(0,n.kt)("h3",{id:"1-add-a-template-to-your-cluster"},"1. Add a template to your cluster"),(0,n.kt)("p",null,"Add the following template to a path in your Git repository that is synced by Flux. For example, in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.16.0/installation/weave-gitops-enterprise/#install-flux-onto-your-cluster-with-the-flux-bootstrap-command"},"Installation guide"),", we set the path that is synced by Flux to ",(0,n.kt)("inlineCode",{parentName:"p"},"./clusters/management"),"."),(0,n.kt)("p",null,"Commit and push these changes. Once a template is available in the cluster, it can be used to create a resource, which will be shown in the next step."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/management/tf-template.yaml"',title:'"./clusters/management/tf-template.yaml"'},"---\napiVersion: clustertemplates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: tf-template\n  namespace: default\nspec:\n  description:\n    This is a sample WGE template that will be translated into a tf-controller specific template.\n  params:\n    - name: RESOURCE_NAME\n      description: Resource Name\n  resourcetemplates:\n    - content:\n      - apiVersion: infra.contrib.fluxcd.io/v1alpha1\n        kind: Terraform\n        metadata:\n          name: ${RESOURCE_NAME}\n          namespace: flux-system\n        spec:\n          interval: 1h\n          path: ./\n          approvePlan: auto\n          alwaysCleanupRunnerPod: true\n          sourceRef:\n            kind: GitRepository\n            name: flux-system\n            namespace: flux-system\n")),(0,n.kt)("p",null,"Verify that your template is in the cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get gitopstemplates.clustertemplates.weave.works -A\nNAME                                AGE\nsample-wge-tf-controller-template   14m\n")),(0,n.kt)("p",null,"If the template does not appear immediately, reconcile the changes with Flux:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"flux reconcile kustomization flux-system\n\u25ba annotating Kustomization flux-system in flux-system namespace\n\u2714 Kustomization annotated\n\u25ce waiting for Kustomization reconciliation\n\u2714 applied revision main/e6f5f0c3925bcfecdb50bceb12af9a87677d2213\n")),(0,n.kt)("h3",{id:"2-use-the-template-to-create-a-resource"},"2. Use the template to create a resource"),(0,n.kt)("p",null,"A resource can be created from a template by specifying the template's name and supplying values to it, as well as your Weave GitOps Enterprise username, password, and HTTP API endpoint."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gitops add terraform --from-template sample-wge-tf-controller-template \\ \n--set="RESOURCE_NAME"="name" \\\n--username=<username> --password=<password> \\\n--endpoint https://localhost:8000 \\\n--url https://github.com/myawesomeorg/myawesomerepo\n\nCreated pull request: https://github.com/myawesomeorg/myawesomerepo/pull/5\n')),(0,n.kt)("p",null,"This will create a PR in your Git repository with a TF-Controller manifest. Once the PR is merged, TF-Controller will supply the values to the Terraform manifest, apply the Terraform manifest to create the resource, and reconcile any changes that you make to the Terraform manifest!"),(0,n.kt)("p",null,"This template can be used to create multiple resources out of the same Terraform manifest by supplying different values to the template. Any changes to the Terraform manifest will be reconciled automatically to all resources."),(0,n.kt)("h3",{id:"3-list-available-templates"},"3. List available templates"),(0,n.kt)("p",null,"Get a specific template that can be used to create a Terraform resource:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gitops get template terraform sample-wge-tf-controller-template --endpoint https://localhost:8000 --username=<username> --password=<password>\nNAME                                PROVIDER   DESCRIPTION                                                                                     ERROR\nsample-wge-tf-controller-template              This is a sample WGE template that will be translated into a tf-controller specific template.\n")),(0,n.kt)("p",null,"List all the templates available on the cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gitops get template terraform --endpoint https://localhost:8000 --username=<username> --password=<password>\nNAME                                PROVIDER   DESCRIPTION                                                                                     ERROR\nsample-aurora-tf-template                      This is a sample Aurora RDS template.\nsample-wge-tf-controller-template              This is a sample WGE template that will be translated into a tf-controller specific template.\n")),(0,n.kt)("h3",{id:"4-list-the-parameters-of-a-template"},"4. List the parameters of a template"),(0,n.kt)("p",null,"List all the parameters that can be defined on a specific template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gitops get template terraform tf-controller-aurora --list-parameters --endpoint https://localhost:8000 --username=<username> --password=<password>\nNAME            REQUIRED   DESCRIPTION     OPTIONS\nRESOURCE_NAME   false      Resource Name\n")),(0,n.kt)("h2",{id:"use-case-create-an-aurora-rds-with-wge"},"Use Case: Create an Aurora RDS with WGE"),(0,n.kt)("admonition",{title:"BONUS",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For a more advanced example, here is a template to create an Aurora RDS cluster using WGE with Flux and the TF-Controller.")),(0,n.kt)("h3",{id:"pre-requisites-1"},"Pre-requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Everything from the ",(0,n.kt)("a",{parentName:"li",href:"#pre-requisites"},"previous section")),(0,n.kt)("li",{parentName:"ul"},"Get (or create) an AWS Access Key ID and Secret Access Key. Check the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html"},"AWS docs")," for details on how to do this."),(0,n.kt)("li",{parentName:"ul"},"Create an AWS IAM Role for the Terraform AWS Provider. Its policy should include ",(0,n.kt)("inlineCode",{parentName:"li"},"iam:CreateRole"),". More info ",(0,n.kt)("a",{parentName:"li",href:"https://support.hashicorp.com/hc/en-us/articles/360041289933-Using-AWS-AssumeRole-with-the-AWS-Terraform-Provider"},"here"),".")),(0,n.kt)("h3",{id:"1-configure-a-way-to-manage-secrets"},"1. Configure a way to manage secrets"),(0,n.kt)("p",null,"Configure a way to safely store Secrets. One method is to use the Mozilla SOPS CLI, but there are other ways, such as Sealed Secrets or Vaults."),(0,n.kt)("p",null,"Follow the steps in the ",(0,n.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/guides/mozilla-sops/"},"Flux docs")," ",(0,n.kt)("strong",{parentName:"p"},"except"),' for the "Configure in-cluster secrets decryption" step! This step looks slightly different for WGE. Instead of re-creating the controllers, you can configure the ',(0,n.kt)("inlineCode",{parentName:"p"},"kustomize-controller")," as instructed below."),(0,n.kt)("p",null,"In your Git repository source, add the following to your ",(0,n.kt)("inlineCode",{parentName:"p"},"kustomize-controller")," configuration:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF >> ./clusters/<cluster-name>/flux-system/gotk-sync.yaml\n  decryption:\n    provider: sops\n    secretRef:\n      name: sops-gpg\nEOF\n")),(0,n.kt)("h3",{id:"2-encrypt-and-store-your-credentials-in-your-git-repository"},"2. Encrypt and store your credentials in your Git repository"),(0,n.kt)("p",null,"Create a Secret to store sensitive values such as the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DB username"),(0,n.kt)("li",{parentName:"ul"},"DB password"),(0,n.kt)("li",{parentName:"ul"},"AWS Access Key ID"),(0,n.kt)("li",{parentName:"ul"},"AWS Secret Access Key"),(0,n.kt)("li",{parentName:"ul"},"AWS Role ARN")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If following the Flux guide, this steps corresponds to ",(0,n.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/guides/mozilla-sops/#encrypting-secrets-using-openpgp"},'"Encrypting secrets using OpenPGP"'),". You can stop following the Flux guide at this step.")),(0,n.kt)("p",null,"For example, here is what you would do if using the SOPS method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n flux-system create secret generic tf-controller-auth \\\n--from-literal=master_username=admin \\\n--from-literal=master_password=change-me \\\n--from-literal=aws_access_key=AKIAIOSFODNN7EXAMPLE \\\n--from-literal=aws_secret_key="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY" \\\n--from-literal=aws_role_arn="arn:aws:iam::012345678910:role/wge-tf-controller-example" \\\n--dry-run=client \\\n-o yaml > tf-controller-auth.yaml\n')),(0,n.kt)("p",null,"Then, encrypt the secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sops --encrypt --in-place tf-controller-auth.yaml\n")),(0,n.kt)("p",null,"Commit and push your changes. You can now store encrypted secrets to your Git repository."),(0,n.kt)("h3",{id:"4-add-the-manifests-to-your-cluster"},"4. Add the manifests to your cluster"),(0,n.kt)("p",null,"Add the following Terraform manifest to the root of your Git repository."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./rds.tf"',title:'"./rds.tf"'},'terraform {\n  required_providers {\n    aws = {\n      source  = "hashicorp/aws"\n      version = "~> 3.0"\n    }\n  }\n}\n\nvariable "cluster_identifier" {}\nvariable "database_name" {}\nvariable "master_username" {}\nvariable "master_password" {}\nvariable "backup_retention_period" {}\nvariable "region" {}\nvariable "aws_access_key" {}\nvariable "aws_secret_key" {}\nvariable "aws_role_arn" {}\n\nprovider "aws" {\n  region = var.region\n  access_key = var.aws_access_key\n  secret_key = var.aws_secret_key\n\n  assume_role {\n    role_arn    = var.aws_role_arn\n  }\n}\n\nlocals {\n  engine         = "aurora-mysql"\n  engine_version = "5.7.mysql_aurora.2.07.5"\n  port           = 3306\n}\n\ndata "aws_availability_zones" "available" {\n  state    = "available"\n\n  filter {\n    name   = "group-name"\n    values = [var.region]\n  }\n}\n\nresource "aws_rds_cluster" "mycluster" {\n  cluster_identifier      = var.cluster_identifier\n  engine                  = local.engine\n  engine_version          = local.engine_version\n  port                    = local.port\n  availability_zones      = slice(data.aws_availability_zones.available.names, 0, 3)\n  database_name           = var.database_name\n  master_username         = var.master_username\n  master_password         = var.master_password\n  backup_retention_period = var.backup_retention_period\n  skip_final_snapshot     = true\n  apply_immediately       = true\n}\n\nresource "aws_rds_cluster_instance" "cluster_instance" {\n  count              = 1\n  identifier         = "${aws_rds_cluster.mycluster.id}-${count.index}"\n  cluster_identifier = aws_rds_cluster.mycluster.id\n  instance_class     = "db.t3.small"\n  engine             = aws_rds_cluster.mycluster.engine\n  engine_version     = aws_rds_cluster.mycluster.engine_version\n}\n')),(0,n.kt)("p",null,"Add the following template to a path in your Git repository that is synced by Flux. In the ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.16.0/installation/weave-gitops-enterprise/#install-flux-onto-your-cluster-with-the-flux-bootstrap-command"},"quickstart guide"),", we set this path to ",(0,n.kt)("inlineCode",{parentName:"p"},"./clusters/management"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./clusters/management/rds-template.yaml"',title:'"./clusters/management/rds-template.yaml"'},"---\napiVersion: clustertemplates.weave.works/v1alpha2\nkind: GitOpsTemplate\nmetadata:\n  name: rds-template\n  namespace: default\nspec:\n  description: This is a sample Aurora RDS template.\n  params:\n    - name: RESOURCE_NAME\n      description: Resource Name\n    - name: CLUSTER_IDENTIFIER\n      description: Cluster Identifier\n    - name: DATABASE_NAME\n      description: Database Name\n    - name: BACKUP_RETENTION_PERIOD\n      description: Backup Retention Period\n    - name: REGION\n      description: Region\n  resourcetemplates:\n    - contents:\n      - apiVersion: infra.contrib.fluxcd.io/v1alpha1\n        kind: Terraform\n        metadata:\n          name: ${RESOURCE_NAME}\n          namespace: flux-system\n        spec:\n          interval: 1h\n          path: ./\n          approvePlan: auto\n          alwaysCleanupRunnerPod: true\n          vars:\n          - name: cluster_identifier\n            value: ${CLUSTER_IDENTIFIER}\n          - name: database_name\n            value: ${DATABASE_NAME}\n          - name: backup_retention_period\n            value: ${BACKUP_RETENTION_PERIOD}\n          - name: region\n            value: ${REGION}\n          varsFrom:\n          - kind: Secret\n            name: tf-controller-auth\n          sourceRef:\n            kind: GitRepository\n            name: flux-system\n            namespace: flux-system\n")),(0,n.kt)("p",null,"Commit and push your changes."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can change the location where you keep your Terraform manifests in your Git source (which the TF-Controller will reconcile) by configuring ",(0,n.kt)("inlineCode",{parentName:"p"},"spec.resourcetemplates.spec.path"),".")),(0,n.kt)("h3",{id:"5-use-the-template-to-create-the-rds"},"5. Use the template to create the RDS"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gitops add terraform --from-template rds-template \\\n--username=<username> --password=<password> \\\n--endpoint https://localhost:8000 \\\n--url https://github.com/myawesomeorg/myawesomerepo \\\n--set "RESOURCE_NAME"="tf-controller-aurora","CLUSTER_IDENTIFIER"="super-awesome-aurora","DATABASE_NAME"="db1","BACKUP_RETENTION_PERIOD"=5,"REGION"="us-west-2"\n\nCreated pull request: https://github.com/myawesomeorg/myawesomerepo/pull/6\n')),(0,n.kt)("p",null,"Merge the PR in your Git repository to add the TF-Controller manifest. TF-Controller will supply the values to the Terraform manifest, apply the Terraform manifest to create the resource, and reconcile any changes that you make to the Terraform manifest."),(0,n.kt)("p",null,"Any changes to your Terraform manifest will be automatically reconciled by the TF-controller with Flux."),(0,n.kt)("p",null,"You can re-use this template to create multiple Terraform resources, each with a different set of values!"),(0,n.kt)("p",null,"Make sure to delete the newly created RDS resources to not incur additional costs."))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||s;return a?r.createElement(h,l(l({ref:t},u),{},{components:a})):r.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<s;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);