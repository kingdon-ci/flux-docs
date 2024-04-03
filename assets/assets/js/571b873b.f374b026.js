"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[66625],{32342:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},71125:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),r=n(67294),l=n(86010),o=n(63735),s=n(16550),i=n(34423),c=n(20636),u=n(99200);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,c]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=i??p;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var g=n(5730);const k="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=c[n].value;a!==s&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},o,{className:(0,l.Z)("tabs__item",v,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},34049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),l=n(71125),o=n(32342);const s={title:"AWS Marketplace",hide_title:!0,pagination_next:"getting-started/ui"},i=void 0,c={unversionedId:"installation/aws-marketplace",id:"version-0.21.2/installation/aws-marketplace",title:"AWS Marketplace",description:"AWS Marketplace",source:"@site/versioned_docs/version-0.21.2/installation/aws-marketplace.mdx",sourceDirName:"installation",slug:"/installation/aws-marketplace",permalink:"/docs/0.21.2/installation/aws-marketplace",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.21.2/installation/aws-marketplace.mdx",tags:[],version:"0.21.2",frontMatter:{title:"AWS Marketplace",hide_title:!0,pagination_next:"getting-started/ui"},sidebar:"docs",previous:{title:"Airgap Environments",permalink:"/docs/0.21.2/installation/weave-gitops-enterprise/airgap"},next:{title:"1. Explore the GitOps UI",permalink:"/docs/0.21.2/getting-started/ui"}},u={},p=[{value:"AWS Marketplace",id:"aws-marketplace",level:2},{value:"Step 1: Subscribe to Weave GitOps on the AWS Marketplace",id:"step-1-subscribe-to-weave-gitops-on-the-aws-marketplace",level:3},{value:"Step 2: Configure an EKS Cluster",id:"step-2-configure-an-eks-cluster",level:3},{value:"Step 3: Fetch the Service Account Role ARN",id:"step-3-fetch-the-service-account-role-arn",level:3},{value:"Step 4: Install Weave GitOps",id:"step-4-install-weave-gitops",level:3},{value:"Step 5: Check your installation",id:"step-5-check-your-installation",level:3},{value:"Next steps",id:"next-steps",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"aws-marketplace"},"AWS Marketplace"),(0,r.kt)("p",null,"Weave GitOps is also available via the AWS Marketplace."),(0,r.kt)("p",null,"The following steps will allow you to deploy the Weave GitOps product to an EKS cluster via a Helm Chart."),(0,r.kt)("p",null,"These instructions presume you already have installed ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},(0,r.kt)("inlineCode",{parentName:"a"},"kubectl")),",\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/eksctl"},(0,r.kt)("inlineCode",{parentName:"a"},"eksctl")),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/helm/helm"},(0,r.kt)("inlineCode",{parentName:"a"},"helm"))," and\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hypnoglow/helm-s3"},"Helm S3 Plugin"),"."),(0,r.kt)("h3",{id:"step-1-subscribe-to-weave-gitops-on-the-aws-marketplace"},"Step 1: Subscribe to Weave GitOps on the AWS Marketplace"),(0,r.kt)("p",null,"To deploy the managed Weave GitOps solution, first subscribe to the product on ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-vkn2wejad2ix4"},"AWS Marketplace"),".\n",(0,r.kt)("strong",{parentName:"p"},"This subscription is only available for deployment on EKS versions 1.17-1.21.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: it may take ~20 minutes for your Subscription to become live and deployable.")),(0,r.kt)("h3",{id:"step-2-configure-an-eks-cluster"},"Step 2: Configure an EKS Cluster"),(0,r.kt)(l.Z,{groupId:"cluster-config",default:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Create a new EKS Cluster",label:"Create a new EKS Cluster",mdxType:"TabItem"},(0,r.kt)("p",null,"If you do not have a cluster on EKS, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weaveworks/eksctl"},(0,r.kt)("inlineCode",{parentName:"a"},"eksctl"))," to create one."),(0,r.kt)("p",null,"Copy the contents of the sample file below into ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-config.yaml")," and replace the placeholder values with your settings.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://eksctl.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"eksctl")," documentation")," for more configuration options."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand for file contents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cluster-config.yaml"',title:'"cluster-config.yaml"'},'---\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: CLUSTER_NAME # Change this\n  region: REGION # Change this\n\n# This section is required\niam:\n  withOIDC: true\n  serviceAccounts:\n  - metadata:\n      name: wego-service-account # Altering this will require a corresponding change in a later command\n      namespace: flux-system\n    roleOnly: true\n    attachPolicy:\n      Version: "2012-10-17"\n      Statement:\n      - Effect: Allow\n        Action:\n        - "aws-marketplace:RegisterUsage"\n        Resource: \'*\'\n\n# This section will create a single Managed nodegroup with one node.\n# Edit or remove as desired.\nmanagedNodeGroups:\n- name: ng1\n  instanceType: m5.large\n  desiredCapacity: 1\n'))),(0,r.kt)("p",null,"Create the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl create cluster -f cluster-config.yaml\n"))),(0,r.kt)(o.Z,{value:"Use an existing EKS Cluster",label:"Use an existing EKS Cluster",mdxType:"TabItem"},(0,r.kt)("p",null,"In order to use the Weave GitOps container product,\nyour cluster must be configured to run containers with the correct IAM Policies."),(0,r.kt)("p",null,"The recommended way to do this is via ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/introducing-fine-grained-iam-roles-service-accounts/"},"IRSA"),"."),(0,r.kt)("p",null,"Use this ",(0,r.kt)("inlineCode",{parentName:"p"},"eksctl")," configuration below (replacing the placeholder values) to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Associate an OIDC provider"),(0,r.kt)("li",{parentName:"ul"},"Create the required service account ARN")),(0,r.kt)("p",null,"Save the example below as ",(0,r.kt)("inlineCode",{parentName:"p"},"oidc-config.yaml")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Expand for file contents"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="oidc-config.yaml"',title:'"oidc-config.yaml"'},'---\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\n  name: CLUSTER_NAME # Change this\n  region: REGION # Change this\n\n# This section is required\niam:\n  withOIDC: true\n  serviceAccounts:\n  - metadata:\n      name: wego-service-account # Altering this will require a corresponding change in a later command\n      namespace: flux-system\n    roleOnly: true\n    attachPolicy:\n      Version: "2012-10-17"\n      Statement:\n      - Effect: Allow\n        Action:\n        - "aws-marketplace:RegisterUsage"\n        Resource: \'*\'\n'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl utils associate-iam-oidc-provider -f oidc-config.yaml --approve\neksctl create iamserviceaccount -f oidc-config.yaml --approve\n")))),(0,r.kt)("h3",{id:"step-3-fetch-the-service-account-role-arn"},"Step 3: Fetch the Service Account Role ARN"),(0,r.kt)("p",null,"First retrieve the ARN of the IAM role which you created for the ",(0,r.kt)("inlineCode",{parentName:"p"},"wego-service-account"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# replace the placeholder values with your configuration\n# if you changed the service account name from wego-service-account, update that in the command\nexport SA_ARN=$(eksctl get iamserviceaccount --cluster <cluster-name> --region <region> | awk '/wego-service-account/ {print $3}')\n\necho $SA_ARN\n# should return\n# arn:aws:iam::<account-id>:role/eksctl-<cluster-name>-addon-iamserviceaccount-xxx-Role1-1N41MLVQEWUOF\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This value will also be discoverable in your IAM console, and in the Outputs of the Cloud Formation\ntemplate which created it.")),(0,r.kt)("h3",{id:"step-4-install-weave-gitops"},"Step 4: Install Weave GitOps"),(0,r.kt)("p",null,"Copy the Chart URL from the Usage Instructions in AWS Marketplace, or download the file from the Deployment template to your workstation."),(0,r.kt)("p",null,"To be able to log in to your new installation, you need to set up authentication. Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," where you set your username, and a bcrypt hash of your desired password, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="./values.yaml"',title:'"./values.yaml"'},"gitops:\n  adminUser:\n    create: true\n    username: <UPDATE>\n    passwordHash: <UPDATE>\n")),(0,r.kt)("p",null,"Then install it:"),(0,r.kt)(l.Z,{groupId:"install-wego",default:!0,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"sa-default",label:"Using the default Service Account Name",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},'helm install wego <URL/PATH> \\\n  --namespace=flux-system \\\n  --create-namespace \\\n  --set serviceAccountRole="$SA_ARN" \\\n  --values ./values.yaml\n'))),(0,r.kt)(o.Z,{value:"sa-configured",label:"Using a configured Service Account Name",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"helm install wego <URL/PATH> \\\n  --namespace=flux-system \\\n  --create-namespace \\\n  --set serviceAccountName='<name>' \\\n  --set serviceAccountRole=\"$SA_ARN\" \\\n  --values ./values.yaml\n")))),(0,r.kt)("h3",{id:"step-5-check-your-installation"},"Step 5: Check your installation"),(0,r.kt)("p",null,"Run the following from your workstation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"kubectl get pods -n flux-system\n# you should see something like the following returned\nflux-system          helm-controller-5b96d94c7f-tds9n                    1/1     Running   0          53s\nflux-system          kustomize-controller-8467b8b884-x2cpd               1/1     Running   0          53s\nflux-system          notification-controller-55f94bc746-ggmwc            1/1     Running   0          53s\nflux-system          source-controller-78bfb8576-stnr5                   1/1     Running   0          53s\nflux-system          wego-metering-f7jqp                                 1/1     Running   0          53s\nflux-system          ww-gitops-weave-gitops-5bdc9f7744-vkh65             1/1     Running   0          53s\n")),(0,r.kt)("p",null,"Your Weave GitOps installation is now ready!"),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"In our following ",(0,r.kt)("a",{parentName:"p",href:"/docs/0.21.2/getting-started/ui"},"Get Started document"),", we will walk you through logging into the GitOps Dashboard and deploying an application."))}d.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);