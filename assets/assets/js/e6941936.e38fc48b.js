"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[59808],{1664:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(88746);r(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function s(e){let{tiers:t}=e;return n.createElement(a.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},26697:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),i=r(1664);r(88746);const s={title:"Introduction to Weave GitOps Enterprise",hide_title:!0},o='Weave GitOps Enterprise <TierLabel tiers="Enterprise" />',l={unversionedId:"enterprise/getting-started/intro-enterprise",id:"version-0.34.0/enterprise/getting-started/intro-enterprise",title:"Introduction to Weave GitOps Enterprise",description:"To purchase an entitlement to Weave GitOps Enterprise, please contact sales@weave.works.",source:"@site/versioned_docs/version-0.34.0/enterprise/getting-started/intro-enterprise.mdx",sourceDirName:"enterprise/getting-started",slug:"/enterprise/getting-started/intro-enterprise",permalink:"/docs/0.34.0/enterprise/getting-started/intro-enterprise",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.34.0/enterprise/getting-started/intro-enterprise.mdx",tags:[],version:"0.34.0",frontMatter:{title:"Introduction to Weave GitOps Enterprise",hide_title:!0},sidebar:"docs",previous:{title:"Optional: Running the UI on a Subpath",permalink:"/docs/0.34.0/open-source/getting-started/run-ui-subpath"},next:{title:"Install Weave GitOps Enterprise",permalink:"/docs/0.34.0/enterprise/getting-started/install-enterprise"}},p={},c=[{value:"Feature Breakdown",id:"feature-breakdown",level:2},{value:"\u26f5 Cluster Fleet Management",id:"-cluster-fleet-management",level:3},{value:"\ud83d\udd10 Trusted Application Delivery",id:"-trusted-application-delivery",level:3},{value:"\ud83d\ude9a Progressive Delivery",id:"-progressive-delivery",level:3},{value:"\u267e\ufe0f CD Pipelines",id:"\ufe0f-cd-pipelines",level:3},{value:"\ud83e\uddd1\u200d\ud83c\udfed Team Workspaces",id:"-team-workspaces",level:3},{value:"\ud83d\udc46 Self-Service Templates and Profiles",id:"-self-service-templates-and-profiles",level:3},{value:"\ud83d\udc96 Health Status and Compliance Dashboards",id:"-health-status-and-compliance-dashboards",level:3},{value:"\ud83e\udded Kubernetes Anywhere",id:"-kubernetes-anywhere",level:3},{value:"\ud83d\udd14 Critical 24/7 Support",id:"-critical-247-support",level:3}],d={toc:c};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"weave-gitops-enterprise-"},"Weave GitOps Enterprise ",(0,a.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,a.kt)("admonition",{title:"Ready for more GitOps?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To purchase an entitlement to Weave GitOps Enterprise, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works"),".")),(0,a.kt)("p",null,"Weave GitOps Enterprise provides ops teams with an easy way to assess the\nhealth of multiple clusters in a single place. It shows cluster information such as\nKubernetes version and number of nodes and provides details about the GitOps operations\non those clusters, such as Git repositories and recent commits. Additionally, it\naggregates Prometheus alerts to assist with troubleshooting."),(0,a.kt)("p",null,"If you have already purchased your entitlement, head to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.34.0/enterprise/getting-started/install-enterprise"},"installation page"),"."),(0,a.kt)("h2",{id:"feature-breakdown"},"Feature Breakdown"),(0,a.kt)("p",null,"In addition to the features in the OSS edition, Weave GitOps Enterprise\noffers the following capabilities, taking your delivery from simple Continuous Delivery to Internal Developer Platform:"),(0,a.kt)("h3",{id:"-cluster-fleet-management"},"\u26f5 ",(0,a.kt)("a",{parentName:"h3",href:"/docs/0.34.0/cluster-management/cluster-management-intro"},"Cluster Fleet Management")),(0,a.kt)("p",null,"Weave GitOps Enterprise (WGE) simplifies cluster lifecycle management at scale\u2014even massive scale. Through pull requests, which make every action recorded and auditable, WGE makes it possible for teams to create, update, and delete clusters across entire fleets. WGE further simplifies the process by providing both a user interface (UI) and a command line interface (CLI) for teams to interact with and manage clusters on-prem, across clouds, and in hybrid environments. WGE works with ",(0,a.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/extending-gitops-beyond-kubernetes-with-terraform"},"Terraform"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.weave.works/blog/gitops-goes-beyond-kubernetes-with-weave-gitops-upbound-s-universal-crossplane"},"Crossplane"),", and any Cluster API provider."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WGE dashboard with cluster view",src:r(42728).Z,width:"3388",height:"1684"})),(0,a.kt)("h3",{id:"-trusted-application-delivery"},"\ud83d\udd10 ",(0,a.kt)("a",{parentName:"h3",href:"/docs/0.34.0/policy/intro"},"Trusted Application Delivery")),(0,a.kt)("p",null,"Add policy as code to GitOps pipelines and enforce security and compliance,\napplication resilience and coding standards from source to production.\nValidate policy conformance at every step in the software delivery pipeline:\ncommit, build, deploy and run time."),(0,a.kt)("h3",{id:"-progressive-delivery"},"\ud83d\ude9a ",(0,a.kt)("a",{parentName:"h3",href:"/docs/0.34.0/progressive-delivery/progressive-delivery-flagger-install"},"Progressive Delivery")),(0,a.kt)("p",null,"Deploy into production environments safely using canary, blue/green deployment, and A/B\nstrategies. Simple, single-file configuration defines success rollback. Measure Service Level Objectives (SLOs)\nusing observability metrics from Prometheus, Datadog, New Relic, and others."),(0,a.kt)("h3",{id:"\ufe0f-cd-pipelines"},"\u267e\ufe0f ",(0,a.kt)("a",{parentName:"h3",href:"/docs/0.34.0/pipelines/pipelines-intro"},"CD Pipelines")),(0,a.kt)("p",null,"Rollout new software from development to production.\nEnvironment rollouts that work with your existing CI system."),(0,a.kt)("h3",{id:"-team-workspaces"},"\ud83e\uddd1\u200d\ud83c\udfed ",(0,a.kt)("a",{parentName:"h3",href:"/docs/0.34.0/workspaces/intro"},"Team Workspaces")),(0,a.kt)("p",null,"Allow DevOps teams to work seamlessly together with multi-tenancy,\ntotal RBAC control, and policy enforcement, with integration to enterprise IAM."),(0,a.kt)("h3",{id:"-self-service-templates-and-profiles"},"\ud83d\udc46 ",(0,a.kt)("a",{parentName:"h3",href:"/docs/0.34.0/gitops-templates/intro"},"Self-Service Templates and Profiles")),(0,a.kt)("p",null,"Component profiles enable teams to deploy standard services quickly,\nconsistently and reliably. Teams can curate the profiles that are available\nwithin their estate ensuring there is consistency everywhere. Using GitOps\nit's easy to guarantee the latest, secure versions of any component are\ndeployed in all production systems."),(0,a.kt)("h3",{id:"-health-status-and-compliance-dashboards"},"\ud83d\udc96 Health Status and Compliance Dashboards"),(0,a.kt)("p",null,"Gain a single view of the health and state of the cluster and its workloads.\nMonitor deployments and alert on policy violations across apps and clusters."),(0,a.kt)("h3",{id:"-kubernetes-anywhere"},"\ud83e\udded Kubernetes Anywhere"),(0,a.kt)("p",null,"Reduce complexity with GitOps and install across all major target environments\nincluding support for on-premise, edge, hybrid, and multi-cloud Kubernetes clusters."),(0,a.kt)("h3",{id:"-critical-247-support"},"\ud83d\udd14 ",(0,a.kt)("a",{parentName:"h3",href:"/help-and-support/"},"Critical 24/7 Support")),(0,a.kt)("p",null,"Your business and workloads operate around the clock, and so do we.\nWhenever you have a problem, our experts are there to help. We\u2019ve got your back!"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42728:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/wge-dashboard-dark-mode-6f7a62c22c3b50b0233ad338b3ddd58a.png"}}]);