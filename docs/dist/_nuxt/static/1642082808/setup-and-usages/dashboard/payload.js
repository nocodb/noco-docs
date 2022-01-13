__NUXT_JSONP__("/setup-and-usages/dashboard", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{slug:"dashboard",description:q,title:q,position:10,category:"Usage",menuTitle:q,toc:[{id:u,depth:v,text:w},{id:x,depth:v,text:y},{id:z,depth:r,text:A},{id:B,depth:r,text:C},{id:D,depth:r,text:E}],body:{type:"root",children:[{type:b,tag:F,props:{id:u},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#setup-your-first-super-admin",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you have started NocoDB, you can visit the dashboard via "},{type:b,tag:e,props:{},children:[{type:a,value:"example.com\u002Fdashboard"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Let's Begin"}]},{type:a,value:" button to sign up.\n"},{type:b,tag:f,props:{src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597128-f88df6e5-7625-4208-9817-68e9303410ff.png",width:"75%"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enter your work email and your password."}]},{type:a,value:c},{type:b,tag:"alert",props:{},children:[{type:a,value:"\n  Your password has at least 8 letters with one uppercase, one number and one special letter\n"}]},{type:a,value:c},{type:b,tag:f,props:{src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597144-0343b5ca-c7ca-47a4-926d-4e8df2f8c161.png",width:o},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you start your application without specifying "},{type:b,tag:e,props:{},children:[{type:a,value:"NC_DB"}]},{type:a,value:". A local SQLite will be created in root folder. Your data will be stored there."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you are using Docker, it is recommended to mount "},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fusr\u002Fapp\u002Fdata\u002F"}]},{type:a,value:" for persistent volume (since "},{type:b,tag:e,props:{},children:[{type:a,value:"v0.10.6"}]},{type:a,value:"), otherwise your data will be lost after recreating the container."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"docker run -d -p 8080:8080 --name foo -v \u002Flocal\u002Fpath:\u002Fusr\u002Fapp\u002Fdata\u002F nocodb\u002Fnocodb:latest\n"}]}]}]},{type:a,value:c},{type:b,tag:F,props:{id:x},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#initialize-your-first-project",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you have logged into NocoDB, you should see "},{type:b,tag:e,props:{},children:[{type:a,value:"My Projects"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:p,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597182-b74cadb4-e165-417e-9e95-9a3cb7dce8e5.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To create a project, you can click "},{type:b,tag:e,props:{},children:[{type:a,value:"New Project"}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:f,props:{src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F86527202\u002F144373314-9146e855-0791-4815-a03f-303e5ffb2a63.png",width:o},children:[]},{type:a,value:c},{type:b,tag:t,props:{id:z},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#creating-empty-project",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Create"}]},{type:a,value:", you need to specify the project name and API type. A local SQLite will be used.\n"},{type:b,tag:f,props:{src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597259-b9552c71-d13b-463c-abc2-0f3be31627b2.png",width:o},children:[]}]},{type:a,value:c},{type:b,tag:t,props:{id:B},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#connecting-to-external-database",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Create By Connecting To An external Datbase"}]},{type:a,value:", you need to specify the project name, API type, and other database parameters."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:p,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597279-c1722d8b-c885-4e9e-9e94-44711102af20.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Currently it supports MySQL, Postgres, MSSQL and SQLite."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:p,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597320-fd6b19a9-ed3e-4f4a-80b7-880a79a54a11.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also configure associated SSL & advanced parameters."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:p,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597342-0c61ab15-a112-4269-8f30-78455fa09081.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Test Database Connection"}]},{type:a,value:" to see if the connection can be established or not."}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"NocoDB create's a new "},{type:b,tag:"strong",props:{},children:[{type:a,value:"empty database"}]},{type:a,value:" with specified parameters, if the database doesn't exist."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:D},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#creating-project-from-excel",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:m},{type:b,tag:e,props:{},children:[{type:a,value:"Create Project from Excel"}]},{type:a,value:", you can either upload\u002F drag and drop Excel file (OR) specify Excel file URL"}]},{type:a,value:c},{type:b,tag:f,props:{src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F86527202\u002F144373863-7ced9315-a70b-4746-9295-325e463dc110.png",width:o},children:[]},{type:a,value:"  \n"},{type:b,tag:d,props:{},children:[{type:a,value:"Supported file formats"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Xls"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Xlsx"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Xlsm"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Ods"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Ots"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A local SQLite will be used."}]}]},dir:"\u002Fen\u002Fsetup-and-usages",path:"\u002Fen\u002Fsetup-and-usages\u002Fdashboard",extension:".md",createdAt:G,updatedAt:G,to:"\u002Fsetup-and-usages\u002Fdashboard"},prev:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"},next:{slug:"tables",title:"Table Operations",to:"\u002Fsetup-and-usages\u002Ftables"}}],fetch:{},mutations:[]}}("text","element","\n","p","code","img","a","true",-1,"span","icon","icon-link","Click ","li","60%","image","Dashboard",3,".","h3","setup-your-first-super-admin",2,"Setup your first super admin","initialize-your-first-project","Initialize your first project","creating-empty-project","Creating empty project","connecting-to-external-database","Connecting to external database","creating-project-from-excel","Creating project from Excel","h2","2022-01-13T14:05:56.193Z")));