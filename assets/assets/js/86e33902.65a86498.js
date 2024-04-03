"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[47315],{48783:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),l=a(88746);a(52426);const r={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function i(e){let{tiers:t}=e;return n.createElement(l.Z,{title:`This feature is a available on ${t}.`,style:r},t)}},91479:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(48783);const i={title:"CLI",hide_title:!0},o='Template CLI <TierLabel tiers="Enterprise" />',p={unversionedId:"gitops-templates/cli",id:"version-0.37.0/gitops-templates/cli",title:"CLI",description:"The Enterprise gitops CLI tool provides a set of commands to help you manage your templates.",source:"@site/versioned_docs/version-0.37.0/gitops-templates/cli.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/cli",permalink:"/docs/0.37.0/gitops-templates/cli",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.37.0/gitops-templates/cli.mdx",tags:[],version:"0.37.0",frontMatter:{title:"CLI",hide_title:!0},sidebar:"docs",previous:{title:"Example: Template to Create a CAPI Cluster",permalink:"/docs/0.37.0/gitops-templates/create-cluster-example"},next:{title:"Version Information",permalink:"/docs/0.37.0/gitops-templates/versions"}},s={},m=[{value:"Use cases",id:"use-cases",level:2},{value:"Restrictions",id:"restrictions",level:2},{value:"Installation",id:"installation",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Profiles",id:"profiles",level:2},{value:"Supplying values to a profile",id:"supplying-values-to-a-profile",level:3},{value:"Using a config file",id:"using-a-config-file",level:2}],u={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"template-cli-"},"Template CLI ",(0,l.kt)(r.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,l.kt)("p",null,"The Enterprise ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops")," CLI tool provides a set of commands to help you manage your templates."),(0,l.kt)("p",null,"Here we're going to talk about the ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops create template")," command that allows\nyou to render templates locally and airgapped, without a full WGE installation\nin a Kubernetes cluster."),(0,l.kt)("h2",{id:"use-cases"},"Use cases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In CI/CD systems where you want to render a template and then use the raw output in a pipeline"),(0,l.kt)("li",{parentName:"ul"},"For quickly debugging templates")),(0,l.kt)("h2",{id:"restrictions"},"Restrictions"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops create template")," command only works with ",(0,l.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," objects.\nIt does not work with ",(0,l.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," objects. You should be able to migrate any\n",(0,l.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," objects to ",(0,l.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," with some small tweaks."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"GitOpsTemplate or CAPITemplate?"),(0,l.kt)("p",{parentName:"admonition"},"The only difference between ",(0,l.kt)("inlineCode",{parentName:"p"},"CAPITemplate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," is the default\nvalue of these two annotations:"),(0,l.kt)("table",{parentName:"admonition"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Annotation"),(0,l.kt)("th",{parentName:"tr",align:null},"default value for ",(0,l.kt)("inlineCode",{parentName:"th"},"CAPITemplate")),(0,l.kt)("th",{parentName:"tr",align:null},"default value for ",(0,l.kt)("inlineCode",{parentName:"th"},"GitOpsTemplate")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"templates.weave.works/add-common-bases")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"true"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"false"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"templates.weave.works/inject-prune-annotations")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"true"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"false"')))))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"See the Weave Gitops Enterprise ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.37.0/enterprise/getting-started/install-enterprise#7-install-the-cli"},"installation instructions")," for details on how to install the EE ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops")," CLI tool."),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"Using a local ",(0,l.kt)("inlineCode",{parentName:"p"},"GitOpsTemplate")," manifest with required parameters exported in the\nenvironment, the command can render the template to one of the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The current kubecontext directly (default)"),(0,l.kt)("li",{parentName:"ol"},"stdout with ",(0,l.kt)("inlineCode",{parentName:"li"},"--export")),(0,l.kt)("li",{parentName:"ol"},"The local file system with ",(0,l.kt)("inlineCode",{parentName:"li"},"--output-dir"),", this will use the\n",(0,l.kt)("inlineCode",{parentName:"li"},"spec.resourcestemplates[].path")," fields in the template to determine where to\nwrite the rendered files.\nThis is the recommended approach for GitOps as you can then commit the\nrendered files to your repository.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create template \\\n  --template-file capd-template.yaml \\\n  --output-dir ./clusters/ \\\n  --values CLUSTER_NAME=foo\n")),(0,l.kt)("h2",{id:"profiles"},"Profiles"),(0,l.kt)("p",null,"As in the UI you can add profiles to your template. However instead of reading\nthe latest version of a profile and its layers from a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmRepository")," object\nin the cluster, we instead read from your local helm cache."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add weaveworks-charts https://raw.githubusercontent.com/weaveworks/weave-gitops-profile-examples/gh-pages\nhelm repo update\n")),(0,l.kt)("p",null,"This particular helm repo provides a version of the ",(0,l.kt)("inlineCode",{parentName:"p"},"cert-manager")," repo and others."),(0,l.kt)("h3",{id:"supplying-values-to-a-profile"},"Supplying values to a profile"),(0,l.kt)("p",null,"You can supply a ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to a profile using the ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," parameter.\nFor example we can supply ",(0,l.kt)("inlineCode",{parentName:"p"},"cert-manager"),"'s ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'gitops create template \\\n  --template-file capd-template.yaml \\\n  --output-dir ./out \\\n  --values CLUSTER_NAME=foo \\\n  --profiles "name=cert-manager,namespace=foo,version=>0.1,values=cert-manager-values.yaml"\n')),(0,l.kt)("h2",{id:"using-a-config-file"},"Using a config file"),(0,l.kt)("p",null,"Instead of specifying the parameters on the command line you can supply a\nconfig file. For example the above invocation can be replaced like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=config.yaml",title:"config.yaml"},"template-file: capd-capi-template.yaml\noutput-dir: ./out\nvalues:\n  - CLUSTER_NAME=foo\nprofiles:\n  - name=cert-manager,namespace=foo,version=>0.1,values=cert-manager-values.yaml\n")),(0,l.kt)("p",null,"and executed with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create template --config config.yaml\n")))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,f=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);