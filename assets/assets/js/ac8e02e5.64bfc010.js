"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[77726],{92365:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),i=a(88746);a(52426);const o={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function l(e){let{tiers:n}=e;return t.createElement(i.Z,{title:`This feature is a available on ${n}.`,style:o},n)}},42846:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=a(87462),i=(a(67294),a(3905)),o=a(92365);const l={title:"PolicyConfig",hide_title:!0},r='PolicyConfig <TierLabel tiers="Enterprise" />',p={unversionedId:"policy/policy-configuration",id:"version-0.32.0/policy/policy-configuration",title:"PolicyConfig",description:"Goal",source:"@site/versioned_docs/version-0.32.0/policy/policy-configuration.mdx",sourceDirName:"policy",slug:"/policy/policy-configuration",permalink:"/docs/0.32.0/policy/policy-configuration",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.32.0/policy/policy-configuration.mdx",tags:[],version:"0.32.0",frontMatter:{title:"PolicyConfig",hide_title:!0},sidebar:"docs",previous:{title:"PolicySet",permalink:"/docs/0.32.0/policy/policy-set"},next:{title:"Profile Releases",permalink:"/docs/0.32.0/policy/releases"}},m={},c=[{value:"Goal",id:"goal",level:2},{value:"Schema",id:"schema",level:2},{value:"Overlapping Targets",id:"overlapping-targets",level:2},{value:"Example",id:"example",level:3}],s={toc:c};function u(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"policyconfig-"},"PolicyConfig ",(0,i.kt)(o.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,i.kt)("h2",{id:"goal"},"Goal"),(0,i.kt)("p",null,"Users sometimes need to enforce the same policy(s) with different configurations (parameters) for different targets (workspaces, namespaces, applications, or resources).\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"PolicyConfig")," CRD allows us to do that without duplicating policies by overriding policy parameters of multiple policies for a specific target."),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"The PolicyConfig CRD consists of two sections 1) ",(0,i.kt)("inlineCode",{parentName:"p"},"match")," used to specify the target of this PolicyConfig and 2) ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," used to specify the policy parameters that will override the orginal policy parameters."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to see a PolicyConfig example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pac.weave.works/v2beta2\nkind: PolicyConfig      # policy config resource kind\nmetadata:\n  name: my-config       # policy config name\nspec:\n  match:                # matches (targets of the policy config)\n    workspaces:         # add one or more name workspaces\n    - team-a\n    - team-b\n  config:               # config for policies [one or more]\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 3\n"))),(0,i.kt)("p",null,"Each PolicyConfig CR can target either workspaces, namespaces, applications or resources. Targeting the same target explicitly in multiple PolicyConfigs is not allowed, ie: you can't use the same namespace in several PolicyConfigs which target namespaces."),(0,i.kt)("p",null,"To target workspaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  match:\n    workspaces:\n    - team-a\n    - team-b\n")),(0,i.kt)("p",null,"To target namespaces:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  match:\n    namespaces:\n    - dev\n    - prod\n")),(0,i.kt)("p",null,"To target applications:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  match:\n    apps:            # add one or more apps [HelmRelease, Kustomization]\n    - kind: HelmRelease\n      name: my-app            # app name\n      namespace: flux-system  # app namespace [if empty will match in any namespace]\n")),(0,i.kt)("p",null,"To target resources:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  match:\n    resources:       # add one or more resources [Deployment, ReplicaSet, ..]\n    - kind: Deployment\n      name: my-deployment     # resource name\n      namespace: default      # resource namespace [if empty will match in any namespace]\n")),(0,i.kt)("p",null,"Each PolicyConfig can override the parameters of one or more policies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  config:               # config for policies [one or more]\n    weave.policies.containers-minimum-replica-count: # the id of the policy\n      parameters:\n        replica_count: 3\n        owner: owner-4\n    weave.policies.containers-running-in-privileged-mode:\n      parameters:\n        privilege: true\n")),(0,i.kt)("h2",{id:"overlapping-targets"},"Overlapping Targets"),(0,i.kt)("p",null,"While it's not possible to create PolicyConfigs that explicitly target the same targets, it can happen implicitly ex: by targeting a namespace in a PolicyConfig and targeting an application that exists in this namespace in another.\nWhenever targets overlap, the narrower the scope of the PolicyConfig, the more precedence it has. Accordingly in the previous example, the configuration of the PolicyConfig targeting the application will have precedence over the PolicyConfig targeting the namespace."),(0,i.kt)("p",null,"Those are the possible targets from lowest to highest precendence:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PolicyConfig which targets a workspace."),(0,i.kt)("li",{parentName:"ul"},"PolicyConfig which targets a namespace."),(0,i.kt)("li",{parentName:"ul"},"PolicyConfig which targets an application in all namespaces."),(0,i.kt)("li",{parentName:"ul"},"PolicyConfig which targets an application in a certain namespace."),(0,i.kt)("li",{parentName:"ul"},"PolicyConfig which targets a kubernetes resource in all namespaces."),(0,i.kt)("li",{parentName:"ul"},"PolicyConfig which targets a kubernetes resource in a specific namespace.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All configs are applied from low priority to high priority while taking into consideration the common parameters between configs."),(0,i.kt)("li",{parentName:"ul"},"Each config only affects the parameters defined in it.")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"We have a Kustomization application ",(0,i.kt)("inlineCode",{parentName:"p"},"app-a")," and deployment ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-1")," which is part of this application."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Expand to see manifests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: pac.weave.works/v2beta2\nkind: PolicyConfig\nmetadata:\n  name: my-config-1\nspec:\n  match:\n    namespaces:\n    - flux-system\n  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 2\n        owner: owner-1\n---\napiVersion: pac.weave.works/v2beta2\nkind: PolicyConfig\nmetadata:\n  name: my-config-2\nspec:\n  match:\n    apps:\n    - kind: Kustomization\n      name: app-a\n  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 3\n---\napiVersion: pac.weave.works/v2beta2\nkind: PolicyConfig\nmetadata:\n  name: my-config-3\nspec:\n  match:\n    apps:\n    - kind: Kustomization\n      name: app-a\n      namespace: flux-system\n  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 4\n---\napiVersion: pac.weave.works/v2beta2\nkind: PolicyConfig\nmetadata:\n  name: my-config-4\nspec:\n  match:\n    resources:\n    - kind: Deployment\n      name: deployment-1\n  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 5\n        owner: owner-4\n---\n\napiVersion: pac.weave.works/v2beta2\nkind: PolicyConfig\nmetadata:\n  name: my-config-5\nspec:\n  match:\n    resources:\n    - kind: Deployment\n      name: deployment-1\n      namespace: flux-system\n  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 6\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example when you apply the 5 configurations"),"..."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"app-a")," will be affected by ",(0,i.kt)("inlineCode",{parentName:"p"},"my-config-5"),". It will be applied on the policies defined in it, which will affect deployment ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-1")," in namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"flux-system")," as it matches the kind, name and namespace."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Deploying ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-1")," in another namespace other than ",(0,i.kt)("inlineCode",{parentName:"p"},"flux-system")," won't be affected by this configuration")),(0,i.kt)("p",{parentName:"li"},"Final config values will be as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 6 # from my-config-5\n        owner: owner-4   # from my-config-4\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Deployment ",(0,i.kt)("inlineCode",{parentName:"em"},"deployment-1")," in namespace ",(0,i.kt)("inlineCode",{parentName:"em"},"flux-system"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"replica_count")," must\nbe ",(0,i.kt)("inlineCode",{parentName:"em"},">= 6"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Also it will be affected by ",(0,i.kt)("inlineCode",{parentName:"em"},"my-config-4")," for ",(0,i.kt)("inlineCode",{parentName:"em"},"owner")," configuration\nparameter ",(0,i.kt)("inlineCode",{parentName:"em"},"owner: owner-4")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example when you apply ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-1"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-2"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-3")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-4"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"my-config-4")," will be applied on the policies defined in it which will affect deployment ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment-1")," in all namespaces as it matches the kind and name only."),(0,i.kt)("p",{parentName:"li"},"Final config values will be as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 5  # from my-config-4\n        owner: owner-4    # from my-config-4\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Deployment ",(0,i.kt)("inlineCode",{parentName:"em"},"deployment-1")," in all namespaces ",(0,i.kt)("inlineCode",{parentName:"em"},"replica_count")," must be ",(0,i.kt)("inlineCode",{parentName:"em"},">= 5"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Also it will be affected by ",(0,i.kt)("inlineCode",{parentName:"em"},"my-config-4")," for ",(0,i.kt)("inlineCode",{parentName:"em"},"owner")," configuration\nparameter ",(0,i.kt)("inlineCode",{parentName:"em"},"owner: owner-4")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the previous example when you apply ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-1"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-2")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-3"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"my-config-3")," will be applied on the policies defined in it which will affect application ",(0,i.kt)("inlineCode",{parentName:"p"},"app-a")," and all the resources in it in namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"flux-system")," as it matches the kind, name and namespace."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Deploying ",(0,i.kt)("inlineCode",{parentName:"p"},"app-a")," in another namespace other than ",(0,i.kt)("inlineCode",{parentName:"p"},"flux-system")," won't be affected by this configuration")),(0,i.kt)("p",{parentName:"li"},"Final config values will be the follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 4    # from my-config-3\n        owner: owner-1      # from my-config-1\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Application ",(0,i.kt)("inlineCode",{parentName:"em"},"app-a")," and all the resources in it in namespaces\n",(0,i.kt)("inlineCode",{parentName:"em"},"flux-system"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"replica_count")," must be ",(0,i.kt)("inlineCode",{parentName:"em"},">= 4"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Also it will be affected by ",(0,i.kt)("inlineCode",{parentName:"em"},"my-config-1")," for ",(0,i.kt)("inlineCode",{parentName:"em"},"owner")," configuration\nparameter ",(0,i.kt)("inlineCode",{parentName:"em"},"owner: owner-1")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example when you apply ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-1")," and ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-2"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"my-config-2")," will be applied on the policies defined in it which will affect application ",(0,i.kt)("inlineCode",{parentName:"p"},"app-a")," and all the resources in it in all namespaces as it matches the kind and name only."),(0,i.kt)("p",{parentName:"li"},"Final config values will be as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 3   # from my-config-2\n        owner: owner-1     # from my-config-1\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Application ",(0,i.kt)("inlineCode",{parentName:"em"},"app-a")," and all the resources in all namespaces,\n",(0,i.kt)("inlineCode",{parentName:"em"},"replica_count")," must be ",(0,i.kt)("inlineCode",{parentName:"em"},">= 3"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Also it will be affected by ",(0,i.kt)("inlineCode",{parentName:"em"},"my-config-1")," for ",(0,i.kt)("inlineCode",{parentName:"em"},"owner")," configuration\nparameter ",(0,i.kt)("inlineCode",{parentName:"em"},"owner: owner-1")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"In the above example when you apply ",(0,i.kt)("inlineCode",{parentName:"strong"},"my-config-1"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"my-config-1")," will be applied on the policies defined in it. which will affect the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"flux-system")," with all applications and resources in it as it matches by namespace only."),(0,i.kt)("p",{parentName:"li"},"Final config values will be as follows:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  config:\n    weave.policies.containers-minimum-replica-count:\n      parameters:\n        replica_count: 2  # from my-config-1\n        owner: owner-1    # from my-config-1\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Any application or resource in namespace ",(0,i.kt)("inlineCode",{parentName:"em"},"flux-system"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"replica_count")," must\nbe ",(0,i.kt)("inlineCode",{parentName:"em"},">= 2"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Also it will be affected by ",(0,i.kt)("inlineCode",{parentName:"em"},"my-config-1")," for ",(0,i.kt)("inlineCode",{parentName:"em"},"owner")," configuration\nparameter ",(0,i.kt)("inlineCode",{parentName:"em"},"owner: owner-1")))))))}u.isMDXComponent=!0},3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),m=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=m(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),s=m(a),f=i,d=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return a?t.createElement(d,l(l({ref:n},c),{},{components:a})):t.createElement(d,l({ref:n},c))}));function d(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=f;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[s]="string"==typeof e?e:i,l[1]=r;for(var m=2;m<o;m++)l[m]=a[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);