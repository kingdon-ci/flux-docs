"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[87678],{90983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Introducing Weave GitOps",hide_title:!0},i="Introducing Weave GitOps",s={unversionedId:"intro-weave-gitops",id:"version-0.37.0/intro-weave-gitops",title:"Introducing Weave GitOps",description:'"GitOps is the best thing since configuration as code. Git changed how we collaborate, but declarative configuration is the key to dealing with infrastructure at scale, and sets the stage for the next generation of management tools"',source:"@site/versioned_docs/version-0.37.0/intro-weave-gitops.mdx",sourceDirName:".",slug:"/intro-weave-gitops",permalink:"/docs/0.37.0/intro-weave-gitops",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.37.0/intro-weave-gitops.mdx",tags:[],version:"0.37.0",frontMatter:{title:"Introducing Weave GitOps",hide_title:!0},sidebar:"docs",next:{title:"Step 1 - Install Weave GitOps Open Source",permalink:"/docs/0.37.0/open-source/getting-started/install-OSS"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Weave GitOps Open Source Features",id:"weave-gitops-open-source-features",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introducing-weave-gitops"},"Introducing Weave GitOps"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"GitOps is the best thing since configuration as code. Git changed how we collaborate, but declarative configuration is the key to dealing with infrastructure at scale, and sets the stage for the next generation of management tools"')),(0,a.kt)("cite",null,"- Kelsey Hightower, Staff Developer Advocate, Google."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Weave GitOps improves developer experience\u2014simplifying the complexities and cognitive load of deploying and managing cloud native apps on Kubernetes so that teams can go faster. It\u2019s a powerful extension of Flux, a leading GitOps engine and ",(0,a.kt)("a",{parentName:"p",href:"https://www.cncf.io/projects/"},"Cloud Native Computing Foundation project"),". ",(0,a.kt)("a",{parentName:"p",href:"https://weave.works"},"Weaveworks")," are the creators of ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io"},"Flux"),"."),(0,a.kt)("p",null,"Weave GitOps\u2019 intuitive user interface surfaces key information to help application operators easily discover and resolve issues\u2014simplifying and scaling adoption of GitOps and continuous delivery. The UI provides a guided experience that helps users to easily discover the relationships between Flux objects and build understanding while providing insights into application deployments."),(0,a.kt)("p",null,"Today Weave GitOps defaults are Flux, Kustomize, Helm, SOPS, and Kubernetes Cluster API. If you use Flux already, then you can easily add Weave GitOps to create a platform management overlay."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Adopting GitOps can bring a number of key benefits\u2014including faster and more frequent deployments, easy recovery from failures, and improved security and auditabiity. Check out our ",(0,a.kt)("a",{parentName:"p",href:"https://go.weave.works/WebContent-EB-GitOps-for-Beginners.html"},"GitOps for Absolute Beginners")," eBook and ",(0,a.kt)("a",{parentName:"p",href:"https://www.weave.works/technologies/gitops/"},"Guide to GitOps")," for more information.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"This user guide provides content that will help you to install and get started with our free and paid offerings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Weave GitOps Open Source"),": a simple, open source developer platform for people who don't have Kubernetes expertise but who want cloud native applications. It includes the UI and many other features that take your team beyond a simple CI/CD system. Experience how easy it is to enable GitOps and run your apps in a cluster. ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.37.0/open-source/getting-started/install-OSS"},"Go here to install"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Weave GitOps Enterprise"),": an ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.37.0/enterprise/getting-started/intro-enterprise"},"enterprise version")," that adds automation and 100% verifiable trust to existing developer platforms, enabling faster and more frequent deployments with guardrails and golden paths for every app team. Note that Enterprise offers a more robust UI than what you'll find in our open source version. ",(0,a.kt)("a",{parentName:"li",href:"/docs/0.37.0/enterprise/getting-started/install-enterprise"},"Go here to install"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Want to learn more about how ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.37.0/enterprise/getting-started/intro-enterprise"},"Weave GitOps Enterprise")," can help your team?\nGet in touch with ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works")," to discuss your needs.")),(0,a.kt)("p",null,"Weave GitOps works on any Chromium-based browser (Chrome, Opera, Microsoft Edge), Safari, and Firefox. We only support the latest and prior two versions of these browsers."),(0,a.kt)("p",null,"To give Weave GitOps a test drive, we recommend checking out the Open Source version and its ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.37.0/open-source/getting-started/ui-OSS"},"UI"),", then deploying an application. Let's take a closer look at the features it offers you, all for free."),(0,a.kt)("h3",{id:"weave-gitops-open-source-features"},"Weave GitOps Open Source Features"),(0,a.kt)("p",null,"Like our Enterprise version, Weave GitOps Open Source fully integrates with ",(0,a.kt)("a",{parentName:"p",href:"https://fluxcd.io/docs/"},"Flux")," as the GitOps engine to provide:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u267e\ufe0f Continuous Delivery through GitOps for apps and infrastructure."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udde9 Support for GitHub, GitLab, and Bitbucket; S3-compatible buckets as a source; all major container registries; and all CI workflow providers."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd11 A secure, pull-based mechanism, operating with least amount of privileges, and adhering to Kubernetes security policies."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0c Compatibility with any conformant ",(0,a.kt)("a",{parentName:"li",href:"https://fluxcd.io/docs/installation/#prerequisites"},"Kubernetes version")," and common ecosystem technologies such as Helm, Kustomize, RBAC, Prometheus, OPA, Kyverno, etc."),(0,a.kt)("li",{parentName:"ul"},"\ud83c\udfe2 Multitenancy, multiple Git repositories, multiple clusters."),(0,a.kt)("li",{parentName:"ul"},"\u2757 Alerts and notifications.")),(0,a.kt)("p",null,"Some of the things you can do with it:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2714\ufe0f Application Operations\u2014manage and automate deployment pipelines for apps and more."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\ude84 Easily have your own custom PaaS on cloud or on premise."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd17 Coordinate Kubernetes rollouts with virtual machines, databases, and cloud services."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc77\u200d\u2640\ufe0f Drill down into more detailed information on any given Flux resource."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udd0d Uncover relationships between resources and quickly navigate between them."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udd14 Understand how workloads are reconciled through a directional graph."),(0,a.kt)("li",{parentName:"ul"},"\ud83e\udd7d View Kubernetes events relating to a given object to understand issues and changes."),(0,a.kt)("li",{parentName:"ul"},"\ud83d\udeb7 Secure access to the dashboard through the ability to integrate with an OIDC provider (such as Dex).")),(0,a.kt)("p",null,"OK, time to ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.37.0/open-source/getting-started/install-OSS"},"install"),"!"))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);