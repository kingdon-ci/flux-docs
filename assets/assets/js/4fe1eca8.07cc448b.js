"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[1367],{85391:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(88746);r(52426);const s={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return a.createElement(n.Z,{title:`This feature is a available on ${t}.`,style:s},t)}},25202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),s=r(85391);const i={title:"Manage Secrets UI",hide_title:!0},o=void 0,l={unversionedId:"secrets/manage-secrets-ui",id:"version-0.23.0/secrets/manage-secrets-ui",title:"Manage Secrets UI",description:"{frontMatter.title}",source:"@site/versioned_docs/version-0.23.0/secrets/manage-secrets-ui.mdx",sourceDirName:"secrets",slug:"/secrets/manage-secrets-ui",permalink:"/docs/0.23.0/secrets/manage-secrets-ui",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.23.0/secrets/manage-secrets-ui.mdx",tags:[],version:"0.23.0",frontMatter:{title:"Manage Secrets UI",hide_title:!0},sidebar:"docs",previous:{title:"Setup SOPS",permalink:"/docs/0.23.0/secrets/setup-sops"},next:{title:"SecretSync",permalink:"/docs/0.23.0/secrets/spec/v1alpha1/secretSync"}},c={},p=[{value:"External Secrets",id:"external-secrets",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create External Secret CR",id:"create-external-secret-cr",level:3},{value:"List External Secrets",id:"list-external-secrets",level:3},{value:"External Secret Details",id:"external-secret-details",level:3},{value:"Understanding Events",id:"understanding-events",level:3},{value:"SOPS",id:"sops",level:2},{value:"Getting Started with SOPS",id:"getting-started-with-sops",level:3},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Create SOPS Secret",id:"create-sops-secret",level:3}],u={toc:p};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,i.title," ",(0,n.kt)(s.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,n.kt)("p",null,"At Weave GitOps Enterprise (WGE), we support two approaches for creating and managing secrets: ",(0,n.kt)("a",{parentName:"p",href:"https://external-secrets.io/v0.8.1/"},"External Secrets Operator")," and ",(0,n.kt)("a",{parentName:"p",href:"https://fluxcd.io/flux/guides/mozilla-sops/"},"Mozilla SOPS"),". In this guide, we will provide an overview of both approaches and explain how to use the UI to create and manage secrets."),(0,n.kt)("p",null,"Clicking on the Secrets under the Platform section in the left hand menu will bring you to the secrets page where you can create external secrets, sops secrets, and view the external secrets list."),(0,n.kt)("h2",{id:"external-secrets"},"External Secrets"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Setup the External Secrets Operator by following ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.23.0/secrets/setup-eso"},"this")," guide."),(0,n.kt)("h3",{id:"create-external-secret-cr"},"Create External Secret CR"),(0,n.kt)("p",null,"To create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"ExternalSecret")," CR, start by clicking on to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create External Secret")," button to navigate to the creation page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Secret list",src:r(14546).Z,width:"1554",height:"494"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create new Secret",src:r(17970).Z,width:"1627",height:"933"})),(0,n.kt)("p",null,"Here, you will be prompted to enter the ",(0,n.kt)("inlineCode",{parentName:"p"},"External Secret Name")," and the ",(0,n.kt)("inlineCode",{parentName:"p"},"Target K8s Secret Name"),". Once you choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Target Cluster"),", you will find a new list of all the ",(0,n.kt)("inlineCode",{parentName:"p"},"Secret Stores")," on this cluster to choose from."),(0,n.kt)("p",null,"It's important to note that the chosen ",(0,n.kt)("inlineCode",{parentName:"p"},"SecretStore")," may be a cluster-scoped ",(0,n.kt)("inlineCode",{parentName:"p"},"SecretStore")," ie: ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterSecretStore")," or a namespace-scoped ",(0,n.kt)("inlineCode",{parentName:"p"},"SecretStore"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create new Secret",src:r(34643).Z,width:"1627",height:"899"})),(0,n.kt)("p",null,"If you choose a namespace scoped ",(0,n.kt)("inlineCode",{parentName:"p"},"SecretStore"),", the new secret will be created on the same namespace as the ",(0,n.kt)("inlineCode",{parentName:"p"},"SecretStore"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create new Secret",src:r(5108).Z,width:"1627",height:"899"})),(0,n.kt)("p",null,"If you choose a cluster-scoped ",(0,n.kt)("inlineCode",{parentName:"p"},"ClusterSecretStore"),", the new secret will be created in a namespace of your choice."),(0,n.kt)("p",null,"This process allows you to easily create new ",(0,n.kt)("inlineCode",{parentName:"p"},"ExternalSecret")," CRs without needing to manually create them through YAML files or command line tools."),(0,n.kt)("h3",{id:"list-external-secrets"},"List External Secrets"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Secrets list",src:r(86007).Z,width:"1832",height:"941"})),(0,n.kt)("p",null,"The ExternalSecrets List section of the UI allows you to view all the external secrets that are currently stored in your Kubernetes clusters. This section provides an overview of each external secret, including its name, namespace, cluster, k8s-secret, secret-store and the age. From this page, you can also navigate to the details page to view more information about a specific secret."),(0,n.kt)("h3",{id:"external-secret-details"},"External Secret Details"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"External Secret Details",src:r(11134).Z,width:"1832",height:"941"})),(0,n.kt)("p",null,"The details page displays the details of a specific external secret, including its name, namespace, data, and creation date. Below are the details that you can expect to see on this page:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status:"),' This indicates the current status of the external secret, which can be "Ready" or "Not Ready" depending on whether the external secret has been successfully created and is ready for use.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Last Updated:")," This shows the date and time when the external secret was last updated."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"External Secret:")," This is the name of the external secret that you are viewing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"K8s Secret:")," This is the name of the Kubernetes secret that is associated with the external secret."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cluster:")," This indicates which cluster the external secret exists on."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secret Store:")," This shows the name of the secret store provider that is being used to store the external secret."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secret Store Type:"),' This indicates the type of secret store that is being used to store the external secret. In this case, the type is "AWS Secrets Manager".'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Secret path:")," This is the path to the external secret within the secret store."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Property:")," This is the property or key that is associated with the external secret."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Version:")," This shows the version of the external secret, which may be blank if no version has been specified.")),(0,n.kt)("p",null,"Understanding the information provided on the details page can help you to manage and troubleshoot your external secrets as needed."),(0,n.kt)("h3",{id:"understanding-events"},"Understanding Events"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"External Secret Events",src:r(76405).Z,width:"1570",height:"548"})),(0,n.kt)("p",null,"The following events can be expected when using the UI to manage external secrets:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Updated:")," This event indicates that an existing external secret has been successfully updated with new data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Not Ready:")," This event indicates that there was an issue with the secret store when trying to access or synchronize external secrets. This includes situations such as the secret store being unavailable or not ready to handle requests, or issues with authentication when trying to access the secret store.")),(0,n.kt)("p",null,"Understanding these events can help you to troubleshoot issues that may arise when managing external secrets using the UI. In particular, if you encounter a ",(0,n.kt)("inlineCode",{parentName:"p"},"Not Ready")," event, you may need to check your secret store credentials and ensure that the secret store is operational before proceeding with any further actions."),(0,n.kt)("h2",{id:"sops"},"SOPS"),(0,n.kt)("h3",{id:"getting-started-with-sops"},"Getting Started with SOPS"),(0,n.kt)("p",null,"Creating a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/mozilla/sops#usage"},"SOPS")," secret involves using the SOPS tool to encrypt a file containing sensitive information, such as credentials or API keys. This encrypted file can then be stored securely in version control or another location, with only authorized users able to decrypt it using their own private key. This adds an additional layer of security to sensitive data, reducing the risk of unauthorized access or accidental exposure."),(0,n.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"For more information about how to generate OpenPGP/age keys and configure your cluster to work with Weave GitOps Enterprise secrets management follow ",(0,n.kt)("a",{parentName:"p",href:"/docs/0.23.0/secrets/setup-sops"},"this")," guide."),(0,n.kt)("h3",{id:"create-sops-secret"},"Create SOPS Secret"),(0,n.kt)("p",null,"To create a new SOPS secret, start by clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Sops Secret")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Secrets Overview",src:r(14546).Z,width:"1554",height:"494"})),(0,n.kt)("p",null,"This will open the create form where you can specify the details of your new secret. First, choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster")," where you want to create the secret. Then, enter a ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," for your secret and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," where it will be created."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create Secret SOPS",src:r(94160).Z,width:"1604",height:"971"})),(0,n.kt)("p",null,"Next, select the ",(0,n.kt)("inlineCode",{parentName:"p"},"encryption method")," that you want to use - currently, only GPG/AGE encryption is supported. Finally, choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"kustomization")," that will be used by SOPS to decrypt the secret, as well as, having the public key info that will be used to encrypt the secret data. Afterwards, add your ",(0,n.kt)("inlineCode",{parentName:"p"},"key-value")," pairs of your secrets.\nIt's important to note that the ",(0,n.kt)("inlineCode",{parentName:"p"},"value")," input will be encoded to base64."),(0,n.kt)("p",null,"The generated secret should be something like below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create Secret SOPS PR",src:r(26339).Z,width:"1082",height:"788"})),(0,n.kt)("p",null,"After approving the pull request, Flux will reconcile it to your cluster. To verify that the secret has been successfully created, you can use the following command to retrieve it as YAML:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret secretTest-default-sops-secret -n default -o yaml\n")),(0,n.kt)("p",null,"which will give the following output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\ndata:\n  secret-1: dmFsCg==\nkind: Secret\nmetadata:\n  name: secretTest-default-sops-secret\n  namespace: default\ntype: Opaque\n")))}h.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||s;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17970:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-secret-1-ac0e09af62ba46067cfa29f8bcfaddca.png"},34643:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-secret-2-b08e8f86c6bf3c6beecf998b73649d3a.png"},5108:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-secret-3-9cc5715aea56d40d6fec2e0b03f2095b.png"},94160:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-secret-sops-33f895f37d02504c58386456f6d9d66c.png"},11134:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/eso-details-1-05f9976dba47a30cf802872a711e9841.png"},76405:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/external-secret-events-1-2dbce9043c4c008fed17045983b3d5a6.png"},14546:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/secretes-overview-1-7b3f314faa026e07dfaed53d92332cd4.png"},86007:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/secrets-overview-2-ee7a0258581bc634cf40431489266604.png"},26339:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sops-secret-pr-9c8a8ab06ccb386887917164d5f73143.png"}}]);