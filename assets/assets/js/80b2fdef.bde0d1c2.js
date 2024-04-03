"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[91692],{61881:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={title:"Feedback and Telemetry",hide_title:!0},i=void 0,s={type:"mdx",permalink:"/feedback-and-telemetry/",source:"@site/src/pages/feedback-and-telemetry/index.md",title:"Feedback and Telemetry",description:"Feedback",frontMatter:{title:"Feedback and Telemetry",hide_title:!0}},l=[{value:"Feedback",id:"feedback",level:2},{value:"Anonymous Aggregate User Behavior Analytics",id:"anonymous-aggregate-user-behavior-analytics",level:2},{value:"Why are we collecting this data?",id:"why-are-we-collecting-this-data",level:3},{value:"For example:",id:"for-example",level:4},{value:"How long is the collected data stored?",id:"how-long-is-the-collected-data-stored",level:3},{value:"What are we collecting?",id:"what-are-we-collecting",level:3},{value:"When is the data collected and where is it sent?",id:"when-is-the-data-collected-and-where-is-it-sent",level:3},{value:"How?",id:"how",level:3},{value:"Opting out",id:"opting-out",level:3},{value:"CLI",id:"cli",level:4},{value:"Dashboard",id:"dashboard",level:4}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)("p",null,"We \u2764\ufe0f your comments and suggestions as we look to make successfully adopting a cloud-native approach, to application deployment on Kubernetes with GitOps, easier and easier. There are a number of ways you can reach out:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Raise an ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/weaveworks/weave-gitops/issues"},"issue")),(0,o.kt)("li",{parentName:"ul"},"Invite yourself to the ",(0,o.kt)("a",{href:"https://slack.weave.works/",target:"_blank"},"Weave Users Slack"),"."),(0,o.kt)("li",{parentName:"ul"},"Chat to us on the ",(0,o.kt)("a",{parentName:"li",href:"https://weave-community.slack.com/messages/weave-gitops/"},"#weave-gitops")," slack channel."),(0,o.kt)("li",{parentName:"ul"},"Set up time with one of our team: ",(0,o.kt)("a",{parentName:"li",href:"https://calendly.com/james-weave-works/product-interview"},"James")," - Product Director (US - East Coast)"),(0,o.kt)("li",{parentName:"ul"},"Come along to one of our ",(0,o.kt)("a",{parentName:"li",href:"https://www.meetup.com/Weave-User-Group/"},"events"))),(0,o.kt)("h2",{id:"anonymous-aggregate-user-behavior-analytics"},"Anonymous Aggregate User Behavior Analytics"),(0,o.kt)("p",null,"Weaveworks is utilizing ",(0,o.kt)("a",{parentName:"p",href:"https://www.pendo.io/"},"Pendo"),", a product-analytics app,  to gather anonymous user behavior analytics for both Weave GitOps and Weave GitOps Enterprise. We use this data so we can understand what you love about Weave GitOps, and areas we can improve."),(0,o.kt)("p",null,"Weave GitOps OSS users will be notified when you create the dashboard for the first time via ",(0,o.kt)("strong",{parentName:"p"},"gitops create dashboard")," or when you use ",(0,o.kt)("strong",{parentName:"p"},"gitops run")," for the first time and decide to install the dashboard via that functionality. Analytics will not be enabled until ",(0,o.kt)("u",null,"after")," this notification so that you can opt out before sending analytics data."),(0,o.kt)("p",null,"For Weave GitOps Enterprise users, this functionality is turned on by default. Further below we go into more detail about how you can control this functionality."),(0,o.kt)("h3",{id:"why-are-we-collecting-this-data"},"Why are we collecting this data?"),(0,o.kt)("p",null,"We want to ensure that we are designing the best features, addressing the most pressing bugs, and prioritizing our roadmap appropriately for our users. Collecting analytics on our users\u2019 behaviors gives us valuable insights and allows us to conduct analyses on user behavior within the product. This is important for us so we can make informed decisions- based on how, where and when our users use Weave GitOps - and prioritize what is most important to users like you."),(0,o.kt)("h4",{id:"for-example"},"For example:"),(0,o.kt)("p",null,"We\u2019d like to understand the usage of the graph and dependency tabs within the dashboard. If users are utilizing this feature, we would like to understand the value and how we can improve that feature. However, if users aren\u2019t using it, we can conduct research to understand why and either fix it, or come to the conclusion that it really doesn\u2019t serve any utility and focus our efforts on more valuable features."),(0,o.kt)("h3",{id:"how-long-is-the-collected-data-stored"},"How long is the collected data stored?"),(0,o.kt)("p",null,"Weave GitOps\u2019s anonymous user and event data has a 24 month retention policy. The default value for data retention in Pendo is 7 years. For more information on Pendo\u2019s data storage policies, ",(0,o.kt)("a",{parentName:"p",href:"https://support.pendo.io/hc/en-us/articles/360051268732-Subscription-Data-Retention-Limit"},"click here"),"."),(0,o.kt)("h3",{id:"what-are-we-collecting"},"What are we collecting?"),(0,o.kt)("p",null,"Weave GitOps gathers data on how the CLI and Web UI are used. There is no way for us or Pendo to connect our IDs to individual users or sites."),(0,o.kt)("p",null,"For the CLI, we gather usage data  on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The specific sub command itself - e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"gitops get bcrypt-hash")),(0,o.kt)("li",{parentName:"ul"},"The name of the flags used, without the value (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"--password"),", but not the value)"),(0,o.kt)("li",{parentName:"ul"},"A random string used as an anonymous user ID, stored on your machine"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note: ",(0,o.kt)("u",null,"We have no way of tracking individual users."))," We can only distinguish between user counts and event counts"))),(0,o.kt)("li",{parentName:"ul"},"Whether the user has installed the Enterprise or open-source version of the CLI"),(0,o.kt)("li",{parentName:"ul"},"A value of ",(0,o.kt)("inlineCode",{parentName:"li"},"app=cli"),", to know it\u2019s a CLI metric")),(0,o.kt)("p",null,"For the Web UI, we gather usage data  on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your browser, version, and user agent"),(0,o.kt)("li",{parentName:"ul"},"The domain name of your server"),(0,o.kt)("li",{parentName:"ul"},"Every page interaction, and the time each page is left open"),(0,o.kt)("li",{parentName:"ul"},"All button interactions"),(0,o.kt)("li",{parentName:"ul"},"The complete URL of every page, including which resource you look at, and searches done"),(0,o.kt)("li",{parentName:"ul"},"We can push new content into your browser, to add questions, guides, or more data points"),(0,o.kt)("li",{parentName:"ul"},"We send a unique user hash, based on your user name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note: ",(0,o.kt)("u",null,"We are not able to cross-reference unique users"))," between here and anywhere else - not even your command line - but it gives us the ability to distinguish between user counts and event counts."))),(0,o.kt)("li",{parentName:"ul"},"Finally, we include a persistent ID representing your cluster, based on a hash of your ",(0,o.kt)("inlineCode",{parentName:"li"},"kube-system")," namespace uuid"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Note: ",(0,o.kt)("u",null,"There is no way for us to track individual clusters"))," using this, but it gives us the ability to distinguish between cluster counts and event counts.")))),(0,o.kt)("h3",{id:"when-is-the-data-collected-and-where-is-it-sent"},"When is the data collected and where is it sent?"),(0,o.kt)("p",null,"Weave GitOps CLI analytics are sent at startup. The dashboard analytics are sent through its execution. Both CLI and Dashboard analytics are sent to Pendo over HTTPS."),(0,o.kt)("h3",{id:"how"},"How?"),(0,o.kt)("p",null,"The CLI code is viewable in pkg/analytics. It will ignore any errors, e.g. if you don\u2019t have any network connection."),(0,o.kt)("p",null,"The dashboard setup code is viewable in ui/components/Pendo.tsx - this will fetch a 3rd party javascript from Pendo\u2019s servers."),(0,o.kt)("h3",{id:"opting-out"},"Opting out"),(0,o.kt)("p",null,"All the data collected, analytics, and feedback are for the sole purpose of creating better product experience for you and your teams. We would really appreciate it if you left the analytics on as it helps us prioritize which features to build next and what features to improve. However, if you do want to opt out of Weave GitOps\u2019s analytics you can opt out of CLI and/or Dashboard analytics."),(0,o.kt)("h4",{id:"cli"},"CLI"),(0,o.kt)("p",null,"We have created a command to make it easy to turn analytics on or off for the CLI."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To disable analytics:"),"\n",(0,o.kt)("em",{parentName:"p"},"gitops set config analytics false")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To enable analytics:"),"\n",(0,o.kt)("em",{parentName:"p"},"gitops set config analytics true")),(0,o.kt)("h4",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"You need to update your helm release to remove ",(0,o.kt)("inlineCode",{parentName:"p"},"WEAVE_GITOPS_FEATURE_TELEMETRY")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"envVars")," value."))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);