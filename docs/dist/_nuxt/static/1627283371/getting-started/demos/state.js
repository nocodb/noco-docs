window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1627283371",layout:"default",error:e,state:{categories:{en:{"Getting started":[{slug:"index",title:"NocoDB Documentation",category:b,menuTitle:"Introduction",to:c},{slug:"installation",title:f,category:b,menuTitle:f,to:"\u002Fgetting-started\u002Finstallation"},{slug:"environment-variables",title:g,category:b,menuTitle:g,to:"\u002Fgetting-started\u002Fenvironment-variables"},{slug:"demos",title:h,category:b,menuTitle:h,to:i}],"Setup and Usages":[{slug:"nocodb-dashboard",title:j,category:a,menuTitle:j,to:"\u002Fsetup-and-usages\u002Fnocodb-dashboard"},{slug:"table-and-column-creation",title:"Table & Columns",category:a,menuTitle:"Table and Columns",to:"\u002Fsetup-and-usages\u002Ftable-and-column-creation"},{slug:"abstract-types",title:k,category:a,menuTitle:k,to:"\u002Fsetup-and-usages\u002Fabstract-types"},{slug:"audit",title:l,category:a,menuTitle:l,to:"\u002Fsetup-and-usages\u002Faudit"},{slug:"api-webhooks",title:m,category:a,menuTitle:m,to:"\u002Fsetup-and-usages\u002Fapi-webhooks"},{slug:"apis-access",title:n,category:a,menuTitle:n,to:"\u002Fsetup-and-usages\u002Fapis-access"},{slug:"meta-management",title:"Meta Management",category:a,menuTitle:"Meta Managements",to:"\u002Fsetup-and-usages\u002Fmeta-management"}],"Developer Resources":[{slug:"rest-apis",title:o,category:p,menuTitle:o,to:"\u002Fdeveloper-resources\u002Frest-apis"},{slug:"graphql-apis",title:q,category:p,menuTitle:q,to:"\u002Fdeveloper-resources\u002Fgraphql-apis"}],FAQ:[{slug:"faqs",title:r,category:"FAQ",menuTitle:r,to:"\u002Ffaqs"}],Community:[{slug:"releases",title:"Releases",category:"Community",to:"\u002Freleases"}]}},releases:[{name:"0.10.6 - Feature and Bug fix release",date:"2021-07-18T12:22:48Z",body:"\u003Cul\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Bug: Unexpected character &quot;}&quot; in M2M relation \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F349\"\u003E#349\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: APIs related to M2M columns become undefined in Swagger \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F348\"\u003E#348\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: Missing M2M column result in Swagger API Docs \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F347\"\u003E#347\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Bug: failed to execute the auto-generated function after setting the column as PK \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F346\"\u003E#346\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: Can not synchronize the table list \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F342\"\u003E#342\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Feature : Bulk add users. \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F300\"\u003E#300\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] could nocodb consider use dual licence? \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F243\"\u003E#243\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Error: Cannot find module &#39;jsonfile&#39; \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F212\"\u003E#212\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Docker Volume for App #351 \u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"Bug fix release ",date:"2021-07-13T11:06:27Z",body:"\u003Cul\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Bug: Unexpected M2M columns being created \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F338\"\u003E#338\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Missing filtering logic in M2M \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F337\"\u003E#337\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Bug: Failed to select UUID with SpecificDBType \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F332\"\u003E#332\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Feature Request: Use Postgres JSON type to store attachements \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F193\"\u003E#193\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"Link to another record",date:"2021-07-11T14:42:32Z",body:"\u003Ch1 id=\"features-rocketrocketrocketrocket\"\u003EFeatures :rocket::rocket::rocket::rocket:\u003C\u002Fh1\u003E\n\u003Ch2 id=\"many-to-many-relations-fire\"\u003EMany to many relations :fire:\u003C\u002Fh2\u003E\n\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003E\u003C\u002Fth\u003E\n\u003Cth\u003EMySQL\u003C\u002Fth\u003E\n\u003Cth\u003EMSSQL\u003C\u002Fth\u003E\n\u003Cth\u003EPostgreSQL\u003C\u002Fth\u003E\n\u003Cth\u003ESQLite\u003C\u002Fth\u003E\n\u003Cth\u003EMariaDB\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\u003Ctr\u003E\n\u003Ctd\u003EREST\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003EGraphQL\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n\u003Ch2 id=\"has-many-relations-fire\"\u003EHas many relations :fire:\u003C\u002Fh2\u003E\n\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003E\u003C\u002Fth\u003E\n\u003Cth\u003EMySQL\u003C\u002Fth\u003E\n\u003Cth\u003EMSSQL\u003C\u002Fth\u003E\n\u003Cth\u003EPostgreSQL\u003C\u002Fth\u003E\n\u003Cth\u003ESQLite\u003C\u002Fth\u003E\n\u003Cth\u003EMariaDB\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\u003Ctr\u003E\n\u003Ctd\u003EREST\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003EGraphQL\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n\u003Ch2 id=\"spreadsheet-firefire\"\u003ESpreadsheet :fire::fire:\u003C\u002Fh2\u003E\n\u003Ctable\u003E\n  \u003Cthead\u003E\n    \u003Ctr\u003E\n      \u003Cth\u003E\u003C\u002Fth\u003E\n      \u003Cth colspan=4\u003ESchema\u003C\u002Fth\u003E\n    \u003Cth colspan=5\u003EDATA\u003C\u002Fth\u003E\n  \u003Cth colspan=4\u003ENESTED DATA FORM\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\n\u003Ctr\u003E\n\u003Ctd\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003ECreate\u003C\u002Ftd\u003E\n\u003Ctd\u003ERead\u003C\u002Ftd\u003E\n\u003Ctd\u003EUpdate\u003C\u002Ftd\u003E\n\u003Ctd\u003EDelete\u003C\u002Ftd\u003E\n\u003Ctd\u003EList\u003C\u002Ftd\u003E\n\u003Ctd\u003ECreate\u003C\u002Ftd\u003E\n\u003Ctd\u003EUpdate\u003C\u002Ftd\u003E\n\u003Ctd\u003EDelete\u003C\u002Ftd\u003E\n\u003Ctd\u003EUnlink\u003C\u002Ftd\u003E\n\u003Ctd\u003ECreate\u003C\u002Ftd\u003E\n\u003Ctd\u003EUpdate\u003C\u002Ftd\u003E\n\u003Ctd\u003EDelete\u003C\u002Ftd\u003E\n\u003Ctd\u003EUnlink\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003EHasMany\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003EBelongsTo\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003EManyToMany\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003Ctd\u003ENA\u003C\u002Ftd\u003E\n\u003Ctd\u003E:white_check_mark:\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\n\u003C\u002Ftable\u003E\n\n\n\u003Ch1 id=\"fixes\"\u003EFixes\u003C\u002Fh1\u003E\n\u003Cul\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] i18n translation question  \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F328\"\u003E#328\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Calendar\u002FKanban\u002FGantt views? \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F327\"\u003E#327\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E][\u003Cstrong\u003Egraphql\u003C\u002Fstrong\u003E] Unable to create new colums in graphql project \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F322\"\u003E#322\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] [question] How do you create Charts from NocoBb data ? \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F316\"\u003E#316\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] graphql: Can&#39;t reload view data \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F315\"\u003E#315\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] No Headers\u002FAuth section \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F314\"\u003E#314\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Bug : Https scheme missing in swagger  \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F311\"\u003E#311\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Condition based automation doesn&#39;t work \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F309\"\u003E#309\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Editor group can&#39;t attach files while creating a new row \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F308\"\u003E#308\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Bug: fail to test &amp; upload attachment to S3 \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F307\"\u003E#307\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Error when adding columns of certain types (MySQL) \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F302\"\u003E#302\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] feature: add params in Automations referencing cell values \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F296\"\u003E#296\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Filter feature issue \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F295\"\u003E#295\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eneeds more info\u003C\u002Fstrong\u003E] Deleting of table gives error. \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F294\"\u003E#294\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] xc-token - After deleting the token from backend admin, it&#39;s still working with the deleted token (it has to be invalid) \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F291\"\u003E#291\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Audit Log - DELETE is not right now recording... \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F290\"\u003E#290\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Swagger UI doesn&#39;t use NC_PUBLIC_URL \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F288\"\u003E#288\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] User invite email issues \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F287\"\u003E#287\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Large tables fail to load \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F283\"\u003E#283\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Why is initEmail commented out? \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F278\"\u003E#278\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Table List is not refreshing and removing deleted table list when table is deleted \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F276\"\u003E#276\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] &quot;Email must be valid&quot; error for valid email with a four-character top-level domain \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F267\"\u003E#267\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] how to use token for graphql? \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F266\"\u003E#266\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Docker-compose script fails to launch \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F265\"\u003E#265\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Failed to connect backend if hosting frontend and backend separately \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F264\"\u003E#264\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] &#39;This spreadsheet is connected to an SQLite DB&#39; alarm while using mysql \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F263\"\u003E#263\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Not able to build through npm install \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F259\"\u003E#259\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] could not run nocodb from latest (0.9.25) docker \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F258\"\u003E#258\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Add confirm dialog for project delete \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F255\"\u003E#255\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Docker failing on Apple with M1 chip \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F249\"\u003E#249\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] css: in the graphql client tab the resource bar is cropped \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F246\"\u003E#246\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Confusing &quot;Sign up&quot; button loading state \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F241\"\u003E#241\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Ebug\u003C\u002Fstrong\u003E] Server doesn&#39;t restart if incorrect endpoint is entered in the minio settings. \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F238\"\u003E#238\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Feature : Make row data available in API Webhook \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F237\"\u003E#237\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Issue: &quot;expensive&quot; filter on the front end \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F229\"\u003E#229\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug : Postgres : UUID field with gen_random_uuid() is failing. \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F227\"\u003E#227\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Postgres: can only access public schema \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F226\"\u003E#226\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] README.md uses an image link with an absolute path \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F225\"\u003E#225\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: Renaming a ForeignField causes not showing the table \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F224\"\u003E#224\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] &#39;nodemon&#39; is not recognized as an internal or external command, operable program or batch file.  \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F222\"\u003E#222\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] DockerFile ENV admin_user \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F221\"\u003E#221\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Building on Windows 0.9.19 \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F220\"\u003E#220\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Not all type of attachments will open \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F219\"\u003E#219\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug\u002FFeature Request \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F218\"\u003E#218\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] \u003Ccode\u003Ehost\u003C\u002Fcode\u003E networking &quot;shouldn&#39;t&quot; work \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F216\"\u003E#216\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: Navbar button focus  \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F211\"\u003E#211\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: when searching a query, \u003Ccode\u003Ecan&#39;t access property &quot;dt&quot;, col is undefined\u003C\u002Fcode\u003E. Even though the field is selected correctly \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F210\"\u003E#210\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] docker 0.9.16 - postgres 11 - create project upper lower case issue \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F203\"\u003E#203\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] App store configure plugins - Saving without required fields \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F199\"\u003E#199\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: SingleSelect does not render dropdown \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F198\"\u003E#198\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Configuring Heroku 1-click install, improve documentation &quot;Cannot GET \u002F&quot; error \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F197\"\u003E#197\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Ports and reverse proxy \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F191\"\u003E#191\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Support multiple Postgres schemas \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F187\"\u003E#187\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: Plus Email Address Not Accepted \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F185\"\u003E#185\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eenhancement\u003C\u002Fstrong\u003E] Build Docker image for ARM, ARM64 (M1) \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F183\"\u003E#183\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Feature request : add support for JDBC \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F180\"\u003E#180\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Main project site wobble \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F176\"\u003E#176\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Feature request: Make hotjar tracking Optin \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F175\"\u003E#175\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Email validation for superadmin signup is too restrictive \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F173\"\u003E#173\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Feature: Disable the screensaver \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F171\"\u003E#171\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Hide &quot;Preview as&quot; to low-privilege users \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F170\"\u003E#170\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Question: How to view API endpoints? \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F166\"\u003E#166\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Bug: Type set does not exist \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F165\"\u003E#165\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Server does not start, error installing mysql \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F164\"\u003E#164\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Redshift Support \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F163\"\u003E#163\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003E[\u003Cstrong\u003Eclosed\u003C\u002Fstrong\u003E] Unable to run nocodb with postgres RDS \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u002Fissues\u002F156\"\u003E#156\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n"},{name:"0.9",date:"2021-05-27T06:36:37Z",body:"\u003Ch1 id=\"hey-everybody-hey-everybody-👋-👋\"\u003EHey Everybody, Hey Everybody 👋 👋\u003C\u002Fh1\u003E\n\u003Cp\u003EWe are thrilled to open source NocoDB today.\u003C\u002Fp\u003E\n\u003Cp\u003ENocoDB is an open source Airtable alternative.\u003C\u002Fp\u003E\n\u003Cp\u003EGithub : \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cp\u003ENocoDB works by connecting to any relational database and transforming them into a smart spreadsheet interface! This allows you to build no-code applications collaboratively with teams. NocoDB currently works with MySQL, PostgreSQL, Microsoft SQL Server, SQLite, Amazon Aurora &amp; MariaDB databases.\u003C\u002Fp\u003E\n\u003Cp\u003EAlso NocoDB&#39;s app store allows you to build business workflows on views with combination of Slack, Microsoft Teams, Discord, Twilio, Whatsapp, Email &amp; any 3rd party APIs too. Plus NocoDB provides programmatic access to APIs so that you can build integrations with Zapier \u002F Integromat and custom applications too.\u003C\u002Fp\u003E\n\u003Ch1 id=\"features-\"\u003EFEATURES :\u003C\u002Fh1\u003E\n\u003Ch2 id=\"rich-spreadsheet-interface-\"\u003ERich Spreadsheet Interface :\u003C\u002Fh2\u003E\n\u003Cp\u003E⚡ Sort, search, filter, hide columns with ease\n⚡ Create Views : Grid, Gallery, Kanban, Gantt, Form\n⚡ Share Views : public &amp; password protected\n⚡ Personal &amp; locked Views\n⚡ Upload images to cells (Works with S3, Minio, GCP, Azure &amp; many more)!!\n⚡ Roles : Owner, Creator, Editor, Commenter, Viewer, Commenter, Custom.\n⚡ Access Control : Fine-grained access control even to column level.\n⚡ API tokens to integrate with Zapier &amp; Integromat.\u003C\u002Fp\u003E\n\u003Ch2 id=\"automations--app-store-\"\u003EAutomations &amp; App store :\u003C\u002Fh2\u003E\n\u003Cp\u003E⚡ Chat : Microsoft Teams, Slack, Discord, Mattermost\n⚡ Email : SMTP, SES, Mailchimp\n⚡ SMS : Twilio\n⚡ Whatsapp\n⚡ Any 3rd Party APIs\u003C\u002Fp\u003E\n\u003Ch2 id=\"programmatic-api-access-via-\"\u003EProgrammatic API access via :\u003C\u002Fh2\u003E\n\u003Cp\u003E⚡ REST APIs (Swagger)\n⚡ GraphQL APIs.\n⚡ Includes JWT Authentication &amp; Social Auth\u003C\u002Fp\u003E\n\u003Cp\u003EComing Soon : Page designer, Mobile Apps, Amazing++ things.\u003C\u002Fp\u003E\n\u003Cp\u003EFollow our roadmap on Github : Star us \u002F watch us \u002F fork us\u003C\u002Fp\u003E\n\u003Chr\u003E\n\u003Ch1 id=\"🎯--why-we-building-this-\"\u003E🎯  Why we building this ?\u003C\u002Fh1\u003E\n\u003Cp\u003EMost internet businesses equip themselves with either spreadsheet or a database to solve their business needs. Spreadsheets are used by a Billion+ humans collaboratively every single day. However, we are way off working at similar speeds on databases which are way more powerful tools when it comes to computing. Attempts to solve this with SaaS offerings has meant horrible access controls, vendor lockin, data lockin, abrupt price changes &amp; most importantly a glass ceiling on what&#39;s possible in future.\u003C\u002Fp\u003E\n\u003Ch1 id=\"❤️---our-mission-\"\u003E❤️   Our Mission :\u003C\u002Fh1\u003E\n\u003Cp\u003EOur mission is to provide the most powerful no-code interface for databases which is open source to every single internet business in the world. This would not only democratise access to a powerful computing tool but also bring forth a billion+ people who will have radical tinkering-and-building abilities on internet.\u003C\u002Fp\u003E\n\u003Chr\u003E\n\u003Ch1 id=\"🔦--also-how-this-all-began-\"\u003E🔦  Also how this all began ..\u003C\u002Fh1\u003E\n\u003Cp\u003EWe open sourced two API solutions before NocoDB :\n⚡ A no-code REST APIs generator for any MySQL DB. ~200,000 Docker pulls. This was a hobby project &amp; had no GUI. 📈\n⚡ A low-code REST-GraphQL APIs generator for any database with GUI. Used by 100s of companies. Including fortune 500s &amp; publicly trading companies. 📈\u003C\u002Fp\u003E\n\u003Cp\u003EThe thing that surprised us the most was that even non-developers started using our API products &amp; rooting for us. 🚀 🚀  Whilst everybody loved instant API access to databases, it was slow-and-painful for them to build UI and collaborate with their teams. 💔 💔 ... This made us to radically rethink &amp; combine the power of our 2 API products then transform them into something better.\u003C\u002Fp\u003E\n\u003Chr\u003E\n\u003Cp\u003E💊  And.. There is.. One last thing.. this makes it insanely good :\u003C\u002Fp\u003E\n\u003Cp\u003ENocoDB can be run from a single node.js file with just SIX lines of code in it! This minimalism means NocoDB runs even on the smallest of servers. Not just AWS, DigitalOcean, Heroku but also in A2Hosting &amp; similar.\u003C\u002Fp\u003E\n\u003Cp\u003EHope you loved it. ❤️\u003C\u002Fp\u003E\n\u003Chr\u003E\n\u003Ch1 id=\"also-please-join-our-community-at-\"\u003EAlso please join our community at :\u003C\u002Fh1\u003E\n\u003Cp\u003E📣   Github : \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fnocodb\u002Fnocodb\u003C\u002Fa\u003E\n📣   Discord : \u003Ca target=\"_blank\" href=\"https:\u002F\u002Fdiscord.gg\u002F5RgZmkW\"\u003Ehttps:\u002F\u002Fdiscord.gg\u002F5RgZmkW\u003C\u002Fa\u003E\n📣   Twitter : \u003Ca target=\"_blank\" href=\"https:\u002F\u002Ftwitter.com\u002Fnocodb\"\u003Ehttps:\u002F\u002Ftwitter.com\u002Fnocodb\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EWould love to hear your usecases &amp; feedbacks. 🙌\u003C\u002Fp\u003E\n\u003Cp\u003EHappy Tinkering,\nTeam NocoDB\u003C\u002Fp\u003E\n"},{name:"0.4.9",date:"2018-08-09T11:05:47Z",body:s},{name:"0.4.8",date:"2018-07-21T17:51:11Z",body:s},{name:t,date:"2018-05-20T12:52:23Z",body:"\u003Cp\u003EFix #33 \nPull requests for supporting sql port number\nOther minor fixes\u003C\u002Fp\u003E\n"},{name:t,date:"2018-02-26T15:09:27Z",body:"\u003Cp\u003E#24: While joining two tables if some columns have same name then I am not able to select all column names \u003C\u002Fp\u003E\n\u003Cp\u003E#20 change container port to 80 and make xmysql response on any request\u003C\u002Fp\u003E\n\u003Cp\u003EFix : Use process.memoryUsage() in \u002F_health.\u003C\u002Fp\u003E\n"},{name:"v0.4.2",date:"2018-01-06T17:07:42Z",body:"\u003Cp\u003EIssues:\n#14 : _health and _version apis\n#17 : Listen to different IP address on host machine\u003C\u002Fp\u003E\n\u003Cp\u003EPull request:\nTo fix handling of _p and _size when _p = 0\u003C\u002Fp\u003E\n"}],settings:{title:"NocoDB",defaultDir:"packages\u002Fnoco-docs",defaultBranch:"master",filled:d,slug:"settings",url:"https:\u002F\u002Fdocs.nocodb.com",logo:{light:u,dark:u},github:"nocodb\u002Fnocodb",twitter:"@nocodb",dir:c,path:"\u002Fsettings",extension:".json",createdAt:v,updatedAt:v,to:"\u002F\u002Fsettings"},menu:{open:false},i18n:{routeParams:{}}},serverRendered:d,routePath:i,config:{_app:{basePath:c,assetsPath:"\u002F_nuxt\u002F",cdnURL:e},content:{dbHash:"bfc22cfb"}},__i18n:{langs:{en:{search:{placeholder:"Search the docs (Press \"\u002F\" to focus)"},toc:{title:"On this page"},article:{github:"Edit this page on GitHub"}}}},colorMode:{preference:w,value:w,unknown:d}}}("Setup and Usages","Getting started","\u002F",true,null,"Installation","Environment Variables","Demos","\u002Fgetting-started\u002Fdemos","NocoDB Dashboard","Abstract Types","Audit","API Webhooks","APIs Access","REST APIs","Developer Resources","GraphQL APIs","FAQs",void 0,"Bug fixes","\u002Ffavicon-128.png","2021-07-26T07:08:18.528Z","system"));