__NUXT_JSONP__("/setup-and-usages/primary-key", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{document:{slug:"primary-key",description:q,title:q,position:575,category:"Product",menuTitle:q,toc:[{id:v,depth:l,text:w},{id:x,depth:l,text:y},{id:z,depth:l,text:A},{id:B,depth:l,text:C},{id:D,depth:l,text:E}],body:{type:"root",children:[{type:b,tag:m,props:{id:v},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#what-is-a-primary-key-",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"A primary key is a special database table column designated to uniquely identify each table record."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:x},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#what-is-the-use-of-primary-key-",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As it uniquely identifies an individual record of a table, it is used internally by NocoDB for all operations associated with a record"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:z},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#primary-key-in-nocodb",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Primary Key that gets defined \u002F used in NocoDB depends on how underlying table was created. Summary is captured below"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From UI, Create new table \u002F Import from Excel \u002F Import from CSV\n"},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"An "},{type:b,tag:e,props:{},children:[{type:a,value:"ID"}]},{type:a,value:" [datatype: Integer] system field created by default during table creation is used as primary key"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:r},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:" are inserted by default & can be omitted optionally; these fields can be deleted after table creation"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Connect to existing external database\n"},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Existing "},{type:b,tag:e,props:{},children:[{type:a,value:"primary key"}]},{type:a,value:" field defined for a table is retained as is; NocoDB doesn't insert a new ID field"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:r},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:F}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Import from Airtable\n"},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Airtable record ID is marked as primary key for imported records, and is mapped to field "},{type:b,tag:e,props:{},children:[{type:a,value:"ncRecordId"}]},{type:a,value:"  [datatype: varchar]"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If a new record is inserted after migration & if ncRecordId field was omitted during record insertion - auto generated string will be inserted by NocoDB"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Computed hash value for the entire record is stored in system field "},{type:b,tag:e,props:{},children:[{type:a,value:"ncRecordHash"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:r},{type:b,tag:e,props:{},children:[{type:a,value:s}]},{type:a,value:t},{type:b,tag:e,props:{},children:[{type:a,value:u}]},{type:a,value:F}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Create new table using SDK \u002F API\n"},{type:b,tag:o,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"No default primary key field is introduced by NocoDB. It has to be explicitly specified during table creation (using attribute "},{type:b,tag:e,props:{},children:[{type:a,value:"pk: true"}]},{type:a,value:")"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:B},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#what-if-primary-key-was-missing",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"It is possible to have a table without any primary key."}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"External database table can be created without primary key configuration."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"New table can be created using SDK \u002F API without primary key"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:"In such scenario's, new records can be created in NocoDB for this table, but records can't be updated or deleted [as there is now way for NocoDB to uniquely identify these records]"}]},{type:a,value:c},{type:b,tag:G,props:{id:"example--primary-key--optional-system-fields-during-new-table-creation"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#example--primary-key--optional-system-fields-during-new-table-creation",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Example : Primary Key & optional system fields during new table creation"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:b,tag:H,props:{alt:"Screenshot 2022-06-16 at 12 15 43 PM",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F86527202\u002F174010350-8610b9c1-a761-4bff-a53d-dc728df47e1b.png"},children:[]}]},{type:a,value:c},{type:b,tag:G,props:{id:"example--show-system-fields"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#example--show-system-fields",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"Example : Show System Fields"}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:b,tag:H,props:{alt:"Screenshot 2022-06-16 at 12 16 07 PM",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F86527202\u002F174010379-9e300d42-ad89-4653-afa2-f70fca407ca8.png"},children:[]}]},{type:a,value:c},{type:b,tag:m,props:{id:D},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#can-i-change-the-primary-key-to-another-column-within-tables-",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can't update Primary Key from NocoDB UI. You can reconfigure it at database level directly & trigger "},{type:b,tag:e,props:{},children:[{type:a,value:"metasync"}]},{type:a,value:" explicitly"}]},{type:a,value:c}]}]},dir:"\u002Fen\u002Fsetup-and-usages",path:"\u002Fen\u002Fsetup-and-usages\u002Fprimary-key",extension:".md",createdAt:I,updatedAt:I,to:"\u002Fsetup-and-usages\u002Fprimary-key"},prev:{slug:"formulas",title:"Formulas",to:"\u002Fsetup-and-usages\u002Fformulas"},next:{slug:"primary-value",title:"Primary value",to:"\u002Fsetup-and-usages\u002Fprimary-value"}}],fetch:{},mutations:[]}}("text","element","\n","li","code","a","true",-1,"span","icon","icon-link",2,"h2","ul","ol","p","Primary Key","Additional system fields ","created-at",", ","updated-at","what-is-a-primary-key-","What is a Primary Key ?","what-is-the-use-of-primary-key-","What is the use of Primary Key ?","primary-key-in-nocodb","Primary Key in NocoDB","what-if-primary-key-was-missing","What if Primary Key was missing?","can-i-change-the-primary-key-to-another-column-within-tables-","Can I change the Primary Key to another column within tables ?"," are not inserted by default","h4","img","2022-06-28T08:03:31.073Z")));