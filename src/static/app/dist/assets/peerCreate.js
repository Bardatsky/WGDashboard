import{_ as b,o as n,c as r,a as e,b as o,k as p,p as u,n as h,e as d,D as g,W as y,v as I,G as L,w as C,F as S,r as P,d as K,t as x,T as E,j as f,f as F,m as G,g as k}from"./index.js";import{L as _}from"./localeText.js";import"./wireguard.js";const O={name:"nameInput",components:{LocaleText:_},props:{bulk:Boolean,data:Object,saving:Boolean}},R={for:"peer_name_textbox",class:"form-label"},j={class:"text-muted"},q=["disabled"];function W(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",{class:h({inactiveField:this.bulk})},[e("label",R,[e("small",j,[o(l,{t:"Name"})])]),p(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving||this.bulk,"onUpdate:modelValue":t[0]||(t[0]=a=>this.data.name=a),id:"peer_name_textbox",placeholder:""},null,8,q),[[u,this.data.name]])],2)}const J=b(O,[["render",W]]),z={name:"privatePublicKeyInput",components:{LocaleText:_},props:{data:Object,saving:Boolean,bulk:Boolean},setup(){const s=g(),t=y();return{dashboardStore:s,wgStore:t}},data(){return{keypair:{publicKey:"",privateKey:"",presharedKey:""},editKey:!1,error:!1}},methods:{genKeyPair(){this.editKey=!1,this.keypair=window.wireguard.generateKeypair(),this.data.private_key=this.keypair.privateKey,this.data.public_key=this.keypair.publicKey},testKey(s){return/^[A-Za-z0-9+/]{43}=?=?$/.test(s)},checkMatching(){try{this.keypair.privateKey&&this.wgStore.checkWGKeyLength(this.keypair.privateKey)&&(this.keypair.publicKey=window.wireguard.generatePublicKey(this.keypair.privateKey),window.wireguard.generatePublicKey(this.keypair.privateKey)!==this.keypair.publicKey?(this.error=!0,this.dashboardStore.newMessage("WGDashboard","Private key does not match with the public key","danger")):(this.data.private_key=this.keypair.privateKey,this.data.public_key=this.keypair.publicKey))}catch{this.error=!0,this.data.private_key="",this.data.public_key=""}}},mounted(){this.genKeyPair()},watch:{keypair:{deep:!0,handler(){this.error=!1,this.checkMatching()}}}},H={for:"peer_private_key_textbox",class:"form-label"},Q={class:"text-muted"},Y={class:"input-group"},Z=["disabled"],X=["disabled"],ee={class:"d-flex"},te={for:"public_key",class:"form-label"},se={class:"text-muted"},ae={class:"form-check form-switch ms-auto"},le=["disabled"],oe={class:"form-check-label",for:"enablePublicKeyEdit"},ie=["disabled"];function ne(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",{class:h(["d-flex gap-2 flex-column",{inactiveField:this.bulk}])},[e("div",null,[e("label",H,[e("small",Q,[o(l,{t:"Private Key"}),e("code",null,[o(l,{t:"(Required for QR Code and Download)"})])])]),e("div",Y,[p(e("input",{type:"text",class:h(["form-control form-control-sm rounded-start-3",{"is-invalid":this.error}]),"onUpdate:modelValue":t[0]||(t[0]=a=>this.keypair.privateKey=a),disabled:!this.editKey||this.bulk,onBlur:t[1]||(t[1]=a=>this.checkMatching()),id:"peer_private_key_textbox"},null,42,Z),[[u,this.keypair.privateKey]]),e("button",{class:"btn btn-outline-info btn-sm rounded-end-3",onClick:t[2]||(t[2]=a=>this.genKeyPair()),disabled:this.bulk,type:"button",id:"button-addon2"},t[6]||(t[6]=[e("i",{class:"bi bi-arrow-repeat"},null,-1)]),8,X)])]),e("div",null,[e("div",ee,[e("label",te,[e("small",se,[o(l,{t:"Public Key"}),e("code",null,[o(l,{t:"(Required)"})])])]),e("div",ae,[p(e("input",{class:"form-check-input",type:"checkbox",role:"switch",disabled:this.bulk,id:"enablePublicKeyEdit","onUpdate:modelValue":t[3]||(t[3]=a=>this.editKey=a)},null,8,le),[[I,this.editKey]]),e("label",oe,[e("small",null,[o(l,{t:"Use your own Private and Public Key"})])])])]),p(e("input",{class:h(["form-control-sm form-control rounded-3",{"is-invalid":this.error}]),"onUpdate:modelValue":t[4]||(t[4]=a=>this.keypair.publicKey=a),onBlur:t[5]||(t[5]=a=>this.checkMatching()),disabled:!this.editKey||this.bulk,type:"text",id:"public_key"},null,42,ie),[[u,this.keypair.publicKey]])])],2)}const de=b(z,[["render",ne]]),re={name:"allowedIPsInput",components:{LocaleText:_},props:{data:Object,saving:Boolean,bulk:Boolean,availableIp:void 0},data(){return{allowedIp:[],availableIpSearchString:"",customAvailableIp:"",allowedIpFormatError:!1}},setup(){const s=y(),t=g();return{store:s,dashboardStore:t}},computed:{searchAvailableIps(){return this.availableIpSearchString?this.availableIp.filter(s=>s.includes(this.availableIpSearchString)&&!this.data.allowed_ips.includes(s)):this.availableIp.filter(s=>!this.data.allowed_ips.includes(s))},inputGetLocale(){return L("Enter IP Address/CIDR")}},methods:{addAllowedIp(s){return this.store.checkCIDR(s)?(this.data.allowed_ips.push(s),this.customAvailableIp="",!0):(this.allowedIpFormatError=!0,this.dashboardStore.newMessage("WGDashboard","Allowed IPs is invalid","danger"),!1)}},watch:{customAvailableIp(){this.allowedIpFormatError=!1},availableIp(){this.availableIp!==void 0&&this.availableIp.length>0&&this.addAllowedIp(this.availableIp[0])}},mounted(){}},ce={for:"peer_allowed_ip_textbox",class:"form-label"},pe={class:"text-muted"},ue=["onClick"],he={class:"d-flex gap-2 align-items-center"},be={class:"input-group"},_e=["placeholder","disabled"],me=["disabled"],ve={class:"text-muted"},fe={class:"dropdown flex-grow-1"},ke=["disabled"],ge={key:0,class:"dropdown-menu mt-2 shadow w-100 dropdown-menu-end rounded-3",style:{"overflow-y":"scroll","max-height":"270px",width:"300px !important"}},ye={class:"px-3 pb-2 pt-1 d-flex gap-3 align-items-center"},we=["onClick"],Ie={class:"me-auto"},xe={key:0},$e={class:"px-3 text-muted"};function Ae(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",{class:h({inactiveField:this.bulk})},[e("label",ce,[e("small",pe,[o(l,{t:"Allowed IPs"}),e("code",null,[o(l,{t:"(Required)"})])])]),e("div",{class:h(["d-flex gap-2 flex-wrap",{"mb-2":this.data.allowed_ips.length>0}])},[o(E,{name:"list"},{default:C(()=>[(n(!0),r(S,null,P(this.data.allowed_ips,(a,w)=>(n(),r("span",{class:"badge rounded-pill text-bg-success",key:a},[K(x(a)+" ",1),e("a",{role:"button",onClick:$=>this.data.allowed_ips.splice(w,1)},t[3]||(t[3]=[e("i",{class:"bi bi-x-circle-fill ms-1"},null,-1)]),8,ue)]))),128))]),_:1})],2),e("div",he,[e("div",be,[p(e("input",{type:"text",class:h(["form-control form-control-sm rounded-start-3",{"is-invalid":this.allowedIpFormatError}]),placeholder:this.inputGetLocale,"onUpdate:modelValue":t[0]||(t[0]=a=>i.customAvailableIp=a),disabled:c.bulk},null,10,_e),[[u,i.customAvailableIp]]),e("button",{class:"btn btn-outline-success btn-sm rounded-end-3",disabled:c.bulk||!this.customAvailableIp,onClick:t[1]||(t[1]=a=>this.addAllowedIp(this.customAvailableIp)),type:"button",id:"button-addon2"},t[4]||(t[4]=[e("i",{class:"bi bi-plus-lg"},null,-1)]),8,me)]),e("small",ve,[o(l,{t:"or"})]),e("div",fe,[e("button",{class:"btn btn-outline-secondary btn-sm dropdown-toggle rounded-3 w-100",disabled:!c.availableIp||c.bulk,"data-bs-auto-close":"outside",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[t[5]||(t[5]=e("i",{class:"bi bi-filter-circle me-2"},null,-1)),o(l,{t:"Pick Available IP"})],8,ke),this.availableIp?(n(),r("ul",ge,[e("li",null,[e("div",ye,[t[6]||(t[6]=e("label",{for:"availableIpSearchString",class:"text-muted"},[e("i",{class:"bi bi-search"})],-1)),p(e("input",{id:"availableIpSearchString",class:"form-control form-control-sm rounded-3","onUpdate:modelValue":t[2]||(t[2]=a=>this.availableIpSearchString=a)},null,512),[[u,this.availableIpSearchString]])])]),(n(!0),r(S,null,P(this.searchAvailableIps,a=>(n(),r("li",null,[e("a",{class:"dropdown-item d-flex",role:"button",onClick:w=>this.addAllowedIp(a)},[e("span",Ie,[e("small",null,x(a),1)])],8,we)]))),256)),this.searchAvailableIps.length===0?(n(),r("li",xe,[e("small",$e,[o(l,{t:"No available IP containing"}),K(' "'+x(this.availableIpSearchString)+'"',1)])])):f("",!0)])):f("",!0)])])],2)}const Se=b(re,[["render",Ae],["__scopeId","data-v-6d5fc831"]]),Pe={name:"dnsInput",components:{LocaleText:_},props:{data:Object,saving:Boolean},data(){return{error:!1,dns:JSON.parse(JSON.stringify(this.data.DNS))}},setup(){const s=y(),t=g();return{store:s,dashboardStore:t}},methods:{checkDNS(){if(this.dns){let s=this.dns.split(",").map(t=>t.replaceAll(" ",""));for(let t in s)if(!this.store.regexCheckIP(s[t])){this.error||this.dashboardStore.newMessage("WGDashboard","DNS format is incorrect","danger"),this.error=!0,this.data.DNS="";return}this.error=!1,this.data.DNS=this.dns}}},watch:{dns(){this.checkDNS()}}},Ke={for:"peer_DNS_textbox",class:"form-label"},Le={class:"text-muted"},Ce=["disabled"];function De(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",null,[e("label",Ke,[e("small",Le,[o(l,{t:"DNS"})])]),p(e("input",{type:"text",class:h(["form-control form-control-sm rounded-3",{"is-invalid":this.error}]),disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.dns=a),id:"peer_DNS_textbox"},null,10,Ce),[[u,this.dns]])])}const Te=b(Pe,[["render",De]]),Be={name:"endpointAllowedIps",components:{LocaleText:_},props:{data:Object,saving:Boolean},setup(){const s=y(),t=g();return{store:s,dashboardStore:t}},data(){return{endpointAllowedIps:JSON.parse(JSON.stringify(this.data.endpoint_allowed_ip)),error:!1}},methods:{checkAllowedIP(){let s=this.endpointAllowedIps.split(",").map(t=>t.replaceAll(" ",""));for(let t in s)if(!this.store.checkCIDR(s[t])){this.error||this.dashboardStore.newMessage("WGDashboard","Endpoint Allowed IPs format is incorrect","danger"),this.data.endpoint_allowed_ip="",this.error=!0;return}this.error=!1,this.data.endpoint_allowed_ip=this.endpointAllowedIps}},watch:{endpointAllowedIps(){this.checkAllowedIP()}}},Ne={for:"peer_endpoint_allowed_ips",class:"form-label"},Ve={class:"text-muted"},Ue=["disabled"];function Me(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",null,[e("label",Ne,[e("small",Ve,[o(l,{t:"Endpoint Allowed IPs"}),e("code",null,[o(l,{t:"(Required)"})])])]),p(e("input",{type:"text",class:h(["form-control form-control-sm rounded-3",{"is-invalid":i.error}]),disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.endpointAllowedIps=a),onBlur:t[1]||(t[1]=a=>this.checkAllowedIP()),id:"peer_endpoint_allowed_ips"},null,42,Ue),[[u,this.endpointAllowedIps]])])}const Ee=b(Be,[["render",Me]]),Fe={name:"presharedKeyInput",components:{LocaleText:_},props:{data:Object,saving:Boolean},data(){return{enable:!1}},watch:{enable(){this.enable?this.data.preshared_key=window.wireguard.generateKeypair().presharedKey:this.data.preshared_key=""}}},Ge={class:"d-flex align-items-start"},Oe={for:"peer_preshared_key_textbox",class:"form-label"},Re={class:"text-muted"},je={class:"form-check form-switch ms-auto"},qe=["disabled"];function We(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",null,[e("div",Ge,[e("label",Oe,[e("small",Re,[o(l,{t:"Pre-Shared Key"})])]),e("div",je,[p(e("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[0]||(t[0]=a=>this.enable=a),id:"peer_preshared_key_switch"},null,512),[[I,this.enable]])])]),p(e("input",{type:"text",class:"form-control form-control-sm rounded-3",disabled:this.saving||!this.enable,"onUpdate:modelValue":t[1]||(t[1]=a=>this.data.preshared_key=a),id:"peer_preshared_key_textbox"},null,8,qe),[[u,this.data.preshared_key]])])}const Je=b(Fe,[["render",We]]),ze={name:"mtuInput",components:{LocaleText:_},props:{data:Object,saving:Boolean}},He={for:"peer_mtu",class:"form-label"},Qe={class:"text-muted"},Ye=["disabled"];function Ze(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",null,[e("label",He,[e("small",Qe,[o(l,{t:"MTU"})])]),p(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.data.mtu=a),min:"0",id:"peer_mtu"},null,8,Ye),[[u,this.data.mtu]])])}const Xe=b(ze,[["render",Ze]]),et={name:"persistentKeepAliveInput",components:{LocaleText:_},props:{data:Object,saving:Boolean}},tt={for:"peer_keep_alive",class:"form-label"},st={class:"text-muted"},at=["disabled"];function lt(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",null,[e("label",tt,[e("small",st,[o(l,{t:"Persistent Keepalive"})])]),p(e("input",{type:"number",class:"form-control form-control-sm rounded-3",disabled:this.saving,"onUpdate:modelValue":t[0]||(t[0]=a=>this.data.keepalive=a),id:"peer_keep_alive"},null,8,at),[[u,this.data.keepalive]])])}const ot=b(et,[["render",lt]]),it={name:"bulkAdd",components:{LocaleText:_},props:{saving:Boolean,data:Object,availableIp:void 0},computed:{bulkAddGetLocale(){return L("How many peers you want to add?")}}},nt={class:"form-check form-switch"},dt=["disabled"],rt={class:"form-check-label me-2",for:"bulk_add"},ct={class:"text-muted d-block"},pt={key:0,class:"form-group"},ut=["max","placeholder"],ht={class:"text-muted"};function bt(s,t,c,m,i,v){const l=d("LocaleText");return n(),r("div",null,[e("div",nt,[p(e("input",{class:"form-check-input",type:"checkbox",role:"switch",disabled:!this.availableIp,id:"bulk_add","onUpdate:modelValue":t[0]||(t[0]=a=>this.data.bulkAdd=a)},null,8,dt),[[I,this.data.bulkAdd]]),e("label",rt,[e("small",null,[e("strong",null,[o(l,{t:"Bulk Add"})])])])]),e("p",{class:h({"mb-0":!this.data.bulkAdd})},[e("small",ct,[o(l,{t:"By adding peers by bulk, each peer's name will be auto generated, and Allowed IP will be assign to the next available IP."})])],2),this.data.bulkAdd?(n(),r("div",pt,[p(e("input",{class:"form-control form-control-sm rounded-3 mb-1",type:"number",min:"1",max:this.availableIp.length,"onUpdate:modelValue":t[1]||(t[1]=a=>this.data.bulkAddAmount=a),placeholder:this.bulkAddGetLocale},null,8,ut),[[u,this.data.bulkAddAmount]]),e("small",ht,[o(l,{t:"You can add up to "+this.availableIp.length+" peers"},null,8,["t"])])])):f("",!0)])}const _t=b(it,[["render",bt]]),mt={name:"peerCreate",components:{LocaleText:_,BulkAdd:_t,PersistentKeepAliveInput:ot,MtuInput:Xe,PresharedKeyInput:Je,EndpointAllowedIps:Ee,DnsInput:Te,AllowedIPsInput:Se,PrivatePublicKeyInput:de,NameInput:J},data(){return{data:{bulkAdd:!1,bulkAddAmount:0,name:"",allowed_ips:[],private_key:"",public_key:"",DNS:this.dashboardStore.Configuration.Peers.peer_global_dns,endpoint_allowed_ip:this.dashboardStore.Configuration.Peers.peer_endpoint_allowed_ip,keepalive:parseInt(this.dashboardStore.Configuration.Peers.peer_keep_alive),mtu:parseInt(this.dashboardStore.Configuration.Peers.peer_mtu),preshared_key:"",preshared_key_bulkAdd:!1},availableIp:void 0,availableIpSearchString:"",saving:!1,allowedIpDropdown:void 0}},mounted(){F("/api/getAvailableIPs/"+this.$route.params.id,{},s=>{s.status&&(this.availableIp=s.data)})},setup(){const s=y(),t=g();return{store:s,dashboardStore:t}},methods:{peerCreate(){this.saving=!0,G("/api/addPeers/"+this.$route.params.id,this.data,s=>{s.status?(this.$router.push(`/configuration/${this.$route.params.id}/peers`),this.dashboardStore.newMessage("Server","Peer created successfully","success")):this.dashboardStore.newMessage("Server",s.message,"danger"),this.saving=!1})}},computed:{allRequireFieldsFilled(){let s=!0;return this.data.bulkAdd?(this.data.bulkAddAmount.length===0||this.data.bulkAddAmount>this.availableIp.length)&&(s=!1):["allowed_ips","private_key","public_key","endpoint_allowed_ip","keepalive","mtu"].forEach(c=>{this.data[c].length===0&&(s=!1)}),s}},watch:{bulkAdd(s){s||(this.data.bulkAddAmount="")},"data.bulkAddAmount"(){this.data.bulkAddAmount>this.availableIp.length&&(this.data.bulkAddAmount=this.availableIp.length)}}},vt={class:"container"},ft={class:"mb-4"},kt={class:"mb-5 d-flex align-items-center gap-4"},gt={class:"mb-0"},yt={class:"d-flex flex-column gap-2"},wt={class:"row gy-3"},It={key:0,class:"col-sm"},xt={class:"col-sm"},$t={class:"col-sm"},At={key:1,class:"col-12"},St={class:"form-check form-switch"},Pt={class:"form-check-label",for:"bullAdd_PresharedKey_Switch"},Kt={class:"fw-bold"},Lt={class:"d-flex mt-2"},Ct=["disabled"],Dt={key:0,class:"bi bi-plus-circle-fill me-2"};function Tt(s,t,c,m,i,v){const l=d("RouterLink"),a=d("LocaleText"),w=d("BulkAdd"),$=d("NameInput"),D=d("PrivatePublicKeyInput"),T=d("AllowedIPsInput"),B=d("EndpointAllowedIps"),N=d("DnsInput"),V=d("PresharedKeyInput"),U=d("MtuInput"),M=d("PersistentKeepAliveInput");return n(),r("div",vt,[e("div",ft,[e("div",kt,[o(l,{to:"peers",class:"btn btn-dark btn-brand p-2 shadow",style:{"border-radius":"100%"}},{default:C(()=>t[2]||(t[2]=[e("h2",{class:"mb-0",style:{"line-height":"0"}},[e("i",{class:"bi bi-arrow-left-circle"})],-1)])),_:1}),e("h2",gt,[o(a,{t:"Add Peers"})])])]),e("div",yt,[o(w,{saving:i.saving,data:this.data,availableIp:this.availableIp},null,8,["saving","data","availableIp"]),t[3]||(t[3]=e("hr",{class:"mb-0 mt-2"},null,-1)),this.data.bulkAdd?f("",!0):(n(),k($,{key:0,saving:i.saving,data:this.data},null,8,["saving","data"])),this.data.bulkAdd?f("",!0):(n(),k(D,{key:1,saving:i.saving,data:i.data},null,8,["saving","data"])),this.data.bulkAdd?f("",!0):(n(),k(T,{key:2,availableIp:this.availableIp,saving:i.saving,data:i.data},null,8,["availableIp","saving","data"])),o(B,{saving:i.saving,data:i.data},null,8,["saving","data"]),o(N,{saving:i.saving,data:i.data},null,8,["saving","data"]),t[4]||(t[4]=e("hr",{class:"mb-0 mt-2"},null,-1)),e("div",wt,[this.data.bulkAdd?f("",!0):(n(),r("div",It,[o(V,{saving:i.saving,data:i.data,bulk:this.data.bulkAdd},null,8,["saving","data","bulk"])])),e("div",xt,[o(U,{saving:i.saving,data:i.data},null,8,["saving","data"])]),e("div",$t,[o(M,{saving:i.saving,data:i.data},null,8,["saving","data"])]),this.data.bulkAdd?(n(),r("div",At,[e("div",St,[p(e("input",{class:"form-check-input",type:"checkbox",role:"switch","onUpdate:modelValue":t[0]||(t[0]=A=>this.data.preshared_key_bulkAdd=A),id:"bullAdd_PresharedKey_Switch",checked:""},null,512),[[I,this.data.preshared_key_bulkAdd]]),e("label",Pt,[e("small",Kt,[o(a,{t:"Pre-Shared Key"}),this.data.preshared_key_bulkAdd?(n(),k(a,{key:0,t:"Enabled"})):(n(),k(a,{key:1,t:"Disabled"}))])])])])):f("",!0)]),e("div",Lt,[e("button",{class:"ms-auto btn btn-dark btn-brand rounded-3 px-3 py-2 shadow",disabled:!this.allRequireFieldsFilled||this.saving,onClick:t[1]||(t[1]=A=>this.peerCreate())},[this.saving?f("",!0):(n(),r("i",Dt)),this.saving?(n(),k(a,{key:1,t:"Adding..."})):(n(),k(a,{key:2,t:"Add"}))],8,Ct)])])])}const Ut=b(mt,[["render",Tt],["__scopeId","data-v-17eb547c"]]);export{Ut as default};
