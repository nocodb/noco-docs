"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[545],{6559:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=o(74848),l=o(28453);const s={title:"GCP Cloud Run",description:"Installing NocoDB on Google Cloud Run",tags:["Open Source"],keywords:["NocoDB installation","NocoDB Google Cloud run installation","NocoDB prerequisites"]},i="Deploying NocoDB on GCP Cloud Run",r={id:"getting-started/self-hosted/installation/gcp-cloud-run",title:"GCP Cloud Run",description:"Installing NocoDB on Google Cloud Run",source:"@site/docs/020.getting-started/050.self-hosted/010.installation/080.gcp-cloud-run.md",sourceDirName:"020.getting-started/050.self-hosted/010.installation",slug:"/getting-started/self-hosted/installation/gcp-cloud-run",permalink:"/getting-started/self-hosted/installation/gcp-cloud-run",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/010.installation/080.gcp-cloud-run.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:80,frontMatter:{title:"GCP Cloud Run",description:"Installing NocoDB on Google Cloud Run",tags:["Open Source"],keywords:["NocoDB installation","NocoDB Google Cloud run installation","NocoDB prerequisites"]},sidebar:"tutorialSidebar",previous:{title:"AWS ECS (Fargate)",permalink:"/getting-started/self-hosted/installation/aws-ecs"},next:{title:"DigitalOcean",permalink:"/getting-started/self-hosted/installation/digital-ocean"}},c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Important Notes",id:"important-notes",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deploying-nocodb-on-gcp-cloud-run",children:"Deploying NocoDB on GCP Cloud Run"}),"\n",(0,t.jsx)(n.p,{children:"This guide will help you deploy NocoDB on Google Cloud Platform using Cloud Run."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Google Cloud SDK installed and configured"}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pull the NocoDB Docker image:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker pull nocodb/nocodb:latest\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Tag the image for Google Container Registry (GCR):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker tag nocodb/nocodb:latest gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Push the image to GCR:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker push gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Deploy NocoDB on Cloud Run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"gcloud run deploy --image=gcr.io/<MY_PROJECT_ID>/nocodb/nocodb:latest \\\n          --region=us-central1 \\\n          --allow-unauthenticated \\\n          --platform=managed \n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cloud Run only supports images from Google Container Registry (GCR) or Artifact registry. Hence we pull the image from Docker Hub and push it to GCR."}),"\n",(0,t.jsx)(n.li,{children:"Ensure that your GCP project has the necessary APIs enabled (Cloud Run, Container Registry)."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"--allow-unauthenticated"})," flag is used to allow unauthenticated access to the service. You can remove this flag if you want to restrict access."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>r});var t=o(96540);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);