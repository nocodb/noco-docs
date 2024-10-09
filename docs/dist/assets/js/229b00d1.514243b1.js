"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[8427],{9591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>r});var i=n(74848),s=n(28453);const a={title:"DigitalOcean",description:"Installing NocoDB on Digital Ocean",tags:["Open Source"],keywords:["NocoDB installation","NocoDB Digital Ocean installation","NocoDB prerequisites"]},o="Deploying NocoDB as a DigitalOcean App",c={id:"getting-started/self-hosted/installation/digital-ocean",title:"DigitalOcean",description:"Installing NocoDB on Digital Ocean",source:"@site/docs/020.getting-started/050.self-hosted/010.installation/090.digital-ocean.md",sourceDirName:"020.getting-started/050.self-hosted/010.installation",slug:"/getting-started/self-hosted/installation/digital-ocean",permalink:"/getting-started/self-hosted/installation/digital-ocean",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/020.getting-started/050.self-hosted/010.installation/090.digital-ocean.md",tags:[{label:"Open Source",permalink:"/tags/open-source"}],version:"current",sidebarPosition:90,frontMatter:{title:"DigitalOcean",description:"Installing NocoDB on Digital Ocean",tags:["Open Source"],keywords:["NocoDB installation","NocoDB Digital Ocean installation","NocoDB prerequisites"]},sidebar:"tutorialSidebar",previous:{title:"GCP Cloud Run",permalink:"/getting-started/self-hosted/installation/gcp-cloud-run"},next:{title:"Other Installation Methods",permalink:"/getting-started/self-hosted/installation/other-installations"}},l={},r=[{value:"Deployment Steps",id:"deployment-steps",level:2},{value:"Important Notes",id:"important-notes",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"deploying-nocodb-as-a-digitalocean-app",children:"Deploying NocoDB as a DigitalOcean App"}),"\n",(0,i.jsx)(t.p,{children:"Follow these steps to deploy NocoDB on DigitalOcean using their App Platform."}),"\n",(0,i.jsx)(t.h2,{id:"deployment-steps",children:"Deployment Steps"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'On the DigitalOcean homepage, click on the Create icon and select "Apps (Deploy your code)".'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://user-images.githubusercontent.com/86527202/154790558-f8fe5580-5a58-412c-9c2e-145587712bf2.png",children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/154790558-f8fe5580-5a58-412c-9c2e-145587712bf2.png",alt:"DigitalOcean Create App"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Choose "Docker Hub" as the source.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://user-images.githubusercontent.com/86527202/154790563-b5b6d5b4-0bdc-4718-8cea-0a7ee52f283b.png",children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/154790563-b5b6d5b4-0bdc-4718-8cea-0a7ee52f283b.png",alt:"DigitalOcean Docker Hub"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Set the source repository as nocodb/nocodb. You can optionally specify a release tag if you want a specific NocoDB version."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://user-images.githubusercontent.com/86527202/154790564-1dcb5e33-3a57-471a-a44c-835a410a0cb7.png",children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/154790564-1dcb5e33-3a57-471a-a44c-835a410a0cb7.png",alt:"DigitalOcean Docker Hub"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Configure any additional settings as needed."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://user-images.githubusercontent.com/86527202/154790565-c0234b2e-ad50-4042-90b6-4f8798f1d585.png",children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/154790565-c0234b2e-ad50-4042-90b6-4f8798f1d585.png",alt:"DigitalOcean Docker Hub"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Name your web service and select the nearest region for cloud hosting."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://user-images.githubusercontent.com/86527202/154790567-a6e65e4e-9aa0-4edb-998e-da8803ad6e23.png",children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/154790567-a6e65e4e-9aa0-4edb-998e-da8803ad6e23.png",alt:"DigitalOcean Docker Hub"})})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Choose your preferred hosting plan and click on "Launch Basic App".'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://user-images.githubusercontent.com/86527202/154790570-62044713-5cca-4d06-82ec-f3cc257218a1.png",children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/86527202/154790570-62044713-5cca-4d06-82ec-f3cc257218a1.png",alt:"DigitalOcean Docker Hub"})})}),"\n",(0,i.jsxs)(t.p,{children:["Your application will be built, and the URL will be live shortly. The URL will look something like ",(0,i.jsx)(t.a,{href:"https://your-app-name.ondigitalocean.app/",children:"https://your-app-name.ondigitalocean.app/"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Ensure you configure environment variables for database connections if needed."}),"\n",(0,i.jsx)(t.li,{children:"Set up persistent storage for your NocoDB data."}),"\n",(0,i.jsx)(t.li,{children:"You can scale your app as needed using DigitalOcean's App Platform."}),"\n",(0,i.jsx)(t.li,{children:"Consider enabling automatic deployments for easier updates."}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);