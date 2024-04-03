"use strict";(self.webpackChunkweave_gitops_docs=self.webpackChunkweave_gitops_docs||[]).push([[81497],{74526:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294),l=a(88746);a(52426);const i={fontSize:16,marginLeft:4,fontVariant:"all-small-caps"};function r(e){let{tiers:t}=e;return n.createElement(l.Z,{title:`This feature is a available on ${t}.`,style:i},t)}},22322:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),l=(a(67294),a(3905)),i=a(74526);const r={title:"CLI",hide_title:!0},o='Template CLI tools <TierLabel tiers="Enterprise" />',s={unversionedId:"gitops-templates/cli",id:"version-0.18.0/gitops-templates/cli",title:"CLI",description:"The enterprise gitops CLI tool provides a set of commands to help you manage your templates.",source:"@site/versioned_docs/version-0.18.0/gitops-templates/cli.mdx",sourceDirName:"gitops-templates",slug:"/gitops-templates/cli",permalink:"/docs/0.18.0/gitops-templates/cli",draft:!1,editUrl:"https://github.com/weaveworks/weave-gitops/edit/main/website/versioned_docs/version-0.18.0/gitops-templates/cli.mdx",tags:[],version:"0.18.0",frontMatter:{title:"CLI",hide_title:!0},sidebar:"docs",previous:{title:"Quickstart templates",permalink:"/docs/0.18.0/gitops-templates/quickstart-templates"},next:{title:"Introduction",permalink:"/docs/0.18.0/gitopssets/intro"}},p={},c=[{value:"The <code>gitops create template</code> command",id:"the-gitops-create-template-command",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"Restrictions",id:"restrictions",level:3},{value:"Installation",id:"installation",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Profiles",id:"profiles",level:3},{value:"Supplying values to a profile",id:"supplying-values-to-a-profile",level:4},{value:"Supplying a config file instead of command line flags",id:"supplying-a-config-file-instead-of-command-line-flags",level:3}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"template-cli-tools-"},"Template CLI tools ",(0,l.kt)(i.Z,{tiers:"Enterprise",mdxType:"TierLabel"})),(0,l.kt)("p",null,"The enterprise ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops")," CLI tool provides a set of commands to help you manage your templates."),(0,l.kt)("p",null,"Here we're going to talk about the ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops create template")," command that allows you to render templates locally and airgapped, without a full WGE installation in a kubernetes cluster."),(0,l.kt)("h2",{id:"the-gitops-create-template-command"},"The ",(0,l.kt)("inlineCode",{parentName:"h2"},"gitops create template")," command"),(0,l.kt)("h3",{id:"use-cases"},"Use cases"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CI/CD systems where you want to render a template and then use the output in a pipeline"),(0,l.kt)("li",{parentName:"ul"},"Quicking debugging templates")),(0,l.kt)("h3",{id:"restrictions"},"Restrictions"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"gitops create template")," command only works with ",(0,l.kt)("inlineCode",{parentName:"li"},"GitOpsTemplate")," objects. It does not work with ",(0,l.kt)("inlineCode",{parentName:"li"},"CAPITemplate")," objects. You should be able to migrate any ",(0,l.kt)("inlineCode",{parentName:"li"},"CAPITemplate")," objects to ",(0,l.kt)("inlineCode",{parentName:"li"},"GitOpsTemplate")," with some small tweaks. See the differences here ",(0,l.kt)("a",{parentName:"li",href:"/docs/0.18.0/gitops-templates/templates#differences-between-capitemplate-and-gitopstemplate"},"CAPITemplate vs GitOpsTemplate"))),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"See the Weave Gitops Enterprise ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.18.0/installation/weave-gitops-enterprise/#7-install-the-cli"},"installation instructions")," for details on how to install the EE ",(0,l.kt)("inlineCode",{parentName:"p"},"gitops")," CLI tool."),(0,l.kt)("h3",{id:"getting-started"},"Getting started"),(0,l.kt)("p",null,"Given a GitOpsTemplate on the local filesystem can supply the required parameters and render the template to either"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The current kubecontext directly (default)"),(0,l.kt)("li",{parentName:"ol"},"stdout with ",(0,l.kt)("inlineCode",{parentName:"li"},"--export")),(0,l.kt)("li",{parentName:"ol"},"The file system with ",(0,l.kt)("inlineCode",{parentName:"li"},"--output-dir"),", this will use the ",(0,l.kt)("inlineCode",{parentName:"li"},"spec.resourcestemplates[].path")," fields in the template to determine where to write the rendered files. This is the recommended approach for GitOps as you can then commit the rendered files to your repository.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create template \\\n  --template-file capd-capi-template.yaml \\\n  --output-dir ./clusters/ \\\n  --values CLUSTER_NAME=foo\n")),(0,l.kt)("h3",{id:"profiles"},"Profiles"),(0,l.kt)("p",null,"As with the UI you can add profiles to your template. However instead of reading the latest version of a profile and its layers from a ",(0,l.kt)("inlineCode",{parentName:"p"},"HelmRepository")," object in the cluster, we instead read from your local helm cache."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add weaveworks-charts https://raw.githubusercontent.com/weaveworks/weave-gitops-profile-examples/gh-pages\nhelm repo update\n")),(0,l.kt)("p",null,"This particular helm repo provides a version of the cert-manager repo and others."),(0,l.kt)("h4",{id:"supplying-values-to-a-profile"},"Supplying values to a profile"),(0,l.kt)("p",null,"You can supply a ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file to a profile using the ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," parameter. For example we can supply cert-managers values.yaml with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'gitops create template \\\n  --template-file capd-capi-template.yaml \\\n  --output-dir ./out \\\n  --values CLUSTER_NAME=foo \\\n  --profiles "name=cert-manager,namespace=foo,version=>0.1,values=cert-manager-values.yaml"\n')),(0,l.kt)("h3",{id:"supplying-a-config-file-instead-of-command-line-flags"},"Supplying a config file instead of command line flags"),(0,l.kt)("p",null,"Instead of specifying the parameters on the command line you can supply a config file. For example the above involation can be replaced with a config file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title=config.yaml",title:"config.yaml"},"template-file: capd-capi-template.yaml\noutput-dir: ./out\nvalues:\n  - CLUSTER_NAME=foo\nprofiles:\n  - name=cert-manager,namespace=foo,version=>0.1,values=cert-manager-values.yaml\n")),(0,l.kt)("p",null,"and invoked with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"gitops create template --config config.yaml\n")))}u.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);