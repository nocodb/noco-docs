"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[7951],{69686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>n,toc:()=>d});var i=a(74848),l=a(28453);const r={title:"Create table via import",description:"Learn how to create a table in NocoDB via import from CSV, Excel or JSON.",tags:["Tables","Import","CSV","Excel","JSON"],keywords:["NocoDB table","create table","import table","import csv","import excel","import json"]},s=void 0,n={id:"tables/create-table-via-import",title:"Create table via import",description:"Learn how to create a table in NocoDB via import from CSV, Excel or JSON.",source:"@site/docs/050.tables/030.create-table-via-import.md",sourceDirName:"050.tables",slug:"/tables/create-table-via-import",permalink:"/tables/create-table-via-import",draft:!1,unlisted:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/050.tables/030.create-table-via-import.md",tags:[{label:"Tables",permalink:"/tags/tables"},{label:"Import",permalink:"/tags/import"},{label:"CSV",permalink:"/tags/csv"},{label:"Excel",permalink:"/tags/excel"},{label:"JSON",permalink:"/tags/json"}],version:"current",sidebarPosition:30,frontMatter:{title:"Create table via import",description:"Learn how to create a table in NocoDB via import from CSV, Excel or JSON.",tags:["Tables","Import","CSV","Excel","JSON"],keywords:["NocoDB table","create table","import table","import csv","import excel","import json"]},sidebar:"tutorialSidebar",previous:{title:"Create empty table",permalink:"/tables/create-table"},next:{title:"Import data into an existing table",permalink:"/tables/import-data-into-existing-table"}},o={},d=[{value:"Import table from CSV / Excel / JSON",id:"import-table-from-csv--excel--json",level:2},{value:"Accessing import modal",id:"accessing-import-modal",level:3},{value:"1. From the base dashboard",id:"1-from-the-base-dashboard",level:4},{value:"2. From the base context menu",id:"2-from-the-base-context-menu",level:4},{value:"Importing file",id:"importing-file",level:3},{value:"Advanced Settings",id:"advanced-settings",level:3},{value:"Related articles",id:"related-articles",level:2}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"import-table-from-csv--excel--json",children:"Import table from CSV / Excel / JSON"}),"\n",(0,i.jsx)(t.h3,{id:"accessing-import-modal",children:"Accessing import modal"}),"\n",(0,i.jsx)(t.p,{children:"There are two ways to access import modal:"}),"\n",(0,i.jsx)(t.h4,{id:"1-from-the-base-dashboard",children:"1. From the base dashboard"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"import data",src:a(70871).A+"",width:"2878",height:"1208"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"import from dashboard",src:a(23097).A+"",width:"1934",height:"1410"})}),"\n",(0,i.jsx)(t.h4,{id:"2-from-the-base-context-menu",children:"2. From the base context menu"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"import from sidebar",src:a(45477).A+"",width:"2880",height:"1800"})}),"\n",(0,i.jsx)(t.h3,{id:"importing-file",children:"Importing file"}),"\n",(0,i.jsx)(t.p,{children:"To import a file, follow the steps below:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["There are two ways to upload source file:",(0,i.jsx)(t.br,{}),"\n","(a). Upload from local directory: Click 'browse file' or drag and drop file.",(0,i.jsx)(t.br,{}),"\n","(b). Upload from URL: Specify the URL of the file."]}),"\n",(0,i.jsxs)(t.li,{children:["(",(0,i.jsx)(t.em,{children:"optional"}),") ",(0,i.jsx)(t.a,{href:"#advanced-settings",children:"Advance Settings"})]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"Import"})," button."]}),"\n",(0,i.jsxs)(t.li,{children:["(",(0,i.jsx)(t.em,{children:"optional"}),") Specify the table name. By default, the file name will be used as the table name."]}),"\n",(0,i.jsxs)(t.li,{children:["(",(0,i.jsx)(t.em,{children:"optional"}),") Select the columns from the CSV to be included in the table. By default, all fields are included."]}),"\n",(0,i.jsxs)(t.li,{children:["(",(0,i.jsx)(t.em,{children:"optional"}),") Modify the field name. By default, the field name is the same as the column name in the CSV."]}),"\n",(0,i.jsxs)(t.li,{children:["Click on ",(0,i.jsx)(t.code,{children:"Import"})," button to start importing the file."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"import data",src:a(20273).A+"",width:"1832",height:"1414"}),"\n",(0,i.jsx)(t.img,{alt:"import data",src:a(90106).A+"",width:"1838",height:"1414"})]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Multiple files can be imported at once."}),"\n",(0,i.jsx)(t.li,{children:"Supported file formats: CSV, Excel, JSON"}),"\n",(0,i.jsx)(t.li,{children:"Maximum file size: 5 MB"}),"\n",(0,i.jsxs)(t.li,{children:["All fields are imported by default as ",(0,i.jsx)(t.code,{children:"Single line text"}),". Field type as required can be changed after file is imported.\nBy default, the first field will be chosen as Display Value."]}),"\n"]})}),"\n",(0,i.jsx)(t.h3,{id:"advanced-settings",children:"Advanced Settings"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Use first record as header"}),": Enabled by default. If selected, the first record in the spreadsheet will be treated as the header record and its contents will be used as field names."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Import data"}),": Enabled by default. If selected, all data will be imported; otherwise, only the table will be created."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-articles",children:"Related articles"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tables/create-table",children:"Create a new table"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tables/import-data-into-existing-table",children:"Import data from Csv/Xlsx into existing table"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tables/actions-on-table#rename-table",children:"Rename a table"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tables/actions-on-table#duplicate-table",children:"Duplicate a table"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/tables/actions-on-table#delete-table",children:"Delete a table"})}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},70871:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/base-import-from-dashboard-1-0ccc1e3e8508c11049dd45647d6c0f91.png"},20273:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/import-stage-1-70332debf80dc34e2ae325f53796fd2c.png"},90106:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/import-stage-2-8f5a96c4a987dc76c44aefa684dbbdf5.png"},23097:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/table-import-from-dashboard-82d34dab62c3dc3735d42f24e03b6859.png"},45477:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/table-import-from-sidebar-53e3a9f2cefcbc24681b88541f56dab5.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>n});var i=a(96540);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);