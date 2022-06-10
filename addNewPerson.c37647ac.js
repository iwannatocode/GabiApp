var J=Object.defineProperty,W=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var Q=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(e,a,i)=>a in e?J(e,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[a]=i,x=(e,a)=>{for(var i in a||(a={}))H.call(a,i)&&T(e,i,a[i]);if(Q)for(var i of Q(a))Z.call(a,i)&&T(e,i,a[i]);return e},B=(e,a)=>W(e,Y(a));import{c as O,u as ee,d as ae,Q as te,b as oe,h as L,j as M}from"./QBtn.1c3f8a7f.js";import{u as ne,a as se}from"./use-dark.db5f63dc.js";import{o as ie,u as le,b as re}from"./data2.2d837d49.js";import{a as ue,j as de,g as ce}from"./use-key-composition.131c46c4.js";import{h as _,r as K,c as S,g as X,a9 as R,J as w,P as me,Q as fe,o as ge,n as ve,p as _e,L as be,_ as I,m as b,S as k,v as h,t as c,s as U,X as pe,Y as he,V as qe,W as ye,ae as j,q as A,af as Pe,T as De,y as E}from"./index.9002723e.js";import{u as xe}from"./use-quasar.723be78b.js";import{Q as N}from"./QInput.8cedd062.js";const Se=_("svg",{key:"svg",class:"q-radio__bg absolute non-selectable",viewBox:"0 0 24 24","aria-hidden":"true"},[_("path",{d:"M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"}),_("path",{class:"q-radio__check",d:"M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"})]);var F=O({name:"QRadio",props:B(x(x(x({},ne),ee),ue),{modelValue:{required:!0},val:{required:!0},label:String,leftLabel:Boolean,checkedIcon:String,uncheckedIcon:String,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]}),emits:["update:modelValue"],setup(e,{slots:a,emit:i}){const{proxy:p}=X(),n=se(e,p.$q),l=ae(e,ie),o=K(null),{refocusTargetEl:r,refocusTarget:u}=le(e,o),f=S(()=>R(e.modelValue)===R(e.val)),C=S(()=>"q-radio cursor-pointer no-outline row inline no-wrap items-center"+(e.disable===!0?" disabled":"")+(n.value===!0?" q-radio--dark":"")+(e.dense===!0?" q-radio--dense":"")+(e.leftLabel===!0?" reverse":"")),q=S(()=>{const t=e.color!==void 0&&(e.keepColor===!0||f.value===!0)?` text-${e.color}`:"";return`q-radio__inner relative-position q-radio__inner--${f.value===!0?"truthy":"falsy"}${t}`}),V=S(()=>(f.value===!0?e.checkedIcon:e.uncheckedIcon)||null),s=S(()=>e.disable===!0?-1:e.tabindex||0),d=S(()=>{const t={type:"radio"};return e.name!==void 0&&Object.assign(t,{"^checked":f.value===!0?"checked":void 0,name:e.name,value:e.val}),t}),y=de(d);function P(t){t!==void 0&&(w(t),u(t)),e.disable!==!0&&f.value!==!0&&i("update:modelValue",e.val,t)}function D(t){(t.keyCode===13||t.keyCode===32)&&w(t)}function g(t){(t.keyCode===13||t.keyCode===32)&&P(t)}return Object.assign(p,{set:P}),()=>{const t=V.value!==null?[_("div",{key:"icon",class:"q-radio__icon-container absolute-full flex flex-center no-wrap"},[_(te,{class:"q-radio__icon",name:V.value})])]:[Se];e.disable!==!0&&y(t,"unshift"," q-radio__native q-ma-none q-pa-none");const v=[_("div",{class:q.value,style:l.value},t)];r.value!==null&&v.push(r.value);const m=e.label!==void 0?oe(a.default,[e.label]):L(a.default);return m!==void 0&&v.push(_("div",{class:"q-radio__label q-anchor--skip"},m)),_("div",{ref:o,class:C.value,tabindex:s.value,role:"radio","aria-label":e.label,"aria-checked":f.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:P,onKeydown:D,onKeyup:g},v)}}}),$=O({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validation-success","validation-error"],setup(e,{slots:a,emit:i}){const p=X(),n=K(null);let l=0;const o=[];function r(s){const d=[],y=typeof s=="boolean"?s:e.noErrorFocus!==!0,P=++l,D=(g,t)=>{i("validation-"+(g===!0?"success":"error"),t)};for(let g=0;g<o.length;g++){const t=o[g],v=t.validate();if(typeof v.then=="function")d.push(v.then(m=>({valid:m,comp:t}),m=>({valid:!1,comp:t,err:m})));else if(v!==!0){if(e.greedy===!1)return D(!1,t),y===!0&&typeof t.focus=="function"&&t.focus(),Promise.resolve(!1);d.push({valid:!1,comp:t})}}return d.length===0?(D(!0),Promise.resolve(!0)):Promise.all(d).then(g=>{const t=g.filter(G=>G.valid!==!0);if(t.length===0)return P===l&&D(!0),!0;const{valid:v,comp:m,err:z}=t[0];return P===l&&(z!==void 0&&console.error(z),D(!1,m),y===!0&&v!==!0&&typeof m.focus=="function"&&m.focus()),!1})}function u(){l++,o.forEach(s=>{typeof s.resetValidation=="function"&&s.resetValidation()})}function f(s){s!==void 0&&w(s);const d=l+1;r().then(y=>{d===l&&y===!0&&(e.onSubmit!==void 0?i("submit",s):s!==void 0&&s.target!==void 0&&typeof s.target.submit=="function"&&s.target.submit())})}function C(s){s!==void 0&&w(s),i("reset"),ve(()=>{u(),e.autofocus===!0&&e.noResetFocus!==!0&&q()})}function q(){ce(()=>{if(n.value===null)return;const s=n.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"),d=>d.tabIndex>-1);s!=null&&s.focus({preventScroll:!0})})}_e(be,{bindComponent(s){o.push(s)},unbindComponent(s){const d=o.indexOf(s);d>-1&&o.splice(d,1)}});let V=!1;return me(()=>{V=!0}),fe(()=>{V===!0&&e.autofocus===!0&&q()}),ge(()=>{e.autofocus===!0&&q()}),Object.assign(p.proxy,{validate:r,resetValidation:u,submit:f,reset:C,focus:q,getValidationComponents:()=>o}),()=>_("form",{class:"q-form",ref:n,onSubmit:f,onReset:C},L(a.default))}});const Ve={props:["name","age"],emits:["update:name","update:age","changePage"],methods:{onSubmit(e){this.$emit("changePage","secondPage")},updateName(e){this.$emit("update:name",e)},updateAge(e){this.$emit("update:age",e)}}},ke={class:"formCont"},Ce={class:"q-pa-lg q-mx-auto myFormStyleClass bg-light-green-1",style:{}},we={class:"flex justify-end"};function Be(e,a,i,p,n,l){return b(),k("div",ke,[h("div",Ce,[c($,{onSubmit:l.onSubmit,class:"q-gutter-md"},{default:U(()=>[c(N,{modelValue:i.name,"onUpdate:modelValue":a[0]||(a[0]=o=>l.updateName(o)),filled:"",label:"Name *",hint:"Name and surname","lazy-rules":"",rules:[o=>o&&o.length>0||"Please type something"]},null,8,["modelValue","rules"]),c(N,{modelValue:i.age,"onUpdate:modelValue":a[1]||(a[1]=o=>l.updateAge(o)),filled:"",type:"number",label:"Age *","lazy-rules":"",rules:[o=>o!==null&&o!==""||"Please type your age",o=>o>0&&o<100||"Please type a real age"]},null,8,["modelValue","rules"]),h("div",we,[c(M,{push:"",label:"Siguiente",type:"submit",color:"brown-6"})])]),_:1},8,["onSubmit"])])])}var Ae=I(Ve,[["render",Be],["__scopeId","data-v-2715a504"]]);const Fe={props:["cont","items"],emits:["addBioquimicData","changePage"],data(){return{bioquimicData:re.rows,formData:[]}},methods:{onSubmit(e){this.$emit("addBioquimicData",this.formData),this.$emit("changePage","thirdPage")}}},Ne={class:"formCont"},Ie={class:"q-pa-md q-pt-lg q-mx-auto myFormStyleClass bg-light-green-1"},Ue={class:"q-gutter-md flex flex-center"},ze={class:"q-pa-lg q-mt-md relative-position"};function Qe(e,a,i,p,n,l){return b(),k("div",Ne,[h("div",Ie,[c($,{onSubmit:l.onSubmit,class:""},{default:U(()=>[h("div",Ue,[(b(!0),k(pe,null,he(i.items,o=>(b(),k("div",{key:o},[c(N,{class:"myInput",filled:"",step:.01,modelValue:n.formData[o-1],"onUpdate:modelValue":r=>n.formData[o-1]=r,type:"number",label:n.bioquimicData[o-1+i.cont].name,"lazy-rules":"",rules:[r=>r!==null&&r!==""||"Por favor introduce un valor valido",r=>r>0||"Por favor introduce un valor valido"]},null,8,["step","modelValue","onUpdate:modelValue","label","rules"])]))),128))]),h("div",ze,[c(M,{class:"absolute-center",label:"Siguiente",type:"submit",color:"brown-6"})])]),_:1},8,["onSubmit"])])])}var Te=I(Fe,[["render",Qe]]);const Re={components:{"person-form":Ae,"bioquimic-form":Te},data(){return{page:"firstPage",newDataPerson:{name:"",age:null,bioquimicData:[],$q:xe()}}},computed:x({},qe("userData",["getAllUsers"])),methods:B(x({},ye("userData",["pushNewUser","pushNewDate"])),{changePage(e){this.page=e},addBioquimicData(e){this.newDataPerson.bioquimicData=[...this.newDataPerson.bioquimicData,...e]},goToTable(){this.pushNewUser(this.newDataPerson);let e=Date();this.pushNewDate(e);let a=this.getAllUsers;this.$q.localStorage.set("bioquimicAppUsers",a),this.$q.localStorage.set("bioquimicAppDate",e),this.$router.replace({name:"table",params:{userName:this.newDataPerson.name}})}})},je={class:"q-pa-md q-mt-lg"},Ee={class:"q-gutter-y-sm flex flex-center"};function Oe(e,a,i,p,n,l){const o=E("person-form"),r=E("bioquimic-form");return b(),k("div",null,[h("div",je,[h("div",Ee,[c(F,{modelValue:n.page,"onUpdate:modelValue":a[0]||(a[0]=u=>n.page=u),val:"firstPage",color:"red-5",size:"sm"},null,8,["modelValue"]),c(F,{modelValue:n.page,"onUpdate:modelValue":a[1]||(a[1]=u=>n.page=u),val:"secondPage",size:"sm",color:"orange-5",class:j(n.page=="firstPage"?"disable":"")},null,8,["modelValue","class"]),c(F,{modelValue:n.page,"onUpdate:modelValue":a[2]||(a[2]=u=>n.page=u),val:"thirdPage",size:"sm",color:"green-5",class:j(n.page=="firstPage"||n.page=="secondPage"?"disable":"")},null,8,["modelValue","class"])])]),c(De,{mode:"out-in",name:"custom-classes","enter-active-class":"animate__animated animate__flipInX animate__fast","leave-active-class":"animate__animated animate__bounceOut animate__fast"},{default:U(()=>[n.page=="firstPage"?(b(),A(o,{key:0,name:n.newDataPerson.name,"onUpdate:name":a[3]||(a[3]=u=>n.newDataPerson.name=u),age:n.newDataPerson.age,"onUpdate:age":a[4]||(a[4]=u=>n.newDataPerson.age=u),onChangePage:l.changePage},null,8,["name","age","onChangePage"])):n.page=="secondPage"?(b(),A(r,{onAddBioquimicData:l.addBioquimicData,onChangePage:l.changePage,cont:0,items:9,key:"1"},null,8,["onAddBioquimicData","onChangePage"])):n.page=="thirdPage"?(b(),A(r,{onAddBioquimicData:l.addBioquimicData,onChangePage:l.goToTable,cont:9,items:9,key:"2"},null,8,["onAddBioquimicData","onChangePage"])):Pe("",!0)]),_:1})])}var Ye=I(Re,[["render",Oe]]);export{Ye as default};
