"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[33463],{56816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Configure IRSA for AWS EKS",hide_title:!0},i="Configure IRSA for AWS Elastic Kubernetes Service (EKS)",s={unversionedId:"terraform/aws-eks",id:"version-0.16.0/terraform/aws-eks",title:"Configure IRSA for AWS EKS",description:"To use AWS Elastic Kubernetes Service (EKS) with TF-controller, you can leverage IAM Roles for Service Accounts (IRSA)",source:"@site/versioned_docs/version-0.16.0/terraform/aws-eks.mdx",sourceDirName:"terraform",slug:"/terraform/aws-eks",permalink:"/docs/0.16.0/terraform/aws-eks",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.16.0/terraform/aws-eks.mdx",tags:[],version:"0.16.0",frontMatter:{title:"Configure IRSA for AWS EKS",hide_title:!0},sidebar:"docs",previous:{title:"OCI Artifact",permalink:"/docs/0.16.0/terraform/oci-artifact"},next:{title:"Terraform Enterprise",permalink:"/docs/0.16.0/terraform/terraform-enterprise"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-irsa-for-aws-elastic-kubernetes-service-eks"},"Configure IRSA for AWS Elastic Kubernetes Service (EKS)"),(0,o.kt)("p",null,"To use AWS Elastic Kubernetes Service (EKS) with TF-controller, you can leverage IAM Roles for Service Accounts (IRSA)\nas a way to provide credentials to the Terraform runners (",(0,o.kt)("inlineCode",{parentName:"p"},"tf-runner")," pods).\nIRSA allows you to create IAM roles that can be assumed by the identity provider for your Kubernetes cluster,\nwhich can then be used by the pods running in the cluster to access AWS resources.\nThis can be especially useful for automating infrastructure management tasks using TF-controller."),(0,o.kt)("p",null,"To set up IRSA for use with TF-controller, you will need to follow a few steps to associate an OpenID Connect (OIDC) provider with your EKS cluster,\ncreate a trust policy for the IAM role, and annotate the ServiceAccount for the ",(0,o.kt)("inlineCode",{parentName:"p"},"tf-runner")," with the Role ARN.\nIn this document, we will walk you through these steps in detail so that you can use IRSA with TF-controller in your EKS cluster."),(0,o.kt)("p",null,"To use AWS Elastic Kubernetes Service (EKS) with TF-controller, you will need to follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use eksctl to associate an OpenID Connect (OIDC) provider with your EKS cluster. This can be done by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl utils associate-iam-oidc-provider --cluster CLUSTER_NAME --approve\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER_NAME")," with the name of your EKS cluster. This command will create an IAM OIDC provider and associate it with your EKS cluster.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the instructions in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-service-account-iam-policy-and-role.html"},"the AWS documentation"),"\nto add a trust policy to the IAM role that grants the necessary permissions for Terraform.\nMake sure to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace:serviceaccountname")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"flux-system:tf-runner"),". This will give you a Role ARN that you will need in the next step.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Annotate the ServiceAccount for the ",(0,o.kt)("inlineCode",{parentName:"p"},"tf-runner")," with the obtained Role ARN in your cluster. You can do this by running the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl annotate -n flux-system serviceaccount tf-runner eks.amazonaws.com/role-arn=ROLE_ARN\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"ROLE_ARN")," with the Role ARN obtained in the previous step."),(0,o.kt)("p",{parentName:"li"},"If you are deploying TF-controller using Helm, you can pass the Role ARN as an annotation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tf-runner")," ServiceAccount in your Helm values file.\nThis can be done by adding the following block to your values file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{5}","{5}":!0},"values:\n  runner:\n    serviceAccount:\n      annotations:\n        eks.amazonaws.com/role-arn: ROLE_ARN\n")))),(0,o.kt)("p",null,"By following these steps, you will be able to use the Terraform controller with your EKS cluster and provide the necessary AWS credentials for performing plans and applies."))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);