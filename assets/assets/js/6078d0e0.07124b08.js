"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[47229],{72503:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),i=n(88746);n(52426);const a={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function o(e){let{tiers:t}=e;return r.createElement(i.Z,{title:`This feature is a available on ${t}.`,style:a},t)}},79963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),a=n(72503),o=n(88746);const s={title:"Enterprise Edition",hide_title:!0},l='Weave GitOps Enterprise Edition <TierLabel tiers="Enterprise" />',p={unversionedId:"intro-ee",id:"version-0.22.0/intro-ee",title:"Enterprise Edition",description:"To purchase entitlement to Weave GitOps Enterprise Edition please contact sales@weave.works",source:"@site/versioned_docs/version-0.22.0/intro-ee.mdx",sourceDirName:".",slug:"/intro-ee",permalink:"/docs/0.22.0/intro-ee",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.22.0/intro-ee.mdx",tags:[],version:"0.22.0",frontMatter:{title:"Enterprise Edition",hide_title:!0},sidebar:"docs",previous:{title:"2. Deploy an Application",permalink:"/docs/0.22.0/getting-started/deploy"},next:{title:"Releases",permalink:"/docs/0.22.0/releases"}},c={},d=[{value:"Feature breakdown",id:"feature-breakdown",level:2},{value:'\u26f5 <Link to="../cluster-management/intro" target="_blank">Cluster Fleet Management</Link>',id:"-cluster-fleet-management",level:3},{value:'\ud83d\udd10 <Link to="../policy/intro" target="_blank">Trusted Application Delivery</Link>',id:"-trusted-application-delivery",level:3},{value:"\u23ed\ufe0f <Link to='../guides/delivery' target=\"_blank\">Progressive Delivery</Link>",id:"\ufe0f-progressive-delivery",level:3},{value:"\u267e\ufe0f <Link to='../pipelines/intro' target=\"_blank\">CD Pipelines</Link>",id:"\ufe0f-cd-pipelines",level:3},{value:"\ud83e\uddd1\u200d\ud83c\udfed\ud83d\udc69\u200d\ud83c\udfed <Link to='../workspaces/intro' target=\"_blank\">Team Workspaces</Link>",id:"-team-workspaces",level:3},{value:"\ud83d\udc46 <Link to='../gitops-templates/intro' target=\"_blank\">Self-Service Templates and Profiles</Link>",id:"-self-service-templates-and-profiles",level:3},{value:"\ud83d\udc96 Health Status and Compliance Dashboards",id:"-health-status-and-compliance-dashboards",level:3},{value:"\ud83e\udded Kubernetes Anywhere",id:"-kubernetes-anywhere",level:3},{value:"\ud83d\udd14 Critical 24/7 Support",id:"-critical-247-support",level:3}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"weave-gitops-enterprise-edition-"},"Weave GitOps Enterprise Edition ",(0,i.kt)(a.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("admonition",{title:"Ready for more GitOps?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"To purchase entitlement to Weave GitOps Enterprise Edition please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:sales@weave.works"},"sales@weave.works"))),(0,i.kt)("p",null,"WGEE provides ops teams with an easy way to assess the\nhealth of multiple clusters in a single place. It shows cluster information such as\nKubernetes version and number of nodes and provides details about the GitOps operations\non those clusters, such as Git repositories and recent commits. Additionally, it\naggregates Prometheus alerts to assist with troubleshooting."),(0,i.kt)("p",null,"If you have already purchased your entitlement, head to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/0.22.0/installation/weave-gitops-enterprise/"},"installation page"),"."),(0,i.kt)("h2",{id:"feature-breakdown"},"Feature breakdown"),(0,i.kt)("p",null,"In addition to the features in the OSS edition, Weave GitOps Enterprise Edition\noffers the following capabilities, taking your delivery from simple CD to IDP:"),(0,i.kt)("h3",{id:"-cluster-fleet-management"},"\u26f5 ",(0,i.kt)(o.Z,{to:"../cluster-management/intro",target:"_blank",mdxType:"Link"},"Cluster Fleet Management")),(0,i.kt)("p",null,"Deploy the same application into many different clusters even across\ncloud and hybrid environments, allowing change deployments across the fleet\nvia Git and Cluster API."),(0,i.kt)("h3",{id:"-trusted-application-delivery"},"\ud83d\udd10 ",(0,i.kt)(o.Z,{to:"../policy/intro",target:"_blank",mdxType:"Link"},"Trusted Application Delivery")),(0,i.kt)("p",null,"Add policy as code to GitOps pipelines and enforce security and compliance,\napplication resilience and coding standards from source to production.\nValidate policy conformance at every step in the software delivery pipeline:\ncommit, build, deploy and run time."),(0,i.kt)("h3",{id:"\ufe0f-progressive-delivery"},"\u23ed\ufe0f ",(0,i.kt)(o.Z,{to:"../guides/delivery",target:"_blank",mdxType:"Link"},"Progressive Delivery")),(0,i.kt)("p",null,"Deploy into production environments safely using canary, blue/green and A/B\nstrategies. Simple single file configuration defines success / rollback SLO\nusing observability metrics from Prometheus, Datadog, New Relic and others."),(0,i.kt)("h3",{id:"\ufe0f-cd-pipelines"},"\u267e\ufe0f ",(0,i.kt)(o.Z,{to:"../pipelines/intro",target:"_blank",mdxType:"Link"},"CD Pipelines")),(0,i.kt)("p",null,"Rollout new software from development to production.\nEnvironment rollouts that work with your existing CI system."),(0,i.kt)("h3",{id:"-team-workspaces"},"\ud83e\uddd1\u200d\ud83c\udfed\ud83d\udc69\u200d\ud83c\udfed ",(0,i.kt)(o.Z,{to:"../workspaces/intro",target:"_blank",mdxType:"Link"},"Team Workspaces")),(0,i.kt)("p",null,"Allow DevOps teams to work seamlessly together with multi-tenancy.\nTotal RBAC control and policy enforcement with integration to enterprise IAM."),(0,i.kt)("h3",{id:"-self-service-templates-and-profiles"},"\ud83d\udc46 ",(0,i.kt)(o.Z,{to:"../gitops-templates/intro",target:"_blank",mdxType:"Link"},"Self-Service Templates and Profiles")),(0,i.kt)("p",null,"Component profiles enable teams to deploy standard services quickly,\nconsistently and reliably. Teams can curate the profiles that are available\nwithin their estate ensuring there is consistency everywhere. Using GitOps\nit's easy to guarantee the latest, secure versions of any component are\ndeployed in all production systems."),(0,i.kt)("h3",{id:"-health-status-and-compliance-dashboards"},"\ud83d\udc96 Health Status and Compliance Dashboards"),(0,i.kt)("p",null,"Gain a single view of the health and state of the cluster and its workloads.\nMonitor deployments and alert on policy violations across apps and clusters."),(0,i.kt)("h3",{id:"-kubernetes-anywhere"},"\ud83e\udded Kubernetes Anywhere"),(0,i.kt)("p",null,"Reduce complexity with GitOps and install across all major target environments\nincluding support for on-premise, edge, hybrid, and multi-cloud Kubernetes clusters"),(0,i.kt)("h3",{id:"-critical-247-support"},"\ud83d\udd14 Critical 24/7 Support"),(0,i.kt)("p",null,"Your business and workloads operate around the clock and so do we.\nOur team operates 24/7 so whenever there\u2019s a problem our experts are\nthere to help. Operate with confidence - we\u2019ve got your back!"))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);