import{S as p,a as b}from"./schedulePeerJob.js";import{_ as h,W as u,l as m,e as i,o as s,c as a,a as e,b as r,w as _,F as v,r as f,g as J,j as g,T as x}from"./index.js";import{L as w}from"./localeText.js";import"./vue-datepicker.js";import"./dayjs.min.js";const P={name:"peerJobs",setup(){return{store:u()}},props:{selectedPeer:Object},components:{LocaleText:w,SchedulePeerJob:p,ScheduleDropdown:b},data(){return{}},methods:{deleteJob(d){this.selectedPeer.jobs=this.selectedPeer.jobs.filter(t=>t.JobID!==d.JobID)},addJob(){this.selectedPeer.jobs.unshift(JSON.parse(JSON.stringify({JobID:m().toString(),Configuration:this.selectedPeer.configuration.Name,Peer:this.selectedPeer.id,Field:this.store.PeerScheduleJobs.dropdowns.Field[0].value,Operator:this.store.PeerScheduleJobs.dropdowns.Operator[0].value,Value:"",CreationDate:"",ExpireDate:"",Action:this.store.PeerScheduleJobs.dropdowns.Action[0].value})))}}},S={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0 overflow-y-scroll"},y={class:"container d-flex h-100 w-100"},$={class:"m-auto modal-dialog-centered dashboardModal"},C={class:"card rounded-3 shadow",style:{width:"700px"}},D={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-2"},j={class:"mb-0 fw-normal"},k={class:"card-body px-4 pb-4 pt-2 position-relative"},T={class:"d-flex align-items-center mb-3"},N={class:"card shadow-sm",key:"none",style:{height:"153px"}},I={class:"card-body text-muted text-center d-flex"},L={class:"m-auto"};function O(d,t,B,F,V,A){const n=i("LocaleText"),l=i("SchedulePeerJob");return s(),a("div",S,[e("div",y,[e("div",$,[e("div",C,[e("div",D,[e("h4",j,[r(n,{t:"Schedule Jobs"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:t[0]||(t[0]=o=>this.$emit("close"))})]),e("div",k,[e("div",T,[e("button",{class:"btn bg-primary-subtle border-1 border-primary-subtle text-primary-emphasis rounded-3 shadow",onClick:t[1]||(t[1]=o=>this.addJob())},[t[3]||(t[3]=e("i",{class:"bi bi-plus-lg me-2"},null,-1)),r(n,{t:"Job"})])]),r(x,{name:"schedulePeerJobTransition",tag:"div",class:"position-relative"},{default:_(()=>[(s(!0),a(v,null,f(this.selectedPeer.jobs,(o,E)=>(s(),J(l,{onRefresh:t[2]||(t[2]=c=>this.$emit("refresh")),onDelete:c=>this.deleteJob(o),dropdowns:this.store.PeerScheduleJobs.dropdowns,key:o.JobID,pjob:o},null,8,["onDelete","dropdowns","pjob"]))),128)),this.selectedPeer.jobs.length===0?(s(),a("div",N,[e("div",I,[e("h6",L,[r(n,{t:"This peer does not have any job yet."})])])])):g("",!0)]),_:1})])])])])])}const z=h(P,[["render",O],["__scopeId","data-v-5bbdd42b"]]);export{z as default};
