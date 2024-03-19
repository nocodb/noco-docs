"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[1616],{92642:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(74848),o=t(28453);const a={title:"Dashboard",description:"Accessing the Dashboard!"},i=void 0,r={id:"setup-and-usages/dashboard",title:"Dashboard",description:"Accessing the Dashboard!",source:"@site/versioned_docs/version-0.109.7/030.setup-and-usages/010.dashboard.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/dashboard",permalink:"/0.109.7/setup-and-usages/dashboard",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/versioned_docs/version-0.109.7/030.setup-and-usages/010.dashboard.md",tags:[],version:"0.109.7",sidebarPosition:10,frontMatter:{title:"Dashboard",description:"Accessing the Dashboard!"},sidebar:"tutorialSidebar",previous:{title:"Product",permalink:"/0.109.7/category/product"},next:{title:"Table Operations",permalink:"/0.109.7/setup-and-usages/table-operations"}},c={},d=[{value:"Setup Your First Super Admin",id:"setup-your-first-super-admin",level:2},{value:"Initialize Your First Project",id:"initialize-your-first-project",level:2},{value:"Connecting to External Database",id:"connecting-to-external-database",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"setup-your-first-super-admin",children:"Setup Your First Super Admin"}),"\n",(0,s.jsxs)(n.p,{children:["Once you have started NocoDB, you can visit the dashboard via ",(0,s.jsx)(n.code,{children:"example.com"}),". You will be redirected to ",(0,s.jsx)(n.code,{children:"example.com/#/signup"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Enter your work email and your password."}),"\n",(0,s.jsx)("img",{width:"1492",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194793294-fa027496-c3c3-44eb-a613-2ba3e3bd26c1.png"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Your password has at least 8 letters. No other constraints on case, numbers or special characters."})}),"\n",(0,s.jsx)(n.h2,{id:"initialize-your-first-project",children:"Initialize Your First Project"}),"\n",(0,s.jsxs)(n.p,{children:["Once you have logged into NocoDB, you should see ",(0,s.jsx)(n.code,{children:"My Projects"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/209932699-743ffea2-986f-443f-8198-f56b597de706.png",alt:"Screenshot 2022-12-29 at 2 54 43 PM"})}),"\n",(0,s.jsxs)(n.p,{children:["To create a new project, you can click ",(0,s.jsx)(n.code,{children:"New Project"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You need to specify the project name. The data will be stored in ",(0,s.jsx)(n.code,{children:"NC_DB"}),". If it is not specified, a local SQLite will be created and used."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"NC_DB is an environment variable used to store the meta data in the given database."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/209932936-8fe7334c-1a94-4073-ba19-478efb620808.png",alt:"Screenshot 2022-12-29 at 2 54 57 PM"})}),"\n",(0,s.jsx)(n.h3,{id:"connecting-to-external-database",children:"Connecting to External Database"}),"\n",(0,s.jsxs)(n.p,{children:["Click on three-dot menu adjacent to ",(0,s.jsx)(n.code,{children:"BASES"}),". Pick required database option from the menu ",(0,s.jsx)(n.code,{children:"Connect to new datasource"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"If you are running NocoDB on Docker and your local DB is running on your host machine, your Host Address would be host.docker.internal instead of localhost."})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/86527202/209933294-9327ff16-21db-4aca-bf16-8cea8a1eb415.png",alt:"Screenshot 2022-12-29 at 2 55 39 PM"})}),"\n",(0,s.jsxs)(n.p,{children:["Above menu is also accessible from ",(0,s.jsx)(n.code,{children:"Team & Settings"})," > ",(0,s.jsx)(n.code,{children:"Data Sources"}),". Click on ",(0,s.jsx)(n.code,{children:"New"})," button to add existing database."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/219841162-6456c5cf-fd26-4a88-8de6-e8742c043607.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"You need to specify the project name, API type, and other database parameters."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/35857179/219841283-1a42f9f6-4677-4e25-8ca9-a060753d1e1e.png",alt:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Currently it supports MySQL, Postgres, MSSQL and SQLite."}),"\n",(0,s.jsx)(n.p,{children:"You can also configure associated SSL & advanced parameters."}),"\n",(0,s.jsx)("img",{width:"689",alt:"image",src:"https://user-images.githubusercontent.com/35857179/189047293-05176c44-e162-495a-a7cd-e02377c1f42c.png"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:'You can click Edit Connection JSON and modify SSL settings in "ssl".'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "client": "pg",\n  "connection": {\n    "host": "<YOUR_HOST>",\n    "port": "5432",\n    "user": "<YOUR_DB_USER>",\n    "password": "<YOUR_DB_PASSWORD>",\n    "database": "<YOUR_DB_NAME>",\n    "ssl": {\n      "require": true,\n      "rejectUnauthorized": false,\n      "sslMode": "no-verify"\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:'You can click Edit Connection JSON and specify the schema you want to use in "searchPath".'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "client": "pg",\n  "connection": {\n    ...\n  },\n  "searchPath": [ "<YOUR_TARGET_SCHEMA>" ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Click ",(0,s.jsx)(n.code,{children:"Test Database Connection"})," to see if the connection can be established or not. NocoDB creates a new ",(0,s.jsx)(n.strong,{children:"empty database"})," with specified parameters if the database doesn't exist."]}),"\n",(0,s.jsx)("img",{width:"505",alt:"image",src:"https://user-images.githubusercontent.com/35857179/194793513-feabf14f-1f62-4896-b06d-88548251511a.png"})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var s=t(96540);const o={},a=s.createContext(o);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);