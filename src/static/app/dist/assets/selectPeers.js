import{_ as I,q as g,s as R,E as A,$ as F,D as M,C as O,a0 as C,o,c as n,a as t,b as r,j as b,k as q,p as z,F as p,r as G,n as w,t as $,d as h,m as Y,f as H}from"./index.js";import{L as d}from"./localeText.js";const J={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll",ref:"selectPeersContainer"},K={class:"container d-flex h-100 w-100"},Q={class:"m-auto modal-dialog-centered dashboardModal",style:{width:"700px"}},W={class:"card rounded-3 shadow flex-grow-1"},X={class:"card-header bg-transparent d-flex align-items-center gap-2 p-4 flex-column pb-3"},Z={class:"mb-2 w-100 d-flex"},ee={class:"mb-0"},te={class:"d-flex w-100 align-items-center gap-2"},se={class:"d-flex gap-3"},le={class:"card-body px-4 flex-grow-1 d-flex gap-2 flex-column position-relative",ref:"card-body",style:{"overflow-y":"scroll"}},ae=["onClick","disabled","data-id"],oe={key:0},ne={class:"d-flex flex-column"},ie={class:"fw-bold"},re={class:"text-muted"},de={key:1,class:"ms-auto"},ue={key:0,class:"spinner-border spinner-border-sm",role:"status"},ce={class:"card-footer px-4 py-3 gap-2 d-flex align-items-center"},fe=["disabled"],be={key:0,class:"flex-grow-1 text-center"},ve=["disabled"],me={key:0,class:"flex-grow-1 text-center"},ge=["disabled"],pe={key:0,class:"flex-grow-1 text-center"},he=["disabled"],xe={__name:"selectPeers",props:{configurationPeers:Array},emits:["refresh","close"],setup(x,{emit:S}){const y=x,f=g(!1),u=g(!1),s=g([]),m=g(""),D=a=>{s.value.find(e=>e===a)?s.value=s.value.filter(e=>e!==a):s.value.push(a)},B=R(()=>f.value||u.value?y.configurationPeers.filter(a=>s.value.find(e=>e===a.id)):m.value.length>0?y.configurationPeers.filter(a=>a.id.includes(m.value)||a.name.includes(m.value)):y.configurationPeers);A(s,()=>{s.value.length===0&&(f.value=!1,u.value=!1)});const P=F(),N=M(),_=S,v=g(!1),T=()=>{v.value=!0,Y(`/api/deletePeers/${P.params.id}`,{peers:s.value},a=>{N.newMessage("Server",a.message,a.status?"success":"danger"),a.status&&(s.value=[],f.value=!1),_("refresh"),v.value=!1})},c=O({success:[],failed:[]}),L=C("card-body"),U=C("sp"),V=async()=>{u.value=!0;for(const a of s.value)L.value.scrollTo({top:U.value.find(e=>e.dataset.id===a).offsetTop-20,behavior:"smooth"}),await H("/api/downloadPeer/"+P.params.id,{id:a},e=>{if(e.status){const l=new Blob([e.data.file],{type:"text/plain"}),i=URL.createObjectURL(l),E=`${e.data.fileName}.conf`,k=document.createElement("a");k.href=i,k.download=E,k.click(),c.success.push(a)}else c.failed.push(a)})},j=()=>{c.success=[],c.failed=[],u.value=!1};return(a,e)=>(o(),n("div",J,[t("div",K,[t("div",Q,[t("div",W,[t("div",X,[t("div",Z,[t("h4",ee,[r(d,{t:"Select Peers"})]),t("button",{type:"button",class:"btn-close ms-auto",onClick:e[0]||(e[0]=l=>_("close"))})]),t("div",te,[t("div",se,[!u.value&&s.value.length!==x.configurationPeers.map(l=>l.id).length?(o(),n("a",{key:0,role:"button",onClick:e[1]||(e[1]=l=>s.value=x.configurationPeers.map(i=>i.id)),class:"text-decoration-none text-body"},[t("small",null,[e[9]||(e[9]=t("i",{class:"bi bi-check-all me-2"},null,-1)),r(d,{t:"Select All"})])])):b("",!0),s.value.length>0&&!u.value?(o(),n("a",{key:1,role:"button",class:"text-decoration-none text-body",onClick:e[2]||(e[2]=l=>s.value=[])},[t("small",null,[e[10]||(e[10]=t("i",{class:"bi bi-x-circle-fill me-2"},null,-1)),r(d,{t:"Clear Selection"})])])):b("",!0)]),e[11]||(e[11]=t("label",{class:"ms-auto",for:"selectPeersSearchInput"},[t("i",{class:"bi bi-search"})],-1)),q(t("input",{class:"form-control form-control-sm rounded-3","onUpdate:modelValue":e[3]||(e[3]=l=>m.value=l),id:"selectPeersSearchInput",style:{width:"200px !important"},type:"text"},null,512),[[z,m.value]])])]),t("div",le,[(o(!0),n(p,null,G(B.value,l=>(o(),n("button",{type:"button",class:w(["btn w-100 peerBtn text-start rounded-3 d-flex align-items-center gap-3",{active:s.value.find(i=>i===l.id)}]),onClick:i=>D(l.id),key:l.id,disabled:f.value||u.value,ref_for:!0,ref:"sp","data-id":l.id},[u.value?b("",!0):(o(),n("span",oe,[t("i",{class:w(["bi",[s.value.find(i=>i===l.id)?"bi-check-circle-fill":"bi-circle"]])},null,2)])),t("span",ne,[t("small",ie,$(l.name?l.name:"Untitled Peer"),1),t("small",re,[t("samp",null,$(l.id),1)])]),u.value?(o(),n("span",de,[!c.success.find(i=>i===l.id)&&!c.failed.find(i=>i===l.id)?(o(),n("span",ue)):(o(),n("i",{key:1,class:w(["bi",[c.failed.find(i=>i===l.id)?"bi-x-circle-fill":"bi-check-circle-fill"]])},null,2))])):b("",!0)],10,ae))),128))],512),t("div",ce,[!f.value&&!u.value?(o(),n(p,{key:0},[t("button",{class:"btn bg-primary-subtle text-primary-emphasis border-primary-subtle rounded-3",disabled:s.value.length===0||v.value,onClick:e[4]||(e[4]=l=>V())},e[12]||(e[12]=[t("i",{class:"bi bi-download"},null,-1)]),8,fe),s.value.length>0?(o(),n("span",be,[e[13]||(e[13]=t("i",{class:"bi bi-check-circle-fill me-2"},null,-1)),r(d,{t:s.value.length+" Peer"+(s.value.length>1?"s":"")},null,8,["t"])])):b("",!0),t("button",{class:"btn bg-danger-subtle text-danger-emphasis border-danger-subtle ms-auto rounded-3",onClick:e[5]||(e[5]=l=>f.value=!0),disabled:s.value.length===0||v.value},e[14]||(e[14]=[t("i",{class:"bi bi-trash"},null,-1)]),8,ve)],64)):u.value?(o(),n(p,{key:1},[c.failed.length+c.success.length<s.value.length?(o(),n("strong",me,[r(d,{t:"Downloading"}),e[15]||(e[15]=h()),r(d,{t:s.value.length+" Peer"+(s.value.length>1?"s":"")},null,8,["t"]),e[16]||(e[16]=h("... "))])):(o(),n(p,{key:1},[t("strong",null,[r(d,{t:"Download Finished"})]),t("button",{onClick:e[6]||(e[6]=l=>j()),class:"btn bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle rounded-3 ms-auto"},[r(d,{t:"Done"})])],64))],64)):f.value?(o(),n(p,{key:2},[t("button",{class:"btn btn-danger rounded-3",disabled:s.value.length===0||v.value,onClick:e[7]||(e[7]=l=>T())},[r(d,{t:"Yes"})],8,ge),s.value.length>0?(o(),n("strong",pe,[r(d,{t:"Are you sure to delete"}),e[17]||(e[17]=h()),r(d,{t:s.value.length+" Peer"+(s.value.length>1?"s":"")},null,8,["t"]),e[18]||(e[18]=h("? "))])):b("",!0),t("button",{class:"btn bg-secondary-subtle text-secondary-emphasis border border-secondary-subtle ms-auto rounded-3",disabled:s.value.length===0||v.value,onClick:e[8]||(e[8]=l=>f.value=!1)},[r(d,{t:"No"})],8,he)],64)):b("",!0)])])])])],512))}},we=I(xe,[["__scopeId","data-v-177407c1"]]);export{we as default};
